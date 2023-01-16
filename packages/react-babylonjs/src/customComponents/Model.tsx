import { ISceneLoaderProgressEvent } from '@babylonjs/core/Loading/sceneLoader.js'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import React, { useEffect, forwardRef } from 'react'
import { FiberAbstractMeshProps, FiberAbstractMeshPropsCtor } from '../generatedProps'
import { ILoadedModel } from '../hooks/loaders/loadedModel'
import { SceneLoaderOptions, useSceneLoader } from '../hooks/loaders/useSceneLoader'

export type ModelProps = {
  /**
   * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
   * An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
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
  onModelError?: (model: ILoadedModel) => void
  onLoadProgress?: (event: ISceneLoaderProgressEvent) => void
  onCreated?: (rootMesh: AbstractMesh) => void
} & FiberAbstractMeshProps &
  FiberAbstractMeshPropsCtor

const Model: React.FC<ModelProps> = forwardRef<AbstractMesh, ModelProps>((props, ref) => {
  const {
    alwaysSelectAsActiveMesh,
    meshNames,
    onLoadProgress,
    onModelError,
    onModelLoaded,
    receiveShadows,
    reportProgress,
    scaleToDimension, // SceneLoaderOptions
    rootUrl,
    sceneFilename,
    pluginExtension, // other parameters
    ...rest // passed on to "rootMesh"
  } = props

  const options: SceneLoaderOptions = {
    alwaysSelectAsActiveMesh,
    meshNames,
    onLoadProgress,
    onModelError,
    onModelLoaded,
    receiveShadows,
    reportProgress,
    scaleToDimension,
  }

  const sceneLoaderResults = useSceneLoader(rootUrl, sceneFilename, pluginExtension, options, rest)

  useEffect(() => {
    return () => {
      // console.log('disposing the sceneloader results.')
      sceneLoaderResults.dispose()
    }
  }, [])

  return (
    <abstractMesh ref={ref} fromInstance={sceneLoaderResults.rootMesh!} childMeshesNotTracked {...rest} />
  )
})

export default Model
