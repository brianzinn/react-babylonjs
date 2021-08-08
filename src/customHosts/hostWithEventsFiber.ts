import { Scene } from '@babylonjs/core/scene.js';
import { Engine } from '@babylonjs/core/Engines/engine.js';

import BaseLifecycleListener from './BaseLifecycleListener';
import { CreatedInstance } from '../CreatedInstance';

type WithLifecycleMethods<T> = {
  onParented?: (scene: Scene, engine: Engine, parent: CreatedInstance<any>) => any
  onChildAdded?: (scene: Scene, engine: Engine, child: CreatedInstance<any>) => any
  onMount?: (scene: Scene, engine: Engine, instance: CreatedInstance<T>) => any
  onUnmount?: (scene: Scene, engine: Engine) => any
}

/**
 * This is a host component.  Much like a span or div for ReactDOM.render();
 */
export default class HostWithEventsFiber<T, U extends WithLifecycleMethods<T>> extends BaseLifecycleListener<T, U> {

  public onParented(parent: CreatedInstance<any> | undefined) {
    if (parent !== undefined && this.props.onParented !== undefined) {
      this.props.onParented(this.scene, this.scene.getEngine(), parent);
    }
  }

  public onChildAdded(child: CreatedInstance<any>): void {
    if (this.props.onChildAdded) {
      this.props.onChildAdded(this.scene, this.scene.getEngine(), child);
    }
  }

  public onMount(instance: CreatedInstance<T>): void {
    if (this.props.onMount) {
      this.props.onMount(this.scene, this.scene.getEngine(), instance);
    }
  }

  public dispose(): void {
    if (this.props.onUnmount) {
      this.props.onUnmount(this.scene, this.scene.getEngine());
    }
  }

  public onUnmount(): void {/* empty */ }
}
