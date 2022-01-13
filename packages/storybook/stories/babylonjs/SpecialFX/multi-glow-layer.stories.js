import { Color3, Color4, Vector3 } from "@babylonjs/core/Maths/math";
import { Control } from "@babylonjs/gui/2D/controls/control";
import "@babylonjs/inspector";
import React, { useRef } from "react";
import { Engine, Scene, useScene } from "react-babylonjs";
import "../../style.css";
import ScaledModelWithProgress from "../ScaledModelWithProgress";

export default { title: "Special FX" };

/**
 * some inspiration derived from here - would be good to extend this sample with more cubes at least.
 * https://playground.babylonjs.com/#129LNB#16
 */

const onSceneCreated = (scene) => {
  scene.imageProcessingConfiguration.contrast = 1.6;
  scene.imageProcessingConfiguration.exposure = 0.6;
  scene.imageProcessingConfiguration.toneMappingEnabled = true;
};

const Inspector = () => {
  const scene = useScene();
  scene.debugLayer.show();
  return null;
};

const RADIUS = 10;
const NUMBER_OF_BOXES = 20;

/**
 * TODO
 * loading model so slow...
 */
function WithMultiGlowLayer() {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  const onCheckbox1Clicked = (value) => {
    if (glow1Ref.current) {
      glow1Ref.current.isEnabled = value;
    }
  };

  const onCheckbox2Clicked = (value) => {
    if (glow2Ref.current) {
      glow2Ref.current.isEnabled = value;
    }
  };

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene
        clearColor={new Color4(0.02, 0.022, 0.02, 1)}
        onCreated={onSceneCreated}
      >
        <arcRotateCamera
          name="Camera"
          alpha={2.5}
          beta={0.9}
          radius={25}
          lowerRadiusLimit={20}
          upperRadiusLimit={80}
          target={Vector3.Zero()}
          useAutoRotationBehavior
        />

        <hemisphericLight name="hemi" direction={Vector3.Up()} />
        <Inspector />
        <glowLayer
          ref={glow1Ref}
          name="glow1"
          options={{ mainTextureSamples: 4 }}
          intensity={1}
          isEnabled={true}
          addIncludeOnlyChildren
        >
          {Array.from(new Array(NUMBER_OF_BOXES), (_, index) => index).map(
            (x) => (
              <box
                name={`glow-1-box-${x}`}
                key={`glow-1-box-${x}`}
                position={
                  new Vector3(
                    Math.cos(((2 * Math.PI) / NUMBER_OF_BOXES) * x) * RADIUS,
                    1,
                    Math.sin(((2 * Math.PI) / NUMBER_OF_BOXES) * x) * RADIUS
                  )
                }
              >
                <standardMaterial
                  diffuseColor={Color3.Red()}
                  emissiveColor={Color3.Red()}
                />
              </box>
            )
          )}
          <ScaledModelWithProgress
            rootUrl="https://www.babylonjs.com/Assets/NeonPipe/glTF/"
            sceneFilename="NeonPipe.gltf?v=1"
            progressBarColor={Color3.FromInts(255, 165, 0)}
            center={new Vector3(5, 0, 5)}
          />
        </glowLayer>

        <glowLayer
          ref={glow2Ref}
          name="glow2"
          options={{ mainTextureSamples: 4 }}
          intensity={0.4}
          isEnabled={true}
          addIncludeOnlyChildren
        >
          {Array.from(new Array(NUMBER_OF_BOXES), (_, index) => index).map(
            (x) => (
              <box
                name={`glow-2-box-${x}`}
                key={`glow-2-box-${x}`}
                position={
                  new Vector3(
                    Math.cos(((2 * Math.PI) / NUMBER_OF_BOXES) * x) * RADIUS,
                    3,
                    Math.sin(((2 * Math.PI) / NUMBER_OF_BOXES) * x) * RADIUS
                  )
                }
              >
                <standardMaterial
                  diffuseColor={Color3.Green()}
                  emissiveColor={Color3.Green()}
                />
              </box>
            )
          )}
          <ScaledModelWithProgress
            rootUrl="https://www.babylonjs.com/Assets/NeonPipe/glTF/"
            sceneFilename="NeonPipe.gltf?v=2"
            progressBarColor={Color3.FromInts(255, 165, 0)}
            center={new Vector3(-5, 0, -5)}
          />
        </glowLayer>

        <adtFullscreenUi name="ui1">
          <stackPanel
            width="200px"
            height="200px"
            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
          >
            <rectangle height="80px">
              <stackPanel
                paddingLeftInPixels={20}
                width="200px"
                isVertical={false}
                horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
                verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
              >
                <checkbox
                  width="20px"
                  height="20px"
                  isChecked={true}
                  color="green"
                  onIsCheckedChangedObservable={onCheckbox1Clicked}
                />
                <textBlock
                  text="Glow 1 Enabled"
                  width="180px"
                  paddingLeft="5px"
                  color="white"
                  textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                />
              </stackPanel>
            </rectangle>
            <rectangle height="80px">
              <stackPanel
                width="200px"
                paddingLeftInPixels={20}
                isVertical={false}
                horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
                verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
              >
                <checkbox
                  width="20px"
                  height="20px"
                  isChecked={true}
                  color="green"
                  onIsCheckedChangedObservable={onCheckbox2Clicked}
                />
                <textBlock
                  text="Glow 2 Enabled"
                  width="180px"
                  paddingLeft="5px"
                  color="white"
                  textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                />
              </stackPanel>
            </rectangle>
          </stackPanel>
        </adtFullscreenUi>
        <environmentHelper
          options={{
            groundSize: 160,
            skyboxSize: 160,
            sizeAuto: false,
          }}
          setMainColor={[Color3.Gray()]}
        />
      </Scene>
    </Engine>
  );
}

export const MultiGlowLayer = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <WithMultiGlowLayer />
  </div>
);
