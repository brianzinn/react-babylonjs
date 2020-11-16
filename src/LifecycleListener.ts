import { DecoratedInstance } from "./DecoratedInstance"
import { Scene } from "@babylonjs/core"

export interface LifecycleListener<T> {
  onCreated?: (instance: DecoratedInstance<T>, scene: Scene) => void
  onParented: (parent: DecoratedInstance<any>, child: DecoratedInstance<any>) => any
  onChildAdded: (child: DecoratedInstance<any>, parent: DecoratedInstance<any>) => any
  /**
   * It is not set on when delay creation is enabled for this type (PhysicsImpostor/ShadowGenerator)
   * Some objects cannot be properly instantiated until their dependant objects (mesh/light source) are instantiated.
   */
  onMount: (instance: DecoratedInstance<T>) => any
  /**
   * Called on GUI controls, once they have been added as a control.
   */
  onAddedAsControl?: (instance: DecoratedInstance<T>) => void
  /**
   * When hosted instance is unmounted
   */
  onUnmount: () => void
}
