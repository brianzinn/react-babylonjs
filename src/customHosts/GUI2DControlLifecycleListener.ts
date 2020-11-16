import { DecoratedInstance } from "../DecoratedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Control } from '@babylonjs/gui/2D/controls/control';
import { VirtualKeyboard } from "@babylonjs/gui/2D/controls/virtualKeyboard";
import { Container } from "@babylonjs/gui/2D/controls";

export default class GUI2DControlLifecycleListener implements LifecycleListener<Control> {
  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any { /* empty */ }

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any { /* empty */ }

  onMount(instance?: DecoratedInstance<Control>): void {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (instance.__rbs.customProps.defaultKeyboard === true && instance instanceof VirtualKeyboard) {
      // TODO: Generate from factory method.  VirtualKeyboard.CreateDefaultLayout()
      instance.addKeysRow(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "\u2190"]);
      instance.addKeysRow(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
      instance.addKeysRow(["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\u21B5"]);
      instance.addKeysRow(["\u21E7", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]);
      instance.addKeysRow([" "], [{ width: "200px" }]);
    }

    if (instance.__rbs.state && instance.__rbs.state.added === true) {
      return;
    }

    let addedParent: DecoratedInstance<any> | null = null;

    let tmp: DecoratedInstance<unknown> = instance.__rbs.parent;
    while (tmp) {
      if (tmp.__rbs.metadata.isGUI2DControl) {
        if (tmp.__rbs.state && tmp.__rbs.state.added === true) {
          addedParent = tmp;
          break;
        }
      }
      tmp = tmp.__rbs.parent;
    }

    if (addedParent) {
      this.addControls(addedParent);
    }
  }

  /**
   * BabylonJS won't re-add the same control twice, so it's a safe operation to add.
   *
   * @param instance contol to recursively add children to.
   */
  addControls(instance: DecoratedInstance<Container>) {
    instance.__rbs.children.forEach((child: DecoratedInstance<unknown>) => {
      if (child.__rbs.metadata.isGUI2DControl === true) {
        // console.warn(`calling [${instance.name}].addControl(${child.name})`);
        instance.addControl(child as any);
        child.__rbs.state = { added: true };
      }
    })

    if (instance.__rbs.customProps.connectControlNames !== undefined && Array.isArray(instance.__rbs.customProps.connectControlNames)) {
      // let controlNames: string[] = instance.customProps.connectControlNames
      let root: DecoratedInstance<any> = instance;
      while (root.__rbs.parent !== null) {
        root = root.__rbs.parent;
      }
    }

    // not the 'children' property of Container
    instance.__rbs.children.forEach((child: DecoratedInstance<any>) => {
      this.addControls(child);
    })
  }

  onUnmount(): void { /* empty */ }
}
