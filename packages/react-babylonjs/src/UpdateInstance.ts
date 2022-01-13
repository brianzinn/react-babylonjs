import { Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { Observable, Observer } from "@babylonjs/core/Misc/observable.js";
import { Nullable } from "@babylonjs/core/types.js";
import { CreatedInstance } from "./CreatedInstance";
import { PropChangeType, PropertyUpdate, PropsHandler } from "./PropsHandler";

export const applyUpdateToInstance = (
  createdInstance: CreatedInstance<any>,
  update: PropertyUpdate
): void => {
  const target =
    update.target !== undefined
      ? createdInstance.hostInstance[update.target]
      : createdInstance.hostInstance;

  switch (update.changeType) {
    case PropChangeType.Primitive:
    case PropChangeType.FresnelParameters:
    case PropChangeType.LambdaExpression:
    case PropChangeType.Texture:
      // console.log(` > ${type}: updating ${update.changeType} on ${update.propertyName} to ${update.value}`)
      if (update.propertyName.indexOf(".") !== -1) {
        const dotProps: string[] = update.propertyName.split(".");
        const lastProp = dotProps.pop()!;
        const newTarget = dotProps.reduce(
          (target, prop) => target[prop],
          target
        );
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
      if (update.value) {
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
      // adding and remove observer can cause an infinite loop without something like  setTimeout(() => ..., 1);
      // ie: clicking a button causes a re-render, which causes the callback to change (inline method)...
      if (update.propertyName in createdInstance.observers) {
        createdInstance.observers[update.propertyName]!.callback = update.value;
      } else {
        const observer: Nullable<Observer<any>> = (
          target[update.propertyName] as Observable<any>
        ).add(update.value);
        createdInstance.observers[update.propertyName] = observer;
      }
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
          console.error(
            "need to make sure this isn't something like a Vector3 before destructuring"
          );
          target[update.propertyName](...Object.values(update.value));
        }
      } else {
        console.error(
          `Cannot call [not a function] ${update.propertyName}(...) on:`,
          target
        );
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
};

/**
 * Only applied in this way immediately after instantiation (not on deltas)
 *
 * @param instance
 * @param props
 */
export const applyInitialPropsToCreatedInstance = (
  createdInstance: CreatedInstance<any>,
  props: any
) => {
  if (createdInstance.propsHandlers === undefined) {
    return;
  }

  const initPayload: PropertyUpdate[] = [];
  createdInstance.propsHandlers
    .getPropsHandlers()
    .forEach((propHandler: PropsHandler<any>) => {
      // NOTE: this can actually be WRONG, because here we want to compare the props with the object.
      // This is only needed right after object instantiation.
      const handlerUpdates: PropertyUpdate[] | null =
        propHandler.getPropertyUpdates(
          {}, // Here we will reapply things like 'name', so we could get default props from 'babylonObject'.
          props
        );
      if (handlerUpdates !== null) {
        initPayload.push(...handlerUpdates);
      }
    });

  if (initPayload.length > 0) {
    initPayload.forEach((update) => {
      applyUpdateToInstance(createdInstance, update);
    });
  }
};
