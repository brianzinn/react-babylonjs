import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig"

export default class GUI3DManagerLifecycleEvents implements LifecycleListeners {
  onParented(parent: CreatedInstance<any>): void {
    console.log("gui 3d parented", parent)
  }
  onChildAdded(child: CreatedInstance<any>): void {
    console.log("guid 3d child added", child)
  }
  onMount(instance: CreatedInstance<any>): void {
    console.log("guid3d mounted", instance)
    this.addControls(instance)
  }

  addControls(instance: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach(child => {
      // console.log('adding ', instance.babylonJsObject.name, ' to ', child.babylonJsObject.name)

      // Need to add instance.state.isAdded = true, for components added at runtime.
      instance.babylonJsObject.addControl(child.babylonJsObject)
      this.addControls(child)
    })

    // Here we can now to a transform
  }
}
