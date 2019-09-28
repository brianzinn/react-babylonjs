import React, { Component} from 'react'
import { TimelineLite } from "gsap/all";
import { storiesOf } from '@storybook/react'
import '@babylonjs/inspector'
import { Engine, Scene, Skybox } from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3, Color4 } from '@babylonjs/core'
import { StandardMaterial, FresnelParameters } from '@babylonjs/core/Materials'
import { CubeTexture } from '@babylonjs/core/Materials/Textures'
import { ActionManager, SetValueAction } from '@babylonjs/core/Actions'
import ScaledModelWithProgress from '../ScaledModelWithProgress'
import '../../style.css'

const SkyboxScenes = [{
  name: 'sunny day',
  texture: `assets/textures/TropicalSunnyDay`
}, {
  name: 'specular HDR',
  texture: `assets/textures/SpecularHDR.dds`
}]


class WithReact extends Component {
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


  onModelLoaded = (model, {scene}) => {
    model.meshes.map((mesh, index) => {
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
        <Skybox rootUrl={SkyboxScenes[Math.abs(this.state.skyboxIndex) % SkyboxScenes.length].texture} />
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

class WithModel extends Component {
  constructor () {
    super()

    this.state = {
      avocadoYPos: -1.5,
      avocadoScaling: 3.0
    }

    this.moveAvocadoUp = this.moveAvocadoUp.bind(this)
    this.moveAvocadoDown = this.moveAvocadoDown.bind(this)
    this.increaseAvocadoSize = this.increaseAvocadoSize.bind(this)
    this.decreaseAvocadoSize = this.decreaseAvocadoSize.bind(this)
    this.onModelLoaded = this.onModelLoaded.bind(this)
  }

  moveAvocadoDown () {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos - 0.5
    }))
  }

  moveAvocadoUp () {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos + 0.5
    }))
  }

  increaseAvocadoSize () {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling + 0.1
    }))
  }

  decreaseAvocadoSize () {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling - 0.1
    }))
  }

  onModelLoaded  = (model, sceneContext) => {
    let mesh = model.meshes[1]
    mesh.actionManager = new ActionManager(sceneContext.scene)
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOverTrigger,
        mesh.material,
        'wireframe',
        true
      )
    )
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOutTrigger,
        mesh.material,
        'wireframe',
        false
      )
    )
  }

  render () {
    let baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          <arcRotateCamera name='camera1' alpha={Math.PI / 2} beta={Math.PI / 2} radius={9.0} target={Vector3.Zero()} minZ={0.001} />
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

          <ScaledModelWithProgress rootUrl={`${baseUrl}BoomBox/glTF/`} sceneFilename='BoomBox.gltf' scaleTo={3}
            progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(2.5, 0, 0)}
            onModelLoaded={this.onModelLoaded}
          />

          <ScaledModelWithProgress rootUrl={`${baseUrl}Avocado/glTF/`} sceneFilename='Avocado.gltf' scaleTo={this.state.avocadoScaling}
            progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(-2.5, this.state.avocadoYPos, 0)}
          />
        </Scene>
      </Engine>
    )
  }
}

export default storiesOf('Babylon Basic', module)
  .add('Model', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <WithModel />
    </div>
  ))
  .add('Model Atom GSAP Tween', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <WithReact />
    </div>
  ))

  