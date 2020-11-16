import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, AbstractMesh } from "@babylonjs/core"
import { Material } from '@babylonjs/core/Materials'
import { assignProperty } from "../helper/property"

export default class MaterialsLifecycleListener implements LifecycleListener<Material> {
  onCreated(instance: DecoratedInstance<Material>, scene: Scene) {
    if (instance.__rbs.customProps.attachToMeshesByName) {
      if (!Array.isArray(instance.__rbs.customProps.attachToMeshesByName)) {
        console.error("AttachToMeshesByName must be an array (of strings).", instance.__rbs.customProps.attachToMeshesByName)
        return
      }

      let meshNamesToAttachTo: string[] = instance.__rbs.customProps.attachToMeshesByName.slice(0)

      // TODO: also need a listener for models or if we want to add a predicate:
      scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          setTimeout(() => {
            mesh.material = instance;
          }, 0)
        }
      })

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (meshNamesToAttachTo.indexOf(mesh.name) >= 0) {
          mesh.material = instance;
        }
      })
    }
  }
  onParented(parent: DecoratedInstance<any>) {/* empty */}
  onChildAdded(child: DecoratedInstance<any>) {/* empty */}
  onMount(instance?: DecoratedInstance<Material>) {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (!instance.__rbs.customProps.attachToMeshesByName) {
      let material = instance;
      let tmp: DecoratedInstance<unknown> | null = instance.__rbs.parent

      while (tmp !== null) {
        if (tmp.__rbs.metadata && tmp.__rbs.metadata.acceptsMaterials === true) {
          if (instance.__rbs.customProps.assignTo) {
            assignProperty(material, tmp, instance.__rbs.customProps.assignTo);
          } else {
            (tmp as any).material = material;
          }
          break
        }
        tmp = tmp.__rbs.parent;
      }
    }
  }

  onUnmount(): void {/* empty */}
}
