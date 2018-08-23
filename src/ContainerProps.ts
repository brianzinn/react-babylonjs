import { PropsHandler } from "./SceneComponent"
import { Container } from "babylonjs-gui"
import { ControlProps } from "./2DControlProps"

export type ContainerProps = {
  background: string
  color: string
} & ControlProps

export default class ContainerPropsHandler implements PropsHandler<Container, ContainerProps> {
  handle(target: Container, props: ContainerProps): void {
    if (props.background && target) {
      if (!target.background || target.background !== props.background) {
        // console.log(`setting background on ${target.name} to:`, props.background)
        target.background = props.background
      }
    }

    if (props.color && target) {
      if (!target.color || target.color !== props.color) {
        // console.log(`setting background on ${target.name} to:`, props.color)
        target.color = props.color
      }
    }
  }
}
