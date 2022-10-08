import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC } from 'react'

export const BasicCameraLightsGround: FC = () => {
  return (
    <>
      <freeCamera
        name="camera1"
        position={new Vector3(0, 5, -10)}
        setTarget={[new Vector3(0, 0, 0)]}
      />
      <hemisphericLight name="light1" intensity={0.7} direction={new Vector3(0, 1, 0)} />
      <ground name="ground" width={6} height={6} />
    </>
  )
}
