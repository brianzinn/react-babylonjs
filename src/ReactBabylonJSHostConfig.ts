import ReactReconciler, { HostConfig } from "react-reconciler"
import {Scene, Engine, Nullable, Node} from '@babylonjs/core'
import * as BABYLONEXT from "./extensions"
import * as GENERATED from './generatedCode'
import * as CUSTOM_HOSTS from "./customHosts"
import * as CUSTOM_COMPONENTS from "./customComponents"

import { FiberModel, LoadedModel } from "./model"
import { CreatedInstance, CreatedInstanceMetadata, CustomProps } from "./CreatedInstance"
import { HasPropsHandlers, PropertyUpdate, UpdatePayload, PropsHandler } from "./PropsHandler"
import { LifecycleListener } from "./LifecycleListener"
import { GeneratedParameter, CreateInfo, CreationType } from "./codeGenerationDescriptors"
import { applyUpdateToInstance, applyInitialPropsToInstance } from "./UpdateInstance"

// ** TODO: switch to node module 'scheduler', but compiler is not finding 'require()' exports currently...
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
    requestIdleCallback: ((callback: ((deadline: RequestIdleCallbackDeadline) => void), opts?: RequestIdleCallbackOptions) => RequestIdleCallbackHandle)
    cancelIdleCallback: ((handle: RequestIdleCallbackHandle) => void)
  }
}
// ** END WINDOW

type HostCreatedInstance<T> = CreatedInstance<T> | undefined

type Props = {
  scene: Scene
} & any

export type Container = {
  engine: Nullable<Engine>
  canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
  scene: Nullable<Scene>
  rootInstance: CreatedInstance<any>
}

type HostContext = {} & Container
type TimeoutHandler = number | undefined
type NoTimeout = number

function createCreatedInstance<T, U extends HasPropsHandlers<any>>(
  className: string,
  hostInstance: T,
  propsHandlers: U,
  metadata: CreatedInstanceMetadata,
  customProps?: CustomProps,
  lifecycleListener?: LifecycleListener<T>
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
    lifecycleListener,
    customProps
  } as CreatedInstance<T>
}

/**
 * remove instance's children recursively
 *
 * @param parentInstance
 * @param child
 */
function removeChild(parentInstance: CreatedInstance<any>, child: CreatedInstance<any>) {
  if (child) {
    const {hostInstance} = child;

    if (child.lifecycleListener) {
      child.lifecycleListener.onUnmount();
    }

    if (child.metadata.isNode) {
      (hostInstance as Node).parent = null;
    } else if (child.metadata.isGUI3DControl === true) {
      console.error("3D remove control not implemented.")
    }

    if (parentInstance.metadata && parentInstance.metadata.isGUI2DControl === true && child.metadata.isGUI2DControl === true) {
      // NOTE: the if statement should be || and we may need to walk the tree to remove.
      parentInstance.hostInstance.removeControl(child.hostInstance)
    }

    if(child.children) {
      removeRecursive(child.children, child);
    }

    if (typeof child.hostInstance.dispose === "function") {
      hostInstance.dispose() // TODO: Consider adding metadata/descriptors as some dispose methods have optional args.
    }

    // fix: old version rootInstance.children was not cleaned, so the children array maybe huge over time
    parentInstance.children = parentInstance.children.filter(ci => ci !== child)
    child.parent = null
  }
}

/**
 * remove child recursive
 */
