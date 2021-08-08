import { Camera } from '@babylonjs/core/Cameras/camera.js';

import BaseLifecycleListener from './BaseLifecycleListener';
import { CreatedInstance } from '../CreatedInstance';

export default class CameraLifecycleListener extends BaseLifecycleListener<Camera, any> {

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    super.onParented(parent, child);
    if (parent.metadata.isNode && child.metadata.isNode) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance;
    }
  }

  onMount(instance: CreatedInstance<any>): void {
    if (instance.hostInstance === undefined) {
      console.error('Missing instance');
      return;
    }

    // prevent default unless explicitly specified.
    const camera = instance.hostInstance as Camera
    const noPreventDefault = this.props.noPreventDefault === false ? false : true;

    // console.log('camera.attachControl:', camera, this.canvas, noPreventDefault)
    // should be a custom property for autoAttaching?  Will be an issue for multiple cameras.
    camera.attachControl(this.scene.getEngine().getRenderingCanvas(), noPreventDefault);

    // Targeting removed from here - handled by TargetPropsHandler
  }
}
