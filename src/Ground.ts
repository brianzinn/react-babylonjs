import { Scene, Node, Mesh, MeshBuilder } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsInitialiser, { MeshProps } from "./MeshProps"

export type GroundProps = {
  height?: number
  subdivisions?: number
  subdivisionsX?: number
  subdivisionsY?: number
  updatable?: boolean
  width?: number
} & MeshProps &
  SceneComponentProps<Mesh>

export default class Ground extends SceneComponent<Mesh, Node, GroundProps> {
  protected options: any
  private ground?: Mesh

  constructor(props: GroundProps) {
    super(props)

    let { scene, name, ...rest } = props

    this.options = { ...rest }
  }

  componentWillReceiveProps() {
    // not implemented for Sphere
  }

  create(scene: Scene): Mesh {
    this.ground = MeshBuilder.CreateGround(this.props.name, this.options, scene)
    return this.ground
  }

  public get propsInitialisers() {
    return [new MeshPropsInitialiser()]
  }
}
