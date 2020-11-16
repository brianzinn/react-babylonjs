import { LifecycleListener } from "../LifecycleListener"
import { DecoratedInstance } from "../DecoratedInstance"
import { Texture } from '@babylonjs/core'
import { assignProperty } from "../helper/property";

export default class TexturesLifecycleListener implements LifecycleListener<Texture> {
  onParented(parent: DecoratedInstance<any>) {/* empty */}
  onChildAdded(child: DecoratedInstance<any>) {/* empty */}
  onMount(instance: DecoratedInstance<Texture>) {
    const {assignTo} = instance.__rbs.customProps;
    const texture = instance;

    let tmp: DecoratedInstance<unknown> | null = instance.__rbs.parent;

    while (tmp !== null) {
      if (tmp.__rbs.metadata && (tmp.__rbs.metadata.isMaterial === true || tmp.__rbs.metadata.className === 'Model')) {
        if (assignTo) {
          assignProperty(texture, tmp, assignTo);
        } else {
          // maybe below case is more common, so let it default
          (tmp as any).diffuseTexture = texture;
        }
        break
      }
      tmp = tmp.__rbs.parent
    }
  }
  onUnmount(): void {/* empty */}
}
