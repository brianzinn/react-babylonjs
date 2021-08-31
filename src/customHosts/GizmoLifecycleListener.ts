import { Gizmo } from '@babylonjs/core/Gizmos/gizmo.js';

import { CreatedInstance } from '../CreatedInstance';
import { GizmoCustomProps } from '../CustomProps';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class GizmoLifecycleListener extends BaseLifecycleListener<Gizmo, any> {
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

    console.log('skipAutoAttach:', gizmoProps.skipAutoAttach);

    if (gizmoProps.skipAutoAttach !== true || (gizmoProps.attachGizmoToMesh !== false && gizmoProps.attachGizmoToNode !== false)) {
      const searchType = gizmoProps.attachGizmoToMesh === undefined && gizmoProps.attachGizmoToNode === undefined
        ? 'node' // default with no attach preference specified.
        : gizmoProps.attachGizmoToNode === true ? 'node' : 'mesh';

      let tmp: CreatedInstance<any> | null = instance.parent;
      while (tmp !== null) {
        if (searchType === 'mesh' && tmp.metadata && tmp.metadata.isMesh === true) {
          gizmo.attachedMesh = tmp.hostInstance;
          break;
        }
        if (searchType === 'node' && tmp.metadata && tmp.metadata.isNode === true) {
          gizmo.attachedNode = tmp.hostInstance;
          break;
        }
        tmp = tmp.parent;
      }
    }
  }
}
