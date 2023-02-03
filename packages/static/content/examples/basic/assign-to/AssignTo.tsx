import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React from 'react'
import { Engine, Scene } from 'react-babylonjs'

export const FromInstance = () => (
  <div className="App">
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          minZ={0.001}
          alpha={0}
          beta={Math.PI / 2}
          radius={5}
          lowerBetaLimit={2}
          upperRadiusLimit={5}
        />
        <hemisphericLight name="light1" intensity={0.9} direction={Vector3.Down()} />
        <sphere name="sphere1" segments={16} diameter={2}>
          <pbrMaterial
            name="pbr"
            albedoColor={new Color3(1, 0.766, 0.336)}
            metallic={1.0}
            roughness={1.0}
            useRoughnessFromMetallicTextureAlpha={false}
            useRoughnessFromMetallicTextureGreen
            useMetallnessFromMetallicTextureBlue
          >
            <texture url="../../assets/textures/mr.jpg" assignTo="metallicTexture" />
          </pbrMaterial>
        </sphere>
        <cubeTexture
          level={0.5}
          assignTo="environmentTexture"
          rootUrl="../../assets/textures/environment.env"
        />
      </Scene>
    </Engine>
  </div>
)

export default FromInstance
