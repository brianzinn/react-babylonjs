import { PointLight } from '@babylonjs/core/Lights/pointLight'
import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { useEffect, useRef, useState } from 'react'
import { Engine, Scene, Skybox } from 'react-babylonjs'

/**
 * Insipration Playground: https://www.babylonjs-playground.com/#AQZJ4C#0
 */
const WithFresnelParameters = () => {
  let sunnyDayRootUrl = '/assets/textures/TropicalSunnyDay'
  let pointLightRef = useRef<PointLight | null>(null)

  const [pointLightDiffuse, setPointLightDiffuse] = useState(() => new Color3(1, 0.5, 0.5))

  useEffect(() => {
    console.log('changing R every second')
    setInterval(() => {
      setPointLightDiffuse(new Color3((pointLightDiffuse.r + 0.1) % 1, 0.5, 0.5))
    }, 1000)
  }, [])

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="Camera"
          target={new Vector3(0, 0, 0)}
          alpha={0}
          beta={0}
          radius={10}
          minZ={0.001}
          wheelPrecision={50}
          setPosition={[new Vector3(-15, 3, 0)]}
        />

        <pointLight
          ref={pointLightRef}
          name="Omni0"
          position={new Vector3(-17.6, 18.8, -49.9)}
          diffuse={pointLightDiffuse}
        />
        <Skybox rootUrl={sunnyDayRootUrl} />

        <sphere name="sphere1" position={Vector3.Zero()} segments={32} diameter={3}>
          <standardMaterial
            name="material1"
            alpha={0.2}
            specularPower={16}
            diffuseColor={Color3.Black()}
            emissiveColor={new Color3(0.5, 0.5, 0.5)}
            reflectionFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.1,
              power: 1,
            })}
            emissiveFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.5,
              power: 4,
            })}
          >
            <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
          </standardMaterial>
        </sphere>

        <sphere name="sphere2" position={new Vector3(0, 0, -5)} segments={32} diameter={3}>
          <standardMaterial
            name="material2"
            specularPower={32}
            diffuseColor={Color3.Black()}
            emissiveColor={new Color3(0.5, 0.5, 0.5)}
            reflectionFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.1,
              power: 1,
            })}
            emissiveFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.5,
              power: 4,
            })}
          >
            <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
          </standardMaterial>
        </sphere>

        <sphere name="sphere3" position={new Vector3(0, 0, 5)} segments={32} diameter={3}>
          <standardMaterial
            name="material3"
            specularPower={64}
            alpha={0.2}
            diffuseColor={Color3.Black()}
            emissiveColor={Color3.White()}
            emissiveFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.2,
              power: 1,
            })}
            opacityFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0,
              power: 4,
            })}
          ></standardMaterial>
        </sphere>

        <sphere name="sphere4" position={new Vector3(5, 0, 0)} segments={32} diameter={3}>
          <standardMaterial
            name="material4"
            specularPower={64}
            diffuseColor={Color3.Black()}
            emissiveColor={Color3.White()}
            emissiveFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.5,
              power: 4,
            })}
          >
            <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
          </standardMaterial>
        </sphere>

        <sphere name="sphere5" position={new Vector3(-5, 0, 0)} segments={32} diameter={3}>
          <standardMaterial
            name="material5"
            specularPower={64}
            diffuseColor={Color3.Black()}
            emissiveColor={new Color3(0.2, 0.2, 0.2)}
            emissiveFresnelParameters={FresnelParameters.Parse({
              isEnabled: true,
              leftColor: [1, 1, 1],
              rightColor: [0, 0, 0],
              bias: 0.4,
              power: 2,
            })}
          >
            <cubeTexture level={0.5} assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
          </standardMaterial>
        </sphere>
      </Scene>
    </Engine>
  )
}

const FresnelParametersStory = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithFresnelParameters />
  </div>
)

export default FresnelParametersStory
