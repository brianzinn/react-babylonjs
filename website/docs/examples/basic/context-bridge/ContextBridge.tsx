import { Color3, Vector3 } from '@babylonjs/core/Maths/math'
import React from 'react'
import { Engine, Scene } from 'react-babylonjs'

const ThemeContext = React.createContext({
  color: Color3.Red(),
  position: Vector3.Zero(),
  name: 'default context',
})

const ThemedBox = () => {
  const ctx = React.useContext(ThemeContext)
  return (
    <box name={ctx.name} position={ctx.position}>
      <standardMaterial name="mat" diffuseColor={ctx.color} specularColor={Color3.Black()} />
    </box>
  )
}

const EngineScene = () => (
  <div style={{ flex: 1, display: 'flex', maxWidth: '80%' }}>
    <ThemeContext.Consumer>
      {(value) => (
        <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
          <Scene>
            <ThemeContext.Provider value={value}>
              <arcRotateCamera
                name="arc"
                target={Vector3.Zero()}
                minZ={0.001}
                alpha={-Math.PI / 4}
                beta={Math.PI / 4}
                radius={5}
              />
              <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
              <ground name="ground1" width={6} height={6} subdivisions={2} />
              <ThemedBox />
            </ThemeContext.Provider>
          </Scene>
        </Engine>
      )}
    </ThemeContext.Consumer>
  </div>
)

const BridgedContext = () => (
  <ThemeContext.Provider
    value={{
      color: Color3.FromHexString('#FFAF00'),
      position: new Vector3(0, 1, 0),
      name: 'testing',
    }}
  >
    <EngineScene />
  </ThemeContext.Provider>
)

export default BridgedContext
