/**
 * React BabylonJS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react'

import { PointerEventTypes, Engine, Scene as BabylonScene } from 'babylonjs'
import { registerHandler, removeHandler, DEBUG_ON, DEBUG_OFF } from './middleware'

export default class Scene extends Component {

  constructor(props) {
    super(props)

    this.scene = undefined
    this.engine = undefined

    this.onCanvas3d = this.onCanvas3d.bind(this) // engine is bound to canvas here.
    // this.focus = this.focus.bind(this)
    // this.blur = this.blur.bind(this)
    
    this.onResizeWindow = this.onResizeWindow.bind(this)
  }

  onResizeWindow() {
    if (this.engine) {
        this.engine.resize();
    }
  }

  componentDidMount () {
    this.engine = new Engine(this.canvas3d, true);

    // must set shaderRepository before creating engine?  need to pass in as props.
    if (this.props.shadersRepository !== undefined) {
        Engine.ShadersRepository = this.props.shadersRepository;
    }

    // we aliased BABYLON.Scene to BabylonScene
    let scene = new BabylonScene(this.engine);
    
    if (typeof this.props.onSceneMount === 'function') {
        console.log('calling onSceneMount')
        this.props.onSceneMount({
            scene,
            engine: this.engine,
            canvas: this.canvas3d
        })
    } else {
        console.error('onSceneMount function not available')
    }

    // Hide the login screen when the scene is ready
    scene.executeWhenReady(function() {
        // TODO: add a method callback for when Scene is ready.
        //console.error('missing action to create state when scene is first ready')
    });

    // TODO: Add other PointerEventTypes and keyDown.
    scene.onPointerObservable.add ((evt) => {
        if (evt.pickInfo.hit && evt.pickInfo.pickedMesh !== undefined) {
            var mesh = evt.pickInfo.pickedMesh
        
            if (typeof this.props.onMeshPicked === 'function') {
                this.props.onMeshPicked(mesh, scene)
            } else {
                console.log('onMeshPicked not being called')
            }
        }        
    }, PointerEventTypes.POINTERDOWN)

    // here we are binding to middleware to receive Redux actions.
    let handlers = {
        [DEBUG_ON]: (action) => {
            scene.debugLayer.show();
            return true
        },
        [DEBUG_OFF]: (action) => {
            scene.debugLayer.hide();
            return true
        }
    }

    this.actionHandler = (action) => {
        let handler = handlers[action.type]
        if (handler !== undefined) {
            return handler(action)
        }
    }

    registerHandler(this.actionHandler)

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow)
  }

  componentWillUnmount() {
    // unregister from window and babylonJS events
    // TODO: mouse on/out must be registered and deregestered also.
    removeHandler(this.actionHandler)
    window.removeEventListener('resize', this.onResizeWindow)
  }

  onCanvas3d (c) {
    if (c !== null) { // null when called from unmountComponent()
      // c.addEventListener('mouseover', (e) => {
      //   this.focus()
      // })
      // c.addEventListener('mouseout', (e) => {
      //   this.blur()
      // })

      //console.log('setting canvas3d', c)

      this.canvas3d = c
    }
  }

//   focus: function () {
//     document.body.addEventListener('keydown', this.keyPressHandler)
//   },
//   blur: function () {
//     document.body.removeEventListener('keydown', this.keyPressHandler)
//   },

  render() {
    // this.appState = this.props.state
    let { visible } = this.props
            
    return (
        <canvas width={900} height={600} style={{visibility: (visible) ? 'visible' : 'hidden'}} ref={this.onCanvas3d} />
    )
  }
}

Scene.propTypes = {
    // TODO: add onBlur, onFocus, on KeyDown, onMeshHover, etc.
    onSceneMount: React.PropTypes.func.isRequired,
    onMeshPicked: React.PropTypes.func
}