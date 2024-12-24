import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData'
import { Mesh } from '@babylonjs/core/Meshes/mesh'

import React, { FC, useState } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

type CustomMeshType = {
  name: string
  position: Vector3
  useWireframe: boolean
}

const CustomMesh: FC<CustomMeshType> = (props) => {
  const scene = useScene()

  const [customMesh] = useState(() => {
    const meshInstance = new Mesh(props.name, scene!)

    //Set arrays for positions and indices
    var positions = [-5, 2, -3, -7, -2, -3, -3, -2, -3, 5, 2, 3, 7, -2, 3, 3, -2, 3]
    var indices = [0, 1, 2, 3, 4, 5]
    var colors = [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1]

    //Empty array to contain calculated values
    var normals: number[] = []

    var vertexData = new VertexData()
    VertexData.ComputeNormals(positions, indices, normals)

    //Assign positions, indices and normals to vertexData
    vertexData.positions = positions
    vertexData.indices = indices
    vertexData.normals = normals
    vertexData.colors = colors

    //Apply vertexData to custom mesh
    vertexData.applyToMesh(meshInstance)

    return meshInstance
  })

  return (
    <mesh name="mesh" fromInstance={customMesh} disposeInstanceOnUnmount position={props.position}>
      <standardMaterial name={`${props.name}-mat`} wireframe={props.useWireframe} />
    </mesh>
  )
}

const CustomMeshes = () => {
  const [displayLast, setDisplayLast] = useState(true)
  const toggleDisplay = () => {
    setDisplayLast((cur) => !cur)
  }
  return (
    <>
      <div>
        <button className="btn btn-primary m-2" onClick={toggleDisplay}>
          Toggle Top Triangle Visibility
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
          <Scene>
            <arcRotateCamera
              name="camera1"
              target={Vector3.Zero()}
              alpha={Math.PI / 2}
              beta={Math.PI / 2}
              radius={20}
              lowerRadiusLimit={15}
              upperRadiusLimit={30}
            />
            <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
            <CustomMesh name="custom-0" position={new Vector3(0, 0, 0)} useWireframe={false} />
            <CustomMesh name="custom-2" position={new Vector3(0, 2, 0)} useWireframe={true} />
            {displayLast && (
              <CustomMesh name="custom-4" position={new Vector3(0, 4, 0)} useWireframe={false} />
            )}
          </Scene>
        </Engine>
      </div>
    </>
  )
}

export default CustomMeshes
