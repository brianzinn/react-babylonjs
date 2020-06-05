import { LifecycleListener } from "../LifecycleListener"
import { CreatedInstance } from "../CreatedInstance"
import { VRExperienceHelper } from "@babylonjs/core"

export default class VRExperienceHelperLifecycleListener implements LifecycleListener<VRExperienceHelper> {
  private props: any

  constructor(props: any) {
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<VRExperienceHelper>): void {
    if (this.props.enableInteractions) {
        instance.hostInstance!.enableInteractions()
    }
  }

  onUnmount(): void {/* empty */}
}
