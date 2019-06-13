import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "babylonjs";
export default class AdvancedDynamicTextureLifecycleListener implements LifecycleListener {
    private props;
    private scene;
    constructor(scene: Scene, props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
    addControls(instance: CreatedInstance<any>): void;
    connect(keyboard: CreatedInstance<any>, searchInstance: CreatedInstance<any>, controlNames: string[]): void;
}
