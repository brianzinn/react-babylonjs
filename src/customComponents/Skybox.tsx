import React from "react"
import { Texture } from "@babylonjs/core/Materials/Textures"

interface SkyboxProps {
  rootUrl: string
  size?: number
  name?: string
}

const Skybox: React.FC<SkyboxProps> = (props: SkyboxProps) => 
   <box name={name ? `skybox-${name}` : 'skybox'} size={props.size ?? 100} infiniteDistance={true} renderingGroupId={0}>
     <standardMaterial name={name ? `skybox-material-${name}` : 'skybox-material'} backFaceCulling={false} disableLighting={true}>
       <cubeTexture key={`cube-texture-${props.rootUrl}`} rootUrl={props.rootUrl} coordinatesMode={Texture.SKYBOX_MODE} assignTo={'reflectionTexture'} />
     </standardMaterial>
   </box>

export default Skybox
