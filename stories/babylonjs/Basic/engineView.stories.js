import React, { useRef } from 'react'
import '@babylonjs/inspector'
import { Engine, Scene } from '../../../dist/react-babylonjs'
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

const MultiCanvas = ({secondCanvas}) => {
  const freeCameraRef = useRef(undefined);
  return (
    <>
      <BoxWithArrows position={Vector3.Zero()} />

      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

      <freeCamera name='freeCamera' ref={freeCameraRef} position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} setActiveOnSceneIfNoneActive={false} />

      <arcRotateCamera name='camera1' alpha={3 * Math.PI / 8} beta={3 * Math.PI / 8} radius={15} target={new Vector3(0, 2, 0)} />

      {(secondCanvas && secondCanvas.current !== null) &&
        <engineView canvas={secondCanvas.current} camera={freeCameraRef.current} />
      }
    </>
  )
}

export const EngineView = () => {
  const secondCanvasRef = useRef(null);
  return (
    <div className="container">
      <div className="box">
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
          <Scene clearColor={new Color3( .5, .5, .5)}>
            <MultiCanvas secondCanvas={secondCanvasRef} />
          </Scene>
        </Engine>
      </div>
      <div className="box">
        <canvas className='second-canvas-babylon' ref={secondCanvasRef} />
      </div>
    </div>
  );
}
