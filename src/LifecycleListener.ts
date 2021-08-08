import { Scene } from "@babylonjs/core/scene.js";

import { CreatedInstance } from "./CreatedInstance"

export interface LifecycleListener<T> {
  onCreated?: (instance: CreatedInstance<T>, scene: Scene) => void
  onParented: (parent: CreatedInstance<any>, child: CreatedInstance<any>) => any
  onChildAdded: (child: CreatedInstance<any>, parent: CreatedInstance<any>) => any
  /**
   * It is not set on when delay creation is enabled for this type (PhysicsImpostor/ShadowGenerator)
   * Some objects cannot be properly instantiated until their dependant objects (mesh/light source) are instantiated.
   */
  onMount: (instance: CreatedInstance<T>) => any
  /**
   * Called on GUI controls, once they have been added as a control.
   */
  onAddedAsControl?: (instance: CreatedInstance<T>) => void
  /**
   * When hosted instance is unmounted
   */
  onUnmount: () => void
}
