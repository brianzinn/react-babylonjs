import { BabylonApp, BasicCameraLightsGround, v3 } from '@react-babylonjs/extra'
import React, { FC, useState } from 'react'
import { useBeforeRender, useScene } from 'react-babylonjs'

const RPM = 5

const RotatingBox: FC = () => {
  const scene = useScene()
  const [y, setY] = useState(0)
  useBeforeRender(() => {
    if (!scene) return
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    setY((oldY) => oldY + (RPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
  })
  return <box name="box" size={2} position={v3(0, 1, 0)} rotation={v3(0, y, 0)} />
}

const App: FC = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
      <RotatingBox />
    </BabylonApp>
  )
}

export default App
