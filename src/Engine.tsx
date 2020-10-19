import React, { useContext } from 'react'
import {
  Nullable,
  Engine,
  EngineOptions,
  ThinEngine as BabylonJSThinEngine,
  Observable,
} from '@babylonjs/core'

import { EngineCanvasContextType, EngineCanvasContext } from 'babylonjs-hook';

export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(EngineCanvasContext).canvas;
export const useEngine = (): Nullable<Engine> => useContext(EngineCanvasContext).engine;

export type EngineProps = {
  engineCanvasContext?: EngineCanvasContextType,
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

class ReactBabylonjsEngine extends React.Component<EngineProps, EngineState> {

  private engine: Nullable<Engine> = null;
  private canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext> = null;

  public onBeforeRenderLoopObservable: Observable<Engine> = new Observable<Engine>();
  public onEndRenderLoopObservable: Observable<Engine> = new Observable<Engine>();

  constructor(props: EngineProps) {
    super(props);

    this.state = {
      canRender: false
    };
  }

  componentDidMount() {
    this.engine = new Engine(
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
    return <EngineCanvasContext.Provider value={{ engine: this.engine, canvas: this.canvas}}>
      <canvas {...opts} ref={this.onCanvasRef}>
      {this.engine !== null &&
        this.props.children
      }
      </canvas>
    </EngineCanvasContext.Provider>
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize()
    }
  }
}

export default ReactBabylonjsEngine
