import { EventState, Observer } from '@babylonjs/core/Misc/observable.js'
import { Scene } from '@babylonjs/core/scene.js'
import { Camera } from "@babylonjs/core/Cameras/camera.js"
import { Nullable } from '@babylonjs/core/types.js'
import { useContext, useEffect } from 'react'
import { SceneContext } from './scene'

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void
export type OnCameraRenderFn = (eventData: Camera, eventState: EventState) => void

/**
 * Register a callback for before the scene renders.
 *
 * @param callback called using onBeforeRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export const useBeforeRender = (
  callback: OnFrameRenderFn,
  mask?: number,
  insertFirst?: boolean,
  callOnce?: boolean,
  deps: React.DependencyList = []
): void => {
  const { scene } = useContext(SceneContext)

  useEffect(() => {
    if (scene === null) {
      return
    }
    const unregisterOnFirstCall: boolean = callOnce === true
    const sceneObserver: Nullable<Observer<Scene>> = scene.onBeforeRenderObservable.add(
      callback,
      mask,
      insertFirst,
      undefined,
      unregisterOnFirstCall
    )

    if (unregisterOnFirstCall !== true) {
      return () => {
        scene.onBeforeRenderObservable.remove(sceneObserver)
      }
    }
  }, [scene, ...deps])
}

/**
 * Register a callback for after the scene renders.
 *
 * @param callback called using onAfterRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export const useAfterRender = (
  callback: OnFrameRenderFn,
  mask?: number,
  insertFirst?: boolean,
  callOnce?: boolean,
  deps: React.DependencyList = []
): void => {
  const { scene } = useContext(SceneContext)

  useEffect(() => {
    if (scene === null) {
      return
    }

    const unregisterOnFirstCall: boolean = callOnce === true
    const sceneObserver: Nullable<Observer<Scene>> = scene.onAfterRenderObservable.add(
      callback,
      mask,
      insertFirst,
      undefined,
      unregisterOnFirstCall
    )

    if (unregisterOnFirstCall !== true) {
      return () => {
        scene.onAfterRenderObservable.remove(sceneObserver)
      }
    }
  }, [scene, ...deps])
}

/**
 * Register a callback for before the camera renders.
 *
 * @param callback called using useBeforeCameraRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
 export const useBeforeCameraRender = (
	callback: OnCameraRenderFn,
	mask?: number,
	insertFirst?: boolean,
	callOnce?: boolean,
	deps: React.DependencyList = []
  ): void => {
	const { scene } = useContext(SceneContext)

	useEffect(() => {
		if (scene === null) {
			return
		}
		const unregisterOnFirstCall: boolean = callOnce === true
		const sceneObserver: Nullable<Observer<Camera>> = scene.onBeforeCameraRenderObservable.add(
			callback,
			mask,
			insertFirst,
			undefined,
			unregisterOnFirstCall,
		)

		if (unregisterOnFirstCall !== true) {
			return () => {
				scene.onBeforeCameraRenderObservable.remove(sceneObserver)
			}
		}
	}, [scene, ...deps])
}

/**
 * Register a callback for after the scene renders.
 *
 * @param callback called using onAfterCameraRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
 export const useAfterCameraRender = (
	callback: OnCameraRenderFn,
	mask?: number,
	insertFirst?: boolean,
	callOnce?: boolean,
): void => {
	const { scene } = useContext(SceneContext)

	useEffect(() => {
		if (scene === null) {
			return
		}

		const unregisterOnFirstCall: boolean = callOnce === true
		const sceneObserver: Nullable<Observer<Camera>> = scene.onAfterCameraRenderObservable.add(
			callback,
			mask,
			insertFirst,
			undefined,
			unregisterOnFirstCall,
		)

		if (unregisterOnFirstCall !== true) {
			return () => {
				scene.onAfterCameraRenderObservable.remove(sceneObserver)
			}
		}
	})
}
