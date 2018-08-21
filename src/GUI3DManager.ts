import { Scene } from "babylonjs"
import { GUI3DManager as BabylonGUI3DManager, Control3D } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUISceneComponent from "./GUISceneComponent"

export type GUI3DManagerProps = {} & SceneComponentProps<BabylonGUI3DManager>

/**
 * To begin with 3D GUI, you need to instantiate a GUI3DManager which will be responsible for connecting all controls together:
 *
 * The manager only requires the scene to work on. Once instantiated, the manager will create an utility layer which is a specific child scene which will host all meshes used to render the controls.
 * This way, your main scene won't get poluated by the utility meshes.
 * You can reach the utility layer with manager.utilityLayer.
 *
 * Once you have a manager, you can start adding controls with manager.addControl(control). All controls will be added to the manager.rootContainer container.
 */
export default class GUI3DManager extends GUISceneComponent<
  BabylonGUI3DManager,
  BabylonGUI3DManager,
  GUI3DManagerProps
> {
  private gui3dManager: any

  create(scene: Scene): BabylonGUI3DManager {
    this.gui3dManager = new BabylonGUI3DManager(scene)

    return this.gui3dManager
  }

  addControl(control: Control3D): void {
    this.gui3dManager.addControl(control)
  }

  removeControl(control: Control3D): void {
    this.gui3dManager.removeControl(control)
  }

  componentsCreated(): void {
    // not used
  }

  public get propsHandlers() {
    return []
  }
}
