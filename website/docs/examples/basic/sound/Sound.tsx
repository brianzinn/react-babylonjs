import '@babylonjs/core/Audio/audioSceneComponent'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Engine, Scene } from 'react-babylonjs'

const Sound = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine
      antialias
      adaptToDeviceRatio
      canvasId="babylon-js"
      engineOptions={{ audioEngine: true }}
    >
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <sound name="sound" urlOrArrayBuffer="/assets/sounds/violons11.wav" loop autoplay />
      </Scene>
    </Engine>
  </div>
)

export default Sound
