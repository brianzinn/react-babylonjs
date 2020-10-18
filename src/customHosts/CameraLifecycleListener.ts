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

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    if (parent.metadata.isNode && child.metadata.isNode) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance
    }
  }

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<any>): void {
    if (instance.hostInstance === undefined) {
      console.error('Missing instance');
      return;
    }

    // prevent default unless explicitly specified.
    const camera = instance.hostInstance as Camera
    const noPreventDefault = this.props.noPreventDefault === false ? false : true;

    // console.log("camera.attachControl:", camera, this.canvas, noPreventDefault)
    // should be a custom property for autoAttaching?  Will be an issue for multiple cameras.
    // https://github.com/BabylonJS/Babylon.js/pull/9192 (keep canvas to work with < 4.2 beta-13)
    // NEW missing parameters: useCtrlForPanning: boolean | number = true, panningMouseButton: number = 2
    // wait for next beta to get those parameters (remove 'as any') :)
    (camera as any).attachControl(this.canvas, noPreventDefault, this.props.useCtrlForPanning || true, this.props.panningMouseButton);

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
