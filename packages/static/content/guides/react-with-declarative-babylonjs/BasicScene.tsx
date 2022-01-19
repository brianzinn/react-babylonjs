import { BabylonApp, v3 } from '@react-babylonjs/extra'
import { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <freeCamera name="camera1" position={v3(0, 5, -10)} setTarget={[v3()]} />
      <hemisphericLight name="light1" intensity={0.7} direction={v3(0, 1, 0)} />
      <ground name="ground" width={6} height={6} />
    </BabylonApp>
  )
}
export default App
