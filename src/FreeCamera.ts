import { Scene, FreeCamera as BabylonFreeCamera, Camera, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import { CameraPropsHandler, CameraProps, CameraComponent } from "./Camera"

export type FreeCameraProps = {
  position?: BABYLON.Vector3
  x?: number
  y?: number
  z?: number
  target?: Vector3
  setActiveOnSceneIfNoneActive?: boolean
} & CameraProps &
  SceneComponentProps<BabylonFreeCamera>

export default class FreeCamera extends SceneComponent<BabylonFreeCamera, Camera, FreeCameraProps>
  implements CameraComponent {
  private _camera?: BabylonFreeCamera

  componentsCreated(): void {
    /* ignored */
  }

  public get camera() {
    return this._camera!
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

    this._camera = new BabylonFreeCamera(
      this.props.name,
      position,
      this.props.scene,
      this.props.setActiveOnSceneIfNoneActive
    )

    return this._camera
  }

  public get propsHandlers() {
    return [new CameraPropsHandler()]
  }

  componentWillReceiveProps() {
    // not implemented for Sphere
  }
}
