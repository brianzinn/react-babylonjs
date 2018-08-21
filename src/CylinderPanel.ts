import { Scene, Vector3, TransformNode } from "babylonjs"
import { CylinderPanel as BabylonCylinderPanel, Control3D } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUISceneComponent from "./GUISceneComponent"

export type CylinderPanelProps = {
  margin: number

  // These are volume based, so move to a separate Props when adding other types
  columns: number
  rows: number
  /**
   * The radius property is used to define the radius of the hosting cylinder
   */
  radius: number
  /**
   * ie: Container3D.FACEORIGIN_ORIENTATION is the default.
   */
  orientation: number
  position: Vector3
} & SceneComponentProps<BabylonCylinderPanel>

/**
 *
 */
export default class CylinderPanel extends GUISceneComponent<
  BabylonCylinderPanel,
  BabylonCylinderPanel,
  CylinderPanelProps
> {
  protected cylinderPanel?: BabylonCylinderPanel

  addControl(control: Control3D): void {
    // console.log("adding control to cylinder panel:", control)
    this.cylinderPanel!.addControl(control)
  }

  removeControl(control: Control3D): void {
    // console.log("removing control to cylinder panel:", control)
    this.cylinderPanel!.removeControl(control)
  }

  componentsCreated(): void {
    // not used
  }

  componentWillUnmount() {
    this.props.container.removeControl(this.cylinderPanel)
  }

  create(scene: Scene): BabylonCylinderPanel {
    this.cylinderPanel = new BabylonCylinderPanel()

    // just for now - will be adding Anchor as a dynamic element:
    let anchor = new TransformNode("")
    this.cylinderPanel.linkToTransformNode(anchor)

    if (this.props.position) {
      this.cylinderPanel.position = this.props.position
    } else {
      console.log("targeting 1.5 meters in front of camera as default position")
      this.cylinderPanel.position.z = -1.5
    }

    if (this.props.margin) {
      console.log("setting cylinder panel margin")
      this.cylinderPanel.margin = this.props.margin
    }
    if (this.props.rows) {
      console.log("setting cylinder panel rows")
      this.cylinderPanel.rows = this.props.rows
    }
    if (this.props.columns) {
      console.log("setting cylinder panel columns")
      this.cylinderPanel.columns = this.props.columns
    }
    if (this.props.orientation) {
      console.log("setting cylinder panel orientation")
      this.cylinderPanel.orientation = this.props.orientation
    }

    return this.cylinderPanel
  }

  public get propsHandlers() {
    return []
  }
}
