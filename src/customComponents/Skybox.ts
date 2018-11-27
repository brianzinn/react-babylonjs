import React from "react"
import { Texture } from "babylonjs"
//import { withBabylonJS } from "../Engine"
import { Box } from "../generatedCode"

interface SkyboxProps {
  //babylonJSContext: PropTypes.any, // To get scene/engine as props via Context API HOC withBabylonJS(Component).
  rootUrl: string
}

const Skybox: React.SFC<SkyboxProps> = (props: SkyboxProps) => {
  return React.createElement("Box", { size: 100, infiniteDistance: true, renderingGroupId: 0 }, [
    React.createElement("StandardMaterial", { backFaceCulling: false, disableLighting: true }, [
      React.createElement("CubeTexture", {
        key: `cube-texture-${props.rootUrl}`, // changing rootUrl will reload the CubeTexture
        rootUrl: props.rootUrl,
        coordinatesMode: Texture.SKYBOX_MODE
      })
    ])
  ])
}

//export default withBabylonJS(Skybox)
export default Skybox
