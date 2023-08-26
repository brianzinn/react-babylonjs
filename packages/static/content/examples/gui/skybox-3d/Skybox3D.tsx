import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { useState, FC } from 'react'
import { Engine, Scene, Skybox } from 'react-babylonjs'

// relative to ~/examples/gui
const SkyboxScenes = [
  {
    name: 'sunny day',
    texture: `../../../assets/textures/TropicalSunnyDay`,
  },
  {
    name: 'specular HDR',
    texture: `../../../assets/textures/SpecularHDR.dds`,
  },
]

const WithSkybox: FC = () => {
  const [skyboxIndex, setIndex] = useState(0)
  // globalIndex = skyboxIndex

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <hemisphericLight name="hemi-light" intensity={0.7} direction={Vector3.Up()} />
        <Skybox rootUrl={SkyboxScenes[Math.abs(skyboxIndex) % SkyboxScenes.length].texture} />
        <arcRotateCamera
          name="arc-cam"
          target={Vector3.Zero()}
          radius={10}
          alpha={-Math.PI / 2}
          beta={Math.PI / 2}
          minZ={0.001}
          wheelPrecision={50}
        />
        <gui3DManager>
          <cylinderPanel name="panel" margin={0.2}>
            {Array.from(new Array(50), (_, index) => index).map((number) => {
              return (
                <holographicButton
                  key={`btn-${number}`}
                  name={`btn-name-${number}`}
                  text={`btn-text-${number}`}
                  onPointerClickObservable={() => setIndex((val) => val + 1)}
                />
              )
            })}
          </cylinderPanel>
        </gui3DManager>
      </Scene>
    </Engine>
  )
}

const Skybox3D = () => (
  <div className="App">
    <WithSkybox />
  </div>
)

export default Skybox3D
