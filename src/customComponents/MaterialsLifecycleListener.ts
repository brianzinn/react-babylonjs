import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Scene, AbstractMesh } from "@babylonjs/core"
import { Material } from '@babylonjs/core/Materials'

export default class MaterialsLifecycleListener implements LifecycleListener<Material> {
  onCreated(instance: CreatedInstance<Material>, scene: Scene) {
    if (instance.customProps.attachToMeshesByName) {
      if (!Array.isArray(instance.customProps.attachToMeshesByName)) {
        console.error("AttachToMeshesByName must be an array (of strings).", instance.customProps.attachToMeshesByName)
        return
      }

      if (instance.hostInstance === undefined) {
        console.error('instance not assigned');
        return;
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
  onParented(parent: CreatedInstance<any>) {/* empty */}
  onChildAdded(child: CreatedInstance<any>) {/* empty */}
  onMount(instance?: CreatedInstance<Material>) {
    if (instance === undefined) {
      console.error('Missing instance');
      return;
    }

    if (!instance.customProps.attachToMeshesByName) {
      let material = instance.hostInstance
      let tmp: CreatedInstance<any> | null = instance.parent

      while (tmp !== null) {
        if (tmp.metadata && tmp.metadata.acceptsMaterials === true) {
          if (instance.customProps.assignTo) {
            const propsList: string[] = instance.customProps.assignTo.split('.');
            let propToAssign = tmp.hostInstance;
            propsList.forEach((prop: string, index: number) => {
              if (propToAssign[prop] === undefined) {
                // create property if it doesn't exist.
                console.warn('Assign to created property', prop, 'on', propToAssign)
                propToAssign[prop] = {}
              }

              if (index === propsList.length - 1) {
                propToAssign[prop] = material;
              } else {
                propToAssign = propToAssign[prop]
              }
            })
          } else {
            tmp.hostInstance.material = material
          }
          break
        }
        tmp = tmp.parent
      }
    }
  }

  onUnmount(): void {/* empty */}
}
