import { AbstractScene as BabylonjsCoreAbstractScene } from "@babylonjs/core/abstractScene";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper, IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions } from "@babylonjs/core/Helpers/environmentHelper";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder as BabylonjsCoreMeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper, OnAfterEnteringVRObservableEvent as BabylonjsCoreOnAfterEnteringVRObservableEvent, VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { ShadowGenerator as BabylonjsCoreShadowGenerator, ICustomShaderOptions as BabylonjsCoreICustomShaderOptions } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from "@babylonjs/core/Animations/animationPropertiesOverride";
import { Animation as BabylonjsCoreAnimation } from "@babylonjs/core/Animations/animation";
import { IInspectable as BabylonjsCoreIInspectable } from "@babylonjs/core/Misc/iInspectable";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector3 as BabylonjsCoreVector3, Quaternion as BabylonjsCoreQuaternion, Matrix as BabylonjsCoreMatrix, Color4 as BabylonjsCoreColor4, Color3 as BabylonjsCoreColor3, Viewport as BabylonjsCoreViewport, Vector2 as BabylonjsCoreVector2, Vector4 as BabylonjsCoreVector4, Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from "@babylonjs/core/Actions/abstractActionManager";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { IndicesArray as BabylonjsCoreIndicesArray, FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { InstancedMesh as BabylonjsCoreInstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { MorphTargetManager as BabylonjsCoreMorphTargetManager } from "@babylonjs/core/Morph/morphTargetManager";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from "@babylonjs/core/Materials/Textures/renderTargetTexture";
import { CameraInputsManager as BabylonjsCoreCameraInputsManager } from "@babylonjs/core/Cameras/cameraInputsManager";
import { TargetCamera as BabylonjsCoreTargetCamera } from "@babylonjs/core/Cameras/targetCamera";
import { FreeCamera as BabylonjsCoreFreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { FreeCameraInputsManager as BabylonjsCoreFreeCameraInputsManager } from "@babylonjs/core/Cameras/freeCameraInputsManager";
import { TouchCamera as BabylonjsCoreTouchCamera } from "@babylonjs/core/Cameras/touchCamera";
import { UniversalCamera as BabylonjsCoreUniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { GamepadCamera as BabylonjsCoreGamepadCamera } from "@babylonjs/core/Cameras/gamepadCamera";
import { AnaglyphGamepadCamera as BabylonjsCoreAnaglyphGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera";
import { StereoscopicGamepadCamera as BabylonjsCoreStereoscopicGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera";
import { AnaglyphUniversalCamera as BabylonjsCoreAnaglyphUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera";
import { StereoscopicUniversalCamera as BabylonjsCoreStereoscopicUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera";
import { DeviceOrientationCamera as BabylonjsCoreDeviceOrientationCamera } from "@babylonjs/core/Cameras/deviceOrientationCamera";
import { VRDeviceOrientationFreeCamera as BabylonjsCoreVRDeviceOrientationFreeCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera";
import { VRCameraMetrics as BabylonjsCoreVRCameraMetrics } from "@babylonjs/core/Cameras/VR/vrCameraMetrics";
import { VRDeviceOrientationGamepadCamera as BabylonjsCoreVRDeviceOrientationGamepadCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera";
import { AnaglyphFreeCamera as BabylonjsCoreAnaglyphFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera";
import { StereoscopicFreeCamera as BabylonjsCoreStereoscopicFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera";
import { VirtualJoysticksCamera as BabylonjsCoreVirtualJoysticksCamera } from "@babylonjs/core/Cameras/virtualJoysticksCamera";
import { WebVRFreeCamera as BabylonjsCoreWebVRFreeCamera, DevicePose as BabylonjsCoreDevicePose, WebVROptions as BabylonjsCoreWebVROptions } from "@babylonjs/core/Cameras/VR/webVRCamera";
import { WebVRController as BabylonjsCoreWebVRController } from "@babylonjs/core/Gamepads/Controllers/webVRController";
import { WebXRCamera as BabylonjsCoreWebXRCamera } from "@babylonjs/core/Cameras/XR/webXRCamera";
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraInputsManager as BabylonjsCoreArcRotateCameraInputsManager } from "@babylonjs/core/Cameras/arcRotateCameraInputsManager";
import { AnaglyphArcRotateCamera as BabylonjsCoreAnaglyphArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera";
import { StereoscopicArcRotateCamera as BabylonjsCoreStereoscopicArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera";
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera";
import { FlyCamera as BabylonjsCoreFlyCamera } from "@babylonjs/core/Cameras/flyCamera";
import { FlyCameraInputsManager as BabylonjsCoreFlyCameraInputsManager } from "@babylonjs/core/Cameras/flyCameraInputsManager";
import { FollowCamera as BabylonjsCoreFollowCamera, ArcFollowCamera as BabylonjsCoreArcFollowCamera } from "@babylonjs/core/Cameras/followCamera";
import { FollowCameraInputsManager as BabylonjsCoreFollowCameraInputsManager } from "@babylonjs/core/Cameras/followCameraInputsManager";
import { SmartArray as BabylonjsCoreSmartArray, ISmartArrayLike as BabylonjsCoreISmartArrayLike } from "@babylonjs/core/Misc/smartArray";
import { Effect as BabylonjsCoreEffect } from "@babylonjs/core/Materials/effect";
import { ShaderMaterial as BabylonjsCoreShaderMaterial, IShaderMaterialOptions as BabylonjsCoreIShaderMaterialOptions } from "@babylonjs/core/Materials/shaderMaterial";
import { Texture as BabylonjsCoreTexture } from "@babylonjs/core/Materials/Textures/texture";
import { MultiMaterial as BabylonjsCoreMultiMaterial } from "@babylonjs/core/Materials/multiMaterial";
import { PushMaterial as BabylonjsCorePushMaterial } from "@babylonjs/core/Materials/pushMaterial";
import { StandardMaterial as BabylonjsCoreStandardMaterial, StandardMaterialDefines as BabylonjsCoreStandardMaterialDefines } from "@babylonjs/core/Materials/standardMaterial";
import { ColorCurves as BabylonjsCoreColorCurves } from "@babylonjs/core/Materials/colorCurves";
import { FresnelParameters as BabylonjsCoreFresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";
import { ImageProcessingConfiguration as BabylonjsCoreImageProcessingConfiguration } from "@babylonjs/core/Materials/imageProcessingConfiguration";
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from "@babylonjs/core/Materials/Background/backgroundMaterial";
import { IShadowLight as BabylonjsCoreIShadowLight, ShadowLight as BabylonjsCoreShadowLight } from "@babylonjs/core/Lights/shadowLight";
import { PBRBaseMaterial as BabylonjsCorePBRBaseMaterial, PBRMaterialDefines as BabylonjsCorePBRMaterialDefines } from "@babylonjs/core/Materials/PBR/pbrBaseMaterial";
import { PBRBaseSimpleMaterial as BabylonjsCorePBRBaseSimpleMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial";
import { PBRMetallicRoughnessMaterial as BabylonjsCorePBRMetallicRoughnessMaterial } from "@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial";
import { PBRSpecularGlossinessMaterial as BabylonjsCorePBRSpecularGlossinessMaterial } from "@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial";
import { PBRMaterial as BabylonjsCorePBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { DirectionalLight as BabylonjsCoreDirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { PointLight as BabylonjsCorePointLight } from "@babylonjs/core/Lights/pointLight";
import { SpotLight as BabylonjsCoreSpotLight } from "@babylonjs/core/Lights/spotLight";
import { HemisphericLight as BabylonjsCoreHemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { SphericalPolynomial as BabylonjsCoreSphericalPolynomial } from "@babylonjs/core/Maths/sphericalPolynomial";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { InternalTexture as BabylonjsCoreInternalTexture } from "@babylonjs/core/Materials/Textures/internalTexture";
import { Engine as BabylonjsCoreEngine } from "@babylonjs/core/Engines/engine";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget, IMultiRenderTargetOptions as BabylonjsCoreIMultiRenderTargetOptions } from "@babylonjs/core/Materials/Textures/multiRenderTarget";
import { RefractionTexture as BabylonjsCoreRefractionTexture } from "@babylonjs/core/Materials/Textures/refractionTexture";
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from "@babylonjs/core/Materials/Textures/MultiviewRenderTarget";
import { VideoTexture as BabylonjsCoreVideoTexture, VideoTextureSettings as BabylonjsCoreVideoTextureSettings } from "@babylonjs/core/Materials/Textures/videoTexture";
import { DynamicTexture as BabylonjsCoreDynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { RawTexture3D as BabylonjsCoreRawTexture3D } from "@babylonjs/core/Materials/Textures/rawTexture3D";
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from "@babylonjs/core/Materials/Textures/colorGradingTexture";
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture";
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture";
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture, IHtmlElementTextureOptions as BabylonjsCoreIHtmlElementTextureOptions } from "@babylonjs/core/Materials/Textures/htmlElementTexture";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { Collider as BabylonjsCoreCollider } from "@babylonjs/core/Collisions/collider";
import { Ray as BabylonjsCoreRay } from "@babylonjs/core/Culling/ray";
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from "@babylonjs/core/Offline/IOfflineProvider";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo, KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerEventTypes as BabylonjsCorePointerEventTypes, PointerInfo as BabylonjsCorePointerInfo, PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { PostProcess as BabylonjsCorePostProcess } from "@babylonjs/core/PostProcesses/postProcess";
import { PostProcessManager as BabylonjsCorePostProcessManager } from "@babylonjs/core/PostProcesses/postProcessManager";

export class FiberNodeProps {
    addToSceneRootNodes?: any;
    animationPropertiesOverride?: BabylonjsCoreAnimationPropertiesOverride;
    animations?: BabylonjsCoreAnimation[];
    doNotSerialize?: boolean;
    id?: string;
    inspectableCustomProperties?: BabylonjsCoreIInspectable[];
    metadata?: any;
    name?: string;
    onDispose?: () => void;
    onDisposeObservable?: BabylonjsCoreObservable<BabylonjsCoreNode>;
    onReady?: (node: BabylonjsCoreNode) => void;
    parent?: BabylonjsCoreNode;
    removeFromSceneRootNodes?: any;
    reservedDataStore?: any;
    state?: string;
    uniqueId?: number;
    setEnabled?: any;
}

export class FiberTransformNodeProps extends FiberNodeProps {
    billboardMode?: number;
    ignoreNonUniformScaling?: boolean;
    infiniteDistance?: boolean;
    onAfterWorldMatrixUpdateObservable?: BabylonjsCoreObservable<BabylonjsCoreTransformNode>;
    position?: BabylonjsCoreVector3;
    preserveParentRotationForBillboard?: boolean;
    reIntegrateRotationIntoRotationQuaternion?: boolean;
    rotation?: BabylonjsCoreVector3;
    rotationQuaternion?: BabylonjsCoreQuaternion;
    scaling?: BabylonjsCoreVector3;
    scalingDeterminant?: number;
    setAbsolutePosition?: any;
    setDirection?: any;
    setParent?: any;
    setPivotMatrix?: any;
    setPivotPoint?: any;
    setPositionWithLocalVector?: any;
    setPreTransformMatrix?: any;
}

export class FiberAbstractMeshProps extends FiberTransformNodeProps {
    actionManager?: BabylonjsCoreAbstractActionManager;
    alphaIndex?: number;
    alwaysSelectAsActiveMesh?: boolean;
    applyFog?: boolean;
    checkCollisions?: boolean;
    collisionGroup?: number;
    collisionMask?: number;
    computeBonesUsingShaders?: boolean;
    cullingStrategy?: number;
    definedFacingForward?: boolean;
    doNotSyncBoundingInfo?: boolean;
    edgesColor?: BabylonjsCoreColor4;
    edgesWidth?: number;
    ellipsoid?: BabylonjsCoreVector3;
    ellipsoidOffset?: BabylonjsCoreVector3;
    enablePointerMoveEvents?: boolean;
    facetDepthSortFrom?: BabylonjsCoreVector3;
    hasVertexAlpha?: boolean;
    isBlocker?: boolean;
    isPickable?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: BabylonjsCoreMaterial;
    mustDepthSortFacets?: boolean;
    numBoneInfluencers?: number;
    onCollide?: () => void;
    onCollideObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onCollisionPositionChange?: () => void;
    onCollisionPositionChangeObservable?: BabylonjsCoreObservable<BabylonjsCoreVector3>;
    onMaterialChangedObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onRebuildObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    outlineColor?: BabylonjsCoreColor3;
    outlineWidth?: number;
    overlayAlpha?: number;
    overlayColor?: BabylonjsCoreColor3;
    partitioningBBoxRatio?: number;
    partitioningSubdivisions?: number;
    receiveShadows?: boolean;
    renderingGroupId?: number;
    scaling?: BabylonjsCoreVector3;
    showSubMeshesBoundingBox?: boolean;
    skeleton?: BabylonjsCoreSkeleton;
    subMeshes?: BabylonjsCoreSubMesh[];
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
    setBoundingInfo?: any;
    setIndices?: any;
    setVerticesData?: any;
}

export class FiberMeshProps extends FiberAbstractMeshProps {
    delayLoadingFile?: string;
    delayLoadState?: number;
    instances?: BabylonjsCoreInstancedMesh[];
    isUnIndexed?: boolean;
    morphTargetManager?: BabylonjsCoreMorphTargetManager;
    normalizeSkinFourWeights?: any;
    normalizeSkinWeightsAndExtra?: any;
    onBeforeDraw?: () => void;
    onLODLevelSelection?: (distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void;
    overrideMaterialSideOrientation?: number;
    overridenInstanceCount?: number;
    setIndices?: any;
    setMaterialByID?: any;
    setVerticesBuffer?: any;
    setVerticesData?: any;
}

export class FiberCameraProps extends FiberNodeProps {
    cameraRigMode?: number;
    customRenderTargets?: BabylonjsCoreRenderTargetTexture[];
    fov?: number;
    fovMode?: number;
    inertia?: number;
    inputs?: BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>;
    interaxialDistance?: number;
    isIntermediate?: boolean;
    isStereoscopicSideBySide?: boolean;
    layerMask?: number;
    maxZ?: number;
    minZ?: number;
    mode?: number;
    onAfterCheckInputsObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onProjectionMatrixChangedObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onRestoreStateObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onViewMatrixChangedObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    orthoBottom?: number;
    orthoLeft?: number;
    orthoRight?: number;
    orthoTop?: number;
    outputRenderTarget?: BabylonjsCoreRenderTargetTexture;
    position?: BabylonjsCoreVector3;
    upVector?: BabylonjsCoreVector3;
    viewport?: BabylonjsCoreViewport;
    setCameraRigMode?: any;
    setCameraRigParameter?: any;
}

export class FiberTargetCameraProps extends FiberCameraProps {
    cameraDirection?: BabylonjsCoreVector3;
    cameraRotation?: BabylonjsCoreVector2;
    lockedTarget?: any;
    noRotationConstraint?: boolean;
    rotation?: BabylonjsCoreVector3;
    rotationQuaternion?: BabylonjsCoreQuaternion;
    speed?: number;
    updateUpVectorFromRotation?: boolean;
    setTarget?: any;
}

export class FiberFreeCameraProps extends FiberTargetCameraProps {
    angularSensibility?: number;
    applyGravity?: boolean;
    checkCollisions?: boolean;
    collisionMask?: number;
    ellipsoid?: BabylonjsCoreVector3;
    ellipsoidOffset?: BabylonjsCoreVector3;
    inputs?: BabylonjsCoreFreeCameraInputsManager;
    keysDown?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
    onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void;
}

export class FiberTouchCameraProps extends FiberFreeCameraProps {
    touchAngularSensibility?: number;
    touchMoveSensibility?: number;
}

export class FiberUniversalCameraProps extends FiberTouchCameraProps {
    gamepadAngularSensibility?: number;
    gamepadMoveSensibility?: number;
}

export class FiberGamepadCameraProps extends FiberUniversalCameraProps {
}

export class FiberAnaglyphGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberStereoscopicGamepadCameraProps extends FiberGamepadCameraProps {
}

export class FiberAnaglyphUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberStereoscopicUniversalCameraProps extends FiberUniversalCameraProps {
}

export class FiberDeviceOrientationCameraProps extends FiberFreeCameraProps {
}

export class FiberVRDeviceOrientationFreeCameraProps extends FiberDeviceOrientationCameraProps {
}

export class FiberVRDeviceOrientationGamepadCameraProps extends FiberVRDeviceOrientationFreeCameraProps {
}

export class FiberAnaglyphFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberStereoscopicFreeCameraProps extends FiberFreeCameraProps {
}

export class FiberVirtualJoysticksCameraProps extends FiberFreeCameraProps {
}

export class FiberWebVRFreeCameraProps extends FiberFreeCameraProps {
    controllers?: BabylonjsCoreWebVRController[];
    devicePosition?: BabylonjsCoreVector3;
    deviceRotationQuaternion?: BabylonjsCoreQuaternion;
    deviceScaleFactor?: number;
    onControllerMeshLoadedObservable?: BabylonjsCoreObservable<BabylonjsCoreWebVRController>;
    onControllersAttachedObservable?: BabylonjsCoreObservable<BabylonjsCoreWebVRController[]>;
    onPoseUpdatedFromDeviceObservable?: BabylonjsCoreObservable<any>;
    rawPose?: BabylonjsCoreDevicePose;
    rigParenting?: boolean;
    updateCacheCalled?: any;
    webVROptions?: any;
}

export class FiberWebXRCameraProps extends FiberFreeCameraProps {
}

export class FiberArcRotateCameraProps extends FiberTargetCameraProps {
    allowUpsideDown?: boolean;
    alpha?: number;
    angularSensibilityX?: number;
    angularSensibilityY?: number;
    beta?: number;
    checkCollisions?: boolean;
    collisionRadius?: BabylonjsCoreVector3;
    inertialAlphaOffset?: number;
    inertialBetaOffset?: number;
    inertialPanningX?: number;
    inertialPanningY?: number;
    inertialRadiusOffset?: number;
    inputs?: BabylonjsCoreArcRotateCameraInputsManager;
    keysDown?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
    lowerAlphaLimit?: number;
    lowerBetaLimit?: number;
    lowerRadiusLimit?: number;
    onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void;
    onMeshTargetChangedObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    panningAxis?: BabylonjsCoreVector3;
    panningDistanceLimit?: number;
    panningInertia?: number;
    panningOriginTarget?: BabylonjsCoreVector3;
    panningSensibility?: number;
    pinchDeltaPercentage?: number;
    pinchPrecision?: number;
    pinchToPanMaxDistance?: number;
    position?: BabylonjsCoreVector3;
    radius?: number;
    target?: BabylonjsCoreVector3;
    targetScreenOffset?: BabylonjsCoreVector2;
    upperAlphaLimit?: number;
    upperBetaLimit?: number;
    upperRadiusLimit?: number;
    upVector?: BabylonjsCoreVector3;
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

export class FiberAnaglyphArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberStereoscopicArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberVRDeviceOrientationArcRotateCameraProps extends FiberArcRotateCameraProps {
}

export class FiberFlyCameraProps extends FiberTargetCameraProps {
    angularSensibility?: number;
    applyGravity?: boolean;
    bankedTurn?: boolean;
    bankedTurnLimit?: number;
    bankedTurnMultiplier?: number;
    cameraDirection?: BabylonjsCoreVector3;
    checkCollisions?: boolean;
    collisionMask?: number;
    ellipsoid?: BabylonjsCoreVector3;
    ellipsoidOffset?: BabylonjsCoreVector3;
    inputs?: BabylonjsCoreFlyCameraInputsManager;
    keysBackward?: number[];
    keysDown?: number[];
    keysForward?: number[];
    keysLeft?: number[];
    keysRight?: number[];
    keysUp?: number[];
    onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void;
    rollCorrect?: number;
    rotationQuaternion?: BabylonjsCoreQuaternion;
}

export class FiberFollowCameraProps extends FiberTargetCameraProps {
    cameraAcceleration?: number;
    heightOffset?: number;
    inputs?: BabylonjsCoreFollowCameraInputsManager;
    lockedTarget?: BabylonjsCoreAbstractMesh;
    lowerHeightOffsetLimit?: number;
    lowerRadiusLimit?: number;
    lowerRotationOffsetLimit?: number;
    maxCameraSpeed?: number;
    radius?: number;
    rotationOffset?: number;
    upperHeightOffsetLimit?: number;
    upperRadiusLimit?: number;
    upperRotationOffsetLimit?: number;
}

export class FiberArcFollowCameraProps extends FiberTargetCameraProps {
    alpha?: number;
    beta?: number;
    radius?: number;
    target?: BabylonjsCoreAbstractMesh;
}

export class FiberMaterialProps {
    alpha?: number;
    alphaMode?: number;
    animations?: BabylonjsCoreAnimation[];
    backFaceCulling?: boolean;
    checkReadyOnEveryCall?: boolean;
    checkReadyOnlyOnce?: boolean;
    disableDepthWrite?: boolean;
    doNotSerialize?: boolean;
    fillMode?: number;
    fogEnabled?: boolean;
    forceDepthWrite?: boolean;
    getRenderTargetTextures?: () => BabylonjsCoreSmartArray<BabylonjsCoreRenderTargetTexture>;
    id?: string;
    inspectableCustomProperties?: BabylonjsCoreIInspectable[];
    meshMap?: { [id: string]: BabylonjsCoreAbstractMesh; };
    metadata?: any;
    name?: string;
    needDepthPrePass?: boolean;
    onBind?: (Mesh: BabylonjsCoreAbstractMesh) => void;
    onCompiled?: (effect: BabylonjsCoreEffect) => void;
    onDispose?: () => void;
    onDisposeObservable?: BabylonjsCoreObservable<BabylonjsCoreMaterial>;
    onError?: (effect: BabylonjsCoreEffect, errors: string) => void;
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

export class FiberMultiMaterialProps extends FiberMaterialProps {
    subMaterials?: BabylonjsCoreMaterial[];
}

export class FiberPushMaterialProps extends FiberMaterialProps {
    allowShaderHotSwapping?: boolean;
}

export class FiberStandardMaterialProps extends FiberPushMaterialProps {
    alphaCutOff?: number;
    ambientColor?: BabylonjsCoreColor3;
    ambientTexture?: BabylonjsCoreBaseTexture;
    bumpTexture?: BabylonjsCoreBaseTexture;
    cameraColorCurves?: BabylonjsCoreColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BabylonjsCoreBaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    customShaderNameResolve?: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCoreStandardMaterialDefines) => string;
    diffuseColor?: BabylonjsCoreColor3;
    diffuseFresnelParameters?: BabylonjsCoreFresnelParameters;
    diffuseTexture?: BabylonjsCoreBaseTexture;
    disableLighting?: boolean;
    emissiveColor?: BabylonjsCoreColor3;
    emissiveFresnelParameters?: BabylonjsCoreFresnelParameters;
    emissiveTexture?: BabylonjsCoreBaseTexture;
    imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration;
    indexOfRefraction?: number;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    invertRefractionY?: boolean;
    lightmapTexture?: BabylonjsCoreBaseTexture;
    linkEmissiveWithDiffuse?: boolean;
    maxSimultaneousLights?: number;
    opacityFresnelParameters?: BabylonjsCoreFresnelParameters;
    opacityTexture?: BabylonjsCoreBaseTexture;
    parallaxScaleBias?: number;
    reflectionFresnelParameters?: BabylonjsCoreFresnelParameters;
    reflectionTexture?: BabylonjsCoreBaseTexture;
    refractionFresnelParameters?: BabylonjsCoreFresnelParameters;
    refractionTexture?: BabylonjsCoreBaseTexture;
    roughness?: number;
    specularColor?: BabylonjsCoreColor3;
    specularPower?: number;
    specularTexture?: BabylonjsCoreBaseTexture;
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

export class FiberBackgroundMaterialProps extends FiberPushMaterialProps {
    cameraColorCurves?: BabylonjsCoreColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BabylonjsCoreBaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    diffuseTexture?: BabylonjsCoreBaseTexture;
    enableNoise?: boolean;
    fovMultiplier?: number;
    imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration;
    maxSimultaneousLights?: number;
    opacityFresnel?: boolean;
    primaryColor?: BabylonjsCoreColor3;
    primaryColorHighlightLevel?: number;
    primaryColorShadowLevel?: number;
    reflectionAmount?: number;
    reflectionBlur?: number;
    reflectionFalloffDistance?: number;
    reflectionFresnel?: boolean;
    reflectionReflectance0?: number;
    reflectionReflectance90?: number;
    reflectionStandardFresnelWeight?: number;
    reflectionTexture?: BabylonjsCoreBaseTexture;
    sceneCenter?: BabylonjsCoreVector3;
    shadowLevel?: number;
    shadowLights?: BabylonjsCoreIShadowLight[];
    switchToBGR?: boolean;
    useEquirectangularFOV?: boolean;
    useRGBColor?: boolean;
}

export class FiberPBRBaseMaterialProps extends FiberPushMaterialProps {
    customShaderNameResolve?: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCorePBRMaterialDefines) => string;
    debugFactor?: any;
    debugLimit?: any;
    debugMode?: number;
    transparencyMode?: number;
    useLogarithmicDepth?: boolean;
}

export class FiberPBRBaseSimpleMaterialProps extends FiberPBRBaseMaterialProps {
    alphaCutOff?: number;
    disableLighting?: boolean;
    doubleSided?: boolean;
    emissiveColor?: BabylonjsCoreColor3;
    emissiveTexture?: BabylonjsCoreBaseTexture;
    environmentTexture?: BabylonjsCoreBaseTexture;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    lightmapTexture?: BabylonjsCoreBaseTexture;
    maxSimultaneousLights?: number;
    normalTexture?: BabylonjsCoreBaseTexture;
    occlusionStrength?: number;
    occlusionTexture?: BabylonjsCoreBaseTexture;
    useLightmapAsShadowmap?: boolean;
}

export class FiberPBRMetallicRoughnessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
    baseColor?: BabylonjsCoreColor3;
    baseTexture?: BabylonjsCoreBaseTexture;
    metallic?: number;
    metallicRoughnessTexture?: BabylonjsCoreBaseTexture;
    roughness?: number;
}

export class FiberPBRSpecularGlossinessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
    diffuseColor?: BabylonjsCoreColor3;
    diffuseTexture?: BabylonjsCoreBaseTexture;
    glossiness?: number;
    specularColor?: BabylonjsCoreColor3;
    specularGlossinessTexture?: BabylonjsCoreBaseTexture;
}

export class FiberPBRMaterialProps extends FiberPBRBaseMaterialProps {
    albedoColor?: BabylonjsCoreColor3;
    albedoTexture?: BabylonjsCoreBaseTexture;
    alphaCutOff?: number;
    ambientColor?: BabylonjsCoreColor3;
    ambientTexture?: BabylonjsCoreBaseTexture;
    ambientTextureImpactOnAnalyticalLights?: number;
    ambientTextureStrength?: number;
    bumpTexture?: BabylonjsCoreBaseTexture;
    cameraColorCurves?: BabylonjsCoreColorCurves;
    cameraColorCurvesEnabled?: boolean;
    cameraColorGradingEnabled?: boolean;
    cameraColorGradingTexture?: BabylonjsCoreBaseTexture;
    cameraContrast?: number;
    cameraExposure?: number;
    cameraToneMappingEnabled?: boolean;
    directIntensity?: number;
    disableBumpMap?: boolean;
    disableLighting?: boolean;
    emissiveColor?: BabylonjsCoreColor3;
    emissiveIntensity?: number;
    emissiveTexture?: BabylonjsCoreBaseTexture;
    enableSpecularAntiAliasing?: boolean;
    environmentBRDFTexture?: BabylonjsCoreBaseTexture;
    environmentIntensity?: number;
    forceAlphaTest?: boolean;
    forceIrradianceInFragment?: boolean;
    forceNormalForward?: boolean;
    imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration;
    indexOfRefraction?: number;
    invertNormalMapX?: boolean;
    invertNormalMapY?: boolean;
    invertRefractionY?: boolean;
    lightmapTexture?: BabylonjsCoreBaseTexture;
    linkRefractionWithTransparency?: boolean;
    maxSimultaneousLights?: number;
    metallic?: number;
    metallicTexture?: BabylonjsCoreBaseTexture;
    microSurface?: number;
    microSurfaceTexture?: BabylonjsCoreBaseTexture;
    opacityTexture?: BabylonjsCoreBaseTexture;
    parallaxScaleBias?: number;
    reflectionColor?: BabylonjsCoreColor3;
    reflectionTexture?: BabylonjsCoreBaseTexture;
    reflectivityColor?: BabylonjsCoreColor3;
    reflectivityTexture?: BabylonjsCoreBaseTexture;
    refractionTexture?: BabylonjsCoreBaseTexture;
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

export class FiberLightProps extends FiberNodeProps {
    diffuse?: BabylonjsCoreColor3;
    excludedMeshes?: BabylonjsCoreAbstractMesh[];
    excludeWithLayerMask?: number;
    falloffType?: number;
    includedOnlyMeshes?: BabylonjsCoreAbstractMesh[];
    includeOnlyWithLayerMask?: number;
    intensity?: number;
    intensityMode?: number;
    lightmapMode?: number;
    radius?: number;
    range?: number;
    renderPriority?: number;
    shadowEnabled?: boolean;
    specular?: BabylonjsCoreColor3;
    setEnabled?: any;
}

export class FiberShadowLightProps extends FiberLightProps {
    customProjectionMatrixBuilder?: (viewMatrix: BabylonjsCoreMatrix, renderList: BabylonjsCoreAbstractMesh[], result: BabylonjsCoreMatrix) => void;
    direction?: BabylonjsCoreVector3;
    position?: BabylonjsCoreVector3;
    shadowMaxZ?: number;
    shadowMinZ?: number;
    transformedDirection?: BabylonjsCoreVector3;
    transformedPosition?: BabylonjsCoreVector3;
    setDirectionToTarget?: any;
    setShadowProjectionMatrix?: any;
}

export class FiberDirectionalLightProps extends FiberShadowLightProps {
    autoUpdateExtends?: boolean;
    shadowFrustumSize?: number;
    shadowOrthoScale?: number;
}

export class FiberPointLightProps extends FiberShadowLightProps {
    direction?: BabylonjsCoreVector3;
    shadowAngle?: number;
}

export class FiberSpotLightProps extends FiberShadowLightProps {
    angle?: number;
    exponent?: number;
    innerAngle?: number;
    projectionTexture?: BabylonjsCoreBaseTexture;
    projectionTextureLightFar?: number;
    projectionTextureLightNear?: number;
    projectionTextureUpDirection?: BabylonjsCoreVector3;
    shadowAngleScale?: number;
}

export class FiberHemisphericLightProps extends FiberLightProps {
    direction?: BabylonjsCoreVector3;
    groundColor?: BabylonjsCoreColor3;
    setDirectionToTarget?: any;
}

export class FiberBaseTextureProps {
    animations?: BabylonjsCoreAnimation[];
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
    onDisposeObservable?: BabylonjsCoreObservable<BabylonjsCoreBaseTexture>;
    reservedDataStore?: any;
    sphericalPolynomial?: BabylonjsCoreSphericalPolynomial;
    uniqueId?: number;
    wrapR?: number;
    wrapU?: number;
    wrapV?: number;
}

export class FiberCubeTextureProps extends FiberBaseTextureProps {
    boundingBoxPosition?: BabylonjsCoreVector3;
    boundingBoxSize?: BabylonjsCoreVector3;
    rotationY?: number;
    url?: string;
    setReflectionTextureMatrix?: any;
}

export class FiberRawCubeTextureProps extends FiberCubeTextureProps {
}

export class FiberTextureProps extends FiberBaseTextureProps {
    inspectableCustomProperties?: BabylonjsCoreIInspectable[];
    isBlocking?: boolean;
    onLoadObservable?: BabylonjsCoreObservable<BabylonjsCoreTexture>;
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

export class FiberRawTextureProps extends FiberTextureProps {
    format?: number;
}

export class FiberProceduralTextureProps extends FiberTextureProps {
    autoClear?: boolean;
    isCube?: boolean;
    isEnabled?: boolean;
    onGenerated?: () => void;
    onGeneratedObservable?: BabylonjsCoreObservable<BabylonjsCoreProceduralTexture>;
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

export class FiberCustomProceduralTextureProps extends FiberProceduralTextureProps {
    animate?: boolean;
}

export class FiberNoiseProceduralTextureProps extends FiberProceduralTextureProps {
    animationSpeedFactor?: number;
    brightness?: number;
    octaves?: number;
    persistence?: number;
}

export class FiberRenderTargetTextureProps extends FiberTextureProps {
    activeCamera?: BabylonjsCoreCamera;
    boundingBoxPosition?: BabylonjsCoreVector3;
    boundingBoxSize?: BabylonjsCoreVector3;
    clearColor?: BabylonjsCoreColor4;
    coordinatesMode?: number;
    customRenderFunction?: (opaqueSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, alphaTestSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, transparentSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, depthOnlySubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, beforeTransparents?: () => void) => void;
    depthStencilTexture?: BabylonjsCoreInternalTexture;
    ignoreCameraViewport?: boolean;
    isCube?: boolean;
    onAfterRender?: (faceIndex: number) => void;
    onAfterRenderObservable?: BabylonjsCoreObservable<number>;
    onAfterUnbind?: () => void;
    onAfterUnbindObservable?: BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>;
    onBeforeBindObservable?: BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>;
    onBeforeRender?: (faceIndex: number) => void;
    onBeforeRenderObservable?: BabylonjsCoreObservable<number>;
    onClear?: (Engine: BabylonjsCoreEngine) => void;
    onClearObservable?: BabylonjsCoreObservable<BabylonjsCoreEngine>;
    refreshRate?: number;
    renderList?: BabylonjsCoreAbstractMesh[];
    renderListPredicate?: (AbstractMesh: BabylonjsCoreAbstractMesh) => boolean;
    renderParticles?: boolean;
    renderSprites?: boolean;
    renderToTarget?: any;
    samples?: number;
    useCameraPostProcesses?: boolean;
    setRenderingAutoClearDepthStencil?: any;
    setRenderingOrder?: any;
}

export class FiberMirrorTextureProps extends FiberRenderTargetTextureProps {
    adaptiveBlurKernel?: number;
    blurKernel?: number;
    blurKernelX?: number;
    blurKernelY?: number;
    blurRatio?: number;
    mirrorPlane?: BabylonjsCorePlane;
    scene?: any;
}

export class FiberMultiRenderTargetProps extends FiberRenderTargetTextureProps {
    samples?: number;
    wrapU?: number;
    wrapV?: number;
}

export class FiberRefractionTextureProps extends FiberRenderTargetTextureProps {
    depth?: number;
    refractionPlane?: BabylonjsCorePlane;
}

export class FiberMultiviewRenderTargetProps extends FiberRenderTargetTextureProps {
}

export class FiberVideoTextureProps extends FiberTextureProps {
    reset?: any;
}

export class FiberDynamicTextureProps extends FiberTextureProps {
}

export class FiberRawTexture3DProps extends FiberTextureProps {
    format?: number;
}

export class FiberColorGradingTextureProps extends FiberBaseTextureProps {
    load3dlTexture?: any;
    loadTexture?: any;
    url?: string;
}

export class FiberEquiRectangularCubeTextureProps extends FiberBaseTextureProps {
    coordinatesMode?: number;
    getFloat32ArrayFromArrayBuffer?: any;
    loadImage?: any;
    loadTexture?: any;
    url?: string;
}

export class FiberHDRCubeTextureProps extends FiberBaseTextureProps {
    boundingBoxPosition?: BabylonjsCoreVector3;
    boundingBoxSize?: BabylonjsCoreVector3;
    coordinatesMode?: number;
    isBlocking?: boolean;
    loadTexture?: any;
    rotationY?: number;
    url?: string;
    setReflectionTextureMatrix?: any;
}

export class FiberHtmlElementTextureProps extends FiberBaseTextureProps {
    element?: HTMLVideoElement | HTMLCanvasElement;
}

export class FiberShadowGeneratorProps {
    bias?: number;
    blurBoxOffset?: number;
    blurKernel?: number;
    blurScale?: number;
    contactHardeningLightSizeUVRatio?: number;
    customShaderOptions?: BabylonjsCoreICustomShaderOptions;
    depthScale?: number;
    filter?: number;
    filteringQuality?: number;
    forceBackFacesOnly?: boolean;
    frustumEdgeFalloff?: number;
    normalBias?: number;
    onBeforeShadowMapRenderMeshObservable?: BabylonjsCoreObservable<BabylonjsCoreMesh>;
    onBeforeShadowMapRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreEffect>;
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

export class FiberEnvironmentHelperProps {
    onErrorObservable?: BabylonjsCoreObservable<{ message?: string; exception?: any; }>;
    setMainColor?: any;
}

export class FiberVRExperienceHelperProps {
    beforeRender?: any;
    displayGaze?: boolean;
    displayLaserPointer?: boolean;
    displayVRButton?: any;
    gazeTrackerMesh?: BabylonjsCoreMesh;
    meshSelectionPredicate?: (mesh: BabylonjsCoreAbstractMesh) => boolean;
    moveButtonToBottomRight?: any;
    onAfterCameraTeleport?: BabylonjsCoreObservable<BabylonjsCoreVector3>;
    onAfterEnteringVRObservable?: BabylonjsCoreObservable<BabylonjsCoreOnAfterEnteringVRObservableEvent>;
    onBeforeCameraTeleport?: BabylonjsCoreObservable<BabylonjsCoreVector3>;
    onControllerMeshLoadedObservable?: BabylonjsCoreObservable<BabylonjsCoreWebVRController>;
    onEnteringVRObservable?: BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>;
    onExitingVRObservable?: BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>;
    onNewMeshPicked?: BabylonjsCoreObservable<BabylonjsCorePickingInfo>;
    onNewMeshSelected?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onSelectedMeshUnselected?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onVRDisplayChanged?: any;
    onVrDisplayPresentChange?: any;
    position?: BabylonjsCoreVector3;
    raySelectionPredicate?: (mesh: BabylonjsCoreAbstractMesh) => boolean;
    requestPointerLockOnFullScreen?: boolean;
    teleportationEnabled?: boolean;
    teleportationTarget?: BabylonjsCoreMesh;
    updateButtonVisibility?: any;
    updateGazeTrackerColor?: boolean;
    updateGazeTrackerScale?: boolean;
    webVROptions?: BabylonjsCoreVRExperienceHelperOptions;
}

export class FiberSceneProps {
    actionManager?: BabylonjsCoreAbstractActionManager;
    activeCamera?: BabylonjsCoreCamera;
    activeCameras?: BabylonjsCoreCamera[];
    afterCameraRender?: () => void;
    afterRender?: () => void;
    ambientColor?: BabylonjsCoreColor3;
    animationPropertiesOverride?: BabylonjsCoreAnimationPropertiesOverride;
    animationsEnabled?: boolean;
    animationTimeScale?: number;
    autoClear?: boolean;
    autoClearDepthAndStencil?: boolean;
    beforeCameraRender?: () => void;
    beforeRender?: () => void;
    blockfreeActiveMeshesAndRenderingGroups?: boolean;
    blockMaterialDirtyMechanism?: boolean;
    cameraToUseForPointers?: BabylonjsCoreCamera;
    clearColor?: BabylonjsCoreColor4;
    clipPlane?: BabylonjsCorePlane;
    clipPlane2?: BabylonjsCorePlane;
    clipPlane3?: BabylonjsCorePlane;
    clipPlane4?: BabylonjsCorePlane;
    collisionsEnabled?: boolean;
    constantlyUpdateMeshUnderPointer?: boolean;
    customLODSelector?: (mesh: BabylonjsCoreAbstractMesh, camera: BabylonjsCoreCamera) => BabylonjsCoreAbstractMesh;
    customRenderTargets?: BabylonjsCoreRenderTargetTexture[];
    defaultCursor?: string;
    defaultMaterial?: BabylonjsCoreMaterial;
    disableOfflineSupportExceptionRules?: RegExp[];
    dispatchAllSubMeshesOfActiveMeshes?: boolean;
    dumpNextRenderTargets?: boolean;
    environmentBRDFTexture?: BabylonjsCoreBaseTexture;
    environmentTexture?: BabylonjsCoreBaseTexture;
    fogColor?: BabylonjsCoreColor3;
    fogDensity?: number;
    fogEnabled?: boolean;
    fogEnd?: number;
    fogMode?: number;
    fogStart?: number;
    forcePointsCloud?: boolean;
    forceWireframe?: boolean;
    geometriesByUniqueId?: any;
    getActiveMeshCandidates?: () => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh>;
    getActiveSubMeshCandidates?: (mesh: BabylonjsCoreAbstractMesh) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>;
    getCollidingSubMeshCandidates?: (mesh: BabylonjsCoreAbstractMesh, collider: BabylonjsCoreCollider) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>;
    getDeterministicFrameTime?: () => number;
    getIntersectingSubMeshCandidates?: (mesh: BabylonjsCoreAbstractMesh, localRay: BabylonjsCoreRay) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>;
    gravity?: BabylonjsCoreVector3;
    hoverCursor?: string;
    importedMeshesFiles?: String[];
    lensFlaresEnabled?: boolean;
    lightsEnabled?: boolean;
    loadingPluginName?: string;
    metadata?: any;
    offlineProvider?: BabylonjsCoreIOfflineProvider;
    onActiveCameraChanged?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterActiveMeshesEvaluationObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterAnimationsObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterCameraRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onAfterDrawPhaseObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterParticlesRenderingObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterRenderingGroupObservable?: BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>;
    onAfterRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterRenderTargetsRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onAfterStepObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeActiveMeshesEvaluationObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeAnimationsObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeCameraRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onBeforeDrawPhaseObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeParticlesRenderingObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeRenderingGroupObservable?: BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>;
    onBeforeRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeRenderTargetsRenderObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onBeforeStepObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onCameraRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onDataLoadedObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onDispose?: () => void;
    onDisposeObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onGeometryRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreGeometry>;
    onKeyboardObservable?: BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>;
    onLightRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreLight>;
    onMaterialRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreMaterial>;
    onMeshImportedObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onMeshRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onNewCameraAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreCamera>;
    onNewGeometryAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreGeometry>;
    onNewLightAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreLight>;
    onNewMaterialAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreMaterial>;
    onNewMeshAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>;
    onNewSkeletonAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreSkeleton>;
    onNewTextureAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreBaseTexture>;
    onNewTransformNodeAddedObservable?: BabylonjsCoreObservable<BabylonjsCoreTransformNode>;
    onPointerDown?: (evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void;
    onPointerMove?: (evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void;
    onPointerObservable?: BabylonjsCoreObservable<BabylonjsCorePointerInfo>;
    onPointerPick?: (evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void;
    onPointerUp?: (evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void;
    onPreKeyboardObservable?: BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>;
    onPrePointerObservable?: BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>;
    onReadyObservable?: BabylonjsCoreObservable<BabylonjsCoreScene>;
    onSkeletonRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreSkeleton>;
    onTextureRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreBaseTexture>;
    onTransformNodeRemovedObservable?: BabylonjsCoreObservable<BabylonjsCoreTransformNode>;
    particlesEnabled?: boolean;
    pointerDownPredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean;
    pointerMovePredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean;
    pointerUpPredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean;
    pointerX?: number;
    pointerY?: number;
    postProcesses?: BabylonjsCorePostProcess[];
    postProcessesEnabled?: boolean;
    postProcessManager?: BabylonjsCorePostProcessManager;
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
    setActiveCameraByID?: any;
    setActiveCameraByName?: any;
    setPointerOverMesh?: any;
    setRenderingAutoClearDepthStencil?: any;
    setRenderingOrder?: any;
    setStepId?: any;
    setTransformMatrix?: any;
}
