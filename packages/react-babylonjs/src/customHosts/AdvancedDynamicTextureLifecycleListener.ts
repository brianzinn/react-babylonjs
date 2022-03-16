import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial.js'
import { Color3 } from '@babylonjs/core/Maths/math.color.js'
import { Mesh } from '@babylonjs/core/Meshes/mesh.js'
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture.js'
import { Grid } from '@babylonjs/gui/2D/controls/grid'
import { CreatedInstance } from '../CreatedInstance'
import { ADTCustomProps, VirtualKeyboardCustomProps } from '../CustomProps'
import { FiberAdvancedDynamicTextureProps } from '../generatedProps'
import BaseLifecycleListener from './BaseLifecycleListener'

export default class AdvancedDynamicTextureLifecycleListener extends BaseLifecycleListener<
  AdvancedDynamicTexture,
  FiberAdvancedDynamicTextureProps
> {
  onMount(instance: CreatedInstance<AdvancedDynamicTexture>): void {
    instance.state = { added: true } // allow children to attach
    this.addControls(instance)

    if ((instance.customProps as ADTCustomProps).createForParentMesh) {
      // console.log('for parent mesh', instance.parent ? instance.parent.babylonJsObject : 'error: no parent object')

      const mesh: Mesh = instance.parent!.hostInstance // should crawl parent hierarchy for a mesh
      // console.error('we will be attaching the mesh:', mesh.name, mesh);

      const material = new StandardMaterial('AdvancedDynamicTextureMaterial', mesh.getScene())
      material.backFaceCulling = false
      material.diffuseColor = Color3.Black()
      material.specularColor = Color3.Black()

      if (instance.hostInstance === undefined) {
        console.error('missing instance')
      } else {
        if (this.props.hasAlpha) {
          material.diffuseTexture = instance.hostInstance
          material.emissiveTexture = instance.hostInstance
          instance.hostInstance.hasAlpha = true
        } else {
          material.emissiveTexture = instance.hostInstance
          material.opacityTexture = instance.hostInstance
        }
      }

      mesh.material = material

      // set to true unless explicitly not wanted.
      // connects the texture to a hosting mesh to enable interactions
      const supportPointerMove = (this.props as any).supportPointerMove !== false ? true : false

      instance.hostInstance!.attachToMesh(mesh, supportPointerMove)
    }
  }

  addControls(instance: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach((child) => {
      if (child.metadata.isGUI2DControl === true) {
        if (instance.metadata.isGUI2DGrid === true) {
          const { gridRow, gridColumn } = child.customProps
          ;(instance.hostInstance as Grid).addControl(child.hostInstance, gridRow, gridColumn)
        } else {
          instance.hostInstance!.addControl(child.hostInstance)
        }

        child.state = child.state ? { ...child.state, added: true } : { added: true }
      }
    })

    if (
      (instance.customProps as VirtualKeyboardCustomProps).connectControlNames !== undefined &&
      Array.isArray((instance.customProps as VirtualKeyboardCustomProps).connectControlNames)
    ) {
      const controlNames: string[] = (instance.customProps as VirtualKeyboardCustomProps)
        .connectControlNames!
      let root = instance
      while (root.parent !== null) {
        root = root.parent
      }
      this.connect(instance, root, controlNames)
    }

    instance.children.forEach((child) => {
      this.addControls(child)
    })
  }

  connect(
    keyboard: CreatedInstance<any>,
    searchInstance: CreatedInstance<any>,
    controlNames: string[]
  ) {
    if (
      searchInstance.metadata.isGUI2DControl &&
      searchInstance.hostInstance &&
      controlNames.indexOf(searchInstance.hostInstance.name) !== -1
    ) {
      // console.log(keyboard.hostInstance, '.connect(->', searchInstance.hostInstance)
      keyboard.hostInstance.connect(searchInstance.hostInstance)
    }

    searchInstance.children.forEach((child) => this.connect(keyboard, child, controlNames))
  }
}

/**
 * This is attached by convention in react-reconciler HostConfig.
 */
export class ADTFullscreenUILifecycleListener extends AdvancedDynamicTextureLifecycleListener {
  /* empty */
}
