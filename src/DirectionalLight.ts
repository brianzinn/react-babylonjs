import { Scene, DirectionalLight as BabylonDirectionalLight, Light, Vector3 } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import LightPropsHandler, { LightProps } from "./LightProps"

export type DirectionalLightProps = {
  direction?: Vector3
  x?: number
  y?: number
  z?: number
  setActiveOnSceneIfNoneActive?: boolean
} & LightProps &
  SceneComponentProps<BabylonDirectionalLight>

export default class DirectionalLight extends SceneComponent<BabylonDirectionalLight, Light, DirectionalLightProps> {
  private _light?: BabylonDirectionalLight

  public get light(): BabylonDirectionalLight | undefined {
    return this._light
  }

  create(scene: Scene): BabylonDirectionalLight {
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

    this._light = new BabylonDirectionalLight(this.props.name, direction, scene)

    return this._light
  }

  componentsCreated(): void {
    /* ignore */
  }

  public get propsHandlers() {
    return [new LightPropsHandler()]
  }
}
