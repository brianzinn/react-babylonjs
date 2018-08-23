import { Scene, InstancingAttributeInfo, EventState } from "babylonjs"
import { Button as BabylonButton, Control, Vector2WithInfo } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent"
import ControlPropsHandler, { ControlProps } from "./2DControlProps"
import { RectangleProps, RectanglePropsHandler } from "./Rectangle"
import ContainerPropsHandler from "./ContainerProps"

export type ButtonProps = {
  /**
   * Only assignable on creation. No props listeners.
   */
  onPointerDown: (vector2WithInfo: Vector2WithInfo, state: EventState) => void
} & RectangleProps &
  SceneComponentProps<BabylonButton>

/**
 * 2D Button
 */
export default class Button extends GUI2DSceneComponent<BabylonButton, BabylonButton, ButtonProps> {
  protected button?: BabylonButton

  componentsCreated(): void {
    // not used
  }

  addControl(control: Control): void {
    this.button!.addControl(control)
  }

  removeControl(control: Control): void {
    this.button!.removeControl(control)
  }

  create(scene: Scene): BabylonButton {
    this.button = new BabylonButton(this.props.name)

    // Missing click/enter/move/out/etc.
    if (typeof this.props.onPointerDown === "function") {
      this.button.onPointerDownObservable.add(this.props.onPointerDown)
    }

    return this.button
  }

  public get propsHandlers() {
    return [new ContainerPropsHandler(), new ControlPropsHandler(), new RectanglePropsHandler()]
  }
}
