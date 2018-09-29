import { Scene, Vector3, TransformNode } from "babylonjs"
import { CylinderPanel as BabylonCylinderPanel, Control3D } from "babylonjs-gui"

import { SceneComponentProps, PropsHandler } from "./SceneComponent"
import GUI3DSceneComponent from "./GUI3DSceneComponent"

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

class CylinderPanelPropsHandler implements PropsHandler<BabylonCylinderPanel, CylinderPanelProps> {
  handle(target: BabylonCylinderPanel, props: CylinderPanelProps): void {
    if (props.columns && target) {
      if (!target.columns || target.columns !== props.columns) {
        target.columns = props.columns
      }
    }

    if (props.rows && target) {
      if (!target.rows || target.rows !== props.rows) {
        target.rows = props.rows
      }
    }

    // TODO: radius, orientation, position, margin
  }
}

/**
 *
 */
export default class CylinderPanel extends GUI3DSceneComponent<
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

    if (this.props.margin) {
      // console.log("setting cylinder panel margin")
      this.cylinderPanel.margin = this.props.margin
    }

    if (this.props.orientation) {
      this.cylinderPanel.orientation = this.props.orientation
    }

    if (this.props.radius) {
      this.cylinderPanel.radius = this.props.radius
    }

    return this.cylinderPanel
  }

  /**
   * We don't want to linkToTransformNode(anchor) until after the panel has been added to 3DManager.
   *
   * From docs: When linking a control to a transform node, please make sure that the control was first added to a container or to the root manager.
   *
   * @param cylinderPanel panel to further initialise
   */
  initComplete(cylinderPanel: BabylonCylinderPanel): void {
    // just for now - will be adding Anchor as a dynamic element:
    let anchor = new TransformNode("")

    if (this.props.position) {
      anchor.position = this.props.position
    } else {
      console.log("targeting 1.5 meters in front of camera as default position")
      anchor.position.z = -1.5
    }

    cylinderPanel!.linkToTransformNode(anchor)
  }

  public get propsHandlers() {
    return [new CylinderPanelPropsHandler()]
  }
}
