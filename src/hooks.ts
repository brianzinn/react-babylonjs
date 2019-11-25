import { useContext, useEffect } from 'react';
import { Nullable, Observer, Scene, EventState } from '@babylonjs/core';

import { SceneContext } from './Scene'

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void

export function useBeforeRender(callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void {
    const {scene, sceneReady } = useContext(SceneContext);

    useEffect(() => {
        if (sceneReady !== true || scene === null) {
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