function removeRecursive(array: any, parent:any, clone: boolean = false) {
  if (array) {
    const target = clone ? [...array] : array;
    target.forEach((child:any) => removeChild(parent, child));
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
> & {
   hideInstance: (instance: HostCreatedInstance<any>) => void;
   unhideInstance: (instance: HostCreatedInstance<any>, props:Props) => void;
} = {
  // This has the reconciler include in call chain ie: appendChild, removeChild
  get supportsMutation(): boolean {
    return true
  },

  now: () => {
    return Date.now() // TODO: use performance.now
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
        children: [], // we add root notes here
        customProps: {}
      } as CreatedInstance<any>
    }
  },

  // this is the context you pass down to children.  without this root will not be available to attach to in appendChildToContainer.
  getChildHostContext: (parentHostContext: HostContext, type: string, rootContainerInstance: Container): HostContext => {
    return parentHostContext
  },

  prepareUpdate(
    instance: HostCreatedInstance<any>,
    type: string,
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
    instance.propsHandlers!.getPropsHandlers().forEach((propHandler: PropsHandler<any>) => {
      let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        oldProps,
        newProps
      )
      if (handlerUpdates !== null) {
        updatePayload.push(...handlerUpdates)
      }
    })

    return updatePayload.length === 0 ? null : updatePayload
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
        customProps: {},
        lifecycleListener: new (CUSTOM_HOSTS as any)[type + "Fiber"](scene, engine, props)
      }

      // onCreated and other lifecycle hooks are not called for built-in host
      return createdInstance
    }

    // so far this is the only non-babylonJS host component, but otherwise a more generic solution will be needed:
    if (type.toLowerCase() === "model") {
      let createdInstance: CreatedInstance<LoadedModel> = {
        hostInstance: new LoadedModel() /* this is reassigned in Lifecycle Listener */,
        metadata: {
          className: "Model"
        },
        parent: null,
        children: [],
        propsHandlers: new FiberModel() as any,
        lifecycleListener: new CUSTOM_COMPONENTS.ModelLifecycleListener(scene! /* should always be available */, props),
        customProps: {}
      }

      // onCreated and other lifecycle hooks are not called for built-in host
      return createdInstance
    }

    // some types (ie: button) are called 'babylonjs-button'.
    const underlyingClassName = (GENERATED.intrinsicClassMap as any)[type] || type;

    const classDefinition = (GENERATED as any)[`Fiber${underlyingClassName}`]

    if (classDefinition === undefined) {
      throw new Error(`Cannot generate type '${type}/${underlyingClassName}' inside 'react-babylonjs' (ie: no DOM rendering on HTMLCanvas)`)
    }

    let createInfoArgs: CreateInfo = classDefinition.CreateInfo
    let metadata: CreatedInstanceMetadata = classDefinition.Metadata

    // console.log(`creating: ${createInfoArgs.namespace}.${type}`)
    let generatedParameters: GeneratedParameter[] = createInfoArgs.parameters

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
        if (value === undefined) {
          // NOTE: we removed the hosted Scene component, which needs (generatedParameter.type == "BabylonjsCoreEngine")
          // SceneOrEngine type is Scene
          if (generatedParameter.type.includes("BabylonjsCoreScene") || (generatedParameter.type === "any" && generatedParameter.name === "scene")) {
            // MeshBuild.createSphere(name: string, options: {...}, scene: any)
            // console.log('Assigning scene to:', type, generatedParameter)
            value = scene
          } else if (generatedParameter.optional === false) {
            console.warn(`required parameter for ${type} unassigned -> ${generatedParameter.name}:${generatedParameter.type}`);
          }
        }

        if (value === undefined && generatedParameter.optional === false) {
          console.warn(`On ${type} you are missing a non-optional parameter '${generatedParameter.name}' of type '${generatedParameter.type}'`)
        }

        return value
      }
    })

    let babylonObject: any | undefined = undefined

    if (createInfoArgs.creationType === CreationType.FactoryMethod) {
      // console.warn(`creating from Factory: ${createInfoArgs.libraryLocation}.${createInfoArgs.factoryMethod}(...args).  args:`, args)
      babylonObject = GENERATED.babylonClassFactory(createInfoArgs.libraryLocation)[createInfoArgs.factoryMethod!](...args)
    } else {
      if (metadata.delayCreation !== true) {
        if(createInfoArgs.namespace.startsWith('@babylonjs/')) {
            const clazz: any = GENERATED.babylonClassFactory(type);
            if (clazz === undefined) {
              throw new Error(`Cannot generate '${type}' (react-babylonjs):`);
            }
            babylonObject = new clazz(...args)
        } else if (createInfoArgs.namespace.startsWith('./extensions/')) {
            const extClassName = (GENERATED.intrinsicClassMap as any)[type] || type;
            babylonObject = new (BABYLONEXT as any)[extClassName](...args)
        } else {
            console.error("metadata defines (or does not) a namespace that is known", createInfoArgs.namespace)
        }
      }
    }

    // Developer accessible lifecycle phase.  ie: access propery/method exposed in props.
    if (typeof props.onCreated === "function") {
      props.onCreated(babylonObject)
    }

    const fiberObject: HasPropsHandlers<any> = new (GENERATED as any)[`Fiber${underlyingClassName}`]()

    let lifecycleListener: LifecycleListener<any> | undefined = undefined

    // TODO: Add these to just the 'type' of component they apply to.
    let customProps: CustomProps = {
      childrenAsContent: props.childrenAsContent === true, // ie: Button3D.container instead of .addControl()
      createForParentMesh: props.createForParentMesh === true, // AdvancedDynamicTexture attached to parent mesh (TODO: add forMeshByName="")
      onControlAdded: typeof props.onControlAdded === "function" ? props.onControlAdded : undefined,
      connectControlNames: props.connectControlNames, // VirtualKeyboard to connect inputs by name.
      defaultKeyboard: props.defaultKeyboard === true,
      linkToTransformNodeByName: props.linkToTransformNodeByName,
      shadowCasters: props.shadowCasters,
      shadowCastersExcluding: props.shadowCastersExcluding,
      attachToMeshesByName: props.attachToMeshesByName, // for materials - otherwise will attach to first parent that accepts materials
      assignTo: props.assignTo // here a lifecycle listener can dynamically attach to another property (ie: Mesh to DynamicTerrain -> 'mesh.material')
    }

    // Consider these being dynamically attached to a list, much like PropsHandlers<T>
    if (metadata.isMaterial === true) {
      lifecycleListener = new CUSTOM_COMPONENTS.MaterialsLifecycleListener()
    } else if (metadata.isGUI3DControl === true) {
      lifecycleListener = new CUSTOM_COMPONENTS.GUI3DControlLifecycleListener(scene)
    } else if (metadata.isGUI2DControl === true) {
      lifecycleListener = new CUSTOM_COMPONENTS.GUI2DControlLifecycleListener()
    } else if (metadata.isTexture === true) {
      lifecycleListener = new CUSTOM_COMPONENTS.TexturesLifecycleListener()
    } else if (metadata.isCamera === true) {
      lifecycleListener = new CUSTOM_COMPONENTS.CameraLifecycleListener(scene, props, canvas as HTMLCanvasElement)
    } else if (metadata.isNode) {
      lifecycleListener = new CUSTOM_COMPONENTS.NodeLifecycleListener();
    } else if (metadata.isBehavior) {
      lifecycleListener = new CUSTOM_COMPONENTS.BehaviorLifecycleListener();
    }

    // here we dynamically assign listeners for specific types.
    // TODO: need to double-check because we are using 'camelCase'
    if ((CUSTOM_COMPONENTS as any)[underlyingClassName + "LifecycleListener"] !== undefined) {
      lifecycleListener = new (CUSTOM_COMPONENTS as any)[underlyingClassName + "LifecycleListener"](scene, props)
    }

    let createdReference = createCreatedInstance(underlyingClassName, babylonObject, fiberObject, metadata, customProps, lifecycleListener)

    if (lifecycleListener && lifecycleListener.onCreated) {
      lifecycleListener.onCreated(createdReference, scene!)
    }

    // Here we dynamically attach known props handlers.  Will be adding more in code generation for GUI - also for lifecycle mgmt.
    if (createdReference.metadata && createdReference.metadata.isTargetable === true) {
      fiberObject.addPropsHandler(new CUSTOM_COMPONENTS.TargetPropsHandler(scene!))
    }

    if (metadata.delayCreation !== true) {
      applyInitialPropsToInstance(createdReference, props);
    } else {
      createdReference.deferredCreationProps = props;
    }
    return createdReference
  },

  shouldDeprioritizeSubtree: (type: string, props: Props): boolean => {
    return false
  },

  hideInstance(instance: CreatedInstance<any>) {},
  
  unhideInstance(instance: CreatedInstance<any>, props: Props) {},

  createTextInstance: (): any => {
    return undefined
  },

  scheduleDeferredCallback(callback: (deadline: RequestIdleCallbackDeadline) => void, opts?: RequestIdleCallbackOptions | undefined): any {
    return window.requestIdleCallback(callback, opts) // ReactDOMHostConfig has: unstable_scheduleCallback as scheduleDeferredCallback
  },

  cancelDeferredCallback(handle: any): void {
    return window.cancelIdleCallback(handle)
  },

  setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandler {
    return window.setTimeout(handler)
  },

  clearTimeout(handle?: number | undefined): void {
    window.clearTimeout(handle)
  },

  // https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js#L288
  noTimeout: -1,

  // Called based on return value of: finalizeInitialChildren.  in-memory render tree created, but not yet attached.
  prepareForCommit: (containerInfo: Container): void => { /* empty */ },

  // Called after the in-memory tree has been committed (ie: after attaching again to root element)
  resetAfterCommit: (containerInfo: Container): void => { /* empty */ },

  appendInitialChild: (parent: HostCreatedInstance<any>, child: CreatedInstance<any>) => {
    // Here we are traversing downwards.  Beyond parent has not been initialized, but all children have been.
    if (parent) {
      if (!child) {
        console.error('undefined child', parent);
      } else {
        // doubly linking child to parent
        parent.children.push(child) // TODO: need to remove from children as well when removing.
        child.parent = parent
      }
    }

    if (child && child.lifecycleListener && child.lifecycleListener.onParented) {
      child.lifecycleListener.onParented(parent!, child)
    }

    if (parent && parent.lifecycleListener && parent.lifecycleListener.onChildAdded) {
      parent.lifecycleListener.onChildAdded(child, parent)
    }
  },

  appendChild: (parent: CreatedInstance<any>, child: CreatedInstance<any>): void => {
    parent.children.push(child)
    child.parent = parent
  },

  canHydrateInstance: (instance: any, type: string, props: Props): null | CreatedInstance<any> => {
    // console.log("canHydrateInstance", instance, type, props)
    return null
  },

  // The parent of this node has not yet been instantiated.  The reconciler will continue by calling:
  // createInstance → appendInitialChild → finalizeInitialChildren on the parent.
  // When that has reached the top of the recursion tree (root), then prepareForCommit() will be called.
  // NOTE: All children of this component, however, HAVE been initialized.
  finalizeInitialChildren: (): boolean => {
    return true /* callCommitMountForThisInstance */
  },

  commitMount: (instance: HostCreatedInstance<any>, type: string, newProps: any, internalInstanceHandle: ReactReconciler.Fiber): void => {
    if (instance && instance.lifecycleListener && instance.lifecycleListener.onMount) {
      instance.lifecycleListener.onMount(instance)
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
    if (updatePayload !== null) {
      updatePayload.forEach((update: PropertyUpdate) => {
        applyUpdateToInstance(instance!.hostInstance, update, type)
      })
    }
  },

  removeChildFromContainer: (container: Container, child: HostCreatedInstance <any> ) => {
    /**
     * To fix two bugs when toggle meshes:
     * 1.  model's mesh can't be destroyed.
     * 2. `removeChildFromContainer()` only destroy babylon instance.
     * The model is rootAbstractMesh's and Parent's child.
     * `container.rootInstance.children` will be very large after few toggles.
     */

    if (child) {
      removeChild(container.rootInstance, child)
    }
  },
  removeChild,

  // text-content nodes are not used.  treated as a leaf node.  children are not traversed.  calls methods like createTextInstance(...)
  shouldSetTextContent: (type: string, props: any) => {
    return false
  }
}

export default ReactBabylonJSHostConfig
