import { Color3, Texture, Vector3 } from '@babylonjs/core'
import { GridMaterial } from '@babylonjs/materials'
import React, { ChangeEvent, useState } from 'react'
import {
  BabylonNode,
  checkColor3Diff,
  checkPrimitiveDiff,
  checkTextureDiff,
  checkVector3Diff,
  Engine,
  FiberMaterialPropsHandler,
  FiberPushMaterialPropsCtor,
  FiberPushMaterialPropsHandler,
  HostRegistrationStore,
  PropertyUpdate,
  PropsHandler,
  Scene,
} from 'react-babylonjs'

type FiberGridMaterialProps = {
  mainColor?: Color3
  lineColor?: Color3
  gridRatio?: number
  gridOffset?: Vector3
  majorUnitFrequency?: number
  minorUnitVisibility?: number
  opacity?: number
  preMultiplyAlpha?: number
  opacityTexture?: Texture
}

class GridMaterialPropsHandler {
  getPropertyUpdates(oldProps: any, newProps: any) {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.mainColor, newProps.mainColor, 'mainColor', changedProps)
    checkColor3Diff(oldProps.lineColor, newProps.lineColor, 'lineColor', changedProps)
    checkPrimitiveDiff(oldProps.gridRatio, newProps.gridRatio, 'gridRatio', changedProps)
    checkVector3Diff(oldProps.gridOffset, newProps.gridOffset, 'gridOffset', false, changedProps)
    checkPrimitiveDiff(
      oldProps.majorUnitFrequency,
      newProps.majorUnitFrequency,
      'majorUnitFrequency',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minorUnitVisibility,
      newProps.minorUnitVisibility,
      'minorUnitVisibility',
      changedProps
    )
    checkPrimitiveDiff(oldProps.opacity, newProps.opacity, 'opacity', changedProps)
    checkPrimitiveDiff(
      oldProps.preMultiplyAlpha,
      newProps.preMultiplyAlpha,
      'preMultiplyAlpha',
      changedProps
    )
    checkTextureDiff(
      oldProps.opacityTexture,
      newProps.opacityTexture,
      'opacityTexture',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

class FiberGridMaterial {
  private propsHandlers: PropsHandler<any>[]

  constructor() {
    this.propsHandlers = [
      new GridMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers() {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<any>) {
    this.propsHandlers.push(propHandler)
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      gridMaterial: FiberGridMaterialProps & FiberPushMaterialPropsCtor & BabylonNode<GridMaterial>
    }
  }
}
HostRegistrationStore.Register({
  hostElementName: 'gridMaterial',
  hostFactory: (scene: Scene, props: any) => {
    const name = 'name' in props ? props.name : 'unknown'
    console.log(`creating '${name}'`)
    const material = new GridMaterial(name, scene)
    return material
  },
  propHandlerInstance: new FiberGridMaterial(),
  createInfo: {
    creationType: '...',
    libraryLocation: '...',
    namespace: '@babylonjs/materials',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  },
  metadata: {
    isMaterial: true,
    className: 'GridMaterial',
  },
})

type KnownColorType = 'Red' | 'Green' | 'Yellow'

const colors = ['Red', 'Green', 'Yellow']

const GridMaterialExample = () => {
  const [selectedColor, setSelectedColor] = useState<KnownColorType>('Green')
  const onColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value as KnownColorType)
  }
  return (
    <>
      <div className="row">
        <label className="col-sm-2 col-form-label" htmlFor="color-select">
          Choose Color:
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            onChange={onColorChange}
            id="color-select"
            defaultValue={selectedColor}
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
            <Scene>
              <arcRotateCamera
                name="arc"
                target={Vector3.Zero()}
                minZ={0.001}
                alpha={-Math.PI / 4}
                beta={Math.PI / 4}
                radius={5}
                upperBetaLimit={(Math.PI / 2) * 0.99}
              />
              <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
              <ground name="ground1" width={6} height={6} subdivisions={2}>
                <gridMaterial name="grid-material" lineColor={Color3[selectedColor]()} />
              </ground>
            </Scene>
          </Engine>
        </div>
      </div>
    </>
  )
}

export default GridMaterialExample
