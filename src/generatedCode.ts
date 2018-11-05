import { CreatedInstance, CreatedInstanceMetadata, PropertyUpdate } from "./ReactBabylonJSHostConfig";
import BABYLON from "babylonjs";
import GUI from "babylonjs-gui";

export interface PropsHandler<T, U> {
    getPropertyUpdates(createdInstance: CreatedInstance<T>, oldProps: U, newProps: U, scene: BABYLON.Scene): PropertyUpdate[] | null;
}

export interface HasPropsHandlers<T, U> {
    getPropsHandlers(): PropsHandler<T, U>[];
    addPropsHandler(propHandler: PropsHandler<T, U>): void;
}

export class FiberNode {
}

export class FiberNodeProps {
    addToSceneRootNodes?: any;
    animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride;
    animations?: BABYLON.Animation[];
    doNotSerialize?: boolean;
    id?: string;
    metadata?: any;
    name?: string;
    parent?: BABYLON.Node;
    removeFromSceneRootNodes?: any;
    state?: string;
    uniqueId?: number;
}

export class FiberNodePropsHandler implements PropsHandler<BABYLON.Node, FiberNodeProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Node>, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Node = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) BABYLON.Node.addToSceneRootNodes.
        // TODO: type: BABYLON.AnimationPropertiesOverride property (not coded) BABYLON.Node.animationPropertiesOverride.
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.Node.animations.
        // BABYLON.Node.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // BABYLON.Node.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Node.metadata.
        // BABYLON.Node.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.Node property (not coded) BABYLON.Node.parent.
        // TODO: type: any property (not coded) BABYLON.Node.removeFromSceneRootNodes.
        // BABYLON.Node.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // BABYLON.Node.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

export class FiberCameraProps extends FiberNodeProps {
    cameraRigMode?: number;
    customRenderTargets?: BABYLON.RenderTargetTexture[];
    fov?: number;
    fovMode?: number;
    inertia?: number;
    inputs?: BABYLON.CameraInputsManager<BABYLON.Camera>;
    interaxialDistance?: number;
    isIntermediate?: boolean;
    isStereoscopicSideBySide?: boolean;
    layerMask?: number;
    maxZ?: number;
    minZ?: number;
    mode?: number;
    orthoBottom?: number;
    orthoLeft?: number;
    orthoRight?: number;
    orthoTop?: number;
    position?: BABYLON.Vector3;
    upVector?: BABYLON.Vector3;
    viewport?: BABYLON.Viewport;
}

