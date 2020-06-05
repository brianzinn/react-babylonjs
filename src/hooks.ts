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
  IAction,
} from '@babylonjs/core';

import {Control} from '@babylonjs/gui/2D/controls/control';

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

export const useCustomPropsHandler = (propsHandler: ICustomPropsHandler<any, any>/*, deps?: React.DependencyList | undefined*/): void => {
    const firstRun = useRef<boolean>(true);

    if (firstRun.current === true) {
      CustomPropsHandler.RegisterPropsHandler(propsHandler);
      firstRun.current = false;
    }

    useEffect(() => {
      return () => {
        // console.warn('de-registering on unmount', propsHandler.name);
        CustomPropsHandler.UnregisterPropsHandler(propsHandler);
      }
    }, [])
}

export type MeshEventType = {
  (ev: ActionEvent): void
}

export type Gui2dEventType = {
  (eventData: Control, eventState: EventState): void
}

export type HoverType = MeshEventType | Gui2dEventType;

/**
 * useHover hook
 * 
 * TODO: support GUI 3D contols
 *
 * @param over expression when hover over starts
 * @param out expression when hover stops
 */
export const useHover = (over?: HoverType, out?: HoverType): [MutableRefObject<CreatedInstance<Mesh | Control | null>>, boolean] => {
  const [value, setValue] = useState(false);

  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh | Control | null>>;

  useEffect(() => {
    if (ref.current) {
      const registeredMeshActions: Nullable<IAction>[] = [];
      let observer2dGuiEnter: Nullable<Observer<Control>> = null;
      let observer2dGuiOut: Nullable<Observer<Control>> = null;

      if (ref.current.metadata.isMesh === true) {
        const mesh = ref.current.hostInstance as Mesh;

        if (!mesh.actionManager) {
          mesh.actionManager = new ActionManager(mesh.getScene());
        }

        const onPointerOverAction: Nullable<IAction> = mesh.actionManager.registerAction(
          new ExecuteCodeAction(
            ActionManager.OnPointerOverTrigger, (ev) => {
              over && (over as MeshEventType)(ev);
              setValue(true);
            }
          )
        );

        const onPointerOutAction: Nullable<IAction> = mesh.actionManager.registerAction(
          new ExecuteCodeAction(
            ActionManager.OnPointerOutTrigger, (ev) => {
              out && (out as MeshEventType)(ev);
              setValue(false);
            }
          )
        );

        registeredMeshActions.push(onPointerOverAction);
        registeredMeshActions.push(onPointerOutAction);
      } else if (ref.current.metadata.isGUI2DControl === true) {
        const control = ref.current.hostInstance as Control;
        observer2dGuiEnter = control.onPointerEnterObservable.add(over as Gui2dEventType);
        observer2dGuiOut = control.onPointerOutObservable.add(out as Gui2dEventType);
      } else {
        console.warn("Can only apply useHover to non-mesh/2D control currently.", ref.current.metadata);
      }

      if (registeredMeshActions.length > 0 || observer2dGuiEnter !== null) {
        return () => {
          if (ref.current) {
            if (registeredMeshActions.length > 0) {
              registeredMeshActions.forEach((action: Nullable<IAction>) => {
                if (action !== null) {
                  const mesh = ref.current.hostInstance as Mesh;
                  mesh.actionManager?.unregisterAction(action);
                }
              })
              registeredMeshActions.splice(0, registeredMeshActions.length)
            }

            if (observer2dGuiEnter !== null) {
              const control = ref.current.hostInstance as Control;
              control.onPointerEnterObservable.remove(observer2dGuiEnter);
              control.onPointerOutObservable.remove(observer2dGuiOut);
              observer2dGuiEnter = null;
              observer2dGuiOut = null;
            }
          }
        }
      }
    }
  }, [ref.current]);
  // todo: if use ref.current as dep,  duplicate register action.

  return [ref, value];
}

/**
 * useClick hook
 * 
 * TODO: support UI
 * @param onClick
 */
export function useClick(onClick: MeshEventType): [MutableRefObject<CreatedInstance<Mesh | null>>] {
  const ref = useRef<CreatedInstance<Mesh>>(null) as MutableRefObject<CreatedInstance<Mesh | null>>;

  useEffect(() => {
    if (ref.current) {
      if (ref.current.metadata.isMesh === true) {
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
      } else {
        console.warn('onClick hook only supports referencing Meshes');
      }
    }
  }, [ref]);
  // todo: if use ref.current as dep,  duplicate register action.

  return [ref];
}
