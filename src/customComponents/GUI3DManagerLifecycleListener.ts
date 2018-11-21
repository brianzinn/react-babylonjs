import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

export default class GUI3DManagerLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>): void {}
  onChildAdded(child: CreatedInstance<any>): void {}
  onMount(instance: CreatedInstance<any>): void {
    this.addControls(instance, instance)
  }

  /**
   * We may have BoundComponents inbetween gui3d controls.
   */
  addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach((child: CreatedInstance<any>) => {
      if (child.metadata.isGUI3DControl === true) {

        last3DGuiControl.hostInstance.addControl(child.hostInstance)
        child.state = { added: true };
      }

      const last3d: CreatedInstance<any> = (child.metadata.isGUI3DControl === true ? child : last3DGuiControl)

      this.addControls(child, last3d)
    })

    // Here we can now do a transform with an anchor point.
    console.error('transform gui3dmanager')
  }
}
