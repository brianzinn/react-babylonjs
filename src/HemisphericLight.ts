import { Scene, HemisphericLight as BabylonHemisphericLight, Light, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import LightPropsHandler, { LightProps } from "./LightProps"

export type HemisphericLightProps = {
  direction?: Vector3
  x?: number
  y?: number
  z?: number
  setActiveOnSceneIfNoneActive?: boolean
} & LightProps &
  SceneComponentProps<BabylonHemisphericLight>

export default class HemisphericLight extends SceneComponent<
  BabylonHemisphericLight,
  Light,
  HemisphericLightProps
> {
  private light?: BabylonHemisphericLight

  componentsCreated(): void {
    /* ignored */
  }

  create(scene: Scene): BabylonHemisphericLight {
    let direction
    if (this.props.direction !== undefined) {
      direction = this.props.direction
    } else {
      direction = new Vector3(
        this.props.x ? this.props.x : 0,
        this.props.y ? this.props.y : 0,
        this.props.z ? this.props.z : 0
      )
    }

    this.light = new BabylonHemisphericLight(this.props.name, direction, scene)

    return this.light
  }

  public get propsHandlers() {
    return [new LightPropsHandler()]
  }
}