export class FiberCameraPropsHandler implements PropsHandler<BABYLON.Camera, FiberCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Camera>, oldProps: FiberCameraProps, newProps: FiberCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Camera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.Camera.cameraRigMode of type 'number':
        if (oldProps.cameraRigMode !== newProps.cameraRigMode) {
            updates.push({
                propertyName: 'cameraRigMode',
                value: newProps.cameraRigMode,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.RenderTargetTexture[] property (not coded) BABYLON.Camera.customRenderTargets.
        // BABYLON.Camera.fov of type 'number':
        if (oldProps.fov !== newProps.fov) {
            updates.push({
                propertyName: 'fov',
                value: newProps.fov,
                type: 'number'
            });
        }
        // BABYLON.Camera.fovMode of type 'number':
        if (oldProps.fovMode !== newProps.fovMode) {
            updates.push({
                propertyName: 'fovMode',
                value: newProps.fovMode,
                type: 'number'
            });
        }
        // BABYLON.Camera.inertia of type 'number':
        if (oldProps.inertia !== newProps.inertia) {
            updates.push({
                propertyName: 'inertia',
                value: newProps.inertia,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.CameraInputsManager<BABYLON.Camera> property (not coded) BABYLON.Camera.inputs.
        // BABYLON.Camera.interaxialDistance of type 'number':
        if (oldProps.interaxialDistance !== newProps.interaxialDistance) {
            updates.push({
                propertyName: 'interaxialDistance',
                value: newProps.interaxialDistance,
                type: 'number'
            });
        }
        // BABYLON.Camera.isIntermediate of type 'boolean':
        if (oldProps.isIntermediate !== newProps.isIntermediate) {
            updates.push({
                propertyName: 'isIntermediate',
                value: newProps.isIntermediate,
                type: 'boolean'
            });
        }
        // BABYLON.Camera.isStereoscopicSideBySide of type 'boolean':
        if (oldProps.isStereoscopicSideBySide !== newProps.isStereoscopicSideBySide) {
            updates.push({
                propertyName: 'isStereoscopicSideBySide',
                value: newProps.isStereoscopicSideBySide,
                type: 'boolean'
            });
        }
        // BABYLON.Camera.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // BABYLON.Camera.maxZ of type 'number':
        if (oldProps.maxZ !== newProps.maxZ) {
            updates.push({
                propertyName: 'maxZ',
                value: newProps.maxZ,
                type: 'number'
            });
        }
        // BABYLON.Camera.minZ of type 'number':
        if (oldProps.minZ !== newProps.minZ) {
            updates.push({
                propertyName: 'minZ',
                value: newProps.minZ,
                type: 'number'
            });
        }
        // BABYLON.Camera.mode of type 'number':
        if (oldProps.mode !== newProps.mode) {
            updates.push({
                propertyName: 'mode',
                value: newProps.mode,
                type: 'number'
            });
        }
        // BABYLON.Camera.orthoBottom of type 'number':
        if (oldProps.orthoBottom !== newProps.orthoBottom) {
            updates.push({
                propertyName: 'orthoBottom',
                value: newProps.orthoBottom,
                type: 'number'
            });
        }
        // BABYLON.Camera.orthoLeft of type 'number':
        if (oldProps.orthoLeft !== newProps.orthoLeft) {
            updates.push({
                propertyName: 'orthoLeft',
                value: newProps.orthoLeft,
                type: 'number'
            });
        }
        // BABYLON.Camera.orthoRight of type 'number':
        if (oldProps.orthoRight !== newProps.orthoRight) {
            updates.push({
                propertyName: 'orthoRight',
                value: newProps.orthoRight,
                type: 'number'
            });
        }
        // BABYLON.Camera.orthoTop of type 'number':
        if (oldProps.orthoTop !== newProps.orthoTop) {
            updates.push({
                propertyName: 'orthoTop',
                value: newProps.orthoTop,
                type: 'number'
            });
        }
        // BABYLON.Camera.position of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Camera.upVector of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.upVector && (!oldProps.upVector || !oldProps.upVector.equals(newProps.upVector))) {
            updates.push({
                propertyName: 'upVector',
                value: newProps.upVector,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Viewport property (not coded) BABYLON.Camera.viewport.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This is the base class of all the camera used in the application.
 * 
 * This code has been generated
 */
export class FiberCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = false;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Camera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberCamera"
    };
}

export class FiberTargetCameraProps extends FiberCameraProps {
    cameraDirection?: BABYLON.Vector3;
    cameraRotation?: BABYLON.Vector2;
    lockedTarget?: any;
    noRotationConstraint?: boolean;
    rotation?: BABYLON.Vector3;
    rotationQuaternion?: BABYLON.Quaternion;
    speed?: number;
}

export class FiberTargetCameraPropsHandler implements PropsHandler<BABYLON.TargetCamera, FiberTargetCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.TargetCamera>, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.TargetCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.TargetCamera.cameraDirection of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.cameraDirection && (!oldProps.cameraDirection || !oldProps.cameraDirection.equals(newProps.cameraDirection))) {
            updates.push({
                propertyName: 'cameraDirection',
                value: newProps.cameraDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Vector2 property (not coded) BABYLON.TargetCamera.cameraRotation.
        // TODO: type: any property (not coded) BABYLON.TargetCamera.lockedTarget.
        // BABYLON.TargetCamera.noRotationConstraint of type 'boolean':
        if (oldProps.noRotationConstraint !== newProps.noRotationConstraint) {
            updates.push({
                propertyName: 'noRotationConstraint',
                value: newProps.noRotationConstraint,
                type: 'boolean'
            });
        }
        // BABYLON.TargetCamera.rotation of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.TargetCamera.rotationQuaternion.
        // BABYLON.TargetCamera.speed of type 'number':
        if (oldProps.speed !== newProps.speed) {
            updates.push({
                propertyName: 'speed',
                value: newProps.speed,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 * 
 * This code has been generated
 */
export class FiberTargetCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TargetCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTargetCamera"
    };
}

export class FiberArcRotateCameraProps extends FiberTargetCameraProps {
    allowUpsideDown?: boolean;
    alpha?: number;
    angularSensibilityX?: number;
    angularSensibilityY?: number;
    beta?: number;
    checkCollisions?: boolean;
    collisionRadius?: BABYLON.Vector3;
    inertialAlphaOffset?: number;
    inertialBetaOffset?: number;
    inertialPanningX?: number;
    inertialPanningY?: number;
    inertialRadiusOffset?: number;
    inputs?: BABYLON.ArcRotateCameraInputsManager;
    keysDown?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
    lowerAlphaLimit?: number;
    lowerBetaLimit?: number;
    lowerRadiusLimit?: number;
    panningAxis?: BABYLON.Vector3;
    panningDistanceLimit?: number;
    panningInertia?: number;
    panningOriginTarget?: BABYLON.Vector3;
    panningSensibility?: number;
    pinchDeltaPercentage?: number;
    pinchPrecision?: number;
    pinchToPanMaxDistance?: number;
    radius?: number;
    target?: BABYLON.Vector3;
    targetScreenOffset?: BABYLON.Vector2;
    upperAlphaLimit?: number;
    upperBetaLimit?: number;
    upperRadiusLimit?: number;
    useAutoRotationBehavior?: boolean;
    useBouncingBehavior?: boolean;
    useFramingBehavior?: boolean;
    useInputToRestoreState?: boolean;
    wheelDeltaPercentage?: number;
    wheelPrecision?: number;
    zoomOnFactor?: number;
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<BABYLON.ArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ArcRotateCamera>, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ArcRotateCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.ArcRotateCamera.allowUpsideDown of type 'boolean':
        if (oldProps.allowUpsideDown !== newProps.allowUpsideDown) {
            updates.push({
                propertyName: 'allowUpsideDown',
                value: newProps.allowUpsideDown,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.angularSensibilityX of type 'number':
        if (oldProps.angularSensibilityX !== newProps.angularSensibilityX) {
            updates.push({
                propertyName: 'angularSensibilityX',
                value: newProps.angularSensibilityX,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.angularSensibilityY of type 'number':
        if (oldProps.angularSensibilityY !== newProps.angularSensibilityY) {
            updates.push({
                propertyName: 'angularSensibilityY',
                value: newProps.angularSensibilityY,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.collisionRadius of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.collisionRadius && (!oldProps.collisionRadius || !oldProps.collisionRadius.equals(newProps.collisionRadius))) {
            updates.push({
                propertyName: 'collisionRadius',
                value: newProps.collisionRadius,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ArcRotateCamera.inertialAlphaOffset of type 'number':
        if (oldProps.inertialAlphaOffset !== newProps.inertialAlphaOffset) {
            updates.push({
                propertyName: 'inertialAlphaOffset',
                value: newProps.inertialAlphaOffset,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.inertialBetaOffset of type 'number':
        if (oldProps.inertialBetaOffset !== newProps.inertialBetaOffset) {
            updates.push({
                propertyName: 'inertialBetaOffset',
                value: newProps.inertialBetaOffset,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.inertialPanningX of type 'number':
        if (oldProps.inertialPanningX !== newProps.inertialPanningX) {
            updates.push({
                propertyName: 'inertialPanningX',
                value: newProps.inertialPanningX,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.inertialPanningY of type 'number':
        if (oldProps.inertialPanningY !== newProps.inertialPanningY) {
            updates.push({
                propertyName: 'inertialPanningY',
                value: newProps.inertialPanningY,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.inertialRadiusOffset of type 'number':
        if (oldProps.inertialRadiusOffset !== newProps.inertialRadiusOffset) {
            updates.push({
                propertyName: 'inertialRadiusOffset',
                value: newProps.inertialRadiusOffset,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.ArcRotateCameraInputsManager property (not coded) BABYLON.ArcRotateCamera.inputs.
        // TODO: type: number[] property (not coded) BABYLON.ArcRotateCamera.keysDown.
        // TODO: type: number[] property (not coded) BABYLON.ArcRotateCamera.keysLeft.
        // TODO: type: number[] property (not coded) BABYLON.ArcRotateCamera.keysRight.
        // TODO: type: number[] property (not coded) BABYLON.ArcRotateCamera.keysUp.
        // BABYLON.ArcRotateCamera.lowerAlphaLimit of type 'number':
        if (oldProps.lowerAlphaLimit !== newProps.lowerAlphaLimit) {
            updates.push({
                propertyName: 'lowerAlphaLimit',
                value: newProps.lowerAlphaLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.lowerBetaLimit of type 'number':
        if (oldProps.lowerBetaLimit !== newProps.lowerBetaLimit) {
            updates.push({
                propertyName: 'lowerBetaLimit',
                value: newProps.lowerBetaLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.lowerRadiusLimit of type 'number':
        if (oldProps.lowerRadiusLimit !== newProps.lowerRadiusLimit) {
            updates.push({
                propertyName: 'lowerRadiusLimit',
                value: newProps.lowerRadiusLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.panningAxis of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.panningAxis && (!oldProps.panningAxis || !oldProps.panningAxis.equals(newProps.panningAxis))) {
            updates.push({
                propertyName: 'panningAxis',
                value: newProps.panningAxis,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ArcRotateCamera.panningDistanceLimit of type 'number':
        if (oldProps.panningDistanceLimit !== newProps.panningDistanceLimit) {
            updates.push({
                propertyName: 'panningDistanceLimit',
                value: newProps.panningDistanceLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.panningInertia of type 'number':
        if (oldProps.panningInertia !== newProps.panningInertia) {
            updates.push({
                propertyName: 'panningInertia',
                value: newProps.panningInertia,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.panningOriginTarget of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.panningOriginTarget && (!oldProps.panningOriginTarget || !oldProps.panningOriginTarget.equals(newProps.panningOriginTarget))) {
            updates.push({
                propertyName: 'panningOriginTarget',
                value: newProps.panningOriginTarget,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ArcRotateCamera.panningSensibility of type 'number':
        if (oldProps.panningSensibility !== newProps.panningSensibility) {
            updates.push({
                propertyName: 'panningSensibility',
                value: newProps.panningSensibility,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.pinchDeltaPercentage of type 'number':
        if (oldProps.pinchDeltaPercentage !== newProps.pinchDeltaPercentage) {
            updates.push({
                propertyName: 'pinchDeltaPercentage',
                value: newProps.pinchDeltaPercentage,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.pinchPrecision of type 'number':
        if (oldProps.pinchPrecision !== newProps.pinchPrecision) {
            updates.push({
                propertyName: 'pinchPrecision',
                value: newProps.pinchPrecision,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.pinchToPanMaxDistance of type 'number':
        if (oldProps.pinchToPanMaxDistance !== newProps.pinchToPanMaxDistance) {
            updates.push({
                propertyName: 'pinchToPanMaxDistance',
                value: newProps.pinchToPanMaxDistance,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.target of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.target && (!oldProps.target || !oldProps.target.equals(newProps.target))) {
            updates.push({
                propertyName: 'target',
                value: newProps.target,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Vector2 property (not coded) BABYLON.ArcRotateCamera.targetScreenOffset.
        // BABYLON.ArcRotateCamera.upperAlphaLimit of type 'number':
        if (oldProps.upperAlphaLimit !== newProps.upperAlphaLimit) {
            updates.push({
                propertyName: 'upperAlphaLimit',
                value: newProps.upperAlphaLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.upperBetaLimit of type 'number':
        if (oldProps.upperBetaLimit !== newProps.upperBetaLimit) {
            updates.push({
                propertyName: 'upperBetaLimit',
                value: newProps.upperBetaLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.upperRadiusLimit of type 'number':
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.useAutoRotationBehavior of type 'boolean':
        if (oldProps.useAutoRotationBehavior !== newProps.useAutoRotationBehavior) {
            updates.push({
                propertyName: 'useAutoRotationBehavior',
                value: newProps.useAutoRotationBehavior,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.useBouncingBehavior of type 'boolean':
        if (oldProps.useBouncingBehavior !== newProps.useBouncingBehavior) {
            updates.push({
                propertyName: 'useBouncingBehavior',
                value: newProps.useBouncingBehavior,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.useFramingBehavior of type 'boolean':
        if (oldProps.useFramingBehavior !== newProps.useFramingBehavior) {
            updates.push({
                propertyName: 'useFramingBehavior',
                value: newProps.useFramingBehavior,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.useInputToRestoreState of type 'boolean':
        if (oldProps.useInputToRestoreState !== newProps.useInputToRestoreState) {
            updates.push({
                propertyName: 'useInputToRestoreState',
                value: newProps.useInputToRestoreState,
                type: 'boolean'
            });
        }
        // BABYLON.ArcRotateCamera.wheelDeltaPercentage of type 'number':
        if (oldProps.wheelDeltaPercentage !== newProps.wheelDeltaPercentage) {
            updates.push({
                propertyName: 'wheelDeltaPercentage',
                value: newProps.wheelDeltaPercentage,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.wheelPrecision of type 'number':
        if (oldProps.wheelPrecision !== newProps.wheelPrecision) {
            updates.push({
                propertyName: 'wheelPrecision',
                value: newProps.wheelPrecision,
                type: 'number'
            });
        }
        // BABYLON.ArcRotateCamera.zoomOnFactor of type 'number':
        if (oldProps.zoomOnFactor !== newProps.zoomOnFactor) {
            updates.push({
                propertyName: 'zoomOnFactor',
                value: newProps.zoomOnFactor,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents an orbital type of camera.
 * 
 * This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.
 * Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.
 * 
 * This code has been generated
 */
export class FiberArcRotateCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcRotateCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberArcRotateCamera"
    };
}

export class FiberAnaglyphArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphArcRotateCamera, FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphArcRotateCamera>, oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.AnaglyphArcRotateCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphArcRotateCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAnaglyphArcRotateCamera"
    };
}

export class FiberStereoscopicArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicArcRotateCamera, FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicArcRotateCamera>, oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.StereoscopicArcRotateCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicArcRotateCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStereoscopicArcRotateCamera"
    };
}

export class FiberVRDeviceOrientationArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationArcRotateCamera, FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationArcRotateCamera>, oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.VRDeviceOrientationArcRotateCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationArcRotateCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BABYLON.VRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberFollowCameraProps extends FiberTargetCameraProps {
    cameraAcceleration?: number;
    heightOffset?: number;
    lockedTarget?: BABYLON.AbstractMesh;
    maxCameraSpeed?: number;
    radius?: number;
    rotationOffset?: number;
}

export class FiberFollowCameraPropsHandler implements PropsHandler<BABYLON.FollowCamera, FiberFollowCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.FollowCamera>, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.FollowCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.FollowCamera.cameraAcceleration of type 'number':
        if (oldProps.cameraAcceleration !== newProps.cameraAcceleration) {
            updates.push({
                propertyName: 'cameraAcceleration',
                value: newProps.cameraAcceleration,
                type: 'number'
            });
        }
        // BABYLON.FollowCamera.heightOffset of type 'number':
        if (oldProps.heightOffset !== newProps.heightOffset) {
            updates.push({
                propertyName: 'heightOffset',
                value: newProps.heightOffset,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.AbstractMesh property (not coded) BABYLON.FollowCamera.lockedTarget.
        // BABYLON.FollowCamera.maxCameraSpeed of type 'number':
        if (oldProps.maxCameraSpeed !== newProps.maxCameraSpeed) {
            updates.push({
                propertyName: 'maxCameraSpeed',
                value: newProps.maxCameraSpeed,
                type: 'number'
            });
        }
        // BABYLON.FollowCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BABYLON.FollowCamera.rotationOffset of type 'number':
        if (oldProps.rotationOffset !== newProps.rotationOffset) {
            updates.push({
                propertyName: 'rotationOffset',
                value: newProps.rotationOffset,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 * 
 * This code has been generated
 */
export class FiberFollowCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FollowCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "lockedTarget",
                "type": "BABYLON.AbstractMesh",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberFollowCamera"
    };
}

export class FiberArcFollowCameraProps extends FiberTargetCameraProps {
    alpha?: number;
    beta?: number;
    radius?: number;
    target?: BABYLON.AbstractMesh;
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<BABYLON.ArcFollowCamera, FiberArcFollowCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ArcFollowCamera>, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ArcFollowCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.ArcFollowCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BABYLON.ArcFollowCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BABYLON.ArcFollowCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.AbstractMesh property (not coded) BABYLON.ArcFollowCamera.target.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 * 
 * This code has been generated
 */
export class FiberArcFollowCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcFollowCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BABYLON.AbstractMesh",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberArcFollowCamera"
    };
}

export class FiberFreeCameraProps extends FiberTargetCameraProps {
    angularSensibility?: number;
    applyGravity?: boolean;
    checkCollisions?: boolean;
    collisionMask?: number;
    ellipsoid?: BABYLON.Vector3;
    ellipsoidOffset?: BABYLON.Vector3;
    inputs?: BABYLON.FreeCameraInputsManager;
    keysDown?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
}

export class FiberFreeCameraPropsHandler implements PropsHandler<BABYLON.FreeCamera, FiberFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.FreeCamera>, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.FreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.FreeCamera.angularSensibility of type 'number':
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // BABYLON.FreeCamera.applyGravity of type 'boolean':
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // BABYLON.FreeCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.FreeCamera.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLON.FreeCamera.ellipsoid of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.FreeCamera.ellipsoidOffset of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.FreeCameraInputsManager property (not coded) BABYLON.FreeCamera.inputs.
        // TODO: type: number[] property (not coded) BABYLON.FreeCamera.keysDown.
        // TODO: type: number[] property (not coded) BABYLON.FreeCamera.keysLeft.
        // TODO: type: number[] property (not coded) BABYLON.FreeCamera.keysRight.
        // TODO: type: number[] property (not coded) BABYLON.FreeCamera.keysUp.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be usefull in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 * 
 * This code has been generated
 */
export class FiberFreeCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FreeCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberFreeCamera"
    };
}

export class FiberDeviceOrientationCameraProps extends FiberFreeCameraProps {
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BABYLON.DeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.DeviceOrientationCamera>, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.DeviceOrientationCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 * 
 * This code has been generated
 */
export class FiberDeviceOrientationCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DeviceOrientationCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDeviceOrientationCamera"
    };
}

export class FiberVRDeviceOrientationFreeCameraProps extends FiberDeviceOrientationCameraProps {
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationFreeCamera, FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationFreeCamera>, oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.VRDeviceOrientationFreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationFreeCameraPropsHandler(),
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationFreeCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BABYLON.VRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRDeviceOrientationFreeCamera"
    };
}

export class FiberVRDeviceOrientationGamepadCameraProps extends FiberVRDeviceOrientationFreeCameraProps {
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationGamepadCamera, FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationGamepadCamera>, oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.VRDeviceOrientationGamepadCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationGamepadCameraPropsHandler(),
            new FiberVRDeviceOrientationFreeCameraPropsHandler(),
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationGamepadCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BABYLON.VRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRDeviceOrientationGamepadCamera"
    };
}

export class FiberTouchCameraProps extends FiberFreeCameraProps {
    touchAngularSensibility?: number;
    touchMoveSensibility?: number;
}

export class FiberTouchCameraPropsHandler implements PropsHandler<BABYLON.TouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.TouchCamera>, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.TouchCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.TouchCamera.touchAngularSensibility of type 'number':
        if (oldProps.touchAngularSensibility !== newProps.touchAngularSensibility) {
            updates.push({
                propertyName: 'touchAngularSensibility',
                value: newProps.touchAngularSensibility,
                type: 'number'
            });
        }
        // BABYLON.TouchCamera.touchMoveSensibility of type 'number':
        if (oldProps.touchMoveSensibility !== newProps.touchMoveSensibility) {
            updates.push({
                propertyName: 'touchMoveSensibility',
                value: newProps.touchMoveSensibility,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 * 
 * This code has been generated
 */
export class FiberTouchCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TouchCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraProps extends FiberTouchCameraProps {
    gamepadAngularSensibility?: number;
    gamepadMoveSensibility?: number;
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<BABYLON.UniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.UniversalCamera>, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.UniversalCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.UniversalCamera.gamepadAngularSensibility of type 'number':
        if (oldProps.gamepadAngularSensibility !== newProps.gamepadAngularSensibility) {
            updates.push({
                propertyName: 'gamepadAngularSensibility',
                value: newProps.gamepadAngularSensibility,
                type: 'number'
            });
        }
        // BABYLON.UniversalCamera.gamepadMoveSensibility of type 'number':
        if (oldProps.gamepadMoveSensibility !== newProps.gamepadMoveSensibility) {
            updates.push({
                propertyName: 'gamepadMoveSensibility',
                value: newProps.gamepadMoveSensibility,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 * 
 * This code has been generated
 */
export class FiberUniversalCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "UniversalCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberUniversalCamera"
    };
}

export class FiberGamepadCameraProps extends FiberUniversalCameraProps {
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<BABYLON.GamepadCamera, FiberGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.GamepadCamera>, oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.GamepadCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 * 
 * This code has been generated
 */
export class FiberGamepadCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GamepadCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberGamepadCamera"
    };
}

export class FiberAnaglyphGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphGamepadCamera, FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphGamepadCamera>, oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.AnaglyphGamepadCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphGamepadCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphGamepadCameraPropsHandler(),
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphGamepadCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAnaglyphGamepadCamera"
    };
}

export class FiberStereoscopicGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicGamepadCamera, FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicGamepadCamera>, oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.StereoscopicGamepadCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicGamepadCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicGamepadCameraPropsHandler(),
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicGamepadCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStereoscopicGamepadCamera"
    };
}

export class FiberAnaglyphUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphUniversalCamera, FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphUniversalCamera>, oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.AnaglyphUniversalCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphUniversalCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphUniversalCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphUniversalCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAnaglyphUniversalCamera"
    };
}

export class FiberStereoscopicUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicUniversalCamera, FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicUniversalCamera>, oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.StereoscopicUniversalCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicUniversalCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicUniversalCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicUniversalCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberVirtualJoysticksCameraProps extends FiberFreeCameraProps {
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<BABYLON.VirtualJoysticksCamera, FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VirtualJoysticksCamera>, oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.VirtualJoysticksCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be usefull in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 * 
 * This code has been generated
 */
export class FiberVirtualJoysticksCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualJoysticksCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualJoysticksCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberAnaglyphFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphFreeCamera, FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphFreeCamera>, oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.AnaglyphFreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphFreeCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphFreeCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAnaglyphFreeCamera"
    };
}

export class FiberStereoscopicFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicFreeCamera, FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicFreeCamera>, oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.StereoscopicFreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicFreeCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicFreeCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStereoscopicFreeCamera"
    };
}

export class FiberWebVRFreeCameraProps extends FiberFreeCameraProps {
    controllers?: BABYLON.WebVRController[];
    devicePosition?: BABYLON.Vector3;
    deviceRotationQuaternion?: BABYLON.Quaternion;
    deviceScaleFactor?: number;
    rawPose?: BABYLON.DevicePose;
    rigParenting?: boolean;
    updateCacheCalled?: any;
    webVROptions?: any;
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<BABYLON.WebVRFreeCamera, FiberWebVRFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.WebVRFreeCamera>, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.WebVRFreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.WebVRController[] property (not coded) BABYLON.WebVRFreeCamera.controllers.
        // BABYLON.WebVRFreeCamera.devicePosition of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.devicePosition && (!oldProps.devicePosition || !oldProps.devicePosition.equals(newProps.devicePosition))) {
            updates.push({
                propertyName: 'devicePosition',
                value: newProps.devicePosition,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.WebVRFreeCamera.deviceRotationQuaternion.
        // BABYLON.WebVRFreeCamera.deviceScaleFactor of type 'number':
        if (oldProps.deviceScaleFactor !== newProps.deviceScaleFactor) {
            updates.push({
                propertyName: 'deviceScaleFactor',
                value: newProps.deviceScaleFactor,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.DevicePose property (not coded) BABYLON.WebVRFreeCamera.rawPose.
        // BABYLON.WebVRFreeCamera.rigParenting of type 'boolean':
        if (oldProps.rigParenting !== newProps.rigParenting) {
            updates.push({
                propertyName: 'rigParenting',
                value: newProps.rigParenting,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.WebVRFreeCamera.updateCacheCalled.
        // TODO: type: any property (not coded) BABYLON.WebVRFreeCamera.webVROptions.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 * 
 * This code has been generated
 */
export class FiberWebVRFreeCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebVRFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Camera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Camera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebVRFreeCamera",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BABYLON.WebVROptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberMeshProps extends FiberNodeProps {
    actionManager?: BABYLON.ActionManager;
    addToSceneRootNodes?: any;
    alphaIndex?: number;
    alwaysSelectAsActiveMesh?: boolean;
    animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride;
    animations?: BABYLON.Animation[];
    applyFog?: boolean;
    billboardMode?: number;
    checkCollisions?: boolean;
    collisionGroup?: number;
    collisionMask?: number;
    computeBonesUsingShaders?: boolean;
    cullingStrategy?: number;
    definedFacingForward?: boolean;
    delayLoadingFile?: string;
    delayLoadState?: number;
    doNotSerialize?: boolean;
    edgesColor?: BABYLON.Color4;
    edgesWidth?: number;
    ellipsoid?: BABYLON.Vector3;
    ellipsoidOffset?: BABYLON.Vector3;
    enablePointerMoveEvents?: boolean;
    facetDepthSortFrom?: BABYLON.Vector3;
    hasVertexAlpha?: boolean;
    id?: string;
    ignoreNonUniformScaling?: boolean;
    infiniteDistance?: boolean;
    instances?: BABYLON.InstancedMesh[];
    isBlocker?: boolean;
    isPickable?: boolean;
    isUnIndexed?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: BABYLON.Material;
    metadata?: any;
    morphTargetManager?: BABYLON.MorphTargetManager;
    mustDepthSortFacets?: boolean;
    name?: string;
    normalizeSkinFourWeights?: any;
    normalizeSkinWeightsAndExtra?: any;
    numBoneInfluencers?: number;
    outlineColor?: BABYLON.Color3;
    outlineWidth?: number;
    overlayAlpha?: number;
    overlayColor?: BABYLON.Color3;
    overrideMaterialSideOrientation?: number;
    overridenInstanceCount?: number;
    parent?: BABYLON.Node;
    partitioningBBoxRatio?: number;
    partitioningSubdivisions?: number;
    position?: BABYLON.Vector3;
    receiveShadows?: boolean;
    removeFromSceneRootNodes?: any;
    renderingGroupId?: number;
    rotation?: BABYLON.Vector3;
    rotationQuaternion?: BABYLON.Quaternion;
    scaling?: BABYLON.Vector3;
    scalingDeterminant?: number;
    showSubMeshesBoundingBox?: boolean;
    skeleton?: BABYLON.Skeleton;
    state?: string;
    subMeshes?: BABYLON.SubMesh[];
    uniqueId?: number;
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
}

export class FiberMeshPropsHandler implements PropsHandler<BABYLON.Mesh, FiberMeshProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Mesh>, oldProps: FiberMeshProps, newProps: FiberMeshProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Mesh = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.ActionManager property (not coded) BABYLON.Mesh.actionManager.
        // TODO: type: any property (not coded) BABYLON.Mesh.addToSceneRootNodes.
        // BABYLON.Mesh.alphaIndex of type 'number':
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // BABYLON.Mesh.alwaysSelectAsActiveMesh of type 'boolean':
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.AnimationPropertiesOverride property (not coded) BABYLON.Mesh.animationPropertiesOverride.
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.Mesh.animations.
        // BABYLON.Mesh.applyFog of type 'boolean':
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.billboardMode of type 'number':
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // BABYLON.Mesh.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.collisionGroup of type 'number':
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // BABYLON.Mesh.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLON.Mesh.computeBonesUsingShaders of type 'boolean':
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.cullingStrategy of type 'number':
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // BABYLON.Mesh.definedFacingForward of type 'boolean':
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.delayLoadingFile of type 'string':
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({
                propertyName: 'delayLoadingFile',
                value: newProps.delayLoadingFile,
                type: 'string'
            });
        }
        // BABYLON.Mesh.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // BABYLON.Mesh.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Color4 property (not coded) BABYLON.Mesh.edgesColor.
        // BABYLON.Mesh.edgesWidth of type 'number':
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // BABYLON.Mesh.ellipsoid of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Mesh.ellipsoidOffset of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Mesh.enablePointerMoveEvents of type 'boolean':
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.facetDepthSortFrom of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.facetDepthSortFrom && (!oldProps.facetDepthSortFrom || !oldProps.facetDepthSortFrom.equals(newProps.facetDepthSortFrom))) {
            updates.push({
                propertyName: 'facetDepthSortFrom',
                value: newProps.facetDepthSortFrom,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Mesh.hasVertexAlpha of type 'boolean':
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // BABYLON.Mesh.ignoreNonUniformScaling of type 'boolean':
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.infiniteDistance of type 'boolean':
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({
                propertyName: 'infiniteDistance',
                value: newProps.infiniteDistance,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.InstancedMesh[] property (not coded) BABYLON.Mesh.instances.
        // BABYLON.Mesh.isBlocker of type 'boolean':
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.isPickable of type 'boolean':
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.isUnIndexed of type 'boolean':
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Material property (not coded) BABYLON.Mesh.material.
        // TODO: type: any property (not coded) BABYLON.Mesh.metadata.
        // TODO: type: BABYLON.MorphTargetManager property (not coded) BABYLON.Mesh.morphTargetManager.
        // BABYLON.Mesh.mustDepthSortFacets of type 'boolean':
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Mesh.normalizeSkinFourWeights.
        // TODO: type: any property (not coded) BABYLON.Mesh.normalizeSkinWeightsAndExtra.
        // BABYLON.Mesh.numBoneInfluencers of type 'number':
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({
                propertyName: 'numBoneInfluencers',
                value: newProps.numBoneInfluencers,
                type: 'number'
            });
        }
        // BABYLON.Mesh.outlineColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.outlineColor && (!oldProps.outlineColor || !oldProps.outlineColor.equals(newProps.outlineColor))) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.Mesh.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // BABYLON.Mesh.overlayAlpha of type 'number':
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // BABYLON.Mesh.overlayColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.overlayColor && (!oldProps.overlayColor || !oldProps.overlayColor.equals(newProps.overlayColor))) {
            updates.push({
                propertyName: 'overlayColor',
                value: newProps.overlayColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.Mesh.overrideMaterialSideOrientation of type 'number':
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({
                propertyName: 'overrideMaterialSideOrientation',
                value: newProps.overrideMaterialSideOrientation,
                type: 'number'
            });
        }
        // BABYLON.Mesh.overridenInstanceCount of type 'number':
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({
                propertyName: 'overridenInstanceCount',
                value: newProps.overridenInstanceCount,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Node property (not coded) BABYLON.Mesh.parent.
        // BABYLON.Mesh.partitioningBBoxRatio of type 'number':
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // BABYLON.Mesh.partitioningSubdivisions of type 'number':
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // BABYLON.Mesh.position of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Mesh.receiveShadows of type 'boolean':
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Mesh.removeFromSceneRootNodes.
        // BABYLON.Mesh.renderingGroupId of type 'number':
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // BABYLON.Mesh.rotation of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.Mesh.rotationQuaternion.
        // BABYLON.Mesh.scaling of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Mesh.scalingDeterminant of type 'number':
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // BABYLON.Mesh.showSubMeshesBoundingBox of type 'boolean':
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Skeleton property (not coded) BABYLON.Mesh.skeleton.
        // BABYLON.Mesh.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.SubMesh[] property (not coded) BABYLON.Mesh.subMeshes.
        // BABYLON.Mesh.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BABYLON.Mesh.useOctreeForCollisions of type 'boolean':
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.useOctreeForPicking of type 'boolean':
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.useOctreeForRenderingSelection of type 'boolean':
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.useVertexColors of type 'boolean':
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // BABYLON.Mesh.visibility of type 'number':
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({
                propertyName: 'visibility',
                value: newProps.visibility,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberBox implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateBox",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BABYLON.Vector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberBox",
        "acceptsMaterials": true
    };
}

/**
 * Creates a sphere mesh
 * * The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
 * * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
 * * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
 * * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
 * * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberSphere implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateSphere",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "segments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "slice",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "any",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSphere",
        "acceptsMaterials": true
    };
}

/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberDisc implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateDisc",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDisc",
        "acceptsMaterials": true
    };
}

/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberIcoSphere implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateIcoSphere",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "flat",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberIcoSphere",
        "acceptsMaterials": true
    };
}

/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
 * * The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
 * * Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
 * * Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberRibbon implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateRibbon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "pathArray",
                        "type": "BABYLON.Vector3[][]",
                        "optional": false
                    },
                    {
                        "name": "closeArray",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "closePath",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "offset",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.Mesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "uvs",
                        "type": "BABYLON.Vector2[]",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberRibbon",
        "acceptsMaterials": true
    };
}

/**
 * Creates a cylinder or a cone mesh
 * * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
 * * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
 * * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
 * * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
 * * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
 * * The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
 * * The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
 * * The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
 * * The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
 * * Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
 * * Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
 * * Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
 * * If `enclose` is false, a ring surface is one element.
 * * If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
 * * Example how to set colors and textures on a sliced cylinder : http://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberCylinder implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateCylinder",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterTop",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterBottom",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BABYLON.Vector4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "hasRings",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "enclose",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "any",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberCylinder",
        "acceptsMaterials": true
    };
}

/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberTorus implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateTorus",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "thickness",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "any",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTorus",
        "acceptsMaterials": true
    };
}

/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberTorusKnot implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateTorusKnot",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tube",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radialSegments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tubularSegments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "p",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "q",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "any",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTorusKnot",
        "acceptsMaterials": true
    };
}

/**
 * Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
 * * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
 * * The parameter `lines` is an array of lines, each line being an array of successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
 * * The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberLineSystem implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateLineSystem",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "lines",
                        "type": "BABYLON.Vector3[][]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.LinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BABYLON.Color4[][]",
                        "optional": true
                    },
                    {
                        "name": "useVertexAlpha",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLineSystem",
        "acceptsMaterials": true
    };
}

/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * The optional parameter `colors` is an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberLines implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateLines",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "points",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.LinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "useVertexAlpha",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLines",
        "acceptsMaterials": true
    };
}

/**
 * Creates a dashed line mesh
 * * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
 * * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
 * * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberDashedLines implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateDashedLines",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "points",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "dashSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "gapSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "dashNb",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.LinesMesh",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDashedLines",
        "acceptsMaterials": true
    };
}

/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberExtrudeShape implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "ExtrudeShape",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "scale",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "rotation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.Mesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberExtrudeShape",
        "acceptsMaterials": true
    };
}

/**
 * Creates an custom extruded shape mesh.
 * The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
 * * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the scale value applied to the shape on each path point
 * * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`
 * * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberExtrudeShapeCustom implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "ExtrudeShapeCustom",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "scaleFunction",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "rotationFunction",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "ribbonCloseArray",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "ribbonClosePath",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.Mesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberExtrudeShapeCustom",
        "acceptsMaterials": true
    };
}

/**
 * Creates lathe mesh.
 * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
 * * The parameter `radius` (positive float, default 1) is the radius value of the lathe
 * * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
 * * The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
 * * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
 * * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberLathe implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateLathe",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "clip",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "closed",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLathe",
        "acceptsMaterials": true
    };
}

/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberPlane implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreatePlane",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sourcePlane",
                        "type": "BABYLON.Plane",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPlane",
        "acceptsMaterials": true
    };
}

/**
 * Creates a ground mesh
 * * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground
 * * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberGround implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateGround",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisionsX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisionsY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "any",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberGround",
        "acceptsMaterials": true
    };
}

/**
 * Creates a tiled ground mesh
 * * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates
 * * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates
 * * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
 * * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberTiledGround implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateTiledGround",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "xmin",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "zmin",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "xmax",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "zmax",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "subdivisions",
                        "type": "{ w: number; h: number; }",
                        "optional": true
                    },
                    {
                        "name": "precision",
                        "type": "{ w: number; h: number; }",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTiledGround",
        "acceptsMaterials": true
    };
}

/**
 * Creates a ground mesh from a height map
 * * The parameter `url` sets the URL of the height map image resource.
 * * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
 * * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
 * * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
 * * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
 * * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
 * * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
 * * The parameter `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberGroundFromHeightMap implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateGroundFromHeightMap",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "minHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "maxHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "colorFilter",
                        "type": "BABYLON.Color3",
                        "optional": true
                    },
                    {
                        "name": "alphaFilter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "onReady",
                        "type": "(mesh: BABYLON.GroundMesh) => void",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberGroundFromHeightMap",
        "acceptsMaterials": true
    };
}

/**
 * Creates a polygon mesh
 * The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
 * * The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
 * * You can set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
 * * Remember you can only change the shape positions, not their number when updating a polygon
 * 
 * This code has been generated
 */
export class FiberPolygon implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreatePolygon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BABYLON.Vector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BABYLON.Vector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPolygon",
        "acceptsMaterials": true
    };
}

/**
 * Creates an extruded polygon mesh, with depth in the Y direction.
 * * You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)
 * 
 * This code has been generated
 */
export class FiberExtrudePolygon implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "ExtrudePolygon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BABYLON.Vector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BABYLON.Vector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberExtrudePolygon",
        "acceptsMaterials": true
    };
}

/**
 * Creates a tube mesh.
 * The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
 * * The parameter `radius` (positive float, default 1) sets the tube radius size
 * * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
 * * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`
 * * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
 * * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberTube implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateTube",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "path",
                        "type": "BABYLON.Vector3[]",
                        "optional": false
                    },
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusFunction",
                        "type": "(i: number, distance: number) => number",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BABYLON.Mesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTube",
        "acceptsMaterials": true
    };
}

/**
 * Creates a polyhedron mesh
 * * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
 * * The parameter `size` (positive float, default 1) sets the polygon size
 * * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
 * * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`
 * * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
 * * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : http://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberPolyhedron implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreatePolyhedron",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "type",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "custom",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BABYLON.Vector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BABYLON.Color4[]",
                        "optional": true
                    },
                    {
                        "name": "flat",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BABYLON.Vector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPolyhedron",
        "acceptsMaterials": true
    };
}

/**
 * Creates a decal mesh.
 * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
 * * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
 * * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
 * * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
 * * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
 * 
 * This code has been generated
 */
export class FiberDecal implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Mesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Mesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "BABYLON",
        "factoryMethod": "CreateDecal",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "sourceMesh",
                "type": "BABYLON.AbstractMesh",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "position",
                        "type": "BABYLON.Vector3",
                        "optional": true
                    },
                    {
                        "name": "normal",
                        "type": "BABYLON.Vector3",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "BABYLON.Vector3",
                        "optional": true
                    },
                    {
                        "name": "angle",
                        "type": "number",
                        "optional": true
                    }
                ],
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDecal",
        "acceptsMaterials": true
    };
}

export class FiberMaterialProps {
    alpha?: number;
    alphaMode?: number;
    animations?: BABYLON.Animation[];
    backFaceCulling?: boolean;
    checkReadyOnEveryCall?: boolean;
    checkReadyOnlyOnce?: boolean;
    disableDepthWrite?: boolean;
    doNotSerialize?: boolean;
    fillMode?: number;
    fogEnabled?: boolean;
    forceDepthWrite?: boolean;
    getRenderTargetTextures?: () => BABYLON.SmartArray<BABYLON.RenderTargetTexture>;
    id?: string;
    name?: string;
    needDepthPrePass?: boolean;
    pointsCloud?: boolean;
    pointSize?: number;
    separateCullingPass?: boolean;
    sideOrientation?: number;
    state?: string;
    storeEffectOnSubMeshes?: boolean;
    uniqueId?: number;
    wireframe?: boolean;
    zOffset?: number;
}

export class FiberMaterialPropsHandler implements PropsHandler<BABYLON.Material, FiberMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Material>, oldProps: FiberMaterialProps, newProps: FiberMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Material = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.Material.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BABYLON.Material.alphaMode of type 'number':
        if (oldProps.alphaMode !== newProps.alphaMode) {
            updates.push({
                propertyName: 'alphaMode',
                value: newProps.alphaMode,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.Material.animations.
        // BABYLON.Material.backFaceCulling of type 'boolean':
        if (oldProps.backFaceCulling !== newProps.backFaceCulling) {
            updates.push({
                propertyName: 'backFaceCulling',
                value: newProps.backFaceCulling,
                type: 'boolean'
            });
        }
        // BABYLON.Material.checkReadyOnEveryCall of type 'boolean':
        if (oldProps.checkReadyOnEveryCall !== newProps.checkReadyOnEveryCall) {
            updates.push({
                propertyName: 'checkReadyOnEveryCall',
                value: newProps.checkReadyOnEveryCall,
                type: 'boolean'
            });
        }
        // BABYLON.Material.checkReadyOnlyOnce of type 'boolean':
        if (oldProps.checkReadyOnlyOnce !== newProps.checkReadyOnlyOnce) {
            updates.push({
                propertyName: 'checkReadyOnlyOnce',
                value: newProps.checkReadyOnlyOnce,
                type: 'boolean'
            });
        }
        // BABYLON.Material.disableDepthWrite of type 'boolean':
        if (oldProps.disableDepthWrite !== newProps.disableDepthWrite) {
            updates.push({
                propertyName: 'disableDepthWrite',
                value: newProps.disableDepthWrite,
                type: 'boolean'
            });
        }
        // BABYLON.Material.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // BABYLON.Material.fillMode of type 'number':
        if (oldProps.fillMode !== newProps.fillMode) {
            updates.push({
                propertyName: 'fillMode',
                value: newProps.fillMode,
                type: 'number'
            });
        }
        // BABYLON.Material.fogEnabled of type 'boolean':
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Material.forceDepthWrite of type 'boolean':
        if (oldProps.forceDepthWrite !== newProps.forceDepthWrite) {
            updates.push({
                propertyName: 'forceDepthWrite',
                value: newProps.forceDepthWrite,
                type: 'boolean'
            });
        }
        // TODO: type: () => BABYLON.SmartArray<BABYLON.RenderTargetTexture> property (not coded) BABYLON.Material.getRenderTargetTextures.
        // BABYLON.Material.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // BABYLON.Material.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BABYLON.Material.needDepthPrePass of type 'boolean':
        if (oldProps.needDepthPrePass !== newProps.needDepthPrePass) {
            updates.push({
                propertyName: 'needDepthPrePass',
                value: newProps.needDepthPrePass,
                type: 'boolean'
            });
        }
        // BABYLON.Material.pointsCloud of type 'boolean':
        if (oldProps.pointsCloud !== newProps.pointsCloud) {
            updates.push({
                propertyName: 'pointsCloud',
                value: newProps.pointsCloud,
                type: 'boolean'
            });
        }
        // BABYLON.Material.pointSize of type 'number':
        if (oldProps.pointSize !== newProps.pointSize) {
            updates.push({
                propertyName: 'pointSize',
                value: newProps.pointSize,
                type: 'number'
            });
        }
        // BABYLON.Material.separateCullingPass of type 'boolean':
        if (oldProps.separateCullingPass !== newProps.separateCullingPass) {
            updates.push({
                propertyName: 'separateCullingPass',
                value: newProps.separateCullingPass,
                type: 'boolean'
            });
        }
        // BABYLON.Material.sideOrientation of type 'number':
        if (oldProps.sideOrientation !== newProps.sideOrientation) {
            updates.push({
                propertyName: 'sideOrientation',
                value: newProps.sideOrientation,
                type: 'number'
            });
        }
        // BABYLON.Material.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // BABYLON.Material.storeEffectOnSubMeshes of type 'boolean':
        if (oldProps.storeEffectOnSubMeshes !== newProps.storeEffectOnSubMeshes) {
            updates.push({
                propertyName: 'storeEffectOnSubMeshes',
                value: newProps.storeEffectOnSubMeshes,
                type: 'boolean'
            });
        }
        // BABYLON.Material.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BABYLON.Material.wireframe of type 'boolean':
        if (oldProps.wireframe !== newProps.wireframe) {
            updates.push({
                propertyName: 'wireframe',
                value: newProps.wireframe,
                type: 'boolean'
            });
        }
        // BABYLON.Material.zOffset of type 'number':
        if (oldProps.zOffset !== newProps.zOffset) {
            updates.push({
                propertyName: 'zOffset',
                value: newProps.zOffset,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Base class for the main features of a material in Babylon.js
 * 
 * This code has been generated
 */
export class FiberMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Material",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "doNotAdd",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberMaterial",
        "isMaterial": true
    };
}

export class FiberMultiMaterialProps extends FiberMaterialProps {
    subMaterials?: BABYLON.Material[];
}

export class FiberMultiMaterialPropsHandler implements PropsHandler<BABYLON.MultiMaterial, FiberMultiMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.MultiMaterial>, oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.MultiMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.Material[] property (not coded) BABYLON.MultiMaterial.subMaterials.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 * 
 * This code has been generated
 */
export class FiberMultiMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberMultiMaterial",
        "isMaterial": true
    };
}

export class FiberPushMaterialProps extends FiberMaterialProps {
}

export class FiberPushMaterialPropsHandler implements PropsHandler<BABYLON.PushMaterial, FiberPushMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PushMaterial>, oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PushMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Base class of materials working in push mode in babylon JS
 * 
 * This code has been generated
 */
export class FiberPushMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PushMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPushMaterial",
        "isMaterial": true
    };
}

export class FiberStandardMaterialProps extends FiberPushMaterialProps {
    alphaCutOff?: number;
    ambientColor?: BABYLON.Color3;
    ambientTexture?: BABYLON.BaseTexture;
    bumpTexture?: BABYLON.BaseTexture;
    cameraColorCurves?: BABYLON.ColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BABYLON.BaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    customShaderNameResolve?: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BABYLON.StandardMaterialDefines) => string;
    diffuseColor?: BABYLON.Color3;
    diffuseFresnelParameters?: BABYLON.FresnelParameters;
    diffuseTexture?: BABYLON.BaseTexture;
    disableLighting?: boolean;
    emissiveColor?: BABYLON.Color3;
    emissiveFresnelParameters?: BABYLON.FresnelParameters;
    emissiveTexture?: BABYLON.BaseTexture;
    imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration;
    indexOfRefraction?: number;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    invertRefractionY?: boolean;
    lightmapTexture?: BABYLON.BaseTexture;
    linkEmissiveWithDiffuse?: boolean;
    maxSimultaneousLights?: number;
    opacityFresnelParameters?: BABYLON.FresnelParameters;
    opacityTexture?: BABYLON.BaseTexture;
    parallaxScaleBias?: number;
    reflectionFresnelParameters?: BABYLON.FresnelParameters;
    reflectionTexture?: BABYLON.BaseTexture;
    refractionFresnelParameters?: BABYLON.FresnelParameters;
    refractionTexture?: BABYLON.BaseTexture;
    roughness?: number;
    specularColor?: BABYLON.Color3;
    specularPower?: number;
    specularTexture?: BABYLON.BaseTexture;
    twoSidedLighting?: boolean;
    useAlphaFromDiffuseTexture?: boolean;
    useEmissiveAsIllumination?: boolean;
    useGlossinessFromSpecularMapAlpha?: boolean;
    useLightmapAsShadowmap?: boolean;
    useLogarithmicDepth?: boolean;
    useObjectSpaceNormalMap?: boolean;
    useParallax?: boolean;
    useParallaxOcclusion?: boolean;
    useReflectionFresnelFromSpecular?: boolean;
    useReflectionOverAlpha?: boolean;
    useSpecularOverAlpha?: boolean;
}

export class FiberStandardMaterialPropsHandler implements PropsHandler<BABYLON.StandardMaterial, FiberStandardMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StandardMaterial>, oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.StandardMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.StandardMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.ambientColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.ambientTexture.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.bumpTexture.
        // TODO: type: BABYLON.ColorCurves property (not coded) BABYLON.StandardMaterial.cameraColorCurves.
        // BABYLON.StandardMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.cameraColorGradingTexture.
        // BABYLON.StandardMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BABYLON.StandardMaterialDefines) => string property (not coded) BABYLON.StandardMaterial.customShaderNameResolve.
        // BABYLON.StandardMaterial.diffuseColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.diffuseColor && (!oldProps.diffuseColor || !oldProps.diffuseColor.equals(newProps.diffuseColor))) {
            updates.push({
                propertyName: 'diffuseColor',
                value: newProps.diffuseColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.FresnelParameters property (not coded) BABYLON.StandardMaterial.diffuseFresnelParameters.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.diffuseTexture.
        // BABYLON.StandardMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.emissiveColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.FresnelParameters property (not coded) BABYLON.StandardMaterial.emissiveFresnelParameters.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.emissiveTexture.
        // TODO: type: BABYLON.ImageProcessingConfiguration property (not coded) BABYLON.StandardMaterial.imageProcessingConfiguration.
        // BABYLON.StandardMaterial.indexOfRefraction of type 'number':
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.invertRefractionY of type 'boolean':
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.lightmapTexture.
        // BABYLON.StandardMaterial.linkEmissiveWithDiffuse of type 'boolean':
        if (oldProps.linkEmissiveWithDiffuse !== newProps.linkEmissiveWithDiffuse) {
            updates.push({
                propertyName: 'linkEmissiveWithDiffuse',
                value: newProps.linkEmissiveWithDiffuse,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.FresnelParameters property (not coded) BABYLON.StandardMaterial.opacityFresnelParameters.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.opacityTexture.
        // BABYLON.StandardMaterial.parallaxScaleBias of type 'number':
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.FresnelParameters property (not coded) BABYLON.StandardMaterial.reflectionFresnelParameters.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.reflectionTexture.
        // TODO: type: BABYLON.FresnelParameters property (not coded) BABYLON.StandardMaterial.refractionFresnelParameters.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.refractionTexture.
        // BABYLON.StandardMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.specularColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.specularColor && (!oldProps.specularColor || !oldProps.specularColor.equals(newProps.specularColor))) {
            updates.push({
                propertyName: 'specularColor',
                value: newProps.specularColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.StandardMaterial.specularPower of type 'number':
        if (oldProps.specularPower !== newProps.specularPower) {
            updates.push({
                propertyName: 'specularPower',
                value: newProps.specularPower,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.StandardMaterial.specularTexture.
        // BABYLON.StandardMaterial.twoSidedLighting of type 'boolean':
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useAlphaFromDiffuseTexture of type 'boolean':
        if (oldProps.useAlphaFromDiffuseTexture !== newProps.useAlphaFromDiffuseTexture) {
            updates.push({
                propertyName: 'useAlphaFromDiffuseTexture',
                value: newProps.useAlphaFromDiffuseTexture,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useEmissiveAsIllumination of type 'boolean':
        if (oldProps.useEmissiveAsIllumination !== newProps.useEmissiveAsIllumination) {
            updates.push({
                propertyName: 'useEmissiveAsIllumination',
                value: newProps.useEmissiveAsIllumination,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useGlossinessFromSpecularMapAlpha of type 'boolean':
        if (oldProps.useGlossinessFromSpecularMapAlpha !== newProps.useGlossinessFromSpecularMapAlpha) {
            updates.push({
                propertyName: 'useGlossinessFromSpecularMapAlpha',
                value: newProps.useGlossinessFromSpecularMapAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useLogarithmicDepth of type 'boolean':
        if (oldProps.useLogarithmicDepth !== newProps.useLogarithmicDepth) {
            updates.push({
                propertyName: 'useLogarithmicDepth',
                value: newProps.useLogarithmicDepth,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useObjectSpaceNormalMap of type 'boolean':
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useParallax of type 'boolean':
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useParallaxOcclusion of type 'boolean':
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useReflectionFresnelFromSpecular of type 'boolean':
        if (oldProps.useReflectionFresnelFromSpecular !== newProps.useReflectionFresnelFromSpecular) {
            updates.push({
                propertyName: 'useReflectionFresnelFromSpecular',
                value: newProps.useReflectionFresnelFromSpecular,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useReflectionOverAlpha of type 'boolean':
        if (oldProps.useReflectionOverAlpha !== newProps.useReflectionOverAlpha) {
            updates.push({
                propertyName: 'useReflectionOverAlpha',
                value: newProps.useReflectionOverAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.StandardMaterial.useSpecularOverAlpha of type 'boolean':
        if (oldProps.useSpecularOverAlpha !== newProps.useSpecularOverAlpha) {
            updates.push({
                propertyName: 'useSpecularOverAlpha',
                value: newProps.useSpecularOverAlpha,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 * 
 * This code has been generated
 */
export class FiberStandardMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStandardMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StandardMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStandardMaterial",
        "isMaterial": true
    };
}

export class FiberBackgroundMaterialProps extends FiberPushMaterialProps {
    cameraColorCurves?: BABYLON.ColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BABYLON.BaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    diffuseTexture?: BABYLON.BaseTexture;
    enableNoise?: boolean;
    fovMultiplier?: number;
    imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration;
    maxSimultaneousLights?: number;
    opacityFresnel?: boolean;
    primaryColor?: BABYLON.Color3;
    primaryColorHighlightLevel?: number;
    primaryColorShadowLevel?: number;
    reflectionAmount?: number;
    reflectionBlur?: number;
    reflectionFalloffDistance?: number;
    reflectionFresnel?: boolean;
    reflectionReflectance0?: number;
    reflectionReflectance90?: number;
    reflectionStandardFresnelWeight?: number;
    reflectionTexture?: BABYLON.BaseTexture;
    sceneCenter?: BABYLON.Vector3;
    shadowLevel?: number;
    shadowLights?: BABYLON.IShadowLight[];
    switchToBGR?: boolean;
    useEquirectangularFOV?: boolean;
    useRGBColor?: boolean;
}

export class FiberBackgroundMaterialPropsHandler implements PropsHandler<BABYLON.BackgroundMaterial, FiberBackgroundMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.BackgroundMaterial>, oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.BackgroundMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.ColorCurves property (not coded) BABYLON.BackgroundMaterial.cameraColorCurves.
        // BABYLON.BackgroundMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.BackgroundMaterial.cameraColorGradingTexture.
        // BABYLON.BackgroundMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.BackgroundMaterial.diffuseTexture.
        // BABYLON.BackgroundMaterial.enableNoise of type 'boolean':
        if (oldProps.enableNoise !== newProps.enableNoise) {
            updates.push({
                propertyName: 'enableNoise',
                value: newProps.enableNoise,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.fovMultiplier of type 'number':
        if (oldProps.fovMultiplier !== newProps.fovMultiplier) {
            updates.push({
                propertyName: 'fovMultiplier',
                value: newProps.fovMultiplier,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.ImageProcessingConfiguration property (not coded) BABYLON.BackgroundMaterial.imageProcessingConfiguration.
        // BABYLON.BackgroundMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.opacityFresnel of type 'boolean':
        if (oldProps.opacityFresnel !== newProps.opacityFresnel) {
            updates.push({
                propertyName: 'opacityFresnel',
                value: newProps.opacityFresnel,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.primaryColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.primaryColor && (!oldProps.primaryColor || !oldProps.primaryColor.equals(newProps.primaryColor))) {
            updates.push({
                propertyName: 'primaryColor',
                value: newProps.primaryColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.BackgroundMaterial.primaryColorHighlightLevel of type 'number':
        if (oldProps.primaryColorHighlightLevel !== newProps.primaryColorHighlightLevel) {
            updates.push({
                propertyName: 'primaryColorHighlightLevel',
                value: newProps.primaryColorHighlightLevel,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.primaryColorShadowLevel of type 'number':
        if (oldProps.primaryColorShadowLevel !== newProps.primaryColorShadowLevel) {
            updates.push({
                propertyName: 'primaryColorShadowLevel',
                value: newProps.primaryColorShadowLevel,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionAmount of type 'number':
        if (oldProps.reflectionAmount !== newProps.reflectionAmount) {
            updates.push({
                propertyName: 'reflectionAmount',
                value: newProps.reflectionAmount,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionBlur of type 'number':
        if (oldProps.reflectionBlur !== newProps.reflectionBlur) {
            updates.push({
                propertyName: 'reflectionBlur',
                value: newProps.reflectionBlur,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionFalloffDistance of type 'number':
        if (oldProps.reflectionFalloffDistance !== newProps.reflectionFalloffDistance) {
            updates.push({
                propertyName: 'reflectionFalloffDistance',
                value: newProps.reflectionFalloffDistance,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionFresnel of type 'boolean':
        if (oldProps.reflectionFresnel !== newProps.reflectionFresnel) {
            updates.push({
                propertyName: 'reflectionFresnel',
                value: newProps.reflectionFresnel,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionReflectance0 of type 'number':
        if (oldProps.reflectionReflectance0 !== newProps.reflectionReflectance0) {
            updates.push({
                propertyName: 'reflectionReflectance0',
                value: newProps.reflectionReflectance0,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionReflectance90 of type 'number':
        if (oldProps.reflectionReflectance90 !== newProps.reflectionReflectance90) {
            updates.push({
                propertyName: 'reflectionReflectance90',
                value: newProps.reflectionReflectance90,
                type: 'number'
            });
        }
        // BABYLON.BackgroundMaterial.reflectionStandardFresnelWeight of type 'number':
        if (oldProps.reflectionStandardFresnelWeight !== newProps.reflectionStandardFresnelWeight) {
            updates.push({
                propertyName: 'reflectionStandardFresnelWeight',
                value: newProps.reflectionStandardFresnelWeight,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.BackgroundMaterial.reflectionTexture.
        // BABYLON.BackgroundMaterial.sceneCenter of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.sceneCenter && (!oldProps.sceneCenter || !oldProps.sceneCenter.equals(newProps.sceneCenter))) {
            updates.push({
                propertyName: 'sceneCenter',
                value: newProps.sceneCenter,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.BackgroundMaterial.shadowLevel of type 'number':
        if (oldProps.shadowLevel !== newProps.shadowLevel) {
            updates.push({
                propertyName: 'shadowLevel',
                value: newProps.shadowLevel,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.IShadowLight[] property (not coded) BABYLON.BackgroundMaterial.shadowLights.
        // BABYLON.BackgroundMaterial.switchToBGR of type 'boolean':
        if (oldProps.switchToBGR !== newProps.switchToBGR) {
            updates.push({
                propertyName: 'switchToBGR',
                value: newProps.switchToBGR,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.useEquirectangularFOV of type 'boolean':
        if (oldProps.useEquirectangularFOV !== newProps.useEquirectangularFOV) {
            updates.push({
                propertyName: 'useEquirectangularFOV',
                value: newProps.useEquirectangularFOV,
                type: 'boolean'
            });
        }
        // BABYLON.BackgroundMaterial.useRGBColor of type 'boolean':
        if (oldProps.useRGBColor !== newProps.useRGBColor) {
            updates.push({
                propertyName: 'useRGBColor',
                value: newProps.useRGBColor,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Background material used to create an efficient environement around your scene.
 * 
 * This code has been generated
 */
export class FiberBackgroundMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBackgroundMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BackgroundMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberBackgroundMaterial",
        "isMaterial": true
    };
}

export class FiberPBRBaseMaterialProps extends FiberPushMaterialProps {
    transparencyMode?: number;
    useLogarithmicDepth?: boolean;
}

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<BABYLON.PBRBaseMaterial, FiberPBRBaseMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PBRBaseMaterial>, oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PBRBaseMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRBaseMaterial.transparencyMode of type 'number':
        if (oldProps.transparencyMode !== newProps.transparencyMode) {
            updates.push({
                propertyName: 'transparencyMode',
                value: newProps.transparencyMode,
                type: 'number'
            });
        }
        // BABYLON.PBRBaseMaterial.useLogarithmicDepth of type 'boolean':
        if (oldProps.useLogarithmicDepth !== newProps.useLogarithmicDepth) {
            updates.push({
                propertyName: 'useLogarithmicDepth',
                value: newProps.useLogarithmicDepth,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The Physically based material base class of BJS.
 * 
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * http://doc.babylonjs.com/extensions/Physically_Based_Rendering
 * 
 * This code has been generated
 */
export class FiberPBRBaseMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPBRBaseMaterial",
        "isMaterial": true
    };
}

export class FiberPBRBaseSimpleMaterialProps extends FiberPBRBaseMaterialProps {
    alphaCutOff?: number;
    disableLighting?: boolean;
    doubleSided?: boolean;
    emissiveColor?: BABYLON.Color3;
    emissiveTexture?: BABYLON.BaseTexture;
    environmentTexture?: BABYLON.BaseTexture;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    lightmapTexture?: BABYLON.BaseTexture;
    maxSimultaneousLights?: number;
    normalTexture?: BABYLON.BaseTexture;
    occlusionStrength?: number;
    occlusionTexture?: BABYLON.BaseTexture;
    useLightmapAsShadowmap?: boolean;
}

export class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<BABYLON.PBRBaseSimpleMaterial, FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PBRBaseSimpleMaterial>, oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PBRBaseSimpleMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRBaseSimpleMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BABYLON.PBRBaseSimpleMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BABYLON.PBRBaseSimpleMaterial.doubleSided of type 'boolean':
        if (oldProps.doubleSided !== newProps.doubleSided) {
            updates.push({
                propertyName: 'doubleSided',
                value: newProps.doubleSided,
                type: 'boolean'
            });
        }
        // BABYLON.PBRBaseSimpleMaterial.emissiveColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRBaseSimpleMaterial.emissiveTexture.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRBaseSimpleMaterial.environmentTexture.
        // BABYLON.PBRBaseSimpleMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BABYLON.PBRBaseSimpleMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRBaseSimpleMaterial.lightmapTexture.
        // BABYLON.PBRBaseSimpleMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRBaseSimpleMaterial.normalTexture.
        // BABYLON.PBRBaseSimpleMaterial.occlusionStrength of type 'number':
        if (oldProps.occlusionStrength !== newProps.occlusionStrength) {
            updates.push({
                propertyName: 'occlusionStrength',
                value: newProps.occlusionStrength,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRBaseSimpleMaterial.occlusionTexture.
        // BABYLON.PBRBaseSimpleMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The Physically based simple base material of BJS.
 * 
 * This enables better naming and convention enforcements on top of the pbrMaterial.
 * It is used as the base class for both the specGloss and metalRough conventions.
 * 
 * This code has been generated
 */
export class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseSimpleMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPBRBaseSimpleMaterial",
        "isMaterial": true
    };
}

export class FiberPBRMetallicRoughnessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
    baseColor?: BABYLON.Color3;
    baseTexture?: BABYLON.BaseTexture;
    metallic?: number;
    metallicRoughnessTexture?: BABYLON.BaseTexture;
    roughness?: number;
}

export class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<BABYLON.PBRMetallicRoughnessMaterial, FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PBRMetallicRoughnessMaterial>, oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PBRMetallicRoughnessMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRMetallicRoughnessMaterial.baseColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.baseColor && (!oldProps.baseColor || !oldProps.baseColor.equals(newProps.baseColor))) {
            updates.push({
                propertyName: 'baseColor',
                value: newProps.baseColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMetallicRoughnessMaterial.baseTexture.
        // BABYLON.PBRMetallicRoughnessMaterial.metallic of type 'number':
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMetallicRoughnessMaterial.metallicRoughnessTexture.
        // BABYLON.PBRMetallicRoughnessMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The PBR material of BJS following the metal roughness convention.
 * 
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0
 * 
 * This code has been generated
 */
export class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMetallicRoughnessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMetallicRoughnessMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPBRMetallicRoughnessMaterial",
        "isMaterial": true
    };
}

export class FiberPBRSpecularGlossinessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
    diffuseColor?: BABYLON.Color3;
    diffuseTexture?: BABYLON.BaseTexture;
    glossiness?: number;
    specularColor?: BABYLON.Color3;
    specularGlossinessTexture?: BABYLON.BaseTexture;
}

export class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<BABYLON.PBRSpecularGlossinessMaterial, FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PBRSpecularGlossinessMaterial>, oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PBRSpecularGlossinessMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRSpecularGlossinessMaterial.diffuseColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.diffuseColor && (!oldProps.diffuseColor || !oldProps.diffuseColor.equals(newProps.diffuseColor))) {
            updates.push({
                propertyName: 'diffuseColor',
                value: newProps.diffuseColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRSpecularGlossinessMaterial.diffuseTexture.
        // BABYLON.PBRSpecularGlossinessMaterial.glossiness of type 'number':
        if (oldProps.glossiness !== newProps.glossiness) {
            updates.push({
                propertyName: 'glossiness',
                value: newProps.glossiness,
                type: 'number'
            });
        }
        // BABYLON.PBRSpecularGlossinessMaterial.specularColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.specularColor && (!oldProps.specularColor || !oldProps.specularColor.equals(newProps.specularColor))) {
            updates.push({
                propertyName: 'specularColor',
                value: newProps.specularColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRSpecularGlossinessMaterial.specularGlossinessTexture.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The PBR material of BJS following the specular glossiness convention.
 * 
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
 * 
 * This code has been generated
 */
export class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRSpecularGlossinessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRSpecularGlossinessMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPBRSpecularGlossinessMaterial",
        "isMaterial": true
    };
}

export class FiberPBRMaterialProps extends FiberPBRBaseMaterialProps {
    albedoColor?: BABYLON.Color3;
    albedoTexture?: BABYLON.BaseTexture;
    alphaCutOff?: number;
    ambientColor?: BABYLON.Color3;
    ambientTexture?: BABYLON.BaseTexture;
    ambientTextureImpactOnAnalyticalLights?: number;
    ambientTextureStrength?: number;
    bumpTexture?: BABYLON.BaseTexture;
    cameraColorCurves?: BABYLON.ColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BABYLON.BaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    directIntensity?: number;
    disableBumpMap?: boolean;
    disableLighting?: boolean;
    emissiveColor?: BABYLON.Color3;
    emissiveIntensity?: number;
    emissiveTexture?: BABYLON.BaseTexture;
    enableSpecularAntiAliasing?: boolean;
    environmentBRDFTexture?: BABYLON.BaseTexture;
    environmentIntensity?: number;
    forceAlphaTest?: boolean;
    forceIrradianceInFragment?: boolean;
    forceNormalForward?: boolean;
    imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration;
    indexOfRefraction?: number;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    invertRefractionY?: boolean;
    lightmapTexture?: BABYLON.BaseTexture;
    linkRefractionWithTransparency?: boolean;
    maxSimultaneousLights?: number;
    metallic?: number;
    metallicTexture?: BABYLON.BaseTexture;
    microSurface?: number;
    microSurfaceTexture?: BABYLON.BaseTexture;
    opacityTexture?: BABYLON.BaseTexture;
    parallaxScaleBias?: number;
    reflectionColor?: BABYLON.Color3;
    reflectionTexture?: BABYLON.BaseTexture;
    reflectivityColor?: BABYLON.Color3;
    reflectivityTexture?: BABYLON.BaseTexture;
    refractionTexture?: BABYLON.BaseTexture;
    roughness?: number;
    specularIntensity?: number;
    twoSidedLighting?: boolean;
    unlit?: boolean;
    useAlphaFresnel?: boolean;
    useAlphaFromAlbedoTexture?: boolean;
    useAmbientInGrayScale?: boolean;
    useAmbientOcclusionFromMetallicTextureRed?: boolean;
    useAutoMicroSurfaceFromReflectivityMap?: boolean;
    useGLTFLightFalloff?: boolean;
    useHorizonOcclusion?: boolean;
    useLightmapAsShadowmap?: boolean;
    useLinearAlphaFresnel?: boolean;
    useMetallnessFromMetallicTextureBlue?: boolean;
    useMicroSurfaceFromReflectivityMapAlpha?: boolean;
    useObjectSpaceNormalMap?: boolean;
    useParallax?: boolean;
    useParallaxOcclusion?: boolean;
    usePhysicalLightFalloff?: boolean;
    useRadianceOcclusion?: boolean;
    useRadianceOverAlpha?: boolean;
    useRoughnessFromMetallicTextureAlpha?: boolean;
    useRoughnessFromMetallicTextureGreen?: boolean;
    useSpecularOverAlpha?: boolean;
}

export class FiberPBRMaterialPropsHandler implements PropsHandler<BABYLON.PBRMaterial, FiberPBRMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PBRMaterial>, oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PBRMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRMaterial.albedoColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.albedoColor && (!oldProps.albedoColor || !oldProps.albedoColor.equals(newProps.albedoColor))) {
            updates.push({
                propertyName: 'albedoColor',
                value: newProps.albedoColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.albedoTexture.
        // BABYLON.PBRMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.ambientColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.ambientTexture.
        // BABYLON.PBRMaterial.ambientTextureImpactOnAnalyticalLights of type 'number':
        if (oldProps.ambientTextureImpactOnAnalyticalLights !== newProps.ambientTextureImpactOnAnalyticalLights) {
            updates.push({
                propertyName: 'ambientTextureImpactOnAnalyticalLights',
                value: newProps.ambientTextureImpactOnAnalyticalLights,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.ambientTextureStrength of type 'number':
        if (oldProps.ambientTextureStrength !== newProps.ambientTextureStrength) {
            updates.push({
                propertyName: 'ambientTextureStrength',
                value: newProps.ambientTextureStrength,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.bumpTexture.
        // TODO: type: BABYLON.ColorCurves property (not coded) BABYLON.PBRMaterial.cameraColorCurves.
        // BABYLON.PBRMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.cameraColorGradingTexture.
        // BABYLON.PBRMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.directIntensity of type 'number':
        if (oldProps.directIntensity !== newProps.directIntensity) {
            updates.push({
                propertyName: 'directIntensity',
                value: newProps.directIntensity,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.disableBumpMap of type 'boolean':
        if (oldProps.disableBumpMap !== newProps.disableBumpMap) {
            updates.push({
                propertyName: 'disableBumpMap',
                value: newProps.disableBumpMap,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.emissiveColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.PBRMaterial.emissiveIntensity of type 'number':
        if (oldProps.emissiveIntensity !== newProps.emissiveIntensity) {
            updates.push({
                propertyName: 'emissiveIntensity',
                value: newProps.emissiveIntensity,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.emissiveTexture.
        // BABYLON.PBRMaterial.enableSpecularAntiAliasing of type 'boolean':
        if (oldProps.enableSpecularAntiAliasing !== newProps.enableSpecularAntiAliasing) {
            updates.push({
                propertyName: 'enableSpecularAntiAliasing',
                value: newProps.enableSpecularAntiAliasing,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.environmentBRDFTexture.
        // BABYLON.PBRMaterial.environmentIntensity of type 'number':
        if (oldProps.environmentIntensity !== newProps.environmentIntensity) {
            updates.push({
                propertyName: 'environmentIntensity',
                value: newProps.environmentIntensity,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.forceAlphaTest of type 'boolean':
        if (oldProps.forceAlphaTest !== newProps.forceAlphaTest) {
            updates.push({
                propertyName: 'forceAlphaTest',
                value: newProps.forceAlphaTest,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.forceIrradianceInFragment of type 'boolean':
        if (oldProps.forceIrradianceInFragment !== newProps.forceIrradianceInFragment) {
            updates.push({
                propertyName: 'forceIrradianceInFragment',
                value: newProps.forceIrradianceInFragment,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.forceNormalForward of type 'boolean':
        if (oldProps.forceNormalForward !== newProps.forceNormalForward) {
            updates.push({
                propertyName: 'forceNormalForward',
                value: newProps.forceNormalForward,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.ImageProcessingConfiguration property (not coded) BABYLON.PBRMaterial.imageProcessingConfiguration.
        // BABYLON.PBRMaterial.indexOfRefraction of type 'number':
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.invertRefractionY of type 'boolean':
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.lightmapTexture.
        // BABYLON.PBRMaterial.linkRefractionWithTransparency of type 'boolean':
        if (oldProps.linkRefractionWithTransparency !== newProps.linkRefractionWithTransparency) {
            updates.push({
                propertyName: 'linkRefractionWithTransparency',
                value: newProps.linkRefractionWithTransparency,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.metallic of type 'number':
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.metallicTexture.
        // BABYLON.PBRMaterial.microSurface of type 'number':
        if (oldProps.microSurface !== newProps.microSurface) {
            updates.push({
                propertyName: 'microSurface',
                value: newProps.microSurface,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.microSurfaceTexture.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.opacityTexture.
        // BABYLON.PBRMaterial.parallaxScaleBias of type 'number':
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.reflectionColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.reflectionColor && (!oldProps.reflectionColor || !oldProps.reflectionColor.equals(newProps.reflectionColor))) {
            updates.push({
                propertyName: 'reflectionColor',
                value: newProps.reflectionColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.reflectionTexture.
        // BABYLON.PBRMaterial.reflectivityColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.reflectivityColor && (!oldProps.reflectivityColor || !oldProps.reflectivityColor.equals(newProps.reflectivityColor))) {
            updates.push({
                propertyName: 'reflectivityColor',
                value: newProps.reflectivityColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.reflectivityTexture.
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.refractionTexture.
        // BABYLON.PBRMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.specularIntensity of type 'number':
        if (oldProps.specularIntensity !== newProps.specularIntensity) {
            updates.push({
                propertyName: 'specularIntensity',
                value: newProps.specularIntensity,
                type: 'number'
            });
        }
        // BABYLON.PBRMaterial.twoSidedLighting of type 'boolean':
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.unlit of type 'boolean':
        if (oldProps.unlit !== newProps.unlit) {
            updates.push({
                propertyName: 'unlit',
                value: newProps.unlit,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useAlphaFresnel of type 'boolean':
        if (oldProps.useAlphaFresnel !== newProps.useAlphaFresnel) {
            updates.push({
                propertyName: 'useAlphaFresnel',
                value: newProps.useAlphaFresnel,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useAlphaFromAlbedoTexture of type 'boolean':
        if (oldProps.useAlphaFromAlbedoTexture !== newProps.useAlphaFromAlbedoTexture) {
            updates.push({
                propertyName: 'useAlphaFromAlbedoTexture',
                value: newProps.useAlphaFromAlbedoTexture,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useAmbientInGrayScale of type 'boolean':
        if (oldProps.useAmbientInGrayScale !== newProps.useAmbientInGrayScale) {
            updates.push({
                propertyName: 'useAmbientInGrayScale',
                value: newProps.useAmbientInGrayScale,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useAmbientOcclusionFromMetallicTextureRed of type 'boolean':
        if (oldProps.useAmbientOcclusionFromMetallicTextureRed !== newProps.useAmbientOcclusionFromMetallicTextureRed) {
            updates.push({
                propertyName: 'useAmbientOcclusionFromMetallicTextureRed',
                value: newProps.useAmbientOcclusionFromMetallicTextureRed,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useAutoMicroSurfaceFromReflectivityMap of type 'boolean':
        if (oldProps.useAutoMicroSurfaceFromReflectivityMap !== newProps.useAutoMicroSurfaceFromReflectivityMap) {
            updates.push({
                propertyName: 'useAutoMicroSurfaceFromReflectivityMap',
                value: newProps.useAutoMicroSurfaceFromReflectivityMap,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useGLTFLightFalloff of type 'boolean':
        if (oldProps.useGLTFLightFalloff !== newProps.useGLTFLightFalloff) {
            updates.push({
                propertyName: 'useGLTFLightFalloff',
                value: newProps.useGLTFLightFalloff,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useHorizonOcclusion of type 'boolean':
        if (oldProps.useHorizonOcclusion !== newProps.useHorizonOcclusion) {
            updates.push({
                propertyName: 'useHorizonOcclusion',
                value: newProps.useHorizonOcclusion,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useLinearAlphaFresnel of type 'boolean':
        if (oldProps.useLinearAlphaFresnel !== newProps.useLinearAlphaFresnel) {
            updates.push({
                propertyName: 'useLinearAlphaFresnel',
                value: newProps.useLinearAlphaFresnel,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useMetallnessFromMetallicTextureBlue of type 'boolean':
        if (oldProps.useMetallnessFromMetallicTextureBlue !== newProps.useMetallnessFromMetallicTextureBlue) {
            updates.push({
                propertyName: 'useMetallnessFromMetallicTextureBlue',
                value: newProps.useMetallnessFromMetallicTextureBlue,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useMicroSurfaceFromReflectivityMapAlpha of type 'boolean':
        if (oldProps.useMicroSurfaceFromReflectivityMapAlpha !== newProps.useMicroSurfaceFromReflectivityMapAlpha) {
            updates.push({
                propertyName: 'useMicroSurfaceFromReflectivityMapAlpha',
                value: newProps.useMicroSurfaceFromReflectivityMapAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useObjectSpaceNormalMap of type 'boolean':
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useParallax of type 'boolean':
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useParallaxOcclusion of type 'boolean':
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.usePhysicalLightFalloff of type 'boolean':
        if (oldProps.usePhysicalLightFalloff !== newProps.usePhysicalLightFalloff) {
            updates.push({
                propertyName: 'usePhysicalLightFalloff',
                value: newProps.usePhysicalLightFalloff,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useRadianceOcclusion of type 'boolean':
        if (oldProps.useRadianceOcclusion !== newProps.useRadianceOcclusion) {
            updates.push({
                propertyName: 'useRadianceOcclusion',
                value: newProps.useRadianceOcclusion,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useRadianceOverAlpha of type 'boolean':
        if (oldProps.useRadianceOverAlpha !== newProps.useRadianceOverAlpha) {
            updates.push({
                propertyName: 'useRadianceOverAlpha',
                value: newProps.useRadianceOverAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useRoughnessFromMetallicTextureAlpha of type 'boolean':
        if (oldProps.useRoughnessFromMetallicTextureAlpha !== newProps.useRoughnessFromMetallicTextureAlpha) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureAlpha',
                value: newProps.useRoughnessFromMetallicTextureAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useRoughnessFromMetallicTextureGreen of type 'boolean':
        if (oldProps.useRoughnessFromMetallicTextureGreen !== newProps.useRoughnessFromMetallicTextureGreen) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureGreen',
                value: newProps.useRoughnessFromMetallicTextureGreen,
                type: 'boolean'
            });
        }
        // BABYLON.PBRMaterial.useSpecularOverAlpha of type 'boolean':
        if (oldProps.useSpecularOverAlpha !== newProps.useSpecularOverAlpha) {
            updates.push({
                propertyName: 'useSpecularOverAlpha',
                value: newProps.useSpecularOverAlpha,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The Physically based material of BJS.
 * 
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * http://doc.babylonjs.com/extensions/Physically_Based_Rendering
 * 
 * This code has been generated
 */
export class FiberPBRMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPBRMaterial",
        "isMaterial": true
    };
}

export class FiberShaderMaterialProps extends FiberMaterialProps {
}

export class FiberShaderMaterialPropsHandler implements PropsHandler<BABYLON.ShaderMaterial, FiberShaderMaterialProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ShaderMaterial>, oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ShaderMaterial = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 * 
 * This returned material effects how the mesh will look based on the code in the shaders.
 * 
 * This code has been generated
 */
export class FiberShaderMaterial implements HasPropsHandlers<BABYLON.Material, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BABYLON.Material, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShaderMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Material, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Material, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShaderMaterial",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "shaderPath",
                "type": "any",
                "optional": false
            },
            {
                "name": "options",
                "type": "Partial<BABYLON.IShaderMaterialOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberShaderMaterial",
        "isMaterial": true
    };
}

export class FiberLightProps extends FiberNodeProps {
    diffuse?: BABYLON.Color3;
    excludedMeshes?: BABYLON.AbstractMesh[];
    excludeWithLayerMask?: number;
    falloffType?: number;
    includedOnlyMeshes?: BABYLON.AbstractMesh[];
    includeOnlyWithLayerMask?: number;
    intensity?: number;
    intensityMode?: number;
    lightmapMode?: number;
    radius?: number;
    range?: number;
    renderPriority?: number;
    shadowEnabled?: boolean;
    specular?: BABYLON.Color3;
}

export class FiberLightPropsHandler implements PropsHandler<BABYLON.Light, FiberLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Light>, oldProps: FiberLightProps, newProps: FiberLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Light = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.Light.diffuse of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.diffuse && (!oldProps.diffuse || !oldProps.diffuse.equals(newProps.diffuse))) {
            updates.push({
                propertyName: 'diffuse',
                value: newProps.diffuse,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.AbstractMesh[] property (not coded) BABYLON.Light.excludedMeshes.
        // BABYLON.Light.excludeWithLayerMask of type 'number':
        if (oldProps.excludeWithLayerMask !== newProps.excludeWithLayerMask) {
            updates.push({
                propertyName: 'excludeWithLayerMask',
                value: newProps.excludeWithLayerMask,
                type: 'number'
            });
        }
        // BABYLON.Light.falloffType of type 'number':
        if (oldProps.falloffType !== newProps.falloffType) {
            updates.push({
                propertyName: 'falloffType',
                value: newProps.falloffType,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.AbstractMesh[] property (not coded) BABYLON.Light.includedOnlyMeshes.
        // BABYLON.Light.includeOnlyWithLayerMask of type 'number':
        if (oldProps.includeOnlyWithLayerMask !== newProps.includeOnlyWithLayerMask) {
            updates.push({
                propertyName: 'includeOnlyWithLayerMask',
                value: newProps.includeOnlyWithLayerMask,
                type: 'number'
            });
        }
        // BABYLON.Light.intensity of type 'number':
        if (oldProps.intensity !== newProps.intensity) {
            updates.push({
                propertyName: 'intensity',
                value: newProps.intensity,
                type: 'number'
            });
        }
        // BABYLON.Light.intensityMode of type 'number':
        if (oldProps.intensityMode !== newProps.intensityMode) {
            updates.push({
                propertyName: 'intensityMode',
                value: newProps.intensityMode,
                type: 'number'
            });
        }
        // BABYLON.Light.lightmapMode of type 'number':
        if (oldProps.lightmapMode !== newProps.lightmapMode) {
            updates.push({
                propertyName: 'lightmapMode',
                value: newProps.lightmapMode,
                type: 'number'
            });
        }
        // BABYLON.Light.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BABYLON.Light.range of type 'number':
        if (oldProps.range !== newProps.range) {
            updates.push({
                propertyName: 'range',
                value: newProps.range,
                type: 'number'
            });
        }
        // BABYLON.Light.renderPriority of type 'number':
        if (oldProps.renderPriority !== newProps.renderPriority) {
            updates.push({
                propertyName: 'renderPriority',
                value: newProps.renderPriority,
                type: 'number'
            });
        }
        // BABYLON.Light.shadowEnabled of type 'boolean':
        if (oldProps.shadowEnabled !== newProps.shadowEnabled) {
            updates.push({
                propertyName: 'shadowEnabled',
                value: newProps.shadowEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Light.specular of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.specular && (!oldProps.specular || !oldProps.specular.equals(newProps.specular))) {
            updates.push({
                propertyName: 'specular',
                value: newProps.specular,
                type: 'BABYLON.Color3'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 * 
 * This code has been generated
 */
export class FiberLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Light",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLight"
    };
}

export class FiberHemisphericLightProps extends FiberLightProps {
    direction?: BABYLON.Vector3;
    groundColor?: BABYLON.Color3;
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<BABYLON.HemisphericLight, FiberHemisphericLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.HemisphericLight>, oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.HemisphericLight = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.HemisphericLight.direction of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.HemisphericLight.groundColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.groundColor && (!oldProps.groundColor || !oldProps.groundColor.equals(newProps.groundColor))) {
            updates.push({
                propertyName: 'groundColor',
                value: newProps.groundColor,
                type: 'BABYLON.Color3'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 * 
 * This code has been generated
 */
export class FiberHemisphericLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHemisphericLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HemisphericLight",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberHemisphericLight"
    };
}

export class FiberShadowLightProps extends FiberLightProps {
    customProjectionMatrixBuilder?: (viewMatrix: BABYLON.Matrix, renderList: BABYLON.AbstractMesh[], result: BABYLON.Matrix) => void;
    direction?: BABYLON.Vector3;
    position?: BABYLON.Vector3;
    shadowMaxZ?: number;
    shadowMinZ?: number;
    transformedDirection?: BABYLON.Vector3;
    transformedPosition?: BABYLON.Vector3;
}

export class FiberShadowLightPropsHandler implements PropsHandler<BABYLON.ShadowLight, FiberShadowLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ShadowLight>, oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ShadowLight = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: (viewMatrix: BABYLON.Matrix, renderList: BABYLON.AbstractMesh[], result: BABYLON.Matrix) => void property (not coded) BABYLON.ShadowLight.customProjectionMatrixBuilder.
        // BABYLON.ShadowLight.direction of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.position of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.shadowMaxZ of type 'number':
        if (oldProps.shadowMaxZ !== newProps.shadowMaxZ) {
            updates.push({
                propertyName: 'shadowMaxZ',
                value: newProps.shadowMaxZ,
                type: 'number'
            });
        }
        // BABYLON.ShadowLight.shadowMinZ of type 'number':
        if (oldProps.shadowMinZ !== newProps.shadowMinZ) {
            updates.push({
                propertyName: 'shadowMinZ',
                value: newProps.shadowMinZ,
                type: 'number'
            });
        }
        // BABYLON.ShadowLight.transformedDirection of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.transformedDirection && (!oldProps.transformedDirection || !oldProps.transformedDirection.equals(newProps.transformedDirection))) {
            updates.push({
                propertyName: 'transformedDirection',
                value: newProps.transformedDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.transformedPosition of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.transformedPosition && (!oldProps.transformedPosition || !oldProps.transformedPosition.equals(newProps.transformedPosition))) {
            updates.push({
                propertyName: 'transformedPosition',
                value: newProps.transformedPosition,
                type: 'BABYLON.Vector3'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 * 
 * This code has been generated
 */
export class FiberShadowLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowLight",
        "namespace": "BABYLON",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberShadowLight"
    };
}

export class FiberDirectionalLightProps extends FiberShadowLightProps {
    autoUpdateExtends?: boolean;
    shadowFrustumSize?: number;
    shadowOrthoScale?: number;
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<BABYLON.DirectionalLight, FiberDirectionalLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.DirectionalLight>, oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.DirectionalLight = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.DirectionalLight.autoUpdateExtends of type 'boolean':
        if (oldProps.autoUpdateExtends !== newProps.autoUpdateExtends) {
            updates.push({
                propertyName: 'autoUpdateExtends',
                value: newProps.autoUpdateExtends,
                type: 'boolean'
            });
        }
        // BABYLON.DirectionalLight.shadowFrustumSize of type 'number':
        if (oldProps.shadowFrustumSize !== newProps.shadowFrustumSize) {
            updates.push({
                propertyName: 'shadowFrustumSize',
                value: newProps.shadowFrustumSize,
                type: 'number'
            });
        }
        // BABYLON.DirectionalLight.shadowOrthoScale of type 'number':
        if (oldProps.shadowOrthoScale !== newProps.shadowOrthoScale) {
            updates.push({
                propertyName: 'shadowOrthoScale',
                value: newProps.shadowOrthoScale,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A directional light is defined by a direction (what a surprise!).
 * The light is emitted from everywhere in the specified direction, and has an infinite range.
 * An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 * 
 * This code has been generated
 */
export class FiberDirectionalLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDirectionalLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DirectionalLight",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDirectionalLight"
    };
}

export class FiberPointLightProps extends FiberShadowLightProps {
    direction?: BABYLON.Vector3;
    shadowAngle?: number;
}

export class FiberPointLightPropsHandler implements PropsHandler<BABYLON.PointLight, FiberPointLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.PointLight>, oldProps: FiberPointLightProps, newProps: FiberPointLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.PointLight = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.PointLight.direction of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.PointLight.shadowAngle of type 'number':
        if (oldProps.shadowAngle !== newProps.shadowAngle) {
            updates.push({
                propertyName: 'shadowAngle',
                value: newProps.shadowAngle,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A point light is a light defined by an unique point in world space.
 * The light is emitted in every direction from this point.
 * A good example of a point light is a standard light bulb.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 * 
 * This code has been generated
 */
export class FiberPointLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointLight",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPointLight"
    };
}

export class FiberSpotLightProps extends FiberShadowLightProps {
    angle?: number;
    exponent?: number;
    innerAngle?: number;
    projectionTexture?: BABYLON.BaseTexture;
    projectionTextureLightFar?: number;
    projectionTextureLightNear?: number;
    projectionTextureUpDirection?: BABYLON.Vector3;
    shadowAngleScale?: number;
}

export class FiberSpotLightPropsHandler implements PropsHandler<BABYLON.SpotLight, FiberSpotLightProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.SpotLight>, oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.SpotLight = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLON.SpotLight.angle of type 'number':
        if (oldProps.angle !== newProps.angle) {
            updates.push({
                propertyName: 'angle',
                value: newProps.angle,
                type: 'number'
            });
        }
        // BABYLON.SpotLight.exponent of type 'number':
        if (oldProps.exponent !== newProps.exponent) {
            updates.push({
                propertyName: 'exponent',
                value: newProps.exponent,
                type: 'number'
            });
        }
        // BABYLON.SpotLight.innerAngle of type 'number':
        if (oldProps.innerAngle !== newProps.innerAngle) {
            updates.push({
                propertyName: 'innerAngle',
                value: newProps.innerAngle,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.SpotLight.projectionTexture.
        // BABYLON.SpotLight.projectionTextureLightFar of type 'number':
        if (oldProps.projectionTextureLightFar !== newProps.projectionTextureLightFar) {
            updates.push({
                propertyName: 'projectionTextureLightFar',
                value: newProps.projectionTextureLightFar,
                type: 'number'
            });
        }
        // BABYLON.SpotLight.projectionTextureLightNear of type 'number':
        if (oldProps.projectionTextureLightNear !== newProps.projectionTextureLightNear) {
            updates.push({
                propertyName: 'projectionTextureLightNear',
                value: newProps.projectionTextureLightNear,
                type: 'number'
            });
        }
        // BABYLON.SpotLight.projectionTextureUpDirection of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.projectionTextureUpDirection && (!oldProps.projectionTextureUpDirection || !oldProps.projectionTextureUpDirection.equals(newProps.projectionTextureUpDirection))) {
            updates.push({
                propertyName: 'projectionTextureUpDirection',
                value: newProps.projectionTextureUpDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.SpotLight.shadowAngleScale of type 'number':
        if (oldProps.shadowAngleScale !== newProps.shadowAngleScale) {
            updates.push({
                propertyName: 'shadowAngleScale',
                value: newProps.shadowAngleScale,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A spot light is defined by a position, a direction, an angle, and an exponent.
 * These values define a cone of light starting from the position, emitting toward the direction.
 * The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
 * and the exponent defines the speed of the decay of the light with distance (reach).
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 * 
 * This code has been generated
 */
export class FiberSpotLight implements HasPropsHandlers<BABYLON.Light, FiberLightProps> {
    private propsHandlers: PropsHandler<BABYLON.Light, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpotLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Light, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Light, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpotLight",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BABYLON.Vector3",
                "optional": false
            },
            {
                "name": "angle",
                "type": "number",
                "optional": false
            },
            {
                "name": "exponent",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSpotLight"
    };
}

export class FiberControlProps {
    alpha?: number;
    color?: string;
    disabledColor?: string;
    fontFamily?: string;
    fontOffset?: { ascent: number; height: number; descent: number; };
    fontSize?: string | number;
    fontStyle?: string;
    fontWeight?: string;
    height?: string | number;
    horizontalAlignment?: number;
    hoverCursor?: string;
    isEnabled?: boolean;
    isFocusInvisible?: boolean;
    isHitTestVisible?: boolean;
    isPointerBlocker?: boolean;
    isVisible?: boolean;
    left?: string | number;
    linkOffsetX?: string | number;
    linkOffsetY?: string | number;
    name?: string;
    notRenderable?: boolean;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingTop?: string | number;
    parent?: BABYLON.GUI.Container;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    shadowBlur?: number;
    shadowColor?: string;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    style?: BABYLON.GUI.Style;
    top?: string | number;
    transformCenterX?: number;
    transformCenterY?: number;
    verticalAlignment?: number;
    width?: string | number;
    zIndex?: number;
}

export class FiberControlPropsHandler implements PropsHandler<GUI.Control, FiberControlProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Control>, oldProps: FiberControlProps, newProps: FiberControlProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Control = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Control.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // GUI.Control.color of type 'string':
        if (oldProps.color !== newProps.color) {
            updates.push({
                propertyName: 'color',
                value: newProps.color,
                type: 'string'
            });
        }
        // GUI.Control.disabledColor of type 'string':
        if (oldProps.disabledColor !== newProps.disabledColor) {
            updates.push({
                propertyName: 'disabledColor',
                value: newProps.disabledColor,
                type: 'string'
            });
        }
        // GUI.Control.fontFamily of type 'string':
        if (oldProps.fontFamily !== newProps.fontFamily) {
            updates.push({
                propertyName: 'fontFamily',
                value: newProps.fontFamily,
                type: 'string'
            });
        }
        // TODO: type: { ascent: number; height: number; descent: number; } property (not coded) GUI.Control.fontOffset.
        // TODO: type: string | number property (not coded) GUI.Control.fontSize.
        // GUI.Control.fontStyle of type 'string':
        if (oldProps.fontStyle !== newProps.fontStyle) {
            updates.push({
                propertyName: 'fontStyle',
                value: newProps.fontStyle,
                type: 'string'
            });
        }
        // GUI.Control.fontWeight of type 'string':
        if (oldProps.fontWeight !== newProps.fontWeight) {
            updates.push({
                propertyName: 'fontWeight',
                value: newProps.fontWeight,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Control.height.
        // GUI.Control.horizontalAlignment of type 'number':
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // GUI.Control.hoverCursor of type 'string':
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // GUI.Control.isEnabled of type 'boolean':
        if (oldProps.isEnabled !== newProps.isEnabled) {
            updates.push({
                propertyName: 'isEnabled',
                value: newProps.isEnabled,
                type: 'boolean'
            });
        }
        // GUI.Control.isFocusInvisible of type 'boolean':
        if (oldProps.isFocusInvisible !== newProps.isFocusInvisible) {
            updates.push({
                propertyName: 'isFocusInvisible',
                value: newProps.isFocusInvisible,
                type: 'boolean'
            });
        }
        // GUI.Control.isHitTestVisible of type 'boolean':
        if (oldProps.isHitTestVisible !== newProps.isHitTestVisible) {
            updates.push({
                propertyName: 'isHitTestVisible',
                value: newProps.isHitTestVisible,
                type: 'boolean'
            });
        }
        // GUI.Control.isPointerBlocker of type 'boolean':
        if (oldProps.isPointerBlocker !== newProps.isPointerBlocker) {
            updates.push({
                propertyName: 'isPointerBlocker',
                value: newProps.isPointerBlocker,
                type: 'boolean'
            });
        }
        // GUI.Control.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Control.left.
        // TODO: type: string | number property (not coded) GUI.Control.linkOffsetX.
        // TODO: type: string | number property (not coded) GUI.Control.linkOffsetY.
        // GUI.Control.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Control.notRenderable of type 'boolean':
        if (oldProps.notRenderable !== newProps.notRenderable) {
            updates.push({
                propertyName: 'notRenderable',
                value: newProps.notRenderable,
                type: 'boolean'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Control.paddingBottom.
        // TODO: type: string | number property (not coded) GUI.Control.paddingLeft.
        // TODO: type: string | number property (not coded) GUI.Control.paddingRight.
        // TODO: type: string | number property (not coded) GUI.Control.paddingTop.
        // TODO: type: BABYLON.GUI.Container property (not coded) GUI.Control.parent.
        // GUI.Control.rotation of type 'number':
        if (oldProps.rotation !== newProps.rotation) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'number'
            });
        }
        // GUI.Control.scaleX of type 'number':
        if (oldProps.scaleX !== newProps.scaleX) {
            updates.push({
                propertyName: 'scaleX',
                value: newProps.scaleX,
                type: 'number'
            });
        }
        // GUI.Control.scaleY of type 'number':
        if (oldProps.scaleY !== newProps.scaleY) {
            updates.push({
                propertyName: 'scaleY',
                value: newProps.scaleY,
                type: 'number'
            });
        }
        // GUI.Control.shadowBlur of type 'number':
        if (oldProps.shadowBlur !== newProps.shadowBlur) {
            updates.push({
                propertyName: 'shadowBlur',
                value: newProps.shadowBlur,
                type: 'number'
            });
        }
        // GUI.Control.shadowColor of type 'string':
        if (oldProps.shadowColor !== newProps.shadowColor) {
            updates.push({
                propertyName: 'shadowColor',
                value: newProps.shadowColor,
                type: 'string'
            });
        }
        // GUI.Control.shadowOffsetX of type 'number':
        if (oldProps.shadowOffsetX !== newProps.shadowOffsetX) {
            updates.push({
                propertyName: 'shadowOffsetX',
                value: newProps.shadowOffsetX,
                type: 'number'
            });
        }
        // GUI.Control.shadowOffsetY of type 'number':
        if (oldProps.shadowOffsetY !== newProps.shadowOffsetY) {
            updates.push({
                propertyName: 'shadowOffsetY',
                value: newProps.shadowOffsetY,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.GUI.Style property (not coded) GUI.Control.style.
        // TODO: type: string | number property (not coded) GUI.Control.top.
        // GUI.Control.transformCenterX of type 'number':
        if (oldProps.transformCenterX !== newProps.transformCenterX) {
            updates.push({
                propertyName: 'transformCenterX',
                value: newProps.transformCenterX,
                type: 'number'
            });
        }
        // GUI.Control.transformCenterY of type 'number':
        if (oldProps.transformCenterY !== newProps.transformCenterY) {
            updates.push({
                propertyName: 'transformCenterY',
                value: newProps.transformCenterY,
                type: 'number'
            });
        }
        // GUI.Control.verticalAlignment of type 'number':
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Control.width.
        // GUI.Control.zIndex of type 'number':
        if (oldProps.zIndex !== newProps.zIndex) {
            updates.push({
                propertyName: 'zIndex',
                value: newProps.zIndex,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Root class used for all 2D controls
 * 
 * This code has been generated
 */
export class FiberControl implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberControl"
    };
}

export class FiberCheckboxProps extends FiberControlProps {
    background?: string;
    checkSizeRatio?: number;
    isChecked?: boolean;
    name?: string;
    thickness?: number;
}

export class FiberCheckboxPropsHandler implements PropsHandler<GUI.Checkbox, FiberCheckboxProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Checkbox>, oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Checkbox = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Checkbox.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.Checkbox.checkSizeRatio of type 'number':
        if (oldProps.checkSizeRatio !== newProps.checkSizeRatio) {
            updates.push({
                propertyName: 'checkSizeRatio',
                value: newProps.checkSizeRatio,
                type: 'number'
            });
        }
        // GUI.Checkbox.isChecked of type 'boolean':
        if (oldProps.isChecked !== newProps.isChecked) {
            updates.push({
                propertyName: 'isChecked',
                value: newProps.isChecked,
                type: 'boolean'
            });
        }
        // GUI.Checkbox.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Checkbox.thickness of type 'number':
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to represent a 2D checkbox
 * 
 * This code has been generated
 */
export class FiberCheckbox implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCheckboxPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Checkbox",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberCheckbox"
    };
}

export class FiberColorPickerProps extends FiberControlProps {
    height?: string | number;
    name?: string;
    size?: string | number;
    value?: BABYLON.Color3;
    width?: string | number;
}

export class FiberColorPickerPropsHandler implements PropsHandler<GUI.ColorPicker, FiberColorPickerProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.ColorPicker>, oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.ColorPicker = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: string | number property (not coded) GUI.ColorPicker.height.
        // GUI.ColorPicker.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.ColorPicker.size.
        // TODO: type: BABYLON.Color3 property (not coded) GUI.ColorPicker.value.
        // TODO: type: string | number property (not coded) GUI.ColorPicker.width.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create color pickers
 * 
 * This code has been generated
 */
export class FiberColorPicker implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorPickerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorPicker",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberColorPicker"
    };
}

export class FiberContainerProps extends FiberControlProps {
    adaptHeightToChildren?: boolean;
    adaptWidthToChildren?: boolean;
    background?: string;
    name?: string;
}

export class FiberContainerPropsHandler implements PropsHandler<GUI.Container, FiberContainerProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Container>, oldProps: FiberContainerProps, newProps: FiberContainerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Container = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Container.adaptHeightToChildren of type 'boolean':
        if (oldProps.adaptHeightToChildren !== newProps.adaptHeightToChildren) {
            updates.push({
                propertyName: 'adaptHeightToChildren',
                value: newProps.adaptHeightToChildren,
                type: 'boolean'
            });
        }
        // GUI.Container.adaptWidthToChildren of type 'boolean':
        if (oldProps.adaptWidthToChildren !== newProps.adaptWidthToChildren) {
            updates.push({
                propertyName: 'adaptWidthToChildren',
                value: newProps.adaptWidthToChildren,
                type: 'boolean'
            });
        }
        // GUI.Container.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.Container.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Root class for 2D containers
 * 
 * This code has been generated
 */
export class FiberContainer implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberContainer"
    };
}

export class FiberEllipseProps extends FiberContainerProps {
    name?: string;
    thickness?: number;
}

export class FiberEllipsePropsHandler implements PropsHandler<GUI.Ellipse, FiberEllipseProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Ellipse>, oldProps: FiberEllipseProps, newProps: FiberEllipseProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Ellipse = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Ellipse.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Ellipse.thickness of type 'number':
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create 2D ellipse containers
 * 
 * This code has been generated
 */
export class FiberEllipse implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEllipsePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Ellipse",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberEllipse"
    };
}

export class FiberGridProps extends FiberContainerProps {
    name?: string;
}

export class FiberGridPropsHandler implements PropsHandler<GUI.Grid, FiberGridProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Grid>, oldProps: FiberGridProps, newProps: FiberGridProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Grid = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Grid.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D grid container
 * 
 * This code has been generated
 */
export class FiberGrid implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGridPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Grid",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberGrid"
    };
}

export class FiberStackPanelProps extends FiberContainerProps {
    height?: string | number;
    isVertical?: boolean;
    name?: string;
    width?: string | number;
}

export class FiberStackPanelPropsHandler implements PropsHandler<GUI.StackPanel, FiberStackPanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.StackPanel>, oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.StackPanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: string | number property (not coded) GUI.StackPanel.height.
        // GUI.StackPanel.isVertical of type 'boolean':
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // GUI.StackPanel.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.StackPanel.width.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D stack panel container
 * 
 * This code has been generated
 */
export class FiberStackPanel implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStackPanel"
    };
}

export class FiberVirtualKeyboardProps extends FiberStackPanelProps {
    defaultButtonBackground?: string;
    defaultButtonColor?: string;
    defaultButtonHeight?: string;
    defaultButtonPaddingBottom?: string;
    defaultButtonPaddingLeft?: string;
    defaultButtonPaddingRight?: string;
    defaultButtonPaddingTop?: string;
    defaultButtonWidth?: string;
    selectedShiftThickness?: number;
    shiftButtonColor?: string;
    shiftState?: number;
}

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<GUI.VirtualKeyboard, FiberVirtualKeyboardProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.VirtualKeyboard>, oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.VirtualKeyboard = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.VirtualKeyboard.defaultButtonBackground of type 'string':
        if (oldProps.defaultButtonBackground !== newProps.defaultButtonBackground) {
            updates.push({
                propertyName: 'defaultButtonBackground',
                value: newProps.defaultButtonBackground,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonColor of type 'string':
        if (oldProps.defaultButtonColor !== newProps.defaultButtonColor) {
            updates.push({
                propertyName: 'defaultButtonColor',
                value: newProps.defaultButtonColor,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonHeight of type 'string':
        if (oldProps.defaultButtonHeight !== newProps.defaultButtonHeight) {
            updates.push({
                propertyName: 'defaultButtonHeight',
                value: newProps.defaultButtonHeight,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonPaddingBottom of type 'string':
        if (oldProps.defaultButtonPaddingBottom !== newProps.defaultButtonPaddingBottom) {
            updates.push({
                propertyName: 'defaultButtonPaddingBottom',
                value: newProps.defaultButtonPaddingBottom,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonPaddingLeft of type 'string':
        if (oldProps.defaultButtonPaddingLeft !== newProps.defaultButtonPaddingLeft) {
            updates.push({
                propertyName: 'defaultButtonPaddingLeft',
                value: newProps.defaultButtonPaddingLeft,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonPaddingRight of type 'string':
        if (oldProps.defaultButtonPaddingRight !== newProps.defaultButtonPaddingRight) {
            updates.push({
                propertyName: 'defaultButtonPaddingRight',
                value: newProps.defaultButtonPaddingRight,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonPaddingTop of type 'string':
        if (oldProps.defaultButtonPaddingTop !== newProps.defaultButtonPaddingTop) {
            updates.push({
                propertyName: 'defaultButtonPaddingTop',
                value: newProps.defaultButtonPaddingTop,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.defaultButtonWidth of type 'string':
        if (oldProps.defaultButtonWidth !== newProps.defaultButtonWidth) {
            updates.push({
                propertyName: 'defaultButtonWidth',
                value: newProps.defaultButtonWidth,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.selectedShiftThickness of type 'number':
        if (oldProps.selectedShiftThickness !== newProps.selectedShiftThickness) {
            updates.push({
                propertyName: 'selectedShiftThickness',
                value: newProps.selectedShiftThickness,
                type: 'number'
            });
        }
        // GUI.VirtualKeyboard.shiftButtonColor of type 'string':
        if (oldProps.shiftButtonColor !== newProps.shiftButtonColor) {
            updates.push({
                propertyName: 'shiftButtonColor',
                value: newProps.shiftButtonColor,
                type: 'string'
            });
        }
        // GUI.VirtualKeyboard.shiftState of type 'number':
        if (oldProps.shiftState !== newProps.shiftState) {
            updates.push({
                propertyName: 'shiftState',
                value: newProps.shiftState,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create virtual keyboard
 * 
 * This code has been generated
 */
export class FiberVirtualKeyboard implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualKeyboardPropsHandler(),
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualKeyboard",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVirtualKeyboard"
    };
}

export class FiberRectangleProps extends FiberContainerProps {
    cornerRadius?: number;
    name?: string;
    thickness?: number;
}

export class FiberRectanglePropsHandler implements PropsHandler<GUI.Rectangle, FiberRectangleProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Rectangle>, oldProps: FiberRectangleProps, newProps: FiberRectangleProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Rectangle = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Rectangle.cornerRadius of type 'number':
        if (oldProps.cornerRadius !== newProps.cornerRadius) {
            updates.push({
                propertyName: 'cornerRadius',
                value: newProps.cornerRadius,
                type: 'number'
            });
        }
        // GUI.Rectangle.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Rectangle.thickness of type 'number':
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create rectangle container
 * 
 * This code has been generated
 */
export class FiberRectangle implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Rectangle",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberRectangle"
    };
}

export class FiberButtonProps extends FiberRectangleProps {
    name?: string;
    pointerDownAnimation?: () => void;
    pointerEnterAnimation?: () => void;
    pointerOutAnimation?: () => void;
    pointerUpAnimation?: () => void;
}

export class FiberButtonPropsHandler implements PropsHandler<GUI.Button, FiberButtonProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Button>, oldProps: FiberButtonProps, newProps: FiberButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Button = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Button.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: () => void property (not coded) GUI.Button.pointerDownAnimation.
        // TODO: type: () => void property (not coded) GUI.Button.pointerEnterAnimation.
        // TODO: type: () => void property (not coded) GUI.Button.pointerOutAnimation.
        // TODO: type: () => void property (not coded) GUI.Button.pointerUpAnimation.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create 2D buttons
 * 
 * This code has been generated
 */
export class FiberButton implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButtonPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberButton"
    };
}

export class FiberSelectionPanelProps extends FiberRectangleProps {
    barColor?: string;
    barHeight?: string;
    buttonBackground?: string;
    buttonColor?: string;
    groups?: BABYLON.GUI.SelectorGroup[];
    headerColor?: string;
    labelColor?: string;
    name?: string;
    spacerHeight?: string;
}

export class FiberSelectionPanelPropsHandler implements PropsHandler<GUI.SelectionPanel, FiberSelectionPanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.SelectionPanel>, oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.SelectionPanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.SelectionPanel.barColor of type 'string':
        if (oldProps.barColor !== newProps.barColor) {
            updates.push({
                propertyName: 'barColor',
                value: newProps.barColor,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.barHeight of type 'string':
        if (oldProps.barHeight !== newProps.barHeight) {
            updates.push({
                propertyName: 'barHeight',
                value: newProps.barHeight,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.buttonBackground of type 'string':
        if (oldProps.buttonBackground !== newProps.buttonBackground) {
            updates.push({
                propertyName: 'buttonBackground',
                value: newProps.buttonBackground,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.buttonColor of type 'string':
        if (oldProps.buttonColor !== newProps.buttonColor) {
            updates.push({
                propertyName: 'buttonColor',
                value: newProps.buttonColor,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.GUI.SelectorGroup[] property (not coded) GUI.SelectionPanel.groups.
        // GUI.SelectionPanel.headerColor of type 'string':
        if (oldProps.headerColor !== newProps.headerColor) {
            updates.push({
                propertyName: 'headerColor',
                value: newProps.headerColor,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.labelColor of type 'string':
        if (oldProps.labelColor !== newProps.labelColor) {
            updates.push({
                propertyName: 'labelColor',
                value: newProps.labelColor,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.SelectionPanel.spacerHeight of type 'string':
        if (oldProps.spacerHeight !== newProps.spacerHeight) {
            updates.push({
                propertyName: 'spacerHeight',
                value: newProps.spacerHeight,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 * 
 * This code has been generated
 */
export class FiberSelectionPanel implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSelectionPanelPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SelectionPanel",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "groups",
                "type": "BABYLON.GUI.SelectorGroup[]",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSelectionPanel"
    };
}

export class FiberImageProps extends FiberControlProps {
    autoScale?: boolean;
    cellHeight?: number;
    cellId?: number;
    cellWidth?: number;
    domImage?: HTMLImageElement;
    name?: string;
    source?: string;
    sourceHeight?: number;
    sourceLeft?: number;
    sourceTop?: number;
    sourceWidth?: number;
    stretch?: number;
}

export class FiberImagePropsHandler implements PropsHandler<GUI.Image, FiberImageProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Image>, oldProps: FiberImageProps, newProps: FiberImageProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Image = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Image.autoScale of type 'boolean':
        if (oldProps.autoScale !== newProps.autoScale) {
            updates.push({
                propertyName: 'autoScale',
                value: newProps.autoScale,
                type: 'boolean'
            });
        }
        // GUI.Image.cellHeight of type 'number':
        if (oldProps.cellHeight !== newProps.cellHeight) {
            updates.push({
                propertyName: 'cellHeight',
                value: newProps.cellHeight,
                type: 'number'
            });
        }
        // GUI.Image.cellId of type 'number':
        if (oldProps.cellId !== newProps.cellId) {
            updates.push({
                propertyName: 'cellId',
                value: newProps.cellId,
                type: 'number'
            });
        }
        // GUI.Image.cellWidth of type 'number':
        if (oldProps.cellWidth !== newProps.cellWidth) {
            updates.push({
                propertyName: 'cellWidth',
                value: newProps.cellWidth,
                type: 'number'
            });
        }
        // TODO: type: HTMLImageElement property (not coded) GUI.Image.domImage.
        // GUI.Image.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Image.source of type 'string':
        if (oldProps.source !== newProps.source) {
            updates.push({
                propertyName: 'source',
                value: newProps.source,
                type: 'string'
            });
        }
        // GUI.Image.sourceHeight of type 'number':
        if (oldProps.sourceHeight !== newProps.sourceHeight) {
            updates.push({
                propertyName: 'sourceHeight',
                value: newProps.sourceHeight,
                type: 'number'
            });
        }
        // GUI.Image.sourceLeft of type 'number':
        if (oldProps.sourceLeft !== newProps.sourceLeft) {
            updates.push({
                propertyName: 'sourceLeft',
                value: newProps.sourceLeft,
                type: 'number'
            });
        }
        // GUI.Image.sourceTop of type 'number':
        if (oldProps.sourceTop !== newProps.sourceTop) {
            updates.push({
                propertyName: 'sourceTop',
                value: newProps.sourceTop,
                type: 'number'
            });
        }
        // GUI.Image.sourceWidth of type 'number':
        if (oldProps.sourceWidth !== newProps.sourceWidth) {
            updates.push({
                propertyName: 'sourceWidth',
                value: newProps.sourceWidth,
                type: 'number'
            });
        }
        // GUI.Image.stretch of type 'number':
        if (oldProps.stretch !== newProps.stretch) {
            updates.push({
                propertyName: 'stretch',
                value: newProps.stretch,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create 2D images
 * 
 * This code has been generated
 */
export class FiberImage implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImagePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Image",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "url",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberImage"
    };
}

export class FiberInputTextProps extends FiberControlProps {
    addKey?: boolean;
    autoStretchWidth?: boolean;
    background?: string;
    currentKey?: string;
    deadKey?: boolean;
    focusedBackground?: string;
    margin?: string;
    maxWidth?: string | number;
    name?: string;
    placeholderColor?: string;
    placeholderText?: string;
    promptMessage?: string;
    text?: string;
    thickness?: number;
    width?: string | number;
}

export class FiberInputTextPropsHandler implements PropsHandler<GUI.InputText, FiberInputTextProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.InputText>, oldProps: FiberInputTextProps, newProps: FiberInputTextProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.InputText = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.InputText.addKey of type 'boolean':
        if (oldProps.addKey !== newProps.addKey) {
            updates.push({
                propertyName: 'addKey',
                value: newProps.addKey,
                type: 'boolean'
            });
        }
        // GUI.InputText.autoStretchWidth of type 'boolean':
        if (oldProps.autoStretchWidth !== newProps.autoStretchWidth) {
            updates.push({
                propertyName: 'autoStretchWidth',
                value: newProps.autoStretchWidth,
                type: 'boolean'
            });
        }
        // GUI.InputText.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.InputText.currentKey of type 'string':
        if (oldProps.currentKey !== newProps.currentKey) {
            updates.push({
                propertyName: 'currentKey',
                value: newProps.currentKey,
                type: 'string'
            });
        }
        // GUI.InputText.deadKey of type 'boolean':
        if (oldProps.deadKey !== newProps.deadKey) {
            updates.push({
                propertyName: 'deadKey',
                value: newProps.deadKey,
                type: 'boolean'
            });
        }
        // GUI.InputText.focusedBackground of type 'string':
        if (oldProps.focusedBackground !== newProps.focusedBackground) {
            updates.push({
                propertyName: 'focusedBackground',
                value: newProps.focusedBackground,
                type: 'string'
            });
        }
        // GUI.InputText.margin of type 'string':
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.InputText.maxWidth.
        // GUI.InputText.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.InputText.placeholderColor of type 'string':
        if (oldProps.placeholderColor !== newProps.placeholderColor) {
            updates.push({
                propertyName: 'placeholderColor',
                value: newProps.placeholderColor,
                type: 'string'
            });
        }
        // GUI.InputText.placeholderText of type 'string':
        if (oldProps.placeholderText !== newProps.placeholderText) {
            updates.push({
                propertyName: 'placeholderText',
                value: newProps.placeholderText,
                type: 'string'
            });
        }
        // GUI.InputText.promptMessage of type 'string':
        if (oldProps.promptMessage !== newProps.promptMessage) {
            updates.push({
                propertyName: 'promptMessage',
                value: newProps.promptMessage,
                type: 'string'
            });
        }
        // GUI.InputText.text of type 'string':
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // GUI.InputText.thickness of type 'number':
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        // TODO: type: string | number property (not coded) GUI.InputText.width.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create input text control
 * 
 * This code has been generated
 */
export class FiberInputText implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputText",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "text",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberInputText"
    };
}

export class FiberInputPasswordProps extends FiberInputTextProps {
}

export class FiberInputPasswordPropsHandler implements PropsHandler<GUI.InputPassword, FiberInputPasswordProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.InputPassword>, oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.InputPassword = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a password control
 * 
 * This code has been generated
 */
export class FiberInputPassword implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputPasswordPropsHandler(),
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputPassword",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberInputPassword"
    };
}

export class FiberLineProps extends FiberControlProps {
    connectedControl?: BABYLON.GUI.Control;
    dash?: number[];
    horizontalAlignment?: number;
    lineWidth?: number;
    name?: string;
    verticalAlignment?: number;
    x1?: string | number;
    x2?: string | number;
    y1?: string | number;
    y2?: string | number;
}

export class FiberLinePropsHandler implements PropsHandler<GUI.Line, FiberLineProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Line>, oldProps: FiberLineProps, newProps: FiberLineProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Line = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.GUI.Control property (not coded) GUI.Line.connectedControl.
        // TODO: type: number[] property (not coded) GUI.Line.dash.
        // GUI.Line.horizontalAlignment of type 'number':
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // GUI.Line.lineWidth of type 'number':
        if (oldProps.lineWidth !== newProps.lineWidth) {
            updates.push({
                propertyName: 'lineWidth',
                value: newProps.lineWidth,
                type: 'number'
            });
        }
        // GUI.Line.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Line.verticalAlignment of type 'number':
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Line.x1.
        // TODO: type: string | number property (not coded) GUI.Line.x2.
        // TODO: type: string | number property (not coded) GUI.Line.y1.
        // TODO: type: string | number property (not coded) GUI.Line.y2.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to render 2D lines
 * 
 * This code has been generated
 */
export class FiberLine implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Line",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLine"
    };
}

export class FiberMultiLineProps extends FiberControlProps {
    dash?: number[];
    horizontalAlignment?: number;
    lineWidth?: number;
    name?: string;
    verticalAlignment?: number;
}

export class FiberMultiLinePropsHandler implements PropsHandler<GUI.MultiLine, FiberMultiLineProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.MultiLine>, oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.MultiLine = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: number[] property (not coded) GUI.MultiLine.dash.
        // GUI.MultiLine.horizontalAlignment of type 'number':
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // GUI.MultiLine.lineWidth of type 'number':
        if (oldProps.lineWidth !== newProps.lineWidth) {
            updates.push({
                propertyName: 'lineWidth',
                value: newProps.lineWidth,
                type: 'number'
            });
        }
        // GUI.MultiLine.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.MultiLine.verticalAlignment of type 'number':
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create multi line control
 * 
 * This code has been generated
 */
export class FiberMultiLine implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiLine",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberMultiLine"
    };
}

export class FiberRadioButtonProps extends FiberControlProps {
    background?: string;
    checkSizeRatio?: number;
    group?: string;
    isChecked?: boolean;
    name?: string;
    thickness?: number;
}

export class FiberRadioButtonPropsHandler implements PropsHandler<GUI.RadioButton, FiberRadioButtonProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.RadioButton>, oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.RadioButton = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.RadioButton.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.RadioButton.checkSizeRatio of type 'number':
        if (oldProps.checkSizeRatio !== newProps.checkSizeRatio) {
            updates.push({
                propertyName: 'checkSizeRatio',
                value: newProps.checkSizeRatio,
                type: 'number'
            });
        }
        // GUI.RadioButton.group of type 'string':
        if (oldProps.group !== newProps.group) {
            updates.push({
                propertyName: 'group',
                value: newProps.group,
                type: 'string'
            });
        }
        // GUI.RadioButton.isChecked of type 'boolean':
        if (oldProps.isChecked !== newProps.isChecked) {
            updates.push({
                propertyName: 'isChecked',
                value: newProps.isChecked,
                type: 'boolean'
            });
        }
        // GUI.RadioButton.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.RadioButton.thickness of type 'number':
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create radio button controls
 * 
 * This code has been generated
 */
export class FiberRadioButton implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRadioButtonPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RadioButton",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberRadioButton"
    };
}

export class FiberTextBlockProps extends FiberControlProps {
    lineSpacing?: string | number;
    name?: string;
    outlineColor?: string;
    outlineWidth?: number;
    resizeToFit?: boolean;
    text?: string;
    textHorizontalAlignment?: number;
    textVerticalAlignment?: number;
    textWrapping?: boolean | BABYLON.GUI.TextWrapping;
}

export class FiberTextBlockPropsHandler implements PropsHandler<GUI.TextBlock, FiberTextBlockProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.TextBlock>, oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.TextBlock = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: string | number property (not coded) GUI.TextBlock.lineSpacing.
        // GUI.TextBlock.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.TextBlock.outlineColor of type 'string':
        if (oldProps.outlineColor !== newProps.outlineColor) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'string'
            });
        }
        // GUI.TextBlock.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // GUI.TextBlock.resizeToFit of type 'boolean':
        if (oldProps.resizeToFit !== newProps.resizeToFit) {
            updates.push({
                propertyName: 'resizeToFit',
                value: newProps.resizeToFit,
                type: 'boolean'
            });
        }
        // GUI.TextBlock.text of type 'string':
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // GUI.TextBlock.textHorizontalAlignment of type 'number':
        if (oldProps.textHorizontalAlignment !== newProps.textHorizontalAlignment) {
            updates.push({
                propertyName: 'textHorizontalAlignment',
                value: newProps.textHorizontalAlignment,
                type: 'number'
            });
        }
        // GUI.TextBlock.textVerticalAlignment of type 'number':
        if (oldProps.textVerticalAlignment !== newProps.textVerticalAlignment) {
            updates.push({
                propertyName: 'textVerticalAlignment',
                value: newProps.textVerticalAlignment,
                type: 'number'
            });
        }
        // TODO: type: boolean | BABYLON.GUI.TextWrapping property (not coded) GUI.TextBlock.textWrapping.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create text block control
 * 
 * This code has been generated
 */
export class FiberTextBlock implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTextBlockPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TextBlock",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "text",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTextBlock"
    };
}

export class FiberSliderProps extends FiberControlProps {
    background?: string;
    barOffset?: string | number;
    borderColor?: string;
    isThumbCircle?: boolean;
    isThumbClamped?: boolean;
    isVertical?: boolean;
    maximum?: number;
    minimum?: number;
    name?: string;
    thumbWidth?: string | number;
    value?: number;
}

export class FiberSliderPropsHandler implements PropsHandler<GUI.Slider, FiberSliderProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Slider>, oldProps: FiberSliderProps, newProps: FiberSliderProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Slider = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Slider.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Slider.barOffset.
        // GUI.Slider.borderColor of type 'string':
        if (oldProps.borderColor !== newProps.borderColor) {
            updates.push({
                propertyName: 'borderColor',
                value: newProps.borderColor,
                type: 'string'
            });
        }
        // GUI.Slider.isThumbCircle of type 'boolean':
        if (oldProps.isThumbCircle !== newProps.isThumbCircle) {
            updates.push({
                propertyName: 'isThumbCircle',
                value: newProps.isThumbCircle,
                type: 'boolean'
            });
        }
        // GUI.Slider.isThumbClamped of type 'boolean':
        if (oldProps.isThumbClamped !== newProps.isThumbClamped) {
            updates.push({
                propertyName: 'isThumbClamped',
                value: newProps.isThumbClamped,
                type: 'boolean'
            });
        }
        // GUI.Slider.isVertical of type 'boolean':
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // GUI.Slider.maximum of type 'number':
        if (oldProps.maximum !== newProps.maximum) {
            updates.push({
                propertyName: 'maximum',
                value: newProps.maximum,
                type: 'number'
            });
        }
        // GUI.Slider.minimum of type 'number':
        if (oldProps.minimum !== newProps.minimum) {
            updates.push({
                propertyName: 'minimum',
                value: newProps.minimum,
                type: 'number'
            });
        }
        // GUI.Slider.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: string | number property (not coded) GUI.Slider.thumbWidth.
        // GUI.Slider.value of type 'number':
        if (oldProps.value !== newProps.value) {
            updates.push({
                propertyName: 'value',
                value: newProps.value,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 * 
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Slider",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSlider"
    };
}

export class FiberDisplayGridProps extends FiberControlProps {
    background?: string;
    cellHeight?: number;
    cellWidth?: number;
    displayMajorLines?: boolean;
    displayMinorLines?: boolean;
    majorLineColor?: string;
    majorLineFrequency?: number;
    majorLineTickness?: number;
    minorLineColor?: string;
    minorLineTickness?: number;
    name?: string;
}

export class FiberDisplayGridPropsHandler implements PropsHandler<GUI.DisplayGrid, FiberDisplayGridProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.DisplayGrid>, oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.DisplayGrid = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.DisplayGrid.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.DisplayGrid.cellHeight of type 'number':
        if (oldProps.cellHeight !== newProps.cellHeight) {
            updates.push({
                propertyName: 'cellHeight',
                value: newProps.cellHeight,
                type: 'number'
            });
        }
        // GUI.DisplayGrid.cellWidth of type 'number':
        if (oldProps.cellWidth !== newProps.cellWidth) {
            updates.push({
                propertyName: 'cellWidth',
                value: newProps.cellWidth,
                type: 'number'
            });
        }
        // GUI.DisplayGrid.displayMajorLines of type 'boolean':
        if (oldProps.displayMajorLines !== newProps.displayMajorLines) {
            updates.push({
                propertyName: 'displayMajorLines',
                value: newProps.displayMajorLines,
                type: 'boolean'
            });
        }
        // GUI.DisplayGrid.displayMinorLines of type 'boolean':
        if (oldProps.displayMinorLines !== newProps.displayMinorLines) {
            updates.push({
                propertyName: 'displayMinorLines',
                value: newProps.displayMinorLines,
                type: 'boolean'
            });
        }
        // GUI.DisplayGrid.majorLineColor of type 'string':
        if (oldProps.majorLineColor !== newProps.majorLineColor) {
            updates.push({
                propertyName: 'majorLineColor',
                value: newProps.majorLineColor,
                type: 'string'
            });
        }
        // GUI.DisplayGrid.majorLineFrequency of type 'number':
        if (oldProps.majorLineFrequency !== newProps.majorLineFrequency) {
            updates.push({
                propertyName: 'majorLineFrequency',
                value: newProps.majorLineFrequency,
                type: 'number'
            });
        }
        // GUI.DisplayGrid.majorLineTickness of type 'number':
        if (oldProps.majorLineTickness !== newProps.majorLineTickness) {
            updates.push({
                propertyName: 'majorLineTickness',
                value: newProps.majorLineTickness,
                type: 'number'
            });
        }
        // GUI.DisplayGrid.minorLineColor of type 'string':
        if (oldProps.minorLineColor !== newProps.minorLineColor) {
            updates.push({
                propertyName: 'minorLineColor',
                value: newProps.minorLineColor,
                type: 'string'
            });
        }
        // GUI.DisplayGrid.minorLineTickness of type 'number':
        if (oldProps.minorLineTickness !== newProps.minorLineTickness) {
            updates.push({
                propertyName: 'minorLineTickness',
                value: newProps.minorLineTickness,
                type: 'number'
            });
        }
        // GUI.DisplayGrid.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to render a grid
 * 
 * This code has been generated
 */
export class FiberDisplayGrid implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDisplayGridPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DisplayGrid",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDisplayGrid"
    };
}

export class FiberControl3DProps {
    isVisible?: boolean;
    name?: string;
    parent?: BABYLON.GUI.Container3D;
    pointerDownAnimation?: () => void;
    pointerEnterAnimation?: () => void;
    pointerOutAnimation?: () => void;
    pointerUpAnimation?: () => void;
    position?: BABYLON.Vector3;
    scaling?: BABYLON.Vector3;
}

export class FiberControl3DPropsHandler implements PropsHandler<GUI.Control3D, FiberControl3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Control3D>, oldProps: FiberControl3DProps, newProps: FiberControl3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Control3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Control3D.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // GUI.Control3D.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.GUI.Container3D property (not coded) GUI.Control3D.parent.
        // TODO: type: () => void property (not coded) GUI.Control3D.pointerDownAnimation.
        // TODO: type: () => void property (not coded) GUI.Control3D.pointerEnterAnimation.
        // TODO: type: () => void property (not coded) GUI.Control3D.pointerOutAnimation.
        // TODO: type: () => void property (not coded) GUI.Control3D.pointerUpAnimation.
        // TODO: type: BABYLON.Vector3 property (not coded) GUI.Control3D.position.
        // TODO: type: BABYLON.Vector3 property (not coded) GUI.Control3D.scaling.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used as base class for controls
 * 
 * This code has been generated
 */
export class FiberControl3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberControl3D"
    };
}

export class FiberAbstractButton3DProps extends FiberControl3DProps {
}

export class FiberAbstractButton3DPropsHandler implements PropsHandler<GUI.AbstractButton3D, FiberAbstractButton3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.AbstractButton3D>, oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.AbstractButton3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used as a root to all buttons
 * 
 * This code has been generated
 */
export class FiberAbstractButton3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractButton3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAbstractButton3D"
    };
}

export class FiberButton3DProps extends FiberAbstractButton3DProps {
    content?: BABYLON.GUI.Control;
    contentResolution?: number;
    contentScaleRatio?: number;
}

export class FiberButton3DPropsHandler implements PropsHandler<GUI.Button3D, FiberButton3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Button3D>, oldProps: FiberButton3DProps, newProps: FiberButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Button3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.GUI.Control property (not coded) GUI.Button3D.content.
        // GUI.Button3D.contentResolution of type 'number':
        if (oldProps.contentResolution !== newProps.contentResolution) {
            updates.push({
                propertyName: 'contentResolution',
                value: newProps.contentResolution,
                type: 'number'
            });
        }
        // GUI.Button3D.contentScaleRatio of type 'number':
        if (oldProps.contentScaleRatio !== newProps.contentScaleRatio) {
            updates.push({
                propertyName: 'contentScaleRatio',
                value: newProps.contentScaleRatio,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a button in 3D
 * 
 * This code has been generated
 */
export class FiberButton3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberButton3D"
    };
}

export class FiberHolographicButtonProps extends FiberButton3DProps {
    imageUrl?: string;
    text?: string;
    tooltipText?: string;
}

export class FiberHolographicButtonPropsHandler implements PropsHandler<GUI.HolographicButton, FiberHolographicButtonProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.HolographicButton>, oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.HolographicButton = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.HolographicButton.imageUrl of type 'string':
        if (oldProps.imageUrl !== newProps.imageUrl) {
            updates.push({
                propertyName: 'imageUrl',
                value: newProps.imageUrl,
                type: 'string'
            });
        }
        // GUI.HolographicButton.text of type 'string':
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // GUI.HolographicButton.tooltipText of type 'string':
        if (oldProps.tooltipText !== newProps.tooltipText) {
            updates.push({
                propertyName: 'tooltipText',
                value: newProps.tooltipText,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a holographic button in 3D
 * 
 * This code has been generated
 */
export class FiberHolographicButton implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHolographicButtonPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HolographicButton",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "shareMaterials",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberHolographicButton"
    };
}

export class FiberMeshButton3DProps extends FiberButton3DProps {
}

export class FiberMeshButton3DPropsHandler implements PropsHandler<GUI.MeshButton3D, FiberMeshButton3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.MeshButton3D>, oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.MeshButton3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 * 
 * This code has been generated
 */
export class FiberMeshButton3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshButton3DPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MeshButton3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "mesh",
                "type": "BABYLON.Mesh",
                "optional": false
            },
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberMeshButton3D"
    };
}

export class FiberContainer3DProps extends FiberControl3DProps {
    blockLayout?: boolean;
}

export class FiberContainer3DPropsHandler implements PropsHandler<GUI.Container3D, FiberContainer3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.Container3D>, oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.Container3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.Container3D.blockLayout of type 'boolean':
        if (oldProps.blockLayout !== newProps.blockLayout) {
            updates.push({
                propertyName: 'blockLayout',
                value: newProps.blockLayout,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create containers for controls
 * 
 * This code has been generated
 */
export class FiberContainer3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberContainer3D"
    };
}

export class FiberStackPanel3DProps extends FiberContainer3DProps {
    isVertical?: boolean;
    margin?: number;
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<GUI.StackPanel3D, FiberStackPanel3DProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.StackPanel3D>, oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.StackPanel3D = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.StackPanel3D.isVertical of type 'boolean':
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // GUI.StackPanel3D.margin of type 'number':
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a stack panel in 3D on XY plane
 * 
 * This code has been generated
 */
export class FiberStackPanel3D implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanel3DPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel3D",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "isVertical",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberStackPanel3D"
    };
}

export class FiberVolumeBasedPanelProps extends FiberContainer3DProps {
    columns?: number;
    margin?: number;
    orientation?: number;
    rows?: number;
}

export class FiberVolumeBasedPanelPropsHandler implements PropsHandler<GUI.VolumeBasedPanel, FiberVolumeBasedPanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.VolumeBasedPanel>, oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.VolumeBasedPanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.VolumeBasedPanel.columns of type 'number':
        if (oldProps.columns !== newProps.columns) {
            updates.push({
                propertyName: 'columns',
                value: newProps.columns,
                type: 'number'
            });
        }
        // GUI.VolumeBasedPanel.margin of type 'number':
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'number'
            });
        }
        // GUI.VolumeBasedPanel.orientation of type 'number':
        if (oldProps.orientation !== newProps.orientation) {
            updates.push({
                propertyName: 'orientation',
                value: newProps.orientation,
                type: 'number'
            });
        }
        // GUI.VolumeBasedPanel.rows of type 'number':
        if (oldProps.rows !== newProps.rows) {
            updates.push({
                propertyName: 'rows',
                value: newProps.rows,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 * 
 * This code has been generated
 */
export class FiberVolumeBasedPanel implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VolumeBasedPanel",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVolumeBasedPanel"
    };
}

export class FiberCylinderPanelProps extends FiberVolumeBasedPanelProps {
    radius?: number;
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<GUI.CylinderPanel, FiberCylinderPanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.CylinderPanel>, oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.CylinderPanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.CylinderPanel.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a cylinder
 * 
 * This code has been generated
 */
export class FiberCylinderPanel implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCylinderPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CylinderPanel",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberCylinderPanel"
    };
}

export class FiberPlanePanelProps extends FiberVolumeBasedPanelProps {
}

export class FiberPlanePanelPropsHandler implements PropsHandler<GUI.PlanePanel, FiberPlanePanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.PlanePanel>, oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.PlanePanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a plane
 * 
 * This code has been generated
 */
export class FiberPlanePanel implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPlanePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PlanePanel",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPlanePanel"
    };
}

export class FiberScatterPanelProps extends FiberVolumeBasedPanelProps {
    iteration?: number;
}

export class FiberScatterPanelPropsHandler implements PropsHandler<GUI.ScatterPanel, FiberScatterPanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.ScatterPanel>, oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.ScatterPanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.ScatterPanel.iteration of type 'number':
        if (oldProps.iteration !== newProps.iteration) {
            updates.push({
                propertyName: 'iteration',
                value: newProps.iteration,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel where items get randomized planar mapping
 * 
 * This code has been generated
 */
export class FiberScatterPanel implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScatterPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScatterPanel",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberScatterPanel"
    };
}

export class FiberSpherePanelProps extends FiberVolumeBasedPanelProps {
    radius?: number;
}

export class FiberSpherePanelPropsHandler implements PropsHandler<GUI.SpherePanel, FiberSpherePanelProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.SpherePanel>, oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.SpherePanel = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // GUI.SpherePanel.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a sphere
 * 
 * This code has been generated
 */
export class FiberSpherePanel implements HasPropsHandlers<GUI.Control3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<GUI.Control3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpherePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.Control3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.Control3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpherePanel",
        "namespace": "GUI",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSpherePanel"
    };
}

export class FiberGUI3DManagerProps {
}

export class FiberGUI3DManagerPropsHandler implements PropsHandler<GUI.GUI3DManager, FiberGUI3DManagerProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<GUI.GUI3DManager>, oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let babylonObject: GUI.GUI3DManager = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to manage 3D user interface
 * 
 * This code has been generated
 */
export class FiberGUI3DManager implements HasPropsHandlers<GUI.GUI3DManager, FiberGUI3DManagerProps> {
    private propsHandlers: PropsHandler<GUI.GUI3DManager, FiberGUI3DManagerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGUI3DManagerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<GUI.GUI3DManager, FiberGUI3DManagerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<GUI.GUI3DManager, FiberGUI3DManagerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GUI3DManager",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberGUI3DManager"
    };
}

export const AbstractButton3D: string = 'AbstractButton3D', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', Box: string = 'Box', Button: string = 'Button', Button3D: string = 'Button3D', Camera: string = 'Camera', Checkbox: string = 'Checkbox', ColorPicker: string = 'ColorPicker', Container: string = 'Container', Container3D: string = 'Container3D', Control: string = 'Control', Control3D: string = 'Control3D', Cylinder: string = 'Cylinder', CylinderPanel: string = 'CylinderPanel', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DisplayGrid: string = 'DisplayGrid', Ellipse: string = 'Ellipse', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GUI3DManager: string = 'GUI3DManager', GamepadCamera: string = 'GamepadCamera', Grid: string = 'Grid', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HemisphericLight: string = 'HemisphericLight', HolographicButton: string = 'HolographicButton', IcoSphere: string = 'IcoSphere', Image: string = 'Image', InputPassword: string = 'InputPassword', InputText: string = 'InputText', Lathe: string = 'Lathe', Light: string = 'Light', Line: string = 'Line', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', MeshButton3D: string = 'MeshButton3D', MultiLine: string = 'MultiLine', MultiMaterial: string = 'MultiMaterial', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', Plane: string = 'Plane', PlanePanel: string = 'PlanePanel', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', PushMaterial: string = 'PushMaterial', RadioButton: string = 'RadioButton', Rectangle: string = 'Rectangle', Ribbon: string = 'Ribbon', ScatterPanel: string = 'ScatterPanel', SelectionPanel: string = 'SelectionPanel', ShaderMaterial: string = 'ShaderMaterial', ShadowLight: string = 'ShadowLight', Slider: string = 'Slider', Sphere: string = 'Sphere', SpherePanel: string = 'SpherePanel', SpotLight: string = 'SpotLight', StackPanel: string = 'StackPanel', StackPanel3D: string = 'StackPanel3D', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', TextBlock: string = 'TextBlock', TiledGround: string = 'TiledGround', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', VirtualKeyboard: string = 'VirtualKeyboard', VolumeBasedPanel: string = 'VolumeBasedPanel', WebVRFreeCamera: string = 'WebVRFreeCamera';
