import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Vector3, Color3, Color4, Animation, ExponentialEase, EasingFunction } from '@babylonjs/core'
import { Control } from '@babylonjs/gui'
import { Engine, Scene, Button } from '../../../dist/react-babylonjs'

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

      window.setTimeout(() => {
        // we only need this hack because of storybook?
        let forwardRayDirection = activeCamera.getForwardRay().direction
        plane.position = activeCamera.position.add(forwardRayDirection.scale(1.5 / activeCamera.fov /* * forwardRay.length */))
        plane.lookAt(activeCamera.position, 0, Math.PI, Math.PI)
      }, 10)
    }
  }

  render () {
    let dialogWidth = 3
    let dialogHeight = 1

    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene clearColor={this.state.sceneClearColor} onMeshPicked={this.meshPicked}>
          <arcRotateCamera name='camera1' radius={7} beta={Math.PI / 4} alpha={Math.PI / 2} target={Vector3.Zero()} minZ={0.001} wheelPrecision={30}
            onViewMatrixChangedObservable={(camera) => {
              let { plane } = this.state

              if (plane) {
                let forwardRay = camera.getForwardRay()
                plane.position = camera.position.clone().add(forwardRay.direction.scale(1.5 / camera.fov /* * forwardRay.length */))
                plane.lookAt(camera.position, 0, Math.PI, Math.PI)
              }
            }}
          />
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
          <box size={2} name='red box' position={new Vector3(-2.5, 1, 0)}>
            <standardMaterial name='red-mat' diffuseColor={Color3.Red()} specularColor={Color3.Black()} />
          </box>
          <box size={2} name='blue box' position={new Vector3(0, 1, 0)}>
            <standardMaterial diffuseColor={Color3.Blue()} specularColor={Color3.Black()} />
          </box>
          <box size={2} name='green box' position={new Vector3(2.5, 1, 0)}>
            <standardMaterial diffuseColor={Color3.Green()} specularColor={Color3.Black()} />
          </box>
          {this.state.showModal === true &&
          <plane name='dialog' width={3} height={3 * (dialogHeight / dialogWidth)} onCreated={this.setPlane} rotation={new Vector3(0, Math.PI, 0)}>
            <advancedDynamicTexture name='dialogTexture' height={1024} width={1024} createForParentMesh>
              <rectangle name='rect-1' background='white' color='#666666' height={dialogHeight / dialogWidth} width={1}
                scaleY={dialogWidth} scaleX={1} thickness={2} cornerRadius={12} >
                <stackPanel name='sp-1'>
                  <rectangle name='header-rectangle' height='70px'
                    verticalAlignment={Control.HORIZONTAL_ALIGNMENT_CENTER}
                    horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                  >
                    <stackPanel name='header-stack-panel' isVertical={false} width='100%'>
                      <textBlock name='selection-made' text='Selection Made' color='black' fontSize={28} fontStyle='bold' paddingLeft='20px'
                        textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                        textVerticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
                      />
                      <babylon-button name='close-icon' width='1000px' paddingLeft='950px' height='80px' onPointerDownObservable={this.hideModal.bind(this)}>
                        <textBlock text={'\uf00d'} fontFamily='FontAwesome' fontStyle='bold' fontSize={24} color='black'
                          textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
                          textVerticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
                        />
                      </babylon-button>
                    </stackPanel>
                  </rectangle>
                  <rectangle name='body-rectangle' height='200px' thickness={2} color='#EEEEEE'>
                    <stackPanel name='sp-3'>
                      <textBlock name='description' key={`body-${this.state.clickedMeshName}`} text={`You have clicked on '${this.state.clickedMeshName}' .\n....${this.state.allowedMeshes.length} remaining...`}
                        color='black' fontSize={28} textWrapping height='100px'
                        textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                        textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                        paddingLeft='10px' paddingTop='10px'
                      />
                      {
                        this.state.allowedMeshes.map(allowedMesh => (
                          <textBlock key={`opt--${this.state.clickedMeshName}-${allowedMesh}`} text={'• ' + allowedMesh} color='black' fontSize={28} height={`${90 / this.state.allowedMeshes.length}px`}
                            textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                            textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                            paddingLeft='20px'
                          />
                        ))
                      }
                    </stackPanel>
                  </rectangle>
                  <stackPanel name='footer-sp' height='80px' paddingTop='10px' paddingBottom='10px' isVertical={false} horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT} verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP} >
                    <Button name='cancel-button' background='#6c757d' width='290px' height='60px' cornerRadius={10} onPointerDownObservable={this.hideModal.bind(this)}>
                      <textBlock name='cancel-text' text='Cancel' fontSize={28} fontStyle='bold' color='white' />
                    </Button>
                    <babylon-button name='delete-button' background={this.state.clickedMeshColor} paddingLeft='50px' paddingRight='30px' width='350px' height='60px'
                      cornerRadius={10} onPointerDownObservable={this.deleteSelectedMesh.bind(this)}>
                      <textBlock name='cancel-text' text={`Delete '${this.state.clickedMeshName}'`} fontSize={28} fontStyle='bold' color='white' 
                        textVerticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
                      />
                    </babylon-button>
                  </stackPanel>
                </stackPanel>
              </rectangle>
            </advancedDynamicTexture>
          </plane>
          }
          <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions />
        </Scene>
      </Engine>
    )
  }
}

export default storiesOf('With VR', module)
  .add('Simple 2D GUI', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <With2DUI />
    </div>
  ))
