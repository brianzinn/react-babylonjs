import { Scene, AbstractMesh, Nullable } from "@babylonjs/core"
import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Control3D } from '@babylonjs/gui/3D/controls/control3D'

export default class GUI3DControlLifecycleListener implements LifecycleListener<Control3D> {
  private scene: Nullable<Scene>;

  constructor(scene: Nullable<Scene>) {
    this.scene = scene;
  }

  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any {/* empty */}

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any {/* empty */}

  onMount(instance: DecoratedInstance<Control3D>): void {
    if (instance.__rbs.state && instance.__rbs.state.added === true) {
      return;
    }

    let addedParent: DecoratedInstance<any> | null = null;

    let tmp: DecoratedInstance<any> = instance.__rbs.parent; // not control parent
    while (tmp) {
      if (tmp.__rbs.metadata.isGUI3DControl === true) {
        if (tmp.__rbs.state && tmp.__rbs.state.added === true) {
          addedParent = tmp;
          break;
        }
      }
      tmp = tmp.__rbs.parent;
    }

    if (addedParent) {
      this.addControls(addedParent, addedParent);
    }
  }

  addControls(instance: DecoratedInstance<unknown>, last3DGuiControl: DecoratedInstance<unknown>) {
    const last3d: DecoratedInstance<unknown> = instance.__rbs.metadata.isGUI3DControl === true ? instance : last3DGuiControl;

    instance.__rbs.children.forEach((child: DecoratedInstance<unknown>) => {
      if (last3d.__rbs.customProps.childrenAsContent === true) {
        (last3d as any).content = child // child will be GUI.Control (ie: 2D)
        child.__rbs.state = { added: true, content: true }
      } else if (child.__rbs.metadata.isGUI3DControl === true) {
        (last3d as any).addControl(child);

        // NOTE: this must be called after .addControl(child).
        if (child.__rbs.customProps.linkToTransformNodeByName) {
          const toLinkTo: Nullable<AbstractMesh> = this.scene!.getMeshByName(child.__rbs.customProps.linkToTransformNodeByName);
          if (toLinkTo !== null) {
            (child as any).linkToTransformNode(toLinkTo);
            // toLinkTo.computeWorldMatrix()
          } else {
            console.error(
              "linkToTransformNode cannot find Mesh:",
              instance.__rbs.customProps.linkToTransformNodeByName,
              " and does not have a scene listener for added meshes." + " Declare Mesh earlier or add an issue on github (TransformNode does not work)."
            );
          }
        }

        child.__rbs.state = { added: true };
      }
    })

    if (instance.__rbs.children.length > 0) {
      instance.__rbs.children.forEach((child: DecoratedInstance<unknown>) => {
        if (!child.__rbs.state || child.__rbs.state.content !== true) {
          if (child.__rbs.state && child.__rbs.state.added === true && child.__rbs.customProps.onControlAdded) {
            child.__rbs.customProps.onControlAdded(child);
          }

          this.addControls(child, last3d);
        }
      })
    }
  }

  onUnmount(): void {/* empty */}
}
