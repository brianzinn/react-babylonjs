import { CreatedInstance } from "../CreatedInstance"
import { CascadedShadowGenerator, Scene, AbstractMesh, Observer, Nullable } from "@babylonjs/core"
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener"

export default class CascadedShadowGeneratorLifecycleListener extends DeferredCreationLifecycleListener<CascadedShadowGenerator> {
 
  private onMeshAddedObservable: Nullable<Observer<AbstractMesh>> = null;
  private onMeshRemovedObservable: Nullable<Observer<AbstractMesh>> = null;

  constructor(scene: Scene, props: any) {
    super(scene, props)
  }

  createInstance = (instance: CreatedInstance<CascadedShadowGenerator>, scene: Scene, props: any) : Nullable<CascadedShadowGenerator> => {
    let tmp: CreatedInstance<any> | null = instance.parent
    let result: Nullable<CascadedShadowGenerator> = null;

    while (tmp !== null) {
      if (tmp.metadata.isShadowLight) {
        // console.log("Creating CascadedShadowGenerator.  size:", this.props.mapSize, "light", tmp.hostInstance)
        instance.hostInstance = result = new CascadedShadowGenerator(props.mapSize, tmp.hostInstance, props.useFullFloatFirst)
        break
      }
      tmp = tmp.parent
    }

    if (instance.hostInstance === undefined) {
      console.error("CascadedShadowGenerator has no light source.");
      return null;
    }

    if (instance.customProps.shadowCasters) {
      if (!Array.isArray(instance.customProps.shadowCasters)) {
        console.error("Shadow casters must be an array (of strings).", instance.customProps.shadowCasters);
        return null;
      }

      let shadowCasters: string[] = instance.customProps.shadowCasters;

      // TODO: also need a listener for models or if we want to add a predicate:
      this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })

      this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.removeShadowCaster(mesh);
        }
      });

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })
    } else if (instance.customProps.shadowCastersExcluding) {
      if (!Array.isArray(instance.customProps.shadowCastersExcluding)) {
        console.error("Shadow casters excluding must be an array (of strings).", instance.customProps.shadowCastersExcluding);
      } else {
        let shadowCastersExcluding: string[] = instance.customProps.shadowCastersExcluding;

        // TODO: also need a listener for models or if we want to add a predicate:
        this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.addShadowCaster(mesh);
          }
        })
        
        this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.removeShadowCaster(mesh);
          }
        });

        scene.meshes.forEach((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.addShadowCaster(mesh);
          }
        })
      }
    }

    return result;
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onUnmount(): void {
    if (this.onMeshAddedObservable !== null) {
      this.scene.onNewMeshAddedObservable.remove(this.onMeshAddedObservable);
      this.onMeshAddedObservable = null;
    }

    if (this.onMeshRemovedObservable !== null) {
      this.scene.onMeshRemovedObservable.remove(this.onMeshRemovedObservable);
      this.onMeshRemovedObservable = null;
    }
  }
}
