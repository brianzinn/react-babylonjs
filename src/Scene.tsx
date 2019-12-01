/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { createContext, useContext } from 'react';
import ReactReconciler from "react-reconciler";

import { WithBabylonJSContext, withBabylonJS } from './Engine';
import { Scene as BabylonJSScene, Engine as BabylonJSEngine, Nullable, AbstractMesh, PointerInfo, PointerEventTypes, SceneOptions, Observer } from '@babylonjs/core';

import { applyUpdateToInstance } from "./UpdateInstance";
import ReactBabylonJSHostConfig, { Container } from './ReactBabylonJSHostConfig';
import { FiberScenePropsHandler } from './generatedCode';
import { FiberSceneProps } from './generatedProps';
import { UpdatePayload } from './PropsHandler';

export interface WithSceneContext {
  engine: Nullable<BabylonJSEngine>
  canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
  scene: Nullable<BabylonJSScene>
}

export declare type SceneEventArgs = {
  scene: BabylonJSScene;
  canvas: HTMLCanvasElement;
};

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const SceneContext = createContext<WithSceneContext>({
  engine: null,
  canvas: null,
  scene: null
})


export const useBabylonScene = () => useContext(SceneContext).scene

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withScene<
  P extends { sceneContext: WithSceneContext },
  R = Omit<P, 'sceneContext'>
  >(
  Component: React.ComponentClass<P> | React.FunctionComponent<P>
  ): React.FunctionComponent<R> {
  return function BoundComponent(props: R) {
    return (
      <SceneContext.Consumer>
        {ctx => <Component {...props as any} sceneContext={ctx} />}
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
  sceneOptions?: SceneOptions
} & FiberSceneProps

class Scene extends React.Component<SceneProps, any, any> {
  private _scene: Nullable<BabylonJSScene> = null;
  private _pointerDownObservable: Nullable<Observer<PointerInfo>> = null;
  private _pointerUpObservable: Nullable<Observer<PointerInfo>> = null;
  private _pointerMoveObservable: Nullable<Observer<PointerInfo>> = null;

  private _fiberRoot?: ReactReconciler.FiberRoot;
  private _reactReconcilerBabylonJs = ReactReconciler(ReactBabylonJSHostConfig)
  private _propsHandler = new FiberScenePropsHandler();

  componentDidMount() {
    const { babylonJSContext } = this.props
    
    if (!babylonJSContext) {
      // we could try to create one here with existing props (ie: backwards compat?)
      console.error('You are creating a scene without an Engine.  \'SceneOnly\' will only work as a child of Engine, use \'Scene\' otherwise.')
      return
    }
      
    const { engine /*, canvas */ } = babylonJSContext;

    this._scene = new BabylonJSScene(engine!, this.props.sceneOptions)
    const updates : UpdatePayload = this._propsHandler.getPropertyUpdates(this._scene, {}, this.props as any, this._scene)
    if (updates !== null) {
      updates.forEach(propertyUpdate => {
        applyUpdateToInstance(this._scene, propertyUpdate, 'scene')
      })
    }

    // TODO: Add keypress and other PointerEventTypes:
    this._pointerDownObservable = this._scene.onPointerObservable.add((evt: PointerInfo) => {

      if(typeof this.props.onScenePointerDown === 'function') {
        this.props.onScenePointerDown(evt, this._scene!)
      }

      if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
        let mesh = evt.pickInfo.pickedMesh

        if (typeof this.props.onMeshPicked === 'function') {
          this.props.onMeshPicked(mesh, this._scene!)
        } else {
          // console.log('onMeshPicked not being called')
        }
      }
    }, PointerEventTypes.POINTERDOWN);

    // can only be assigned on init
    if(typeof this.props.onScenePointerUp === 'function') {
      this._pointerUpObservable = this._scene.onPointerObservable.add((evt: PointerInfo) => { 
        this.props.onScenePointerUp!(evt, this._scene!)
      }, PointerEventTypes.POINTERUP)
    };

    // can only be assigned on init
    if(typeof this.props.onScenePointerMove === 'function') {
      this._pointerMoveObservable = this._scene.onPointerObservable.add((evt: PointerInfo) => { 
        this.props.onScenePointerMove!(evt, this._scene!)
      }, PointerEventTypes.POINTERMOVE)
    };

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
          scene: this._scene,
          canvas: this._scene.getEngine().getRenderingCanvas()!
      });
      // TODO: console.error if canvas is not attached. runRenderLoop() is expected to be part of onSceneMount().
    }

    // TODO: change enable physics to 'usePhysics' taking an object with a Vector3 and 'any'.
    if (Array.isArray(this.props.enablePhysics)) {
      this._scene.enablePhysics(this.props.enablePhysics[0], this.props.enablePhysics[1]);
    }

    const isAsync = false // Disables experimental async rendering
    
    const container: Container = {
      engine: this.props.babylonJSContext.engine,
      canvas: this.props.babylonJSContext.canvas,
      scene: this._scene,
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

    this._fiberRoot = this._reactReconcilerBabylonJs.createContainer(container, isAsync, false /* hydrate true == better HMR? */)
  
    this._reactReconcilerBabylonJs.injectIntoDevTools({
      bundleType: process.env.NODE_ENV === 'production' ? 0 : 1,
      version: '1.0.3',
      rendererPackageName: 'react-babylonjs'
    })

    // update the root Container
    // console.log("updating rootContainer (1) reactElement")
    return this._reactReconcilerBabylonJs.updateContainer(
      <SceneContext.Provider value={{ engine: this.props.babylonJSContext.engine, canvas: this.props.babylonJSContext.canvas, scene: this._scene }}>
        {this.props.children}
      </SceneContext.Provider>, this._fiberRoot, undefined /* TODO: try to dual-write for screen readers */, () => { /* empty */}
    )
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    const updates : UpdatePayload = this._propsHandler.getPropertyUpdates(this._scene!, prevProps, this.props as any, this._scene!)
    if (updates !== null) {
      updates.forEach(propertyUpdate => {
        applyUpdateToInstance(this._scene, propertyUpdate, 'scene')
      })
    }

    // In the docs it is mentioned that shouldComponentUpdate() may be treated as a hint one day
    // avoid shouldComponentUpdate() => false, looks okay, but prop changes will lag behind 1 update.
    this._reactReconcilerBabylonJs.updateContainer(
      <SceneContext.Provider value={{ engine: this.props.babylonJSContext.engine, canvas: this.props.babylonJSContext.canvas, scene: this._scene }}>
        {this.props.children}
      </SceneContext.Provider>,
      this._fiberRoot!,
      undefined,
      () => { /* called after container is updated.  we may want an external observable here */ }
    )
  }

  componentWillUnmount () {
    if (this._pointerDownObservable) {
      this._scene!.onPointerObservable.remove(this._pointerDownObservable);
    }

    if (this._pointerUpObservable) {
      this._scene!.onPointerObservable.remove(this._pointerUpObservable);
    }

    if (this._pointerMoveObservable) {
      this._scene!.onPointerObservable.remove(this._pointerMoveObservable);
    }
    this._scene!.dispose()
  }

  render () {
    return null;
  }
}

// TODO: export a SceneOnly without engine and have this class create a default engine when not present.

// for backwards compatibility we export a scene with an Engine.  Engine is only needed with multi-scene.
export default withBabylonJS(Scene)