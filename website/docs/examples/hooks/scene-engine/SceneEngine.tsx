import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import React, { FC, useContext, useRef } from 'react'
import { Engine, EngineCanvasContext, Scene, SceneContext, useBeforeRender } from 'react-babylonjs'

type ContextLoggerType = {
  id: string
}

const ContextLogger: FC<ContextLoggerType> = (props) => {
  console.log(
    'Direct access to context depending on where declared yields different results.  Using hooks directly useScene, useEngine, useCanvas is easier.'
  )
  const ctx = useContext(EngineCanvasContext)
  console.log(`ctx-logger "${props.id}" BabylonJSContext is:`, ctx)

  const ctx2 = useContext(SceneContext)
  console.log(`ctx-logger "${props.id}" SceneContext is:`, ctx2)
  return null
}

const size = 2
const shade = 0
const rpm = 10

type RotatingBoxType = {
  position: Vector3
}
const RotatingBox: FC<RotatingBoxType> = ({ position }) => {
  const centerTransform = useRef<Mesh | null>(null)
  useBeforeRender((scene) => {
    if (centerTransform.current !== null) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime()
      centerTransform.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  })

  return (
    <transformNode ref={centerTransform} position={position} name="transform-node">
      <lines
        name="red-line"
        points={[
          Vector3.Zero(),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, 0.05 * size, 0),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, -0.05 * size, 0),
        ]}
        color={new Color3(1, shade, shade)}
      />
      <lines
        name="green-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, size, 0),
          new Vector3(-0.05 * size, size * 0.95, 0),
          new Vector3(0, size, 0),
          new Vector3(0.05 * size, size * 0.95, 0),
        ]}
        color={new Color3(shade, 1, shade)}
      />
      <lines
        name="blue-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, 0, size),
          new Vector3(0, -0.05 * size, size * 0.95),
          new Vector3(0, 0, size),
          new Vector3(0, 0.05 * size, size * 0.95),
        ]}
        color={new Color3(shade, shade, 1)}
      />
      <box
        name="color-box"
        faceColors={[
          Color4.FromColor3(Color3.Blue()),
          Color4.FromColor3(Color3.Red()),
          Color4.FromColor3(Color3.Green()),
          Color4.FromColor3(Color3.White()),
          Color4.FromColor3(Color3.Yellow()),
          Color4.FromColor3(Color3.Black()),
        ]}
      ></box>
    </transformNode>
  )
}

const RotatingBoxScene = () => (
  <>
    <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
    <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <RotatingBox position={new Vector3(1.5, 1.5, -3)} />
    <RotatingBox position={new Vector3(-1.5, 1.5, -3)} />
    <ground name="ground1" width={6} height={6} subdivisions={2} />
  </>
)

const RenderHooks = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <ContextLogger id="engine" />
      <Scene>
        <ContextLogger id="scene" />
        <RotatingBoxScene />
      </Scene>
    </Engine>
  </div>
)

export default RenderHooks
