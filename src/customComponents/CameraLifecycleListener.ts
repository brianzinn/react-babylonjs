import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, Camera, Nullable, TargetCamera } from "babylonjs"

export default class CameraLifecycleListener implements LifecycleListener {
  private props: any
  private canvas: HTMLCanvasElement
  private scene: Nullable<Scene>

  constructor(scene: Nullable<Scene>, props: any, canvas: HTMLCanvasElement) {
    this.props = props
    this.canvas = canvas
    this.scene = scene
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    // prevent default unless explicitly specified.
    const camera = instance.hostInstance as Camera
    const noPreventDefault = this.props.noPreventDefault === false ? false : true

    // console.log("attachControl. camera:", camera, this.canvas, noPreventDefault)
    // should be a custom property for autoAttaching?  Will be an issue for multiple cameras.
    camera.attachControl(this.canvas, noPreventDefault)

    if (instance.metadata.isTargetable && this.props.lockedTargetMeshName) {
      if (this.scene === null) {
        console.error("no scene for targeting")
      } else {
        const targetCamera = camera as TargetCamera
        targetCamera.lockedTarget = this.scene.getMeshByName(this.props.lockedTargetMeshName)
      }
    }
  }
}
