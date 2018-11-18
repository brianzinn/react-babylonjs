import ReactReconciler, { HostConfig } from "react-reconciler"
import BABYLON from "babylonjs"
import * as GUI from "babylonjs-gui"

import * as GENERATED from "./generatedCode"
import * as CUSTOM_HOSTS from "./customHosts"
import * as CUSTOM_COMPONENTS from "./customComponents"

import { FiberModel, LoadedModel } from "./model"

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
  namespace: string // for 'BABYLON' or 'GUI'
  factoryMethod?: string // required for 'Factory' creation type.
  creationType: string
  parameters: GeneratedParameter[]
}

export type CreatedInstanceMetadata = {
  className: string // for inspection/debugging
  delayCreation?: boolean // for objects that will be instantiated in their lifecycle handler (ie: ShadowGenerator needs a light)
  shadowGenerator?: boolean // children will auto-cast shadows
  isScene?: boolean
  isShadowLight?: boolean
  acceptsMaterials?: boolean
  isEnvironment?: boolean // used to find ground for VR teleportation (option)
  isTargetable?: boolean // will attach a target props handler
  isMaterial?: boolean // indicates a custom component created by end-user has been created
  customType?: boolean
  isMesh?: boolean
  isGUI3DControl?: boolean // does not work with 2D
  isGUI2DControl?: boolean // does not work with 3D
  isTexture?: boolean,
  isCamera?: boolean
}
/** end of duplicated code */

// TODO: type/value need to be joined, as the method will have multiple.
export interface PropertyUpdate {
  type: string
  value: any
  propertyName: string // TODO: rename as this can be a propertyName or a methodName
  // prevValue?: any
  /**
   * When provided will dynamically target a property of 'babylonJSobject'.
   */
  target?: string
}

// TODO: see if it's a 'shape' with oneOf() for props/options
export type ComponentDefinition = {
  name: string
  family: string
  props?: string[]
  args: string[]
  options?: string[]
}

//** BEGIN WINDOW (needed only for compile - add DOM as compile target)
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

export interface LifecycleListeners {
  onParented: (parent: CreatedInstance<any>, child: CreatedInstance<any>) => any
  onChildAdded: (child: CreatedInstance<any>, parent: CreatedInstance<any>) => any
  onMount: (instance: CreatedInstance<any>) => any
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

  // TODO: Consider merging these last 2 into a single class/container.  Right now working as composition over inheritance
  propsHandlers?: GENERATED.HasPropsHandlers<T, any> // Only custom types will not declare props handlers, as their declaring class will handle
  lifecycleListeners?: LifecycleListeners // Only custom types currently support LifecycleListeners (ie: AttachesToParent)
}

export class CreatedInstanceImpl<T> implements CreatedInstance<T> {
  public readonly hostInstance: T
  public readonly metadata: CreatedInstanceMetadata
  public parent: CreatedInstance<any> | null = null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  public children: CreatedInstance<any>[] = []
  public propsHandlers: GENERATED.HasPropsHandlers<T, any>

  constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: GENERATED.HasPropsHandlers<T, any>) {
    this.hostInstance = hostInstance
    this.metadata = metadata
    this.propsHandlers = fiberObject
  }
}

type HostCreatedInstance<T> = CreatedInstance<T> | undefined

type Props = {
  scene: BABYLON.Scene
} & any

export type Container = {
  engine: BABYLON.Nullable<BABYLON.Engine>
  canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext>
  scene: BABYLON.Nullable<BABYLON.Scene>
  rootInstance: CreatedInstance<any>
}

type HostContext = {} & Container

export type UpdatePayload = PropertyUpdate[] | null
type TimeoutHandler = number | undefined
type NoTimeout = number

