import { Color3, Vector3 } from "@babylonjs/core";
import "@babylonjs/inspector";
import { render as PixiRender, Text } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Engine, Scene, useScene } from "react-babylonjs";
import { postSpectacularGradient } from "./pixi-demo/pixi-styles";
import "./pixi-demo/shaders"; // side-effect of registering a pixel shader
import Slider from "./pixi-demo/slide";
import state from "./pixi-demo/store";
import "./pixi-demo/styles.css";
export default { title: "Integrations" };

let customProceduralTexture = null;
let time = 0;

function ScenePIXI(props) {
  const beforeMount = useRef(false);
  const pixiRefs = useRef(undefined);
  const scene = useScene();
  scene.clearColor = Color3.FromHexString("#04005E");
  if (beforeMount.current === false) {
    beforeMount.current = true;
    const engine = scene.getEngine();
    scene.debugLayer.show();
    const options = {
      autoStart: false,
      clearBeforeRender: false,
      context: engine._gl, // ._gl is public **hidden**
      height: engine.getRenderHeight(),
      // roundPixels: true, available PIXI < 5.0
      view: engine.getRenderingCanvas(),
      width: engine.getRenderWidth(),
    };

    pixiRefs.current = {
      renderer: new PIXI.Renderer(options), // use PIXI.WebGLRender <= PIXI v5.0
      stage: new PIXI.Container(),
    };
  }

  useEffect(() => {
    // NOTE: to render PIXI in the background (BabylonJS in foreground) do 2 things differently:
    // 1. use onBeforeRenderLoopObservable()
    // 2. scene.autoClear = false;
    const observer = props.onEndRenderLoopObservable.add((engine) => {
      engine.wipeCaches(true);
      const { renderer } = pixiRefs.current;
      renderer.reset();
      renderer.render(pixiRefs.current.stage);
      renderer.reset(); // need to reset again :)
    });

    return () => {
      props.onEndRenderLoopObservable.remove(observer);
    };
  });

  useEffect(() => {
    const observable = scene.onBeforeRenderObservable.add((scene) => {
      if (scene !== null && customProceduralTexture !== null) {
        time += scene.getEngine().getDeltaTime();
        // 'time' is a uniform on the shader
        customProceduralTexture.setFloat("time", time);
      }
    });

    return () => {
      scene.onBeforeRenderObservable.remove(observable);
    };
  });

  // not "rendering" using a different reconciler!
  PixiRender(<>{props.children}</>, pixiRefs.current.stage);

  return null;
}

const SceneBabylonJSSlider = (props) => (
  <>
    <freeCamera
      name="camera1"
      position={new Vector3(0, 5, -10)}
      rotation={new Vector3(0, 0, 0)}
    />
    <hemisphericLight
      name="light1"
      intensity={0.7}
      direction={Vector3.Up()}
      diffuse={Color3.FromHexString("#ffffff")}
      groundColor={Color3.FromHexString("#7528FB")}
    />
    <Slider {...props} />
  </>
);

const postText = "P05T 5P3CTACU1AR DEMOSCENE";
let engine = undefined;

const scrollToArea = (spot) => {
  document.querySelector(".scrollArea").scrollTo({
    top: spot === 0 ? 0 : spot * window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
};

export const PIXIStory = ({ top, mouse }) => {
  const [found, setFound] = useState(false);
  const engineRef = useCallback((component) => {
    engine = component;
    setFound(true);
  }, []);

  const scrollArea = useRef();
  const onScroll = (e) => {
    return e.target && e.target.scrollTop
      ? (state.top.current = e.target.scrollTop)
      : false;
  };
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <Engine ref={engineRef} antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <SceneBabylonJSSlider {...state} />
          <ScenePIXI
            onEndRenderLoopObservable={engine?.onEndRenderLoopObservable}
            found={found}
          >
            <Text
              text={postText}
              x={window.innerWidth / 2 - (postText.length / 2) * 32}
              y={window.innerHeight / 2 - 320}
              style={postSpectacularGradient}
            />
          </ScenePIXI>
        </Scene>
      </Engine>
      <div className="slideContainer">
        Slides:
        <div className="btn" onClick={() => scrollToArea(0)}>
          1
        </div>
        <div className="btn" onClick={() => scrollToArea(1.5)}>
          2
        </div>
        <div className="btn" onClick={() => scrollToArea(2.2)}>
          3
        </div>
        <div className="btn" onClick={() => scrollToArea(3.2)}>
          4
        </div>
        <div className="btn" onClick={() => scrollToArea(4)}>
          5
        </div>
      </div>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </div>
  );
};

PIXIStory.story = {
  name: "PixiJS v5",
};
