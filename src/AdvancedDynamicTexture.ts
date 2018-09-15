import { Scene } from "babylonjs"
import { Control, AdvancedDynamicTexture as BabylonAdvancedDynamicTexture } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"

import GUI2DSceneComponent from "./GUI2DSceneComponent"

// extends DynamicTexture, not control.
export type AdvancedDynamicTextureProps = {
  height?: number
  width?: number
  /**
   * if the texture must capture move events (true by default)
   */
  supportPointerMove?: boolean
  /**
   * alpha blending will not be used (only alpha testing) (false by default)
   */
  onlyAlphaTesting?: boolean
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
        ? BabylonAdvancedDynamicTexture.CreateForMesh(
            this.props.container.babylonObject,
            this.props.width,
            this.props.height,
            this.props.supportPointerMove,
            this.props.onlyAlphaTesting
          )
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
      /* TODO: create a texture props handler */
    ]
  }
}
