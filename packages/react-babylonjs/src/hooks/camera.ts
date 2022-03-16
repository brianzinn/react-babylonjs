import { Camera } from '@babylonjs/core/Cameras/camera.js'
import { Scene } from '@babylonjs/core/scene.js'
import { Nullable } from '@babylonjs/core/types.js'
import { useContext, useEffect, useRef } from 'react'
import { SceneContext } from './scene'

/**
 * Handles creating a camera and attaching/disposing.
 * TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton
 * @param createCameraFn function that creates and returns a camera
 * @param autoAttach Attach the input controls (default true)
 * @param noPreventDefault Events caught by controls should call prevent default
 * @param useCtrlForPanning (ArcRotateCamera only)
 * @param panningMoustButton (ArcRotateCamera only)
 */
export const useCamera = <T extends Camera>(
  createCameraFn: (scene: Scene) => T,
  autoAttach = true,
  noPreventDefault = true /*, useCtrlForPanning: boolean = false, panningMouseButton: number*/
): Nullable<T> => {
  const { scene } = useContext(SceneContext)
  const cameraRef = useRef<Nullable<T>>(null)

  useEffect(() => {
    if (scene === null) {
      console.warn('cannot create camera (scene not ready)')
      return
    }

    const camera: T = createCameraFn(scene)
    if (autoAttach === true) {
      const canvas: HTMLCanvasElement = scene.getEngine()!.getRenderingCanvas()!

      // This attaches the camera to the canvas - adding extra parameters breaks backwards compatibility
      // https://github.com/BabylonJS/Babylon.js/pull/9192 (keep canvas to work with < 4.2 beta-13)
      // TODO: look at parameters of other camera types for attaching - likely need an 'options' parameter instead.
      // if (camera instanceof ArcRotateCamera) {
      //     camera.attachControl(noPreventDefault, useCtrlForPanning, panningMouseButton)
      camera.attachControl(canvas, noPreventDefault)
    }
    cameraRef.current = camera

    return () => {
      if (autoAttach === true) {
        // canvas is only needed for < 4.1
        const canvas: HTMLCanvasElement = scene.getEngine()!.getRenderingCanvas()!
        camera.detachControl(canvas)
      }
      camera.dispose()
    }
  }, [scene])

  return cameraRef.current
}
