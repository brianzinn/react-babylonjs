import React, { useRef } from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene, Model} from '../../../dist/react-babylonjs'
import {Color3, Color4, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import ScaledModelWithProgress from '../ScaledModelWithProgress'
import { Control } from '@babylonjs/gui/2D/controls/control'

/**
 * official example
 * https://www.babylonjs-playground.com/#6ZVKE3#0
 */

const onSceneCreated = (scene) => {
  scene.imageProcessingConfiguration.contrast = 1.6;
  scene.imageProcessingConfiguration.exposure = 0.6;
  scene.imageProcessingConfiguration.toneMappingEnabled = true;
}

/**
 * TODO
 * loading so slow
 */
function WithGlowLayer() {
  const glowRef = useRef(null);

  const onCheckboxClicked = (value) => {
    if (glowRef.current) {
      glowRef.current.hostInstance.isEnabled = value;
    }
  };

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene clearColor={new Color4(0.02, 0.022, 0.02, 1)} onCreated={onSceneCreated}>
        <arcRotateCamera
          name='Camera'
          alpha={2.5}
          beta={0.9}
          radius={25}
          lowerRadiusLimit={20}
          upperRadiusLimit={80}
          target={Vector3.Zero()}
          useAutoRotationBehavior
        />
        
        <hemisphericLight name='toto' direction={Vector3.Up()}/>
        <glowLayer ref={glowRef} name="glow" options={{mainTextureSamples: 2}} isEnabled={true}/>
        
        <ScaledModelWithProgress rootUrl='https://www.babylonjs.com/Assets/NeonPipe/glTF/' sceneFilename='NeonPipe.gltf'
          progressBarColor={Color3.FromInts(255, 165, 0)}
        />

        <adtFullscreenUi name='ui1'>
          <stackPanel
            width='200px'
            isVertical={false}
            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT }
            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
          >
            <checkbox width='20px' height='20px' isChecked={true} color='green'
              onIsCheckedChangedObservable={onCheckboxClicked}
            />
            <textBlock text='Glow Enabled' width='180px' paddingLeft='5px' color='white'
              textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
            />
          </stackPanel>
        </adtFullscreenUi>
        <environmentHelper options={{
          groundSize: 160,
          skyboxSize: 160,
          sizeAuto: false
        }} setMainColor={[Color3.Gray()]}/>
      </Scene>
    </Engine>
  )
}

export default storiesOf('Special FX', module)
  .add('Glow layer', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <WithGlowLayer/>
    </div>
  ))
