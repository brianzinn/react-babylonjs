import { BabylonApp, BasicCameraLightsGround } from '@react-babylonjs/extra'
import React, { FC } from 'react'
import { useScene } from 'react-babylonjs'
import '@babylonjs/inspector'

const Inspector: FC<{ show: boolean }> = ({ show }) => {
  const scene = useScene()
  if (scene) {
    if (show !== false) {
      scene.debugLayer.show()
    } else {
      scene.debugLayer.hide()
    }
  }
  return null
}

const App = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
      <box name="box-1" />
      <Inspector show />
    </BabylonApp>
  )
}

export default App
