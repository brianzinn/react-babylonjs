import { LifecycleListener } from "./LifecycleListener";
import { HasPropsHandlers } from "./PropsHandler";
export interface InstanceMetadataParameter {
    delayCreation?: boolean;
    shadowGenerator?: boolean;
    acceptsMaterials?: boolean;
    isScene?: boolean;
    isShadowLight?: boolean;
    isEnvironment?: boolean;
    isTargetable?: boolean;
    isMesh?: boolean;
    isMaterial?: boolean;
    isGUI3DControl?: boolean;
    isGUI2DControl?: boolean;
    isTexture?: boolean;
    customType?: boolean;
    isCamera?: boolean;
}
/**
 * Props passed from controls that are not part of generated props and we are handling ourselves
 */
export interface CustomProps {
    createForParentMesh?: boolean;
    childrenAsContent?: boolean;
    connectControlNames?: string[];
    defaultKeyboard?: boolean;
    linkToTransformNodeByName?: string;
    shadowCasters?: string[];
    attachToMeshesByName?: string[];
    onControlAdded?: (instance: CreatedInstance<any>) => void;
}
export interface CreatedInstanceMetadata extends InstanceMetadataParameter {
    className: string;
}
/**
 * CreatedInstance simply contains a Babylon object and a fiber object able to detect and process updates via props to the BabylonObject.
 *
 * The parent/child is part of the Fiber Reconciler and helps attach materials/parenting/cameras/shadows/etc.
 */
export interface CreatedInstance<T> {
    hostInstance: T;
    metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    state?: any;
    customProps: CustomProps;
    propsHandlers?: HasPropsHandlers<T, any>;
    lifecycleListener?: LifecycleListener;
}
export declare class CreatedInstanceImpl<T> implements CreatedInstance<T> {
    readonly hostInstance: T;
    readonly metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    propsHandlers: HasPropsHandlers<T, any>;
    customProps: CustomProps;
    constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: HasPropsHandlers<T, any>, customProps: CustomProps);
}
