import { Scene, ArcRotateCamera as BabylonArcRotateCamera, Camera, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import CameraPropsHandler, { CameraProps } from "./CameraProps"

export type ArcRotateCameraProps = {
  alpha?: number
  beta?: number
  radius?: number
  target?: Vector3
  lowerRadiusLimit?: number
  wheelPrecision?: number
} & CameraProps &
  SceneComponentProps<BabylonArcRotateCamera>

export default class ArcRotateCamera extends SceneComponent<
  BabylonArcRotateCamera,
  Camera,
  ArcRotateCameraProps
> {
  private camera?: BabylonArcRotateCamera

  componentsCreated(): void {
    /* ignored */
  }

  create(scene: Scene): BabylonArcRotateCamera {
    // defaults copied from scene.createDefaultCamera()
    var worldExtends = scene.getWorldExtends()
    var worldSize = worldExtends.max.subtract(worldExtends.min)
    var worldCenter = worldExtends.min.add(worldSize.scale(0.5))

    let radius
    if (this.props.radius) {
      radius = this.props.radius
      console.log("radius from props:", radius)
    } else {
      radius = worldSize.length() * 1.5
      console.log("radius not props:", radius)
    }

    let target
    if (this.props.target) {
      target = this.props.target
      console.log("props target:", target)
    } else {
      target = worldCenter
      console.log("no props target:", target)
    }

    this.camera = new BabylonArcRotateCamera(
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
      this.camera.lowerRadiusLimit = this.props.lowerRadiusLimit
    } else {
      this.camera.lowerRadiusLimit = radius * 0.01
    }

    if (this.props.wheelPrecision) {
      this.camera.wheelPrecision = this.props.wheelPrecision
    } else {
      this.camera.wheelPrecision = 100 / radius
    }

    return this.camera
  }

  public get propsHandlers() {
    return [new CameraPropsHandler()]
  }
}
