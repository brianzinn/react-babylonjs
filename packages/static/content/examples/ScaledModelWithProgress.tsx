import { Color3, Matrix, Vector3 } from '@babylonjs/core/Maths/math'
import { FC, Suspense, useContext } from 'react'
import {
  ILoadedModel,
  Model,
  SceneLoaderContext,
  SceneLoaderContextProvider,
} from 'react-babylonjs'

export type ProgressFallbackProps = {
  rotation?: Vector3
  center: Vector3
  scaleTo: number
  progressBarColor: Color3
}

const ProgressFallback: FC<ProgressFallbackProps> = (props) => {
  const sceneLoaderContext = useContext(SceneLoaderContext)

  let loadProgress = 0
  if (sceneLoaderContext && sceneLoaderContext.lastProgress) {
    const progress = sceneLoaderContext.lastProgress
    loadProgress = progress.lengthComputable
      ? progress.loaded / progress.total
      : progress.loaded / 10000 // TODO: provide option to input file size for proper loading.
  }

  return (
    <transformNode name="load-mesh" rotation={props.rotation} position={props.center}>
      <box
        key="progress"
        name="boxProgress"
        height={props.scaleTo / 15}
        width={props.scaleTo}
        depth={props.scaleTo / 30}
        scaling={new Vector3(loadProgress, 1, 1)}
        position={new Vector3(props.scaleTo / 2, 0, props.scaleTo / 60)}
        setPivotMatrix={[Matrix.Translation(-props.scaleTo, 0, 0)]}
        setPreTransformMatrix={[Matrix.Translation(-props.scaleTo / 2, 0, 0)]}
      >
        <standardMaterial
          name="progress-mat"
          diffuseColor={props.progressBarColor}
          specularColor={Color3.Black()}
        />
      </box>
      <box
        key="back"
        name="boxBack"
        height={props.scaleTo / 15}
        width={props.scaleTo}
        depth={props.scaleTo / 30}
        position={new Vector3(0, 0, props.scaleTo / -60)}
      />
    </transformNode>
  )
}

export type ScaledModelWithProgressType = {
  progressBarColor: Color3
  progressRotation?: Vector3
  modelRotation?: Vector3
  center: Vector3
  scaleTo: number
  rootUrl: string
  sceneFilename: string
  onModelLoaded?: (model: ILoadedModel) => void
}

const ScaledModelWithProgress: FC<ScaledModelWithProgressType> = (props) => {
  return (
    <SceneLoaderContextProvider>
      <Suspense
        fallback={
          <ProgressFallback
            progressBarColor={props.progressBarColor}
            rotation={props.progressRotation ?? props.modelRotation}
            center={props.center}
            scaleTo={props.scaleTo}
          />
        }
      >
        <Model
          name="model"
          reportProgress
          position={props.center}
          rootUrl={props.rootUrl}
          sceneFilename={props.sceneFilename}
          scaleToDimension={props.scaleTo}
          rotation={props.modelRotation}
          onModelLoaded={props.onModelLoaded}
        />
      </Suspense>
    </SceneLoaderContextProvider>
  )
}

export default ScaledModelWithProgress
