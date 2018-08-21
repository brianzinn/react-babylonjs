import { Scene, Color3, StandardMaterial as BabylonStandardMaterial } from "babylonjs"
import {
  Button3D as BabylonButton3D,
  Control3D,
  Image as BabylonImage,
  TextBlock,
  StackPanel,
  Control
} from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUISceneComponent from "./GUISceneComponent"

export type Button3DProps = {
  text?: string
  fontColor?: Color3 // | string for ie: "white"
  fontSize?: string
  imageUrl?: string
  imageHeight?: number
  imageWidth?: number
  /**
   * By default the buttons have a reddish hue
   */
  diffuseColor?: Color3
  /**
   * By default on hover the button will havea a Red emmissive color attached.  Use this to specify a different color.
   */
  hoverEmmissiveColor?: Color3

  onClick: (button: BabylonButton3D) => void
} & SceneComponentProps<BabylonButton3D>

/**
 *
 */
export default class Button3D extends GUISceneComponent<
  BabylonButton3D,
  BabylonButton3D,
  Button3DProps
> {
  protected button3D?: BabylonButton3D

  addControl(control: Control3D): void {
    console.log("not implemented adding controls to holographic button")
  }

  removeControl(control: Control3D): void {
    throw new Error("Method not implemented.")
  }

  componentsCreated(): void {
    // not used
  }

  componentWillUnmount() {
    this.props.container.removeControl(this.button3D)
  }

  /**
   * The mesh that we would like to set properties on, is created only once the
   *
   * @param button3D button to further initialise
   */
  initComplete(button3D: BabylonButton3D): void {
    if (this.props.diffuseColor) {
      if (button3D.mesh) {
        let material: BabylonStandardMaterial = button3D.mesh.material as BabylonStandardMaterial

        if (material) {
          console.log("applying diffuse:", this.props.diffuseColor)
          material.diffuseColor = this.props.diffuseColor
        } else {
          console.log("no material to apply diffuse on:", button3D)
        }
      }
    }

    if (this.props.hoverEmmissiveColor) {
      if (button3D.mesh) {
        let material: BabylonStandardMaterial = button3D.mesh.material as BabylonStandardMaterial

        button3D.pointerEnterAnimation = () => {
          material.emissiveColor = this.props.hoverEmmissiveColor!
        }

        button3D.pointerOutAnimation = () => {
          material.emissiveColor = BABYLON.Color3.Black()
        }
      }
    }
  }

  create(scene: Scene): BabylonButton3D {
    this.button3D = new BabylonButton3D(this.props.name)

    // console.log("created button", this.props.name)

    let text: TextBlock | undefined = undefined
    let image: BabylonImage | undefined = undefined

    if (this.props.imageUrl) {
      image = new BabylonImage(`${this.props.name}-image`, this.props.imageUrl)
    }

    if (this.props.text) {
      text = new TextBlock()

      text.text = this.props.text
      if (this.props.fontColor) {
        text.color = this.props.fontColor.toHexString()
      } else {
        text.color = "white" // default in BabylonJS
      }

      if (this.props.fontSize) {
        text.fontSize = this.props.fontSize
      } else {
        text.fontSize = 24 // default in BabylonJS
      }
    }

    if (text && image) {
      let stackPanel = new StackPanel()
      stackPanel.background = "#CCCCCC"
      stackPanel.isVertical = true
      stackPanel.height = "256px" // should be = 512 / contentScaleRatio

      image.paddingTop = "10px"

      if (this.props.imageWidth) {
        image.width = this.props.imageWidth
      } else {
        image.width = "180px"
      }
      if (this.props.imageHeight) {
        image.height = this.props.imageHeight
      } else {
        image.height = "180px"
      }
      image.paddingBottom = "10px"

      stackPanel.addControl(image)

      text.height = "56px" // was 30px in Holographic button, but wanted bigger text.

      stackPanel.addControl(text)
      this.button3D.content = stackPanel
    } else if (text) {
      this.button3D.content = text
    } else if (image) {
      // Scale the image to fill the container but maintain aspect ratio. Default is STRETCH_FILL
      image.stretch = BabylonImage.STRETCH_UNIFORM
      image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER
      this.button3D.contentScaleRatio = 1
      this.button3D.content = image
    }

    if (this.props.onClick) {
      // onPointerClickObservable has some issues...
      this.button3D.onPointerDownObservable.add(() => {
        this.props.onClick(this.button3D!)
      })
    }

    return this.button3D
  }

  public get propsHandlers() {
    return []
  }
}
