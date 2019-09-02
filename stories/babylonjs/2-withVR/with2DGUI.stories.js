import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Control } from 'babylonjs-gui'
import {
  Engine, Scene, ArcRotateCamera, HemisphericLight, Plane, AdvancedDynamicTexture, TextBlock, Rectangle, StackPanel, Button, Box, StandardMaterial, VRExperienceHelper
} from '../../../dist/react-babylonjs.es5'

import { Vector3, Color3, Color4, Animation, ExponentialEase, EasingFunction } from 'babylonjs'
import '../../style.css'

export class With2DUI extends Component {
  constructor () {
    super()

    this.state = {
      plane: undefined,
      showModal: false,
      clickMeshName: undefined,
      allowedMeshes: [
        'red box',
        'blue box',
        'green box'
      ],
      sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5)
    }

    this.meshPicked = this.meshPicked.bind(this)
    this.setPlane = this.setPlane.bind(this)
    // TODO: fix that bind() is needed on assignment on button pointerDown handlers
  }

  meshPicked (mesh) {
    if (this.state.allowedMeshes.indexOf(mesh.name) !== -1) {
      const clickedMeshName = mesh.name
      let clickedMeshColor
      let sceneClearColor
      switch (clickedMeshName) {
        case 'red box':
          clickedMeshColor = Color3.Red().toHexString()
          sceneClearColor = new Color4(1, 0, 0, 0.5)
          break
        case 'blue box':
          clickedMeshColor = Color3.Blue().toHexString()
          sceneClearColor = new Color4(0, 0, 1, 0.5)
          break
        case 'green box':
        default:
          clickedMeshColor = Color3.Green().toHexString()
          sceneClearColor = new Color4(0, 1, 0, 0.5)
          break
      }

      this.setState((state) => ({
        ...state,
        showModal: true,
        clickedMeshName,
        clickedMeshColor,
        sceneClearColor
      }))
    } else {
      console.log('ignoring clicks on:', mesh.name, this.state)
    }
  }

  deleteSelectedMesh () {
    let { plane } = this.state
    let meshToDelete = plane._scene.getMeshByName(this.state.clickedMeshName)

    meshToDelete.dispose()

    this.setState((state) => ({
      ...state,
      sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5),
      allowedMeshes: state.allowedMeshes.filter(name => name !== state.clickedMeshName)
    }))

    // TODO: if they're all 'deleted' - recreate them?
    this.hideModal()
  }

  hideModal () {
    let { plane } = this.state
    if (!plane) {
      return
    }

    let keys = []
    keys.push({ frame: 0, value: 1 })
    keys.push({ frame: 10, value: 0 })

    var animationClose = new Animation(
      'tv-off-1984',
      'scaling.x',
      10,
      Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    animationClose.setKeys(keys)

    let easingFunction = new ExponentialEase(9.7) // BABYLON.QuarticEase()
    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT)
    animationClose.setEasingFunction(easingFunction)

    plane.animations.push(animationClose)
    plane._scene.beginAnimation(plane, 0, 100, false, 1, () => {
      plane.dispose()
      this.setState((state) => ({
        ...state,
        showModal: false,
        plane: undefined,
        sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5)
      }))
    })
  }

  setPlane (plane) {
    this.setState((state) => ({
      ...state,
      plane
    }))

    if (plane._scene && plane._scene.activeCamera) {
      let { activeCamera } = plane._scene
      let forwardRayDirection = activeCamera.getForwardRay().direction
      plane.position = activeCamera.position.add(forwardRayDirection.scale(1.5 / activeCamera.fov /* * forwardRay.length */))
      plane.lookAt(activeCamera.position)
    }
  }

  render () {
    let dialogWidth = 3
    let dialogHeight = 1

    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene clearColor={this.state.sceneClearColor} onMeshPicked={this.meshPicked}>
          <ArcRotateCamera name='camera1' radius={7} beta={Math.PI / 4} alpha={Math.PI / 2} target={Vector3.Zero()} minZ={0.001} wheelPrecision={30}
            onViewMatrixChangedObservable={(camera) => {
              let { plane } = this.state

              // console.log('camera FOV', camera.fov, camera)
              if (plane) {
                let forwardRay = camera.getForwardRay()

                plane.position = camera.position.clone().add(forwardRay.direction.scale(1.5 / camera.fov /* * forwardRay.length */))
                plane.lookAt(camera.position)
              }
            }}
          />
          <HemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
          <Box size={2} name='red box' position={new Vector3(-2.5, 1, 0)}>
            <StandardMaterial name='red-mat' diffuseColor={Color3.Red()} specularColor={Color3.Black()} />
          </Box>
          <Box size={2} name='blue box' position={new Vector3(0, 1, 0)}>
            <StandardMaterial diffuseColor={Color3.Blue()} specularColor={Color3.Black()} />
          </Box>
          <Box size={2} name='green box' position={new Vector3(2.5, 1, 0)}>
            <StandardMaterial diffuseColor={Color3.Green()} specularColor={Color3.Black()} />
          </Box>
          {this.state.showModal === true &&
          <Plane name='dialog' width={3} height={3 * (dialogHeight / dialogWidth)} onCreated={this.setPlane}>
            <AdvancedDynamicTexture name='dialogTexture' height={1024} width={1024} createForParentMesh>
              <Rectangle name='rect-1' background='white' color='#666666' height={dialogHeight / dialogWidth} width={1}
                scaleY={dialogWidth} scaleX={1} thickness={2} cornerRadius={12} >
                <StackPanel name='sp-1'>
                  <Rectangle name='rect-2' height='20%' paddingTop='6%'>
                    <StackPanel name='sp-2' isVertical={false}>
                      <TextBlock name='selection-made' text='Selection Made' color='black' fontSize={28} fontStyle='bold'
                        textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                        textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                        paddingLeft='2%' paddingTop='6%' width='80%'
                      />
                      <Button name='close-icon' background='white' paddingLeft='13%' width='18%' height='75%' onPointerDownObservable={this.hideModal.bind(this)}>
                        <TextBlock text={'\uf00d'} fontFamily='FontAwesome' fontStyle='bold' fontSize={24} color='black' />
                      </Button>
                    </StackPanel>
                  </Rectangle>
                  <Rectangle name='rect-3' height='60%' thickness={2} color='#EEEEEE'>
                    <StackPanel name='sp-3'>
                      <TextBlock name='description' key={`body-${this.state.clickedMeshName}`} text={`You have clicked on '${this.state.clickedMeshName}' .\n....${this.state.allowedMeshes.length} remaining...`}
                        color='black' fontSize={28} textWrapping height='40%'
                        textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                        textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                        paddingLeft='2%' paddingTop='6%'
                      />
                      {
                        this.state.allowedMeshes.map(allowedMesh => (
                          <TextBlock key={`opt--${this.state.clickedMeshName}-${allowedMesh}`} text={'• ' + allowedMesh} color='black' fontSize={28} height={`${60 / this.state.allowedMeshes.length}%`}
                            textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                            textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                            paddingLeft='6%'
                          />
                        ))
                      }
                    </StackPanel>
                  </Rectangle>
                  <StackPanel name='footer-sp' height='20%' isVertical={false}>
                    <Button name='cancel-button' background='#6c757d' paddingLeft='56%' width='70%' height='90%' cornerRadius={10} onPointerDownObservable={this.hideModal.bind(this)}>
                      <TextBlock name='cancel-text' text='Cancel' fontSize={28} fontStyle='bold' color='white' />
                    </Button>
                    <Button name='delete-button' background={this.state.clickedMeshColor} paddingLeft='2%' width='28%' height='90%'
                      cornerRadius={10} onPointerDownObservable={this.deleteSelectedMesh.bind(this)}>
                      <TextBlock name='cancel-text' text={`Delete '${this.state.clickedMeshName}'`} fontSize={28} fontStyle='bold' color='white' />
                    </Button>
                  </StackPanel>
                </StackPanel>
              </Rectangle>
            </AdvancedDynamicTexture>
          </Plane>
          }
          <VRExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions />
        </Scene>
      </Engine>
    )
  }
}

export default storiesOf('With VR', module)
  .addWithJSX('Simple 2D GUI', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <With2DUI />
    </div>
  ))
