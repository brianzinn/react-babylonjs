import { Color3, Vector3 } from '@babylonjs/core'
import { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const App: FC = () => (
  <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
    <Scene>
      <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <box name="box" size={2} position={new Vector3(1, 1, 1)} rotation={new Vector3(2, 2, 0)}>
        <standardMaterial
          name="material"
          diffuseColor={Color3.Red()}
          specularColor={Color3.Black()}
        />
      </box>
    </Scene>
  </Engine>
)

export default App
