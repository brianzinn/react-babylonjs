import { PointerEventTypes, PointerInfo } from '@babylonjs/core/Events/pointerEvents.js'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import { Observer } from '@babylonjs/core/Misc/observable.js'
import '@babylonjs/core/Physics/physicsEngineComponent.js'
import { Scene as BabylonScene, SceneOptions } from '@babylonjs/core/scene.js'
import { Nullable } from '@babylonjs/core/types.js'
import React, { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import { CreatedInstance } from './CreatedInstance'
import { FiberScenePropsHandler } from './generatedCode'
import { FiberSceneProps } from './generatedProps'
import {
  EngineCanvasContext,
  EngineCanvasContextType,
  withEngineCanvasContext,
} from './hooks/engine'
import { SceneContext } from './hooks/scene'
import { UpdatePayload } from './PropsHandler'
import { Container } from './ReactBabylonJSHostConfig'
import { createReconciler, ReconcilerInstance } from './render'
import { applyUpdateToInstance } from './UpdateInstance'

export declare type SceneEventArgs = {
  scene: BabylonScene
  canvas: HTMLCanvasElement
}

type SceneProps = {
  engineCanvasContext: EngineCanvasContextType
  onMeshPicked?: (mesh: AbstractMesh, scene: BabylonScene) => void
  onScenePointerDown?: (evt: PointerInfo, scene: BabylonScene) => void
  onScenePointerUp?: (evt: PointerInfo, scene: BabylonScene) => void
  onScenePointerMove?: (evt: PointerInfo, scene: BabylonScene) => void
  /**
   * Called immediately after the Scene is created
   */
  onCreated?: (scene: BabylonScene) => void
  /**
   * Called after props are applied
   */
  onSceneMount?: (sceneEventArgs: SceneEventArgs) => void
  children: React.ReactNode
  sceneOptions?: SceneOptions
} & FiberSceneProps

const updateScene = (
  props: SceneProps,
  prevPropsRef: MutableRefObject<Partial<SceneProps>>,
  scene: CreatedInstance<BabylonScene>,
  propsHandler: FiberScenePropsHandler
) => {
  const prevProps = prevPropsRef.current
  const updates: UpdatePayload = propsHandler.getPropertyUpdates(prevProps, props)

  if (updates !== null) {
    updates.forEach((propertyUpdate) => {
      applyUpdateToInstance(scene, propertyUpdate)
    })
  }
  prevPropsRef.current = props
}

const Scene: React.FC<SceneProps> = (props: SceneProps, context?: any) => {
  const { engine } = useContext(EngineCanvasContext)

  const [propsHandler] = useState(() => new FiberScenePropsHandler())
  const [sceneReady, setSceneReady] = useState(false)
  const [scene, setScene] = useState<Nullable<BabylonScene>>(null)

  // TODO: make this strongly typed
  const reconcilerRef = useRef<Nullable<ReconcilerInstance>>(null)
  const containerRef = useRef<Container | null>(null)

  const prevPropsRef: MutableRefObject<Partial<SceneProps>> = useRef<Partial<SceneProps>>({})

  // initialize babylon scene
  useEffect(
    () => {
      const newScene = new BabylonScene(engine!, props.sceneOptions)

      if (typeof props.onCreated === 'function') {
        props.onCreated(newScene)
      }

      // TODO: try to move the scene to parentComponent in updateContainer
      const container: Container = {
        scene: newScene,
        rootInstance: {
          children: [],
          customProps: {},
          hostInstance: newScene,
          metadata: {
            className: 'root',
          },
          observers: {},
          parent: null,
        },
      }

      // NOTE: in StrictMode will contain props from first render
      prevPropsRef.current = {}
      updateScene(props, prevPropsRef, container.rootInstance, propsHandler)

      const reconciler = createReconciler({})
      reconcilerRef.current = reconciler

      // const onReadyObservable: Nullable<Observer<BabylonJSScene>> = scene.onReadyObservable.add(onSceneReady);
      const sceneIsReady = newScene.isReady()
      if (sceneIsReady) {
        // scene.onReadyObservable.remove(onReadyObservable);
        setSceneReady(true)
      } else {
        console.error('Scene is not ready. Report issue in react-babylonjs repo')
      }

      setScene(newScene)

      const pointerDownObservable: Nullable<Observer<PointerInfo>> =
        newScene.onPointerObservable.add((evt: PointerInfo) => {
          if (typeof props.onScenePointerDown === 'function') {
            props.onScenePointerDown(evt, newScene)
          }

          if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
            const mesh = evt.pickInfo.pickedMesh
            if (typeof props.onMeshPicked === 'function') {
              props.onMeshPicked(mesh, newScene)
            } else {
              // console.log('onMeshPicked not being called')
            }
          }
        }, PointerEventTypes.POINTERDOWN)

      // can only be assigned on init
      let pointerUpObservable: Nullable<Observer<PointerInfo>> = null
      if (typeof props.onScenePointerUp === 'function') {
        pointerUpObservable = newScene.onPointerObservable.add((evt: PointerInfo) => {
          props.onScenePointerUp?.(evt, newScene)
        }, PointerEventTypes.POINTERUP)
      }

      // can only be assigned on init
      let pointerMoveObservable: Nullable<Observer<PointerInfo>> = null
      if (typeof props.onScenePointerMove === 'function') {
        pointerMoveObservable = newScene.onPointerObservable.add((evt: PointerInfo) => {
          props.onScenePointerMove?.(evt, newScene)
        }, PointerEventTypes.POINTERMOVE)
      }

      if (typeof props.onSceneMount === 'function') {
        props.onSceneMount({
          scene: newScene,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          canvas: newScene.getEngine().getRenderingCanvas()!,
        })
        // TODO: console.error if canvas is not attached. runRenderLoop() is expected to be part of onSceneMount().
      }

      const sceneGraph = (
        <SceneContext.Provider
          value={{
            scene: newScene,
            sceneReady: sceneIsReady,
          }}
        >
          {props.children}
        </SceneContext.Provider>
      )

      reconciler.render(
        sceneGraph,
        container,
        () => {
          /* empty for now */
        },
        null
      )
      containerRef.current = container

      return () => {
        if (pointerDownObservable) {
          newScene.onPointerObservable.remove(pointerDownObservable)
        }

        if (pointerUpObservable) {
          newScene.onPointerObservable.remove(pointerUpObservable)
        }

        if (pointerMoveObservable) {
          newScene.onPointerObservable.remove(pointerMoveObservable)
        }

        if (newScene.isDisposed === false) {
          newScene.dispose()
        }

        // clear renderer element
        reconciler.render(
          null,
          containerRef.current!,
          () => {
            /* empty */
          },
          null
        )
        reconcilerRef.current = null
        containerRef.current = null
      }
    },
    [
      /* no deps, so called only on un/mount */
    ]
  )

  // update babylon scene with props
  useEffect(() => {
    const container = containerRef.current
    if (scene === null || container === null) {
      return
    }

    updateScene(props, prevPropsRef, container.rootInstance, propsHandler)

    const sceneGraph = (
      <SceneContext.Provider
        value={{
          scene,
          sceneReady,
        }}
      >
        {props.children}
      </SceneContext.Provider>
    )
    reconcilerRef.current!.render(
      sceneGraph,
      container,
      () => {
        /* ignored */
      },
      null
    )
  })

  return null
}

export default withEngineCanvasContext(Scene)
