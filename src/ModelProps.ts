import { Vector3, SceneLoaderProgressEvent } from "babylonjs"
import { LoadedModel } from "./Model"
import { SceneComponentProps, PropsHandler } from "./SceneComponent"

export type ModelProps = {
  meshNames?: any
  receiveShadows?: boolean
  rootUrl: string
  sceneFilename: string
  pluginExtension?: string // currently not used
  position?: Vector3
  scaling?: Vector3
  rotation?: Vector3
  showBoundingBox: boolean
  
  /**
   * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
   */
  scaleToDimension?: number
  onModelLoaded?: (model: LoadedModel) => void
  onModelError?: (model: LoadedModel) => void
  onLoadProgress?: (event: SceneLoaderProgressEvent) => void
} & SceneComponentProps<LoadedModel>

export default class ModelPropsHandler implements PropsHandler<LoadedModel, ModelProps> {
  handle(loadedModel: LoadedModel, props: ModelProps): void {   
    if (props.position && loadedModel.rootMesh && !loadedModel.rootMesh.position.equals(props.position)) {
      loadedModel.rootMesh.position.copyFrom(props.position)
    }

    if (props.showBoundingBox !== undefined && loadedModel.rootMesh && loadedModel.rootMesh.showBoundingBox !== props.showBoundingBox) {
      const boundingInfo = loadedModel.boundingInfo;
      if (boundingInfo) { // should always have a bounding info, once meshes are loaded
        loadedModel.rootMesh!.setBoundingInfo(boundingInfo)
      }
      loadedModel.rootMesh.showBoundingBox = props.showBoundingBox
    }

    if (props.scaling && loadedModel.rootMesh && !loadedModel.rootMesh.scaling.equals(props.scaling)) {
      loadedModel.rootMesh.scaling.copyFrom(props.scaling)
    }

    if (props.scaleToDimension && loadedModel && loadedModel.scaleToDimension !== props.scaleToDimension) {

      const boundingInfo = loadedModel.boundingInfo; // will be null when no meshes are loaded
      if (boundingInfo) {
        const longestDimension = Math.max(
          Math.abs(boundingInfo.minimum.x - boundingInfo.maximum.x),
          Math.abs(boundingInfo.minimum.y - boundingInfo.maximum.y),
          Math.abs(boundingInfo.minimum.z - boundingInfo.maximum.z)
        );
        
        const dimension = props.scaleToDimension / longestDimension
        
        loadedModel.rootMesh!.scaling.scaleInPlace(dimension);
        loadedModel.scaleToDimension = props.scaleToDimension
      }
    }

    if (props.rotation && loadedModel.rootMesh && !loadedModel.rootMesh.rotation.equals(props.rotation)) {
      loadedModel.rootMesh.rotation.copyFrom(props.rotation)
    }
  }
}
