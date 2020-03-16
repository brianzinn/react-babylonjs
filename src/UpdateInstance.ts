import { Vector3, Color3, Color4, Mesh, Scene } from '@babylonjs/core'
import { PropertyUpdate, PropsHandler } from "./PropsHandler"
import { CreatedInstance } from "./CreatedInstance"

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
          } else if (Object(update.value) !== update.value) {
            // primitive, undefined & null.  Comparison is 7x slower than instanceof check,
            // TODO: should be: update.value === undefined || typeof(update.value) === 'number' || ...
            target[update.propertyName](update.value)
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

export const applyPropsToInstance = (instance: CreatedInstance<any>, props: any, scene: Scene) => {
  if (!instance.propsHandlers) {
    return;
  }

  let initPayload: PropertyUpdate[] = []
  instance.propsHandlers.getPropsHandlers().forEach((propHandler: PropsHandler<any>) => {
    // NOTE: this can actually be WRONG, because here we want to compare the props with the object.
    // This is only needed right after object instantiation.
    let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
      {}, // Here we will reapply things like 'name', so we could get default props from 'babylonObject'.
      props
    )
    if (handlerUpdates !== null) {
      initPayload.push(...handlerUpdates)
    }
  })

  if (initPayload.length > 0) {
    initPayload.forEach(update => {
      applyUpdateToInstance(instance.hostInstance, update, instance.metadata!.className)
    })
  }
}