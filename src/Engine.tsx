import React, { createContext, HTMLAttributes } from 'react'
import BABYLON from 'babylonjs'

import { render, unmount } from './render'

// TODO: copy engine and canvas options from original Scene.tsx

export type EngineContextType = {
  engine: BABYLON.Engine | null
}

export interface WithEngineContext {
  engine: BABYLON.Engine | null
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const EngineContext = createContext<EngineContextType>({
  engine: null
})

export const EngineProvider = EngineContext.Provider
export const EngineConsumer = EngineContext.Consumer



type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withEngine<
  P extends { engineCtx: WithEngineContext },
  R = Omit<P, 'engineCtx'>
  >(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
  ): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <EngineConsumer>
        {ctx => <Component {...props} engineCtx={ctx} />}
      </EngineConsumer>
    );
  };
}

export default class Engine extends React.Component<HTMLAttributes<HTMLCanvasElement>, {}> {

  private _engine?: BABYLON.Engine;
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
      <EngineProvider value={{ engine: this._engine! }}>
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
      <EngineProvider value={{ engine: this._engine! }}>
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
