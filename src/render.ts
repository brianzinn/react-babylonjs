import ReactReconciler, { HostConfig, Update } from "react-reconciler"
import BABYLON from "babylonjs"
import { shallowEqual } from "shallow-equal-object"

import components from "./components.json"
import { PropsHandler, MeshPropsHandler, MeshProps } from "./generatedCode"

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

// to not collide with other props.  will add additional meta data type after { family: string, prop2: number }.
const RENDER_PROP_REFERENCE: string = "__react_babylonjs_createdInstance"

type CreatedInstanceMetadata = {
  className: string
  shadowCamera: boolean
  // TODO: more metadata to follow
}

export interface CreatedInstance<T> {
  className: string
  familyType: ComponentFamilyType
  babylonJsObject: T
  metadata: CreatedInstanceMetadata | null
  parent: CreatedInstance<any> | null // Not the same as parent in BabylonJS, this is for internal reconciler structure. ie: graph walking
  children: CreatedInstance<any>[]
  propsHandlers: PropsHandler<T, any>[]
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
export const getBabylon = (definition: ComponentDefinition, options: any) => {
  const args = definition.args.map(a => options[a])
  const babylonjsObject = new (BABYLON as any)[definition.name](...args)

  if (definition.props) {
    definition.props.forEach(p => {
      if (typeof options[p] !== "undefined" && args.indexOf(p) === -1) {
        // TODO: we need to white-list this
        babylonjsObject[p] = options[p]
      }
    })
  }
  return babylonjsObject
}

// TODO: add developer-tools stuff so it looks better in React panel

type HostContext = {}

type TimeoutHandler = number | undefined
type NoTimeout = number

function createCreatedInstance<T>(
  familyType: ComponentFamilyType,
  className: string,
  babylonJsObject: T,
  propsHandlers: PropsHandler<T, any>[],
  metadata: CreatedInstanceMetadata | null
): CreatedInstance<T> {
  return {
    familyType,
    babylonJsObject,
    className,
    metadata: null,
    parent: null, // set later in lifecycle
    children: [], // set later in lifecycle
    propsHandlers
  } as CreatedInstance<T>
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
  {},
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
  ): {} | null {
    if (!instance) {
      return null
    }

    console.log("prepareUpdate", instance, oldProps, newProps)
    let updatePayload: PropertyUpdate[] = []
    instance.propsHandlers.forEach(propHandler => {
      let handlerUpdates : PropertyUpdate[] | null = propHandler.getPropertyUpdates(instance as CreatedInstance<any>, oldProps, newProps)
      if (handlerUpdates !== null) {
        updatePayload.push(...handlerUpdates)
      }
    })

    if (updatePayload.length > 0) {
      console.log(` > updated payload for '${instance.className}':`, updatePayload);  
    }

    return updatePayload.length == 0 ? null : updatePayload;
  },

