import { Engine, Scene } from "@babylonjs/core"
import { DecoratedInstance } from "../DecoratedInstance"
import { LifecycleListener } from "../LifecycleListener"

/**
 * This is a host component.  Much like a span or div for ReactDOM.render();
 */
export default class HostWithEventsFiber<T> implements LifecycleListener<T> {
  private _scene: Scene
  private _engine: Engine
  private _hostContextData: any

  private _onParented?: (scene: Scene, engine: Engine, parent: DecoratedInstance<any>) => any
  private _onChildAdded?: (scene: Scene, engine: Engine, child: DecoratedInstance<any>, hostContextData: any) => any
  private _onMount?: (scene: Scene, engine: Engine, instance: DecoratedInstance<T>, hostContextData: any) => any
  private _onUnmount?: (scene: Scene, engine: Engine, /*instance: CreatedInstance<any>,*/ hostContextData: any) => any

  public constructor(scene: Scene, engine: Engine, props: any) {
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

    if (props.onUnmount && typeof props.onUnmount === "function") {
      this._onUnmount = props.onUnmount;
    }
  }

  public onParented(parent: DecoratedInstance<unknown> | undefined) {
    if (parent !== undefined && this._onParented !== undefined) {
      this._hostContextData = this._onParented(this._scene, this._engine, parent)
    }
  }

  public onChildAdded(child: DecoratedInstance<unknown>): void {
    if (this._onChildAdded) {
      this._hostContextData = this._onChildAdded(this._scene, this._engine, child, this._hostContextData)
    }
  }

  public onMount(instance: DecoratedInstance<T>): void {
    if (this._onMount) {
      this._hostContextData = this._onMount(this._scene, this._engine, instance, this._hostContextData)
    }
  }

  public dispose(): void {
    if (this._onUnmount) {
      this._onUnmount(this._scene, this._engine, this._hostContextData)
    }
  }

  public onUnmount(): void {/* empty */}
}
