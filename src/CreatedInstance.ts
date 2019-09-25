import { LifecycleListener } from "./LifecycleListener"
import { HasPropsHandlers } from "./PropsHandler"

export interface InstanceMetadataParameter {
  delayCreation?: boolean // if it should not be created automatically, but by LifecycleListener (ie: ShadowGenerator needs an IShadowLight)
  shadowGenerator?: boolean // children will auto-cast shadows
  acceptsMaterials?: boolean
  isScene?: boolean
  isShadowLight?: boolean // capable of being used as a shadow generator source
  isEnvironment?: boolean // to find ground for Teleportation (not using a registry - one time cost)
  isTargetable?: boolean // will attach a target props handler
  isMesh?: boolean
  isMaterial?: boolean // indicates a custom component created by end-user has been created
  isGUI3DControl?: boolean // does not work with 2D
  isGUI2DControl?: boolean // does not work with 3D
  isTexture?: boolean
  customType?: boolean // not used by code-gen
  isCamera?: boolean
}

/**
 * Props passed from controls that are not part of generated props and we are handling ourselves
 */
export type CustomProps = {
  /**
   * to attach an AdvanceDynamicTexture to parent mesh.  ADT.CreateForMesh(parent, ...) (TODO: add 'ByName')
   */
  createForParentMesh?: boolean
  /**
   * for 3D control ".content" (which is 2D)
   */
  childrenAsContent?: boolean
  /**
   * for VirtualKeyboard (2d input control names)
   */
  connectControlNames?: string[]
  /**
   * for VirtualKeyboard
   */
  defaultKeyboard?: boolean

  /**
   * for Control3D, which has position, but not other properties like rotation.
   */
  linkToTransformNodeByName?: string
  /**
   * List of mesh names to search for, which will be added as shadow casters.
   */
  shadowCasters?: string[]
  /**
   * For attaching the same material multiple meshes (by mesh name)
   */
  attachToMeshesByName?: string[]
  onControlAdded?: (instance: CreatedInstance<any>) => void
  /**
   * Assign to this property on the parent.  Parent property is cleared on umnount.
   */
  assignTo?: string
  // TODO: enableInteractions from VRExperienceHelper and add AR!!!
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
  hostInstance: T
  metadata: CreatedInstanceMetadata
  parent: CreatedInstance<any> | null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  children: CreatedInstance<any>[]
  state?: any
  customProps: CustomProps
  // TODO: Consider merging these last 2 into a single class/container.
  propsHandlers?: HasPropsHandlers<T, any> // These are mostly generated
  lifecycleListener?: LifecycleListener // Only custom types currently support LifecycleListeners (ie: AttachesToParent)
}

export class CreatedInstanceImpl<T> implements CreatedInstance<T> {
  public readonly hostInstance: T
  public readonly metadata: CreatedInstanceMetadata
  public parent: CreatedInstance<any> | null = null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  public children: CreatedInstance<any>[] = []
  public propsHandlers: HasPropsHandlers<T, any>
  public customProps: CustomProps

  constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: HasPropsHandlers<T, any>, customProps: CustomProps) {
    this.hostInstance = hostInstance
    this.metadata = metadata
    this.propsHandlers = fiberObject
    this.customProps = customProps
  }
}
