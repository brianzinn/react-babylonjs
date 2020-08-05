import { Vector3, Color3, Color4, Quaternion } from '@babylonjs/core/Maths/math'
import { Control } from '@babylonjs/gui/2D/controls/control'
import { Observable, FresnelParameters, BaseTexture, Nullable } from '@babylonjs/core'

export interface PropertyUpdate {
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

// internal
type HandlerUpdateProcessResult<T> = {
  accepted: boolean
} & PropertyUpdateProcessResult<T>;

export type PropertyUpdateProcessResult<T> = {
  processed: boolean,
  value: Nullable<T>
}

/**
 * NOTE: the applyAnimatedValues from react-spring always has `oldProp` undefined, so we force set anything provided.
 * Would be more efficient to only handle the props passed in.
 */
export interface ICustomPropsHandler<T, U> {
  /**
   * Friendly name to identify the handler.
   */
  readonly name: string;

  /**
   * The type of prop (ie: Vector3, Color3) to register for
   */
  readonly propChangeType: string;

  /**
   * Can be used to influence the ordering the handler fires compared to other custom handlers.
   * @todo not implemented (future enhancement)
   */
  readonly order?: number;

  /**
   * Like a visitor, except if 'true' is returned the call chain is broken.
   * So, if you want to override a 'Vector3' with a string and the type is string
   * then the regular handler will be bypassed.
   * @param propChangeType
   */
  accept(newProp: T): boolean

  // Check old vs new and return proper value, if any.
  process(oldProp: T | undefined, newProp: T): PropertyUpdateProcessResult<U>

}

export class CustomPropsHandler {

  private static _registeredPropsHandlers: Record<string, ICustomPropsHandler<any, any>[]> = {};

  /**
   * Register a new props handler
   *
   * @param handler to register for props (a handler can only be registered once per )
   * @returns a reference that can be used to unregister.
   */
  public static RegisterPropsHandler(propsHandler: ICustomPropsHandler<any, any>): ICustomPropsHandler<any, any> {
    const propsChangeType: string = propsHandler.propChangeType;

    if (!Array.isArray(CustomPropsHandler._registeredPropsHandlers[propsChangeType])) {
      CustomPropsHandler._registeredPropsHandlers[propsChangeType] = [];
    }

    const registeredHandlers: ICustomPropsHandler<any, any>[] = CustomPropsHandler._registeredPropsHandlers[propsChangeType];

    const match = registeredHandlers.find(h => h === propsHandler);
    if (match !== undefined) {
      console.warn(`Handler can only be registered once per type [${propsChangeType}]`);
      return match;
    }

    registeredHandlers.push(propsHandler);
    return propsHandler;
  }

  /**
   * Unregister a props handler that was previously registered.
   *
   * @param propsHandler
   *
   * @returns if the props handler was found and unregistered
   */
  public static UnregisterPropsHandler(propsHandlerToUnregister: ICustomPropsHandler<any, any>): boolean {
    const propsChangeType: string = propsHandlerToUnregister.propChangeType;

    if (!Array.isArray(CustomPropsHandler._registeredPropsHandlers[propsChangeType])) {
      console.warn(`cannot find ${propsHandlerToUnregister.name} to unregister.`)
      return false;
    }

    const registeredHandlers: ICustomPropsHandler<any, any>[] = CustomPropsHandler._registeredPropsHandlers[propsChangeType];

    const index: number = registeredHandlers.indexOf(propsHandlerToUnregister);

    if (index === -1) {
      console.warn(`cannot find ${propsHandlerToUnregister.name} to unregister.`)
      return false;
    }

    CustomPropsHandler._registeredPropsHandlers[propsChangeType] = registeredHandlers.slice(index, 1);
    return true;
  }

  private static NOT_ACCEPTED: Readonly<HandlerUpdateProcessResult<any>> = Object.freeze({
    accepted: false,
    processed: false,
    value: null
  });

  private static ACCEPTED_NOT_PROCSSED: Readonly<HandlerUpdateProcessResult<any>> = Object.freeze({
    accepted: true,
    processed: false,
    value: null
  });

