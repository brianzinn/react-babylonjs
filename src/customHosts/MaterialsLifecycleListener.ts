import { Material } from '@babylonjs/core/Materials/material.js';
import { Scene } from '@babylonjs/core/scene.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';

import BaseLifecycleListener from './BaseLifecycleListener';
import { CreatedInstance } from '../CreatedInstance';
import { MaterialCustomProps } from '../CustomProps';
import { assignProperty } from '../helper/property';
import { FiberMaterialProps } from '../generatedProps';

export default class MaterialsLifecycleListener extends BaseLifecycleListener<Material, FiberMaterialProps> {
  onCreated(instance: CreatedInstance<Material>, scene: Scene) {
    if ((instance.customProps as MaterialCustomProps).attachToMeshesByName) {
      if (!Array.isArray((instance.customProps as MaterialCustomProps).attachToMeshesByName)) {
        console.error('AttachToMeshesByName must be an array (of strings).', (instance.customProps as MaterialCustomProps).attachToMeshesByName);
        return;
      }

      if (instance.hostInstance === undefined) {
        console.error('instance not assigned');
        return;
      }

      const meshNamesToAttachTo: string[] = (instance.customProps as MaterialCustomProps).attachToMeshesByName!.slice(0);

      // TODO: also need a listener for models or if we want to add a predicate:
      scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          setTimeout(() => {
            mesh.material = instance.hostInstance!
          }, 0);
        }
      })

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          mesh.material = instance.hostInstance!;
        }
      })
    }
  }

  onMount(instance?: CreatedInstance<Material>) {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (!(instance.customProps as MaterialCustomProps).attachToMeshesByName) {
      const material = instance.hostInstance;
      let tmp: CreatedInstance<any> | null = instance.parent;

      while (tmp !== null) {
        if (tmp.metadata && tmp.metadata.acceptsMaterials === true) {
          if (instance.customProps.assignTo) {
            assignProperty(material, tmp.hostInstance, instance.customProps.assignTo);
          } else {
            tmp.hostInstance.material = material;
          }
          break;
        }
        tmp = tmp.parent;
      }
    }
  }
}
