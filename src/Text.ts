import { Scene } from "babylonjs"
import { TextBlock, Control } from "babylonjs-gui"

import { SceneComponentProps, PropsHandler } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent"
import ControlPropsHandler from "./2DControlProps"

export type TextProps = {
  text: string
  textWrapping?: boolean
  color?: string
  fontSize?: number
  fontStyle?: string
  fontFamily?: string
  textHorizontalAlignment?: number
  textVerticalAlignment?: number
} & SceneComponentProps<TextBlock>

export class TextPropsHandler implements PropsHandler<TextBlock, TextProps> {
  handle(target: TextBlock, props: TextProps): void {
    if (props.text && target) {
      if (!target.text || target.text !== props.text) {
        target.text = props.text
      }
    }
  }
}

/**
 * Cannot be attached directly to a 3D panel.
 */
export default class Text extends GUI2DSceneComponent<TextBlock, TextBlock, TextProps> {
  protected textBlock?: TextBlock

  componentsCreated(): void {
    // not used
  }

  addControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  removeControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  create(scene: Scene): TextBlock {
    // allow newline char, but should force users to use text={'line1.\nline2.'} to override.
    let text = this.props.text.replace(/(\\n)+/g, "\n")
    this.textBlock = new TextBlock(this.props.name, text)

    // this belongs in control props handler
    if (this.props.color) {
      this.textBlock.color = this.props.color
    }

    // TODO: move all of these to props handler
    if (this.props.fontSize) {
      this.textBlock.fontSize = this.props.fontSize
    }

    if (this.props.fontStyle) {
      this.textBlock.fontStyle = this.props.fontStyle
    }

    if (this.props.fontFamily) {
      this.textBlock.fontFamily = this.props.fontFamily
    }

    if (this.props.textWrapping !== undefined) {
      this.textBlock.textWrapping = this.props.textWrapping
    }

    // 0 is falsey
    if (this.props.textHorizontalAlignment !== undefined) {
      this.textBlock.textHorizontalAlignment = this.props.textHorizontalAlignment
    }

    // 0 is falsey
    if (this.props.textVerticalAlignment !== undefined) {
      this.textBlock.textVerticalAlignment = this.props.textVerticalAlignment
    }

    return this.textBlock
  }

  public get propsHandlers() {
    return [
      new ControlPropsHandler(),
      new TextPropsHandler()
    ]
  }
}
