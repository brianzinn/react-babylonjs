import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

export default class GUI2DControlLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    if (instance.state && instance.state.added === true) {
      console.error("already added:", instance)
      return
    }

    let addedParent: CreatedInstance<any> | null = null

    let tmp = instance.parent
    while (tmp) {
      if (tmp.metadata.isGUI2DControl) {
        if (tmp.state && tmp.state.added === true) {
          addedParent = tmp
          break
        }
      }
      tmp = tmp.parent
    }

    if (addedParent) {
      this.addControls(addedParent)
    }
  }

  addControls(instance: CreatedInstance<any>) {
    instance.children.forEach(child => {
      if (child.metadata.isGUI2DControl === true) {
        console.warn("calling ", instance.hostInstance.name, ".addControl(", child.hostInstance.name, ")")
        // Need to add instance.state.isAdded = true, for components added at runtime.
        instance.hostInstance.addControl(child.hostInstance)
        child.state = { added: true }
      } else {
        console.warn("skipping addControl().  not gui2d:", child)
      }
    })

    instance.children.forEach(child => {
      this.addControls(child)
    })
  }
}
