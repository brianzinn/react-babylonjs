/**
 * React BabylonJS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as React from 'react'

import { PointerEventTypes, Engine, EngineOptions, Scene as BabylonScene, AbstractMesh, Camera, FreeCamera, ArcRotateCamera } from 'babylonjs'
import { registerHandler, removeHandler } from './middleware'

export type SceneEventArgs = {
  scene: BabylonScene,
  canvas: HTMLCanvasElement // | WebGLRenderingContext
};

export interface ComponentContainer {
  onRegisterChild: (child: any) => void
}

/**
 * Note that the height and width are the logical canvas dimensions used for drawing and are different from 
 * the style.height and style.width CSS attributes. If you don't set the CSS attributes, the intrinsic size of the canvas 
 * will be used as its display size; if you do set the CSS attributes, and they differ from the canvas dimensions, your content 
 * will be scaled in the browser. 
 */
export type SceneProps = {
  // TODO: add onKeyDown, onMeshHover, etc.
  /**
   * Called after createCamera(...), if exists.  This must attach a camera to a canvas, if you did not implement a createCamera().
   */
  onSceneMount?: (args: SceneEventArgs) => void,
  /**
   * By implementing this, the camera is attached to the canvas automatically.
   */
  createCamera?: (args: SceneEventArgs) => Camera,
  onSceneBlur?: (args: SceneEventArgs) => void,
  onSceneFocus?: (args: SceneEventArgs) => void,
  onMeshPicked?: (mesh: AbstractMesh, scene: BabylonScene) => void,
  shadersRepository?: string,
  engineOptions?: EngineOptions,
  adaptToDeviceRatio?: boolean,
  width?: number,
  height?: number,
  touchActionNone?: boolean,
  id?: string,
  debug?: boolean
};

export default class Scene extends React.Component<SceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}> implements ComponentContainer {

  private scene?: BabylonScene;
  private engine?: Engine;

  private height?: number | string;
  private width?: number | string;

  private canvas3d?: HTMLCanvasElement ;// | WebGLRenderingContext

  private actionHandler: any;

  constructor(props: SceneProps) {
    super(props);

    this.onRegisterChild = this.onRegisterChild.bind(this);
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  componentDidMount () {
    this.engine = new Engine(this.canvas3d!, true, this.props.engineOptions, this.props.adaptToDeviceRatio);

    // must set shaderRepository before creating engine?  need to pass in as props.
    if (this.props.shadersRepository !== undefined) {
      Engine.ShadersRepository = this.props.shadersRepository;
    }

    let scene = new BabylonScene(this.engine);
    this.scene = scene;
    
    if (this.props.debug === true) {
      this.scene.debugLayer.show();
    }

    //scene.executeWhenReady(() => {
    //});
    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        canvas: this.canvas3d!
      })
      // TODO: console.error if canvas is not attached. runRenderLoop() is expected to be part of onSceneMount().
    } else {
      if (typeof this.props.createCamera === 'function') {
        let camera = this.props.createCamera({
          scene,
          canvas: this.canvas3d!
        });
      } else {
        console.warn('no onSceneMount() or createCamera() defined.  Require camera declaration.')
      }
  
      let engine = this.engine;
      engine.runRenderLoop(() => {
        if (engine.scenes.length === 0) {
          return;
        }

        if (this.canvas3d!.width !== this.canvas3d!.clientWidth) {
            engine.resize();
        }

        var scene = engine.scenes[0];

        if (scene.activeCamera || scene.activeCameras.length > 0) {
            scene.render();
        }
      });
    }

    // TODO: Add other PointerEventTypes and keyDown.
    scene.onPointerObservable.add((evt: BABYLON.PointerInfo) => {
      if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
        let mesh = evt.pickInfo.pickedMesh

        if (typeof this.props.onMeshPicked === 'function') {
          this.props.onMeshPicked(mesh, scene)
        } else {
          // console.log('onMeshPicked not being called')
        }
      }
    }, PointerEventTypes.POINTERDOWN);

    // not having any default handlers anymore in 'react-babylonjs'
    let handlers = new Map<String, (action: { type: String }) => boolean>([]);

    this.actionHandler = (action: {type: string}) => {
      if (handlers.has(action.type)) {
        let handler: ((action: {type: string}) => boolean) | undefined = handlers.get(action.type)
        if (handler !== undefined) {
          return handler(action)
        }
      }
    };

    registerHandler(this.actionHandler);

    this.forceUpdate(() => {
      // console.log('force update completed.')
    });

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount() {
    // unregister from window and babylonJS events
    removeHandler(this.actionHandler);
    window.removeEventListener('resize', this.onResizeWindow);

    if (this.canvas3d) {
      this.canvas3d.removeEventListener('mouseover', this.focus);
      this.canvas3d.removeEventListener('mouseout', this.blur);
    }
  }

  onCanvas3d = (c : HTMLCanvasElement) => {
    if (c !== null) { // null when called from unmountComponent()
      c.addEventListener('mouseover', this.focus)
      c.addEventListener('mouseout', this.blur)

      this.canvas3d = c
    }
    // console.log('onCanvas3d', c)
  }

  /**
   * When canvas receives the active focus (ie: mouse over) intercept keypresses (should be optional behaviour)
   */
  focus = () => {
    document.body.addEventListener('keydown', this.keyPressHandler)

    if (typeof this.props.onSceneFocus === 'function') {
      // console.log('calling onFocus')
      this.props.onSceneFocus({
        scene: this.scene!,
        canvas: this.canvas3d!
      })
    }
  }

  /**
   * When canvas loses focus (ie: mouse out) intercept keypresses (should be optional behaviour)
   */
  blur = () => {
    if (typeof this.props.onSceneBlur === 'function') {
      // console.log('calling onBlur')
      this.props.onSceneBlur({
        scene: this.scene!,
        canvas: this.canvas3d!
      })
    }
    document.body.removeEventListener('keydown', this.keyPressHandler)
  }

  // The scene itself already has a keypress handler.
  // TODO: attach an external handler to Scene handler instead.
  keyPressHandler = (ev: KeyboardEvent) => {
    // console.log('keyPressHandler', ev)
  }

  onRegisterChild(child: any) {
    if(child instanceof FreeCamera || child instanceof ArcRotateCamera) {
      console.log('react-babylonjs: Camera registered.  Attaching to canvas:')
      // TODO: ensure this is only done once - and not using 'instanceof', which is brittle...
      child.attachControl(this.canvas3d!, true);
    } else {
      // console.log(`Attached child to scene: ${child.name}. Not a known camera??`)
    }
  }

  // NOTE: canvas width is in pixels, use style to set % using ID, if needed.
  render () {
    let { touchActionNone, id, width, height, ...rest } = this.props

    let opts: any = {}

    if (touchActionNone === true) {
      opts['touch-action'] = 'none';
    }

    if (width !== undefined && height !== undefined) {
      opts.width = width
      opts.height = height
    }

    if (id) {
      opts.id = id;
    }

    const children = React.Children.map(this.props.children,
      (child: any, index) => React.cloneElement(child, {
        scene: this.scene, index, container: this, registerChild: this.onRegisterChild
      })
     );

    // TODO: passing height/width/style explicitly now will not be predictable.
    return (
        <canvas {...opts} ref={this.onCanvas3d}>
          {children}
        </canvas>
    )
  }
}
