import { Scene, Mesh, CubeTexture, Texture, StandardMaterial } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"

export type SkyboxProps = {
  infiniteDistance?: boolean
  texture: string
  renderingGroupId?: number
} & SceneComponentProps<Mesh>

export default class Skybox extends SceneComponent<Mesh, Mesh, SkyboxProps> {
  private skybox?: Mesh
  private skyboxMaterial?: StandardMaterial
  private lastTexture?: String // texture or dds

  componentsCreated(): void {
    /* ignored */
  }

  componentDidUpdate() {
    if (this.skyboxMaterial && this.props.texture !== this.lastTexture) {
      this.lastTexture = this.props.texture

      // need to re-assign coordinates mode to keep skybox displaying correctly
      this.skyboxMaterial!.reflectionTexture = new CubeTexture(this.props.texture, this.props.scene)
      this.skyboxMaterial!.reflectionTexture!.coordinatesMode = Texture.SKYBOX_MODE
    }
  }

  create(scene: Scene): Mesh {
    const skybox = Mesh.CreateBox("skyBox", 100.0, scene)
    this.skybox = skybox
    const skyboxMaterial = new StandardMaterial("skyBox", scene)

    // assign to local var to recreate cube-textures
    this.skyboxMaterial = skyboxMaterial
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.disableLighting = true
    skybox.material = skyboxMaterial

    // Next, we set the infiniteDistance property. This makes the skybox follow our camera's position.
    skybox.infiniteDistance = this.props.infiniteDistance ? this.props.infiniteDistance : true

    // Now we must remove all light reflections on our box (the sun doesn't reflect on the sky!):
    skyboxMaterial.disableLighting = true

    // Next, we apply our special sky texture to it. This texture must have been prepared to be a skybox, in a dedicated directory, named “skybox” in our example:
    this.lastTexture = this.props.texture
    skyboxMaterial.reflectionTexture = new CubeTexture(this.props.texture, scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE

    // Final note, if you want your skybox to render behind everything else, set the skybox's renderingGroupId to 0, and every other renderable
    // object's renderingGroupId greater than zero, for example:
    if (this.props.renderingGroupId) {
      skybox.renderingGroupId = this.props.renderingGroupId
    }

    return this.skybox!
  }

  public get propsHandlers() {
    return []
  }
}
