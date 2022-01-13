import { GizmoManager } from "@babylonjs/core/Gizmos/gizmoManager.js";
import { CreatedInstance } from "../CreatedInstance";
import { FiberGizmoManagerProps } from "../generatedProps";
import BaseLifecycleListener from "./BaseLifecycleListener";

export default class GizmoManagerLifecycleListener extends BaseLifecycleListener<
  GizmoManager,
  FiberGizmoManagerProps
> {
  onChildAdded(
    child: CreatedInstance<any>,
    parent: CreatedInstance<any>
  ): void {
    const gizmoManager: GizmoManager = parent.hostInstance! as GizmoManager;
    // TODO: check usePointerToAttachGizmos?
    if (child.metadata && child.metadata.isGizmo !== true) {
      if (child.metadata.isNode === true) {
        gizmoManager.attachToNode(child.hostInstance);
      } else if (child.metadata.isMesh === true) {
        gizmoManager.attachToMesh(child.hostInstance);
      }
    }
  }
}
