import { Gizmo } from '@babylonjs/core/Gizmos/gizmo';
import { Texture } from '@babylonjs/core/Materials/Textures/texture.js';

import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class GizmoLifecycleListener extends BaseLifecycleListener<Texture, any> {
  onMount(instance: CreatedInstance<Texture>) {
    const gizmo = instance.hostInstance as any as Gizmo;

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
      console.error('utility layer not found (not attaching to mesh)');
    } else {
      // TODO: determine if we are searching for a Mesh or Node to attach to.
      let tmp: CreatedInstance<any> | null = instance.parent;
      while (tmp !== null) {
        if (tmp.metadata && tmp.metadata.isMesh === true) {
          gizmo.attachedMesh = tmp.hostInstance;
          break;
        }
        tmp = tmp.parent;
      }
    }
  }
}
