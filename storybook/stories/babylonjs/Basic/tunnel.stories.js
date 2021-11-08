import React, { useEffect, useRef, useState } from 'react';
import '@babylonjs/inspector';
import { Engine, Scene, useBeforeRender, createTunnel} from '../../../../dist/react-babylonjs';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import '../../style.css'

export default { title: 'Babylon Basic' };


/** 
 * A tunnel allows to render components of one renderer inside another.
 * I.e. babylonjs components normally need to live within Engine component.
 * A tunnel entrance allows to position components in a different renderer, such as ReactDOM
 * and move it to the tunnel exit, that must exist within Engine component.
 *
 * The nice thing is, even refs can be used outside of Engine context.
 * 
 * The createTunnel function creates a tunnel entrance and exit component.
 * The tunnel works one-directional. 
 * TunnelEntrance only accepts components that are allowed to live within the renderer of TunnelExit.
 * Multiple entrances and exits are possible.
 * 
 * If components need to be rendererd the other way around, a second Tunnel is needed.
 * 
 */
const {TunnelEntrance, TunnelExit} = createTunnel();

const rpm = 5;


const WithTunnel = ({uids})=>{
  const [_, setReady] = useState(false);
  const ref = useRef(null);
  useBeforeRender((scene) => {
    
    if (ref.current !== null) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      ref.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  })

  useEffect(() => {
    setReady(true);
  }, [ref.current])

  return <transformNode name="transform-node" ref={ref}>
            <TunnelExit uids={uids}/>
          </transformNode>
      
}


export const CreateTunnel = () => {

  /** ref to tunnel is possible */
  const ref = useRef(null)
  
  const [position, setPosition] = useState(1)

  useEffect(()=>{
    if(ref.current){
      ref.current.position.x = Math.abs(position-4);
    }
  },[position])

  return <div style={{ flex: 1, display: 'flex' }}>
        <button onClick={()=>setPosition(Math.abs(position-1))}>Set Position</button>
        {/** Multiple Tunnel Entrances */}
          <TunnelEntrance uid="hyperloop">
            <box name="box" ref={ref} position={new Vector3(0, position, 0)}>
              <standardMaterial name="mat" diffuseColor={Color3.Blue() } specularColor={Color3.Black()} />
            </box>
          </TunnelEntrance>
          <TunnelEntrance uid="subway">
            <box name="box" position={new Vector3(position, 0, 1)}>
              <standardMaterial name="mat" diffuseColor={Color3.Red() } specularColor={Color3.Black()} />
            </box>
          </TunnelEntrance>
          <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
          <Scene>
            <freeCamera name='camera1' position={new Vector3(0, 5, -10)}
              setTarget={[Vector3.Zero()]} />
              <WithTunnel uids={["subway"]}/>
              <transformNode name="node" position={new Vector3(5, 0, 0)}>
                <WithTunnel />
              </transformNode>
              <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            </Scene>
          </Engine>
  </div>
}
