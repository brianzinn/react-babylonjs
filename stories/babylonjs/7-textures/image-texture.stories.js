import React from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene, Model} from '../../../dist/react-babylonjs.es5'
import {Color4, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Control} from '@babylonjs/gui';

/**
 * official example
 * https://www.babylonjs-playground.com/#YDO1F#75
 */


function WithImageTexture() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png';

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene clearColor={new Color4(0.02, 0.022, 0.02, 1)}>
        <arcRotateCamera
          name='Camera'
          alpha={3 * Math.PI / 2}
          beta={Math.PI / 2}
          radius={5}
          target={Vector3.Zero()}/>

        <hemisphericLight name='light1' direction={Vector3.Up()} intensity={0.7}/>

        <box name='box'>
          <standardMaterial name='dog' backFaceCulling={false}>
            <texture url={url} hasAlpha={true}/>
          </standardMaterial>
        </box>
      </Scene>
    </Engine>
  )
}

export default storiesOf('Textures', module)
  .add('Image texture', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <WithImageTexture/>
    </div>
  ))
