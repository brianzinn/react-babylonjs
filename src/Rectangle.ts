import { Scene } from "babylonjs"
import { Control, Rectangle as BabylonRectangle } from "babylonjs-gui"

import { SceneComponentProps, PropsHandler } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent"
import ContainerPropsHandler, { ContainerProps } from "./ContainerProps"
import ControlPropsHandler from "./2DControlProps"

export type RectangleProps = {
  thickness: number
  cornerRadius: number
} & ContainerProps &
  SceneComponentProps<BabylonRectangle>

export class RectanglePropsHandler implements PropsHandler<BabylonRectangle, RectangleProps> {
  handle(target: BabylonRectangle, props: RectangleProps): void {
    if (props.thickness && target) {
      if (!target.thickness || target.thickness !== props.thickness) {
        // console.log(`setting '${target.name}' thickness to:`, props.thickness)
        target.thickness = props.thickness
      }
    }

    if (props.cornerRadius && target) {
      if (!target.cornerRadius || target.cornerRadius !== props.cornerRadius) {
        // console.log(`setting '${target.name}' cornerRadius to:`, props.cornerRadius)
        target.cornerRadius = props.cornerRadius
      }
    }
  }
}

export default class Rectangle extends GUI2DSceneComponent<BabylonRectangle, BabylonRectangle, RectangleProps> {
  private rectangle?: BabylonRectangle

  addControl(control: Control): void {
    this.rectangle!.addControl(control)
  }
  removeControl(control: Control): void {
    this.rectangle!.removeControl(control)
  }

  componentWillReceiveProps() {
    // not implemented for StackPanel
  }

  create(scene: Scene): BabylonRectangle {
    this.rectangle = new BabylonRectangle(this.props.name)

    return this.rectangle
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new ContainerPropsHandler(), new ControlPropsHandler(), new RectanglePropsHandler()]
  }
}
