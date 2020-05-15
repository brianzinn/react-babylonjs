import React, {useMemo} from 'react'
import { Engine, Scene, useBabylonScene} from '../../../dist/react-babylonjs'
import { Mesh, Vector3 } from '@babylonjs/core'
import '../../style.css'

export default { title: 'Babylon Basic' };

function WithPrimitive(props) {
  const scene = useBabylonScene();

  const mesh = useMemo(() => {
    const mesh = Mesh.CreateSphere('sphere', 16, 2);
    mesh.position = new Vector3(0, 2, 0);
    return mesh;
  }, [])


  return <transformNode position={new Vector3(2, 0, 0)}>
    <primitive object={mesh}/>
  </transformNode>
}

export const Primitive = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <WithPrimitive/>
        <ground name='ground1' width={6} height={6} subdivisions={2} />
      </Scene>
    </Engine>
  </div>
)
