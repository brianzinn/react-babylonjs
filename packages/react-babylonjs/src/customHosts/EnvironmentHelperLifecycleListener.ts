import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper.js'
import { CreatedInstance } from '../CreatedInstance'
import BaseLifecycleListener from './BaseLifecycleListener'

export default class EnvironmentHelperLifecycleListener extends BaseLifecycleListener<
  EnvironmentHelper,
  any
> {
  onMount(instance: CreatedInstance<EnvironmentHelper>): void {
    if (instance.hostInstance === undefined) {
      console.error('Missing instance')
      return
    }

    // for TypeScript people use <... setMainColor={[mainColor]} />
    // NOTE: this is missing in FiberEnvironmentHelperProps, so will fail in autocompletion as well as in TypeScript projects.
    if (this.props.mainColor) {
      instance.hostInstance.setMainColor(this.props.mainColor)
    }

    if (this.props.teleportEnvironmentGround) {
      console.error(
        'need to enable teleportation to ground (also from VRExperienceHelper, so call order has no impact.'
      )
    }
  }
}
