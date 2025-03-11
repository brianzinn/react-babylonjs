import { ReactElement, version } from 'react'
import Reconciler, { FiberRoot, Reconciler as ReconcilerType } from 'react-reconciler'
import ReactBabylonJSHostConfig, { Container } from './ReactBabylonJSHostConfig'
import { ConcurrentRoot } from 'react-reconciler/constants'

export const roots = new Map<Container, FiberRoot>()

export type RendererOptions = {
  usePrimary?: boolean
}

export interface ReconcilerInstance {
  /**
   * Replace previous root node with a new one or update props of the current root node.
   */
  render: (
    element: ReactElement | null,
    container: Container,
    callback: () => void,
    parentComponent: any
  ) => any
  /**
   * Manually unmount the whole app.
   */
  unmount: (container: Container) => void
}

const ReconcilerSecondary: ReconcilerType<Container, any, any, any, any> =
  Reconciler(ReactBabylonJSHostConfig)
const ReconcilerPrimary: ReconcilerType<Container, any, any, any, any> = Reconciler({
  ...ReactBabylonJSHostConfig,
  isPrimaryRenderer: true,
})

/**
 * This is a work in progress in experimental state.
 */
export function createPortal(
  children: React.ReactNode,
  containerInfo: any,
  key?: string | null,
  usePrimary = false
): Reconciler.ReactPortal {
  const reconciler = usePrimary === true ? ReconcilerPrimary : ReconcilerSecondary
  let target = containerInfo
  if ('__rb_createdInstance' in containerInfo) {
    // console.log('retargeting to ', containerInfo.__rb_createdInstance);
    target = containerInfo.__rb_createdInstance
  }

  return reconciler.createPortal(children, target, null, key)
}

/*
 * Creates a reconciler instance using an internal pre-existing Reconciler instance.
 * So far the only option is if you want a primary renderer (non-default).
 */
export function createReconciler(rendererOptions: RendererOptions): ReconcilerInstance {
  const reconciler: ReconcilerType<Container, any, any, any, any> =
    rendererOptions.usePrimary === true ? ReconcilerPrimary : ReconcilerSecondary

  // Add a polyfill for resolveUpdatePriority if it doesn't exist
  if (reconciler && typeof (reconciler as any).resolveUpdatePriority !== 'function') {
    ;(reconciler as any).resolveUpdatePriority = (
      priorityLevel: any,
      currentUpdatePriority: any
    ) => {
      // Use highest priority between the two
      return currentUpdatePriority === undefined
        ? priorityLevel
        : currentUpdatePriority > priorityLevel
        ? currentUpdatePriority
        : priorityLevel
    }
  }

  function render(
    element: ReactElement | null,
    container: Container,
    callback: () => void,
    parentComponent: any
  ): any {
    let root = roots.get(container)
    if (!root) {
      try {
        // React 19 changed the createContainer API
        console.log('React 19 createContainer API')
        root = reconciler.createContainer(
          container,
          ConcurrentRoot, // tag
          null, // hydrationCallbacks
          false, // isStrictMode
          null, // concurrentUpdatesByDefaultOverride
          '', // identifierPrefix
          (err: any) => console.log(err), // onUncaughtError
          // (err: any) => console.log(err), // onCaughtError
          // (err: any) => console.log(err), // onRecoverableError
          null // transitionCallbacks
        ) as FiberRoot
      } catch (error) {
        // Fallback to older API if new one fails
        console.warn('Falling back to legacy createContainer API', error)
        root = (reconciler as any).createContainer(
          container,
          false /* isConcurrent */,
          false /* hydrate */
        ) as FiberRoot
      }

      roots.set(container, root)

      if (typeof (reconciler as any).injectIntoDevTools === 'function') {
        try {
          reconciler.injectIntoDevTools({
            bundleType: process.env.NODE_ENV === 'production' ? 1 : 0,
            version,
            rendererPackageName: 'react-babylonjs',
            findFiberByHostInstance: (reconciler as any).findFiberByHostInstance || null,
          })
        } catch (e) {
          console.warn('Could not inject into DevTools:', e)
        }
      }
    }

    try {
      // The updateContainer call might have changed in React 19
      reconciler.updateContainer(element, root, parentComponent, callback)
    } catch (error) {
      console.error('Error updating container:', error)
      // You might need to implement a fallback strategy here
    }

    return reconciler.getPublicRootInstance(root)
  }

  function unmount(container: Container): void {
    const root = roots.get(container)
    if (root) {
      try {
        reconciler.updateContainer(null, root, null, () => {
          /* ignored */
        })
      } catch (e) {
        console.error('Error unmounting container:', e)
      }
      roots.delete(container)
    }
  }

  return {
    render,
    unmount,
  }
}
