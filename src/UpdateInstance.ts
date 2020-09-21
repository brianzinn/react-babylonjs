import { Vector3, Color3, Color4, Quaternion } from '@babylonjs/core';
import { PropertyUpdate, PropsHandler, PropChangeType } from './PropsHandler';
import { CreatedInstance } from './CreatedInstance';

export const applyUpdateToInstance = (hostInstance: any, update: PropertyUpdate, type: string | undefined): void => {
  let target = update.target !== undefined ? hostInstance[update.target] : hostInstance;

  switch (update.changeType) {
    case PropChangeType.Primitive:
    case PropChangeType.FresnelParameters:
    case PropChangeType.LambdaExpression:
    case PropChangeType.Texture:
      // console.log(` > ${type}: updating ${update.changeType} on ${update.propertyName} to ${update.value}`)
      if (update.propertyName.indexOf('.') !== -1) {
        const dotProps: string[] = update.propertyName.split('.');
        const lastProp = dotProps.pop()!;
        const newTarget = dotProps.reduce((target, prop) => target[prop], target);
        newTarget[lastProp] = update.value;
      } else {
        target[update.propertyName] = update.value;
      }
      break;
    case PropChangeType.Vector3:
      if (target[update.propertyName]) {
        (target[update.propertyName] as Vector3).copyFrom(update.value);
      } else if (update.value) {
        target[update.propertyName] = update.value.clone();
      } else {
        target[update.propertyName] = update.value; // ie: undefined/null?
      }
      break;
    case PropChangeType.Color3:
    case PropChangeType.Color4:
      if (target[update.propertyName]) {
        switch (update.changeType) {
          case PropChangeType.Color3:
            (target[update.propertyName] as Color3).copyFrom(update.value);
            break;
          case PropChangeType.Color4:
            (target[update.propertyName] as Color4).copyFrom(update.value);
            break;
        }
      } else if (update.value) {
        target[update.propertyName] = update.value.clone();
      } else {
        target[update.propertyName] = update.value;
      }
      break;
    case PropChangeType.Control:
      target[update.propertyName] = update.value;
      break;
    case PropChangeType.NumericArray:
      target[update.propertyName] = update.value;
      break;
    case PropChangeType.Observable:
      target[update.propertyName].add(update.value);
      break;
    case PropChangeType.Method:
      if (typeof target[update.propertyName] === "function") {
        if (Array.isArray(update.value)) {
          target[update.propertyName](...update.value);
        } else if (Object(update.value) !== update.value) {
          // primitive, undefined & null.  Comparison is 7x slower than instanceof check,
          // TODO: should be: update.value === undefined || typeof(update.value) === 'number' || ...
          target[update.propertyName](update.value);
        } else {
          // TODO: there is a bug here in that setTarget={new Vector3(0, 1, 0)} will throw an exception...
          console.error('need to make sure this isn\'t something like a Vector3 before destructuring')
          target[update.propertyName](...Object.values(update.value));
        }
      } else {
        console.error(`Cannot call [not a function] ${update.propertyName}(...) on:`, target);
      }
      break;
    case PropChangeType.Quaternion:
      // console.warn(`quaternion update detected ${update.propertyName} to:`, update.value)
      if (target[update.propertyName]) {
        (target[update.propertyName] as Quaternion).copyFrom(update.value);
      } else if (update.value) {
        target[update.propertyName] = (update.value as Quaternion).clone();
      } else {
        target[update.propertyName] = update.value; // ie: undefined/null?
      }
      break;
    default:
      console.error(`Unhandled property update of type '${update.changeType}'`);
      break;
  }
}

/**
 * Only applied in this way immediately after instantiation (not on deltas)
 *
 * @param instance
 * @param props
 * @param scene
 */
export const applyInitialPropsToInstance = (instance: CreatedInstance<any>, props: any) => {
  if (!instance.propsHandlers) {
    return;
  }

  // console.log('applying initial props:', props);
  let initPayload: PropertyUpdate[] = []
  instance.propsHandlers.getPropsHandlers().forEach((propHandler: PropsHandler<any>) => {
    // NOTE: this can actually be WRONG, because here we want to compare the props with the object.
    // This is only needed right after object instantiation.
    let handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
      {}, // Here we will reapply things like 'name', so we could get default props from 'babylonObject'.
      props
    );
    if (handlerUpdates !== null) {
      initPayload.push(...handlerUpdates);
    }
  })

  if (initPayload.length > 0) {
    initPayload.forEach(update => {
      applyUpdateToInstance(instance.hostInstance, update, instance.metadata!.className);
    })
  }
}
