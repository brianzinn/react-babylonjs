import React, { Component } from "react"
import BABYLON from 'babylonjs'
import { AdvancedDynamicTexture } from "babylonjs-gui"
import { withScene, WithSceneContext } from "../Scene"
import { CreatedInstance, CreatedInstanceMetadata } from "../ReactBabylonJSHostConfig";

type AdvancedDynamicTextureForMeshProps = {
  sceneContext: WithSceneContext
  forMesh?: string
}

// TODO: we need a full screen version of this!
class AdvancedDynamicTextureForMesh extends Component<AdvancedDynamicTextureForMeshProps, any> {

  private metadata : CreatedInstanceMetadata = {
    className: "AdvancedDynamicTextureForMesh",
    isGUI2DControl: true
  }

  render() {
    const props = {
      ...this.props,
      width: 1024,
      height: 1024
    };
    // TODO: [props.children] not used as third parameter.  ensure reconciler will handle all children nodes.
    return React.createElement('AdvancedDynamicTexture',  { ...props, parentMesh: true, metadata: this.metadata})
  }
}

export default withScene(AdvancedDynamicTextureForMesh)