/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {createContext, useContext, useEffect, useRef, useState,} from 'react';
import ReactReconciler, {Reconciler} from "react-reconciler";

import {BabylonJSContext, withBabylonJS, WithBabylonJSContext} from './Engine';
import {
  AbstractMesh,
  Engine as BabylonJSEngine,
  Nullable,
  Observer,
  PointerEventTypes,
  PointerInfo,
  Scene as BabylonJSScene,
  SceneOptions
} from '@babylonjs/core';

import {applyUpdateToInstance} from "./UpdateInstance";
import ReactBabylonJSHostConfig, {Container} from './ReactBabylonJSHostConfig';
import {FiberScenePropsHandler} from './generatedCode';
import {FiberSceneProps} from './generatedProps';
import {UpdatePayload} from './PropsHandler';

export interface WithSceneContext {
  engine: Nullable<BabylonJSEngine>
  canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
  scene: Nullable<BabylonJSScene>
  sceneReady: boolean
}

export declare type SceneEventArgs = {
  scene: BabylonJSScene;
  canvas: HTMLCanvasElement;
};

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const SceneContext = createContext<WithSceneContext>({
  engine: null,
  canvas: null,
  scene: null,
  sceneReady: false
})

export const useBabylonScene = () => useContext(SceneContext).scene

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withScene<P extends { sceneContext: WithSceneContext },
  R = Omit<P, 'sceneContext'>>(
  Component: React.ComponentClass<P> | React.FunctionComponent<P>
): React.FunctionComponent<R> {
  return function BoundComponent(props: R) {
    return (
      <SceneContext.Consumer>
        {ctx => <Component {...props as any} sceneContext={ctx}/>}
      </SceneContext.Consumer>
    );
  };
}

type SceneProps = {
  babylonJSContext: WithBabylonJSContext
  onMeshPicked?: (mesh: AbstractMesh, scene: BabylonJSScene) => void
  onScenePointerDown?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onScenePointerUp?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onScenePointerMove?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onSceneMount?: (sceneEventArgs: SceneEventArgs) => void
  children: any,
  sceneOptions?: SceneOptions
} & FiberSceneProps

