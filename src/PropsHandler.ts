// TODO: type/value need to be joined, as the method will have multiple.
export interface PropertyUpdate {
  type: string
  value: any
  propertyName: string // TODO: rename as this can be a propertyName or a methodName
  // prevValue?: any
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

export type PropToUpdateType = {
  name: string,
  type: string,
  method?: boolean
}

export const getUpdatesFromProps = (oldProps: any, newProps: any, propsToUpdate: PropToUpdateType[]) : PropertyUpdate[] => {
  const updatedProps: PropertyUpdate[] = [];
  propsToUpdate.forEach(propToUpdate => {

    // XXX
    // if it starts with 'on' then we have different handling.
    // if (oldProps.onAfterCheckInputsObservable === undefined && oldProps.onAfterCheckInputsObservable !== newProps.onAfterCheckInputsObservable) {
    //   updates.push({
    //       propertyName: 'onAfterCheckInputsObservable',
    //       value: newProps.onAfterCheckInputsObservable,
    //       type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
    //   });
    // }

    switch(propToUpdate.type) {
    case 'BabylonjsCoreVector3':
    case 'BabylonjsCoreColor3':
      if (newProps[propToUpdate.name] && (!oldProps[propToUpdate.name] || !oldProps[propToUpdate.name].equals(newProps[propToUpdate.name]))) {
        updatedProps.push({
          propertyName: propToUpdate.name,
          type: propToUpdate.type,
          value: newProps[propToUpdate.name]
        })
      }
      break;
    case "boolean":
    case "number":
    case "string":
    case "string | number":
      if (oldProps[propToUpdate.name] !== newProps[propToUpdate.name]) {
        updatedProps.push({
            propertyName: propToUpdate.name,
            type: propToUpdate.type,
            value: newProps[propToUpdate.name]
        });
    }
    case `BabylonjsCoreColor4`: // Color4.equals() not added until PR #5517
      if (newProps[propToUpdate.name] && (!oldProps[propToUpdate.name] || oldProps[propToUpdate.name].r !== newProps[propToUpdate.name].r || oldProps[propToUpdate.name].g !== newProps[propToUpdate.name].g || oldProps[propToUpdate.name].b !== newProps[propToUpdate.name].b || oldProps[propToUpdate.name].a !== newProps[propToUpdate.name].a)) {
        updatedProps.push({
          propertyName: propToUpdate.name,
          type: propToUpdate.type,
          value: newProps[propToUpdate.name]
        });
      }
      break;
    case "BabylonjsGuiControl":
      // only sets once
      if (newProps[propToUpdate.name] && (!oldProps[propToUpdate.name])) {
        updatedProps.push({
          propertyName: propToUpdate.name,
          type: propToUpdate.type,
          value: newProps[propToUpdate.name]
        });
      };
      break;
    case "number[]":
      // just length - missing loop + indexOf comparison
      if (newProps[propToUpdate.name] && (!oldProps[propToUpdate.name] || oldProps[propToUpdate.name].length !== newProps[propToUpdate.name].length)) {
        updatedProps.push({
          propertyName: propToUpdate.name,
          type: propToUpdate.type,
          value: newProps[propToUpdate.name]
        });
      }
      break;
    default:
      if (propToUpdate.method === true) {
        // TODO: need a different object ref or value currently (ie: not checking object values, arrays, etc.)
        if (oldProps[propToUpdate.name] !== newProps[propToUpdate.name]) {
          updatedProps.push({
            propertyName: propToUpdate.name,
            type: propToUpdate.type,
            value: newProps[propToUpdate.name]
          });
        }
      } else {
        console.log(` > not updateing ${propToUpdate.type} isMethod: ${propToUpdate.method ?? false}`)
      }
      break;
    }
  })
  return updatedProps;
}