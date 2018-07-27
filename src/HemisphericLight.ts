import React, { Component } from "react"

import {
  Scene,
  Engine,
  Mesh,
  MeshBuilder,
  HemisphericLight as BabylonHemisphericLight,
  Light
} from "babylonjs"

import SceneComponent, { SceneComponentProps } from "./SceneComponent"
import LightPropsInitialiser, { LightProps } from "./LightProps"

export type HemisphericLightProps = {
  direction?: BABYLON.Vector3
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

  create(scene: Scene): BabylonHemisphericLight {
    let direction
    if (this.props.direction !== undefined) {
      direction = this.props.direction
    } else {
      direction = new BABYLON.Vector3(
        this.props.x ? this.props.x : 0,
        this.props.y ? this.props.y : 0,
        this.props.z ? this.props.z : 0
      )
    }

    this.light = new BabylonHemisphericLight(this.props.name, direction, scene)

    if (this.props.intensity) {
      this.light.intensity = this.props.intensity
    }

    return this.light
  }

  public get propsInitialisers() {
    return [new LightPropsInitialiser()]
  }
}
