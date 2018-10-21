import { Scene, ShadowGenerator as BabylonShadowGenerator, Light } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"

export type ShadowGeneratorProps = {
  mapSize: number
  useBlurExponentialShadowMap: boolean
  blurKernel: number
  shadowCasters: string[]
} & SceneComponentProps<BabylonShadowGenerator>

export default class ShadowGenerator extends SceneComponent<
  BabylonShadowGenerator,
  BabylonShadowGenerator,
  ShadowGeneratorProps
> {
  private shadowGenerator?: BabylonShadowGenerator

  create(scene: Scene): BabylonShadowGenerator {
    const { container } = this.props
    // if (container instanceof DirectionalLight) {
    //   // console.log("Creating a shadow generater for directional light:", container.light)
    //   if (container.light) {
    //     this.shadowGenerator = new BabylonShadowGenerator(this.props.mapSize, container.light)
    //   }
    // } else {
    //   console.error("ShadowGenerator only setup to work with DirectionLight as direct parent.")
    // }

    return this.shadowGenerator!
  }

  componentsCreated(): void {}

  public get propsHandlers() {
    return []
  }
}
