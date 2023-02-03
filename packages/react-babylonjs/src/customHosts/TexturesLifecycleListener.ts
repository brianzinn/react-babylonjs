import { Texture } from '@babylonjs/core/Materials/Textures/texture.js'
import { CreatedInstance } from '../CreatedInstance'
import { assignProperty } from '../helper/property'
import BaseLifecycleListener from './BaseLifecycleListener'

export default class TexturesLifecycleListener extends BaseLifecycleListener<Texture, any> {
  onMount(instance: CreatedInstance<Texture>) {
    const { assignTo } = instance.customProps
    const texture = instance.hostInstance

    let tmp: CreatedInstance<any> | null = instance.parent

    // const parentHostInstance =
    // parent.metadata.className === 'root' ? this.scene : parent.hostInstance

    while (tmp !== null) {
      if (
        tmp.metadata &&
        (tmp.metadata.isMaterial === true ||
          tmp.metadata.className === 'Model' ||
          tmp.metadata.className === 'root' ||
          tmp.metadata.isLayer === true)
      ) {
        if (assignTo) {
          if (tmp.metadata.className === 'root') {
            // textures never have deferred instantiation:
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            assignProperty(texture, texture!.getScene(), assignTo)
          } else {
            assignProperty(texture, tmp.hostInstance, assignTo)
          }
        } else {
          if (tmp.metadata.isLayer === true) {
            continue
          }
          // maybe below case is more common, so let it default
          tmp.hostInstance.diffuseTexture = texture
        }
        break
      }
      tmp = tmp.parent
    }
  }
}
