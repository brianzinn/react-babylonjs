import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import React, { FC, useRef } from 'react'
import { Engine, Scene, useBeforeRender, useScene } from 'react-babylonjs'

type RotatingBoxProps = {
  rpm: number
}

const RotatingBox: FC<Partial<RotatingBoxProps>> = (props) => {
  const _props: RotatingBoxProps = {
    rpm: 5,
    ...props,
  }
  const { rpm } = _props
  const scene = useScene()

  const boxRef = useRef<Mesh | null>(null)

  useBeforeRender(
    () => {
      if (scene && boxRef.current) {
        const deltaTimeInMillis = scene.getEngine().getDeltaTime()
        boxRef.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
      }
    },
    undefined,
    undefined,
    undefined,
    [rpm]
  )
  return <box ref={boxRef} name="box" size={2} position={new Vector3(0, 1, 0)} />
}

const App: FC = () => {
  return (
    <Engine
      antialias
      adaptToDeviceRatio
      canvasId="babylon-js"
      renderOptions={{
        whenVisibleOnly: true,
      }}
    >
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
        <ground name="ground" width={6} height={6} />
        <RotatingBox />
      </Scene>
    </Engine>
  )
}

export default App
