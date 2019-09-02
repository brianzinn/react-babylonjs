import { LifecycleListener } from "../LifecycleListener";
import { CreatedInstance } from "../CreatedInstance";
export default class VRExperienceHelperLifecycleListener implements LifecycleListener {
    private props;
    constructor(props: any);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
}
