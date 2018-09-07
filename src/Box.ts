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

    let { scene, name, onCreated, ...rest } = props

    this.options = { ...rest }
  }

  create(scene: Scene): Mesh {
    this.box = MeshBuilder.CreateBox(this.props.name, this.options, scene)
    // TODO: remove on unmount
    this.props.componentRegistry.meshes.push(this.box)
    return this.box
  }

  componentsCreated(): void {
    /* ignore */
  }

  componentWillUnmount() {
    this.box!.dispose()
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
