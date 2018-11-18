import { Vector3, SceneLoaderProgressEvent, AbstractMesh, Mesh } from "babylonjs"
import { LoadedModel } from "./Model"
import { PropsHandler, FiberMeshPropsHandler } from "../generatedCode"
import { PropertyUpdate } from "../ReactBabylonJSHostConfig"
import BasePropsHandler from "../BasePropsHandler"

export type ModelProps = {
  meshNames?: any
  receiveShadows?: boolean
  rootUrl: string
  sceneFilename: string
  pluginExtension?: string // currently not used
  position?: Vector3
  scaling?: Vector3
  rotation?: Vector3
  showBoundingBox?: boolean

  /**
   * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
   */
  scaleToDimension?: number
  onModelLoaded?: (model: LoadedModel) => void
  onModelError?: (model: LoadedModel) => void
  onLoadProgress?: (event: SceneLoaderProgressEvent) => void
  onCreated?: (rootMesh: AbstractMesh) => void
}

export class FiberModel extends BasePropsHandler<LoadedModel, ModelProps> {
  constructor() {
    super([new ModelPropsHandler()])
  }
}

export class ModelPropsHandler implements PropsHandler<LoadedModel, ModelProps> {
  getPropertyUpdates(
    hostInstance: LoadedModel,
    oldProps: ModelProps,
    newProps: ModelProps,
    scene: BABYLON.Scene
  ): PropertyUpdate[] | null {
    let meshUpdates: PropertyUpdate[] | null = new FiberMeshPropsHandler().getPropertyUpdates(
      hostInstance.rootMesh as Mesh,
      oldProps,
      newProps,
      scene
    )

    if (meshUpdates == null) {
      return null
    }

    // add target
    meshUpdates.forEach(propertyUpdate => (propertyUpdate.target = "rootMesh"))
    return meshUpdates
  }
}
