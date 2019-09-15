import { IParticleSystem, Skeleton, AnimationGroup, AbstractMesh, Nullable, Vector3, BoundingInfo } from "@babylonjs/core"
import "@babylonjs/loaders"

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
