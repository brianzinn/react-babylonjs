import { PropsHandler } from "./SceneComponent"
import { Mesh, Vector3 } from "babylonjs"

export type MeshProps = {
  rotation?: Vector3
  position?: Vector3
  showBoundingBox?: boolean
}

export default class MeshPropsHandler implements PropsHandler<Mesh, MeshProps> {
  handle(target: Mesh, props: MeshProps): void {
    if (props.position && target) {
      if (!target.position || !target.position.equals(props.position)) {
        console.log(`moving ${target.name} to:`, props.position)
        target.position.copyFrom(props.position)
      }
    } else {
      // console.log("no position or target:", props.position, target === undefined)
    }

    // TODO: handle rotation changes
  }
}
