import { GlowLayer } from '@babylonjs/core/Layers/glowLayer.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import { Mesh } from '@babylonjs/core/Meshes/mesh.js';

import { CreatedInstance } from '../CreatedInstance';
import { FiberAbstractMeshProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class AbstractMeshLifecycleListener extends BaseLifecycleListener<AbstractMesh, FiberAbstractMeshProps> {

  onMount(instance?: CreatedInstance<AbstractMesh>) {
    if (instance === undefined || instance.hostInstance === undefined) {
      console.error('Missing instance');
      return;
    }

    let mesh: AbstractMesh = instance.hostInstance;
    let tmp: CreatedInstance<any> | null = instance.parent;

    while (tmp !== null) {
      if (tmp.metadata && tmp.metadata.isGlowLayer === true) {
        if (tmp.customProps.addIncludeOnlyChildren === true) {
          // TODO: listen for mesh disposal to remove from inclusion list?
          (tmp.hostInstance as GlowLayer).addIncludedOnlyMesh(mesh as Mesh);

          if (instance.customProps.childMeshesNotTracked === true) {
           for( const childMesh of mesh.getChildMeshes(false)) {
            (tmp.hostInstance as GlowLayer).addIncludedOnlyMesh(childMesh as Mesh);
           }
          }
        }
        break;
      }
      tmp = tmp.parent;
    }
  }

  /**
   * This was copied from 'NodeLifecycleListener'.  TODO: Would be better to have inheritance hierarchy like 'BaseLifecycleListener'.
   */
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    super.onParented(parent, child);
    if (parent.metadata.isNode && child.metadata.isNode) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance;
    }
  }
}
