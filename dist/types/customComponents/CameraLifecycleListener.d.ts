import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene, Nullable } from "babylonjs";
export default class CameraLifecycleListener implements LifecycleListener {
    private props;
    private canvas;
    private scene;
    constructor(scene: Nullable<Scene>, props: any, canvas: HTMLCanvasElement);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
}
