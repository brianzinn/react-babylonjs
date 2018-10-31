import ReactReconciler, { HostConfig } from "react-reconciler"
import BABYLON from "babylonjs"

import * as GENERATED from "./generatedCode"

/** Following classes are duplicated in generate-code.ts for noww */
type GeneratedParameter = {
  name: string
  type: string | GeneratedParameter[]
  optional: boolean
}

class CreationType {
  public static readonly FactoryMethod: string = "FactoryMethod"
  public static readonly Constructor: string = "Constructor"
}

type CreateInfo = {
  libraryLocation: string // ie: `BABYLON.${libraryLocation}`
  factoryMethod?: string // required for 'Factory' creation type.
  creationType: string
  parameters: GeneratedParameter[]
}

type CreatedInstanceMetadata = {
  className: string // for inspection/debugging
  shadowGenerator?: boolean // children will auto-cast shadows
  acceptsMaterials?: boolean
  isTargetable?: boolean // will attach a target props handler
  // TODO: more metadata to follow
}
/** end of duplicated code */

export type PropertyUpdate = {
  type: string
  value: any
  propertyName: string
}

// TODO: see if it's a 'shape' with oneOf() for props/options
export type ComponentDefinition = {
  name: string
  family: string
  props?: string[]
  args: string[]
  options?: string[]
}

//** BEGIN WINDOW (needed only for compile)
type RequestIdleCallbackHandle = any
type RequestIdleCallbackOptions = {
  timeout: number
}
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean
  timeRemaining: (() => number)
}

declare global {
  interface Window {
    requestIdleCallback: ((
      callback: ((deadline: RequestIdleCallbackDeadline) => void),
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle)
    cancelIdleCallback: ((handle: RequestIdleCallbackHandle) => void)
  }
}
//** END WINDOW

// string to () => Vector3 mapping for directions
const directions: Map<String, () => BABYLON.Vector3> = new Map<String, () => BABYLON.Vector3>([
  ["up", BABYLON.Vector3.Up],
  ["down", BABYLON.Vector3.Down],
  ["left", BABYLON.Vector3.Left],
  ["right", BABYLON.Vector3.Right],
  ["forward", BABYLON.Vector3.Forward],
  ["backward", BABYLON.Vector3.Backward]
])

/**
 * CreatedInstance simply contains a Babylon object and a fiber object able to detect and process updates via props to the BabylonObject.
 *
 * The parent/child is part of the Fiber Reconciler and helps attach materials/parenting/cameras/shadows/etc.
 */
export interface CreatedInstance<T> {
  babylonJsObject: T
  metadata: CreatedInstanceMetadata | null
  parent: CreatedInstance<any> | null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  children: CreatedInstance<any>[]
  fiberObject: GENERATED.HasPropsHandlers<T, any>
}

export class CreatedInstanceImpl<T> implements CreatedInstance<T> {
  public readonly babylonJsObject: T
  public readonly metadata: CreatedInstanceMetadata | null
  public parent: CreatedInstance<any> | null = null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  public children: CreatedInstance<any>[] = []
  public fiberObject: GENERATED.HasPropsHandlers<T, any>

  constructor(
    babylonJSObject: T,
    metadata: CreatedInstanceMetadata | null,
    fiberObject: GENERATED.HasPropsHandlers<T, any>
  ) {
    this.babylonJsObject = babylonJSObject
    this.metadata = metadata
    this.fiberObject = fiberObject
  }
}

type HostCreatedInstance<T> = CreatedInstance<T> | undefined

type Props = {
  scene: BABYLON.Scene
} & any


export type Container = {
  canvas: HTMLCanvasElement | WebGLRenderingContext | null
  engine: BABYLON.Engine
}

// TODO: add developer-tools stuff so it looks better in React panel

type HostContext = {}
type UpdatePayload = PropertyUpdate[] | null
type TimeoutHandler = number | undefined
type NoTimeout = number

function applyUpdateToInstance(babylonObject: any, update: PropertyUpdate, type: string | undefined): void {
  switch (update.type) {
    case "string":
    case "number":
    case "boolean":
      console.log(` > ${type}: updating ${update.type} on ${update.propertyName} to ${update.value}`)
      babylonObject[update.propertyName] = update.value
      break
    case "BABYLON.Vector3":
      console.log(` > ${type}: updating Vector3 on:${update.propertyName} to ${update.value}`)
      ;(babylonObject[update.propertyName] as BABYLON.Vector3).copyFrom(update.value)
      break
    case "BABYLON.Color3":
      console.log(` > ${type}: updating Color3 on:${update.propertyName} to ${update.value}`)
      ;(babylonObject[update.propertyName] as BABYLON.Color3).copyFrom(update.value)
      break
    default:
      console.error(`unhandled property update of type ${update.type}`)
      break
  }
}

function createCreatedInstance<T, U extends GENERATED.HasPropsHandlers<T, any>>(
  className: string,
  babylonJsObject: T,
  fiberObject: U,
  metadata: CreatedInstanceMetadata | null
): CreatedInstance<T> {
  let createdMetadata = metadata

  if (createdMetadata === null) {
    createdMetadata = {
      className
    }
  } else {
    // TODO: warn when different if already assigned.
    createdMetadata.className = className
  }

  if ((fiberObject as any).isTargetable === true) {
    createdMetadata.isTargetable = true
  }

  return {
    babylonJsObject,
    metadata: createdMetadata,
    parent: null, // set later in lifecycle
    children: [], // set later in lifecycle
    fiberObject
  } as CreatedInstance<T>
}

// TODO: this needs to be generated as well...
class FiberMesh implements GENERATED.HasPropsHandlers<BABYLON.Mesh, GENERATED.FiberMeshProps> {
  public readonly isTargetable = false
  private propsHandlers: GENERATED.PropsHandler<BABYLON.Mesh, GENERATED.FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [new GENERATED.FiberMeshPropsHandler()]
  }

  getPropsHandlers(): GENERATED.PropsHandler<BABYLON.Mesh, GENERATED.FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: GENERATED.PropsHandler<BABYLON.Mesh, GENERATED.FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }
}

