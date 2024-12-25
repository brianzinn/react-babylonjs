import React, { Suspense, useContext, useEffect, useMemo, useRef } from 'react'

// import "@babylonjs/inspector";
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { MeshAssetTask } from '@babylonjs/core/Misc/assetsManager'
import '@babylonjs/loaders/glTF'
import {
  AssetManagerContext,
  AssetManagerContextProvider,
  Engine,
  Scene,
  Task,
  TaskType,
  useAssetManager,
  useBeforeRender,
} from 'react-babylonjs'

const baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'

const modelAssetTasks: Task[] = [
  {
    taskType: TaskType.Mesh,
    rootUrl: `${baseUrl}BoomBox/glTF/`,
    sceneFilename: 'BoomBox.gltf',
    name: 'boombox',
  },
  {
    taskType: TaskType.Mesh,
    rootUrl: `${baseUrl}Avocado/glTF/`,
    sceneFilename: 'Avocado.gltf',
    name: 'avocado',
  },
]

const MyFallback = () => {
  const boxRef = useRef<Mesh | null>(null)
  const context = useContext(AssetManagerContext)
  console.log('context in fallback:', context)

  useBeforeRender((scene) => {
    if (boxRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime()

      const rpm = 10
      boxRef.current.rotation.x = Math.PI / 4
      boxRef.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  })

  const eventData = context?.lastProgress?.eventData

  return (
    <>
      <adtFullscreenUi name="ui">
        <rectangle name="rect" height="50px" width="150px">
          <rectangle>
            {eventData !== undefined && (
              <textBlock
                text={`${eventData.totalCount - eventData.remainingCount}/${eventData.totalCount}`}
                fontStyle="bold"
                fontSize={20}
                color="white"
              />
            )}
            {eventData === undefined && (
              <textBlock text="0/2" fontStyle="bold" fontSize={20} color="white" />
            )}
          </rectangle>
        </rectangle>
      </adtFullscreenUi>
      <box ref={boxRef} name="fallback" size={2} />
    </>
  )
}

const MyModels = () => {
  const assetManagerResult = useAssetManager(modelAssetTasks)

  useEffect(() => {
    console.log('Loaded Tasks', assetManagerResult)
    const boomboxTask = assetManagerResult.taskNameMap['boombox'] as MeshAssetTask
    boomboxTask.loadedMeshes[0].position = new Vector3(2.5, 0, 0)
    boomboxTask.loadedMeshes[1].scaling = new Vector3(20, 20, 20)

    const avocadoTask = assetManagerResult.taskNameMap['avocado'] as MeshAssetTask
    avocadoTask.loadedMeshes[0].position = new Vector3(-2.5, 0, 0)
    avocadoTask.loadedMeshes[1].scaling = new Vector3(20, 20, 20)
  })

  return null
}

const MyScene = () => {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="camera1"
          alpha={Math.PI / 2}
          beta={Math.PI / 2}
          radius={9.0}
          target={Vector3.Zero()}
          minZ={0.001}
        />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <AssetManagerContextProvider>
          <Suspense fallback={<MyFallback />}>
            <MyModels />
          </Suspense>
        </AssetManagerContextProvider>
      </Scene>
    </Engine>
  )
}

const ModelLoaderStory = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <MyScene />
  </div>
)

export default ModelLoaderStory
