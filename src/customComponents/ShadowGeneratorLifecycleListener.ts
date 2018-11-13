import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig"
import { ShadowGenerator, Scene, AbstractMesh } from "babylonjs";

export default class AdvancedDynamicTextureLifecycleListener implements LifecycleListeners {

  private props: any;

  constructor(props: any) {
      this.props = props;
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    let tmp: CreatedInstance<any> | null = instance.parent;
    while (tmp != null) {

        if (tmp.metadata.isShadowLight) {
            console.log('Creating ShadowGenerator.  size:', this.props.mapSize, 'light', tmp.babylonJsObject);
            instance.babylonJsObject = new ShadowGenerator(this.props.mapSize, tmp.babylonJsObject, this.props.useFullFloatFirst);
            break;
        } else {
            console.log('Not a shadow light source: metadata:', tmp.metadata, 'object', tmp.babylonJsObject);
        }
        tmp = tmp.parent;
    }

    if (instance.babylonJsObject === undefined) {
        console.error('ShadowGenerator has no light source.')
    }

    if (this.props.shadowCasters) {
        if (!Array.isArray(this.props.shadowCasters)) {
            console.error('Shadow casters must be an array (of strings).', this.props.shadowCasters)
            return;
        }

        console.log('this.props:', this.props);

        let shadowCasters: string[] = this.props.shadowCasters.slice(0)
        let scene: Scene = this.props.scene;
        // TODO: also need a listener for models or if we want to add a predicate:
        scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
            if (shadowCasters.indexOf(mesh.name) >= 0) {
                console.log('adding on observable shadow caster:', mesh.name)
                instance.babylonJsObject!.addShadowCaster(mesh)
                shadowCasters = shadowCasters.filter((name: string) => name !== mesh.name)
            }
        })

        scene.meshes.forEach((mesh: AbstractMesh) => {
            if (shadowCasters.indexOf(mesh.name) >= 0) {
                console.log('adding shadow caster:', mesh.name)
                instance.babylonJsObject!.addShadowCaster(mesh)

                shadowCasters = shadowCasters.filter((name: string) => name !== mesh.name)
            }
        })
    }
  }
}