import {Behavior, IBehaviorAware, Nullable} from '@babylonjs/core';

import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class BehaviorLifecycleListener extends BaseLifecycleListener<Behavior<any>, any> {
  private behaviorAware: Nullable<IBehaviorAware<any>> = null;
  private behavior: Nullable<Behavior<any>> = null;

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    super.onParented(parent, child);
    if (parent.metadata.isNode && parent.hostInstance?.addBehavior /* TODO: verify if this needs to be a mesh */ && child.metadata.isBehavior /* always true? */) {
      parent.hostInstance.addBehavior(child.hostInstance);
      this.behaviorAware = parent.hostInstance;
      this.behavior = child.hostInstance;
    } else {
      console.warn('Could not locate IBehaviorAware on Behavior parent.');
    }
  }
  onUnmount(): void {
    if (this.behaviorAware) {
      this.behaviorAware.removeBehavior(this.behavior!);
    }
  }
}
