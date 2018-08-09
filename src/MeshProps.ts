import { PropsHandler } from "./SceneComponent"
import { Mesh, Vector3 } from "babylonjs"

export type MeshProps = {
  position?: Vector3
  showBoundingBox?: boolean
}

export default class MeshPropsHandler implements PropsHandler<Mesh, MeshProps> {
  handle(target: Mesh, props: MeshProps): void {
    if (props.position && target) {
      if (!target.position || !target.position.equals(props.position)) {
        console.log(`moving ${target.name} to:`, props.position)
        target.position.copyFrom(props.position)
      } else {
        console.log("not moving", target.name, target.position)
      }
    } else {
      console.log("no position or target:", props.position, target === undefined)
    }
  }
}