  // type, { scene, ...props }, { canvas, engine, ...other }, ...more
  createInstance: (
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: HostContext,
    internalInstanceHandle: Object
  ): CreatedInstance<any> | undefined => {
    const definition: ComponentDefinition | undefined = (components as any)[type]

    const family = getFamilyFromComponentDefinition(type, definition)
    if (!family) {
      console.warn('unsupported tag (no "family" found): ', definition, type)
      console.log("components:", components)
    }

    console.log("creating:", type, props)

    const { scene } = props
    const { canvas, engine } = rootContainerInstance

    // TODO: check props based on pre-computed static code-analysis of babylonjs
    // these could also use other prop-helpers to make the components nicer to work with
    if (family === ComponentFamilyType.Meshes) {
      const { name, x = 0, y = 0, z = 0, position, ...options } = props as any // not type-safe - dynamically generate MeshProps
      // does not work for 2 types: Decal and GroundFromHeightMap
      const mesh = (BABYLON.MeshBuilder as any)[`Create${type}`](name, options, scene)
      mesh.position = position || new BABYLON.Vector3(x, y, z)

      let createdInstance = createCreatedInstance(family, definition!.name, mesh, [new MeshPropsHandler()], null)
      mesh[RENDER_PROP_REFERENCE] = createdInstance // TODO: this is hopefully not needed.
      return createdInstance
    }

    if (family === ComponentFamilyType.Camera) {
      const { x = 0, y = 0, z = 0, position, target, ...options } = props as any
      options.position = position || new BABYLON.Vector3(x, y, z)
      if (target) {
        if (type === "FollowCamera") {
          options.lockedTarget = typeof target === "string" ? scene.getMeshByName(target) : target
        } else {
          if (typeof target === "string") {
            let mesh = scene.getMeshByName(target)
            if (mesh) {
              options.lockedTarget = mesh
            } else {
              console.warn("lock target not found:", target)
            }
          } else {
            options.lockedTarget = target
          }
        }
      }

      const camera = getBabylon(definition!, { ...options, scene, canvas, engine })
      camera.attachControl(canvas)

      let createdReference = createCreatedInstance(family, definition!.name, camera, [], null)
      camera[RENDER_PROP_REFERENCE] = createdReference // TODO: this is hopefully not needed.
      return createdReference
    }

    if (family === ComponentFamilyType.Lights) {
      const { name, direction = BABYLON.Vector3.Up() } = props as any

      let dir: BABYLON.Vector3
      if (typeof direction === "string") {
        const dirKey = direction.toLowerCase()
        if (!directions.has(dirKey)) {
          console.warn(`Cannot find direction ${direction}.  defaulting to "up"`)
          dir = BABYLON.Vector3.Up()
        } else {
          dir = directions.get(dirKey)!()
        }
      } else {
        dir = direction
      }

      // TODO: implement other lights dynamically.  ie: PointLight, etc.
      const light = new BABYLON.HemisphericLight(name as string, dir, scene) as any

      let createdInstance = createCreatedInstance(family, definition!.name, light, [], null)
      light[RENDER_PROP_REFERENCE] = createdInstance // TODO: this is hopefully not needed.
      return createdInstance
    }

    if (family === ComponentFamilyType.Materials) {
      const material = getBabylon(definition!, { ...props, scene, canvas, engine })

      let createdInstance = createCreatedInstance(family, definition!.name, material, [], null)
      material[RENDER_PROP_REFERENCE] = createdInstance // TODO: this is hopefully not needed.
      return createdInstance
    }

    console.error(`TODO: ${type} needs to be turned into a BABYLON instantiater in renderer.`)
    return undefined
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

  prepareForCommit: (containerInfo: Container) : void => {
    // Called based on return value of: finalizeInitialChildren.  in-memory render tree created, but not yet attached.
    console.log("reconciler: prepareForCommit", containerInfo)
  },

  resetAfterCommit: (containerInfo: Container) : void => {
    // Called after the in-memory tree has been committed (ie: after attaching again to root element)
    console.log("reconciler: resetAfterCommit", containerInfo)
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
    const callCommitMountForThisInstance: boolean = true;
    return callCommitMountForThisInstance;
  },

  commitMount: (instance: HostCreatedInstance<any>, type: string, newProps: any, internalInstanceHandle: ReactReconciler.Fiber) : void => {
    console.log('everything has beenn instantiated for instance: ', instance, newProps);
  },

  appendChildToContainer: (container: Container, child: HostCreatedInstance<any>): void => {
    // NOTE: only called if supportsMutation = true;
    // This is used for attaching child notes to the root DOM, but for us that does not apply.
    console.log("append child", child, "to container", container)
  },

  commitUpdate(instance: HostCreatedInstance<any>, updatePayload: any, type: string, oldProps: any, newProps: any) {
    console.log("commitUpdate", instance, updatePayload, type, oldProps, newProps)
    console.error('apply updates', instance, updatePayload);
    
    if (updatePayload != null) {
      (updatePayload as PropertyUpdate[]).forEach(update => {

        switch(update.type) {
          case "string":
          case "number":
            console.log(`updating ${type} on ${update.propertyName} to ${update.value}`)
            instance!.babylonJsObject[update.propertyName] = update.value;
            break;
          case "BABYLON.Vector3":
            console.log(`updating vector3 on:${update.propertyName} to ${update.value}`);
            (instance!.babylonJsObject[update.propertyName] as BABYLON.Vector3).copyFrom(update.value);
            break;
          default:
            console.error(`unhandled property update of type ${update.type}`);
            break;
        
        }
      });
    }
  },

  removeChildFromContainer(containe: Container, child: {} | CreatedInstance<any> | undefined) : void {
    console.log('removing child from container', child);
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
let root : ReactReconciler.FiberRoot;
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
