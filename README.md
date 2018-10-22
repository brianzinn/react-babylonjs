# React BabylonJS

Master branch has <strong>big</strong> updates starting 2018-10-22 that does not match latetst NPM release; we are currently working towards a v1.0.0, which will add:
1. react-reconciler (fiber) for custom rendering
2. Much larger BabylonJS API support by code generation `yarn generate-code`
3. Using High Order Components (HOC) as in [recompose](https://github.com/acdlite/recompose) for adding functionality like animations/listeners
4. Context API support, also used by HOCs - so, no need for prop drilling :)
5. Support for multiple scenes

This is largely in part to 2 issues created. #2 which was a request to evaluate react reconciler, but mostly issue #6 created by konsumer, which added Context-API HOC examples and code generation (see the code sandbox playgrounds linked from issue #6!).  All of those changes are now on the master branch.  Future NPMs will start with `1.0.0-alpha.0` and be tagged with `next`.

To use react-babylonjs, please use NPM as usual.  The current NPM is still stable and working with the examples below.

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

> 'react-babylonjs' is for integration of BabylonJS into a ReactJS project.


### Features

&nbsp; &nbsp; ✓ React Scene component to wrap a BabylonJS canvas.<br/>
&nbsp; &nbsp; ✓ Camera (ArcRotate, Free) / Lights (Hemispheric/Directional) components.<br/>
&nbsp; &nbsp; ✓ Skybox, Ground, Plane, Sphere, Box, IcoSphere & StandardMatrial components.<br/>
&nbsp; &nbsp; ✓ 3D: GUIManager, CylinderPanel, Button3D & HolographicButton components.<br/>
&nbsp; &nbsp; ✓ 2D: Rectangle, StackPanel, Button, (Input)Text, AdvancedDynamicTexture, VirtualKeyboard.<br/>
&nbsp; &nbsp; ✓ 3D Models: ie: .glTF, .obj & .stl.<br/>
&nbsp; &nbsp; ✓ VRExperience, Environment.<br/>


### Documentation

