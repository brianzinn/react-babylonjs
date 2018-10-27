import { CreatedInstance, PropertyUpdate } from "./render";
import BABYLON from "babylonjs";

export interface PropsHandler<T, U> {
    getPropertyUpdates(createdInstance: CreatedInstance<T>, oldProps: U, newProps: U): PropertyUpdate[] | null;
}

export interface HasPropsHandlers<T, U> {
    getPropsHandlers(): PropsHandler<T, U>[];
    addPropsHandler(propHandler: PropsHandler<T, U>): void;
}

export class FiberNode {
}

export class FiberNodeProps {
    animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride;
    animations?: BABYLON.Animation[];
    doNotSerialize?: boolean;
    id?: string;
    metadata?: any;
    name?: string;
    parent?: BABYLON.Node;
    state?: string;
    uniqueId?: number;
}

export class FiberNodePropsHandler implements PropsHandler<BABYLON.Node, FiberNodeProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Node>, oldProps: FiberNodeProps, newProps: FiberNodeProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Node = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.AnimationPropertiesOverride property (not coded) BABYLON.Node.animationPropertiesOverride.
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.Node.animations.
        // BABYLONNode.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // BABYLONNode.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) BABYLON.Node.metadata.
        // BABYLONNode.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: BABYLON.Node property (not coded) BABYLON.Node.parent.
        // BABYLONNode.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // BABYLONNode.uniqueId of type 'number':
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

export class FiberMeshProps extends FiberNodeProps {
    actionManager?: BABYLON.ActionManager;
    alphaIndex?: number;
    alwaysSelectAsActiveMesh?: boolean;
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
    edgesColor?: BABYLON.Color4;
    edgesWidth?: number;
    ellipsoid?: BABYLON.Vector3;
    ellipsoidOffset?: BABYLON.Vector3;
    enablePointerMoveEvents?: boolean;
    facetDepthSortFrom?: BABYLON.Vector3;
    hasVertexAlpha?: boolean;
    ignoreNonUniformScaling?: boolean;
    infiniteDistance?: boolean;
    instances?: BABYLON.InstancedMesh[];
    isBlocker?: boolean;
    isOccluded?: boolean;
    isPickable?: boolean;
    isUnIndexed?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: BABYLON.Material;
    morphTargetManager?: BABYLON.MorphTargetManager;
    mustDepthSortFacets?: boolean;
    numBoneInfluencers?: number;
    occlusionQueryAlgorithmType?: number;
    occlusionRetryCount?: number;
    occlusionType?: number;
    outlineColor?: BABYLON.Color3;
    outlineWidth?: number;
    overlayAlpha?: number;
    overlayColor?: BABYLON.Color3;
    overrideMaterialSideOrientation?: number;
    overridenInstanceCount?: number;
    partitioningBBoxRatio?: number;
    partitioningSubdivisions?: number;
    position?: BABYLON.Vector3;
    receiveShadows?: boolean;
    renderingGroupId?: number;
    rotation?: BABYLON.Vector3;
    rotationQuaternion?: BABYLON.Quaternion;
    scaling?: BABYLON.Vector3;
    scalingDeterminant?: number;
    showSubMeshesBoundingBox?: boolean;
    skeleton?: BABYLON.Skeleton;
    subMeshes?: BABYLON.SubMesh[];
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
}

