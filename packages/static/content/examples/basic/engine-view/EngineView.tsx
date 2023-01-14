import { Camera } from '@babylonjs/core/Cameras/camera'
import { Color3, Vector3 } from '@babylonjs/core/Maths/math'
import { Nullable } from '@babylonjs/core/types'
import React, { FC, useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const size = 2
const shade = 0

type BoxType = {
  position: Vector3
}

const BoxWithArrows: FC<BoxType> = ({ position }) => {
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
          Color3.Blue().toColor4(),
          Color3.Red().toColor4(),
          Color3.Green().toColor4(),
          Color3.White().toColor4(),
          Color3.Yellow().toColor4(),
          Color3.Black().toColor4(),
        ]}
      ></box>
    </transformNode>
  )
}

type MultiCanvasType = {
  secondCanvas: React.MutableRefObject<Nullable<HTMLCanvasElement>>
}

const MultiCanvas: FC<MultiCanvasType> = ({ secondCanvas }) => {
  const freeCameraRef = useRef<Nullable<Camera>>(null)
  return (
    <>
      <BoxWithArrows position={Vector3.Zero()} />

      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />

      <freeCamera
        name="freeCamera"
        ref={freeCameraRef}
        position={new Vector3(0, 5, -10)}
        setTarget={[Vector3.Zero()]}
        setActiveOnSceneIfNoneActive={false}
      />

      <arcRotateCamera
        name="camera1"
        alpha={(3 * Math.PI) / 8}
        beta={(3 * Math.PI) / 8}
        radius={15}
        target={new Vector3(0, 2, 0)}
      />

      {secondCanvas && secondCanvas.current !== null && (
        <engineView canvas={secondCanvas.current} camera={freeCameraRef.current ?? undefined} />
      )}
    </>
  )
}

export const EngineView = () => {
  const secondCanvasRef = useRef<Nullable<HTMLCanvasElement>>(null)
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">first canvas (accepts pointer events)</div>
      </div>
      <div className="row">
        <div className="col-8">
          <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
            <Scene clearColor={new Color3(0.5, 0.5, 0.5).toColor4()}>
              <MultiCanvas secondCanvas={secondCanvasRef} />
            </Scene>
          </Engine>
        </div>
      </div>
      <div className="row">
        <div className="col-12">second canvas</div>
      </div>
      <div className="row">
        <div className="col-8">
          <canvas className="second-canvas-babylon" ref={secondCanvasRef} />
        </div>
      </div>
    </div>
  )
}

export default EngineView
