import React, { useState, useMemo } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'
import { Vector3, Color3, MeshBuilder } from '@babylonjs/core'
import '../../style.css'

export default { title: 'Babylon Basic' };

const MyMesh = (props) => {
  const [mesh, setMesh] = useState(null);
  const scene = useScene();
  useMemo(() => {
    console.log('creating a box with scene', scene);
    setMesh(MeshBuilder.CreateBox('test', { size: 1 }, scene));
  }, []);

  return (
    <>
      {mesh &&
        <mesh fromInstance={mesh} rotation={props.rotation} disposeInstanceOnUnmount>
          <standardMaterial name='boxmat' diffuseColor={Color3.Blue()} specularColor={Color3.Black()} />
        </mesh>
      }
    </>
  )
}

export const FromInstance = () => {
  const [rotation, setRotation] = useState(new Vector3(0, 0, 0));
  const addRotation = () => {
    setRotation((state) => new Vector3(0, rotation.y + Math.PI / 4, 0));
  };

  return (
    <div className="App">
      <button onClick={addRotation}>Rotate</button>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="arc"
            target={Vector3.Zero()}
            minZ={0.001}
            alpha={-Math.PI / 2}
            beta={Math.PI / 1.2}
            radius={4}
          />
          <hemisphericLight
            name="light1"
            intensity={0.9}
            direction={Vector3.Down()}
          />
          <MyMesh rotation={rotation} />
        </Scene>
      </Engine>
    </div>
  );
}
