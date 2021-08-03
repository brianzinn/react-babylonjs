import { VRExperienceHelper } from '@babylonjs/core';

import { CreatedInstance } from '../CreatedInstance';
import { VRExperienceHelperCustomProps } from '../CustomProps';
import BaseLifecycleListener from './BaseLifecycleListener';
import { FiberVRExperienceHelperProps } from '../generatedProps';

export default class VRExperienceHelperLifecycleListener extends BaseLifecycleListener<VRExperienceHelper, FiberVRExperienceHelperProps> {

  onMount(instance: CreatedInstance<VRExperienceHelper>): void {
    if ((this.props as VRExperienceHelperCustomProps).enableInteractions) {
      instance.hostInstance!.enableInteractions();
    }
  }
}
