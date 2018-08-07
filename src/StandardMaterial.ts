import { Component } from "react"
import { Material, ComponentContainerProps } from "./SceneComponent"
import {
  Scene,
  StandardMaterial as BabylonStandardMaterial,
  Material as BabylonMaterial,
  AbstractMesh,
  Color3
} from "babylonjs"

export type StandardMaterialProps = {
  ambientColor?: Color3
  diffuseColor?: Color3
  emmissiveColor?: Color3
  specularColor?: Color3
} & ComponentContainerProps

export default class StandardMaterial extends Component<StandardMaterialProps, {}>
  implements Material<AbstractMesh> {
  material?: BabylonMaterial

  materialSet: boolean = false
  options: any

  constructor(props: StandardMaterialProps) {
    super(props)

    let { scene, name, ...rest } = props
    this.options = { ...rest }
  }

  apply(target: AbstractMesh, scene: Scene): void {
    const standardMaterial = new BabylonStandardMaterial(this.props.name, scene)

    // TODO: need a props listener for changes to props
    if (this.props.ambientColor) {
      standardMaterial.ambientColor = this.props.ambientColor
    }

    if (this.props.diffuseColor) {
      standardMaterial.diffuseColor = this.props.diffuseColor
    }

    if (this.props.emmissiveColor) {
      standardMaterial.emissiveColor = this.props.emmissiveColor
    }

    if (this.props.specularColor) {
      standardMaterial.specularColor = this.props.specularColor
    }

    target.material = standardMaterial
  }

  render() {
    if (this.materialSet === false) {
      this.materialSet = true
      if (this.props.setMaterial) {
        this.props.setMaterial(this)
      } else {
        console.error("cannot attach material", this.props)
      }
    }

    return null
  }
}
