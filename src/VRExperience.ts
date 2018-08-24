import { Scene, VRExperienceHelper, VRExperienceHelperOptions, EnvironmentHelper, AbstractMesh, Mesh } from "babylonjs"
import SceneComponent, { SceneComponentProps } from "./SceneComponent"

/**
 * Missing lots of available options, but it's a start and works for common scenarios.
 */
export type VRExperienceProps = {
  teleportEnvironmentGround?: boolean
  teleportationMeshes?: Mesh[]
  enableInteractions: boolean // missing rayLength, etc.
  raySelectionPredicate: (mesh: AbstractMesh) => boolean
} & VRExperienceHelperOptions &
  SceneComponentProps<VRExperienceHelper>

export default class VRExperience extends SceneComponent<VRExperienceHelper, VRExperienceHelper, VRExperienceProps> {
  private experienceHelper?: VRExperienceHelper

  componentWillUnmount() {
    if (this.experienceHelper) {
      // clean up resources, but importantly also to remove the button attached to document.body:
      this.experienceHelper.dispose()
    }
  }

  componentsCreated(): void {
    if (this.props.teleportEnvironmentGround !== true && this.props.teleportationMeshes === undefined) {
      // console.log("environment not set to teleport.")
    }

    let environmentGround: Mesh | undefined = undefined

    const registeredComponents = this.props.componentRegistry.registeredComponents.slice(0)
    registeredComponents.forEach(registeredComponent => {
      if (registeredComponent instanceof EnvironmentHelper) {
        if (this.props.teleportEnvironmentGround !== true) {
          // console.log("found environment, but not set for teleportation.")
          return
        }

        if (!registeredComponent.ground) {
          // console.error("found environment, but no ground to teleport")
          return
        }

        environmentGround = registeredComponent.ground
      }
    })

    if (environmentGround !== undefined || this.props.teleportationMeshes !== undefined) {
      let floorMeshes: Mesh[] = environmentGround === undefined ? [] : [environmentGround]
      if (this.props.teleportationMeshes !== undefined) {
        floorMeshes.concat(this.props.teleportationMeshes!)
      }
      // console.log("teleportation enabled on:", floorMeshes.slice(0))
      this.experienceHelper!.enableTeleportation({ floorMeshes })
    }
  }

  create(createdScene: Scene): VRExperienceHelper {
    let { scene, container, registerChild, ...options } = this.props

    this.experienceHelper = new VRExperienceHelper(createdScene, options)
    // console.log("created experience helper.  options:", options)

    if (options.enableInteractions) {
      this.experienceHelper.enableInteractions()
    }

    if (options.raySelectionPredicate) {
      this.experienceHelper.raySelectionPredicate = options.raySelectionPredicate
    }

    return this.experienceHelper
  }

  public get propsHandlers() {
    return []
  }
}
