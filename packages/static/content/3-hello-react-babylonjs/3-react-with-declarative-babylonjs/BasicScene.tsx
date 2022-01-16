import { Vector3 } from '@babylonjs/core'
import { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const v3 = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)

const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={v3(0, 5, -10)} setTarget={[v3()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={v3(0, 1, 0)} />
        <ground name="ground" width={6} height={6} />
      </Scene>
    </Engine>
  </div>
)

export default App
