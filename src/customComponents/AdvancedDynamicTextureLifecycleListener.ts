import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { Color3 } from "babylonjs"
import * as BABYLON from "babylonjs"

export default class AdvancedDynamicTextureLifecycleListener implements LifecycleListener {
  private props: any

  constructor(props: any) {
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    this.addControls(instance)

    if (instance.customProps.forParentMesh === true) {
      // console.log('for parent mesh', instance.parent ? instance.parent.babylonJsObject : 'error: no parent object')

      let mesh: BABYLON.Mesh = instance.parent!.hostInstance // should crawl for a mesh
      // console.error('we will be attaching the mesh:', mesh.name, mesh);

      var material = new BABYLON.StandardMaterial("AdvancedDynamicTextureMaterial", mesh.getScene())
      material.backFaceCulling = false
      material.diffuseColor = Color3.Black()
      material.specularColor = Color3.Black()

      if (this.props.onlyAlphaTesting) {
        material.diffuseTexture = instance.hostInstance
        material.emissiveTexture = instance.hostInstance
        instance.hostInstance.hasAlpha = true
      } else {
        material.emissiveTexture = instance.hostInstance
        material.opacityTexture = instance.hostInstance
      }

      mesh.material = material

      let supportPointerMove = this.props.supportPointerMove === true ? true : false

      instance.hostInstance.attachToMesh(mesh, supportPointerMove)
    }
  }

  addControls(instance: CreatedInstance<any>) {
    // When there is a panel, it must be added before the children. Otherwise there is no UtilityLayer to attach to.
    // This project before 'react-reconciler' was added from parent up the tree.  'react-reconciler' wants to do the opposite.
    instance.children.forEach(child => {
      if (child.metadata.isGUI2DControl === true) {
        console.warn("calling ", instance.hostInstance.name, ".addControl(", child.hostInstance.name, ")")
        // Need to add instance.state.isAdded = true, for components added at runtime.
        instance.hostInstance.addControl(child.hostInstance)
        child.state = { added: true }
      } else {
        console.warn("skipping addControl().  not gui2d:", child)
      }
    })

    instance.children.forEach(child => {
      this.addControls(child)
    })
  }
}
