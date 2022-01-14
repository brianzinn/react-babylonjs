import { Space, Vector3 } from "@babylonjs/core/Maths/math";
import { FireProceduralTexture } from "@babylonjs/procedural-textures";
import React, { useCallback } from "react";
import { Engine, Scene, useScene } from "react-babylonjs";
import "../../style.css";

export default { title: "Textures" };

const FireballPlane = () => {
  const scene = useScene();
  const ref = useCallback((node) => {
    if (node !== null) {
      const fireTexture = new FireProceduralTexture("fire", 256, scene);
      const fireMaterial = node;
      fireMaterial.diffuseTexture = fireTexture;
      fireMaterial.opacityTexture = fireTexture;
    }
  }, []);

  return (
    <plane name="fireball" size={20}>
      <standardMaterial
        ref={ref}
        name="fontainSculptur2"
        rotate={[new Vector3(1.0, 1.0, 0.5), Math.PI / 3.0, Space.Local]}
      />
    </plane>
  );
};

/**
 * Insipration Playground: https://www.babylonjs-playground.com/#KM3TC
 */
function WithFireProcedural() {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="Camera"
          target={new Vector3(0, 0, 0)}
          alpha={-2}
          beta={Math.PI / 2}
          radius={12}
          minZ={0.001}
          wheelPrecision={50}
          target={new Vector3(-5, 0, -10)}
        />

        <hemisphericLight name="Light" direction={new Vector3(0, 10, 0)} />

        <FireballPlane />
      </Scene>
    </Engine>
  );
}

export const ProceduralFire = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <WithFireProcedural />
  </div>
);
