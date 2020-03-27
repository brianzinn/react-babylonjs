import { useContext, useEffect } from 'react';
import { Nullable, Observer, Scene, EventState } from '@babylonjs/core';

import { SceneContext } from './Scene'
import { ICustomPropsHandler, CustomPropsHandler } from './PropsHandler';

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

export function useCustomPropsHandler(propsHandler: ICustomPropsHandler<any, any>/*, deps?: React.DependencyList | undefined*/): void {
    // running inside useEffect is too late for initial props
    CustomPropsHandler.RegisterPropsHandler(propsHandler);
    useEffect(() => {
        return () => {
            // console.warn('de-registering on unmount', propsHandler.name);
            CustomPropsHandler.UnregisterPropsHandler(propsHandler);
        }
    }, [])
}
