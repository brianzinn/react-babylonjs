import React from 'react';
import { Nullable, Engine as BabylonJSEngine, EngineOptions } from 'babylonjs';
export interface WithBabylonJSContext {
    engine: Nullable<BabylonJSEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
}
export declare const BabylonJSContext: React.Context<WithBabylonJSContext>;
export declare const BabylonJSContextConsumer: React.ExoticComponent<React.ConsumerProps<WithBabylonJSContext>>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withBabylonJS<P extends {
    babylonJSContext: WithBabylonJSContext;
}, R = Omit<P, 'babylonJSContext'>>(Component: React.ComponentClass<P> | React.StatelessComponent<P>): React.SFC<R>;
declare type EngineProps = {
    babylonJSContext: WithBabylonJSContext;
    portalCanvas?: HTMLCanvasElement;
    /**
     * true to disable Server Side Rendering
     */
    noSSR?: boolean | React.ReactChild;
    shadersRepository?: string;
    engineOptions?: EngineOptions;
    antialias?: boolean;
    enableOfflineSupport?: boolean;
    adaptToDeviceRatio?: boolean;
    width?: number;
    height?: number;
    canvasStyle?: any;
    /**
     * By default touch-action: 'none' will be on the canvas.  Use this to disable.
     */
    touchActionNone?: boolean;
    /**
     * Useful if you want to attach CSS to the canvas by css #id selector.
     */
    canvasId?: string;
    debug?: boolean;
};
export declare type EngineState = {
    canRender: boolean;
};
declare class Engine extends React.Component<EngineProps, EngineState> {
    private _engine?;
    private _canvas;
    constructor(props: EngineProps);
    componentDidMount(): void;
    onCanvasRef: (c: HTMLCanvasElement) => void;
    componentWillUnmount(): void;
    render(): string | number | React.ReactElement<any> | null;
    onResizeWindow: () => void;
}
export default Engine;
