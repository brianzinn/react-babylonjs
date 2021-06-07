import BaseLifecycleListener from './BaseLifecycleListener'
import { CreatedInstance } from '../CreatedInstance'
import { assignProperty } from '../helper/property'
import { FiberViewportProps } from '../generatedProps'
import { Viewport } from '@babylonjs/core/Maths/math.viewport'
import { Camera } from '@babylonjs/core/Cameras/camera'

export default class ViewportLifecycleListener extends BaseLifecycleListener<Viewport, FiberViewportProps> {
  onMount(instance?: CreatedInstance<Viewport>) {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    let viewport = instance.hostInstance as Viewport;
    let tmp: CreatedInstance<any> | null = instance.parent;

    while (tmp !== null) {
      if (tmp.metadata && tmp.metadata.isCamera === true) {
        if (instance.customProps.assignTo) {
          assignProperty(viewport, tmp.hostInstance, instance.customProps.assignTo);
        } else {
          console.log('attaching viewport to camera', tmp.hostInstance);
          (tmp as CreatedInstance<Camera>).hostInstance!.viewport = viewport;
        }
        break;
      } else {
        console.log('not a camera', JSON.stringify(instance.hostInstance), tmp.metadata);
      }
      tmp = tmp.parent
    }
  }
}
