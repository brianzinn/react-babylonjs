import React, { ReactNode, useState, useEffect } from 'react'
import { WebGPUEngine as BabylonWebGPUEngine } from '@babylonjs/core/Engines/webgpuEngine.js'
import { Nullable } from '@babylonjs/core/types.js'

import { EngineOnlyProps, default as Engine } from './Engine'
import { WebGPUEngineOnlyProps, default as WebGPUEngine } from './WebGPUEngine'
import { SharedEngineProps } from './engineProps'

export type FallbackEngineProps = {
  engineProps?: EngineOnlyProps
  webGPUEngineProps?: WebGPUEngineOnlyProps
} & SharedEngineProps & {
    children?: ReactNode | undefined
  } & React.CanvasHTMLAttributes<HTMLCanvasElement>

const ReactBabylonjsFallbackEngine: React.FC<FallbackEngineProps> = (
  props: FallbackEngineProps,
  context?: any
) => {
  const [isSupportedWebGPU, setIsSupportedWebGPU] = useState<Nullable<boolean>>(null)

  useEffect(() => {
    BabylonWebGPUEngine.IsSupportedAsync.then((value) => setIsSupportedWebGPU(value))
  }, [])

  if (isSupportedWebGPU === null) {
    return null
  }

  const { webGPUEngineProps, engineProps, ...commonProps } = props

  return isSupportedWebGPU ? (
    <WebGPUEngine
      {...commonProps}
      glslangOptions={webGPUEngineProps?.glslangOptions}
      twgslOptions={webGPUEngineProps?.twgslOptions}
      webGPUEngineOptions={props.webGPUEngineProps?.webGPUEngineOptions}
    >
      {props.children}
    </WebGPUEngine>
  ) : (
    <Engine
      {...commonProps}
      antialias={engineProps?.antialias}
      engineOptions={engineProps?.engineOptions}
    >
      adaptToDeviceRatio={engineProps?.adaptToDeviceRatio}
      {props.children}
    </Engine>
  )
}

export default ReactBabylonjsFallbackEngine
