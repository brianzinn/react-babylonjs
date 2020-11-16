import { LifecycleListener } from "../LifecycleListener"
import { DecoratedInstance } from "../DecoratedInstance"
import { VRExperienceHelper } from "@babylonjs/core"

export default class VRExperienceHelperLifecycleListener implements LifecycleListener<VRExperienceHelper> {
  private props: any

  constructor(props: any) {
    this.props = props
  }

  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any {/* empty */}

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any {/* empty */}

  onMount(instance: DecoratedInstance<VRExperienceHelper>): void {
    if (this.props.enableInteractions) {
        instance.enableInteractions()
    }
  }

  onUnmount(): void {/* empty */}
}
