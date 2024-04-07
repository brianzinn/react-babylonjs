import { Animation, Vector3 } from '@babylonjs/core'
import React, { FC, useEffect, useRef } from 'react'
import '@babylonjs/core/Engines/WebGPU/Extensions'
import { FallbackEngine, Scene, useScene } from 'react-babylonjs'

/**
 * This is for optimizing animation on initial application mount.
 * But this story works well，Animation is smooth.
 */
function WithAnimation() {
  // console.time('Timing');

  const groupRef = useRef(null)
  const scene = useScene()

  const position = Vector3.Zero()

  const playAnimation = () => {
    if (groupRef.current) {
      const group = groupRef.current
      const animations = getSlideUpAnimation(position, -2)
      const animatable = scene!.beginDirectAnimation(group, animations, 0, 120, true)
      // console.timeLog('Timing', 'beginAnimation');
    }
  }

  useEffect(() => {
    // console.timeLog('Timing', 'useEffect');
    playAnimation()
  }, [])

  const onCreated = () => {
    // console.timeLog('Timing', 'onCreated');
  }

  const spheres = getSpheres(10)

  return (
    <transformNode name="group" ref={groupRef} position={position} onCreated={onCreated}>
      {spheres}
    </transformNode>
  )
}

function getSpheres(count: number) {
  const results = []

  for (let i = -count / 2; i < count / 2; i++) {
    for (let j = -count / 2; j < count / 2; j++) {
      const key = `sphere-${i}-${j}`
      results.push(
        <sphere name={key} key={key} diameter={0.5} segments={16} position={new Vector3(i, 1, j)} />
      )
    }
  }

  return results
}

function getSlideUpAnimation(position: Vector3, offsetY: number) {
  const { y } = position

  const keys = [
    {
      frame: 0,
      value: y + offsetY,
    },
    {
      frame: 60,
      value: y,
    },
    {
      frame: 120,
      value: y + offsetY,
    },
  ]

  const animation = new Animation('animation', 'position.y', 60, 0, 1)
  animation.setKeys(keys)

  return [animation]
}

export const BasicAnimations: FC = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <FallbackEngine
      canvasId="babylon-canvas"
      engineProps={{
        antialias: true,
        adaptToDeviceRatio: true,
      }}
    >
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 10, -20)}
          setTarget={[Vector3.Zero()]}
        />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <WithAnimation />
      </Scene>
    </FallbackEngine>
  </div>
)

export default BasicAnimations
