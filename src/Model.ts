import {
  Scene,
  IParticleSystem,
  Skeleton,
  AnimationGroup,
  AbstractMesh,
  SceneLoader,
  Nullable,
  Vector3,
  ISceneLoaderPlugin,
  ISceneLoaderPluginAsync,
  SceneLoaderProgressEvent,
  BoundingInfo
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
  public scaleToDimension?: number

  public get boundingInfo(): Nullable<BoundingInfo> {
    if (!this.rootMesh) {
      return null
    }

    // meshes are already parented to root mesh, so we do not need to look further.
    let min: Nullable<Vector3> = null
    let max: Nullable<Vector3> = null

    this.rootMesh.getChildMeshes().forEach(childMesh => {
      const { minimumWorld, maximumWorld } = childMesh.getBoundingInfo().boundingBox
      if (min === null) {
        min = minimumWorld
      } else {
        min = Vector3.Minimize(min, minimumWorld)
      }

      if (max === null) {
        max = maximumWorld
      } else {
        max = Vector3.Maximize(max, maximumWorld)
      }
    })

    if (min !== null && max != null) {
      return new BoundingInfo(min, max)
    }

    return null
  }

  /**
   * Clean up all resources.
   */
  public dispose() {
    if (this.meshes) {
      this.meshes.forEach(mesh => {
        mesh.dispose(false /* not recursive */, true /* materials + textures */)
      })
      this.meshes = []
    }

    if (this.particleSystems) {
      this.particleSystems.forEach(ps => {
        // ps.stop();
        ps.dispose()
      })
      this.particleSystems = []
    }

    if (this.skeletons) {
      this.skeletons.forEach(skeleton => skeleton.dispose())
      this.skeletons = []
    }

    if (this.animationGroups) {
      this.animationGroups.forEach(animationGroup => animationGroup.dispose())
      this.animationGroups = []
    }
  }
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
      (
        meshes: AbstractMesh[],
        particleSystems: IParticleSystem[],
        skeletons: Skeleton[],
        animationGroups: AnimationGroup[]
      ): void => {
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

    return loadedModel
  }

  componentsCreated(): void {
    /* ignore */
  }

  componentWillUnmount(): void {
    if (this.loadedModel) {
      this.loadedModel.dispose()
    }
  }

  public get propsHandlers() {
    return [new ModelPropsHandler()]
  }
}
