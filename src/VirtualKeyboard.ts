import { Scene } from "babylonjs"
import { VirtualKeyboard as BabylonVirtualKeyboard, Control } from "babylonjs-gui"

import { SceneComponentProps, PropsHandler } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent"
import InputText from "./InputText";

export type VirtualKeyboardProps = {
  controlNames: string[]
} & SceneComponentProps<BabylonVirtualKeyboard>

/**
 * Cannot be attached directly to a 3D panel.
 */
export default class VirtualKeyboard extends GUI2DSceneComponent<BabylonVirtualKeyboard, BabylonVirtualKeyboard, VirtualKeyboardProps> {
  protected virtualKeyboard?: BabylonVirtualKeyboard
  private keyboardConnected: boolean = false;

  componentsCreated(): void {
    if (this.keyboardConnected === false) {
        this.keyboardConnected = true;
        if (this.props.controlNames) {
            this.props.controlNames.forEach(controlName => {
                let control = this.props.componentRegistry.registeredComponents.find(control => control.name === controlName)
                if (control === undefined) {
                    console.log('Virtual Keyboard cannot locate:', controlName);
                } else {
                    if (control instanceof InputText) {
                        this.virtualKeyboard!.connect((control as any).babylonObject)
                    } else {
                        console.error(`Can only connect to input text..  Not: '${controlName}'`);
                    }
                }
            })
        } else {
            console.warn('Virtual Keyboard has nothing to connect to.  Will always be displayed.')
        }
    } else {
        // TODO: fix so that this is called only once.
        // console.log('keyboard already connected.')
    }
  }

  addControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  removeControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  create(scene: Scene): BabylonVirtualKeyboard {
   
    this.virtualKeyboard = BabylonVirtualKeyboard.CreateDefaultLayout()

    return this.virtualKeyboard
  }

  public get propsHandlers() {
    return []
  }
}
