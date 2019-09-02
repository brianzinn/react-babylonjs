import { LifecycleListener } from "../LifecycleListener";
import { CreatedInstance } from "../CreatedInstance";
export default class TexturesLifecycleListener implements LifecycleListener {
    onParented(parent: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<any>): void;
}
