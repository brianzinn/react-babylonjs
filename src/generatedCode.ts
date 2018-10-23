import { CreatedInstance } from "./render";
import BABYLON from "babylonjs";

export interface PropsHandler<T, U> {
    getPropertyUpdates(createdInstance: CreatedInstance<T>, oldProps: U, newProps: U): any | null;
}

export class MeshProps {
    actionManager?: BABYLON.ActionManager;
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
    isOccluded?: boolean;
    isPickable?: boolean;
    isUnIndexed?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: BABYLON.Material;
    metadata?: any;
    morphTargetManager?: BABYLON.MorphTargetManager;
    mustDepthSortFacets?: boolean;
    name?: string;
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
    parent?: BABYLON.Node;
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
    state?: string;
    subMeshes?: BABYLON.SubMesh[];
    uniqueId?: number;
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
}

export class MeshPropsHandler implements PropsHandler<BABYLON.Mesh, MeshProps> {
    getPropertyUpdates(createdInstance: CreatedInstance<BABYLON.Mesh>, oldProps: MeshProps, newProps: MeshProps): any | null {
        // generated code
        let mesh: BABYLON.Mesh = createdInstance.babylonJsObject;
        let updates: any[] = [];
        // TODO: type: BABYLON.ActionManager property (not coded) BABYLON.Mesh.actionManager.
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({ name: 'alphaIndex', value: newProps.alphaIndex, type: 'number' });
        }
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({ name: 'alwaysSelectAsActiveMesh', value: newProps.alwaysSelectAsActiveMesh, type: 'boolean' });
        }
        // TODO: type: BABYLON.AnimationPropertiesOverride property (not coded) BABYLON.Mesh.animationPropertiesOverride.
        // TODO: type: BABYLON.Animation[] property (not coded) BABYLON.Mesh.animations.
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({ name: 'applyFog', value: newProps.applyFog, type: 'boolean' });
        }
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({ name: 'billboardMode', value: newProps.billboardMode, type: 'number' });
        }
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({ name: 'checkCollisions', value: newProps.checkCollisions, type: 'boolean' });
        }
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({ name: 'collisionGroup', value: newProps.collisionGroup, type: 'number' });
        }
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({ name: 'collisionMask', value: newProps.collisionMask, type: 'number' });
        }
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({ name: 'computeBonesUsingShaders', value: newProps.computeBonesUsingShaders, type: 'boolean' });
        }
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({ name: 'cullingStrategy', value: newProps.cullingStrategy, type: 'number' });
        }
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({ name: 'definedFacingForward', value: newProps.definedFacingForward, type: 'boolean' });
        }
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({ name: 'delayLoadingFile', value: newProps.delayLoadingFile, type: 'string' });
        }
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({ name: 'delayLoadState', value: newProps.delayLoadState, type: 'number' });
        }
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({ name: 'doNotSerialize', value: newProps.doNotSerialize, type: 'boolean' });
        }
        // TODO: type: BABYLON.Color4 property (not coded) BABYLON.Mesh.edgesColor.
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({ name: 'edgesWidth', value: newProps.edgesWidth, type: 'number' });
        }
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({ name: 'ellipsoid', value: newProps.ellipsoid, type: 'BABYLON.Vector3' });
        }
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({ name: 'ellipsoidOffset', value: newProps.ellipsoidOffset, type: 'BABYLON.Vector3' });
        }
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({ name: 'enablePointerMoveEvents', value: newProps.enablePointerMoveEvents, type: 'boolean' });
        }
        if (newProps.facetDepthSortFrom && (!oldProps.facetDepthSortFrom || !oldProps.facetDepthSortFrom.equals(newProps.facetDepthSortFrom))) {
            updates.push({ name: 'facetDepthSortFrom', value: newProps.facetDepthSortFrom, type: 'BABYLON.Vector3' });
        }
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({ name: 'hasVertexAlpha', value: newProps.hasVertexAlpha, type: 'boolean' });
        }
        if (oldProps.id !== newProps.id) {
            updates.push({ name: 'id', value: newProps.id, type: 'string' });
        }
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({ name: 'ignoreNonUniformScaling', value: newProps.ignoreNonUniformScaling, type: 'boolean' });
        }
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({ name: 'infiniteDistance', value: newProps.infiniteDistance, type: 'boolean' });
        }
        // TODO: type: BABYLON.InstancedMesh[] property (not coded) BABYLON.Mesh.instances.
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({ name: 'isBlocker', value: newProps.isBlocker, type: 'boolean' });
        }
        if (oldProps.isOccluded !== newProps.isOccluded) {
            updates.push({ name: 'isOccluded', value: newProps.isOccluded, type: 'boolean' });
        }
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({ name: 'isPickable', value: newProps.isPickable, type: 'boolean' });
        }
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({ name: 'isUnIndexed', value: newProps.isUnIndexed, type: 'boolean' });
        }
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({ name: 'isVisible', value: newProps.isVisible, type: 'boolean' });
        }
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({ name: 'layerMask', value: newProps.layerMask, type: 'number' });
        }
        // TODO: type: BABYLON.Material property (not coded) BABYLON.Mesh.material.
        // TODO: type: any property (not coded) BABYLON.Mesh.metadata.
        // TODO: type: BABYLON.MorphTargetManager property (not coded) BABYLON.Mesh.morphTargetManager.
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({ name: 'mustDepthSortFacets', value: newProps.mustDepthSortFacets, type: 'boolean' });
        }
        if (oldProps.name !== newProps.name) {
            updates.push({ name: 'name', value: newProps.name, type: 'string' });
        }
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({ name: 'numBoneInfluencers', value: newProps.numBoneInfluencers, type: 'number' });
        }
        if (oldProps.occlusionQueryAlgorithmType !== newProps.occlusionQueryAlgorithmType) {
            updates.push({ name: 'occlusionQueryAlgorithmType', value: newProps.occlusionQueryAlgorithmType, type: 'number' });
        }
        if (oldProps.occlusionRetryCount !== newProps.occlusionRetryCount) {
            updates.push({ name: 'occlusionRetryCount', value: newProps.occlusionRetryCount, type: 'number' });
        }
        if (oldProps.occlusionType !== newProps.occlusionType) {
            updates.push({ name: 'occlusionType', value: newProps.occlusionType, type: 'number' });
        }
        // TODO: type: BABYLON.Color3 property (not coded) BABYLON.Mesh.outlineColor.
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({ name: 'outlineWidth', value: newProps.outlineWidth, type: 'number' });
        }
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({ name: 'overlayAlpha', value: newProps.overlayAlpha, type: 'number' });
        }
        // TODO: type: BABYLON.Color3 property (not coded) BABYLON.Mesh.overlayColor.
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({ name: 'overrideMaterialSideOrientation', value: newProps.overrideMaterialSideOrientation, type: 'number' });
        }
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({ name: 'overridenInstanceCount', value: newProps.overridenInstanceCount, type: 'number' });
        }
        // TODO: type: BABYLON.Node property (not coded) BABYLON.Mesh.parent.
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({ name: 'partitioningBBoxRatio', value: newProps.partitioningBBoxRatio, type: 'number' });
        }
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({ name: 'partitioningSubdivisions', value: newProps.partitioningSubdivisions, type: 'number' });
        }
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({ name: 'position', value: newProps.position, type: 'BABYLON.Vector3' });
        }
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({ name: 'receiveShadows', value: newProps.receiveShadows, type: 'boolean' });
        }
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({ name: 'renderingGroupId', value: newProps.renderingGroupId, type: 'number' });
        }
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({ name: 'rotation', value: newProps.rotation, type: 'BABYLON.Vector3' });
        }
        // TODO: type: BABYLON.Quaternion property (not coded) BABYLON.Mesh.rotationQuaternion.
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({ name: 'scaling', value: newProps.scaling, type: 'BABYLON.Vector3' });
        }
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({ name: 'scalingDeterminant', value: newProps.scalingDeterminant, type: 'number' });
        }
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({ name: 'showSubMeshesBoundingBox', value: newProps.showSubMeshesBoundingBox, type: 'boolean' });
        }
        // TODO: type: BABYLON.Skeleton property (not coded) BABYLON.Mesh.skeleton.
        if (oldProps.state !== newProps.state) {
            updates.push({ name: 'state', value: newProps.state, type: 'string' });
        }
        // TODO: type: BABYLON.SubMesh[] property (not coded) BABYLON.Mesh.subMeshes.
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({ name: 'uniqueId', value: newProps.uniqueId, type: 'number' });
        }
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({ name: 'useOctreeForCollisions', value: newProps.useOctreeForCollisions, type: 'boolean' });
        }
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({ name: 'useOctreeForPicking', value: newProps.useOctreeForPicking, type: 'boolean' });
        }
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({ name: 'useOctreeForRenderingSelection', value: newProps.useOctreeForRenderingSelection, type: 'boolean' });
        }
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({ name: 'useVertexColors', value: newProps.useVertexColors, type: 'boolean' });
        }
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({ name: 'visibility', value: newProps.visibility, type: 'number' });
        }
        return updates;
    }
}

