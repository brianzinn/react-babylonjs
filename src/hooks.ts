import {MutableRefObject, useContext, useEffect, useRef, useState} from 'react';
import {
  Nullable,
  Observer,
  Scene,
  EventState,
  ActionManager,
  ActionEvent,
  ExecuteCodeAction,
  Mesh,
} from '@babylonjs/core';

import { SceneContext } from './Scene'
import { ICustomPropsHandler, CustomPropsHandler } from './PropsHandler';
import {CreatedInstance} from "./CreatedInstance";

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

export function useAfterRender(callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void {
    const {scene, sceneReady } = useContext(SceneContext);

    useEffect(() => {
        if (sceneReady !== true || scene === null) {
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


export interface EventFunc {
  (ev: ActionEvent): void;
}

/**
 * hover hook
 * TODO: support UI
 * @param over
 * @param out
 */
export function useHover(over?: EventFunc, out?: EventFunc): [MutableRefObject<CreatedInstance<Mesh | null>>, boolean] {
  const [value, setValue] = useState(false);

  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh | null>>;

  useEffect(() => {
    if (ref.current) {
      const mesh = ref.current.hostInstance as Mesh;

      if (!mesh.actionManager) {
        mesh.actionManager = new ActionManager(mesh.getScene());
      }

      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPointerOverTrigger, function (ev) {
            over && over(ev);
            setValue(true);
          }
        )
      );

      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPointerOutTrigger, function (ev) {
            out && out(ev);
            setValue(false);
          }
        )
      );
    }
  }, [ref.current]);
  // todo: if use ref.current as dep,  duplicate register action.

  return [ref, value];
}

/**
 * TODO: support UI
 * @param onClick
 */
export function useClick(onClick: EventFunc): [MutableRefObject<CreatedInstance<Mesh | null>>] {
  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh | null>>;

  useEffect(() => {
    if (ref.current) {
      const mesh = ref.current.hostInstance as Mesh;

      if (!mesh.actionManager) {
        mesh.actionManager = new ActionManager(mesh.getScene());
      }

      mesh.actionManager.registerAction(
        new ExecuteCodeAction(
          ActionManager.OnPickTrigger, function (ev) {
            onClick(ev);
          }
        )
      );
    }
  }, [ref]);
  // todo: if use ref.current as dep,  duplicate register action.

  return [ref];
}
