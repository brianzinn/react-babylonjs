import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import BABYLON from "babylonjs";
import GUI from "babylonjs-gui";

export class FiberNodeProps {
    addToSceneRootNodes?: any;
    animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride;
    animations?: BABYLON.Animation[];
    doNotSerialize?: boolean;
    id?: string;
    metadata?: any;
    name?: string;
    onDispose?: () => void;
    onDisposeObservable?: BABYLON.Observable<BABYLON.Node>;
    onReady?: (node: BABYLON.Node) => void;
    parent?: BABYLON.Node;
    removeFromSceneRootNodes?: any;
    reservedDataStore?: any;
    state?: string;
    uniqueId?: number;
    setEnabled?: any;
}

export class FiberNodePropsHandler implements PropsHandler<BABYLON.Node, FiberNodeProps> {
    getPropertyUpdates(hostInstance: BABYLON.Node, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.Node.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // BABYLON.Node.onDisposeObservable of type 'BABYLON.Observable<BABYLON.Node>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BABYLON.Observable<BABYLON.Node>'
            });
        }
        // BABYLON.Node.onReady of type '(node: BABYLON.Node) => void/fn':
        if (oldProps.onReady === undefined && oldProps.onReady !== newProps.onReady) {
            updates.push({
                propertyName: 'onReady',
                value: newProps.onReady,
                type: '(node: BABYLON.Node) => void'
            });
        }
        // TODO: type: BABYLON.Node property (not coded) BABYLON.Node.parent.
        // TODO: type: any property (not coded) BABYLON.Node.removeFromSceneRootNodes.
        // TODO: type: any property (not coded) BABYLON.Node.reservedDataStore.
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
        // BABYLON.Node.setEnabled of type '(value?: boolean)':
        if (oldProps.setEnabled !== newProps.setEnabled) {
            updates.push({
                propertyName: 'setEnabled',
                value: newProps.setEnabled,
                type: '(value?: boolean)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 * 
 * This code has been generated
 */
export class FiberNode implements HasPropsHandlers<BABYLON.Node, FiberNodeProps> {
    private propsHandlers: PropsHandler<BABYLON.Node, FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Node, FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Node, FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Node",
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
                "optional": true
            },
            {
                "name": "addToRootNodes",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberNode",
        "isMesh": false
    };
}

export class FiberTransformNodeProps extends FiberNodeProps {
    billboardMode?: number;
    ignoreNonUniformScaling?: boolean;
    infiniteDistance?: boolean;
    onAfterWorldMatrixUpdateObservable?: BABYLON.Observable<BABYLON.TransformNode>;
    position?: BABYLON.Vector3;
    rotation?: BABYLON.Vector3;
    rotationQuaternion?: BABYLON.Quaternion;
    scaling?: BABYLON.Vector3;
    scalingDeterminant?: number;
    setAbsolutePosition?: any;
    setDirection?: any;
    setParent?: any;
    setPivotMatrix?: any;
    setPivotPoint?: any;
    setPositionWithLocalVector?: any;
    setPreTransformMatrix?: any;
}

export class FiberTransformNodePropsHandler implements PropsHandler<BABYLON.TransformNode, FiberTransformNodeProps> {
    getPropertyUpdates(hostInstance: BABYLON.TransformNode, oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.TransformNode.billboardMode of type 'number':
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // BABYLON.TransformNode.ignoreNonUniformScaling of type 'boolean':
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // BABYLON.TransformNode.infiniteDistance of type 'boolean':
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({
                propertyName: 'infiniteDistance',
                value: newProps.infiniteDistance,
                type: 'boolean'
            });
        }
        // BABYLON.TransformNode.onAfterWorldMatrixUpdateObservable of type 'BABYLON.Observable<BABYLON.TransformNode>/fn':
        if (oldProps.onAfterWorldMatrixUpdateObservable === undefined && oldProps.onAfterWorldMatrixUpdateObservable !== newProps.onAfterWorldMatrixUpdateObservable) {
            updates.push({
                propertyName: 'onAfterWorldMatrixUpdateObservable',
                value: newProps.onAfterWorldMatrixUpdateObservable,
                type: 'BABYLON.Observable<BABYLON.TransformNode>'
            });
        }
        // BABYLON.TransformNode.position of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.TransformNode.rotation of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.TransformNode.rotationQuaternion.
        // BABYLON.TransformNode.scaling of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.TransformNode.scalingDeterminant of type 'number':
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // BABYLON.TransformNode.setAbsolutePosition of type '(absolutePosition?: BABYLON.Vector3)':
        if (oldProps.setAbsolutePosition !== newProps.setAbsolutePosition) {
            updates.push({
                propertyName: 'setAbsolutePosition',
                value: newProps.setAbsolutePosition,
                type: '(absolutePosition?: BABYLON.Vector3)'
            });
        }
        // BABYLON.TransformNode.setDirection of type '(localAxis?: BABYLON.Vector3, yawCor?: number, pitchCor?: number, rollCor?: number)':
        if (oldProps.setDirection !== newProps.setDirection) {
            updates.push({
                propertyName: 'setDirection',
                value: newProps.setDirection,
                type: '(localAxis?: BABYLON.Vector3, yawCor?: number, pitchCor?: number, rollCor?: number)'
            });
        }
        // BABYLON.TransformNode.setParent of type '(node?: BABYLON.Node)':
        if (oldProps.setParent !== newProps.setParent) {
            updates.push({
                propertyName: 'setParent',
                value: newProps.setParent,
                type: '(node?: BABYLON.Node)'
            });
        }
        // BABYLON.TransformNode.setPivotMatrix of type '(matrix?: BABYLON.DeepImmutableObject<BABYLON.Matrix>, postMultiplyPivotMatrix?: boolean)':
        if (oldProps.setPivotMatrix !== newProps.setPivotMatrix) {
            updates.push({
                propertyName: 'setPivotMatrix',
                value: newProps.setPivotMatrix,
                type: '(matrix?: BABYLON.DeepImmutableObject<BABYLON.Matrix>, postMultiplyPivotMatrix?: boolean)'
            });
        }
        // BABYLON.TransformNode.setPivotPoint of type '(point?: BABYLON.Vector3, space?: BABYLON.Space)':
        if (oldProps.setPivotPoint !== newProps.setPivotPoint) {
            updates.push({
                propertyName: 'setPivotPoint',
                value: newProps.setPivotPoint,
                type: '(point?: BABYLON.Vector3, space?: BABYLON.Space)'
            });
        }
        // BABYLON.TransformNode.setPositionWithLocalVector of type '(vector3?: BABYLON.Vector3)':
        if (oldProps.setPositionWithLocalVector !== newProps.setPositionWithLocalVector) {
            updates.push({
                propertyName: 'setPositionWithLocalVector',
                value: newProps.setPositionWithLocalVector,
                type: '(vector3?: BABYLON.Vector3)'
            });
        }
        // BABYLON.TransformNode.setPreTransformMatrix of type '(matrix?: BABYLON.Matrix)':
        if (oldProps.setPreTransformMatrix !== newProps.setPreTransformMatrix) {
            updates.push({
                propertyName: 'setPreTransformMatrix',
                value: newProps.setPreTransformMatrix,
                type: '(matrix?: BABYLON.Matrix)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 * 
 * This code has been generated
 */
export class FiberTransformNode implements HasPropsHandlers<BABYLON.Node, FiberNodeProps> {
    private propsHandlers: PropsHandler<BABYLON.Node, FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.Node, FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.Node, FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TransformNode",
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
                "optional": true
            },
            {
                "name": "isPure",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberTransformNode",
        "isMesh": false
    };
}

export class FiberAbstractMeshProps extends FiberTransformNodeProps {
    actionManager?: BABYLON.ActionManager;
    alphaIndex?: number;
    alwaysSelectAsActiveMesh?: boolean;
    applyFog?: boolean;
    checkCollisions?: boolean;
    collisionGroup?: number;
    collisionMask?: number;
    computeBonesUsingShaders?: boolean;
    cullingStrategy?: number;
    definedFacingForward?: boolean;
    edgesColor?: BABYLON.Color4;
    edgesWidth?: number;
    ellipsoid?: BABYLON.Vector3;
    ellipsoidOffset?: BABYLON.Vector3;
    enablePointerMoveEvents?: boolean;
    facetDepthSortFrom?: BABYLON.Vector3;
    hasVertexAlpha?: boolean;
    isBlocker?: boolean;
    isPickable?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: BABYLON.Material;
    mustDepthSortFacets?: boolean;
    numBoneInfluencers?: number;
    onCollide?: () => void;
    onCollideObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onCollisionPositionChange?: () => void;
    onCollisionPositionChangeObservable?: BABYLON.Observable<BABYLON.Vector3>;
    onMaterialChangedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onRebuildObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    outlineColor?: BABYLON.Color3;
    outlineWidth?: number;
    overlayAlpha?: number;
    overlayColor?: BABYLON.Color3;
    partitioningBBoxRatio?: number;
    partitioningSubdivisions?: number;
    receiveShadows?: boolean;
    renderingGroupId?: number;
    scaling?: BABYLON.Vector3;
    showSubMeshesBoundingBox?: boolean;
    skeleton?: BABYLON.Skeleton;
    subMeshes?: BABYLON.SubMesh[];
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
    setBoundingInfo?: any;
    setIndices?: any;
    setVerticesData?: any;
}

export class FiberAbstractMeshPropsHandler implements PropsHandler<BABYLON.AbstractMesh, FiberAbstractMeshProps> {
    getPropertyUpdates(hostInstance: BABYLON.AbstractMesh, oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.ActionManager property (not coded) BABYLON.AbstractMesh.actionManager.
        // BABYLON.AbstractMesh.alphaIndex of type 'number':
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.alwaysSelectAsActiveMesh of type 'boolean':
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.applyFog of type 'boolean':
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.collisionGroup of type 'number':
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.computeBonesUsingShaders of type 'boolean':
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.cullingStrategy of type 'number':
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.definedFacingForward of type 'boolean':
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.edgesColor of BABYLON.Color4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.edgesColor && (!oldProps.edgesColor || oldProps.edgesColor.r !== newProps.edgesColor.r || oldProps.edgesColor.g !== newProps.edgesColor.g || oldProps.edgesColor.b !== newProps.edgesColor.b || oldProps.edgesColor.a !== newProps.edgesColor.a)) {
            updates.push({
                propertyName: 'edgesColor',
                value: newProps.edgesColor,
                type: 'BABYLON.Color4'
            });
        }
        // BABYLON.AbstractMesh.edgesWidth of type 'number':
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.ellipsoid of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.AbstractMesh.ellipsoidOffset of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.AbstractMesh.enablePointerMoveEvents of type 'boolean':
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.facetDepthSortFrom of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.facetDepthSortFrom && (!oldProps.facetDepthSortFrom || !oldProps.facetDepthSortFrom.equals(newProps.facetDepthSortFrom))) {
            updates.push({
                propertyName: 'facetDepthSortFrom',
                value: newProps.facetDepthSortFrom,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.AbstractMesh.hasVertexAlpha of type 'boolean':
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.isBlocker of type 'boolean':
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.isPickable of type 'boolean':
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Material property (not coded) BABYLON.AbstractMesh.material.
        // BABYLON.AbstractMesh.mustDepthSortFacets of type 'boolean':
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.numBoneInfluencers of type 'number':
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({
                propertyName: 'numBoneInfluencers',
                value: newProps.numBoneInfluencers,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.onCollide of type '() => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '() => void'
            });
        }
        // BABYLON.AbstractMesh.onCollideObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onCollideObservable === undefined && oldProps.onCollideObservable !== newProps.onCollideObservable) {
            updates.push({
                propertyName: 'onCollideObservable',
                value: newProps.onCollideObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.AbstractMesh.onCollisionPositionChange of type '() => void/fn':
        if (oldProps.onCollisionPositionChange === undefined && oldProps.onCollisionPositionChange !== newProps.onCollisionPositionChange) {
            updates.push({
                propertyName: 'onCollisionPositionChange',
                value: newProps.onCollisionPositionChange,
                type: '() => void'
            });
        }
        // BABYLON.AbstractMesh.onCollisionPositionChangeObservable of type 'BABYLON.Observable<BABYLON.Vector3>/fn':
        if (oldProps.onCollisionPositionChangeObservable === undefined && oldProps.onCollisionPositionChangeObservable !== newProps.onCollisionPositionChangeObservable) {
            updates.push({
                propertyName: 'onCollisionPositionChangeObservable',
                value: newProps.onCollisionPositionChangeObservable,
                type: 'BABYLON.Observable<BABYLON.Vector3>'
            });
        }
        // BABYLON.AbstractMesh.onMaterialChangedObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onMaterialChangedObservable === undefined && oldProps.onMaterialChangedObservable !== newProps.onMaterialChangedObservable) {
            updates.push({
                propertyName: 'onMaterialChangedObservable',
                value: newProps.onMaterialChangedObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.AbstractMesh.onRebuildObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onRebuildObservable === undefined && oldProps.onRebuildObservable !== newProps.onRebuildObservable) {
            updates.push({
                propertyName: 'onRebuildObservable',
                value: newProps.onRebuildObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.AbstractMesh.outlineColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.outlineColor && (!oldProps.outlineColor || !oldProps.outlineColor.equals(newProps.outlineColor))) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.AbstractMesh.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.overlayAlpha of type 'number':
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.overlayColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.overlayColor && (!oldProps.overlayColor || !oldProps.overlayColor.equals(newProps.overlayColor))) {
            updates.push({
                propertyName: 'overlayColor',
                value: newProps.overlayColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.AbstractMesh.partitioningBBoxRatio of type 'number':
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.partitioningSubdivisions of type 'number':
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.receiveShadows of type 'boolean':
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.renderingGroupId of type 'number':
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.scaling of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.AbstractMesh.showSubMeshesBoundingBox of type 'boolean':
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Skeleton property (not coded) BABYLON.AbstractMesh.skeleton.
        // TODO: type: BABYLON.SubMesh[] property (not coded) BABYLON.AbstractMesh.subMeshes.
        // BABYLON.AbstractMesh.useOctreeForCollisions of type 'boolean':
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.useOctreeForPicking of type 'boolean':
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.useOctreeForRenderingSelection of type 'boolean':
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.useVertexColors of type 'boolean':
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // BABYLON.AbstractMesh.visibility of type 'number':
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({
                propertyName: 'visibility',
                value: newProps.visibility,
                type: 'number'
            });
        }
        // BABYLON.AbstractMesh.setBoundingInfo of type '(boundingInfo?: BABYLON.BoundingInfo)':
        if (oldProps.setBoundingInfo !== newProps.setBoundingInfo) {
            updates.push({
                propertyName: 'setBoundingInfo',
                value: newProps.setBoundingInfo,
                type: '(boundingInfo?: BABYLON.BoundingInfo)'
            });
        }
        // BABYLON.AbstractMesh.setIndices of type '(indices?: BABYLON.IndicesArray, totalVertices?: number)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BABYLON.IndicesArray, totalVertices?: number)'
            });
        }
        // BABYLON.AbstractMesh.setVerticesData of type '(kind?: string, data?: BABYLON.FloatArray, updatable?: boolean, stride?: number)':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BABYLON.FloatArray, updatable?: boolean, stride?: number)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to store all common mesh properties
 * 
 * This code has been generated
 */
export class FiberAbstractMesh implements HasPropsHandlers<BABYLON.TransformNode, FiberTransformNodeProps> {
    private propsHandlers: PropsHandler<BABYLON.TransformNode, FiberTransformNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.TransformNode, FiberTransformNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.TransformNode, FiberTransformNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractMesh",
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
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAbstractMesh",
        "isMesh": false
    };
}

export class FiberMeshProps extends FiberAbstractMeshProps {
    delayLoadingFile?: string;
    delayLoadState?: number;
    instances?: BABYLON.InstancedMesh[];
    isUnIndexed?: boolean;
    meshMap?: any;
    morphTargetManager?: BABYLON.MorphTargetManager;
    normalizeSkinFourWeights?: any;
    normalizeSkinWeightsAndExtra?: any;
    onBeforeDraw?: () => void;
    onLODLevelSelection?: (distance: number, mesh: BABYLON.Mesh, selectedLevel: BABYLON.Mesh) => void;
    overrideMaterialSideOrientation?: number;
    overridenInstanceCount?: number;
    setIndices?: any;
    setMaterialByID?: any;
    setVerticesBuffer?: any;
    setVerticesData?: any;
}

export class FiberMeshPropsHandler implements PropsHandler<BABYLON.Mesh, FiberMeshProps> {
    getPropertyUpdates(hostInstance: BABYLON.Mesh, oldProps: FiberMeshProps, newProps: FiberMeshProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
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
        // TODO: type: BABYLON.InstancedMesh[] property (not coded) BABYLON.Mesh.instances.
        // BABYLON.Mesh.isUnIndexed of type 'boolean':
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Mesh.meshMap.
        // TODO: type: BABYLON.MorphTargetManager property (not coded) BABYLON.Mesh.morphTargetManager.
        // TODO: type: any property (not coded) BABYLON.Mesh.normalizeSkinFourWeights.
        // TODO: type: any property (not coded) BABYLON.Mesh.normalizeSkinWeightsAndExtra.
        // BABYLON.Mesh.onBeforeDraw of type '() => void/fn':
        if (oldProps.onBeforeDraw === undefined && oldProps.onBeforeDraw !== newProps.onBeforeDraw) {
            updates.push({
                propertyName: 'onBeforeDraw',
                value: newProps.onBeforeDraw,
                type: '() => void'
            });
        }
        // BABYLON.Mesh.onLODLevelSelection of type '(distance: number, mesh: BABYLON.Mesh, selectedLevel: BABYLON.Mesh) => void/fn':
        if (oldProps.onLODLevelSelection === undefined && oldProps.onLODLevelSelection !== newProps.onLODLevelSelection) {
            updates.push({
                propertyName: 'onLODLevelSelection',
                value: newProps.onLODLevelSelection,
                type: '(distance: number, mesh: BABYLON.Mesh, selectedLevel: BABYLON.Mesh) => void'
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
        // BABYLON.Mesh.setIndices of type '(indices?: BABYLON.IndicesArray, totalVertices?: number, updatable?: boolean)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BABYLON.IndicesArray, totalVertices?: number, updatable?: boolean)'
            });
        }
        // BABYLON.Mesh.setMaterialByID of type '(id?: string)':
        if (oldProps.setMaterialByID !== newProps.setMaterialByID) {
            updates.push({
                propertyName: 'setMaterialByID',
                value: newProps.setMaterialByID,
                type: '(id?: string)'
            });
        }
        // BABYLON.Mesh.setVerticesBuffer of type '(buffer?: BABYLON.VertexBuffer)':
        if (oldProps.setVerticesBuffer !== newProps.setVerticesBuffer) {
            updates.push({
                propertyName: 'setVerticesBuffer',
                value: newProps.setVerticesBuffer,
                type: '(buffer?: BABYLON.VertexBuffer)'
            });
        }
        // BABYLON.Mesh.setVerticesData of type '(kind?: string, data?: BABYLON.FloatArray, updatable?: boolean, stride?: number)':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BABYLON.FloatArray, updatable?: boolean, stride?: number)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to represent renderable models
 * 
 * This code has been generated
 */
export class FiberMesh implements HasPropsHandlers<BABYLON.AbstractMesh, FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.AbstractMesh, FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.AbstractMesh, FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.AbstractMesh, FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Mesh",
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
                "optional": true
            },
            {
                "name": "parent",
                "type": "BABYLON.Node",
                "optional": true
            },
            {
                "name": "source",
                "type": "BABYLON.Mesh",
                "optional": true
            },
            {
                "name": "doNotCloneChildren",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "clonePhysicsImpostor",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberMesh",
        "isMesh": true
    };
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
    onAfterCheckInputsObservable?: BABYLON.Observable<BABYLON.Camera>;
    onProjectionMatrixChangedObservable?: BABYLON.Observable<BABYLON.Camera>;
    onRestoreStateObservable?: BABYLON.Observable<BABYLON.Camera>;
    onViewMatrixChangedObservable?: BABYLON.Observable<BABYLON.Camera>;
    orthoBottom?: number;
    orthoLeft?: number;
    orthoRight?: number;
    orthoTop?: number;
    outputRenderTarget?: BABYLON.RenderTargetTexture;
    position?: BABYLON.Vector3;
    upVector?: BABYLON.Vector3;
    viewport?: BABYLON.Viewport;
    setCameraRigMode?: any;
    setCameraRigParameter?: any;
}

export class FiberCameraPropsHandler implements PropsHandler<BABYLON.Camera, FiberCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.Camera, oldProps: FiberCameraProps, newProps: FiberCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.Camera.onAfterCheckInputsObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onAfterCheckInputsObservable === undefined && oldProps.onAfterCheckInputsObservable !== newProps.onAfterCheckInputsObservable) {
            updates.push({
                propertyName: 'onAfterCheckInputsObservable',
                value: newProps.onAfterCheckInputsObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Camera.onProjectionMatrixChangedObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onProjectionMatrixChangedObservable === undefined && oldProps.onProjectionMatrixChangedObservable !== newProps.onProjectionMatrixChangedObservable) {
            updates.push({
                propertyName: 'onProjectionMatrixChangedObservable',
                value: newProps.onProjectionMatrixChangedObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Camera.onRestoreStateObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onRestoreStateObservable === undefined && oldProps.onRestoreStateObservable !== newProps.onRestoreStateObservable) {
            updates.push({
                propertyName: 'onRestoreStateObservable',
                value: newProps.onRestoreStateObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Camera.onViewMatrixChangedObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onViewMatrixChangedObservable === undefined && oldProps.onViewMatrixChangedObservable !== newProps.onViewMatrixChangedObservable) {
            updates.push({
                propertyName: 'onViewMatrixChangedObservable',
                value: newProps.onViewMatrixChangedObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
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
        // TODO: type: BABYLON.RenderTargetTexture property (not coded) BABYLON.Camera.outputRenderTarget.
        // BABYLON.Camera.position of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Camera.upVector of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.upVector && (!oldProps.upVector || !oldProps.upVector.equals(newProps.upVector))) {
            updates.push({
                propertyName: 'upVector',
                value: newProps.upVector,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Viewport property (not coded) BABYLON.Camera.viewport.
        // BABYLON.Camera.setCameraRigMode of type '(mode?: number, rigParams?: any)':
        if (oldProps.setCameraRigMode !== newProps.setCameraRigMode) {
            updates.push({
                propertyName: 'setCameraRigMode',
                value: newProps.setCameraRigMode,
                type: '(mode?: number, rigParams?: any)'
            });
        }
        // BABYLON.Camera.setCameraRigParameter of type '(name?: string, value?: any)':
        if (oldProps.setCameraRigParameter !== newProps.setCameraRigParameter) {
            updates.push({
                propertyName: 'setCameraRigParameter',
                value: newProps.setCameraRigParameter,
                type: '(name?: string, value?: any)'
            });
        }
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
        "isCamera": true,
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
    updateUpVectorFromRotation?: boolean;
    setTarget?: any;
}

export class FiberTargetCameraPropsHandler implements PropsHandler<BABYLON.TargetCamera, FiberTargetCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.TargetCamera, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.TargetCamera.cameraDirection of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.TargetCamera.rotation of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.TargetCamera.updateUpVectorFromRotation of type 'boolean':
        if (oldProps.updateUpVectorFromRotation !== newProps.updateUpVectorFromRotation) {
            updates.push({
                propertyName: 'updateUpVectorFromRotation',
                value: newProps.updateUpVectorFromRotation,
                type: 'boolean'
            });
        }
        // BABYLON.TargetCamera.setTarget of type '(target?: BABYLON.Vector3)':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BABYLON.Vector3)'
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
        "isCamera": true,
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
    onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void;
    onMeshTargetChangedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
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
    setPosition?: any;
    setTarget?: any;
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<BABYLON.ArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.ArcRotateCamera, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.ArcRotateCamera.collisionRadius of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.ArcRotateCamera.onCollide of type '(collidedMesh: BABYLON.AbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BABYLON.AbstractMesh) => void'
            });
        }
        // BABYLON.ArcRotateCamera.onMeshTargetChangedObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onMeshTargetChangedObservable === undefined && oldProps.onMeshTargetChangedObservable !== newProps.onMeshTargetChangedObservable) {
            updates.push({
                propertyName: 'onMeshTargetChangedObservable',
                value: newProps.onMeshTargetChangedObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.ArcRotateCamera.panningAxis of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.ArcRotateCamera.panningOriginTarget of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.ArcRotateCamera.target of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.ArcRotateCamera.setPosition of type '(position?: BABYLON.Vector3)':
        if (oldProps.setPosition !== newProps.setPosition) {
            updates.push({
                propertyName: 'setPosition',
                value: newProps.setPosition,
                type: '(position?: BABYLON.Vector3)'
            });
        }
        // BABYLON.ArcRotateCamera.setTarget of type '(target?: BABYLON.AbstractMesh | BABYLON.Vector3, toBoundingCenter?: boolean, allowSamePosition?: boolean)':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BABYLON.AbstractMesh | BABYLON.Vector3, toBoundingCenter?: boolean, allowSamePosition?: boolean)'
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
        "isCamera": true,
        "className": "FiberArcRotateCamera"
    };
}

export class FiberVRDeviceOrientationArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationArcRotateCamera, FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.VRDeviceOrientationArcRotateCamera, oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberAnaglyphArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphArcRotateCamera, FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.AnaglyphArcRotateCamera, oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberAnaglyphArcRotateCamera"
    };
}

export class FiberStereoscopicArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicArcRotateCamera, FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.StereoscopicArcRotateCamera, oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberStereoscopicArcRotateCamera"
    };
}

export class FiberFlyCameraProps extends FiberTargetCameraProps {
    angularSensibility?: number;
    applyGravity?: boolean;
    bankedTurn?: boolean;
    bankedTurnLimit?: number;
    bankedTurnMultiplier?: number;
    cameraDirection?: BABYLON.Vector3;
    checkCollisions?: boolean;
    collisionMask?: number;
    ellipsoid?: BABYLON.Vector3;
    ellipsoidOffset?: BABYLON.Vector3;
    inputs?: BABYLON.FlyCameraInputsManager;
    keysBackward?: number[];
    keysDown?: number[];
    keysForward?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
    onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void;
    rollCorrect?: number;
    rotationQuaternion?: BABYLON.Quaternion;
}

export class FiberFlyCameraPropsHandler implements PropsHandler<BABYLON.FlyCamera, FiberFlyCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.FlyCamera, oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.FlyCamera.angularSensibility of type 'number':
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // BABYLON.FlyCamera.applyGravity of type 'boolean':
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // BABYLON.FlyCamera.bankedTurn of type 'boolean':
        if (oldProps.bankedTurn !== newProps.bankedTurn) {
            updates.push({
                propertyName: 'bankedTurn',
                value: newProps.bankedTurn,
                type: 'boolean'
            });
        }
        // BABYLON.FlyCamera.bankedTurnLimit of type 'number':
        if (oldProps.bankedTurnLimit !== newProps.bankedTurnLimit) {
            updates.push({
                propertyName: 'bankedTurnLimit',
                value: newProps.bankedTurnLimit,
                type: 'number'
            });
        }
        // BABYLON.FlyCamera.bankedTurnMultiplier of type 'number':
        if (oldProps.bankedTurnMultiplier !== newProps.bankedTurnMultiplier) {
            updates.push({
                propertyName: 'bankedTurnMultiplier',
                value: newProps.bankedTurnMultiplier,
                type: 'number'
            });
        }
        // BABYLON.FlyCamera.cameraDirection of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.cameraDirection && (!oldProps.cameraDirection || !oldProps.cameraDirection.equals(newProps.cameraDirection))) {
            updates.push({
                propertyName: 'cameraDirection',
                value: newProps.cameraDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.FlyCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.FlyCamera.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLON.FlyCamera.ellipsoid of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.FlyCamera.ellipsoidOffset of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.FlyCameraInputsManager property (not coded) BABYLON.FlyCamera.inputs.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysBackward.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysDown.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysForward.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysLeft.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysRight.
        // TODO: type: number[] property (not coded) BABYLON.FlyCamera.keysUp.
        // BABYLON.FlyCamera.onCollide of type '(collidedMesh: BABYLON.AbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BABYLON.AbstractMesh) => void'
            });
        }
        // BABYLON.FlyCamera.rollCorrect of type 'number':
        if (oldProps.rollCorrect !== newProps.rollCorrect) {
            updates.push({
                propertyName: 'rollCorrect',
                value: newProps.rollCorrect,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.FlyCamera.rotationQuaternion.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 * 
 * This code has been generated
 */
export class FiberFlyCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFlyCameraPropsHandler(),
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
        "libraryLocation": "FlyCamera",
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
        "isCamera": true,
        "className": "FiberFlyCamera"
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
    getPropertyUpdates(hostInstance: BABYLON.FollowCamera, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
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
    getPropertyUpdates(hostInstance: BABYLON.ArcFollowCamera, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
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
    onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void;
}

export class FiberFreeCameraPropsHandler implements PropsHandler<BABYLON.FreeCamera, FiberFreeCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.FreeCamera, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.FreeCamera.ellipsoid of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.FreeCamera.ellipsoidOffset of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.FreeCamera.onCollide of type '(collidedMesh: BABYLON.AbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BABYLON.AbstractMesh) => void'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
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
        "isCamera": true,
        "className": "FiberFreeCamera"
    };
}

export class FiberDeviceOrientationCameraProps extends FiberFreeCameraProps {
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BABYLON.DeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.DeviceOrientationCamera, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberDeviceOrientationCamera"
    };
}

export class FiberVRDeviceOrientationFreeCameraProps extends FiberDeviceOrientationCameraProps {
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationFreeCamera, FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.VRDeviceOrientationFreeCamera, oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberVRDeviceOrientationFreeCamera"
    };
}

export class FiberVRDeviceOrientationGamepadCameraProps extends FiberVRDeviceOrientationFreeCameraProps {
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationGamepadCamera, FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.VRDeviceOrientationGamepadCamera, oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberVRDeviceOrientationGamepadCamera"
    };
}

export class FiberTouchCameraProps extends FiberFreeCameraProps {
    touchAngularSensibility?: number;
    touchMoveSensibility?: number;
}

export class FiberTouchCameraPropsHandler implements PropsHandler<BABYLON.TouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.TouchCamera, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraProps extends FiberTouchCameraProps {
    gamepadAngularSensibility?: number;
    gamepadMoveSensibility?: number;
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<BABYLON.UniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.UniversalCamera, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberUniversalCamera"
    };
}

export class FiberGamepadCameraProps extends FiberUniversalCameraProps {
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<BABYLON.GamepadCamera, FiberGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.GamepadCamera, oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberGamepadCamera"
    };
}

export class FiberAnaglyphGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphGamepadCamera, FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.AnaglyphGamepadCamera, oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberAnaglyphGamepadCamera"
    };
}

export class FiberStereoscopicGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicGamepadCamera, FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.StereoscopicGamepadCamera, oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberStereoscopicGamepadCamera"
    };
}

export class FiberAnaglyphUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphUniversalCamera, FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.AnaglyphUniversalCamera, oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberAnaglyphUniversalCamera"
    };
}

export class FiberStereoscopicUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicUniversalCamera, FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.StereoscopicUniversalCamera, oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberVirtualJoysticksCameraProps extends FiberFreeCameraProps {
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<BABYLON.VirtualJoysticksCamera, FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.VirtualJoysticksCamera, oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
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
        "isCamera": true,
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberWebVRFreeCameraProps extends FiberFreeCameraProps {
    controllers?: BABYLON.WebVRController[];
    devicePosition?: BABYLON.Vector3;
    deviceRotationQuaternion?: BABYLON.Quaternion;
    deviceScaleFactor?: number;
    onControllerMeshLoadedObservable?: BABYLON.Observable<BABYLON.WebVRController>;
    onControllersAttachedObservable?: BABYLON.Observable<BABYLON.WebVRController[]>;
    onPoseUpdatedFromDeviceObservable?: BABYLON.Observable<any>;
    rawPose?: BABYLON.DevicePose;
    rigParenting?: boolean;
    updateCacheCalled?: any;
    webVROptions?: any;
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<BABYLON.WebVRFreeCamera, FiberWebVRFreeCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.WebVRFreeCamera, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.WebVRController[] property (not coded) BABYLON.WebVRFreeCamera.controllers.
        // BABYLON.WebVRFreeCamera.devicePosition of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.WebVRFreeCamera.onControllerMeshLoadedObservable of type 'BABYLON.Observable<BABYLON.WebVRController>/fn':
        if (oldProps.onControllerMeshLoadedObservable === undefined && oldProps.onControllerMeshLoadedObservable !== newProps.onControllerMeshLoadedObservable) {
            updates.push({
                propertyName: 'onControllerMeshLoadedObservable',
                value: newProps.onControllerMeshLoadedObservable,
                type: 'BABYLON.Observable<BABYLON.WebVRController>'
            });
        }
        // BABYLON.WebVRFreeCamera.onControllersAttachedObservable of type 'BABYLON.Observable<BABYLON.WebVRController[]>/fn':
        if (oldProps.onControllersAttachedObservable === undefined && oldProps.onControllersAttachedObservable !== newProps.onControllersAttachedObservable) {
            updates.push({
                propertyName: 'onControllersAttachedObservable',
                value: newProps.onControllersAttachedObservable,
                type: 'BABYLON.Observable<BABYLON.WebVRController[]>'
            });
        }
        // BABYLON.WebVRFreeCamera.onPoseUpdatedFromDeviceObservable of type 'BABYLON.Observable<any>/fn':
        if (oldProps.onPoseUpdatedFromDeviceObservable === undefined && oldProps.onPoseUpdatedFromDeviceObservable !== newProps.onPoseUpdatedFromDeviceObservable) {
            updates.push({
                propertyName: 'onPoseUpdatedFromDeviceObservable',
                value: newProps.onPoseUpdatedFromDeviceObservable,
                type: 'BABYLON.Observable<any>'
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
        "isCamera": true,
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberAnaglyphFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphFreeCamera, FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.AnaglyphFreeCamera, oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberAnaglyphFreeCamera"
    };
}

export class FiberStereoscopicFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicFreeCamera, FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.StereoscopicFreeCamera, oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isCamera": true,
        "className": "FiberStereoscopicFreeCamera"
    };
}

export class FiberWebXRCameraProps extends FiberFreeCameraProps {
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<BABYLON.WebXRCamera, FiberWebXRCameraProps> {
    getPropertyUpdates(hostInstance: BABYLON.WebXRCamera, oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * WebXR Camera which holds the views for the xrSession
 * 
 * This code has been generated
 */
export class FiberWebXRCamera implements HasPropsHandlers<BABYLON.Camera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BABYLON.Camera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebXRCameraPropsHandler(),
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
        "libraryLocation": "WebXRCamera",
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
        "isCamera": true,
        "className": "FiberWebXRCamera"
    };
}

/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberBox implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberBox"
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
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberSphere implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberSphere"
    };
}

/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberDisc implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberDisc"
    };
}

