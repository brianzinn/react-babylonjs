import { Scene, ShadowGenerator as BabylonShadowGenerator, Light } from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import DirectionalLight from "./DirectionalLight"

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
    if (container instanceof DirectionalLight) {
      console.log("Creating a shadow generater for directional light:", container.light)
      if (container.light) {
        this.shadowGenerator = new BabylonShadowGenerator(this.props.mapSize, container.light)
      }
    } else {
      console.error("ShadowGenerator only setup to work with DirectionLight as direct parent.")
    }

    return this.shadowGenerator!
  }

  componentsCreated(): void {
    // need a listener for models, which will not have been loaded.
    let registeredMeshes = this.props.componentRegistry.meshes
    if (!this.props.shadowCasters) {
      console.warn("no shadow casters = no shadows")
      return
    }

    // props cannot dynamically be set, although that wouldn't be too much to add!
    let shadowCasters = this.props.shadowCasters.slice(0)

    // TODO: also need a listener for models or if we want to add a predicate:
    this.props.scene.onNewMeshAddedObservable.add(mesh => {
      if (shadowCasters.indexOf(mesh.name) >= 0) {
        this.shadowGenerator!.addShadowCaster(mesh)
        shadowCasters = shadowCasters.filter(name => name !== mesh.name)
      }
    })

    registeredMeshes.forEach(mesh => {
      if (shadowCasters.indexOf(mesh.name) >= 0) {
        this.shadowGenerator!.addShadowCaster(mesh)
        shadowCasters = shadowCasters.filter(name => name !== mesh.name)
      }
    })
  }

  public get propsHandlers() {
    return []
  }
}
