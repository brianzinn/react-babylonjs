import { ArcRotateCamera } from '@babylonjs/core'
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

const size = 2
const shade = 0

type BoxWithArrowsProps = {
  position: Vector3
}

const BoxWithArrows: FC<BoxWithArrowsProps> = ({ position }) => {
  return (
    <transformNode position={position} name="transform-node">
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

const MultiViewport = () => {
  const scene = useScene()

  const alwaysActive = (camera: ArcRotateCamera) => {
    if (scene) {
      scene.activeCameras = [...(scene.activeCameras || []), camera]
    }
  }
  return (
    <>
      <BoxWithArrows position={Vector3.Zero()} />

      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />

      <arcRotateCamera
        name="camera1"
        alpha={(3 * Math.PI) / 8}
        beta={(3 * Math.PI) / 8}
        radius={15}
        target={new Vector3(0, 2, 0)}
        onCreated={alwaysActive}
      >
        <viewport x={0} y={0.5} height={1} width={1} />
      </arcRotateCamera>

      <arcRotateCamera
        name="camera2"
        alpha={(5 * Math.PI) / 8}
        beta={(5 * Math.PI) / 8}
        radius={30}
        target={new Vector3(0, 2, 0)}
        onCreated={alwaysActive}
      >
        <viewport x={0} y={0} height={1} width={0.5} />
      </arcRotateCamera>
    </>
  )
}

const Viewport = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene clearColor={new Color4(0.5, 0.5, 0.5)}>
        <MultiViewport />
      </Scene>
    </Engine>
  </div>
)

export default Viewport
