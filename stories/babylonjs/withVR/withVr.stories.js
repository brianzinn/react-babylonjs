import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import {
  Engine, Scene, ArcRotateCamera, StandardMaterial, VRExperienceHelper, IcoSphere,
  DirectionalLight, ShadowGenerator, EnvironmentHelper
} from '../../../dist/react-babylonjs.es5'

import ScaledModelWithProgress from '../ScaledModelWithProgress'
import SingleAxisRotateMeshBehavior from '../SingleAxisRotateMeshBehavior'
import { Vector3, Color3, Axis } from 'babylonjs'
import '../../style.css'

export class WithVR extends Component {
  constructor () {
    super()

    this.state = {
      modelRotationY: Math.PI
    }

    this.spinModelClockwise = this.spinModelClockwise.bind(this)
    this.spinModelCounterClockwise = this.spinModelCounterClockwise.bind(this)
    this.onMeshPicked = this.onMeshPicked.bind(this)
  }

  spinModelClockwise () {
    this.setState((state) => ({
      ...state,
      modelRotationY: state.modelRotationY + 0.1
    }))
  }

  spinModelCounterClockwise () {
    this.setState((state) => ({
      ...state,
      modelRotationY: state.modelRotationY - 0.1
    }))
  }

  onMeshPicked (mesh) {
    switch (mesh.name) {
      case 'clockwise':
        this.spinModelCounterClockwise()
        break
      case 'counterClockwise':
        this.spinModelClockwise()
        break
      default:
        console.log(`not handling mesh pick ${mesh.name}`)
    }
  }

  render () {
    let baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onMeshPicked={this.onMeshPicked}>
          <ArcRotateCamera name='arc' target={new Vector3(0, 1, 0)}
            alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
            radius={2} minZ={0.001} wheelPrecision={50} />

          <DirectionalLight name='dl' direction={new Vector3(0, -0.5, 0.5)} position={new Vector3(0, 2, 0.5)}>
            <ShadowGenerator mapSize={1024} useBlurExponentialShadowMap blurKernel={32} shadowCasters={['counterClockwise', 'clockwise', 'BoomBox']} />
          </DirectionalLight>

          <IcoSphere name='counterClockwise' position={new Vector3(-0.5, 1, 0)} radius={0.2} flat subdivisions={1}>
            <StandardMaterial
              diffuseColor={Color3.Yellow()}
              specularColor={Color3.Black()}
            />
            <SingleAxisRotateMeshBehavior rpm={4} axis={Axis.Y} />
          </IcoSphere>
          <ScaledModelWithProgress rootUrl={`${baseUrl}BoomBox/glTF/`} sceneFilename='BoomBox.gltf' scaleTo={0.4}
            progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, 1, 0)}
            modelRotation={new Vector3(0, this.state.modelRotationY, 0)}
          />
          <IcoSphere name='clockwise' position={new Vector3(0.5, 1, 0)} radius={0.2} flat subdivisions={1}>
            <StandardMaterial
              diffuseColor={Color3.FromInts(255, 165, 0)}
              specularColor={Color3.Black()}
            />
            <SingleAxisRotateMeshBehavior rpm={4} axis={Axis.Y} />
          </IcoSphere>
          <VRExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} teleportEnvironmentGround enableInteractions />
          <EnvironmentHelper options={{ enableGroundShadow: true /* true by default */, groundYBias: 1 }} mainColor={Color3.FromHexString('#74b9ff')} />
        </Scene>
      </Engine>
    )
  }
}

export default storiesOf('With VR', module)
  .add('Simple VR', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <WithVR />
    </div>
  ))
