import { Scene, AbstractMesh, Nullable } from "@babylonjs/core"
import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Control3D } from '@babylonjs/gui/3D/controls/control3D'

export default class GUI3DControlLifecycleListener implements LifecycleListener<Control3D> {
  private scene: Nullable<Scene>

  constructor(scene: Nullable<Scene>) {
    this.scene = scene
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<Control3D>): void {
    if (instance.state && instance.state.added === true) {
      return
    }

    let addedParent: CreatedInstance<any> | null = null

    let tmp = instance.parent
    while (tmp) {
      if (tmp.metadata.isGUI3DControl === true) {
        if (tmp.state && tmp.state.added === true) {
          addedParent = tmp
          break
        }
      }
      tmp = tmp.parent
    }

    if (addedParent) {
      this.addControls(addedParent, addedParent)
    }
  }

  addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>) {
    const last3d: CreatedInstance<any> = instance.metadata.isGUI3DControl === true ? instance : last3DGuiControl

    instance.children.forEach(child => {
      if (last3d.customProps.childrenAsContent === true) {
        last3d.hostInstance.content = child.hostInstance // child.hostInstance will be GUI.Control (ie: 2D)
        child.state = { added: true, content: true }
      } else if (child.metadata.isGUI3DControl === true) {
        last3d.hostInstance.addControl(child.hostInstance)

        // NOTE: this must be called after .addControl(child.hostInstance).
        if (child.customProps.linkToTransformNodeByName) {
          const toLinkTo: Nullable<AbstractMesh> = this.scene!.getMeshByName(child.customProps.linkToTransformNodeByName)
          if (toLinkTo !== null) {
            child.hostInstance.linkToTransformNode(toLinkTo)
            // toLinkTo.computeWorldMatrix()
          } else {
            console.error(
              "linkToTransformNode cannot find Mesh:",
              instance.customProps.linkToTransformNodeByName,
              " and does not have a scene listener for added meshes." + " Declare Mesh earlier or add an issue on github (TransformNode does not work)."
            )
          }
        }

        child.state = { added: true }
      }
    })

    if (instance.children.length > 0) {
      instance.children.forEach(child => {
        if (!child.state || child.state.content !== true) {
          if (child.state && child.state.added === true && child.customProps.onControlAdded) {
            child.customProps.onControlAdded(child)
          }

          this.addControls(child, last3d)
        }
      })
    }
  }
}
