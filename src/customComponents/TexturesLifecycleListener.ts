import { LifecycleListener } from "../LifecycleListener"
import { CreatedInstance } from "../CreatedInstance"
import { Texture } from '@babylonjs/core'

export default class TexturesLifecycleListener implements LifecycleListener<Texture> {
  onParented(parent: CreatedInstance<any>) {/* empty */}
  onChildAdded(child: CreatedInstance<any>) {/* empty */}
  onMount(instance: CreatedInstance<Texture>) {
    let texture = instance.hostInstance
    let tmp: CreatedInstance<any> | null = instance.parent

    while (tmp !== null) {
      if (tmp.metadata && tmp.metadata.isMaterial === true) {
        // console.error(
        //   "Skybox specific code.  Assigning reflection texture.  Need custom properties to define which texture/coordinatesMode to apply",
        //   texture,
        //   Texture.SKYBOX_MODE
        // )
        tmp.hostInstance.reflectionTexture = texture // need a way to assign different textures;
        // tmp.hostInstance.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
        break
      }
      tmp = tmp.parent
    }
  }
  onUnmount(): void {/* empty */}
}
