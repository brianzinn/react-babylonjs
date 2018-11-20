import { LifecycleListener } from "../LifecycleListener";
import { CreatedInstance } from "../CreatedInstance";

export default class TexturesLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    let texture = instance.hostInstance
    let tmp: CreatedInstance<any> | null = instance.parent

    while (tmp != null) {
      if (tmp.metadata && tmp.metadata.isMaterial === true) {
        console.error(
          "Skybox specific code.  Assigning reflection texture.  Need custom properties to define which texture/coordinatesMode to apply",
          texture,
          BABYLON.Texture.SKYBOX_MODE
        )
        tmp.hostInstance.reflectionTexture = texture // need a way to assign different textures;
        tmp.hostInstance.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
        break
      }
      tmp = tmp.parent
    }
  }
}
