import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { BabylonApp, BasicCameraLightsGround } from '@react-babylonjs/extra'
import React, { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
      <box name="box" size={2} position={new Vector3(0, 1, 0)} rotation={Vector3.Zero()} />
    </BabylonApp>
  )
}

export default App
