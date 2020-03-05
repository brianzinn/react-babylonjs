import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Control } from '@babylonjs/gui/2D/controls/control'
import { VirtualKeyboard } from "@babylonjs/gui/2D/controls/virtualKeyboard"

export default class GUI2DControlLifecycleListener implements LifecycleListener<Control> {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance?: CreatedInstance<Control>): void {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (instance.customProps.defaultKeyboard === true) {
      if (instance.hostInstance instanceof VirtualKeyboard) {
        // TODO: Generate from factory method.  VirtualKeyboard.CreateDefaultLayout()
        instance.hostInstance.addKeysRow(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "\u2190"])
        instance.hostInstance.addKeysRow(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"])
        instance.hostInstance.addKeysRow(["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\u21B5"])
        instance.hostInstance.addKeysRow(["\u21E7", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"])
        instance.hostInstance.addKeysRow([" "], [{ width: "200px" }])
      }
    }

    if (instance.state && instance.state.added === true) {
      return;
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
        // console.warn("calling ", instance.hostInstance.name, ".addControl(", child.hostInstance.name, ")")
        instance.hostInstance.addControl(child.hostInstance)
        child.state = { added: true }
      }
    })

    if (instance.customProps.connectControlNames !== undefined && Array.isArray(instance.customProps.connectControlNames)) {
      // let controlNames: string[] = instance.customProps.connectControlNames
      let root = instance
      while (root.parent !== null) {
        root = root.parent
      }
    }

    instance.children.forEach(child => {
      this.addControls(child)
    })
  }

  onUnmount(): void {/* empty */}
}
