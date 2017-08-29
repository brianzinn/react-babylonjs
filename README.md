# React BabylonJS

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

> React BabylonJS is for integration of BabylonJS into a React or Redux project.

At this point more of a proof of concept, but I will be expanding and fixing as I have just started on a project for fun that integrates the technologies React, Redux and BabylonJs.  Will happily accept any pull requests as there is lots of room for extra functionality.

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

### Setting up a React component in your project..

```javascript
// If you import Scene from BabylonJS then make sure to alias one of them.
import { Scene, registerHandler, removeHandler } from 'react-babylonjs'

export default class Quarto extends Component {
    
  constructor(props) {
    super(props)

    // methods used by Scene (more will be added soon and documentation)
    this.onSceneMount = this.onSceneMount.bind(this)
    this.onMeshPicked = this.onMeshPicked.bind(this)

    // these action creators are exported from
    this.debugOn = props.debugOn
    this.debugOff = props.debugOff
    this.debugEnabled = false;
  }

  toggleDebug() {
      if (this.debugEnabled) {
          this.debugOff()
      } else {
          this.debugOn()
      }
      this.debugEnabled = !this.debugEnabled
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
            // run any code here - ie: set state that you monitor in your scene.registerBeforeRender(()=> { ... })
            // change properties or animate meshes.
            return true
        },
        ['YOUR_ACTION_TYPE2']: (action) => {
            return true // indicates to middleware that it was handled
        }
    }

    this.actionHandler = (action) => {
        let handler = handlers[action.type]
        if (handler == undefined) {
            console.log(`no handler defined in babylonJS scene for ${action.type}`)
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
            visible={appState.show3D} />
     
        <Button onClick={this.toggleDebug}>show/hide BabylonJS debug window</Button>
      </div>
    )
  }
}
```

### Setting up middleware in your project...

You need to apply the 'react-babylonjs' middleware to intercept the events, including turning off debug in scene (built-in).

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

* [React Redux BabylonJS Starter Kit](https://github.com/brianzinn/react-redux-babylonjs-starter-kit) — Fork of davesuko starter kit that uses the NPM from this project.  The starter kit uses HMR, ES6, React, Redux and BabylonJS together with a modified Quarto game from http://www.pixelcodr.com/.
* [dotnet new + babylonJS](https://github.com/brianzinn/dotnet-new-babylonjs-starter) — "dotnet new react-redux (now included in .NET Core 2.0)" SPA project updated to include BabylonJS and using this project.

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
Made with ♥ by Brian Zinn
