import { HostConfig } from "react-reconciler";
import * as BABYLON from "babylonjs";
import { CreatedInstance } from "./CreatedInstance";
import { PropertyUpdate, UpdatePayload } from "./PropsHandler";
type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout: number;
};
type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: (() => number);
};
declare global {
    interface Window {
        requestIdleCallback: ((callback: ((deadline: RequestIdleCallbackDeadline) => void), opts?: RequestIdleCallbackOptions) => RequestIdleCallbackHandle);
        cancelIdleCallback: ((handle: RequestIdleCallbackHandle) => void);
    }
}
declare type HostCreatedInstance<T> = CreatedInstance<T> | undefined;
declare type Props = {
    scene: BABYLON.Scene;
} & any;
export declare type Container = {
    engine: BABYLON.Nullable<BABYLON.Engine>;
    canvas: BABYLON.Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    scene: BABYLON.Nullable<BABYLON.Scene>;
    rootInstance: CreatedInstance<any>;
};
declare type HostContext = {} & Container;
declare type TimeoutHandler = number | undefined;
declare type NoTimeout = number;
export declare const applyUpdateToInstance: (hostInstance: any, update: PropertyUpdate, type: string | undefined) => void;
declare const ReactBabylonJSHostConfig: HostConfig<string, Props, Container, HostCreatedInstance<any>, {}, {}, {}, HostContext, UpdatePayload, {}, TimeoutHandler, NoTimeout>;
export default ReactBabylonJSHostConfig;
