import {
  Scene,
  IParticleSystem,
  Skeleton,
  AnimationGroup,
  AbstractMesh,
  SceneLoader,
  Nullable,
  ISceneLoaderPlugin,
  ISceneLoaderPluginAsync
} from "babylonjs"
import "babylonjs-loaders"

import SceneComponent from "./SceneComponent"
import ModelPropsHandler, { ModelProps } from "./ModelProps"

export enum LoaderStatus {
  Loading,
  Loaded,
  Error
}

export class LoadedModel {
  public status?: LoaderStatus
  public rootMesh?: AbstractMesh
  public errorMessage?: string
  public loaderName?: string
  public meshes?: AbstractMesh[]
  public particleSystems?: IParticleSystem[]
  public skeletons?: Skeleton[]
  public animationGroups?: AnimationGroup[]
}

export default class Model extends SceneComponent<LoadedModel, LoadedModel, ModelProps> {
  protected options: any
  private loadedModel?: LoadedModel

  create(scene: Scene): LoadedModel {
    let loadedModel = new LoadedModel()

    loadedModel.status = LoaderStatus.Loading
    this.loadedModel = loadedModel

    let loader: Nullable<ISceneLoaderPlugin | ISceneLoaderPluginAsync> = SceneLoader.ImportMesh(
      undefined,
      this.props.rootUrl,
      this.props.sceneFilename,
      scene,
      (meshes, particleSystems, skeletons, animationGroups) => {
        loadedModel.rootMesh = new AbstractMesh(this.props.sceneFilename + "-model")
        loadedModel.rootMesh.alwaysSelectAsActiveMesh = true

        loadedModel.meshes = []
        meshes.forEach(mesh => {
          loadedModel.meshes!.push(mesh)

          // leave meshes already parented to maintain model hierarchy:
          if (!mesh.parent) {
            mesh.parent = loadedModel.rootMesh!
          }
          if (this.props.receiveShadows === true) {
            mesh.receiveShadows = true
          }
        })
        loadedModel.particleSystems = particleSystems
        loadedModel.skeletons = skeletons
        loadedModel.animationGroups = animationGroups

        if (this.props.onModelLoaded) {
          this.props.onModelLoaded(loadedModel)
        }
        loadedModel.status = LoaderStatus.Loaded

        // this.forceUpdate() trickery OR call handlers manually
        if (typeof this.propsHandlers !== undefined && Array.isArray(this.propsHandlers)) {
          this.propsHandlers.forEach(propsHandlers => {
            propsHandlers.handle(loadedModel, this.props)
          })
        }
      },
      progressEvent => {
        // not implemented
      },
      (scene, message, exception) => {
        loadedModel.status = LoaderStatus.Error
        loadedModel.errorMessage = `error: ${message} -> ${
          exception ? exception.message : "no exception"
        }`
        if (this.props.onModelError) {
          this.props.onModelError(loadedModel)
        }
      } // , this.props.pluginExtension
    )

    if (loader) {
      loadedModel.loaderName = loader.name
    } else {
      loadedModel.loaderName = "no loader found"
    }

    return loadedModel
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new ModelPropsHandler()]
  }
}
