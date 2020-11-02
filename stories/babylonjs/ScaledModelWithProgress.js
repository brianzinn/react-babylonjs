import React, { Suspense, useContext, useEffect } from 'react'
import { useSceneLoader, SceneLoaderContextProvider, SceneLoaderContext } from 'react-babylonjs-loaders';
import { SceneContext } from 'babylonjs-hook';

import { Vector3, Matrix, Color3 } from '@babylonjs/core/Maths/math'

// try with later versions of RHL to get hooks working here:
// const [loadProgress, updateProgress] = useState(0)
const MyModel = (props) => {

  const sceneContext = useContext(SceneContext);
  console.log('scene context in MyModel:', sceneContext);

  const sceneLoaderResults = useSceneLoader(props.rootUrl, props.sceneFilename, undefined, {
    scaleToDimension: props.scaleTo,
    reportProgress: true
  })

  console.log('model loaded', sceneLoaderResults);

  useEffect(() => {
    return () => {
      console.log('disposing model.');
      sceneLoaderResults.dispose();
    }
  })

  return null;
}

const ProgressFallback = (props) => {

  const sceneContext = useContext(SceneContext);
  console.log('scene context:', sceneContext);

  const sceneLoaderContext = useContext(SceneLoaderContext);

  let loadProgress = 0;
  if (sceneLoaderContext.lastProgress) {
    const progress = sceneLoaderContext.lastProgress;
    loadProgress = progress.lengthComputable
      ? progress.loaded / progress.total
      : progress.loaded / 10000; // TODO: provide option to input file size for proper loading.
  }

  console.log('scene loader context:', loadProgress);

  return (
    <transformNode name='load-mesh' rotation={props.rotation} position={props.center}>
      <box key='progress' name='boxProgress' height={props.scaleTo / 15} width={props.scaleTo} depth={props.scaleTo / 30} scaling={new Vector3(loadProgress, 1, 1)}
        position={new Vector3(props.scaleTo / 2, 0, props.scaleTo / 60)}
        setPivotMatrix={[Matrix.Translation(-props.scaleTo, 0, 0)]}
        setPreTransformMatrix={[Matrix.Translation(-props.scaleTo / 2, 0, 0)]}>
        <standardMaterial name='progress-mat' diffuseColor={props.progressBarColor} specularColor={Color3.Black()} />
      </box>
      <box key='back' name='boxBack' height={props.scaleTo / 15} width={props.scaleTo} depth={props.scaleTo / 30}
        position={new Vector3(0, 0, props.scaleTo / -60)}
      />
    </transformNode>
  )
}

const ScaledModelWithProgress = (props) => {
  const sceneContext = useContext(SceneContext);
  console.log('scene context:', sceneContext);

  return (
  <SceneLoaderContextProvider>
    <Suspense fallback= {<ProgressFallback progressBarColor={props.progressBarColor} center={props.center} rotation={props.rotation} scaleTo={props.scaleTo} />}>
        <MyModel position={props.center} rootUrl={props.rootUrl} sceneFilename={props.sceneFilename} scaleTo={props.scaleTo} />
    </Suspense>
  </SceneLoaderContextProvider>
  )
}

export default ScaledModelWithProgress;
