import { Vector3 } from "babylonjs"
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
  onModelLoaded?: (model: LoadedModel) => void
  onModelError?: (model: LoadedModel) => void
} & SceneComponentProps<LoadedModel>

export default class ModelPropsHandler implements PropsHandler<LoadedModel, ModelProps> {
  handle(loadedModel: LoadedModel, props: ModelProps): void {
    if (
      props.position &&
      loadedModel.rootMesh &&
      !loadedModel.rootMesh.position.equals(props.position)
    ) {
      // console.log("model props handler moving model:", props.sceneFilename)
      loadedModel.rootMesh.position.copyFrom(props.position)
    } else {
      // console.log("model props handler (position) doing nothing:", loadedModel.rootMesh, props)
    }

    if (
      props.scaling &&
      loadedModel.rootMesh &&
      !loadedModel.rootMesh.scaling.equals(props.scaling)
    ) {
      // console.log("model props handler scaling model:", props.sceneFilename)
      loadedModel.rootMesh.scaling.copyFrom(props.scaling)
    }

    if (
      props.rotation &&
      loadedModel.rootMesh &&
      !loadedModel.rootMesh.rotation.equals(props.rotation)
    ) {
      // console.log("model props handler rotating model:", props.sceneFilename)
      loadedModel.rootMesh.rotation.copyFrom(props.rotation)
    }
  }
}
