import { PropsHandler } from "./SceneComponent"
import { Mesh, Vector3, Matrix } from "babylonjs"

export type MeshProps = {
  rotation?: Vector3
  position?: Vector3
  scaling?: Vector3
  visibility?: number
  showBoundingBox?: boolean
  renderingGroupId?: number
  /**
   * Not dynamically updateable - order specific with preTransformMatrix.
   */
  pivotMatrix: Matrix
  /**
   * Not dynamically updateable (has no 'getter')
   */
  preTransformMatrix: Matrix
}

export default class MeshPropsHandler implements PropsHandler<Mesh, MeshProps> {
  private hasRunOnce: boolean = false

  handle(target: Mesh, props: MeshProps): void {
    if (props.position && target) {
      if (!target.position || !target.position.equals(props.position)) {
        // console.log(`moving ${target.name} to:`, props.position)
        target.position.copyFrom(props.position)
      }
    } else {
      // console.log("no position or target:", props.position, target === undefined)
    }

    // NOTE: no accounting for rotationQuaternion, so this will have no effect when rotationQuaternion is set, obviously.
    if (props.rotation && target) {
      if (!target.rotation || !target.rotation.equals(props.rotation)) {
        // console.log(`rotating ${target.name} to:`, props.rotation)
        target.rotation.copyFrom(props.rotation)
      }
    } else {
      // console.log("no position or target:", props.position, target === undefined)
    }

    if (props.showBoundingBox !== undefined && target) {
      if (target.showBoundingBox !== props.showBoundingBox) {
        // console.log(`${props.showBoundingBox === true ? "showing" : "hiding"} bounding box on '${target.name}'`)
        target.showBoundingBox = props.showBoundingBox
      }
    }

    if (props.renderingGroupId !== undefined) {
      target.renderingGroupId = props.renderingGroupId
    }

    if (props.scaling && target && !target.scaling.equals(props.scaling)) {
      target.scaling.copyFrom(props.scaling)
    }

    if (props.visibility !== undefined && target) {
      target.visibility = props.visibility
    }

    if (
      this.hasRunOnce === false &&
      target &&
      (props.pivotMatrix !== undefined || props.preTransformMatrix !== undefined)
    ) {
      this.hasRunOnce = true

      if (props.pivotMatrix) {
        target.setPivotMatrix(props.pivotMatrix)
      }

      // order is important, as this calls setPivotMatrix(matrix, false) and doesn't set the inverse matrix:
      if (props.preTransformMatrix) {
        target.setPreTransformMatrix(props.preTransformMatrix)
      }
    }
  }
}
