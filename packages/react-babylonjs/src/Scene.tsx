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

  const [propsHandler] = useState(new FiberScenePropsHandler())
  const [sceneReady, setSceneReady] = useState(false)
  const [scene, setScene] = useState<Nullable<BabylonScene>>(null)

  // TODO: make this strongly typed
  const reconcilerRef = useRef<Nullable<ReconcilerInstance>>(null)
  const containerRef = useRef<Container | null>(null)

  const prevPropsRef: MutableRefObject<Partial<SceneProps>> = useRef<Partial<SceneProps>>({})

  // initialize babylon scene
  useEffect(
    () => {
      const scene = new BabylonScene(engine!, props.sceneOptions)
      // const onReadyObservable: Nullable<Observer<BabylonJSScene>> = scene.onReadyObservable.add(onSceneReady);
      const sceneIsReady = scene.isReady()
      if (sceneIsReady) {
        // scene.onReadyObservable.remove(onReadyObservable);
        setSceneReady(true) // this does not flow and cause a re-render
      } else {
        console.error('Scene is not ready. Report issue in react-babylonjs repo')
      }

      setScene(scene)

      // TODO: try to move the scene to parentComponent in updateContainer
      const container: Container = {
        scene: scene,
        rootInstance: {
          children: [],
          customProps: {},
          hostInstance: scene,
          metadata: {
            className: 'root',
          },
          observers: {},
          parent: null,
        },
      }
      updateScene(props, prevPropsRef, container.rootInstance, propsHandler)

      containerRef.current = container

      const reconciler = createReconciler({})
      reconcilerRef.current = reconciler

      const pointerDownObservable: Nullable<Observer<PointerInfo>> = scene.onPointerObservable.add(
        (evt: PointerInfo) => {
          if (typeof props.onScenePointerDown === 'function') {
            props.onScenePointerDown(evt, scene)
          }

          if (evt && evt.pickInfo && evt.pickInfo.hit && evt.pickInfo.pickedMesh) {
            const mesh = evt.pickInfo.pickedMesh
            if (typeof props.onMeshPicked === 'function') {
              props.onMeshPicked(mesh, scene)
            } else {
              // console.log('onMeshPicked not being called')
            }
          }
        },
        PointerEventTypes.POINTERDOWN
      )

      // can only be assigned on init
      let pointerUpObservable: Nullable<Observer<PointerInfo>> = null
      if (typeof props.onScenePointerUp === 'function') {
        pointerUpObservable = scene.onPointerObservable.add((evt: PointerInfo) => {
          props.onScenePointerUp!(evt, scene)
        }, PointerEventTypes.POINTERUP)
      }

      // can only be assigned on init
      let pointerMoveObservable: Nullable<Observer<PointerInfo>> = null
      if (typeof props.onScenePointerMove === 'function') {
        pointerMoveObservable = scene.onPointerObservable.add((evt: PointerInfo) => {
          props.onScenePointerMove!(evt, scene)
        }, PointerEventTypes.POINTERMOVE)
      }

      if (typeof props.onSceneMount === 'function') {
        props.onSceneMount({
          scene: scene,
          canvas: scene.getEngine().getRenderingCanvas()!,
        })
        // TODO: console.error if canvas is not attached. runRenderLoop() is expected to be part of onSceneMount().
      }

      // TODO: change enable physics to 'usePhysics' taking an object with a Vector3 and 'any'.
      // NOTE: must be enabled for updating container (cannot add impostors w/o physics enabled)
      if (Array.isArray(props.enablePhysics)) {
        scene.enablePhysics(props.enablePhysics[0], props.enablePhysics[1])
      }

      const sceneGraph = (
        <SceneContext.Provider
          value={{
            scene,
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

      return () => {
        if (pointerDownObservable) {
          scene.onPointerObservable.remove(pointerDownObservable)
        }

        if (pointerUpObservable) {
          scene.onPointerObservable.remove(pointerUpObservable)
        }

        if (pointerMoveObservable) {
          scene.onPointerObservable.remove(pointerMoveObservable)
        }

        if (scene.isDisposed === false) {
          scene.dispose()
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

  // update babylon scene
  useEffect(() => {
    if (engine === null || scene === null || reconcilerRef.current === null) {
      return
    }

    updateScene(props, prevPropsRef, containerRef.current!.rootInstance, propsHandler)

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
      containerRef.current!,
      () => {
        /* ignored */
      },
      null
    )
  })

  return null
}

export default withEngineCanvasContext(Scene)
