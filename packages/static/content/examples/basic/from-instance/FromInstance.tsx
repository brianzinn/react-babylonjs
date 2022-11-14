import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import { Nullable } from '@babylonjs/core/types'
import React, { FC, useMemo, useState } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

type MyMeshProps = {
  rotation: Vector3
}

const MyMesh: FC<MyMeshProps> = (props) => {
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null)
  const scene = useScene()
  useMemo(() => {
    console.log('creating a box with scene', scene)
    setMesh(MeshBuilder.CreateBox('test', { size: 1 }, scene))
  }, [])

  return (
    <>
      {mesh && (
        <mesh fromInstance={mesh} rotation={props.rotation} disposeInstanceOnUnmount>
          <standardMaterial
            name="boxmat"
            diffuseColor={Color3.Blue()}
            specularColor={Color3.Black()}
          />
        </mesh>
      )}
    </>
  )
}

export const FromInstance = () => {
  const [rotation, setRotation] = useState(new Vector3(0, 0, 0))
  const addRotation = () => {
    setRotation(() => new Vector3(0, rotation.y + Math.PI / 4, 0))
  }

  return (
    <div className="App">
      <button className="btn btn-primary mb-2" onClick={addRotation}>
        Rotate
      </button>
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
          <hemisphericLight name="light1" intensity={0.9} direction={Vector3.Down()} />
          <MyMesh rotation={rotation} />
        </Scene>
      </Engine>
    </div>
  )
}

export default FromInstance
