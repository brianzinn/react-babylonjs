import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/inspector";
import React, { useEffect, useRef, useState } from "react";
import { createPortal, Engine, Scene, useBeforeRender } from "react-babylonjs";
import "../../style.css";

export default { title: "Babylon Basic" };

const rpm = 5;

function WithCreatePortal() {
  const transformNodeRef = useRef(null);
  const [_, setReady] = useState(false);

  useBeforeRender((scene) => {
    if (transformNodeRef.current !== null) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      transformNodeRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  useEffect(() => {
    console.log("trigger re-render when transform node is set.");
    setReady(true);
  }, [transformNodeRef.current]);

  return (
    <>
      {transformNodeRef.current &&
        createPortal(
          <box position={new Vector3(0, 1, 0)}>
            <standardMaterial
              diffuseColor={Color3.Blue()}
              specularColor={Color3.Black()}
            />
          </box>,
          transformNodeRef.current["__rb_createdInstance"]
        )}
      <transformNode name="transform-node" ref={transformNodeRef}>
        <ground
          name="ground1"
          width={6}
          height={6}
          subdivisions={2}
          position={new Vector3(0, 0, 0)}
        />
      </transformNode>
    </>
  );
}

export const CreatePortal = () => (
  <div style={{ flex: 1, display: "flex" }}>
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
        <WithCreatePortal />
      </Scene>
    </Engine>
  </div>
);
