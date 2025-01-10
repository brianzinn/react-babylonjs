import { FC } from 'react'
import { Scene, Engine } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'

const App: FC = () => {
  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="babylon-js"
        renderOptions={{
          whenVisibleOnly: true,
        }}
      >
        <Scene>
          <freeCamera
            name="camera1"
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          />
          <hemisphericLight name="light1" intensity={0.8} direction={new Vector3(0, 1, 0)} />
          <ground name="ground" width={6} height={6} />
          <sphere name="sphere1" segments={32} diameter={2} position={new Vector3(0, 1, 0)} />
        </Scene>
      </Engine>
    </div>
  )
}

export default App
