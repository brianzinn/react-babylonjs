import { Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { CreatedInstance } from "./CreatedInstance";
import { HasPropsHandlers, PropChangeType, PropertyUpdate, PropsHandler } from "./PropsHandler";

/**
 * @deprecated Please use @see applyPropsToRef instead
 * (same functionality different parameters better name, but doesn't work with "public" ref provided by reconciler)
 * @param hostInstance a babylonjs public ref (available with useRef)
 * @param props
 */
 export const applyInitialPropsToInstance = (target: any, props: Record<string, any>): void => {
  // this is a bad cast.  it is here for backwards compatibility with a react-spring dependency that only uses vector/color prop changes.
  const initPayload: PropertyUpdate[] = []
  if ('__rb_propsHandlers' in target) {
    (target.__rb_propsHandlers as HasPropsHandlers<unknown>).getPropsHandlers().forEach((propHandler: PropsHandler<any>) => {
      const handlerUpdates: PropertyUpdate[] | null = propHandler.getPropertyUpdates(
        {}, // We will reapply any props passed in (will not "clear" props, if we pass in an undefined prop)
        props
      );
      if (handlerUpdates !== null) {
        initPayload.push(...handlerUpdates);
      }
    })
  }

  if (initPayload.length > 0) {
    // this is all copied code from `applyUpdateToInstance(...)`
    initPayload.forEach(update => {
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
          console.warn('observable not supported for plugins (create a request if needed)')
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
    })
  }
}

/**
 * @deprecated I don't believe this is used currently, but it can be added back.
 */
export const applyPropsToRef = (createdInstance: CreatedInstance<any>, props: Record<string, any>): void => {
  throw new Error('if you need this method please create an issue.')
}
