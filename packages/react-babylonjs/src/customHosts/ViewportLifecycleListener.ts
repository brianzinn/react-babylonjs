import { Viewport } from '@babylonjs/core/Maths/math.viewport.js';
import { Camera } from '@babylonjs/core/Cameras/camera.js';

import BaseLifecycleListener from './BaseLifecycleListener';
import { CreatedInstance } from '../CreatedInstance';
import { assignProperty } from '../helper/property';
import { FiberViewportProps } from '../generatedProps';

export default class ViewportLifecycleListener extends BaseLifecycleListener<Viewport, FiberViewportProps> {
  onMount(instance?: CreatedInstance<Viewport>) {
    if (instance === undefined) {
      console.error('Missing instance (for viewport)');
      return;
    }

    const viewport = instance.hostInstance as Viewport;
    let tmp: CreatedInstance<any> | null = instance.parent;

    while (tmp !== null) {
      if (tmp.metadata && tmp.metadata.isCamera === true) {
        if (instance.customProps.assignTo) {
          assignProperty(viewport, tmp.hostInstance, instance.customProps.assignTo);
        } else {
          (tmp as CreatedInstance<Camera>).hostInstance!.viewport = viewport;
        }
        break;
      }
      tmp = tmp.parent;
    }
  }
}
