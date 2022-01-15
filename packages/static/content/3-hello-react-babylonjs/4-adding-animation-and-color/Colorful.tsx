import { Color3, Vector3 } from '@babylonjs/core'
import { FC, useRef } from 'react'
import { Engine, Scene, useBeforeRender, useScene } from 'react-babylonjs'

const RPM = 5

type MovingBoxProps = {
  rotationAxis: 'x' | 'y' | 'z'
  position: Vector3
  color: Color3
}

const MovingBox: FC<MovingBoxProps> = (props) => {
  // access Babylon Scene
  const scene = useScene()
  // access refs to Babylon objects in scene like DOM nodes
  const boxRef = useRef<JSX.IntrinsicElements['box']>(null)

  useBeforeRender(() => {
    if (!boxRef.current?.rotation) return
    if (!scene) return
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    boxRef.current.rotation[props.rotationAxis] +=
      (RPM / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  })

  return (
    <box name="box" ref={boxRef} size={2} position={props.position}>
      <standardMaterial name="material" diffuseColor={props.color} specularColor={Color3.Black()} />
    </box>
  )
}

const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <MovingBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} rotationAxis="y" />
        <MovingBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} rotationAxis="x" />
      </Scene>
    </Engine>
  </div>
)

export default App
