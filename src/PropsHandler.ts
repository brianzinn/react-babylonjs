import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math'
import { Control } from '@babylonjs/gui/2D/controls/control'
import { Observable, FresnelParameters, BaseTexture } from '@babylonjs/core'
import { type } from 'os'

// TODO: type/value need to be joined, as the method will have multiple.
export interface PropertyUpdate {
  type: string
  value: any
  propertyName: string,
  changeType: PropChangeType,
  /**
   * When provided will dynamically target a property of 'babylonJSobject'.
   */
  target?: string
}

export type UpdatePayload = PropertyUpdate[] | null

export interface PropsHandler<U> {
  getPropertyUpdates(oldProps: U, newProps: U): UpdatePayload
}

export interface HasPropsHandlers<U> {
  getPropsHandlers(): PropsHandler<U>[]
  addPropsHandler(propHandler: PropsHandler<U>): void
}

export enum PropChangeType {
  Primitive = "Primitive",
  Vector3 = "Vector3",
  Color3 = "Color3",
  Color4 = "Color4",
  Control = "Control",
  NumericArray = "NumericArray",
  Observable = "Observable",
  Method = "Method",
  LambdaExpression = "LambdaExpression",
  FresnelParameters = "FresnelParameters",
  Texture = "Texture"
}

export const checkVector3Diff = (oldProp: Vector3 | undefined, newProp: Vector3 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (newProp && (!oldProp || !oldProp.equals(newProp))) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Vector3,
      value: newProp
    })
  }
}

export const checkColor3Diff = (oldProp: Color3 | undefined, newProp: Color3 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (newProp && (!oldProp || !oldProp.equals(newProp))) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Color3,
      value: newProp
    })
  }
}

export const checkColor4Diff = (oldProp: Color4 | undefined, newProp: Color4 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  // Color4.equals() not added until PR #5517
  if (newProp && (!oldProp || oldProp.r !== newProp.r || oldProp.g !== newProp.g || oldProp.b !== newProp.b || oldProp.a !== newProp.a)) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Color4,
      value: newProp
    })
  }
}

export const checkFresnelParametersDiff = (oldProp: FresnelParameters | undefined, newProp: FresnelParameters | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  // FresnelParameters.equals() not added until PR #7818 (https://github.com/BabylonJS/Babylon.js/pull/7818)
  if (newProp /* won't clear the property value */ && (
      !oldProp ||
      oldProp.bias !== newProp.bias ||
      oldProp.power !== newProp.power ||
      (!oldProp.leftColor || !oldProp.leftColor.equals(newProp.leftColor)) ||
      (!oldProp.rightColor || !oldProp.rightColor.equals(newProp.rightColor)) ||
      oldProp.isEnabled !== newProp.isEnabled
      )
  ) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.FresnelParameters,
      value: newProp
    })
  }
}

export const checkLambdaDiff = (oldProp: any | undefined, newProp: any | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (newProp !== oldProp) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.LambdaExpression,
      value: newProp
    })
  }
}

export const checkControlDiff = (oldProp: Control | undefined, newProp: Control | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  // only sets once
  if (newProp && !oldProp) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Control,
      value: newProp
    })
  }
}

export type PrimitiveType = string | number | undefined | null | boolean;

export const checkPrimitiveDiff = (oldProp: PrimitiveType, newProp: PrimitiveType, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (newProp !== oldProp) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Primitive,
      value: newProp
    })
  }
}

export const checkTextureDiff = (oldProp: BaseTexture | undefined, newProp: BaseTexture | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (newProp !== oldProp) {
    console.log('pushing texture:', propertyName, propertyType)
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Texture,
      value: newProp
    })
  }
}

export const checkNumericArrayDiff = (oldProp: number[] | undefined, newProp: number[] | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  // just length - missing loop + indexOf comparison (or deepEquals())
  if (newProp && (!oldProp || oldProp.length !== newProp.length)) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.NumericArray,
      value: newProp
    })
  }
}

export const checkObservableDiff = (oldProp: Observable<any>, newProp: Observable<any>, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  // if it starts with 'on' then we have different handling.
  if (oldProp === undefined && oldProp !== newProp) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Observable,
      value: newProp
    })
  }
}

/**
 * This method differs from the rest in that we need to pass in a list of arguments.  Can be done by using:
 * 1. an array to signify each parameter (or Object.values(...)).
 * 
 * @param oldProp value of method (array, object, primitive, etc.)
 * @param newProp value of method (array, object, primitive, etc.)
 * @param propertyName name of property for diff
 * @param propertyType signature of method (as string)
 * @param changedProps list to append to when a diff is found
 */
export const checkMethodDiff = (oldProp: any, newProp: any, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]): void => {
  if (oldProp !== newProp) {
    changedProps.push({
      propertyName,
      type: propertyType,
      changeType: PropChangeType.Method,
      value: newProp
    })
  }
}
