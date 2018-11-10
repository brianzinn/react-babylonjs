import ReactReconciler, { HostConfig } from "react-reconciler"
import BABYLON from "babylonjs"
import * as GUI from "babylonjs-gui"

import * as GENERATED from "./generatedCode"
import * as CUSTOM_HOSTS from "./customHosts"
import * as CUSTOM_COMPONENTS from "./customComponents"

import { WithSceneContext } from "./Scene"

import GUI3DControlLifecycleEvents from "./customComponents/GUI3DControlLifecycleEvents"
import GUI2DControlLifecycleEvents from "./customComponents/GUI2DControlLifecycleEvents";
import AdvancedDynamicTextureLifecycleEvents from "./customComponents/AdvancedDynamicTextureLifecycleEvents";

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
  shadowGenerator?: boolean // children will auto-cast shadows
  acceptsMaterials?: boolean
  isTargetable?: boolean // will attach a target props handler
  isMaterial?: boolean // indicates a custom component created by end-user has been created
  customType?: boolean
  isGUI3DControl?: boolean // does not work with 2D
  isGUI2DControl?: boolean // does not work with 3D
  isTexture?: boolean

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
  babylonJsObject: T
  metadata: CreatedInstanceMetadata
  parent: CreatedInstance<any> | null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  children: CreatedInstance<any>[]

  // TODO: Consider merging these last 2 into a single class/container.  Right now working as composition over inheritance
  propsHandlers?: GENERATED.HasPropsHandlers<T, any> // Only custom types will not declare props handlers, as their declaring class will handle
  lifecycleListeners?: LifecycleListeners // Only custom types currently support LifecycleListeners (ie: AttachesToParent)
}

export class CreatedInstanceImpl<T> implements CreatedInstance<T> {
  public readonly babylonJsObject: T
  public readonly metadata: CreatedInstanceMetadata
  public parent: CreatedInstance<any> | null = null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  public children: CreatedInstance<any>[] = []
  public propsHandlers: GENERATED.HasPropsHandlers<T, any>

  constructor(babylonJSObject: T, metadata: CreatedInstanceMetadata, fiberObject: GENERATED.HasPropsHandlers<T, any>) {
    this.babylonJsObject = babylonJSObject
    this.metadata = metadata
    this.propsHandlers = fiberObject
  }
}

type HostCreatedInstance<T> = CreatedInstance<T> | undefined

type Props = {
  scene: BABYLON.Scene
} & any

export type Container = {
  canvas: HTMLCanvasElement | WebGLRenderingContext | null
  engine: BABYLON.Engine
  rootInstance: CreatedInstance<any>
}

type HostContext = {} & Container

type UpdatePayload = PropertyUpdate[] | null
type TimeoutHandler = number | undefined
type NoTimeout = number

function applyUpdateToInstance(babylonObject: any, update: PropertyUpdate, type: string | undefined): void {
  switch (update.type) {
    case "string":
    case "number":
    case "boolean":
    case "string | number": // TODO: string | number is a deficiency in the code generator.  ie: can test for only primitives | and generate update type in code generator
      console.log(` > ${type}: updating ${update.type} on ${update.propertyName} to ${update.value}`)
      babylonObject[update.propertyName] = update.value
      break
    case "BABYLON.Vector3": // TODO: merge with Color3
      console.log(
        ` > ${type}: updating Vector3 on:${update.propertyName} to ${update.value} from ${
          babylonObject[update.propertyName]
        }`,
        babylonObject
      )

      if (babylonObject[update.propertyName]) {
        ;(babylonObject[update.propertyName] as BABYLON.Vector3).copyFrom(update.value)
      } else if (update.value) {
        babylonObject[update.propertyName] = update.value.clone()
      } else {
        babylonObject[update.propertyName] = update.value // ie: undefined/null?
      }
      break
    case "BABYLON.Color3": // merge this switch with BABYLON.Vector3, Color4, etc.  The copyFrom BABYLON types.
      console.log(` > ${type}: updating Color3 on:${update.propertyName} to ${update.value}`)
      if (babylonObject[update.propertyName]) {
        ;(babylonObject[update.propertyName] as BABYLON.Color3).copyFrom(update.value)
      } else if (update.value) {
        babylonObject[update.propertyName] = update.value.clone()
      } else {
        babylonObject[update.propertyName] = update.value
      }
      break
    case "BABYLON.Mesh":
      console.log(` > ${type}: updating Mesh on:${update.propertyName} to ${update.value}`)
      if (babylonObject[update.propertyName] && update.value) {
        if ((babylonObject[update.propertyName] as BABYLON.Mesh).uniqueId != update.value.uniqueId) {
          babylonObject[update.propertyName] = update.value
        }
      } else {
        babylonObject[update.propertyName] = update.value
      }
      break
    default:
      console.error(`unhandled property update of type ${update.type}`)
      break
  }
}

