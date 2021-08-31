import { GizmoManager } from '@babylonjs/core/Gizmos/gizmoManager.js';

import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class GizmoManagerLifecycleListener extends BaseLifecycleListener<GizmoManager, any> {

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): void {
    console.log('child added to gizmomanager', child);
    const gizmoManager: GizmoManager = parent.hostInstance! as GizmoManager;
    // TODO: check usePointerToAttachGizmos?
    if (child.metadata && child.metadata.isGizmo !== true) {
      console.log('attaching to gizmo manager')
      if (child.metadata.isNode === true) {
        gizmoManager.attachToNode(child.hostInstance);
      } else if (child.metadata.isMesh === true) {
        gizmoManager.attachToMesh(child.hostInstance);
      }
    }
  }
}
