import * as BABYLON from "babylonjs";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
/**
 * This is a host component.  Much like a span or div for ReactDOM.render();
 */
export default class HostWithEventsFiber implements LifecycleListener {
    private _scene;
    private _engine;
    private _hostContextData;
    private _onParented?;
    private _onChildAdded?;
    private _onMount?;
    private _onUnmount?;
    constructor(scene: BABYLON.Scene, engine: BABYLON.Engine, props: any);
    onParented(parent: CreatedInstance<any> | undefined): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<any>): void;
    dispose(): void;
}
