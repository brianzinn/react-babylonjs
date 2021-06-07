import React from 'react'
import '@babylonjs/inspector'
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import '../../style.css'

export default { title: 'Babylon Basic' };

const size = 2;
const shade = 0;

const BoxWithArrows = ({ position }) => {
  return (<transformNode position={position} name="transform-node">
    <lines
      name="red-line"
      points={
        [
          new Vector3.Zero(),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, 0.05 * size, 0),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, -0.05 * size, 0)
        ]
      }
      color={new Color3(1, shade, shade)}
    />
    <lines
      name="green-line"
      points={
        [
          new Vector3.Zero(),
          new Vector3(0, size, 0),
          new Vector3(-0.05 * size, size * 0.95, 0),
          new Vector3(0, size, 0),
          new Vector3(0.05 * size, size * 0.95, 0)
        ]
      }
      color={new Color3(shade, 1, shade)}
    />
    <lines
      name="blue-line"
      points={
        [
          new Vector3.Zero(),
          new Vector3(0, 0, size),
          new Vector3(0, -0.05 * size, size * 0.95),
          new Vector3(0, 0, size),
          new Vector3(0, 0.05 * size, size * 0.95)
        ]
      }
      color={new Color3(shade, shade, 1)}
    />
    <box
      name="color-box"
      faceColors={[
        Color3.Blue(),
        Color3.Red(),
        Color3.Green(),
        Color3.White(),
        Color3.Yellow(),
        Color3.Black()
      ]}
    ></box>
  </transformNode>)
}

const MultiViewport = () => {
  const scene = useScene();

  const alwaysActive = (camera) => {
    scene.activeCameras = [...(scene.activeCameras || []), camera];
  }
  return (
    <>
      <BoxWithArrows position={Vector3.Zero()} />

      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

      <arcRotateCamera name='camera1' alpha={3 * Math.PI / 8} beta={3 * Math.PI / 8} radius={15} target={new Vector3(0, 2, 0)} onCreated={alwaysActive}>
        <viewport x={0} y={0.5} height={1} width={1} />
      </arcRotateCamera>

      <arcRotateCamera name='camera2' alpha={5 * Math.PI / 8} beta={5 * Math.PI / 8} radius={30} target={new Vector3(0, 2, 0)} onCreated={alwaysActive}>
        <viewport x={0} y={0} height={1} width={0.5} />
      </arcRotateCamera>
    </>
  )
}

export const Viewport = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene clearColor={new Color3( .5, .5, .5)}>
        <MultiViewport />
      </Scene>
    </Engine>
  </div>
)
