import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

export default class MeshLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    if (parent.metadata.isMesh && child.metadata.isMesh) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      //child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance
    }
  }
  onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {}
}
