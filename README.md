# React BabylonJS
> 'react-babylonjs' is for integration of BabylonJS into a ReactJS project.

`react-babylonjs` is a `react-reconciler` implementation providing declarative bindings to the BabylonJS 3D Engine.  Custom props allow you to declaratively add shadows, build 2D/3D user interfaces with meshes, etc.

You can also build your own custom 3D controls with functional components. Context API provides access to Scene/Engine/Canvas without prop drilling.

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

## How to Install

```sh
$ cd <your-project-dir>
$ npm install react-babylonjs --save
```
OR
```sh
$ cd <your-project-dir>
$ yarn add react-babylonjs
```

# Usage Styles
`react-babylonjs` tries to remain unopinionated about how you integrate BabylonJS with ReactJS.  This module provides a 100% declarative option and/or you can customise by adding code.
## 100% Declarative add BabylonJS to your project with **zero** code!

With declarative (JSX) coding and HMR, you experience the same development workflow - ie: save changes in your editor and see them immediately in the browser.  Note when the light is dimmed, that the state changes persist even **after** HMR updates

![BabylonJS HMR](https://raw.githubusercontent.com/brianzinn/react-babylonjs/master/media/react-babylonjs-hmr.gif)

# BabylonJS API Support
1. **Node -> Mesh** - Node, TransformNode, AbstractMesh, Mesh

2. **Cameras** - Camera, TargetCamera, ArcRotateCamera, AnaglyphArcRotateCamera, StereoscopicArcRotateCamera, VRDeviceOrientationArcRotateCamera, FlyCamera, FollowCamera, ArcFollowCamera, FreeCamera, DeviceOrientationCamera, VRDeviceOrientationFreeCamera, VRDeviceOrientationGamepadCamera, TouchCamera, UniversalCamera, GamepadCamera, AnaglyphGamepadCamera, StereoscopicGamepadCamera, AnaglyphUniversalCamera, StereoscopicUniversalCamera, VirtualJoysticksCamera, AnaglyphFreeCamera, StereoscopicFreeCamera, WebVRFreeCamera, WebXRCamera

3. **Geometries (meshes)** - Box, Sphere, Disc, IcoSphere, Ribbon, Cylinder, Torus, TorusKnot, LineSystem, Lines, DashedLines, ExtrudeShape, ExtrudeShapeCustom, Lathe, Plane, Ground, TiledGround, GroundFromHeightMap, Polygon, ExtrudePolygon, Tube, Polyhedron, Decal

4. **Materials** - Material, MultiMaterial, PushMaterial, StandardMaterial, BackgroundMaterial, PBRBaseMaterial, PBRBaseSimpleMaterial, PBRMetallicRoughnessMaterial, PBRSpecularGlossinessMaterial, PBRMaterial, ShaderMaterial

5. **Lights** - Light, HemisphericLight, ShadowLight, DirectionalLight, PointLight, SpotLight

6. **2D Controls** - Control, Checkbox, ColorPicker, Container, Ellipse, Grid, StackPanel, VirtualKeyboard, Rectangle, Button, SelectionPanel, Image, InputText, InputPassword, Line, MultiLine, RadioButton, TextBlock, DisplayGrid, BaseSlider, Slider, ImageBasedSlider

7. **3D Controls** - Control3D, AbstractButton3D, Button3D, HolographicButton, MeshButton3D, Container3D, StackPanel3D, VolumeBasedPanel, CylinderPanel, PlanePanel, ScatterPanel, SpherePanel

8. **Textures** - BaseTexture, ColorGradingTexture, CubeTexture, RawCubeTexture, HDRCubeTexture, Texture, DynamicTexture, RawTexture, RawTexture3D, RenderTargetTexture, MirrorTexture, MultiRenderTarget, RefractionTexture, VideoTexture, ProceduralTexture, CustomProceduralTexture, NoiseProceduralTexture

9. **Others** - AdvancedDynamicTexture, GUI3DManager, ShadowGenerator, EnvironmentHelper, VRExperienceHelper

# Examples
live demo: [default playground declarative](https://brianzinn.github.io/create-react-app-babylonjs/defaultPlayground)

```jsx
import { Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'react-babylonjs'
import { Vector3 } from 'babylonjs';

const DefaultPlayground = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
      <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <Sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
      <Ground name="ground1" width={6} height={6} subdivisions={2}  />
    </Scene>
  </Engine>
)

export default DefaultPlayground
```
## 100% declarative with state/props flow.  Code to manage props (or state).
You can easily control BabylonJS properties with state or (redux) props.  This sample uses state to control the light intensity and direction of rotation.
live demo: [with props](https://brianzinn.github.io/create-react-app-babylonjs/withProps)
```jsx
class WithProps extends React.Component 
{
  ...
  render() {
    return (
      <Engine canvasId="sample-canvas">
        <Scene>
          <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
          <HemisphericLight name="light1" intensity={this.state.intensity} direction={Vector3.Up()} />
          <Box name="box" size={4} position={new Vector3(0, 1, 0)}>
            <RotateMeshBehavior radians={this.state.clockwiseChecked ? 0.01 : -0.01} axis={Axis.Y} />
          </Box>
        </Scene>
      </Engine>
    )
  }
}
```
## 100% declarative VR, 3D models and shadows
OK, code needed for rotating model via interactions, but it's optional

live demo: [VR + 3D model](https://brianzinn.github.io/create-react-app-babylonjs/withVR)

inspiration playground: https://playground.babylonjs.com/#TAFSN0#2

Click on the IcoSpheres to rotate the Ghetto Blaster different directions.  Also, the React HTML buttons can be used, so you can see the prop flow to components.
```jsx
class WithVR extends React.Component
{
  render() {
    return (
      <Engine canvasId="sample-canvas">
        <Scene onMeshPicked={this.onMeshPicked}>
          <ArcRotateCamera name="arc" target={new Vector3(0, 1, 0)} minZ={0.001}
            alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))} radius={2} />

          <DirectionalLight name="dl" direction={new Vector3(0, -0.5, 0.5)} position={new Vector3(0, 2, 0.5)}>
            <ShadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32}
              shadowCasters={"counterClockwise", "clockwise", "BoomBox"]} />
          </DirectionalLight>

          <IcoSphere name="counterClockwise" position={new Vector3(-0.5, 1, 0)} radius={0.2} flat={true} subdivisions={1}>
            <StandardMaterial diffuseColor={Color3.Yellow()} specularColor={Color3.Black()} />
            <RotateMeshBehavior radians={0.01} axis={Axis.Y} />
          </IcoSphere>
          <Model
            rotation={new Vector3(0, this.state.modelRotationY, 0)} position={new Vector3(0, 1, 0)}
            rootUrl={`${baseUrl}BoomBox/glTF/`} sceneFilename="BoomBox.gltf"
            scaling={new Vector3(20, 20, 20)}
          />
          ...
          <VRExperience createDeviceOrientationCamera={false} teleportEnvironmentGround={true} />
          <Environment enableGroundShadow= {true} groundYBias={1} mainColor={Color3.FromHexString("#74b9ff")} />
        </Scene>
      </Engine>
    )
  }
}
```

## 100% declarative - Loading 3D models with zero code (optional state/props flow).
You can easily control BabylonJS models as well.  This sample loads 3D models and controls them with buttons.
live demo: [with model](https://brianzinn.github.io/create-react-app-babylonjs/withModel)
```jsx
function WithModel() {
  return (
    <Engine canvasId="sample-canvas">
      <Scene>
        <ArcRotateCamera name="camera1" alpha={Math.PI / 2} beta={Math.PI / 2}
          radius={0.075} target={Vector3.Zero()} minZ={0.001} />
        <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <Model position={ new Vector3(0.02, 0, 0)}
          rootUrl = {`/models/BoomBox/glTF/`} sceneFilename="BoomBox.gltf" />
      </Scene>
    </Engine>
  )
}
```
## Enabling WebVR
To allow your scene to be viewable in VR headsets, you only need to use the **&lt;VRExperienceHelper /&gt;** tag
Full example: [With VR](https://brianzinn.github.io/create-react-app-babylonjs/withVR)
```jsx
const WithVR = () => (
  <Engine canvasId="sample-canvas">
    <Scene>
      <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
      <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
      <Box name="box" size={4} position={Vector3.Zero()}>
        <RotateMeshBehavior radians={0.01} axis={Axis.Y} />
      </Box>
      <VRExperienceHelper webVROptions={ {createDeviceOrientationCamera: false }} />
    </Scene>
  </Engine>
)
```

## 2D UI
Write declaratively your UI structure and let `react-babylonjs` take care of addControl()/removeControl() and updating based on props/state.  You can dynamically add/remove, but use key property if you do.
Full example: [with 2D UI](https://brianzinn.github.io/create-react-app-babylonjs/with2DUI)
```jsx
<Plane>
  <AdvancedDynamicTexture createForParentMesh={true}>
    <Rectangle height="60%" thickness={2} color="#EEEEEE">
      <StackPanel>
        <Text text={`You have clicked on '${this.state.clickedMeshName}' ...`} />
        {this.state.allowedMeshes.map(allowedMesh => (
          <Text key={...} text={'• ' + allowedMesh} color="black" fontSize={28} height="20%" />
        ))}
      </StackPanel>
    </Rectangle>
  </AdvancedDynamicTexture>
</Plane>
```

## Setting up a React component in your project using onSceneMount().
This is a more advanced and typical scanario and allows more control and access to full API of BabylonJS.  You will need to call engine.runRenderLoop(() => {...}).  I will include an example later using the new createCamera() method that makes this even easier (auto attach to canvas) and also creates a typical runRenderLoop() on the engine for you.

**Breaking Change**: Older versions passed the Engine in the onSceneMount(e) parameter, in the newer versions, you will need to use scene.getEngine().

```jsx
// If you import Scene from 'babylonjs' then make sure to alias one of them.
import React, { Component } from 'react'
import { Scene } from 'react-babylonjs'
import { Vector3, ArcRotateCamera, MeshBuilder, HemisphericLight } from 'babylonjs';

function meshPicked(mesh) {
  console.log('mesh picked:', mesh)
}

function onSceneMount(e) {
  const { canvas, scene } = e

  // Scene to build your environment, Canvas you need to attach your camera.       
  var camera = new ArcRotateCamera("Camera", 0, 1.05, 6, Vector3.Zero(), scene)
  camera.attachControl(canvas)

  // setup your scene here
  MeshBuilder.CreateBox('box', { size: 3}, scene)
  new HemisphericLight('light', Vector3.Up(), scene);
  
  scene.getEngine().runRenderLoop(() => {
      if (scene) {
          scene.render();
      }
  });
}

function NonDeclarative() {
  return (
    <Engine canvasId="sample-canvas">
      <Scene onMeshPicked={meshPicked} onSceneMount={onSceneMount} />
    </Engine>
  );
}
```

## Hooks (16.7+)
Hooks are working great, except for adding observables (button onPointerDown).  You can get around that by using a variable with wider scope, but we can work on a proper solution on the observables as well.  demo: [Skybox](https://brianzinn.github.io/create-react-app-babylonjs/withSkybox)
```jsx
function WithHooks() { 
  const [stateIndex, stateFn] = useState(0);
    
  return (
    <div>
      <Engine canvasId="sample-canvas">
        <Scene>
          <HemisphericLight name="hemi-light" intensity={0.7} direction={Vector3.Up()} />
          <Skybox rootUrl={SkyboxScenes[Math.abs(stateIndex) % SkyboxScenes.length].texture} />
          <ArcRotateCamera target={ Vector3.Zero() } radius={10}
            alpha={-Math.PI / 2} beta={(Math.PI / 2)} minZ={0.001} wheelPrecision={50}
          />
        </Scene>
      </Engine>
    </div>
```

## Release History
- Version 1.0.0 (2018-11-29)

## Breaking Changes
[List 0.x to 1.0](breaking-changes-0.x-to-1.0.md)

# Redux middleware (removed in 0.4.3)

To remove dependency on redux have moved the middlware for monitoring redux actions to 'redux-wiretap'.  Useful for synchronizing your BabylonJS Scene with ReactJS outside of props, which do not flow cleanly into your custom code.  Note that the declarative samples above do not generally require this synchronisation mechanism, as the components themselves are aware of the prop/state changes and update their BabylonJS objects automatically.

### Example Projects
* [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs) CRA JavaScript implementation.  GH Pages has examples of typical and declarative usage.
* [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs) CRA TypeScript.  GH Pages has demo.

---
Huge shout out to [Konsumer](https://github.com/konsumer) that brought this project to the next level. The ideas and code sandboxes from issue #6 inspired the code generation and HOC + Context API integration.

Made with ♥ by Brian Zinn
