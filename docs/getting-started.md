---
id: bsk:getting-started
title: Getting Started ∙ React BabylonJS
---

# Getting Started
Install the npm module into your project.

### How to Install

```sh
$ cd <your-project-dir>
$ npm install react-babylonJS --save
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
    this.scene = null
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