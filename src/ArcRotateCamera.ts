import { Scene, ArcRotateCamera as BabylonArcRotateCamera, Camera, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import { CameraPropsHandler, CameraProps, CameraComponent } from "./Camera"

export type ArcRotateCameraProps = {
  alpha?: number
  beta?: number
  radius?: number
  target?: Vector3
  lowerRadiusLimit?: number
  wheelPrecision?: number
} & CameraProps &
  SceneComponentProps<BabylonArcRotateCamera>

export default class ArcRotateCamera extends SceneComponent<BabylonArcRotateCamera, Camera, ArcRotateCameraProps>
  implements CameraComponent {
  private _camera?: BabylonArcRotateCamera

  public get camera() {
    return this._camera!
  }

  public get noPreventDefault() : boolean {
    return (this.props.noPreventDefault === true)
  }

  componentsCreated(): void {
    /* ignored */
  }

  create(scene: Scene): BabylonArcRotateCamera {
    // defaults copied from scene.createDefaultCamera()
    let worldExtends = scene.getWorldExtends()
    let worldSize = worldExtends.max.subtract(worldExtends.min)
    let worldCenter = worldExtends.min.add(worldSize.scale(0.5))

    let radius
    if (this.props.radius) {
      radius = this.props.radius
    } else {
      radius = worldSize.length() * 1.5
      // console.log("radius not from props:", radius)
    }

    let target
    if (this.props.target) {
      target = this.props.target
    } else {
      target = worldCenter
    }

    this._camera = new BabylonArcRotateCamera(
      this.props.name,
      this.props.alpha || -(Math.PI / 2),
      this.props.beta || Math.PI / 2,
      radius,
      target,
      scene,
      this.props.setActiveOnSceneIfNoneActive
    )

    // TODO: add a propsHandler for Arc Rotate:
    if (this.props.lowerRadiusLimit) {
      this._camera.lowerRadiusLimit = this.props.lowerRadiusLimit
    } else {
      this._camera.lowerRadiusLimit = radius * 0.01
    }

    if (this.props.wheelPrecision) {
      this._camera.wheelPrecision = this.props.wheelPrecision
    } else {
      this._camera.wheelPrecision = 100 / radius
    }

    return this._camera
  }

  public get propsHandlers() {
    return [new CameraPropsHandler()]
  }
}
