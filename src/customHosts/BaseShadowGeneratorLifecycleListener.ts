import { DecoratedInstance } from "../DecoratedInstance"
import { Scene, AbstractMesh, Observer, Nullable, DirectionalLight, ShadowGenerator } from "@babylonjs/core"
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener"

/**
 * Create a Shadow Generator (CascadedShadowGenerator extends ShadowGenerator, so add/remove shadow casters is from parent class)
 */
export default abstract class BaseShadowGeneratorLifecycleListener<T extends ShadowGenerator> extends DeferredCreationLifecycleListener<T> {
 
  private onMeshAddedObservable: Nullable<Observer<AbstractMesh>> = null;
  private onMeshRemovedObservable: Nullable<Observer<AbstractMesh>> = null;

  constructor(scene: Scene, props: any) {
    super(scene, props);
  }

  abstract createShadowGenerator: (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => T;

  abstract get generatorType(): string;

  createInstance = (instance: DecoratedInstance<T>, scene: Scene, props: any) : Nullable<T> => {
    let tmp: DecoratedInstance<unknown> | null = instance.__rbs.parent;
    let result: Nullable<T> = null;

    while (tmp !== null) {
      if (tmp.__rbs.metadata.isShadowLight) {
        // console.log(`Creating ${this.generatorType}  size: ${props.mapSize} with light`, tmp);
        result = this.createShadowGenerator(props.mapSize, tmp as DecoratedInstance<DirectionalLight>, props.useFullFloatFirst);
        Object.assign(instance, result);
        break;
      }
      tmp = tmp.__rbs.parent
    }

    if (instance === undefined) {
      console.error(`${this.generatorType} has no light source.`);
      return null;
    }

    if (instance.__rbs.customProps.shadowCasters) {
      if (!Array.isArray(instance.__rbs.customProps.shadowCasters)) {
        console.error("Shadow casters must be an array (of strings).", instance.__rbs.customProps.shadowCasters);
        return null;
      }

      let shadowCasters: string[] = instance.__rbs.customProps.shadowCasters;

      // TODO: also need a listener for models or if we want to add a predicate:
      this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.addShadowCaster(mesh);
        }
      })

      this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.removeShadowCaster(mesh);
        }
      });

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.addShadowCaster(mesh);
        }
      })
    } else if (instance.__rbs.customProps.shadowCastersExcluding) {
      if (!Array.isArray(instance.__rbs.customProps.shadowCastersExcluding)) {
        console.error("Shadow casters excluding must be an array (of strings).", instance.__rbs.customProps.shadowCastersExcluding);
      } else {
        let shadowCastersExcluding: string[] = instance.__rbs.customProps.shadowCastersExcluding;

        // TODO: also need a listener for models or if we want to add a predicate:
        this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.addShadowCaster(mesh);
          }
        })
        
        this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.removeShadowCaster(mesh);
          }
        });

        scene.meshes.forEach((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.addShadowCaster(mesh);
          }
        })
      }
    }

    return result;
  }

  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any {/* empty */}

  onChildAdded(child: DecoratedInstance<any>, parent: DecoratedInstance<any>): any {/* empty */}

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
