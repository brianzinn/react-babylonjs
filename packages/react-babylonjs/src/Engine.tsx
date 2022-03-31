import { Engine } from '@babylonjs/core/Engines/engine.js'
import { EngineOptions, ThinEngine } from '@babylonjs/core/Engines/thinEngine.js'
import { Observable } from '@babylonjs/core/Misc/observable.js'
import { Nullable } from '@babylonjs/core/types.js'
import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react'
import { EngineCanvasContext } from './hooks/engine'

export type RenderOptions = {
  /**
   * Observes visibility and does not render scene when no pixels of canvas are visible
   * Defaults to false, so you need to opt-in
   */
  whenVisibleOnly?: boolean
}

// TODO: this should return a shouldRenderRef instead of setState for a re-render?
const useCanvasObserver = (
  canvasRef: MutableRefObject<Nullable<HTMLCanvasElement>>,
  shouldRenderRef: MutableRefObject<boolean>,
  enabledOption = false,
  threshold = 0
) => {
  useEffect(() => {
    if (enabledOption !== true) {
      return
    }

    if (canvasRef.current === null) {
      return
    }

    const callbackFn: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      shouldRenderRef.current = entry.isIntersecting
      console.log('should render updating:', shouldRenderRef.current)
    }

    const observer = new IntersectionObserver(callbackFn, { threshold })
    observer.observe(canvasRef.current)

    const canvas: HTMLCanvasElement = canvasRef.current
    return () => {
      observer.unobserve(canvas)
    }
  }, [canvasRef, threshold])
}

export type EngineProps = {
  engineOptions?: EngineOptions
  antialias?: boolean
  adaptToDeviceRatio?: boolean
  renderOptions?: RenderOptions

  /**
   * Attach resize event when canvas resizes (window resize may not occur).
   * Defaults to true, so you need to opt-out.
   */
  observeCanvasResize?: boolean

  /**
   * By default touch-action: 'none' will be on the canvas.  Use this to disable.
   */
  touchActionNone?: boolean
  /**
   * Useful if you want to attach CSS to the canvas by css #id selector.
   */
  canvasId?: string
  // onCreated?: (engine: Engine) => void
} & { children?: ReactNode | undefined } & React.CanvasHTMLAttributes<HTMLCanvasElement>

type CanvasSpecificProps = Omit<
  EngineProps,
  | 'engineOptions'
  | 'antialias'
  | 'adaptToDeviceRatio'
  | 'renderOptions'
  | 'observeCanvasResize'
  | 'children'
>

const ReactBabylonjsEngine: React.FC<EngineProps> = (props: EngineProps, context?: any) => {
  const engine = useRef<Nullable<Engine>>(null)
  const [engineReady, setEngineReady] = useState<boolean>(false)
  // const resizeObserver = useRef<Nullable<ResizeObserver>>(null);

  const onBeforeRenderLoopObservable = useRef<Observable<Engine>>(new Observable<Engine>())
  const onEndRenderLoopObservable = useRef<Observable<Engine>>(new Observable<Engine>())

  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null)
  const shouldRenderRef = useRef(true)

  // const renderOptions: RenderOptions = props.renderOptions ?? {};
  const {
    touchActionNone,
    canvasId,
    engineOptions,
    antialias,
    adaptToDeviceRatio,
    renderOptions,
    observeCanvasResize,
    children,
    style,
    ...canvasProps
  } = props

  const observerEnabled = renderOptions !== undefined && renderOptions.whenVisibleOnly === true
  useCanvasObserver(canvasRef, shouldRenderRef, observerEnabled, 0)

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }

    engine.current = new Engine(
      canvasRef.current,
      antialias === true, // default false
      engineOptions,
      adaptToDeviceRatio === true // default false
    )

    engine.current.runRenderLoop(() => {
      if (shouldRenderRef.current === false) {
        return
      }
      if (onBeforeRenderLoopObservable.current.hasObservers()) {
        onBeforeRenderLoopObservable.current.notifyObservers(engine.current!)
      }

      // TODO: here is where you could access your own render method
      engine.current!.scenes.forEach((scene) => {
        scene.render()
      })

      if (onEndRenderLoopObservable.current.hasObservers()) {
        onEndRenderLoopObservable.current.notifyObservers(engine.current!)
      }
    })

    // if (props.observeCanvasResize !== false && window?.ResizeObserver) {
    //   resizeObserver.current = new ResizeObserver(() => {
    //     engine.current!.resize()
    //   })
    //   resizeObserver.current.observe(canvasRef.current);
    // }

    engine.current.onContextLostObservable.add((eventData: ThinEngine) => {
      console.warn('context loss observable from Engine: ', eventData)
    })

    const onResizeWindow = () => {
      if (engine.current) {
        engine.current.resize()
      }
    }

    window.addEventListener('resize', onResizeWindow)
    setEngineReady(true) // trigger re-render to render Scene

    return () => {
      window.removeEventListener('resize', onResizeWindow)

      // if (resizeObserver.current !== null) {
      //   resizeObserver.current.disconnect()
      //   resizeObserver.current = null
      // }

      if (engine.current !== null) {
        engine.current!.dispose()
        engine.current = null
      }
    }
  }, [canvasRef])

  const opts: any = {}

  if (touchActionNone !== false) {
    opts['touch-action'] = 'none'
  }

  // this is for backwards compatibility - before props were passed to canvas.
  if (canvasId && canvasProps.id === undefined) {
    opts.id = canvasId
  }

  // TODO: this.props.portalCanvas does not need to render a canvas.
  return (
    <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
      <canvas
        {...opts}
        {...canvasProps}
        ref={canvasRef}
        style={{ width: '100%', height: '100%', ...style }}
      >
        {engine.current !== null && props.children}
      </canvas>
    </EngineCanvasContext.Provider>
  )
}

export default ReactBabylonjsEngine
