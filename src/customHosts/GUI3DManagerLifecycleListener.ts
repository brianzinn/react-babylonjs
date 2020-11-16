import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { AbstractMesh, Nullable, Scene } from "@babylonjs/core"
import { GUI3DManager } from '@babylonjs/gui/3D/gui3DManager'
import { Control3D } from "@babylonjs/gui/3D/controls"
export default class GUI3DManagerLifecycleListener implements LifecycleListener<GUI3DManager> {
  private scene: Scene

  constructor(scene: Scene) {
    this.scene = scene
  }

  onParented(parent: DecoratedInstance<any>): void {/* empty */}
  onChildAdded(child: DecoratedInstance<any>): void {/* empty */}
  onMount(instance?: DecoratedInstance<GUI3DManager>): void {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    this.addControls(instance, instance)
  }

  /**
   * We may have BoundComponents inbetween gui3d controls.
   */
  addControls(instance: DecoratedInstance<any>, last3DGuiControl: DecoratedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.__rbs.children.forEach((child: DecoratedInstance<unknown>) => {
      if (child.__rbs.metadata.isGUI3DControl === true) {
        if (last3DGuiControl.__rbs.customProps.childrenAsContent === true) {
          (last3DGuiControl as any).content = child;
          child.__rbs.state = { added: true, content: true }
        } else {
          (last3DGuiControl as any).addControl(child)
          child.__rbs.state = { added: true }

          // NOTE: this must be called after .addControl(child).
          if (child.__rbs.customProps.linkToTransformNodeByName) {
            const toLinkTo: Nullable<AbstractMesh> = this.scene.getMeshByName(child.__rbs.customProps.linkToTransformNodeByName)
            if (toLinkTo !== null) {
              (child as any).linkToTransformNode(toLinkTo)
            } else {
              console.error(
                "linkToTransformNode cannot find ",
                instance.__rbs.customProps.linkToTransformNodeByName,
                " and does not have a scene listener for added meshes.  Declare earlier or add an issue on github."
              )
            }
          }
        }
      }

      if (child.__rbs.state && child.__rbs.state.added === true && child.__rbs.customProps.onControlAdded) {
        child.__rbs.customProps.onControlAdded(child)
      }

      if (!child.__rbs.state || child.__rbs.state.content !== true) {
        const last3d: DecoratedInstance<any> = child.__rbs.metadata.isGUI3DControl === true ? child : last3DGuiControl
        this.addControls(child, last3d)
      }
    })

    // Here we can now do a transform with an anchor point.
    console.error("transform gui3dmanager anchor missing")
  }

  onUnmount(): void { /* empty */ }
}
