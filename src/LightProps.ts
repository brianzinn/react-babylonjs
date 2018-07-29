import { PropsHandler } from "./SceneComponent"
import { Light } from "babylonjs"

export type LightProps = {
  intensity?: number
}

export default class LightPropsHandler implements PropsHandler<Light, LightProps> {
  handle(target: Light, props: LightProps): void {
    if (props.intensity) {
      target.intensity = props.intensity
    }
  }
}
