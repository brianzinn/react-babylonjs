import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { BinaryFileAssetTask } from '@babylonjs/core/Misc/assetsManager'
import { Particle } from '@babylonjs/core/Particles/particle'
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem'
import React, { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Engine, Scene, Task, TaskType, useAssetManager, useBeforeRender } from 'react-babylonjs'

// redeclaring array will force load the asset (not deep equality check on by reference)
const pointCloudAssets: Task[] = [
  {
    taskType: TaskType.Binary,
    url: '../../assets/kitti/000000.bin',
    name: 'Velodyne-kitt-dataset',
  },
]

const MyPCS = () => {
  const pcsRef = useRef<PointsCloudSystem>(null)
  const result = useAssetManager(pointCloudAssets)
  const [pcs, setPcs] = useState<PointsCloudSystem | null>(null)
  const [pcsMesh, setPcsMesh] = useState<Mesh | null>(null)

  useLayoutEffect(() => {
    if (pcsRef.current) {
      // only loaded after suspend returns
      setPcs(pcsRef.current)
    }
  }, [pcsRef])

  useEffect(() => {
    if (result && pcs) {
      const binaryFileAsset = result.tasks[0] as BinaryFileAssetTask
      const floats = new Float32Array(binaryFileAsset.data)
      const POINTS_PER_FLOAT = 4
      const numPoints = floats.length / POINTS_PER_FLOAT

      // particle is the current particle, the i-th one in the PCS and the s-th one in its group
      const particleFunc = (particle: Particle, i: number, s: number) => {
        // KITTI-formatted PCD
        const x = floats[POINTS_PER_FLOAT * i]
        const y = floats[POINTS_PER_FLOAT * i + 1]
        const z = floats[POINTS_PER_FLOAT * i + 2]
        // ignore the reflectance value
        // const r = floats[POINTS_PER_FLOAT * i + 3]
        particle.position = new Vector3(x, y, z)
        particle.color = Color4.FromColor3(Color3.White())
      }

      // NOTE: you can do with useRef/useState <pointsCloudSystem ... addPoints={[nbPoints, particleFunc]} />
      //       but you don't know WHEN the reconciler will commit those changes and add the points...
      pcs.addPoints(numPoints, particleFunc)
      pcs.buildMeshAsync().then((mesh) => {
        setPcsMesh(mesh)
      })
    }
  }, [result, pcs])

  return (
    <pointsCloudSystem ref={pcsRef} name="my-points-cloud" pointSize={2}>
      {pcsMesh && <mesh name="pcs" fromInstance={pcsMesh} position={Vector3.Zero()} />}
    </pointsCloudSystem>
  )
}

const MyFallback = () => {
  const boxRef = useRef<Mesh | null>(null)
  useBeforeRender((scene) => {
    if (boxRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime()

      const rpm = 10
      boxRef.current.rotation.x = Math.PI / 4
      boxRef.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  })

  return <box ref={boxRef} name="fallback" size={2} />
}

const UseAssetManager = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 2}
          radius={20}
        />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <Suspense fallback={<MyFallback />}>
          <MyPCS />
        </Suspense>
      </Scene>
    </Engine>
  </div>
)

export default UseAssetManager
