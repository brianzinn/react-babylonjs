import { PropsInitialiser, NodeProps } from "./SceneComponent"
import { Camera, Vector3, FreeCamera } from "babylonjs"

export type CameraProps = {
  target?: Vector3
} & NodeProps

export default class CameraPropsInitialiser
  implements PropsInitialiser<Camera, CameraProps> {
  init(target: Camera, props: CameraProps): void {
    console.log("camera props init props:", props)
    if (props.target) {
      if (target instanceof FreeCamera) {
        // TODO: add other TargetCamera types
        ;(target as FreeCamera).setTarget(props.target)
      } else {
        console.error("Target set on an unsupported Camera.")
      }
    }
  }
}
