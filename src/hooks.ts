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


export interface EventFunc {
  (ev: ActionEvent): void;
}

export function useHover(over?: EventFunc, out?: EventFunc): [MutableRefObject<CreatedInstance<Mesh|null>>, boolean] {
  const [value, setValue] = useState(false);

  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh|null>>;

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
  }, [ref.current])

  return [ref, value];
}

export function useClick(onClick: EventFunc): [MutableRefObject<CreatedInstance<Mesh|null>>]{
  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh|null>>;

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
  }, [ref.current])

  return [ref];
}
