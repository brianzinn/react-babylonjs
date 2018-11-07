import React, { Component } from 'react'
import BABYLON from 'babylonjs'
import { withScene, WithSceneContext } from './Scene';

type SkyboxProps = {
    sceneContext: WithSceneContext
    rootUrl: string
}

class Skybox extends Component<SkyboxProps | undefined, any> {
    render() {
        return React.createElement('Box', { size: 100, infiniteDistance: true, renderingGroupId: 0}, [
            React.createElement('StandardMaterial', { backFaceCulling: false, disableLighting: true }, [
                React.createElement('CubeTexture', {rootUrl: this.props.rootUrl, scene: this.props.sceneContext.scene, coordinatesMode: BABYLON.Texture.SKYBOX_MODE })
            ])
        ]);
    }
}

export default withScene(Skybox);