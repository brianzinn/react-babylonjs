import {
  PhysicsAggregate,
  PhysicsAggregateParameters,
} from '@babylonjs/core/Physics/v2/physicsAggregate.js'
import { TransformNode } from '@babylonjs/core/Meshes/transformNode.js'
import { Scene } from '@babylonjs/core/scene.js'
import { Nullable } from '@babylonjs/core/types.js'
import { CreatedInstance } from '../CreatedInstance'
import DeferredCreationLifecycleListener from './DeferredCreationLifecycleListener'

/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener extends DeferredCreationLifecycleListener<
  PhysicsAggregate,
  any
> {
  private _parent: TransformNode | undefined

  createInstance = (
    instance: CreatedInstance<PhysicsAggregate>,
    scene: Scene,
    props: any
  ): Nullable<PhysicsAggregate> => {
    if (!this._parent) {
      return null
    }
    // these should be set from the props handler.  TODO: test.
    const options: PhysicsAggregateParameters = props._options // constructor has a default { mass: 0 }

    instance.hostInstance = new PhysicsAggregate(this._parent, props.type, options, this.scene!)
    instance.hostInstance.transformNode = this._parent
    ;(this._parent as any).physicsImpostor = instance.hostInstance
    // TODO: need to assign deferredCreationProps (@see ShadowGeneratorLifecycleListener).

    return instance.hostInstance
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    super.onParented(parent, child)
    // IPhysicsEnabledObject requires only position and rotationQuaternion
    if (
      parent.hostInstance.position === undefined ||
      parent.hostInstance.rotationQuaternion === undefined
    ) {
      console.warn(
        'PhysicsImpostor is parented to an element that does not appear to implement IPhysicsEnabledObject'
      )
    }
    this._parent = parent.hostInstance
  }
}
