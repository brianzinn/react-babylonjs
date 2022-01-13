import React from 'react'
import { Vector3, Color4 } from '@babylonjs/core';
import '@babylonjs/core/Rendering/edgesRenderer' // You this need for side-effects
import { Engine, Scene } from 'react-babylonjs'
import '../../style.css';

export default { title: 'Babylon Basic' };

/**
 * https://www.babylonjs-playground.com/#TYAHX#10
 */
export const EdgesRendering = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera name='camera1' alpha={0} beta={Math.PI / 3} radius={10} target={Vector3.Zero()} />
        <hemisphericLight name='light1' direction={Vector3.Up()} />
        <box
          name="box1"
          onCreated={box => box.enableEdgesRendering()}
          edgesWidth={4}
          size={2}
          position={new Vector3(0, 1.2, 0)}
          edgesColor={new Color4(0, 0, 1, 1)}
        />
        <ground
          onCreated={g => g.enableEdgesRendering()}
          edgesWidth={3}
          width={6}
          height={6}
          subdivisions={1}
        />
      </Scene>
    </Engine>
  </div>
)
