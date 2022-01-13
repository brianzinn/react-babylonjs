import { Vector3 } from "@babylonjs/core/Maths/math";
import { TextWrapping } from "@babylonjs/gui/2D/controls";
import { Control } from "@babylonjs/gui/2D/controls/control";
import React, { useState } from "react";
import { Engine, Scene, useHover } from "react-babylonjs";
import "../../style.css";

export default { title: "Hooks" };

function WithUseHover() {
  const [scaling, setScaling] = useState(new Vector3(1, 1, 1));
  const [ref] = useHover(
    (_) => setScaling(new Vector3(1.5, 1.5, 1.5)),
    (_) => setScaling(new Vector3(1, 1, 1))
  );

  return (
    <sphere
      name="sphere1"
      ref={ref}
      diameter={2}
      segments={32}
      scaling={scaling}
      position={new Vector3(0, 1, 0)}
    ></sphere>
  );
}

const WithUseHoverGui = () => {
  const [color, setColor] = useState("white");
  const [isHovered, setIsHovered] = useState(false);
  const [rectRef] = useHover(
    (_) => {
      setColor("yellow");
      setIsHovered(true);
    },
    (_) => {
      setColor("white");
      setIsHovered(false);
    }
  );

  return (
    <adtFullscreenUi name="ui">
      <stackPanel verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}>
        <rectangle
          ref={rectRef}
          background={color}
          name="rect"
          height="50px"
          width="150px"
        >
          <rectangle>
            <textBlock
              text={isHovered ? "hovered" : "not\nhovered"}
              fontFamily="FontAwesome"
              fontStyle="bold"
              fontSize={20}
              color="black"
              textWrapping={TextWrapping.WordWrap}
            />
          </rectangle>
        </rectangle>
      </stackPanel>
    </adtFullscreenUi>
  );
};

export const UseHoverEvent = () => (
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
        <WithUseHover />
        <WithUseHoverGui />
        <ground name="ground1" width={6} height={6} subdivisions={2} />
      </Scene>
    </Engine>
  </div>
);

UseHoverEvent.story = {
  name: "useHover",
};
