import * as BABYLON from "babylonjs"
import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"

/**
 * This is a host component.  Much like a span or div for ReactDOM.render();
 */
export default class HostWithEventsFiber implements LifecycleListener {
  private _scene: BABYLON.Scene
  private _engine: BABYLON.Engine
  private _hostContextData: any

  private _onParented?: (scene: BABYLON.Scene, engine: BABYLON.Engine, parent: CreatedInstance<any>) => any
  private _onChildAdded?: (scene: BABYLON.Scene, engine: BABYLON.Engine, child: CreatedInstance<any>, hostContextData: any) => any
  private _onMount?: (scene: BABYLON.Scene, engine: BABYLON.Engine, instance: CreatedInstance<any>, hostContextData: any) => any
  private _onUnmount?: (scene: BABYLON.Scene, engine: BABYLON.Engine, /*instance: CreatedInstance<any>,*/ hostContextData: any) => any

  public constructor(scene: BABYLON.Scene, engine: BABYLON.Engine, props: any) {
    this._scene = scene
    this._engine = engine

    if (props.onParented && typeof props.onParented === "function") {
      this._onParented = props.onParented
    }

    if (props.onChildAdded && typeof props.onChildAdded === "function") {
      this._onChildAdded = props.onChildAdded
    }

    if (props.onMount && typeof props.onMount === "function") {
      this._onMount = props.onMount
    }
  }

  public onParented(parent: CreatedInstance<any> | undefined) {
    if (parent !== undefined && this._onParented !== undefined) {
      this._hostContextData = this._onParented(this._scene, this._engine, parent)
    }
  }

  public onChildAdded(child: CreatedInstance<any>): void {
    if (this._onChildAdded) {
      this._hostContextData = this._onChildAdded(this._scene, this._engine, child, this._hostContextData)
    }
  }

  public onMount(instance: CreatedInstance<any>): void {
    if (this._onMount) {
      this._hostContextData = this._onMount(this._scene, this._engine, instance, this._hostContextData)
    }
  }

  public dispose(): void {
    if (this._onUnmount) {
      this._onUnmount(this._scene, this._engine, this._hostContextData)
    }
  }
}
