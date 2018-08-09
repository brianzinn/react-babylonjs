import { Scene, EnvironmentHelper, IEnvironmentHelperOptions, Color3 } from "babylonjs"
import SceneComponent, { SceneComponentProps } from "./SceneComponent"

export type EnvironmentProps = {
  mainColor?: Color3
} & IEnvironmentHelperOptions &
  SceneComponentProps<EnvironmentHelper>

export default class Environment extends SceneComponent<
  EnvironmentHelper,
  EnvironmentHelper,
  EnvironmentProps
> {
  private environmentHelper?: EnvironmentHelper | null

  componentWillUnmount() {
    this.environmentHelper!.dispose()
  }

  componentsCreated(): void {
    /* ignored */
  }

  create(createdScene: Scene): EnvironmentHelper {
    let { scene, container, registerChild, ...options } = this.props

    this.environmentHelper = createdScene.createDefaultEnvironment(options)
    // console.log("created environment helper with options:", options)

    if (options.mainColor) {
      this.environmentHelper!.setMainColor(options.mainColor)
    }
    return this.environmentHelper!
  }

  public get propsHandlers() {
    return []
  }
}
