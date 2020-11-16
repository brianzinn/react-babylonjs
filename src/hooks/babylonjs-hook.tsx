import React, { useEffect, useContext, useRef } from 'react';
import { Scene, Nullable, EngineOptions, SceneOptions, EventState, Observer, Camera } from '@babylonjs/core';
import { SceneContext } from './scene';

export type BabylonjsProps = {
    antialias?: boolean
    engineOptions?: EngineOptions
    adaptToDeviceRatio?: boolean
    renderChildrenWhenReady?: boolean
    sceneOptions?: SceneOptions
    onSceneReady: (scene: Scene) => void
    onRender?: (scene: Scene) => void
    id: string
    children?: React.ReactNode
};

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void

/**
 * Register a callback for before the scene renders.
 * 
 * @param callback called using onBeforeRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export const useBeforeRender = (callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void => {
    const { scene } = useContext(SceneContext);

    useEffect(() => {
        if (scene === null) {
            return;
        }

        const unregisterOnFirstCall: boolean = callOnce === true;
        const sceneObserver: Nullable<Observer<Scene>> = scene.onBeforeRenderObservable.add(callback, mask, insertFirst, undefined, unregisterOnFirstCall);

        if (unregisterOnFirstCall !== true) {
            return () => {
                scene.onBeforeRenderObservable.remove(sceneObserver);
            }
        }
    })
}

/**
 * Register a callback for after the scene renders.
 * 
 * @param callback called using onBeforeRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export const useAfterRender = (callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void => {
    const { scene } = useContext(SceneContext);

    useEffect(() => {
        if (scene === null) {
            return;
        }

        const unregisterOnFirstCall: boolean = callOnce === true;
        const sceneObserver: Nullable<Observer<Scene>> = scene.onAfterRenderObservable.add(callback, mask, insertFirst, undefined, unregisterOnFirstCall);

        if (unregisterOnFirstCall !== true) {
            return () => {
                scene.onAfterRenderObservable.remove(sceneObserver);
            }
        }
    })
}

/**
 * Handles creating a camera and attaching/disposing.
 * TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton
 * @param createCameraFn function that creates and returns a camera
 * @param autoAttach Attach the input controls (default true)
 * @param noPreventDefault Events caught by controls should call prevent default
 * @param useCtrlForPanning (ArcRotateCamera only)
 * @param panningMoustButton (ArcRotateCamera only)
 */
export const useCamera = <T extends Camera>(createCameraFn: (scene: Scene) => T, autoAttach: boolean = true, noPreventDefault: boolean = true/*, useCtrlForPanning: boolean = false, panningMouseButton: number*/): Nullable<T> => {
    const { scene } = useContext(SceneContext);
    const cameraRef = useRef<Nullable<T>>(null);

    useEffect(() => {
        if (scene === null) {
            console.warn('cannot create camera (scene not ready)');
            return;
        }

        const camera: T = createCameraFn(scene);
        if (autoAttach === true) {
            const canvas: HTMLCanvasElement = scene.getEngine()!.getRenderingCanvas()!;

            // This attaches the camera to the canvas - adding extra parameters breaks backwards compatibility
            // https://github.com/BabylonJS/Babylon.js/pull/9192 (keep canvas to work with < 4.2 beta-13)
            // TODO: look at parameters of other camera types for attaching - likely need an 'options' parameter instead.
            // if (camera instanceof ArcRotateCamera) {
            //     camera.attachControl(noPreventDefault, useCtrlForPanning, panningMouseButton)
            camera.attachControl(canvas, noPreventDefault);
        }
        cameraRef.current = camera;

        return () => {
            if (autoAttach === true) {
                // canvas is only needed for < 4.1
                const canvas: HTMLCanvasElement = scene.getEngine()!.getRenderingCanvas()!;
                camera.detachControl(canvas);
            }
            camera.dispose();
        }
    }, [scene]);

    return cameraRef.current;
}