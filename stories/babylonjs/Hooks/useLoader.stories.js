import React, {useMemo} from 'react'
import { Engine, Scene, useBabylonScene, useLoader} from '../../../dist/react-babylonjs'
import { Mesh, Vector3 } from '@babylonjs/core'
import '../../style.css'

export default { title: 'Hooks' };

function WithPrimitive({position}) {
  const scene = useBabylonScene();

  // const mesh = useMemo(() => {
  //   const mesh = Mesh.CreateSphere('sphere', 16, 2);
  //   mesh.position = new Vector3(0, 2, 0);
  //   return mesh;
  // }, [])

  let url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF/Box.gltf';
  const [loaded, {meshes}] = useLoader(url);

  console.log(loaded, meshes)

  if (loaded && meshes.length > 1) {
    return <transformNode position={position}>
      <primitive object={meshes[1].clone()} position={new Vector3(0, 2, 0)}/>
    </transformNode>
  }
  return null;
}

export const UseLoader = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <WithPrimitive position={new Vector3(2, 0, 0)}/>
        <WithPrimitive position={new Vector3(-2, 0, 0)}/>
        <ground name='ground1' width={6} height={6} subdivisions={2} />
      </Scene>
    </Engine>
  </div>
)
