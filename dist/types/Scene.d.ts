/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import { WithBabylonJSContext } from './Engine';
import { Scene as BabylonJSScene, Engine as BabylonJSEngine, Nullable, AbstractMesh, PointerInfo, SceneOptions } from 'babylonjs';
export interface WithSceneContext {
    engine: Nullable<BabylonJSEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    scene: Nullable<BabylonJSScene>;
}
export declare type SceneEventArgs = {
    scene: BabylonJSScene;
    canvas: HTMLCanvasElement;
};
export declare const SceneContext: React.Context<WithSceneContext>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withScene<P extends {
    sceneContext: WithSceneContext;
}, R = Omit<P, 'sceneContext'>>(Component: React.ComponentClass<P> | React.StatelessComponent<P>): React.SFC<R>;
declare type SceneProps = {
    babylonJSContext: WithBabylonJSContext;
    onMeshPicked?: (mesh: AbstractMesh, scene: BabylonJSScene) => void;
    onScenePointerDown?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerUp?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerMove?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onSceneMount?: (sceneEventArgs: SceneEventArgs) => void;
    sceneOptions: SceneOptions;
};
declare const _default: React.FunctionComponent<Pick<SceneProps, "onMeshPicked" | "onScenePointerDown" | "onScenePointerUp" | "onScenePointerMove" | "onSceneMount" | "sceneOptions">>;
export default _default;
