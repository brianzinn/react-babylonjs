import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const GizmoBox: FC<{ position: Vector3; color: Color3 }> = ({ position, color }) => (
  <box name="gizmo-box" size={2} position={position}>
    <standardMaterial name="gizmo-box-mat" diffuseColor={color} specularColor={Color3.Black()} />
    <positionGizmo />
  </box>
)

const Gizmo = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <utilityLayerRenderer>
          <GizmoBox color={Color3.Red()} position={new Vector3(-2, 0, 0)} />
          <GizmoBox color={Color3.Yellow()} position={new Vector3(2, 0, 0)} />
        </utilityLayerRenderer>
      </Scene>
    </Engine>
  </div>
)

export default Gizmo
