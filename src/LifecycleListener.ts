import { CreatedInstance } from "./CreatedInstance"

export interface LifecycleListener {
  onParented: (parent: CreatedInstance<any>, child: CreatedInstance<any>) => any
  onChildAdded: (child: CreatedInstance<any>, parent: CreatedInstance<any>) => any
  onMount: (instance: CreatedInstance<any>) => any
  /**
   * Called on GUI controls, once they have been added as a control.
   */
  onAddedAsControl?: (instance: CreatedInstance<any>) => void
}
