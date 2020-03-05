import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Mesh } from '@babylonjs/core/Meshes'
import {EffectLayer} from "@babylonjs/core";

export default class EffectLayerLifecycleListener implements LifecycleListener<EffectLayer> {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
  onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<EffectLayer>) {/* empty */}
  onUnmount(): void {/* empty */}
}