export const hostConfig: HostConfig<
  string,
  Props,
  Container,
  HostCreatedInstance<any>,
  {},
  {},
  {},
  HostContext,
  UpdatePayload,
  {},
  TimeoutHandler,
  NoTimeout
> = {
  get supportsMutation(): boolean {
    console.log("request supports mutation - return true;")
    return true
  },

  now: () => {
    console.log("property now called")
    return Date.now()
  },

  // multiple renderers concurrently render using the same context objects. E.g. React DOM and React ART on the
  // same page. DOM is the primary renderer; ART is the secondary renderer.
  // TODO: see if this should be configurable.
  get isPrimaryRenderer(): boolean {
    console.log("property isPrimaryRenderer returning true")
    return true
  },

  get supportsPersistence(): boolean {
    console.log("property supportsPersistence() return false;")
    return false
  },

  // TODO: see if this will allow ie: improved HMR support.  Need to implement a lot of currently optional methods.
  get supportsHydration(): boolean {
    console.log("property supportsHydration() return false;")
    return false
  },

  // this enables refs
  getPublicInstance: (instance: any) => {
    console.log("getting public instance:", instance)
    return instance
  },

  getRootHostContext: (rootContainerInstance: Container): HostContext => {
    // this is the context you pass to your chilren, as parameter 'parentHostContext' from "root".
    // So, opportunity to share context here via HostConfig further up tree.
    return {}
  },

  getChildHostContext: (
    parentHostContext: HostContext,
    type: string,
    rootContainerInstance: Container
  ): HostContext => {
    console.log("gettingChildHostContext:", parentHostContext, type, rootContainerInstance)
    // this is the context you pass down to children.
    return {}
  },

  prepareUpdate(
    instance: HostCreatedInstance<any>,
    type: String,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: HostContext
  ): UpdatePayload {
    if (!instance) {
      return null
    }

    console.log("prepareUpdate", instance, oldProps, newProps)
    let updatePayload: PropertyUpdate[] = []

    instance.fiberObject.getPropsHandlers().forEach(propHandler => {
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        instance as CreatedInstance<any>,
        oldProps,
        newProps
      )
      if (handlerUpdates !== null) {
        updatePayload.push(...handlerUpdates)
      }
    })

    if (updatePayload.length > 0) {
      if (instance.metadata) {
        if (instance.babylonJsObject) {
          console.log(" > created update for:", instance.babylonJsObject.name)
        }

        console.log(` > updated payload for '${instance.metadata.className}':`, updatePayload)
      } else {
        console.log(" > pushing props updates for an instance with no metadata:", instance)
      }
    }

    return updatePayload.length == 0 ? null : updatePayload
  },

  createInstance: (
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object
  ): CreatedInstance<any> | undefined => {
    console.log("creating:", type)

    const { scene } = props as any
    const { canvas, engine } = rootContainerInstance

    // TODO: generate Fiber versions of all lightsj waiting on a PR in AST dependency (interface extends class)
    if (type === "HemisphericLight") {
      const { name, direction = BABYLON.Vector3.Up() } = props as any

      // TODO: implement other lights dynamically.  ie: PointLight, etc.
      const light = new BABYLON.HemisphericLight(name as string, direction, scene) as any

      //let createdInstance = createCreatedInstance(family, definition!.name, light, [], null)
      return new CreatedInstanceImpl(
        light,
        null,
        new FiberMesh() // WRONG!!
      )
    }

    const createInfoArgs: CreateInfo | undefined = (GENERATED as any)[`Fiber${type}`].CreateInfo
    const metadata: CreatedInstanceMetadata | undefined = (GENERATED as any)[`Fiber${type}`].Metadata

    let generatedParameters: GeneratedParameter[] = createInfoArgs!.parameters

    let args = generatedParameters.map(generatedParameter => {
      if (Array.isArray(generatedParameter.type)) {
        console.log(`working from array for ${generatedParameter.name}`)
        // TODO: if all props are missing, warn if main prop (ie: options) is required.
        let newParameter = {} as any
        generatedParameter.type.forEach(subParameter => {
          let subPropValue = props[subParameter.name]
          if (subPropValue === undefined && subParameter.optional === false && generatedParameter.optional === false) {
            console.warn("Missing a required secondary property:", subParameter.name)
          } else {
            newParameter[subParameter.name] = subPropValue
          }
        })
        return newParameter
      } else {
        const value = props[generatedParameter.name]
        if (value === undefined && generatedParameter.optional === false) {
          console.warn(`On ${type} you are missing a non-optional parameter ${generatedParameter.name}`)
        }
        return value
      }
    })

    let babylonObject: any | undefined = undefined

    if (createInfoArgs!.creationType === CreationType.FactoryMethod) {
      babylonObject = (BABYLON.MeshBuilder as any)[createInfoArgs!.factoryMethod!](...args)
    } else {
      babylonObject = new (BABYLON as any)[type](...args)
    }

    // TODO: add a post-init method to be called after instantiation.
    if (type.indexOf("Camera") !== -1) {
      // TODO: this needs to be dynamic part of camera:
      babylonObject.attachControl(canvas)
    }

    const fiberObject: GENERATED.HasPropsHandlers<any, any> = new (GENERATED as any)[`Fiber${type}`]()

    // TODO: PropsHandler needs to prepare an update and apply immediately here, otherwise it won't appear until prepareUpdate() is called.
    let initPayload: PropertyUpdate[] = []
    fiberObject.getPropsHandlers().forEach(propHandler => {
      // NOTE: this is actually WRONG, because here we want to compare the props with the object.
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        babylonObject,
        {}, // Here we will reapply things like 'name', so perhaps should get default props from 'babylonObject'.
        props
      )
      if (handlerUpdates !== null) {
        initPayload.push(...handlerUpdates)
      }
    })

    let createdReference = createCreatedInstance(
      type,
      babylonObject,
      fiberObject,
      metadata === undefined ? null : metadata
    )

    if (initPayload.length > 0) {
      initPayload.forEach(update => {
        applyUpdateToInstance(babylonObject, update, type)
      })
    }

    return createdReference
  },

  shouldDeprioritizeSubtree: (type: string, props: Props): boolean => {
    console.log("should deprioritizeSubtree", type, props)
    return false
  },

  createTextInstance: (
    text: string,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: any
  ): any => {
    console.log("create text instance.")
    return undefined
  },

  // ReactDOMHostConfig has: unstable_scheduleCallback as scheduleDeferredCallback
  scheduleDeferredCallback(
    callback: (deadline: RequestIdleCallbackDeadline) => void,
    opts?: RequestIdleCallbackOptions | undefined
  ): any {
    console.log("reconciler: scheduleDeferredCallback (obsolete?)")
    return window.requestIdleCallback(callback, opts)
  },

  cancelDeferredCallback(handle: any): void {
    console.log("reconciler: cancelDeferredCallback (obsolete?)")
    return window.cancelIdleCallback(handle)
  },

  setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandler {
    console.log("reconciler: calling setTimeout")
    return window.setTimeout(handler)
  },

  clearTimeout(handle?: number | undefined): void {
    console.log("reconciler: calling clearTimeout")
    window.clearTimeout(handle)
  },
  // https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L288
  noTimeout: -1,

  prepareForCommit: (containerInfo: Container): void => {
    // Called based on return value of: finalizeInitialChildren.  in-memory render tree created, but not yet attached.
    console.log("reconciler: prepareForCommit", containerInfo)
  },

  resetAfterCommit: (containerInfo: Container): void => {
    // Called after the in-memory tree has been committed (ie: after attaching again to root element)

    // This here is indicating that root element should absolutely not be the canvas!!
    // Here we are testing HMR. re-attaching??
    console.log("reconciler: resetAfterCommit", containerInfo)

    let scene: BABYLON.Scene = containerInfo.engine.scenes[0]
    let camera: BABYLON.Nullable<BABYLON.Camera> = scene.activeCamera
    if (camera === null) {
      console.warn("looks like camera is null??")
    } else {
      console.warn("re-attaching camera??")
      
      camera.attachControl(containerInfo.canvas as HTMLCanvasElement)
    }
  },

  appendInitialChild: (parent: HostCreatedInstance<any>, child: CreatedInstance<any>) => {
    // Here we are traversing downwards.  The parent has not been initialized, but all children have been.
    console.log("reconciler: appentInitialChild", parent, child)

    if (parent && parent!.metadata) {
      if (parent.metadata && parent.metadata.acceptsMaterials) {
        // TODO: for dynamically adding behaviour add a accept/visit(node, type). ie: visit(child.fiberObject, TYPE.ParentAcceptsMaterials)
        // Needs to return if it was "attached", otherwise can re-attempt as I think only immediate parent is available here in the life cycle.
        console.error(" > setting material: ", parent.babylonJsObject, " material to ", child.babylonJsObject)
        parent.babylonJsObject.material = child.babylonJsObject
      }
    }
  },

  appendChild: (parent: CreatedInstance<any>, child: CreatedInstance<any>): void => {
    console.log("appended", child, " to", parent)
  },

  canHydrateInstance: (instance: any, type: string, props: Props): null | CreatedInstance<any> => {
    console.log("canHydrateInstance", instance, type, props)
    return null
  },

  finalizeInitialChildren: (
    parentInstance: HostCreatedInstance<any>,
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext
  ): boolean => {
    console.log("finalizeInitialChildren", parentInstance, type, props, rootContainerInstance, hostContext)
    // The parent of this node has not yet been instantiated.  The reconciler will continue by calling:
    // createInstance → appendInitialChild → finalizeInitialChildren on the parent.
    // When that has reached the top of the recursion tree (root), then prepareForCommit() will be called.
    const callCommitMountForThisInstance: boolean = true
    return callCommitMountForThisInstance
  },

  commitMount: (
    instance: HostCreatedInstance<any>,
    type: string,
    newProps: any,
    internalInstanceHandle: ReactReconciler.Fiber
  ): void => {
    console.log("everything has beenn instantiated for instance: ", instance, newProps)
  },

  appendChildToContainer: (container: Container, child: HostCreatedInstance<any>): void => {
    // NOTE: only called if supportsMutation = true;
    // This is used for attaching child notes to the root DOM, but for us that does not apply.
    console.log("append child", child, "to container", container)
  },

  commitUpdate(instance: HostCreatedInstance<any>, updatePayload: any, type: string, oldProps: any, newProps: any) {
    console.log("commitUpdate", instance, updatePayload, type, oldProps, newProps)

    if (updatePayload != null) {
      ;(updatePayload as PropertyUpdate[]).forEach(update => {
        applyUpdateToInstance(instance!.babylonJsObject, update, type)
      })
    }
  },

  removeChildFromContainer(containe: Container, child: {} | CreatedInstance<any> | undefined): void {
    console.log("removing child from container", child)
  },

  removeChild(parentInstance: CreatedInstance<any>, child: CreatedInstance<any>) {
    console.log("remove child", parentInstance, child)
  },

  // text-content nodes are not used
  shouldSetTextContent: (type: string, props: any) => {
    console.log("shouldSetTextContent", type, props)
    // returning true stops traversal at this node - indicating a leaf node.
    // When returning true will not traverse children and different methods of reconciler are called.
    return false
  }
  //createTextInstance: (text: => {},
  //commitTextUpdate (textInstance, oldText, newText) {}
}