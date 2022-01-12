---
to: examples/<%=name%>/src/App.tsx
---

import React, { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'

export const rpm = 5
const App: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 5, -10)}
          setTarget={[Vector3.Zero()]}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
       
      </Scene>
    </Engine>
  </div>
)

export default App
