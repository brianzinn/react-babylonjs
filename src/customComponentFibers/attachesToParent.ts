import BABYLON from 'babylonjs'
import { CreatedInstance, LifecycleListeners } from '../ReactBabylonJSHostConfig';

export default class AttachesToParentFiber implements LifecycleListeners {

    private _scene: BABYLON.Scene;
    private _engine: BABYLON.Engine;
    private _onParented?: (scene: BABYLON.Scene, engine: BABYLON.Engine, parent: CreatedInstance<any>) => void;

    public constructor(scene: BABYLON.Scene, engine: BABYLON.Engine, props: any) {
        this._scene = scene;
        this._engine = engine;
        if (props.onParented && typeof props.onParented === 'function') {
            this._onParented = props.onParented;
        }
        console.error('created attachesToParentFiber', scene, engine, props.onParented)
    }

    public onParented(parent: CreatedInstance<any> | undefined) {
        if (parent !== undefined && this._onParented !== undefined) {
            console.error('parentFound calling', parent);
            this._onParented(this._scene, this._engine, parent);
        } else {
            console.error('parent found - not calling.');
        }
    }

    public dispose(): void {

    }
}