const usePrevious = <T extends any>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const Scene: React.FC<SceneProps> = (props: SceneProps, context?: any) => {
  const {engine} = useContext(BabylonJSContext)

  const [propsHandler] = useState(new FiberScenePropsHandler());
  const [sceneReady, setSceneReady] = useState(false);
  const [scene, setScene] = useState<Nullable<BabylonJSScene>>(null)
  const [fiberRoot, setFiberRoot] = useState<any>(null);

  // TODO: make this strongly typed
  const [renderer, setRenderer] = useState<Nullable<Reconciler<any, any, any, any>>>(null);

  const prevPropsRef = useRef({});

  // initialize babylon scene
  useEffect(() => {
      // const onSceneReady = (eventData: BabylonJSScene, eventState: EventState) => {
      //   setSceneReady(true);
      // }

      const scene = new BabylonJSScene(engine!, props.sceneOptions)
      // const onReadyObservable: Nullable<Observer<BabylonJSScene>> = scene.onReadyObservable.add(onSceneReady);
      if (scene.isReady()) {
        // scene.onReadyObservable.remove(onReadyObservable);
        setSceneReady(true)
      } else {
        console.error('Scene is not ready. Report issue in react-babylonjs repo')
      }

      setScene(scene);

      const isAsync = false // Disables experimental async rendering

      const container: Container = {
        engine: props.babylonJSContext.engine,
        canvas: props.babylonJSContext.canvas,
        scene: scene,
        rootInstance: {
          hostInstance: null,
          children: [],
          parent: null,
          metadata: {
            className: "root"
          },
          customProps: {}
        }
      }

      const renderer = ReactReconciler(ReactBabylonJSHostConfig);
      setRenderer(renderer)
      const fiberRoot = renderer.createContainer(container, isAsync, false /* hydrate true == better HMR? */)
      setFiberRoot(fiberRoot);

      renderer.injectIntoDevTools({
        bundleType: process.env.NODE_ENV === 'production' ? 0 : 1,
        version: '2.0.0',
        rendererPackageName: 'react-babylonjs'
      })

      const pointerDownObservable: Nullable<Observer<PointerInfo>> = scene.onPointerObservable.add(
        (evt: PointerInfo) => {
          if (typeof props.onScenePointerDown === 'function') {
            props.onScenePointerDown(evt, scene)
          }

          if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
            let mesh = evt.pickInfo.pickedMesh
            if (typeof props.onMeshPicked === 'function') {
              props.onMeshPicked(mesh, scene)
            } else {
              // console.log('onMeshPicked not being called')
            }
          }
        },
        PointerEventTypes.POINTERDOWN
      );

      // can only be assigned on init
      let pointerUpObservable: Nullable<Observer<PointerInfo>> = null;
      if (typeof props.onScenePointerUp === 'function') {
        pointerUpObservable = scene.onPointerObservable.add(
          (evt: PointerInfo) => {
            props.onScenePointerUp!(evt, scene)
          },
          PointerEventTypes.POINTERUP
        )
      }
      ;

      // can only be assigned on init
      let pointerMoveObservable: Nullable<Observer<PointerInfo>> = null;
      if (typeof props.onScenePointerMove === 'function') {
        pointerMoveObservable = scene.onPointerObservable.add(
          (evt: PointerInfo) => {
            props.onScenePointerMove!(evt, scene)
          },
          PointerEventTypes.POINTERMOVE)
      }
      ;

      if (typeof props.onSceneMount === 'function') {
        props.onSceneMount({
          scene: scene,
          canvas: scene.getEngine().getRenderingCanvas()!
        });
        // TODO: console.error if canvas is not attached. runRenderLoop() is expected to be part of onSceneMount().
      }

      // TODO: change enable physics to 'usePhysics' taking an object with a Vector3 and 'any'.
      // NOTE: must be enabled for updating container (cannot add impostors w/o physics enabled)
      if (Array.isArray(props.enablePhysics)) {
        scene.enablePhysics(props.enablePhysics[0], props.enablePhysics[1]);
      }

      // update the root Container
      renderer.updateContainer(
        <SceneContext.Provider value={{
          engine: props.babylonJSContext.engine,
          canvas: props.babylonJSContext.canvas,
          scene,
          sceneReady
        }}>
          {props.children}
        </SceneContext.Provider>, fiberRoot, undefined, () => { /* empty */
        }
      )

      return () => {
        if (pointerDownObservable) {
          scene.onPointerObservable.remove(pointerDownObservable);
        }

        if (pointerUpObservable) {
          scene.onPointerObservable.remove(pointerUpObservable);
        }

        if (pointerMoveObservable) {
          scene.onPointerObservable.remove(pointerMoveObservable);
        }

        if (scene.isDisposed === false) {
          scene.dispose();
        }
      }
    },
    [/* no deps, so called only on un/mount */]
  );


  // update babylon scene
  useEffect(() => {
    if (engine === null || scene === null || renderer === null) {
      return;
    }

    const prevProps = prevPropsRef.current;
    const updates: UpdatePayload = propsHandler.getPropertyUpdates(prevProps, props);

    if (updates !== null) {
      updates.forEach(propertyUpdate => {
        applyUpdateToInstance(scene, propertyUpdate, 'scene')
      })
    }

    renderer.updateContainer(
      <SceneContext.Provider value={{
        engine: props.babylonJSContext.engine,
        canvas: props.babylonJSContext.canvas,
        scene,
        sceneReady
      }}>
        {props.children}
      </SceneContext.Provider>,
      fiberRoot,
      undefined,
      () => { /* called after container is updated.  we may want an external observable here */
      }
    )

    prevPropsRef.current = props;
  });

  return null;
};

export default withBabylonJS(Scene)
