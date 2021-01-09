import { AbstractMesh, ISceneLoaderProgressEvent, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react"
import { FiberAbstractMeshProps, FiberAbstractMeshPropsCtor } from "../generatedProps";
import { ILoadedModel, LoadedModel } from "../hooks/loaders/loadedModel";

import { SceneLoaderOptions, useSceneLoader } from "../hooks/loaders/useSceneLoader";

export type ModelProps = {
    /**
   * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
   */
  meshNames?: any
  receiveShadows?: boolean
  rootUrl: string
  sceneFilename: string
  pluginExtension?: string
  alwaysSelectAsActiveMesh?: boolean
  reportProgress?: boolean
  scaleToDimension?: number
  onModelLoaded?: (model: ILoadedModel) => void
  onModelError?: (model: LoadedModel) => void
  onLoadProgress?: (event: ISceneLoaderProgressEvent) => void
  onCreated?: (rootMesh: AbstractMesh) => void
} & FiberAbstractMeshProps & FiberAbstractMeshPropsCtor;

const Model: React.FC<ModelProps> = (props: ModelProps) => {
  const { alwaysSelectAsActiveMesh, onModelLoaded, pluginExtension, rootUrl, receiveShadows, reportProgress, scaleToDimension, sceneFilename, ...rest } = props;
  const options: SceneLoaderOptions = {
    receiveShadows,
    scaleToDimension,
    alwaysSelectAsActiveMesh,
    reportProgress,
    onModelLoaded
  }
  const sceneLoaderResults = useSceneLoader(rootUrl, sceneFilename, pluginExtension, options);

  useEffect(() => {
    return () => {
      // console.log('disposing the sceneloader results.')
      sceneLoaderResults.dispose();
    }
  }, []);

  return  <abstractMesh fromInstance={sceneLoaderResults.rootMesh!} {...rest} />;
}

export default Model;
