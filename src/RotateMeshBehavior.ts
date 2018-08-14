import { Component } from "react"
import { Behavior, ComponentContainerProps } from "./SceneComponent"
import { Scene, Vector3, AbstractMesh, Axis, Space } from "babylonjs"

export type RotateMeshBehaviorProps = {
  axis: string | Vector3 // i.e.: Axis.X is a Vector3
  radians: number
} & ComponentContainerProps

export default class RotateMeshBehaviour extends Component<RotateMeshBehaviorProps, {}>
  implements Behavior<AbstractMesh> {
  behaviourAdded: boolean = false
  options: any

  constructor(props: RotateMeshBehaviorProps) {
    super(props)

    let { scene, name, ...rest } = props
    this.options = { ...rest }
  }

  // componentWillUnmount() could unregister, but Scene is being destroyed, so not bothering.
  apply(target: AbstractMesh, scene: Scene): void {
    scene.registerBeforeRender(() => {
      // todo check for rotationQuaternion.
      let { radians, axis } = this.props
      if (typeof axis === "string") {
        // computed prop fails: target.rotation[prop] += radians;
        switch (axis) {
          case "x":
            target.rotation.x += radians
            break
          case "y":
            target.rotation.y += radians
            break
          case "z":
            target.rotation.z += radians
            break
          default:
            console.error("unidentified axis", axis)
        }
      } else {
        // TODO: Add as an input, for World.  Probably don't need Bone :)
        target.rotate(axis, radians, Space.LOCAL)
      }
    })
  }

  render() {
    if (this.behaviourAdded === false) {
      this.behaviourAdded = true
      if (this.props.addBehavior) {
        this.props.addBehavior(this)
      } else {
        console.error("cannot attach behaviour", this.props)
      }
    }

    return null
  }
}
