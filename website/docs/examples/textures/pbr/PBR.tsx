import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'
import React, { useCallback, useRef, useState } from 'react'
import { Engine, Scene } from 'react-babylonjs'

// var hdrTexture = null;
// var hdrTextureClone = null;

/**
 * Official Demo: https://www.babylonjs.com/demos/pbr/
 */
const WithPBR = () => {
  let environmentUrl = '/assets/textures/environment.dds'

  const [_, setTexturesLoaded] = useState(false)
  const cubeTextureRef = useRef<CubeTexture | undefined>(undefined)
  const cubeTextureCloneRef = useRef<CubeTexture | undefined>(undefined)
  const cubeTextureCallback = useCallback((node: CubeTexture) => {
    if (node) {
      setTexturesLoaded(true) // trigger render and props assignment
      console.log('hdrTexture', node)
      // hdrTexture = node;

      cubeTextureCloneRef.current = node.clone()
      cubeTextureCloneRef.current.coordinatesMode = Texture.SKYBOX_MODE
    }
  }, [])

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <imageProcessingConfiguration
          assignFrom="imageProcessingConfiguration"
          contrast={1.6}
          exposure={0.6}
        />
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

        <sphere
          name="sphereGlass"
          segments={48}
          diameter={30}
          translate={[new Vector3(1, 0, 0), -60]}
        >
          <pbrMaterial
            name="glass"
            reflectionTexture={cubeTextureRef.current}
            refractionTexture={cubeTextureRef.current}
            linkRefractionWithTransparency
            indexOfRefraction={0.52}
            alpha={0}
            microSurface={1}
            reflectivityColor={new Color3(0.2, 0.2, 0.2)}
            albedoColor={new Color3(0.85, 0.85, 0.85)}
          />
        </sphere>

        <sphere
          name="sphereMetal"
          segments={48}
          diameter={30}
          translate={[new Vector3(1, 0, 0), 60]}
        >
          <pbrMaterial
            name="metal"
            reflectionTexture={cubeTextureRef.current}
            microSurface={0.96}
            reflectivityColor={new Color3(0.85, 0.85, 0.85)}
            albedoColor={new Color3(0.01, 0.01, 0.01)}
          />
        </sphere>

        <sphere
          name="spherePlastic"
          segments={48}
          diameter={30}
          translate={[new Vector3(0, 0, 1), -60]}
        >
          <pbrMaterial
            name="metal"
            reflectionTexture={cubeTextureRef.current}
            microSurface={0.96}
            albedoColor={new Color3(0.206, 0.94, 1)}
            reflectivityColor={new Color3(0.003, 0.003, 0.003)}
          />
        </sphere>

        <sphere
          name="sphereGlass"
          segments={48}
          diameter={30}
          translate={[new Vector3(0, 0, 1), 60]}
        >
          <pbrMaterial
            name="glass"
            reflectionTexture={cubeTextureRef.current}
            linkRefractionWithTransparency
            indexOfRefraction={0.52}
            alpha={0}
            microSurface={1}
            reflectivityColor={new Color3(0.2, 0.2, 0.2)}
            albedoColor={new Color3(0.85, 0.85, 0.85)}
          />
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
            <texture url="/assets/textures/reflectivity.png" assignTo="reflectivityTexture" />
            <texture url="/assets/textures/albedo.png" assignTo="albedoTexture" />
          </pbrMaterial>
        </box>
      </Scene>
    </Engine>
  )
}

const PBR = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithPBR />
  </div>
)

export default PBR
