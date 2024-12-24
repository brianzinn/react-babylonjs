import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC, useState } from 'react'
import { Engine, Scene, useBeforeRender } from 'react-babylonjs'

const RotatingBox: FC = () => {
  const [y, setY] = useState(0)
  useBeforeRender(() => {
    setY((oldY) => oldY + 0.1)
  })
  return <box name="box" size={2} position={new Vector3(0, 1, 0)} rotation={new Vector3(0, y, 0)} />
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
