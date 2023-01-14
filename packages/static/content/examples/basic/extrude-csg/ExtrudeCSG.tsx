import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { CSG } from '@babylonjs/core/Meshes/csg'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import * as Earcut from 'earcut'
import React, { FC, useCallback } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

//Polygon shape in XoZ plane
var starPath = [
  new Vector3(4, 0, -4),
  new Vector3(2, 0, 0),
  new Vector3(5, 0, 2),
  new Vector3(1, 0, 2),
  new Vector3(-5, 0, 5),
  new Vector3(-3, 0, 1),
  new Vector3(-4, 0, -4),
  new Vector3(-2, 0, -3),
  new Vector3(2, 0, -3),
]

//Holes in XoZ plane
var holes = [
  [new Vector3(1, 0, -1), new Vector3(1.5, 0, 0), new Vector3(1.4, 0, 1), new Vector3(0.5, 0, 1.5)],
  [
    new Vector3(0, 0, -2),
    new Vector3(0.5, 0, -1),
    new Vector3(0.4, 0, 0),
    new Vector3(-1.5, 0, 0.5),
  ],
]

const Shapes: FC = () => {
  const scene = useScene()
  console.log('scene', scene)
  const ref = useCallback(
    (node: Mesh) => {
      if (node && scene) {
        const csg = CSG.FromMesh(node)
        const sphere = MeshBuilder.CreateSphere(
          'circle',
          {
            diameter: 3,
          },
          scene
        )
        sphere.position.x -= 2
        let res = csg.subtract(CSG.FromMesh(sphere))

        let csgMeshMaterial = new StandardMaterial('material01', scene)
        csgMeshMaterial.diffuseColor = Color3.Yellow()
        csgMeshMaterial.specularColor = Color3.Black()
        let mesh = res.toMesh('base', csgMeshMaterial, scene, false)
        mesh.position.y += 4
        sphere.dispose()
      }
    },
    [scene]
  )

  return (
    <extrudePolygon
      ref={ref}
      name="wall"
      holes={holes}
      shape={starPath}
      depth={2}
      sideOrientation={Mesh.DOUBLESIDE}
      earcutInjection={Earcut}
    >
      <standardMaterial
        name="starMaterial"
        diffuseColor={Color3.Red()}
        specularColor={Color3.Black()}
      />
    </extrudePolygon>
  )
}

const ExtrudeShapesPlusCSG = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="camera1"
          alpha={(1 / 4) * Math.PI}
          beta={(1 / 4) * Math.PI}
          radius={20.0}
          target={Vector3.Zero()}
          minZ={0.001}
        />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <Shapes />
      </Scene>
    </Engine>
  </div>
)

export default ExtrudeShapesPlusCSG
