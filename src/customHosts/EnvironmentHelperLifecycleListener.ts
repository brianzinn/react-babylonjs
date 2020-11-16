import { Scene, EnvironmentHelper } from "@babylonjs/core"
import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"

export default class EnvironmentHelperLifecycleListener implements LifecycleListener<EnvironmentHelper> {
  private props: any
  private scene: Scene

  constructor(scene: Scene, props: any) {
    this.scene = scene
    this.props = props
  }

  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any {/* empty */}

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any {/* empty */}

  onMount(instance: DecoratedInstance<EnvironmentHelper>): void {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    // for TypeScript people use <... setMainColor={[mainColor]} />
    if (this.props.mainColor) {
      instance.setMainColor(this.props.mainColor)
    }

    if (this.props.teleportEnvironmentGround) {
      console.error("need to enable teleportation to ground (also from VRExperienceHelper, so call order has no impact.")
    }
  }

  onUnmount(): void {/* empty */}
}
