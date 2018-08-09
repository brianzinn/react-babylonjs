import { Scene, Node, Mesh, MeshBuilder } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsHandler, { MeshProps } from "./MeshProps"

export type IcoSphereProps = {
  radius?: number
  flat?: boolean
  subdivisions?: number
} & MeshProps &
  SceneComponentProps<Mesh>

export default class Box extends SceneComponent<Mesh, Node, IcoSphereProps> {
  protected options: any
  private icoSphere?: Mesh

  constructor(props: IcoSphereProps) {
    super(props)

    let { radius, flat, subdivisions } = props

    this.options = { radius, flat, subdivisions }
  }

  create(scene: Scene): Mesh {
    this.icoSphere = MeshBuilder.CreateIcoSphere(this.props.name, this.options, scene)
    this.props.componentRegistry.meshes.push(this.icoSphere)

    return this.icoSphere
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
