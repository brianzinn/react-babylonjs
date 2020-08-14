import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, Nullable } from "@babylonjs/core"
import { applyInitialPropsToInstance } from "../UpdateInstance"

export default abstract class DeferredCreationLifecycleListener<T> implements LifecycleListener<T> {

  constructor(protected scene: Scene, private props: any) {/* empty */}

  abstract onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;

  abstract onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;

  /**
   * Not part of LifecycleListener interface - needed by template method 'onMount'.
   */
  abstract createInstance: (instance: CreatedInstance<T>, scene: Scene, props: any) => Nullable<T>;

  onMount(instance: CreatedInstance<T>): void {
    const createdInstance = this.createInstance(instance, this.scene, this.props);
    if (createdInstance === undefined) {
        console.warn('was unable to create deferred instance');
    } else {
        // Meed to assign deferred props (from delayed creation) or they are lost:
        if (instance.deferredCreationProps && instance.propsHandlers) {
            applyInitialPropsToInstance(instance, instance.deferredCreationProps);
        } else {
        console.warn('cannot assign deferred props.  they are lost.');
        }
        instance.deferredCreationProps = undefined;
    }
  }

  abstract onUnmount(): void;
}