  public static HandlePropsChange(propsChangeType: PropChangeType, oldProp: any, newProp: any): Readonly<HandlerUpdateProcessResult<any>> {
    const registeredHandlers: ICustomPropsHandler<any, any>[] = CustomPropsHandler._registeredPropsHandlers[propsChangeType];
    if (registeredHandlers === undefined) {
      return CustomPropsHandler.NOT_ACCEPTED;
    }

    let accepted = false;
    for (const handler of registeredHandlers) {
      if (handler.accept(newProp)) {
        accepted = true;
        const propertyUpdatedProcessResult: PropertyUpdateProcessResult<any> = handler.process(oldProp, newProp);
        // console.log(`handler '${handler.name}'custom prop processing result:`, oldProp, newProp, propertyUpdatedProcessResult);
        // give other custom handlers (if any) the opportunity to handle
        if (propertyUpdatedProcessResult.processed) {
          return {
            accepted: true,
            processed: true,
            value: propertyUpdatedProcessResult.value
          };
        }
      }
    }

    return accepted
      ? CustomPropsHandler.ACCEPTED_NOT_PROCSSED
      : CustomPropsHandler.NOT_ACCEPTED;
  }
}

export enum PropChangeType {
  Color3 = 'Color3',
  Color4 = 'Color4',
  Control = 'Control',
  FresnelParameters = 'FresnelParameters',
  LambdaExpression = 'LambdaExpression',
  Method = 'Method',
  NumericArray = 'NumericArray',
  Observable = 'Observable',
  Primitive = 'Primitive',
  Quaternion = 'Quaternion',
  Texture = 'Texture',
  Vector3 = 'Vector3',
}

/**
 * Encapsulates common error handling and handling of registered custom prop handlers.
 */
function propertyCheck<T> (
  oldProp: T | undefined,
  newProp: T | undefined,
  propertyName: string,
  propChangeType: PropChangeType,
  changedProps: PropertyUpdate[],
  templateMethod: (oldProp: T | undefined, newProp: T | undefined, changedProps: PropertyUpdate[]) => void ): void
{
  try {
    const processedResult = CustomPropsHandler.HandlePropsChange(propChangeType, oldProp, newProp);
    if (processedResult.accepted) {
      if (processedResult.processed) {
        // console.log(`handled ${propChangeType} on ${propertyName} by custom handler - new Value: ${JSON.stringify(processedResult.value ?? {})}`);
        changedProps.push({
          propertyName,
          changeType: propChangeType,
          value: processedResult.value!
        })
      }

      // we assume any custom handler that 'accepts' a property does not want to pass
      // down to built-in handler.  ie: [] -> Vector3 would fail.
      return;
    }

    templateMethod(oldProp, newProp, changedProps);
  } catch (e) {
    console.error(`Unable to update '${propertyName}' with ${propChangeType}:`, newProp);
    console.error(e);
  }
}

export const checkQuaternionDiff = (oldProp: Quaternion | undefined, newProp: Quaternion | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Quaternion>(oldProp, newProp, propertyName, PropChangeType.Quaternion, changedProps, (oldProp, newProp, changedProps) => {
    // going with equals (also has method equalsWithEpsilon)
    if (newProp && (!oldProp || !newProp.equals(oldProp))) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Quaternion,
        value: newProp
      })
    }
  });
}

export const checkVector3Diff = (oldProp: Vector3 | undefined, newProp: Vector3 | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Vector3>(oldProp, newProp, propertyName, PropChangeType.Vector3, changedProps, (oldProp, newProp, changedProps) => {
    if (newProp && (!oldProp || !newProp.equals(oldProp))) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Vector3,
        value: newProp
      })
    }
  });
}

export const checkColor3Diff = (oldProp: Color3 | undefined, newProp: Color3 | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Color3>(oldProp, newProp, propertyName, PropChangeType.Color3, changedProps, (oldProp, newProp, changedProps) => {
    if (newProp && (!oldProp || !newProp.equals(oldProp))) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Color3,
        value: newProp
      })
    }
  })
}

export const checkColor4Diff = (oldProp: Color4 | undefined, newProp: Color4 | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Color4>(oldProp, newProp, propertyName, PropChangeType.Color4, changedProps, (oldProp, newProp, changedProps) => {
    // Color4.equals() not added until PR #5517
    if (newProp && (!oldProp || oldProp.r !== newProp.r || oldProp.g !== newProp.g || oldProp.b !== newProp.b || oldProp.a !== newProp.a)) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Color4,
        value: newProp
      })
    }
  })
}

