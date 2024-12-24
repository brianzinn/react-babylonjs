import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { useEffect, useState, useRef } from 'react'
import { Engine, Scene, useEngine } from 'react-babylonjs'

const MyScene = () => {
  const engine = useEngine()
  const [_, setTextureReady] = useState(false)
  const cubeTextureRef = useRef<undefined | CubeTexture>()

  useEffect(() => {
    if (engine !== null) {
      const cubeTexture = new CubeTexture('/assets/textures/environment.env', engine)
      cubeTextureRef.current = cubeTexture
      setTextureReady(true) // force a re-render to attach
      console.log('texture:', cubeTextureRef.current)

      return () => {
        cubeTexture.dispose()
      }
    }
  }, [engine])

  return (
    <Scene environmentTexture={cubeTextureRef.current}>
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
          <texture url="/assets/textures/mr.jpg" assignTo="metallicTexture" />
        </pbrMaterial>
      </sphere>
    </Scene>
  )
}

export const FromInstance = () => (
  <div className="App">
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <MyScene />
    </Engine>
  </div>
)

export default FromInstance
