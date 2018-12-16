import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, AbstractMesh } from "babylonjs"

export default class MaterialsLifecycleListener implements LifecycleListener {
  onCreated(instance: CreatedInstance<any>, scene: Scene) {
    if (instance.customProps.attachToMeshesByName) {
      if (!Array.isArray(instance.customProps.attachToMeshesByName)) {
        console.error("AttachToMeshesByName must be an array (of strings).", instance.customProps.attachToMeshesByName)
        return
      }

      let meshNamesToAttachTo: string[] = instance.customProps.attachToMeshesByName.slice(0)

      // TODO: also need a listener for models or if we want to add a predicate:
      scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          setTimeout(() => {
            mesh.material = instance.hostInstance!
          }, 0)
        }
      })

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          mesh.material = instance.hostInstance!
        }
      })
    }
  }
  onParented(parent: CreatedInstance<any>) {}
  onChildAdded(child: CreatedInstance<any>) {}
  onMount(instance: CreatedInstance<any>) {
    if (!instance.customProps.attachToMeshesByName) {
      let material = instance.hostInstance
      let tmp: CreatedInstance<any> | null = instance.parent
      while (tmp != null) {
        if (tmp.metadata && tmp.metadata.acceptsMaterials === true) {
          tmp.hostInstance.material = material
          break
        }
        tmp = tmp.parent
      }
    }
  }
}
