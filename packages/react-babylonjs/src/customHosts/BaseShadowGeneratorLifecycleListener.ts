import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight.js';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import { Observer } from '@babylonjs/core/Misc/observable.js';
import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';

import { CreatedInstance } from '../CreatedInstance';
import { ShadowGeneratorCustomProps } from '../CustomProps';
import DeferredCreationLifecycleListener from './DeferredCreationLifecycleListener';

/**
 * Create a Shadow Generator (CascadedShadowGenerator extends ShadowGenerator, so add/remove shadow casters is from parent class)
 */
export default abstract class BaseShadowGeneratorLifecycleListener<T extends ShadowGenerator, U> extends DeferredCreationLifecycleListener<T, U> {

  private onMeshAddedObservable: Nullable<Observer<AbstractMesh>> = null;
  private onMeshRemovedObservable: Nullable<Observer<AbstractMesh>> = null;

  abstract createShadowGenerator: (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => T;

  abstract get generatorType(): string;

  createInstance = (instance: CreatedInstance<T>, scene: Scene, props: any): Nullable<T> => {
    let tmp: CreatedInstance<any> | null = instance.parent;
    let result: Nullable<T> = null;

    while (tmp !== null) {
      if (tmp.metadata.isShadowLight) {
        // console.log(`Creating ${this.generatorType}  size: ${props.mapSize} with light`, tmp.hostInstance);
        instance.hostInstance = result = this.createShadowGenerator(props.mapSize, tmp.hostInstance, props.useFullFloatFirst);
        break;
      }
      tmp = tmp.parent;
    }

    if (instance.hostInstance === undefined) {
      console.error(`${this.generatorType} has no light source.`);
      return null;
    }

    if ((instance.customProps as ShadowGeneratorCustomProps).shadowCastChildren === true) {
      // recursively add children once the generator has completed deferred creation - after this meshes will add themselves from their LifecycleListener.
      const addShadowCasters = (children: CreatedInstance<any>[], generator: T): void => {
        for(const child of children) {
          if (child.metadata.isMesh === true) {
            generator.addShadowCaster(child.hostInstance as AbstractMesh, child.customProps.childMeshesNotTracked === true);
          }
          if (child.children.length !== 0) {
            addShadowCasters(child.children, generator);
          }
        }
      }
      addShadowCasters(instance.children, instance.hostInstance);
    } else if ((instance.customProps as ShadowGeneratorCustomProps).shadowCasters) {
      if (!Array.isArray((instance.customProps as ShadowGeneratorCustomProps).shadowCasters)) {
        console.error('Shadow casters must be an array (of strings).', (instance.customProps as ShadowGeneratorCustomProps).shadowCasters);
        return null;
      }

      const shadowCasters: string[] = (instance.customProps as ShadowGeneratorCustomProps).shadowCasters!;

      // TODO: also need a listener for models or if we want to add a predicate:
      this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      });

      this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.removeShadowCaster(mesh);
        }
      });

      scene.meshes.forEach((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      });
    } else if ((instance.customProps as ShadowGeneratorCustomProps).shadowCastersExcluding) {
      if (!Array.isArray((instance.customProps as ShadowGeneratorCustomProps).shadowCastersExcluding)) {
        console.error('Shadow casters excluding must be an array (of strings).', (instance.customProps as ShadowGeneratorCustomProps).shadowCastersExcluding);
      } else {
        const shadowCastersExcluding: string[] = (instance.customProps as ShadowGeneratorCustomProps).shadowCastersExcluding!;

        // TODO: also need a listener for models or if we want to add a predicate:
        this.onMeshAddedObservable = scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.addShadowCaster(mesh);
          }
        });

        this.onMeshRemovedObservable = scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.removeShadowCaster(mesh);
          }
        });

        scene.meshes.forEach((mesh: AbstractMesh) => {
          if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
            instance.hostInstance!.addShadowCaster(mesh);
          }
        });
      }
    }

    return result;
  }

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