/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberIcoSphere implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberIcoSphere"
    };
}

/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberRibbon"
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
 * * Example how to set colors and textures on a sliced cylinder : https://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberCylinder implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberCylinder"
    };
}

/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberTorus implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberTorus"
    };
}

/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * 
 * This code has been generated
 */
export class FiberTorusKnot implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberTorusKnot"
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
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberLineSystem"
    };
}

/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberLines"
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
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberDashedLines"
    };
}

/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberExtrudeShape"
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
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberExtrudeShapeCustom"
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
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberLathe"
    };
}

/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberPlane implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberPlane"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberGround"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberTiledGround"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberGroundFromHeightMap"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberPolygon"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberExtrudePolygon"
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
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberTube"
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
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * 
 * This code has been generated
 */
export class FiberPolyhedron implements HasPropsHandlers<BABYLON.Mesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BABYLON.Mesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberPolyhedron"
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
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberDecal"
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
    meshMap?: { [id: string]: BABYLON.AbstractMesh; };
    metadata?: any;
    name?: string;
    needDepthPrePass?: boolean;
    onBind?: (Mesh: BABYLON.AbstractMesh) => void;
    onCompiled?: (effect: BABYLON.Effect) => void;
    onDispose?: () => void;
    onDisposeObservable?: BABYLON.Observable<BABYLON.Material>;
    onError?: (effect: BABYLON.Effect, errors: string) => void;
    pointsCloud?: boolean;
    pointSize?: number;
    releaseVertexArrayObject?: any;
    reservedDataStore?: any;
    separateCullingPass?: boolean;
    sideOrientation?: number;
    state?: string;
    uniqueId?: number;
    wireframe?: boolean;
    zOffset?: number;
}

export class FiberMaterialPropsHandler implements PropsHandler<BABYLON.Material, FiberMaterialProps> {
    getPropertyUpdates(hostInstance: BABYLON.Material, oldProps: FiberMaterialProps, newProps: FiberMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // TODO: type: { [id: string]: BABYLON.AbstractMesh; } property (not coded) BABYLON.Material.meshMap.
        // TODO: type: any property (not coded) BABYLON.Material.metadata.
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
        // BABYLON.Material.onBind of type '(Mesh: BABYLON.AbstractMesh) => void/fn':
        if (oldProps.onBind === undefined && oldProps.onBind !== newProps.onBind) {
            updates.push({
                propertyName: 'onBind',
                value: newProps.onBind,
                type: '(Mesh: BABYLON.AbstractMesh) => void'
            });
        }
        // BABYLON.Material.onCompiled of type '(effect: BABYLON.Effect) => void/fn':
        if (oldProps.onCompiled === undefined && oldProps.onCompiled !== newProps.onCompiled) {
            updates.push({
                propertyName: 'onCompiled',
                value: newProps.onCompiled,
                type: '(effect: BABYLON.Effect) => void'
            });
        }
        // BABYLON.Material.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // BABYLON.Material.onDisposeObservable of type 'BABYLON.Observable<BABYLON.Material>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BABYLON.Observable<BABYLON.Material>'
            });
        }
        // BABYLON.Material.onError of type '(effect: BABYLON.Effect, errors: string) => void/fn':
        if (oldProps.onError === undefined && oldProps.onError !== newProps.onError) {
            updates.push({
                propertyName: 'onError',
                value: newProps.onError,
                type: '(effect: BABYLON.Effect, errors: string) => void'
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
        // TODO: type: any property (not coded) BABYLON.Material.releaseVertexArrayObject.
        // TODO: type: any property (not coded) BABYLON.Material.reservedDataStore.
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
        "isMaterial": true,
        "className": "FiberMaterial"
    };
}

export class FiberMultiMaterialProps extends FiberMaterialProps {
    subMaterials?: BABYLON.Material[];
}

export class FiberMultiMaterialPropsHandler implements PropsHandler<BABYLON.MultiMaterial, FiberMultiMaterialProps> {
    getPropertyUpdates(hostInstance: BABYLON.MultiMaterial, oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isMaterial": true,
        "className": "FiberMultiMaterial"
    };
}

export class FiberPushMaterialProps extends FiberMaterialProps {
    allowShaderHotSwapping?: boolean;
}

export class FiberPushMaterialPropsHandler implements PropsHandler<BABYLON.PushMaterial, FiberPushMaterialProps> {
    getPropertyUpdates(hostInstance: BABYLON.PushMaterial, oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.PushMaterial.allowShaderHotSwapping of type 'boolean':
        if (oldProps.allowShaderHotSwapping !== newProps.allowShaderHotSwapping) {
            updates.push({
                propertyName: 'allowShaderHotSwapping',
                value: newProps.allowShaderHotSwapping,
                type: 'boolean'
            });
        }
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
        "isMaterial": true,
        "className": "FiberPushMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.StandardMaterial, oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.StandardMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BABYLON.StandardMaterial.ambientColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.StandardMaterial.diffuseColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.StandardMaterial.emissiveColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.StandardMaterial.specularColor of BABYLON.Color3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberStandardMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.BackgroundMaterial, oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.BackgroundMaterial.primaryColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.BackgroundMaterial.sceneCenter of BABYLON.Vector3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberBackgroundMaterial"
    };
}

export class FiberPBRBaseMaterialProps extends FiberPushMaterialProps {
    transparencyMode?: number;
    useLogarithmicDepth?: boolean;
}

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<BABYLON.PBRBaseMaterial, FiberPBRBaseMaterialProps> {
    getPropertyUpdates(hostInstance: BABYLON.PBRBaseMaterial, oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isMaterial": true,
        "className": "FiberPBRBaseMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.PBRBaseSimpleMaterial, oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.PBRBaseSimpleMaterial.emissiveColor of BABYLON.Color3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberPBRBaseSimpleMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.PBRMetallicRoughnessMaterial, oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRMetallicRoughnessMaterial.baseColor of BABYLON.Color3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberPBRMetallicRoughnessMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.PBRSpecularGlossinessMaterial, oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRSpecularGlossinessMaterial.diffuseColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.PBRSpecularGlossinessMaterial.specularColor of BABYLON.Color3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberPBRSpecularGlossinessMaterial"
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
    getPropertyUpdates(hostInstance: BABYLON.PBRMaterial, oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.PBRMaterial.albedoColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.PBRMaterial.ambientColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.PBRMaterial.emissiveColor of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.PBRMaterial.reflectionColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.reflectionColor && (!oldProps.reflectionColor || !oldProps.reflectionColor.equals(newProps.reflectionColor))) {
            updates.push({
                propertyName: 'reflectionColor',
                value: newProps.reflectionColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.PBRMaterial.reflectionTexture.
        // BABYLON.PBRMaterial.reflectivityColor of BABYLON.Color3 uses object equals to find diffs:
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
        "isMaterial": true,
        "className": "FiberPBRMaterial"
    };
}

export class FiberShaderMaterialProps extends FiberMaterialProps {
    setArray2?: any;
    setArray3?: any;
    setColor3?: any;
    setColor3Array?: any;
    setColor4?: any;
    setFloat?: any;
    setFloats?: any;
    setInt?: any;
    setMatrix?: any;
    setMatrix2x2?: any;
    setMatrix3x3?: any;
    setTexture?: any;
    setTextureArray?: any;
    setVector2?: any;
    setVector3?: any;
    setVector4?: any;
}

export class FiberShaderMaterialPropsHandler implements PropsHandler<BABYLON.ShaderMaterial, FiberShaderMaterialProps> {
    getPropertyUpdates(hostInstance: BABYLON.ShaderMaterial, oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.ShaderMaterial.setArray2 of type '(name?: string, value?: number[])':
        if (oldProps.setArray2 !== newProps.setArray2) {
            updates.push({
                propertyName: 'setArray2',
                value: newProps.setArray2,
                type: '(name?: string, value?: number[])'
            });
        }
        // BABYLON.ShaderMaterial.setArray3 of type '(name?: string, value?: number[])':
        if (oldProps.setArray3 !== newProps.setArray3) {
            updates.push({
                propertyName: 'setArray3',
                value: newProps.setArray3,
                type: '(name?: string, value?: number[])'
            });
        }
        // BABYLON.ShaderMaterial.setColor3 of type '(name?: string, value?: BABYLON.Color3)':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BABYLON.Color3)'
            });
        }
        // BABYLON.ShaderMaterial.setColor3Array of type '(name?: string, value?: BABYLON.Color3[])':
        if (oldProps.setColor3Array !== newProps.setColor3Array) {
            updates.push({
                propertyName: 'setColor3Array',
                value: newProps.setColor3Array,
                type: '(name?: string, value?: BABYLON.Color3[])'
            });
        }
        // BABYLON.ShaderMaterial.setColor4 of type '(name?: string, value?: BABYLON.Color4)':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BABYLON.Color4)'
            });
        }
        // BABYLON.ShaderMaterial.setFloat of type '(name?: string, value?: number)':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number)'
            });
        }
        // BABYLON.ShaderMaterial.setFloats of type '(name?: string, value?: number[])':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[])'
            });
        }
        // BABYLON.ShaderMaterial.setInt of type '(name?: string, value?: number)':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number)'
            });
        }
        // BABYLON.ShaderMaterial.setMatrix of type '(name?: string, value?: BABYLON.Matrix)':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BABYLON.Matrix)'
            });
        }
        // BABYLON.ShaderMaterial.setMatrix2x2 of type '(name?: string, value?: Float32Array)':
        if (oldProps.setMatrix2x2 !== newProps.setMatrix2x2) {
            updates.push({
                propertyName: 'setMatrix2x2',
                value: newProps.setMatrix2x2,
                type: '(name?: string, value?: Float32Array)'
            });
        }
        // BABYLON.ShaderMaterial.setMatrix3x3 of type '(name?: string, value?: Float32Array)':
        if (oldProps.setMatrix3x3 !== newProps.setMatrix3x3) {
            updates.push({
                propertyName: 'setMatrix3x3',
                value: newProps.setMatrix3x3,
                type: '(name?: string, value?: Float32Array)'
            });
        }
        // BABYLON.ShaderMaterial.setTexture of type '(name?: string, texture?: BABYLON.Texture)':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BABYLON.Texture)'
            });
        }
        // BABYLON.ShaderMaterial.setTextureArray of type '(name?: string, textures?: BABYLON.Texture[])':
        if (oldProps.setTextureArray !== newProps.setTextureArray) {
            updates.push({
                propertyName: 'setTextureArray',
                value: newProps.setTextureArray,
                type: '(name?: string, textures?: BABYLON.Texture[])'
            });
        }
        // BABYLON.ShaderMaterial.setVector2 of type '(name?: string, value?: BABYLON.Vector2)':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BABYLON.Vector2)'
            });
        }
        // BABYLON.ShaderMaterial.setVector3 of type '(name?: string, value?: BABYLON.Vector3)':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BABYLON.Vector3)'
            });
        }
        // BABYLON.ShaderMaterial.setVector4 of type '(name?: string, value?: BABYLON.Vector4)':
        if (oldProps.setVector4 !== newProps.setVector4) {
            updates.push({
                propertyName: 'setVector4',
                value: newProps.setVector4,
                type: '(name?: string, value?: BABYLON.Vector4)'
            });
        }
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
        "isMaterial": true,
        "className": "FiberShaderMaterial"
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
    setEnabled?: any;
}

