import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene } from "babylonjs";
export default class MaterialsLifecycleListener implements LifecycleListener {
    onCreated(instance: CreatedInstance<any>, scene: Scene): void;
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<any>): void;
}
