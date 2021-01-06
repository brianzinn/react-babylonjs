# React BabylonJS
> *'react-babylonjs'* integrates the BabylonJS real time 3D engine with React

`react-babylonjs` lets you build your scene and components using a familiar declarative structure with the benefits you are used to like reusable components and hooks.  Under the hood it's a React renderer providing declarative bindings for the Fiber `react-reconciler`.  Babylon's API is mostly covered thanks to code generation, but also custom props allow you to declaratively add shadows, physics, attach 2D/3D UI to meshes, 3D models, etc.

Fully supports hooks.  Full support for TypeScript with auto-completion on elements and compile time checks.  Context API provides access to Scene/Engine/Canvas without prop drilling.

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

## How to Install
```sh
$ cd <your-project-dir>
$ npm i react-babylonjs @babylonjs/core @babylonjs/gui
```
OR
```sh
$ cd <your-project-dir>
$ yarn add react-babylonjs @babylonjs/core @babylonjs/gui
```

`react-babylonjs` *v2+* uses the **ES6** `@babylonjs/*` NPMs

# Usage Styles
`react-babylonjs` tries to remain unopinionated about how you integrate BabylonJS with React.  This module provides a 100% declarative option and/or you can customise by adding code.

## 100% Declarative add BabylonJS to your project with **zero** code!
With declarative (TSX/JSX) coding and HMR, you experience the same development workflow - ie: save changes in your editor and see them immediately in the browser.  Note in this capture when the light is dimmed that the state changes persist even **after** HMR updates

