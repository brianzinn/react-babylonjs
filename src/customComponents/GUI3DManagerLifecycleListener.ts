import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";

export default class GUI3DManagerLifecycleListener implements LifecycleListener {
  onParented(parent: CreatedInstance<any>): void {}
  onChildAdded(child: CreatedInstance<any>): void {}
  onMount(instance: CreatedInstance<any>): void {
    this.addControls(instance)
  }

  addControls(instance: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach((child: any) => {
      // console.log('adding ', instance.babylonJsObject.name, ' to ', child.babylonJsObject.name)

      // Need to add instance.state.isAdded = true, for components added at runtime.
      instance.hostInstance.addControl(child.hostInstance)
      
      this.addControls(child)
    })

    // Here we can now to a transform
  }
}
