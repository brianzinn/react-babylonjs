import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { Control } from '@babylonjs/gui/2D/controls/control.js';
import { ICustomPropsHandler, CustomPropsHandler } from '../PropsHandler.js';
import { ActionEvent } from '@babylonjs/core/Actions/actionEvent.js';
import { EventState } from '@babylonjs/core/Misc/observable.js';
import { Mesh } from '@babylonjs/core/Meshes/mesh.js';
import { ActionManager } from '@babylonjs/core/Actions/actionManager.js';
import { Nullable } from '@babylonjs/core/types.js';
import { IAction } from '@babylonjs/core/Actions/action.js';
import { Observer } from '@babylonjs/core/Misc/observable.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions.js';

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
 * NOTE: Supports Mesh and 2D GUI controls only (not 3D GUI).
 * 
 * @param over expression when hover over starts
 * @param out expression when hover stops
 * @param ownRef to re-use a Ref you already have, otherwise one is created for you and returned.
 */
export const useHover = (over?: HoverType, out?: HoverType, ownRef?: MutableRefObject<Mesh | Control | null>): [MutableRefObject<Mesh | Control | null>, boolean] => {
    const [value, setValue] = useState(false);

    const createdRef = useRef<Mesh>(null) as MutableRefObject<Mesh | Control | null>;
    const ref = ownRef ?? createdRef;

    useEffect(() => {
        if (ref.current) {
            const registeredMeshActions: Nullable<IAction>[] = [];
            let observer2dGuiEnter: Nullable<Observer<Control>> = null;
            let observer2dGuiOut: Nullable<Observer<Control>> = null;
            if (ref.current instanceof AbstractMesh) {
                const mesh = ref.current as Mesh;

                if (!mesh.actionManager) {
                    mesh.actionManager = new ActionManager(mesh.getScene());
                }

                const onPointerOverAction: Nullable<IAction> = mesh.actionManager.registerAction(
                    new ExecuteCodeAction(
                        ActionManager.OnPointerOverTrigger, (ev: any) => {
                            over && (over as MeshEventType)(ev);
                            setValue(true);
                        }
                    )
                );

                const onPointerOutAction: Nullable<IAction> = mesh.actionManager.registerAction(
                    new ExecuteCodeAction(
                        ActionManager.OnPointerOutTrigger, (ev: any) => {
                            out && (out as MeshEventType)(ev);
                            setValue(false);
                        }
                    )
                );

                registeredMeshActions.push(onPointerOverAction);
                registeredMeshActions.push(onPointerOutAction);
            } else if (ref.current instanceof Control) {
                const control = ref.current as Control;
                observer2dGuiEnter = control.onPointerEnterObservable.add(over as Gui2dEventType);
                observer2dGuiOut = control.onPointerOutObservable.add(out as Gui2dEventType);
            } else {
                console.warn("Can only apply useHover to non-mesh/2D control currently.", ref.current);
            }

            if (registeredMeshActions.length > 0 || observer2dGuiEnter !== null) {
                return () => {
                    if (ref.current) {
                        if (registeredMeshActions.length > 0) {
                            registeredMeshActions.forEach((action: Nullable<IAction>) => {
                                if (action !== null) {
                                    const mesh = ref.current as Mesh;
                                    mesh.actionManager?.unregisterAction(action);
                                }
                            })
                            registeredMeshActions.splice(0, registeredMeshActions.length)
                        }

                        if (observer2dGuiEnter !== null) {
                            const control = ref.current as Control;
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
 * @param onClick What would be passed in the OnPickTrigger from ActionManager
 * @param ownRef to re-use a Ref you already have, otherwise one is created for you and returned.
 */
export function useClick(onClick: MeshEventType, ownRef?: MutableRefObject<Nullable<Mesh>>): [MutableRefObject<Nullable<Mesh>>] {
    const createdRef = useRef<Nullable<Mesh>>(null);
    const ref = ownRef ?? createdRef;

    useEffect(() => {
        if (ref.current) {
            if (ref.current instanceof AbstractMesh) {
                const mesh = ref.current as Mesh;

                if (!mesh.actionManager) {
                    mesh.actionManager = new ActionManager(mesh.getScene());
                }

                const action: Nullable<IAction> = mesh.actionManager.registerAction(
                    new ExecuteCodeAction(
                        ActionManager.OnPickTrigger, function (ev: any) {
                            onClick(ev);
                        }
                    )
                );
                return () => {
                  // unregister on teardown
                  mesh.actionManager?.unregisterAction(action!);
                }
            } else {
                console.warn('onClick hook only supports referencing Meshes');
            }
        }
    }, [ref]);
    // todo: if use ref.current as dep,  duplicate register action.

    return [ref];
}