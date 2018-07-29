# React BabylonJS

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

> React BabylonJS is for integration of BabylonJS into a ReactJS and/or Redux project.

 I will be expanding and fixing this project.  I started as a fun project to integrate the technologies ReactJS, Redux and BabylonJS.  Will happily accept any pull requests as there is lots of room for extra functionality, especially with the new declarative model :)

### Features

&nbsp; &nbsp; ✓ React Scene component to wrap a BabylonJS canvas.<br/>
&nbsp; &nbsp; ✓ Redux middleware to intercept events.<br/>

### Documentation

* [This page plus class documentation](https://brianzinn.github.io/react-babylonJS/).

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
live demo: [default playground declarative](https://brianzinn.github.io/create-react-app-babylonjs/defaultPlayground)

```xml
import { Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'react-babylonjs'
import { Vector3 } from 'babylonjs';

import './Sample1.css'

const DefaultPlayground = () => (
  <Scene id="sample-canvas" debug={true}>
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
```xml
class WithProps extends React.Component 
{
  ...
  render() {
    return (
      <Scene id="sample-canvas">
        <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
        <HemisphericLight name="light1" intensity={this.state.intensity} direction={Vector3.Up()} />
        <Box name="box" size={4} position={new Vector3(0, 1, 0)}>
          <RotateMeshBehaviour radians={this.state.clockwiseChecked ? 0.01 : -0.01} axis={Axis.Y} />
        </Box>
      </Scene>
    )
  }
}
```

## Setting up a React component in your project using onSceneMount().
This is a more advanced scanario and allows more control.  You will need to call engine.runRenderLoop(() => {...}).  I will include an example later using the new createCamera() method that makes this even easier (auto attach to canvas) and also creates a typical runRenderLoop() on the engine for you.
```javascript
// If you import Scene from BabylonJS then make sure to alias one of them.
import { Scene, registerHandler, removeHandler } from 'react-babylonjs'

export default class AdvancedExample extends Component {
    
  constructor(props) {
    super(props)

    // methods used by Scene (more will be added soon and documentation)
    this.onSceneMount = this.onSceneMount.bind(this)
    this.onMeshPicked = this.onMeshPicked.bind(this)
  }

  onMeshPicked(mesh, scene) {
    // This will be called when a mesh is picked in the canvas
  }

  onSceneMount(e) {
        const { canvas, scene, engine} = e

        // Scene to build your environment, Canvas you need to attach your camera.       
        var camera = new ArcRotateCamera("Camera", 0, 1.05, 280, Vector3.Zero(), scene)
        camera.attachControl(canvas)

        // if you want to set the shader directory, use the "shadersRepository" prop.
        var shader = new BABYLON.ShaderMaterial("gradient", scene, "gradient", {})

        // TODO: setup your scene here
        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
  }

  render() {
    return (
      <Scene
          onSceneMount={this.onSceneMount} 
          onMeshPicked={this.onMeshPicked}
          shadersRepository={'/shaders/'}
      />
    )
  }
}
```

# Setting up middleware in your project (optional)...

You can optionally apply the 'react-babylonjs' middleware to monitor redux events.  Use this if you want to synchronise your BabylonJS Scene with ReactJS.

In your top-level component mount/unmount you need to register and deregister your middleware handlers.  The middleware is currently included with babylonjs-react NPM, but I will be splitting to another project.  Will post a full-example here then.

```javascript
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { babylonJSMiddleware } from 'react-babylonjs'

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, babylonJSMiddleware]

  return createStore(
    ...,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
}
```

### Related Projects
* [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs) CRA JavaScript implementation.  GH Pages has examples of typical and declarative usage.
* [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs) CRA TypeScript.  GH Pages has demo.
* [dotnet new + babylonJS](https://github.com/brianzinn/dotnet-new-babylonjs-starter) — "dotnet new react-redux (now included in .NET Core 2.0)" SPA project updated to include BabylonJS and using this project.

---
Made with ♥ by Brian Zinn
