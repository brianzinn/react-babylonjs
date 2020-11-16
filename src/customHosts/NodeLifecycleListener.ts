import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Node } from '@babylonjs/core/node'

export default class NodeLifecycleListener implements LifecycleListener<Node> {
    onParented(parent: DecoratedInstance<unknown>, child: DecoratedInstance<unknown>) {
        if (parent.__rbs.metadata.isNode && child.__rbs.metadata.isNode) {
            // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
            // child.setParent(parent)
            (child as any).parent = parent;
          }
    }
    onChildAdded(parent: DecoratedInstance<any>, child: DecoratedInstance<any>) {/* empty */}
    onMount(instance: DecoratedInstance<Node>) {/* empty */}
    onUnmount(): void {/* empty */}
}
