import { Scene } from "babylonjs";
import "babylonjs-loaders";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
export default class ModelLifecycleListener implements LifecycleListener {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
}
