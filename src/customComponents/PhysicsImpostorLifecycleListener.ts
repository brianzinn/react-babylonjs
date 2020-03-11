import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { IPhysicsEnabledObject, Nullable, Scene, PhysicsImpostor, PhysicsImpostorParameters } from "@babylonjs/core"

/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener implements LifecycleListener<PhysicsImpostor> {

  private _parent: IPhysicsEnabledObject | undefined;
  private props: any
  private scene: Nullable<Scene>

  constructor(scene: Nullable<Scene>, props: any) {
    this.scene = scene
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
      // IPhysicsEnabledObject requires only position and rotationQuaternion
      if (parent.hostInstance.position === undefined || parent.hostInstance.rotationQuaternion === undefined) {
          console.warn('PhysicsImpostor is parented to an element that does not appear to implement IPhysicsEnabledObject');
      }
      this._parent = parent.hostInstance;  
  }

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any { /* empty */ }

  onMount(instance: CreatedInstance<PhysicsImpostor>): void {
    if (this._parent) {
      // these should be set from the props handler.  TODO: test.
      const options: PhysicsImpostorParameters = this.props._options // constructor has a default { mass: 0 }

      instance.hostInstance = new PhysicsImpostor(this._parent, this.props.type, options, this.scene!);
      instance.hostInstance.object = this._parent;
      (this._parent as any).physicsImpostor = instance.hostInstance;
      // TODO: need to assign deferredCreationProps (@see ShadowGeneratorLifecycleListener).
    } else {
        console.warn('physics impostor not attached to object.')
    }
  }

  onUnmount(): void {/* empty */}
}
