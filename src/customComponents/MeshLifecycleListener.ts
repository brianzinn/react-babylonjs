import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Mesh } from '@babylonjs/core/Meshes'

export default class MeshLifecycleListener implements LifecycleListener<Mesh> {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    if ((parent.metadata.isMesh || parent.metadata.isTransformNode) && child.metadata.isMesh) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance
    }
  }
  onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<Mesh>) {/* empty */}
  onUnmount(): void {/* empty */}
}
