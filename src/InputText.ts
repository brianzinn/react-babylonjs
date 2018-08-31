import { Scene, EventState } from "babylonjs"
import { InputText as BabylonInputText, Control } from "babylonjs-gui"

import { SceneComponentProps, PropsHandler } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent"
import ControlPropsHandler from "./2DControlProps"

export type InputTextProps = {
  text: string
  color?: string
  fontSize?: number
  fontStyle?: string
  fontFamily?: string
  onTextChanged?: (eventData: BabylonInputText, eventState: EventState) => void
} & SceneComponentProps<BabylonInputText>

export class InputTextPropsHandler implements PropsHandler<BabylonInputText, InputTextProps> {
  handle(target: BabylonInputText, props: InputTextProps): void {
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
export default class InputText extends GUI2DSceneComponent<BabylonInputText, BabylonInputText, InputTextProps> {
  protected inputText?: BabylonInputText

  componentsCreated(): void {
    // not used
  }

  addControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  removeControl(control: Control): void {
    throw new Error("Method not implemented.")
  }

  create(scene: Scene): BabylonInputText {
    this.inputText = new BabylonInputText(this.props.name, this.props.text)

    if (this.props.onTextChanged && typeof this.props.onTextChanged == "function") {
      this.inputText.onTextChangedObservable.add(this.props.onTextChanged)
    }

    // this belongs in control props handler
    if (this.props.color) {
      this.inputText.color = this.props.color
    }

    // TODO: move all of these to props handler
    if (this.props.fontSize) {
      this.inputText.fontSize = this.props.fontSize
    }

    if (this.props.fontStyle) {
      this.inputText.fontStyle = this.props.fontStyle
    }

    if (this.props.fontFamily) {
      this.inputText.fontFamily = this.props.fontFamily
    }

    return this.inputText
  }

  public get propsHandlers() {
    return [new ControlPropsHandler(), new InputTextPropsHandler()]
  }
}
