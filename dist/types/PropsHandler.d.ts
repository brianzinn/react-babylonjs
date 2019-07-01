/// <reference types="babylonjs" />
export interface PropertyUpdate {
    type: string;
    value: any;
    propertyName: string;
    /**
     * When provided will dynamically target a property of 'babylonJSobject'.
     */
    target?: string;
}
export declare type UpdatePayload = PropertyUpdate[] | null;
export interface PropsHandler<T, U> {
    getPropertyUpdates(hostInstance: T, oldProps: U, newProps: U, scene: BABYLON.Scene): UpdatePayload;
}
export interface HasPropsHandlers<T, U> {
    getPropsHandlers(): PropsHandler<T, U>[];
    addPropsHandler(propHandler: PropsHandler<T, U>): void;
}
