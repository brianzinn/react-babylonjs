import { BabylonApp, BasicCameraLightsGround, v3 } from '@react-babylonjs/extra'
import React, { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
      <box name="box" size={2} position={v3(0, 1, 0)} rotation={v3(0, 0, 0)} />
    </BabylonApp>
  )
}

export default App
