import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup.js'
import { Skeleton } from '@babylonjs/core/Bones/skeleton.js'
import { BoundingInfo } from '@babylonjs/core/Culling/boundingInfo.js'
import { Vector3 } from '@babylonjs/core/Maths/math.vector.js'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import { Mesh } from '@babylonjs/core/Meshes/mesh.js'
import { IParticleSystem } from '@babylonjs/core/Particles/IParticleSystem.js'
import { Nullable } from '@babylonjs/core/types.js'

export enum LoaderStatus {
  Loading = 'Loading',
  Loaded = 'Loaded',
  Error = 'Error',
}

export interface ILoadedModel {
  /**
   * LoaderStatus reports if the load succeeded or not.
   */
  status: LoaderStatus
  /**
   * Mesh created when successfully loaded and all non-parented meshes are parented to this mesh.
   */
  rootMesh?: Mesh
  /**
   * Error message when loader fails.
   */
  errorMessage?: string
  /**
   * Name of loader used - either as explicitly specified or inferred from extension.
   */
  loaderName?: string

  meshes?: AbstractMesh[]
  particleSystems?: IParticleSystem[]
  skeletons?: Skeleton[]
  animationGroups?: AnimationGroup[]

  readonly boundingInfo: Nullable<BoundingInfo>
  readonly scaledToDimension: number | undefined

  scaleTo(maxDimension: number): void
  dispose(): void
}

export class LoadedModel implements ILoadedModel {
  public status: LoaderStatus = LoaderStatus.Loading
  public rootMesh?: Mesh
  public errorMessage?: string
  /**
   * OnPluginActivatedObservable should set this correctly.
   */
  public loaderName?: string
  public meshes?: AbstractMesh[]
  public particleSystems?: IParticleSystem[]
  public skeletons?: Skeleton[]
  public animationGroups?: AnimationGroup[]
  private _scaledToDimension?: number

  public get scaledToDimension(): number | undefined {
    return this._scaledToDimension
  }

  public get boundingInfo(): Nullable<BoundingInfo> {
    if (!this.rootMesh) {
      return null
    }

    // meshes are already parented to root mesh, so we do not need to look further.
    let min: Nullable<Vector3> = null
    let max: Nullable<Vector3> = null

    this.rootMesh.getChildMeshes().forEach((childMesh) => {
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

  public scaleTo(maxDimension: number): void {
    const boundingInfo = this.boundingInfo // will be null when no meshes are loaded
    if (boundingInfo && this.rootMesh) {
      const longestDimension = Math.max(
        Math.abs(boundingInfo.minimum.x - boundingInfo.maximum.x),
        Math.abs(boundingInfo.minimum.y - boundingInfo.maximum.y),
        Math.abs(boundingInfo.minimum.z - boundingInfo.maximum.z)
      )

      const dimension = maxDimension / longestDimension
      this.rootMesh.scaling.scaleInPlace(dimension)
      this._scaledToDimension = maxDimension
    }
  }

  /**
   * Clean up all resources.
   */
  public dispose(): void {
    if (this.rootMesh) {
      this.rootMesh.dispose(false, true)
      this.rootMesh = undefined
      this.meshes = []
    }

    if (this.particleSystems) {
      this.particleSystems.forEach((ps) => {
        // ps.stop();
        ps.dispose()
      })
      this.particleSystems = []
    }

    if (this.skeletons) {
      this.skeletons.forEach((skeleton) => skeleton.dispose())
      this.skeletons = []
    }

    if (this.animationGroups) {
      this.animationGroups.forEach((animationGroup) => animationGroup.dispose())
      this.animationGroups = []
    }
  }
}
