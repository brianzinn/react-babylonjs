import React from 'react'
import { Vector3 } from '@babylonjs/core'
import { Engine, Scene } from 'react-babylonjs'

import '../../style.css'

export default { title: 'GUI' };

/*export */ const Grid = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera name='camera1' radius={7} beta={Math.PI / 4} alpha={Math.PI / 2} target={Vector3.Zero()} minZ={0.001} wheelPrecision={30} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <adtFullscreenUi name='ui1'>
          <grid width='500px'>
            <rowDefinition height={1} isPixel />
          </grid>
        </adtFullscreenUi>
      </Scene>
    </Engine>
  </div>
)

Grid.story = {
  name: "Grid"
}