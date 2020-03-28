import React, { useRef, useCallback, useState, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Vector2, Vector3, Color3, PBRMaterial, Mesh } from '@babylonjs/core';
import { render as PixiRender, Text } from '@inlet/react-pixi'
import { Engine, Scene, useBabylonScene, useAfterRender } from '../../../dist/react-babylonjs';
import '../../style.css';

import {postSpectacularGradient, retroGoldGradient} from './pixi-styles';
import {shaderToyMaterial, shaderToyProcText} from './shaders';

export default { title: 'Integrations' };

/**
 * This PIXI demo was copied from a seacloud9 fork + branch of this repo
 * Seacloud9 added storybook, GSAP demo, etc to react-babylonjs.
 * https://github.com/seacloud9/react-babylonjs/tree/pixi-babylonv4.1-alpha-16
 */
function ScenePIXI(props) {
  const beforeMount = useRef(false);
  const pixiRefs = useRef(undefined);
  const scene = useBabylonScene();

  if (beforeMount.current === false) {
    beforeMount.current = true;
    const engine = scene.getEngine();
    const options = {
      autoStart: false,
      clearBeforeRender: false,
      context: engine._gl, // ._gl is public **hidden**
      height: engine.getRenderHeight(),
      // roundPixels: true, available is PIXI < 5.0
      view: engine.getRenderingCanvas(),
      width: engine.getRenderWidth()
    }

    pixiRefs.current = {
      renderer: new PIXI.Renderer(options), // use PIXI.WebGLRender <= PIXI v5.0
      stage: new PIXI.Container()
    }
  }

  console.log('pixi props:', props);
  useEffect(() => {
    const observer = props.onEndRenderLoopObservable.add(engine => {
      engine.wipeCaches(true);
      pixiRefs.current.renderer.reset();
      pixiRefs.current.renderer.render(pixiRefs.current.stage);
    })

    return () => {
      props.onEndRenderLoopObservable.remove(observer);
    }
  })

  // NOTE: this doesn't work - the post effect from shader have effects on PIXI stage
  // useAfterRender((scene) => {
  //   const engine = scene.getEngine();
  // })

  // not "rendering" using a different reconciler!
  PixiRender(
    <>
      {props.children}
    </>
    ,
    pixiRefs.current.stage
  );

  return null;
}

let customProcText;

const onCreatedMirrorBall = (e) => {
  e.position = new Vector3(0, 0, 0);
    // Create materials
  const glass = new PBRMaterial("glass", e._scene);
  glass.reflectionTexture = customProcText;
  glass.refractionTexture = customProcText;
  glass.linkRefractionWithTransparency = true;
  glass.indexOfRefraction = 0.52;
  glass.alpha = 0;
  glass.directIntensity = 0.0;
  glass.environmentIntensity = 0.7;
  glass.cameraExposure = 0.66;
  glass.cameraContrast = 1.66;
  glass.microSurface = 1;
  glass.reflectivityColor = new Color3(0.2, 0.2, 0.2);
  glass.albedoColor = new Color3(0.85, 0.85, 0.85);
  e.material = glass;
}

const onCreatedVaporware = (e) => {
    e.billboardMode = Mesh.BILLBOARDMODE_ALL;
    const customMaterial = shaderToyMaterial(e._scene);
    customProcText = shaderToyProcText(e._scene);
    customProcText.setVector2("resolution", new Vector2(1, 1));
    customMaterial.diffuseTexture = customProcText;
    e.material = customMaterial;
    let time = 0;
    e._scene.registerBeforeRender(() => {
        // falseCam.update();
        time += e._scene.getEngine().getDeltaTime();
        customProcText.setFloat("time", time);
    });
  }

const SceneBabylonJS = (props) => <>
  <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
  <pointLight name='light2' position={new Vector3(0, 5, 0)} diffuse={Color3.FromHexString("#72CDFF")} specular={Color3.FromHexString("#FF00D5")} />
  <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} diffuse={Color3.FromHexString("#D72AEA")} groundColor={Color3.FromHexString("#7528FB")} />
  <plane name='vaporWareSunset' width={40} height={40} onCreated={onCreatedVaporware} />
  <sphere name='mirrorBall' diameter={2} segments={16} position={new Vector3(0, 1, 0)} onCreated={onCreatedMirrorBall} />
</>

const insertCoin = "Insert Coins";
const postText = "P05T 5P3CTACU1AR DEMOSCENE";
let engine = undefined;
export const PIXIStory = () => {
  const [found, setFound] = useState(false);
  const engineRef = useCallback(component => {
    engine = component;
    setFound(true);
  }, []);

  return (
    <div style={{ flex: 1, display: 'flex' }}> 
      <Engine ref={engineRef} antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          <SceneBabylonJS />
          <ScenePIXI onEndRenderLoopObservable={engine?.onEndRenderLoopObservable} found={found}>
            <Text text={insertCoin} x={(window.innerWidth / 2 - ((insertCoin.length / 2) * 40))} y={(window.innerHeight / 2 + 320)} style={retroGoldGradient} />
            <Text text={postText} x={(window.innerWidth / 2 - ((postText.length / 2) * 32))} y={(window.innerHeight / 2 - 320)} style={postSpectacularGradient} />
          </ScenePIXI>
        </Scene>
      </Engine>
    </div>
  )
}

PIXIStory.story = {
  name: 'PIXI'
}