import { PropsInitialiser } from "./SceneComponent"
import { Mesh, Vector3 } from "babylonjs"

export type MeshProps = {
  position?: Vector3
}

export default class MeshPropsInitialiser
  implements PropsInitialiser<Mesh, MeshProps> {
  init(target: Mesh, props: MeshProps): void {
    if (props.position) {
      console.log(` > mesh init '${target.name}' position:`, props.position)
      target.position = props.position
    }
  }
}
