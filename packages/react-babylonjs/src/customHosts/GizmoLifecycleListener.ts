import { Gizmo } from '@babylonjs/core/Gizmos/gizmo.js';

import { CreatedInstance } from '../CreatedInstance';
import { GizmoCustomProps } from '../CustomProps';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class GizmoLifecycleListener extends BaseLifecycleListener<Gizmo, GizmoCustomProps> {
  onMount(instance: CreatedInstance<Gizmo>) {
    const gizmo = instance.hostInstance!;
    const gizmoProps: GizmoCustomProps = instance.customProps;

    if (gizmoProps.skipUtilityLayerAttach !== true) {
      let tmp: CreatedInstance<any> | null = instance.parent;

      let foundUtilityLayerRender = false;
      while (tmp !== null) {
        if (tmp.metadata && tmp.metadata.isUtilityLayerRenderer === true) {
          gizmo.gizmoLayer = tmp.hostInstance;
          foundUtilityLayerRender = true;
          break;
        }
        tmp = tmp.parent;
      }

      if (foundUtilityLayerRender !== true) {
        console.warn('utility layer not found (if intentional use skipUtilityLayerAttach)');
      }
    }

    if (gizmoProps.skipAutoAttach !== true || (gizmoProps.attachGizmoToMesh !== false && gizmoProps.attachGizmoToNode !== false)) {
      const searchType = gizmoProps.attachGizmoToMesh === undefined && gizmoProps.attachGizmoToNode === undefined
        ? null // default with no attach preference specified
        : gizmoProps.attachGizmoToMesh === true
          ? 'mesh'
          : gizmoProps.attachGizmoToNode === true ? 'node': null;

      let tmp: CreatedInstance<any> | null = instance.parent;
      while (tmp !== null) {
        // Note: LightGizmo expects attachedMesh when assigning light, so check Mesh first
        // https://forum.babylonjs.com/t/lightgizmo-attaching-a-node/23653/3
        if ((searchType === null || searchType === 'mesh') && tmp.metadata?.isMesh === true) {
          gizmo.attachedMesh = tmp.hostInstance;
          break;
        }
        if ((searchType === null || searchType === 'node') && tmp.metadata?.isNode === true) {
          gizmo.attachedNode = tmp.hostInstance;
          break;
        }
        tmp = tmp.parent;
      }
    }
  }
}