export const applyUpdateToInstance = (hostInstance: any, update: PropertyUpdate, type: string | undefined): void => {
  let target = update.target !== undefined ? hostInstance[update.target] : hostInstance

  switch (update.type) {
    case "string":
    case "number":
    case "boolean":
    case "string | number": // TODO: string | number is a deficiency in the code generator.  ie: can test for only primitives | and generate update type in code generator
      // console.log(` > ${type}: updating ${update.type} on ${update.propertyName} to ${update.value}`)
      target[update.propertyName] = update.value
      break
    case "BABYLON.Vector3": // TODO: merge with Color3
      if (target[update.propertyName]) {
        (target[update.propertyName] as BABYLON.Vector3).copyFrom(update.value)
      } else if (update.value) {
        target[update.propertyName] = update.value.clone()
      } else {
        target[update.propertyName] = update.value // ie: undefined/null?
      }
      break
    case "BABYLON.Color3": // merge this switch with BABYLON.Vector3, Color4, etc.  The copyFrom BABYLON types.
      if (target[update.propertyName]) {
        ;(target[update.propertyName] as BABYLON.Color3).copyFrom(update.value)
      } else if (update.value) {
        target[update.propertyName] = update.value.clone()
      } else {
        target[update.propertyName] = update.value
      }
      break
    case "BABYLON.Mesh":
      // console.log(` > ${type}: updating Mesh on:${update.propertyName} to ${update.value}`)
      if (target[update.propertyName] && update.value) {
        if ((target[update.propertyName] as BABYLON.Mesh).uniqueId != update.value.uniqueId) {
          target[update.propertyName] = update.value
        }
      } else {
        target[update.propertyName] = update.value
      }
      break
    default:
      if (update.type.startsWith("BABYLON.Observable")) {
        // TODO: we want to remove the old prop when changed, so it should be passed along as well.
        //if (update.prevValue) {
        //  babylonObject[update.propertyName].remove(update.prevValue)
        //}

        target[update.propertyName].add(update.value)
      } else if (update.type.startsWith("(")) {
        if (typeof target[update.propertyName] === 'function') {
          if (Array.isArray(update.value)) {
            target[update.propertyName](...update.value)  
          } else {
            target[update.propertyName](...Object.values(update.value))
          }
        } else {
          console.error(`Cannot call [not a function] ${update.propertyName}(...) on:`, target)
        }
      } else {
        console.error(`Unhandled property update of type ${update.type}`)
      }
      break
  }
}

function createCreatedInstance<T, U extends GENERATED.HasPropsHandlers<T, any>>(
  className: string,
  hostInstance: T,
  propsHandlers: U,
  metadata: CreatedInstanceMetadata,
  lifecycleListeners?: LifecycleListeners
): CreatedInstance<T> {
  let createdMetadata = metadata

  // TODO: move how this is generated as a boolean to a metadata on objects themselves (and the next 3 lines!).
  if ((propsHandlers as any).isTargetable === true) {
    createdMetadata.isTargetable = true
  }

  return {
    hostInstance,
    metadata: createdMetadata,
    parent: null, // set later in lifecycle
    children: [], // set later in lifecycle
    propsHandlers,
    lifecycleListeners
  } as CreatedInstance<T>
}

