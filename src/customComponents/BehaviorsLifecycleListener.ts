import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Node } from '@babylonjs/core/node'
import {Behavior, PointerDragBehavior} from "@babylonjs/core";

type behaviors = Behavior<PointerDragBehavior>;

export default class BehaviorLifecycleListener implements LifecycleListener<behaviors> {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    if (parent.metadata.isNode && child.metadata.isBehavior) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      parent.hostInstance.addBehavior(child.hostInstance)
    }
  }
  onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<behaviors>) {/* empty */}
  onUnmount(): void {/* empty */}
}


