import { Vector3, Color3, Color4, Mesh } from '@babylonjs/core'
import { PropertyUpdate } from "./PropsHandler"

export const applyUpdateToInstance = (hostInstance: any, update: PropertyUpdate, type: string | undefined): void => {
  let target = update.target !== undefined ? hostInstance[update.target] : hostInstance

  switch (update.type) {
    case "string":
    case "number":
    case "boolean":
    case "string | number": // TODO: string | number is a deficiency in the code generator.  ie: can test for only primitives | and generate update type in code generator
      // console.log(` > ${type}: updating ${update.type} on ${update.propertyName} to ${update.value}`)
      target[update.propertyName] = update.value
      break
    case "BabylonjsCoreVector3": // TODO: merge with Color3/Color4
      if (target[update.propertyName]) {
        ;(target[update.propertyName] as Vector3).copyFrom(update.value)
      } else if (update.value) {
        target[update.propertyName] = update.value.clone()
      } else {
        target[update.propertyName] = update.value // ie: undefined/null?
      }
      break
    case "BabylonjsCoreColor3":
    case "BabylonjsCoreColor4":
      if (target[update.propertyName]) {
        switch (update.type) {
          case "BabylonjsCoreColor3":
            ;(target[update.propertyName] as Color3).copyFrom(update.value)
            break
          case "BabylonjsCoreColor4":
            ;(target[update.propertyName] as Color4).copyFrom(update.value)
            break
        }
      } else if (update.value) {
        target[update.propertyName] = update.value.clone()
      } else {
        target[update.propertyName] = update.value
      }
      break
    case "BabylonjsCoreMesh":
      // console.log(` > ${type}: updating Mesh on:${update.propertyName} to ${update.value}`)
      if (target[update.propertyName] && update.value) {
        if ((target[update.propertyName] as Mesh).uniqueId != update.value.uniqueId) {
          target[update.propertyName] = update.value;
        }
      } else {
        target[update.propertyName] = update.value;
      }
      break;
    case "BabylonjsGuiControl":
      target[update.propertyName] = update.value;
      break;
    case "number[]":
      target[update.propertyName] = update.value;
      break;
    default:
      if (update.type.startsWith("BabylonjsCoreObservable")) {
        // TODO: we want to remove the old prop when changed, so it should be passed along as well.
        // if (update.prevValue) {
        //  babylonObject[update.propertyName].remove(update.prevValue)
        // }
        target[update.propertyName].add(update.value)
      } else if (update.type.startsWith("(")) {
        if (typeof target[update.propertyName] === "function") {
          if (Array.isArray(update.value)) {
            target[update.propertyName](...update.value)
          } else {
            target[update.propertyName](...Object.values(update.value))
          }
        } else {
          console.error(`Cannot call [not a function] ${update.propertyName}(...) on:`, update.type, target)
        }
      } else {
        console.error(`Unhandled property update of type ${update.type}`)
      }
      break
  }
}