import React, { FC } from 'react'
import 'react-babylonjs'
import { v3 } from './v3'

export const BasicCameraLightsGround: FC = () => {
  return (
    <>
      <freeCamera name="camera1" position={v3(0, 5, -10)} setTarget={[v3()]} />
      <hemisphericLight name="light1" intensity={0.7} direction={v3(0, 1, 0)} />
      <ground name="ground" width={6} height={6} />
    </>
  )
}
