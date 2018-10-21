/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { createContext } from 'react'
import { WithEngineContext, withEngine } from './Engine'

type SceneContextType = {
  scene: BABYLON.Scene | null,
  onBeforeRender: (deltaTime: number) => void
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const SceneContext = createContext({
  scene: null,
  onBeforeRender: () => {}
} as SceneContextType)

export const SceneProvider = SceneContext.Provider
export const SceneConsumer = SceneContext.Consumer

interface WithSceneContext {
  scene: BABYLON.Scene | null;
  onBeforeRender?: (deltaTime: number) => void
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withScene<
  P extends { sceneContext?: WithSceneContext },
  R = Omit<P, 'sceneContext'>
  >(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
  ): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <SceneConsumer>
        {ctx => <Component {...props} sceneContext={ctx} />}
      </SceneConsumer>
    );
  };
}

type SceneProps = SceneContextType & WithEngineContext // EngineContextType is assumed by declaration or HOC composition

class Scene extends React.Component<SceneProps, {}> {
    private _scene: BABYLON.Scene | null = null;

    constructor(props: SceneProps) {
      super(props)
      console.log('creating a scene with props:', props);
    }

    componentDidMount () {
      const { engine, scene, onBeforeRender, ...options } = this.props
      
      if (!engine) {
        console.error('You have a scene without an Engine.  \'SceneOnly\' will only work as a child of Engine, use \'Scene\' otherwise.')
      }

      this._scene = new BABYLON.Scene(engine!)
      console.log('Scene', { ...this.props, scene: this._scene })
      Object.keys(options).forEach(o => {
        (this._scene as any)[o] = (options as any)[o]
      })
    }
  
    componentWillUnmount () {
      this._scene!.dispose()
    }
  
    render () {return (
        <SceneProvider value={{ scene: this._scene, onBeforeRender: () => { } }}>
          {React.Children.map(this.props.children,
            (child: any) => {
              if (!child) {
                return null;
              }
      
              return React.cloneElement(child, {
                scene: this._scene
              })
            }
          )}
        </SceneProvider>
      )
    }
  }
  
  export default Scene;
  // for backwards compatibility we export a scene with an Engine.  Engine is only needed with multi-scene.
  // TODO: this should be the default export!
  //export default withEngine(Scene)  