const ReactBabylonJSHostConfig: HostConfig<
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
  // This has the reconciler include in call chain ie: appendChild, removeChild
  get supportsMutation(): boolean { return true },

  now: () => { return Date.now() },

  // multiple renderers concurrently render using the same context objects. E.g. React DOM and React ART on the
  // same page. DOM is the primary renderer; ART is the secondary renderer.
  get isPrimaryRenderer(): boolean {
    return false
  },

  get supportsPersistence(): boolean {
    return false
  },

  // TODO: see if this will allow ie: improved HMR support.  Need to implement a lot of currently optional methods.
  get supportsHydration(): boolean {
    return false
  },

  // this enables refs
  getPublicInstance: (instance: any) => {
    return instance
  },

  getRootHostContext: (rootContainerInstance: Container): HostContext => {
    // this is the context you pass to your chilren, as parameter 'parentHostContext' from "root".
    // So, opportunity to share context here via HostConfig further up tree.
    return {
      canvas: rootContainerInstance.canvas,
      engine: rootContainerInstance.engine,
      scene: rootContainerInstance.scene,
      rootInstance: {
        hostInstance: undefined,
        metadata: {
          className: "rootContainer",
          namespace: "ignore"
        },
        parent: null,
        children: [] // we add root notes here
      } as CreatedInstance<any>
    }
  },

  // this is the context you pass down to children.  without this root will not be available to attach to in appendChildToContainer.
  getChildHostContext: (parentHostContext: HostContext, type: string, rootContainerInstance: Container): HostContext => {
    return parentHostContext
  },

  prepareUpdate(
    instance: HostCreatedInstance<any>,
    type: String,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: HostContext
  ): UpdatePayload {
    if (!instance || (instance.metadata && instance.metadata.customType === true)) {
      return null
    }
    let updatePayload: PropertyUpdate[] = []

    // Only custom types will not have a fiber object to handle props changes
    instance.propsHandlers!.getPropsHandlers().forEach(propHandler => {
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        instance as CreatedInstance<any>,
        oldProps,
        newProps,
        rootContainerInstance.scene!
      )
      if (handlerUpdates !== null) {
        updatePayload.push(...handlerUpdates)
      }
    })

    return updatePayload.length == 0 ? null : updatePayload
  },

  /**
   * This is called when something is dynamically added to root (not on initial appendChildToContainer) 
   */
  insertInContainerBefore(container: Container, child: CreatedInstance<any>, beforeChild: CreatedInstance<any>) {
    // same implementation as appendChildToContainer
    if (child) {
      // doubly link child to root.  we don't care about order - ie: 'beforeChild'
      container.rootInstance.children.push(child)
      child.parent = container.rootInstance
    } else {
      console.error("insertInContainerBefore. No child:", child)
    }
  },

  createInstance: (
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object
  ): CreatedInstance<any> | undefined => {
    // TODO: Make a registry like React Native host config or just build a map in /customHosts/index.ts.
    const customTypes: string[] = [CUSTOM_HOSTS.HostWithEvents]

    // TODO: Check source for difference between hostContext and rootContainerInstance.
    const { canvas, engine, scene } = rootContainerInstance

    if (customTypes.indexOf(type) !== -1) {
      let metadata = {
        className: type,
        customType: true,
        ...props.metadata
      }

      let createdInstance: CreatedInstance<null> = {
        hostInstance: null,
        metadata,
        parent: null,
        children: [],
        propsHandlers: undefined,
        lifecycleListeners: new (CUSTOM_HOSTS as any)[type + "Fiber"](scene, engine, props)
      }

      // onCreated and other lifecycle hooks are not called for built-in host
      return createdInstance
    }

    // so far this is the only non-babylonJS host component, but otherwise a more generic solution will be needed:
    if (type === "Model") {
      let createdInstance: CreatedInstance<LoadedModel> = {
        hostInstance: new LoadedModel() /* this is reassigned in Lifecycle Listener */,
        metadata: {
          className: "Model"
        },
        parent: null,
        children: [],
        propsHandlers: new FiberModel(),
        lifecycleListeners: new CUSTOM_COMPONENTS.ModelLifecycleListener(scene! /* should always be available */, props)
      }

      // onCreated and other lifecycle hooks are not called for built-in host
      return createdInstance
    }

    let createInfoArgs: CreateInfo = (GENERATED as any)[`Fiber${type}`].CreateInfo
    let metadata: CreatedInstanceMetadata = (GENERATED as any)[`Fiber${type}`].Metadata

    // console.log(`creating: ${createInfoArgs.namespace}.${type}`)
    let generatedParameters: GeneratedParameter[] = createInfoArgs!.parameters

    // console.log("generated params:", generatedParameters)

    let args = generatedParameters.map(generatedParameter => {
      if (Array.isArray(generatedParameter.type)) {
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
        let value = props[generatedParameter.name]
        if (value === undefined && generatedParameter.optional === false) {
          // NOTE: we removed the hosted Scene component, which needs (generatedParameter.type == "BABYLON.Engine")          
          if (generatedParameter.type === "BABYLON.Scene" || (generatedParameter.type === "any" && generatedParameter.name === "scene")) {
            // MeshBuild.createSphere(name: string, options: {...}, scene: any)
            value = scene
          } else {
            console.warn(`On ${type} you are missing a non-optional parameter '${generatedParameter.name}' of type '${generatedParameter.type}'`)
          }
        }
        return value
      }
    })

    let babylonObject: any | undefined = undefined

    if (createInfoArgs!.creationType === CreationType.FactoryMethod) {
      // console.log("creating from factory", type, ...args)
      //yconsole.dir(args)
      babylonObject = (BABYLON.MeshBuilder as any)[createInfoArgs!.factoryMethod!](...args)
    } else {
      if (metadata.delayCreation !== true) {
        switch (createInfoArgs.namespace) {
          case "BABYLON":
            // console.log("creating:", type, ...args)
            babylonObject = new (BABYLON as any)[type](...args)
            break
          case "GUI":
            // console.log("creating GUI", type, ...args)
            babylonObject = new (GUI as any)[type](...args)
            break
          default:
            console.error("metadata defines (or does not) an namespace that is known", metadata)
            break
        }
      }
    }

    // Developer accessible lifecycle phase.  ie: access propery/method exposed in props.
    if (typeof props.onCreated === "function") {
      props.onCreated!(babylonObject)
    }

    const fiberObject: GENERATED.HasPropsHandlers<any, any> = new (GENERATED as any)[`Fiber${type}`]()

    let lifecycleListeners: LifecycleListeners | undefined = undefined
    
    // Consider these being dynamically attached to a list, much like PropsHandlers<T>
    if (metadata.isMaterial === true) {
      lifecycleListeners = new CUSTOM_COMPONENTS.MaterialsLifecycleListener()
    } else if (metadata.isGUI3DControl === true) {
      lifecycleListeners = new CUSTOM_COMPONENTS.GUI3DControlLifecycleListener()
    } else if (metadata.isGUI2DControl === true) {
      lifecycleListeners = new CUSTOM_COMPONENTS.GUI2DControlLifecycleListener()
    } else if (metadata.isTexture === true) {
      lifecycleListeners = new CUSTOM_COMPONENTS.TexturesLifecycleListener()
    } else if (metadata.isCamera === true) {
      lifecycleListeners = new CUSTOM_COMPONENTS.CameraLifecycleListener(props, scene, canvas as HTMLCanvasElement)
    }

    // here we dynamically assign listeners for specific types.
    if ((CUSTOM_COMPONENTS as any)[type + "LifecycleListener"] !== undefined) {
      lifecycleListeners = new (CUSTOM_COMPONENTS as any)[type + "LifecycleListener"]({
        ...props,
        scene /* give listeners scene access */
      })
    }

    let createdReference = createCreatedInstance(type, babylonObject, fiberObject, metadata, lifecycleListeners)

    // Here we dynamically attach known props handlers.  Will be adding more in code generation for GUI - also for lifecycle mgmt.
    if (createdReference.metadata && createdReference.metadata.isTargetable === true) {
      fiberObject.addPropsHandler(new CUSTOM_COMPONENTS.TargetPropsHandler())
    }

    if (metadata.delayCreation !== true) {
      let initPayload: PropertyUpdate[] = []
      fiberObject.getPropsHandlers().forEach(propHandler => {
        // NOTE: this is actually WRONG, because here we want to compare the props with the object.
        let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
          createdReference,
          {}, // Here we will reapply things like 'name', so perhaps should get default props from 'babylonObject'.
          props,
          scene! // custom handlers may require scene access.
        )
        if (handlerUpdates !== null) {
          initPayload.push(...handlerUpdates)
        }
      })

      if (initPayload.length > 0) {
        initPayload.forEach(update => {
          applyUpdateToInstance(babylonObject, update, type)
        })
      }
    }
    return createdReference
  },

  shouldDeprioritizeSubtree: (type: string, props: Props): boolean => { return false },

  createTextInstance: (): any => {
    console.error("Create Text instance not supported to canvas.  If using GUI, use a TextBlock control.")
    return undefined
  },

  scheduleDeferredCallback(callback: (deadline: RequestIdleCallbackDeadline) => void, opts?: RequestIdleCallbackOptions | undefined): any {
    return window.requestIdleCallback(callback, opts) // ReactDOMHostConfig has: unstable_scheduleCallback as scheduleDeferredCallback
  },

  cancelDeferredCallback(handle: any): void { return window.cancelIdleCallback(handle) },

  setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandler { return window.setTimeout(handler) },

  clearTimeout(handle?: number | undefined): void { window.clearTimeout(handle) },

  // https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L288
  noTimeout: -1,

  // Called based on return value of: finalizeInitialChildren.  in-memory render tree created, but not yet attached.
  prepareForCommit: (containerInfo: Container): void => {},

  // Called after the in-memory tree has been committed (ie: after attaching again to root element)
  resetAfterCommit: (containerInfo: Container): void => {},

  appendInitialChild: (parent: HostCreatedInstance<any>, child: CreatedInstance<any>) => {
    // Here we are traversing downwards.  Beyond parent has not been initialized, but all children have been.
    if (parent) {
      // doubly linking child to parent
      parent.children.push(child) // TODO: need to remove from children as well when removing.
      child.parent = parent
    }

    if (child && child.lifecycleListeners && child.lifecycleListeners.onParented) {
      child.lifecycleListeners.onParented(parent!, child)
    }

    if (parent && parent.lifecycleListeners && parent.lifecycleListeners.onChildAdded) {
      parent.lifecycleListeners.onChildAdded(child, parent)
    }
  },

  appendChild: (parent: CreatedInstance<any>, child: CreatedInstance<any>): void => {
    parent.children.push(child)
    child.parent = parent
  },

  canHydrateInstance: (instance: any, type: string, props: Props): null | CreatedInstance<any> => {
    console.log("canHydrateInstance", instance, type, props)
    return null
  },

  // The parent of this node has not yet been instantiated.  The reconciler will continue by calling:
  // createInstance → appendInitialChild → finalizeInitialChildren on the parent.
  // When that has reached the top of the recursion tree (root), then prepareForCommit() will be called.
  // NOTE: All children of this component, however, HAVE been initialized.
  finalizeInitialChildren: (): boolean => { return true /* callCommitMountForThisInstance */ },

  commitMount: (
    instance: HostCreatedInstance<any>,
    type: string,
    newProps: any,
    internalInstanceHandle: ReactReconciler.Fiber
  ): void => {
    if (instance && instance.lifecycleListeners && instance.lifecycleListeners.onMount) {
      instance.lifecycleListeners.onMount(instance)
    }
  },

  // NOTE: only called if supportsMutation = true;
  // ReactDOM uses this for attaching child nodes to root DOM.  For us we want to link the all parts of tree together for tree crawling.
  // same implementation as insertInContainerBefore
  appendChildToContainer: (container: Container, child: HostCreatedInstance<any>): void => {
    if (child) {
      // doubly link child to root
      container.rootInstance.children.push(child)
      child.parent = container.rootInstance
    }
  },

  commitUpdate(instance: HostCreatedInstance<any>, updatePayload: UpdatePayload, type: string /* old + new props are extra params here */) {
    if (updatePayload != null) {
      updatePayload.forEach((update: PropertyUpdate) => {
        applyUpdateToInstance(instance!.hostInstance, update, type)
      })
    }
  },

  removeChildFromContainer(container: Container, child: CreatedInstance<any> | undefined): void {
    if (child && child.hostInstance && typeof child.hostInstance.dispose === "function") {
      child.hostInstance.dispose()
    }
    console.error("need to remove child from parent (container)")
  },

  removeChild(parentInstance: CreatedInstance<any>, child: CreatedInstance<any>) {
    if (child.metadata.isGUI3DControl === true) {
      console.error('3D remove control not implemented.')
    }

    if (parentInstance.metadata.isGUI2DControl === true && child.metadata.isGUI2DControl === true) {
      // NOTE: the if statement should be || and we may need to walk the tree to remove.
      parentInstance.hostInstance.removeControl(child.hostInstance)
    }

    if (typeof child.hostInstance.dispose === "function") {
      child.hostInstance.dispose()  // TODO: Consider adding metadata/descriptors as some dispose methods have optional args.
    }
    
    parentInstance.children = parentInstance.children.filter(ci => ci !== child)
    child.parent = null
  },

  // text-content nodes are not used.  treated as a leaf node.  children are not traversed.  calls methods like createTextInstance(...)
  shouldSetTextContent: (type: string, props: any) => { return false }
}

export default ReactBabylonJSHostConfig
