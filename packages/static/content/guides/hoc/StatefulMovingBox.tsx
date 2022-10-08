import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { FC, useState } from 'react'
import { Engine, Scene, useBeforeRender, useScene } from 'react-babylonjs'

type BoxProps = {
  name?: string
  position: Vector3
  rotation: Vector3
  size?: number
}

const guid = (() => {
  let i = 0
  return () => `g${++i}`
})()

const Box: FC<BoxProps> = ({ name, size, position, rotation }) => {
  return <box name={name ?? guid()} size={size} position={position} rotation={rotation} />
}

const RPM = 5

const StatefulMovingBox: FC = () => {
  const scene = useScene()
  const [y, setY] = useState(0)

  useBeforeRender(() => {
    if (scene) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime()
      setY((y) => y + (RPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
    }
  })

  return <Box rotation={new Vector3(0, y, 0)} position={new Vector3(0, 1, 0)} />
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
