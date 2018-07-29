import { Scene, Node, Mesh, MeshBuilder, Vector4, Color4 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsHandler, { MeshProps } from "./MeshProps"

export type BoxProps = {
  backUVs?: Vector4
  depth?: number
  faceColors?: Color4[]
  height?: number
  sideOrientation?: number
  size?: number
  updatable?: boolean
  width?: number
} & MeshProps &
  SceneComponentProps<Mesh>

export default class Box extends SceneComponent<Mesh, Node, BoxProps> {
  protected options: any
  private box?: Mesh

  constructor(props: BoxProps) {
    super(props)

    let { scene, name, ...rest } = props

    this.options = { ...rest }
  }

  componentWillReceiveProps() {
    // TODO: implement state with size and update vertex data.
  }

  create(scene: Scene): Mesh {
    this.box = MeshBuilder.CreateBox(this.props.name, this.options, scene)
    return this.box
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
