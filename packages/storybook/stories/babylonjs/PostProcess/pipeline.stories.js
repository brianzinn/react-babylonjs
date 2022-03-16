import { Vector3 } from "@babylonjs/core";
import React from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";

export default { title: "Post Process" };

export const Pipeline = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="Camera1"
          radius={10}
          alpha={0.5 + Math.PI / 2}
          beta={-0.5 + Math.PI / 2}
          target={Vector3.Zero()}
        />
        <hemisphericLight name="light" />
        <box name="test" />
        <defaultRenderingPipeline hdr chromaticAberrationEnabled grainEnabled>
          <chromaticAberrationPostProcess
            assignFrom="chromaticAberration"
            aberrationAmount={-100}
            radialIntensity={0.2}
          />
          <grainPostProcess assignFrom="grain" intensity={20} />
        </defaultRenderingPipeline>
      </Scene>
    </Engine>
  </div>
);
