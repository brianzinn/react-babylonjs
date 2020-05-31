import React, { createContext, useContext } from 'react'
import {
  Nullable,
  Engine as BabylonJSEngine,
  EngineOptions,
  ThinEngine as BabylonJSThinEngine,
  Observable,
} from '@babylonjs/core'


// TODO: copy engineOptions/antialias/etc and canvas options from original Scene.tsx
export interface WithBabylonJSContext {
  engine: Nullable<BabylonJSEngine>
  canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
// this will allow (16.0 <= react versions < 16.3) to work.
export const BabylonJSContext = createContext<WithBabylonJSContext>({
  engine: null,
  canvas: null
})

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withBabylonJS<
  P extends { babylonJSContext: WithBabylonJSContext },
  R = Omit<P, 'babylonJSContext'>
  >(
  Component: React.ComponentClass<P> | React.FunctionComponent<P>
  ): React.FunctionComponent<R> {
  return function BoundComponent(props: R) {
    return (
      <BabylonJSContext.Consumer>
        {ctx => <Component {...props as any} babylonJSContext={ctx} />}
      </BabylonJSContext.Consumer>
    );
  };
}

export const useBabylonEngine = (): Nullable<BabylonJSEngine> => useContext(BabylonJSContext).engine
export const useBabylonCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(BabylonJSContext).canvas

export type EngineProps = {
  babylonJSContext?: WithBabylonJSContext,
  portalCanvas?: HTMLCanvasElement,
  /**
   * true to disable Server Side Rendering
   */
  noSSR?: boolean | React.ReactChild,
  shadersRepository?: string,
  engineOptions?: EngineOptions,
  antialias?: boolean,
  enableOfflineSupport?: boolean,
  adaptToDeviceRatio?: boolean,
  width?: number,
  height?: number,
  canvasStyle?: any,

  /**
   * By default touch-action: 'none' will be on the canvas.  Use this to disable.
   */
  touchActionNone?: boolean,
  /**
   * Useful if you want to attach CSS to the canvas by css #id selector.
   */
  canvasId?: string,
  debug?: boolean,
  // onCreated?: (engine: Engine) => void
}

export type EngineState = {
  canRender: boolean
}

class Engine extends React.Component<EngineProps, EngineState> {

  private engine?: Nullable<BabylonJSEngine> = null;
  private canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext> = null;

  public onBeforeRenderLoopObservable: Observable<BabylonJSEngine> = new Observable<BabylonJSEngine>();
  public onEndRenderLoopObservable: Observable<BabylonJSEngine> = new Observable<BabylonJSEngine>();

  constructor(props: EngineProps) {
    super(props);

    this.state = {
      canRender: false
    };
  }

  componentDidMount() {
    this.engine = new BabylonJSEngine(
      this.canvas,
      this.props.antialias === true ? true : false, // default false
      this.props.engineOptions,
      this.props.adaptToDeviceRatio === true ? true : false // default false
    )

    this.engine.runRenderLoop(() => {
      if (this.onBeforeRenderLoopObservable.hasObservers()) {
        this.onBeforeRenderLoopObservable.notifyObservers(this.engine!);
      }
      this.engine!.scenes.forEach(scene => {
        scene.render()
      })
      if (this.onEndRenderLoopObservable.hasObservers()) {
        this.onEndRenderLoopObservable.notifyObservers(this.engine!);
      }
    })

    this.engine.onContextLostObservable.add((eventData: BabylonJSThinEngine) => {
      console.log('context loss observable from Engine: ', eventData);
    })

    window.addEventListener('resize', this.onResizeWindow)

    this.setState({canRender: true});
  }

  onCanvasRef = (c : HTMLCanvasElement) => {
    // We are not using the react.createPortal(...), as it adds a ReactDOM dependency, but also
    // it was not flowing the context through to HOCs properly.
    if (this.props.portalCanvas) {
      this.canvas = document.getElementById('portal-canvas') as  HTMLCanvasElement
      console.error('set canvas', this.canvas);
    } else {
      if (c) { // null when called from unmountComponent()
        // c.addEventListener('mouseover', this.focus)
        // c.addEventListener('mouseout', this.blur)
        this.canvas = c
      }
    }
    // console.error('onCanvas:', c); // trying to diagnose why HMR keep rebuilding entire Scene!  Look at ProxyComponent v4.
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);

    if (this.engine !== null) {
      this.engine!.dispose();
      this.engine = null;
    }
  }

  render () {
    if (this.state.canRender === false && (this.props.noSSR !== undefined && this.props.noSSR !== false)) {
      if (typeof this.props.noSSR === 'boolean') {
        return null;
      }
      return this.props.noSSR;
    }

    let { touchActionNone, width, height, canvasStyle, canvasId, ...rest } = this.props

    let opts: any = {}

    if (touchActionNone !== false) {
      opts['touch-action'] = 'none';
    }

    if (width !== undefined && height !== undefined) {
      opts.width = width
      opts.height = height
    }

    if (canvasId) {
      opts.id = canvasId;
    }

    if (canvasStyle) {
      opts.style = canvasStyle;
    }

    // TODO: this.props.portalCanvas does not need to render a canvas.
    return <BabylonJSContext.Provider value={{ engine: this.engine!, canvas: this.canvas}}>
      <canvas {...opts} ref={this.onCanvasRef}>
      {this.engine !== null &&
        this.props.children
      }
      </canvas>
    </BabylonJSContext.Provider>
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize()
    }
  }
}

export default Engine
