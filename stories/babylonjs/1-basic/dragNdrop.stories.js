import React /* , { useState } */ from 'react'
import { storiesOf } from '@storybook/react'
import { Engine, Scene, Sphere, StandardMaterial, ArcRotateCamera, PointLight, Ground, Box, Torus } from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3 } from 'babylonjs'
import '../../style.css'

// start copy from https://www.babylonjs.com/demos/dragndrop/dragdrop.js
var startingPoint
var currentMesh

var getGroundPosition = function (evt, scene) {
  // Use a predicate to get position on the ground
  var pickinfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh.name === 'ground' })
  if (pickinfo.hit) {
    return pickinfo.pickedPoint
  }

  return null
}

var onPointerDown = function (pointerInfo, scene) { // added scene parameter (not in demo)
  const evt = pointerInfo.event

  if (evt.button !== 0) {
    return
  }

  // check if we are under a mesh
  var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh.name !== 'ground' })
  if (pickInfo.hit) {
    currentMesh = pickInfo.pickedMesh
    startingPoint = getGroundPosition(evt, scene)

    const canvas = scene.getEngine().getRenderingCanvas()

    if (startingPoint) { // we need to disconnect camera from canvas
      setTimeout(function () {
        scene.activeCamera.detachControl(canvas)
      }, 0)
    }
  }
}

var onPointerUp = function (evt, scene) {
  const camera = scene.activeCamera
  const canvas = scene.getEngine().getRenderingCanvas()

  if (startingPoint) {
    camera.attachControl(canvas)
    startingPoint = null
  }
}

var onPointerMove = function (pointerInfo, scene) {
  if (!startingPoint) {
    return
  }

  const evt = pointerInfo.event
  var current = getGroundPosition(evt, scene)

  if (!current) {
    return
  }

  var diff = current.subtract(startingPoint)
  currentMesh.position.addInPlace(diff)

  startingPoint = current
}
// end copy

export default storiesOf('Babylon Basic', module)
  .add('Drag and Drop', () => (
    <Engine antialias engineOptions={{ preserveDrawingBuffer: true, stencil: true }} canvasId='babylonJS'>
      <Scene clearColor={new Color3(0, 0, 0)} onScenePointerDown={onPointerDown} onScenePointerUp={onPointerUp} onScenePointerMove={onPointerMove}>
        <PointLight name='omni' position={new Vector3(0, 50, 0)} />

        <ArcRotateCamera name='camera' alpha={0} beta={0} radius={10} target={Vector3.Zero()} setPosition={[new Vector3(20, 200, 400)]}
          lowerBetaLimit={0.1} upperBetaLimit={(Math.PI / 2) * 0.99} lowerRadiusLimit={150}
        />

        <Ground name='ground' width={1000} height={1000} subdivisions={1}>
          <StandardMaterial name='groundMat' specularColor={Color3.Black()} />
        </Ground>

        <Sphere name='red' diameter={20} segments={32} position={new Vector3(-100, 10, 0)}>
          <StandardMaterial name='redMat' diffuseColor={new Color3(0.4, 0.4, 0.4)} specularColor={new Color3(0.4, 0.4, 0.4)} emissiveColor={Color3.Red()} />
        </Sphere>

        <Box name='green' size={20} position={new Vector3(0, 11, -100)}>
          <StandardMaterial name='greenMat' diffuseColor={new Color3(0.4, 0.4, 0.4)} specularColor={new Color3(0.4, 0.4, 0.4)} emissiveColor={Color3.Green()} />
        </Box>

        <Box name='blue' size={20} position={new Vector3(100, 11, 0)}>
          <StandardMaterial name='greenMat' diffuseColor={new Color3(0.4, 0.4, 0.4)} specularColor={new Color3(0.4, 0.4, 0.4)} emissiveColor={Color3.Blue()} />
        </Box>

        <Torus name='torus' diameter={30} thickness={10} tesselation={32} position={new Vector3(0, 10, 100)}>
          <StandardMaterial name='torusMat' diffuseColor={new Color3(0.4, 0.4, 0.4)} specularColor={new Color3(0.4, 0.4, 0.4)} emissiveColor={Color3.Purple()} />
        </Torus>
      </Scene>
    </Engine>
  ))
