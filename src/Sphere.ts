import { Scene, Node, Mesh, MeshBuilder } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsHandler, { MeshProps } from "./MeshProps"

export type SphereProps = {
  diameterX?: number
  diameterY?: number
  diameterZ?: number
} & MeshProps &
  SceneComponentProps<Mesh>

export default class Sphere extends SceneComponent<Mesh, Node, SphereProps> {
  protected options: any
  private sphere?: Mesh

  constructor(props: SphereProps) {
    super(props)

    let { scene, ...rest } = props

    this.options = { ...rest }
  }

  create(scene: Scene): Mesh {
    this.sphere = MeshBuilder.CreateSphere(this.props.name, this.options, scene)
    this.props.componentRegistry.meshes.push(this.sphere)
    return this.sphere
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
