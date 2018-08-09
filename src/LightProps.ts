import { PropsHandler } from "./SceneComponent"
import { Light, Vector3 } from "babylonjs"

export type LightProps = {
  intensity?: number
  position?: Vector3
}

export default class LightPropsHandler implements PropsHandler<Light, LightProps> {
  handle(target: Light, props: LightProps): void {
    if (props.intensity) {
      target.intensity = props.intensity
    }

    if (props.position) {
      let lightTarget: any = target
      if (!lightTarget.position || !lightTarget.position.equals(props.position)) {
        // console.log(`moving light ${target.name} to:`, props.position);
        lightTarget.position.copyFrom(props.position)
      }
    }
  }
}
