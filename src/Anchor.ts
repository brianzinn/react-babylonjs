import { Scene, Node, TransformNode } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import MeshPropsHandler, { MeshProps } from "./MeshProps"

export type AnchorProps = {
  isPure: boolean
} & MeshProps &
  SceneComponentProps<TransformNode>

/**
 * When a model/shape is a child component of an anchor then any matric operations (translate, rotate)
 * on the anchor will affect all children.  This is a bit easier than a pivot matrix, which is not yet
 * available declaratively anyway.
 */
export default class Anchor extends SceneComponent<TransformNode, Node, AnchorProps> {
  protected options: any
  private anchor?: TransformNode

  constructor(props: AnchorProps) {
    super(props)

    let { position, rotation } = this.props

    this.options = {
      position,
      rotation
    }
  }

  create(scene: Scene): TransformNode {
    this.anchor = new TransformNode(this.props.name, scene, this.props.isPure)

    return this.anchor
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new MeshPropsHandler()]
  }
}
