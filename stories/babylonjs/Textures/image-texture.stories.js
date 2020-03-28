import React from 'react'
import '@babylonjs/inspector'
import {Engine, Scene, Model} from '../../../dist/react-babylonjs'
import {Color4, Vector3, Color3} from '@babylonjs/core/Maths/math'
import '../../style.css'

export default { title: 'Textures' };

/**
 * official examples
 * - https://www.babylonjs-playground.com/#YDO1F#75
 * - https://www.babylonjs-playground.com/#20OAV9#15
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
          target={Vector3.Zero()}
        />

        <hemisphericLight
          name='light1'
          direction={Vector3.Up()}
          intensity={0.7}
          diffuse={Color3.Red()}
          specular={Color3.Green()}
          groundColor={Color3.Green()}
        />

        <sphere name="sphere" position={new Vector3(-1.5, 0, 0)}>
          <standardMaterial>
            <texture assignTo="emissiveTexture" url={'assets/textures/grass.png'} />
          </standardMaterial>
        </sphere>
        <box name='box'>
          <standardMaterial name='dog' backFaceCulling={false}>
            <texture assignTo="diffuseTexture" url={url} hasAlpha={true} />
          </standardMaterial>
        </box>
        <sphere name="sphere" position={new Vector3(1.5, 0, 0)}>
          <standardMaterial diffuseColor={Color3.Green()}>
            <texture assignTo="bumpTexture" url={'http://i.imgur.com/wGyk6os.png'} />
          </standardMaterial>
        </sphere>
      </Scene>
    </Engine>
  )
}

export const ImageTexture = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <WithImageTexture/>
  </div>
)
