import React from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '../../style.css'

export default { title: 'Babylon Basic' };

const GizmoBox = ({position, color} = props) => (
  <box size={2} position={position}>
    <standardMaterial diffuseColor={color} specularColor={Color3.Black()} />
    <positionGizmo />
  </box>
)

export const Gizmo = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <utilityLayerRenderer>
          <GizmoBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} />
          <GizmoBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} />
        </utilityLayerRenderer>
      </Scene>
    </Engine>
  </div>
)
