import React, { Suspense, useRef, useContext, useMemo } from 'react';
import '@babylonjs/inspector';
import { Engine, Scene } from '../../../dist/react-babylonjs';
import { useBeforeRender } from 'babylonjs-hook';
import { TaskType, AssetManagerContextProvider, AssetManagerContext, useAssetManager } from 'react-babylonjs-loaders';
import { Vector3 } from '@babylonjs/core';
import { Control } from '@babylonjs/gui';
import '../../style.css';

export default { title: 'Models' };

const baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'

const modelAssetTasks = [
  { taskType: TaskType.Mesh, rootUrl: `${baseUrl}BoomBox/glTF/`, sceneFilename: 'BoomBox.gltf', name: 'boombox' },
  { taskType: TaskType.Mesh, rootUrl: `${baseUrl}Avocado/glTF/`, sceneFilename: 'Avocado.gltf', name: 'avocado' }
];

const progressHorizontalMargin = 0.02;
const progressVerticalMargin = 0.1;

const MyFallback = () => {
  const boxRef = useRef();
  const context = useContext(AssetManagerContext);
  console.log('context in fallback:', context);

  useBeforeRender((scene) => {
    if (boxRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      boxRef.current.hostInstance.rotation.x = Math.PI / 4;
      boxRef.current.hostInstance.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  })

  const eventData = context?.lastProgress?.eventData;
  const progress = {
    complete: (eventData === undefined) ? 0 : eventData.totalCount-eventData.remainingCount,
    total: (eventData === undefined) ? 2 : eventData.totalCount
  };

  return <>
    <adtFullscreenUi name='ui'>
        <rectangle name="rect-1" height={0.25} width={1} thickness={12} cornerRadius={24} background='#666666'>
            <rectangle height={0.7} verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}>
              <textBlock text='Loading Avocado and Boombox...' fontFamily="FontAwesome" fontStyle="bold" fontSize={200} color="white" />
            </rectangle>
            <rectangle name="background-rectangle" width={1} height={0.3} background={'#596877'} cornerRadius={10} thickness={4} verticalAlignment={Control.VERTICAL_ALIGNMENT_BOTTOM} >
              <container name="progress-container" horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT} width={1-progressHorizontalMargin} left={`${progressHorizontalMargin/2 * 100}%`} height={`${(1-progressVerticalMargin*2) * 100}%`} >
                <rectangle name="progress-rectangle" horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT} background='#7BC14E' cornerRadius={10} thickness={4} width={progress.complete / progress.total}></rectangle>
              </container>
              <textBlock
                text={`${(progress.complete/progress.total).toFixed(2)}%`}
                fontSize={48} fontFamily={'Arial'}
                color={(progress.complete/progress.total > 0.6) ? 'black' : 'white' /* temp hack */}
                verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
                horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_CENTER}
              />
            </rectangle>
        </rectangle>
    </adtFullscreenUi>
    <box ref={boxRef} name='fallback' size={2} />
    </>
}

const MyModels = () => {
  const result = useAssetManager(modelAssetTasks);

  useMemo(() => {
    console.log('Loaded Tasks', result);
    const boomboxTask = result.taskNameMap['boombox'];
    boomboxTask.loadedMeshes[0].position = new Vector3(1.5, 0.5, 0);
    boomboxTask.loadedMeshes[1].scaling = new Vector3(35, 35, 35);

    const avocadoTask = result.taskNameMap['avocado'];
    avocadoTask.loadedMeshes[0].position = new Vector3(-1.5, 0, 0);
    avocadoTask.loadedMeshes[1].scaling = new Vector3(20, 20, 20);
  });

  return null;
}

const MyScene = () => {
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera name='camera1' alpha={Math.PI / 2} beta={Math.PI / 2} radius={5.0} target={Vector3.Zero()} minZ={0.001} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <AssetManagerContextProvider>
          <Suspense fallback={<MyFallback />}>
            <MyModels />
          </Suspense>
        </AssetManagerContextProvider>
      </Scene>
    </Engine>
  )
}

export const ModelLoaderStory = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <MyScene />
  </div>
)

ModelLoaderStory.story = {
  name: '3D-Model loader'
}