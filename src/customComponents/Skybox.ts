import React from "react"
import { Texture } from "@babylonjs/core/Materials/Textures"

interface SkyboxProps {
  // babylonJSContext: PropTypes.any, // To get scene/engine as props via Context API HOC withBabylonJS(Component).
  rootUrl: string
}

const Skybox: React.FC<SkyboxProps> = (props: SkyboxProps) => {
  return React.createElement("box", { size: 100, infiniteDistance: true, renderingGroupId: 0 }, [
    React.createElement("standardMaterial", { backFaceCulling: false, disableLighting: true }, [
      React.createElement("cubeTexture", {
        key: `cube-texture-${props.rootUrl}`, // changing rootUrl will reload the CubeTexture
        rootUrl: props.rootUrl,
        coordinatesMode: Texture.SKYBOX_MODE
      })
    ])
  ])
}

// export default withBabylonJS(Skybox)
export default Skybox
