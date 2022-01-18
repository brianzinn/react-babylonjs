import { Vector3 } from '@babylonjs/core'
import { FC, useState } from 'react'
import { Engine, Scene, useBeforeRender, useScene } from 'react-babylonjs'

const RPM = 5

const StatefulMovingBox: FC = () => {
  // access Babylon Scene
  const scene = useScene()
  const [y, setY] = useState(0)
  // access refs to Babylon objects in scene like DOM nodes

  useBeforeRender(() => {
    if (!scene) return
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    setY((y) => y + (RPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
  })

  return <box name="box" size={2} position={new Vector3(0, 1, 0)} rotation={new Vector3(0, y, 0)} />
}

const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
        <StatefulMovingBox />
        <ground name="ground" width={6} height={6} />
      </Scene>
    </Engine>
  </div>
)

export default App
