import { ReactElement, version } from 'react';
import Reconciler, { FiberRoot, Reconciler as ReconcilerType } from 'react-reconciler';
import ReactBabylonJSHostConfig, { Container } from './ReactBabylonJSHostConfig';

export const roots = new Map<Container, FiberRoot>();

export type RendererOptions = {
  usePrimary?: boolean
}

export interface ReconcilerInstance {
  /**
   * Replace previous root node with a new one or update props of the current root node.
   */
  render: (element: ReactElement | null, container: Container, callback: () => void, parentComponent: any) => any;
  /**
   * Manually unmount the whole app.
   */
  unmount: (container: Container) => void;
}

const ReconcilerSecondary: ReconcilerType<Container, any, any, any, any> = Reconciler(ReactBabylonJSHostConfig);
const ReconcilerPrimary: ReconcilerType<Container, any, any, any, any> = Reconciler({ ...ReactBabylonJSHostConfig, isPrimaryRenderer: true });

/**
 * This is a work in progress in experimental state.
 */
export function createPortal(children: React.ReactNode, containerInfo: any, key?: string | null, usePrimary: boolean = false): Reconciler.ReactPortal {
  const reconciler = (usePrimary === true ? ReconcilerPrimary : ReconcilerSecondary);
  let target = containerInfo;
  if ('__rb_createdInstance' in containerInfo) {
    // console.log('retargeting to ', containerInfo.__rb_createdInstance);
    target = containerInfo.__rb_createdInstance;
  }

  return reconciler.createPortal(children, target, null, key);
}

/*
 * Creates a reconciler instance using an internal pre-existing Reconciler instance.
 * So far the only option is if you want a primary renderer (non-default).
 */
export function createReconciler(rendererOptions: RendererOptions): ReconcilerInstance {

  const reconciler: ReconcilerType<Container, any, any, any, any> = (rendererOptions.usePrimary === true)
    ? ReconcilerPrimary
    : ReconcilerSecondary;

  function render(element: ReactElement | null, container: Container, callback: () => void, parentComponent: any): any {
    let root = roots.get(container);
    if (!root) {
      // https://github.com/facebook/react/blob/master/packages/react-test-renderer/src/ReactTestRenderer.js#L449
      root = (reconciler as any).createContainer(
        container,
        false /* isConcurrent */,
        false /* hydrate */
      ) as FiberRoot;
      roots.set(container, root);

      reconciler.injectIntoDevTools({
        findFiberByHostInstance: (reconciler as any).findFiberByHostInstance,
        bundleType: process.env.NODE_ENV === 'prod' ? 1 : 0,
        version,
        rendererPackageName: 'react-babylonjs',
      });
    }

    reconciler.updateContainer(element, root, parentComponent, callback);

    return reconciler.getPublicRootInstance(root);
  }

  function unmount(container: Container): void {
    const root = roots.get(container)!;
    reconciler.updateContainer(null, root, null, () => { /* ignored */ });
    roots.delete(container);
  }

  return {
    render,
    unmount
  }
}
