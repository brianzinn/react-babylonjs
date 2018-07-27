import { PropsInitialiser } from "./SceneComponent"
import { Light } from "babylonjs"

export type LightProps = {
  intensity?: number
}

export default class LightPropsInitialiser
  implements PropsInitialiser<Light, LightProps> {
  init(target: Light, props: LightProps): void {
    if (props.intensity) {
      console.log("Light Initiliaser setting light intensity:", props.intensity)
      target.intensity = props.intensity
    }
  }
}
