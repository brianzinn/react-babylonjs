import { Scene } from "babylonjs";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
export default class EnvironmentHelperLifecycleListener implements LifecycleListener {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
}
