import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'

type BoxProps = {
  name: string
  position: Vector3
  rotation: Vector3
  size: number
}

const Box: FC<BoxProps> = (props) => {
  const { name, size, position, rotation } = props
  return <box name={name} size={size} position={position} rotation={rotation} />
}

const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
        <Box name="box-1" size={2} position={new Vector3(0, 1, 0)} rotation={Vector3.Zero()} />
        <ground name="ground" width={6} height={6} />
      </Scene>
    </Engine>
  </div>
)

export default App
