import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters'
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture'
import { ColorGradingTexture } from '@babylonjs/core/Materials/Textures/colorGradingTexture'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { useCallback, useEffect, useState } from 'react'
import { Engine, Scene } from 'react-babylonjs'

let sunnyDayRootUrl = '../../assets/textures/TropicalSunnyDay'

const SkyboxAndSphere = () => (
  <>
    <sphere name="Sphere1" segments={32} diameter={5}>
      <standardMaterial
        name="kosh"
        specularPower={16}
        invertRefractionY={false}
        indexOfRefraction={0.98}
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
        <cubeTexture
          assignTo={['reflectionTexture', 'refractionTexture']}
          rootUrl={sunnyDayRootUrl}
        />
      </standardMaterial>
    </sphere>

    <box name="skybox" size={100}>
      <standardMaterial
        name="skybox-material"
        backFaceCulling={false}
        disableLighting={true}
        diffuseColor={Color3.Black()}
        specularColor={Color3.Black()}
      >
        <cubeTexture
          rootUrl={sunnyDayRootUrl}
          coordinatesMode={Texture.SKYBOX_MODE}
          assignTo={'reflectionTexture'}
        />
      </standardMaterial>
    </box>
  </>
)

// https://playground.babylonjs.com/#17VHYI#15
const ColorGrading = () => {
  const [colorGradingTexture, setColorGradingTexture] = useState<BaseTexture | undefined>(undefined)
  const colorGradingTextureRef = useCallback((cg: ColorGradingTexture) => {
    setColorGradingTexture(cg)
  }, [])

  useEffect(() => {
    if (colorGradingTexture) {
      let i = 0
      const handle = setInterval(() => {
        if (colorGradingTexture) {
          colorGradingTexture.level = Math.sin(i++ / 120) * 0.5 + 0.5
        }
      }, 10)
      return () => {
        clearInterval(handle)
      }
    }
  }, [colorGradingTexture])

  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <imageProcessingConfiguration
            assignFrom="imageProcessingConfiguration"
            colorGradingEnabled={colorGradingTexture !== null}
            colorGradingTexture={colorGradingTexture}
          />
          <arcRotateCamera
            name="Camera1"
            radius={10}
            alpha={Math.PI / 2}
            beta={Math.PI / 2}
            target={Vector3.Zero()}
          />
          <pointLight name="omni0" position={new Vector3(-17.6, 18.8, -49.9)} />
          <SkyboxAndSphere />
          <colorGradingTexture
            ref={colorGradingTextureRef}
            url="../../../assets/textures/LateSunset.3dl"
          />
        </Scene>
      </Engine>
    </div>
  )
}

export default ColorGrading
