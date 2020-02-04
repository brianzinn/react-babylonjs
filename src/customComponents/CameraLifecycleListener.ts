import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, Camera, Nullable, TargetCamera } from "@babylonjs/core"

export default class CameraLifecycleListener implements LifecycleListener<Camera> {
  private props: any
  private canvas: HTMLCanvasElement
  private scene: Nullable<Scene>

  constructor(scene: Nullable<Scene>, props: any, canvas: HTMLCanvasElement) {
    this.props = props
    this.canvas = canvas
    this.scene = scene
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<any>): void {
    if (instance.hostInstance === undefined) {
      console.error('Missing instance');
      return;
    }

    // prevent default unless explicitly specified.
    const camera = instance.hostInstance as Camera
    const noPreventDefault = this.props.noPreventDefault === false ? false : true

    // console.log("camera.attachControl:", camera, this.canvas, noPreventDefault)
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

  onUnmount(): void {/* empty */}
}
