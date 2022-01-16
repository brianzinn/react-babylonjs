// FullImperitive.tsx
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]]
      }
    return t
  }
/*
 ********* WARNING ********
 * THIS CODE WAS LAUNCHED FROM LOCALHOST.
 * LOCAL PACKAGES MAY NOT MATCH THE DEPENDENCIES
 * USED IN THIS SANDBOX.
 *
 * TEST SANDBOX FOR BACKWARD COMPATIBLITY IF DESIRED.
 ********* WARNING ********
 */
import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from '@babylonjs/core'
import { useEffect, useRef } from 'react'
var SceneComponent = function (props) {
  var reactCanvas = useRef(null)
  var _props = __assign({ canvasId: 'babylonjs-canvas' }, props)
  var canvasId = _props.canvasId,
    antialias = _props.antialias,
    engineOptions = _props.engineOptions,
    adaptToDeviceRatio = _props.adaptToDeviceRatio,
    sceneOptions = _props.sceneOptions,
    onRender = _props.onRender,
    onSceneReady = _props.onSceneReady,
    rest = __rest(_props, [
      'canvasId',
      'antialias',
      'engineOptions',
      'adaptToDeviceRatio',
      'sceneOptions',
      'onRender',
      'onSceneReady',
    ])
  useEffect(
    function () {
      if (!reactCanvas.current) return
      var engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio)
      var scene = new Scene(engine, sceneOptions)
      if (scene.isReady()) {
        onSceneReady(scene)
      } else {
        scene.onReadyObservable.addOnce(onSceneReady)
      }
      engine.runRenderLoop(function () {
        onRender(scene)
        scene.render()
      })
      var resize = function () {
        scene.getEngine().resize()
      }
      if (window) {
        window.addEventListener('resize', resize)
      }
      return function () {
        scene.getEngine().dispose()
        if (window) {
          window.removeEventListener('resize', resize)
        }
      }
    },
    [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]
  )
  return <canvas id={canvasId} ref={reactCanvas} {...rest} />
}
var box
var onSceneReady = function (scene) {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)
  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero())
  var canvas = scene.getEngine().getRenderingCanvas()
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
var onRender = function (scene) {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime()
    var rpm = 10
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  }
}
var App = function () {
  return (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} />
    </div>
  )
}
export default App
