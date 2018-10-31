import React, { createContext } from 'react'
import ReactReconciler from "react-reconciler"
import BABYLON from 'babylonjs'

import { hostConfig, Container } from './render'

// TODO: copy engineOptions/antialias/etc and canvas options from original Scene.tsx
export interface WithEngineContext {
  engine: BABYLON.Nullable<BABYLON.Engine>
  canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext>
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
// this will allow React 16.0 to < 16.3 to work.  < 16 will need to use old version w/o reconciler.
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
  private _reactReconcilerBabylonJs = ReactReconciler(hostConfig)

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
    const { props, state } = this
        
    const isAsync = false // Disables async rendering (experimental anyway)
    
    this._fiberRoot = this._reactReconcilerBabylonJs.createContainer({ engine: this._engine!, canvas: this._canvas! } as Container, isAsync, false /* hydrate true == better HMR? */)
  
    this._reactReconcilerBabylonJs.injectIntoDevTools({
      bundleType: process.env.NODE_ENV === 'production' ? 0 : 1,
      version: '1.0.0',
      rendererPackageName: 'react-babylonjs'
      // findFiberByHostInstance: this._reactReconcilerBabylonJs.findHostInstance
    })

    // update the root Container
    console.log("updating rootContainer (1) reactElement")
    return this._reactReconcilerBabylonJs.updateContainer(<EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
           {this.props.children}
         </EngineProvider>, this._fiberRoot, undefined, () => { console.log("Updated Container - first time."); })
  }

  onCanvasRef = (c : HTMLCanvasElement) => {
    if (c !== null) { // null when called from unmountComponent()
      //c.addEventListener('mouseover', this.focus)
      //c.addEventListener('mouseout', this.blur)
      this._canvas = c
    }

    console.error('onCanvas:', c); // trying to diagnose HMR failing
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    const { props, state } = this
    console.log('Engine did update:', { props, state, prevProps, prevState })

    // update the root Container
    console.log("updating rootContainer (1) reactElement")
    return this._reactReconcilerBabylonJs.updateContainer(<EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
           {this.props.children}
         </EngineProvider>, this._fiberRoot!, undefined, () => { console.log("Updated Container - additional time."); })
    
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
    console.log('unmounting Enginek Component.')
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
