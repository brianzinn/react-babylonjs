import { PropsHandler } from "./SceneComponent"
import { Mesh, Vector3 } from "babylonjs"

export type MeshProps = {
  position?: Vector3
  showBoundingBox?: boolean
}

export default class MeshPropsHandler implements PropsHandler<Mesh, MeshProps> {
  handle(target: Mesh, props: MeshProps): void {
    if (props.position) {
      target.position = props.position
    }
  }
}
