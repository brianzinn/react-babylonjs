import {
  Engine,
  EngineOptions,
  FreeCamera,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  SceneOptions,
  Vector3,
} from '@babylonjs/core'
import { FC, useEffect, useRef } from 'react'
import { SetRequired } from 'type-fest'
type OnSceneReadyHandler = (scene: Scene) => void

type OnRenderHandler = (scene: Scene) => void

// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.

type SceneComponentProps = {
  canvasId: string
  antialias?: boolean
  engineOptions?: EngineOptions
  adaptToDeviceRatio?: boolean
  sceneOptions?: SceneOptions
  onRender: OnRenderHandler
  onSceneReady: OnSceneReadyHandler
}

type SceneComponentPropsIn = SetRequired<Partial<SceneComponentProps>, 'onRender' | 'onSceneReady'>

const SceneComponent: FC<SceneComponentPropsIn> = (props) => {
  const reactCanvas = useRef(null)
  const _props: SceneComponentProps = {
    canvasId: 'babylonjs-canvas',
    ...props,
  }

  const {
    canvasId,
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
    ...rest
  } = _props

  useEffect(() => {
    if (!reactCanvas.current) return
    const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio)
    const scene = new Scene(engine, sceneOptions)
    if (scene.isReady()) {
      onSceneReady(scene)
    } else {
      scene.onReadyObservable.addOnce(onSceneReady)
    }

    engine.runRenderLoop(() => {
      onRender(scene)
      scene.render()
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
  }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady])

  return <canvas id={canvasId} ref={reactCanvas} {...rest} />
}

let box: Mesh

const onSceneReady: OnSceneReadyHandler = (scene) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero())

  const canvas = scene.getEngine().getRenderingCanvas()

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true)

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox('box', { size: 2 }, scene)

  // Move the box upward 1/2 its height
  box.position.y = 1

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)
}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender: OnRenderHandler = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime()

    const rpm = 10
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  }
}

const App: FC = () => (
  <div>
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} />
  </div>
)

export default App
