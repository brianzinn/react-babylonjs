import React from 'react'
import { storiesOf } from '@storybook/react'
import { Engine, Scene } from '../../../dist/react-babylonjs'
import { Color3, FreeCamera, Vector3, ArcRotateCamera, DefaultRenderingPipeline, HemisphericLight, DepthOfFieldEffectBlurLevel, PBRMetallicRoughnessMaterial, CubeTexture, Mesh } from '@babylonjs/core'
import { Control, TextBlock, Slider, StackPanel, AdvancedDynamicTexture } from '@babylonjs/gui'
import '../../style.css'

function meshPicked (mesh) {
  console.log('mesh picked:', mesh)
}

function onSceneMount (e) {
  const { canvas, scene } = e

  scene.clearColor = new Color3(0.5, 0.5, 0.5)
  var camera = new FreeCamera('camera1', new Vector3(0, 0.3, -0.7), scene)
  camera.speed = 0.01
  camera.minZ = 0.001
  scene.activeCameras.push(camera)
  camera.attachControl(canvas, true)
  var light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene)
  light.intensity = 0.7
  var pbr = new PBRMetallicRoughnessMaterial('pbr', scene)
  pbr.environmentTexture = CubeTexture.CreateFromPrefilteredData('assets/textures/environment.dds', scene)
  var gridSize = 4
  for (var i = 0; i < gridSize; i++) {
    for (var j = 0; j < 10; j++) {
      var sphereMat = pbr.clone()
      sphereMat.metallic = 0.1
      sphereMat.roughness = (i / gridSize) / 3
      sphereMat.baseColor = Color3.White().scale(1 - (j / 10))
      var sphere = Mesh.CreateSphere('sphere', 16, 0.2, scene)
      sphere.material = sphereMat
      sphere.position.y = i * 0.3
      sphere.position.x = 0.3
      sphere.position.z = j * 0.4

      var cubeMat = pbr.clone()
      cubeMat.metallic = 0.6
      cubeMat.roughness = (i / gridSize) / 3
      cubeMat.baseColor = Color3.White().scale(1 - (j / 10))
      var box = Mesh.CreateBox('box', 0.2, scene)
      box.material = cubeMat
      box.position.y = i * 0.3
      box.position.x = -0.3
      box.position.z = j * 0.4
    }
  }
  var knot = Mesh.CreateTorusKnot('knot', 0.2, 0.05, 128, 64, 2, 3, scene)
  knot.material = pbr
  knot.position.set(0, 0.3, 8)

  // Create default pipeline and enable dof with Medium blur level
  var pipeline = new DefaultRenderingPipeline('default', true, scene, [scene.activeCamera])
  pipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Medium
  pipeline.depthOfFieldEnabled = true
  pipeline.depthOfField.focalLength = 180
  pipeline.depthOfField.fStop = 3
  pipeline.depthOfField.focusDistance = 2250
  var moveFocusDistance = true

  // add UI to adjust pipeline.depthOfField.fStop, kernelSize, focusDistance, focalLength
  var bgCamera = new ArcRotateCamera('BGCamera', Math.PI / 2 + Math.PI / 7, Math.PI / 2, 100,
    new Vector3(0, 20, 0),
    scene)
  bgCamera.layerMask = 0x10000000
  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
  advancedTexture.layer.layerMask = 0x10000000
  var UiPanel = new StackPanel()
  UiPanel.width = '220px'
  UiPanel.fontSize = '14px'
  UiPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT
  UiPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER
  advancedTexture.addControl(UiPanel)
  var params = [
    { name: 'fStop', min: 1.4, max: 32 },
    { name: 'focusDistance', min: 0, max: 5000 },
    { name: 'focalLength', min: 0, max: 500 }
  ]
  params.forEach(function (param) {
    var header = new TextBlock()
    header.text = param.name + ':' + pipeline.depthOfField[param.name].toFixed(2)
    header.height = '40px'
    header.color = 'black'
    header.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT
    header.paddingTop = '10px'
    UiPanel.addControl(header)
    var slider = new Slider()
    slider.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT
    slider.minimum = param.min
    slider.maximum = param.max
    slider.color = '#636e72'
    slider.value = pipeline.depthOfField[param.name]
    slider.height = '20px'
    slider.width = '205px'
    UiPanel.addControl(slider)
    slider.onValueChangedObservable.add(function (v) {
      pipeline.depthOfField[param.name] = v
      header.text = param.name + ':' + pipeline.depthOfField[param.name].toFixed(2)
      moveFocusDistance = false
    })
  })
  scene.activeCameras = [scene.activeCamera, bgCamera]

  // Move depth of field focus distance automatically at the start
  scene.onBeforeRenderObservable.add(function () {
    if (moveFocusDistance) {
      pipeline.depthOfField.focusDistance = 600 + (4000 * (Math.sin((new Date()).getTime() / 1000) + 1) / 2)
    }
  })

  scene.getEngine().runRenderLoop(() => {
    if (scene) {
      scene.render()
    }
  })
}

function NonDeclarative () {
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene onMeshPicked={meshPicked} onSceneMount={onSceneMount} />
    </Engine>
  )
}

export default storiesOf('Babylon Advanced', module)
  .add('Non-Declarative', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <NonDeclarative />
    </div>
  ))
