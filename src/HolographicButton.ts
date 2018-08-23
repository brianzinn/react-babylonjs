import { Scene } from "babylonjs"
import { HolographicButton as BabylonHolographicButton, Control3D } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUI3DSceneComponent from "./GUI3DSceneComponent"

export type HolographicButtonProps = {
  text: string
  imageUrl: string
  onClick: (button: BabylonHolographicButton) => void
} & SceneComponentProps<BabylonHolographicButton>

/**
 *
 */
export default class HolographicButton extends GUI3DSceneComponent<
  BabylonHolographicButton,
  BabylonHolographicButton,
  HolographicButtonProps
> {
  protected holographicButton?: BabylonHolographicButton

  addControl(control: Control3D): void {
    console.log("not implemented adding controls to holographic button")
  }

  removeControl(control: Control3D): void {
    throw new Error("Method not implemented.")
  }

  componentsCreated(): void {
    // not used
  }

  componentWillUnmount() {
    this.props.container.removeControl(this.holographicButton)
  }

  create(scene: Scene): BabylonHolographicButton {
    this.holographicButton = new BabylonHolographicButton(this.props.name)
    this.holographicButton.text = this.props.text

    if (this.props.imageUrl) {
      this.holographicButton.imageUrl = this.props.imageUrl
    }

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
