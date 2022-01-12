import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC, useRef } from 'react'
import { useBeforeRender, useScene } from 'react-babylonjs'
import { rpm } from './App'

export type MovingBoxProps = {
  rotationAxis: 'x' | 'y' | 'z'
  position: Vector3
  color: Color3
}

export const MovingBox: FC<MovingBoxProps> = (props) => {
  // access Babylon Scene
  const scene = useScene()
  // access refs to Babylon objects in scene like DOM nodes
  const boxRef = useRef<JSX.IntrinsicElements['box']>(null)

  useBeforeRender(() => {
    if (!boxRef.current?.rotation) return
    if (!scene) return
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    boxRef.current.rotation[props.rotationAxis] +=
      (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
  })

  return (
    <box name="box" ref={boxRef} size={2} position={props.position}>
      <standardMaterial
        name="material"
        diffuseColor={props.color}
        specularColor={Color3.Black()}
      />
    </box>
  )
}
