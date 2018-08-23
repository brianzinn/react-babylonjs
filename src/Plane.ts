import { Scene, Node, Mesh, MeshBuilder, Vector4 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsHandler, { MeshProps } from "./MeshProps"

export type PlaneProps = {
  height?: number
  size?: number
  sideOrientation?: number
  updatable?: boolean
  frontUVs?: Vector4
  backUVs?: Vector4
  width?: number
} & MeshProps &
  SceneComponentProps<Mesh>

export default class Plane extends SceneComponent<Mesh, Node, PlaneProps> {
  protected options: any
  private plane?: Mesh

  constructor(props: PlaneProps) {
    super(props)

    let { scene, name, ...rest } = props

    this.options = { ...rest }
  }

  componentWillReceiveProps() {
    // not implemented for Plane
  }

  create(scene: Scene): Mesh {
    this.plane = MeshBuilder.CreatePlane(this.props.name, this.options, scene)
    // TODO: remove on unmount
    this.props.componentRegistry.meshes.push(this.plane)

    console.log('plane created with options:', this.options);

    return this.plane
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
