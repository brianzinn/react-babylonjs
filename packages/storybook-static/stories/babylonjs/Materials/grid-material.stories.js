import React, { useState } from 'react';
import { Engine, Scene, HostRegistrationStore, FiberPushMaterialPropsHandler, FiberMaterialPropsHandler, checkColor3Diff, checkTextureDiff, checkPrimitiveDiff, checkVector3Diff } from 'react-babylonjs';
import { GridMaterial } from '@babylonjs/materials';
import { Vector3, Color3 } from '@babylonjs/core';
import '../../style.css';

export default { title: 'Extensions' };

class GridMaterialPropsHandler {
  getPropertyUpdates(oldProps, newProps) {
    const changedProps = []
    checkColor3Diff(oldProps.mainColor, newProps.mainColor, 'mainColor', changedProps);
    checkColor3Diff(oldProps.lineColor, newProps.lineColor, 'lineColor', changedProps);
    checkPrimitiveDiff(oldProps.gridRatio, newProps.gridRatio, 'gridRatio', changedProps);
    checkVector3Diff(oldProps.gridOffset, newProps.gridOffset, 'gridOffset', changedProps);
    checkPrimitiveDiff(oldProps.majorUnitFrequency, newProps.majorUnitFrequency, 'majorUnitFrequency', changedProps);
    checkPrimitiveDiff(oldProps.minorUnitVisibility, newProps.minorUnitVisibility, 'minorUnitVisibility', changedProps);
    checkPrimitiveDiff(oldProps.opacity, newProps.opacity, 'opacity', changedProps);
    checkPrimitiveDiff(oldProps.preMultiplyAlpha, newProps.preMultiplyAlpha, 'preMultiplyAlpha', changedProps);
    checkTextureDiff(oldProps.opacityTexture, newProps.opacityTexture, 'opacityTexture', changedProps)
    return changedProps.length === 0 ? null : changedProps;
  }
}

class FiberGridMaterial {
  constructor() {
    this.propsHandlers = [
      new GridMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler()
    ];
  }

  getPropsHandlers() {
    return this.propsHandlers;
  }

  addPropsHandler(propHandler) {
    this.propsHandlers.push(propHandler);
  }
}

HostRegistrationStore.Register({
  hostElementName: "gridMaterial",
  hostFactory: (scene) => { return new GridMaterial('test', scene) },
  propHandlerInstance: new FiberGridMaterial(),
  createInfo: {
    "creationType": "...",
    "libraryLocation": "...",
    "namespace": "@babylonjs/materials",
    "parameters": [
      {
        "name": "name",
        "type": "string",
        "optional": false
      },
      {
        "name": "scene",
        "type": "BabylonjsCoreScene",
        "optional": false
      }
    ]
  },
  metadata: {
    "isMaterial": true,
    "className": "GridMaterial"
  }
})

const colors = ["Red", "Green", "Yellow"];

export const GridMaterialExample = () => {
  const [selectedColor, setSelectedColor] = useState('Green');
  const onChange = (e) => {
    setSelectedColor(e.target.value);
  }
  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <select onChange={onChange} defaultValue={selectedColor}>
          {colors.map(color => <option key={color} value={color}>{color}</option>)}
        </select>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
          <Scene>
            <arcRotateCamera name="arc" target={Vector3.Zero()} minZ={0.001}
              alpha={-Math.PI / 4} beta={(Math.PI / 4)} radius={5} upperBetaLimit={(Math.PI / 2) * 0.99}
            />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <ground name="ground1" width={6} height={6} subdivisions={2}>
              <gridMaterial lineColor={Color3[selectedColor]()} />
            </ground>
          </Scene>
        </Engine>
      </div>
    </>
  )
}