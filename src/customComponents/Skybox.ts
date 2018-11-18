import React, { Component } from "react"
import BABYLON from "babylonjs"
import { withBabylonJS, WithBabylonJSContext } from "../Engine"

type SkyboxProps = {
  babylonJSContext: WithBabylonJSContext
  rootUrl: string
}

class Skybox extends Component<SkyboxProps | undefined, any> {
  render() {
    return React.createElement("Box", { size: 100, infiniteDistance: true, renderingGroupId: 0 }, [
      React.createElement("StandardMaterial", { backFaceCulling: false, disableLighting: true }, [
        React.createElement("CubeTexture", {
          key: `cube-texture-${this.props.rootUrl}`,
          rootUrl: this.props.rootUrl,
          coordinatesMode: BABYLON.Texture.SKYBOX_MODE
        })
      ])
    ])
  }
}

export default withBabylonJS(Skybox)
