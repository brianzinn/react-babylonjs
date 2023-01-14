import { Color3, Color4, Vector3 } from '@babylonjs/core/Maths/math'
import { Control } from '@babylonjs/gui/2D/controls/control'
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer'
// import "@babylonjs/inspector";
import React, { useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'
import ScaledModelWithProgress from '../../ScaledModelWithProgress'

/**
 * official example
 * https://www.babylonjs-playground.com/#6ZVKE3#0
 */
function WithGlowLayer() {
  const glowRef = useRef<GlowLayer | null>(null)

  const onCheckboxClicked = (value: boolean) => {
    if (glowRef.current) {
      glowRef.current.isEnabled = value
    }
  }

  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene clearColor={new Color4(0.02, 0.022, 0.02, 1)}>
        <imageProcessingConfiguration
          assignFrom="imageProcessingConfiguration"
          contrast={1.6}
          exposure={0.6}
          toneMappingEnabled
        />
        <arcRotateCamera
          name="Camera"
          alpha={2.5}
          beta={0.9}
          radius={5}
          lowerRadiusLimit={20}
          upperRadiusLimit={80}
          target={Vector3.Zero()}
          useAutoRotationBehavior
        />

        <hemisphericLight name="toto" direction={Vector3.Up()} />
        <glowLayer ref={glowRef} name="glow" options={{ mainTextureSamples: 2 }} isEnabled={true} />

        <ScaledModelWithProgress
          center={Vector3.Zero()}
          rootUrl="https://www.babylonjs.com/Assets/NeonPipe/glTF/"
          sceneFilename="NeonPipe.gltf"
          progressBarColor={Color3.FromInts(255, 165, 0)}
        />

        <adtFullscreenUi name="ui1">
          <stackPanel
            width="200px"
            isVertical={false}
            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
          >
            <checkbox
              width="20px"
              height="20px"
              isChecked={true}
              color="green"
              onIsCheckedChangedObservable={onCheckboxClicked}
            />
            <textBlock
              text="Glow Enabled"
              width="180px"
              paddingLeft="5px"
              color="white"
              textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
            />
          </stackPanel>
        </adtFullscreenUi>
        <environmentHelper
          options={{
            groundSize: 160,
            skyboxSize: 160,
            sizeAuto: false,
          }}
          setMainColor={[Color3.Gray()]}
        />
      </Scene>
    </Engine>
  )
}

const GlowLayerComponent = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithGlowLayer />
  </div>
)

export default GlowLayerComponent
