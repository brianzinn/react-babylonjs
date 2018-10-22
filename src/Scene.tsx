/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { createContext } from 'react'
import { WithEngineContext, withEngine } from './Engine'

interface WithSceneContext {
  scene: BABYLON.Nullable<BABYLON.Scene>,
  onBeforeRender: (deltaTime: number) => void
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const SceneContext = createContext<WithSceneContext>({
  scene: null,
  onBeforeRender: () => {}
})

export const SceneProvider = SceneContext.Provider
export const SceneConsumer = SceneContext.Consumer

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

interface SceneProps extends WithSceneContext {
  engineContext: WithEngineContext
}

class Scene extends React.Component<SceneProps, any, any> {
  private _scene: BABYLON.Nullable<BABYLON.Scene> = null;

  constructor(props: SceneProps, context?: any) {
    super(props, context)

    const { engineContext, children, ...options } = this.props
    
    if (!engineContext) {
      // we could try to create one here with existing props (ie: backwards compat?)
      console.error('You are creating a scene without an Engine.  \'SceneOnly\' will only work as a child of Engine, use \'Scene\' otherwise.')
    } else {
      const { engine /*, canvas */ } = engineContext;
      
      this._scene = new BABYLON.Scene(engine!)
      Object.keys(options).forEach(o => {
        console.log('setting scene:', o);
        (this._scene as any)[o] = (options as any)[o]
      })
    }
  }

  componentWillUnmount () {
    console.log("scene will Unmount (disposing babylon scene)")
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

// TODO: export a SceneOnly without engine and have this class create a default engine when not present.

// for backwards compatibility we export a scene with an Engine.  Engine is only needed with multi-scene.
export default withEngine(Scene)