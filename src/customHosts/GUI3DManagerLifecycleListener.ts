import { CreatedInstance } from '../CreatedInstance';
import { Control3DCustomProps } from '../CustomProps';
import { AbstractMesh, Nullable } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui/3D/gui3DManager';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class GUI3DManagerLifecycleListener extends BaseLifecycleListener<GUI3DManager, any> {

  onMount(instance?: CreatedInstance<GUI3DManager>): void {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    this.addControls(instance, instance);
  }

  /**
   * We may have BoundComponents inbetween gui3d controls.
   */
  addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach((child: CreatedInstance<any>) => {
      if (child.metadata.isGUI3DControl === true) {
        if ('childrenAsContent' in last3DGuiControl.customProps && (last3DGuiControl.customProps as Control3DCustomProps).childrenAsContent === true) {
          last3DGuiControl.hostInstance.content = child.hostInstance;
          child.state = { added: true, content: true };
        } else {
          last3DGuiControl.hostInstance.addControl(child.hostInstance);
          child.state = { added: true };

          // NOTE: this must be called after .addControl(child.hostInstance).
          if ('linkToTransformNodeByName' in child.customProps && (child.customProps as Control3DCustomProps).linkToTransformNodeByName) {
            const toLinkTo: Nullable<AbstractMesh> = this.scene.getMeshByName((child.customProps as Control3DCustomProps).linkToTransformNodeByName!);
            if (toLinkTo !== null) {
              child.hostInstance.linkToTransformNode(toLinkTo);
            } else {
              console.error(
                'linkToTransformNode cannot find ',
                (instance.customProps as Control3DCustomProps).linkToTransformNodeByName,
                ' and does not have a scene listener for added meshes.  Declare earlier or add an issue on github.'
              );
            }
          }
        }
      }

      if (child.state && child.state.added === true && (child.customProps as Control3DCustomProps).onControlAdded) {
        (child.customProps as Control3DCustomProps).onControlAdded!(child);
      }

      if (!child.state || child.state.content !== true) {
        const last3d: CreatedInstance<any> = child.metadata.isGUI3DControl === true ? child : last3DGuiControl;
        this.addControls(child, last3d);
      }
    })

    // Here we can now do a transform with an anchor point.
    // console.error('transform gui3dmanager anchor missing')
  }
}
