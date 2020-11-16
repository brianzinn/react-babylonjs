import React, { useContext, useEffect, useRef, useState, MutableRefObject } from 'react';
import ReactReconciler, { Reconciler } from "react-reconciler";

import { EngineCanvasContextType, EngineCanvasContext, withEngineCanvasContext } from './hooks/engine';
import { SceneContext } from './hooks/scene';

import {
  AbstractMesh,
  Nullable,
  Observer,
  PointerEventTypes,
  PointerInfo,
  Scene as BabylonJSScene,
  SceneOptions
} from '@babylonjs/core';

import { applyUpdateToInstance } from "./UpdateInstance";
import ReactBabylonJSHostConfig, { Container } from './ReactBabylonJSHostConfig';
import { FiberScenePropsHandler } from './generatedCode';
import { FiberSceneProps } from './generatedProps';
import { UpdatePayload } from './PropsHandler';

export declare type SceneEventArgs = {
  scene: BabylonJSScene;
  canvas: HTMLCanvasElement;
};

type SceneProps = {
  engineCanvasContext: EngineCanvasContextType
  onMeshPicked?: (mesh: AbstractMesh, scene: BabylonJSScene) => void
  onScenePointerDown?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onScenePointerUp?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onScenePointerMove?: (evt: PointerInfo, scene: BabylonJSScene) => void
  onSceneMount?: (sceneEventArgs: SceneEventArgs) => void
  children: any,
  sceneOptions?: SceneOptions
} & FiberSceneProps

const updateScene = (props: SceneProps, prevPropsRef: MutableRefObject<Partial<SceneProps>>, scene: BabylonJSScene, propsHandler: FiberScenePropsHandler) => {
  const prevProps = prevPropsRef.current;
  const updates: UpdatePayload = propsHandler.getPropertyUpdates(prevProps, props);

  if (updates !== null) {
    updates.forEach(propertyUpdate => {
      applyUpdateToInstance(scene, propertyUpdate, 'scene')
    })
  }
  prevPropsRef.current = props;
}

const Scene: React.FC<SceneProps> = (props: SceneProps, context?: any) => {
  const { engine } = useContext(EngineCanvasContext)

  const [propsHandler] = useState(new FiberScenePropsHandler());
  const [sceneReady, setSceneReady] = useState(false);
  const [scene, setScene] = useState<Nullable<BabylonJSScene>>(null)
  const [fiberRoot, setFiberRoot] = useState<any>(null);

  // TODO: make this strongly typed
  const [renderer, setRenderer] = useState<Nullable<Reconciler<any, any, any, any>>>(null);

  const prevPropsRef: MutableRefObject<Partial<SceneProps>> = useRef<Partial<SceneProps>>({});

  console.log('rendering scene.');

  // initialize babylon scene
  useEffect(() => {
    const scene = new BabylonJSScene(engine!, props.sceneOptions)
    // const onReadyObservable: Nullable<Observer<BabylonJSScene>> = scene.onReadyObservable.add(onSceneReady);
    const sceneIsReady = scene.isReady();
    if (sceneIsReady) {
      // scene.onReadyObservable.remove(onReadyObservable);
      setSceneReady(true); // this does not flow and cause a re-render
    } else {
      console.error('Scene is not ready. Report issue in react-babylonjs repo')
    }

    setScene(scene);
    updateScene(props, prevPropsRef, scene, propsHandler);

    const isAsync = false // Disables experimental async rendering

    const container: Container = {
      engine: props.engineCanvasContext.engine,
      canvas: props.engineCanvasContext.canvas,
      scene: scene,
      rootInstance: {
        __rbs: {
          children: [],
          parent: null,
          metadata: {
            className: "root"
          },
          customProps: {}
        }
      }
    }

    const renderer = ReactReconciler(ReactBabylonJSHostConfig);
    setRenderer(renderer);
    const fiberRoot = renderer.createContainer(container, isAsync, false /* hydrate true == better HMR? */);
    setFiberRoot(fiberRoot);

    renderer.injectIntoDevTools({
      bundleType: process.env.NODE_ENV === 'production' ? 0 : 1,
      version: '2.0.0',
      rendererPackageName: 'react-babylonjs'
    });

    const pointerDownObservable: Nullable<Observer<PointerInfo>> = scene.onPointerObservable.add(
      (evt: PointerInfo) => {
        if (typeof props.onScenePointerDown === 'function') {
          props.onScenePointerDown(evt, scene);
        }

        if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
          let mesh = evt.pickInfo.pickedMesh;
          if (typeof props.onMeshPicked === 'function') {
            props.onMeshPicked(mesh, scene);
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
      );
    }

    // can only be assigned on init
    let pointerMoveObservable: Nullable<Observer<PointerInfo>> = null;
    if (typeof props.onScenePointerMove === 'function') {
      pointerMoveObservable = scene.onPointerObservable.add(
        (evt: PointerInfo) => {
          props.onScenePointerMove!(evt, scene);
        },
        PointerEventTypes.POINTERMOVE
      );
    }

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

    console.log('updating container', scene, sceneReady, sceneIsReady);

    // update the root Container
    renderer.updateContainer(
      <SceneContext.Provider value={{
        scene,
        sceneReady: sceneIsReady
      }}>
        {props.children}
      </SceneContext.Provider>, fiberRoot, undefined, () => { /* empty */
      }
    );

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

    updateScene(props, prevPropsRef, scene, propsHandler);

    console.log('rendering scene after update.', sceneReady);
    renderer.updateContainer(
      <SceneContext.Provider value={{
        scene,
        sceneReady
      }}>
        {props.children}
      </SceneContext.Provider>,
      fiberRoot,
      undefined,
      () => { /* called after container is updated.  we may want an external observable here */ }
    );
  });

  return null;
};

export default withEngineCanvasContext(Scene)
