import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector3 as BabylonjsCoreVector3 } from "@babylonjs/core/Maths/math";
import { Matrix as BabylonjsCoreMatrix, Space as BabylonjsCoreSpace } from "@babylonjs/core/Maths/math";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { IndicesArray as BabylonjsCoreIndicesArray } from "@babylonjs/core/types";
import { FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo } from "@babylonjs/core/Events/keyboardEvents";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { PointerEventTypes as BabylonjsCorePointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { PointerInfo as BabylonjsCorePointerInfo } from "@babylonjs/core/Events/pointerEvents";
import { KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberSceneProps } from "./generatedProps";

export class FiberNodePropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) xxx-ns-xxx.Node.addToSceneRootNodes.
        // TODO: type: BabylonjsCoreAnimationPropertiesOverride property (not coded) xxx-ns-xxx.Node.animationPropertiesOverride.
        // TODO: type: BabylonjsCoreAnimation[] property (not coded) xxx-ns-xxx.Node.animations.
        // xxx-ns-xxx.Node.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Node.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: BabylonjsCoreIInspectable[] property (not coded) xxx-ns-xxx.Node.inspectableCustomProperties.
        // TODO: type: any property (not coded) xxx-ns-xxx.Node.metadata.
        // xxx-ns-xxx.Node.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.Node.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.Node.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreNode>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreNode>'
            });
        }
        // xxx-ns-xxx.Node.onReady of type '(node: BabylonjsCoreNode) => void/fn':
        if (oldProps.onReady === undefined && oldProps.onReady !== newProps.onReady) {
            updates.push({
                propertyName: 'onReady',
                value: newProps.onReady,
                type: '(node: BabylonjsCoreNode) => void'
            });
        }
        // TODO: type: BabylonjsCoreNode property (not coded) xxx-ns-xxx.Node.parent.
        // TODO: type: any property (not coded) xxx-ns-xxx.Node.removeFromSceneRootNodes.
        // TODO: type: any property (not coded) xxx-ns-xxx.Node.reservedDataStore.
        // xxx-ns-xxx.Node.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // xxx-ns-xxx.Node.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.Node.setEnabled of type '(value?: boolean)':
        if (oldProps.setEnabled !== newProps.setEnabled) {
            updates.push({
                propertyName: 'setEnabled',
                value: newProps.setEnabled,
                type: '(value?: boolean)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 * 
 * This code has been generated
 */
export class FiberNode implements HasPropsHandlers<BabylonjsCoreNode, FiberNodeProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreNode, FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreNode, FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreNode, FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Node",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberTransformNodePropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberTransformNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.TransformNode.billboardMode of type 'number':
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.TransformNode.ignoreNonUniformScaling of type 'boolean':
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.TransformNode.infiniteDistance of type 'boolean':
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({
                propertyName: 'infiniteDistance',
                value: newProps.infiniteDistance,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.TransformNode.onAfterWorldMatrixUpdateObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onAfterWorldMatrixUpdateObservable === undefined && oldProps.onAfterWorldMatrixUpdateObservable !== newProps.onAfterWorldMatrixUpdateObservable) {
            updates.push({
                propertyName: 'onAfterWorldMatrixUpdateObservable',
                value: newProps.onAfterWorldMatrixUpdateObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.TransformNode.position.
        // xxx-ns-xxx.TransformNode.preserveParentRotationForBillboard of type 'boolean':
        if (oldProps.preserveParentRotationForBillboard !== newProps.preserveParentRotationForBillboard) {
            updates.push({
                propertyName: 'preserveParentRotationForBillboard',
                value: newProps.preserveParentRotationForBillboard,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.TransformNode.reIntegrateRotationIntoRotationQuaternion of type 'boolean':
        if (oldProps.reIntegrateRotationIntoRotationQuaternion !== newProps.reIntegrateRotationIntoRotationQuaternion) {
            updates.push({
                propertyName: 'reIntegrateRotationIntoRotationQuaternion',
                value: newProps.reIntegrateRotationIntoRotationQuaternion,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.TransformNode.rotation.
        // TODO: type: BabylonjsCoreQuaternion property (not coded) xxx-ns-xxx.TransformNode.rotationQuaternion.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.TransformNode.scaling.
        // xxx-ns-xxx.TransformNode.scalingDeterminant of type 'number':
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setAbsolutePosition of type '(absolutePosition?: BabylonjsCoreVector3)':
        if (oldProps.setAbsolutePosition !== newProps.setAbsolutePosition) {
            updates.push({
                propertyName: 'setAbsolutePosition',
                value: newProps.setAbsolutePosition,
                type: '(absolutePosition?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setDirection of type '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number)':
        if (oldProps.setDirection !== newProps.setDirection) {
            updates.push({
                propertyName: 'setDirection',
                value: newProps.setDirection,
                type: '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setParent of type '(node?: BabylonjsCoreNode)':
        if (oldProps.setParent !== newProps.setParent) {
            updates.push({
                propertyName: 'setParent',
                value: newProps.setParent,
                type: '(node?: BabylonjsCoreNode)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setPivotMatrix of type '(matrix?: DeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean)':
        if (oldProps.setPivotMatrix !== newProps.setPivotMatrix) {
            updates.push({
                propertyName: 'setPivotMatrix',
                value: newProps.setPivotMatrix,
                type: '(matrix?: DeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setPivotPoint of type '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace)':
        if (oldProps.setPivotPoint !== newProps.setPivotPoint) {
            updates.push({
                propertyName: 'setPivotPoint',
                value: newProps.setPivotPoint,
                type: '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setPositionWithLocalVector of type '(vector3?: BabylonjsCoreVector3)':
        if (oldProps.setPositionWithLocalVector !== newProps.setPositionWithLocalVector) {
            updates.push({
                propertyName: 'setPositionWithLocalVector',
                value: newProps.setPositionWithLocalVector,
                type: '(vector3?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.TransformNode.setPreTransformMatrix of type '(matrix?: BabylonjsCoreMatrix)':
        if (oldProps.setPreTransformMatrix !== newProps.setPreTransformMatrix) {
            updates.push({
                propertyName: 'setPreTransformMatrix',
                value: newProps.setPreTransformMatrix,
                type: '(matrix?: BabylonjsCoreMatrix)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 * 
 * This code has been generated
 */
export class FiberTransformNode implements HasPropsHandlers<BabylonjsCoreNode, FiberNodeProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreNode, FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreNode, FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreNode, FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TransformNode",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberAbstractMeshPropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberAbstractMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreAbstractActionManager property (not coded) xxx-ns-xxx.AbstractMesh.actionManager.
        // xxx-ns-xxx.AbstractMesh.alphaIndex of type 'number':
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.alwaysSelectAsActiveMesh of type 'boolean':
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.applyFog of type 'boolean':
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.collisionGroup of type 'number':
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.computeBonesUsingShaders of type 'boolean':
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.cullingStrategy of type 'number':
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.definedFacingForward of type 'boolean':
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.doNotSyncBoundingInfo of type 'boolean':
        if (oldProps.doNotSyncBoundingInfo !== newProps.doNotSyncBoundingInfo) {
            updates.push({
                propertyName: 'doNotSyncBoundingInfo',
                value: newProps.doNotSyncBoundingInfo,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor4 property (not coded) xxx-ns-xxx.AbstractMesh.edgesColor.
        // xxx-ns-xxx.AbstractMesh.edgesWidth of type 'number':
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.AbstractMesh.ellipsoid.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.AbstractMesh.ellipsoidOffset.
        // xxx-ns-xxx.AbstractMesh.enablePointerMoveEvents of type 'boolean':
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.AbstractMesh.facetDepthSortFrom.
        // xxx-ns-xxx.AbstractMesh.hasVertexAlpha of type 'boolean':
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.isBlocker of type 'boolean':
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.isPickable of type 'boolean':
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreMaterial property (not coded) xxx-ns-xxx.AbstractMesh.material.
        // xxx-ns-xxx.AbstractMesh.mustDepthSortFacets of type 'boolean':
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.numBoneInfluencers of type 'number':
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({
                propertyName: 'numBoneInfluencers',
                value: newProps.numBoneInfluencers,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onCollide of type '() => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onCollideObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onCollideObservable === undefined && oldProps.onCollideObservable !== newProps.onCollideObservable) {
            updates.push({
                propertyName: 'onCollideObservable',
                value: newProps.onCollideObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onCollisionPositionChange of type '() => void/fn':
        if (oldProps.onCollisionPositionChange === undefined && oldProps.onCollisionPositionChange !== newProps.onCollisionPositionChange) {
            updates.push({
                propertyName: 'onCollisionPositionChange',
                value: newProps.onCollisionPositionChange,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onCollisionPositionChangeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onCollisionPositionChangeObservable === undefined && oldProps.onCollisionPositionChangeObservable !== newProps.onCollisionPositionChangeObservable) {
            updates.push({
                propertyName: 'onCollisionPositionChangeObservable',
                value: newProps.onCollisionPositionChangeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onMaterialChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMaterialChangedObservable === undefined && oldProps.onMaterialChangedObservable !== newProps.onMaterialChangedObservable) {
            updates.push({
                propertyName: 'onMaterialChangedObservable',
                value: newProps.onMaterialChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.AbstractMesh.onRebuildObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onRebuildObservable === undefined && oldProps.onRebuildObservable !== newProps.onRebuildObservable) {
            updates.push({
                propertyName: 'onRebuildObservable',
                value: newProps.onRebuildObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.AbstractMesh.outlineColor.
        // xxx-ns-xxx.AbstractMesh.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.overlayAlpha of type 'number':
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.AbstractMesh.overlayColor.
        // xxx-ns-xxx.AbstractMesh.partitioningBBoxRatio of type 'number':
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.partitioningSubdivisions of type 'number':
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // xxx-ns-xxx.AbstractMesh.receiveShadows of type 'boolean':
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.renderingGroupId of type 'number':
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.AbstractMesh.scaling.
        // xxx-ns-xxx.AbstractMesh.showSubMeshesBoundingBox of type 'boolean':
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreSkeleton property (not coded) xxx-ns-xxx.AbstractMesh.skeleton.
        // TODO: type: BabylonjsCoreSubMesh[] property (not coded) xxx-ns-xxx.AbstractMesh.subMeshes.
        // xxx-ns-xxx.AbstractMesh.useOctreeForCollisions of type 'boolean':
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.useOctreeForPicking of type 'boolean':
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.useOctreeForRenderingSelection of type 'boolean':
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.useVertexColors of type 'boolean':
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.AbstractMesh.visibility of type 'number':
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({
                propertyName: 'visibility',
                value: newProps.visibility,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.AbstractMesh.setBoundingInfo of type '(boundingInfo?: BabylonjsCoreBoundingInfo)':
        if (oldProps.setBoundingInfo !== newProps.setBoundingInfo) {
            updates.push({
                propertyName: 'setBoundingInfo',
                value: newProps.setBoundingInfo,
                type: '(boundingInfo?: BabylonjsCoreBoundingInfo)'
            });
        }
        // xxxx-ns-xxxx.AbstractMesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number)'
            });
        }
        // xxxx-ns-xxxx.AbstractMesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to store all common mesh properties
 * 
 * This code has been generated
 */
export class FiberAbstractMesh implements HasPropsHandlers<BabylonjsCoreTransformNode, FiberTransformNodeProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractMesh",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberAbstractMesh",
        "isMesh": false
    };
}

export class FiberMeshPropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberMeshProps, newProps: FiberMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.Mesh.delayLoadingFile of type 'string':
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({
                propertyName: 'delayLoadingFile',
                value: newProps.delayLoadingFile,
                type: 'string'
            });
        }
        // xxx-ns-xxx.Mesh.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreInstancedMesh[] property (not coded) xxx-ns-xxx.Mesh.instances.
        // xxx-ns-xxx.Mesh.isUnIndexed of type 'boolean':
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreMorphTargetManager property (not coded) xxx-ns-xxx.Mesh.morphTargetManager.
        // TODO: type: any property (not coded) xxx-ns-xxx.Mesh.normalizeSkinFourWeights.
        // TODO: type: any property (not coded) xxx-ns-xxx.Mesh.normalizeSkinWeightsAndExtra.
        // xxx-ns-xxx.Mesh.onBeforeDraw of type '() => void/fn':
        if (oldProps.onBeforeDraw === undefined && oldProps.onBeforeDraw !== newProps.onBeforeDraw) {
            updates.push({
                propertyName: 'onBeforeDraw',
                value: newProps.onBeforeDraw,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.Mesh.onLODLevelSelection of type '(distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void/fn':
        if (oldProps.onLODLevelSelection === undefined && oldProps.onLODLevelSelection !== newProps.onLODLevelSelection) {
            updates.push({
                propertyName: 'onLODLevelSelection',
                value: newProps.onLODLevelSelection,
                type: '(distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void'
            });
        }
        // xxx-ns-xxx.Mesh.overrideMaterialSideOrientation of type 'number':
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({
                propertyName: 'overrideMaterialSideOrientation',
                value: newProps.overrideMaterialSideOrientation,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Mesh.overridenInstanceCount of type 'number':
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({
                propertyName: 'overridenInstanceCount',
                value: newProps.overridenInstanceCount,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.Mesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean)'
            });
        }
        // xxxx-ns-xxxx.Mesh.setMaterialByID of type '(id?: string)':
        if (oldProps.setMaterialByID !== newProps.setMaterialByID) {
            updates.push({
                propertyName: 'setMaterialByID',
                value: newProps.setMaterialByID,
                type: '(id?: string)'
            });
        }
        // xxxx-ns-xxxx.Mesh.setVerticesBuffer of type '(buffer?: BabylonjsCoreVertexBuffer)':
        if (oldProps.setVerticesBuffer !== newProps.setVerticesBuffer) {
            updates.push({
                propertyName: 'setVerticesBuffer',
                value: newProps.setVerticesBuffer,
                type: '(buffer?: BabylonjsCoreVertexBuffer)'
            });
        }
        // xxxx-ns-xxxx.Mesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to represent renderable models
 * 
 * This code has been generated
 */
export class FiberMesh implements HasPropsHandlers<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Mesh",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "parent",
                "type": "BabylonjsCoreNode",
                "optional": true
            },
            {
                "name": "source",
                "type": "BabylonjsCoreMesh",
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

export class FiberScenePropsHandler implements PropsHandler<BabylonjsCoreScene, FiberSceneProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreScene, oldProps: FiberSceneProps, newProps: FiberSceneProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreAbstractActionManager property (not coded) xxx-ns-xxx.Scene.actionManager.
        // TODO: type: BabylonjsCoreCamera property (not coded) xxx-ns-xxx.Scene.activeCamera.
        // TODO: type: BabylonjsCoreCamera[] property (not coded) xxx-ns-xxx.Scene.activeCameras.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.Scene.afterCameraRender.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.Scene.afterRender.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.Scene.ambientColor.
        // TODO: type: BabylonjsCoreAnimationPropertiesOverride property (not coded) xxx-ns-xxx.Scene.animationPropertiesOverride.
        // xxx-ns-xxx.Scene.animationsEnabled of type 'boolean':
        if (oldProps.animationsEnabled !== newProps.animationsEnabled) {
            updates.push({
                propertyName: 'animationsEnabled',
                value: newProps.animationsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.animationTimeScale of type 'number':
        if (oldProps.animationTimeScale !== newProps.animationTimeScale) {
            updates.push({
                propertyName: 'animationTimeScale',
                value: newProps.animationTimeScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.autoClear of type 'boolean':
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.autoClearDepthAndStencil of type 'boolean':
        if (oldProps.autoClearDepthAndStencil !== newProps.autoClearDepthAndStencil) {
            updates.push({
                propertyName: 'autoClearDepthAndStencil',
                value: newProps.autoClearDepthAndStencil,
                type: 'boolean'
            });
        }
        // TODO: type: () => void property (not coded) xxx-ns-xxx.Scene.beforeCameraRender.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.Scene.beforeRender.
        // xxx-ns-xxx.Scene.blockfreeActiveMeshesAndRenderingGroups of type 'boolean':
        if (oldProps.blockfreeActiveMeshesAndRenderingGroups !== newProps.blockfreeActiveMeshesAndRenderingGroups) {
            updates.push({
                propertyName: 'blockfreeActiveMeshesAndRenderingGroups',
                value: newProps.blockfreeActiveMeshesAndRenderingGroups,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.blockMaterialDirtyMechanism of type 'boolean':
        if (oldProps.blockMaterialDirtyMechanism !== newProps.blockMaterialDirtyMechanism) {
            updates.push({
                propertyName: 'blockMaterialDirtyMechanism',
                value: newProps.blockMaterialDirtyMechanism,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreCamera property (not coded) xxx-ns-xxx.Scene.cameraToUseForPointers.
        // TODO: type: BabylonjsCoreColor4 property (not coded) xxx-ns-xxx.Scene.clearColor.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.Scene.clipPlane.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.Scene.clipPlane2.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.Scene.clipPlane3.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.Scene.clipPlane4.
        // xxx-ns-xxx.Scene.collisionsEnabled of type 'boolean':
        if (oldProps.collisionsEnabled !== newProps.collisionsEnabled) {
            updates.push({
                propertyName: 'collisionsEnabled',
                value: newProps.collisionsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.constantlyUpdateMeshUnderPointer of type 'boolean':
        if (oldProps.constantlyUpdateMeshUnderPointer !== newProps.constantlyUpdateMeshUnderPointer) {
            updates.push({
                propertyName: 'constantlyUpdateMeshUnderPointer',
                value: newProps.constantlyUpdateMeshUnderPointer,
                type: 'boolean'
            });
        }
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, camera: BabylonjsCoreCamera) => BabylonjsCoreAbstractMesh property (not coded) xxx-ns-xxx.Scene.customLODSelector.
        // TODO: type: BabylonjsCoreRenderTargetTexture[] property (not coded) xxx-ns-xxx.Scene.customRenderTargets.
        // xxx-ns-xxx.Scene.defaultCursor of type 'string':
        if (oldProps.defaultCursor !== newProps.defaultCursor) {
            updates.push({
                propertyName: 'defaultCursor',
                value: newProps.defaultCursor,
                type: 'string'
            });
        }
        // TODO: type: BabylonjsCoreMaterial property (not coded) xxx-ns-xxx.Scene.defaultMaterial.
        // TODO: type: RegExp[] property (not coded) xxx-ns-xxx.Scene.disableOfflineSupportExceptionRules.
        // xxx-ns-xxx.Scene.dispatchAllSubMeshesOfActiveMeshes of type 'boolean':
        if (oldProps.dispatchAllSubMeshesOfActiveMeshes !== newProps.dispatchAllSubMeshesOfActiveMeshes) {
            updates.push({
                propertyName: 'dispatchAllSubMeshesOfActiveMeshes',
                value: newProps.dispatchAllSubMeshesOfActiveMeshes,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.dumpNextRenderTargets of type 'boolean':
        if (oldProps.dumpNextRenderTargets !== newProps.dumpNextRenderTargets) {
            updates.push({
                propertyName: 'dumpNextRenderTargets',
                value: newProps.dumpNextRenderTargets,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.Scene.environmentBRDFTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.Scene.environmentTexture.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.Scene.fogColor.
        // xxx-ns-xxx.Scene.fogDensity of type 'number':
        if (oldProps.fogDensity !== newProps.fogDensity) {
            updates.push({
                propertyName: 'fogDensity',
                value: newProps.fogDensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.fogEnabled of type 'boolean':
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.fogEnd of type 'number':
        if (oldProps.fogEnd !== newProps.fogEnd) {
            updates.push({
                propertyName: 'fogEnd',
                value: newProps.fogEnd,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.fogMode of type 'number':
        if (oldProps.fogMode !== newProps.fogMode) {
            updates.push({
                propertyName: 'fogMode',
                value: newProps.fogMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.fogStart of type 'number':
        if (oldProps.fogStart !== newProps.fogStart) {
            updates.push({
                propertyName: 'fogStart',
                value: newProps.fogStart,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.forcePointsCloud of type 'boolean':
        if (oldProps.forcePointsCloud !== newProps.forcePointsCloud) {
            updates.push({
                propertyName: 'forcePointsCloud',
                value: newProps.forcePointsCloud,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.forceWireframe of type 'boolean':
        if (oldProps.forceWireframe !== newProps.forceWireframe) {
            updates.push({
                propertyName: 'forceWireframe',
                value: newProps.forceWireframe,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.Scene.geometriesByUniqueId.
        // TODO: type: () => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh> property (not coded) xxx-ns-xxx.Scene.getActiveMeshCandidates.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.Scene.getActiveSubMeshCandidates.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, collider: BabylonjsCoreCollider) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.Scene.getCollidingSubMeshCandidates.
        // TODO: type: () => number property (not coded) xxx-ns-xxx.Scene.getDeterministicFrameTime.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, localRay: BabylonjsCoreRay) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.Scene.getIntersectingSubMeshCandidates.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.Scene.gravity.
        // xxx-ns-xxx.Scene.hoverCursor of type 'string':
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // TODO: type: String[] property (not coded) xxx-ns-xxx.Scene.importedMeshesFiles.
        // xxx-ns-xxx.Scene.lensFlaresEnabled of type 'boolean':
        if (oldProps.lensFlaresEnabled !== newProps.lensFlaresEnabled) {
            updates.push({
                propertyName: 'lensFlaresEnabled',
                value: newProps.lensFlaresEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.lightsEnabled of type 'boolean':
        if (oldProps.lightsEnabled !== newProps.lightsEnabled) {
            updates.push({
                propertyName: 'lightsEnabled',
                value: newProps.lightsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.loadingPluginName of type 'string':
        if (oldProps.loadingPluginName !== newProps.loadingPluginName) {
            updates.push({
                propertyName: 'loadingPluginName',
                value: newProps.loadingPluginName,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.Scene.metadata.
        // TODO: type: BabylonjsCoreIOfflineProvider property (not coded) xxx-ns-xxx.Scene.offlineProvider.
        // xxx-ns-xxx.Scene.onActiveCameraChanged of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onActiveCameraChanged === undefined && oldProps.onActiveCameraChanged !== newProps.onActiveCameraChanged) {
            updates.push({
                propertyName: 'onActiveCameraChanged',
                value: newProps.onActiveCameraChanged,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterActiveMeshesEvaluationObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterActiveMeshesEvaluationObservable === undefined && oldProps.onAfterActiveMeshesEvaluationObservable !== newProps.onAfterActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onAfterActiveMeshesEvaluationObservable',
                value: newProps.onAfterActiveMeshesEvaluationObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterAnimationsObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterAnimationsObservable === undefined && oldProps.onAfterAnimationsObservable !== newProps.onAfterAnimationsObservable) {
            updates.push({
                propertyName: 'onAfterAnimationsObservable',
                value: newProps.onAfterAnimationsObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterCameraRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onAfterCameraRenderObservable === undefined && oldProps.onAfterCameraRenderObservable !== newProps.onAfterCameraRenderObservable) {
            updates.push({
                propertyName: 'onAfterCameraRenderObservable',
                value: newProps.onAfterCameraRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterDrawPhaseObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterDrawPhaseObservable === undefined && oldProps.onAfterDrawPhaseObservable !== newProps.onAfterDrawPhaseObservable) {
            updates.push({
                propertyName: 'onAfterDrawPhaseObservable',
                value: newProps.onAfterDrawPhaseObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterParticlesRenderingObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterParticlesRenderingObservable === undefined && oldProps.onAfterParticlesRenderingObservable !== newProps.onAfterParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onAfterParticlesRenderingObservable',
                value: newProps.onAfterParticlesRenderingObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterRenderingGroupObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>/fn':
        if (oldProps.onAfterRenderingGroupObservable === undefined && oldProps.onAfterRenderingGroupObservable !== newProps.onAfterRenderingGroupObservable) {
            updates.push({
                propertyName: 'onAfterRenderingGroupObservable',
                value: newProps.onAfterRenderingGroupObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterRenderObservable === undefined && oldProps.onAfterRenderObservable !== newProps.onAfterRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderObservable',
                value: newProps.onAfterRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterRenderTargetsRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterRenderTargetsRenderObservable === undefined && oldProps.onAfterRenderTargetsRenderObservable !== newProps.onAfterRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderTargetsRenderObservable',
                value: newProps.onAfterRenderTargetsRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onAfterStepObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterStepObservable === undefined && oldProps.onAfterStepObservable !== newProps.onAfterStepObservable) {
            updates.push({
                propertyName: 'onAfterStepObservable',
                value: newProps.onAfterStepObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeActiveMeshesEvaluationObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeActiveMeshesEvaluationObservable === undefined && oldProps.onBeforeActiveMeshesEvaluationObservable !== newProps.onBeforeActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onBeforeActiveMeshesEvaluationObservable',
                value: newProps.onBeforeActiveMeshesEvaluationObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeAnimationsObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeAnimationsObservable === undefined && oldProps.onBeforeAnimationsObservable !== newProps.onBeforeAnimationsObservable) {
            updates.push({
                propertyName: 'onBeforeAnimationsObservable',
                value: newProps.onBeforeAnimationsObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeCameraRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onBeforeCameraRenderObservable === undefined && oldProps.onBeforeCameraRenderObservable !== newProps.onBeforeCameraRenderObservable) {
            updates.push({
                propertyName: 'onBeforeCameraRenderObservable',
                value: newProps.onBeforeCameraRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeDrawPhaseObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeDrawPhaseObservable === undefined && oldProps.onBeforeDrawPhaseObservable !== newProps.onBeforeDrawPhaseObservable) {
            updates.push({
                propertyName: 'onBeforeDrawPhaseObservable',
                value: newProps.onBeforeDrawPhaseObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeParticlesRenderingObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeParticlesRenderingObservable === undefined && oldProps.onBeforeParticlesRenderingObservable !== newProps.onBeforeParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onBeforeParticlesRenderingObservable',
                value: newProps.onBeforeParticlesRenderingObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeRenderingGroupObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>/fn':
        if (oldProps.onBeforeRenderingGroupObservable === undefined && oldProps.onBeforeRenderingGroupObservable !== newProps.onBeforeRenderingGroupObservable) {
            updates.push({
                propertyName: 'onBeforeRenderingGroupObservable',
                value: newProps.onBeforeRenderingGroupObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeRenderObservable === undefined && oldProps.onBeforeRenderObservable !== newProps.onBeforeRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderObservable',
                value: newProps.onBeforeRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeRenderTargetsRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeRenderTargetsRenderObservable === undefined && oldProps.onBeforeRenderTargetsRenderObservable !== newProps.onBeforeRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderTargetsRenderObservable',
                value: newProps.onBeforeRenderTargetsRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onBeforeStepObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeStepObservable === undefined && oldProps.onBeforeStepObservable !== newProps.onBeforeStepObservable) {
            updates.push({
                propertyName: 'onBeforeStepObservable',
                value: newProps.onBeforeStepObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onCameraRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onCameraRemovedObservable === undefined && oldProps.onCameraRemovedObservable !== newProps.onCameraRemovedObservable) {
            updates.push({
                propertyName: 'onCameraRemovedObservable',
                value: newProps.onCameraRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.Scene.onDataLoadedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onDataLoadedObservable === undefined && oldProps.onDataLoadedObservable !== newProps.onDataLoadedObservable) {
            updates.push({
                propertyName: 'onDataLoadedObservable',
                value: newProps.onDataLoadedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.Scene.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onGeometryRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreGeometry>/fn':
        if (oldProps.onGeometryRemovedObservable === undefined && oldProps.onGeometryRemovedObservable !== newProps.onGeometryRemovedObservable) {
            updates.push({
                propertyName: 'onGeometryRemovedObservable',
                value: newProps.onGeometryRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>'
            });
        }
        // xxx-ns-xxx.Scene.onKeyboardObservable of type 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>/fn':
        if (oldProps.onKeyboardObservable === undefined && oldProps.onKeyboardObservable !== newProps.onKeyboardObservable) {
            updates.push({
                propertyName: 'onKeyboardObservable',
                value: newProps.onKeyboardObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>'
            });
        }
        // xxx-ns-xxx.Scene.onLightRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreLight>/fn':
        if (oldProps.onLightRemovedObservable === undefined && oldProps.onLightRemovedObservable !== newProps.onLightRemovedObservable) {
            updates.push({
                propertyName: 'onLightRemovedObservable',
                value: newProps.onLightRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreLight>'
            });
        }
        // xxx-ns-xxx.Scene.onMaterialRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMaterial>/fn':
        if (oldProps.onMaterialRemovedObservable === undefined && oldProps.onMaterialRemovedObservable !== newProps.onMaterialRemovedObservable) {
            updates.push({
                propertyName: 'onMaterialRemovedObservable',
                value: newProps.onMaterialRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>'
            });
        }
        // xxx-ns-xxx.Scene.onMeshImportedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMeshImportedObservable === undefined && oldProps.onMeshImportedObservable !== newProps.onMeshImportedObservable) {
            updates.push({
                propertyName: 'onMeshImportedObservable',
                value: newProps.onMeshImportedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.Scene.onMeshRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMeshRemovedObservable === undefined && oldProps.onMeshRemovedObservable !== newProps.onMeshRemovedObservable) {
            updates.push({
                propertyName: 'onMeshRemovedObservable',
                value: newProps.onMeshRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.Scene.onNewCameraAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onNewCameraAddedObservable === undefined && oldProps.onNewCameraAddedObservable !== newProps.onNewCameraAddedObservable) {
            updates.push({
                propertyName: 'onNewCameraAddedObservable',
                value: newProps.onNewCameraAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.Scene.onNewGeometryAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreGeometry>/fn':
        if (oldProps.onNewGeometryAddedObservable === undefined && oldProps.onNewGeometryAddedObservable !== newProps.onNewGeometryAddedObservable) {
            updates.push({
                propertyName: 'onNewGeometryAddedObservable',
                value: newProps.onNewGeometryAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>'
            });
        }
        // xxx-ns-xxx.Scene.onNewLightAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreLight>/fn':
        if (oldProps.onNewLightAddedObservable === undefined && oldProps.onNewLightAddedObservable !== newProps.onNewLightAddedObservable) {
            updates.push({
                propertyName: 'onNewLightAddedObservable',
                value: newProps.onNewLightAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreLight>'
            });
        }
        // xxx-ns-xxx.Scene.onNewMaterialAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMaterial>/fn':
        if (oldProps.onNewMaterialAddedObservable === undefined && oldProps.onNewMaterialAddedObservable !== newProps.onNewMaterialAddedObservable) {
            updates.push({
                propertyName: 'onNewMaterialAddedObservable',
                value: newProps.onNewMaterialAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>'
            });
        }
        // xxx-ns-xxx.Scene.onNewMeshAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onNewMeshAddedObservable === undefined && oldProps.onNewMeshAddedObservable !== newProps.onNewMeshAddedObservable) {
            updates.push({
                propertyName: 'onNewMeshAddedObservable',
                value: newProps.onNewMeshAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.Scene.onNewSkeletonAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>/fn':
        if (oldProps.onNewSkeletonAddedObservable === undefined && oldProps.onNewSkeletonAddedObservable !== newProps.onNewSkeletonAddedObservable) {
            updates.push({
                propertyName: 'onNewSkeletonAddedObservable',
                value: newProps.onNewSkeletonAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>'
            });
        }
        // xxx-ns-xxx.Scene.onNewTextureAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>/fn':
        if (oldProps.onNewTextureAddedObservable === undefined && oldProps.onNewTextureAddedObservable !== newProps.onNewTextureAddedObservable) {
            updates.push({
                propertyName: 'onNewTextureAddedObservable',
                value: newProps.onNewTextureAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>'
            });
        }
        // xxx-ns-xxx.Scene.onNewTransformNodeAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onNewTransformNodeAddedObservable === undefined && oldProps.onNewTransformNodeAddedObservable !== newProps.onNewTransformNodeAddedObservable) {
            updates.push({
                propertyName: 'onNewTransformNodeAddedObservable',
                value: newProps.onNewTransformNodeAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // xxx-ns-xxx.Scene.onPointerDown of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerDown === undefined && oldProps.onPointerDown !== newProps.onPointerDown) {
            updates.push({
                propertyName: 'onPointerDown',
                value: newProps.onPointerDown,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.Scene.onPointerMove of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerMove === undefined && oldProps.onPointerMove !== newProps.onPointerMove) {
            updates.push({
                propertyName: 'onPointerMove',
                value: newProps.onPointerMove,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.Scene.onPointerObservable of type 'BabylonjsCoreObservable<BabylonjsCorePointerInfo>/fn':
        if (oldProps.onPointerObservable === undefined && oldProps.onPointerObservable !== newProps.onPointerObservable) {
            updates.push({
                propertyName: 'onPointerObservable',
                value: newProps.onPointerObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfo>'
            });
        }
        // xxx-ns-xxx.Scene.onPointerPick of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void/fn':
        if (oldProps.onPointerPick === undefined && oldProps.onPointerPick !== newProps.onPointerPick) {
            updates.push({
                propertyName: 'onPointerPick',
                value: newProps.onPointerPick,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void'
            });
        }
        // xxx-ns-xxx.Scene.onPointerUp of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerUp === undefined && oldProps.onPointerUp !== newProps.onPointerUp) {
            updates.push({
                propertyName: 'onPointerUp',
                value: newProps.onPointerUp,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.Scene.onPreKeyboardObservable of type 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>/fn':
        if (oldProps.onPreKeyboardObservable === undefined && oldProps.onPreKeyboardObservable !== newProps.onPreKeyboardObservable) {
            updates.push({
                propertyName: 'onPreKeyboardObservable',
                value: newProps.onPreKeyboardObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>'
            });
        }
        // xxx-ns-xxx.Scene.onPrePointerObservable of type 'BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>/fn':
        if (oldProps.onPrePointerObservable === undefined && oldProps.onPrePointerObservable !== newProps.onPrePointerObservable) {
            updates.push({
                propertyName: 'onPrePointerObservable',
                value: newProps.onPrePointerObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>'
            });
        }
        // xxx-ns-xxx.Scene.onReadyObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onReadyObservable === undefined && oldProps.onReadyObservable !== newProps.onReadyObservable) {
            updates.push({
                propertyName: 'onReadyObservable',
                value: newProps.onReadyObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.Scene.onSkeletonRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>/fn':
        if (oldProps.onSkeletonRemovedObservable === undefined && oldProps.onSkeletonRemovedObservable !== newProps.onSkeletonRemovedObservable) {
            updates.push({
                propertyName: 'onSkeletonRemovedObservable',
                value: newProps.onSkeletonRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>'
            });
        }
        // xxx-ns-xxx.Scene.onTextureRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>/fn':
        if (oldProps.onTextureRemovedObservable === undefined && oldProps.onTextureRemovedObservable !== newProps.onTextureRemovedObservable) {
            updates.push({
                propertyName: 'onTextureRemovedObservable',
                value: newProps.onTextureRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>'
            });
        }
        // xxx-ns-xxx.Scene.onTransformNodeRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onTransformNodeRemovedObservable === undefined && oldProps.onTransformNodeRemovedObservable !== newProps.onTransformNodeRemovedObservable) {
            updates.push({
                propertyName: 'onTransformNodeRemovedObservable',
                value: newProps.onTransformNodeRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // xxx-ns-xxx.Scene.particlesEnabled of type 'boolean':
        if (oldProps.particlesEnabled !== newProps.particlesEnabled) {
            updates.push({
                propertyName: 'particlesEnabled',
                value: newProps.particlesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.Scene.pointerDownPredicate.
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.Scene.pointerMovePredicate.
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.Scene.pointerUpPredicate.
        // xxx-ns-xxx.Scene.pointerX of type 'number':
        if (oldProps.pointerX !== newProps.pointerX) {
            updates.push({
                propertyName: 'pointerX',
                value: newProps.pointerX,
                type: 'number'
            });
        }
        // xxx-ns-xxx.Scene.pointerY of type 'number':
        if (oldProps.pointerY !== newProps.pointerY) {
            updates.push({
                propertyName: 'pointerY',
                value: newProps.pointerY,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCorePostProcess[] property (not coded) xxx-ns-xxx.Scene.postProcesses.
        // xxx-ns-xxx.Scene.postProcessesEnabled of type 'boolean':
        if (oldProps.postProcessesEnabled !== newProps.postProcessesEnabled) {
            updates.push({
                propertyName: 'postProcessesEnabled',
                value: newProps.postProcessesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCorePostProcessManager property (not coded) xxx-ns-xxx.Scene.postProcessManager.
        // xxx-ns-xxx.Scene.preventDefaultOnPointerDown of type 'boolean':
        if (oldProps.preventDefaultOnPointerDown !== newProps.preventDefaultOnPointerDown) {
            updates.push({
                propertyName: 'preventDefaultOnPointerDown',
                value: newProps.preventDefaultOnPointerDown,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.preventDefaultOnPointerUp of type 'boolean':
        if (oldProps.preventDefaultOnPointerUp !== newProps.preventDefaultOnPointerUp) {
            updates.push({
                propertyName: 'preventDefaultOnPointerUp',
                value: newProps.preventDefaultOnPointerUp,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.probesEnabled of type 'boolean':
        if (oldProps.probesEnabled !== newProps.probesEnabled) {
            updates.push({
                propertyName: 'probesEnabled',
                value: newProps.probesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.proceduralTexturesEnabled of type 'boolean':
        if (oldProps.proceduralTexturesEnabled !== newProps.proceduralTexturesEnabled) {
            updates.push({
                propertyName: 'proceduralTexturesEnabled',
                value: newProps.proceduralTexturesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.renderTargetsEnabled of type 'boolean':
        if (oldProps.renderTargetsEnabled !== newProps.renderTargetsEnabled) {
            updates.push({
                propertyName: 'renderTargetsEnabled',
                value: newProps.renderTargetsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.requireLightSorting of type 'boolean':
        if (oldProps.requireLightSorting !== newProps.requireLightSorting) {
            updates.push({
                propertyName: 'requireLightSorting',
                value: newProps.requireLightSorting,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.Scene.reservedDataStore.
        // xxx-ns-xxx.Scene.shadowsEnabled of type 'boolean':
        if (oldProps.shadowsEnabled !== newProps.shadowsEnabled) {
            updates.push({
                propertyName: 'shadowsEnabled',
                value: newProps.shadowsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.skeletonsEnabled of type 'boolean':
        if (oldProps.skeletonsEnabled !== newProps.skeletonsEnabled) {
            updates.push({
                propertyName: 'skeletonsEnabled',
                value: newProps.skeletonsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.spritesEnabled of type 'boolean':
        if (oldProps.spritesEnabled !== newProps.spritesEnabled) {
            updates.push({
                propertyName: 'spritesEnabled',
                value: newProps.spritesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.texturesEnabled of type 'boolean':
        if (oldProps.texturesEnabled !== newProps.texturesEnabled) {
            updates.push({
                propertyName: 'texturesEnabled',
                value: newProps.texturesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.useConstantAnimationDeltaTime of type 'boolean':
        if (oldProps.useConstantAnimationDeltaTime !== newProps.useConstantAnimationDeltaTime) {
            updates.push({
                propertyName: 'useConstantAnimationDeltaTime',
                value: newProps.useConstantAnimationDeltaTime,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.useDelayedTextureLoading of type 'boolean':
        if (oldProps.useDelayedTextureLoading !== newProps.useDelayedTextureLoading) {
            updates.push({
                propertyName: 'useDelayedTextureLoading',
                value: newProps.useDelayedTextureLoading,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.Scene.useRightHandedSystem of type 'boolean':
        if (oldProps.useRightHandedSystem !== newProps.useRightHandedSystem) {
            updates.push({
                propertyName: 'useRightHandedSystem',
                value: newProps.useRightHandedSystem,
                type: 'boolean'
            });
        }
        // xxxx-ns-xxxx.Scene.setActiveCameraByID of type '(id?: string)':
        if (oldProps.setActiveCameraByID !== newProps.setActiveCameraByID) {
            updates.push({
                propertyName: 'setActiveCameraByID',
                value: newProps.setActiveCameraByID,
                type: '(id?: string)'
            });
        }
        // xxxx-ns-xxxx.Scene.setActiveCameraByName of type '(name?: string)':
        if (oldProps.setActiveCameraByName !== newProps.setActiveCameraByName) {
            updates.push({
                propertyName: 'setActiveCameraByName',
                value: newProps.setActiveCameraByName,
                type: '(name?: string)'
            });
        }
        // xxxx-ns-xxxx.Scene.setPointerOverMesh of type '(mesh?: BabylonjsCoreAbstractMesh)':
        if (oldProps.setPointerOverMesh !== newProps.setPointerOverMesh) {
            updates.push({
                propertyName: 'setPointerOverMesh',
                value: newProps.setPointerOverMesh,
                type: '(mesh?: BabylonjsCoreAbstractMesh)'
            });
        }
        // xxxx-ns-xxxx.Scene.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)'
            });
        }
        // xxxx-ns-xxxx.Scene.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)'
            });
        }
        // xxxx-ns-xxxx.Scene.setStepId of type '(newStepId?: number)':
        if (oldProps.setStepId !== newProps.setStepId) {
            updates.push({
                propertyName: 'setStepId',
                value: newProps.setStepId,
                type: '(newStepId?: number)'
            });
        }
        // xxxx-ns-xxxx.Scene.setTransformMatrix of type '(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix)':
        if (oldProps.setTransformMatrix !== newProps.setTransformMatrix) {
            updates.push({
                propertyName: 'setTransformMatrix',
                value: newProps.setTransformMatrix,
                type: '(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

export const AbstractMesh: string = 'AbstractMesh', Mesh: string = 'Mesh', Node: string = 'Node', TransformNode: string = 'TransformNode';
