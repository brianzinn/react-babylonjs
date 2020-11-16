import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, Nullable } from "@babylonjs/core"
import { applyInitialPropsToInstance } from "../UpdateInstance"

export default abstract class DeferredCreationLifecycleListener<T> implements LifecycleListener<T> {

  constructor(protected scene: Scene, private props: any) {/* empty */}

  abstract onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any;

  abstract onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any;

  /**
   * Not part of LifecycleListener interface - needed by template method 'onMount'.
   */
  abstract createInstance: (instance: DecoratedInstance<T>, scene: Scene, props: any) => Nullable<T>;

  onMount(instance: DecoratedInstance<T>): void {
    const createdInstance = this.createInstance(instance, this.scene, this.props);
    if (createdInstance === undefined) {
        console.warn('was unable to create deferred instance');
    } else {
        // Meed to assign deferred props (from delayed creation) or they are lost:
        if (instance.__rbs.deferredCreationProps && instance.__rbs.propsHandlers) {
            applyInitialPropsToInstance(instance, instance.__rbs.deferredCreationProps);
        } else {
        console.warn('cannot assign deferred props.  they are lost.');
        }
        instance.__rbs.deferredCreationProps = undefined;
    }
  }

  abstract onUnmount(): void;
}
