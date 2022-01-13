import { Vector3 } from "@babylonjs/core/Maths/math";
import "@babylonjs/inspector";
import React, { useEffect, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";

export default { title: "Babylon Basic" };

let lastTime = Date.now();

function WithTransformNode() {
  const [position, setPosition] = useState(Vector3.Zero());
  const [rotation, setRotation] = useState(Vector3.Zero());

  let timer;
  let direction = 1;

  const animate = (_) => {
    if (position.x > 1) {
      direction = -1;
    } else if (position.x < -1) {
      direction = 1;
    }

    const velocity = 0.005 * direction;
    position.x += velocity;
    const rpm = 10;
    const now = Date.now();
    const deltaTimeInMillis = now - lastTime;
    lastTime = now;
    const rotationRads = (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    rotation.y += rotationRads;
    setPosition(position.clone());
    setRotation(rotation.clone());
    timer = requestAnimationFrame(animate);
  };

  useEffect(() => {
    timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 5, -10)}
          setTarget={[Vector3.Zero()]}
        />

        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />

        <transformNode
          name="transform-node"
          position={position}
          rotation={rotation}
        >
          <sphere
            name="sphere1"
            diameter={2}
            segments={16}
            position={new Vector3(0, 1, 0)}
          ></sphere>
          <ground
            name="ground1"
            width={6}
            height={6}
            subdivisions={2}
            position={new Vector3(0, 0, 0)}
          />
        </transformNode>
      </Scene>
    </Engine>
  );
}

export const TransformNode = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <WithTransformNode />
  </div>
);