export const checkFresnelParametersDiff = (oldProp: FresnelParameters | undefined, newProp: FresnelParameters | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<FresnelParameters>(oldProp, newProp, propertyName, PropChangeType.FresnelParameters, changedProps, (oldProp, newProp, changedProps) => {
    // FresnelParameters.equals() not added until PR #7818 (https://github.com/BabylonJS/Babylon.js/pull/7818)
    if (newProp /* won't clear the property value */ && (
        !oldProp ||
        oldProp.bias !== newProp.bias ||
        oldProp.power !== newProp.power ||
        (!oldProp.leftColor || !oldProp.leftColor.equals(newProp.leftColor)) ||
        (!oldProp.rightColor || !oldProp.rightColor.equals(newProp.rightColor)) ||
        oldProp.isEnabled !== newProp.isEnabled
        )
    )
    {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.FresnelParameters,
        value: newProp
      })
    }
  })
}

export const checkLambdaDiff = (oldProp: any | undefined, newProp: any | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<any>(oldProp, newProp, propertyName, PropChangeType.LambdaExpression, changedProps, (oldProp, newProp, changedProps) => {
    if (newProp !== oldProp) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.LambdaExpression,
        value: newProp
      })
    }
  })
}

export const checkControlDiff = (oldProp: Control | undefined, newProp: Control | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Control>(oldProp, newProp, propertyName, PropChangeType.Control, changedProps, (oldProp, newProp, changedProps) => {
    // only sets once
    if (newProp && !oldProp) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Control,
        value: newProp
      })
    }
  })
}

export type PrimitiveType = string | number | undefined | null | boolean;

export const checkPrimitiveDiff = (oldProp: PrimitiveType | undefined, newProp: PrimitiveType | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<PrimitiveType>(oldProp, newProp, propertyName, PropChangeType.Primitive, changedProps, (oldProp, newProp, changedProps) => {
    if (newProp !== oldProp) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Primitive,
        value: newProp
      })
    }
  })
}

export const checkTextureDiff = (oldProp: BaseTexture | undefined, newProp: BaseTexture | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<BaseTexture>(oldProp, newProp, propertyName, PropChangeType.Texture, changedProps, (oldProp, newProp, changedProps) => {
    if (newProp !== oldProp) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Texture,
        value: newProp
      })
    }
  })
}

export const checkNumericArrayDiff = (oldProp: number[] | undefined, newProp: number[] | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<number[]>(oldProp, newProp, propertyName, PropChangeType.NumericArray, changedProps, (oldProp, newProp, changedProps) => {
    // just length - missing loop + indexOf comparison (or deepEquals())
    if (newProp && (!oldProp || oldProp.length !== newProp.length)) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.NumericArray,
        value: newProp
      })
    }
  })
}

export const checkObservableDiff = (oldProp: Observable<any> | undefined, newProp: Observable<any> | undefined, propertyName: string, changedProps: PropertyUpdate[]): void => {
  propertyCheck<Observable<any>>(oldProp, newProp, propertyName, PropChangeType.Observable, changedProps, (oldProp, newProp, changedProps) => {
    // if it starts with 'on' then we have different handling.
    if (oldProp === undefined && oldProp !== newProp) {
      changedProps.push({
        propertyName,
        changeType: PropChangeType.Observable,
        value: newProp
      })
    }
  })
}

/**
 * This method differs from the rest in that we need to pass in a list of arguments.  Can be done by using:
 * 1. an array to signify each parameter (or Object.values(...)).
 *
 * @param oldProp value of method (array, object, primitive, etc.)
 * @param newProp value of method (array, object, primitive, etc.)
 * @param propertyName name of property for diff
 * @param changedProps list to append to when a diff is found
 */
export const checkMethodDiff = (oldProp: any, newProp: any, propertyName: string, changedProps: PropertyUpdate[]): void => {
  if (oldProp !== newProp) {
    changedProps.push({
      propertyName,
      changeType: PropChangeType.Method,
      value: newProp
    })
  }
}
