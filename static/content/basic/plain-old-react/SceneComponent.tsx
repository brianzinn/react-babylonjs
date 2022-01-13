import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef } from 'react'

export default (props) => {
  const reactCanvas = useRef(null)
  const _props = {
    onSceneReady: () => console.log('Scene is ready, override this'),
    ...props,
  }

  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
    ...rest
  } = _props

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio)
      const scene = new Scene(engine, sceneOptions)
      if (scene.isReady()) {
        onSceneReady(scene)
      } else {
        scene.onReadyObservable.addOnce((scene) => onSceneReady(scene))
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === 'function') {
          onRender(scene)
        }
        // scene.render()
      })

      const resize = () => {
        scene.getEngine().resize()
      }

      if (window) {
        window.addEventListener('resize', resize)
      }

      return () => {
        scene.getEngine().dispose()

        if (window) {
          window.removeEventListener('resize', resize)
        }
      }
    }
  }, [reactCanvas])

  return <canvas ref={reactCanvas} {...rest} />
}