![BabylonJS HMR](https://raw.githubusercontent.com/brianzinn/react-babylonjs/master/media/react-babylonjs-hmr.gif)

# @babylonjs/core API Support
1. **Node -> Mesh** - abstractMesh, groundMesh, instancedLinesMesh, instancedMesh, linesMesh, mesh, node, transformNode, trailMesh

2. **Cameras** - anaglyphArcRotateCamera, anaglyphFreeCamera, anaglyphGamepadCamera, anaglyphUniversalCamera, arcFollowCamera, arcRotateCamera, camera, deviceOrientationCamera, flyCamera, followCamera, freeCamera, gamepadCamera, stereoscopicArcRotateCamera, stereoscopicFreeCamera, stereoscopicGamepadCamera, stereoscopicUniversalCamera, targetCamera, touchCamera, universalCamera, virtualJoysticksCamera, vrDeviceOrientationArcRotateCamera, vrDeviceOrientationFreeCamera, vrDeviceOrientationGamepadCamera, webVrFreeCamera, webXrCamera

3. **Geometries (meshes)** - box, capsule, cylinder, dashedLines, decal, disc, extrudePolygon, extrudeShape, extrudeShapeCustom, ground, groundFromHeightMap, icoSphere, lathe, lines, lineSystem, plane, babylon-polygon/Polygon, polyhedron, ribbon, sphere, tiledBox, tiledGround, tiledPlane, torus, torusKnot, tube
> note: `babylon-polygon` instead of `polygon` due to JSX conflict with `React.SVGProps<SVGPolygonElement>`

4. **Materials** - backgroundMaterial, fluentMaterial, material, multiMaterial, nodeMaterial, pbrBaseMaterial, pbrBaseSimpleMaterial, pbrMaterial, pbrMetallicRoughnessMaterial, pbrSpecularGlossinessMaterial, pushMaterial, shaderMaterial, standardMaterial

5. **Lights** - directionalLight, hemisphericLight, light, pointLight, shadowLight, spotLight

6. **Textures** - advancedDynamicTexture, baseTexture, colorGradingTexture, cubeTexture, customProceduralTexture, dynamicTexture, equiRectangularCubeTexture, hdrCubeTexture, htmlElementTexture, mirrorTexture, multiRenderTarget, multiviewRenderTarget, noiseProceduralTexture, proceduralTexture, rawCubeTexture, rawTexture, rawTexture2DArray, rawTexture3D, refractionTexture, renderTargetTexture, texture, videoTexture

7. **EffectLayers** - effectLayer, glowLayer, highlightLayer

8. **Behaviors** - autoRotationBehavior, bouncingBehavior, framingBehavior, attachToBoxBehavior, fadeInOutBehavior, multiPointerScaleBehavior, pointerDragBehavior, sixDofDragBehavior

9. **Others** - adtForMesh, adtFullScreenUi, environmentHelper, physicsImpostor, pointsCloudSystem, shadowGenerator, cascadedShadowGenerator, vrExperienceHelper

## @babylonjs/gui
1. GUI3DManager
2. **2D Controls** - scrollViewerWindow, baseSlider, babylon-button/Button, checkbox, colorPicker, container, control, displayGrid, babylon-ellipse/Ellipse, grid, babylon-image/Image, imageBasedSlider, imageScrollBar, inputPassword, inputText, babylon-line/Line, multiLine, radioButton, rectangle, scrollBar, scrollViewer, selectionPanel, slider, stackPanel, textBlock, virtualKeyboard
> note: 'babylon-*' for `button`, `ellipse`, `image` & `line` due to JSX conflict with `React.SVGProps<T>`, otherwise use the ProperCase equivalent, but you miss editor auto-completion.

3. **3D Controls** -  abstractButton3D, button3D, container3D, control3D, cylinderPanel, holographicButton, meshButton3D, planePanel, scatterPanel, spherePanel, stackPanel3D, volumeBasedPanel

## Extensions (new in 2.0)
1. dynamicTerrain

# Examples
live demo: [default playground declarative](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--default-playground)

```jsx
import { Engine, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core';

const DefaultPlayground = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <freeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
      <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
      <ground name="ground1" width={6} height={6} subdivisions={2}  />
    </Scene>
  </Engine>
)

export default DefaultPlayground
```

## Access Scene with a hook.
Due to how switching renderers does not flow context across renderer boundaries (am investigating other ways like memo) the `useScene` hook needs to be declared inside of the `Scene` component.

```jsx
const rpm = 5;
const MovingBox = (props) => {
  // access Babylon Scene object
  const scene = useScene();
  // direct access refs to Babylon objects
  const boxRef = useRef(null);

  // there is also a built-in hook called useBeforeRender/useAfterRender hooks do the same with less code:
  useEffect(() => {
    if (boxRef.current) {
      const handler = scene.registerBeforeRender(() => {
        let deltaTimeInMillis = scene.getEngine().getDeltaTime();
        boxRef.current.rotation[props.rotationAxis] += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
      })
      return (() => {
        scene.unregisterBeforeRender(handler);
      })
    }
  }, [boxRef.current]);

  return (<box ref={boxRef} size={2} position={props.position}>
    <standardMaterial diffuseColor={props.color} specularColor={Color3.Black()} />
  </box>);
}

export const MovingBoxPlayground = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <MovingBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} rotationAxis='y' />
        <MovingBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} rotationAxis='x' />
      </Scene>
    </Engine>
  </div>
)
```

## Hooks, Shadows and Physics (and optionally TypeScript, too)
You can declaratively use many features together - here only the button click handler actually has any code - and we have declarative Physics, GUI, Lighting and Shadows.  demo: [Bouncy demo](https://brianzinn.github.io/react-babylonjs/?path=/story/physics-and-hooks--bouncy-playground-story)
```jsx
import React, { useCallback } from 'react';
/// full code at https://github.com/brianzinn/create-react-app-typescript-babylonjs

const onButtonClicked = () => {
  if (sphere !== null) {
    sphere.physicsImpostor!.applyImpulse(
      Vector3.Up().scale(10), sphere.getAbsolutePosition()
    )
  }
}

const App: React.FC = () => {
  const sphereRef = useCallback(node => {
    sphere = node;
  }, []);

  return (
    <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
      <Scene enablePhysics={[gravityVector, new CannonJSPlugin()]}>
        <arcRotateCamera name="arc" target={ new Vector3(0, 1, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={4} minZ={0.001} wheelPrecision={50} 
          lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2}
        />
        <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
        <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position = {new Vector3(-40, 30, -40)}
          intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
          <shadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32}
            shadowCasters={["sphere1", "dialog"]} forceBackFacesOnly={true} depthScale={100}
          />
        </directionalLight>
        <sphere ref={sphereRef} name="sphere1" diameter={2} segments={16} position={new Vector3(0, 2.5, 0)}>
          <physicsImpostor type={PhysicsImpostor.SphereImpostor} _options={{
              mass: 1,
              restitution: 0.9
          }} />
          <plane name="dialog" size={2} position={new Vector3(0, 1.5, 0)}>
            <advancedDynamicTexture name="dialogTexture" height={1024} width={1024} createForParentMesh={true} hasAlpha={true}>
              <rectangle name="rect-1" height={0.5} width={1} thickness={12} cornerRadius={12}>
                  <rectangle>
                    <babylon-button name="close-icon" background="green" onPointerDownObservable={onButtonClicked} >
                      <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={200} color="white" />
                    </babylon-button>
                  </rectangle>
              </rectangle>
            </advancedDynamicTexture>
          </plane>
        </sphere>
        
        <ground name="ground1" width={10} height={10} subdivisions={2} receiveShadows={true}>
          <physicsImpostor type={PhysicsImpostor.BoxImpostor} _options={{
              mass: 0,
              restitution: 0.9
          }} />
        </ground>
        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
      </Scene>
    </Engine>
  );
}
```

## Major Release History
> v1.0.0 (2018-11-29) - Add code generation, HoC, context provider

> v2.0.1 (2019-10-09) - Switch to @babylonjs/* NPM. Add intrinsic elements, physics and dynamic terrain.

> v2.1.0 (2020-03-21) - NPM distro reduced size has only module.  Add [behaviors](https://brianzinn.github.io/react-babylonjs/?path=/story/behaviors--drag-n-drop), effects (ie: [glow](https://brianzinn.github.io/react-babylonjs/?path=/story/special-fx--glow-layer)), CustomProps (ie: [chroma.js](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--chroma-js-props)).

> v2.2.0 (2020-04-04) - Added support for `react-spring` [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--react-spring)

> v2.2+ ([Changelog](CHANGELOG.md))

> v3.0.0 (2020-01-??) - Lots of pending work on v3 branch and a beta @next.  Some work is on master branch for loading assets and React.Suspense support (follow along in issues #81 and #87).

## Breaking Changes
 > 0.x to 1.0 ([List](breaking-changes-0.x-to-1.0.md))
 
 > 1.x to 2.0 -  Change NPMs from `babylonjs-*` to `@babylonjs/*`.  'Engine' not passed into onSceneMount(e) parameter - use e.scene.getEngine().  Suggest switching to intrinsic elements (camelCase instead of ProperCase).

### Example Projects
* The storybook pages for this project have the source code embedded in the page.
* [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs) CRA JavaScript implementation.  GH Pages has examples of typical and declarative usage some with Redux.
* [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs) CRA 3 TypeScript.

---
## Contributors
Huge shout out to [Konsumer](https://github.com/konsumer) that brought this project to the next level. The ideas and code sandboxes from issue #6 inspired the code generation and HOC + Context API integration.

Thanks to [seacloud9](https://github.com/seacloud9) for adding storybook (and [GSAP demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--gsap-timeline)).  Also for adding [dynamic terrain](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--dynamic-terrain).  Ported a branch of his into a [PIXI demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--pixi-story).

Lots of contributions from [hookex](https://github.com/hookex) :)  Proper texture handling [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/textures--image-texture), Node parenting [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--transform-node) Full Screen GUI [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/gui--gui-full-screen), Effect Layers [glow demo](https://brianzinn.github.io/react-babylonjs/?path=/story/special-fx--glow-layer), behaviors [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/behaviors--pointer-drag-behavior), useHover & useClick [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/hooks--use-hover-event) and react-spring integration [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--react-spring).

[dennemark](https://github.com/dennemark) added Cascaded  Shadow Generator

Made with ♥ by Brian Zinn