function createCreatedInstance<T, U extends GENERATED.HasPropsHandlers<T, any>>(
  className: string,
  babylonJsObject: T,
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
    babylonJsObject,
    metadata: createdMetadata,
    parent: null, // set later in lifecycle
    children: [], // set later in lifecycle
    propsHandlers,
    lifecycleListeners
  } as CreatedInstance<T>
}

class MaterialsLifecycleListener implements LifecycleListeners {
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    let material = instance.babylonJsObject
    let tmp: CreatedInstance<any> | null = instance.parent
    while (tmp != null) {
      if (tmp.metadata && tmp.metadata.acceptsMaterials === true) {
        tmp.babylonJsObject.material = material
        break
      }
      tmp = tmp.parent
    }
  }
}

class TexturesLifecycleListener implements LifecycleListeners {
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    let texture = instance.babylonJsObject
    let tmp: CreatedInstance<any> | null = instance.parent
    while (tmp != null) {
      if (tmp.metadata && tmp.metadata.isMaterial === true) {
        console.error("assigning diffuse texture.  Need a property to define which texture to apply", texture, BABYLON.Texture.SKYBOX_MODE)
        tmp.babylonJsObject.reflectionTexture = texture // need a way to assign different textures;
        tmp.babylonJsObject.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
        break
      }
      tmp = tmp.parent
    }
  }
}

// This does not work when declared component with "target" is before the mesh with that name.  Need to wait for full commit mount of entire tree.
class TargetFunctionPropsHandler implements GENERATED.PropsHandler<any, any> {
  getPropertyUpdates(
    createdInstance: CreatedInstance<any>,
    oldProps: any,
    newProps: any,
    scene: BABYLON.Scene
  ): UpdatePayload {
    if (!oldProps.target || oldProps.target !== newProps.target) {
      let target = newProps.target
      let targetType: string = "BABYLON.Vector3"
      if (typeof newProps.target == "string") {
        targetType = "BABYLON.Mesh"
        target = scene.getMeshByName(newProps.target)
      }

      return [
        {
          type: targetType,
          value: target,
          propertyName: "lockedTarget"
        }
      ]
    }

    return []
  }
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
  get supportsMutation(): boolean {
    // console.log("request supports mutation - return true;")
    // This has the reconciler include in call chain ie: appendChild, removeChild
    return true
  },

