import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import { Nullable } from '@babylonjs/core/types'
import React, { FC, useEffect, useRef } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

type MovingBoxProps = {
  rotationAxis: 'x' | 'y' | 'z'
  position: Vector3
  color: Color3
}

const rpm = 5
const MovingBox: FC<MovingBoxProps> = (props: MovingBoxProps) => {
  // access Babylon Scene
  const scene = useScene()
  // access refs to Babylon objects in scene like DOM nodes
  const boxRef = useRef<Nullable<AbstractMesh>>(null)

  // there is also a built-in hook called useBeforeRender that does will do this:
  useEffect(() => {
    if (boxRef.current !== null && scene) {
      const onBeforeRender = () => {
        let deltaTimeInMillis = scene.getEngine().getDeltaTime()
        boxRef.current!.rotation[props.rotationAxis] +=
          (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
      }

      scene.registerBeforeRender(onBeforeRender)
      return () => {
        scene.unregisterBeforeRender(onBeforeRender)
      }
    }
  }, [boxRef.current])

  return (
    <box name="box" ref={boxRef} size={2} position={props.position}>
      <standardMaterial name="box-mat" diffuseColor={props.color} specularColor={Color3.Black()} />
    </box>
  )
}

export default () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <MovingBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} rotationAxis="y" />
        <MovingBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} rotationAxis="x" />
      </Scene>
    </Engine>
  </div>
)
