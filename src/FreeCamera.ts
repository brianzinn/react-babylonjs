import { Scene, FreeCamera as BabylonFreeCamera, Camera, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import CameraPropsHandler, { CameraProps } from "./CameraProps"

export type FreeCameraProps = {
  position?: BABYLON.Vector3
  x?: number
  y?: number
  z?: number
  target?: Vector3
  setActiveOnSceneIfNoneActive?: boolean
} & CameraProps &
  SceneComponentProps<BabylonFreeCamera>

export default class FreeCamera extends SceneComponent<BabylonFreeCamera, Camera, FreeCameraProps> {
  private camera?: BabylonFreeCamera

  componentsCreated(): void {
    /* ignored */
  }

  create(scene: Scene): BabylonFreeCamera {
    let position
    if (this.props.position !== undefined) {
      position = this.props.position
    } else {
      position = new BABYLON.Vector3(
        this.props.x ? this.props.x : 0,
        this.props.y ? this.props.y : 0,
        this.props.z ? this.props.z : 0
      )
    }

    this.camera = new BabylonFreeCamera(
      this.props.name,
      position,
      this.props.scene,
      this.props.setActiveOnSceneIfNoneActive
    )

    return this.camera
  }

  public get propsHandlers() {
    return [new CameraPropsHandler()]
  }

  componentWillReceiveProps() {
    // not implemented for Sphere
  }
}