* [This page plus class documentation](https://brianzinn.github.io/react-babylonjs/).

# Getting Started
Install the npm module into your project.

### How to Install

```sh
$ cd <your-project-dir>
$ npm install react-babylonjs --save
```
OR
```sh
$ cd <your-project-dir>
$ yarn add react-babylonjs --save
```

# Usage Styles
'react-babylonjs' tries to remain unopinionated about how you integrate BabylonJS with ReactJS.  This module provides a 100% declarative option or you can customise by adding code.
## 100% Declarative add BabylonJS to your project with **zero** code!

If you go with the declarative model, you can use HMR to get the same workflow experience you are used to.  Note when the light is dimmed, that the state changes persist even **after** HMR updates;
![BabylonJS HMR](https://raw.githubusercontent.com/brianzinn/react-babylonjs/master/media/react-babylonjs-hmr.gif)

live demo: [default playground declarative](https://brianzinn.github.io/create-react-app-babylonjs/defaultPlayground)

```jsx
import { Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'react-babylonjs'
import { Vector3 } from 'babylonjs';

import './Sample1.css'

const DefaultPlayground = () => (
  <Scene id="sample-canvas">
    <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
    <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <Sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
    <Ground name="ground1" width={6} height={6} subdivisions={2}  />
  </Scene>
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
      <Scene id="sample-canvas">
        <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
        <HemisphericLight name="light1" intensity={this.state.intensity} direction={Vector3.Up()} />
        <Box name="box" size={4} position={new Vector3(0, 1, 0)}>
          <RotateMeshBehavior radians={this.state.clockwiseChecked ? 0.01 : -0.01} axis={Axis.Y} />
        </Box>
      </Scene>
    )
  }
}
```
## 100% declarative VR and 3D models
OK, code needed for rotating model via interactions, but it's optional

live demo: [VR + 3D model](https://brianzinn.github.io/create-react-app-babylonjs/withVR)

inspiration playground: https://playground.babylonjs.com/#TAFSN0#2

Click on the IcoSpheres to rotate the Ghetto Blaster different directions.  Also, the React HTML buttons can be used, so you can see the prop flow to components.
```jsx
class WithVR extends React.Component
{
  render() {
    return (
      <Scene id="sample-canvas" onMeshPicked={this.onMeshPicked}>
        <ArcRotateCamera name="arc"
          target={ new Vector3(0, 1, 0) }
          alpha={-Math.PI / 2}
          beta={(0.5 + (Math.PI / 4))}
          radius={2}
          minZ={0.001} />

        <DirectionalLight name="dl" direction={new Vector3(0, -0.5, 0.5)} position = {new Vector3(0, 2, 0.5)}>
          <ShadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32} shadowCasters={["counterClockwise", "clockwise", "BoomBox"]} />
        </DirectionalLight>

        <IcoSphere name="counterClockwise" position={new Vector3(-0.5, 1, 0)} radius={0.2} flat={true} subdivisions={1}>
          <StandardMaterial
            diffuseColor={Color3.Yellow()}
            specularColor={Color3.Black()}
          />
          <RotateMeshBehavior radians={0.01} axis={Axis.Y} />
        </IcoSphere>
        <Model
          rotation= {new Vector3(0, this.state.modelRotationY, 0)}
          position={ new Vector3(0, 1, 0)}
          rootUrl = {`${baseUrl}BoomBox/glTF/`}
          sceneFilename="BoomBox.gltf"
          scaling={ new Vector3(20, 20, 20) }
        />
        <IcoSphere name="clockwise" position={new Vector3(0.5, 1, 0)} radius={0.2} flat={true} subdivisions={1}>
          <StandardMaterial
            diffuseColor={Color3.FromInts(255, 165, 0)}
            specularColor={Color3.Black()}
          />
          <RotateMeshBehavior radians={-0.01} axis={Axis.Y} />
        </IcoSphere>
        <VRExperience createDeviceOrientationCamera={false} teleportEnvironmentGround={true} />
        <Environment enableGroundShadow= {true} groundYBias={1} mainColor={Color3.FromHexString("#74b9ff")} />
      </Scene>
    )
  }
}
```

## 100% declarative - Loading 3D models with zero code (optional state/props flow).
You can easily control BabylonJS models as well.  This sample loads 3D models and controls them with buttons.
live demo: [with model](https://brianzinn.github.io/create-react-app-babylonjs/withModel)
```xml
class WithModel extends React.Component 
{
  ...
  render() {
    return (
      <Scene id="sample-canvas">
        <ArcRotateCamera name="camera1" alpha={Math.PI / 2} beta={Math.PI / 2} radius={0.075} target={Vector3.Zero()} minZ={0.001} />
        <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <Model
          position={ new Vector3(0.02, 0, 0)}
          rootUrl = {`${baseUrl}BoomBox/glTF/`}
          sceneFilename="BoomBox.gltf"
        />
      </Scene>
    )
  }
}
```
## Enabling WebVR
To allow your scene to be viewable in VR headsets, you only need to use the **&lt;VRExperience /&gt;** tag
Full example: [With VR](https://brianzinn.github.io/create-react-app-babylonjs/withVR)
```jsx
const WithVR = () => (
  <Scene id="sample-canvas">
    <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
    <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <Box name="box" size={4} position={Vector3.Zero()}>
      <RotateMeshBehavior radians={0.01} axis={Axis.Y} />
    </Box>
    <VRExperience />
  </Scene>
)
```

## 2D UI
Write declaratively your UI structure and let 'react-babylonjs' take care of addControl(), removeControl() and updating based on props/state.
Full example: [with 2D UI](https://brianzinn.github.io/create-react-app-babylonjs/defaultPlayground)
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
This is a more advanced scanario and allows more control.  You will need to call engine.runRenderLoop(() => {...}).  I will include an example later using the new createCamera() method that makes this even easier (auto attach to canvas) and also creates a typical runRenderLoop() on the engine for you.

**Breaking Change**: Older versions passed the Engine in the onSceneMount(e) parameter, in the newer versions, you will need to use scene.getEngine().
```javascript
// If you import Scene from BabylonJS then make sure to alias one of them.
import React, { Component } from 'react'
import { Scene } from 'react-babylonjs'
import { Vector3, ArcRotateCamera, MeshBuilder, HemisphericLight } from 'babylonjs';

export default class NonDeclarative extends Component 
{
  onMeshPicked(mesh) {
    console.log('mesh picked:', mesh)
  }

  onSceneMount(e) {
    const { canvas, scene } = e

    // Scene to build your environment, Canvas you need to attach your camera.       
    var camera = new ArcRotateCamera("Camera", 0, 1.05, 6, Vector3.Zero(), scene)
    camera.attachControl(canvas)

    MeshBuilder.CreateBox('box', { size: 3}, scene)

    new HemisphericLight('light', Vector3.Up(), scene);

    scene.getEngine().runRenderLoop(() => {
        if (scene) {
            scene.render();
        }
    });
}

render() {
  return (
    <Scene
      onMeshPicked={this.onMeshPicked}
      onSceneMount={this.onSceneMount}
    />)
  }
}
```

# Redux middleware (removed in 0.4.3)

To remove dependency on redux have moved the middlware for monitoring redux actions to 'redux-wiretap'.  Useful for synchronizing your BabylonJS Scene with ReactJS outside of props, which do not flow cleanly into your custom code.  Note that the declarative samples above do not generally require this synchronisation mechanism, as the components themselves are aware of the prop/state changes and update their BabylonJS objects automatically.

### Related Projects
* [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs) CRA JavaScript implementation.  GH Pages has examples of typical and declarative usage.
* [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs) CRA TypeScript.  GH Pages has demo.
* [dotnet new + babylonJS](https://github.com/brianzinn/dotnet-new-babylonjs-starter) — "dotnet new react-redux (now included in .NET Core 2.0)" SPA project updated to include BabylonJS and using this project.

---
Made with ♥ by Brian Zinn
