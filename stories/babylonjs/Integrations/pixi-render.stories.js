import React, { useRef, useCallback, useState, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Vector2, Vector3, Color3, Mesh } from '@babylonjs/core';
import { render as PixiRender, Text } from '@inlet/react-pixi'
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs';
import '../../style.css';

import {postSpectacularGradient, retroGoldGradient} from './pixi-styles';
import './shaders'; // side-effect of registering a pixel shader

export default { title: 'Integrations' };

let customProceduralTexture = null;
let time = 0;

/**
 * This PIXI demo was modified (PIXI 5 and more declarative) from a seacloud9 fork + branch of this repo
 * https://github.com/seacloud9/react-babylonjs/tree/pixi-babylonv4.1-alpha-16
 */
function ScenePIXI(props) {
  const beforeMount = useRef(false);
  const pixiRefs = useRef(undefined);
  const scene = useScene();

  if (beforeMount.current === false) {
    beforeMount.current = true;
    const engine = scene.getEngine();
    const options = {
      autoStart: false,
      clearBeforeRender: false,
      context: engine._gl, // ._gl is public **hidden**
      height: engine.getRenderHeight(),
      // roundPixels: true, available PIXI < 5.0
      view: engine.getRenderingCanvas(),
      width: engine.getRenderWidth()
    }

    pixiRefs.current = {
      renderer: new PIXI.Renderer(options), // use PIXI.WebGLRender <= PIXI v5.0
      stage: new PIXI.Container()
    }
  }

  useEffect(() => {
    // NOTE: to render PIXI in the background (BabylonJS in foreground) do 2 things differently:
    // 1. use onBeforeRenderLoopObservable()
    // 2. scene.autoClear = false;
    const observer = props.onEndRenderLoopObservable.add(engine => {
      engine.wipeCaches(true);
      const { renderer } = pixiRefs.current;
      renderer.reset();
      renderer.render(pixiRefs.current.stage);
      renderer.reset(); // need to reset again :)
    })

    return () => {
      props.onEndRenderLoopObservable.remove(observer);
    }
  })

  useEffect(() => {
    const observable = scene.onBeforeRenderObservable.add((scene) => {
      if (scene !== null && customProceduralTexture !== null) {
        time += scene.getEngine().getDeltaTime();
        // 'time' is a uniform on the shader
        customProceduralTexture.setFloat("time", time);
      }
    })

    return () => {
      scene.onBeforeRenderObservable.remove(observable);
    }
  })

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

const onCustomProceduralTextureCreated = (cpt) => {
  customProceduralTexture = cpt; // assigning to reflection/refraction of mirrorball
}

const onMirrorBallMaterialCreated = (mat) => {
  mat.reflectionTexture = customProceduralTexture;
  mat.refractionTexture = customProceduralTexture;
}

const SceneBabylonJS = (props) => <>
  <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[new Vector3(0, 1.0, 1.0)]} />
  <pointLight name='light2' position={new Vector3(0, 5, 0)} diffuse={Color3.FromHexString("#72CDFF")} specular={Color3.FromHexString("#FF00D5")} />
  <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} diffuse={Color3.FromHexString("#D72AEA")} groundColor={Color3.FromHexString("#7528FB")} />
  <plane
    name='vaporWareSunset'
    width={40}
    height={40}
    billboardMode={Mesh.BILLBOARDMODE_ALL}
  >
    <standardMaterial name='shaderMat'>
      <customProceduralTexture
        name='shaderToyTexture'
        texturePath="shaderToy"
        size={512}
        onCreated={onCustomProceduralTextureCreated}
        assignTo='diffuseTexture'
        setVector2={["resolution", new Vector2(1, 1)]}
      />
    </standardMaterial>
  </plane>
  <sphere name='mirrorBall' diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
    <pbrMaterial
      name='glass'
      onCreated={onMirrorBallMaterialCreated}
      linkRefractionWithTransparency
      indexOfRefraction={0.52}
      alpha={0}
      directIntensity={0.0}
      environmentIntensity={0.7}
      cameraExposure={0.66}
      cameraContrast={1.66}
      microSurface={1}
      reflectivityColor={new Color3(0.2, 0.2, 0.2)}
      albedoColor={new Color3(0.85, 0.85, 0.85)}
    />
  </sphere>
</>

const insertCoins = "Insert Coins";
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
            <Text text={insertCoins} x={(window.innerWidth / 2 - ((insertCoins.length / 2) * 40))} y={(window.innerHeight / 2 + 320)} style={retroGoldGradient} />
            <Text text={postText} x={(window.innerWidth / 2 - ((postText.length / 2) * 32))} y={(window.innerHeight / 2 - 320)} style={postSpectacularGradient} />
          </ScenePIXI>
        </Scene>
      </Engine>
    </div>
  )
}

PIXIStory.story = {
  name: 'PixiJS v5'
}