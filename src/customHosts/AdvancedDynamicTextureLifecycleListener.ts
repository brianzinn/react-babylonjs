import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Color3, Scene, StandardMaterial, Mesh, TransformNode } from "@babylonjs/core"
import { FiberAdvancedDynamicTextureProps } from "../generatedProps"
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";

export default class AdvancedDynamicTextureLifecycleListener implements LifecycleListener<AdvancedDynamicTexture> {
  protected props: FiberAdvancedDynamicTextureProps;
  protected scene: Scene

  constructor(scene: Scene, props: any) {
    this.scene = scene
    this.props = props
  }

  onParented(parent: DecoratedInstance<any>, child: DecoratedInstance<any>): any { /* empty */}

  onChildAdded(child: DecoratedInstance<unknown>, parent: DecoratedInstance<unknown>): any { /* empty */}

  onMount(instance: DecoratedInstance<AdvancedDynamicTexture>): void {
    instance.__rbs.state = {added: true}; // allow children to attach
    this.addControls(instance);

    if (instance.__rbs.customProps.createForParentMesh) {
      // console.log('for parent mesh', instance.parent ? instance.parent.babylonJsObject : 'error: no parent object')

      let mesh: Mesh = instance.__rbs.parent // should crawl parent hierarchy for a mesh
      // console.error('we will be attaching the mesh:', mesh.name, mesh);

      const material = new StandardMaterial("AdvancedDynamicTextureMaterial", mesh.getScene());
      material.backFaceCulling = false;
      material.diffuseColor = Color3.Black();
      material.specularColor = Color3.Black();

      if (this.props.hasAlpha) {
        material.diffuseTexture = instance;
        material.emissiveTexture = instance;
        instance.hasAlpha = true;
      } else {
        material.emissiveTexture = instance;
        material.opacityTexture = instance;
      }

      mesh.material = material

      // set to true unless explicitly not wanted.
      // connects the texture to a hosting mesh to enable interactions
      let supportPointerMove = (this.props as any).supportPointerMove !== false ? true : false

      instance.attachToMesh(mesh, supportPointerMove)
    }
  }

  addControls(instance: DecoratedInstance<AdvancedDynamicTexture>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.__rbs.children.forEach((child: DecoratedInstance<unknown>) => {
      if (child.__rbs.metadata.isGUI2DControl === true) {
        instance.addControl(child as any);
        child.__rbs.state = { added: true };
      }
    })

    if (instance.__rbs.customProps.connectControlNames !== undefined && Array.isArray(instance.__rbs.customProps.connectControlNames)) {
      let controlNames: string[] = instance.__rbs.customProps.connectControlNames
      let root: DecoratedInstance<any> = instance;
      while (root.__rbs.parent !== null) {
        root = root.__rbs.parent;
      }
      this.connect(
        instance,
        root,
        controlNames
      )
    }

    instance.__rbs.children.forEach(child => {
      this.addControls(child)
    })
  }

  connect(keyboard: DecoratedInstance<AdvancedDynamicTexture>, searchInstance: DecoratedInstance<unknown>, controlNames: string[]) {
    if (searchInstance.__rbs.metadata.isGUI2DControl && controlNames.indexOf((searchInstance as any).name) !== -1) {
      // console.log(keyboard, '.connect(->', searchInstance)
      (keyboard as any).connect(searchInstance);
    }

    searchInstance.__rbs.children.forEach(child =>
      this.connect(
        keyboard,
        child,
        controlNames
      )
    )
  }

  onUnmount(): void {/* empty */}
}

/**
 * This is attached by convention in react-reconciler HostConfig.
 */
export class ADTFullscreenUILifecycleListener extends AdvancedDynamicTextureLifecycleListener {/* empty */}
