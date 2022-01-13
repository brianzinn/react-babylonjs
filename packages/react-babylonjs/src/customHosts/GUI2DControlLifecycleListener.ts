import { Control } from '@babylonjs/gui/2D/controls/control.js'
import { Grid } from '@babylonjs/gui/2D/controls/grid.js'
import { VirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard.js'
import { CreatedInstance } from '../CreatedInstance'
import { VirtualKeyboardCustomProps } from '../CustomProps'
import BaseLifecycleListener from './BaseLifecycleListener'

export default class GUI2DControlLifecycleListener extends BaseLifecycleListener<Control, any> {
  onMount(instance?: CreatedInstance<Control>): void {
    if (instance === undefined) {
      console.error('Missing instance')
      return
    }

    if (
      (instance.customProps as VirtualKeyboardCustomProps).defaultKeyboard === true &&
      instance.hostInstance instanceof VirtualKeyboard
    ) {
      // TODO: Generate from factory method.  VirtualKeyboard.CreateDefaultLayout()
      instance.hostInstance.addKeysRow(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\u2190'])
      instance.hostInstance.addKeysRow(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
      instance.hostInstance.addKeysRow([
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'",
        '\u21B5',
      ])
      instance.hostInstance.addKeysRow(['\u21E7', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'])
      instance.hostInstance.addKeysRow([' '], [{ width: '200px' }])
    }

    if (instance.state && instance.state.added === true) {
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

  /**
   * BabylonJS won't re-add the same control twice, so it's a safe operation to add.
   *
   * @param instance contol to recursively add children to.
   */
  addControls(instance: CreatedInstance<any>) {
    instance.children.forEach((child) => {
      if (child.metadata.isGUI2DControl === true) {
        if (instance.metadata.isGUI2DGrid === true) {
          const { gridRow, gridColumn } = child.customProps
          ;(instance.hostInstance as Grid).addControl(child.hostInstance, gridRow, gridColumn)
        } else {
          instance.hostInstance!.addControl(child.hostInstance)
        }

        child.state = { added: true }
      }
    })

    instance.children.forEach((child) => {
      this.addControls(child)
    })
  }
}
