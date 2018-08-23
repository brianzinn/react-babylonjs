import { Scene } from "babylonjs"
import { Control, AdvancedDynamicTexture as BabylonAdvancedDynamicTexture } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import { MeshProps } from "./MeshProps"
import GUI2DSceneComponent from "./GUI2DSceneComponent"

// extends DynamicTexture, not control.
export type AdvancedDynamicTextureProps = {
  height?: number
  width?: number
  createForParentMesh: boolean
  generateMipMaps: boolean
  samplingMode: number
} & SceneComponentProps<BabylonAdvancedDynamicTexture>

/**
 * Class used to create texture to support 2D GUI elements
 */
export default class AdvancedDynamicTexture extends GUI2DSceneComponent<
  BabylonAdvancedDynamicTexture,
  BabylonAdvancedDynamicTexture,
  AdvancedDynamicTextureProps
> {
  private advancedDynamicTexture?: BabylonAdvancedDynamicTexture

  addControl(control: Control): void {
    this.advancedDynamicTexture!.addControl(control)
  }
  removeControl(control: Control): void {
    this.advancedDynamicTexture!.removeControl(control)
  }

  componentWillReceiveProps() {
    // not implemented for StackPanel
  }

  create(scene: Scene): BabylonAdvancedDynamicTexture {
    this.advancedDynamicTexture =
      this.props.createForParentMesh === true
        ? BabylonAdvancedDynamicTexture.CreateForMesh(this.props.container.babylonObject)
        : new BabylonAdvancedDynamicTexture(
            this.props.name,
            this.props.width,
            this.props.height,
            scene,
            this.props.generateMipMaps,
            this.props.samplingMode
          )

    return this.advancedDynamicTexture
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [
      /* TODO: create a GUI Container props handler */
    ]
  }
}
