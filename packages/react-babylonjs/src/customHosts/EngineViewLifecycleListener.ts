import { EngineView } from "@babylonjs/core/Engines/Extensions/engine.views.js";
import { Scene } from "@babylonjs/core/scene.js";
import { Nullable } from "@babylonjs/core/types.js";
import { CreatedInstance } from "../CreatedInstance";
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener";

/**
 * These have no constructor.  Are only created from the engine.
 */
export default class EngineViewLifecycleListener extends DeferredCreationLifecycleListener<
  EngineView,
  any
> {
  createInstance = (
    instance: CreatedInstance<EngineView>,
    scene: Scene,
    props: any
  ): Nullable<EngineView> => {
    const canvas: Nullable<HTMLCanvasElement> =
      props.canvas ?? this.scene.getEngine().getRenderingCanvas();
    if (canvas === null) {
      return null;
    }

    instance.hostInstance = scene
      .getEngine()
      .registerView(canvas, props.camera);
    return instance.hostInstance;
  };

  onUnmount(): void {
    const canvas: Nullable<HTMLCanvasElement> = this.scene
      .getEngine()
      .getRenderingCanvas();
    if (canvas !== null) {
      this.scene.getEngine().unRegisterView(canvas);
    }
  }
}
