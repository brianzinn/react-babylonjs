/**
 * React BabylonJS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as React from 'react'

import { PointerEventTypes, Engine, EngineOptions, Scene as BabylonScene, AbstractMesh } from 'babylonjs'
import { registerHandler, removeHandler, DEBUG_ON, DEBUG_OFF } from './middleware'

export type SceneEventArgs = {
  engine: Engine,
  scene: BabylonScene,
  canvas: HTMLElement
}

export type SceneProps = {
  // TODO: add onKeyDown, onMeshHover, etc.
  onSceneMount?: (args: SceneEventArgs) => void,
  width?: number,
  height?: number,
  onBlur?: (args: SceneEventArgs) => void,
  onFocus?: (args: SceneEventArgs) => void,
  onMeshPicked?: (mesh: AbstractMesh, scene: BabylonScene) => void,
  shadersRepository?: string,
  visible?: boolean,
  engineOptions?: EngineOptions,
  adaptToDeviceRatio?: boolean
}

export default class Scene extends React.Component<SceneProps, {}> {

  private scene: BabylonScene
  private engine: Engine

  private height: number
  private width: number

  private canvas3d: HTMLCanvasElement // | WebGLRenderingContext

  private actionHandler: any // TODO: make a strongly typed list.

  constructor (props : SceneProps) {
    super(props)

    this.onCanvas3d = this.onCanvas3d.bind(this) // engine is bound to canvas here.
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.onResizeWindow = this.onResizeWindow.bind(this)
    this.keyPressHandler = this.keyPressHandler.bind(this)

    this.height = props.height || 600
    this.width = props.width || 900
  }

  onResizeWindow () {
    if (this.engine) {
      this.engine.resize()
    }
  }

  componentDidMount () {
    this.engine = new Engine(this.canvas3d, true, this.props.engineOptions, this.props.adaptToDeviceRatio)

    // must set shaderRepository before creating engine?  need to pass in as props.
    if (this.props.shadersRepository !== undefined) {
      Engine.ShadersRepository = this.props.shadersRepository
    }

    // we aliased BABYLON.Scene to BabylonScene
    let scene = new BabylonScene(this.engine)
    this.scene = scene

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
    scene.executeWhenReady(() => {
        // TODO: add a method callback for when Scene is ready.
        // console.error('missing action to create state when scene is first ready')
    })

    // TODO: Add other PointerEventTypes and keyDown.
    scene.onPointerObservable.add((evt) => {
      if (evt.pickInfo.hit && evt.pickInfo.pickedMesh !== undefined) {
        let mesh = evt.pickInfo.pickedMesh

        if (typeof this.props.onMeshPicked === 'function') {
          this.props.onMeshPicked(mesh, scene)
        } else {
          console.log('onMeshPicked not being called')
        }
      }
    }, PointerEventTypes.POINTERDOWN)

    // here we are binding to middleware to receive Redux actions.
    let handlers = {
      [DEBUG_ON]: (action: any) => {
        scene.debugLayer.show()
        return true
      },
      [DEBUG_OFF]: (action: any) => {
        scene.debugLayer.hide()
        return true
      }
    }

    // TODO: 
    this.actionHandler = (action: any) => {
      let handler = handlers[action.type]
      if (handler !== undefined) {
        return handler(action)
      }
    }

    registerHandler(this.actionHandler)

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow)
  }

  componentWillUnmount () {
    // unregister from window and babylonJS events
    // TODO: mouse on/out must be registered and deregestered also.
    removeHandler(this.actionHandler)
    window.removeEventListener('resize', this.onResizeWindow)

    if (this.canvas3d !== null) {
      this.canvas3d.removeEventListener('mouseover', this.focus)

      this.canvas3d.removeEventListener('mouseout', this.blur)
    }
  }

  onCanvas3d (c : HTMLCanvasElement) {
    if (c !== null) { // null when called from unmountComponent()
      // TODO: see if a polyfill should be added here.
      c.addEventListener('mouseover', this.focus)
      c.addEventListener('mouseout', this.blur)

      // console.log('setting canvas3d', c)
      this.canvas3d = c
    }
  }

  /**
   * When canvas receives the active focus (ie: mouse over)
   */
  focus = () => {
    document.body.addEventListener('keydown', this.keyPressHandler)

    if (typeof this.props.onFocus === 'function') {
      // console.log('calling onFocus')
      this.props.onFocus({
        scene: this.scene,
        engine: this.engine,
        canvas: this.canvas3d
      })
    }
  }

  /**
   * When canvas loses focus.
   */
  blur = () => {
    if (typeof this.props.onBlur === 'function') {
      // console.log('calling onBlur')
      this.props.onBlur({
        scene: this.scene,
        engine: this.engine,
        canvas: this.canvas3d
      })
    }
    document.body.removeEventListener('keydown', this.keyPressHandler)
  }

  keyPressHandler = (ev: KeyboardEvent) => {
    console.log('keyPressHandler', ev)
  }

  render () {
    // this.appState = this.props.state
    let { visible } = this.props

    // TODO: full screen?
    return (
      <canvas
        width={this.width}
        height={this.height}
        style={{ visibility: (visible) ? 'visible' : 'hidden' }}
        ref={this.onCanvas3d} />
    )
  }
}
