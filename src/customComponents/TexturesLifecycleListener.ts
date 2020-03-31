import { LifecycleListener } from "../LifecycleListener"
import { CreatedInstance } from "../CreatedInstance"
import { Texture } from '@babylonjs/core'
import {assignProperty} from "../helper/property";

export default class TexturesLifecycleListener implements LifecycleListener<Texture> {
  onParented(parent: CreatedInstance<any>) {/* empty */}
  onChildAdded(child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<Texture>) {
    const {assignTo} = instance.customProps;
    const texture = instance.hostInstance;

    let tmp: CreatedInstance<any> | null = instance.parent

    while (tmp !== null) {
      if (tmp.metadata && tmp.metadata.isMaterial === true) {
        if (assignTo) {
          assignProperty(texture, tmp.hostInstance, assignTo);
        } else {
          // maybe below case is more common, so let it default
          tmp.hostInstance.diffuseTexture = texture;
        }
        break
      }
      tmp = tmp.parent
    }
  }
  onUnmount(): void {/* empty */}
}
