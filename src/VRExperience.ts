import { Scene, VRExperienceHelper, VRExperienceHelperOptions } from "babylonjs"
import SceneComponent, { SceneComponentProps } from "./SceneComponent"

export type VRExperienceProps = {
  // just using VRExperienceHelperOptions for now.
} & VRExperienceHelperOptions &
  SceneComponentProps<VRExperienceHelper>

export default class VRExperience extends SceneComponent<
  VRExperienceHelper,
  VRExperienceHelper,
  VRExperienceProps
> {
  private experienceHelper?: VRExperienceHelper

  create(createdScene: Scene): VRExperienceHelper {
    console.log("creating VR experience helper", createdScene, this.props)

    let { scene, container, registerChild, ...options } = this.props

    this.experienceHelper = new VRExperienceHelper(createdScene, options)
    console.log("created experience helper", this.experienceHelper)
    return this.experienceHelper
  }

  public get propsHandlers() {
    return []
  }
}
