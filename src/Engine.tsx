import React, { createContext, HTMLAttributes } from 'react'
import BABYLON from 'babylonjs'

import { render, unmount } from './render'

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

// Component<HTMLAttributes<HTMLCanvasElement>, {}>
export default class Engine extends React.Component<any, any> {

  private _engine?: BABYLON.Nullable<BABYLON.Engine>;
  private _canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext> = null;

  componentDidMount () {
    console.log('creating engine on canvas:', this._canvas);
    this._engine = new BABYLON.Engine(
      this._canvas,
      true
    )
    this._engine.runRenderLoop(() => {
      this._engine!.scenes.forEach(scene => {
        scene.render()
      })
    })

    window.addEventListener('resize', this.onResizeWindow)
    const { props, state } = this
    console.log('Engine', { props, state })
    render(
      <EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>,
      { engine: this._engine!, canvas: this._canvas! },
      () => {
        console.log('render callback in engine provider.')
      }
    )
  }

  onCanvasRef = (c : HTMLCanvasElement) => {
    if (c !== null) { // null when called from unmountComponent()
      //c.addEventListener('mouseover', this.focus)
      //c.addEventListener('mouseout', this.blur)
      console.log('canvas set to:', c);
      this._canvas = c
    }
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    const { props, state } = this
    console.log('Engine did update:', { props, state, prevProps, prevState })
    render(
      <EngineProvider value={{ engine: this._engine!, canvas: this._canvas }}>
        {this.props.children}
      </EngineProvider>,
      { engine: this._engine!, canvas: this._canvas! },
      () => {
        console.log('render did update in engine provider.')
      }
    )
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow)
    unmount('unmounting Engine')
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
