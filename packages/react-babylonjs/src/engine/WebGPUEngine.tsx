import {
  GlslangOptions,
  WebGPUEngine,
  WebGPUEngineOptions,
} from '@babylonjs/core/Engines/webgpuEngine.js'
import { TwgslOptions } from '@babylonjs/core/Engines/WebGPU/webgpuTintWASM.js'
import { ThinEngine } from '@babylonjs/core/Engines/thinEngine.js'
import { Observable } from '@babylonjs/core/Misc/observable.js'
import { Nullable } from '@babylonjs/core/types.js'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { EngineCanvasContext } from '../hooks/engine'
import { useCanvasObserver } from './useCanvasObserver'
import type { SharedEngineProps } from './engineProps'

export type WebGPUEngineOnlyProps = {
  webGPUEngineOptions?: WebGPUEngineOptions

  /**
   * Passed to asyncInit (when provided)
   */
  glslangOptions?: GlslangOptions
  /**
   * Passed to asyncInit (when provided)
   */
  twgslOptions?: TwgslOptions
}

export type WebGPUEngineProps = WebGPUEngineOnlyProps &
  SharedEngineProps & {
    children?: ReactNode | undefined
  } & React.CanvasHTMLAttributes<HTMLCanvasElement>

const ReactBabylonjsWebGPUEngine: React.FC<WebGPUEngineProps> = (
  props: WebGPUEngineProps,
  context?: any
) => {
  const engine = useRef<Nullable<WebGPUEngine>>(null)
  const [_, setEngineReady] = useState<boolean>(false)

  const onBeforeRenderLoopObservable = useRef<Observable<WebGPUEngine>>(
    new Observable<WebGPUEngine>()
  )
  const onEndRenderLoopObservable = useRef<Observable<WebGPUEngine>>(new Observable<WebGPUEngine>())

  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null)
  const [canvasReady, setCanvasReady] = useState(false)
  const shouldRenderRef = useRef(true)

  const {
    isPaused,
    touchActionNone,
    canvasId,
    webGPUEngineOptions,
    renderOptions,
    observeCanvasResize,
    children,
    style,
    ...canvasProps
  } = props

  const observerEnabled =
    renderOptions !== undefined && renderOptions.whenVisibleOnly === true && !isPaused
  useCanvasObserver(canvasRef, shouldRenderRef, observerEnabled, 0)

  useEffect(() => {
    shouldRenderRef.current = !isPaused
  }, [isPaused])

  useEffect(() => {
    if (!canvasReady) {
      return
    }

    if (canvasRef.current === null) {
      return
    }

    engine.current = new WebGPUEngine(
      canvasRef.current,
      webGPUEngineOptions ?? {
        enableAllFeatures: true,
        setMaximumLimits: true,
      }
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
        // TODO (fix properly): in React 18.2 (not 18.0 or 18.1 if the camera is in a subcomponent it will be added in a future render!)
        if (scene.cameras?.length > 0) {
          scene.render()
        }
      })

      if (onEndRenderLoopObservable.current.hasObservers()) {
        onEndRenderLoopObservable.current.notifyObservers(engine.current!)
      }
    })

    engine.current.onContextLostObservable.add((eventData: ThinEngine) => {
      console.warn('context loss observable from Engine: ', eventData)
    })

    const onResizeWindow = () => {
      if (engine.current) {
        engine.current.resize()
      }
    }

    window.addEventListener('resize', onResizeWindow)
    // when initAsync completes - a re-render is triggers (to render scene)
    engine.current.initAsync().then(() => setEngineReady(true))

    return () => {
      window.removeEventListener('resize', onResizeWindow)

      if (engine.current !== null) {
        engine.current!.dispose()
        engine.current = null
      }
    }
  }, [canvasReady])

  const opts: any = {}

  if (touchActionNone !== false) {
    opts['touch-action'] = 'none'
  }

  // this is for backwards compatibility - before props were passed to canvas.
  if (canvasId && canvasProps.id === undefined) {
    opts.id = canvasId
  }

  return (
    <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
      <canvas
        {...opts}
        {...canvasProps}
        ref={(view) => {
          canvasRef.current = view
          setCanvasReady(true)
        }}
        style={{ width: '100%', height: '100%', ...style }}
      >
        {engine.current !== null && props.children}
      </canvas>
    </EngineCanvasContext.Provider>
  )
}

export default ReactBabylonjsWebGPUEngine
