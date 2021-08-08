
import { Control3D } from '@babylonjs/gui/3D/controls/control3D.js';
import { Nullable } from '@babylonjs/core/types.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';

import BaseLifecycleListener from './BaseLifecycleListener';
import { CreatedInstance } from '../CreatedInstance';
import { Control3DCustomProps } from '../CustomProps';

export default class GUI3DControlLifecycleListener extends BaseLifecycleListener<Control3D, any> {

  onMount(instance: CreatedInstance<Control3D>): void {
    if (instance.state && instance.state.added === true) {
      return;
    }

    let addedParent: CreatedInstance<any> | null = null;

    let tmp = instance.parent;
    while (tmp) {
      if (tmp.metadata.isGUI3DControl === true) {
        if (tmp.state && tmp.state.added === true) {
          addedParent = tmp;
          break;
        }
      }
      tmp = tmp.parent;
    }

    if (addedParent) {
      this.addControls(addedParent, addedParent);
    }
  }

  addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>) {
    const last3d: CreatedInstance<any> = instance.metadata.isGUI3DControl === true ? instance : last3DGuiControl;

    instance.children.forEach(child => {
      if ((last3d.customProps as Control3DCustomProps).childrenAsContent === true) {
        last3d.hostInstance.content = child.hostInstance; // child.hostInstance will be GUI.Control (ie: 2D)
        child.state = { added: true, content: true };
      } else if (child.metadata.isGUI3DControl === true) {
        last3d.hostInstance.addControl(child.hostInstance);

        // NOTE: this must be called after .addControl(child.hostInstance).
        if ((child.customProps as Control3DCustomProps).linkToTransformNodeByName) {
          const toLinkTo: Nullable<AbstractMesh> = this.scene!.getMeshByName((child.customProps as Control3DCustomProps).linkToTransformNodeByName!);
          if (toLinkTo !== null) {
            child.hostInstance.linkToTransformNode(toLinkTo);
            // toLinkTo.computeWorldMatrix()
          } else {
            console.error(
              'linkToTransformNode cannot find Mesh:',
              (instance.customProps as Control3DCustomProps).linkToTransformNodeByName,
              ' and does not have a scene listener for added meshes. Declare Mesh earlier or add an issue on github (TransformNode does not work).'
            );
          }
        }

        child.state = { added: true };
      }
    })

    if (instance.children.length > 0) {
      instance.children.forEach(child => {
        if (!child.state || child.state.content !== true) {
          if (child.state && child.state.added === true && typeof (child.customProps as Control3DCustomProps).onControlAdded === 'function') {
            (child.customProps as Control3DCustomProps).onControlAdded!(child);
          }

          this.addControls(child, last3d);
        }
      })
    }
  }
}