export class FiberLightPropsHandler implements PropsHandler<BABYLON.Light, FiberLightProps> {
    getPropertyUpdates(hostInstance: BABYLON.Light, oldProps: FiberLightProps, newProps: FiberLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.Light.diffuse of BABYLON.Color3 uses object equals to find diffs:
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
        // BABYLON.Light.specular of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.specular && (!oldProps.specular || !oldProps.specular.equals(newProps.specular))) {
            updates.push({
                propertyName: 'specular',
                value: newProps.specular,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.Light.setEnabled of type '(value?: boolean)':
        if (oldProps.setEnabled !== newProps.setEnabled) {
            updates.push({
                propertyName: 'setEnabled',
                value: newProps.setEnabled,
                type: '(value?: boolean)'
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
    setDirectionToTarget?: any;
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<BABYLON.HemisphericLight, FiberHemisphericLightProps> {
    getPropertyUpdates(hostInstance: BABYLON.HemisphericLight, oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.HemisphericLight.direction of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.HemisphericLight.groundColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.groundColor && (!oldProps.groundColor || !oldProps.groundColor.equals(newProps.groundColor))) {
            updates.push({
                propertyName: 'groundColor',
                value: newProps.groundColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.HemisphericLight.setDirectionToTarget of type '(target?: BABYLON.Vector3)':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BABYLON.Vector3)'
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
    setDirectionToTarget?: any;
    setShadowProjectionMatrix?: any;
}

export class FiberShadowLightPropsHandler implements PropsHandler<BABYLON.ShadowLight, FiberShadowLightProps> {
    getPropertyUpdates(hostInstance: BABYLON.ShadowLight, oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: (viewMatrix: BABYLON.Matrix, renderList: BABYLON.AbstractMesh[], result: BABYLON.Matrix) => void property (not coded) BABYLON.ShadowLight.customProjectionMatrixBuilder.
        // BABYLON.ShadowLight.direction of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.position of BABYLON.Vector3 uses object equals to find diffs:
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
        // BABYLON.ShadowLight.transformedDirection of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.transformedDirection && (!oldProps.transformedDirection || !oldProps.transformedDirection.equals(newProps.transformedDirection))) {
            updates.push({
                propertyName: 'transformedDirection',
                value: newProps.transformedDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.transformedPosition of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.transformedPosition && (!oldProps.transformedPosition || !oldProps.transformedPosition.equals(newProps.transformedPosition))) {
            updates.push({
                propertyName: 'transformedPosition',
                value: newProps.transformedPosition,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.ShadowLight.setDirectionToTarget of type '(target?: BABYLON.Vector3)':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BABYLON.Vector3)'
            });
        }
        // BABYLON.ShadowLight.setShadowProjectionMatrix of type '(matrix?: BABYLON.Matrix, viewMatrix?: BABYLON.Matrix, renderList?: BABYLON.AbstractMesh[])':
        if (oldProps.setShadowProjectionMatrix !== newProps.setShadowProjectionMatrix) {
            updates.push({
                propertyName: 'setShadowProjectionMatrix',
                value: newProps.setShadowProjectionMatrix,
                type: '(matrix?: BABYLON.Matrix, viewMatrix?: BABYLON.Matrix, renderList?: BABYLON.AbstractMesh[])'
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
        "className": "FiberShadowLight",
        "isShadowLight": true
    };
}

export class FiberDirectionalLightProps extends FiberShadowLightProps {
    autoUpdateExtends?: boolean;
    shadowFrustumSize?: number;
    shadowOrthoScale?: number;
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<BABYLON.DirectionalLight, FiberDirectionalLightProps> {
    getPropertyUpdates(hostInstance: BABYLON.DirectionalLight, oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "className": "FiberDirectionalLight",
        "isShadowLight": true
    };
}

export class FiberPointLightProps extends FiberShadowLightProps {
    direction?: BABYLON.Vector3;
    shadowAngle?: number;
}

export class FiberPointLightPropsHandler implements PropsHandler<BABYLON.PointLight, FiberPointLightProps> {
    getPropertyUpdates(hostInstance: BABYLON.PointLight, oldProps: FiberPointLightProps, newProps: FiberPointLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.PointLight.direction of BABYLON.Vector3 uses object equals to find diffs:
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
        "className": "FiberPointLight",
        "isShadowLight": true
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
    getPropertyUpdates(hostInstance: BABYLON.SpotLight, oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // BABYLON.SpotLight.projectionTextureUpDirection of BABYLON.Vector3 uses object equals to find diffs:
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
        "className": "FiberSpotLight",
        "isShadowLight": true
    };
}

export class FiberControlProps {
    alpha?: number;
    clipChildren?: boolean;
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
    isHighlighted?: boolean;
    isHitTestVisible?: boolean;
    isPointerBlocker?: boolean;
    isVisible?: boolean;
    left?: string | number;
    linkOffsetX?: string | number;
    linkOffsetY?: string | number;
    metadata?: any;
    name?: string;
    notRenderable?: boolean;
    onAfterDrawObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    onBeforeDrawObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    onDirtyObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    onPointerClickObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>;
    onPointerDownObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>;
    onPointerEnterObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    onPointerMoveObservable?: BABYLON.Observable<BABYLON.Vector2>;
    onPointerOutObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    onPointerUpObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>;
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
    uniqueId?: number;
    verticalAlignment?: number;
    width?: string | number;
    zIndex?: number;
}

export class FiberControlPropsHandler implements PropsHandler<GUI.Control, FiberControlProps> {
    getPropertyUpdates(hostInstance: GUI.Control, oldProps: FiberControlProps, newProps: FiberControlProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.Control.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // GUI.Control.clipChildren of type 'boolean':
        if (oldProps.clipChildren !== newProps.clipChildren) {
            updates.push({
                propertyName: 'clipChildren',
                value: newProps.clipChildren,
                type: 'boolean'
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
        // GUI.Control.fontSize of type 'string | number':
        if (oldProps.fontSize !== newProps.fontSize) {
            updates.push({
                propertyName: 'fontSize',
                value: newProps.fontSize,
                type: 'string | number'
            });
        }
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
        // GUI.Control.height of type 'string | number':
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
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
        // GUI.Control.isHighlighted of type 'boolean':
        if (oldProps.isHighlighted !== newProps.isHighlighted) {
            updates.push({
                propertyName: 'isHighlighted',
                value: newProps.isHighlighted,
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
        // GUI.Control.left of type 'string | number':
        if (oldProps.left !== newProps.left) {
            updates.push({
                propertyName: 'left',
                value: newProps.left,
                type: 'string | number'
            });
        }
        // GUI.Control.linkOffsetX of type 'string | number':
        if (oldProps.linkOffsetX !== newProps.linkOffsetX) {
            updates.push({
                propertyName: 'linkOffsetX',
                value: newProps.linkOffsetX,
                type: 'string | number'
            });
        }
        // GUI.Control.linkOffsetY of type 'string | number':
        if (oldProps.linkOffsetY !== newProps.linkOffsetY) {
            updates.push({
                propertyName: 'linkOffsetY',
                value: newProps.linkOffsetY,
                type: 'string | number'
            });
        }
        // TODO: type: any property (not coded) GUI.Control.metadata.
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
        // GUI.Control.onAfterDrawObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onAfterDrawObservable === undefined && oldProps.onAfterDrawObservable !== newProps.onAfterDrawObservable) {
            updates.push({
                propertyName: 'onAfterDrawObservable',
                value: newProps.onAfterDrawObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.Control.onBeforeDrawObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onBeforeDrawObservable === undefined && oldProps.onBeforeDrawObservable !== newProps.onBeforeDrawObservable) {
            updates.push({
                propertyName: 'onBeforeDrawObservable',
                value: newProps.onBeforeDrawObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.Control.onDirtyObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onDirtyObservable === undefined && oldProps.onDirtyObservable !== newProps.onDirtyObservable) {
            updates.push({
                propertyName: 'onDirtyObservable',
                value: newProps.onDirtyObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.Control.onPointerClickObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>/fn':
        if (oldProps.onPointerClickObservable === undefined && oldProps.onPointerClickObservable !== newProps.onPointerClickObservable) {
            updates.push({
                propertyName: 'onPointerClickObservable',
                value: newProps.onPointerClickObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>'
            });
        }
        // GUI.Control.onPointerDownObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>/fn':
        if (oldProps.onPointerDownObservable === undefined && oldProps.onPointerDownObservable !== newProps.onPointerDownObservable) {
            updates.push({
                propertyName: 'onPointerDownObservable',
                value: newProps.onPointerDownObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>'
            });
        }
        // GUI.Control.onPointerEnterObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onPointerEnterObservable === undefined && oldProps.onPointerEnterObservable !== newProps.onPointerEnterObservable) {
            updates.push({
                propertyName: 'onPointerEnterObservable',
                value: newProps.onPointerEnterObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.Control.onPointerMoveObservable of type 'BABYLON.Observable<BABYLON.Vector2>/fn':
        if (oldProps.onPointerMoveObservable === undefined && oldProps.onPointerMoveObservable !== newProps.onPointerMoveObservable) {
            updates.push({
                propertyName: 'onPointerMoveObservable',
                value: newProps.onPointerMoveObservable,
                type: 'BABYLON.Observable<BABYLON.Vector2>'
            });
        }
        // GUI.Control.onPointerOutObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onPointerOutObservable === undefined && oldProps.onPointerOutObservable !== newProps.onPointerOutObservable) {
            updates.push({
                propertyName: 'onPointerOutObservable',
                value: newProps.onPointerOutObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.Control.onPointerUpObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>/fn':
        if (oldProps.onPointerUpObservable === undefined && oldProps.onPointerUpObservable !== newProps.onPointerUpObservable) {
            updates.push({
                propertyName: 'onPointerUpObservable',
                value: newProps.onPointerUpObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>'
            });
        }
        // GUI.Control.paddingBottom of type 'string | number':
        if (oldProps.paddingBottom !== newProps.paddingBottom) {
            updates.push({
                propertyName: 'paddingBottom',
                value: newProps.paddingBottom,
                type: 'string | number'
            });
        }
        // GUI.Control.paddingLeft of type 'string | number':
        if (oldProps.paddingLeft !== newProps.paddingLeft) {
            updates.push({
                propertyName: 'paddingLeft',
                value: newProps.paddingLeft,
                type: 'string | number'
            });
        }
        // GUI.Control.paddingRight of type 'string | number':
        if (oldProps.paddingRight !== newProps.paddingRight) {
            updates.push({
                propertyName: 'paddingRight',
                value: newProps.paddingRight,
                type: 'string | number'
            });
        }
        // GUI.Control.paddingTop of type 'string | number':
        if (oldProps.paddingTop !== newProps.paddingTop) {
            updates.push({
                propertyName: 'paddingTop',
                value: newProps.paddingTop,
                type: 'string | number'
            });
        }
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
        // GUI.Control.top of type 'string | number':
        if (oldProps.top !== newProps.top) {
            updates.push({
                propertyName: 'top',
                value: newProps.top,
                type: 'string | number'
            });
        }
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
        // GUI.Control.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
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
        // GUI.Control.width of type 'string | number':
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
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
        "isGUI2DControl": true,
        "className": "FiberControl"
    };
}

export class FiberCheckboxProps extends FiberControlProps {
    background?: string;
    checkSizeRatio?: number;
    isChecked?: boolean;
    name?: string;
    onIsCheckedChangedObservable?: BABYLON.Observable<boolean>;
    thickness?: number;
}

export class FiberCheckboxPropsHandler implements PropsHandler<GUI.Checkbox, FiberCheckboxProps> {
    getPropertyUpdates(hostInstance: GUI.Checkbox, oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.Checkbox.onIsCheckedChangedObservable of type 'BABYLON.Observable<boolean>/fn':
        if (oldProps.onIsCheckedChangedObservable === undefined && oldProps.onIsCheckedChangedObservable !== newProps.onIsCheckedChangedObservable) {
            updates.push({
                propertyName: 'onIsCheckedChangedObservable',
                value: newProps.onIsCheckedChangedObservable,
                type: 'BABYLON.Observable<boolean>'
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
        "isGUI2DControl": true,
        "className": "FiberCheckbox"
    };
}

export class FiberColorPickerProps extends FiberControlProps {
    height?: string | number;
    name?: string;
    onValueChangedObservable?: BABYLON.Observable<BABYLON.Color3>;
    size?: string | number;
    value?: BABYLON.Color3;
    width?: string | number;
}

export class FiberColorPickerPropsHandler implements PropsHandler<GUI.ColorPicker, FiberColorPickerProps> {
    getPropertyUpdates(hostInstance: GUI.ColorPicker, oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.ColorPicker.height of type 'string | number':
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
        // GUI.ColorPicker.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.ColorPicker.onValueChangedObservable of type 'BABYLON.Observable<BABYLON.Color3>/fn':
        if (oldProps.onValueChangedObservable === undefined && oldProps.onValueChangedObservable !== newProps.onValueChangedObservable) {
            updates.push({
                propertyName: 'onValueChangedObservable',
                value: newProps.onValueChangedObservable,
                type: 'BABYLON.Observable<BABYLON.Color3>'
            });
        }
        // GUI.ColorPicker.size of type 'string | number':
        if (oldProps.size !== newProps.size) {
            updates.push({
                propertyName: 'size',
                value: newProps.size,
                type: 'string | number'
            });
        }
        // TODO: type: BABYLON.Color3 property (not coded) GUI.ColorPicker.value.
        // GUI.ColorPicker.width of type 'string | number':
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
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
        "isGUI2DControl": true,
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
    getPropertyUpdates(hostInstance: GUI.Container, oldProps: FiberContainerProps, newProps: FiberContainerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
        "className": "FiberContainer"
    };
}

export class FiberEllipseProps extends FiberContainerProps {
    name?: string;
    thickness?: number;
}

export class FiberEllipsePropsHandler implements PropsHandler<GUI.Ellipse, FiberEllipseProps> {
    getPropertyUpdates(hostInstance: GUI.Ellipse, oldProps: FiberEllipseProps, newProps: FiberEllipseProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
        "className": "FiberEllipse"
    };
}

export class FiberGridProps extends FiberContainerProps {
    name?: string;
    setColumnDefinition?: any;
    setRowDefinition?: any;
}

export class FiberGridPropsHandler implements PropsHandler<GUI.Grid, FiberGridProps> {
    getPropertyUpdates(hostInstance: GUI.Grid, oldProps: FiberGridProps, newProps: FiberGridProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.Grid.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.Grid.setColumnDefinition of type '(index?: number, width?: number, isPixel?: boolean)':
        if (oldProps.setColumnDefinition !== newProps.setColumnDefinition) {
            updates.push({
                propertyName: 'setColumnDefinition',
                value: newProps.setColumnDefinition,
                type: '(index?: number, width?: number, isPixel?: boolean)'
            });
        }
        // GUI.Grid.setRowDefinition of type '(index?: number, height?: number, isPixel?: boolean)':
        if (oldProps.setRowDefinition !== newProps.setRowDefinition) {
            updates.push({
                propertyName: 'setRowDefinition',
                value: newProps.setRowDefinition,
                type: '(index?: number, height?: number, isPixel?: boolean)'
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
        "isGUI2DControl": true,
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
    getPropertyUpdates(hostInstance: GUI.StackPanel, oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.StackPanel.height of type 'string | number':
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
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
        // GUI.StackPanel.width of type 'string | number':
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
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
        "isGUI2DControl": true,
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
    onKeyPressObservable?: BABYLON.Observable<string>;
    selectedShiftThickness?: number;
    shiftButtonColor?: string;
    shiftState?: number;
}

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<GUI.VirtualKeyboard, FiberVirtualKeyboardProps> {
    getPropertyUpdates(hostInstance: GUI.VirtualKeyboard, oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.VirtualKeyboard.onKeyPressObservable of type 'BABYLON.Observable<string>/fn':
        if (oldProps.onKeyPressObservable === undefined && oldProps.onKeyPressObservable !== newProps.onKeyPressObservable) {
            updates.push({
                propertyName: 'onKeyPressObservable',
                value: newProps.onKeyPressObservable,
                type: 'BABYLON.Observable<string>'
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
        "isGUI2DControl": true,
        "className": "FiberVirtualKeyboard"
    };
}

export class FiberRectangleProps extends FiberContainerProps {
    cornerRadius?: number;
    name?: string;
    thickness?: number;
}

export class FiberRectanglePropsHandler implements PropsHandler<GUI.Rectangle, FiberRectangleProps> {
    getPropertyUpdates(hostInstance: GUI.Rectangle, oldProps: FiberRectangleProps, newProps: FiberRectangleProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
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
    getPropertyUpdates(hostInstance: GUI.Button, oldProps: FiberButtonProps, newProps: FiberButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
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
    setHeaderName?: any;
}

export class FiberSelectionPanelPropsHandler implements PropsHandler<GUI.SelectionPanel, FiberSelectionPanelProps> {
    getPropertyUpdates(hostInstance: GUI.SelectionPanel, oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.SelectionPanel.setHeaderName of type '(label?: string, groupNb?: number)':
        if (oldProps.setHeaderName !== newProps.setHeaderName) {
            updates.push({
                propertyName: 'setHeaderName',
                value: newProps.setHeaderName,
                type: '(label?: string, groupNb?: number)'
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
        "isGUI2DControl": true,
        "className": "FiberSelectionPanel"
    };
}

export class FiberScrollViewerProps extends FiberRectangleProps {
    barBackground?: string;
    barBorderColor?: string;
    barColor?: string;
    name?: string;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingTop?: string | number;
}

export class FiberScrollViewerPropsHandler implements PropsHandler<GUI.ScrollViewer, FiberScrollViewerProps> {
    getPropertyUpdates(hostInstance: GUI.ScrollViewer, oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.ScrollViewer.barBackground of type 'string':
        if (oldProps.barBackground !== newProps.barBackground) {
            updates.push({
                propertyName: 'barBackground',
                value: newProps.barBackground,
                type: 'string'
            });
        }
        // GUI.ScrollViewer.barBorderColor of type 'string':
        if (oldProps.barBorderColor !== newProps.barBorderColor) {
            updates.push({
                propertyName: 'barBorderColor',
                value: newProps.barBorderColor,
                type: 'string'
            });
        }
        // GUI.ScrollViewer.barColor of type 'string':
        if (oldProps.barColor !== newProps.barColor) {
            updates.push({
                propertyName: 'barColor',
                value: newProps.barColor,
                type: 'string'
            });
        }
        // GUI.ScrollViewer.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.ScrollViewer.paddingBottom of type 'string | number':
        if (oldProps.paddingBottom !== newProps.paddingBottom) {
            updates.push({
                propertyName: 'paddingBottom',
                value: newProps.paddingBottom,
                type: 'string | number'
            });
        }
        // GUI.ScrollViewer.paddingLeft of type 'string | number':
        if (oldProps.paddingLeft !== newProps.paddingLeft) {
            updates.push({
                propertyName: 'paddingLeft',
                value: newProps.paddingLeft,
                type: 'string | number'
            });
        }
        // GUI.ScrollViewer.paddingRight of type 'string | number':
        if (oldProps.paddingRight !== newProps.paddingRight) {
            updates.push({
                propertyName: 'paddingRight',
                value: newProps.paddingRight,
                type: 'string | number'
            });
        }
        // GUI.ScrollViewer.paddingTop of type 'string | number':
        if (oldProps.paddingTop !== newProps.paddingTop) {
            updates.push({
                propertyName: 'paddingTop',
                value: newProps.paddingTop,
                type: 'string | number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to hold a viewer window and sliders in a grid
 * 
 * This code has been generated
 */
export class FiberScrollViewer implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollViewerPropsHandler(),
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
        "libraryLocation": "ScrollViewer",
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
        "isGUI2DControl": true,
        "className": "FiberScrollViewer"
    };
}

export class FiberImageProps extends FiberControlProps {
    autoScale?: boolean;
    cellHeight?: number;
    cellId?: number;
    cellWidth?: number;
    domImage?: HTMLImageElement;
    name?: string;
    onImageLoadedObservable?: BABYLON.Observable<BABYLON.GUI.Image>;
    source?: string;
    sourceHeight?: number;
    sourceLeft?: number;
    sourceTop?: number;
    sourceWidth?: number;
    stretch?: number;
}

export class FiberImagePropsHandler implements PropsHandler<GUI.Image, FiberImageProps> {
    getPropertyUpdates(hostInstance: GUI.Image, oldProps: FiberImageProps, newProps: FiberImageProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.Image.onImageLoadedObservable of type 'BABYLON.Observable<BABYLON.GUI.Image>/fn':
        if (oldProps.onImageLoadedObservable === undefined && oldProps.onImageLoadedObservable !== newProps.onImageLoadedObservable) {
            updates.push({
                propertyName: 'onImageLoadedObservable',
                value: newProps.onImageLoadedObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Image>'
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
        "isGUI2DControl": true,
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
    highligherOpacity?: number;
    highlightedText?: string;
    margin?: string;
    maxWidth?: string | number;
    name?: string;
    onBeforeKeyAddObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onBlurObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onFocusObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onFocusSelectAll?: boolean;
    onTextChangedObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onTextCopyObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onTextCutObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onTextHighlightObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    onTextPasteObservable?: BABYLON.Observable<BABYLON.GUI.InputText>;
    placeholderColor?: string;
    placeholderText?: string;
    promptMessage?: string;
    text?: string;
    textHighlightColor?: string;
    thickness?: number;
    width?: string | number;
}

export class FiberInputTextPropsHandler implements PropsHandler<GUI.InputText, FiberInputTextProps> {
    getPropertyUpdates(hostInstance: GUI.InputText, oldProps: FiberInputTextProps, newProps: FiberInputTextProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.InputText.highligherOpacity of type 'number':
        if (oldProps.highligherOpacity !== newProps.highligherOpacity) {
            updates.push({
                propertyName: 'highligherOpacity',
                value: newProps.highligherOpacity,
                type: 'number'
            });
        }
        // GUI.InputText.highlightedText of type 'string':
        if (oldProps.highlightedText !== newProps.highlightedText) {
            updates.push({
                propertyName: 'highlightedText',
                value: newProps.highlightedText,
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
        // GUI.InputText.maxWidth of type 'string | number':
        if (oldProps.maxWidth !== newProps.maxWidth) {
            updates.push({
                propertyName: 'maxWidth',
                value: newProps.maxWidth,
                type: 'string | number'
            });
        }
        // GUI.InputText.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.InputText.onBeforeKeyAddObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onBeforeKeyAddObservable === undefined && oldProps.onBeforeKeyAddObservable !== newProps.onBeforeKeyAddObservable) {
            updates.push({
                propertyName: 'onBeforeKeyAddObservable',
                value: newProps.onBeforeKeyAddObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onBlurObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onBlurObservable === undefined && oldProps.onBlurObservable !== newProps.onBlurObservable) {
            updates.push({
                propertyName: 'onBlurObservable',
                value: newProps.onBlurObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onFocusObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onFocusObservable === undefined && oldProps.onFocusObservable !== newProps.onFocusObservable) {
            updates.push({
                propertyName: 'onFocusObservable',
                value: newProps.onFocusObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onFocusSelectAll of type 'boolean/fn':
        if (oldProps.onFocusSelectAll === undefined && oldProps.onFocusSelectAll !== newProps.onFocusSelectAll) {
            updates.push({
                propertyName: 'onFocusSelectAll',
                value: newProps.onFocusSelectAll,
                type: 'boolean'
            });
        }
        // GUI.InputText.onTextChangedObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onTextChangedObservable === undefined && oldProps.onTextChangedObservable !== newProps.onTextChangedObservable) {
            updates.push({
                propertyName: 'onTextChangedObservable',
                value: newProps.onTextChangedObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onTextCopyObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onTextCopyObservable === undefined && oldProps.onTextCopyObservable !== newProps.onTextCopyObservable) {
            updates.push({
                propertyName: 'onTextCopyObservable',
                value: newProps.onTextCopyObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onTextCutObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onTextCutObservable === undefined && oldProps.onTextCutObservable !== newProps.onTextCutObservable) {
            updates.push({
                propertyName: 'onTextCutObservable',
                value: newProps.onTextCutObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onTextHighlightObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onTextHighlightObservable === undefined && oldProps.onTextHighlightObservable !== newProps.onTextHighlightObservable) {
            updates.push({
                propertyName: 'onTextHighlightObservable',
                value: newProps.onTextHighlightObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
            });
        }
        // GUI.InputText.onTextPasteObservable of type 'BABYLON.Observable<BABYLON.GUI.InputText>/fn':
        if (oldProps.onTextPasteObservable === undefined && oldProps.onTextPasteObservable !== newProps.onTextPasteObservable) {
            updates.push({
                propertyName: 'onTextPasteObservable',
                value: newProps.onTextPasteObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.InputText>'
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
        // GUI.InputText.textHighlightColor of type 'string':
        if (oldProps.textHighlightColor !== newProps.textHighlightColor) {
            updates.push({
                propertyName: 'textHighlightColor',
                value: newProps.textHighlightColor,
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
        // GUI.InputText.width of type 'string | number':
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
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
        "isGUI2DControl": true,
        "className": "FiberInputText"
    };
}

export class FiberInputPasswordProps extends FiberInputTextProps {
}

export class FiberInputPasswordPropsHandler implements PropsHandler<GUI.InputPassword, FiberInputPasswordProps> {
    getPropertyUpdates(hostInstance: GUI.InputPassword, oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
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
    getPropertyUpdates(hostInstance: GUI.Line, oldProps: FiberLineProps, newProps: FiberLineProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.Line.connectedControl of GUIBABYLON.GUI.Control sets once:
        if (newProps.connectedControl && (!oldProps.connectedControl)) {
            updates.push({
                propertyName: 'connectedControl',
                value: newProps.connectedControl,
                type: 'BABYLON.GUI.Control'
            });
        }
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
        // GUI.Line.x1 of type 'string | number':
        if (oldProps.x1 !== newProps.x1) {
            updates.push({
                propertyName: 'x1',
                value: newProps.x1,
                type: 'string | number'
            });
        }
        // GUI.Line.x2 of type 'string | number':
        if (oldProps.x2 !== newProps.x2) {
            updates.push({
                propertyName: 'x2',
                value: newProps.x2,
                type: 'string | number'
            });
        }
        // GUI.Line.y1 of type 'string | number':
        if (oldProps.y1 !== newProps.y1) {
            updates.push({
                propertyName: 'y1',
                value: newProps.y1,
                type: 'string | number'
            });
        }
        // GUI.Line.y2 of type 'string | number':
        if (oldProps.y2 !== newProps.y2) {
            updates.push({
                propertyName: 'y2',
                value: newProps.y2,
                type: 'string | number'
            });
        }
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
        "isGUI2DControl": true,
        "className": "FiberLine"
    };
}

export class FiberMultiLineProps extends FiberControlProps {
    dash?: number[];
    horizontalAlignment?: number;
    lineWidth?: number;
    name?: string;
    onPointUpdate?: () => void;
    verticalAlignment?: number;
}

export class FiberMultiLinePropsHandler implements PropsHandler<GUI.MultiLine, FiberMultiLineProps> {
    getPropertyUpdates(hostInstance: GUI.MultiLine, oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.MultiLine.onPointUpdate of type '() => void/fn':
        if (oldProps.onPointUpdate === undefined && oldProps.onPointUpdate !== newProps.onPointUpdate) {
            updates.push({
                propertyName: 'onPointUpdate',
                value: newProps.onPointUpdate,
                type: '() => void'
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
        "isGUI2DControl": true,
        "className": "FiberMultiLine"
    };
}

export class FiberRadioButtonProps extends FiberControlProps {
    background?: string;
    checkSizeRatio?: number;
    group?: string;
    isChecked?: boolean;
    name?: string;
    onIsCheckedChangedObservable?: BABYLON.Observable<boolean>;
    thickness?: number;
}

export class FiberRadioButtonPropsHandler implements PropsHandler<GUI.RadioButton, FiberRadioButtonProps> {
    getPropertyUpdates(hostInstance: GUI.RadioButton, oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.RadioButton.onIsCheckedChangedObservable of type 'BABYLON.Observable<boolean>/fn':
        if (oldProps.onIsCheckedChangedObservable === undefined && oldProps.onIsCheckedChangedObservable !== newProps.onIsCheckedChangedObservable) {
            updates.push({
                propertyName: 'onIsCheckedChangedObservable',
                value: newProps.onIsCheckedChangedObservable,
                type: 'BABYLON.Observable<boolean>'
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
        "isGUI2DControl": true,
        "className": "FiberRadioButton"
    };
}

export class FiberTextBlockProps extends FiberControlProps {
    lineSpacing?: string | number;
    name?: string;
    onLinesReadyObservable?: BABYLON.Observable<BABYLON.GUI.TextBlock>;
    onTextChangedObservable?: BABYLON.Observable<BABYLON.GUI.TextBlock>;
    outlineColor?: string;
    outlineWidth?: number;
    resizeToFit?: boolean;
    text?: string;
    textHorizontalAlignment?: number;
    textVerticalAlignment?: number;
    textWrapping?: boolean | BABYLON.GUI.TextWrapping;
}

export class FiberTextBlockPropsHandler implements PropsHandler<GUI.TextBlock, FiberTextBlockProps> {
    getPropertyUpdates(hostInstance: GUI.TextBlock, oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.TextBlock.lineSpacing of type 'string | number':
        if (oldProps.lineSpacing !== newProps.lineSpacing) {
            updates.push({
                propertyName: 'lineSpacing',
                value: newProps.lineSpacing,
                type: 'string | number'
            });
        }
        // GUI.TextBlock.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.TextBlock.onLinesReadyObservable of type 'BABYLON.Observable<BABYLON.GUI.TextBlock>/fn':
        if (oldProps.onLinesReadyObservable === undefined && oldProps.onLinesReadyObservable !== newProps.onLinesReadyObservable) {
            updates.push({
                propertyName: 'onLinesReadyObservable',
                value: newProps.onLinesReadyObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.TextBlock>'
            });
        }
        // GUI.TextBlock.onTextChangedObservable of type 'BABYLON.Observable<BABYLON.GUI.TextBlock>/fn':
        if (oldProps.onTextChangedObservable === undefined && oldProps.onTextChangedObservable !== newProps.onTextChangedObservable) {
            updates.push({
                propertyName: 'onTextChangedObservable',
                value: newProps.onTextChangedObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.TextBlock>'
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
        "isGUI2DControl": true,
        "className": "FiberTextBlock"
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
    getPropertyUpdates(hostInstance: GUI.DisplayGrid, oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI2DControl": true,
        "className": "FiberDisplayGrid"
    };
}

export class FiberBaseSliderProps extends FiberControlProps {
    barOffset?: string | number;
    displayThumb?: boolean;
    isThumbClamped?: boolean;
    isVertical?: boolean;
    maximum?: number;
    minimum?: number;
    name?: string;
    onValueChangedObservable?: BABYLON.Observable<number>;
    thumbWidth?: string | number;
    value?: number;
}

export class FiberBaseSliderPropsHandler implements PropsHandler<GUI.BaseSlider, FiberBaseSliderProps> {
    getPropertyUpdates(hostInstance: GUI.BaseSlider, oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.BaseSlider.barOffset of type 'string | number':
        if (oldProps.barOffset !== newProps.barOffset) {
            updates.push({
                propertyName: 'barOffset',
                value: newProps.barOffset,
                type: 'string | number'
            });
        }
        // GUI.BaseSlider.displayThumb of type 'boolean':
        if (oldProps.displayThumb !== newProps.displayThumb) {
            updates.push({
                propertyName: 'displayThumb',
                value: newProps.displayThumb,
                type: 'boolean'
            });
        }
        // GUI.BaseSlider.isThumbClamped of type 'boolean':
        if (oldProps.isThumbClamped !== newProps.isThumbClamped) {
            updates.push({
                propertyName: 'isThumbClamped',
                value: newProps.isThumbClamped,
                type: 'boolean'
            });
        }
        // GUI.BaseSlider.isVertical of type 'boolean':
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // GUI.BaseSlider.maximum of type 'number':
        if (oldProps.maximum !== newProps.maximum) {
            updates.push({
                propertyName: 'maximum',
                value: newProps.maximum,
                type: 'number'
            });
        }
        // GUI.BaseSlider.minimum of type 'number':
        if (oldProps.minimum !== newProps.minimum) {
            updates.push({
                propertyName: 'minimum',
                value: newProps.minimum,
                type: 'number'
            });
        }
        // GUI.BaseSlider.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // GUI.BaseSlider.onValueChangedObservable of type 'BABYLON.Observable<number>/fn':
        if (oldProps.onValueChangedObservable === undefined && oldProps.onValueChangedObservable !== newProps.onValueChangedObservable) {
            updates.push({
                propertyName: 'onValueChangedObservable',
                value: newProps.onValueChangedObservable,
                type: 'BABYLON.Observable<number>'
            });
        }
        // GUI.BaseSlider.thumbWidth of type 'string | number':
        if (oldProps.thumbWidth !== newProps.thumbWidth) {
            updates.push({
                propertyName: 'thumbWidth',
                value: newProps.thumbWidth,
                type: 'string | number'
            });
        }
        // GUI.BaseSlider.value of type 'number':
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
export class FiberBaseSlider implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseSliderPropsHandler(),
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
        "libraryLocation": "BaseSlider",
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
        "isGUI2DControl": true,
        "className": "FiberBaseSlider"
    };
}

export class FiberSliderProps extends FiberBaseSliderProps {
    background?: string;
    borderColor?: string;
    isThumbCircle?: boolean;
    name?: string;
}

export class FiberSliderPropsHandler implements PropsHandler<GUI.Slider, FiberSliderProps> {
    getPropertyUpdates(hostInstance: GUI.Slider, oldProps: FiberSliderProps, newProps: FiberSliderProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.Slider.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
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
        // GUI.Slider.name of type 'string':
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
 * Class used to create slider controls
 * 
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
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
        "isGUI2DControl": true,
        "className": "FiberSlider"
    };
}

export class FiberImageBasedSliderProps extends FiberBaseSliderProps {
    backgroundImage?: BABYLON.GUI.Image;
    displayThumb?: boolean;
    name?: string;
    thumbImage?: BABYLON.GUI.Image;
    valueBarImage?: BABYLON.GUI.Image;
}

export class FiberImageBasedSliderPropsHandler implements PropsHandler<GUI.ImageBasedSlider, FiberImageBasedSliderProps> {
    getPropertyUpdates(hostInstance: GUI.ImageBasedSlider, oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.GUI.Image property (not coded) GUI.ImageBasedSlider.backgroundImage.
        // GUI.ImageBasedSlider.displayThumb of type 'boolean':
        if (oldProps.displayThumb !== newProps.displayThumb) {
            updates.push({
                propertyName: 'displayThumb',
                value: newProps.displayThumb,
                type: 'boolean'
            });
        }
        // GUI.ImageBasedSlider.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.GUI.Image property (not coded) GUI.ImageBasedSlider.thumbImage.
        // TODO: type: BABYLON.GUI.Image property (not coded) GUI.ImageBasedSlider.valueBarImage.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls based on images
 * 
 * This code has been generated
 */
export class FiberImageBasedSlider implements HasPropsHandlers<GUI.Control, FiberControlProps> {
    private propsHandlers: PropsHandler<GUI.Control, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageBasedSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
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
        "libraryLocation": "ImageBasedSlider",
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
        "isGUI2DControl": true,
        "className": "FiberImageBasedSlider"
    };
}

export class FiberControl3DProps {
    isVisible?: boolean;
    name?: string;
    onPointerClickObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>;
    onPointerDownObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>;
    onPointerEnterObservable?: BABYLON.Observable<BABYLON.GUI.Control3D>;
    onPointerMoveObservable?: BABYLON.Observable<BABYLON.Vector3>;
    onPointerOutObservable?: BABYLON.Observable<BABYLON.GUI.Control3D>;
    onPointerUpObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>;
    parent?: BABYLON.GUI.Container3D;
    pointerDownAnimation?: () => void;
    pointerEnterAnimation?: () => void;
    pointerOutAnimation?: () => void;
    pointerUpAnimation?: () => void;
    position?: BABYLON.Vector3;
    scaling?: BABYLON.Vector3;
}

export class FiberControl3DPropsHandler implements PropsHandler<GUI.Control3D, FiberControl3DProps> {
    getPropertyUpdates(hostInstance: GUI.Control3D, oldProps: FiberControl3DProps, newProps: FiberControl3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        // GUI.Control3D.onPointerClickObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>/fn':
        if (oldProps.onPointerClickObservable === undefined && oldProps.onPointerClickObservable !== newProps.onPointerClickObservable) {
            updates.push({
                propertyName: 'onPointerClickObservable',
                value: newProps.onPointerClickObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>'
            });
        }
        // GUI.Control3D.onPointerDownObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>/fn':
        if (oldProps.onPointerDownObservable === undefined && oldProps.onPointerDownObservable !== newProps.onPointerDownObservable) {
            updates.push({
                propertyName: 'onPointerDownObservable',
                value: newProps.onPointerDownObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>'
            });
        }
        // GUI.Control3D.onPointerEnterObservable of type 'BABYLON.Observable<BABYLON.GUI.Control3D>/fn':
        if (oldProps.onPointerEnterObservable === undefined && oldProps.onPointerEnterObservable !== newProps.onPointerEnterObservable) {
            updates.push({
                propertyName: 'onPointerEnterObservable',
                value: newProps.onPointerEnterObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control3D>'
            });
        }
        // GUI.Control3D.onPointerMoveObservable of type 'BABYLON.Observable<BABYLON.Vector3>/fn':
        if (oldProps.onPointerMoveObservable === undefined && oldProps.onPointerMoveObservable !== newProps.onPointerMoveObservable) {
            updates.push({
                propertyName: 'onPointerMoveObservable',
                value: newProps.onPointerMoveObservable,
                type: 'BABYLON.Observable<BABYLON.Vector3>'
            });
        }
        // GUI.Control3D.onPointerOutObservable of type 'BABYLON.Observable<BABYLON.GUI.Control3D>/fn':
        if (oldProps.onPointerOutObservable === undefined && oldProps.onPointerOutObservable !== newProps.onPointerOutObservable) {
            updates.push({
                propertyName: 'onPointerOutObservable',
                value: newProps.onPointerOutObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control3D>'
            });
        }
        // GUI.Control3D.onPointerUpObservable of type 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>/fn':
        if (oldProps.onPointerUpObservable === undefined && oldProps.onPointerUpObservable !== newProps.onPointerUpObservable) {
            updates.push({
                propertyName: 'onPointerUpObservable',
                value: newProps.onPointerUpObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>'
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
        "isGUI3DControl": true,
        "className": "FiberControl3D"
    };
}

export class FiberAbstractButton3DProps extends FiberControl3DProps {
}

export class FiberAbstractButton3DPropsHandler implements PropsHandler<GUI.AbstractButton3D, FiberAbstractButton3DProps> {
    getPropertyUpdates(hostInstance: GUI.AbstractButton3D, oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberAbstractButton3D"
    };
}

export class FiberButton3DProps extends FiberAbstractButton3DProps {
    content?: BABYLON.GUI.Control;
    contentResolution?: number;
    contentScaleRatio?: number;
}

export class FiberButton3DPropsHandler implements PropsHandler<GUI.Button3D, FiberButton3DProps> {
    getPropertyUpdates(hostInstance: GUI.Button3D, oldProps: FiberButton3DProps, newProps: FiberButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.Button3D.content of GUIBABYLON.GUI.Control sets once:
        if (newProps.content && (!oldProps.content)) {
            updates.push({
                propertyName: 'content',
                value: newProps.content,
                type: 'BABYLON.GUI.Control'
            });
        }
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
        "isGUI3DControl": true,
        "className": "FiberButton3D"
    };
}

export class FiberHolographicButtonProps extends FiberButton3DProps {
    imageUrl?: string;
    text?: string;
    tooltipText?: string;
}

export class FiberHolographicButtonPropsHandler implements PropsHandler<GUI.HolographicButton, FiberHolographicButtonProps> {
    getPropertyUpdates(hostInstance: GUI.HolographicButton, oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberHolographicButton"
    };
}

export class FiberMeshButton3DProps extends FiberButton3DProps {
}

export class FiberMeshButton3DPropsHandler implements PropsHandler<GUI.MeshButton3D, FiberMeshButton3DProps> {
    getPropertyUpdates(hostInstance: GUI.MeshButton3D, oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberMeshButton3D"
    };
}

export class FiberContainer3DProps extends FiberControl3DProps {
    blockLayout?: boolean;
}

export class FiberContainer3DPropsHandler implements PropsHandler<GUI.Container3D, FiberContainer3DProps> {
    getPropertyUpdates(hostInstance: GUI.Container3D, oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberContainer3D"
    };
}

export class FiberStackPanel3DProps extends FiberContainer3DProps {
    isVertical?: boolean;
    margin?: number;
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<GUI.StackPanel3D, FiberStackPanel3DProps> {
    getPropertyUpdates(hostInstance: GUI.StackPanel3D, oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
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
    getPropertyUpdates(hostInstance: GUI.VolumeBasedPanel, oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberVolumeBasedPanel"
    };
}

export class FiberCylinderPanelProps extends FiberVolumeBasedPanelProps {
    radius?: number;
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<GUI.CylinderPanel, FiberCylinderPanelProps> {
    getPropertyUpdates(hostInstance: GUI.CylinderPanel, oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberCylinderPanel"
    };
}

export class FiberPlanePanelProps extends FiberVolumeBasedPanelProps {
}

export class FiberPlanePanelPropsHandler implements PropsHandler<GUI.PlanePanel, FiberPlanePanelProps> {
    getPropertyUpdates(hostInstance: GUI.PlanePanel, oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberPlanePanel"
    };
}

export class FiberScatterPanelProps extends FiberVolumeBasedPanelProps {
    iteration?: number;
}

export class FiberScatterPanelPropsHandler implements PropsHandler<GUI.ScatterPanel, FiberScatterPanelProps> {
    getPropertyUpdates(hostInstance: GUI.ScatterPanel, oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberScatterPanel"
    };
}

export class FiberSpherePanelProps extends FiberVolumeBasedPanelProps {
    radius?: number;
}

export class FiberSpherePanelPropsHandler implements PropsHandler<GUI.SpherePanel, FiberSpherePanelProps> {
    getPropertyUpdates(hostInstance: GUI.SpherePanel, oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
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
        "isGUI3DControl": true,
        "className": "FiberSpherePanel"
    };
}

export class FiberBaseTextureProps {
    animations?: BABYLON.Animation[];
    anisotropicFilteringLevel?: number;
    coordinatesIndex?: number;
    coordinatesMode?: number;
    delayLoadState?: number;
    gammaSpace?: boolean;
    getAlphaFromRGB?: boolean;
    hasAlpha?: boolean;
    invertZ?: boolean;
    is3D?: boolean;
    isCube?: boolean;
    isRenderTarget?: boolean;
    level?: number;
    lodGenerationOffset?: number;
    lodGenerationScale?: number;
    lodLevelInAlpha?: boolean;
    metadata?: any;
    name?: string;
    onDispose?: () => void;
    onDisposeObservable?: BABYLON.Observable<BABYLON.BaseTexture>;
    reservedDataStore?: any;
    sphericalPolynomial?: BABYLON.SphericalPolynomial;
    uniqueId?: number;
    wrapR?: number;
    wrapU?: number;
    wrapV?: number;
}

export class FiberBaseTexturePropsHandler implements PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.BaseTexture, oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.BaseTexture.animations.
        // BABYLON.BaseTexture.anisotropicFilteringLevel of type 'number':
        if (oldProps.anisotropicFilteringLevel !== newProps.anisotropicFilteringLevel) {
            updates.push({
                propertyName: 'anisotropicFilteringLevel',
                value: newProps.anisotropicFilteringLevel,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.coordinatesIndex of type 'number':
        if (oldProps.coordinatesIndex !== newProps.coordinatesIndex) {
            updates.push({
                propertyName: 'coordinatesIndex',
                value: newProps.coordinatesIndex,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.gammaSpace of type 'boolean':
        if (oldProps.gammaSpace !== newProps.gammaSpace) {
            updates.push({
                propertyName: 'gammaSpace',
                value: newProps.gammaSpace,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.getAlphaFromRGB of type 'boolean':
        if (oldProps.getAlphaFromRGB !== newProps.getAlphaFromRGB) {
            updates.push({
                propertyName: 'getAlphaFromRGB',
                value: newProps.getAlphaFromRGB,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.hasAlpha of type 'boolean':
        if (oldProps.hasAlpha !== newProps.hasAlpha) {
            updates.push({
                propertyName: 'hasAlpha',
                value: newProps.hasAlpha,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.invertZ of type 'boolean':
        if (oldProps.invertZ !== newProps.invertZ) {
            updates.push({
                propertyName: 'invertZ',
                value: newProps.invertZ,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.is3D of type 'boolean':
        if (oldProps.is3D !== newProps.is3D) {
            updates.push({
                propertyName: 'is3D',
                value: newProps.is3D,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.isRenderTarget of type 'boolean':
        if (oldProps.isRenderTarget !== newProps.isRenderTarget) {
            updates.push({
                propertyName: 'isRenderTarget',
                value: newProps.isRenderTarget,
                type: 'boolean'
            });
        }
        // BABYLON.BaseTexture.level of type 'number':
        if (oldProps.level !== newProps.level) {
            updates.push({
                propertyName: 'level',
                value: newProps.level,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.lodGenerationOffset of type 'number':
        if (oldProps.lodGenerationOffset !== newProps.lodGenerationOffset) {
            updates.push({
                propertyName: 'lodGenerationOffset',
                value: newProps.lodGenerationOffset,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.lodGenerationScale of type 'number':
        if (oldProps.lodGenerationScale !== newProps.lodGenerationScale) {
            updates.push({
                propertyName: 'lodGenerationScale',
                value: newProps.lodGenerationScale,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.lodLevelInAlpha of type 'boolean':
        if (oldProps.lodLevelInAlpha !== newProps.lodLevelInAlpha) {
            updates.push({
                propertyName: 'lodLevelInAlpha',
                value: newProps.lodLevelInAlpha,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.BaseTexture.metadata.
        // BABYLON.BaseTexture.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BABYLON.BaseTexture.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // BABYLON.BaseTexture.onDisposeObservable of type 'BABYLON.Observable<BABYLON.BaseTexture>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BABYLON.Observable<BABYLON.BaseTexture>'
            });
        }
        // TODO: type: any property (not coded) BABYLON.BaseTexture.reservedDataStore.
        // TODO: type: BABYLON.SphericalPolynomial property (not coded) BABYLON.BaseTexture.sphericalPolynomial.
        // BABYLON.BaseTexture.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.wrapR of type 'number':
        if (oldProps.wrapR !== newProps.wrapR) {
            updates.push({
                propertyName: 'wrapR',
                value: newProps.wrapR,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.wrapU of type 'number':
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // BABYLON.BaseTexture.wrapV of type 'number':
        if (oldProps.wrapV !== newProps.wrapV) {
            updates.push({
                propertyName: 'wrapV',
                value: newProps.wrapV,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 * 
 * This code has been generated
 */
export class FiberBaseTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberBaseTexture"
    };
}

export class FiberColorGradingTextureProps extends FiberBaseTextureProps {
    load3dlTexture?: any;
    loadTexture?: any;
    url?: string;
}

export class FiberColorGradingTexturePropsHandler implements PropsHandler<BABYLON.ColorGradingTexture, FiberColorGradingTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.ColorGradingTexture, oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) BABYLON.ColorGradingTexture.load3dlTexture.
        // TODO: type: any property (not coded) BABYLON.ColorGradingTexture.loadTexture.
        // BABYLON.ColorGradingTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a color grading texture. This acts as a lookup table LUT, useful during post process
 * It can help converting any input color in a desired output one. This can then be used to create effects
 * from sepia, black and white to sixties or futuristic rendering...
 * 
 * The only supported format is currently 3dl.
 * More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table
 * 
 * This code has been generated
 */
export class FiberColorGradingTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorGradingTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorGradingTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "url",
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
        "isTexture": true,
        "className": "FiberColorGradingTexture"
    };
}

export class FiberCubeTextureProps extends FiberBaseTextureProps {
    boundingBoxPosition?: BABYLON.Vector3;
    boundingBoxSize?: BABYLON.Vector3;
    rotationY?: number;
    url?: string;
    setReflectionTextureMatrix?: any;
}

export class FiberCubeTexturePropsHandler implements PropsHandler<BABYLON.CubeTexture, FiberCubeTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.CubeTexture, oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.CubeTexture.boundingBoxPosition of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.CubeTexture.boundingBoxSize of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.CubeTexture.rotationY of type 'number':
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // BABYLON.CubeTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BABYLON.CubeTexture.setReflectionTextureMatrix of type '(value?: BABYLON.Matrix)':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BABYLON.Matrix)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class for creating a cube texture
 * 
 * This code has been generated
 */
export class FiberCubeTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CubeTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "rootUrl",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "extensions",
                "type": "string[]",
                "optional": true
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "files",
                "type": "string[]",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "prefiltered",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "forcedExtension",
                "type": "any",
                "optional": true
            },
            {
                "name": "createPolynomials",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "lodScale",
                "type": "number",
                "optional": true
            },
            {
                "name": "lodOffset",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberCubeTexture"
    };
}

export class FiberRawCubeTextureProps extends FiberCubeTextureProps {
}

export class FiberRawCubeTexturePropsHandler implements PropsHandler<BABYLON.RawCubeTexture, FiberRawCubeTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.RawCubeTexture, oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Raw cube texture where the raw buffers are passed in
 * 
 * This code has been generated
 */
export class FiberRawCubeTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawCubeTexturePropsHandler(),
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawCubeTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "data",
                "type": "ArrayBufferView[]",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "compression",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawCubeTexture"
    };
}

export class FiberHDRCubeTextureProps extends FiberBaseTextureProps {
    boundingBoxPosition?: BABYLON.Vector3;
    boundingBoxSize?: BABYLON.Vector3;
    coordinatesMode?: number;
    isBlocking?: boolean;
    loadTexture?: any;
    rotationY?: number;
    url?: string;
    setReflectionTextureMatrix?: any;
}

export class FiberHDRCubeTexturePropsHandler implements PropsHandler<BABYLON.HDRCubeTexture, FiberHDRCubeTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.HDRCubeTexture, oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.HDRCubeTexture.boundingBoxPosition of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.HDRCubeTexture.boundingBoxSize of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.HDRCubeTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // BABYLON.HDRCubeTexture.isBlocking of type 'boolean':
        if (oldProps.isBlocking !== newProps.isBlocking) {
            updates.push({
                propertyName: 'isBlocking',
                value: newProps.isBlocking,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.HDRCubeTexture.loadTexture.
        // BABYLON.HDRCubeTexture.rotationY of type 'number':
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // BABYLON.HDRCubeTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BABYLON.HDRCubeTexture.setReflectionTextureMatrix of type '(value?: BABYLON.Matrix)':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BABYLON.Matrix)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a texture coming from an HDR input.
 * 
 * The only supported format is currently panorama picture stored in RGBE format.
 * Example of such files can be found on HDRLib: http://hdrlib.com/
 * 
 * This code has been generated
 */
export class FiberHDRCubeTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHDRCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HDRCubeTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "generateHarmonics",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "gammaSpace",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "reserved",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberHDRCubeTexture"
    };
}

export class FiberTextureProps extends FiberBaseTextureProps {
    isBlocking?: boolean;
    onLoadObservable?: BABYLON.Observable<BABYLON.Texture>;
    uAng?: number;
    uOffset?: number;
    url?: string;
    uRotationCenter?: number;
    uScale?: number;
    vAng?: number;
    vOffset?: number;
    vRotationCenter?: number;
    vScale?: number;
    wAng?: number;
    wRotationCenter?: number;
}

export class FiberTexturePropsHandler implements PropsHandler<BABYLON.Texture, FiberTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.Texture, oldProps: FiberTextureProps, newProps: FiberTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.Texture.isBlocking of type 'boolean':
        if (oldProps.isBlocking !== newProps.isBlocking) {
            updates.push({
                propertyName: 'isBlocking',
                value: newProps.isBlocking,
                type: 'boolean'
            });
        }
        // BABYLON.Texture.onLoadObservable of type 'BABYLON.Observable<BABYLON.Texture>/fn':
        if (oldProps.onLoadObservable === undefined && oldProps.onLoadObservable !== newProps.onLoadObservable) {
            updates.push({
                propertyName: 'onLoadObservable',
                value: newProps.onLoadObservable,
                type: 'BABYLON.Observable<BABYLON.Texture>'
            });
        }
        // BABYLON.Texture.uAng of type 'number':
        if (oldProps.uAng !== newProps.uAng) {
            updates.push({
                propertyName: 'uAng',
                value: newProps.uAng,
                type: 'number'
            });
        }
        // BABYLON.Texture.uOffset of type 'number':
        if (oldProps.uOffset !== newProps.uOffset) {
            updates.push({
                propertyName: 'uOffset',
                value: newProps.uOffset,
                type: 'number'
            });
        }
        // BABYLON.Texture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BABYLON.Texture.uRotationCenter of type 'number':
        if (oldProps.uRotationCenter !== newProps.uRotationCenter) {
            updates.push({
                propertyName: 'uRotationCenter',
                value: newProps.uRotationCenter,
                type: 'number'
            });
        }
        // BABYLON.Texture.uScale of type 'number':
        if (oldProps.uScale !== newProps.uScale) {
            updates.push({
                propertyName: 'uScale',
                value: newProps.uScale,
                type: 'number'
            });
        }
        // BABYLON.Texture.vAng of type 'number':
        if (oldProps.vAng !== newProps.vAng) {
            updates.push({
                propertyName: 'vAng',
                value: newProps.vAng,
                type: 'number'
            });
        }
        // BABYLON.Texture.vOffset of type 'number':
        if (oldProps.vOffset !== newProps.vOffset) {
            updates.push({
                propertyName: 'vOffset',
                value: newProps.vOffset,
                type: 'number'
            });
        }
        // BABYLON.Texture.vRotationCenter of type 'number':
        if (oldProps.vRotationCenter !== newProps.vRotationCenter) {
            updates.push({
                propertyName: 'vRotationCenter',
                value: newProps.vRotationCenter,
                type: 'number'
            });
        }
        // BABYLON.Texture.vScale of type 'number':
        if (oldProps.vScale !== newProps.vScale) {
            updates.push({
                propertyName: 'vScale',
                value: newProps.vScale,
                type: 'number'
            });
        }
        // BABYLON.Texture.wAng of type 'number':
        if (oldProps.wAng !== newProps.wAng) {
            updates.push({
                propertyName: 'wAng',
                value: newProps.wAng,
                type: 'number'
            });
        }
        // BABYLON.Texture.wRotationCenter of type 'number':
        if (oldProps.wRotationCenter !== newProps.wRotationCenter) {
            updates.push({
                propertyName: 'wRotationCenter',
                value: newProps.wRotationCenter,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 * 
 * This code has been generated
 */
export class FiberTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Texture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            },
            {
                "name": "buffer",
                "type": "string | HTMLImageElement | ArrayBuffer | Blob",
                "optional": true
            },
            {
                "name": "deleteBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberTexture"
    };
}

export class FiberDynamicTextureProps extends FiberTextureProps {
}

export class FiberDynamicTexturePropsHandler implements PropsHandler<BABYLON.DynamicTexture, FiberDynamicTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.DynamicTexture, oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A class extending Texture allowing drawing on a texture
 * 
 * This code has been generated
 */
export class FiberDynamicTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": "any",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberDynamicTexture"
    };
}

export class FiberRawTextureProps extends FiberTextureProps {
    format?: number;
}

export class FiberRawTexturePropsHandler implements PropsHandler<BABYLON.RawTexture, FiberRawTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.RawTexture, oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.RawTexture.format of type 'number':
        if (oldProps.format !== newProps.format) {
            updates.push({
                propertyName: 'format',
                value: newProps.format,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 * 
 * This code has been generated
 */
export class FiberRawTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "data",
                "type": "ArrayBufferView",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawTexture"
    };
}

export class FiberRawTexture3DProps extends FiberTextureProps {
    format?: number;
}

export class FiberRawTexture3DPropsHandler implements PropsHandler<BABYLON.RawTexture3D, FiberRawTexture3DProps> {
    getPropertyUpdates(hostInstance: BABYLON.RawTexture3D, oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.RawTexture3D.format of type 'number':
        if (oldProps.format !== newProps.format) {
            updates.push({
                propertyName: 'format',
                value: newProps.format,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to store 3D textures containing user data
 * 
 * This code has been generated
 */
export class FiberRawTexture3D implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture3DPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture3D",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "data",
                "type": "ArrayBufferView",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "depth",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "textureType",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawTexture3D"
    };
}

export class FiberRenderTargetTextureProps extends FiberTextureProps {
    activeCamera?: BABYLON.Camera;
    boundingBoxPosition?: BABYLON.Vector3;
    boundingBoxSize?: BABYLON.Vector3;
    clearColor?: BABYLON.Color4;
    coordinatesMode?: number;
    customRenderFunction?: (opaqueSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, alphaTestSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, transparentSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, depthOnlySubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, beforeTransparents?: () => void) => void;
    depthStencilTexture?: BABYLON.InternalTexture;
    ignoreCameraViewport?: boolean;
    isCube?: boolean;
    onAfterRender?: (faceIndex: number) => void;
    onAfterRenderObservable?: BABYLON.Observable<number>;
    onAfterUnbind?: () => void;
    onAfterUnbindObservable?: BABYLON.Observable<BABYLON.RenderTargetTexture>;
    onBeforeBindObservable?: BABYLON.Observable<BABYLON.RenderTargetTexture>;
    onBeforeRender?: (faceIndex: number) => void;
    onBeforeRenderObservable?: BABYLON.Observable<number>;
    onClear?: (Engine: BABYLON.Engine) => void;
    onClearObservable?: BABYLON.Observable<BABYLON.Engine>;
    refreshRate?: number;
    renderList?: BABYLON.AbstractMesh[];
    renderListPredicate?: (AbstractMesh: BABYLON.AbstractMesh) => boolean;
    renderParticles?: boolean;
    renderSprites?: boolean;
    renderToTarget?: any;
    samples?: number;
    useCameraPostProcesses?: boolean;
    setRenderingAutoClearDepthStencil?: any;
    setRenderingOrder?: any;
}

export class FiberRenderTargetTexturePropsHandler implements PropsHandler<BABYLON.RenderTargetTexture, FiberRenderTargetTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.RenderTargetTexture, oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.Camera property (not coded) BABYLON.RenderTargetTexture.activeCamera.
        // BABYLON.RenderTargetTexture.boundingBoxPosition of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.RenderTargetTexture.boundingBoxSize of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.RenderTargetTexture.clearColor of BABYLON.Color4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.clearColor && (!oldProps.clearColor || oldProps.clearColor.r !== newProps.clearColor.r || oldProps.clearColor.g !== newProps.clearColor.g || oldProps.clearColor.b !== newProps.clearColor.b || oldProps.clearColor.a !== newProps.clearColor.a)) {
            updates.push({
                propertyName: 'clearColor',
                value: newProps.clearColor,
                type: 'BABYLON.Color4'
            });
        }
        // BABYLON.RenderTargetTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // TODO: type: (opaqueSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, alphaTestSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, transparentSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, depthOnlySubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>, beforeTransparents?: () => void) => void property (not coded) BABYLON.RenderTargetTexture.customRenderFunction.
        // TODO: type: BABYLON.InternalTexture property (not coded) BABYLON.RenderTargetTexture.depthStencilTexture.
        // BABYLON.RenderTargetTexture.ignoreCameraViewport of type 'boolean':
        if (oldProps.ignoreCameraViewport !== newProps.ignoreCameraViewport) {
            updates.push({
                propertyName: 'ignoreCameraViewport',
                value: newProps.ignoreCameraViewport,
                type: 'boolean'
            });
        }
        // BABYLON.RenderTargetTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // BABYLON.RenderTargetTexture.onAfterRender of type '(faceIndex: number) => void/fn':
        if (oldProps.onAfterRender === undefined && oldProps.onAfterRender !== newProps.onAfterRender) {
            updates.push({
                propertyName: 'onAfterRender',
                value: newProps.onAfterRender,
                type: '(faceIndex: number) => void'
            });
        }
        // BABYLON.RenderTargetTexture.onAfterRenderObservable of type 'BABYLON.Observable<number>/fn':
        if (oldProps.onAfterRenderObservable === undefined && oldProps.onAfterRenderObservable !== newProps.onAfterRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderObservable',
                value: newProps.onAfterRenderObservable,
                type: 'BABYLON.Observable<number>'
            });
        }
        // BABYLON.RenderTargetTexture.onAfterUnbind of type '() => void/fn':
        if (oldProps.onAfterUnbind === undefined && oldProps.onAfterUnbind !== newProps.onAfterUnbind) {
            updates.push({
                propertyName: 'onAfterUnbind',
                value: newProps.onAfterUnbind,
                type: '() => void'
            });
        }
        // BABYLON.RenderTargetTexture.onAfterUnbindObservable of type 'BABYLON.Observable<BABYLON.RenderTargetTexture>/fn':
        if (oldProps.onAfterUnbindObservable === undefined && oldProps.onAfterUnbindObservable !== newProps.onAfterUnbindObservable) {
            updates.push({
                propertyName: 'onAfterUnbindObservable',
                value: newProps.onAfterUnbindObservable,
                type: 'BABYLON.Observable<BABYLON.RenderTargetTexture>'
            });
        }
        // BABYLON.RenderTargetTexture.onBeforeBindObservable of type 'BABYLON.Observable<BABYLON.RenderTargetTexture>/fn':
        if (oldProps.onBeforeBindObservable === undefined && oldProps.onBeforeBindObservable !== newProps.onBeforeBindObservable) {
            updates.push({
                propertyName: 'onBeforeBindObservable',
                value: newProps.onBeforeBindObservable,
                type: 'BABYLON.Observable<BABYLON.RenderTargetTexture>'
            });
        }
        // BABYLON.RenderTargetTexture.onBeforeRender of type '(faceIndex: number) => void/fn':
        if (oldProps.onBeforeRender === undefined && oldProps.onBeforeRender !== newProps.onBeforeRender) {
            updates.push({
                propertyName: 'onBeforeRender',
                value: newProps.onBeforeRender,
                type: '(faceIndex: number) => void'
            });
        }
        // BABYLON.RenderTargetTexture.onBeforeRenderObservable of type 'BABYLON.Observable<number>/fn':
        if (oldProps.onBeforeRenderObservable === undefined && oldProps.onBeforeRenderObservable !== newProps.onBeforeRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderObservable',
                value: newProps.onBeforeRenderObservable,
                type: 'BABYLON.Observable<number>'
            });
        }
        // BABYLON.RenderTargetTexture.onClear of type '(Engine: BABYLON.Engine) => void/fn':
        if (oldProps.onClear === undefined && oldProps.onClear !== newProps.onClear) {
            updates.push({
                propertyName: 'onClear',
                value: newProps.onClear,
                type: '(Engine: BABYLON.Engine) => void'
            });
        }
        // BABYLON.RenderTargetTexture.onClearObservable of type 'BABYLON.Observable<BABYLON.Engine>/fn':
        if (oldProps.onClearObservable === undefined && oldProps.onClearObservable !== newProps.onClearObservable) {
            updates.push({
                propertyName: 'onClearObservable',
                value: newProps.onClearObservable,
                type: 'BABYLON.Observable<BABYLON.Engine>'
            });
        }
        // BABYLON.RenderTargetTexture.refreshRate of type 'number':
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.AbstractMesh[] property (not coded) BABYLON.RenderTargetTexture.renderList.
        // TODO: type: (AbstractMesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.RenderTargetTexture.renderListPredicate.
        // BABYLON.RenderTargetTexture.renderParticles of type 'boolean':
        if (oldProps.renderParticles !== newProps.renderParticles) {
            updates.push({
                propertyName: 'renderParticles',
                value: newProps.renderParticles,
                type: 'boolean'
            });
        }
        // BABYLON.RenderTargetTexture.renderSprites of type 'boolean':
        if (oldProps.renderSprites !== newProps.renderSprites) {
            updates.push({
                propertyName: 'renderSprites',
                value: newProps.renderSprites,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.RenderTargetTexture.renderToTarget.
        // BABYLON.RenderTargetTexture.samples of type 'number':
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // BABYLON.RenderTargetTexture.useCameraPostProcesses of type 'boolean':
        if (oldProps.useCameraPostProcesses !== newProps.useCameraPostProcesses) {
            updates.push({
                propertyName: 'useCameraPostProcesses',
                value: newProps.useCameraPostProcesses,
                type: 'boolean'
            });
        }
        // BABYLON.RenderTargetTexture.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean)':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean)'
            });
        }
        // BABYLON.RenderTargetTexture.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, alphaTestSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, transparentSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number)':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, alphaTestSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, transparentSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 * 
 * This code has been generated
 */
export class FiberRenderTargetTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RenderTargetTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; } | { ratio: number; }",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "doNotChangeAspectRatio",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "isCube",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateDepthBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "generateStencilBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "isMulti",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "delayAllocation",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRenderTargetTexture"
    };
}

export class FiberMirrorTextureProps extends FiberRenderTargetTextureProps {
    adaptiveBlurKernel?: number;
    blurKernel?: number;
    blurKernelX?: number;
    blurKernelY?: number;
    blurRatio?: number;
    mirrorPlane?: BABYLON.Plane;
    scene?: any;
}

export class FiberMirrorTexturePropsHandler implements PropsHandler<BABYLON.MirrorTexture, FiberMirrorTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.MirrorTexture, oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.MirrorTexture.adaptiveBlurKernel of type 'number':
        if (oldProps.adaptiveBlurKernel !== newProps.adaptiveBlurKernel) {
            updates.push({
                propertyName: 'adaptiveBlurKernel',
                value: newProps.adaptiveBlurKernel,
                type: 'number'
            });
        }
        // BABYLON.MirrorTexture.blurKernel of type 'number':
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // BABYLON.MirrorTexture.blurKernelX of type 'number':
        if (oldProps.blurKernelX !== newProps.blurKernelX) {
            updates.push({
                propertyName: 'blurKernelX',
                value: newProps.blurKernelX,
                type: 'number'
            });
        }
        // BABYLON.MirrorTexture.blurKernelY of type 'number':
        if (oldProps.blurKernelY !== newProps.blurKernelY) {
            updates.push({
                propertyName: 'blurKernelY',
                value: newProps.blurKernelY,
                type: 'number'
            });
        }
        // BABYLON.MirrorTexture.blurRatio of type 'number':
        if (oldProps.blurRatio !== newProps.blurRatio) {
            updates.push({
                propertyName: 'blurRatio',
                value: newProps.blurRatio,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.MirrorTexture.mirrorPlane.
        // TODO: type: any property (not coded) BABYLON.MirrorTexture.scene.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Mirror texture can be used to simulate the view from a mirror in a scene.
 * It will dynamically be rendered every frame to adapt to the camera point of view.
 * You can then easily use it as a reflectionTexture on a flat surface.
 * In case the surface is not a plane, please consider relying on reflection probes.
 * 
 * This code has been generated
 */
export class FiberMirrorTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMirrorTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MirrorTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; } | { ratio: number; }",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateDepthBuffer",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMirrorTexture"
    };
}

export class FiberMultiRenderTargetProps extends FiberRenderTargetTextureProps {
    samples?: number;
    wrapU?: number;
    wrapV?: number;
}

export class FiberMultiRenderTargetPropsHandler implements PropsHandler<BABYLON.MultiRenderTarget, FiberMultiRenderTargetProps> {
    getPropertyUpdates(hostInstance: BABYLON.MultiRenderTarget, oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.MultiRenderTarget.samples of type 'number':
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // BABYLON.MultiRenderTarget.wrapU of type 'number':
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // BABYLON.MultiRenderTarget.wrapV of type 'number':
        if (oldProps.wrapV !== newProps.wrapV) {
            updates.push({
                propertyName: 'wrapV',
                value: newProps.wrapV,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * A multi render target, like a render target provides the ability to render to a texture.
 * Unlike the render target, it can render to several draw buffers in one draw.
 * This is specially interesting in deferred rendering or for any effects requiring more than
 * just one color from a single pass.
 * 
 * This code has been generated
 */
export class FiberMultiRenderTarget implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiRenderTarget",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "any",
                "optional": false
            },
            {
                "name": "count",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "options",
                "type": "BABYLON.IMultiRenderTargetOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMultiRenderTarget"
    };
}

export class FiberRefractionTextureProps extends FiberRenderTargetTextureProps {
    depth?: number;
    refractionPlane?: BABYLON.Plane;
}

export class FiberRefractionTexturePropsHandler implements PropsHandler<BABYLON.RefractionTexture, FiberRefractionTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.RefractionTexture, oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.RefractionTexture.depth of type 'number':
        if (oldProps.depth !== newProps.depth) {
            updates.push({
                propertyName: 'depth',
                value: newProps.depth,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.RefractionTexture.refractionPlane.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 * 
 * This code has been generated
 */
export class FiberRefractionTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRefractionTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RefractionTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRefractionTexture"
    };
}

export class FiberVideoTextureProps extends FiberTextureProps {
    reset?: any;
}

export class FiberVideoTexturePropsHandler implements PropsHandler<BABYLON.VideoTexture, FiberVideoTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.VideoTexture, oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) BABYLON.VideoTexture.reset.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 * 
 * This code has been generated
 */
export class FiberVideoTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVideoTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VideoTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "src",
                "type": "string | string[] | HTMLVideoElement",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "settings",
                "type": "BABYLON.VideoTextureSettings",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberVideoTexture"
    };
}

export class FiberProceduralTextureProps extends FiberTextureProps {
    autoClear?: boolean;
    isCube?: boolean;
    isEnabled?: boolean;
    onGenerated?: () => void;
    onGeneratedObservable?: BABYLON.Observable<BABYLON.ProceduralTexture>;
    refreshRate?: number;
    setColor3?: any;
    setColor4?: any;
    setFloat?: any;
    setFloats?: any;
    setFragment?: any;
    setInt?: any;
    setMatrix?: any;
    setTexture?: any;
    setVector2?: any;
    setVector3?: any;
}

export class FiberProceduralTexturePropsHandler implements PropsHandler<BABYLON.ProceduralTexture, FiberProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.ProceduralTexture, oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.ProceduralTexture.autoClear of type 'boolean':
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // BABYLON.ProceduralTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // BABYLON.ProceduralTexture.isEnabled of type 'boolean':
        if (oldProps.isEnabled !== newProps.isEnabled) {
            updates.push({
                propertyName: 'isEnabled',
                value: newProps.isEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.ProceduralTexture.onGenerated of type '() => void/fn':
        if (oldProps.onGenerated === undefined && oldProps.onGenerated !== newProps.onGenerated) {
            updates.push({
                propertyName: 'onGenerated',
                value: newProps.onGenerated,
                type: '() => void'
            });
        }
        // BABYLON.ProceduralTexture.onGeneratedObservable of type 'BABYLON.Observable<BABYLON.ProceduralTexture>/fn':
        if (oldProps.onGeneratedObservable === undefined && oldProps.onGeneratedObservable !== newProps.onGeneratedObservable) {
            updates.push({
                propertyName: 'onGeneratedObservable',
                value: newProps.onGeneratedObservable,
                type: 'BABYLON.Observable<BABYLON.ProceduralTexture>'
            });
        }
        // BABYLON.ProceduralTexture.refreshRate of type 'number':
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // BABYLON.ProceduralTexture.setColor3 of type '(name?: string, value?: BABYLON.Color3)':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BABYLON.Color3)'
            });
        }
        // BABYLON.ProceduralTexture.setColor4 of type '(name?: string, value?: BABYLON.Color4)':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BABYLON.Color4)'
            });
        }
        // BABYLON.ProceduralTexture.setFloat of type '(name?: string, value?: number)':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number)'
            });
        }
        // BABYLON.ProceduralTexture.setFloats of type '(name?: string, value?: number[])':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[])'
            });
        }
        // BABYLON.ProceduralTexture.setFragment of type '(fragment?: any)':
        if (oldProps.setFragment !== newProps.setFragment) {
            updates.push({
                propertyName: 'setFragment',
                value: newProps.setFragment,
                type: '(fragment?: any)'
            });
        }
        // BABYLON.ProceduralTexture.setInt of type '(name?: string, value?: number)':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number)'
            });
        }
        // BABYLON.ProceduralTexture.setMatrix of type '(name?: string, value?: BABYLON.Matrix)':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BABYLON.Matrix)'
            });
        }
        // BABYLON.ProceduralTexture.setTexture of type '(name?: string, texture?: BABYLON.Texture)':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BABYLON.Texture)'
            });
        }
        // BABYLON.ProceduralTexture.setVector2 of type '(name?: string, value?: BABYLON.Vector2)':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BABYLON.Vector2)'
            });
        }
        // BABYLON.ProceduralTexture.setVector3 of type '(name?: string, value?: BABYLON.Vector3)':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BABYLON.Vector3)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 * 
 * This code has been generated
 */
export class FiberProceduralTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ProceduralTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "any",
                "optional": false
            },
            {
                "name": "fragment",
                "type": "any",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BABYLON.Texture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "isCube",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberProceduralTexture"
    };
}

export class FiberCustomProceduralTextureProps extends FiberProceduralTextureProps {
    animate?: boolean;
}

export class FiberCustomProceduralTexturePropsHandler implements PropsHandler<BABYLON.CustomProceduralTexture, FiberCustomProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.CustomProceduralTexture, oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.CustomProceduralTexture.animate of type 'boolean':
        if (oldProps.animate !== newProps.animate) {
            updates.push({
                propertyName: 'animate',
                value: newProps.animate,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 * 
 * This code has been generated
 */
export class FiberCustomProceduralTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCustomProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CustomProceduralTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "texturePath",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BABYLON.Texture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberCustomProceduralTexture"
    };
}

export class FiberNoiseProceduralTextureProps extends FiberProceduralTextureProps {
    animationSpeedFactor?: number;
    brightness?: number;
    octaves?: number;
    persistence?: number;
}

export class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<BABYLON.NoiseProceduralTexture, FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BABYLON.NoiseProceduralTexture, oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.NoiseProceduralTexture.animationSpeedFactor of type 'number':
        if (oldProps.animationSpeedFactor !== newProps.animationSpeedFactor) {
            updates.push({
                propertyName: 'animationSpeedFactor',
                value: newProps.animationSpeedFactor,
                type: 'number'
            });
        }
        // BABYLON.NoiseProceduralTexture.brightness of type 'number':
        if (oldProps.brightness !== newProps.brightness) {
            updates.push({
                propertyName: 'brightness',
                value: newProps.brightness,
                type: 'number'
            });
        }
        // BABYLON.NoiseProceduralTexture.octaves of type 'number':
        if (oldProps.octaves !== newProps.octaves) {
            updates.push({
                propertyName: 'octaves',
                value: newProps.octaves,
                type: 'number'
            });
        }
        // BABYLON.NoiseProceduralTexture.persistence of type 'number':
        if (oldProps.persistence !== newProps.persistence) {
            updates.push({
                propertyName: 'persistence',
                value: newProps.persistence,
                type: 'number'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to generate noise procedural textures
 * 
 * This code has been generated
 */
export class FiberNoiseProceduralTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNoiseProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NoiseProceduralTexture",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": true
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": true
            },
            {
                "name": "fallbackTexture",
                "type": "BABYLON.Texture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberNoiseProceduralTexture"
    };
}

export class FiberAdvancedDynamicTextureProps extends FiberDynamicTextureProps {
    background?: string;
    clipboardData?: string;
    focusedControl?: BABYLON.GUI.IFocusableControl;
    idealHeight?: number;
    idealWidth?: number;
    isForeground?: boolean;
    onClipboardObservable?: BABYLON.Observable<BABYLON.ClipboardInfo>;
    onControlPickedObservable?: BABYLON.Observable<BABYLON.GUI.Control>;
    premulAlpha?: boolean;
    renderAtIdealSize?: boolean;
    renderScale?: number;
    useSmallestIdeal?: boolean;
}

export class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<GUI.AdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(hostInstance: GUI.AdvancedDynamicTexture, oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.AdvancedDynamicTexture.background of type 'string':
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // GUI.AdvancedDynamicTexture.clipboardData of type 'string':
        if (oldProps.clipboardData !== newProps.clipboardData) {
            updates.push({
                propertyName: 'clipboardData',
                value: newProps.clipboardData,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.GUI.IFocusableControl property (not coded) GUI.AdvancedDynamicTexture.focusedControl.
        // GUI.AdvancedDynamicTexture.idealHeight of type 'number':
        if (oldProps.idealHeight !== newProps.idealHeight) {
            updates.push({
                propertyName: 'idealHeight',
                value: newProps.idealHeight,
                type: 'number'
            });
        }
        // GUI.AdvancedDynamicTexture.idealWidth of type 'number':
        if (oldProps.idealWidth !== newProps.idealWidth) {
            updates.push({
                propertyName: 'idealWidth',
                value: newProps.idealWidth,
                type: 'number'
            });
        }
        // GUI.AdvancedDynamicTexture.isForeground of type 'boolean':
        if (oldProps.isForeground !== newProps.isForeground) {
            updates.push({
                propertyName: 'isForeground',
                value: newProps.isForeground,
                type: 'boolean'
            });
        }
        // GUI.AdvancedDynamicTexture.onClipboardObservable of type 'BABYLON.Observable<BABYLON.ClipboardInfo>/fn':
        if (oldProps.onClipboardObservable === undefined && oldProps.onClipboardObservable !== newProps.onClipboardObservable) {
            updates.push({
                propertyName: 'onClipboardObservable',
                value: newProps.onClipboardObservable,
                type: 'BABYLON.Observable<BABYLON.ClipboardInfo>'
            });
        }
        // GUI.AdvancedDynamicTexture.onControlPickedObservable of type 'BABYLON.Observable<BABYLON.GUI.Control>/fn':
        if (oldProps.onControlPickedObservable === undefined && oldProps.onControlPickedObservable !== newProps.onControlPickedObservable) {
            updates.push({
                propertyName: 'onControlPickedObservable',
                value: newProps.onControlPickedObservable,
                type: 'BABYLON.Observable<BABYLON.GUI.Control>'
            });
        }
        // GUI.AdvancedDynamicTexture.premulAlpha of type 'boolean':
        if (oldProps.premulAlpha !== newProps.premulAlpha) {
            updates.push({
                propertyName: 'premulAlpha',
                value: newProps.premulAlpha,
                type: 'boolean'
            });
        }
        // GUI.AdvancedDynamicTexture.renderAtIdealSize of type 'boolean':
        if (oldProps.renderAtIdealSize !== newProps.renderAtIdealSize) {
            updates.push({
                propertyName: 'renderAtIdealSize',
                value: newProps.renderAtIdealSize,
                type: 'boolean'
            });
        }
        // GUI.AdvancedDynamicTexture.renderScale of type 'number':
        if (oldProps.renderScale !== newProps.renderScale) {
            updates.push({
                propertyName: 'renderScale',
                value: newProps.renderScale,
                type: 'number'
            });
        }
        // GUI.AdvancedDynamicTexture.useSmallestIdeal of type 'boolean':
        if (oldProps.useSmallestIdeal !== newProps.useSmallestIdeal) {
            updates.push({
                propertyName: 'useSmallestIdeal',
                value: newProps.useSmallestIdeal,
                type: 'boolean'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Class used to create texture to support 2D GUI elements
 * 
 * This code has been generated
 */
export class FiberAdvancedDynamicTexture implements HasPropsHandlers<BABYLON.BaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler(),
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.BaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AdvancedDynamicTexture",
        "namespace": "GUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberAdvancedDynamicTexture"
    };
}

export class FiberGUI3DManagerProps {
    onPickedPointChangedObservable?: BABYLON.Observable<BABYLON.Vector3>;
}

export class FiberGUI3DManagerPropsHandler implements PropsHandler<GUI.GUI3DManager, FiberGUI3DManagerProps> {
    getPropertyUpdates(hostInstance: GUI.GUI3DManager, oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // GUI.GUI3DManager.onPickedPointChangedObservable of type 'BABYLON.Observable<BABYLON.Vector3>/fn':
        if (oldProps.onPickedPointChangedObservable === undefined && oldProps.onPickedPointChangedObservable !== newProps.onPickedPointChangedObservable) {
            updates.push({
                propertyName: 'onPickedPointChangedObservable',
                value: newProps.onPickedPointChangedObservable,
                type: 'BABYLON.Observable<BABYLON.Vector3>'
            });
        }
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
        "isGUI3DControl": true,
        "className": "FiberGUI3DManager"
    };
}

export class FiberShadowGeneratorProps {
    bias?: number;
    blurBoxOffset?: number;
    blurKernel?: number;
    blurScale?: number;
    contactHardeningLightSizeUVRatio?: number;
    depthScale?: number;
    filter?: number;
    filteringQuality?: number;
    forceBackFacesOnly?: boolean;
    frustumEdgeFalloff?: number;
    normalBias?: number;
    useBlurCloseExponentialShadowMap?: boolean;
    useBlurExponentialShadowMap?: boolean;
    useCloseExponentialShadowMap?: boolean;
    useContactHardeningShadow?: boolean;
    useExponentialShadowMap?: boolean;
    useKernelBlur?: boolean;
    usePercentageCloserFiltering?: boolean;
    usePoissonSampling?: boolean;
    setDarkness?: any;
    setTransparencyShadow?: any;
}

export class FiberShadowGeneratorPropsHandler implements PropsHandler<BABYLON.ShadowGenerator, FiberShadowGeneratorProps> {
    getPropertyUpdates(hostInstance: BABYLON.ShadowGenerator, oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.ShadowGenerator.bias of type 'number':
        if (oldProps.bias !== newProps.bias) {
            updates.push({
                propertyName: 'bias',
                value: newProps.bias,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.blurBoxOffset of type 'number':
        if (oldProps.blurBoxOffset !== newProps.blurBoxOffset) {
            updates.push({
                propertyName: 'blurBoxOffset',
                value: newProps.blurBoxOffset,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.blurKernel of type 'number':
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.blurScale of type 'number':
        if (oldProps.blurScale !== newProps.blurScale) {
            updates.push({
                propertyName: 'blurScale',
                value: newProps.blurScale,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.contactHardeningLightSizeUVRatio of type 'number':
        if (oldProps.contactHardeningLightSizeUVRatio !== newProps.contactHardeningLightSizeUVRatio) {
            updates.push({
                propertyName: 'contactHardeningLightSizeUVRatio',
                value: newProps.contactHardeningLightSizeUVRatio,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.depthScale of type 'number':
        if (oldProps.depthScale !== newProps.depthScale) {
            updates.push({
                propertyName: 'depthScale',
                value: newProps.depthScale,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.filter of type 'number':
        if (oldProps.filter !== newProps.filter) {
            updates.push({
                propertyName: 'filter',
                value: newProps.filter,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.filteringQuality of type 'number':
        if (oldProps.filteringQuality !== newProps.filteringQuality) {
            updates.push({
                propertyName: 'filteringQuality',
                value: newProps.filteringQuality,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.forceBackFacesOnly of type 'boolean':
        if (oldProps.forceBackFacesOnly !== newProps.forceBackFacesOnly) {
            updates.push({
                propertyName: 'forceBackFacesOnly',
                value: newProps.forceBackFacesOnly,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.frustumEdgeFalloff of type 'number':
        if (oldProps.frustumEdgeFalloff !== newProps.frustumEdgeFalloff) {
            updates.push({
                propertyName: 'frustumEdgeFalloff',
                value: newProps.frustumEdgeFalloff,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.normalBias of type 'number':
        if (oldProps.normalBias !== newProps.normalBias) {
            updates.push({
                propertyName: 'normalBias',
                value: newProps.normalBias,
                type: 'number'
            });
        }
        // BABYLON.ShadowGenerator.useBlurCloseExponentialShadowMap of type 'boolean':
        if (oldProps.useBlurCloseExponentialShadowMap !== newProps.useBlurCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurCloseExponentialShadowMap',
                value: newProps.useBlurCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.useBlurExponentialShadowMap of type 'boolean':
        if (oldProps.useBlurExponentialShadowMap !== newProps.useBlurExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurExponentialShadowMap',
                value: newProps.useBlurExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.useCloseExponentialShadowMap of type 'boolean':
        if (oldProps.useCloseExponentialShadowMap !== newProps.useCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useCloseExponentialShadowMap',
                value: newProps.useCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.useContactHardeningShadow of type 'boolean':
        if (oldProps.useContactHardeningShadow !== newProps.useContactHardeningShadow) {
            updates.push({
                propertyName: 'useContactHardeningShadow',
                value: newProps.useContactHardeningShadow,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.useExponentialShadowMap of type 'boolean':
        if (oldProps.useExponentialShadowMap !== newProps.useExponentialShadowMap) {
            updates.push({
                propertyName: 'useExponentialShadowMap',
                value: newProps.useExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.useKernelBlur of type 'boolean':
        if (oldProps.useKernelBlur !== newProps.useKernelBlur) {
            updates.push({
                propertyName: 'useKernelBlur',
                value: newProps.useKernelBlur,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.usePercentageCloserFiltering of type 'boolean':
        if (oldProps.usePercentageCloserFiltering !== newProps.usePercentageCloserFiltering) {
            updates.push({
                propertyName: 'usePercentageCloserFiltering',
                value: newProps.usePercentageCloserFiltering,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.usePoissonSampling of type 'boolean':
        if (oldProps.usePoissonSampling !== newProps.usePoissonSampling) {
            updates.push({
                propertyName: 'usePoissonSampling',
                value: newProps.usePoissonSampling,
                type: 'boolean'
            });
        }
        // BABYLON.ShadowGenerator.setDarkness of type '(darkness?: number)':
        if (oldProps.setDarkness !== newProps.setDarkness) {
            updates.push({
                propertyName: 'setDarkness',
                value: newProps.setDarkness,
                type: '(darkness?: number)'
            });
        }
        // BABYLON.ShadowGenerator.setTransparencyShadow of type '(transparent?: boolean)':
        if (oldProps.setTransparencyShadow !== newProps.setTransparencyShadow) {
            updates.push({
                propertyName: 'setTransparencyShadow',
                value: newProps.setTransparencyShadow,
                type: '(transparent?: boolean)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 * 
 * This code has been generated
 */
export class FiberShadowGenerator implements HasPropsHandlers<BABYLON.ShadowGenerator, FiberShadowGeneratorProps> {
    private propsHandlers: PropsHandler<BABYLON.ShadowGenerator, FiberShadowGeneratorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowGeneratorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.ShadowGenerator, FiberShadowGeneratorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.ShadowGenerator, FiberShadowGeneratorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowGenerator",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "mapSize",
                "type": "number",
                "optional": false
            },
            {
                "name": "light",
                "type": "BABYLON.IShadowLight",
                "optional": false
            },
            {
                "name": "usefulFloatFirst",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "delayCreation": true,
        "className": "FiberShadowGenerator"
    };
}

export class FiberEnvironmentHelperProps {
    onErrorObservable?: BABYLON.Observable<{ message?: string; exception?: any; }>;
    setMainColor?: any;
}

export class FiberEnvironmentHelperPropsHandler implements PropsHandler<BABYLON.EnvironmentHelper, FiberEnvironmentHelperProps> {
    getPropertyUpdates(hostInstance: BABYLON.EnvironmentHelper, oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BABYLON.EnvironmentHelper.onErrorObservable of type 'BABYLON.Observable<{ message?: string; exception?: any; }>/fn':
        if (oldProps.onErrorObservable === undefined && oldProps.onErrorObservable !== newProps.onErrorObservable) {
            updates.push({
                propertyName: 'onErrorObservable',
                value: newProps.onErrorObservable,
                type: 'BABYLON.Observable<{ message?: string; exception?: any; }>'
            });
        }
        // BABYLON.EnvironmentHelper.setMainColor of type '(color?: BABYLON.Color3)':
        if (oldProps.setMainColor !== newProps.setMainColor) {
            updates.push({
                propertyName: 'setMainColor',
                value: newProps.setMainColor,
                type: '(color?: BABYLON.Color3)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 * 
 * This code has been generated
 */
export class FiberEnvironmentHelper implements HasPropsHandlers<BABYLON.EnvironmentHelper, FiberEnvironmentHelperProps> {
    private propsHandlers: PropsHandler<BABYLON.EnvironmentHelper, FiberEnvironmentHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEnvironmentHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.EnvironmentHelper, FiberEnvironmentHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.EnvironmentHelper, FiberEnvironmentHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EnvironmentHelper",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "options",
                "type": "Partial<BABYLON.IEnvironmentHelperOptions>",
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
        "isEnvironment": true,
        "className": "FiberEnvironmentHelper"
    };
}

export class FiberVRExperienceHelperProps {
    beforeRender?: any;
    displayGaze?: boolean;
    displayLaserPointer?: boolean;
    displayVRButton?: any;
    gazeTrackerMesh?: BABYLON.Mesh;
    meshSelectionPredicate?: (mesh: BABYLON.AbstractMesh) => boolean;
    moveButtonToBottomRight?: any;
    onAfterCameraTeleport?: BABYLON.Observable<BABYLON.Vector3>;
    onBeforeCameraTeleport?: BABYLON.Observable<BABYLON.Vector3>;
    onControllerMeshLoadedObservable?: BABYLON.Observable<BABYLON.WebVRController>;
    onEnteringVRObservable?: BABYLON.Observable<BABYLON.VRExperienceHelper>;
    onExitingVRObservable?: BABYLON.Observable<BABYLON.VRExperienceHelper>;
    onNewMeshPicked?: BABYLON.Observable<BABYLON.PickingInfo>;
    onNewMeshSelected?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onSelectedMeshUnselected?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onVRDisplayChanged?: any;
    onVrDisplayPresentChange?: any;
    position?: BABYLON.Vector3;
    raySelectionPredicate?: (mesh: BABYLON.AbstractMesh) => boolean;
    teleportationEnabled?: boolean;
    teleportationTarget?: BABYLON.Mesh;
    updateButtonVisibility?: any;
    updateGazeTrackerScale?: boolean;
    webVROptions?: BABYLON.VRExperienceHelperOptions;
}

export class FiberVRExperienceHelperPropsHandler implements PropsHandler<BABYLON.VRExperienceHelper, FiberVRExperienceHelperProps> {
    getPropertyUpdates(hostInstance: BABYLON.VRExperienceHelper, oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) BABYLON.VRExperienceHelper.beforeRender.
        // BABYLON.VRExperienceHelper.displayGaze of type 'boolean':
        if (oldProps.displayGaze !== newProps.displayGaze) {
            updates.push({
                propertyName: 'displayGaze',
                value: newProps.displayGaze,
                type: 'boolean'
            });
        }
        // BABYLON.VRExperienceHelper.displayLaserPointer of type 'boolean':
        if (oldProps.displayLaserPointer !== newProps.displayLaserPointer) {
            updates.push({
                propertyName: 'displayLaserPointer',
                value: newProps.displayLaserPointer,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.VRExperienceHelper.displayVRButton.
        // TODO: type: BABYLON.Mesh property (not coded) BABYLON.VRExperienceHelper.gazeTrackerMesh.
        // TODO: type: (mesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.VRExperienceHelper.meshSelectionPredicate.
        // TODO: type: any property (not coded) BABYLON.VRExperienceHelper.moveButtonToBottomRight.
        // BABYLON.VRExperienceHelper.onAfterCameraTeleport of type 'BABYLON.Observable<BABYLON.Vector3>/fn':
        if (oldProps.onAfterCameraTeleport === undefined && oldProps.onAfterCameraTeleport !== newProps.onAfterCameraTeleport) {
            updates.push({
                propertyName: 'onAfterCameraTeleport',
                value: newProps.onAfterCameraTeleport,
                type: 'BABYLON.Observable<BABYLON.Vector3>'
            });
        }
        // BABYLON.VRExperienceHelper.onBeforeCameraTeleport of type 'BABYLON.Observable<BABYLON.Vector3>/fn':
        if (oldProps.onBeforeCameraTeleport === undefined && oldProps.onBeforeCameraTeleport !== newProps.onBeforeCameraTeleport) {
            updates.push({
                propertyName: 'onBeforeCameraTeleport',
                value: newProps.onBeforeCameraTeleport,
                type: 'BABYLON.Observable<BABYLON.Vector3>'
            });
        }
        // BABYLON.VRExperienceHelper.onControllerMeshLoadedObservable of type 'BABYLON.Observable<BABYLON.WebVRController>/fn':
        if (oldProps.onControllerMeshLoadedObservable === undefined && oldProps.onControllerMeshLoadedObservable !== newProps.onControllerMeshLoadedObservable) {
            updates.push({
                propertyName: 'onControllerMeshLoadedObservable',
                value: newProps.onControllerMeshLoadedObservable,
                type: 'BABYLON.Observable<BABYLON.WebVRController>'
            });
        }
        // BABYLON.VRExperienceHelper.onEnteringVRObservable of type 'BABYLON.Observable<BABYLON.VRExperienceHelper>/fn':
        if (oldProps.onEnteringVRObservable === undefined && oldProps.onEnteringVRObservable !== newProps.onEnteringVRObservable) {
            updates.push({
                propertyName: 'onEnteringVRObservable',
                value: newProps.onEnteringVRObservable,
                type: 'BABYLON.Observable<BABYLON.VRExperienceHelper>'
            });
        }
        // BABYLON.VRExperienceHelper.onExitingVRObservable of type 'BABYLON.Observable<BABYLON.VRExperienceHelper>/fn':
        if (oldProps.onExitingVRObservable === undefined && oldProps.onExitingVRObservable !== newProps.onExitingVRObservable) {
            updates.push({
                propertyName: 'onExitingVRObservable',
                value: newProps.onExitingVRObservable,
                type: 'BABYLON.Observable<BABYLON.VRExperienceHelper>'
            });
        }
        // BABYLON.VRExperienceHelper.onNewMeshPicked of type 'BABYLON.Observable<BABYLON.PickingInfo>/fn':
        if (oldProps.onNewMeshPicked === undefined && oldProps.onNewMeshPicked !== newProps.onNewMeshPicked) {
            updates.push({
                propertyName: 'onNewMeshPicked',
                value: newProps.onNewMeshPicked,
                type: 'BABYLON.Observable<BABYLON.PickingInfo>'
            });
        }
        // BABYLON.VRExperienceHelper.onNewMeshSelected of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onNewMeshSelected === undefined && oldProps.onNewMeshSelected !== newProps.onNewMeshSelected) {
            updates.push({
                propertyName: 'onNewMeshSelected',
                value: newProps.onNewMeshSelected,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.VRExperienceHelper.onSelectedMeshUnselected of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onSelectedMeshUnselected === undefined && oldProps.onSelectedMeshUnselected !== newProps.onSelectedMeshUnselected) {
            updates.push({
                propertyName: 'onSelectedMeshUnselected',
                value: newProps.onSelectedMeshUnselected,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.VRExperienceHelper.onVRDisplayChanged of type 'any/fn':
        if (oldProps.onVRDisplayChanged === undefined && oldProps.onVRDisplayChanged !== newProps.onVRDisplayChanged) {
            updates.push({
                propertyName: 'onVRDisplayChanged',
                value: newProps.onVRDisplayChanged,
                type: 'any'
            });
        }
        // BABYLON.VRExperienceHelper.onVrDisplayPresentChange of type 'any/fn':
        if (oldProps.onVrDisplayPresentChange === undefined && oldProps.onVrDisplayPresentChange !== newProps.onVrDisplayPresentChange) {
            updates.push({
                propertyName: 'onVrDisplayPresentChange',
                value: newProps.onVrDisplayPresentChange,
                type: 'any'
            });
        }
        // BABYLON.VRExperienceHelper.position of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: (mesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.VRExperienceHelper.raySelectionPredicate.
        // BABYLON.VRExperienceHelper.teleportationEnabled of type 'boolean':
        if (oldProps.teleportationEnabled !== newProps.teleportationEnabled) {
            updates.push({
                propertyName: 'teleportationEnabled',
                value: newProps.teleportationEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Mesh property (not coded) BABYLON.VRExperienceHelper.teleportationTarget.
        // TODO: type: any property (not coded) BABYLON.VRExperienceHelper.updateButtonVisibility.
        // BABYLON.VRExperienceHelper.updateGazeTrackerScale of type 'boolean':
        if (oldProps.updateGazeTrackerScale !== newProps.updateGazeTrackerScale) {
            updates.push({
                propertyName: 'updateGazeTrackerScale',
                value: newProps.updateGazeTrackerScale,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.VRExperienceHelperOptions property (not coded) BABYLON.VRExperienceHelper.webVROptions.
        return updates.length == 0 ? null : updates;
    }
}

/**
 * Helps to quickly add VR support to an existing scene.
 * See http://doc.babylonjs.com/how_to/webvr_helper
 * 
 * This code has been generated
 */
export class FiberVRExperienceHelper implements HasPropsHandlers<BABYLON.VRExperienceHelper, FiberVRExperienceHelperProps> {
    private propsHandlers: PropsHandler<BABYLON.VRExperienceHelper, FiberVRExperienceHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRExperienceHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BABYLON.VRExperienceHelper, FiberVRExperienceHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BABYLON.VRExperienceHelper, FiberVRExperienceHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRExperienceHelper",
        "namespace": "BABYLON",
        "parameters": [
            {
                "name": "scene",
                "type": "BABYLON.Scene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BABYLON.VRExperienceHelperOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRExperienceHelper"
    };
}

export class FiberSceneProps {
    actionManager?: BABYLON.ActionManager;
    activeCamera?: BABYLON.Camera;
    activeCameras?: BABYLON.Camera[];
    afterCameraRender?: () => void;
    afterRender?: () => void;
    ambientColor?: BABYLON.Color3;
    animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride;
    animationsEnabled?: boolean;
    animationTimeScale?: number;
    autoClear?: boolean;
    autoClearDepthAndStencil?: boolean;
    beforeCameraRender?: () => void;
    beforeRender?: () => void;
    blockfreeActiveMeshesAndRenderingGroups?: boolean;
    blockMaterialDirtyMechanism?: boolean;
    cameraToUseForPointers?: BABYLON.Camera;
    clearColor?: BABYLON.Color4;
    clipPlane?: BABYLON.Plane;
    clipPlane2?: BABYLON.Plane;
    clipPlane3?: BABYLON.Plane;
    clipPlane4?: BABYLON.Plane;
    collisionCoordinator?: BABYLON.ICollisionCoordinator;
    collisionsEnabled?: boolean;
    constantlyUpdateMeshUnderPointer?: boolean;
    customRenderTargets?: BABYLON.RenderTargetTexture[];
    defaultCursor?: string;
    defaultMaterial?: BABYLON.Material;
    disableOfflineSupportExceptionRules?: RegExp[];
    dispatchAllSubMeshesOfActiveMeshes?: boolean;
    dumpNextRenderTargets?: boolean;
    environmentTexture?: BABYLON.BaseTexture;
    fogColor?: BABYLON.Color3;
    fogDensity?: number;
    fogEnabled?: boolean;
    fogEnd?: number;
    fogMode?: number;
    fogStart?: number;
    forcePointsCloud?: boolean;
    forceWireframe?: boolean;
    geometriesById?: any;
    getActiveMeshCandidates?: () => BABYLON.ISmartArrayLike<BABYLON.AbstractMesh>;
    getActiveSubMeshCandidates?: (mesh: BABYLON.AbstractMesh) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>;
    getCollidingSubMeshCandidates?: (mesh: BABYLON.AbstractMesh, collider: BABYLON.Collider) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>;
    getDeterministicFrameTime?: () => number;
    getIntersectingSubMeshCandidates?: (mesh: BABYLON.AbstractMesh, localRay: BABYLON.Ray) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>;
    gravity?: BABYLON.Vector3;
    hoverCursor?: string;
    importedMeshesFiles?: String[];
    lensFlaresEnabled?: boolean;
    lightsEnabled?: boolean;
    loadingPluginName?: string;
    metadata?: any;
    offlineProvider?: BABYLON.IOfflineProvider;
    onActiveCameraChanged?: BABYLON.Observable<BABYLON.Scene>;
    onAfterActiveMeshesEvaluationObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterAnimationsObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterCameraRenderObservable?: BABYLON.Observable<BABYLON.Camera>;
    onAfterDrawPhaseObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterParticlesRenderingObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterRenderingGroupObservable?: BABYLON.Observable<BABYLON.RenderingGroupInfo>;
    onAfterRenderObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterRenderTargetsRenderObservable?: BABYLON.Observable<BABYLON.Scene>;
    onAfterStepObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeActiveMeshesEvaluationObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeAnimationsObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeCameraRenderObservable?: BABYLON.Observable<BABYLON.Camera>;
    onBeforeDrawPhaseObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeParticlesRenderingObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeRenderingGroupObservable?: BABYLON.Observable<BABYLON.RenderingGroupInfo>;
    onBeforeRenderObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeRenderTargetsRenderObservable?: BABYLON.Observable<BABYLON.Scene>;
    onBeforeStepObservable?: BABYLON.Observable<BABYLON.Scene>;
    onCameraRemovedObservable?: BABYLON.Observable<BABYLON.Camera>;
    onDataLoadedObservable?: BABYLON.Observable<BABYLON.Scene>;
    onDispose?: () => void;
    onDisposeObservable?: BABYLON.Observable<BABYLON.Scene>;
    onGeometryRemovedObservable?: BABYLON.Observable<BABYLON.Geometry>;
    onKeyboardObservable?: BABYLON.Observable<BABYLON.KeyboardInfo>;
    onLightRemovedObservable?: BABYLON.Observable<BABYLON.Light>;
    onMaterialRemovedObservable?: BABYLON.Observable<BABYLON.Material>;
    onMeshImportedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onMeshRemovedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onNewCameraAddedObservable?: BABYLON.Observable<BABYLON.Camera>;
    onNewGeometryAddedObservable?: BABYLON.Observable<BABYLON.Geometry>;
    onNewLightAddedObservable?: BABYLON.Observable<BABYLON.Light>;
    onNewMaterialAddedObservable?: BABYLON.Observable<BABYLON.Material>;
    onNewMeshAddedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>;
    onNewTextureAddedObservable?: BABYLON.Observable<BABYLON.BaseTexture>;
    onNewTransformNodeAddedObservable?: BABYLON.Observable<BABYLON.TransformNode>;
    onPointerDown?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void;
    onPointerMove?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void;
    onPointerObservable?: BABYLON.Observable<BABYLON.PointerInfo>;
    onPointerPick?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo) => void;
    onPointerUp?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void;
    onPreKeyboardObservable?: BABYLON.Observable<BABYLON.KeyboardInfoPre>;
    onPrePointerObservable?: BABYLON.Observable<BABYLON.PointerInfoPre>;
    onReadyObservable?: BABYLON.Observable<BABYLON.Scene>;
    onTextureRemovedObservable?: BABYLON.Observable<BABYLON.BaseTexture>;
    onTransformNodeRemovedObservable?: BABYLON.Observable<BABYLON.TransformNode>;
    particlesEnabled?: boolean;
    pointerDownPredicate?: (Mesh: BABYLON.AbstractMesh) => boolean;
    pointerMovePredicate?: (Mesh: BABYLON.AbstractMesh) => boolean;
    pointerUpPredicate?: (Mesh: BABYLON.AbstractMesh) => boolean;
    postProcesses?: BABYLON.PostProcess[];
    postProcessesEnabled?: boolean;
    postProcessManager?: BABYLON.PostProcessManager;
    preventDefaultOnPointerDown?: boolean;
    preventDefaultOnPointerUp?: boolean;
    probesEnabled?: boolean;
    proceduralTexturesEnabled?: boolean;
    renderTargetsEnabled?: boolean;
    requireLightSorting?: boolean;
    reservedDataStore?: any;
    shadowsEnabled?: boolean;
    skeletonsEnabled?: boolean;
    spritesEnabled?: boolean;
    texturesEnabled?: boolean;
    useConstantAnimationDeltaTime?: boolean;
    useDelayedTextureLoading?: boolean;
    useRightHandedSystem?: boolean;
    workerCollisions?: boolean;
    setActiveCameraByID?: any;
    setActiveCameraByName?: any;
    setPointerOverMesh?: any;
    setRenderingAutoClearDepthStencil?: any;
    setRenderingOrder?: any;
    setStepId?: any;
    setTransformMatrix?: any;
}

export class FiberScenePropsHandler implements PropsHandler<BABYLON.Scene, FiberSceneProps> {
    getPropertyUpdates(hostInstance: BABYLON.Scene, oldProps: FiberSceneProps, newProps: FiberSceneProps, scene: BABYLON.Scene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.ActionManager property (not coded) BABYLON.Scene.actionManager.
        // TODO: type: BABYLON.Camera property (not coded) BABYLON.Scene.activeCamera.
        // TODO: type: BABYLON.Camera[] property (not coded) BABYLON.Scene.activeCameras.
        // TODO: type: () => void property (not coded) BABYLON.Scene.afterCameraRender.
        // TODO: type: () => void property (not coded) BABYLON.Scene.afterRender.
        // BABYLON.Scene.ambientColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BABYLON.Color3'
            });
        }
        // TODO: type: BABYLON.AnimationPropertiesOverride property (not coded) BABYLON.Scene.animationPropertiesOverride.
        // BABYLON.Scene.animationsEnabled of type 'boolean':
        if (oldProps.animationsEnabled !== newProps.animationsEnabled) {
            updates.push({
                propertyName: 'animationsEnabled',
                value: newProps.animationsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.animationTimeScale of type 'number':
        if (oldProps.animationTimeScale !== newProps.animationTimeScale) {
            updates.push({
                propertyName: 'animationTimeScale',
                value: newProps.animationTimeScale,
                type: 'number'
            });
        }
        // BABYLON.Scene.autoClear of type 'boolean':
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.autoClearDepthAndStencil of type 'boolean':
        if (oldProps.autoClearDepthAndStencil !== newProps.autoClearDepthAndStencil) {
            updates.push({
                propertyName: 'autoClearDepthAndStencil',
                value: newProps.autoClearDepthAndStencil,
                type: 'boolean'
            });
        }
        // TODO: type: () => void property (not coded) BABYLON.Scene.beforeCameraRender.
        // TODO: type: () => void property (not coded) BABYLON.Scene.beforeRender.
        // BABYLON.Scene.blockfreeActiveMeshesAndRenderingGroups of type 'boolean':
        if (oldProps.blockfreeActiveMeshesAndRenderingGroups !== newProps.blockfreeActiveMeshesAndRenderingGroups) {
            updates.push({
                propertyName: 'blockfreeActiveMeshesAndRenderingGroups',
                value: newProps.blockfreeActiveMeshesAndRenderingGroups,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.blockMaterialDirtyMechanism of type 'boolean':
        if (oldProps.blockMaterialDirtyMechanism !== newProps.blockMaterialDirtyMechanism) {
            updates.push({
                propertyName: 'blockMaterialDirtyMechanism',
                value: newProps.blockMaterialDirtyMechanism,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Camera property (not coded) BABYLON.Scene.cameraToUseForPointers.
        // BABYLON.Scene.clearColor of BABYLON.Color4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.clearColor && (!oldProps.clearColor || oldProps.clearColor.r !== newProps.clearColor.r || oldProps.clearColor.g !== newProps.clearColor.g || oldProps.clearColor.b !== newProps.clearColor.b || oldProps.clearColor.a !== newProps.clearColor.a)) {
            updates.push({
                propertyName: 'clearColor',
                value: newProps.clearColor,
                type: 'BABYLON.Color4'
            });
        }
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.Scene.clipPlane.
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.Scene.clipPlane2.
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.Scene.clipPlane3.
        // TODO: type: BABYLON.Plane property (not coded) BABYLON.Scene.clipPlane4.
        // TODO: type: BABYLON.ICollisionCoordinator property (not coded) BABYLON.Scene.collisionCoordinator.
        // BABYLON.Scene.collisionsEnabled of type 'boolean':
        if (oldProps.collisionsEnabled !== newProps.collisionsEnabled) {
            updates.push({
                propertyName: 'collisionsEnabled',
                value: newProps.collisionsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.constantlyUpdateMeshUnderPointer of type 'boolean':
        if (oldProps.constantlyUpdateMeshUnderPointer !== newProps.constantlyUpdateMeshUnderPointer) {
            updates.push({
                propertyName: 'constantlyUpdateMeshUnderPointer',
                value: newProps.constantlyUpdateMeshUnderPointer,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.RenderTargetTexture[] property (not coded) BABYLON.Scene.customRenderTargets.
        // BABYLON.Scene.defaultCursor of type 'string':
        if (oldProps.defaultCursor !== newProps.defaultCursor) {
            updates.push({
                propertyName: 'defaultCursor',
                value: newProps.defaultCursor,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.Material property (not coded) BABYLON.Scene.defaultMaterial.
        // TODO: type: RegExp[] property (not coded) BABYLON.Scene.disableOfflineSupportExceptionRules.
        // BABYLON.Scene.dispatchAllSubMeshesOfActiveMeshes of type 'boolean':
        if (oldProps.dispatchAllSubMeshesOfActiveMeshes !== newProps.dispatchAllSubMeshesOfActiveMeshes) {
            updates.push({
                propertyName: 'dispatchAllSubMeshesOfActiveMeshes',
                value: newProps.dispatchAllSubMeshesOfActiveMeshes,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.dumpNextRenderTargets of type 'boolean':
        if (oldProps.dumpNextRenderTargets !== newProps.dumpNextRenderTargets) {
            updates.push({
                propertyName: 'dumpNextRenderTargets',
                value: newProps.dumpNextRenderTargets,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.BaseTexture property (not coded) BABYLON.Scene.environmentTexture.
        // BABYLON.Scene.fogColor of BABYLON.Color3 uses object equals to find diffs:
        if (newProps.fogColor && (!oldProps.fogColor || !oldProps.fogColor.equals(newProps.fogColor))) {
            updates.push({
                propertyName: 'fogColor',
                value: newProps.fogColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLON.Scene.fogDensity of type 'number':
        if (oldProps.fogDensity !== newProps.fogDensity) {
            updates.push({
                propertyName: 'fogDensity',
                value: newProps.fogDensity,
                type: 'number'
            });
        }
        // BABYLON.Scene.fogEnabled of type 'boolean':
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.fogEnd of type 'number':
        if (oldProps.fogEnd !== newProps.fogEnd) {
            updates.push({
                propertyName: 'fogEnd',
                value: newProps.fogEnd,
                type: 'number'
            });
        }
        // BABYLON.Scene.fogMode of type 'number':
        if (oldProps.fogMode !== newProps.fogMode) {
            updates.push({
                propertyName: 'fogMode',
                value: newProps.fogMode,
                type: 'number'
            });
        }
        // BABYLON.Scene.fogStart of type 'number':
        if (oldProps.fogStart !== newProps.fogStart) {
            updates.push({
                propertyName: 'fogStart',
                value: newProps.fogStart,
                type: 'number'
            });
        }
        // BABYLON.Scene.forcePointsCloud of type 'boolean':
        if (oldProps.forcePointsCloud !== newProps.forcePointsCloud) {
            updates.push({
                propertyName: 'forcePointsCloud',
                value: newProps.forcePointsCloud,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.forceWireframe of type 'boolean':
        if (oldProps.forceWireframe !== newProps.forceWireframe) {
            updates.push({
                propertyName: 'forceWireframe',
                value: newProps.forceWireframe,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Scene.geometriesById.
        // TODO: type: () => BABYLON.ISmartArrayLike<BABYLON.AbstractMesh> property (not coded) BABYLON.Scene.getActiveMeshCandidates.
        // TODO: type: (mesh: BABYLON.AbstractMesh) => BABYLON.ISmartArrayLike<BABYLON.SubMesh> property (not coded) BABYLON.Scene.getActiveSubMeshCandidates.
        // TODO: type: (mesh: BABYLON.AbstractMesh, collider: BABYLON.Collider) => BABYLON.ISmartArrayLike<BABYLON.SubMesh> property (not coded) BABYLON.Scene.getCollidingSubMeshCandidates.
        // TODO: type: () => number property (not coded) BABYLON.Scene.getDeterministicFrameTime.
        // TODO: type: (mesh: BABYLON.AbstractMesh, localRay: BABYLON.Ray) => BABYLON.ISmartArrayLike<BABYLON.SubMesh> property (not coded) BABYLON.Scene.getIntersectingSubMeshCandidates.
        // BABYLON.Scene.gravity of BABYLON.Vector3 uses object equals to find diffs:
        if (newProps.gravity && (!oldProps.gravity || !oldProps.gravity.equals(newProps.gravity))) {
            updates.push({
                propertyName: 'gravity',
                value: newProps.gravity,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLON.Scene.hoverCursor of type 'string':
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // TODO: type: String[] property (not coded) BABYLON.Scene.importedMeshesFiles.
        // BABYLON.Scene.lensFlaresEnabled of type 'boolean':
        if (oldProps.lensFlaresEnabled !== newProps.lensFlaresEnabled) {
            updates.push({
                propertyName: 'lensFlaresEnabled',
                value: newProps.lensFlaresEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.lightsEnabled of type 'boolean':
        if (oldProps.lightsEnabled !== newProps.lightsEnabled) {
            updates.push({
                propertyName: 'lightsEnabled',
                value: newProps.lightsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.loadingPluginName of type 'string':
        if (oldProps.loadingPluginName !== newProps.loadingPluginName) {
            updates.push({
                propertyName: 'loadingPluginName',
                value: newProps.loadingPluginName,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Scene.metadata.
        // TODO: type: BABYLON.IOfflineProvider property (not coded) BABYLON.Scene.offlineProvider.
        // BABYLON.Scene.onActiveCameraChanged of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onActiveCameraChanged === undefined && oldProps.onActiveCameraChanged !== newProps.onActiveCameraChanged) {
            updates.push({
                propertyName: 'onActiveCameraChanged',
                value: newProps.onActiveCameraChanged,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterActiveMeshesEvaluationObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterActiveMeshesEvaluationObservable === undefined && oldProps.onAfterActiveMeshesEvaluationObservable !== newProps.onAfterActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onAfterActiveMeshesEvaluationObservable',
                value: newProps.onAfterActiveMeshesEvaluationObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterAnimationsObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterAnimationsObservable === undefined && oldProps.onAfterAnimationsObservable !== newProps.onAfterAnimationsObservable) {
            updates.push({
                propertyName: 'onAfterAnimationsObservable',
                value: newProps.onAfterAnimationsObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterCameraRenderObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onAfterCameraRenderObservable === undefined && oldProps.onAfterCameraRenderObservable !== newProps.onAfterCameraRenderObservable) {
            updates.push({
                propertyName: 'onAfterCameraRenderObservable',
                value: newProps.onAfterCameraRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Scene.onAfterDrawPhaseObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterDrawPhaseObservable === undefined && oldProps.onAfterDrawPhaseObservable !== newProps.onAfterDrawPhaseObservable) {
            updates.push({
                propertyName: 'onAfterDrawPhaseObservable',
                value: newProps.onAfterDrawPhaseObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterParticlesRenderingObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterParticlesRenderingObservable === undefined && oldProps.onAfterParticlesRenderingObservable !== newProps.onAfterParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onAfterParticlesRenderingObservable',
                value: newProps.onAfterParticlesRenderingObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterRenderingGroupObservable of type 'BABYLON.Observable<BABYLON.RenderingGroupInfo>/fn':
        if (oldProps.onAfterRenderingGroupObservable === undefined && oldProps.onAfterRenderingGroupObservable !== newProps.onAfterRenderingGroupObservable) {
            updates.push({
                propertyName: 'onAfterRenderingGroupObservable',
                value: newProps.onAfterRenderingGroupObservable,
                type: 'BABYLON.Observable<BABYLON.RenderingGroupInfo>'
            });
        }
        // BABYLON.Scene.onAfterRenderObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterRenderObservable === undefined && oldProps.onAfterRenderObservable !== newProps.onAfterRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderObservable',
                value: newProps.onAfterRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterRenderTargetsRenderObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterRenderTargetsRenderObservable === undefined && oldProps.onAfterRenderTargetsRenderObservable !== newProps.onAfterRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderTargetsRenderObservable',
                value: newProps.onAfterRenderTargetsRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onAfterStepObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onAfterStepObservable === undefined && oldProps.onAfterStepObservable !== newProps.onAfterStepObservable) {
            updates.push({
                propertyName: 'onAfterStepObservable',
                value: newProps.onAfterStepObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeActiveMeshesEvaluationObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeActiveMeshesEvaluationObservable === undefined && oldProps.onBeforeActiveMeshesEvaluationObservable !== newProps.onBeforeActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onBeforeActiveMeshesEvaluationObservable',
                value: newProps.onBeforeActiveMeshesEvaluationObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeAnimationsObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeAnimationsObservable === undefined && oldProps.onBeforeAnimationsObservable !== newProps.onBeforeAnimationsObservable) {
            updates.push({
                propertyName: 'onBeforeAnimationsObservable',
                value: newProps.onBeforeAnimationsObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeCameraRenderObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onBeforeCameraRenderObservable === undefined && oldProps.onBeforeCameraRenderObservable !== newProps.onBeforeCameraRenderObservable) {
            updates.push({
                propertyName: 'onBeforeCameraRenderObservable',
                value: newProps.onBeforeCameraRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Scene.onBeforeDrawPhaseObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeDrawPhaseObservable === undefined && oldProps.onBeforeDrawPhaseObservable !== newProps.onBeforeDrawPhaseObservable) {
            updates.push({
                propertyName: 'onBeforeDrawPhaseObservable',
                value: newProps.onBeforeDrawPhaseObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeParticlesRenderingObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeParticlesRenderingObservable === undefined && oldProps.onBeforeParticlesRenderingObservable !== newProps.onBeforeParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onBeforeParticlesRenderingObservable',
                value: newProps.onBeforeParticlesRenderingObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeRenderingGroupObservable of type 'BABYLON.Observable<BABYLON.RenderingGroupInfo>/fn':
        if (oldProps.onBeforeRenderingGroupObservable === undefined && oldProps.onBeforeRenderingGroupObservable !== newProps.onBeforeRenderingGroupObservable) {
            updates.push({
                propertyName: 'onBeforeRenderingGroupObservable',
                value: newProps.onBeforeRenderingGroupObservable,
                type: 'BABYLON.Observable<BABYLON.RenderingGroupInfo>'
            });
        }
        // BABYLON.Scene.onBeforeRenderObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeRenderObservable === undefined && oldProps.onBeforeRenderObservable !== newProps.onBeforeRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderObservable',
                value: newProps.onBeforeRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeRenderTargetsRenderObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeRenderTargetsRenderObservable === undefined && oldProps.onBeforeRenderTargetsRenderObservable !== newProps.onBeforeRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderTargetsRenderObservable',
                value: newProps.onBeforeRenderTargetsRenderObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onBeforeStepObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onBeforeStepObservable === undefined && oldProps.onBeforeStepObservable !== newProps.onBeforeStepObservable) {
            updates.push({
                propertyName: 'onBeforeStepObservable',
                value: newProps.onBeforeStepObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onCameraRemovedObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onCameraRemovedObservable === undefined && oldProps.onCameraRemovedObservable !== newProps.onCameraRemovedObservable) {
            updates.push({
                propertyName: 'onCameraRemovedObservable',
                value: newProps.onCameraRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Scene.onDataLoadedObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onDataLoadedObservable === undefined && oldProps.onDataLoadedObservable !== newProps.onDataLoadedObservable) {
            updates.push({
                propertyName: 'onDataLoadedObservable',
                value: newProps.onDataLoadedObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // BABYLON.Scene.onDisposeObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onGeometryRemovedObservable of type 'BABYLON.Observable<BABYLON.Geometry>/fn':
        if (oldProps.onGeometryRemovedObservable === undefined && oldProps.onGeometryRemovedObservable !== newProps.onGeometryRemovedObservable) {
            updates.push({
                propertyName: 'onGeometryRemovedObservable',
                value: newProps.onGeometryRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.Geometry>'
            });
        }
        // BABYLON.Scene.onKeyboardObservable of type 'BABYLON.Observable<BABYLON.KeyboardInfo>/fn':
        if (oldProps.onKeyboardObservable === undefined && oldProps.onKeyboardObservable !== newProps.onKeyboardObservable) {
            updates.push({
                propertyName: 'onKeyboardObservable',
                value: newProps.onKeyboardObservable,
                type: 'BABYLON.Observable<BABYLON.KeyboardInfo>'
            });
        }
        // BABYLON.Scene.onLightRemovedObservable of type 'BABYLON.Observable<BABYLON.Light>/fn':
        if (oldProps.onLightRemovedObservable === undefined && oldProps.onLightRemovedObservable !== newProps.onLightRemovedObservable) {
            updates.push({
                propertyName: 'onLightRemovedObservable',
                value: newProps.onLightRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.Light>'
            });
        }
        // BABYLON.Scene.onMaterialRemovedObservable of type 'BABYLON.Observable<BABYLON.Material>/fn':
        if (oldProps.onMaterialRemovedObservable === undefined && oldProps.onMaterialRemovedObservable !== newProps.onMaterialRemovedObservable) {
            updates.push({
                propertyName: 'onMaterialRemovedObservable',
                value: newProps.onMaterialRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.Material>'
            });
        }
        // BABYLON.Scene.onMeshImportedObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onMeshImportedObservable === undefined && oldProps.onMeshImportedObservable !== newProps.onMeshImportedObservable) {
            updates.push({
                propertyName: 'onMeshImportedObservable',
                value: newProps.onMeshImportedObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.Scene.onMeshRemovedObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onMeshRemovedObservable === undefined && oldProps.onMeshRemovedObservable !== newProps.onMeshRemovedObservable) {
            updates.push({
                propertyName: 'onMeshRemovedObservable',
                value: newProps.onMeshRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.Scene.onNewCameraAddedObservable of type 'BABYLON.Observable<BABYLON.Camera>/fn':
        if (oldProps.onNewCameraAddedObservable === undefined && oldProps.onNewCameraAddedObservable !== newProps.onNewCameraAddedObservable) {
            updates.push({
                propertyName: 'onNewCameraAddedObservable',
                value: newProps.onNewCameraAddedObservable,
                type: 'BABYLON.Observable<BABYLON.Camera>'
            });
        }
        // BABYLON.Scene.onNewGeometryAddedObservable of type 'BABYLON.Observable<BABYLON.Geometry>/fn':
        if (oldProps.onNewGeometryAddedObservable === undefined && oldProps.onNewGeometryAddedObservable !== newProps.onNewGeometryAddedObservable) {
            updates.push({
                propertyName: 'onNewGeometryAddedObservable',
                value: newProps.onNewGeometryAddedObservable,
                type: 'BABYLON.Observable<BABYLON.Geometry>'
            });
        }
        // BABYLON.Scene.onNewLightAddedObservable of type 'BABYLON.Observable<BABYLON.Light>/fn':
        if (oldProps.onNewLightAddedObservable === undefined && oldProps.onNewLightAddedObservable !== newProps.onNewLightAddedObservable) {
            updates.push({
                propertyName: 'onNewLightAddedObservable',
                value: newProps.onNewLightAddedObservable,
                type: 'BABYLON.Observable<BABYLON.Light>'
            });
        }
        // BABYLON.Scene.onNewMaterialAddedObservable of type 'BABYLON.Observable<BABYLON.Material>/fn':
        if (oldProps.onNewMaterialAddedObservable === undefined && oldProps.onNewMaterialAddedObservable !== newProps.onNewMaterialAddedObservable) {
            updates.push({
                propertyName: 'onNewMaterialAddedObservable',
                value: newProps.onNewMaterialAddedObservable,
                type: 'BABYLON.Observable<BABYLON.Material>'
            });
        }
        // BABYLON.Scene.onNewMeshAddedObservable of type 'BABYLON.Observable<BABYLON.AbstractMesh>/fn':
        if (oldProps.onNewMeshAddedObservable === undefined && oldProps.onNewMeshAddedObservable !== newProps.onNewMeshAddedObservable) {
            updates.push({
                propertyName: 'onNewMeshAddedObservable',
                value: newProps.onNewMeshAddedObservable,
                type: 'BABYLON.Observable<BABYLON.AbstractMesh>'
            });
        }
        // BABYLON.Scene.onNewTextureAddedObservable of type 'BABYLON.Observable<BABYLON.BaseTexture>/fn':
        if (oldProps.onNewTextureAddedObservable === undefined && oldProps.onNewTextureAddedObservable !== newProps.onNewTextureAddedObservable) {
            updates.push({
                propertyName: 'onNewTextureAddedObservable',
                value: newProps.onNewTextureAddedObservable,
                type: 'BABYLON.Observable<BABYLON.BaseTexture>'
            });
        }
        // BABYLON.Scene.onNewTransformNodeAddedObservable of type 'BABYLON.Observable<BABYLON.TransformNode>/fn':
        if (oldProps.onNewTransformNodeAddedObservable === undefined && oldProps.onNewTransformNodeAddedObservable !== newProps.onNewTransformNodeAddedObservable) {
            updates.push({
                propertyName: 'onNewTransformNodeAddedObservable',
                value: newProps.onNewTransformNodeAddedObservable,
                type: 'BABYLON.Observable<BABYLON.TransformNode>'
            });
        }
        // BABYLON.Scene.onPointerDown of type '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void/fn':
        if (oldProps.onPointerDown === undefined && oldProps.onPointerDown !== newProps.onPointerDown) {
            updates.push({
                propertyName: 'onPointerDown',
                value: newProps.onPointerDown,
                type: '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void'
            });
        }
        // BABYLON.Scene.onPointerMove of type '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void/fn':
        if (oldProps.onPointerMove === undefined && oldProps.onPointerMove !== newProps.onPointerMove) {
            updates.push({
                propertyName: 'onPointerMove',
                value: newProps.onPointerMove,
                type: '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void'
            });
        }
        // BABYLON.Scene.onPointerObservable of type 'BABYLON.Observable<BABYLON.PointerInfo>/fn':
        if (oldProps.onPointerObservable === undefined && oldProps.onPointerObservable !== newProps.onPointerObservable) {
            updates.push({
                propertyName: 'onPointerObservable',
                value: newProps.onPointerObservable,
                type: 'BABYLON.Observable<BABYLON.PointerInfo>'
            });
        }
        // BABYLON.Scene.onPointerPick of type '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo) => void/fn':
        if (oldProps.onPointerPick === undefined && oldProps.onPointerPick !== newProps.onPointerPick) {
            updates.push({
                propertyName: 'onPointerPick',
                value: newProps.onPointerPick,
                type: '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo) => void'
            });
        }
        // BABYLON.Scene.onPointerUp of type '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void/fn':
        if (oldProps.onPointerUp === undefined && oldProps.onPointerUp !== newProps.onPointerUp) {
            updates.push({
                propertyName: 'onPointerUp',
                value: newProps.onPointerUp,
                type: '(evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void'
            });
        }
        // BABYLON.Scene.onPreKeyboardObservable of type 'BABYLON.Observable<BABYLON.KeyboardInfoPre>/fn':
        if (oldProps.onPreKeyboardObservable === undefined && oldProps.onPreKeyboardObservable !== newProps.onPreKeyboardObservable) {
            updates.push({
                propertyName: 'onPreKeyboardObservable',
                value: newProps.onPreKeyboardObservable,
                type: 'BABYLON.Observable<BABYLON.KeyboardInfoPre>'
            });
        }
        // BABYLON.Scene.onPrePointerObservable of type 'BABYLON.Observable<BABYLON.PointerInfoPre>/fn':
        if (oldProps.onPrePointerObservable === undefined && oldProps.onPrePointerObservable !== newProps.onPrePointerObservable) {
            updates.push({
                propertyName: 'onPrePointerObservable',
                value: newProps.onPrePointerObservable,
                type: 'BABYLON.Observable<BABYLON.PointerInfoPre>'
            });
        }
        // BABYLON.Scene.onReadyObservable of type 'BABYLON.Observable<BABYLON.Scene>/fn':
        if (oldProps.onReadyObservable === undefined && oldProps.onReadyObservable !== newProps.onReadyObservable) {
            updates.push({
                propertyName: 'onReadyObservable',
                value: newProps.onReadyObservable,
                type: 'BABYLON.Observable<BABYLON.Scene>'
            });
        }
        // BABYLON.Scene.onTextureRemovedObservable of type 'BABYLON.Observable<BABYLON.BaseTexture>/fn':
        if (oldProps.onTextureRemovedObservable === undefined && oldProps.onTextureRemovedObservable !== newProps.onTextureRemovedObservable) {
            updates.push({
                propertyName: 'onTextureRemovedObservable',
                value: newProps.onTextureRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.BaseTexture>'
            });
        }
        // BABYLON.Scene.onTransformNodeRemovedObservable of type 'BABYLON.Observable<BABYLON.TransformNode>/fn':
        if (oldProps.onTransformNodeRemovedObservable === undefined && oldProps.onTransformNodeRemovedObservable !== newProps.onTransformNodeRemovedObservable) {
            updates.push({
                propertyName: 'onTransformNodeRemovedObservable',
                value: newProps.onTransformNodeRemovedObservable,
                type: 'BABYLON.Observable<BABYLON.TransformNode>'
            });
        }
        // BABYLON.Scene.particlesEnabled of type 'boolean':
        if (oldProps.particlesEnabled !== newProps.particlesEnabled) {
            updates.push({
                propertyName: 'particlesEnabled',
                value: newProps.particlesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: (Mesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.Scene.pointerDownPredicate.
        // TODO: type: (Mesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.Scene.pointerMovePredicate.
        // TODO: type: (Mesh: BABYLON.AbstractMesh) => boolean property (not coded) BABYLON.Scene.pointerUpPredicate.
        // TODO: type: BABYLON.PostProcess[] property (not coded) BABYLON.Scene.postProcesses.
        // BABYLON.Scene.postProcessesEnabled of type 'boolean':
        if (oldProps.postProcessesEnabled !== newProps.postProcessesEnabled) {
            updates.push({
                propertyName: 'postProcessesEnabled',
                value: newProps.postProcessesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.PostProcessManager property (not coded) BABYLON.Scene.postProcessManager.
        // BABYLON.Scene.preventDefaultOnPointerDown of type 'boolean':
        if (oldProps.preventDefaultOnPointerDown !== newProps.preventDefaultOnPointerDown) {
            updates.push({
                propertyName: 'preventDefaultOnPointerDown',
                value: newProps.preventDefaultOnPointerDown,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.preventDefaultOnPointerUp of type 'boolean':
        if (oldProps.preventDefaultOnPointerUp !== newProps.preventDefaultOnPointerUp) {
            updates.push({
                propertyName: 'preventDefaultOnPointerUp',
                value: newProps.preventDefaultOnPointerUp,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.probesEnabled of type 'boolean':
        if (oldProps.probesEnabled !== newProps.probesEnabled) {
            updates.push({
                propertyName: 'probesEnabled',
                value: newProps.probesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.proceduralTexturesEnabled of type 'boolean':
        if (oldProps.proceduralTexturesEnabled !== newProps.proceduralTexturesEnabled) {
            updates.push({
                propertyName: 'proceduralTexturesEnabled',
                value: newProps.proceduralTexturesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.renderTargetsEnabled of type 'boolean':
        if (oldProps.renderTargetsEnabled !== newProps.renderTargetsEnabled) {
            updates.push({
                propertyName: 'renderTargetsEnabled',
                value: newProps.renderTargetsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.requireLightSorting of type 'boolean':
        if (oldProps.requireLightSorting !== newProps.requireLightSorting) {
            updates.push({
                propertyName: 'requireLightSorting',
                value: newProps.requireLightSorting,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Scene.reservedDataStore.
        // BABYLON.Scene.shadowsEnabled of type 'boolean':
        if (oldProps.shadowsEnabled !== newProps.shadowsEnabled) {
            updates.push({
                propertyName: 'shadowsEnabled',
                value: newProps.shadowsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.skeletonsEnabled of type 'boolean':
        if (oldProps.skeletonsEnabled !== newProps.skeletonsEnabled) {
            updates.push({
                propertyName: 'skeletonsEnabled',
                value: newProps.skeletonsEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.spritesEnabled of type 'boolean':
        if (oldProps.spritesEnabled !== newProps.spritesEnabled) {
            updates.push({
                propertyName: 'spritesEnabled',
                value: newProps.spritesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.texturesEnabled of type 'boolean':
        if (oldProps.texturesEnabled !== newProps.texturesEnabled) {
            updates.push({
                propertyName: 'texturesEnabled',
                value: newProps.texturesEnabled,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.useConstantAnimationDeltaTime of type 'boolean':
        if (oldProps.useConstantAnimationDeltaTime !== newProps.useConstantAnimationDeltaTime) {
            updates.push({
                propertyName: 'useConstantAnimationDeltaTime',
                value: newProps.useConstantAnimationDeltaTime,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.useDelayedTextureLoading of type 'boolean':
        if (oldProps.useDelayedTextureLoading !== newProps.useDelayedTextureLoading) {
            updates.push({
                propertyName: 'useDelayedTextureLoading',
                value: newProps.useDelayedTextureLoading,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.useRightHandedSystem of type 'boolean':
        if (oldProps.useRightHandedSystem !== newProps.useRightHandedSystem) {
            updates.push({
                propertyName: 'useRightHandedSystem',
                value: newProps.useRightHandedSystem,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.workerCollisions of type 'boolean':
        if (oldProps.workerCollisions !== newProps.workerCollisions) {
            updates.push({
                propertyName: 'workerCollisions',
                value: newProps.workerCollisions,
                type: 'boolean'
            });
        }
        // BABYLON.Scene.setActiveCameraByID of type '(id?: string)':
        if (oldProps.setActiveCameraByID !== newProps.setActiveCameraByID) {
            updates.push({
                propertyName: 'setActiveCameraByID',
                value: newProps.setActiveCameraByID,
                type: '(id?: string)'
            });
        }
        // BABYLON.Scene.setActiveCameraByName of type '(name?: string)':
        if (oldProps.setActiveCameraByName !== newProps.setActiveCameraByName) {
            updates.push({
                propertyName: 'setActiveCameraByName',
                value: newProps.setActiveCameraByName,
                type: '(name?: string)'
            });
        }
        // BABYLON.Scene.setPointerOverMesh of type '(mesh?: BABYLON.AbstractMesh)':
        if (oldProps.setPointerOverMesh !== newProps.setPointerOverMesh) {
            updates.push({
                propertyName: 'setPointerOverMesh',
                value: newProps.setPointerOverMesh,
                type: '(mesh?: BABYLON.AbstractMesh)'
            });
        }
        // BABYLON.Scene.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)'
            });
        }
        // BABYLON.Scene.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, alphaTestSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, transparentSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number)':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, alphaTestSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number, transparentSortCompareFn?: (a: BABYLON.SubMesh, b: BABYLON.SubMesh) => number)'
            });
        }
        // BABYLON.Scene.setStepId of type '(newStepId?: number)':
        if (oldProps.setStepId !== newProps.setStepId) {
            updates.push({
                propertyName: 'setStepId',
                value: newProps.setStepId,
                type: '(newStepId?: number)'
            });
        }
        // BABYLON.Scene.setTransformMatrix of type '(view?: BABYLON.Matrix, projection?: BABYLON.Matrix)':
        if (oldProps.setTransformMatrix !== newProps.setTransformMatrix) {
            updates.push({
                propertyName: 'setTransformMatrix',
                value: newProps.setTransformMatrix,
                type: '(view?: BABYLON.Matrix, projection?: BABYLON.Matrix)'
            });
        }
        return updates.length == 0 ? null : updates;
    }
}

export const AbstractButton3D: string = 'AbstractButton3D', AbstractMesh: string = 'AbstractMesh', AdvancedDynamicTexture: string = 'AdvancedDynamicTexture', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', BaseSlider: string = 'BaseSlider', BaseTexture: string = 'BaseTexture', Box: string = 'Box', Button: string = 'Button', Button3D: string = 'Button3D', Camera: string = 'Camera', Checkbox: string = 'Checkbox', ColorGradingTexture: string = 'ColorGradingTexture', ColorPicker: string = 'ColorPicker', Container: string = 'Container', Container3D: string = 'Container3D', Control: string = 'Control', Control3D: string = 'Control3D', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', CylinderPanel: string = 'CylinderPanel', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DisplayGrid: string = 'DisplayGrid', DynamicTexture: string = 'DynamicTexture', Ellipse: string = 'Ellipse', EnvironmentHelper: string = 'EnvironmentHelper', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FlyCamera: string = 'FlyCamera', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GUI3DManager: string = 'GUI3DManager', GamepadCamera: string = 'GamepadCamera', Grid: string = 'Grid', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HemisphericLight: string = 'HemisphericLight', HolographicButton: string = 'HolographicButton', IcoSphere: string = 'IcoSphere', Image: string = 'Image', ImageBasedSlider: string = 'ImageBasedSlider', InputPassword: string = 'InputPassword', InputText: string = 'InputText', Lathe: string = 'Lathe', Light: string = 'Light', Line: string = 'Line', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', Mesh: string = 'Mesh', MeshButton3D: string = 'MeshButton3D', MirrorTexture: string = 'MirrorTexture', MultiLine: string = 'MultiLine', MultiMaterial: string = 'MultiMaterial', MultiRenderTarget: string = 'MultiRenderTarget', Node: string = 'Node', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', Plane: string = 'Plane', PlanePanel: string = 'PlanePanel', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', ProceduralTexture: string = 'ProceduralTexture', PushMaterial: string = 'PushMaterial', RadioButton: string = 'RadioButton', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture3D: string = 'RawTexture3D', Rectangle: string = 'Rectangle', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ScatterPanel: string = 'ScatterPanel', ScrollViewer: string = 'ScrollViewer', SelectionPanel: string = 'SelectionPanel', ShaderMaterial: string = 'ShaderMaterial', ShadowGenerator: string = 'ShadowGenerator', ShadowLight: string = 'ShadowLight', Slider: string = 'Slider', Sphere: string = 'Sphere', SpherePanel: string = 'SpherePanel', SpotLight: string = 'SpotLight', StackPanel: string = 'StackPanel', StackPanel3D: string = 'StackPanel3D', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', TextBlock: string = 'TextBlock', Texture: string = 'Texture', TiledGround: string = 'TiledGround', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', TransformNode: string = 'TransformNode', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', VirtualKeyboard: string = 'VirtualKeyboard', VolumeBasedPanel: string = 'VolumeBasedPanel', WebVRFreeCamera: string = 'WebVRFreeCamera', WebXRCamera: string = 'WebXRCamera';
