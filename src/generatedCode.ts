import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture3DProps, FiberRawTexture2DArrayProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberSceneProps } from "./generatedProps";
import { DynamicTerrain as ExtensionsDynamicTerrain } from "./extensions/DynamicTerrain";
import { AbstractScene as BabylonjsCoreAbstractScene } from "@babylonjs/core/abstractScene";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { DebugLayerTab as BabylonjsCoreDebugLayerTab } from "@babylonjs/core/Debug/debugLayer";
import { DualShockButton as BabylonjsCoreDualShockButton, DualShockDpad as BabylonjsCoreDualShockDpad } from "@babylonjs/core/Gamepads/dualShockGamepad";
import { Xbox360Button as BabylonjsCoreXbox360Button, Xbox360Dpad as BabylonjsCoreXbox360Dpad } from "@babylonjs/core/Gamepads/xboxGamepad";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper, IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions } from "@babylonjs/core/Helpers/environmentHelper";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { SceneLoaderAnimationGroupLoadingMode as BabylonjsCoreSceneLoaderAnimationGroupLoadingMode } from "@babylonjs/core/Loading/sceneLoader";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Space as BabylonjsCoreSpace } from "@babylonjs/core/Maths/math.axis";
import { Orientation as BabylonjsCoreOrientation } from "@babylonjs/core/Maths/math.path";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder as BabylonjsCoreMeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { AssetTaskState as BabylonjsCoreAssetTaskState } from "@babylonjs/core/Misc/assetsManager";
import { InspectableType as BabylonjsCoreInspectableType, IInspectable as BabylonjsCoreIInspectable } from "@babylonjs/core/Misc/iInspectable";
import { JoystickAxis as BabylonjsCoreJoystickAxis } from "@babylonjs/core/Misc/virtualJoystick";
import { PointColor as BabylonjsCorePointColor } from "@babylonjs/core/Particles/pointsCloudSystem";
import { SubEmitterType as BabylonjsCoreSubEmitterType } from "@babylonjs/core/Particles/subEmitter";
import { PhysicsRadialImpulseFalloff as BabylonjsCorePhysicsRadialImpulseFalloff, PhysicsUpdraftMode as BabylonjsCorePhysicsUpdraftMode } from "@babylonjs/core/Physics/physicsHelper";
import { PhysicsImpostor as BabylonjsCorePhysicsImpostor, IPhysicsEnabledObject as BabylonjsCoreIPhysicsEnabledObject, PhysicsImpostorParameters as BabylonjsCorePhysicsImpostorParameters } from "@babylonjs/core/Physics/physicsImpostor";
import { DepthOfFieldEffectBlurLevel as BabylonjsCoreDepthOfFieldEffectBlurLevel } from "@babylonjs/core/PostProcesses/depthOfFieldEffect";
import { TonemappingOperator as BabylonjsCoreTonemappingOperator } from "@babylonjs/core/PostProcesses/tonemapPostProcess";
import { WebXRState as BabylonjsCoreWebXRState } from "@babylonjs/core/XR/webXRTypes";
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture, IFocusableControl as BabylonjsGuiIFocusableControl } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { GUI3DManager as BabylonjsGuiGUI3DManager } from "@babylonjs/gui/3D/gui3DManager";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper, OnAfterEnteringVRObservableEvent as BabylonjsCoreOnAfterEnteringVRObservableEvent, VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { PoseEnabledControllerType as BabylonjsCorePoseEnabledControllerType } from "@babylonjs/core/Gamepads/Controllers/poseEnabledController";
import { ShadowGenerator as BabylonjsCoreShadowGenerator, ICustomShaderOptions as BabylonjsCoreICustomShaderOptions } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { NodeMaterialConnectionPointCompatibilityStates as BabylonjsCoreNodeMaterialConnectionPointCompatibilityStates, NodeMaterialConnectionPointDirection as BabylonjsCoreNodeMaterialConnectionPointDirection } from "@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { InternalTextureSource as BabylonjsCoreInternalTextureSource } from "@babylonjs/core/Materials/Textures/internalTexture";
import { Control as BabylonjsGuiControl } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping as BabylonjsGuiTextWrapping } from "@babylonjs/gui/2D/controls/textBlock";
import { Control3D as BabylonjsGuiControl3D } from "@babylonjs/gui/3D/controls/control3D";
import { TrigonometryBlockOperations as BabylonjsCoreTrigonometryBlockOperations } from "@babylonjs/core/Materials/Node/Blocks/trigonometryBlock";
import { WaveBlockKind as BabylonjsCoreWaveBlockKind } from "@babylonjs/core/Materials/Node/Blocks/waveBlock";
import { NodeMaterialBlockConnectionPointMode as BabylonjsCoreNodeMaterialBlockConnectionPointMode } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode";
import { NodeMaterialBlockConnectionPointTypes as BabylonjsCoreNodeMaterialBlockConnectionPointTypes } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes";
import { NodeMaterialBlockTargets as BabylonjsCoreNodeMaterialBlockTargets } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets";
import { NodeMaterialSystemValues as BabylonjsCoreNodeMaterialSystemValues } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues";
import { AnimatedInputBlockTypes as BabylonjsCoreAnimatedInputBlockTypes } from "@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes";
import { Animation as BabylonjsCoreAnimation } from "@babylonjs/core/Animations/animation";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { Vector3 as BabylonjsCoreVector3, Matrix as BabylonjsCoreMatrix, Vector2 as BabylonjsCoreVector2, Quaternion as BabylonjsCoreQuaternion } from "@babylonjs/core/Maths/math.vector";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { Texture as BabylonjsCoreTexture } from "@babylonjs/core/Materials/Textures/texture";
import { ThinEngine as BabylonjsCoreThinEngine } from "@babylonjs/core/Engines/thinEngine";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { Color3 as BabylonjsCoreColor3, Color4 as BabylonjsCoreColor4 } from "@babylonjs/core/Maths/math.color";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from "@babylonjs/core/Materials/Textures/renderTargetTexture";
import { SmartArray as BabylonjsCoreSmartArray, ISmartArrayLike as BabylonjsCoreISmartArrayLike } from "@babylonjs/core/Misc/smartArray";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Engine as BabylonjsCoreEngine } from "@babylonjs/core/Engines/engine";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
import { Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math.plane";
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget, IMultiRenderTargetOptions as BabylonjsCoreIMultiRenderTargetOptions } from "@babylonjs/core/Materials/Textures/multiRenderTarget";
import { RefractionTexture as BabylonjsCoreRefractionTexture } from "@babylonjs/core/Materials/Textures/refractionTexture";
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from "@babylonjs/core/Materials/Textures/MultiviewRenderTarget";
import { VideoTexture as BabylonjsCoreVideoTexture, VideoTextureSettings as BabylonjsCoreVideoTextureSettings } from "@babylonjs/core/Materials/Textures/videoTexture";
import { DynamicTexture as BabylonjsCoreDynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { ClipboardInfo as BabylonjsCoreClipboardInfo } from "@babylonjs/core/Events/clipboardEvents";
import { RawTexture3D as BabylonjsCoreRawTexture3D } from "@babylonjs/core/Materials/Textures/rawTexture3D";
import { RawTexture2DArray as BabylonjsCoreRawTexture2DArray } from "@babylonjs/core/Materials/Textures/rawTexture2DArray";
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from "@babylonjs/core/Materials/Textures/colorGradingTexture";
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture";
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture";
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture, IHtmlElementTextureOptions as BabylonjsCoreIHtmlElementTextureOptions } from "@babylonjs/core/Materials/Textures/htmlElementTexture";
import { Effect as BabylonjsCoreEffect } from "@babylonjs/core/Materials/effect";
import { IShadowLight as BabylonjsCoreIShadowLight } from "@babylonjs/core/Lights/shadowLight";
import { WebVRController as BabylonjsCoreWebVRController } from "@babylonjs/core/Gamepads/Controllers/webVRController";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { WebXRDefaultExperience as BabylonjsCoreWebXRDefaultExperience } from "@babylonjs/core/XR/webXRDefaultExperience";
import { SolidParticleSystem as BabylonjsCoreSolidParticleSystem } from "@babylonjs/core/Particles/solidParticleSystem";
import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from "@babylonjs/core/Actions/abstractActionManager";
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from "@babylonjs/core/Animations/animationPropertiesOverride";
import { Collider as BabylonjsCoreCollider } from "@babylonjs/core/Collisions/collider";
import { Ray as BabylonjsCoreRay } from "@babylonjs/core/Culling/ray";
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from "@babylonjs/core/Offline/IOfflineProvider";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo, KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { PointerEventTypes as BabylonjsCorePointerEventTypes, PointerInfo as BabylonjsCorePointerInfo, PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { PostProcess as BabylonjsCorePostProcess } from "@babylonjs/core/PostProcesses/postProcess";
import { PostProcessManager as BabylonjsCorePostProcessManager } from "@babylonjs/core/PostProcesses/postProcessManager";
import { IPhysicsEnginePlugin as BabylonjsCoreIPhysicsEnginePlugin } from "@babylonjs/core/Physics/IPhysicsEngine";

export class FiberBaseTexturePropsHandler implements PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBaseTexture, oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreBaseTexture.animations.
        // BabylonjsCoreBaseTexture.anisotropicFilteringLevel (number):
        if (oldProps.anisotropicFilteringLevel !== newProps.anisotropicFilteringLevel) {
            updates.push({
                propertyName: 'anisotropicFilteringLevel',
                value: newProps.anisotropicFilteringLevel,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.coordinatesIndex (number):
        if (oldProps.coordinatesIndex !== newProps.coordinatesIndex) {
            updates.push({
                propertyName: 'coordinatesIndex',
                value: newProps.coordinatesIndex,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.coordinatesMode (number):
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.delayLoadState (number):
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.gammaSpace (boolean):
        if (oldProps.gammaSpace !== newProps.gammaSpace) {
            updates.push({
                propertyName: 'gammaSpace',
                value: newProps.gammaSpace,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.getAlphaFromRGB (boolean):
        if (oldProps.getAlphaFromRGB !== newProps.getAlphaFromRGB) {
            updates.push({
                propertyName: 'getAlphaFromRGB',
                value: newProps.getAlphaFromRGB,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.hasAlpha (boolean):
        if (oldProps.hasAlpha !== newProps.hasAlpha) {
            updates.push({
                propertyName: 'hasAlpha',
                value: newProps.hasAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.invertZ (boolean):
        if (oldProps.invertZ !== newProps.invertZ) {
            updates.push({
                propertyName: 'invertZ',
                value: newProps.invertZ,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBaseTexture.irradianceTexture.
        // BabylonjsCoreBaseTexture.is2DArray (boolean):
        if (oldProps.is2DArray !== newProps.is2DArray) {
            updates.push({
                propertyName: 'is2DArray',
                value: newProps.is2DArray,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.is3D (boolean):
        if (oldProps.is3D !== newProps.is3D) {
            updates.push({
                propertyName: 'is3D',
                value: newProps.is3D,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.isCube (boolean):
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.isRenderTarget (boolean):
        if (oldProps.isRenderTarget !== newProps.isRenderTarget) {
            updates.push({
                propertyName: 'isRenderTarget',
                value: newProps.isRenderTarget,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.isRGBD (boolean):
        if (oldProps.isRGBD !== newProps.isRGBD) {
            updates.push({
                propertyName: 'isRGBD',
                value: newProps.isRGBD,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.level (number):
        if (oldProps.level !== newProps.level) {
            updates.push({
                propertyName: 'level',
                value: newProps.level,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.linearSpecularLOD (boolean):
        if (oldProps.linearSpecularLOD !== newProps.linearSpecularLOD) {
            updates.push({
                propertyName: 'linearSpecularLOD',
                value: newProps.linearSpecularLOD,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBaseTexture.lodGenerationOffset (number):
        if (oldProps.lodGenerationOffset !== newProps.lodGenerationOffset) {
            updates.push({
                propertyName: 'lodGenerationOffset',
                value: newProps.lodGenerationOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.lodGenerationScale (number):
        if (oldProps.lodGenerationScale !== newProps.lodGenerationScale) {
            updates.push({
                propertyName: 'lodGenerationScale',
                value: newProps.lodGenerationScale,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.lodLevelInAlpha (boolean):
        if (oldProps.lodLevelInAlpha !== newProps.lodLevelInAlpha) {
            updates.push({
                propertyName: 'lodLevelInAlpha',
                value: newProps.lodLevelInAlpha,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreBaseTexture.metadata.
        // BabylonjsCoreBaseTexture.name (string):
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
        // TODO: type: 'any' property (not coded) BabylonjsCoreBaseTexture.reservedDataStore.
        // BabylonjsCoreBaseTexture.uniqueId (number):
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.wrapR (number):
        if (oldProps.wrapR !== newProps.wrapR) {
            updates.push({
                propertyName: 'wrapR',
                value: newProps.wrapR,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.wrapU (number):
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // BabylonjsCoreBaseTexture.wrapV (number):
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
        // BabylonjsCoreCubeTexture.boundingBoxPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreCubeTexture.boundingBoxSize (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BabylonjsCoreVector3'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreCubeTexture.onLoadObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCubeTexture>/fn':
        if (oldProps.onLoadObservable === undefined && oldProps.onLoadObservable !== newProps.onLoadObservable) {
            updates.push({
                propertyName: 'onLoadObservable',
                value: newProps.onLoadObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCubeTexture>'
            });
        }
        // BabylonjsCoreCubeTexture.rotationY (number):
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // BabylonjsCoreCubeTexture.url (string):
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BabylonjsCoreCubeTexture.setReflectionTextureMatrix of type '(value?: BabylonjsCoreMatrix) => void':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BabylonjsCoreMatrix) => void'
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
        // TODO: type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreTexture.inspectableCustomProperties.
        // BabylonjsCoreTexture.isBlocking (boolean):
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
        // BabylonjsCoreTexture.uAng (number):
        if (oldProps.uAng !== newProps.uAng) {
            updates.push({
                propertyName: 'uAng',
                value: newProps.uAng,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.uOffset (number):
        if (oldProps.uOffset !== newProps.uOffset) {
            updates.push({
                propertyName: 'uOffset',
                value: newProps.uOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.url (string):
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BabylonjsCoreTexture.uRotationCenter (number):
        if (oldProps.uRotationCenter !== newProps.uRotationCenter) {
            updates.push({
                propertyName: 'uRotationCenter',
                value: newProps.uRotationCenter,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.uScale (number):
        if (oldProps.uScale !== newProps.uScale) {
            updates.push({
                propertyName: 'uScale',
                value: newProps.uScale,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.vAng (number):
        if (oldProps.vAng !== newProps.vAng) {
            updates.push({
                propertyName: 'vAng',
                value: newProps.vAng,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.vOffset (number):
        if (oldProps.vOffset !== newProps.vOffset) {
            updates.push({
                propertyName: 'vOffset',
                value: newProps.vOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.vRotationCenter (number):
        if (oldProps.vRotationCenter !== newProps.vRotationCenter) {
            updates.push({
                propertyName: 'vRotationCenter',
                value: newProps.vRotationCenter,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.vScale (number):
        if (oldProps.vScale !== newProps.vScale) {
            updates.push({
                propertyName: 'vScale',
                value: newProps.vScale,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.wAng (number):
        if (oldProps.wAng !== newProps.wAng) {
            updates.push({
                propertyName: 'wAng',
                value: newProps.wAng,
                type: 'number'
            });
        }
        // BabylonjsCoreTexture.wRotationCenter (number):
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
                "name": "sceneOrEngine",
                "type": "BabylonjsCoreScene | BabylonjsCoreThinEngine",
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
                "type": "string | ArrayBufferView | ArrayBuffer | HTMLImageElement | Blob | ImageBitmap",
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
            },
            {
                "name": "mimeType",
                "type": "string",
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
        // BabylonjsCoreRawTexture.format (number):
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
        // BabylonjsCoreProceduralTexture.autoClear (boolean):
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // BabylonjsCoreProceduralTexture.isCube (boolean):
        if (oldProps.isCube !== newProps.isCube) {
            updates.push({
                propertyName: 'isCube',
                value: newProps.isCube,
                type: 'boolean'
            });
        }
        // BabylonjsCoreProceduralTexture.isEnabled (boolean):
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
        // BabylonjsCoreProceduralTexture.refreshRate (number):
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // BabylonjsCoreProceduralTexture.setColor3 of type '(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreProceduralTexture':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setColor4 of type '(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreProceduralTexture':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setFloat of type '(name?: string, value?: number) => BabylonjsCoreProceduralTexture':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setFloats of type '(name?: string, value?: number[]) => BabylonjsCoreProceduralTexture':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[]) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setFragment of type '(fragment?: any) => void':
        if (oldProps.setFragment !== newProps.setFragment) {
            updates.push({
                propertyName: 'setFragment',
                value: newProps.setFragment,
                type: '(fragment?: any) => void'
            });
        }
        // BabylonjsCoreProceduralTexture.setInt of type '(name?: string, value?: number) => BabylonjsCoreProceduralTexture':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setMatrix of type '(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreProceduralTexture':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setTexture of type '(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreProceduralTexture':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setVector2 of type '(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreProceduralTexture':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreProceduralTexture'
            });
        }
        // BabylonjsCoreProceduralTexture.setVector3 of type '(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreProceduralTexture':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreProceduralTexture'
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
        // BabylonjsCoreCustomProceduralTexture.animate (boolean):
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
        // BabylonjsCoreNoiseProceduralTexture.animationSpeedFactor (number):
        if (oldProps.animationSpeedFactor !== newProps.animationSpeedFactor) {
            updates.push({
                propertyName: 'animationSpeedFactor',
                value: newProps.animationSpeedFactor,
                type: 'number'
            });
        }
        // BabylonjsCoreNoiseProceduralTexture.brightness (number):
        if (oldProps.brightness !== newProps.brightness) {
            updates.push({
                propertyName: 'brightness',
                value: newProps.brightness,
                type: 'number'
            });
        }
        // BabylonjsCoreNoiseProceduralTexture.octaves (number):
        if (oldProps.octaves !== newProps.octaves) {
            updates.push({
                propertyName: 'octaves',
                value: newProps.octaves,
                type: 'number'
            });
        }
        // BabylonjsCoreNoiseProceduralTexture.persistence (number):
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
        // TODO: type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreRenderTargetTexture.activeCamera.
        // BabylonjsCoreRenderTargetTexture.boundingBoxPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreRenderTargetTexture.boundingBoxSize (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreRenderTargetTexture.clearColor of BabylonjsCoreColor4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.clearColor && (!oldProps.clearColor || oldProps.clearColor.r !== newProps.clearColor.r || oldProps.clearColor.g !== newProps.clearColor.g || oldProps.clearColor.b !== newProps.clearColor.b || oldProps.clearColor.a !== newProps.clearColor.a)) {
            updates.push({
                propertyName: 'clearColor',
                value: newProps.clearColor,
                type: 'BabylonjsCoreColor4'
            });
        }
        // BabylonjsCoreRenderTargetTexture.coordinatesMode (number):
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // TODO: type: '(opaqueSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, alphaTestSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, transparentSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, depthOnlySubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, beforeTransparents?: () => void) => void' property (not coded) BabylonjsCoreRenderTargetTexture.customRenderFunction.
        // TODO: type: '(layerOrFace: number, renderList: readonly BabylonjsCoreAbstractMesh[], renderListLength: number) => BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.getCustomRenderList.
        // BabylonjsCoreRenderTargetTexture.ignoreCameraViewport (boolean):
        if (oldProps.ignoreCameraViewport !== newProps.ignoreCameraViewport) {
            updates.push({
                propertyName: 'ignoreCameraViewport',
                value: newProps.ignoreCameraViewport,
                type: 'boolean'
            });
        }
        // BabylonjsCoreRenderTargetTexture.isCube (boolean):
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
        // xxx-ns-xxx.BabylonjsCoreRenderTargetTexture.onResizeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>/fn':
        if (oldProps.onResizeObservable === undefined && oldProps.onResizeObservable !== newProps.onResizeObservable) {
            updates.push({
                propertyName: 'onResizeObservable',
                value: newProps.onResizeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>'
            });
        }
        // BabylonjsCoreRenderTargetTexture.refreshRate (number):
        if (oldProps.refreshRate !== newProps.refreshRate) {
            updates.push({
                propertyName: 'refreshRate',
                value: newProps.refreshRate,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.renderList.
        // TODO: type: '(AbstractMesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreRenderTargetTexture.renderListPredicate.
        // BabylonjsCoreRenderTargetTexture.renderParticles (boolean):
        if (oldProps.renderParticles !== newProps.renderParticles) {
            updates.push({
                propertyName: 'renderParticles',
                value: newProps.renderParticles,
                type: 'boolean'
            });
        }
        // BabylonjsCoreRenderTargetTexture.renderSprites (boolean):
        if (oldProps.renderSprites !== newProps.renderSprites) {
            updates.push({
                propertyName: 'renderSprites',
                value: newProps.renderSprites,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreRenderTargetTexture.renderToTarget.
        // BabylonjsCoreRenderTargetTexture.samples (number):
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // BabylonjsCoreRenderTargetTexture.useCameraPostProcesses (boolean):
        if (oldProps.useCameraPostProcesses !== newProps.useCameraPostProcesses) {
            updates.push({
                propertyName: 'useCameraPostProcesses',
                value: newProps.useCameraPostProcesses,
                type: 'boolean'
            });
        }
        // BabylonjsCoreRenderTargetTexture.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean) => void':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean) => void'
            });
        }
        // BabylonjsCoreRenderTargetTexture.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void'
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
                "type": "number | { width: number; height: number; layers?: number; } | { ratio: number; }",
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
        // BabylonjsCoreMirrorTexture.adaptiveBlurKernel (number):
        if (oldProps.adaptiveBlurKernel !== newProps.adaptiveBlurKernel) {
            updates.push({
                propertyName: 'adaptiveBlurKernel',
                value: newProps.adaptiveBlurKernel,
                type: 'number'
            });
        }
        // BabylonjsCoreMirrorTexture.blurKernel (number):
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // BabylonjsCoreMirrorTexture.blurKernelX (number):
        if (oldProps.blurKernelX !== newProps.blurKernelX) {
            updates.push({
                propertyName: 'blurKernelX',
                value: newProps.blurKernelX,
                type: 'number'
            });
        }
        // BabylonjsCoreMirrorTexture.blurKernelY (number):
        if (oldProps.blurKernelY !== newProps.blurKernelY) {
            updates.push({
                propertyName: 'blurKernelY',
                value: newProps.blurKernelY,
                type: 'number'
            });
        }
        // BabylonjsCoreMirrorTexture.blurRatio (number):
        if (oldProps.blurRatio !== newProps.blurRatio) {
            updates.push({
                propertyName: 'blurRatio',
                value: newProps.blurRatio,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMirrorTexture.mirrorPlane.
        // TODO: type: 'any' property (not coded) BabylonjsCoreMirrorTexture.scene.
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
        // BabylonjsCoreMultiRenderTarget.samples (number):
        if (oldProps.samples !== newProps.samples) {
            updates.push({
                propertyName: 'samples',
                value: newProps.samples,
                type: 'number'
            });
        }
        // BabylonjsCoreMultiRenderTarget.wrapU (number):
        if (oldProps.wrapU !== newProps.wrapU) {
            updates.push({
                propertyName: 'wrapU',
                value: newProps.wrapU,
                type: 'number'
            });
        }
        // BabylonjsCoreMultiRenderTarget.wrapV (number):
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
        // BabylonjsCoreRefractionTexture.depth (number):
        if (oldProps.depth !== newProps.depth) {
            updates.push({
                propertyName: 'depth',
                value: newProps.depth,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreRefractionTexture.refractionPlane.
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
        // TODO: type: 'any' property (not coded) BabylonjsCoreVideoTexture.reset.
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

export class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiAdvancedDynamicTexture, oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiAdvancedDynamicTexture.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.clipboardData (string):
        if (oldProps.clipboardData !== newProps.clipboardData) {
            updates.push({
                propertyName: 'clipboardData',
                value: newProps.clipboardData,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsGuiIFocusableControl' property (not coded) BabylonjsGuiAdvancedDynamicTexture.focusedControl.
        // BabylonjsGuiAdvancedDynamicTexture.idealHeight (number):
        if (oldProps.idealHeight !== newProps.idealHeight) {
            updates.push({
                propertyName: 'idealHeight',
                value: newProps.idealHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.idealWidth (number):
        if (oldProps.idealWidth !== newProps.idealWidth) {
            updates.push({
                propertyName: 'idealWidth',
                value: newProps.idealWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.isForeground (boolean):
        if (oldProps.isForeground !== newProps.isForeground) {
            updates.push({
                propertyName: 'isForeground',
                value: newProps.isForeground,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onBeginLayoutObservable of type 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>/fn':
        if (oldProps.onBeginLayoutObservable === undefined && oldProps.onBeginLayoutObservable !== newProps.onBeginLayoutObservable) {
            updates.push({
                propertyName: 'onBeginLayoutObservable',
                value: newProps.onBeginLayoutObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onBeginRenderObservable of type 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>/fn':
        if (oldProps.onBeginRenderObservable === undefined && oldProps.onBeginRenderObservable !== newProps.onBeginRenderObservable) {
            updates.push({
                propertyName: 'onBeginRenderObservable',
                value: newProps.onBeginRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onClipboardCopy of type 'any/fn':
        if (oldProps.onClipboardCopy === undefined && oldProps.onClipboardCopy !== newProps.onClipboardCopy) {
            updates.push({
                propertyName: 'onClipboardCopy',
                value: newProps.onClipboardCopy,
                type: 'any'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onClipboardCut of type 'any/fn':
        if (oldProps.onClipboardCut === undefined && oldProps.onClipboardCut !== newProps.onClipboardCut) {
            updates.push({
                propertyName: 'onClipboardCut',
                value: newProps.onClipboardCut,
                type: 'any'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onClipboardObservable of type 'BabylonjsCoreObservable<BabylonjsCoreClipboardInfo>/fn':
        if (oldProps.onClipboardObservable === undefined && oldProps.onClipboardObservable !== newProps.onClipboardObservable) {
            updates.push({
                propertyName: 'onClipboardObservable',
                value: newProps.onClipboardObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreClipboardInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onClipboardPaste of type 'any/fn':
        if (oldProps.onClipboardPaste === undefined && oldProps.onClipboardPaste !== newProps.onClipboardPaste) {
            updates.push({
                propertyName: 'onClipboardPaste',
                value: newProps.onClipboardPaste,
                type: 'any'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onControlPickedObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onControlPickedObservable === undefined && oldProps.onControlPickedObservable !== newProps.onControlPickedObservable) {
            updates.push({
                propertyName: 'onControlPickedObservable',
                value: newProps.onControlPickedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onEndLayoutObservable of type 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>/fn':
        if (oldProps.onEndLayoutObservable === undefined && oldProps.onEndLayoutObservable !== newProps.onEndLayoutObservable) {
            updates.push({
                propertyName: 'onEndLayoutObservable',
                value: newProps.onEndLayoutObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiAdvancedDynamicTexture.onEndRenderObservable of type 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>/fn':
        if (oldProps.onEndRenderObservable === undefined && oldProps.onEndRenderObservable !== newProps.onEndRenderObservable) {
            updates.push({
                propertyName: 'onEndRenderObservable',
                value: newProps.onEndRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.premulAlpha (boolean):
        if (oldProps.premulAlpha !== newProps.premulAlpha) {
            updates.push({
                propertyName: 'premulAlpha',
                value: newProps.premulAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.renderAtIdealSize (boolean):
        if (oldProps.renderAtIdealSize !== newProps.renderAtIdealSize) {
            updates.push({
                propertyName: 'renderAtIdealSize',
                value: newProps.renderAtIdealSize,
                type: 'boolean'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.renderScale (number):
        if (oldProps.renderScale !== newProps.renderScale) {
            updates.push({
                propertyName: 'renderScale',
                value: newProps.renderScale,
                type: 'number'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.useInvalidateRectOptimization (boolean):
        if (oldProps.useInvalidateRectOptimization !== newProps.useInvalidateRectOptimization) {
            updates.push({
                propertyName: 'useInvalidateRectOptimization',
                value: newProps.useInvalidateRectOptimization,
                type: 'boolean'
            });
        }
        // BabylonjsGuiAdvancedDynamicTexture.useSmallestIdeal (boolean):
        if (oldProps.useSmallestIdeal !== newProps.useSmallestIdeal) {
            updates.push({
                propertyName: 'useSmallestIdeal',
                value: newProps.useSmallestIdeal,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export class FiberAdvancedDynamicTexture implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler(),
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
        "libraryLocation": "AdvancedDynamicTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
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
                "type": "BabylonjsCoreScene",
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
        "isTexture": true,
        "className": "FiberAdvancedDynamicTexture"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
 *
 * This code has been generated
 */
export class FiberADTForMesh implements HasPropsHandlers<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "advancedDynamicTexture",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateForMesh",
        "parameters": [
            {
                "name": "mesh",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
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
                "name": "supportPointerMove",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "onlyAlphaTesting",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberADTForMesh"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in fullscreen mode.
 * In this mode the texture will rely on a layer for its rendering.
 * This allows it to be treated like any other layer.
 * As such, if you have a multi camera setup, you can set the layerMask on the GUI as well.
 * LayerMask is set through advancedTexture.layer.layerMask
 *
 * This code has been generated
 */
export class FiberADTFullscreenUI implements HasPropsHandlers<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiAdvancedDynamicTexture, FiberAdvancedDynamicTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "advancedDynamicTexture",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateFullscreenUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "foreground",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "sampling",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberADTFullscreenUI"
    };
}

export class FiberRawTexture3DPropsHandler implements PropsHandler<BabylonjsCoreRawTexture3D, FiberRawTexture3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture3D, oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreRawTexture3D.format (number):
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

export class FiberRawTexture2DArrayPropsHandler implements PropsHandler<BabylonjsCoreRawTexture2DArray, FiberRawTexture2DArrayProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreRawTexture2DArray, oldProps: FiberRawTexture2DArrayProps, newProps: FiberRawTexture2DArrayProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreRawTexture2DArray.format (number):
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
 * Class used to store 2D array textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture2DArray implements HasPropsHandlers<BabylonjsCoreBaseTexture, FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBaseTexture, FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture2DArrayPropsHandler(),
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
        "libraryLocation": "RawTexture2DArray",
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
        "className": "FiberRawTexture2DArray"
    };
}

export class FiberColorGradingTexturePropsHandler implements PropsHandler<BabylonjsCoreColorGradingTexture, FiberColorGradingTextureProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreColorGradingTexture, oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.load3dlTexture.
        // TODO: type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.loadTexture.
        // BabylonjsCoreColorGradingTexture.url (string):
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
        // BabylonjsCoreEquiRectangularCubeTexture.coordinatesMode (number):
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.getFloat32ArrayFromArrayBuffer.
        // TODO: type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadImage.
        // TODO: type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadTexture.
        // BabylonjsCoreEquiRectangularCubeTexture.url (string):
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
        // BabylonjsCoreHDRCubeTexture.boundingBoxPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxPosition && (!oldProps.boundingBoxPosition || !oldProps.boundingBoxPosition.equals(newProps.boundingBoxPosition))) {
            updates.push({
                propertyName: 'boundingBoxPosition',
                value: newProps.boundingBoxPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreHDRCubeTexture.boundingBoxSize (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.boundingBoxSize && (!oldProps.boundingBoxSize || !oldProps.boundingBoxSize.equals(newProps.boundingBoxSize))) {
            updates.push({
                propertyName: 'boundingBoxSize',
                value: newProps.boundingBoxSize,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreHDRCubeTexture.coordinatesMode (number):
        if (oldProps.coordinatesMode !== newProps.coordinatesMode) {
            updates.push({
                propertyName: 'coordinatesMode',
                value: newProps.coordinatesMode,
                type: 'number'
            });
        }
        // BabylonjsCoreHDRCubeTexture.isBlocking (boolean):
        if (oldProps.isBlocking !== newProps.isBlocking) {
            updates.push({
                propertyName: 'isBlocking',
                value: newProps.isBlocking,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreHDRCubeTexture.loadTexture.
        // BabylonjsCoreHDRCubeTexture.rotationY (number):
        if (oldProps.rotationY !== newProps.rotationY) {
            updates.push({
                propertyName: 'rotationY',
                value: newProps.rotationY,
                type: 'number'
            });
        }
        // BabylonjsCoreHDRCubeTexture.url (string):
        if (oldProps.url !== newProps.url) {
            updates.push({
                propertyName: 'url',
                value: newProps.url,
                type: 'string'
            });
        }
        // BabylonjsCoreHDRCubeTexture.setReflectionTextureMatrix of type '(value?: BabylonjsCoreMatrix) => void':
        if (oldProps.setReflectionTextureMatrix !== newProps.setReflectionTextureMatrix) {
            updates.push({
                propertyName: 'setReflectionTextureMatrix',
                value: newProps.setReflectionTextureMatrix,
                type: '(value?: BabylonjsCoreMatrix) => void'
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
        // TODO: type: 'HTMLVideoElement | HTMLCanvasElement' property (not coded) BabylonjsCoreHtmlElementTexture.element.
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

export class FiberGUI3DManagerPropsHandler implements PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiGUI3DManager, oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // xxx-ns-xxx.BabylonjsGuiGUI3DManager.onPickedPointChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onPickedPointChangedObservable === undefined && oldProps.onPickedPointChangedObservable !== newProps.onPickedPointChangedObservable) {
            updates.push({
                propertyName: 'onPickedPointChangedObservable',
                value: newProps.onPickedPointChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export class FiberGUI3DManager implements HasPropsHandlers<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGUI3DManagerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiGUI3DManager, FiberGUI3DManagerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GUI3DManager",
        "namespace": "@babylonjs/gui/3D/gui3DManager",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberGUI3DManager"
    };
}

export class FiberShadowGeneratorPropsHandler implements PropsHandler<BabylonjsCoreShadowGenerator, FiberShadowGeneratorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowGenerator, oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreShadowGenerator.bias (number):
        if (oldProps.bias !== newProps.bias) {
            updates.push({
                propertyName: 'bias',
                value: newProps.bias,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.blurBoxOffset (number):
        if (oldProps.blurBoxOffset !== newProps.blurBoxOffset) {
            updates.push({
                propertyName: 'blurBoxOffset',
                value: newProps.blurBoxOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.blurKernel (number):
        if (oldProps.blurKernel !== newProps.blurKernel) {
            updates.push({
                propertyName: 'blurKernel',
                value: newProps.blurKernel,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.blurScale (number):
        if (oldProps.blurScale !== newProps.blurScale) {
            updates.push({
                propertyName: 'blurScale',
                value: newProps.blurScale,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.contactHardeningLightSizeUVRatio (number):
        if (oldProps.contactHardeningLightSizeUVRatio !== newProps.contactHardeningLightSizeUVRatio) {
            updates.push({
                propertyName: 'contactHardeningLightSizeUVRatio',
                value: newProps.contactHardeningLightSizeUVRatio,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreICustomShaderOptions' property (not coded) BabylonjsCoreShadowGenerator.customShaderOptions.
        // BabylonjsCoreShadowGenerator.darkness (number):
        if (oldProps.darkness !== newProps.darkness) {
            updates.push({
                propertyName: 'darkness',
                value: newProps.darkness,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.depthScale (number):
        if (oldProps.depthScale !== newProps.depthScale) {
            updates.push({
                propertyName: 'depthScale',
                value: newProps.depthScale,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.filter (number):
        if (oldProps.filter !== newProps.filter) {
            updates.push({
                propertyName: 'filter',
                value: newProps.filter,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.filteringQuality (number):
        if (oldProps.filteringQuality !== newProps.filteringQuality) {
            updates.push({
                propertyName: 'filteringQuality',
                value: newProps.filteringQuality,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.forceBackFacesOnly (boolean):
        if (oldProps.forceBackFacesOnly !== newProps.forceBackFacesOnly) {
            updates.push({
                propertyName: 'forceBackFacesOnly',
                value: newProps.forceBackFacesOnly,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.frustumEdgeFalloff (number):
        if (oldProps.frustumEdgeFalloff !== newProps.frustumEdgeFalloff) {
            updates.push({
                propertyName: 'frustumEdgeFalloff',
                value: newProps.frustumEdgeFalloff,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowGenerator.normalBias (number):
        if (oldProps.normalBias !== newProps.normalBias) {
            updates.push({
                propertyName: 'normalBias',
                value: newProps.normalBias,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.onAfterShadowMapRenderMeshObservable of type 'BabylonjsCoreObservable<BabylonjsCoreMesh>/fn':
        if (oldProps.onAfterShadowMapRenderMeshObservable === undefined && oldProps.onAfterShadowMapRenderMeshObservable !== newProps.onAfterShadowMapRenderMeshObservable) {
            updates.push({
                propertyName: 'onAfterShadowMapRenderMeshObservable',
                value: newProps.onAfterShadowMapRenderMeshObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreShadowGenerator.onAfterShadowMapRenderObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffect>/fn':
        if (oldProps.onAfterShadowMapRenderObservable === undefined && oldProps.onAfterShadowMapRenderObservable !== newProps.onAfterShadowMapRenderObservable) {
            updates.push({
                propertyName: 'onAfterShadowMapRenderObservable',
                value: newProps.onAfterShadowMapRenderObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffect>'
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
        // BabylonjsCoreShadowGenerator.transparencyShadow (boolean):
        if (oldProps.transparencyShadow !== newProps.transparencyShadow) {
            updates.push({
                propertyName: 'transparencyShadow',
                value: newProps.transparencyShadow,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useBlurCloseExponentialShadowMap (boolean):
        if (oldProps.useBlurCloseExponentialShadowMap !== newProps.useBlurCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurCloseExponentialShadowMap',
                value: newProps.useBlurCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useBlurExponentialShadowMap (boolean):
        if (oldProps.useBlurExponentialShadowMap !== newProps.useBlurExponentialShadowMap) {
            updates.push({
                propertyName: 'useBlurExponentialShadowMap',
                value: newProps.useBlurExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useCloseExponentialShadowMap (boolean):
        if (oldProps.useCloseExponentialShadowMap !== newProps.useCloseExponentialShadowMap) {
            updates.push({
                propertyName: 'useCloseExponentialShadowMap',
                value: newProps.useCloseExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useContactHardeningShadow (boolean):
        if (oldProps.useContactHardeningShadow !== newProps.useContactHardeningShadow) {
            updates.push({
                propertyName: 'useContactHardeningShadow',
                value: newProps.useContactHardeningShadow,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useExponentialShadowMap (boolean):
        if (oldProps.useExponentialShadowMap !== newProps.useExponentialShadowMap) {
            updates.push({
                propertyName: 'useExponentialShadowMap',
                value: newProps.useExponentialShadowMap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.useKernelBlur (boolean):
        if (oldProps.useKernelBlur !== newProps.useKernelBlur) {
            updates.push({
                propertyName: 'useKernelBlur',
                value: newProps.useKernelBlur,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.usePercentageCloserFiltering (boolean):
        if (oldProps.usePercentageCloserFiltering !== newProps.usePercentageCloserFiltering) {
            updates.push({
                propertyName: 'usePercentageCloserFiltering',
                value: newProps.usePercentageCloserFiltering,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.usePoissonSampling (boolean):
        if (oldProps.usePoissonSampling !== newProps.usePoissonSampling) {
            updates.push({
                propertyName: 'usePoissonSampling',
                value: newProps.usePoissonSampling,
                type: 'boolean'
            });
        }
        // BabylonjsCoreShadowGenerator.setDarkness of type '(darkness?: number) => BabylonjsCoreShadowGenerator':
        if (oldProps.setDarkness !== newProps.setDarkness) {
            updates.push({
                propertyName: 'setDarkness',
                value: newProps.setDarkness,
                type: '(darkness?: number) => BabylonjsCoreShadowGenerator'
            });
        }
        // BabylonjsCoreShadowGenerator.setTransparencyShadow of type '(transparent?: boolean) => BabylonjsCoreShadowGenerator':
        if (oldProps.setTransparencyShadow !== newProps.setTransparencyShadow) {
            updates.push({
                propertyName: 'setTransparencyShadow',
                value: newProps.setTransparencyShadow,
                type: '(transparent?: boolean) => BabylonjsCoreShadowGenerator'
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
                "optional": true
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
        // BabylonjsCoreEnvironmentHelper.setMainColor of type '(color?: BabylonjsCoreColor3) => void':
        if (oldProps.setMainColor !== newProps.setMainColor) {
            updates.push({
                propertyName: 'setMainColor',
                value: newProps.setMainColor,
                type: '(color?: BabylonjsCoreColor3) => void'
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

export class FiberPhysicsImpostorPropsHandler implements PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePhysicsImpostor, oldProps: FiberPhysicsImpostorProps, newProps: FiberPhysicsImpostorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: '() => void' property (not coded) BabylonjsCorePhysicsImpostor.afterStep.
        // TODO: type: '() => void' property (not coded) BabylonjsCorePhysicsImpostor.beforeStep.
        // BabylonjsCorePhysicsImpostor.friction (number):
        if (oldProps.friction !== newProps.friction) {
            updates.push({
                propertyName: 'friction',
                value: newProps.friction,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.mass (number):
        if (oldProps.mass !== newProps.mass) {
            updates.push({
                propertyName: 'mass',
                value: newProps.mass,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreIPhysicsEnabledObject' property (not coded) BabylonjsCorePhysicsImpostor.object.
        // xxx-ns-xxx.BabylonjsCorePhysicsImpostor.onCollide of type '(e: { body: any; }) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(e: { body: any; }) => void'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePhysicsImpostor.onCollideEvent of type '(collider: BabylonjsCorePhysicsImpostor, collidedWith: BabylonjsCorePhysicsImpostor) => void/fn':
        if (oldProps.onCollideEvent === undefined && oldProps.onCollideEvent !== newProps.onCollideEvent) {
            updates.push({
                propertyName: 'onCollideEvent',
                value: newProps.onCollideEvent,
                type: '(collider: BabylonjsCorePhysicsImpostor, collidedWith: BabylonjsCorePhysicsImpostor) => void'
            });
        }
        // TODO: type: 'BabylonjsCorePhysicsImpostor' property (not coded) BabylonjsCorePhysicsImpostor.parent.
        // TODO: type: 'any' property (not coded) BabylonjsCorePhysicsImpostor.physicsBody.
        // BabylonjsCorePhysicsImpostor.positionIterations (number):
        if (oldProps.positionIterations !== newProps.positionIterations) {
            updates.push({
                propertyName: 'positionIterations',
                value: newProps.positionIterations,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.pressure (number):
        if (oldProps.pressure !== newProps.pressure) {
            updates.push({
                propertyName: 'pressure',
                value: newProps.pressure,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.restitution (number):
        if (oldProps.restitution !== newProps.restitution) {
            updates.push({
                propertyName: 'restitution',
                value: newProps.restitution,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.segments (number):
        if (oldProps.segments !== newProps.segments) {
            updates.push({
                propertyName: 'segments',
                value: newProps.segments,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.soft (boolean):
        if (oldProps.soft !== newProps.soft) {
            updates.push({
                propertyName: 'soft',
                value: newProps.soft,
                type: 'boolean'
            });
        }
        // BabylonjsCorePhysicsImpostor.stiffness (number):
        if (oldProps.stiffness !== newProps.stiffness) {
            updates.push({
                propertyName: 'stiffness',
                value: newProps.stiffness,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.type (number):
        if (oldProps.type !== newProps.type) {
            updates.push({
                propertyName: 'type',
                value: newProps.type,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.uniqueId (number):
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.velocityIterations (number):
        if (oldProps.velocityIterations !== newProps.velocityIterations) {
            updates.push({
                propertyName: 'velocityIterations',
                value: newProps.velocityIterations,
                type: 'number'
            });
        }
        // BabylonjsCorePhysicsImpostor.setAngularVelocity of type '(velocity?: BabylonjsCoreVector3) => void':
        if (oldProps.setAngularVelocity !== newProps.setAngularVelocity) {
            updates.push({
                propertyName: 'setAngularVelocity',
                value: newProps.setAngularVelocity,
                type: '(velocity?: BabylonjsCoreVector3) => void'
            });
        }
        // BabylonjsCorePhysicsImpostor.setDeltaPosition of type '(position?: BabylonjsCoreVector3) => void':
        if (oldProps.setDeltaPosition !== newProps.setDeltaPosition) {
            updates.push({
                propertyName: 'setDeltaPosition',
                value: newProps.setDeltaPosition,
                type: '(position?: BabylonjsCoreVector3) => void'
            });
        }
        // BabylonjsCorePhysicsImpostor.setDeltaRotation of type '(rotation?: BabylonjsCoreQuaternion) => void':
        if (oldProps.setDeltaRotation !== newProps.setDeltaRotation) {
            updates.push({
                propertyName: 'setDeltaRotation',
                value: newProps.setDeltaRotation,
                type: '(rotation?: BabylonjsCoreQuaternion) => void'
            });
        }
        // BabylonjsCorePhysicsImpostor.setLinearVelocity of type '(velocity?: BabylonjsCoreVector3) => void':
        if (oldProps.setLinearVelocity !== newProps.setLinearVelocity) {
            updates.push({
                propertyName: 'setLinearVelocity',
                value: newProps.setLinearVelocity,
                type: '(velocity?: BabylonjsCoreVector3) => void'
            });
        }
        // BabylonjsCorePhysicsImpostor.setMass of type '(mass?: number) => void':
        if (oldProps.setMass !== newProps.setMass) {
            updates.push({
                propertyName: 'setMass',
                value: newProps.setMass,
                type: '(mass?: number) => void'
            });
        }
        // BabylonjsCorePhysicsImpostor.setParam of type '(paramName?: string, value?: number) => void':
        if (oldProps.setParam !== newProps.setParam) {
            updates.push({
                propertyName: 'setParam',
                value: newProps.setParam,
                type: '(paramName?: string, value?: number) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export class FiberPhysicsImpostor implements HasPropsHandlers<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps> {
    private propsHandlers: PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPhysicsImpostorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCorePhysicsImpostor, FiberPhysicsImpostorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PhysicsImpostor",
        "namespace": "@babylonjs/core/Physics/physicsImpostor",
        "parameters": [
            {
                "name": "object",
                "type": "BabylonjsCoreIPhysicsEnabledObject",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": false
            },
            {
                "name": "_options",
                "type": "BabylonjsCorePhysicsImpostorParameters",
                "optional": true
            },
            {
                "name": "_scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "delayCreation": true,
        "className": "FiberPhysicsImpostor"
    };
}

export class FiberVRExperienceHelperPropsHandler implements PropsHandler<BabylonjsCoreVRExperienceHelper, FiberVRExperienceHelperProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreVRExperienceHelper, oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.beforeRender.
        // TODO: type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.completeVRInit.
        // BabylonjsCoreVRExperienceHelper.displayGaze (boolean):
        if (oldProps.displayGaze !== newProps.displayGaze) {
            updates.push({
                propertyName: 'displayGaze',
                value: newProps.displayGaze,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.displayLaserPointer (boolean):
        if (oldProps.displayLaserPointer !== newProps.displayLaserPointer) {
            updates.push({
                propertyName: 'displayLaserPointer',
                value: newProps.displayLaserPointer,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.displayVRButton.
        // BabylonjsCoreVRExperienceHelper.enableGazeEvenWhenNoPointerLock (boolean):
        if (oldProps.enableGazeEvenWhenNoPointerLock !== newProps.enableGazeEvenWhenNoPointerLock) {
            updates.push({
                propertyName: 'enableGazeEvenWhenNoPointerLock',
                value: newProps.enableGazeEvenWhenNoPointerLock,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.exitVROnDoubleTap (boolean):
        if (oldProps.exitVROnDoubleTap !== newProps.exitVROnDoubleTap) {
            updates.push({
                propertyName: 'exitVROnDoubleTap',
                value: newProps.exitVROnDoubleTap,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.gazeTrackerMesh.
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreVRExperienceHelper.meshSelectionPredicate.
        // TODO: type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.moveButtonToBottomRight.
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
        // xxx-ns-xxx.BabylonjsCoreVRExperienceHelper.onMeshSelectedWithController of type 'BabylonjsCoreObservable<{ mesh: BabylonjsCoreAbstractMesh; controller: BabylonjsCoreWebVRController; }>/fn':
        if (oldProps.onMeshSelectedWithController === undefined && oldProps.onMeshSelectedWithController !== newProps.onMeshSelectedWithController) {
            updates.push({
                propertyName: 'onMeshSelectedWithController',
                value: newProps.onMeshSelectedWithController,
                type: 'BabylonjsCoreObservable<{ mesh: BabylonjsCoreAbstractMesh; controller: BabylonjsCoreWebVRController; }>'
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
        // BabylonjsCoreVRExperienceHelper.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreVRExperienceHelper.raySelectionPredicate.
        // BabylonjsCoreVRExperienceHelper.requestPointerLockOnFullScreen (boolean):
        if (oldProps.requestPointerLockOnFullScreen !== newProps.requestPointerLockOnFullScreen) {
            updates.push({
                propertyName: 'requestPointerLockOnFullScreen',
                value: newProps.requestPointerLockOnFullScreen,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.teleportationEnabled (boolean):
        if (oldProps.teleportationEnabled !== newProps.teleportationEnabled) {
            updates.push({
                propertyName: 'teleportationEnabled',
                value: newProps.teleportationEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.teleportationTarget.
        // TODO: type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.updateButtonVisibility.
        // BabylonjsCoreVRExperienceHelper.updateControllerLaserColor (boolean):
        if (oldProps.updateControllerLaserColor !== newProps.updateControllerLaserColor) {
            updates.push({
                propertyName: 'updateControllerLaserColor',
                value: newProps.updateControllerLaserColor,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.updateGazeTrackerColor (boolean):
        if (oldProps.updateGazeTrackerColor !== newProps.updateGazeTrackerColor) {
            updates.push({
                propertyName: 'updateGazeTrackerColor',
                value: newProps.updateGazeTrackerColor,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.updateGazeTrackerScale (boolean):
        if (oldProps.updateGazeTrackerScale !== newProps.updateGazeTrackerScale) {
            updates.push({
                propertyName: 'updateGazeTrackerScale',
                value: newProps.updateGazeTrackerScale,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreVRExperienceHelperOptions' property (not coded) BabylonjsCoreVRExperienceHelper.webVROptions.
        // TODO: type: 'BabylonjsCoreWebXRDefaultExperience' property (not coded) BabylonjsCoreVRExperienceHelper.xr.
        // BabylonjsCoreVRExperienceHelper.xrTestDone (boolean):
        if (oldProps.xrTestDone !== newProps.xrTestDone) {
            updates.push({
                propertyName: 'xrTestDone',
                value: newProps.xrTestDone,
                type: 'boolean'
            });
        }
        // BabylonjsCoreVRExperienceHelper.setGazeColor of type '(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void':
        if (oldProps.setGazeColor !== newProps.setGazeColor) {
            updates.push({
                propertyName: 'setGazeColor',
                value: newProps.setGazeColor,
                type: '(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void'
            });
        }
        // BabylonjsCoreVRExperienceHelper.setLaserColor of type '(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void':
        if (oldProps.setLaserColor !== newProps.setLaserColor) {
            updates.push({
                propertyName: 'setLaserColor',
                value: newProps.setLaserColor,
                type: '(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void'
            });
        }
        // BabylonjsCoreVRExperienceHelper.setLaserLightingState of type '(enabled?: boolean) => void':
        if (oldProps.setLaserLightingState !== newProps.setLaserLightingState) {
            updates.push({
                propertyName: 'setLaserLightingState',
                value: newProps.setLaserLightingState,
                type: '(enabled?: boolean) => void'
            });
        }
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

export class FiberDynamicTerrainPropsHandler implements PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps> {
    getPropertyUpdates(hostInstance: ExtensionsDynamicTerrain, oldProps: FiberDynamicTerrainProps, newProps: FiberDynamicTerrainProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreCamera' property (not coded) ExtensionsDynamicTerrain.camera.
        // ExtensionsDynamicTerrain.cameraLODCorrection (number):
        if (oldProps.cameraLODCorrection !== newProps.cameraLODCorrection) {
            updates.push({
                propertyName: 'cameraLODCorrection',
                value: newProps.cameraLODCorrection,
                type: 'number'
            });
        }
        // ExtensionsDynamicTerrain.computeNormals (boolean):
        if (oldProps.computeNormals !== newProps.computeNormals) {
            updates.push({
                propertyName: 'computeNormals',
                value: newProps.computeNormals,
                type: 'boolean'
            });
        }
        // ExtensionsDynamicTerrain.initialLOD (number):
        if (oldProps.initialLOD !== newProps.initialLOD) {
            updates.push({
                propertyName: 'initialLOD',
                value: newProps.initialLOD,
                type: 'number'
            });
        }
        // ExtensionsDynamicTerrain.isAlwaysVisible (boolean):
        if (oldProps.isAlwaysVisible !== newProps.isAlwaysVisible) {
            updates.push({
                propertyName: 'isAlwaysVisible',
                value: newProps.isAlwaysVisible,
                type: 'boolean'
            });
        }
        // TODO: type: 'number[]' property (not coded) ExtensionsDynamicTerrain.LODLimits.
        // ExtensionsDynamicTerrain.LODNegativeX (boolean):
        if (oldProps.LODNegativeX !== newProps.LODNegativeX) {
            updates.push({
                propertyName: 'LODNegativeX',
                value: newProps.LODNegativeX,
                type: 'boolean'
            });
        }
        // ExtensionsDynamicTerrain.LODNegativeZ (boolean):
        if (oldProps.LODNegativeZ !== newProps.LODNegativeZ) {
            updates.push({
                propertyName: 'LODNegativeZ',
                value: newProps.LODNegativeZ,
                type: 'boolean'
            });
        }
        // ExtensionsDynamicTerrain.LODPositiveX (boolean):
        if (oldProps.LODPositiveX !== newProps.LODPositiveX) {
            updates.push({
                propertyName: 'LODPositiveX',
                value: newProps.LODPositiveX,
                type: 'boolean'
            });
        }
        // ExtensionsDynamicTerrain.LODPositiveZ (boolean):
        if (oldProps.LODPositiveZ !== newProps.LODPositiveZ) {
            updates.push({
                propertyName: 'LODPositiveZ',
                value: newProps.LODPositiveZ,
                type: 'boolean'
            });
        }
        // TODO: type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapColors.
        // TODO: type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapData.
        // TODO: type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapNormals.
        // ExtensionsDynamicTerrain.mapSubX (number):
        if (oldProps.mapSubX !== newProps.mapSubX) {
            updates.push({
                propertyName: 'mapSubX',
                value: newProps.mapSubX,
                type: 'number'
            });
        }
        // ExtensionsDynamicTerrain.mapSubZ (number):
        if (oldProps.mapSubZ !== newProps.mapSubZ) {
            updates.push({
                propertyName: 'mapSubZ',
                value: newProps.mapSubZ,
                type: 'number'
            });
        }
        // TODO: type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapUVs.
        // ExtensionsDynamicTerrain.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // ExtensionsDynamicTerrain.precomputeNormalsFromMap (boolean):
        if (oldProps.precomputeNormalsFromMap !== newProps.precomputeNormalsFromMap) {
            updates.push({
                propertyName: 'precomputeNormalsFromMap',
                value: newProps.precomputeNormalsFromMap,
                type: 'boolean'
            });
        }
        // ExtensionsDynamicTerrain.refreshEveryFrame (boolean):
        if (oldProps.refreshEveryFrame !== newProps.refreshEveryFrame) {
            updates.push({
                propertyName: 'refreshEveryFrame',
                value: newProps.refreshEveryFrame,
                type: 'boolean'
            });
        }
        // TODO: type: '{ x: number; z: number; }' property (not coded) ExtensionsDynamicTerrain.shiftFromCamera.
        // ExtensionsDynamicTerrain.subToleranceX (number):
        if (oldProps.subToleranceX !== newProps.subToleranceX) {
            updates.push({
                propertyName: 'subToleranceX',
                value: newProps.subToleranceX,
                type: 'number'
            });
        }
        // ExtensionsDynamicTerrain.subToleranceZ (number):
        if (oldProps.subToleranceZ !== newProps.subToleranceZ) {
            updates.push({
                propertyName: 'subToleranceZ',
                value: newProps.subToleranceZ,
                type: 'number'
            });
        }
        // ExtensionsDynamicTerrain.useCustomVertexFunction (boolean):
        if (oldProps.useCustomVertexFunction !== newProps.useCustomVertexFunction) {
            updates.push({
                propertyName: 'useCustomVertexFunction',
                value: newProps.useCustomVertexFunction,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This code has been generated
 */
export class FiberDynamicTerrain implements HasPropsHandlers<ExtensionsDynamicTerrain, FiberDynamicTerrainProps> {
    private propsHandlers: PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTerrainPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<ExtensionsDynamicTerrain, FiberDynamicTerrainProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTerrain",
        "namespace": "./extensions/DynamicTerrain",
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
                "name": "options",
                "type": [
                    {
                        "name": "terrainSub",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapData",
                        "type": "number[] | Float32Array",
                        "optional": true
                    },
                    {
                        "name": "mapSubX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapSubZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapUVs",
                        "type": "number[] | Float32Array",
                        "optional": true
                    },
                    {
                        "name": "mapColors",
                        "type": "number[] | Float32Array",
                        "optional": true
                    },
                    {
                        "name": "mapNormals",
                        "type": "number[] | Float32Array",
                        "optional": true
                    },
                    {
                        "name": "invertSide",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "camera",
                        "type": "BabylonjsCoreCamera",
                        "optional": true
                    },
                    {
                        "name": "SPmapData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "sps",
                        "type": "BabylonjsCoreSolidParticleSystem",
                        "optional": true
                    },
                    {
                        "name": "SPcolorData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "SPuvData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "intializedCallback",
                        "type": "any",
                        "optional": true
                    }
                ],
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "className": "FiberDynamicTerrain"
    };
}

export class FiberScenePropsHandler implements PropsHandler<BabylonjsCoreScene, FiberSceneProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreScene, oldProps: FiberSceneProps, newProps: FiberSceneProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreScene.actionManager.
        // TODO: type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.activeCamera.
        // TODO: type: 'BabylonjsCoreCamera[]' property (not coded) BabylonjsCoreScene.activeCameras.
        // TODO: type: '() => void' property (not coded) BabylonjsCoreScene.afterCameraRender.
        // TODO: type: '() => void' property (not coded) BabylonjsCoreScene.afterRender.
        // BabylonjsCoreScene.ambientColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreScene.animationPropertiesOverride.
        // BabylonjsCoreScene.animationsEnabled (boolean):
        if (oldProps.animationsEnabled !== newProps.animationsEnabled) {
            updates.push({
                propertyName: 'animationsEnabled',
                value: newProps.animationsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.animationTimeScale (number):
        if (oldProps.animationTimeScale !== newProps.animationTimeScale) {
            updates.push({
                propertyName: 'animationTimeScale',
                value: newProps.animationTimeScale,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.autoClear (boolean):
        if (oldProps.autoClear !== newProps.autoClear) {
            updates.push({
                propertyName: 'autoClear',
                value: newProps.autoClear,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.autoClearDepthAndStencil (boolean):
        if (oldProps.autoClearDepthAndStencil !== newProps.autoClearDepthAndStencil) {
            updates.push({
                propertyName: 'autoClearDepthAndStencil',
                value: newProps.autoClearDepthAndStencil,
                type: 'boolean'
            });
        }
        // TODO: type: '() => void' property (not coded) BabylonjsCoreScene.beforeCameraRender.
        // TODO: type: '() => void' property (not coded) BabylonjsCoreScene.beforeRender.
        // BabylonjsCoreScene.blockfreeActiveMeshesAndRenderingGroups (boolean):
        if (oldProps.blockfreeActiveMeshesAndRenderingGroups !== newProps.blockfreeActiveMeshesAndRenderingGroups) {
            updates.push({
                propertyName: 'blockfreeActiveMeshesAndRenderingGroups',
                value: newProps.blockfreeActiveMeshesAndRenderingGroups,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.blockMaterialDirtyMechanism (boolean):
        if (oldProps.blockMaterialDirtyMechanism !== newProps.blockMaterialDirtyMechanism) {
            updates.push({
                propertyName: 'blockMaterialDirtyMechanism',
                value: newProps.blockMaterialDirtyMechanism,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.cameraToUseForPointers.
        // BabylonjsCoreScene.clearColor of BabylonjsCoreColor4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.clearColor && (!oldProps.clearColor || oldProps.clearColor.r !== newProps.clearColor.r || oldProps.clearColor.g !== newProps.clearColor.g || oldProps.clearColor.b !== newProps.clearColor.b || oldProps.clearColor.a !== newProps.clearColor.a)) {
            updates.push({
                propertyName: 'clearColor',
                value: newProps.clearColor,
                type: 'BabylonjsCoreColor4'
            });
        }
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane.
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane2.
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane3.
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane4.
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane5.
        // TODO: type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane6.
        // BabylonjsCoreScene.collisionsEnabled (boolean):
        if (oldProps.collisionsEnabled !== newProps.collisionsEnabled) {
            updates.push({
                propertyName: 'collisionsEnabled',
                value: newProps.collisionsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.constantlyUpdateMeshUnderPointer (boolean):
        if (oldProps.constantlyUpdateMeshUnderPointer !== newProps.constantlyUpdateMeshUnderPointer) {
            updates.push({
                propertyName: 'constantlyUpdateMeshUnderPointer',
                value: newProps.constantlyUpdateMeshUnderPointer,
                type: 'boolean'
            });
        }
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh, camera: BabylonjsCoreCamera) => BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreScene.customLODSelector.
        // TODO: type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreScene.customRenderTargets.
        // BabylonjsCoreScene.defaultCursor (string):
        if (oldProps.defaultCursor !== newProps.defaultCursor) {
            updates.push({
                propertyName: 'defaultCursor',
                value: newProps.defaultCursor,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreScene.defaultMaterial.
        // TODO: type: 'RegExp[]' property (not coded) BabylonjsCoreScene.disableOfflineSupportExceptionRules.
        // BabylonjsCoreScene.dispatchAllSubMeshesOfActiveMeshes (boolean):
        if (oldProps.dispatchAllSubMeshesOfActiveMeshes !== newProps.dispatchAllSubMeshesOfActiveMeshes) {
            updates.push({
                propertyName: 'dispatchAllSubMeshesOfActiveMeshes',
                value: newProps.dispatchAllSubMeshesOfActiveMeshes,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.doNotHandleCursors (boolean):
        if (oldProps.doNotHandleCursors !== newProps.doNotHandleCursors) {
            updates.push({
                propertyName: 'doNotHandleCursors',
                value: newProps.doNotHandleCursors,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.DoubleClickDelay (number):
        if (oldProps.DoubleClickDelay !== newProps.DoubleClickDelay) {
            updates.push({
                propertyName: 'DoubleClickDelay',
                value: newProps.DoubleClickDelay,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.DragMovementThreshold (number):
        if (oldProps.DragMovementThreshold !== newProps.DragMovementThreshold) {
            updates.push({
                propertyName: 'DragMovementThreshold',
                value: newProps.DragMovementThreshold,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.dumpNextRenderTargets (boolean):
        if (oldProps.dumpNextRenderTargets !== newProps.dumpNextRenderTargets) {
            updates.push({
                propertyName: 'dumpNextRenderTargets',
                value: newProps.dumpNextRenderTargets,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentBRDFTexture.
        // BabylonjsCoreScene.environmentIntensity (number):
        if (oldProps.environmentIntensity !== newProps.environmentIntensity) {
            updates.push({
                propertyName: 'environmentIntensity',
                value: newProps.environmentIntensity,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentTexture.
        // BabylonjsCoreScene.ExclusiveDoubleClickMode (boolean):
        if (oldProps.ExclusiveDoubleClickMode !== newProps.ExclusiveDoubleClickMode) {
            updates.push({
                propertyName: 'ExclusiveDoubleClickMode',
                value: newProps.ExclusiveDoubleClickMode,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.fogColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.fogColor && (!oldProps.fogColor || !oldProps.fogColor.equals(newProps.fogColor))) {
            updates.push({
                propertyName: 'fogColor',
                value: newProps.fogColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreScene.fogDensity (number):
        if (oldProps.fogDensity !== newProps.fogDensity) {
            updates.push({
                propertyName: 'fogDensity',
                value: newProps.fogDensity,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.fogEnabled (boolean):
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.fogEnd (number):
        if (oldProps.fogEnd !== newProps.fogEnd) {
            updates.push({
                propertyName: 'fogEnd',
                value: newProps.fogEnd,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.fogMode (number):
        if (oldProps.fogMode !== newProps.fogMode) {
            updates.push({
                propertyName: 'fogMode',
                value: newProps.fogMode,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.fogStart (number):
        if (oldProps.fogStart !== newProps.fogStart) {
            updates.push({
                propertyName: 'fogStart',
                value: newProps.fogStart,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.forcePointsCloud (boolean):
        if (oldProps.forcePointsCloud !== newProps.forcePointsCloud) {
            updates.push({
                propertyName: 'forcePointsCloud',
                value: newProps.forcePointsCloud,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.forceWireframe (boolean):
        if (oldProps.forceWireframe !== newProps.forceWireframe) {
            updates.push({
                propertyName: 'forceWireframe',
                value: newProps.forceWireframe,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreScene.geometriesByUniqueId.
        // TODO: type: '() => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreScene.getActiveMeshCandidates.
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getActiveSubMeshCandidates.
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh, collider: BabylonjsCoreCollider) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getCollidingSubMeshCandidates.
        // TODO: type: '() => number' property (not coded) BabylonjsCoreScene.getDeterministicFrameTime.
        // TODO: type: '(mesh: BabylonjsCoreAbstractMesh, localRay: BabylonjsCoreRay) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getIntersectingSubMeshCandidates.
        // BabylonjsCoreScene.gravity (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.gravity && (!oldProps.gravity || !oldProps.gravity.equals(newProps.gravity))) {
            updates.push({
                propertyName: 'gravity',
                value: newProps.gravity,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreScene.hoverCursor (string):
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // TODO: type: 'String[]' property (not coded) BabylonjsCoreScene.importedMeshesFiles.
        // BabylonjsCoreScene.lensFlaresEnabled (boolean):
        if (oldProps.lensFlaresEnabled !== newProps.lensFlaresEnabled) {
            updates.push({
                propertyName: 'lensFlaresEnabled',
                value: newProps.lensFlaresEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.lightsEnabled (boolean):
        if (oldProps.lightsEnabled !== newProps.lightsEnabled) {
            updates.push({
                propertyName: 'lightsEnabled',
                value: newProps.lightsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.loadingPluginName (string):
        if (oldProps.loadingPluginName !== newProps.loadingPluginName) {
            updates.push({
                propertyName: 'loadingPluginName',
                value: newProps.loadingPluginName,
                type: 'string'
            });
        }
        // BabylonjsCoreScene.LongPressDelay (number):
        if (oldProps.LongPressDelay !== newProps.LongPressDelay) {
            updates.push({
                propertyName: 'LongPressDelay',
                value: newProps.LongPressDelay,
                type: 'number'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreScene.metadata.
        // TODO: type: 'BabylonjsCoreIOfflineProvider' property (not coded) BabylonjsCoreScene.offlineProvider.
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
        // xxx-ns-xxx.BabylonjsCoreScene.onAfterRenderCameraObservable of type 'BabylonjsCoreObservable<BabylonjsCoreCamera>/fn':
        if (oldProps.onAfterRenderCameraObservable === undefined && oldProps.onAfterRenderCameraObservable !== newProps.onAfterRenderCameraObservable) {
            updates.push({
                propertyName: 'onAfterRenderCameraObservable',
                value: newProps.onAfterRenderCameraObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>'
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
        // xxx-ns-xxx.BabylonjsCoreScene.onAnimationFileImportedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreScene>/fn':
        if (oldProps.onAnimationFileImportedObservable === undefined && oldProps.onAnimationFileImportedObservable !== newProps.onAnimationFileImportedObservable) {
            updates.push({
                propertyName: 'onAnimationFileImportedObservable',
                value: newProps.onAnimationFileImportedObservable,
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
        // BabylonjsCoreScene.particlesEnabled (boolean):
        if (oldProps.particlesEnabled !== newProps.particlesEnabled) {
            updates.push({
                propertyName: 'particlesEnabled',
                value: newProps.particlesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerDownPredicate.
        // TODO: type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerMovePredicate.
        // TODO: type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerUpPredicate.
        // BabylonjsCoreScene.pointerX (number):
        if (oldProps.pointerX !== newProps.pointerX) {
            updates.push({
                propertyName: 'pointerX',
                value: newProps.pointerX,
                type: 'number'
            });
        }
        // BabylonjsCoreScene.pointerY (number):
        if (oldProps.pointerY !== newProps.pointerY) {
            updates.push({
                propertyName: 'pointerY',
                value: newProps.pointerY,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCorePostProcess[]' property (not coded) BabylonjsCoreScene.postProcesses.
        // BabylonjsCoreScene.postProcessesEnabled (boolean):
        if (oldProps.postProcessesEnabled !== newProps.postProcessesEnabled) {
            updates.push({
                propertyName: 'postProcessesEnabled',
                value: newProps.postProcessesEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCorePostProcessManager' property (not coded) BabylonjsCoreScene.postProcessManager.
        // BabylonjsCoreScene.preventDefaultOnPointerDown (boolean):
        if (oldProps.preventDefaultOnPointerDown !== newProps.preventDefaultOnPointerDown) {
            updates.push({
                propertyName: 'preventDefaultOnPointerDown',
                value: newProps.preventDefaultOnPointerDown,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.preventDefaultOnPointerUp (boolean):
        if (oldProps.preventDefaultOnPointerUp !== newProps.preventDefaultOnPointerUp) {
            updates.push({
                propertyName: 'preventDefaultOnPointerUp',
                value: newProps.preventDefaultOnPointerUp,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.probesEnabled (boolean):
        if (oldProps.probesEnabled !== newProps.probesEnabled) {
            updates.push({
                propertyName: 'probesEnabled',
                value: newProps.probesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.proceduralTexturesEnabled (boolean):
        if (oldProps.proceduralTexturesEnabled !== newProps.proceduralTexturesEnabled) {
            updates.push({
                propertyName: 'proceduralTexturesEnabled',
                value: newProps.proceduralTexturesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.renderTargetsEnabled (boolean):
        if (oldProps.renderTargetsEnabled !== newProps.renderTargetsEnabled) {
            updates.push({
                propertyName: 'renderTargetsEnabled',
                value: newProps.renderTargetsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.requireLightSorting (boolean):
        if (oldProps.requireLightSorting !== newProps.requireLightSorting) {
            updates.push({
                propertyName: 'requireLightSorting',
                value: newProps.requireLightSorting,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreScene.reservedDataStore.
        // BabylonjsCoreScene.shadowsEnabled (boolean):
        if (oldProps.shadowsEnabled !== newProps.shadowsEnabled) {
            updates.push({
                propertyName: 'shadowsEnabled',
                value: newProps.shadowsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.skeletonsEnabled (boolean):
        if (oldProps.skeletonsEnabled !== newProps.skeletonsEnabled) {
            updates.push({
                propertyName: 'skeletonsEnabled',
                value: newProps.skeletonsEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.skipFrustumClipping (boolean):
        if (oldProps.skipFrustumClipping !== newProps.skipFrustumClipping) {
            updates.push({
                propertyName: 'skipFrustumClipping',
                value: newProps.skipFrustumClipping,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.spritesEnabled (boolean):
        if (oldProps.spritesEnabled !== newProps.spritesEnabled) {
            updates.push({
                propertyName: 'spritesEnabled',
                value: newProps.spritesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.texturesEnabled (boolean):
        if (oldProps.texturesEnabled !== newProps.texturesEnabled) {
            updates.push({
                propertyName: 'texturesEnabled',
                value: newProps.texturesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.useConstantAnimationDeltaTime (boolean):
        if (oldProps.useConstantAnimationDeltaTime !== newProps.useConstantAnimationDeltaTime) {
            updates.push({
                propertyName: 'useConstantAnimationDeltaTime',
                value: newProps.useConstantAnimationDeltaTime,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.useDelayedTextureLoading (boolean):
        if (oldProps.useDelayedTextureLoading !== newProps.useDelayedTextureLoading) {
            updates.push({
                propertyName: 'useDelayedTextureLoading',
                value: newProps.useDelayedTextureLoading,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.useRightHandedSystem (boolean):
        if (oldProps.useRightHandedSystem !== newProps.useRightHandedSystem) {
            updates.push({
                propertyName: 'useRightHandedSystem',
                value: newProps.useRightHandedSystem,
                type: 'boolean'
            });
        }
        // BabylonjsCoreScene.setActiveCameraByID of type '(id?: string) => BabylonjsCoreCamera':
        if (oldProps.setActiveCameraByID !== newProps.setActiveCameraByID) {
            updates.push({
                propertyName: 'setActiveCameraByID',
                value: newProps.setActiveCameraByID,
                type: '(id?: string) => BabylonjsCoreCamera'
            });
        }
        // BabylonjsCoreScene.setActiveCameraByName of type '(name?: string) => BabylonjsCoreCamera':
        if (oldProps.setActiveCameraByName !== newProps.setActiveCameraByName) {
            updates.push({
                propertyName: 'setActiveCameraByName',
                value: newProps.setActiveCameraByName,
                type: '(name?: string) => BabylonjsCoreCamera'
            });
        }
        // BabylonjsCoreScene.setPointerOverMesh of type '(mesh?: BabylonjsCoreAbstractMesh) => void':
        if (oldProps.setPointerOverMesh !== newProps.setPointerOverMesh) {
            updates.push({
                propertyName: 'setPointerOverMesh',
                value: newProps.setPointerOverMesh,
                type: '(mesh?: BabylonjsCoreAbstractMesh) => void'
            });
        }
        // BabylonjsCoreScene.setRenderingAutoClearDepthStencil of type '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean) => void':
        if (oldProps.setRenderingAutoClearDepthStencil !== newProps.setRenderingAutoClearDepthStencil) {
            updates.push({
                propertyName: 'setRenderingAutoClearDepthStencil',
                value: newProps.setRenderingAutoClearDepthStencil,
                type: '(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean) => void'
            });
        }
        // BabylonjsCoreScene.setRenderingOrder of type '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void':
        if (oldProps.setRenderingOrder !== newProps.setRenderingOrder) {
            updates.push({
                propertyName: 'setRenderingOrder',
                value: newProps.setRenderingOrder,
                type: '(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void'
            });
        }
        // BabylonjsCoreScene.setStepId of type '(newStepId?: number) => void':
        if (oldProps.setStepId !== newProps.setStepId) {
            updates.push({
                propertyName: 'setStepId',
                value: newProps.setStepId,
                type: '(newStepId?: number) => void'
            });
        }
        // BabylonjsCoreScene.setTransformMatrix of type '(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix) => void':
        if (oldProps.setTransformMatrix !== newProps.setTransformMatrix) {
            updates.push({
                propertyName: 'setTransformMatrix',
                value: newProps.setTransformMatrix,
                type: '(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

export const ADTForMesh: string = 'ADTForMesh', ADTFullscreenUI: string = 'ADTFullscreenUI', AdvancedDynamicTexture: string = 'AdvancedDynamicTexture', BaseTexture: string = 'BaseTexture', ColorGradingTexture: string = 'ColorGradingTexture', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', DynamicTerrain: string = 'DynamicTerrain', DynamicTexture: string = 'DynamicTexture', EnvironmentHelper: string = 'EnvironmentHelper', EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture', GUI3DManager: string = 'GUI3DManager', HDRCubeTexture: string = 'HDRCubeTexture', HtmlElementTexture: string = 'HtmlElementTexture', MirrorTexture: string = 'MirrorTexture', Model: string = 'Model', MultiRenderTarget: string = 'MultiRenderTarget', MultiviewRenderTarget: string = 'MultiviewRenderTarget', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PhysicsImpostor: string = 'PhysicsImpostor', ProceduralTexture: string = 'ProceduralTexture', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture2DArray: string = 'RawTexture2DArray', RawTexture3D: string = 'RawTexture3D', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', ShadowGenerator: string = 'ShadowGenerator', Texture: string = 'Texture', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture';
const classesMap: object = {
    dynamicTerrain: ExtensionsDynamicTerrain, DynamicTerrain: ExtensionsDynamicTerrain,
    abstractScene: BabylonjsCoreAbstractScene, AbstractScene: BabylonjsCoreAbstractScene,
    node: BabylonjsCoreNode, Node: BabylonjsCoreNode,
    scene: BabylonjsCoreScene, Scene: BabylonjsCoreScene,
    camera: BabylonjsCoreCamera, Camera: BabylonjsCoreCamera,
    environmentHelper: BabylonjsCoreEnvironmentHelper, EnvironmentHelper: BabylonjsCoreEnvironmentHelper,
    light: BabylonjsCoreLight, Light: BabylonjsCoreLight,
    material: BabylonjsCoreMaterial, Material: BabylonjsCoreMaterial,
    mesh: BabylonjsCoreMesh, Mesh: BabylonjsCoreMesh,
    meshBuilder: BabylonjsCoreMeshBuilder, MeshBuilder: BabylonjsCoreMeshBuilder,
    physicsImpostor: BabylonjsCorePhysicsImpostor, PhysicsImpostor: BabylonjsCorePhysicsImpostor,
    advancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture, AdvancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture,
    gui3DManager: BabylonjsGuiGUI3DManager, GUI3DManager: BabylonjsGuiGUI3DManager,
    vrExperienceHelper: BabylonjsCoreVRExperienceHelper, VRExperienceHelper: BabylonjsCoreVRExperienceHelper,
    shadowGenerator: BabylonjsCoreShadowGenerator, ShadowGenerator: BabylonjsCoreShadowGenerator,
    baseTexture: BabylonjsCoreBaseTexture, BaseTexture: BabylonjsCoreBaseTexture,
    control: BabylonjsGuiControl, Control: BabylonjsGuiControl,
    control3D: BabylonjsGuiControl3D, Control3D: BabylonjsGuiControl3D,
    cubeTexture: BabylonjsCoreCubeTexture, CubeTexture: BabylonjsCoreCubeTexture,
    rawCubeTexture: BabylonjsCoreRawCubeTexture, RawCubeTexture: BabylonjsCoreRawCubeTexture,
    texture: BabylonjsCoreTexture, Texture: BabylonjsCoreTexture,
    rawTexture: BabylonjsCoreRawTexture, RawTexture: BabylonjsCoreRawTexture,
    proceduralTexture: BabylonjsCoreProceduralTexture, ProceduralTexture: BabylonjsCoreProceduralTexture,
    customProceduralTexture: BabylonjsCoreCustomProceduralTexture, CustomProceduralTexture: BabylonjsCoreCustomProceduralTexture,
    noiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture, NoiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture,
    renderTargetTexture: BabylonjsCoreRenderTargetTexture, RenderTargetTexture: BabylonjsCoreRenderTargetTexture,
    mirrorTexture: BabylonjsCoreMirrorTexture, MirrorTexture: BabylonjsCoreMirrorTexture,
    multiRenderTarget: BabylonjsCoreMultiRenderTarget, MultiRenderTarget: BabylonjsCoreMultiRenderTarget,
    refractionTexture: BabylonjsCoreRefractionTexture, RefractionTexture: BabylonjsCoreRefractionTexture,
    multiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget, MultiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget,
    videoTexture: BabylonjsCoreVideoTexture, VideoTexture: BabylonjsCoreVideoTexture,
    dynamicTexture: BabylonjsCoreDynamicTexture, DynamicTexture: BabylonjsCoreDynamicTexture,
    rawTexture3D: BabylonjsCoreRawTexture3D, RawTexture3D: BabylonjsCoreRawTexture3D,
    rawTexture2DArray: BabylonjsCoreRawTexture2DArray, RawTexture2DArray: BabylonjsCoreRawTexture2DArray,
    colorGradingTexture: BabylonjsCoreColorGradingTexture, ColorGradingTexture: BabylonjsCoreColorGradingTexture,
    equiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture, EquiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture,
    hdrCubeTexture: BabylonjsCoreHDRCubeTexture, HDRCubeTexture: BabylonjsCoreHDRCubeTexture,
    htmlElementTexture: BabylonjsCoreHtmlElementTexture, HtmlElementTexture: BabylonjsCoreHtmlElementTexture
};
export const intrinsicClassMap: object = {
    dynamicTerrain: 'DynamicTerrain',
    abstractScene: 'AbstractScene',
    node: 'Node',
    scene: 'Scene',
    camera: 'Camera',
    environmentHelper: 'EnvironmentHelper',
    light: 'Light',
    material: 'Material',
    mesh: 'Mesh',
    meshBuilder: 'MeshBuilder',
    physicsImpostor: 'PhysicsImpostor',
    advancedDynamicTexture: 'AdvancedDynamicTexture',
    gui3DManager: 'GUI3DManager',
    vrExperienceHelper: 'VRExperienceHelper',
    shadowGenerator: 'ShadowGenerator',
    baseTexture: 'BaseTexture',
    control: 'Control',
    control3D: 'Control3D',
    cubeTexture: 'CubeTexture',
    rawCubeTexture: 'RawCubeTexture',
    texture: 'Texture',
    rawTexture: 'RawTexture',
    proceduralTexture: 'ProceduralTexture',
    customProceduralTexture: 'CustomProceduralTexture',
    noiseProceduralTexture: 'NoiseProceduralTexture',
    renderTargetTexture: 'RenderTargetTexture',
    mirrorTexture: 'MirrorTexture',
    multiRenderTarget: 'MultiRenderTarget',
    refractionTexture: 'RefractionTexture',
    multiviewRenderTarget: 'MultiviewRenderTarget',
    videoTexture: 'VideoTexture',
    dynamicTexture: 'DynamicTexture',
    rawTexture3D: 'RawTexture3D',
    rawTexture2DArray: 'RawTexture2DArray',
    colorGradingTexture: 'ColorGradingTexture',
    equiRectangularCubeTexture: 'EquiRectangularCubeTexture',
    hdrCubeTexture: 'HDRCubeTexture',
    htmlElementTexture: 'HtmlElementTexture',
    adtForMesh: 'ADTForMesh',
    adtFullscreenUi: 'ADTFullscreenUI'
};

export function babylonClassFactory(importAlias: string): any {
    return (classesMap as any)[importAlias];
}