export class FiberMeshPropsHandler implements PropsHandler<BABYLON.Mesh, FiberMeshProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Mesh>, oldProps: FiberMeshProps, newProps: FiberMeshProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Mesh = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.ActionManager property (not coded) BABYLON.Mesh.actionManager.
        // BABYLONMesh.alphaIndex of type 'number':
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // BABYLONMesh.alwaysSelectAsActiveMesh of type 'boolean':
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // BABYLONMesh.applyFog of type 'boolean':
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // BABYLONMesh.billboardMode of type 'number':
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // BABYLONMesh.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLONMesh.collisionGroup of type 'number':
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // BABYLONMesh.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLONMesh.computeBonesUsingShaders of type 'boolean':
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // BABYLONMesh.cullingStrategy of type 'number':
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // BABYLONMesh.definedFacingForward of type 'boolean':
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // BABYLONMesh.delayLoadingFile of type 'string':
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({
                propertyName: 'delayLoadingFile',
                value: newProps.delayLoadingFile,
                type: 'string'
            });
        }
        // BABYLONMesh.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Color4 property (not coded) BABYLON.Mesh.edgesColor.
        // BABYLONMesh.edgesWidth of type 'number':
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // BABYLONMesh.ellipsoid of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONMesh.ellipsoidOffset of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONMesh.enablePointerMoveEvents of type 'boolean':
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // BABYLONMesh.facetDepthSortFrom of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.facetDepthSortFrom && (!oldProps.facetDepthSortFrom || !oldProps.facetDepthSortFrom.equals(newProps.facetDepthSortFrom))) {
            updates.push({
                propertyName: 'facetDepthSortFrom',
                value: newProps.facetDepthSortFrom,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONMesh.hasVertexAlpha of type 'boolean':
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // BABYLONMesh.ignoreNonUniformScaling of type 'boolean':
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // BABYLONMesh.infiniteDistance of type 'boolean':
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({
                propertyName: 'infiniteDistance',
                value: newProps.infiniteDistance,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.InstancedMesh[] property (not coded) BABYLON.Mesh.instances.
        // BABYLONMesh.isBlocker of type 'boolean':
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // BABYLONMesh.isOccluded of type 'boolean':
        if (oldProps.isOccluded !== newProps.isOccluded) {
            updates.push({
                propertyName: 'isOccluded',
                value: newProps.isOccluded,
                type: 'boolean'
            });
        }
        // BABYLONMesh.isPickable of type 'boolean':
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // BABYLONMesh.isUnIndexed of type 'boolean':
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // BABYLONMesh.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BABYLONMesh.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.Material property (not coded) BABYLON.Mesh.material.
        // TODO: type: BABYLON.MorphTargetManager property (not coded) BABYLON.Mesh.morphTargetManager.
        // BABYLONMesh.mustDepthSortFacets of type 'boolean':
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // BABYLONMesh.numBoneInfluencers of type 'number':
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({
                propertyName: 'numBoneInfluencers',
                value: newProps.numBoneInfluencers,
                type: 'number'
            });
        }
        // BABYLONMesh.occlusionQueryAlgorithmType of type 'number':
        if (oldProps.occlusionQueryAlgorithmType !== newProps.occlusionQueryAlgorithmType) {
            updates.push({
                propertyName: 'occlusionQueryAlgorithmType',
                value: newProps.occlusionQueryAlgorithmType,
                type: 'number'
            });
        }
        // BABYLONMesh.occlusionRetryCount of type 'number':
        if (oldProps.occlusionRetryCount !== newProps.occlusionRetryCount) {
            updates.push({
                propertyName: 'occlusionRetryCount',
                value: newProps.occlusionRetryCount,
                type: 'number'
            });
        }
        // BABYLONMesh.occlusionType of type 'number':
        if (oldProps.occlusionType !== newProps.occlusionType) {
            updates.push({
                propertyName: 'occlusionType',
                value: newProps.occlusionType,
                type: 'number'
            });
        }
        // BABYLONMesh.outlineColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.outlineColor && (!oldProps.outlineColor || !oldProps.outlineColor.equals(newProps.outlineColor))) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLONMesh.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // BABYLONMesh.overlayAlpha of type 'number':
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // BABYLONMesh.overlayColor of BABYLONBABYLON.Color3 uses object equals to find diffs:
        if (newProps.overlayColor && (!oldProps.overlayColor || !oldProps.overlayColor.equals(newProps.overlayColor))) {
            updates.push({
                propertyName: 'overlayColor',
                value: newProps.overlayColor,
                type: 'BABYLON.Color3'
            });
        }
        // BABYLONMesh.overrideMaterialSideOrientation of type 'number':
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({
                propertyName: 'overrideMaterialSideOrientation',
                value: newProps.overrideMaterialSideOrientation,
                type: 'number'
            });
        }
        // BABYLONMesh.overridenInstanceCount of type 'number':
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({
                propertyName: 'overridenInstanceCount',
                value: newProps.overridenInstanceCount,
                type: 'number'
            });
        }
        // BABYLONMesh.partitioningBBoxRatio of type 'number':
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // BABYLONMesh.partitioningSubdivisions of type 'number':
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // BABYLONMesh.position of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONMesh.receiveShadows of type 'boolean':
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // BABYLONMesh.renderingGroupId of type 'number':
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // BABYLONMesh.rotation of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.Mesh.rotationQuaternion.
        // BABYLONMesh.scaling of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONMesh.scalingDeterminant of type 'number':
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // BABYLONMesh.showSubMeshesBoundingBox of type 'boolean':
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: BABYLON.Skeleton property (not coded) BABYLON.Mesh.skeleton.
        // TODO: type: BABYLON.SubMesh[] property (not coded) BABYLON.Mesh.subMeshes.
        // BABYLONMesh.useOctreeForCollisions of type 'boolean':
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // BABYLONMesh.useOctreeForPicking of type 'boolean':
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // BABYLONMesh.useOctreeForRenderingSelection of type 'boolean':
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // BABYLONMesh.useVertexColors of type 'boolean':
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // BABYLONMesh.visibility of type 'number':
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
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Camera>, oldProps: FiberCameraProps, newProps: FiberCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.Camera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONCamera.cameraRigMode of type 'number':
        if (oldProps.cameraRigMode !== newProps.cameraRigMode) {
            updates.push({
                propertyName: 'cameraRigMode',
                value: newProps.cameraRigMode,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.RenderTargetTexture[] property (not coded) BABYLON.Camera.customRenderTargets.
        // BABYLONCamera.fov of type 'number':
        if (oldProps.fov !== newProps.fov) {
            updates.push({
                propertyName: 'fov',
                value: newProps.fov,
                type: 'number'
            });
        }
        // BABYLONCamera.fovMode of type 'number':
        if (oldProps.fovMode !== newProps.fovMode) {
            updates.push({
                propertyName: 'fovMode',
                value: newProps.fovMode,
                type: 'number'
            });
        }
        // BABYLONCamera.inertia of type 'number':
        if (oldProps.inertia !== newProps.inertia) {
            updates.push({
                propertyName: 'inertia',
                value: newProps.inertia,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.CameraInputsManager<BABYLON.Camera> property (not coded) BABYLON.Camera.inputs.
        // BABYLONCamera.interaxialDistance of type 'number':
        if (oldProps.interaxialDistance !== newProps.interaxialDistance) {
            updates.push({
                propertyName: 'interaxialDistance',
                value: newProps.interaxialDistance,
                type: 'number'
            });
        }
        // BABYLONCamera.isIntermediate of type 'boolean':
        if (oldProps.isIntermediate !== newProps.isIntermediate) {
            updates.push({
                propertyName: 'isIntermediate',
                value: newProps.isIntermediate,
                type: 'boolean'
            });
        }
        // BABYLONCamera.isStereoscopicSideBySide of type 'boolean':
        if (oldProps.isStereoscopicSideBySide !== newProps.isStereoscopicSideBySide) {
            updates.push({
                propertyName: 'isStereoscopicSideBySide',
                value: newProps.isStereoscopicSideBySide,
                type: 'boolean'
            });
        }
        // BABYLONCamera.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // BABYLONCamera.maxZ of type 'number':
        if (oldProps.maxZ !== newProps.maxZ) {
            updates.push({
                propertyName: 'maxZ',
                value: newProps.maxZ,
                type: 'number'
            });
        }
        // BABYLONCamera.minZ of type 'number':
        if (oldProps.minZ !== newProps.minZ) {
            updates.push({
                propertyName: 'minZ',
                value: newProps.minZ,
                type: 'number'
            });
        }
        // BABYLONCamera.mode of type 'number':
        if (oldProps.mode !== newProps.mode) {
            updates.push({
                propertyName: 'mode',
                value: newProps.mode,
                type: 'number'
            });
        }
        // BABYLONCamera.orthoBottom of type 'number':
        if (oldProps.orthoBottom !== newProps.orthoBottom) {
            updates.push({
                propertyName: 'orthoBottom',
                value: newProps.orthoBottom,
                type: 'number'
            });
        }
        // BABYLONCamera.orthoLeft of type 'number':
        if (oldProps.orthoLeft !== newProps.orthoLeft) {
            updates.push({
                propertyName: 'orthoLeft',
                value: newProps.orthoLeft,
                type: 'number'
            });
        }
        // BABYLONCamera.orthoRight of type 'number':
        if (oldProps.orthoRight !== newProps.orthoRight) {
            updates.push({
                propertyName: 'orthoRight',
                value: newProps.orthoRight,
                type: 'number'
            });
        }
        // BABYLONCamera.orthoTop of type 'number':
        if (oldProps.orthoTop !== newProps.orthoTop) {
            updates.push({
                propertyName: 'orthoTop',
                value: newProps.orthoTop,
                type: 'number'
            });
        }
        // BABYLONCamera.position of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONCamera.upVector of BABYLONBABYLON.Vector3 uses object equals to find diffs:
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "setActiveOnSceneIfNoneActive", "type": "boolean" }];
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
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.TargetCamera>, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.TargetCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONTargetCamera.cameraDirection of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.cameraDirection && (!oldProps.cameraDirection || !oldProps.cameraDirection.equals(newProps.cameraDirection))) {
            updates.push({
                propertyName: 'cameraDirection',
                value: newProps.cameraDirection,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Vector2 property (not coded) BABYLON.TargetCamera.cameraRotation.
        // TODO: type: any property (not coded) BABYLON.TargetCamera.lockedTarget.
        // BABYLONTargetCamera.noRotationConstraint of type 'boolean':
        if (oldProps.noRotationConstraint !== newProps.noRotationConstraint) {
            updates.push({
                propertyName: 'noRotationConstraint',
                value: newProps.noRotationConstraint,
                type: 'boolean'
            });
        }
        // BABYLONTargetCamera.rotation of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.TargetCamera.rotationQuaternion.
        // BABYLONTargetCamera.speed of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "setActiveOnSceneIfNoneActive", "type": "boolean" }];
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
    wheelDeltaPercentage?: number;
    wheelPrecision?: number;
    zoomOnFactor?: number;
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<BABYLON.ArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ArcRotateCamera>, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ArcRotateCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONArcRotateCamera.allowUpsideDown of type 'boolean':
        if (oldProps.allowUpsideDown !== newProps.allowUpsideDown) {
            updates.push({
                propertyName: 'allowUpsideDown',
                value: newProps.allowUpsideDown,
                type: 'boolean'
            });
        }
        // BABYLONArcRotateCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.angularSensibilityX of type 'number':
        if (oldProps.angularSensibilityX !== newProps.angularSensibilityX) {
            updates.push({
                propertyName: 'angularSensibilityX',
                value: newProps.angularSensibilityX,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.angularSensibilityY of type 'number':
        if (oldProps.angularSensibilityY !== newProps.angularSensibilityY) {
            updates.push({
                propertyName: 'angularSensibilityY',
                value: newProps.angularSensibilityY,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLONArcRotateCamera.collisionRadius of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.collisionRadius && (!oldProps.collisionRadius || !oldProps.collisionRadius.equals(newProps.collisionRadius))) {
            updates.push({
                propertyName: 'collisionRadius',
                value: newProps.collisionRadius,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONArcRotateCamera.inertialAlphaOffset of type 'number':
        if (oldProps.inertialAlphaOffset !== newProps.inertialAlphaOffset) {
            updates.push({
                propertyName: 'inertialAlphaOffset',
                value: newProps.inertialAlphaOffset,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.inertialBetaOffset of type 'number':
        if (oldProps.inertialBetaOffset !== newProps.inertialBetaOffset) {
            updates.push({
                propertyName: 'inertialBetaOffset',
                value: newProps.inertialBetaOffset,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.inertialPanningX of type 'number':
        if (oldProps.inertialPanningX !== newProps.inertialPanningX) {
            updates.push({
                propertyName: 'inertialPanningX',
                value: newProps.inertialPanningX,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.inertialPanningY of type 'number':
        if (oldProps.inertialPanningY !== newProps.inertialPanningY) {
            updates.push({
                propertyName: 'inertialPanningY',
                value: newProps.inertialPanningY,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.inertialRadiusOffset of type 'number':
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
        // BABYLONArcRotateCamera.lowerAlphaLimit of type 'number':
        if (oldProps.lowerAlphaLimit !== newProps.lowerAlphaLimit) {
            updates.push({
                propertyName: 'lowerAlphaLimit',
                value: newProps.lowerAlphaLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.lowerBetaLimit of type 'number':
        if (oldProps.lowerBetaLimit !== newProps.lowerBetaLimit) {
            updates.push({
                propertyName: 'lowerBetaLimit',
                value: newProps.lowerBetaLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.lowerRadiusLimit of type 'number':
        if (oldProps.lowerRadiusLimit !== newProps.lowerRadiusLimit) {
            updates.push({
                propertyName: 'lowerRadiusLimit',
                value: newProps.lowerRadiusLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.panningAxis of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.panningAxis && (!oldProps.panningAxis || !oldProps.panningAxis.equals(newProps.panningAxis))) {
            updates.push({
                propertyName: 'panningAxis',
                value: newProps.panningAxis,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONArcRotateCamera.panningDistanceLimit of type 'number':
        if (oldProps.panningDistanceLimit !== newProps.panningDistanceLimit) {
            updates.push({
                propertyName: 'panningDistanceLimit',
                value: newProps.panningDistanceLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.panningInertia of type 'number':
        if (oldProps.panningInertia !== newProps.panningInertia) {
            updates.push({
                propertyName: 'panningInertia',
                value: newProps.panningInertia,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.panningOriginTarget of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.panningOriginTarget && (!oldProps.panningOriginTarget || !oldProps.panningOriginTarget.equals(newProps.panningOriginTarget))) {
            updates.push({
                propertyName: 'panningOriginTarget',
                value: newProps.panningOriginTarget,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONArcRotateCamera.panningSensibility of type 'number':
        if (oldProps.panningSensibility !== newProps.panningSensibility) {
            updates.push({
                propertyName: 'panningSensibility',
                value: newProps.panningSensibility,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.pinchDeltaPercentage of type 'number':
        if (oldProps.pinchDeltaPercentage !== newProps.pinchDeltaPercentage) {
            updates.push({
                propertyName: 'pinchDeltaPercentage',
                value: newProps.pinchDeltaPercentage,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.pinchPrecision of type 'number':
        if (oldProps.pinchPrecision !== newProps.pinchPrecision) {
            updates.push({
                propertyName: 'pinchPrecision',
                value: newProps.pinchPrecision,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.pinchToPanMaxDistance of type 'number':
        if (oldProps.pinchToPanMaxDistance !== newProps.pinchToPanMaxDistance) {
            updates.push({
                propertyName: 'pinchToPanMaxDistance',
                value: newProps.pinchToPanMaxDistance,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.target of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.target && (!oldProps.target || !oldProps.target.equals(newProps.target))) {
            updates.push({
                propertyName: 'target',
                value: newProps.target,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Vector2 property (not coded) BABYLON.ArcRotateCamera.targetScreenOffset.
        // BABYLONArcRotateCamera.upperAlphaLimit of type 'number':
        if (oldProps.upperAlphaLimit !== newProps.upperAlphaLimit) {
            updates.push({
                propertyName: 'upperAlphaLimit',
                value: newProps.upperAlphaLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.upperBetaLimit of type 'number':
        if (oldProps.upperBetaLimit !== newProps.upperBetaLimit) {
            updates.push({
                propertyName: 'upperBetaLimit',
                value: newProps.upperBetaLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.upperRadiusLimit of type 'number':
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.useAutoRotationBehavior of type 'boolean':
        if (oldProps.useAutoRotationBehavior !== newProps.useAutoRotationBehavior) {
            updates.push({
                propertyName: 'useAutoRotationBehavior',
                value: newProps.useAutoRotationBehavior,
                type: 'boolean'
            });
        }
        // BABYLONArcRotateCamera.useBouncingBehavior of type 'boolean':
        if (oldProps.useBouncingBehavior !== newProps.useBouncingBehavior) {
            updates.push({
                propertyName: 'useBouncingBehavior',
                value: newProps.useBouncingBehavior,
                type: 'boolean'
            });
        }
        // BABYLONArcRotateCamera.useFramingBehavior of type 'boolean':
        if (oldProps.useFramingBehavior !== newProps.useFramingBehavior) {
            updates.push({
                propertyName: 'useFramingBehavior',
                value: newProps.useFramingBehavior,
                type: 'boolean'
            });
        }
        // BABYLONArcRotateCamera.wheelDeltaPercentage of type 'number':
        if (oldProps.wheelDeltaPercentage !== newProps.wheelDeltaPercentage) {
            updates.push({
                propertyName: 'wheelDeltaPercentage',
                value: newProps.wheelDeltaPercentage,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.wheelPrecision of type 'number':
        if (oldProps.wheelPrecision !== newProps.wheelPrecision) {
            updates.push({
                propertyName: 'wheelPrecision',
                value: newProps.wheelPrecision,
                type: 'number'
            });
        }
        // BABYLONArcRotateCamera.zoomOnFactor of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "alpha", "type": "number" }, { "name": "beta", "type": "number" }, { "name": "radius", "type": "number" }, { "name": "target", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "setActiveOnSceneIfNoneActive", "type": "boolean" }];
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
}

export class FiberVRDeviceOrientationArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationArcRotateCamera, FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationArcRotateCamera>, oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "alpha", "type": "number" }, { "name": "beta", "type": "number" }, { "name": "radius", "type": "number" }, { "name": "target", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "compensateDistortion", "type": "boolean" }, { "name": "vrCameraMetrics", "type": "BABYLON.VRCameraMetrics" }];
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
}

export class FiberAnaglyphArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphArcRotateCamera, FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphArcRotateCamera>, oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "alpha", "type": "number" }, { "name": "beta", "type": "number" }, { "name": "radius", "type": "number" }, { "name": "target", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberStereoscopicArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicArcRotateCamera, FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicArcRotateCamera>, oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "alpha", "type": "number" }, { "name": "beta", "type": "number" }, { "name": "radius", "type": "number" }, { "name": "target", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "isStereoscopicSideBySide", "type": "boolean" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.FollowCamera>, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.FollowCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONFollowCamera.cameraAcceleration of type 'number':
        if (oldProps.cameraAcceleration !== newProps.cameraAcceleration) {
            updates.push({
                propertyName: 'cameraAcceleration',
                value: newProps.cameraAcceleration,
                type: 'number'
            });
        }
        // BABYLONFollowCamera.heightOffset of type 'number':
        if (oldProps.heightOffset !== newProps.heightOffset) {
            updates.push({
                propertyName: 'heightOffset',
                value: newProps.heightOffset,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.AbstractMesh property (not coded) BABYLON.FollowCamera.lockedTarget.
        // BABYLONFollowCamera.maxCameraSpeed of type 'number':
        if (oldProps.maxCameraSpeed !== newProps.maxCameraSpeed) {
            updates.push({
                propertyName: 'maxCameraSpeed',
                value: newProps.maxCameraSpeed,
                type: 'number'
            });
        }
        // BABYLONFollowCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BABYLONFollowCamera.rotationOffset of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "lockedTarget", "type": "BABYLON.AbstractMesh" }];
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
}

export class FiberArcFollowCameraProps extends FiberTargetCameraProps {
    alpha?: number;
    beta?: number;
    radius?: number;
    target?: BABYLON.AbstractMesh;
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<BABYLON.ArcFollowCamera, FiberArcFollowCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.ArcFollowCamera>, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.ArcFollowCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONArcFollowCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BABYLONArcFollowCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BABYLONArcFollowCamera.radius of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "alpha", "type": "number" }, { "name": "beta", "type": "number" }, { "name": "radius", "type": "number" }, { "name": "target", "type": "BABYLON.AbstractMesh" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.FreeCamera>, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.FreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONFreeCamera.angularSensibility of type 'number':
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // BABYLONFreeCamera.applyGravity of type 'boolean':
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // BABYLONFreeCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BABYLONFreeCamera.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BABYLONFreeCamera.ellipsoid of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BABYLON.Vector3'
            });
        }
        // BABYLONFreeCamera.ellipsoidOffset of BABYLONBABYLON.Vector3 uses object equals to find diffs:
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "setActiveOnSceneIfNoneActive", "type": "boolean" }];
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
}

export class FiberDeviceOrientationCameraProps extends FiberFreeCameraProps {
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BABYLON.DeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.DeviceOrientationCamera>, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberVRDeviceOrientationFreeCameraProps extends FiberDeviceOrientationCameraProps {
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationFreeCamera, FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationFreeCamera>, oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "compensateDistortion", "type": "boolean" }, { "name": "vrCameraMetrics", "type": "BABYLON.VRCameraMetrics" }];
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
}

export class FiberVRDeviceOrientationGamepadCameraProps extends FiberVRDeviceOrientationFreeCameraProps {
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<BABYLON.VRDeviceOrientationGamepadCamera, FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VRDeviceOrientationGamepadCamera>, oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "compensateDistortion", "type": "boolean" }, { "name": "vrCameraMetrics", "type": "BABYLON.VRCameraMetrics" }];
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
}

export class FiberTouchCameraProps extends FiberFreeCameraProps {
    touchAngularSensibility?: number;
    touchMoveSensibility?: number;
}

export class FiberTouchCameraPropsHandler implements PropsHandler<BABYLON.TouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.TouchCamera>, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.TouchCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONTouchCamera.touchAngularSensibility of type 'number':
        if (oldProps.touchAngularSensibility !== newProps.touchAngularSensibility) {
            updates.push({
                propertyName: 'touchAngularSensibility',
                value: newProps.touchAngularSensibility,
                type: 'number'
            });
        }
        // BABYLONTouchCamera.touchMoveSensibility of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberUniversalCameraProps extends FiberTouchCameraProps {
    gamepadAngularSensibility?: number;
    gamepadMoveSensibility?: number;
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<BABYLON.UniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.UniversalCamera>, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.UniversalCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // BABYLONUniversalCamera.gamepadAngularSensibility of type 'number':
        if (oldProps.gamepadAngularSensibility !== newProps.gamepadAngularSensibility) {
            updates.push({
                propertyName: 'gamepadAngularSensibility',
                value: newProps.gamepadAngularSensibility,
                type: 'number'
            });
        }
        // BABYLONUniversalCamera.gamepadMoveSensibility of type 'number':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberGamepadCameraProps extends FiberUniversalCameraProps {
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<BABYLON.GamepadCamera, FiberGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.GamepadCamera>, oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberAnaglyphGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphGamepadCamera, FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphGamepadCamera>, oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberStereoscopicGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicGamepadCamera, FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicGamepadCamera>, oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "isStereoscopicSideBySide", "type": "boolean" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberAnaglyphUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphUniversalCamera, FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphUniversalCamera>, oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberStereoscopicUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicUniversalCamera, FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicUniversalCamera>, oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "isStereoscopicSideBySide", "type": "boolean" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberVirtualJoysticksCameraProps extends FiberFreeCameraProps {
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<BABYLON.VirtualJoysticksCamera, FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.VirtualJoysticksCamera>, oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.WebVRFreeCamera>, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps): PropertyUpdate[] | null {
        // generated code
        let babylonObject: BABYLON.WebVRFreeCamera = createdInstance.babylonJsObject;
        let updates: PropertyUpdate[] = [];
        // TODO: type: BABYLON.WebVRController[] property (not coded) BABYLON.WebVRFreeCamera.controllers.
        // BABYLONWebVRFreeCamera.devicePosition of BABYLONBABYLON.Vector3 uses object equals to find diffs:
        if (newProps.devicePosition && (!oldProps.devicePosition || !oldProps.devicePosition.equals(newProps.devicePosition))) {
            updates.push({
                propertyName: 'devicePosition',
                value: newProps.devicePosition,
                type: 'BABYLON.Vector3'
            });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.WebVRFreeCamera.deviceRotationQuaternion.
        // BABYLONWebVRFreeCamera.deviceScaleFactor of type 'number':
        if (oldProps.deviceScaleFactor !== newProps.deviceScaleFactor) {
            updates.push({
                propertyName: 'deviceScaleFactor',
                value: newProps.deviceScaleFactor,
                type: 'number'
            });
        }
        // TODO: type: BABYLON.DevicePose property (not coded) BABYLON.WebVRFreeCamera.rawPose.
        // BABYLONWebVRFreeCamera.rigParenting of type 'boolean':
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "scene", "type": "BABYLON.Scene" }, { "name": "webVROptions", "type": "BABYLON.WebVROptions" }];
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
}

export class FiberAnaglyphFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<BABYLON.AnaglyphFreeCamera, FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.AnaglyphFreeCamera>, oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export class FiberStereoscopicFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<BABYLON.StereoscopicFreeCamera, FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.StereoscopicFreeCamera>, oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps): PropertyUpdate[] | null {
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
    public static readonly ConstructorArgs = [{ "name": "name", "type": "string" }, { "name": "position", "type": "BABYLON.Vector3" }, { "name": "interaxialDistance", "type": "number" }, { "name": "isStereoscopicSideBySide", "type": "boolean" }, { "name": "scene", "type": "BABYLON.Scene" }];
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
}

export const AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', BaseTexture: string = 'BaseTexture', Box: string = 'Box', Camera: string = 'Camera', ColorGradingTexture: string = 'ColorGradingTexture', CubeTexture: string = 'CubeTexture', CubeTextureAssetTask: string = 'CubeTextureAssetTask', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DepthTextureCreationOptions: string = 'DepthTextureCreationOptions', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DummyInternalTextureTracker: string = 'DummyInternalTextureTracker', DynamicTexture: string = 'DynamicTexture', EnvironmentTextureTools: string = 'EnvironmentTextureTools', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GamepadCamera: string = 'GamepadCamera', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HDRCubeTextureAssetTask: string = 'HDRCubeTextureAssetTask', HemisphericLight: string = 'HemisphericLight', IcoSphere: string = 'IcoSphere', InternalTexture: string = 'InternalTexture', KhronosTextureContainer: string = 'KhronosTextureContainer', Lathe: string = 'Lathe', Light: string = 'Light', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', MaterialHelper: string = 'MaterialHelper', Mesh: string = 'Mesh', MirrorTexture: string = 'MirrorTexture', MultiMaterial: string = 'MultiMaterial', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', Plane: string = 'Plane', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', PositionNormalTextureVertex: string = 'PositionNormalTextureVertex', ProceduralTexture: string = 'ProceduralTexture', ProceduralTextureSceneComponent: string = 'ProceduralTextureSceneComponent', PushMaterial: string = 'PushMaterial', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture3D: string = 'RawTexture3D', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ShaderMaterial: string = 'ShaderMaterial', ShadowLight: string = 'ShadowLight', Sphere: string = 'Sphere', SpotLight: string = 'SpotLight', Sprite: string = 'Sprite', SpriteManager: string = 'SpriteManager', SpriteSceneComponent: string = 'SpriteSceneComponent', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', Texture: string = 'Texture', TextureAssetTask: string = 'TextureAssetTask', TextureOptimization: string = 'TextureOptimization', TextureTools: string = 'TextureTools', TiledGround: string = 'TiledGround', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', WebVRFreeCamera: string = 'WebVRFreeCamera';
