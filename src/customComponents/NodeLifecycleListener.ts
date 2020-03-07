import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Node } from '@babylonjs/core/node'

export default class NodeLifecycleListener implements LifecycleListener<Node> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
        if (parent.metadata.isNode && child.metadata.isNode) {
            // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
            // child.hostInstance.setParent(parent.hostInstance)
            child.hostInstance.parent = parent.hostInstance
          }
    }
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
    onMount(instance: CreatedInstance<Node>) {/* empty */}
    onUnmount(): void {/* empty */}
}
