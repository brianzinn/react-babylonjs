import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
export default class MeshLifecycleListener implements LifecycleListener {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<any>): void;
}
