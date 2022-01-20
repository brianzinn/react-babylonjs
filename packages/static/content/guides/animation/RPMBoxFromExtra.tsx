import { BabylonApp, BasicCameraLightsGround, RotatingBox } from '@react-babylonjs/extra'
import React, { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
      <RotatingBox />
    </BabylonApp>
  )
}

export default App
