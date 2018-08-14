import { Scene } from "babylonjs"
import { HolographicButton as BabylonHolographicButton, Control3D } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUISceneComponent from "./GUISceneComponent"

export type HolographicButtonProps = {
  text: string
  onClick: (button: BabylonHolographicButton) => void
} & SceneComponentProps<BabylonHolographicButton>

/**
 *
 */
export default class HolographicButton extends GUISceneComponent<
  BabylonHolographicButton,
  BabylonHolographicButton,
  HolographicButtonProps
> {
  protected holographicButton?: BabylonHolographicButton
  private added: boolean = false

  addControl(control: Control3D): void {
    console.log("not implemented adding controls to holographic button")
  }

  removeControl(control: Control3D): void {
    throw new Error("Method not implemented.")
  }

  onGuiComponentsCreated(): void {
    if (this.added === false) {
      this.added = true
      this.props.container.addControl(this.holographicButton)
    }
  }

  componentsCreated(): void {
    this.onBeforeGuiComponentsCreated()
  }

  componentWillUnmount() {
    this.props.container.removeControl(this.holographicButton)
  }

  create(scene: Scene): BabylonHolographicButton {
    this.holographicButton = new BabylonHolographicButton(this.props.name)
    this.holographicButton.text = this.props.text

    if (this.props.onClick) {
      // onPointerClickObservable has some issues...
      this.holographicButton.onPointerDownObservable.add(() => {
        this.props.onClick(this.holographicButton!)
      })
    }

    return this.holographicButton
  }

  public get propsHandlers() {
    return []
  }
}
