import { Scene } from "babylonjs"
import { TextBlock, Control3D } from "babylonjs-gui"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"

export type TextProps = {
  text: string
  color: string
  fontSize: number
} & SceneComponentProps<TextBlock>

/**
 * Not usable in current form - need a plan and texture.  Cannot be used in 3D.
 */
export default class Text extends SceneComponent<TextBlock, TextBlock, TextProps> {
  addControl(control: Control3D): void {
    console.warn("text does not control")
  }
  removeControl(control: Control3D): void {
    console.warn("text does not remove control")
  }
  onGuiComponentsCreated(): void {
    console.warn("text onGuiComponentsCreated() is no-op")
  }
  protected textBlock?: TextBlock

  create(scene: Scene): TextBlock {
    this.textBlock = new TextBlock(this.props.name, this.props.text)

    if (this.props.color) {
      this.textBlock.color = this.props.color
    }
    if (this.props.fontSize) {
      this.textBlock.fontSize = this.props.fontSize
    }
    return this.textBlock
  }

  componentsCreated(): void {}

  public get propsHandlers() {
    return []
  }
}