export const AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', BaseTexture: string = 'BaseTexture', Box: string = 'Box', Camera: string = 'Camera', ColorGradingTexture: string = 'ColorGradingTexture', CubeTexture: string = 'CubeTexture', CubeTextureAssetTask: string = 'CubeTextureAssetTask', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DepthTextureCreationOptions: string = 'DepthTextureCreationOptions', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DummyInternalTextureTracker: string = 'DummyInternalTextureTracker', DynamicTexture: string = 'DynamicTexture', EnvironmentTextureTools: string = 'EnvironmentTextureTools', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GamepadCamera: string = 'GamepadCamera', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HDRCubeTextureAssetTask: string = 'HDRCubeTextureAssetTask', HemisphericLight: string = 'HemisphericLight', IcoSphere: string = 'IcoSphere', InternalTexture: string = 'InternalTexture', KhronosTextureContainer: string = 'KhronosTextureContainer', Lathe: string = 'Lathe', Light: string = 'Light', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', MaterialHelper: string = 'MaterialHelper', Mesh: string = 'Mesh', MirrorTexture: string = 'MirrorTexture', MultiMaterial: string = 'MultiMaterial', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', Plane: string = 'Plane', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', PositionNormalTextureVertex: string = 'PositionNormalTextureVertex', ProceduralTexture: string = 'ProceduralTexture', ProceduralTextureSceneComponent: string = 'ProceduralTextureSceneComponent', PushMaterial: string = 'PushMaterial', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture3D: string = 'RawTexture3D', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ShaderMaterial: string = 'ShaderMaterial', ShadowLight: string = 'ShadowLight', Sphere: string = 'Sphere', SpotLight: string = 'SpotLight', Sprite: string = 'Sprite', SpriteManager: string = 'SpriteManager', SpriteSceneComponent: string = 'SpriteSceneComponent', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', Texture: string = 'Texture', TextureAssetTask: string = 'TextureAssetTask', TextureOptimization: string = 'TextureOptimization', TextureTools: string = 'TextureTools', TiledGround: string = 'TiledGround', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRCameraMetrics: string = 'VRCameraMetrics', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', WebVRFreeCamera: string = 'WebVRFreeCamera';
