import { Scene, VRExperienceHelper, EnvironmentHelper } from "@babylonjs/core"
import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

export default class EnvironmentHelperLifecycleListener implements LifecycleListener<EnvironmentHelper> {
  private props: any
  private scene: Scene

  constructor(scene: Scene, props: any) {
    this.scene = scene
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<EnvironmentHelper>): void {
    if (instance.hostInstance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (this.props.mainColor) {
      instance.hostInstance.setMainColor(this.props.mainColor)
    }

    if (this.props.teleportEnvironmentGround) {
      console.error("need to enable teleportation to ground (also from VRExperienceHelper, so call order has no impact.")
    }
  }

  onUnmount(): void {/* empty */}
}
