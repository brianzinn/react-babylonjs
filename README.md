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

### Adding BabylonJS to your project declaratively
For now to use a different camera (ie: ArcRotate), you can pass in a createCamera() method.
```xml
import { Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'react-babylonjs'
import { Vector3 } from 'babylonjs';

import './Sample1.css'

const Sample1 = () => (
  <Scene id="sample-canvas" debug={true}>
    <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} target={Vector3.Zero()} />
    <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <Sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
    <Ground name="ground1" width={6} height={6} subdivisions={2}  />
  </Scene>
)

export default Sample1
```

### Setting up a React component in your project using onSceneMount().
This is a more advanced scanario.  You will need to call engine.runRenderLoop(() => {...}).
```javascript
// If you import Scene from BabylonJS then make sure to alias one of them.
import { Scene, registerHandler, removeHandler } from 'react-babylonjs'

export default class Quarto extends Component {
    
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

        // if you want to use a shader, pass in the directory to the component.
        var shader = new BABYLON.ShaderMaterial("gradient", scene, "gradient", {})

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
  }

  componentDidMount () {
    // you can add listeners to redux actions - they are intercepted by the middleware
    let handlers = {
        ['YOUR_ACTION_TYPE']: (action) => {
            // change properties or animate meshes.
            return true
        },
        ['YOUR_ACTION_TYPE2']: (action) => {
            // indicates to middleware that it was handled
            return true
        }
    }

    this.actionHandler = (action) => {
        let handler = handlers[action.type]
        if (handler == undefined) {
            // console.console.log(`no handler defined in babylonJS scene for ${action.type}`)
        } else {
            return handler(action)
        }
    }

    registerHandler(this.actionHandler)
  }

  componentWillUnmount() {
    removeHandler(this.actionHandler)
  }

  render() {
 
    const { appState } = this.props

    return (
      <div>
        <Scene
            onSceneMount={this.onSceneMount} 
            onMeshPicked={this.onMeshPicked}
            shadersRepository={'/shaders/'}
        />
      </div>
    )
  }
}
```

### Setting up middleware in your project (optional)...

You need to apply the 'react-babylonjs' middleware to intercept the events.  Use this if you want to synchronise your BabylonJS Scene with ReactJS.

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
