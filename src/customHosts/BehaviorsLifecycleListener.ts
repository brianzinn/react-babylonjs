import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import {Behavior, IBehaviorAware, Nullable} from "@babylonjs/core";

export default class BehaviorLifecycleListener implements LifecycleListener<Behavior<any>> {
  private behaviorAware: Nullable<IBehaviorAware<any>> = null;
  private behavior: Nullable<Behavior<any>> = null;

  onParented(parent: DecoratedInstance<unknown>, child: DecoratedInstance<unknown>) {
    if (parent.__rbs.metadata.isNode && (parent as any).addBehavior /* TODO: verify if this needs to be a mesh */ && child.__rbs.metadata.isBehavior /* always true? */) {
      (parent as any).addBehavior(child);
      this.behaviorAware = parent as any as IBehaviorAware<any>;
      this.behavior = child as any as Behavior<any>;
    } else {
      console.warn('Could not locate IBehaviorAware on Behavior parent.')
    }
  }
  onChildAdded(parent: DecoratedInstance<any>, child: DecoratedInstance<any>) {/* empty */}
  onMount(instance: DecoratedInstance<Behavior<any>>) {/* empty */}
  onUnmount(): void {
    if (this.behaviorAware) {
      this.behaviorAware.removeBehavior(this.behavior!);
    }
  }
}
