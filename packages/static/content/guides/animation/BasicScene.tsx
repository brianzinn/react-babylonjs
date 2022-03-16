import { BabylonApp, BasicCameraLightsGround, v3 } from '@react-babylonjs/extra'
import React, { FC, useState } from 'react'
import { useBeforeRender } from 'react-babylonjs'

const RotatingBox: FC = () => {
  const [y, setY] = useState(0)
  useBeforeRender(() => {
    setY((oldY) => oldY + 0.1)
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
