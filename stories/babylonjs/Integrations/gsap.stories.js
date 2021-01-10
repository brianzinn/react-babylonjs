import '@babylonjs/inspector';
import React, { Component } from 'react';
import { TimelineLite } from 'gsap/all';
import { Engine, Scene, Skybox } from '../../../dist/react-babylonjs';
import { Vector3, Color3, Color4 } from '@babylonjs/core';
import { StandardMaterial, FresnelParameters } from '@babylonjs/core/Materials';
import { CubeTexture } from '@babylonjs/core/Materials/Textures';
import ScaledModelWithProgress from '../ScaledModelWithProgress';
import '../../style.css';

export default { title: 'Integrations' };

class WithGSAP extends Component {
    constructor () {
        super()

        this.state = {
        atomYPos: 0,
        atomScaling: 3.0,
        skyboxIndex: 0
        }

        this.onModelLoaded = this.onModelLoaded.bind(this)
        this.logoTween = new TimelineLite({ paused: true })
    }


    onModelLoaded = (model) => {
        model.meshes.map((mesh, index) => {
        const scene = mesh._scene;
        let material = new StandardMaterial("kosh", scene);
        material.reflectionTexture = new CubeTexture("assets/textures/TropicalSunnyDay", scene);
        material.diffuseColor = new Color3(0, 0, 0);
        material.emissiveColor = new Color3(0.5, 0.5, 0.5);
        material.alpha = 0.2;
        material.specularPower = 16;

        // Fresnel
        material.reflectionFresnelParameters = new FresnelParameters();
        material.reflectionFresnelParameters.bias = 0.1;

        material.emissiveFresnelParameters = new FresnelParameters();
        material.emissiveFresnelParameters.bias = 0.6;
        material.emissiveFresnelParameters.power = 4;
        material.emissiveFresnelParameters.leftColor = Color3.White();
        material.emissiveFresnelParameters.rightColor = Color3.Black();

        material.opacityFresnelParameters = new FresnelParameters();
        material.opacityFresnelParameters.leftColor = Color3.White();
        material.opacityFresnelParameters.rightColor = Color3.Black();
        if(index === 0){
            this.logoTween.to(mesh.scaling, 2, { x: 4, y: 4, z: 4 })
            this.logoTween.to(mesh.scaling, 2, { x: 2, y: 2, z: 2 })
            this.logoTween.to(mesh.rotation, 1, { x: 1, y: 1, z: 1 })
            this.logoTween.play();
        }
        mesh.material = material;  
        }) 
    }

    render () {
        return (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onSceneMount={this.onSceneMount} clearColor={new Color4(1.0, 1.0, 1.0, 1.0)}>
            <Skybox rootUrl={'assets/textures/TropicalSunnyDay'} />
            <arcRotateCamera name='camera1' alpha={Math.PI / 2} beta={Math.PI / 2} radius={9.0} target={Vector3.Zero()} minZ={0.001} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <ScaledModelWithProgress rootUrl={`assets/models/`} sceneFilename='atom.glb' scaleTo={this.state.atomScaling}
                progressBarColor={Color3.FromInts(135, 206, 235)} center={new Vector3(0, this.state.atomYPos, 0)}
                onModelLoaded={this.onModelLoaded}
            />
            </Scene>
        </Engine>
        )
    }
}

export const GSAPTimeline = () => (
    <div style={{ flex: 1, display: 'flex' }}>
        <WithGSAP />
    </div>
)