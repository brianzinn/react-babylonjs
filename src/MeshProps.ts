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

    // NOTE: no accounting for rotationQuaternion, so this will have no effect when rotationQuaternion is set, obviously.
    if (props.rotation && target) {
      if (!target.rotation || !target.rotation.equals(props.rotation)) {
        console.log(`rotating ${target.name} to:`, props.rotation)
        target.rotation.copyFrom(props.rotation)
      }
    } else {
      // console.log("no position or target:", props.position, target === undefined)
    }

    if (props.showBoundingBox !== undefined && target) {
      if (target.showBoundingBox !== props.showBoundingBox) {
        console.log(`${(props.showBoundingBox === true) ? 'showing' : 'hiding'} bounding box on '${target.name}'`)
        target.showBoundingBox = props.showBoundingBox;
      }
    }
  }
}
