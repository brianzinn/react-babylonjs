import ReactReconciler, { HostConfig } from "react-reconciler"
import BABYLON from "babylonjs"

import * as GENERATED from "./generatedCode"

/** Next 3 classes are duplicated in generate-code.ts */
type GeneratedParameter = {
  name: string,
  type: string | GeneratedParameter[],
  optional: boolean
}

class CreationType {
  public static readonly FactoryMethod : string = 'FactoryMethod'
  public static readonly Constructor : string = 'Constructor'
}

type CreateInfo = {
  libraryLocation: string, // ie: `BABYLON.${libraryLocation}`
  factoryMethod?: string, // required for 'Factory' creation type.
  creationType: string,
  parameters: GeneratedParameter[]
}
/** end of duplicated code */

export enum ComponentFamilyType {
  Meshes,
  Lights,
  Materials,
  Camera
}

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

type CreatedInstanceMetadata = {
  className: string // for inspection/debugging
  shadowGenerator?: boolean // children will aut-cast shadows
  isTargetable?: boolean // will attach a target props handler
  family?: string
  // TODO: more metadata to follow
}

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

type Container = {
  canvas: HTMLCanvasElement | WebGLRenderingContext | null
  engine: BABYLON.Engine
  _rootContainer?: ReactReconciler.FiberRoot
}

// check if tag is known, get family
export const getFamilyFromComponentDefinition = (
  tag: string,
  componentDefinition: ComponentDefinition | undefined
): ComponentFamilyType | undefined => {
  if (componentDefinition) {
    // TODO: this should not be a switch statement:
    switch (componentDefinition.family) {
      case "cameras":
        return ComponentFamilyType.Camera
      case "lights":
        return ComponentFamilyType.Lights
      case "materials":
        return ComponentFamilyType.Materials
      case "meshes":
        return ComponentFamilyType.Meshes
      default:
        console.error(`unknown family '${componentDefinition.family}' (found tag ${tag})`)
        return undefined
    }
  }
}

// dynamically get a Babylon object with args & props setup
export const getBabylon = (babylonJsClassName: string, constructorArgs: string[], options: any) => {
  const args = constructorArgs.map(a => options[a])
  const babylonjsObject = new (BABYLON as any)[babylonJsClassName](...args)

  return babylonjsObject
}

// TODO: add developer-tools stuff so it looks better in React panel

type HostContext = {}
type UpdatePayload = PropertyUpdate[] | null
type TimeoutHandler = number | undefined
type NoTimeout = number

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

type ConstructorArgument = {
  name: string
  type: string
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

  // type, { scene, ...props }, { canvas, engine, ...other }, ...more
  createInstance: (
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object
  ): CreatedInstance<any> | undefined => {
    console.log("creating:", type)

    const { children, name, scene, ...options } = props as any
    const { canvas, engine } = rootContainerInstance

    // TODO: generate Fiber versions of all lights
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

    // TODO: generate Fiber versions of all materials
    if (type === "StandardMaterial") {
      // using default materials so far, but this is broken.
      const material = getBabylon(type, ["scene", "options"], { ...props, scene, canvas, engine })

      return new CreatedInstanceImpl(
        material,
        null,
        new FiberMesh() // WRONG!!
      )
    }
    
    const createInfoArgs: CreateInfo | undefined = (GENERATED as any)[`Fiber${type}`].CreateInfo

    let generatedParameters: GeneratedParameter[] = createInfoArgs!.parameters;

    let args = generatedParameters.map(generatedParameter => {
      if(Array.isArray(generatedParameter.type)) {
        console.log(`working from array for ${generatedParameter.name}`)
        // TODO: if all props are missing, warn if main prop (ie: options) is required.
        let newParameter = {} as any;
        generatedParameter.type.forEach(subParameter => {
          let subPropValue = props[subParameter.name];
          if (subPropValue === undefined && subParameter.optional === false && generatedParameter.optional === false) {
            console.warn('Missing a required secondary property:', subParameter.name)
          } else {
            newParameter[subParameter.name] = subPropValue;
          }
        })
        return newParameter;
      } else {
        const value = props[generatedParameter.name];
        if (value === undefined && generatedParameter.optional === false) {
          console.warn(`On ${type} you are missing a non-optional parameter ${generatedParameter.name}`)
        }
        return value
      }
    })

    let babylonObject: any | undefined = undefined;
    
    if (createInfoArgs!.creationType === CreationType.FactoryMethod) {
      babylonObject = (BABYLON.MeshBuilder as any)[createInfoArgs!.factoryMethod!](...args);
    } else {
      babylonObject = new (BABYLON as any)[type](...args);
    }

    // TODO: add a post-init method to be called after instantiation.
    if (type.indexOf('Camera') !== -1) {
      // TODO: this needs to be dynamic part of camera:
      babylonObject.attachControl(canvas)
    }

    const fiberObject = new (GENERATED as any)[`Fiber${type}`]()

    let createdReference = createCreatedInstance(type, babylonObject, fiberObject, null)

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
    console.log("reconciler: resetAfterCommit", containerInfo);

    let scene : BABYLON.Scene = containerInfo.engine.scenes[0];
    let camera : BABYLON.Nullable<BABYLON.Camera> = scene.activeCamera
    if (camera === null) {
      console.warn('looks like camera is null??')
    } else {
      camera.attachControl(containerInfo.canvas as HTMLCanvasElement);
    }
  },

  appendInitialChild: (parent: HostCreatedInstance<any>, child: CreatedInstance<any>) => {
    // Here we are traversing downwards.  The parent has not been initialized, but all children have been.
    console.log("reconciler: appentInitialChild", parent, child)
    // TODO: if parent is mesh and child is material.  parent.material = child
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
    console.error("apply updates", instance, updatePayload)

    if (updatePayload != null) {
      ;(updatePayload as PropertyUpdate[]).forEach(update => {
        switch (update.type) {
          case "string":
          case "number":
            console.log(`updating ${type} on ${update.propertyName} to ${update.value}`)
            instance!.babylonJsObject[update.propertyName] = update.value
            break
          case "BABYLON.Vector3":
            console.log(`updating vector3 on:${update.propertyName} to ${update.value}`)
            ;(instance!.babylonJsObject[update.propertyName] as BABYLON.Vector3).copyFrom(update.value)
            break
          default:
            console.error(`unhandled property update of type ${update.type}`)
            break
        }
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

const ReactReconcilerInst = ReactReconciler(hostConfig)
let root: ReactReconciler.FiberRoot
//let internalContainerStructure : Container | ReactReconciler.FiberRoot | BaseFiberRootProperties | ProfilingOnlyFiberRootProperties;
export function render(reactElements: React.ReactNode, container: Container, callback: () => void) {
  // Create a root Container if it doesnt exist
  if (!root) {
    const isAsync = false // Disables async rendering (experimental anyway)

    // createContainer(containerInfo: Container, isAsync: boolean, hydrate: boolean): OpaqueRoot;
    root = ReactReconcilerInst.createContainer(container, isAsync, false /* hydrate true == better HMR? */)
  }

  // update the root Container
  console.log("updating rootContainer, reactElement:", reactElements)
  return ReactReconcilerInst.updateContainer(reactElements, root, null, callback)
}

export function unmount(args: any) {
  console.log("UNMOUNT", ...args)
}
