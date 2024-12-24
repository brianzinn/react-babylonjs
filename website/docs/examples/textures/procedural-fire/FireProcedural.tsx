import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { FireProceduralTexture } from '@babylonjs/procedural-textures'
import React, { useCallback } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

const FireballPlane = () => {
  const scene = useScene()
  const ref = useCallback((node) => {
    if (node !== null) {
      const fireTexture = new FireProceduralTexture('fire', 256, scene)
      const fireMaterial = node
      fireMaterial.diffuseTexture = fireTexture
      fireMaterial.opacityTexture = fireTexture
    }
  }, [])

  return (
    <plane name="fireball" size={20}>
      <standardMaterial ref={ref} name="fireball-material" />
    </plane>
  )
}

/**
 * Insipration Playground: https://www.babylonjs-playground.com/#KM3TC
 */
function WithFireProcedural() {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="Camera"
          alpha={-2}
          beta={Math.PI / 2}
          radius={12}
          minZ={0.001}
          wheelPrecision={50}
          target={new Vector3(-5, 0, -10)}
        />

        <hemisphericLight name="Light" direction={new Vector3(0, 10, 0)} />

        <FireballPlane />
      </Scene>
    </Engine>
  )
}

const ProceduralFire = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithFireProcedural />
  </div>
)

export default ProceduralFire
