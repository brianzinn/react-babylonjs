import React, { FC, useState, useEffect } from 'react'

import { Scene, Engine } from 'react-babylonjs'

import { Vector3 } from '@babylonjs/core/Maths/math.vector'

const App: FC = () => {
  const [leftCellIndex, setLeftCellIndex] = useState(18)
  useEffect(() => {
    const timeout = setInterval(() => {
      setLeftCellIndex((prev) => (prev + 1) % 46)
    }, 200)

    return () => {
      clearInterval(timeout)
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
          <Scene>
            <arcRotateCamera
              name="arc"
              target={Vector3.Zero()}
              alpha={-Math.PI / 2}
              beta={Math.PI / 2}
              radius={4}
            />
            <pointLight name="Point" position={new Vector3(5, 10, 5)} />

            <spriteManager
              name="playerManager"
              imgUrl="../../../assets/images/player.png"
              capacity={3}
              cellSize={64}
            >
              <sprite name="player0" />
              <sprite name="player1" cellIndex={leftCellIndex} position={new Vector3(-1, 0, 0)} />
              <sprite name="player2" cellIndex={leftCellIndex} position={new Vector3(1, 0, 0)} />
            </spriteManager>
          </Scene>
        </Engine>
      </header>
    </div>
  )
}
export default App