  now: () => {
    return Date.now()
  },

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
    // console.log("getting public instance:", instance)
    return instance
  },

  getRootHostContext: (rootContainerInstance: Container): HostContext => {
    // this is the context you pass to your chilren, as parameter 'parentHostContext' from "root".
    // So, opportunity to share context here via HostConfig further up tree.
    return {
      canvas: rootContainerInstance.canvas,
      engine: rootContainerInstance.engine,
      rootInstance: {
        babylonJsObject: undefined,
        metadata: {
          className: "rootContainer",
          namespace: "ignore"
        },
        parent: null,
        children: [] // we add root notes here
      } as CreatedInstance<any>
    }
  },

  getChildHostContext: (
    parentHostContext: HostContext,
    type: string,
    rootContainerInstance: Container
  ): HostContext => {
    // console.log("gettingChildHostContext:", parentHostContext, type, rootContainerInstance)
    // this is the context you pass down to children.  without this root will not be available to attach to in appendChildToContainer.
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

    // console.log("prepareUpdate", instance, oldProps, newProps)
    let updatePayload: PropertyUpdate[] = []

    // TODO: This will not work for multiple scenes, which V1 will support.
    let scene = rootContainerInstance.engine.scenes[0]

    // Only custom types will not have a fiber object to handle props changes
    instance.propsHandlers!.getPropsHandlers().forEach(propHandler => {
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        instance as CreatedInstance<any>,
        oldProps,
        newProps,
        scene
      )
      if (handlerUpdates !== null) {
        updatePayload.push(...handlerUpdates)
      }
    })

    if (updatePayload.length > 0) {
      if (instance.metadata) {
        if (instance.babylonJsObject) {
          // console.log(" > created update for:", instance.babylonJsObject.name)
        }

        // console.log(` > updated payload for '${instance.metadata.className}':`, updatePayload)
      } else {
        // console.log(" > pushing props updates for an instance with no metadata:", instance)
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
    // TODO: Make a registry like React Native host config or just build a map in /customHosts/index.ts.
    const customTypes: string[] = [CUSTOM_HOSTS.HostWithEvents]

    const { scene } = props as any
    const { canvas, engine } = rootContainerInstance

    if (customTypes.indexOf(type) !== -1) {
      let sceneContext: WithSceneContext = props.sceneContext

      if (!sceneContext || !sceneContext.scene) {
        console.error(
          "Custom Types must use the scene HOC (and pass sceneContext prop through to component!) or add a prop.sceneContext.scene",
          props
        )
      }

      let metadata = {
          className: type,
          customType: true,
          ...props.metadata
      }

      // console.warn('trying to new up:', type + 'Fiber with metadata:', metadata);

      let createdInstance: CreatedInstance<null> = {
        babylonJsObject: null,
        metadata,
        parent: null,
        children: [],
        propsHandlers: undefined,
        lifecycleListeners: new (CUSTOM_HOSTS as any)[type + 'Fiber'](sceneContext.scene!, engine, props)
      }
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
          if (generatedParameter.type === "BABYLON.Scene") {
            // console.log("assigning scene...", scene)
            value = scene
          } else {
            console.warn(
              `On ${type} you are missing a non-optional parameter ${generatedParameter.name} of type ${
                generatedParameter.type
              }`
            )
          }
        }
        return value
      }
    })

    let babylonObject: any | undefined = undefined

    if (createInfoArgs!.creationType === CreationType.FactoryMethod) {
      babylonObject = (BABYLON.MeshBuilder as any)[createInfoArgs!.factoryMethod!](...args)
    } else {
      switch (createInfoArgs.namespace) {
        case "BABYLON":
          // console.log("creating", type, ...args)
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

    // TODO: Add a lifecycle listener to a camera.  If it has a prop then auto-attach.  Otherwise search for other cameras to elect one to auto-attach.
    if (type.indexOf("Camera") !== -1) {
      // TODO: this needs to be dynamic part of camera:
      babylonObject.attachControl(canvas)
    }

    const fiberObject: GENERATED.HasPropsHandlers<any, any> = new (GENERATED as any)[`Fiber${type}`]()

    let lifecycleListeners: LifecycleListeners | undefined = undefined

    // here we dynamically assign listeners for specific types.
    // Would like to also generate this part of the code, although the generated code would be harder to follow.
    // Also, consider these being dynamically attached, much like PropsHandlers<T>
    if (metadata.isMaterial === true) {
      lifecycleListeners = new MaterialsLifecycleListener()
    } else if (metadata.isGUI3DControl === true) {
      lifecycleListeners = new GUI3DControlLifecycleEvents()
    } else if (metadata.isGUI2DControl === true) {
      if (metadata.className === "FiberAdvancedDynamicTexture") {
        lifecycleListeners = new AdvancedDynamicTextureLifecycleEvents(props);
      } else {
        console.error('regular 2d', metadata.className)
        lifecycleListeners = new GUI2DControlLifecycleEvents();
      }
    } else if (metadata.isTexture === true) {
      lifecycleListeners = new TexturesLifecycleListener()
    }

    if (type === "GUI3DManager") {
      // console.log("Attaching specific GUI 3D manager fiber lifecycle listeners.")
      lifecycleListeners = new CUSTOM_COMPONENTS.GUI3DManagerLifecycleEvents()
    }

    let createdReference = createCreatedInstance(type, babylonObject, fiberObject, metadata, lifecycleListeners)

    // Here we dynamically attach known props handlers.  Will be adding more in code generation for GUI - also for lifecycle mgmt.
    if (createdReference.metadata && createdReference.metadata.isTargetable === true) {
      fiberObject.addPropsHandler(new TargetFunctionPropsHandler())
    }

    // TODO: PropsHandler needs to prepare an update and apply immediately here, otherwise it won't appear until prepareUpdate() is called.
    let initPayload: PropertyUpdate[] = []
    fiberObject.getPropsHandlers().forEach(propHandler => {
      // NOTE: this is actually WRONG, because here we want to compare the props with the object.
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        babylonObject,
        {}, // Here we will reapply things like 'name', so perhaps should get default props from 'babylonObject'.
        props,
        scene // custom handlers may require scene access
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

    return createdReference
  },

  shouldDeprioritizeSubtree: (type: string, props: Props): boolean => {
    // console.log("should deprioritizeSubtree", type, props)
    return false
  },

  createTextInstance: (
    text: string,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: any
  ): any => {
    console.error("Create Text instance not supported to canvas.  If using GUI, use a TextBlock control.")
    return undefined
  },

  // ReactDOMHostConfig has: unstable_scheduleCallback as scheduleDeferredCallback
  scheduleDeferredCallback(
    callback: (deadline: RequestIdleCallbackDeadline) => void,
    opts?: RequestIdleCallbackOptions | undefined
  ): any {
    return window.requestIdleCallback(callback, opts)
  },

  cancelDeferredCallback(handle: any): void {
    // console.log("reconciler: cancelDeferredCallback (obsolete?)")
    return window.cancelIdleCallback(handle)
  },

  setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandler {
    // console.log("reconciler: calling setTimeout")
    return window.setTimeout(handler)
  },

  clearTimeout(handle?: number | undefined): void {
    // console.log("reconciler: calling clearTimeout")
    window.clearTimeout(handle)
  },
  // https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L288
  noTimeout: -1,

  prepareForCommit: (containerInfo: Container): void => {
    // Called based on return value of: finalizeInitialChildren.  in-memory render tree created, but not yet attached.
    // console.log("reconciler: prepareForCommit", containerInfo)
  },

  resetAfterCommit: (containerInfo: Container): void => {
    // Called after the in-memory tree has been committed (ie: after attaching again to root element)

    // This here is indicating that root element should absolutely not be the canvas!!
    // Here we are testing HMR. re-attaching??
    // console.log("reconciler: resetAfterCommit", containerInfo)

    let scene: BABYLON.Scene = containerInfo.engine.scenes[0]
    let camera: BABYLON.Nullable<BABYLON.Camera> = scene.activeCamera
    if (camera === null || camera === undefined) {
      console.warn(`scenes[0 of ${containerInfo.engine.scenes.length}].activeCamera cannot be attached it is:`, camera)
    } else {
      console.warn("(re)attaching camera", containerInfo)
      camera.attachControl(containerInfo.canvas as HTMLCanvasElement)
    }
  },

  appendInitialChild: (parent: HostCreatedInstance<any>, child: CreatedInstance<any>) => {
    // Here we are traversing downwards.  Beyond parent has not been initialized, but all children have been.
    // console.log("reconciler: appendInitialChild", parent, child)
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

    // // TODO: move this to commit Materials as part of Host event listening.
    // if (parent && parent!.metadata) {
    //   if (parent.metadata && parent.metadata.acceptsMaterials) {
    //     // TODO: for dynamically adding behaviour add a accept/visit(node, type). ie: visit(child.fiberObject, TYPE.ParentAcceptsMaterials)
    //     // Needs to return if it was "attached", otherwise can re-attempt as I think only immediate parent is available here in the life cycle.
    //     console.error(" > setting material: ", parent.babylonJsObject, " material to ", child.babylonJsObject)
    //     parent.babylonJsObject.material = child.babylonJsObject
    //   }
    // }
  },

  appendChild: (parent: CreatedInstance<any>, child: CreatedInstance<any>): void => {
    console.log("appendChild(..)", child, " to ", parent)
  },

  canHydrateInstance: (instance: any, type: string, props: Props): null | CreatedInstance<any> => {
    // console.log("canHydrateInstance", instance, type, props)
    return null
  },

  finalizeInitialChildren: (
    parentInstance: HostCreatedInstance<any>,
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext
  ): boolean => {
    // console.log("finalizeInitialChildren", parentInstance, type, props, rootContainerInstance, hostContext)
    // The parent of this node has not yet been instantiated.  The reconciler will continue by calling:
    // createInstance → appendInitialChild → finalizeInitialChildren on the parent.
    // When that has reached the top of the recursion tree (root), then prepareForCommit() will be called.
    // NOTE: All children of this component, however, HAVE been initialized.
    const callCommitMountForThisInstance: boolean = true
    return callCommitMountForThisInstance
  },

  commitMount: (
    instance: HostCreatedInstance<any>,
    type: string,
    newProps: any,
    internalInstanceHandle: ReactReconciler.Fiber
  ): void => {
    // console.log("commitMount(): ", type, instance, newProps, internalInstanceHandle)
    if (instance && instance.lifecycleListeners && instance.lifecycleListeners.onMount) {
      instance.lifecycleListeners.onMount(instance)
    }
  },

  appendChildToContainer: (container: Container, child: HostCreatedInstance<any>): void => {
    // NOTE: only called if supportsMutation = true;
    // ReactDOM uses this for attaching child nodes to root DOM.  For us we want to link the all parts of tree together for tree crawling.
    if (child) {
      // doubly link child to root
      container.rootInstance.children.push(child)
      child.parent = container.rootInstance
    } else {
      console.error("appendChildToContainer. No child:", child)
    }
  },

  commitUpdate(
    instance: HostCreatedInstance<any>,
    updatePayload: UpdatePayload,
    type: string,
    oldProps: any,
    newProps: any,
    internalInstanceHandlder: ReactReconciler.Fiber
  ) {
    // console.log("commitUpdate", instance, updatePayload, type, oldProps, newProps)
    if (updatePayload != null) {
      updatePayload.forEach((update: PropertyUpdate) => {
        applyUpdateToInstance(instance!.babylonJsObject, update, type)
      })
    }
  },

  removeChildFromContainer(container: Container, child: {} | CreatedInstance<any> | undefined): void {
    console.error("not implemented. removeChildFromContainer()", child)
  },

  removeChild(parentInstance: CreatedInstance<any>, child: CreatedInstance<any>) {
    // TOOD: this is important, especially for GUI, which will be done soon...
    console.error("not implemented.  removeChild()", parentInstance, child)
  },

  // text-content nodes are not used
  shouldSetTextContent: (type: string, props: any) => {
    // console.log("shouldSetTextContent", type, props)
    // returning true stops traversal at this node - indicating a leaf node.
    // When returning true will not traverse children and different methods of reconciler are called.
    return false
  }
  //createTextInstance: (text: => {},
  //commitTextUpdate (textInstance, oldText, newText) {}
}

export default ReactBabylonJSHostConfig
