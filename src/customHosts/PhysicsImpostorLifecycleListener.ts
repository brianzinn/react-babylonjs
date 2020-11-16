import { DecoratedInstance } from "../DecoratedInstance"
import { IPhysicsEnabledObject, Nullable, Scene, PhysicsImpostor, PhysicsImpostorParameters } from "@babylonjs/core"
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener";

/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener extends DeferredCreationLifecycleListener<PhysicsImpostor> {

  private _parent: IPhysicsEnabledObject | undefined;

  constructor(scene: Scene, props: any) {
    super(scene, props)
  }

  createInstance = (instance: DecoratedInstance<PhysicsImpostor>, scene: Scene, props: any) : Nullable<PhysicsImpostor> => {
    if (!this._parent) {
      return null;
    }
    // these should be set from the props handler.  TODO: test.
    const options: PhysicsImpostorParameters = props._options // constructor has a default { mass: 0 }

    // this will break something maybe as types will not match (also only copies own properties?)
    Object.assign(instance, new PhysicsImpostor(this._parent, props.type, options, this.scene!));
    instance.object = this._parent;
    (this._parent as any).physicsImpostor = instance;
    // TODO: need to assign deferredCreationProps (@see ShadowGeneratorLifecycleListener).
    
    return instance;
  }

  onParented(parent: DecoratedInstance<IPhysicsEnabledObject>, child: DecoratedInstance<unknown>): any {
      // IPhysicsEnabledObject requires only position and rotationQuaternion
      if (parent.position === undefined || parent.rotationQuaternion === undefined) {
          console.warn('PhysicsImpostor is parented to an element that does not appear to implement IPhysicsEnabledObject');
      }
      this._parent = parent;
  }

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any { /* empty */ }

  onUnmount(): void {/* empty */}
}
