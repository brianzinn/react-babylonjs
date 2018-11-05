import React, { createContext } from 'react'
import ReactReconciler from "react-reconciler"
import BABYLON from 'babylonjs'

import ReactBabylonJSHostConfig, { Container } from './ReactBabylonJSHostConfig'

// TODO: copy engineOptions/antialias/etc and canvas options from original Scene.tsx
export interface WithEngineContext {
  engine: BABYLON.Nullable<BABYLON.Engine>
  canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext>
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
// this will allow (16.0 < react versions  < 16.3) to work.
export const EngineContext = createContext<WithEngineContext>({
  engine: null,
  canvas: null
})

export const EngineProvider = EngineContext.Provider
export const EngineConsumer = EngineContext.Consumer

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withEngine<
  P extends { engineContext: WithEngineContext },
  R = Omit<P, 'engineContext'>
  >(
  Component: React.ComponentClass<P, any> | React.StatelessComponent<P>
  ): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <EngineConsumer>
        {engineCtx => <Component {...props} engineContext={engineCtx} />}
      </EngineConsumer>
    );
  };
}

export default class Engine extends React.Component<any, any> {

  private _engine?: BABYLON.Nullable<BABYLON.Engine>;
  private _canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext> = null;
  private _fiberRoot?: ReactReconciler.FiberRoot;
  private _reactReconcilerBabylonJs = ReactReconciler(ReactBabylonJSHostConfig)

  componentDidMount () {
    this._engine = new BABYLON.Engine(
      this._canvas,
      true
    )
    this._engine.runRenderLoop(() => {
      this._engine!.scenes.forEach(scene => {
        scene.render()
      })
    })

    this._engine.onContextLostObservable.add((eventData: BABYLON.Engine) => {
      console.log('context loss observable from Engine: ', eventData);
    })

    window.addEventListener('resize', this.onResizeWindow)
            
    const isAsync = false // Disables experimental async rendering
    
    const container: Container = {
      engine: this._engine!,
      canvas: this._canvas!,
      rootInstance: {
        babylonJsObject: null,
        children: [],
        parent: null,
        metadata: null
      }
    }

    this._fiberRoot = this._reactReconcilerBabylonJs.createContainer(container, isAsync, false /* hydrate true == better HMR? */)
  
    this._reactReconcilerBabylonJs.injectIntoDevTools({
      bundleType: process.env.NODE_ENV === 'production' ? 0 : 1,
      version: '1.0.0',
      rendererPackageName: 'react-babylonjs'
    })

    // update the root Container
    // console.log("updating rootContainer (1) reactElement")
    return this._reactReconcilerBabylonJs.updateContainer(
      <EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>, this._fiberRoot, undefined, () => {}
    )
  }

  onCanvasRef = (c : HTMLCanvasElement) => {
    if (c !== null) { // null when called from unmountComponent()
      //c.addEventListener('mouseover', this.focus)
      //c.addEventListener('mouseout', this.blur)
      this._canvas = c
    }

    // console.error('onCanvas:', c); // trying to diagnose why HMR keep rebuilding entire Scene!  Look at ProxyComponent v4.
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    // In the docs it is mentioned that shouldComponentUpdate() may be treated as a hint one day
    // using shouldComponentUpdate() => false, looks okay, but prop changes will lag behind 1 update.
    this._reactReconcilerBabylonJs.updateContainer(
      <EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>,
      this._fiberRoot!,
      undefined,
      () => { /* called after container is updated.  we may want an external observable here */ }
    )
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
    console.log('unmounting Engine Component.')
  }

  render () {
    return <canvas ref={this.onCanvasRef} style={{ height: '100%', width: '100%' }} />
  }

  onResizeWindow = () => {
    if (this._engine) {
      this._engine.resize()
    }
  }
}
