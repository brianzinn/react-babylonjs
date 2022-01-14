import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import React, { useContext, useRef } from "react";
import {
  Engine,
  EngineCanvasContext,
  Scene,
  SceneContext,
  useBeforeRender,
} from "react-babylonjs";
import "../../style.css";

export default { title: "Hooks" };

const ContextLogger = (props, context) => {
  console.log(
    "Direct access to context depending on where declared yields different results.  Using hooks directly useScene, useEngine, useCanvas is easier."
  );
  const ctx = useContext(EngineCanvasContext);
  console.log(`ctx-logger "${props.id}" BabylonJSContext is:`, ctx);

  const ctx2 = useContext(SceneContext);
  console.log(`ctx-logger "${props.id}" SceneContext is:`, ctx2);
  return null;
};

const size = 2;
const shade = 0;
const rpm = 10;

const RotatingBox = ({ position }) => {
  const centerTransform = useRef(null);
  useBeforeRender((scene) => {
    if (centerTransform.current !== null) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      centerTransform.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <transformNode
      ref={centerTransform}
      position={position}
      name="transform-node"
    >
      <lines
        name="red-line"
        points={[
          new Vector3.Zero(),
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
          new Vector3.Zero(),
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
          new Vector3.Zero(),
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
          Color3.Blue(),
          Color3.Red(),
          Color3.Green(),
          Color3.White(),
          Color3.Yellow(),
          Color3.Black(),
        ]}
      ></box>
    </transformNode>
  );
};

const RotatingBoxScene = (props) => (
  <>
    <freeCamera
      name="camera1"
      position={new Vector3(0, 5, -10)}
      setTarget={[Vector3.Zero()]}
    />
    <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <RotatingBox position={new Vector3(1.5, 1.5, -3)} />
    <RotatingBox position={new Vector3(-1.5, 1.5, -3)} />
    <ground name="ground1" width={6} height={6} subdivisions={2} />
  </>
);

export const RenderHooksStory = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <ContextLogger id="engine" />
      <Scene>
        <ContextLogger id="scene" />
        <RotatingBoxScene rpm={20} />
      </Scene>
    </Engine>
  </div>
);

RenderHooksStory.story = {
  name: "useBeforeRender",
};
