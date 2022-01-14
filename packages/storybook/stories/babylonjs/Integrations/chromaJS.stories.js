import { Color3, Vector3 } from "@babylonjs/core";
import { Control } from "@babylonjs/gui";
import chroma, { Color } from "chroma-js";
import React from "react";
import {
  Engine,
  PropChangeType,
  Scene,
  useCustomPropsHandler,
} from "react-babylonjs";
import "../../style.css";

export default { title: "Integrations" };

class ChromajsColor3PropsHandler /* implements ICustomPropsHandler<number[], Color3> */ {
  get name() {
    return "chroma-js:Color3";
  }

  get propChangeType() {
    return PropChangeType.Color3;
  }

  accept(newProp) {
    return (
      (typeof newProp === "string" && chroma.valid(newProp)) ||
      newProp instanceof Color
    );
  }

  process(oldProp, newProp) {
    let newColor;
    // this doesn't work switching from 'string' <==> Color...
    if (typeof newProp === "string") {
      if (oldProp === undefined || oldProp !== newProp) {
        newColor = chroma(newProp).rgb();
      }
    } else {
      if (
        oldProp === undefined ||
        (oldProp instanceof Color && oldProp.hex() !== newProp.hex)
      ) {
        newColor = newProp.rgb();
      }
    }

    return {
      processed: newColor !== undefined,
      value:
        newColor === undefined
          ? null
          : Color3.FromInts(newColor[0], newColor[1], newColor[2]),
    };
  }
}

const SQUARES_PER_CIRCLE = 24;
const INNER_RADIUS = 1.5;

/**
 * Shortest distance (angular) between two angles.
 * It will be in range [0, 180].
 */
const distance = (alpha, beta) => {
  const phi = Math.abs(beta - alpha) % 360; // This is either the distance or 360 - distance
  const distance = phi > 180 ? 360 - phi : phi;
  return distance;
};

/**
 * This is for optimizing animation when first mount application.
 * But this story works well，Animation is smooth。
 */
function WithCustomColors(props) {
  useCustomPropsHandler(new ChromajsColor3PropsHandler());
  const degreeIncrements = 360 / SQUARES_PER_CIRCLE;

  return (
    <>
      <adtFullscreenUi name="ui">
        <rectangle
          height="100%"
          width="220px"
          horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
          verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
        >
          <stackPanel fontSize="14px">
            {props.colors.map((colorName) => {
              const color = chroma(colorName);
              // color.luminance() < 0.25
              const contrastColor = color.get("lab.l") > 45 ? "black" : "white";
              // console.log('checking:', colorName, color.get('lab.l'), color.luminance());
              return (
                <rectangle
                  key={colorName}
                  height="50px"
                  background={color.hex()}
                  color={contrastColor}
                >
                  <textBlock
                    text={colorName}
                    height="40px"
                    color={contrastColor}
                    textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                    paddingTop="10px"
                  />
                </rectangle>
              );
            })}
          </stackPanel>
        </rectangle>
      </adtFullscreenUi>
      {props.colors.map((colorName, colorIndex) => {
        const whiteColorScaleFn = chroma.scale([colorName, "white"]);
        const blackColorScaleFn = chroma.scale([colorName, "black"]);
        const radius = colorIndex * 1.05 + INNER_RADIUS;
        const size =
          0.75 * Math.tan((degreeIncrements * Math.PI) / 180) * radius;

        return [...Array(SQUARES_PER_CIRCLE).keys()].map((positionIndex) => {
          const degrees = positionIndex * degreeIncrements;
          const topDistance = distance(degrees, 270);
          const bottomDistance = distance(degrees, 90);
          const useWhiteColor = topDistance <= 90; // degrees from top > 90°

          const color = useWhiteColor
            ? whiteColorScaleFn(1 - topDistance / 90)
            : blackColorScaleFn((90 - bottomDistance) / 90);

          const angleRads = (degrees * Math.PI) / 180;
          const x = radius * Math.cos(angleRads);
          const z = radius * Math.sin(angleRads);
          return (
            <box
              key={`${colorName}-${colorIndex}-${positionIndex}`}
              size={size}
              name={colorName}
              position={new Vector3(x, colorIndex * 0.5, z)}
              rotation={new Vector3(0, -angleRads, 0)}
            >
              <standardMaterial
                name=""
                diffuseColor={color}
                specularColor={Color3.Black()}
              />
            </box>
          );
        });
      })}
    </>
  );
}

export const ChromaJSProps = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="camera1"
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={20}
          target={Vector3.Zero()}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <WithCustomColors
          colors={[
            "red",
            "orange",
            "purple",
            "hotpink",
            "yellow",
            "chartreuse",
            "olive",
            "turquoise",
            "navy",
          ]}
        />
      </Scene>
    </Engine>
  </div>
);

ChromaJSProps.story = {
  name: "chroma-js",
};
