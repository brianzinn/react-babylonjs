import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberPushMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberRawTexture3DProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberVRExperienceHelperProps, FiberSceneProps } from "./generatedProps";
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
import { Vector3 as BabylonjsCoreVector3, Quaternion as BabylonjsCoreQuaternion, Matrix as BabylonjsCoreMatrix, Space as BabylonjsCoreSpace, Color4 as BabylonjsCoreColor4, Color3 as BabylonjsCoreColor3, Viewport as BabylonjsCoreViewport, Vector2 as BabylonjsCoreVector2, Vector4 as BabylonjsCoreVector4, Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math";
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
import { LinesMesh as BabylonjsCoreLinesMesh } from "@babylonjs/core/Meshes/linesMesh";
import { GroundMesh as BabylonjsCoreGroundMesh } from "@babylonjs/core/Meshes/groundMesh";
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

export class FiberNodePropsHandler implements PropsHandler<BabylonjsCoreNode, FiberNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNode, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreNode.addToSceneRootNodes.
        // TODO: type: BabylonjsCoreAnimationPropertiesOverride property (not coded) xxx-ns-xxx.BabylonjsCoreNode.animationPropertiesOverride.
        // TODO: type: BabylonjsCoreAnimation[] property (not coded) xxx-ns-xxx.BabylonjsCoreNode.animations.
        // xxx-ns-xxx.BabylonjsCoreNode.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNode.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: BabylonjsCoreIInspectable[] property (not coded) xxx-ns-xxx.BabylonjsCoreNode.inspectableCustomProperties.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreNode.metadata.
        // xxx-ns-xxx.BabylonjsCoreNode.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNode.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNode.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreNode>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreNode>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNode.onReady of type '(node: BabylonjsCoreNode) => void/fn':
        if (oldProps.onReady === undefined && oldProps.onReady !== newProps.onReady) {
            updates.push({
                propertyName: 'onReady',
                value: newProps.onReady,
                type: '(node: BabylonjsCoreNode) => void'
            });
        }
        // TODO: type: BabylonjsCoreNode property (not coded) xxx-ns-xxx.BabylonjsCoreNode.parent.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreNode.removeFromSceneRootNodes.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreNode.reservedDataStore.
        // xxx-ns-xxx.BabylonjsCoreNode.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNode.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreNode.setEnabled of type '(value?: boolean)':
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

export class FiberTransformNodePropsHandler implements PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTransformNode, oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreTransformNode.billboardMode of type 'number':
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTransformNode.ignoreNonUniformScaling of type 'boolean':
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTransformNode.infiniteDistance of type 'boolean':
        if (oldProps.infiniteDistance !== newProps.infiniteDistance) {
            updates.push({
                propertyName: 'infiniteDistance',
                value: newProps.infiniteDistance,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTransformNode.onAfterWorldMatrixUpdateObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onAfterWorldMatrixUpdateObservable === undefined && oldProps.onAfterWorldMatrixUpdateObservable !== newProps.onAfterWorldMatrixUpdateObservable) {
            updates.push({
                propertyName: 'onAfterWorldMatrixUpdateObservable',
                value: newProps.onAfterWorldMatrixUpdateObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreTransformNode.position.
        // xxx-ns-xxx.BabylonjsCoreTransformNode.preserveParentRotationForBillboard of type 'boolean':
        if (oldProps.preserveParentRotationForBillboard !== newProps.preserveParentRotationForBillboard) {
            updates.push({
                propertyName: 'preserveParentRotationForBillboard',
                value: newProps.preserveParentRotationForBillboard,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTransformNode.reIntegrateRotationIntoRotationQuaternion of type 'boolean':
        if (oldProps.reIntegrateRotationIntoRotationQuaternion !== newProps.reIntegrateRotationIntoRotationQuaternion) {
            updates.push({
                propertyName: 'reIntegrateRotationIntoRotationQuaternion',
                value: newProps.reIntegrateRotationIntoRotationQuaternion,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreTransformNode.rotation.
        // TODO: type: BabylonjsCoreQuaternion property (not coded) xxx-ns-xxx.BabylonjsCoreTransformNode.rotationQuaternion.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreTransformNode.scaling.
        // xxx-ns-xxx.BabylonjsCoreTransformNode.scalingDeterminant of type 'number':
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setAbsolutePosition of type '(absolutePosition?: BabylonjsCoreVector3)':
        if (oldProps.setAbsolutePosition !== newProps.setAbsolutePosition) {
            updates.push({
                propertyName: 'setAbsolutePosition',
                value: newProps.setAbsolutePosition,
                type: '(absolutePosition?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setDirection of type '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number)':
        if (oldProps.setDirection !== newProps.setDirection) {
            updates.push({
                propertyName: 'setDirection',
                value: newProps.setDirection,
                type: '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setParent of type '(node?: BabylonjsCoreNode)':
        if (oldProps.setParent !== newProps.setParent) {
            updates.push({
                propertyName: 'setParent',
                value: newProps.setParent,
                type: '(node?: BabylonjsCoreNode)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setPivotMatrix of type '(matrix?: DeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean)':
        if (oldProps.setPivotMatrix !== newProps.setPivotMatrix) {
            updates.push({
                propertyName: 'setPivotMatrix',
                value: newProps.setPivotMatrix,
                type: '(matrix?: DeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setPivotPoint of type '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace)':
        if (oldProps.setPivotPoint !== newProps.setPivotPoint) {
            updates.push({
                propertyName: 'setPivotPoint',
                value: newProps.setPivotPoint,
                type: '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setPositionWithLocalVector of type '(vector3?: BabylonjsCoreVector3)':
        if (oldProps.setPositionWithLocalVector !== newProps.setPositionWithLocalVector) {
            updates.push({
                propertyName: 'setPositionWithLocalVector',
                value: newProps.setPositionWithLocalVector,
                type: '(vector3?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTransformNode.setPreTransformMatrix of type '(matrix?: BabylonjsCoreMatrix)':
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

export class FiberAbstractMeshPropsHandler implements PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAbstractMesh, oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreAbstractActionManager property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.actionManager.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.alphaIndex of type 'number':
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.alwaysSelectAsActiveMesh of type 'boolean':
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.applyFog of type 'boolean':
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.collisionGroup of type 'number':
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.computeBonesUsingShaders of type 'boolean':
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.cullingStrategy of type 'number':
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.definedFacingForward of type 'boolean':
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.doNotSyncBoundingInfo of type 'boolean':
        if (oldProps.doNotSyncBoundingInfo !== newProps.doNotSyncBoundingInfo) {
            updates.push({
                propertyName: 'doNotSyncBoundingInfo',
                value: newProps.doNotSyncBoundingInfo,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor4 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.edgesColor.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.edgesWidth of type 'number':
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.ellipsoid.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.ellipsoidOffset.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.enablePointerMoveEvents of type 'boolean':
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.facetDepthSortFrom.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.hasVertexAlpha of type 'boolean':
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.isBlocker of type 'boolean':
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.isPickable of type 'boolean':
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.isVisible of type 'boolean':
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreMaterial property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.material.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.mustDepthSortFacets of type 'boolean':
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.numBoneInfluencers of type 'number':
        if (oldProps.numBoneInfluencers !== newProps.numBoneInfluencers) {
            updates.push({
                propertyName: 'numBoneInfluencers',
                value: newProps.numBoneInfluencers,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onCollide of type '() => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onCollideObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onCollideObservable === undefined && oldProps.onCollideObservable !== newProps.onCollideObservable) {
            updates.push({
                propertyName: 'onCollideObservable',
                value: newProps.onCollideObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onCollisionPositionChange of type '() => void/fn':
        if (oldProps.onCollisionPositionChange === undefined && oldProps.onCollisionPositionChange !== newProps.onCollisionPositionChange) {
            updates.push({
                propertyName: 'onCollisionPositionChange',
                value: newProps.onCollisionPositionChange,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onCollisionPositionChangeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onCollisionPositionChangeObservable === undefined && oldProps.onCollisionPositionChangeObservable !== newProps.onCollisionPositionChangeObservable) {
            updates.push({
                propertyName: 'onCollisionPositionChangeObservable',
                value: newProps.onCollisionPositionChangeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onMaterialChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMaterialChangedObservable === undefined && oldProps.onMaterialChangedObservable !== newProps.onMaterialChangedObservable) {
            updates.push({
                propertyName: 'onMaterialChangedObservable',
                value: newProps.onMaterialChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.onRebuildObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onRebuildObservable === undefined && oldProps.onRebuildObservable !== newProps.onRebuildObservable) {
            updates.push({
                propertyName: 'onRebuildObservable',
                value: newProps.onRebuildObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.outlineColor.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.outlineWidth of type 'number':
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.overlayAlpha of type 'number':
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.overlayColor.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.partitioningBBoxRatio of type 'number':
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.partitioningSubdivisions of type 'number':
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.receiveShadows of type 'boolean':
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.renderingGroupId of type 'number':
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.scaling.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.showSubMeshesBoundingBox of type 'boolean':
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreSkeleton property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.skeleton.
        // TODO: type: BabylonjsCoreSubMesh[] property (not coded) xxx-ns-xxx.BabylonjsCoreAbstractMesh.subMeshes.
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.useOctreeForCollisions of type 'boolean':
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.useOctreeForPicking of type 'boolean':
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.useOctreeForRenderingSelection of type 'boolean':
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.useVertexColors of type 'boolean':
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreAbstractMesh.visibility of type 'number':
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({
                propertyName: 'visibility',
                value: newProps.visibility,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreAbstractMesh.setBoundingInfo of type '(boundingInfo?: BabylonjsCoreBoundingInfo)':
        if (oldProps.setBoundingInfo !== newProps.setBoundingInfo) {
            updates.push({
                propertyName: 'setBoundingInfo',
                value: newProps.setBoundingInfo,
                type: '(boundingInfo?: BabylonjsCoreBoundingInfo)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreAbstractMesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreAbstractMesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)':
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
        // xxx-ns-xxx.BabylonjsCoreMesh.delayLoadingFile of type 'string':
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({
                propertyName: 'delayLoadingFile',
                value: newProps.delayLoadingFile,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMesh.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreInstancedMesh[] property (not coded) xxx-ns-xxx.BabylonjsCoreMesh.instances.
        // xxx-ns-xxx.BabylonjsCoreMesh.isUnIndexed of type 'boolean':
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreMorphTargetManager property (not coded) xxx-ns-xxx.BabylonjsCoreMesh.morphTargetManager.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMesh.normalizeSkinFourWeights.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMesh.normalizeSkinWeightsAndExtra.
        // xxx-ns-xxx.BabylonjsCoreMesh.onBeforeDraw of type '() => void/fn':
        if (oldProps.onBeforeDraw === undefined && oldProps.onBeforeDraw !== newProps.onBeforeDraw) {
            updates.push({
                propertyName: 'onBeforeDraw',
                value: newProps.onBeforeDraw,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMesh.onLODLevelSelection of type '(distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void/fn':
        if (oldProps.onLODLevelSelection === undefined && oldProps.onLODLevelSelection !== newProps.onLODLevelSelection) {
            updates.push({
                propertyName: 'onLODLevelSelection',
                value: newProps.onLODLevelSelection,
                type: '(distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMesh.overrideMaterialSideOrientation of type 'number':
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({
                propertyName: 'overrideMaterialSideOrientation',
                value: newProps.overrideMaterialSideOrientation,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMesh.overridenInstanceCount of type 'number':
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({
                propertyName: 'overridenInstanceCount',
                value: newProps.overridenInstanceCount,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreMesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean)':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreMesh.setMaterialByID of type '(id?: string)':
        if (oldProps.setMaterialByID !== newProps.setMaterialByID) {
            updates.push({
                propertyName: 'setMaterialByID',
                value: newProps.setMaterialByID,
                type: '(id?: string)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreMesh.setVerticesBuffer of type '(buffer?: BabylonjsCoreVertexBuffer)':
        if (oldProps.setVerticesBuffer !== newProps.setVerticesBuffer) {
            updates.push({
                propertyName: 'setVerticesBuffer',
                value: newProps.setVerticesBuffer,
                type: '(buffer?: BabylonjsCoreVertexBuffer)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreMesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number)':
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

export class FiberCameraPropsHandler implements PropsHandler<BabylonjsCoreCamera, FiberCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCamera, oldProps: FiberCameraProps, newProps: FiberCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreCamera.cameraRigMode of type 'number':
        if (oldProps.cameraRigMode !== newProps.cameraRigMode) {
            updates.push({
                propertyName: 'cameraRigMode',
                value: newProps.cameraRigMode,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreRenderTargetTexture[] property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.customRenderTargets.
        // xxx-ns-xxx.BabylonjsCoreCamera.fov of type 'number':
        if (oldProps.fov !== newProps.fov) {
            updates.push({
                propertyName: 'fov',
                value: newProps.fov,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.fovMode of type 'number':
        if (oldProps.fovMode !== newProps.fovMode) {
            updates.push({
                propertyName: 'fovMode',
                value: newProps.fovMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.inertia of type 'number':
        if (oldProps.inertia !== newProps.inertia) {
            updates.push({
                propertyName: 'inertia',
                value: newProps.inertia,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera> property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.inputs.
        // xxx-ns-xxx.BabylonjsCoreCamera.interaxialDistance of type 'number':
        if (oldProps.interaxialDistance !== newProps.interaxialDistance) {
            updates.push({
                propertyName: 'interaxialDistance',
                value: newProps.interaxialDistance,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.isIntermediate of type 'boolean':
        if (oldProps.isIntermediate !== newProps.isIntermediate) {
            updates.push({
                propertyName: 'isIntermediate',
                value: newProps.isIntermediate,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.isStereoscopicSideBySide of type 'boolean':
        if (oldProps.isStereoscopicSideBySide !== newProps.isStereoscopicSideBySide) {
            updates.push({
                propertyName: 'isStereoscopicSideBySide',
                value: newProps.isStereoscopicSideBySide,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.layerMask of type 'number':
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.maxZ of type 'number':
        if (oldProps.maxZ !== newProps.maxZ) {
            updates.push({
                propertyName: 'maxZ',
                value: newProps.maxZ,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.minZ of type 'number':
        if (oldProps.minZ !== newProps.minZ) {
            updates.push({
                propertyName: 'minZ',
                value: newProps.minZ,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.mode of type 'number':
        if (oldProps.mode !== newProps.mode) {
            updates.push({
                propertyName: 'mode',
                value: newProps.mode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.onAfterCheckInputsObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onAfterCheckInputsObservable === undefined && oldProps.onAfterCheckInputsObservable !== newProps.onAfterCheckInputsObservable) {
            updates.push({
                propertyName: 'onAfterCheckInputsObservable',
                value: newProps.onAfterCheckInputsObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.onProjectionMatrixChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onProjectionMatrixChangedObservable === undefined && oldProps.onProjectionMatrixChangedObservable !== newProps.onProjectionMatrixChangedObservable) {
            updates.push({
                propertyName: 'onProjectionMatrixChangedObservable',
                value: newProps.onProjectionMatrixChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.onRestoreStateObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onRestoreStateObservable === undefined && oldProps.onRestoreStateObservable !== newProps.onRestoreStateObservable) {
            updates.push({
                propertyName: 'onRestoreStateObservable',
                value: newProps.onRestoreStateObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.onViewMatrixChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onViewMatrixChangedObservable === undefined && oldProps.onViewMatrixChangedObservable !== newProps.onViewMatrixChangedObservable) {
            updates.push({
                propertyName: 'onViewMatrixChangedObservable',
                value: newProps.onViewMatrixChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.orthoBottom of type 'number':
        if (oldProps.orthoBottom !== newProps.orthoBottom) {
            updates.push({
                propertyName: 'orthoBottom',
                value: newProps.orthoBottom,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.orthoLeft of type 'number':
        if (oldProps.orthoLeft !== newProps.orthoLeft) {
            updates.push({
                propertyName: 'orthoLeft',
                value: newProps.orthoLeft,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.orthoRight of type 'number':
        if (oldProps.orthoRight !== newProps.orthoRight) {
            updates.push({
                propertyName: 'orthoRight',
                value: newProps.orthoRight,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCamera.orthoTop of type 'number':
        if (oldProps.orthoTop !== newProps.orthoTop) {
            updates.push({
                propertyName: 'orthoTop',
                value: newProps.orthoTop,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreRenderTargetTexture property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.outputRenderTarget.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.position.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.upVector.
        // TODO: type: BabylonjsCoreViewport property (not coded) xxx-ns-xxx.BabylonjsCoreCamera.viewport.
        // xxxx-ns-xxxx.BabylonjsCoreCamera.setCameraRigMode of type '(mode?: number, rigParams?: any)':
        if (oldProps.setCameraRigMode !== newProps.setCameraRigMode) {
            updates.push({
                propertyName: 'setCameraRigMode',
                value: newProps.setCameraRigMode,
                type: '(mode?: number, rigParams?: any)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreCamera.setCameraRigParameter of type '(name?: string, value?: any)':
        if (oldProps.setCameraRigParameter !== newProps.setCameraRigParameter) {
            updates.push({
                propertyName: 'setCameraRigParameter',
                value: newProps.setCameraRigParameter,
                type: '(name?: string, value?: any)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is the base class of all the camera used in the application.
 * 
 * This code has been generated
 */
export class FiberCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = false;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Camera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberTargetCameraPropsHandler implements PropsHandler<BabylonjsCoreTargetCamera, FiberTargetCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTargetCamera, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreTargetCamera.cameraDirection.
        // TODO: type: BabylonjsCoreVector2 property (not coded) xxx-ns-xxx.BabylonjsCoreTargetCamera.cameraRotation.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreTargetCamera.lockedTarget.
        // xxx-ns-xxx.BabylonjsCoreTargetCamera.noRotationConstraint of type 'boolean':
        if (oldProps.noRotationConstraint !== newProps.noRotationConstraint) {
            updates.push({
                propertyName: 'noRotationConstraint',
                value: newProps.noRotationConstraint,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreTargetCamera.rotation.
        // TODO: type: BabylonjsCoreQuaternion property (not coded) xxx-ns-xxx.BabylonjsCoreTargetCamera.rotationQuaternion.
        // xxx-ns-xxx.BabylonjsCoreTargetCamera.speed of type 'number':
        if (oldProps.speed !== newProps.speed) {
            updates.push({
                propertyName: 'speed',
                value: newProps.speed,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTargetCamera.updateUpVectorFromRotation of type 'boolean':
        if (oldProps.updateUpVectorFromRotation !== newProps.updateUpVectorFromRotation) {
            updates.push({
                propertyName: 'updateUpVectorFromRotation',
                value: newProps.updateUpVectorFromRotation,
                type: 'boolean'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreTargetCamera.setTarget of type '(target?: BabylonjsCoreVector3)':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BabylonjsCoreVector3)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 * 
 * This code has been generated
 */
export class FiberTargetCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TargetCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreFreeCamera, FiberFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFreeCamera, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreFreeCamera.angularSensibility of type 'number':
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFreeCamera.applyGravity of type 'boolean':
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFreeCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFreeCamera.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.ellipsoid.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.ellipsoidOffset.
        // TODO: type: BabylonjsCoreFreeCameraInputsManager property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.inputs.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.keysDown.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.keysLeft.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.keysRight.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFreeCamera.keysUp.
        // xxx-ns-xxx.BabylonjsCoreFreeCamera.onCollide of type '(collidedMesh: BabylonjsCoreAbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 * 
 * This code has been generated
 */
export class FiberFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberTouchCameraPropsHandler implements PropsHandler<BabylonjsCoreTouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTouchCamera, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreTouchCamera.touchAngularSensibility of type 'number':
        if (oldProps.touchAngularSensibility !== newProps.touchAngularSensibility) {
            updates.push({
                propertyName: 'touchAngularSensibility',
                value: newProps.touchAngularSensibility,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTouchCamera.touchMoveSensibility of type 'number':
        if (oldProps.touchMoveSensibility !== newProps.touchMoveSensibility) {
            updates.push({
                propertyName: 'touchMoveSensibility',
                value: newProps.touchMoveSensibility,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 * 
 * This code has been generated
 */
export class FiberTouchCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TouchCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreUniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreUniversalCamera, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreUniversalCamera.gamepadAngularSensibility of type 'number':
        if (oldProps.gamepadAngularSensibility !== newProps.gamepadAngularSensibility) {
            updates.push({
                propertyName: 'gamepadAngularSensibility',
                value: newProps.gamepadAngularSensibility,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreUniversalCamera.gamepadMoveSensibility of type 'number':
        if (oldProps.gamepadMoveSensibility !== newProps.gamepadMoveSensibility) {
            updates.push({
                propertyName: 'gamepadMoveSensibility',
                value: newProps.gamepadMoveSensibility,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 * 
 * This code has been generated
 */
export class FiberUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "UniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberUniversalCamera"
    };
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreGamepadCamera, FiberGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreGamepadCamera, oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 * 
 * This code has been generated
 */
export class FiberGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberGamepadCamera"
    };
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphGamepadCamera, FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphGamepadCamera, oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberAnaglyphGamepadCamera"
    };
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicGamepadCamera, FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicGamepadCamera, oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberStereoscopicGamepadCamera"
    };
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphUniversalCamera, FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphUniversalCamera, oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphUniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberAnaglyphUniversalCamera"
    };
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicUniversalCamera, FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicUniversalCamera, oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicUniversalCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicUniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BabylonjsCoreDeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDeviceOrientationCamera, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 * 
 * This code has been generated
 */
export class FiberDeviceOrientationCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DeviceOrientationCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberDeviceOrientationCamera"
    };
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationFreeCamera, FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationFreeCamera, oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberVRDeviceOrientationFreeCamera"
    };
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationGamepadCamera, FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationGamepadCamera, oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberVRDeviceOrientationGamepadCamera"
    };
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphFreeCamera, FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphFreeCamera, oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberAnaglyphFreeCamera"
    };
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicFreeCamera, FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicFreeCamera, oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberStereoscopicFreeCamera"
    };
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<BabylonjsCoreVirtualJoysticksCamera, FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVirtualJoysticksCamera, oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 * 
 * This code has been generated
 */
export class FiberVirtualJoysticksCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualJoysticksCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualJoysticksCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreWebVRFreeCamera, FiberWebVRFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebVRFreeCamera, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreWebVRController[] property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.controllers.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.devicePosition.
        // TODO: type: BabylonjsCoreQuaternion property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.deviceRotationQuaternion.
        // xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.deviceScaleFactor of type 'number':
        if (oldProps.deviceScaleFactor !== newProps.deviceScaleFactor) {
            updates.push({
                propertyName: 'deviceScaleFactor',
                value: newProps.deviceScaleFactor,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.onControllerMeshLoadedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>/fn':
        if (oldProps.onControllerMeshLoadedObservable === undefined && oldProps.onControllerMeshLoadedObservable !== newProps.onControllerMeshLoadedObservable) {
            updates.push({
                propertyName: 'onControllerMeshLoadedObservable',
                value: newProps.onControllerMeshLoadedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.onControllersAttachedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreWebVRController[]>/fn':
        if (oldProps.onControllersAttachedObservable === undefined && oldProps.onControllersAttachedObservable !== newProps.onControllersAttachedObservable) {
            updates.push({
                propertyName: 'onControllersAttachedObservable',
                value: newProps.onControllersAttachedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController[]>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.onPoseUpdatedFromDeviceObservable of type 'BabylonjsCoreObservable<any>/fn':
        if (oldProps.onPoseUpdatedFromDeviceObservable === undefined && oldProps.onPoseUpdatedFromDeviceObservable !== newProps.onPoseUpdatedFromDeviceObservable) {
            updates.push({
                propertyName: 'onPoseUpdatedFromDeviceObservable',
                value: newProps.onPoseUpdatedFromDeviceObservable,
                type: 'BabylonjsCoreObservable<any>'
            });
        }
        // TODO: type: BabylonjsCoreDevicePose property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.rawPose.
        // xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.rigParenting of type 'boolean':
        if (oldProps.rigParenting !== newProps.rigParenting) {
            updates.push({
                propertyName: 'rigParenting',
                value: newProps.rigParenting,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.updateCacheCalled.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreWebVRFreeCamera.webVROptions.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 * 
 * This code has been generated
 */
export class FiberWebVRFreeCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebVRFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebVRFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BabylonjsCoreWebVROptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<BabylonjsCoreWebXRCamera, FiberWebXRCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebXRCamera, oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * WebXR Camera which holds the views for the xrSession
 * 
 * This code has been generated
 */
export class FiberWebXRCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebXRCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebXRCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberWebXRCamera"
    };
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcRotateCamera, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.allowUpsideDown of type 'boolean':
        if (oldProps.allowUpsideDown !== newProps.allowUpsideDown) {
            updates.push({
                propertyName: 'allowUpsideDown',
                value: newProps.allowUpsideDown,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.angularSensibilityX of type 'number':
        if (oldProps.angularSensibilityX !== newProps.angularSensibilityX) {
            updates.push({
                propertyName: 'angularSensibilityX',
                value: newProps.angularSensibilityX,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.angularSensibilityY of type 'number':
        if (oldProps.angularSensibilityY !== newProps.angularSensibilityY) {
            updates.push({
                propertyName: 'angularSensibilityY',
                value: newProps.angularSensibilityY,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.collisionRadius.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inertialAlphaOffset of type 'number':
        if (oldProps.inertialAlphaOffset !== newProps.inertialAlphaOffset) {
            updates.push({
                propertyName: 'inertialAlphaOffset',
                value: newProps.inertialAlphaOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inertialBetaOffset of type 'number':
        if (oldProps.inertialBetaOffset !== newProps.inertialBetaOffset) {
            updates.push({
                propertyName: 'inertialBetaOffset',
                value: newProps.inertialBetaOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inertialPanningX of type 'number':
        if (oldProps.inertialPanningX !== newProps.inertialPanningX) {
            updates.push({
                propertyName: 'inertialPanningX',
                value: newProps.inertialPanningX,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inertialPanningY of type 'number':
        if (oldProps.inertialPanningY !== newProps.inertialPanningY) {
            updates.push({
                propertyName: 'inertialPanningY',
                value: newProps.inertialPanningY,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inertialRadiusOffset of type 'number':
        if (oldProps.inertialRadiusOffset !== newProps.inertialRadiusOffset) {
            updates.push({
                propertyName: 'inertialRadiusOffset',
                value: newProps.inertialRadiusOffset,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreArcRotateCameraInputsManager property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.inputs.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.keysDown.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.keysLeft.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.keysRight.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.keysUp.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.lowerAlphaLimit of type 'number':
        if (oldProps.lowerAlphaLimit !== newProps.lowerAlphaLimit) {
            updates.push({
                propertyName: 'lowerAlphaLimit',
                value: newProps.lowerAlphaLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.lowerBetaLimit of type 'number':
        if (oldProps.lowerBetaLimit !== newProps.lowerBetaLimit) {
            updates.push({
                propertyName: 'lowerBetaLimit',
                value: newProps.lowerBetaLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.lowerRadiusLimit of type 'number':
        if (oldProps.lowerRadiusLimit !== newProps.lowerRadiusLimit) {
            updates.push({
                propertyName: 'lowerRadiusLimit',
                value: newProps.lowerRadiusLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.onCollide of type '(collidedMesh: BabylonjsCoreAbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.onMeshTargetChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMeshTargetChangedObservable === undefined && oldProps.onMeshTargetChangedObservable !== newProps.onMeshTargetChangedObservable) {
            updates.push({
                propertyName: 'onMeshTargetChangedObservable',
                value: newProps.onMeshTargetChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.panningAxis.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.panningDistanceLimit of type 'number':
        if (oldProps.panningDistanceLimit !== newProps.panningDistanceLimit) {
            updates.push({
                propertyName: 'panningDistanceLimit',
                value: newProps.panningDistanceLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.panningInertia of type 'number':
        if (oldProps.panningInertia !== newProps.panningInertia) {
            updates.push({
                propertyName: 'panningInertia',
                value: newProps.panningInertia,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.panningOriginTarget.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.panningSensibility of type 'number':
        if (oldProps.panningSensibility !== newProps.panningSensibility) {
            updates.push({
                propertyName: 'panningSensibility',
                value: newProps.panningSensibility,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.pinchDeltaPercentage of type 'number':
        if (oldProps.pinchDeltaPercentage !== newProps.pinchDeltaPercentage) {
            updates.push({
                propertyName: 'pinchDeltaPercentage',
                value: newProps.pinchDeltaPercentage,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.pinchPrecision of type 'number':
        if (oldProps.pinchPrecision !== newProps.pinchPrecision) {
            updates.push({
                propertyName: 'pinchPrecision',
                value: newProps.pinchPrecision,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.pinchToPanMaxDistance of type 'number':
        if (oldProps.pinchToPanMaxDistance !== newProps.pinchToPanMaxDistance) {
            updates.push({
                propertyName: 'pinchToPanMaxDistance',
                value: newProps.pinchToPanMaxDistance,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.position.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.target.
        // TODO: type: BabylonjsCoreVector2 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.targetScreenOffset.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.upperAlphaLimit of type 'number':
        if (oldProps.upperAlphaLimit !== newProps.upperAlphaLimit) {
            updates.push({
                propertyName: 'upperAlphaLimit',
                value: newProps.upperAlphaLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.upperBetaLimit of type 'number':
        if (oldProps.upperBetaLimit !== newProps.upperBetaLimit) {
            updates.push({
                propertyName: 'upperBetaLimit',
                value: newProps.upperBetaLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.upperRadiusLimit of type 'number':
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreArcRotateCamera.upVector.
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.useAutoRotationBehavior of type 'boolean':
        if (oldProps.useAutoRotationBehavior !== newProps.useAutoRotationBehavior) {
            updates.push({
                propertyName: 'useAutoRotationBehavior',
                value: newProps.useAutoRotationBehavior,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.useBouncingBehavior of type 'boolean':
        if (oldProps.useBouncingBehavior !== newProps.useBouncingBehavior) {
            updates.push({
                propertyName: 'useBouncingBehavior',
                value: newProps.useBouncingBehavior,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.useFramingBehavior of type 'boolean':
        if (oldProps.useFramingBehavior !== newProps.useFramingBehavior) {
            updates.push({
                propertyName: 'useFramingBehavior',
                value: newProps.useFramingBehavior,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.useInputToRestoreState of type 'boolean':
        if (oldProps.useInputToRestoreState !== newProps.useInputToRestoreState) {
            updates.push({
                propertyName: 'useInputToRestoreState',
                value: newProps.useInputToRestoreState,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.wheelDeltaPercentage of type 'number':
        if (oldProps.wheelDeltaPercentage !== newProps.wheelDeltaPercentage) {
            updates.push({
                propertyName: 'wheelDeltaPercentage',
                value: newProps.wheelDeltaPercentage,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.wheelPrecision of type 'number':
        if (oldProps.wheelPrecision !== newProps.wheelPrecision) {
            updates.push({
                propertyName: 'wheelPrecision',
                value: newProps.wheelPrecision,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcRotateCamera.zoomOnFactor of type 'number':
        if (oldProps.zoomOnFactor !== newProps.zoomOnFactor) {
            updates.push({
                propertyName: 'zoomOnFactor',
                value: newProps.zoomOnFactor,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreArcRotateCamera.setPosition of type '(position?: BabylonjsCoreVector3)':
        if (oldProps.setPosition !== newProps.setPosition) {
            updates.push({
                propertyName: 'setPosition',
                value: newProps.setPosition,
                type: '(position?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreArcRotateCamera.setTarget of type '(target?: BabylonjsCoreAbstractMesh | BabylonjsCoreVector3, toBoundingCenter?: boolean, allowSamePosition?: boolean)':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BabylonjsCoreAbstractMesh | BabylonjsCoreVector3, toBoundingCenter?: boolean, allowSamePosition?: boolean)'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
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
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreAnaglyphArcRotateCamera, FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAnaglyphArcRotateCamera, oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
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
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberAnaglyphArcRotateCamera"
    };
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreStereoscopicArcRotateCamera, FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStereoscopicArcRotateCamera, oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
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
                "type": "BabylonjsCoreVector3",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberStereoscopicArcRotateCamera"
    };
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreVRDeviceOrientationArcRotateCamera, FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRDeviceOrientationArcRotateCamera, oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 * 
 * This code has been generated
 */
export class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
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
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberFlyCameraPropsHandler implements PropsHandler<BabylonjsCoreFlyCamera, FiberFlyCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFlyCamera, oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.angularSensibility of type 'number':
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.applyGravity of type 'boolean':
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.bankedTurn of type 'boolean':
        if (oldProps.bankedTurn !== newProps.bankedTurn) {
            updates.push({
                propertyName: 'bankedTurn',
                value: newProps.bankedTurn,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.bankedTurnLimit of type 'number':
        if (oldProps.bankedTurnLimit !== newProps.bankedTurnLimit) {
            updates.push({
                propertyName: 'bankedTurnLimit',
                value: newProps.bankedTurnLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.bankedTurnMultiplier of type 'number':
        if (oldProps.bankedTurnMultiplier !== newProps.bankedTurnMultiplier) {
            updates.push({
                propertyName: 'bankedTurnMultiplier',
                value: newProps.bankedTurnMultiplier,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.cameraDirection.
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.checkCollisions of type 'boolean':
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.collisionMask of type 'number':
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.ellipsoid.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.ellipsoidOffset.
        // TODO: type: BabylonjsCoreFlyCameraInputsManager property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.inputs.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysBackward.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysDown.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysForward.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysLeft.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysRight.
        // TODO: type: number[] property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.keysUp.
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.onCollide of type '(collidedMesh: BabylonjsCoreAbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.rollCorrect of type 'number':
        if (oldProps.rollCorrect !== newProps.rollCorrect) {
            updates.push({
                propertyName: 'rollCorrect',
                value: newProps.rollCorrect,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreQuaternion property (not coded) xxx-ns-xxx.BabylonjsCoreFlyCamera.rotationQuaternion.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 * 
 * This code has been generated
 */
export class FiberFlyCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFlyCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FlyCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreFollowCamera, FiberFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFollowCamera, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.cameraAcceleration of type 'number':
        if (oldProps.cameraAcceleration !== newProps.cameraAcceleration) {
            updates.push({
                propertyName: 'cameraAcceleration',
                value: newProps.cameraAcceleration,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.heightOffset of type 'number':
        if (oldProps.heightOffset !== newProps.heightOffset) {
            updates.push({
                propertyName: 'heightOffset',
                value: newProps.heightOffset,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreFollowCameraInputsManager property (not coded) xxx-ns-xxx.BabylonjsCoreFollowCamera.inputs.
        // TODO: type: BabylonjsCoreAbstractMesh property (not coded) xxx-ns-xxx.BabylonjsCoreFollowCamera.lockedTarget.
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.lowerHeightOffsetLimit of type 'number':
        if (oldProps.lowerHeightOffsetLimit !== newProps.lowerHeightOffsetLimit) {
            updates.push({
                propertyName: 'lowerHeightOffsetLimit',
                value: newProps.lowerHeightOffsetLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.lowerRadiusLimit of type 'number':
        if (oldProps.lowerRadiusLimit !== newProps.lowerRadiusLimit) {
            updates.push({
                propertyName: 'lowerRadiusLimit',
                value: newProps.lowerRadiusLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.lowerRotationOffsetLimit of type 'number':
        if (oldProps.lowerRotationOffsetLimit !== newProps.lowerRotationOffsetLimit) {
            updates.push({
                propertyName: 'lowerRotationOffsetLimit',
                value: newProps.lowerRotationOffsetLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.maxCameraSpeed of type 'number':
        if (oldProps.maxCameraSpeed !== newProps.maxCameraSpeed) {
            updates.push({
                propertyName: 'maxCameraSpeed',
                value: newProps.maxCameraSpeed,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.rotationOffset of type 'number':
        if (oldProps.rotationOffset !== newProps.rotationOffset) {
            updates.push({
                propertyName: 'rotationOffset',
                value: newProps.rotationOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.upperHeightOffsetLimit of type 'number':
        if (oldProps.upperHeightOffsetLimit !== newProps.upperHeightOffsetLimit) {
            updates.push({
                propertyName: 'upperHeightOffsetLimit',
                value: newProps.upperHeightOffsetLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.upperRadiusLimit of type 'number':
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFollowCamera.upperRotationOffsetLimit of type 'number':
        if (oldProps.upperRotationOffsetLimit !== newProps.upperRotationOffsetLimit) {
            updates.push({
                propertyName: 'upperRotationOffsetLimit',
                value: newProps.upperRotationOffsetLimit,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 * 
 * This code has been generated
 */
export class FiberFollowCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FollowCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "lockedTarget",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberFollowCamera"
    };
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreArcFollowCamera, FiberArcFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcFollowCamera, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreArcFollowCamera.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcFollowCamera.beta of type 'number':
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreArcFollowCamera.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreAbstractMesh property (not coded) xxx-ns-xxx.BabylonjsCoreArcFollowCamera.target.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 * 
 * This code has been generated
 */
export class FiberArcFollowCamera implements HasPropsHandlers<BabylonjsCoreCamera, FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreCamera, FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreCamera, FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcFollowCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
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
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "className": "FiberArcFollowCamera"
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
export class FiberBox implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
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
                "type": "BabylonjsCoreScene",
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
export class FiberSphere implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberDisc implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
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
export class FiberIcoSphere implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberRibbon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[][]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "uvs",
                        "type": "BabylonjsCoreVector2[]",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    }
                ],
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
export class FiberCylinder implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
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
export class FiberTorus implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
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
export class FiberTorusKnot implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
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
export class FiberLineSystem implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[][]",
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
                "type": "BabylonjsCoreScene",
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
export class FiberLines implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[]",
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
                "type": "BabylonjsCoreScene",
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
export class FiberDashedLines implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
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
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    }
                ],
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
export class FiberExtrudeShape implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BabylonjsCoreVector3[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
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
                "type": "BabylonjsCoreScene",
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
export class FiberExtrudeShapeCustom implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BabylonjsCoreVector3[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberLathe implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberPlane implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sourcePlane",
                        "type": "BabylonjsCorePlane",
                        "optional": true
                    }
                ],
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
export class FiberGround implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberTiledGround implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberGroundFromHeightMap implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreColor3",
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
                        "type": "(mesh: BabylonjsCoreGroundMesh) => void",
                        "optional": true
                    }
                ],
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
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberGroundFromHeightMap"
    };
}

/**
 * Creates a polygon mesh
 * The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
 * * The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
 * * You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
 * * Remember you can only change the shape positions, not their number when updating a polygon
 * 
 * This code has been generated
 */
export class FiberPolygon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "earcutInjection",
                "type": "any",
                "optional": true
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
export class FiberExtrudePolygon implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "earcutInjection",
                "type": "any",
                "optional": true
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
export class FiberTube implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector3[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
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
                "type": "BabylonjsCoreScene",
                "optional": true
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
export class FiberPolyhedron implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
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
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
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
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
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
export class FiberDecal implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMesh, FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMesh, FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "MeshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateDecal",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "sourceMesh",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "position",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "normal",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "BabylonjsCoreVector3",
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

export class FiberMaterialPropsHandler implements PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMaterial, oldProps: FiberMaterialProps, newProps: FiberMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreMaterial.alpha of type 'number':
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.alphaMode of type 'number':
        if (oldProps.alphaMode !== newProps.alphaMode) {
            updates.push({
                propertyName: 'alphaMode',
                value: newProps.alphaMode,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreAnimation[] property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.animations.
        // xxx-ns-xxx.BabylonjsCoreMaterial.backFaceCulling of type 'boolean':
        if (oldProps.backFaceCulling !== newProps.backFaceCulling) {
            updates.push({
                propertyName: 'backFaceCulling',
                value: newProps.backFaceCulling,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.checkReadyOnEveryCall of type 'boolean':
        if (oldProps.checkReadyOnEveryCall !== newProps.checkReadyOnEveryCall) {
            updates.push({
                propertyName: 'checkReadyOnEveryCall',
                value: newProps.checkReadyOnEveryCall,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.checkReadyOnlyOnce of type 'boolean':
        if (oldProps.checkReadyOnlyOnce !== newProps.checkReadyOnlyOnce) {
            updates.push({
                propertyName: 'checkReadyOnlyOnce',
                value: newProps.checkReadyOnlyOnce,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.disableDepthWrite of type 'boolean':
        if (oldProps.disableDepthWrite !== newProps.disableDepthWrite) {
            updates.push({
                propertyName: 'disableDepthWrite',
                value: newProps.disableDepthWrite,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.doNotSerialize of type 'boolean':
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.fillMode of type 'number':
        if (oldProps.fillMode !== newProps.fillMode) {
            updates.push({
                propertyName: 'fillMode',
                value: newProps.fillMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.fogEnabled of type 'boolean':
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.forceDepthWrite of type 'boolean':
        if (oldProps.forceDepthWrite !== newProps.forceDepthWrite) {
            updates.push({
                propertyName: 'forceDepthWrite',
                value: newProps.forceDepthWrite,
                type: 'boolean'
            });
        }
        // TODO: type: () => BabylonjsCoreSmartArray<BabylonjsCoreRenderTargetTexture> property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.getRenderTargetTextures.
        // xxx-ns-xxx.BabylonjsCoreMaterial.id of type 'string':
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: BabylonjsCoreIInspectable[] property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.inspectableCustomProperties.
        // TODO: type: { [id: string]: BabylonjsCoreAbstractMesh; } property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.meshMap.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.metadata.
        // xxx-ns-xxx.BabylonjsCoreMaterial.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.needDepthPrePass of type 'boolean':
        if (oldProps.needDepthPrePass !== newProps.needDepthPrePass) {
            updates.push({
                propertyName: 'needDepthPrePass',
                value: newProps.needDepthPrePass,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.onBind of type '(Mesh: BabylonjsCoreAbstractMesh) => void/fn':
        if (oldProps.onBind === undefined && oldProps.onBind !== newProps.onBind) {
            updates.push({
                propertyName: 'onBind',
                value: newProps.onBind,
                type: '(Mesh: BabylonjsCoreAbstractMesh) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.onCompiled of type '(effect: BabylonjsCoreEffect) => void/fn':
        if (oldProps.onCompiled === undefined && oldProps.onCompiled !== newProps.onCompiled) {
            updates.push({
                propertyName: 'onCompiled',
                value: newProps.onCompiled,
                type: '(effect: BabylonjsCoreEffect) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMaterial>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.onError of type '(effect: BabylonjsCoreEffect, errors: string) => void/fn':
        if (oldProps.onError === undefined && oldProps.onError !== newProps.onError) {
            updates.push({
                propertyName: 'onError',
                value: newProps.onError,
                type: '(effect: BabylonjsCoreEffect, errors: string) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.pointsCloud of type 'boolean':
        if (oldProps.pointsCloud !== newProps.pointsCloud) {
            updates.push({
                propertyName: 'pointsCloud',
                value: newProps.pointsCloud,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.pointSize of type 'number':
        if (oldProps.pointSize !== newProps.pointSize) {
            updates.push({
                propertyName: 'pointSize',
                value: newProps.pointSize,
                type: 'number'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.releaseVertexArrayObject.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMaterial.reservedDataStore.
        // xxx-ns-xxx.BabylonjsCoreMaterial.separateCullingPass of type 'boolean':
        if (oldProps.separateCullingPass !== newProps.separateCullingPass) {
            updates.push({
                propertyName: 'separateCullingPass',
                value: newProps.separateCullingPass,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.sideOrientation of type 'number':
        if (oldProps.sideOrientation !== newProps.sideOrientation) {
            updates.push({
                propertyName: 'sideOrientation',
                value: newProps.sideOrientation,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.state of type 'string':
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.wireframe of type 'boolean':
        if (oldProps.wireframe !== newProps.wireframe) {
            updates.push({
                propertyName: 'wireframe',
                value: newProps.wireframe,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMaterial.zOffset of type 'number':
        if (oldProps.zOffset !== newProps.zOffset) {
            updates.push({
                propertyName: 'zOffset',
                value: newProps.zOffset,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class for the main features of a material in Babylon.js
 * 
 * This code has been generated
 */
export class FiberMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Material",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberShaderMaterialPropsHandler implements PropsHandler<BabylonjsCoreShaderMaterial, FiberShaderMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShaderMaterial, oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setArray2 of type '(name?: string, value?: number[])':
        if (oldProps.setArray2 !== newProps.setArray2) {
            updates.push({
                propertyName: 'setArray2',
                value: newProps.setArray2,
                type: '(name?: string, value?: number[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setArray3 of type '(name?: string, value?: number[])':
        if (oldProps.setArray3 !== newProps.setArray3) {
            updates.push({
                propertyName: 'setArray3',
                value: newProps.setArray3,
                type: '(name?: string, value?: number[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setColor3 of type '(name?: string, value?: BabylonjsCoreColor3)':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BabylonjsCoreColor3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setColor3Array of type '(name?: string, value?: BabylonjsCoreColor3[])':
        if (oldProps.setColor3Array !== newProps.setColor3Array) {
            updates.push({
                propertyName: 'setColor3Array',
                value: newProps.setColor3Array,
                type: '(name?: string, value?: BabylonjsCoreColor3[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setColor4 of type '(name?: string, value?: BabylonjsCoreColor4)':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BabylonjsCoreColor4)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setFloat of type '(name?: string, value?: number)':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setFloats of type '(name?: string, value?: number[])':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setInt of type '(name?: string, value?: number)':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setMatrix of type '(name?: string, value?: BabylonjsCoreMatrix)':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BabylonjsCoreMatrix)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setMatrix2x2 of type '(name?: string, value?: Float32Array)':
        if (oldProps.setMatrix2x2 !== newProps.setMatrix2x2) {
            updates.push({
                propertyName: 'setMatrix2x2',
                value: newProps.setMatrix2x2,
                type: '(name?: string, value?: Float32Array)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setMatrix3x3 of type '(name?: string, value?: Float32Array)':
        if (oldProps.setMatrix3x3 !== newProps.setMatrix3x3) {
            updates.push({
                propertyName: 'setMatrix3x3',
                value: newProps.setMatrix3x3,
                type: '(name?: string, value?: Float32Array)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setTexture of type '(name?: string, texture?: BabylonjsCoreTexture)':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BabylonjsCoreTexture)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setTextureArray of type '(name?: string, textures?: BabylonjsCoreTexture[])':
        if (oldProps.setTextureArray !== newProps.setTextureArray) {
            updates.push({
                propertyName: 'setTextureArray',
                value: newProps.setTextureArray,
                type: '(name?: string, textures?: BabylonjsCoreTexture[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setVector2 of type '(name?: string, value?: BabylonjsCoreVector2)':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BabylonjsCoreVector2)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setVector3 of type '(name?: string, value?: BabylonjsCoreVector3)':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShaderMaterial.setVector4 of type '(name?: string, value?: BabylonjsCoreVector4)':
        if (oldProps.setVector4 !== newProps.setVector4) {
            updates.push({
                propertyName: 'setVector4',
                value: newProps.setVector4,
                type: '(name?: string, value?: BabylonjsCoreVector4)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 * 
 * This returned material effects how the mesh will look based on the code in the shaders.
 * 
 * This code has been generated
 */
export class FiberShaderMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShaderMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShaderMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "shaderPath",
                "type": "any",
                "optional": false
            },
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIShaderMaterialOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberShaderMaterial"
    };
}

export class FiberMultiMaterialPropsHandler implements PropsHandler<BabylonjsCoreMultiMaterial, FiberMultiMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiMaterial, oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreMaterial[] property (not coded) xxx-ns-xxx.BabylonjsCoreMultiMaterial.subMaterials.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 * 
 * This code has been generated
 */
export class FiberMultiMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberMultiMaterial"
    };
}

export class FiberPushMaterialPropsHandler implements PropsHandler<BabylonjsCorePushMaterial, FiberPushMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePushMaterial, oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCorePushMaterial.allowShaderHotSwapping of type 'boolean':
        if (oldProps.allowShaderHotSwapping !== newProps.allowShaderHotSwapping) {
            updates.push({
                propertyName: 'allowShaderHotSwapping',
                value: newProps.allowShaderHotSwapping,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class of materials working in push mode in babylon JS
 * 
 * This code has been generated
 */
export class FiberPushMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PushMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPushMaterial"
    };
}

export class FiberStandardMaterialPropsHandler implements PropsHandler<BabylonjsCoreStandardMaterial, FiberStandardMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreStandardMaterial, oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.ambientColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.ambientTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.bumpTexture.
        // TODO: type: BabylonjsCoreColorCurves property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraColorCurves.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraColorGradingTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCoreStandardMaterialDefines) => string property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.customShaderNameResolve.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.diffuseColor.
        // TODO: type: BabylonjsCoreFresnelParameters property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.diffuseFresnelParameters.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.diffuseTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.emissiveColor.
        // TODO: type: BabylonjsCoreFresnelParameters property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.emissiveFresnelParameters.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.emissiveTexture.
        // TODO: type: BabylonjsCoreImageProcessingConfiguration property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.imageProcessingConfiguration.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.indexOfRefraction of type 'number':
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.invertRefractionY of type 'boolean':
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.lightmapTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.linkEmissiveWithDiffuse of type 'boolean':
        if (oldProps.linkEmissiveWithDiffuse !== newProps.linkEmissiveWithDiffuse) {
            updates.push({
                propertyName: 'linkEmissiveWithDiffuse',
                value: newProps.linkEmissiveWithDiffuse,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreFresnelParameters property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.opacityFresnelParameters.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.opacityTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.parallaxScaleBias of type 'number':
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreFresnelParameters property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.reflectionFresnelParameters.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.reflectionTexture.
        // TODO: type: BabylonjsCoreFresnelParameters property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.refractionFresnelParameters.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.refractionTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.specularColor.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.specularPower of type 'number':
        if (oldProps.specularPower !== newProps.specularPower) {
            updates.push({
                propertyName: 'specularPower',
                value: newProps.specularPower,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreStandardMaterial.specularTexture.
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.twoSidedLighting of type 'boolean':
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useAlphaFromDiffuseTexture of type 'boolean':
        if (oldProps.useAlphaFromDiffuseTexture !== newProps.useAlphaFromDiffuseTexture) {
            updates.push({
                propertyName: 'useAlphaFromDiffuseTexture',
                value: newProps.useAlphaFromDiffuseTexture,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useEmissiveAsIllumination of type 'boolean':
        if (oldProps.useEmissiveAsIllumination !== newProps.useEmissiveAsIllumination) {
            updates.push({
                propertyName: 'useEmissiveAsIllumination',
                value: newProps.useEmissiveAsIllumination,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useGlossinessFromSpecularMapAlpha of type 'boolean':
        if (oldProps.useGlossinessFromSpecularMapAlpha !== newProps.useGlossinessFromSpecularMapAlpha) {
            updates.push({
                propertyName: 'useGlossinessFromSpecularMapAlpha',
                value: newProps.useGlossinessFromSpecularMapAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useLogarithmicDepth of type 'boolean':
        if (oldProps.useLogarithmicDepth !== newProps.useLogarithmicDepth) {
            updates.push({
                propertyName: 'useLogarithmicDepth',
                value: newProps.useLogarithmicDepth,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useObjectSpaceNormalMap of type 'boolean':
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useParallax of type 'boolean':
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useParallaxOcclusion of type 'boolean':
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useReflectionFresnelFromSpecular of type 'boolean':
        if (oldProps.useReflectionFresnelFromSpecular !== newProps.useReflectionFresnelFromSpecular) {
            updates.push({
                propertyName: 'useReflectionFresnelFromSpecular',
                value: newProps.useReflectionFresnelFromSpecular,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useReflectionOverAlpha of type 'boolean':
        if (oldProps.useReflectionOverAlpha !== newProps.useReflectionOverAlpha) {
            updates.push({
                propertyName: 'useReflectionOverAlpha',
                value: newProps.useReflectionOverAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreStandardMaterial.useSpecularOverAlpha of type 'boolean':
        if (oldProps.useSpecularOverAlpha !== newProps.useSpecularOverAlpha) {
            updates.push({
                propertyName: 'useSpecularOverAlpha',
                value: newProps.useSpecularOverAlpha,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 * 
 * This code has been generated
 */
export class FiberStandardMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStandardMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StandardMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberStandardMaterial"
    };
}

export class FiberBackgroundMaterialPropsHandler implements PropsHandler<BabylonjsCoreBackgroundMaterial, FiberBackgroundMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBackgroundMaterial, oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreColorCurves property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraColorCurves.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraColorGradingTexture.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.diffuseTexture.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.enableNoise of type 'boolean':
        if (oldProps.enableNoise !== newProps.enableNoise) {
            updates.push({
                propertyName: 'enableNoise',
                value: newProps.enableNoise,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.fovMultiplier of type 'number':
        if (oldProps.fovMultiplier !== newProps.fovMultiplier) {
            updates.push({
                propertyName: 'fovMultiplier',
                value: newProps.fovMultiplier,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreImageProcessingConfiguration property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.imageProcessingConfiguration.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.opacityFresnel of type 'boolean':
        if (oldProps.opacityFresnel !== newProps.opacityFresnel) {
            updates.push({
                propertyName: 'opacityFresnel',
                value: newProps.opacityFresnel,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.primaryColor.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.primaryColorHighlightLevel of type 'number':
        if (oldProps.primaryColorHighlightLevel !== newProps.primaryColorHighlightLevel) {
            updates.push({
                propertyName: 'primaryColorHighlightLevel',
                value: newProps.primaryColorHighlightLevel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.primaryColorShadowLevel of type 'number':
        if (oldProps.primaryColorShadowLevel !== newProps.primaryColorShadowLevel) {
            updates.push({
                propertyName: 'primaryColorShadowLevel',
                value: newProps.primaryColorShadowLevel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionAmount of type 'number':
        if (oldProps.reflectionAmount !== newProps.reflectionAmount) {
            updates.push({
                propertyName: 'reflectionAmount',
                value: newProps.reflectionAmount,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionBlur of type 'number':
        if (oldProps.reflectionBlur !== newProps.reflectionBlur) {
            updates.push({
                propertyName: 'reflectionBlur',
                value: newProps.reflectionBlur,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionFalloffDistance of type 'number':
        if (oldProps.reflectionFalloffDistance !== newProps.reflectionFalloffDistance) {
            updates.push({
                propertyName: 'reflectionFalloffDistance',
                value: newProps.reflectionFalloffDistance,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionFresnel of type 'boolean':
        if (oldProps.reflectionFresnel !== newProps.reflectionFresnel) {
            updates.push({
                propertyName: 'reflectionFresnel',
                value: newProps.reflectionFresnel,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionReflectance0 of type 'number':
        if (oldProps.reflectionReflectance0 !== newProps.reflectionReflectance0) {
            updates.push({
                propertyName: 'reflectionReflectance0',
                value: newProps.reflectionReflectance0,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionReflectance90 of type 'number':
        if (oldProps.reflectionReflectance90 !== newProps.reflectionReflectance90) {
            updates.push({
                propertyName: 'reflectionReflectance90',
                value: newProps.reflectionReflectance90,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionStandardFresnelWeight of type 'number':
        if (oldProps.reflectionStandardFresnelWeight !== newProps.reflectionStandardFresnelWeight) {
            updates.push({
                propertyName: 'reflectionStandardFresnelWeight',
                value: newProps.reflectionStandardFresnelWeight,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.reflectionTexture.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.sceneCenter.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.shadowLevel of type 'number':
        if (oldProps.shadowLevel !== newProps.shadowLevel) {
            updates.push({
                propertyName: 'shadowLevel',
                value: newProps.shadowLevel,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreIShadowLight[] property (not coded) xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.shadowLights.
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.switchToBGR of type 'boolean':
        if (oldProps.switchToBGR !== newProps.switchToBGR) {
            updates.push({
                propertyName: 'switchToBGR',
                value: newProps.switchToBGR,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.useEquirectangularFOV of type 'boolean':
        if (oldProps.useEquirectangularFOV !== newProps.useEquirectangularFOV) {
            updates.push({
                propertyName: 'useEquirectangularFOV',
                value: newProps.useEquirectangularFOV,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBackgroundMaterial.useRGBColor of type 'boolean':
        if (oldProps.useRGBColor !== newProps.useRGBColor) {
            updates.push({
                propertyName: 'useRGBColor',
                value: newProps.useRGBColor,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Background material used to create an efficient environement around your scene.
 * 
 * This code has been generated
 */
export class FiberBackgroundMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBackgroundMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BackgroundMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberBackgroundMaterial"
    };
}

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRBaseMaterial, FiberPBRBaseMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRBaseMaterial, oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCorePBRMaterialDefines) => string property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.customShaderNameResolve.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.debugFactor.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.debugLimit.
        // xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.debugMode of type 'number':
        if (oldProps.debugMode !== newProps.debugMode) {
            updates.push({
                propertyName: 'debugMode',
                value: newProps.debugMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.transparencyMode of type 'number':
        if (oldProps.transparencyMode !== newProps.transparencyMode) {
            updates.push({
                propertyName: 'transparencyMode',
                value: newProps.transparencyMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRBaseMaterial.useLogarithmicDepth of type 'boolean':
        if (oldProps.useLogarithmicDepth !== newProps.useLogarithmicDepth) {
            updates.push({
                propertyName: 'useLogarithmicDepth',
                value: newProps.useLogarithmicDepth,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberPBRBaseMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRBaseMaterial"
    };
}

export class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRBaseSimpleMaterial, FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRBaseSimpleMaterial, oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.doubleSided of type 'boolean':
        if (oldProps.doubleSided !== newProps.doubleSided) {
            updates.push({
                propertyName: 'doubleSided',
                value: newProps.doubleSided,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.emissiveColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.emissiveTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.environmentTexture.
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.lightmapTexture.
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.normalTexture.
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.occlusionStrength of type 'number':
        if (oldProps.occlusionStrength !== newProps.occlusionStrength) {
            updates.push({
                propertyName: 'occlusionStrength',
                value: newProps.occlusionStrength,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.occlusionTexture.
        // xxx-ns-xxx.BabylonjsCorePBRBaseSimpleMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseSimpleMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRBaseSimpleMaterial"
    };
}

export class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRMetallicRoughnessMaterial, FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRMetallicRoughnessMaterial, oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMetallicRoughnessMaterial.baseColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMetallicRoughnessMaterial.baseTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMetallicRoughnessMaterial.metallic of type 'number':
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMetallicRoughnessMaterial.metallicRoughnessTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMetallicRoughnessMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMetallicRoughnessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMetallicRoughnessMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRMetallicRoughnessMaterial"
    };
}

export class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRSpecularGlossinessMaterial, FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRSpecularGlossinessMaterial, oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRSpecularGlossinessMaterial.diffuseColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRSpecularGlossinessMaterial.diffuseTexture.
        // xxx-ns-xxx.BabylonjsCorePBRSpecularGlossinessMaterial.glossiness of type 'number':
        if (oldProps.glossiness !== newProps.glossiness) {
            updates.push({
                propertyName: 'glossiness',
                value: newProps.glossiness,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRSpecularGlossinessMaterial.specularColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRSpecularGlossinessMaterial.specularGlossinessTexture.
        return updates.length === 0 ? null : updates;
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
export class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRSpecularGlossinessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRSpecularGlossinessMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRSpecularGlossinessMaterial"
    };
}

export class FiberPBRMaterialPropsHandler implements PropsHandler<BabylonjsCorePBRMaterial, FiberPBRMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePBRMaterial, oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.albedoColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.albedoTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.alphaCutOff of type 'number':
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.ambientColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.ambientTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.ambientTextureImpactOnAnalyticalLights of type 'number':
        if (oldProps.ambientTextureImpactOnAnalyticalLights !== newProps.ambientTextureImpactOnAnalyticalLights) {
            updates.push({
                propertyName: 'ambientTextureImpactOnAnalyticalLights',
                value: newProps.ambientTextureImpactOnAnalyticalLights,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.ambientTextureStrength of type 'number':
        if (oldProps.ambientTextureStrength !== newProps.ambientTextureStrength) {
            updates.push({
                propertyName: 'ambientTextureStrength',
                value: newProps.ambientTextureStrength,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.bumpTexture.
        // TODO: type: BabylonjsCoreColorCurves property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraColorCurves.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraColorCurvesEnabled of type 'boolean':
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraColorGradingEnabled of type 'boolean':
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraColorGradingTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraContrast of type 'number':
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraExposure of type 'number':
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.cameraToneMappingEnabled of type 'boolean':
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.directIntensity of type 'number':
        if (oldProps.directIntensity !== newProps.directIntensity) {
            updates.push({
                propertyName: 'directIntensity',
                value: newProps.directIntensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.disableBumpMap of type 'boolean':
        if (oldProps.disableBumpMap !== newProps.disableBumpMap) {
            updates.push({
                propertyName: 'disableBumpMap',
                value: newProps.disableBumpMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.disableLighting of type 'boolean':
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.emissiveColor.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.emissiveIntensity of type 'number':
        if (oldProps.emissiveIntensity !== newProps.emissiveIntensity) {
            updates.push({
                propertyName: 'emissiveIntensity',
                value: newProps.emissiveIntensity,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.emissiveTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.enableSpecularAntiAliasing of type 'boolean':
        if (oldProps.enableSpecularAntiAliasing !== newProps.enableSpecularAntiAliasing) {
            updates.push({
                propertyName: 'enableSpecularAntiAliasing',
                value: newProps.enableSpecularAntiAliasing,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.environmentBRDFTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.environmentIntensity of type 'number':
        if (oldProps.environmentIntensity !== newProps.environmentIntensity) {
            updates.push({
                propertyName: 'environmentIntensity',
                value: newProps.environmentIntensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.forceAlphaTest of type 'boolean':
        if (oldProps.forceAlphaTest !== newProps.forceAlphaTest) {
            updates.push({
                propertyName: 'forceAlphaTest',
                value: newProps.forceAlphaTest,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.forceIrradianceInFragment of type 'boolean':
        if (oldProps.forceIrradianceInFragment !== newProps.forceIrradianceInFragment) {
            updates.push({
                propertyName: 'forceIrradianceInFragment',
                value: newProps.forceIrradianceInFragment,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.forceNormalForward of type 'boolean':
        if (oldProps.forceNormalForward !== newProps.forceNormalForward) {
            updates.push({
                propertyName: 'forceNormalForward',
                value: newProps.forceNormalForward,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreImageProcessingConfiguration property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.imageProcessingConfiguration.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.indexOfRefraction of type 'number':
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.invertNormalMapX of type 'boolean':
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.invertNormalMapY of type 'boolean':
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.invertRefractionY of type 'boolean':
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.lightmapTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.linkRefractionWithTransparency of type 'boolean':
        if (oldProps.linkRefractionWithTransparency !== newProps.linkRefractionWithTransparency) {
            updates.push({
                propertyName: 'linkRefractionWithTransparency',
                value: newProps.linkRefractionWithTransparency,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.maxSimultaneousLights of type 'number':
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.metallic of type 'number':
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.metallicTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.microSurface of type 'number':
        if (oldProps.microSurface !== newProps.microSurface) {
            updates.push({
                propertyName: 'microSurface',
                value: newProps.microSurface,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.microSurfaceTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.opacityTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.parallaxScaleBias of type 'number':
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.reflectionColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.reflectionTexture.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.reflectivityColor.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.reflectivityTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCorePBRMaterial.refractionTexture.
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.roughness of type 'number':
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.specularIntensity of type 'number':
        if (oldProps.specularIntensity !== newProps.specularIntensity) {
            updates.push({
                propertyName: 'specularIntensity',
                value: newProps.specularIntensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.twoSidedLighting of type 'boolean':
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.unlit of type 'boolean':
        if (oldProps.unlit !== newProps.unlit) {
            updates.push({
                propertyName: 'unlit',
                value: newProps.unlit,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useAlphaFresnel of type 'boolean':
        if (oldProps.useAlphaFresnel !== newProps.useAlphaFresnel) {
            updates.push({
                propertyName: 'useAlphaFresnel',
                value: newProps.useAlphaFresnel,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useAlphaFromAlbedoTexture of type 'boolean':
        if (oldProps.useAlphaFromAlbedoTexture !== newProps.useAlphaFromAlbedoTexture) {
            updates.push({
                propertyName: 'useAlphaFromAlbedoTexture',
                value: newProps.useAlphaFromAlbedoTexture,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useAmbientInGrayScale of type 'boolean':
        if (oldProps.useAmbientInGrayScale !== newProps.useAmbientInGrayScale) {
            updates.push({
                propertyName: 'useAmbientInGrayScale',
                value: newProps.useAmbientInGrayScale,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useAmbientOcclusionFromMetallicTextureRed of type 'boolean':
        if (oldProps.useAmbientOcclusionFromMetallicTextureRed !== newProps.useAmbientOcclusionFromMetallicTextureRed) {
            updates.push({
                propertyName: 'useAmbientOcclusionFromMetallicTextureRed',
                value: newProps.useAmbientOcclusionFromMetallicTextureRed,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useAutoMicroSurfaceFromReflectivityMap of type 'boolean':
        if (oldProps.useAutoMicroSurfaceFromReflectivityMap !== newProps.useAutoMicroSurfaceFromReflectivityMap) {
            updates.push({
                propertyName: 'useAutoMicroSurfaceFromReflectivityMap',
                value: newProps.useAutoMicroSurfaceFromReflectivityMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useGLTFLightFalloff of type 'boolean':
        if (oldProps.useGLTFLightFalloff !== newProps.useGLTFLightFalloff) {
            updates.push({
                propertyName: 'useGLTFLightFalloff',
                value: newProps.useGLTFLightFalloff,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useHorizonOcclusion of type 'boolean':
        if (oldProps.useHorizonOcclusion !== newProps.useHorizonOcclusion) {
            updates.push({
                propertyName: 'useHorizonOcclusion',
                value: newProps.useHorizonOcclusion,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useLightmapAsShadowmap of type 'boolean':
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useLinearAlphaFresnel of type 'boolean':
        if (oldProps.useLinearAlphaFresnel !== newProps.useLinearAlphaFresnel) {
            updates.push({
                propertyName: 'useLinearAlphaFresnel',
                value: newProps.useLinearAlphaFresnel,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useMetallnessFromMetallicTextureBlue of type 'boolean':
        if (oldProps.useMetallnessFromMetallicTextureBlue !== newProps.useMetallnessFromMetallicTextureBlue) {
            updates.push({
                propertyName: 'useMetallnessFromMetallicTextureBlue',
                value: newProps.useMetallnessFromMetallicTextureBlue,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useMicroSurfaceFromReflectivityMapAlpha of type 'boolean':
        if (oldProps.useMicroSurfaceFromReflectivityMapAlpha !== newProps.useMicroSurfaceFromReflectivityMapAlpha) {
            updates.push({
                propertyName: 'useMicroSurfaceFromReflectivityMapAlpha',
                value: newProps.useMicroSurfaceFromReflectivityMapAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useObjectSpaceNormalMap of type 'boolean':
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useParallax of type 'boolean':
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useParallaxOcclusion of type 'boolean':
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.usePhysicalLightFalloff of type 'boolean':
        if (oldProps.usePhysicalLightFalloff !== newProps.usePhysicalLightFalloff) {
            updates.push({
                propertyName: 'usePhysicalLightFalloff',
                value: newProps.usePhysicalLightFalloff,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useRadianceOcclusion of type 'boolean':
        if (oldProps.useRadianceOcclusion !== newProps.useRadianceOcclusion) {
            updates.push({
                propertyName: 'useRadianceOcclusion',
                value: newProps.useRadianceOcclusion,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useRadianceOverAlpha of type 'boolean':
        if (oldProps.useRadianceOverAlpha !== newProps.useRadianceOverAlpha) {
            updates.push({
                propertyName: 'useRadianceOverAlpha',
                value: newProps.useRadianceOverAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useRoughnessFromMetallicTextureAlpha of type 'boolean':
        if (oldProps.useRoughnessFromMetallicTextureAlpha !== newProps.useRoughnessFromMetallicTextureAlpha) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureAlpha',
                value: newProps.useRoughnessFromMetallicTextureAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useRoughnessFromMetallicTextureGreen of type 'boolean':
        if (oldProps.useRoughnessFromMetallicTextureGreen !== newProps.useRoughnessFromMetallicTextureGreen) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureGreen',
                value: newProps.useRoughnessFromMetallicTextureGreen,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePBRMaterial.useSpecularOverAlpha of type 'boolean':
        if (oldProps.useSpecularOverAlpha !== newProps.useSpecularOverAlpha) {
            updates.push({
                propertyName: 'useSpecularOverAlpha',
                value: newProps.useSpecularOverAlpha,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberPBRMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRMaterial"
    };
}

export class FiberLightPropsHandler implements PropsHandler<BabylonjsCoreLight, FiberLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreLight, oldProps: FiberLightProps, newProps: FiberLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreLight.diffuse.
        // TODO: type: BabylonjsCoreAbstractMesh[] property (not coded) xxx-ns-xxx.BabylonjsCoreLight.excludedMeshes.
        // xxx-ns-xxx.BabylonjsCoreLight.excludeWithLayerMask of type 'number':
        if (oldProps.excludeWithLayerMask !== newProps.excludeWithLayerMask) {
            updates.push({
                propertyName: 'excludeWithLayerMask',
                value: newProps.excludeWithLayerMask,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.falloffType of type 'number':
        if (oldProps.falloffType !== newProps.falloffType) {
            updates.push({
                propertyName: 'falloffType',
                value: newProps.falloffType,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreAbstractMesh[] property (not coded) xxx-ns-xxx.BabylonjsCoreLight.includedOnlyMeshes.
        // xxx-ns-xxx.BabylonjsCoreLight.includeOnlyWithLayerMask of type 'number':
        if (oldProps.includeOnlyWithLayerMask !== newProps.includeOnlyWithLayerMask) {
            updates.push({
                propertyName: 'includeOnlyWithLayerMask',
                value: newProps.includeOnlyWithLayerMask,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.intensity of type 'number':
        if (oldProps.intensity !== newProps.intensity) {
            updates.push({
                propertyName: 'intensity',
                value: newProps.intensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.intensityMode of type 'number':
        if (oldProps.intensityMode !== newProps.intensityMode) {
            updates.push({
                propertyName: 'intensityMode',
                value: newProps.intensityMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.lightmapMode of type 'number':
        if (oldProps.lightmapMode !== newProps.lightmapMode) {
            updates.push({
                propertyName: 'lightmapMode',
                value: newProps.lightmapMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.radius of type 'number':
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.range of type 'number':
        if (oldProps.range !== newProps.range) {
            updates.push({
                propertyName: 'range',
                value: newProps.range,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.renderPriority of type 'number':
        if (oldProps.renderPriority !== newProps.renderPriority) {
            updates.push({
                propertyName: 'renderPriority',
                value: newProps.renderPriority,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreLight.shadowEnabled of type 'boolean':
        if (oldProps.shadowEnabled !== newProps.shadowEnabled) {
            updates.push({
                propertyName: 'shadowEnabled',
                value: newProps.shadowEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreLight.specular.
        // xxxx-ns-xxxx.BabylonjsCoreLight.setEnabled of type '(value?: boolean)':
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
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 * 
 * This code has been generated
 */
export class FiberLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Light",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberLight"
    };
}

export class FiberShadowLightPropsHandler implements PropsHandler<BabylonjsCoreShadowLight, FiberShadowLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowLight, oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: (viewMatrix: BabylonjsCoreMatrix, renderList: BabylonjsCoreAbstractMesh[], result: BabylonjsCoreMatrix) => void property (not coded) xxx-ns-xxx.BabylonjsCoreShadowLight.customProjectionMatrixBuilder.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreShadowLight.direction.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreShadowLight.position.
        // xxx-ns-xxx.BabylonjsCoreShadowLight.shadowMaxZ of type 'number':
        if (oldProps.shadowMaxZ !== newProps.shadowMaxZ) {
            updates.push({
                propertyName: 'shadowMaxZ',
                value: newProps.shadowMaxZ,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowLight.shadowMinZ of type 'number':
        if (oldProps.shadowMinZ !== newProps.shadowMinZ) {
            updates.push({
                propertyName: 'shadowMinZ',
                value: newProps.shadowMinZ,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreShadowLight.transformedDirection.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreShadowLight.transformedPosition.
        // xxxx-ns-xxxx.BabylonjsCoreShadowLight.setDirectionToTarget of type '(target?: BabylonjsCoreVector3)':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BabylonjsCoreVector3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShadowLight.setShadowProjectionMatrix of type '(matrix?: BabylonjsCoreMatrix, viewMatrix?: BabylonjsCoreMatrix, renderList?: BabylonjsCoreAbstractMesh[])':
        if (oldProps.setShadowProjectionMatrix !== newProps.setShadowProjectionMatrix) {
            updates.push({
                propertyName: 'setShadowProjectionMatrix',
                value: newProps.setShadowProjectionMatrix,
                type: '(matrix?: BabylonjsCoreMatrix, viewMatrix?: BabylonjsCoreMatrix, renderList?: BabylonjsCoreAbstractMesh[])'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 * 
 * This code has been generated
 */
export class FiberShadowLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberShadowLight",
        "isShadowLight": true
    };
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<BabylonjsCoreDirectionalLight, FiberDirectionalLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDirectionalLight, oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreDirectionalLight.autoUpdateExtends of type 'boolean':
        if (oldProps.autoUpdateExtends !== newProps.autoUpdateExtends) {
            updates.push({
                propertyName: 'autoUpdateExtends',
                value: newProps.autoUpdateExtends,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreDirectionalLight.shadowFrustumSize of type 'number':
        if (oldProps.shadowFrustumSize !== newProps.shadowFrustumSize) {
            updates.push({
                propertyName: 'shadowFrustumSize',
                value: newProps.shadowFrustumSize,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreDirectionalLight.shadowOrthoScale of type 'number':
        if (oldProps.shadowOrthoScale !== newProps.shadowOrthoScale) {
            updates.push({
                propertyName: 'shadowOrthoScale',
                value: newProps.shadowOrthoScale,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberDirectionalLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDirectionalLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DirectionalLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberDirectionalLight",
        "isShadowLight": true
    };
}

export class FiberPointLightPropsHandler implements PropsHandler<BabylonjsCorePointLight, FiberPointLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePointLight, oldProps: FiberPointLightProps, newProps: FiberPointLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCorePointLight.direction.
        // xxx-ns-xxx.BabylonjsCorePointLight.shadowAngle of type 'number':
        if (oldProps.shadowAngle !== newProps.shadowAngle) {
            updates.push({
                propertyName: 'shadowAngle',
                value: newProps.shadowAngle,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberPointLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPointLight",
        "isShadowLight": true
    };
}

export class FiberSpotLightPropsHandler implements PropsHandler<BabylonjsCoreSpotLight, FiberSpotLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreSpotLight, oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreSpotLight.angle of type 'number':
        if (oldProps.angle !== newProps.angle) {
            updates.push({
                propertyName: 'angle',
                value: newProps.angle,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreSpotLight.exponent of type 'number':
        if (oldProps.exponent !== newProps.exponent) {
            updates.push({
                propertyName: 'exponent',
                value: newProps.exponent,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreSpotLight.innerAngle of type 'number':
        if (oldProps.innerAngle !== newProps.innerAngle) {
            updates.push({
                propertyName: 'innerAngle',
                value: newProps.innerAngle,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreSpotLight.projectionTexture.
        // xxx-ns-xxx.BabylonjsCoreSpotLight.projectionTextureLightFar of type 'number':
        if (oldProps.projectionTextureLightFar !== newProps.projectionTextureLightFar) {
            updates.push({
                propertyName: 'projectionTextureLightFar',
                value: newProps.projectionTextureLightFar,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreSpotLight.projectionTextureLightNear of type 'number':
        if (oldProps.projectionTextureLightNear !== newProps.projectionTextureLightNear) {
            updates.push({
                propertyName: 'projectionTextureLightNear',
                value: newProps.projectionTextureLightNear,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreSpotLight.projectionTextureUpDirection.
        // xxx-ns-xxx.BabylonjsCoreSpotLight.shadowAngleScale of type 'number':
        if (oldProps.shadowAngleScale !== newProps.shadowAngleScale) {
            updates.push({
                propertyName: 'shadowAngleScale',
                value: newProps.shadowAngleScale,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberSpotLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpotLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpotLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberSpotLight",
        "isShadowLight": true
    };
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<BabylonjsCoreHemisphericLight, FiberHemisphericLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHemisphericLight, oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreHemisphericLight.direction.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreHemisphericLight.groundColor.
        // xxxx-ns-xxxx.BabylonjsCoreHemisphericLight.setDirectionToTarget of type '(target?: BabylonjsCoreVector3)':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BabylonjsCoreVector3)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 * 
 * This code has been generated
 */
export class FiberHemisphericLight implements HasPropsHandlers<BabylonjsCoreLight, FiberLightProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreLight, FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHemisphericLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreLight, FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreLight, FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HemisphericLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberHemisphericLight"
    };
}

export class FiberBaseTexturePropsHandler implements PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBaseTexture, oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreAnimation[] property (not coded) xxx-ns-xxx.BabylonjsCoreBaseTexture.animations.
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.anisotropicFilteringLevel of type 'number':
        if (oldProps.anisotropicFilteringLevel !== newProps.anisotropicFilteringLevel) {
            updates.push({
                propertyName: 'anisotropicFilteringLevel',
                value: newProps.anisotropicFilteringLevel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.coordinatesIndex of type 'number':
        if (oldProps.coordinatesIndex !== newProps.coordinatesIndex) {
            updates.push({
                propertyName: 'coordinatesIndex',
                value: newProps.coordinatesIndex,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.delayLoadState of type 'number':
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.gammaSpace of type 'boolean':
        if (oldProps.gammaSpace !== newProps.gammaSpace) {
            updates.push({
                propertyName: 'gammaSpace',
                value: newProps.gammaSpace,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.getAlphaFromRGB of type 'boolean':
        if (oldProps.getAlphaFromRGB !== newProps.getAlphaFromRGB) {
            updates.push({
                propertyName: 'getAlphaFromRGB',
                value: newProps.getAlphaFromRGB,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.hasAlpha of type 'boolean':
        if (oldProps.hasAlpha !== newProps.hasAlpha) {
            updates.push({
                propertyName: 'hasAlpha',
                value: newProps.hasAlpha,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.invertZ of type 'boolean':
        if (oldProps.invertZ !== newProps.invertZ) {
            updates.push({
                propertyName: 'invertZ',
                value: newProps.invertZ,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.is3D of type 'boolean':
        if (oldProps.is3D !== newProps.is3D) {
            updates.push({
                propertyName: 'is3D',
                value: newProps.is3D,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.isRenderTarget of type 'boolean':
        if (oldProps.isRenderTarget !== newProps.isRenderTarget) {
            updates.push({
                propertyName: 'isRenderTarget',
                value: newProps.isRenderTarget,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.level of type 'number':
        if (oldProps.level !== newProps.level) {
            updates.push({
                propertyName: 'level',
                value: newProps.level,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.lodGenerationOffset of type 'number':
        if (oldProps.lodGenerationOffset !== newProps.lodGenerationOffset) {
            updates.push({
                propertyName: 'lodGenerationOffset',
                value: newProps.lodGenerationOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.lodGenerationScale of type 'number':
        if (oldProps.lodGenerationScale !== newProps.lodGenerationScale) {
            updates.push({
                propertyName: 'lodGenerationScale',
                value: newProps.lodGenerationScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.lodLevelInAlpha of type 'boolean':
        if (oldProps.lodLevelInAlpha !== newProps.lodLevelInAlpha) {
            updates.push({
                propertyName: 'lodLevelInAlpha',
                value: newProps.lodLevelInAlpha,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreBaseTexture.metadata.
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.name of type 'string':
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreBaseTexture.reservedDataStore.
        // TODO: type: BabylonjsCoreSphericalPolynomial property (not coded) xxx-ns-xxx.BabylonjsCoreBaseTexture.sphericalPolynomial.
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.uniqueId of type 'number':
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.wrapR of type 'number':
        if (oldProps.wrapR !== newProps.wrapR) {
            updates.push({
                propertyName: 'wrapR',
                value: newProps.wrapR,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.wrapU of type 'number':
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreBaseTexture.wrapV of type 'number':
        if (oldProps.wrapV !== newProps.wrapV) {
            updates.push({
                propertyName: 'wrapV',
                value: newProps.wrapV,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 * 
 * This code has been generated
 */
export class FiberBaseTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberBaseTexture"
    };
}

export class FiberCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreCubeTexture, FiberCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCubeTexture, oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreCubeTexture.boundingBoxPosition.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreCubeTexture.boundingBoxSize.
        // xxx-ns-xxx.BabylonjsCoreCubeTexture.rotationY of type 'number':
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCubeTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreCubeTexture.setReflectionTextureMatrix of type '(value?: BabylonjsCoreMatrix)':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BabylonjsCoreMatrix)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class for creating a cube texture
 * 
 * This code has been generated
 */
export class FiberCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "rootUrl",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberRawCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreRawCubeTexture, FiberRawCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawCubeTexture, oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Raw cube texture where the raw buffers are passed in
 * 
 * This code has been generated
 */
export class FiberRawCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawCubeTexturePropsHandler(),
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberTexturePropsHandler implements PropsHandler<BabylonjsCoreTexture, FiberTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTexture, oldProps: FiberTextureProps, newProps: FiberTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreIInspectable[] property (not coded) xxx-ns-xxx.BabylonjsCoreTexture.inspectableCustomProperties.
        // xxx-ns-xxx.BabylonjsCoreTexture.isBlocking of type 'boolean':
        if (oldProps.isBlocking !== newProps.isBlocking) {
            updates.push({
                propertyName: 'isBlocking',
                value: newProps.isBlocking,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.onLoadObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTexture>/fn':
        if (oldProps.onLoadObservable === undefined && oldProps.onLoadObservable !== newProps.onLoadObservable) {
            updates.push({
                propertyName: 'onLoadObservable',
                value: newProps.onLoadObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.uAng of type 'number':
        if (oldProps.uAng !== newProps.uAng) {
            updates.push({
                propertyName: 'uAng',
                value: newProps.uAng,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.uOffset of type 'number':
        if (oldProps.uOffset !== newProps.uOffset) {
            updates.push({
                propertyName: 'uOffset',
                value: newProps.uOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.uRotationCenter of type 'number':
        if (oldProps.uRotationCenter !== newProps.uRotationCenter) {
            updates.push({
                propertyName: 'uRotationCenter',
                value: newProps.uRotationCenter,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.uScale of type 'number':
        if (oldProps.uScale !== newProps.uScale) {
            updates.push({
                propertyName: 'uScale',
                value: newProps.uScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.vAng of type 'number':
        if (oldProps.vAng !== newProps.vAng) {
            updates.push({
                propertyName: 'vAng',
                value: newProps.vAng,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.vOffset of type 'number':
        if (oldProps.vOffset !== newProps.vOffset) {
            updates.push({
                propertyName: 'vOffset',
                value: newProps.vOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.vRotationCenter of type 'number':
        if (oldProps.vRotationCenter !== newProps.vRotationCenter) {
            updates.push({
                propertyName: 'vRotationCenter',
                value: newProps.vRotationCenter,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.vScale of type 'number':
        if (oldProps.vScale !== newProps.vScale) {
            updates.push({
                propertyName: 'vScale',
                value: newProps.vScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.wAng of type 'number':
        if (oldProps.wAng !== newProps.wAng) {
            updates.push({
                propertyName: 'wAng',
                value: newProps.wAng,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreTexture.wRotationCenter of type 'number':
        if (oldProps.wRotationCenter !== newProps.wRotationCenter) {
            updates.push({
                propertyName: 'wRotationCenter',
                value: newProps.wRotationCenter,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 * 
 * This code has been generated
 */
export class FiberTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Texture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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
                "type": "string | ArrayBuffer | HTMLImageElement | Blob",
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

export class FiberRawTexturePropsHandler implements PropsHandler<BabylonjsCoreRawTexture, FiberRawTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture, oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreRawTexture.format of type 'number':
        if (oldProps.format !== newProps.format) {
            updates.push({
                propertyName: 'format',
                value: newProps.format,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 * 
 * This code has been generated
 */
export class FiberRawTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreProceduralTexture, FiberProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreProceduralTexture, oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.autoClear of type 'boolean':
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.isEnabled of type 'boolean':
        if (oldProps.isEnabled !== newProps.isEnabled) {
            updates.push({
                propertyName: 'isEnabled',
                value: newProps.isEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.onGenerated of type '() => void/fn':
        if (oldProps.onGenerated === undefined && oldProps.onGenerated !== newProps.onGenerated) {
            updates.push({
                propertyName: 'onGenerated',
                value: newProps.onGenerated,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.onGeneratedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreProceduralTexture>/fn':
        if (oldProps.onGeneratedObservable === undefined && oldProps.onGeneratedObservable !== newProps.onGeneratedObservable) {
            updates.push({
                propertyName: 'onGeneratedObservable',
                value: newProps.onGeneratedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreProceduralTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreProceduralTexture.refreshRate of type 'number':
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setColor3 of type '(name?: string, value?: BabylonjsCoreColor3)':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BabylonjsCoreColor3)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setColor4 of type '(name?: string, value?: BabylonjsCoreColor4)':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BabylonjsCoreColor4)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setFloat of type '(name?: string, value?: number)':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setFloats of type '(name?: string, value?: number[])':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[])'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setFragment of type '(fragment?: any)':
        if (oldProps.setFragment !== newProps.setFragment) {
            updates.push({
                propertyName: 'setFragment',
                value: newProps.setFragment,
                type: '(fragment?: any)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setInt of type '(name?: string, value?: number)':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setMatrix of type '(name?: string, value?: BabylonjsCoreMatrix)':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BabylonjsCoreMatrix)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setTexture of type '(name?: string, texture?: BabylonjsCoreTexture)':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BabylonjsCoreTexture)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setVector2 of type '(name?: string, value?: BabylonjsCoreVector2)':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BabylonjsCoreVector2)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreProceduralTexture.setVector3 of type '(name?: string, value?: BabylonjsCoreVector3)':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BabylonjsCoreVector3)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 * 
 * This code has been generated
 */
export class FiberProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
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

export class FiberCustomProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreCustomProceduralTexture, FiberCustomProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCustomProceduralTexture, oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreCustomProceduralTexture.animate of type 'boolean':
        if (oldProps.animate !== newProps.animate) {
            updates.push({
                propertyName: 'animate',
                value: newProps.animate,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 * 
 * This code has been generated
 */
export class FiberCustomProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCustomProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CustomProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
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

export class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<BabylonjsCoreNoiseProceduralTexture, FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNoiseProceduralTexture, oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreNoiseProceduralTexture.animationSpeedFactor of type 'number':
        if (oldProps.animationSpeedFactor !== newProps.animationSpeedFactor) {
            updates.push({
                propertyName: 'animationSpeedFactor',
                value: newProps.animationSpeedFactor,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNoiseProceduralTexture.brightness of type 'number':
        if (oldProps.brightness !== newProps.brightness) {
            updates.push({
                propertyName: 'brightness',
                value: newProps.brightness,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNoiseProceduralTexture.octaves of type 'number':
        if (oldProps.octaves !== newProps.octaves) {
            updates.push({
                propertyName: 'octaves',
                value: newProps.octaves,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNoiseProceduralTexture.persistence of type 'number':
        if (oldProps.persistence !== newProps.persistence) {
            updates.push({
                propertyName: 'persistence',
                value: newProps.persistence,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to generate noise procedural textures
 * 
 * This code has been generated
 */
export class FiberNoiseProceduralTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNoiseProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NoiseProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
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

export class FiberRenderTargetTexturePropsHandler implements PropsHandler<BabylonjsCoreRenderTargetTexture, FiberRenderTargetTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRenderTargetTexture, oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreCamera property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.activeCamera.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.boundingBoxPosition.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.boundingBoxSize.
        // TODO: type: BabylonjsCoreColor4 property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.clearColor.
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // TODO: type: (opaqueSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, alphaTestSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, transparentSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, depthOnlySubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, beforeTransparents?: () => void) => void property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.customRenderFunction.
        // TODO: type: BabylonjsCoreInternalTexture property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.depthStencilTexture.
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.ignoreCameraViewport of type 'boolean':
        if (oldProps.ignoreCameraViewport !== newProps.ignoreCameraViewport) {
            updates.push({
                propertyName: 'ignoreCameraViewport',
                value: newProps.ignoreCameraViewport,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.isCube of type 'boolean':
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onAfterRender of type '(faceIndex: number) => void/fn':
        if (oldProps.onAfterRender === undefined && oldProps.onAfterRender !== newProps.onAfterRender) {
            updates.push({
                propertyName: 'onAfterRender',
                value: newProps.onAfterRender,
                type: '(faceIndex: number) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onAfterRenderObservable of type 'BabylonjsCoreObservable<number>/fn':
        if (oldProps.onAfterRenderObservable === undefined && oldProps.onAfterRenderObservable !== newProps.onAfterRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderObservable',
                value: newProps.onAfterRenderObservable,
                type: 'BabylonjsCoreObservable<number>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onAfterUnbind of type '() => void/fn':
        if (oldProps.onAfterUnbind === undefined && oldProps.onAfterUnbind !== newProps.onAfterUnbind) {
            updates.push({
                propertyName: 'onAfterUnbind',
                value: newProps.onAfterUnbind,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onAfterUnbindObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>/fn':
        if (oldProps.onAfterUnbindObservable === undefined && oldProps.onAfterUnbindObservable !== newProps.onAfterUnbindObservable) {
            updates.push({
                propertyName: 'onAfterUnbindObservable',
                value: newProps.onAfterUnbindObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onBeforeBindObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>/fn':
        if (oldProps.onBeforeBindObservable === undefined && oldProps.onBeforeBindObservable !== newProps.onBeforeBindObservable) {
            updates.push({
                propertyName: 'onBeforeBindObservable',
                value: newProps.onBeforeBindObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onBeforeRender of type '(faceIndex: number) => void/fn':
        if (oldProps.onBeforeRender === undefined && oldProps.onBeforeRender !== newProps.onBeforeRender) {
            updates.push({
                propertyName: 'onBeforeRender',
                value: newProps.onBeforeRender,
                type: '(faceIndex: number) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onBeforeRenderObservable of type 'BabylonjsCoreObservable<number>/fn':
        if (oldProps.onBeforeRenderObservable === undefined && oldProps.onBeforeRenderObservable !== newProps.onBeforeRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderObservable',
                value: newProps.onBeforeRenderObservable,
                type: 'BabylonjsCoreObservable<number>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onClear of type '(Engine: BabylonjsCoreEngine) => void/fn':
        if (oldProps.onClear === undefined && oldProps.onClear !== newProps.onClear) {
            updates.push({
                propertyName: 'onClear',
                value: newProps.onClear,
                type: '(Engine: BabylonjsCoreEngine) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onClearObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEngine>/fn':
        if (oldProps.onClearObservable === undefined && oldProps.onClearObservable !== newProps.onClearObservable) {
            updates.push({
                propertyName: 'onClearObservable',
                value: newProps.onClearObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEngine>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.refreshRate of type 'number':
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreAbstractMesh[] property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.renderList.
        // TODO: type: (AbstractMesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.renderListPredicate.
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.renderParticles of type 'boolean':
        if (oldProps.renderParticles !== newProps.renderParticles) {
            updates.push({
                propertyName: 'renderParticles',
                value: newProps.renderParticles,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.renderSprites of type 'boolean':
        if (oldProps.renderSprites !== newProps.renderSprites) {
            updates.push({
                propertyName: 'renderSprites',
                value: newProps.renderSprites,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.renderToTarget.
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.samples of type 'number':
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.useCameraPostProcesses of type 'boolean':
        if (oldProps.useCameraPostProcesses !== newProps.useCameraPostProcesses) {
            updates.push({
                propertyName: 'useCameraPostProcesses',
                value: newProps.useCameraPostProcesses,
                type: 'boolean'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreRenderTargetTexture.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean)':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreRenderTargetTexture.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 * 
 * This code has been generated
 */
export class FiberRenderTargetTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RenderTargetTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberMirrorTexturePropsHandler implements PropsHandler<BabylonjsCoreMirrorTexture, FiberMirrorTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMirrorTexture, oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreMirrorTexture.adaptiveBlurKernel of type 'number':
        if (oldProps.adaptiveBlurKernel !== newProps.adaptiveBlurKernel) {
            updates.push({
                propertyName: 'adaptiveBlurKernel',
                value: newProps.adaptiveBlurKernel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMirrorTexture.blurKernel of type 'number':
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMirrorTexture.blurKernelX of type 'number':
        if (oldProps.blurKernelX !== newProps.blurKernelX) {
            updates.push({
                propertyName: 'blurKernelX',
                value: newProps.blurKernelX,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMirrorTexture.blurKernelY of type 'number':
        if (oldProps.blurKernelY !== newProps.blurKernelY) {
            updates.push({
                propertyName: 'blurKernelY',
                value: newProps.blurKernelY,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMirrorTexture.blurRatio of type 'number':
        if (oldProps.blurRatio !== newProps.blurRatio) {
            updates.push({
                propertyName: 'blurRatio',
                value: newProps.blurRatio,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreMirrorTexture.mirrorPlane.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreMirrorTexture.scene.
        return updates.length === 0 ? null : updates;
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
export class FiberMirrorTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMirrorTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MirrorTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberMultiRenderTargetPropsHandler implements PropsHandler<BabylonjsCoreMultiRenderTarget, FiberMultiRenderTargetProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiRenderTarget, oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreMultiRenderTarget.samples of type 'number':
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMultiRenderTarget.wrapU of type 'number':
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreMultiRenderTarget.wrapV of type 'number':
        if (oldProps.wrapV !== newProps.wrapV) {
            updates.push({
                propertyName: 'wrapV',
                value: newProps.wrapV,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberMultiRenderTarget implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiRenderTarget",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "options",
                "type": "BabylonjsCoreIMultiRenderTargetOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMultiRenderTarget"
    };
}

export class FiberRefractionTexturePropsHandler implements PropsHandler<BabylonjsCoreRefractionTexture, FiberRefractionTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRefractionTexture, oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreRefractionTexture.depth of type 'number':
        if (oldProps.depth !== newProps.depth) {
            updates.push({
                propertyName: 'depth',
                value: newProps.depth,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreRefractionTexture.refractionPlane.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 * 
 * This code has been generated
 */
export class FiberRefractionTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRefractionTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RefractionTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberMultiviewRenderTargetPropsHandler implements PropsHandler<BabylonjsCoreMultiviewRenderTarget, FiberMultiviewRenderTargetProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiviewRenderTarget, oldProps: FiberMultiviewRenderTargetProps, newProps: FiberMultiviewRenderTargetProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Renders to multiple views with a single draw call
 * 
 * This code has been generated
 */
export class FiberMultiviewRenderTarget implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiviewRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiviewRenderTarget",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; } | { ratio: number; }",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMultiviewRenderTarget"
    };
}

export class FiberVideoTexturePropsHandler implements PropsHandler<BabylonjsCoreVideoTexture, FiberVideoTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVideoTexture, oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreVideoTexture.reset.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 * 
 * This code has been generated
 */
export class FiberVideoTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVideoTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VideoTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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
                "type": "BabylonjsCoreVideoTextureSettings",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberVideoTexture"
    };
}

export class FiberDynamicTexturePropsHandler implements PropsHandler<BabylonjsCoreDynamicTexture, FiberDynamicTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDynamicTexture, oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A class extending Texture allowing drawing on a texture
 * 
 * This code has been generated
 */
export class FiberDynamicTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberRawTexture3DPropsHandler implements PropsHandler<BabylonjsCoreRawTexture3D, FiberRawTexture3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture3D, oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreRawTexture3D.format of type 'number':
        if (oldProps.format !== newProps.format) {
            updates.push({
                propertyName: 'format',
                value: newProps.format,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to store 3D textures containing user data
 * 
 * This code has been generated
 */
export class FiberRawTexture3D implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture3DPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture3D",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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

export class FiberColorGradingTexturePropsHandler implements PropsHandler<BabylonjsCoreColorGradingTexture, FiberColorGradingTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreColorGradingTexture, oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreColorGradingTexture.load3dlTexture.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreColorGradingTexture.loadTexture.
        // xxx-ns-xxx.BabylonjsCoreColorGradingTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberColorGradingTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorGradingTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorGradingTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberColorGradingTexture"
    };
}

export class FiberEquiRectangularCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreEquiRectangularCubeTexture, FiberEquiRectangularCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreEquiRectangularCubeTexture, oldProps: FiberEquiRectangularCubeTextureProps, newProps: FiberEquiRectangularCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreEquiRectangularCubeTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreEquiRectangularCubeTexture.getFloat32ArrayFromArrayBuffer.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreEquiRectangularCubeTexture.loadImage.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreEquiRectangularCubeTexture.loadTexture.
        // xxx-ns-xxx.BabylonjsCoreEquiRectangularCubeTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 * 
 * This code has been generated
 */
export class FiberEquiRectangularCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEquiRectangularCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EquiRectangularCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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
                "name": "gammaSpace",
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
        "className": "FiberEquiRectangularCubeTexture"
    };
}

export class FiberHDRCubeTexturePropsHandler implements PropsHandler<BabylonjsCoreHDRCubeTexture, FiberHDRCubeTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHDRCubeTexture, oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.boundingBoxPosition.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.boundingBoxSize.
        // xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.coordinatesMode of type 'number':
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.isBlocking of type 'boolean':
        if (oldProps.isBlocking !== newProps.isBlocking) {
            updates.push({
                propertyName: 'isBlocking',
                value: newProps.isBlocking,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.loadTexture.
        // xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.rotationY of type 'number':
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreHDRCubeTexture.url of type 'string':
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreHDRCubeTexture.setReflectionTextureMatrix of type '(value?: BabylonjsCoreMatrix)':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BabylonjsCoreMatrix)'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberHDRCubeTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHDRCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HDRCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
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

export class FiberHtmlElementTexturePropsHandler implements PropsHandler<BabylonjsCoreHtmlElementTexture, FiberHtmlElementTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHtmlElementTexture, oldProps: FiberHtmlElementTextureProps, newProps: FiberHtmlElementTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: HTMLVideoElement | HTMLCanvasElement property (not coded) xxx-ns-xxx.BabylonjsCoreHtmlElementTexture.element.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents the smallest workload to use an already existing element (Canvas or Video) as a texture.
 * To be as efficient as possible depending on your constraints nothing aside the first upload
 * is automatically managed.
 * It is a cheap VideoTexture or DynamicTexture if you prefer to keep full control of the elements
 * in your application.
 * 
 * As the update is not automatic, you need to call them manually.
 * 
 * This code has been generated
 */
export class FiberHtmlElementTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHtmlElementTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HtmlElementTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "element",
                "type": "HTMLVideoElement | HTMLCanvasElement",
                "optional": false
            },
            {
                "name": "options",
                "type": "BabylonjsCoreIHtmlElementTextureOptions",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberHtmlElementTexture"
    };
}

export class FiberShadowGeneratorPropsHandler implements PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowGenerator, oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.bias of type 'number':
        if (oldProps.bias !== newProps.bias) {
            updates.push({
                propertyName: 'bias',
                value: newProps.bias,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.blurBoxOffset of type 'number':
        if (oldProps.blurBoxOffset !== newProps.blurBoxOffset) {
            updates.push({
                propertyName: 'blurBoxOffset',
                value: newProps.blurBoxOffset,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.blurKernel of type 'number':
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.blurScale of type 'number':
        if (oldProps.blurScale !== newProps.blurScale) {
            updates.push({
                propertyName: 'blurScale',
                value: newProps.blurScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.contactHardeningLightSizeUVRatio of type 'number':
        if (oldProps.contactHardeningLightSizeUVRatio !== newProps.contactHardeningLightSizeUVRatio) {
            updates.push({
                propertyName: 'contactHardeningLightSizeUVRatio',
                value: newProps.contactHardeningLightSizeUVRatio,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCoreICustomShaderOptions property (not coded) xxx-ns-xxx.BabylonjsCoreShadowGenerator.customShaderOptions.
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.depthScale of type 'number':
        if (oldProps.depthScale !== newProps.depthScale) {
            updates.push({
                propertyName: 'depthScale',
                value: newProps.depthScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.filter of type 'number':
        if (oldProps.filter !== newProps.filter) {
            updates.push({
                propertyName: 'filter',
                value: newProps.filter,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.filteringQuality of type 'number':
        if (oldProps.filteringQuality !== newProps.filteringQuality) {
            updates.push({
                propertyName: 'filteringQuality',
                value: newProps.filteringQuality,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.forceBackFacesOnly of type 'boolean':
        if (oldProps.forceBackFacesOnly !== newProps.forceBackFacesOnly) {
            updates.push({
                propertyName: 'forceBackFacesOnly',
                value: newProps.forceBackFacesOnly,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.frustumEdgeFalloff of type 'number':
        if (oldProps.frustumEdgeFalloff !== newProps.frustumEdgeFalloff) {
            updates.push({
                propertyName: 'frustumEdgeFalloff',
                value: newProps.frustumEdgeFalloff,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.normalBias of type 'number':
        if (oldProps.normalBias !== newProps.normalBias) {
            updates.push({
                propertyName: 'normalBias',
                value: newProps.normalBias,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.onBeforeShadowMapRenderMeshObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMesh>/fn':
        if (oldProps.onBeforeShadowMapRenderMeshObservable === undefined && oldProps.onBeforeShadowMapRenderMeshObservable !== newProps.onBeforeShadowMapRenderMeshObservable) {
            updates.push({
                propertyName: 'onBeforeShadowMapRenderMeshObservable',
                value: newProps.onBeforeShadowMapRenderMeshObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.onBeforeShadowMapRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffect>/fn':
        if (oldProps.onBeforeShadowMapRenderObservable === undefined && oldProps.onBeforeShadowMapRenderObservable !== newProps.onBeforeShadowMapRenderObservable) {
            updates.push({
                propertyName: 'onBeforeShadowMapRenderObservable',
                value: newProps.onBeforeShadowMapRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffect>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useBlurCloseExponentialShadowMap of type 'boolean':
        if (oldProps.useBlurCloseExponentialShadowMap !== newProps.useBlurCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurCloseExponentialShadowMap',
                value: newProps.useBlurCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useBlurExponentialShadowMap of type 'boolean':
        if (oldProps.useBlurExponentialShadowMap !== newProps.useBlurExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurExponentialShadowMap',
                value: newProps.useBlurExponentialShadowMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useCloseExponentialShadowMap of type 'boolean':
        if (oldProps.useCloseExponentialShadowMap !== newProps.useCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useCloseExponentialShadowMap',
                value: newProps.useCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useContactHardeningShadow of type 'boolean':
        if (oldProps.useContactHardeningShadow !== newProps.useContactHardeningShadow) {
            updates.push({
                propertyName: 'useContactHardeningShadow',
                value: newProps.useContactHardeningShadow,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useExponentialShadowMap of type 'boolean':
        if (oldProps.useExponentialShadowMap !== newProps.useExponentialShadowMap) {
            updates.push({
                propertyName: 'useExponentialShadowMap',
                value: newProps.useExponentialShadowMap,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.useKernelBlur of type 'boolean':
        if (oldProps.useKernelBlur !== newProps.useKernelBlur) {
            updates.push({
                propertyName: 'useKernelBlur',
                value: newProps.useKernelBlur,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.usePercentageCloserFiltering of type 'boolean':
        if (oldProps.usePercentageCloserFiltering !== newProps.usePercentageCloserFiltering) {
            updates.push({
                propertyName: 'usePercentageCloserFiltering',
                value: newProps.usePercentageCloserFiltering,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.usePoissonSampling of type 'boolean':
        if (oldProps.usePoissonSampling !== newProps.usePoissonSampling) {
            updates.push({
                propertyName: 'usePoissonSampling',
                value: newProps.usePoissonSampling,
                type: 'boolean'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShadowGenerator.setDarkness of type '(darkness?: number)':
        if (oldProps.setDarkness !== newProps.setDarkness) {
            updates.push({
                propertyName: 'setDarkness',
                value: newProps.setDarkness,
                type: '(darkness?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreShadowGenerator.setTransparencyShadow of type '(transparent?: boolean)':
        if (oldProps.setTransparencyShadow !== newProps.setTransparencyShadow) {
            updates.push({
                propertyName: 'setTransparencyShadow',
                value: newProps.setTransparencyShadow,
                type: '(transparent?: boolean)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 * 
 * This code has been generated
 */
export class FiberShadowGenerator implements HasPropsHandlers<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowGeneratorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowGenerator",
        "namespace": "@babylonjs/core/Lights/Shadows/shadowGenerator",
        "parameters": [
            {
                "name": "mapSize",
                "type": "number",
                "optional": false
            },
            {
                "name": "light",
                "type": "BabylonjsCoreIShadowLight",
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

export class FiberEnvironmentHelperPropsHandler implements PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreEnvironmentHelper, oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsCoreEnvironmentHelper.onErrorObservable of type 'BabylonjsCoreObservable<{ message?: string; exception?: any; }>/fn':
        if (oldProps.onErrorObservable === undefined && oldProps.onErrorObservable !== newProps.onErrorObservable) {
            updates.push({
                propertyName: 'onErrorObservable',
                value: newProps.onErrorObservable,
                type: 'BabylonjsCoreObservable<{ message?: string; exception?: any; }>'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreEnvironmentHelper.setMainColor of type '(color?: BabylonjsCoreColor3)':
        if (oldProps.setMainColor !== newProps.setMainColor) {
            updates.push({
                propertyName: 'setMainColor',
                value: newProps.setMainColor,
                type: '(color?: BabylonjsCoreColor3)'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 * 
 * This code has been generated
 */
export class FiberEnvironmentHelper implements HasPropsHandlers<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEnvironmentHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreEnvironmentHelper, FiberEnvironmentHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EnvironmentHelper",
        "namespace": "@babylonjs/core/Helpers/environmentHelper",
        "parameters": [
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIEnvironmentHelperOptions>",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEnvironment": true,
        "className": "FiberEnvironmentHelper"
    };
}

export class FiberVRExperienceHelperPropsHandler implements PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRExperienceHelper, oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.beforeRender.
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.displayGaze of type 'boolean':
        if (oldProps.displayGaze !== newProps.displayGaze) {
            updates.push({
                propertyName: 'displayGaze',
                value: newProps.displayGaze,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.displayLaserPointer of type 'boolean':
        if (oldProps.displayLaserPointer !== newProps.displayLaserPointer) {
            updates.push({
                propertyName: 'displayLaserPointer',
                value: newProps.displayLaserPointer,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.displayVRButton.
        // TODO: type: BabylonjsCoreMesh property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.gazeTrackerMesh.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.meshSelectionPredicate.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.moveButtonToBottomRight.
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onAfterCameraTeleport of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onAfterCameraTeleport === undefined && oldProps.onAfterCameraTeleport !== newProps.onAfterCameraTeleport) {
            updates.push({
                propertyName: 'onAfterCameraTeleport',
                value: newProps.onAfterCameraTeleport,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onAfterEnteringVRObservable of type 'BabylonjsCoreObservable<BabylonjsCoreOnAfterEnteringVRObservableEvent>/fn':
        if (oldProps.onAfterEnteringVRObservable === undefined && oldProps.onAfterEnteringVRObservable !== newProps.onAfterEnteringVRObservable) {
            updates.push({
                propertyName: 'onAfterEnteringVRObservable',
                value: newProps.onAfterEnteringVRObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreOnAfterEnteringVRObservableEvent>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onBeforeCameraTeleport of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onBeforeCameraTeleport === undefined && oldProps.onBeforeCameraTeleport !== newProps.onBeforeCameraTeleport) {
            updates.push({
                propertyName: 'onBeforeCameraTeleport',
                value: newProps.onBeforeCameraTeleport,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onControllerMeshLoadedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>/fn':
        if (oldProps.onControllerMeshLoadedObservable === undefined && oldProps.onControllerMeshLoadedObservable !== newProps.onControllerMeshLoadedObservable) {
            updates.push({
                propertyName: 'onControllerMeshLoadedObservable',
                value: newProps.onControllerMeshLoadedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onEnteringVRObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>/fn':
        if (oldProps.onEnteringVRObservable === undefined && oldProps.onEnteringVRObservable !== newProps.onEnteringVRObservable) {
            updates.push({
                propertyName: 'onEnteringVRObservable',
                value: newProps.onEnteringVRObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onExitingVRObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>/fn':
        if (oldProps.onExitingVRObservable === undefined && oldProps.onExitingVRObservable !== newProps.onExitingVRObservable) {
            updates.push({
                propertyName: 'onExitingVRObservable',
                value: newProps.onExitingVRObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onNewMeshPicked of type 'BabylonjsCoreObservable<BabylonjsCorePickingInfo>/fn':
        if (oldProps.onNewMeshPicked === undefined && oldProps.onNewMeshPicked !== newProps.onNewMeshPicked) {
            updates.push({
                propertyName: 'onNewMeshPicked',
                value: newProps.onNewMeshPicked,
                type: 'BabylonjsCoreObservable<BabylonjsCorePickingInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onNewMeshSelected of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onNewMeshSelected === undefined && oldProps.onNewMeshSelected !== newProps.onNewMeshSelected) {
            updates.push({
                propertyName: 'onNewMeshSelected',
                value: newProps.onNewMeshSelected,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onSelectedMeshUnselected of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onSelectedMeshUnselected === undefined && oldProps.onSelectedMeshUnselected !== newProps.onSelectedMeshUnselected) {
            updates.push({
                propertyName: 'onSelectedMeshUnselected',
                value: newProps.onSelectedMeshUnselected,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onVRDisplayChanged of type 'any/fn':
        if (oldProps.onVRDisplayChanged === undefined && oldProps.onVRDisplayChanged !== newProps.onVRDisplayChanged) {
            updates.push({
                propertyName: 'onVRDisplayChanged',
                value: newProps.onVRDisplayChanged,
                type: 'any'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onVrDisplayPresentChange of type 'any/fn':
        if (oldProps.onVrDisplayPresentChange === undefined && oldProps.onVrDisplayPresentChange !== newProps.onVrDisplayPresentChange) {
            updates.push({
                propertyName: 'onVrDisplayPresentChange',
                value: newProps.onVrDisplayPresentChange,
                type: 'any'
            });
        }
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.position.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.raySelectionPredicate.
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.requestPointerLockOnFullScreen of type 'boolean':
        if (oldProps.requestPointerLockOnFullScreen !== newProps.requestPointerLockOnFullScreen) {
            updates.push({
                propertyName: 'requestPointerLockOnFullScreen',
                value: newProps.requestPointerLockOnFullScreen,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.teleportationEnabled of type 'boolean':
        if (oldProps.teleportationEnabled !== newProps.teleportationEnabled) {
            updates.push({
                propertyName: 'teleportationEnabled',
                value: newProps.teleportationEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreMesh property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.teleportationTarget.
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.updateButtonVisibility.
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.updateGazeTrackerColor of type 'boolean':
        if (oldProps.updateGazeTrackerColor !== newProps.updateGazeTrackerColor) {
            updates.push({
                propertyName: 'updateGazeTrackerColor',
                value: newProps.updateGazeTrackerColor,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.updateGazeTrackerScale of type 'boolean':
        if (oldProps.updateGazeTrackerScale !== newProps.updateGazeTrackerScale) {
            updates.push({
                propertyName: 'updateGazeTrackerScale',
                value: newProps.updateGazeTrackerScale,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreVRExperienceHelperOptions property (not coded) xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.webVROptions.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Helps to quickly add VR support to an existing scene.
 * See http://doc.babylonjs.com/how_to/webvr_helper
 * 
 * This code has been generated
 */
export class FiberVRExperienceHelper implements HasPropsHandlers<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRExperienceHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRExperienceHelper",
        "namespace": "@babylonjs/core/Cameras/VR/vrExperienceHelper",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BabylonjsCoreVRExperienceHelperOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRExperienceHelper"
    };
}

export class FiberScenePropsHandler implements PropsHandler<BabylonjsCoreScene, FiberSceneProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreScene, oldProps: FiberSceneProps, newProps: FiberSceneProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: BabylonjsCoreAbstractActionManager property (not coded) xxx-ns-xxx.BabylonjsCoreScene.actionManager.
        // TODO: type: BabylonjsCoreCamera property (not coded) xxx-ns-xxx.BabylonjsCoreScene.activeCamera.
        // TODO: type: BabylonjsCoreCamera[] property (not coded) xxx-ns-xxx.BabylonjsCoreScene.activeCameras.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.BabylonjsCoreScene.afterCameraRender.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.BabylonjsCoreScene.afterRender.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreScene.ambientColor.
        // TODO: type: BabylonjsCoreAnimationPropertiesOverride property (not coded) xxx-ns-xxx.BabylonjsCoreScene.animationPropertiesOverride.
        // xxx-ns-xxx.BabylonjsCoreScene.animationsEnabled of type 'boolean':
        if (oldProps.animationsEnabled !== newProps.animationsEnabled) {
            updates.push({
                propertyName: 'animationsEnabled',
                value: newProps.animationsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.animationTimeScale of type 'number':
        if (oldProps.animationTimeScale !== newProps.animationTimeScale) {
            updates.push({
                propertyName: 'animationTimeScale',
                value: newProps.animationTimeScale,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.autoClear of type 'boolean':
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.autoClearDepthAndStencil of type 'boolean':
        if (oldProps.autoClearDepthAndStencil !== newProps.autoClearDepthAndStencil) {
            updates.push({
                propertyName: 'autoClearDepthAndStencil',
                value: newProps.autoClearDepthAndStencil,
                type: 'boolean'
            });
        }
        // TODO: type: () => void property (not coded) xxx-ns-xxx.BabylonjsCoreScene.beforeCameraRender.
        // TODO: type: () => void property (not coded) xxx-ns-xxx.BabylonjsCoreScene.beforeRender.
        // xxx-ns-xxx.BabylonjsCoreScene.blockfreeActiveMeshesAndRenderingGroups of type 'boolean':
        if (oldProps.blockfreeActiveMeshesAndRenderingGroups !== newProps.blockfreeActiveMeshesAndRenderingGroups) {
            updates.push({
                propertyName: 'blockfreeActiveMeshesAndRenderingGroups',
                value: newProps.blockfreeActiveMeshesAndRenderingGroups,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.blockMaterialDirtyMechanism of type 'boolean':
        if (oldProps.blockMaterialDirtyMechanism !== newProps.blockMaterialDirtyMechanism) {
            updates.push({
                propertyName: 'blockMaterialDirtyMechanism',
                value: newProps.blockMaterialDirtyMechanism,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreCamera property (not coded) xxx-ns-xxx.BabylonjsCoreScene.cameraToUseForPointers.
        // TODO: type: BabylonjsCoreColor4 property (not coded) xxx-ns-xxx.BabylonjsCoreScene.clearColor.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreScene.clipPlane.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreScene.clipPlane2.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreScene.clipPlane3.
        // TODO: type: BabylonjsCorePlane property (not coded) xxx-ns-xxx.BabylonjsCoreScene.clipPlane4.
        // xxx-ns-xxx.BabylonjsCoreScene.collisionsEnabled of type 'boolean':
        if (oldProps.collisionsEnabled !== newProps.collisionsEnabled) {
            updates.push({
                propertyName: 'collisionsEnabled',
                value: newProps.collisionsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.constantlyUpdateMeshUnderPointer of type 'boolean':
        if (oldProps.constantlyUpdateMeshUnderPointer !== newProps.constantlyUpdateMeshUnderPointer) {
            updates.push({
                propertyName: 'constantlyUpdateMeshUnderPointer',
                value: newProps.constantlyUpdateMeshUnderPointer,
                type: 'boolean'
            });
        }
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, camera: BabylonjsCoreCamera) => BabylonjsCoreAbstractMesh property (not coded) xxx-ns-xxx.BabylonjsCoreScene.customLODSelector.
        // TODO: type: BabylonjsCoreRenderTargetTexture[] property (not coded) xxx-ns-xxx.BabylonjsCoreScene.customRenderTargets.
        // xxx-ns-xxx.BabylonjsCoreScene.defaultCursor of type 'string':
        if (oldProps.defaultCursor !== newProps.defaultCursor) {
            updates.push({
                propertyName: 'defaultCursor',
                value: newProps.defaultCursor,
                type: 'string'
            });
        }
        // TODO: type: BabylonjsCoreMaterial property (not coded) xxx-ns-xxx.BabylonjsCoreScene.defaultMaterial.
        // TODO: type: RegExp[] property (not coded) xxx-ns-xxx.BabylonjsCoreScene.disableOfflineSupportExceptionRules.
        // xxx-ns-xxx.BabylonjsCoreScene.dispatchAllSubMeshesOfActiveMeshes of type 'boolean':
        if (oldProps.dispatchAllSubMeshesOfActiveMeshes !== newProps.dispatchAllSubMeshesOfActiveMeshes) {
            updates.push({
                propertyName: 'dispatchAllSubMeshesOfActiveMeshes',
                value: newProps.dispatchAllSubMeshesOfActiveMeshes,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.dumpNextRenderTargets of type 'boolean':
        if (oldProps.dumpNextRenderTargets !== newProps.dumpNextRenderTargets) {
            updates.push({
                propertyName: 'dumpNextRenderTargets',
                value: newProps.dumpNextRenderTargets,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreScene.environmentBRDFTexture.
        // TODO: type: BabylonjsCoreBaseTexture property (not coded) xxx-ns-xxx.BabylonjsCoreScene.environmentTexture.
        // TODO: type: BabylonjsCoreColor3 property (not coded) xxx-ns-xxx.BabylonjsCoreScene.fogColor.
        // xxx-ns-xxx.BabylonjsCoreScene.fogDensity of type 'number':
        if (oldProps.fogDensity !== newProps.fogDensity) {
            updates.push({
                propertyName: 'fogDensity',
                value: newProps.fogDensity,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.fogEnabled of type 'boolean':
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.fogEnd of type 'number':
        if (oldProps.fogEnd !== newProps.fogEnd) {
            updates.push({
                propertyName: 'fogEnd',
                value: newProps.fogEnd,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.fogMode of type 'number':
        if (oldProps.fogMode !== newProps.fogMode) {
            updates.push({
                propertyName: 'fogMode',
                value: newProps.fogMode,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.fogStart of type 'number':
        if (oldProps.fogStart !== newProps.fogStart) {
            updates.push({
                propertyName: 'fogStart',
                value: newProps.fogStart,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.forcePointsCloud of type 'boolean':
        if (oldProps.forcePointsCloud !== newProps.forcePointsCloud) {
            updates.push({
                propertyName: 'forcePointsCloud',
                value: newProps.forcePointsCloud,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.forceWireframe of type 'boolean':
        if (oldProps.forceWireframe !== newProps.forceWireframe) {
            updates.push({
                propertyName: 'forceWireframe',
                value: newProps.forceWireframe,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreScene.geometriesByUniqueId.
        // TODO: type: () => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh> property (not coded) xxx-ns-xxx.BabylonjsCoreScene.getActiveMeshCandidates.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.BabylonjsCoreScene.getActiveSubMeshCandidates.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, collider: BabylonjsCoreCollider) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.BabylonjsCoreScene.getCollidingSubMeshCandidates.
        // TODO: type: () => number property (not coded) xxx-ns-xxx.BabylonjsCoreScene.getDeterministicFrameTime.
        // TODO: type: (mesh: BabylonjsCoreAbstractMesh, localRay: BabylonjsCoreRay) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh> property (not coded) xxx-ns-xxx.BabylonjsCoreScene.getIntersectingSubMeshCandidates.
        // TODO: type: BabylonjsCoreVector3 property (not coded) xxx-ns-xxx.BabylonjsCoreScene.gravity.
        // xxx-ns-xxx.BabylonjsCoreScene.hoverCursor of type 'string':
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // TODO: type: String[] property (not coded) xxx-ns-xxx.BabylonjsCoreScene.importedMeshesFiles.
        // xxx-ns-xxx.BabylonjsCoreScene.lensFlaresEnabled of type 'boolean':
        if (oldProps.lensFlaresEnabled !== newProps.lensFlaresEnabled) {
            updates.push({
                propertyName: 'lensFlaresEnabled',
                value: newProps.lensFlaresEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.lightsEnabled of type 'boolean':
        if (oldProps.lightsEnabled !== newProps.lightsEnabled) {
            updates.push({
                propertyName: 'lightsEnabled',
                value: newProps.lightsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.loadingPluginName of type 'string':
        if (oldProps.loadingPluginName !== newProps.loadingPluginName) {
            updates.push({
                propertyName: 'loadingPluginName',
                value: newProps.loadingPluginName,
                type: 'string'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreScene.metadata.
        // TODO: type: BabylonjsCoreIOfflineProvider property (not coded) xxx-ns-xxx.BabylonjsCoreScene.offlineProvider.
        // xxx-ns-xxx.BabylonjsCoreScene.onActiveCameraChanged of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onActiveCameraChanged === undefined && oldProps.onActiveCameraChanged !== newProps.onActiveCameraChanged) {
            updates.push({
                propertyName: 'onActiveCameraChanged',
                value: newProps.onActiveCameraChanged,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterActiveMeshesEvaluationObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterActiveMeshesEvaluationObservable === undefined && oldProps.onAfterActiveMeshesEvaluationObservable !== newProps.onAfterActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onAfterActiveMeshesEvaluationObservable',
                value: newProps.onAfterActiveMeshesEvaluationObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterAnimationsObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterAnimationsObservable === undefined && oldProps.onAfterAnimationsObservable !== newProps.onAfterAnimationsObservable) {
            updates.push({
                propertyName: 'onAfterAnimationsObservable',
                value: newProps.onAfterAnimationsObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterCameraRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onAfterCameraRenderObservable === undefined && oldProps.onAfterCameraRenderObservable !== newProps.onAfterCameraRenderObservable) {
            updates.push({
                propertyName: 'onAfterCameraRenderObservable',
                value: newProps.onAfterCameraRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterDrawPhaseObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterDrawPhaseObservable === undefined && oldProps.onAfterDrawPhaseObservable !== newProps.onAfterDrawPhaseObservable) {
            updates.push({
                propertyName: 'onAfterDrawPhaseObservable',
                value: newProps.onAfterDrawPhaseObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterParticlesRenderingObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterParticlesRenderingObservable === undefined && oldProps.onAfterParticlesRenderingObservable !== newProps.onAfterParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onAfterParticlesRenderingObservable',
                value: newProps.onAfterParticlesRenderingObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterRenderingGroupObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>/fn':
        if (oldProps.onAfterRenderingGroupObservable === undefined && oldProps.onAfterRenderingGroupObservable !== newProps.onAfterRenderingGroupObservable) {
            updates.push({
                propertyName: 'onAfterRenderingGroupObservable',
                value: newProps.onAfterRenderingGroupObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterRenderObservable === undefined && oldProps.onAfterRenderObservable !== newProps.onAfterRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderObservable',
                value: newProps.onAfterRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterRenderTargetsRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterRenderTargetsRenderObservable === undefined && oldProps.onAfterRenderTargetsRenderObservable !== newProps.onAfterRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onAfterRenderTargetsRenderObservable',
                value: newProps.onAfterRenderTargetsRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterStepObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAfterStepObservable === undefined && oldProps.onAfterStepObservable !== newProps.onAfterStepObservable) {
            updates.push({
                propertyName: 'onAfterStepObservable',
                value: newProps.onAfterStepObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeActiveMeshesEvaluationObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeActiveMeshesEvaluationObservable === undefined && oldProps.onBeforeActiveMeshesEvaluationObservable !== newProps.onBeforeActiveMeshesEvaluationObservable) {
            updates.push({
                propertyName: 'onBeforeActiveMeshesEvaluationObservable',
                value: newProps.onBeforeActiveMeshesEvaluationObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeAnimationsObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeAnimationsObservable === undefined && oldProps.onBeforeAnimationsObservable !== newProps.onBeforeAnimationsObservable) {
            updates.push({
                propertyName: 'onBeforeAnimationsObservable',
                value: newProps.onBeforeAnimationsObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeCameraRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onBeforeCameraRenderObservable === undefined && oldProps.onBeforeCameraRenderObservable !== newProps.onBeforeCameraRenderObservable) {
            updates.push({
                propertyName: 'onBeforeCameraRenderObservable',
                value: newProps.onBeforeCameraRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeDrawPhaseObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeDrawPhaseObservable === undefined && oldProps.onBeforeDrawPhaseObservable !== newProps.onBeforeDrawPhaseObservable) {
            updates.push({
                propertyName: 'onBeforeDrawPhaseObservable',
                value: newProps.onBeforeDrawPhaseObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeParticlesRenderingObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeParticlesRenderingObservable === undefined && oldProps.onBeforeParticlesRenderingObservable !== newProps.onBeforeParticlesRenderingObservable) {
            updates.push({
                propertyName: 'onBeforeParticlesRenderingObservable',
                value: newProps.onBeforeParticlesRenderingObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeRenderingGroupObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>/fn':
        if (oldProps.onBeforeRenderingGroupObservable === undefined && oldProps.onBeforeRenderingGroupObservable !== newProps.onBeforeRenderingGroupObservable) {
            updates.push({
                propertyName: 'onBeforeRenderingGroupObservable',
                value: newProps.onBeforeRenderingGroupObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeRenderObservable === undefined && oldProps.onBeforeRenderObservable !== newProps.onBeforeRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderObservable',
                value: newProps.onBeforeRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeRenderTargetsRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeRenderTargetsRenderObservable === undefined && oldProps.onBeforeRenderTargetsRenderObservable !== newProps.onBeforeRenderTargetsRenderObservable) {
            updates.push({
                propertyName: 'onBeforeRenderTargetsRenderObservable',
                value: newProps.onBeforeRenderTargetsRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onBeforeStepObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onBeforeStepObservable === undefined && oldProps.onBeforeStepObservable !== newProps.onBeforeStepObservable) {
            updates.push({
                propertyName: 'onBeforeStepObservable',
                value: newProps.onBeforeStepObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onCameraRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onCameraRemovedObservable === undefined && oldProps.onCameraRemovedObservable !== newProps.onCameraRemovedObservable) {
            updates.push({
                propertyName: 'onCameraRemovedObservable',
                value: newProps.onCameraRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onDataLoadedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onDataLoadedObservable === undefined && oldProps.onDataLoadedObservable !== newProps.onDataLoadedObservable) {
            updates.push({
                propertyName: 'onDataLoadedObservable',
                value: newProps.onDataLoadedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onDispose of type '() => void/fn':
        if (oldProps.onDispose === undefined && oldProps.onDispose !== newProps.onDispose) {
            updates.push({
                propertyName: 'onDispose',
                value: newProps.onDispose,
                type: '() => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onGeometryRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreGeometry>/fn':
        if (oldProps.onGeometryRemovedObservable === undefined && oldProps.onGeometryRemovedObservable !== newProps.onGeometryRemovedObservable) {
            updates.push({
                propertyName: 'onGeometryRemovedObservable',
                value: newProps.onGeometryRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onKeyboardObservable of type 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>/fn':
        if (oldProps.onKeyboardObservable === undefined && oldProps.onKeyboardObservable !== newProps.onKeyboardObservable) {
            updates.push({
                propertyName: 'onKeyboardObservable',
                value: newProps.onKeyboardObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onLightRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreLight>/fn':
        if (oldProps.onLightRemovedObservable === undefined && oldProps.onLightRemovedObservable !== newProps.onLightRemovedObservable) {
            updates.push({
                propertyName: 'onLightRemovedObservable',
                value: newProps.onLightRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreLight>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onMaterialRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMaterial>/fn':
        if (oldProps.onMaterialRemovedObservable === undefined && oldProps.onMaterialRemovedObservable !== newProps.onMaterialRemovedObservable) {
            updates.push({
                propertyName: 'onMaterialRemovedObservable',
                value: newProps.onMaterialRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onMeshImportedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMeshImportedObservable === undefined && oldProps.onMeshImportedObservable !== newProps.onMeshImportedObservable) {
            updates.push({
                propertyName: 'onMeshImportedObservable',
                value: newProps.onMeshImportedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onMeshRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onMeshRemovedObservable === undefined && oldProps.onMeshRemovedObservable !== newProps.onMeshRemovedObservable) {
            updates.push({
                propertyName: 'onMeshRemovedObservable',
                value: newProps.onMeshRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewCameraAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onNewCameraAddedObservable === undefined && oldProps.onNewCameraAddedObservable !== newProps.onNewCameraAddedObservable) {
            updates.push({
                propertyName: 'onNewCameraAddedObservable',
                value: newProps.onNewCameraAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewGeometryAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreGeometry>/fn':
        if (oldProps.onNewGeometryAddedObservable === undefined && oldProps.onNewGeometryAddedObservable !== newProps.onNewGeometryAddedObservable) {
            updates.push({
                propertyName: 'onNewGeometryAddedObservable',
                value: newProps.onNewGeometryAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewLightAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreLight>/fn':
        if (oldProps.onNewLightAddedObservable === undefined && oldProps.onNewLightAddedObservable !== newProps.onNewLightAddedObservable) {
            updates.push({
                propertyName: 'onNewLightAddedObservable',
                value: newProps.onNewLightAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreLight>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewMaterialAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMaterial>/fn':
        if (oldProps.onNewMaterialAddedObservable === undefined && oldProps.onNewMaterialAddedObservable !== newProps.onNewMaterialAddedObservable) {
            updates.push({
                propertyName: 'onNewMaterialAddedObservable',
                value: newProps.onNewMaterialAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewMeshAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onNewMeshAddedObservable === undefined && oldProps.onNewMeshAddedObservable !== newProps.onNewMeshAddedObservable) {
            updates.push({
                propertyName: 'onNewMeshAddedObservable',
                value: newProps.onNewMeshAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewSkeletonAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>/fn':
        if (oldProps.onNewSkeletonAddedObservable === undefined && oldProps.onNewSkeletonAddedObservable !== newProps.onNewSkeletonAddedObservable) {
            updates.push({
                propertyName: 'onNewSkeletonAddedObservable',
                value: newProps.onNewSkeletonAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewTextureAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>/fn':
        if (oldProps.onNewTextureAddedObservable === undefined && oldProps.onNewTextureAddedObservable !== newProps.onNewTextureAddedObservable) {
            updates.push({
                propertyName: 'onNewTextureAddedObservable',
                value: newProps.onNewTextureAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onNewTransformNodeAddedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onNewTransformNodeAddedObservable === undefined && oldProps.onNewTransformNodeAddedObservable !== newProps.onNewTransformNodeAddedObservable) {
            updates.push({
                propertyName: 'onNewTransformNodeAddedObservable',
                value: newProps.onNewTransformNodeAddedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPointerDown of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerDown === undefined && oldProps.onPointerDown !== newProps.onPointerDown) {
            updates.push({
                propertyName: 'onPointerDown',
                value: newProps.onPointerDown,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPointerMove of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerMove === undefined && oldProps.onPointerMove !== newProps.onPointerMove) {
            updates.push({
                propertyName: 'onPointerMove',
                value: newProps.onPointerMove,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPointerObservable of type 'BabylonjsCoreObservable<BabylonjsCorePointerInfo>/fn':
        if (oldProps.onPointerObservable === undefined && oldProps.onPointerObservable !== newProps.onPointerObservable) {
            updates.push({
                propertyName: 'onPointerObservable',
                value: newProps.onPointerObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPointerPick of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void/fn':
        if (oldProps.onPointerPick === undefined && oldProps.onPointerPick !== newProps.onPointerPick) {
            updates.push({
                propertyName: 'onPointerPick',
                value: newProps.onPointerPick,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPointerUp of type '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void/fn':
        if (oldProps.onPointerUp === undefined && oldProps.onPointerUp !== newProps.onPointerUp) {
            updates.push({
                propertyName: 'onPointerUp',
                value: newProps.onPointerUp,
                type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPreKeyboardObservable of type 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>/fn':
        if (oldProps.onPreKeyboardObservable === undefined && oldProps.onPreKeyboardObservable !== newProps.onPreKeyboardObservable) {
            updates.push({
                propertyName: 'onPreKeyboardObservable',
                value: newProps.onPreKeyboardObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onPrePointerObservable of type 'BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>/fn':
        if (oldProps.onPrePointerObservable === undefined && oldProps.onPrePointerObservable !== newProps.onPrePointerObservable) {
            updates.push({
                propertyName: 'onPrePointerObservable',
                value: newProps.onPrePointerObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onReadyObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onReadyObservable === undefined && oldProps.onReadyObservable !== newProps.onReadyObservable) {
            updates.push({
                propertyName: 'onReadyObservable',
                value: newProps.onReadyObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreScene>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onSkeletonRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>/fn':
        if (oldProps.onSkeletonRemovedObservable === undefined && oldProps.onSkeletonRemovedObservable !== newProps.onSkeletonRemovedObservable) {
            updates.push({
                propertyName: 'onSkeletonRemovedObservable',
                value: newProps.onSkeletonRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onTextureRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>/fn':
        if (oldProps.onTextureRemovedObservable === undefined && oldProps.onTextureRemovedObservable !== newProps.onTextureRemovedObservable) {
            updates.push({
                propertyName: 'onTextureRemovedObservable',
                value: newProps.onTextureRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.onTransformNodeRemovedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>/fn':
        if (oldProps.onTransformNodeRemovedObservable === undefined && oldProps.onTransformNodeRemovedObservable !== newProps.onTransformNodeRemovedObservable) {
            updates.push({
                propertyName: 'onTransformNodeRemovedObservable',
                value: newProps.onTransformNodeRemovedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.particlesEnabled of type 'boolean':
        if (oldProps.particlesEnabled !== newProps.particlesEnabled) {
            updates.push({
                propertyName: 'particlesEnabled',
                value: newProps.particlesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreScene.pointerDownPredicate.
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreScene.pointerMovePredicate.
        // TODO: type: (Mesh: BabylonjsCoreAbstractMesh) => boolean property (not coded) xxx-ns-xxx.BabylonjsCoreScene.pointerUpPredicate.
        // xxx-ns-xxx.BabylonjsCoreScene.pointerX of type 'number':
        if (oldProps.pointerX !== newProps.pointerX) {
            updates.push({
                propertyName: 'pointerX',
                value: newProps.pointerX,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.pointerY of type 'number':
        if (oldProps.pointerY !== newProps.pointerY) {
            updates.push({
                propertyName: 'pointerY',
                value: newProps.pointerY,
                type: 'number'
            });
        }
        // TODO: type: BabylonjsCorePostProcess[] property (not coded) xxx-ns-xxx.BabylonjsCoreScene.postProcesses.
        // xxx-ns-xxx.BabylonjsCoreScene.postProcessesEnabled of type 'boolean':
        if (oldProps.postProcessesEnabled !== newProps.postProcessesEnabled) {
            updates.push({
                propertyName: 'postProcessesEnabled',
                value: newProps.postProcessesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: BabylonjsCorePostProcessManager property (not coded) xxx-ns-xxx.BabylonjsCoreScene.postProcessManager.
        // xxx-ns-xxx.BabylonjsCoreScene.preventDefaultOnPointerDown of type 'boolean':
        if (oldProps.preventDefaultOnPointerDown !== newProps.preventDefaultOnPointerDown) {
            updates.push({
                propertyName: 'preventDefaultOnPointerDown',
                value: newProps.preventDefaultOnPointerDown,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.preventDefaultOnPointerUp of type 'boolean':
        if (oldProps.preventDefaultOnPointerUp !== newProps.preventDefaultOnPointerUp) {
            updates.push({
                propertyName: 'preventDefaultOnPointerUp',
                value: newProps.preventDefaultOnPointerUp,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.probesEnabled of type 'boolean':
        if (oldProps.probesEnabled !== newProps.probesEnabled) {
            updates.push({
                propertyName: 'probesEnabled',
                value: newProps.probesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.proceduralTexturesEnabled of type 'boolean':
        if (oldProps.proceduralTexturesEnabled !== newProps.proceduralTexturesEnabled) {
            updates.push({
                propertyName: 'proceduralTexturesEnabled',
                value: newProps.proceduralTexturesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.renderTargetsEnabled of type 'boolean':
        if (oldProps.renderTargetsEnabled !== newProps.renderTargetsEnabled) {
            updates.push({
                propertyName: 'renderTargetsEnabled',
                value: newProps.renderTargetsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.requireLightSorting of type 'boolean':
        if (oldProps.requireLightSorting !== newProps.requireLightSorting) {
            updates.push({
                propertyName: 'requireLightSorting',
                value: newProps.requireLightSorting,
                type: 'boolean'
            });
        }
        // TODO: type: any property (not coded) xxx-ns-xxx.BabylonjsCoreScene.reservedDataStore.
        // xxx-ns-xxx.BabylonjsCoreScene.shadowsEnabled of type 'boolean':
        if (oldProps.shadowsEnabled !== newProps.shadowsEnabled) {
            updates.push({
                propertyName: 'shadowsEnabled',
                value: newProps.shadowsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.skeletonsEnabled of type 'boolean':
        if (oldProps.skeletonsEnabled !== newProps.skeletonsEnabled) {
            updates.push({
                propertyName: 'skeletonsEnabled',
                value: newProps.skeletonsEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.spritesEnabled of type 'boolean':
        if (oldProps.spritesEnabled !== newProps.spritesEnabled) {
            updates.push({
                propertyName: 'spritesEnabled',
                value: newProps.spritesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.texturesEnabled of type 'boolean':
        if (oldProps.texturesEnabled !== newProps.texturesEnabled) {
            updates.push({
                propertyName: 'texturesEnabled',
                value: newProps.texturesEnabled,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.useConstantAnimationDeltaTime of type 'boolean':
        if (oldProps.useConstantAnimationDeltaTime !== newProps.useConstantAnimationDeltaTime) {
            updates.push({
                propertyName: 'useConstantAnimationDeltaTime',
                value: newProps.useConstantAnimationDeltaTime,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.useDelayedTextureLoading of type 'boolean':
        if (oldProps.useDelayedTextureLoading !== newProps.useDelayedTextureLoading) {
            updates.push({
                propertyName: 'useDelayedTextureLoading',
                value: newProps.useDelayedTextureLoading,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreScene.useRightHandedSystem of type 'boolean':
        if (oldProps.useRightHandedSystem !== newProps.useRightHandedSystem) {
            updates.push({
                propertyName: 'useRightHandedSystem',
                value: newProps.useRightHandedSystem,
                type: 'boolean'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setActiveCameraByID of type '(id?: string)':
        if (oldProps.setActiveCameraByID !== newProps.setActiveCameraByID) {
            updates.push({
                propertyName: 'setActiveCameraByID',
                value: newProps.setActiveCameraByID,
                type: '(id?: string)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setActiveCameraByName of type '(name?: string)':
        if (oldProps.setActiveCameraByName !== newProps.setActiveCameraByName) {
            updates.push({
                propertyName: 'setActiveCameraByName',
                value: newProps.setActiveCameraByName,
                type: '(name?: string)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setPointerOverMesh of type '(mesh?: BabylonjsCoreAbstractMesh)':
        if (oldProps.setPointerOverMesh !== newProps.setPointerOverMesh) {
            updates.push({
                propertyName: 'setPointerOverMesh',
                value: newProps.setPointerOverMesh,
                type: '(mesh?: BabylonjsCoreAbstractMesh)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setStepId of type '(newStepId?: number)':
        if (oldProps.setStepId !== newProps.setStepId) {
            updates.push({
                propertyName: 'setStepId',
                value: newProps.setStepId,
                type: '(newStepId?: number)'
            });
        }
        // xxxx-ns-xxxx.BabylonjsCoreScene.setTransformMatrix of type '(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix)':
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

export const AbstractMesh: string = 'AbstractMesh', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', BaseTexture: string = 'BaseTexture', Box: string = 'Box', Camera: string = 'Camera', ColorGradingTexture: string = 'ColorGradingTexture', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DynamicTexture: string = 'DynamicTexture', EnvironmentHelper: string = 'EnvironmentHelper', EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FlyCamera: string = 'FlyCamera', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GamepadCamera: string = 'GamepadCamera', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HemisphericLight: string = 'HemisphericLight', HtmlElementTexture: string = 'HtmlElementTexture', IcoSphere: string = 'IcoSphere', Lathe: string = 'Lathe', Light: string = 'Light', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', Mesh: string = 'Mesh', MirrorTexture: string = 'MirrorTexture', MultiMaterial: string = 'MultiMaterial', MultiRenderTarget: string = 'MultiRenderTarget', MultiviewRenderTarget: string = 'MultiviewRenderTarget', Node: string = 'Node', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', Plane: string = 'Plane', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', ProceduralTexture: string = 'ProceduralTexture', PushMaterial: string = 'PushMaterial', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture3D: string = 'RawTexture3D', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ShaderMaterial: string = 'ShaderMaterial', ShadowGenerator: string = 'ShadowGenerator', ShadowLight: string = 'ShadowLight', Sphere: string = 'Sphere', SpotLight: string = 'SpotLight', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', Texture: string = 'Texture', TiledGround: string = 'TiledGround', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', TransformNode: string = 'TransformNode', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', WebVRFreeCamera: string = 'WebVRFreeCamera', WebXRCamera: string = 'WebXRCamera';
