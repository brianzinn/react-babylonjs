import { PropsHandler, NodeProps } from "./SceneComponent"
import { Camera, FreeCamera, ArcRotateCamera } from "babylonjs"

export type CameraProps = {
  /**
   * If there are no active cameras (on instantiation) then this camera becomes the active camera.
   */
  setActiveOnSceneIfNoneActive?: boolean
  /**
   * Defaults to 1 meter (defines the clip plane for projection matrix)
   */
  minZ: number
  /**
   * Defaults to 10,000 meters
   */
  maxZ: number

  /**
   * FOV is set in Radians (default is 0.8)
   */
  fov: number
} & NodeProps

export default class CameraPropsHandler implements PropsHandler<Camera, CameraProps> {
  handle(camera: Camera, props: CameraProps): void {
    let cameraProps: any = props
    if (cameraProps.target) {
      // optional on FreeCamera only (not all cameras)
      if (camera instanceof FreeCamera) {
        console.log("setting FreeCamera target", cameraProps.target)
        camera.setTarget(cameraProps.target)
      } else if (
        camera instanceof ArcRotateCamera &&
        (!camera.target || !camera.target.equals(cameraProps.target))
      ) {
        console.log(
          "Setting FreeCamera target (ArcRotate does automatically on init, but detected a change)."
        )
        camera.setTarget(cameraProps.target)
      } else {
        console.warn("attached camera - no implementation for targeting")
      }

      if (props.minZ && camera.minZ !== props.minZ) {
        console.log("setting camera minZ")
        camera.minZ = props.minZ
      }

      if (props.maxZ && camera.maxZ !== props.maxZ) {
        console.log("setting camera maxZ")
        camera.maxZ = props.maxZ
      }

      if (props.fov && camera.fov !== props.fov) {
        console.log("setting camera FOV.")
        camera.fov = props.fov
      }
    }
  }
}
