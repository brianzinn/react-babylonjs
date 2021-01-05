import { AbstractMesh, ISceneLoaderProgressEvent, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react"
import { ILoadedModel, LoadedModel } from "../hooks/loaders/loadedModel";

import { SceneLoaderOptions, useSceneLoader } from "../hooks/loaders/useSceneLoader";

export type ModelProps = {
  meshNames?: any
  receiveShadows?: boolean
  rootUrl: string
  sceneFilename: string
  pluginExtension?: string
  position?: Vector3
  scaling?: Vector3
  rotation?: Vector3
  showBoundingBox?: boolean
  alwaysSelectAsActiveMesh?: boolean
  reportProgress?: boolean

  /**
   * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
   */
  scaleToDimension?: number
  onModelLoaded?: (model: ILoadedModel) => void
  onModelError?: (model: LoadedModel) => void
  onLoadProgress?: (event: ISceneLoaderProgressEvent) => void
  onCreated?: (rootMesh: AbstractMesh) => void
}

const Model = (props: ModelProps) => {
  const options: SceneLoaderOptions = {
    receiveShadows: props.receiveShadows,
    scaleToDimension: props.scaleToDimension,
    alwaysSelectAsActiveMesh: props.alwaysSelectAsActiveMesh,
    reportProgress: props.reportProgress,
    onModelLoaded: props.onModelLoaded
  }
  const sceneLoaderResults = useSceneLoader(props.rootUrl, props.sceneFilename, props.pluginExtension, options);

  if (props.position) {
    sceneLoaderResults.rootMesh!.position = props.position;
  }

  if (props.rotation) {
    sceneLoaderResults.rootMesh!.rotation = props.rotation;
  }

  useEffect(() => {
    return () => {
      // console.log('disposing the sceneloader results.')
      sceneLoaderResults.dispose();
    }
  }, []);

  // TODO: return <abstractMesh /> and push ...rest of spread props with fromInstance = {rootMesh}
  return null;
}

export default Model
