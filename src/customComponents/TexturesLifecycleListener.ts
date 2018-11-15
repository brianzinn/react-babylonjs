import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig"

export default class TexturesLifecycleListener implements LifecycleListeners {
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    let texture = instance.babylonJsObject
    let tmp: CreatedInstance<any> | null = instance.parent
    while (tmp != null) {
      if (tmp.metadata && tmp.metadata.isMaterial === true) {
        console.error(
          "assigning diffuse texture.  Need a property to define which texture to apply",
          texture,
          BABYLON.Texture.SKYBOX_MODE
        )
        tmp.babylonJsObject.reflectionTexture = texture // need a way to assign different textures;
        tmp.babylonJsObject.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
        break
      }
      tmp = tmp.parent
    }
  }
}
