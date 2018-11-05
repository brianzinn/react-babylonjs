import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig";

export default class GUI3DManagerLifecycleEvents implements LifecycleListeners {
    onParented(parent: CreatedInstance<any>) : void {
        console.log('gui 3d parented', parent);
    }
    onChildAdded(child: CreatedInstance<any>) : void {
        console.log('guid 3d child added', child);
    }
    onMount(instance: CreatedInstance<any>) : void {
        console.log('guid3d mounted', instance);
    }
}