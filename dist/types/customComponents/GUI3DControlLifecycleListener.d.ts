import { Scene, Nullable } from "babylonjs";
import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
export default class GUI3DControlLifecycleListener implements LifecycleListener {
    private scene;
    constructor(scene: Nullable<Scene>);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
}
