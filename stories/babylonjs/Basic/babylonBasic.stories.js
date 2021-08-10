import React, { useEffect, useRef } from 'react';
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '../../style.css'

export default { title: 'Babylon Basic' };

const rpm = 5;
const MovingBox = (props) => {
  // access Babylon Scene
  const scene = useScene();
  // access refs to Babylon objects in scene like DOM nodes
  const boxRef = useRef(null);

  // there is also a built-in hook called useBeforeRender that does will do this:
  useEffect(() => {
    if (boxRef.current) {
      const handler = scene.registerBeforeRender(() => {
        let deltaTimeInMillis = scene.getEngine().getDeltaTime();
        boxRef.current.rotation[props.rotationAxis] += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
      })
      return (() => {
        scene.unregisterBeforeRender(handler);
      })
    }
  }, [boxRef.current]);

  return (<box ref={boxRef} size={2} position={props.position}>
    <standardMaterial diffuseColor={props.color} specularColor={Color3.Black()} />
  </box>);
}

export const DefaultPlayground = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <MovingBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} rotationAxis='y' />
        <MovingBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} rotationAxis='x' />
      </Scene>
    </Engine>
  </div>
)
