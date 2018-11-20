import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";

export default class EnvironmentHelperLifecycleListener implements LifecycleListener {
  private props: any

  constructor(props: any) {
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    if (this.props.mainColor) {
      if (typeof instance.hostInstance.setMainColor === "function") {
        instance.hostInstance.setMainColor(this.props.mainColor)
      }
    }

    if (this.props.teleportEnvironmentGround) {
      console.error(
        "need to enable teleportation to ground (also from VRExperienceHelper, so call order has no impact."
      )
    }
  }
}
