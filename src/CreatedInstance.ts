import { Observer } from "@babylonjs/core/Misc/observable.js";
import { Nullable } from "@babylonjs/core/types.js";

import { AnyCustomProps, CustomProps } from "./CustomProps";
import { LifecycleListener } from "./LifecycleListener";
import { HasPropsHandlers } from "./PropsHandler";

export interface InstanceMetadataParameter {
  delayCreation?: boolean // if it should not be created automatically, but by LifecycleListener (ie: ShadowGenerator needs an IShadowLight)
  shadowGenerator?: boolean // children will auto-cast shadows
  acceptsMaterials?: boolean
  isScene?: boolean
  isShadowLight?: boolean // capable of being used as a shadow generator source
  isEnvironment?: boolean // to find ground for Teleportation (not using a registry - one time cost)
  isTargetable?: boolean // will attach a target props handler
  isNode?: boolean; // Camera, Light, TransformNode (Bone) - Used for parenting.
  isMesh?: boolean; // needed for hover and adding action manager
  isMaterial?: boolean // indicates a custom component created by end-user has been created
  isGUI3DControl?: boolean // does not work with 2D
  isGUI2DControl?: boolean // does not work with 3D
  isGUI2DGrid?: boolean
  isTexture?: boolean
  customType?: boolean // not used by code-gen
  isCamera?: boolean
  isEffectLayer?: boolean;
  isGlowLayer?: boolean;
  isBehavior?: boolean;
  isShadowGenerator?: boolean
  isUtilityLayerRenderer?: boolean
  isGizmo?: boolean
  isLayer?: boolean
}

export interface CreatedInstanceMetadata extends InstanceMetadataParameter {
  className: string
}

/**
 * CreatedInstance simply contains a Babylon object and a fiber object able to detect and process updates via props to the BabylonObject.
 *
 * The parent/child is part of the Fiber Reconciler and helps attach materials/parenting/cameras/shadows/etc.
 */
export interface CreatedInstance<T> {
  /**
   * During lifecycle init process for types delaying creation this may be unset (PhysicsImpostor/ShadowGenerator)
   * The 'hostInstance' may depend on another object (ie: mesh/light source)
   */
  hostInstance?: T
  metadata: CreatedInstanceMetadata
  parent: CreatedInstance<any> | null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  children: CreatedInstance<any>[]
  state?: any
  customProps: AnyCustomProps
  // TODO: Consider merging these last 2 into a single class/container.
  propsHandlers?: HasPropsHandlers<T> // These are mostly generated
  lifecycleListener?: LifecycleListener<T> // Only custom types currently support LifecycleListeners (ie: AttachesToParent)
  deferredCreationProps?: any // deferred props for instance with delayed creation (ie: ShadowGenerator that needs Light).
  observers: Record<string, Nullable<Observer<any>>> // tracks observer for deregistering when the handler changes (ie: pointer events for GUI)
}

export class CreatedInstanceImpl<T> implements CreatedInstance<T> {
  public readonly hostInstance: T;
  public readonly metadata: CreatedInstanceMetadata;
  public parent: CreatedInstance<any> | null = null; // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  public children: CreatedInstance<any>[] = [];
  public propsHandlers: HasPropsHandlers<T>;
  public customProps: CustomProps;
  public observers: Record<string, Nullable<Observer<any>>> = {};

  constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: HasPropsHandlers<T>, customProps: CustomProps) {
    this.hostInstance = hostInstance
    this.metadata = metadata
    this.propsHandlers = fiberObject
    this.customProps = customProps
  }
}
