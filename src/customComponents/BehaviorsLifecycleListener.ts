import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import {Behavior, IBehaviorAware, Nullable} from "@babylonjs/core";

export default class BehaviorLifecycleListener implements LifecycleListener<Behavior<any>> {
  private behaviorAware: Nullable<IBehaviorAware<any>> = null;
  private behavior: Nullable<Behavior<any>> = null;

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    if (parent.metadata.isNode && parent.hostInstance?.addBehavior /* TODO: verify if this needs to be a mesh */ && child.metadata.isBehavior /* always true? */) {
      parent.hostInstance.addBehavior(child.hostInstance);
      this.behaviorAware = parent.hostInstance
      this.behavior = child.hostInstance
    } else {
      console.warn('Could not locate IBehaviorAware on Behavior parent.')
    }
  }
  onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<Behavior<any>>) {/* empty */}
  onUnmount(): void {
    if (this.behaviorAware) {
      this.behaviorAware.removeBehavior(this.behavior!);
    }
  }
}
