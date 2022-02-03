import { Vector3 } from '@babylonjs/core'
import { merge } from '@s-libs/micro-dash'
import { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { PartialDeep } from 'type-fest'

type Vector3Struct = {
  x: number
  y: number
  z: number
}

type BoxProps = {
  name: string
  position: Vector3Struct
  rotation: Vector3Struct
  size: number
}

const guid = (() => {
  let i = 0
  return () => `g${++i}`
})()

const structToVector3: (struct: Partial<Vector3Struct>) => Vector3 = ({ x = 0, y = 0, z = 0 }) =>
  new Vector3(x, y, z)

type ApplyStructToVector3 = (struct: Partial<Vector3Struct>, vector: Vector3) => Vector3

const applyStructTOVector3: ApplyStructToVector3 = (struct, vector) => Object.assign(vector, struct)

const Box: FC<PartialDeep<BoxProps>> = (props) => {
  const _props: BoxProps = merge(
    {
      name: guid(),
      size: 2,
      position: {
        x: 0,
        y: 1,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 1,
        z: 0,
      },
    },
    props
  )
  const { name, size, position, rotation } = _props
  return (
    <box
      name={name}
      size={size}
      position={structToVector3(position)}
      rotation={structToVector3(rotation)}
    />
  )
}

const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
        <Box />
        <ground name="ground" width={6} height={6} />
      </Scene>
    </Engine>
  </div>
)

export default App
