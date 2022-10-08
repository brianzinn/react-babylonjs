import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { BabylonApp } from '@react-babylonjs/extra'
import { FC } from 'react'

const App: FC = () => {
  return (
    <BabylonApp>
      <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
      <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
      <ground name="ground" width={6} height={6} />
    </BabylonApp>
  )
}
export default App
