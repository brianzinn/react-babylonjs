import { BabylonApp } from '@react-babylonjs/extra'
import { BasicCameraLightsGround } from '@react-babylonjs/extra/src/BasicCameraLightsGround'
import { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <BasicCameraLightsGround />
    </BabylonApp>
  )
}

export default App
