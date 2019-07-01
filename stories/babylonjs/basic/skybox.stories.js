import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import 'babylonjs-inspector'
import { Engine, Scene, Skybox, HemisphericLight, ArcRotateCamera, GUI3DManager, CylinderPanel, HolographicButton } from '../../../dist/react-babylonjs.es5'
import { Vector3 } from 'babylonjs'
import '../../style.css'

let globalIndex = 0 // due to closure and how observables are assigned.
const SkyboxScenes = [{
  name: 'sunny day',
  texture: `/assets/textures/TropicalSunnyDay`
}, {
  name: 'specular HDR',
  texture: `/assets/textures/SpecularHDR.dds`
}]

function WithSkybox () {
  const [skyboxIndex, setIndex] = useState(0)
  globalIndex = skyboxIndex

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <HemisphericLight name='hemi-light' intensity={0.7} direction={Vector3.Up()} />
        <Skybox rootUrl={SkyboxScenes[Math.abs(skyboxIndex) % SkyboxScenes.length].texture} />
        <ArcRotateCamera target={Vector3.Zero()} radius={10}
          alpha={-Math.PI / 2} beta={(Math.PI / 2)} minZ={0.001} wheelPrecision={50}
        />
        <GUI3DManager name='gui3d'>
          <CylinderPanel name='panel' margin={0.2}>
            {
              Array.from(new Array(50), (_, index) => index).map(number => {
                return (
                  <HolographicButton
                    key={`btn-${number}`}
                    name={`btn-name-${number}`}
                    text={`btn-text-${number}`}
                    onPointerClickObservable={() => setIndex(globalIndex + 1)}
                  />
                )
              })
            }
          </CylinderPanel>
        </GUI3DManager>
      </Scene>
    </Engine>
  )
}

export default storiesOf('Babylon Basic', module)
  .add('Skybox', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <WithSkybox />
    </div>
  ))
