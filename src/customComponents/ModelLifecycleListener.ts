import {
  Scene,
  IParticleSystem,
  Skeleton,
  AnimationGroup,
  AbstractMesh,
  SceneLoader,
  Nullable,
  ISceneLoaderPlugin,
  ISceneLoaderPluginAsync,
  SceneLoaderProgressEvent
} from "@babylonjs/core"
import "@babylonjs/loaders"
import { applyUpdateToInstance } from "../UpdateInstance"
import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

import { LoaderStatus, LoadedModel, ModelPropsHandler } from "../model"
import { UpdatePayload } from "../PropsHandler"

/**
 * This listener has no underlying babylonjs type.  We are handling loading a 3D model with underlying mesh(es).
 */
export default class ModelLifecycleListener implements LifecycleListener<LoadedModel> {
  private props: any
  private scene: Scene

  constructor(scene: Scene, props: any) {
    this.props = props
    this.scene = scene
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any { /* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any { /* empty */}

  onMount(instance: CreatedInstance<LoadedModel>): void {
    let loadedModel = new LoadedModel()

    loadedModel.status = LoaderStatus.Loading
    instance.hostInstance = loadedModel

    let loader: Nullable<ISceneLoaderPlugin | ISceneLoaderPluginAsync> = SceneLoader.ImportMesh(
      undefined,
      this.props.rootUrl,
      this.props.sceneFilename,
      this.scene,
      (meshes: AbstractMesh[], particleSystems: IParticleSystem[], skeletons: Skeleton[], animationGroups: AnimationGroup[]): void => {
        loadedModel.rootMesh = new AbstractMesh(this.props.sceneFilename + "-root-model", this.scene)
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

        // we want to trigger after mesh is loaded (ie: position/rotation)
        const updates: UpdatePayload = new ModelPropsHandler().getPropertyUpdates(loadedModel, { rootUrl: "", sceneFilename: "" }, this.props, this.scene)

        if (updates !== null) {
          updates.forEach(update => applyUpdateToInstance(instance.hostInstance, update, "model"))
        }

        if (this.props.scaleToDimension && loadedModel && loadedModel.scaleToDimension !== this.props.scaleToDimension) {
          const boundingInfo = loadedModel.boundingInfo // will be null when no meshes are loaded
          if (boundingInfo) {
            const longestDimension = Math.max(
              Math.abs(boundingInfo.minimum.x - boundingInfo.maximum.x),
              Math.abs(boundingInfo.minimum.y - boundingInfo.maximum.y),
              Math.abs(boundingInfo.minimum.z - boundingInfo.maximum.z)
            )

            const dimension = this.props.scaleToDimension / longestDimension

            loadedModel.rootMesh.scaling.scaleInPlace(dimension)
            loadedModel.scaleToDimension = this.props.scaleToDimension
          }
        }
      },
      (event: SceneLoaderProgressEvent): void => {
        if (this.props.onLoadProgress) {
          this.props.onLoadProgress(event)
        }
      },
      (scene: Scene, message: string, exception?: any): void => {
        loadedModel.status = LoaderStatus.Error
        loadedModel.errorMessage = `error: ${message} -> ${exception ? exception.message : "no exception"}`
        if (this.props.onModelError) {
          this.props.onModelError(loadedModel)
        }
      },
      this.props.pluginExtension
    )

    if (loader) {
      loadedModel.loaderName = loader.name
    } else {
      loadedModel.loaderName = "no loader found"
    }
  }

  onUnmount(): void {/* empty */}
}
