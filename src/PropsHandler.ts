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

export interface PropsHandler<T, U> {
    getPropertyUpdates(hostInstance: T, oldProps: U, newProps: U, scene: BABYLON.Scene): UpdatePayload
}
  
export interface HasPropsHandlers<T, U> {
    getPropsHandlers(): PropsHandler<T, U>[]
    addPropsHandler(propHandler: PropsHandler<T, U>): void
}