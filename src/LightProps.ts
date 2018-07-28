import { PropsInitialiser } from "./SceneComponent"
import { Light } from "babylonjs"

export type LightProps = {
  intensity?: number
}

export default class LightPropsInitialiser implements PropsInitialiser<Light, LightProps> {
  init(target: Light, props: LightProps): void {
    if (props.intensity) {
      target.intensity = props.intensity
    }
  }
}
