import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC, useCallback, useState, useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'

type DynamicConfigProps = {
  roughness: number
}

/**
 * Official Demo: https://www.babylonjs.com/demos/pbr/
 */
const WithDynamicConfig: FC<DynamicConfigProps> = ({ roughness }) => {
  let environmentUrl = '../../../assets/textures/environment.dds'
  const [_, setTexturesLoaded] = useState(false)

  const cubeTextureRef = useRef<CubeTexture | undefined>(undefined)
  const cubeTextureCloneRef = useRef<CubeTexture | undefined>(undefined)

  const cubeTextureCallback = useCallback((node: CubeTexture | null) => {
    if (node) {
      cubeTextureRef.current = node
      console.log('hdrTexture', node)
      // hdrTexture = node;

      cubeTextureCloneRef.current = node.clone()
      cubeTextureCloneRef.current.name = 'cloned texture'
      cubeTextureCloneRef.current.coordinatesMode = Texture.SKYBOX_MODE

      setTexturesLoaded(true) // trigger render and props assignment
    }
  }, [])

  return (
    <>
      <arcRotateCamera
        name="Camera"
        target={Vector3.Zero()}
        alpha={-Math.PI / 4}
        beta={Math.PI / 2.5}
        radius={200}
        minZ={0.1}
      />

      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <cubeTexture
        ref={cubeTextureCallback}
        name="cubeTexture"
        rootUrl={environmentUrl}
        createPolynomials={true}
        format={undefined}
        prefiltered={true}
      />

      <box name="hdrSkyBox" size={1000} infiniteDistance>
        <pbrMaterial
          name="skyBox"
          backFaceCulling={false}
          reflectionTexture={cubeTextureCloneRef.current}
          microSurface={1}
          disableLighting
        />
      </box>

      <sphere name="sphereGlass1" segments={48} diameter={30} position={new Vector3(-120, 0, 0)}>
        <pbrMaterial
          name="sphereGlass1mat"
          reflectionTexture={cubeTextureRef.current}
          refractionTexture={cubeTextureRef.current}
          linkRefractionWithTransparency
          indexOfRefraction={0.52}
          alpha={0}
          microSurface={1}
          reflectivityColor={new Color3(0.2, 0.2, 0.2)}
          albedoColor={new Color3(0.85, 0.85, 0.85)}
        >
          <pbrClearCoatConfiguration assignFrom="clearCoat" isEnabled roughness={roughness} />
        </pbrMaterial>
      </sphere>

      <sphere name="sphereMetal" segments={48} diameter={30} position={new Vector3(120, 0, 0)}>
        <pbrMaterial
          name="sphereMetalMat"
          reflectionTexture={cubeTextureRef.current}
          microSurface={0.96}
          reflectivityColor={new Color3(0.85, 0.85, 0.85)}
          albedoColor={new Color3(0.01, 0.01, 0.01)}
        >
          <pbrClearCoatConfiguration assignFrom="clearCoat" isEnabled roughness={roughness} />
        </pbrMaterial>
      </sphere>

      <sphere name="spherePlastic" segments={48} diameter={30} position={new Vector3(0, 0, -120)}>
        <pbrMaterial
          name="spherePlasticMat"
          reflectionTexture={cubeTextureRef.current}
          microSurface={0.96}
          albedoColor={new Color3(0.206, 0.94, 1)}
          reflectivityColor={new Color3(0.003, 0.003, 0.003)}
        >
          <pbrClearCoatConfiguration assignFrom="clearCoat" isEnabled roughness={roughness} />
        </pbrMaterial>
      </sphere>

      <sphere name="sphereGlass2" segments={48} diameter={30} position={new Vector3(0, 0, 120)}>
        <pbrMaterial
          name="sphereGlass2mat"
          reflectionTexture={cubeTextureRef.current}
          linkRefractionWithTransparency
          indexOfRefraction={0.52}
          alpha={0}
          microSurface={1}
          reflectivityColor={new Color3(0.2, 0.2, 0.2)}
          albedoColor={new Color3(0.85, 0.85, 0.85)}
        >
          <pbrClearCoatConfiguration assignFrom="clearCoat" isEnabled roughness={roughness} />
        </pbrMaterial>
      </sphere>

      <box name="plane" width={65} height={1} depth={65}>
        <pbrMaterial
          name="wood"
          reflectionTexture={cubeTextureRef.current}
          environmentIntensity={1}
          specularIntensity={0.3}
          albedoColor={Color3.White()}
          useMicroSurfaceFromReflectivityMapAlpha
        >
          <texture url="../../../assets/textures/reflectivity.png" assignTo="reflectivityTexture" />
          <texture url="../../../assets/textures/albedo.png" assignTo="albedoTexture" />
          <pbrClearCoatConfiguration assignFrom="clearCoat" isEnabled roughness={roughness} />
        </pbrMaterial>
      </box>
    </>
  )
}

const DynamicConfig = () => {
  const [roughness, setRoughness] = useState(0.0)
  const toggleRoughness = () => {
    setRoughness((roughness) => (roughness === 0.0 ? 1.0 : 0.0))
  }

  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <button className="btn btn-primary mb-2" onClick={toggleRoughness}>
          Switch Roughness
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
          <Scene>
            <WithDynamicConfig roughness={roughness} />
          </Scene>
        </Engine>
      </div>
    </>
  )
}

export default DynamicConfig
