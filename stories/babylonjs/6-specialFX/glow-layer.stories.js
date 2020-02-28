import React from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene, Model} from '../../../dist/react-babylonjs.es5'
import {Color4, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Control} from '@babylonjs/gui';

/**
 * official example
 * https://www.babylonjs-playground.com/#6ZVKE3#0
 */

function WithGlowLayer() {
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene clearColor={new Color4(0.02, 0.022, 0.02, 1)}>
        <arcRotateCamera
          name='Camera'
          alpha={-Math.PI / 2}
          beta={1}
          radius={110}
          target={Vector3.Zero()}/>

        <hemisphericLight name='toto' direction={Vector3.Up()}/>

        <glowLayer name="glow" options={{mainTextureSamples: 2}} isEnabled={true}/>

        <Model rootUrl='https://www.babylonjs.com/Assets/NeonPipe/glTF/' sceneFilename='NeonPipe.gltf'/>
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
