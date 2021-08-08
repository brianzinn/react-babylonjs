import { VRExperienceHelper } from '@babylonjs/core/Cameras/VR/vrExperienceHelper.js';

import { CreatedInstance } from '../CreatedInstance';
import { VRExperienceHelperCustomProps } from '../CustomProps';
import BaseLifecycleListener from './BaseLifecycleListener';
import { FiberVRExperienceHelperProps } from '../generatedProps';

/**
 * This should be replaced entirely with XR version.
 */
export default class VRExperienceHelperLifecycleListener extends BaseLifecycleListener<VRExperienceHelper, FiberVRExperienceHelperProps> {

  onMount(instance: CreatedInstance<VRExperienceHelper>): void {
    if ((this.props as VRExperienceHelperCustomProps).enableInteractions) {
      instance.hostInstance!.enableInteractions();
    }
  }
}
