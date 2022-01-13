import { Scene } from '@babylonjs/core/scene.js'
import { Nullable } from '@babylonjs/core/types.js'
import { CreatedInstance } from '../CreatedInstance'
import { applyInitialPropsToCreatedInstance } from '../UpdateInstance'
import BaseLifecycleListener from './BaseLifecycleListener'

export default abstract class DeferredCreationLifecycleListener<T, U> extends BaseLifecycleListener<
  T,
  U
> {
  /**
   * Not part of LifecycleListener interface - needed by template method 'onMount'.
   */
  abstract createInstance: (instance: CreatedInstance<T>, scene: Scene, props: any) => Nullable<T>

  onMount(instance: CreatedInstance<T>): void {
    const createdInstance = this.createInstance(instance, this.scene, this.props)
    if (createdInstance === undefined) {
      console.warn('was unable to create deferred instance')
    } else {
      // Meed to assign deferred props (from delayed creation) or they are lost:
      if (instance.deferredCreationProps && instance.propsHandlers) {
        applyInitialPropsToCreatedInstance(instance, instance.deferredCreationProps)
      } else {
        console.warn('cannot assign deferred props.  they are lost.')
      }
      instance.deferredCreationProps = undefined
    }
  }
}
