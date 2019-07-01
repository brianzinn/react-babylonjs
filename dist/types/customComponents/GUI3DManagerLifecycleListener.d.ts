import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "babylonjs";
export default class GUI3DManagerLifecycleListener implements LifecycleListener {
    private scene;
    constructor(scene: Scene);
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<any>): void;
    /**
     * We may have BoundComponents inbetween gui3d controls.
     */
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
}
