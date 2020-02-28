import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import {Mesh, TransformNode} from '@babylonjs/core/Meshes'

export default class TransformNodeLifecycleListener implements LifecycleListener<TransformNode> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
    onMount(instance: CreatedInstance<TransformNode>) {/* empty */}
    onUnmount(): void {/* empty */}
}
