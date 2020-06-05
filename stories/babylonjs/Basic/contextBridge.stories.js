import React from 'react'
import { Engine, Scene } from '../../../dist/react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import '../../style.css'

export default { title: 'Babylon Basic' };

const ThemeContext = React.createContext({
    color: Color3.Red(),
    posigion: Vector3.Zero(),
    name: 'default context'
});

const ThemedBox = () => {
    const ctx = React.useContext(ThemeContext);
    return (
      <box name={ctx.name} position={ctx.position}>
          <standardMaterial diffuseColor={ctx.color} specularColor={Color3.Black()} />
      </box>
    );
  };

const EngineScene = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <ThemeContext.Consumer>
    {value => (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
            <Scene>
                <ThemeContext.Provider value={value}>
                    <arcRotateCamera name="arc" target={Vector3.Zero()} minZ={0.001}
                        alpha={-Math.PI / 4} beta={(Math.PI / 4)} radius={5 }
                    />
                    <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
                    <ground name='ground1' width={6} height={6} subdivisions={2} />
                    <ThemedBox />
                </ThemeContext.Provider>
            </Scene>
        </Engine>
    )}
    </ThemeContext.Consumer>
  </div>
)

export const BridgedContext = () => (
    <ThemeContext.Provider value={{
        color: Color3.FromHexString('#FFAF00'),
        position: new Vector3(0, 1, 0),
        name: 'testing'
    }}>
      <EngineScene />
    </ThemeContext.Provider>
);