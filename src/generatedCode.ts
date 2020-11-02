import { PropsHandler, PropertyUpdate, HasPropsHandlers, checkColor3Diff, checkColor4Diff, checkControlDiff, checkFresnelParametersDiff, checkLambdaDiff, checkMethodDiff, checkNumericArrayDiff, checkObjectDiff, checkObservableDiff, checkPrimitiveDiff, checkQuaternionDiff, checkTextureDiff, checkVector3Diff } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberInstancedMeshProps, FiberInstancedLinesMeshProps, FiberMeshProps, FiberLinesMeshProps, FiberGroundMeshProps, FiberTrailMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberPushMaterialProps, FiberNodeMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberFluentMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberControlProps, FiberContainerProps, FiberRectangleProps, FiberButtonProps, FiberSelectionPanelProps, FiberScrollViewerProps, FiberStackPanelProps, FiberVirtualKeyboardProps, FiberEllipseProps, FiberGridProps, Fiber_ScrollViewerWindowProps, FiberTextBlockProps, FiberImageProps, FiberCheckboxProps, FiberColorPickerProps, FiberInputTextProps, FiberInputPasswordProps, FiberLineProps, FiberMultiLineProps, FiberRadioButtonProps, FiberBaseSliderProps, FiberScrollBarProps, FiberImageScrollBarProps, FiberSliderProps, FiberImageBasedSliderProps, FiberDisplayGridProps, FiberControl3DProps, FiberContainer3DProps, FiberVolumeBasedPanelProps, FiberCylinderPanelProps, FiberPlanePanelProps, FiberScatterPanelProps, FiberSpherePanelProps, FiberStackPanel3DProps, FiberAbstractButton3DProps, FiberButton3DProps, FiberHolographicButtonProps, FiberMeshButton3DProps, FiberEffectLayerProps, FiberGlowLayerProps, FiberHighlightLayerProps, FiberThinTextureProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture2DArrayProps, FiberRawTexture3DProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberCascadedShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberPointsCloudSystemProps, FiberAutoRotationBehaviorProps, FiberBouncingBehaviorProps, FiberFramingBehaviorProps, FiberAttachToBoxBehaviorProps, FiberFadeInOutBehaviorProps, FiberMultiPointerScaleBehaviorProps, FiberPointerDragBehaviorProps, FiberSixDofDragBehaviorProps, FiberSceneProps } from "./generatedProps";
import { DynamicTerrain as ExtensionsDynamicTerrain } from "./extensions/DynamicTerrain";
import { AbstractScene as BabylonjsCoreAbstractScene } from "@babylonjs/core/abstractScene";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { DebugLayerTab as BabylonjsCoreDebugLayerTab } from "@babylonjs/core/Debug/debugLayer";
import { DualShockButton as BabylonjsCoreDualShockButton, DualShockDpad as BabylonjsCoreDualShockDpad } from "@babylonjs/core/Gamepads/dualShockGamepad";
import { Xbox360Button as BabylonjsCoreXbox360Button, Xbox360Dpad as BabylonjsCoreXbox360Dpad } from "@babylonjs/core/Gamepads/xboxGamepad";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper, IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions } from "@babylonjs/core/Helpers/environmentHelper";
import { EffectLayer as BabylonjsCoreEffectLayer } from "@babylonjs/core/Layers/effectLayer";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { SceneLoaderAnimationGroupLoadingMode as BabylonjsCoreSceneLoaderAnimationGroupLoadingMode } from "@babylonjs/core/Loading/sceneLoader";
import { Material as BabylonjsCoreMaterial, ICustomShaderNameResolveOptions as BabylonjsCoreICustomShaderNameResolveOptions } from "@babylonjs/core/Materials/material";
import { Space as BabylonjsCoreSpace, Coordinate as BabylonjsCoreCoordinate } from "@babylonjs/core/Maths/math.axis";
import { Orientation as BabylonjsCoreOrientation } from "@babylonjs/core/Maths/math.path";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder as BabylonjsCoreMeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { AssetTaskState as BabylonjsCoreAssetTaskState } from "@babylonjs/core/Misc/assetsManager";
import { InspectableType as BabylonjsCoreInspectableType, IInspectable as BabylonjsCoreIInspectable } from "@babylonjs/core/Misc/iInspectable";
import { TimerState as BabylonjsCoreTimerState } from "@babylonjs/core/Misc/timer";
import { JoystickAxis as BabylonjsCoreJoystickAxis } from "@babylonjs/core/Misc/virtualJoystick";
import { PointsCloudSystem as BabylonjsCorePointsCloudSystem, PointColor as BabylonjsCorePointColor } from "@babylonjs/core/Particles/pointsCloudSystem";
import { SubEmitterType as BabylonjsCoreSubEmitterType } from "@babylonjs/core/Particles/subEmitter";
import { PhysicsRadialImpulseFalloff as BabylonjsCorePhysicsRadialImpulseFalloff, PhysicsUpdraftMode as BabylonjsCorePhysicsUpdraftMode } from "@babylonjs/core/Physics/physicsHelper";
import { PhysicsImpostor as BabylonjsCorePhysicsImpostor, IPhysicsEnabledObject as BabylonjsCoreIPhysicsEnabledObject, PhysicsImpostorParameters as BabylonjsCorePhysicsImpostorParameters } from "@babylonjs/core/Physics/physicsImpostor";
import { DepthOfFieldEffectBlurLevel as BabylonjsCoreDepthOfFieldEffectBlurLevel } from "@babylonjs/core/PostProcesses/depthOfFieldEffect";
import { TonemappingOperator as BabylonjsCoreTonemappingOperator } from "@babylonjs/core/PostProcesses/tonemapPostProcess";
import { WebXRState as BabylonjsCoreWebXRState, WebXRTrackingState as BabylonjsCoreWebXRTrackingState } from "@babylonjs/core/XR/webXRTypes";
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture, IFocusableControl as BabylonjsGuiIFocusableControl } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { GUI3DManager as BabylonjsGuiGUI3DManager } from "@babylonjs/gui/3D/gui3DManager";
import { AutoRotationBehavior as BabylonjsCoreAutoRotationBehavior } from "@babylonjs/core/Behaviors/Cameras/autoRotationBehavior";
import { BouncingBehavior as BabylonjsCoreBouncingBehavior } from "@babylonjs/core/Behaviors/Cameras/bouncingBehavior";
import { FramingBehavior as BabylonjsCoreFramingBehavior } from "@babylonjs/core/Behaviors/Cameras/framingBehavior";
import { AttachToBoxBehavior as BabylonjsCoreAttachToBoxBehavior } from "@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior";
import { FadeInOutBehavior as BabylonjsCoreFadeInOutBehavior } from "@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior";
import { MultiPointerScaleBehavior as BabylonjsCoreMultiPointerScaleBehavior } from "@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior";
import { PointerDragBehavior as BabylonjsCorePointerDragBehavior } from "@babylonjs/core/Behaviors/Meshes/pointerDragBehavior";
import { SixDofDragBehavior as BabylonjsCoreSixDofDragBehavior } from "@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper, OnAfterEnteringVRObservableEvent as BabylonjsCoreOnAfterEnteringVRObservableEvent, VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions, VRTeleportationOptions as BabylonjsCoreVRTeleportationOptions } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { DeviceType as BabylonjsCoreDeviceType, PointerInput as BabylonjsCorePointerInput, DualShockInput as BabylonjsCoreDualShockInput, XboxInput as BabylonjsCoreXboxInput, SwitchInput as BabylonjsCoreSwitchInput } from "@babylonjs/core/DeviceInput/InputDevices/deviceEnums";
import { PoseEnabledControllerType as BabylonjsCorePoseEnabledControllerType } from "@babylonjs/core/Gamepads/Controllers/poseEnabledController";
import { CascadedShadowGenerator as BabylonjsCoreCascadedShadowGenerator } from "@babylonjs/core/Lights/Shadows/cascadedShadowGenerator";
import { ShadowGenerator as BabylonjsCoreShadowGenerator, ICustomShaderOptions as BabylonjsCoreICustomShaderOptions } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { NodeMaterialConnectionPointCompatibilityStates as BabylonjsCoreNodeMaterialConnectionPointCompatibilityStates, NodeMaterialConnectionPointDirection as BabylonjsCoreNodeMaterialConnectionPointDirection } from "@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint";
import { PropertyTypeForEdition as BabylonjsCorePropertyTypeForEdition } from "@babylonjs/core/Materials/Node/nodeMaterialDecorator";
import { InternalTextureSource as BabylonjsCoreInternalTextureSource, InternalTexture as BabylonjsCoreInternalTexture } from "@babylonjs/core/Materials/Textures/internalTexture";
import { ThinTexture as BabylonjsCoreThinTexture } from "@babylonjs/core/Materials/Textures/thinTexture";
import { HandPart as BabylonjsCoreHandPart } from "@babylonjs/core/XR/features/WebXRHandTracking";
import { Control as BabylonjsGuiControl } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping as BabylonjsGuiTextWrapping, TextBlock as BabylonjsGuiTextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Control3D as BabylonjsGuiControl3D } from "@babylonjs/gui/3D/controls/control3D";
import { TrigonometryBlockOperations as BabylonjsCoreTrigonometryBlockOperations } from "@babylonjs/core/Materials/Node/Blocks/trigonometryBlock";
import { WaveBlockKind as BabylonjsCoreWaveBlockKind } from "@babylonjs/core/Materials/Node/Blocks/waveBlock";
import { NodeMaterialBlockConnectionPointMode as BabylonjsCoreNodeMaterialBlockConnectionPointMode } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode";
import { NodeMaterialBlockConnectionPointTypes as BabylonjsCoreNodeMaterialBlockConnectionPointTypes } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes";
import { NodeMaterialBlockTargets as BabylonjsCoreNodeMaterialBlockTargets } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets";
import { NodeMaterialModes as BabylonjsCoreNodeMaterialModes } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialModes";
import { NodeMaterialSystemValues as BabylonjsCoreNodeMaterialSystemValues } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues";
import { AnimatedInputBlockTypes as BabylonjsCoreAnimatedInputBlockTypes } from "@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from "@babylonjs/core/Animations/animationPropertiesOverride";
import { Animation as BabylonjsCoreAnimation } from "@babylonjs/core/Animations/animation";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { Behavior as BabylonjsCoreBehavior } from "@babylonjs/core/Behaviors/behavior";
import { Vector3 as BabylonjsCoreVector3, Quaternion as BabylonjsCoreQuaternion, Matrix as BabylonjsCoreMatrix, Vector2 as BabylonjsCoreVector2, Vector4 as BabylonjsCoreVector4 } from "@babylonjs/core/Maths/math.vector";
import { DeepImmutableObject as BabylonjsCoreDeepImmutableObject, IndicesArray as BabylonjsCoreIndicesArray, FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from "@babylonjs/core/Actions/abstractActionManager";
import { Color4 as BabylonjsCoreColor4, Color3 as BabylonjsCoreColor3 } from "@babylonjs/core/Maths/math.color";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { IEdgesRendererOptions as BabylonjsCoreIEdgesRendererOptions } from "@babylonjs/core/Rendering/edgesRenderer";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { InstancedMesh as BabylonjsCoreInstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { InstancedLinesMesh as BabylonjsCoreInstancedLinesMesh, LinesMesh as BabylonjsCoreLinesMesh } from "@babylonjs/core/Meshes/linesMesh";
import { MorphTargetManager as BabylonjsCoreMorphTargetManager } from "@babylonjs/core/Morph/morphTargetManager";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
import { GroundMesh as BabylonjsCoreGroundMesh } from "@babylonjs/core/Meshes/groundMesh";
import { TrailMesh as BabylonjsCoreTrailMesh } from "@babylonjs/core/Meshes/trailMesh";
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from "@babylonjs/core/Materials/Textures/renderTargetTexture";
import { CameraInputsManager as BabylonjsCoreCameraInputsManager } from "@babylonjs/core/Cameras/cameraInputsManager";
import { Viewport as BabylonjsCoreViewport } from "@babylonjs/core/Maths/math.viewport";
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
import { WebXRCamera as BabylonjsCoreWebXRCamera } from "@babylonjs/core/XR/webXRCamera";
import { WebXRSessionManager as BabylonjsCoreWebXRSessionManager } from "@babylonjs/core/XR/webXRSessionManager";
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraInputsManager as BabylonjsCoreArcRotateCameraInputsManager } from "@babylonjs/core/Cameras/arcRotateCameraInputsManager";
import { AnaglyphArcRotateCamera as BabylonjsCoreAnaglyphArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera";
import { StereoscopicArcRotateCamera as BabylonjsCoreStereoscopicArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera";
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera";
import { FlyCamera as BabylonjsCoreFlyCamera } from "@babylonjs/core/Cameras/flyCamera";
import { FlyCameraInputsManager as BabylonjsCoreFlyCameraInputsManager } from "@babylonjs/core/Cameras/flyCameraInputsManager";
import { FollowCamera as BabylonjsCoreFollowCamera, ArcFollowCamera as BabylonjsCoreArcFollowCamera } from "@babylonjs/core/Cameras/followCamera";
import { FollowCameraInputsManager as BabylonjsCoreFollowCameraInputsManager } from "@babylonjs/core/Cameras/followCameraInputsManager";
import { Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math.plane";
import { ICreateCapsuleOptions as BabylonjsCoreICreateCapsuleOptions } from "@babylonjs/core/Meshes/Builders/capsuleBuilder";
import { MaterialDefines as BabylonjsCoreMaterialDefines } from "@babylonjs/core/Materials/materialDefines";
import { SmartArray as BabylonjsCoreSmartArray, ISmartArrayLike as BabylonjsCoreISmartArrayLike } from "@babylonjs/core/Misc/smartArray";
import { Effect as BabylonjsCoreEffect } from "@babylonjs/core/Materials/effect";
import { ShadowDepthWrapper as BabylonjsCoreShadowDepthWrapper } from "@babylonjs/core/Materials/shadowDepthWrapper";
import { PrePassRenderer as BabylonjsCorePrePassRenderer } from "@babylonjs/core/Rendering/prePassRenderer";
import { PushMaterial as BabylonjsCorePushMaterial } from "@babylonjs/core/Materials/pushMaterial";
import { NodeMaterial as BabylonjsCoreNodeMaterial, INodeMaterialOptions as BabylonjsCoreINodeMaterialOptions } from "@babylonjs/core/Materials/Node/nodeMaterial";
import { NodeMaterialBlock as BabylonjsCoreNodeMaterialBlock } from "@babylonjs/core/Materials/Node/nodeMaterialBlock";
import { ImageProcessingConfiguration as BabylonjsCoreImageProcessingConfiguration } from "@babylonjs/core/Materials/imageProcessingConfiguration";
import { StandardMaterial as BabylonjsCoreStandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { ColorCurves as BabylonjsCoreColorCurves } from "@babylonjs/core/Materials/colorCurves";
import { FresnelParameters as BabylonjsCoreFresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from "@babylonjs/core/Materials/Background/backgroundMaterial";
import { IShadowLight as BabylonjsCoreIShadowLight, ShadowLight as BabylonjsCoreShadowLight } from "@babylonjs/core/Lights/shadowLight";
import { PBRBaseMaterial as BabylonjsCorePBRBaseMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseMaterial";
import { PBRBaseSimpleMaterial as BabylonjsCorePBRBaseSimpleMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial";
import { PBRMetallicRoughnessMaterial as BabylonjsCorePBRMetallicRoughnessMaterial } from "@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial";
import { PBRSpecularGlossinessMaterial as BabylonjsCorePBRSpecularGlossinessMaterial } from "@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial";
import { PBRMaterial as BabylonjsCorePBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { FluentMaterial as BabylonjsGuiFluentMaterial } from "@babylonjs/gui/3D/materials/fluentMaterial";
import { ShaderMaterial as BabylonjsCoreShaderMaterial, IShaderMaterialOptions as BabylonjsCoreIShaderMaterialOptions } from "@babylonjs/core/Materials/shaderMaterial";
import { MultiMaterial as BabylonjsCoreMultiMaterial } from "@babylonjs/core/Materials/multiMaterial";
import { DirectionalLight as BabylonjsCoreDirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { PointLight as BabylonjsCorePointLight } from "@babylonjs/core/Lights/pointLight";
import { SpotLight as BabylonjsCoreSpotLight } from "@babylonjs/core/Lights/spotLight";
import { HemisphericLight as BabylonjsCoreHemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector2WithInfo as BabylonjsGuiVector2WithInfo } from "@babylonjs/gui/2D/math2D";
import { Container as BabylonjsGuiContainer } from "@babylonjs/gui/2D/controls/container";
import { Style as BabylonjsGuiStyle } from "@babylonjs/gui/2D/style";
import { Rectangle as BabylonjsGuiRectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { Button as BabylonjsGuiButton } from "@babylonjs/gui/2D/controls/button";
import { SelectionPanel as BabylonjsGuiSelectionPanel, SelectorGroup as BabylonjsGuiSelectorGroup } from "@babylonjs/gui/2D/controls/selector";
import { ScrollViewer as BabylonjsGuiScrollViewer } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewer";
import { Image as BabylonjsGuiImage } from "@babylonjs/gui/2D/controls/image";
import { StackPanel as BabylonjsGuiStackPanel } from "@babylonjs/gui/2D/controls/stackPanel";
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard, KeyPropertySet as BabylonjsGuiKeyPropertySet } from "@babylonjs/gui/2D/controls/virtualKeyboard";
import { Ellipse as BabylonjsGuiEllipse } from "@babylonjs/gui/2D/controls/ellipse";
import { Grid as BabylonjsGuiGrid } from "@babylonjs/gui/2D/controls/grid";
import { _ScrollViewerWindow as BabylonjsGui_ScrollViewerWindow } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow";
import { Checkbox as BabylonjsGuiCheckbox } from "@babylonjs/gui/2D/controls/checkbox";
import { ColorPicker as BabylonjsGuiColorPicker } from "@babylonjs/gui/2D/controls/colorpicker";
import { InputText as BabylonjsGuiInputText } from "@babylonjs/gui/2D/controls/inputText";
import { InputPassword as BabylonjsGuiInputPassword } from "@babylonjs/gui/2D/controls/inputPassword";
import { Line as BabylonjsGuiLine } from "@babylonjs/gui/2D/controls/line";
import { MultiLine as BabylonjsGuiMultiLine } from "@babylonjs/gui/2D/controls/multiLine";
import { MultiLinePoint as BabylonjsGuiMultiLinePoint } from "@babylonjs/gui/2D/multiLinePoint";
import { RadioButton as BabylonjsGuiRadioButton } from "@babylonjs/gui/2D/controls/radioButton";
import { BaseSlider as BabylonjsGuiBaseSlider } from "@babylonjs/gui/2D/controls/sliders/baseSlider";
import { ScrollBar as BabylonjsGuiScrollBar } from "@babylonjs/gui/2D/controls/sliders/scrollBar";
import { ImageScrollBar as BabylonjsGuiImageScrollBar } from "@babylonjs/gui/2D/controls/sliders/imageScrollBar";
import { Slider as BabylonjsGuiSlider } from "@babylonjs/gui/2D/controls/sliders/slider";
import { ImageBasedSlider as BabylonjsGuiImageBasedSlider } from "@babylonjs/gui/2D/controls/sliders/imageBasedSlider";
import { DisplayGrid as BabylonjsGuiDisplayGrid } from "@babylonjs/gui/2D/controls/displayGrid";
import { Vector3WithInfo as BabylonjsGuiVector3WithInfo } from "@babylonjs/gui/3D/vector3WithInfo";
import { Container3D as BabylonjsGuiContainer3D } from "@babylonjs/gui/3D/controls/container3D";
import { VolumeBasedPanel as BabylonjsGuiVolumeBasedPanel } from "@babylonjs/gui/3D/controls/volumeBasedPanel";
import { CylinderPanel as BabylonjsGuiCylinderPanel } from "@babylonjs/gui/3D/controls/cylinderPanel";
import { PlanePanel as BabylonjsGuiPlanePanel } from "@babylonjs/gui/3D/controls/planePanel";
import { ScatterPanel as BabylonjsGuiScatterPanel } from "@babylonjs/gui/3D/controls/scatterPanel";
import { SpherePanel as BabylonjsGuiSpherePanel } from "@babylonjs/gui/3D/controls/spherePanel";
import { StackPanel3D as BabylonjsGuiStackPanel3D } from "@babylonjs/gui/3D/controls/stackPanel3D";
import { AbstractButton3D as BabylonjsGuiAbstractButton3D } from "@babylonjs/gui/3D/controls/abstractButton3D";
import { Button3D as BabylonjsGuiButton3D } from "@babylonjs/gui/3D/controls/button3D";
import { HolographicButton as BabylonjsGuiHolographicButton } from "@babylonjs/gui/3D/controls/holographicButton";
import { MeshButton3D as BabylonjsGuiMeshButton3D } from "@babylonjs/gui/3D/controls/meshButton3D";
import { GlowLayer as BabylonjsCoreGlowLayer, IGlowLayerOptions as BabylonjsCoreIGlowLayerOptions } from "@babylonjs/core/Layers/glowLayer";
import { Texture as BabylonjsCoreTexture } from "@babylonjs/core/Materials/Textures/texture";
import { HighlightLayer as BabylonjsCoreHighlightLayer, IHighlightLayerOptions as BabylonjsCoreIHighlightLayerOptions } from "@babylonjs/core/Layers/highlightLayer";
import { ThinEngine as BabylonjsCoreThinEngine } from "@babylonjs/core/Engines/thinEngine";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { RenderTargetTextureSize as BabylonjsCoreRenderTargetTextureSize } from "@babylonjs/core/Engines/Extensions/engine.renderTarget";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { Engine as BabylonjsCoreEngine } from "@babylonjs/core/Engines/engine";
import { PostProcess as BabylonjsCorePostProcess } from "@babylonjs/core/PostProcesses/postProcess";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget, IMultiRenderTargetOptions as BabylonjsCoreIMultiRenderTargetOptions } from "@babylonjs/core/Materials/Textures/multiRenderTarget";
import { RefractionTexture as BabylonjsCoreRefractionTexture } from "@babylonjs/core/Materials/Textures/refractionTexture";
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from "@babylonjs/core/Materials/Textures/MultiviewRenderTarget";
import { VideoTexture as BabylonjsCoreVideoTexture, VideoTextureSettings as BabylonjsCoreVideoTextureSettings } from "@babylonjs/core/Materials/Textures/videoTexture";
import { DynamicTexture as BabylonjsCoreDynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { ClipboardInfo as BabylonjsCoreClipboardInfo } from "@babylonjs/core/Events/clipboardEvents";
import { RawTexture2DArray as BabylonjsCoreRawTexture2DArray } from "@babylonjs/core/Materials/Textures/rawTexture2DArray";
import { RawTexture3D as BabylonjsCoreRawTexture3D } from "@babylonjs/core/Materials/Textures/rawTexture3D";
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from "@babylonjs/core/Materials/Textures/colorGradingTexture";
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture";
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture";
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture, IHtmlElementTextureOptions as BabylonjsCoreIHtmlElementTextureOptions } from "@babylonjs/core/Materials/Textures/htmlElementTexture";
import { DepthRenderer as BabylonjsCoreDepthRenderer } from "@babylonjs/core/Rendering/depthRenderer";
import { PhysicsJoint as BabylonjsCorePhysicsJoint } from "@babylonjs/core/Physics/physicsJoint";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { WebXRDefaultExperience as BabylonjsCoreWebXRDefaultExperience } from "@babylonjs/core/XR/webXRDefaultExperience";
import { SolidParticleSystem as BabylonjsCoreSolidParticleSystem } from "@babylonjs/core/Particles/solidParticleSystem";
import { CloudPoint as BabylonjsCoreCloudPoint } from "@babylonjs/core/Particles/cloudPoint";
import { IPhysicsEnginePlugin as BabylonjsCoreIPhysicsEnginePlugin } from "@babylonjs/core/Physics/IPhysicsEngine";
import { Collider as BabylonjsCoreCollider } from "@babylonjs/core/Collisions/collider";
import { Ray as BabylonjsCoreRay } from "@babylonjs/core/Culling/ray";
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from "@babylonjs/core/Offline/IOfflineProvider";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo, KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerEventTypes as BabylonjsCorePointerEventTypes, PointerInfo as BabylonjsCorePointerInfo, PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { PostProcessManager as BabylonjsCorePostProcessManager } from "@babylonjs/core/PostProcesses/postProcessManager";
import { AnimationGroup as BabylonjsCoreAnimationGroup } from "@babylonjs/core/Animations/animationGroup";
import { IParticleSystem as BabylonjsCoreIParticleSystem } from "@babylonjs/core/Particles/IParticleSystem";

export class FiberNodePropsHandler implements PropsHandler<FiberNodeProps> {
    getPropertyUpdates(oldProps: FiberNodeProps, newProps: FiberNodeProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreNode.animationPropertiesOverride.
        // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreNode.animations.
        checkPrimitiveDiff(oldProps.doNotSerialize, newProps.doNotSerialize, 'doNotSerialize', changedProps)
        checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
        // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreNode.inspectableCustomProperties.
        // type: 'any' property (not coded) BabylonjsCoreNode.metadata.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        checkLambdaDiff(oldProps.onReady, newProps.onReady, 'onReady', changedProps)
        // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreNode.parent.
        // type: 'any' property (not coded) BabylonjsCoreNode.reservedDataStore.
        checkPrimitiveDiff(oldProps.state, newProps.state, 'state', changedProps)
        checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
        checkMethodDiff(oldProps.addBehavior, newProps.addBehavior, 'addBehavior', changedProps)
        checkMethodDiff(oldProps.setEnabled, newProps.setEnabled, 'setEnabled', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 *
 * This code has been generated
 */
export class FiberNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers: PropsHandler<FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Node",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberNode"
    };
}

export class FiberTransformNodePropsHandler implements PropsHandler<FiberTransformNodeProps> {
    getPropertyUpdates(oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.billboardMode, newProps.billboardMode, 'billboardMode', changedProps)
        checkPrimitiveDiff(oldProps.ignoreNonUniformScaling, newProps.ignoreNonUniformScaling, 'ignoreNonUniformScaling', changedProps)
        checkPrimitiveDiff(oldProps.infiniteDistance, newProps.infiniteDistance, 'infiniteDistance', changedProps)
        checkObservableDiff(oldProps.onAfterWorldMatrixUpdateObservable, newProps.onAfterWorldMatrixUpdateObservable, 'onAfterWorldMatrixUpdateObservable', changedProps)
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        checkPrimitiveDiff(oldProps.preserveParentRotationForBillboard, newProps.preserveParentRotationForBillboard, 'preserveParentRotationForBillboard', changedProps)
        checkPrimitiveDiff(oldProps.reIntegrateRotationIntoRotationQuaternion, newProps.reIntegrateRotationIntoRotationQuaternion, 'reIntegrateRotationIntoRotationQuaternion', changedProps)
        checkVector3Diff(oldProps.rotation, newProps.rotation, 'rotation', changedProps)
        checkPrimitiveDiff(oldProps['rotation-x'], newProps['rotation-x'], 'rotation.x', changedProps)
        checkPrimitiveDiff(oldProps['rotation-y'], newProps['rotation-y'], 'rotation.y', changedProps)
        checkPrimitiveDiff(oldProps['rotation-z'], newProps['rotation-z'], 'rotation.z', changedProps)
        checkQuaternionDiff(oldProps.rotationQuaternion, newProps.rotationQuaternion, 'rotationQuaternion', changedProps)
        checkVector3Diff(oldProps.scaling, newProps.scaling, 'scaling', changedProps)
        checkPrimitiveDiff(oldProps['scaling-x'], newProps['scaling-x'], 'scaling.x', changedProps)
        checkPrimitiveDiff(oldProps['scaling-y'], newProps['scaling-y'], 'scaling.y', changedProps)
        checkPrimitiveDiff(oldProps['scaling-z'], newProps['scaling-z'], 'scaling.z', changedProps)
        checkPrimitiveDiff(oldProps.scalingDeterminant, newProps.scalingDeterminant, 'scalingDeterminant', changedProps)
        checkMethodDiff(oldProps.addRotation, newProps.addRotation, 'addRotation', changedProps)
        checkMethodDiff(oldProps.setAbsolutePosition, newProps.setAbsolutePosition, 'setAbsolutePosition', changedProps)
        checkMethodDiff(oldProps.setDirection, newProps.setDirection, 'setDirection', changedProps)
        checkMethodDiff(oldProps.setParent, newProps.setParent, 'setParent', changedProps)
        checkMethodDiff(oldProps.setPivotMatrix, newProps.setPivotMatrix, 'setPivotMatrix', changedProps)
        checkMethodDiff(oldProps.setPivotPoint, newProps.setPivotPoint, 'setPivotPoint', changedProps)
        checkMethodDiff(oldProps.setPositionWithLocalVector, newProps.setPositionWithLocalVector, 'setPositionWithLocalVector', changedProps)
        checkMethodDiff(oldProps.setPreTransformMatrix, newProps.setPreTransformMatrix, 'setPreTransformMatrix', changedProps)
        checkMethodDiff(oldProps.translate, newProps.translate, 'translate', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 *
 * This code has been generated
 */
export class FiberTransformNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers: PropsHandler<FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TransformNode",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberTransformNode"
    };
}

export class FiberAbstractMeshPropsHandler implements PropsHandler<FiberAbstractMeshProps> {
    getPropertyUpdates(oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreAbstractMesh.actionManager.
        checkPrimitiveDiff(oldProps.alphaIndex, newProps.alphaIndex, 'alphaIndex', changedProps)
        checkPrimitiveDiff(oldProps.alwaysSelectAsActiveMesh, newProps.alwaysSelectAsActiveMesh, 'alwaysSelectAsActiveMesh', changedProps)
        checkPrimitiveDiff(oldProps.applyFog, newProps.applyFog, 'applyFog', changedProps)
        checkPrimitiveDiff(oldProps.checkCollisions, newProps.checkCollisions, 'checkCollisions', changedProps)
        checkPrimitiveDiff(oldProps.collisionGroup, newProps.collisionGroup, 'collisionGroup', changedProps)
        checkPrimitiveDiff(oldProps.collisionMask, newProps.collisionMask, 'collisionMask', changedProps)
        checkPrimitiveDiff(oldProps.collisionResponse, newProps.collisionResponse, 'collisionResponse', changedProps)
        checkPrimitiveDiff(oldProps.computeBonesUsingShaders, newProps.computeBonesUsingShaders, 'computeBonesUsingShaders', changedProps)
        checkPrimitiveDiff(oldProps.cullingStrategy, newProps.cullingStrategy, 'cullingStrategy', changedProps)
        checkPrimitiveDiff(oldProps.definedFacingForward, newProps.definedFacingForward, 'definedFacingForward', changedProps)
        checkPrimitiveDiff(oldProps.doNotSyncBoundingInfo, newProps.doNotSyncBoundingInfo, 'doNotSyncBoundingInfo', changedProps)
        checkColor4Diff(oldProps.edgesColor, newProps.edgesColor, 'edgesColor', changedProps)
        checkPrimitiveDiff(oldProps.edgesWidth, newProps.edgesWidth, 'edgesWidth', changedProps)
        checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-x'], newProps['ellipsoid-x'], 'ellipsoid.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-y'], newProps['ellipsoid-y'], 'ellipsoid.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-z'], newProps['ellipsoid-z'], 'ellipsoid.z', changedProps)
        checkVector3Diff(oldProps.ellipsoidOffset, newProps.ellipsoidOffset, 'ellipsoidOffset', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-x'], newProps['ellipsoidOffset-x'], 'ellipsoidOffset.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-y'], newProps['ellipsoidOffset-y'], 'ellipsoidOffset.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-z'], newProps['ellipsoidOffset-z'], 'ellipsoidOffset.z', changedProps)
        checkPrimitiveDiff(oldProps.enablePointerMoveEvents, newProps.enablePointerMoveEvents, 'enablePointerMoveEvents', changedProps)
        checkVector3Diff(oldProps.facetDepthSortFrom, newProps.facetDepthSortFrom, 'facetDepthSortFrom', changedProps)
        checkPrimitiveDiff(oldProps['facetDepthSortFrom-x'], newProps['facetDepthSortFrom-x'], 'facetDepthSortFrom.x', changedProps)
        checkPrimitiveDiff(oldProps['facetDepthSortFrom-y'], newProps['facetDepthSortFrom-y'], 'facetDepthSortFrom.y', changedProps)
        checkPrimitiveDiff(oldProps['facetDepthSortFrom-z'], newProps['facetDepthSortFrom-z'], 'facetDepthSortFrom.z', changedProps)
        checkPrimitiveDiff(oldProps.hasVertexAlpha, newProps.hasVertexAlpha, 'hasVertexAlpha', changedProps)
        checkObjectDiff(oldProps.instancedBuffers, newProps.instancedBuffers, 'instancedBuffers', changedProps)
        checkPrimitiveDiff(oldProps.isBlocker, newProps.isBlocker, 'isBlocker', changedProps)
        checkPrimitiveDiff(oldProps.isPickable, newProps.isPickable, 'isPickable', changedProps)
        checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
        checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
        // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreAbstractMesh.material.
        checkPrimitiveDiff(oldProps.mustDepthSortFacets, newProps.mustDepthSortFacets, 'mustDepthSortFacets', changedProps)
        checkPrimitiveDiff(oldProps.numBoneInfluencers, newProps.numBoneInfluencers, 'numBoneInfluencers', changedProps)
        checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
        checkObservableDiff(oldProps.onCollideObservable, newProps.onCollideObservable, 'onCollideObservable', changedProps)
        checkLambdaDiff(oldProps.onCollisionPositionChange, newProps.onCollisionPositionChange, 'onCollisionPositionChange', changedProps)
        checkObservableDiff(oldProps.onCollisionPositionChangeObservable, newProps.onCollisionPositionChangeObservable, 'onCollisionPositionChangeObservable', changedProps)
        checkObservableDiff(oldProps.onMaterialChangedObservable, newProps.onMaterialChangedObservable, 'onMaterialChangedObservable', changedProps)
        checkObservableDiff(oldProps.onRebuildObservable, newProps.onRebuildObservable, 'onRebuildObservable', changedProps)
        checkColor3Diff(oldProps.outlineColor, newProps.outlineColor, 'outlineColor', changedProps)
        checkPrimitiveDiff(oldProps.outlineWidth, newProps.outlineWidth, 'outlineWidth', changedProps)
        checkPrimitiveDiff(oldProps.overlayAlpha, newProps.overlayAlpha, 'overlayAlpha', changedProps)
        checkColor3Diff(oldProps.overlayColor, newProps.overlayColor, 'overlayColor', changedProps)
        checkPrimitiveDiff(oldProps.partitioningBBoxRatio, newProps.partitioningBBoxRatio, 'partitioningBBoxRatio', changedProps)
        checkPrimitiveDiff(oldProps.partitioningSubdivisions, newProps.partitioningSubdivisions, 'partitioningSubdivisions', changedProps)
        checkPrimitiveDiff(oldProps.receiveShadows, newProps.receiveShadows, 'receiveShadows', changedProps)
        checkPrimitiveDiff(oldProps.renderingGroupId, newProps.renderingGroupId, 'renderingGroupId', changedProps)
        checkVector3Diff(oldProps.scaling, newProps.scaling, 'scaling', changedProps)
        checkPrimitiveDiff(oldProps['scaling-x'], newProps['scaling-x'], 'scaling.x', changedProps)
        checkPrimitiveDiff(oldProps['scaling-y'], newProps['scaling-y'], 'scaling.y', changedProps)
        checkPrimitiveDiff(oldProps['scaling-z'], newProps['scaling-z'], 'scaling.z', changedProps)
        checkPrimitiveDiff(oldProps.showSubMeshesBoundingBox, newProps.showSubMeshesBoundingBox, 'showSubMeshesBoundingBox', changedProps)
        // type: 'BabylonjsCoreSkeleton' property (not coded) BabylonjsCoreAbstractMesh.skeleton.
        // type: 'BabylonjsCoreSubMesh[]' property (not coded) BabylonjsCoreAbstractMesh.subMeshes.
        // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreAbstractMesh.surroundingMeshes.
        checkPrimitiveDiff(oldProps.useOctreeForCollisions, newProps.useOctreeForCollisions, 'useOctreeForCollisions', changedProps)
        checkPrimitiveDiff(oldProps.useOctreeForPicking, newProps.useOctreeForPicking, 'useOctreeForPicking', changedProps)
        checkPrimitiveDiff(oldProps.useOctreeForRenderingSelection, newProps.useOctreeForRenderingSelection, 'useOctreeForRenderingSelection', changedProps)
        checkPrimitiveDiff(oldProps.useVertexColors, newProps.useVertexColors, 'useVertexColors', changedProps)
        checkPrimitiveDiff(oldProps.visibility, newProps.visibility, 'visibility', changedProps)
        checkMethodDiff(oldProps.addChild, newProps.addChild, 'addChild', changedProps)
        checkMethodDiff(oldProps.enableEdgesRendering, newProps.enableEdgesRendering, 'enableEdgesRendering', changedProps)
        checkMethodDiff(oldProps.setBoundingInfo, newProps.setBoundingInfo, 'setBoundingInfo', changedProps)
        checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
        checkMethodDiff(oldProps.setVerticesData, newProps.setVerticesData, 'setVerticesData', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to store all common mesh properties
 *
 * This code has been generated
 */
export class FiberAbstractMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractMesh",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberAbstractMesh"
    };
}

export class FiberInstancedMeshPropsHandler implements PropsHandler<FiberInstancedMeshProps> {
    getPropertyUpdates(oldProps: FiberInstancedMeshProps, newProps: FiberInstancedMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.renderingGroupId, newProps.renderingGroupId, 'renderingGroupId', changedProps)
        checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
        checkMethodDiff(oldProps.setVerticesData, newProps.setVerticesData, 'setVerticesData', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Creates an instance based on a source mesh.
 *
 * This code has been generated
 */
export class FiberInstancedMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInstancedMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InstancedMesh",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "source",
                "type": "BabylonjsCoreMesh",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberInstancedMesh"
    };
}

export class FiberInstancedLinesMeshPropsHandler implements PropsHandler<FiberInstancedLinesMeshProps> {
    getPropertyUpdates(oldProps: FiberInstancedLinesMeshProps, newProps: FiberInstancedLinesMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.intersectionThreshold, newProps.intersectionThreshold, 'intersectionThreshold', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Creates an instance based on a source LinesMesh
 *
 * This code has been generated
 */
export class FiberInstancedLinesMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInstancedLinesMeshPropsHandler(),
            new FiberInstancedMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InstancedLinesMesh",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "source",
                "type": "BabylonjsCoreLinesMesh",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberInstancedLinesMesh"
    };
}

export class FiberMeshPropsHandler implements PropsHandler<FiberMeshProps> {
    getPropertyUpdates(oldProps: FiberMeshProps, newProps: FiberMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.computeBonesUsingShaders, newProps.computeBonesUsingShaders, 'computeBonesUsingShaders', changedProps)
        checkPrimitiveDiff(oldProps.delayLoadingFile, newProps.delayLoadingFile, 'delayLoadingFile', changedProps)
        checkPrimitiveDiff(oldProps.delayLoadState, newProps.delayLoadState, 'delayLoadState', changedProps)
        // type: 'BabylonjsCoreInstancedMesh[]' property (not coded) BabylonjsCoreMesh.instances.
        checkPrimitiveDiff(oldProps.isUnIndexed, newProps.isUnIndexed, 'isUnIndexed', changedProps)
        checkPrimitiveDiff(oldProps.manualUpdateOfWorldMatrixInstancedBuffer, newProps.manualUpdateOfWorldMatrixInstancedBuffer, 'manualUpdateOfWorldMatrixInstancedBuffer', changedProps)
        // type: 'BabylonjsCoreMorphTargetManager' property (not coded) BabylonjsCoreMesh.morphTargetManager.
        // type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinFourWeights.
        // type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinWeightsAndExtra.
        checkLambdaDiff(oldProps.onBeforeDraw, newProps.onBeforeDraw, 'onBeforeDraw', changedProps)
        checkLambdaDiff(oldProps.onLODLevelSelection, newProps.onLODLevelSelection, 'onLODLevelSelection', changedProps)
        checkPrimitiveDiff(oldProps.overrideMaterialSideOrientation, newProps.overrideMaterialSideOrientation, 'overrideMaterialSideOrientation', changedProps)
        checkPrimitiveDiff(oldProps.overridenInstanceCount, newProps.overridenInstanceCount, 'overridenInstanceCount', changedProps)
        checkMethodDiff(oldProps.addInstance, newProps.addInstance, 'addInstance', changedProps)
        checkMethodDiff(oldProps.addLODLevel, newProps.addLODLevel, 'addLODLevel', changedProps)
        checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
        checkMethodDiff(oldProps.setMaterialByID, newProps.setMaterialByID, 'setMaterialByID', changedProps)
        checkMethodDiff(oldProps.setVerticesBuffer, newProps.setVerticesBuffer, 'setVerticesBuffer', changedProps)
        checkMethodDiff(oldProps.setVerticesData, newProps.setVerticesData, 'setVerticesData', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to represent renderable models
 *
 * This code has been generated
 */
export class FiberMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Mesh",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberMesh"
    };
}

export class FiberLinesMeshPropsHandler implements PropsHandler<FiberLinesMeshProps> {
    getPropertyUpdates(oldProps: FiberLinesMeshProps, newProps: FiberLinesMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
        checkColor3Diff(oldProps.color, newProps.color, 'color', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreLinesMesh.color4.
        checkPrimitiveDiff(oldProps.intersectionThreshold, newProps.intersectionThreshold, 'intersectionThreshold', changedProps)
        // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreLinesMesh.material.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Line mesh
 *
 * This code has been generated
 */
export class FiberLinesMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLinesMeshPropsHandler(),
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "LinesMesh",
        "namespace": "@babylonjs/core",
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
                "type": "BabylonjsCoreLinesMesh",
                "optional": true
            },
            {
                "name": "doNotCloneChildren",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "useVertexColor",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "useVertexAlpha",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberLinesMesh"
    };
}

export class FiberGroundMeshPropsHandler implements PropsHandler<FiberGroundMeshProps> {
    getPropertyUpdates(oldProps: FiberGroundMeshProps, newProps: FiberGroundMeshProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.generateOctree, newProps.generateOctree, 'generateOctree', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Mesh representing the gorund
 *
 * This code has been generated
 */
export class FiberGroundMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGroundMeshPropsHandler(),
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GroundMesh",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberGroundMesh"
    };
}

export class FiberTrailMeshPropsHandler implements PropsHandler<FiberTrailMeshProps> {
    getPropertyUpdates(oldProps: FiberTrailMeshProps, newProps: FiberTrailMeshProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Class used to create a trail following a mesh
 *
 * This code has been generated
 */
export class FiberTrailMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTrailMeshPropsHandler(),
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TrailMesh",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "generator",
                "type": "BabylonjsCoreTransformNode",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "diameter",
                "type": "number",
                "optional": true
            },
            {
                "name": "length",
                "type": "number",
                "optional": true
            },
            {
                "name": "autoStart",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "acceptsMaterials": true,
        "isMesh": true,
        "className": "FiberTrailMesh"
    };
}

export class FiberCameraPropsHandler implements PropsHandler<FiberCameraProps> {
    getPropertyUpdates(oldProps: FiberCameraProps, newProps: FiberCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.cameraRigMode, newProps.cameraRigMode, 'cameraRigMode', changedProps)
        // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreCamera.customRenderTargets.
        checkPrimitiveDiff(oldProps.fov, newProps.fov, 'fov', changedProps)
        checkPrimitiveDiff(oldProps.fovMode, newProps.fovMode, 'fovMode', changedProps)
        checkPrimitiveDiff(oldProps.inertia, newProps.inertia, 'inertia', changedProps)
        // type: 'BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.inputs.
        checkPrimitiveDiff(oldProps.interaxialDistance, newProps.interaxialDistance, 'interaxialDistance', changedProps)
        checkPrimitiveDiff(oldProps.isIntermediate, newProps.isIntermediate, 'isIntermediate', changedProps)
        checkPrimitiveDiff(oldProps.isRigCamera, newProps.isRigCamera, 'isRigCamera', changedProps)
        checkPrimitiveDiff(oldProps.isStereoscopicSideBySide, newProps.isStereoscopicSideBySide, 'isStereoscopicSideBySide', changedProps)
        checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
        checkPrimitiveDiff(oldProps.maxZ, newProps.maxZ, 'maxZ', changedProps)
        checkPrimitiveDiff(oldProps.minZ, newProps.minZ, 'minZ', changedProps)
        checkPrimitiveDiff(oldProps.mode, newProps.mode, 'mode', changedProps)
        checkObservableDiff(oldProps.onAfterCheckInputsObservable, newProps.onAfterCheckInputsObservable, 'onAfterCheckInputsObservable', changedProps)
        checkObservableDiff(oldProps.onProjectionMatrixChangedObservable, newProps.onProjectionMatrixChangedObservable, 'onProjectionMatrixChangedObservable', changedProps)
        checkObservableDiff(oldProps.onRestoreStateObservable, newProps.onRestoreStateObservable, 'onRestoreStateObservable', changedProps)
        checkObservableDiff(oldProps.onViewMatrixChangedObservable, newProps.onViewMatrixChangedObservable, 'onViewMatrixChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.orthoBottom, newProps.orthoBottom, 'orthoBottom', changedProps)
        checkPrimitiveDiff(oldProps.orthoLeft, newProps.orthoLeft, 'orthoLeft', changedProps)
        checkPrimitiveDiff(oldProps.orthoRight, newProps.orthoRight, 'orthoRight', changedProps)
        checkPrimitiveDiff(oldProps.orthoTop, newProps.orthoTop, 'orthoTop', changedProps)
        // type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCoreCamera.outputRenderTarget.
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreCamera.rigParent.
        checkVector3Diff(oldProps.upVector, newProps.upVector, 'upVector', changedProps)
        checkPrimitiveDiff(oldProps['upVector-x'], newProps['upVector-x'], 'upVector.x', changedProps)
        checkPrimitiveDiff(oldProps['upVector-y'], newProps['upVector-y'], 'upVector.y', changedProps)
        checkPrimitiveDiff(oldProps['upVector-z'], newProps['upVector-z'], 'upVector.z', changedProps)
        // type: 'BabylonjsCoreViewport' property (not coded) BabylonjsCoreCamera.viewport.
        checkMethodDiff(oldProps.setCameraRigMode, newProps.setCameraRigMode, 'setCameraRigMode', changedProps)
        checkMethodDiff(oldProps.setCameraRigParameter, newProps.setCameraRigParameter, 'setCameraRigParameter', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This is the base class of all the camera used in the application.
 *
 * This code has been generated
 */
export class FiberCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = false;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Camera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberCamera"
    };
}

export class FiberTargetCameraPropsHandler implements PropsHandler<FiberTargetCameraProps> {
    getPropertyUpdates(oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkVector3Diff(oldProps.cameraDirection, newProps.cameraDirection, 'cameraDirection', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-x'], newProps['cameraDirection-x'], 'cameraDirection.x', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-y'], newProps['cameraDirection-y'], 'cameraDirection.y', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-z'], newProps['cameraDirection-z'], 'cameraDirection.z', changedProps)
        // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreTargetCamera.cameraRotation.
        checkPrimitiveDiff(oldProps.ignoreParentScaling, newProps.ignoreParentScaling, 'ignoreParentScaling', changedProps)
        checkPrimitiveDiff(oldProps.inverseRotationSpeed, newProps.inverseRotationSpeed, 'inverseRotationSpeed', changedProps)
        checkPrimitiveDiff(oldProps.invertRotation, newProps.invertRotation, 'invertRotation', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreTargetCamera.lockedTarget.
        checkPrimitiveDiff(oldProps.noRotationConstraint, newProps.noRotationConstraint, 'noRotationConstraint', changedProps)
        checkVector3Diff(oldProps.rotation, newProps.rotation, 'rotation', changedProps)
        checkPrimitiveDiff(oldProps['rotation-x'], newProps['rotation-x'], 'rotation.x', changedProps)
        checkPrimitiveDiff(oldProps['rotation-y'], newProps['rotation-y'], 'rotation.y', changedProps)
        checkPrimitiveDiff(oldProps['rotation-z'], newProps['rotation-z'], 'rotation.z', changedProps)
        checkQuaternionDiff(oldProps.rotationQuaternion, newProps.rotationQuaternion, 'rotationQuaternion', changedProps)
        checkPrimitiveDiff(oldProps.speed, newProps.speed, 'speed', changedProps)
        checkVector3Diff(oldProps.target, newProps.target, 'target', changedProps)
        checkPrimitiveDiff(oldProps['target-x'], newProps['target-x'], 'target.x', changedProps)
        checkPrimitiveDiff(oldProps['target-y'], newProps['target-y'], 'target.y', changedProps)
        checkPrimitiveDiff(oldProps['target-z'], newProps['target-z'], 'target.z', changedProps)
        checkPrimitiveDiff(oldProps.updateUpVectorFromRotation, newProps.updateUpVectorFromRotation, 'updateUpVectorFromRotation', changedProps)
        checkMethodDiff(oldProps.setTarget, newProps.setTarget, 'setTarget', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 *
 * This code has been generated
 */
export class FiberTargetCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TargetCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberTargetCamera"
    };
}

export class FiberFreeCameraPropsHandler implements PropsHandler<FiberFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.angularSensibility, newProps.angularSensibility, 'angularSensibility', changedProps)
        checkPrimitiveDiff(oldProps.applyGravity, newProps.applyGravity, 'applyGravity', changedProps)
        checkPrimitiveDiff(oldProps.checkCollisions, newProps.checkCollisions, 'checkCollisions', changedProps)
        checkPrimitiveDiff(oldProps.collisionMask, newProps.collisionMask, 'collisionMask', changedProps)
        checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-x'], newProps['ellipsoid-x'], 'ellipsoid.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-y'], newProps['ellipsoid-y'], 'ellipsoid.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-z'], newProps['ellipsoid-z'], 'ellipsoid.z', changedProps)
        checkVector3Diff(oldProps.ellipsoidOffset, newProps.ellipsoidOffset, 'ellipsoidOffset', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-x'], newProps['ellipsoidOffset-x'], 'ellipsoidOffset.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-y'], newProps['ellipsoidOffset-y'], 'ellipsoidOffset.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-z'], newProps['ellipsoidOffset-z'], 'ellipsoidOffset.z', changedProps)
        // type: 'BabylonjsCoreFreeCameraInputsManager' property (not coded) BabylonjsCoreFreeCamera.inputs.
        checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
        checkNumericArrayDiff(oldProps.keysDownward, newProps.keysDownward, 'keysDownward', changedProps)
        checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
        checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
        checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
        checkNumericArrayDiff(oldProps.keysUpward, newProps.keysUpward, 'keysUpward', changedProps)
        checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 *
 * This code has been generated
 */
export class FiberFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FreeCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberFreeCamera"
    };
}

export class FiberTouchCameraPropsHandler implements PropsHandler<FiberTouchCameraProps> {
    getPropertyUpdates(oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.touchAngularSensibility, newProps.touchAngularSensibility, 'touchAngularSensibility', changedProps)
        checkPrimitiveDiff(oldProps.touchMoveSensibility, newProps.touchMoveSensibility, 'touchMoveSensibility', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 *
 * This code has been generated
 */
export class FiberTouchCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TouchCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<FiberUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.gamepadAngularSensibility, newProps.gamepadAngularSensibility, 'gamepadAngularSensibility', changedProps)
        checkPrimitiveDiff(oldProps.gamepadMoveSensibility, newProps.gamepadMoveSensibility, 'gamepadMoveSensibility', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 *
 * This code has been generated
 */
export class FiberUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "UniversalCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberUniversalCamera"
    };
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<FiberGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 *
 * This code has been generated
 */
export class FiberGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GamepadCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberGamepadCamera"
    };
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphGamepadCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberAnaglyphGamepadCamera"
    };
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicGamepadCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberStereoscopicGamepadCamera"
    };
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphUniversalCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberAnaglyphUniversalCamera"
    };
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicUniversalCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.disablePointerInputWhenUsingDeviceOrientation, newProps.disablePointerInputWhenUsingDeviceOrientation, 'disablePointerInputWhenUsingDeviceOrientation', changedProps)
        checkMethodDiff(oldProps.enableHorizontalDragging, newProps.enableHorizontalDragging, 'enableHorizontalDragging', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 *
 * This code has been generated
 */
export class FiberDeviceOrientationCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DeviceOrientationCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberDeviceOrientationCamera"
    };
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationFreeCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberVRDeviceOrientationFreeCamera"
    };
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

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

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationGamepadCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberVRDeviceOrientationGamepadCamera"
    };
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphFreeCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberAnaglyphFreeCamera"
    };
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicFreeCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberStereoscopicFreeCamera"
    };
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 *
 * This code has been generated
 */
export class FiberVirtualJoysticksCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualJoysticksCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualJoysticksCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<FiberWebVRFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreWebVRController[]' property (not coded) BabylonjsCoreWebVRFreeCamera.controllers.
        checkVector3Diff(oldProps.devicePosition, newProps.devicePosition, 'devicePosition', changedProps)
        checkPrimitiveDiff(oldProps['devicePosition-x'], newProps['devicePosition-x'], 'devicePosition.x', changedProps)
        checkPrimitiveDiff(oldProps['devicePosition-y'], newProps['devicePosition-y'], 'devicePosition.y', changedProps)
        checkPrimitiveDiff(oldProps['devicePosition-z'], newProps['devicePosition-z'], 'devicePosition.z', changedProps)
        checkQuaternionDiff(oldProps.deviceRotationQuaternion, newProps.deviceRotationQuaternion, 'deviceRotationQuaternion', changedProps)
        checkPrimitiveDiff(oldProps.deviceScaleFactor, newProps.deviceScaleFactor, 'deviceScaleFactor', changedProps)
        checkObservableDiff(oldProps.onControllerMeshLoadedObservable, newProps.onControllerMeshLoadedObservable, 'onControllerMeshLoadedObservable', changedProps)
        checkObservableDiff(oldProps.onControllersAttachedObservable, newProps.onControllersAttachedObservable, 'onControllersAttachedObservable', changedProps)
        checkObservableDiff(oldProps.onPoseUpdatedFromDeviceObservable, newProps.onPoseUpdatedFromDeviceObservable, 'onPoseUpdatedFromDeviceObservable', changedProps)
        // type: 'BabylonjsCoreDevicePose' property (not coded) BabylonjsCoreWebVRFreeCamera.rawPose.
        checkPrimitiveDiff(oldProps.rigParenting, newProps.rigParenting, 'rigParenting', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.updateCacheCalled.
        // type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.webVROptions.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 *
 * This code has been generated
 */
export class FiberWebVRFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebVRFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebVRFreeCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<FiberWebXRCameraProps> {
    getPropertyUpdates(oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.compensateOnFirstFrame, newProps.compensateOnFirstFrame, 'compensateOnFirstFrame', changedProps)
        checkObservableDiff(oldProps.onAfterCameraTeleport, newProps.onAfterCameraTeleport, 'onAfterCameraTeleport', changedProps)
        checkObservableDiff(oldProps.onBeforeCameraTeleport, newProps.onBeforeCameraTeleport, 'onBeforeCameraTeleport', changedProps)
        checkObservableDiff(oldProps.onTrackingStateChanged, newProps.onTrackingStateChanged, 'onTrackingStateChanged', changedProps)
        checkMethodDiff(oldProps.setTransformationFromNonVRCamera, newProps.setTransformationFromNonVRCamera, 'setTransformationFromNonVRCamera', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * WebXR Camera which holds the views for the xrSession
 *
 * This code has been generated
 */
export class FiberWebXRCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebXRCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebXRCamera",
        "namespace": "@babylonjs/core",
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
                "name": "_xrSessionManager",
                "type": "BabylonjsCoreWebXRSessionManager",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberWebXRCamera"
    };
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<FiberArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.allowUpsideDown, newProps.allowUpsideDown, 'allowUpsideDown', changedProps)
        checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
        checkPrimitiveDiff(oldProps.angularSensibilityX, newProps.angularSensibilityX, 'angularSensibilityX', changedProps)
        checkPrimitiveDiff(oldProps.angularSensibilityY, newProps.angularSensibilityY, 'angularSensibilityY', changedProps)
        checkPrimitiveDiff(oldProps.beta, newProps.beta, 'beta', changedProps)
        checkPrimitiveDiff(oldProps.checkCollisions, newProps.checkCollisions, 'checkCollisions', changedProps)
        checkVector3Diff(oldProps.collisionRadius, newProps.collisionRadius, 'collisionRadius', changedProps)
        checkPrimitiveDiff(oldProps['collisionRadius-x'], newProps['collisionRadius-x'], 'collisionRadius.x', changedProps)
        checkPrimitiveDiff(oldProps['collisionRadius-y'], newProps['collisionRadius-y'], 'collisionRadius.y', changedProps)
        checkPrimitiveDiff(oldProps['collisionRadius-z'], newProps['collisionRadius-z'], 'collisionRadius.z', changedProps)
        checkPrimitiveDiff(oldProps.inertialAlphaOffset, newProps.inertialAlphaOffset, 'inertialAlphaOffset', changedProps)
        checkPrimitiveDiff(oldProps.inertialBetaOffset, newProps.inertialBetaOffset, 'inertialBetaOffset', changedProps)
        checkPrimitiveDiff(oldProps.inertialPanningX, newProps.inertialPanningX, 'inertialPanningX', changedProps)
        checkPrimitiveDiff(oldProps.inertialPanningY, newProps.inertialPanningY, 'inertialPanningY', changedProps)
        checkPrimitiveDiff(oldProps.inertialRadiusOffset, newProps.inertialRadiusOffset, 'inertialRadiusOffset', changedProps)
        // type: 'BabylonjsCoreArcRotateCameraInputsManager' property (not coded) BabylonjsCoreArcRotateCamera.inputs.
        checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
        checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
        checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
        checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
        checkPrimitiveDiff(oldProps.lowerAlphaLimit, newProps.lowerAlphaLimit, 'lowerAlphaLimit', changedProps)
        checkPrimitiveDiff(oldProps.lowerBetaLimit, newProps.lowerBetaLimit, 'lowerBetaLimit', changedProps)
        checkPrimitiveDiff(oldProps.lowerRadiusLimit, newProps.lowerRadiusLimit, 'lowerRadiusLimit', changedProps)
        checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
        checkObservableDiff(oldProps.onMeshTargetChangedObservable, newProps.onMeshTargetChangedObservable, 'onMeshTargetChangedObservable', changedProps)
        checkVector3Diff(oldProps.panningAxis, newProps.panningAxis, 'panningAxis', changedProps)
        checkPrimitiveDiff(oldProps['panningAxis-x'], newProps['panningAxis-x'], 'panningAxis.x', changedProps)
        checkPrimitiveDiff(oldProps['panningAxis-y'], newProps['panningAxis-y'], 'panningAxis.y', changedProps)
        checkPrimitiveDiff(oldProps['panningAxis-z'], newProps['panningAxis-z'], 'panningAxis.z', changedProps)
        checkPrimitiveDiff(oldProps.panningDistanceLimit, newProps.panningDistanceLimit, 'panningDistanceLimit', changedProps)
        checkPrimitiveDiff(oldProps.panningInertia, newProps.panningInertia, 'panningInertia', changedProps)
        checkVector3Diff(oldProps.panningOriginTarget, newProps.panningOriginTarget, 'panningOriginTarget', changedProps)
        checkPrimitiveDiff(oldProps['panningOriginTarget-x'], newProps['panningOriginTarget-x'], 'panningOriginTarget.x', changedProps)
        checkPrimitiveDiff(oldProps['panningOriginTarget-y'], newProps['panningOriginTarget-y'], 'panningOriginTarget.y', changedProps)
        checkPrimitiveDiff(oldProps['panningOriginTarget-z'], newProps['panningOriginTarget-z'], 'panningOriginTarget.z', changedProps)
        checkPrimitiveDiff(oldProps.panningSensibility, newProps.panningSensibility, 'panningSensibility', changedProps)
        checkPrimitiveDiff(oldProps.pinchDeltaPercentage, newProps.pinchDeltaPercentage, 'pinchDeltaPercentage', changedProps)
        checkPrimitiveDiff(oldProps.pinchPrecision, newProps.pinchPrecision, 'pinchPrecision', changedProps)
        checkPrimitiveDiff(oldProps.pinchToPanMaxDistance, newProps.pinchToPanMaxDistance, 'pinchToPanMaxDistance', changedProps)
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        checkVector3Diff(oldProps.target, newProps.target, 'target', changedProps)
        checkPrimitiveDiff(oldProps['target-x'], newProps['target-x'], 'target.x', changedProps)
        checkPrimitiveDiff(oldProps['target-y'], newProps['target-y'], 'target.y', changedProps)
        checkPrimitiveDiff(oldProps['target-z'], newProps['target-z'], 'target.z', changedProps)
        // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreArcRotateCamera.targetScreenOffset.
        checkPrimitiveDiff(oldProps.upperAlphaLimit, newProps.upperAlphaLimit, 'upperAlphaLimit', changedProps)
        checkPrimitiveDiff(oldProps.upperBetaLimit, newProps.upperBetaLimit, 'upperBetaLimit', changedProps)
        checkPrimitiveDiff(oldProps.upperRadiusLimit, newProps.upperRadiusLimit, 'upperRadiusLimit', changedProps)
        checkVector3Diff(oldProps.upVector, newProps.upVector, 'upVector', changedProps)
        checkPrimitiveDiff(oldProps['upVector-x'], newProps['upVector-x'], 'upVector.x', changedProps)
        checkPrimitiveDiff(oldProps['upVector-y'], newProps['upVector-y'], 'upVector.y', changedProps)
        checkPrimitiveDiff(oldProps['upVector-z'], newProps['upVector-z'], 'upVector.z', changedProps)
        checkPrimitiveDiff(oldProps.useAutoRotationBehavior, newProps.useAutoRotationBehavior, 'useAutoRotationBehavior', changedProps)
        checkPrimitiveDiff(oldProps.useBouncingBehavior, newProps.useBouncingBehavior, 'useBouncingBehavior', changedProps)
        checkPrimitiveDiff(oldProps.useFramingBehavior, newProps.useFramingBehavior, 'useFramingBehavior', changedProps)
        checkPrimitiveDiff(oldProps.useInputToRestoreState, newProps.useInputToRestoreState, 'useInputToRestoreState', changedProps)
        checkPrimitiveDiff(oldProps.useNaturalPinchZoom, newProps.useNaturalPinchZoom, 'useNaturalPinchZoom', changedProps)
        checkPrimitiveDiff(oldProps.wheelDeltaPercentage, newProps.wheelDeltaPercentage, 'wheelDeltaPercentage', changedProps)
        checkPrimitiveDiff(oldProps.wheelPrecision, newProps.wheelPrecision, 'wheelPrecision', changedProps)
        checkPrimitiveDiff(oldProps.zoomOnFactor, newProps.zoomOnFactor, 'zoomOnFactor', changedProps)
        checkMethodDiff(oldProps.setPosition, newProps.setPosition, 'setPosition', changedProps)
        checkMethodDiff(oldProps.setTarget, newProps.setTarget, 'setTarget', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcRotateCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberArcRotateCamera"
    };
}

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphArcRotateCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberAnaglyphArcRotateCamera"
    };
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicArcRotateCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberStereoscopicArcRotateCamera"
    };
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationArcRotateCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberFlyCameraPropsHandler implements PropsHandler<FiberFlyCameraProps> {
    getPropertyUpdates(oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.angularSensibility, newProps.angularSensibility, 'angularSensibility', changedProps)
        checkPrimitiveDiff(oldProps.applyGravity, newProps.applyGravity, 'applyGravity', changedProps)
        checkPrimitiveDiff(oldProps.bankedTurn, newProps.bankedTurn, 'bankedTurn', changedProps)
        checkPrimitiveDiff(oldProps.bankedTurnLimit, newProps.bankedTurnLimit, 'bankedTurnLimit', changedProps)
        checkPrimitiveDiff(oldProps.bankedTurnMultiplier, newProps.bankedTurnMultiplier, 'bankedTurnMultiplier', changedProps)
        checkVector3Diff(oldProps.cameraDirection, newProps.cameraDirection, 'cameraDirection', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-x'], newProps['cameraDirection-x'], 'cameraDirection.x', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-y'], newProps['cameraDirection-y'], 'cameraDirection.y', changedProps)
        checkPrimitiveDiff(oldProps['cameraDirection-z'], newProps['cameraDirection-z'], 'cameraDirection.z', changedProps)
        checkPrimitiveDiff(oldProps.checkCollisions, newProps.checkCollisions, 'checkCollisions', changedProps)
        checkPrimitiveDiff(oldProps.collisionMask, newProps.collisionMask, 'collisionMask', changedProps)
        checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-x'], newProps['ellipsoid-x'], 'ellipsoid.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-y'], newProps['ellipsoid-y'], 'ellipsoid.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoid-z'], newProps['ellipsoid-z'], 'ellipsoid.z', changedProps)
        checkVector3Diff(oldProps.ellipsoidOffset, newProps.ellipsoidOffset, 'ellipsoidOffset', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-x'], newProps['ellipsoidOffset-x'], 'ellipsoidOffset.x', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-y'], newProps['ellipsoidOffset-y'], 'ellipsoidOffset.y', changedProps)
        checkPrimitiveDiff(oldProps['ellipsoidOffset-z'], newProps['ellipsoidOffset-z'], 'ellipsoidOffset.z', changedProps)
        // type: 'BabylonjsCoreFlyCameraInputsManager' property (not coded) BabylonjsCoreFlyCamera.inputs.
        checkNumericArrayDiff(oldProps.keysBackward, newProps.keysBackward, 'keysBackward', changedProps)
        checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
        checkNumericArrayDiff(oldProps.keysForward, newProps.keysForward, 'keysForward', changedProps)
        checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
        checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
        checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
        checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
        checkPrimitiveDiff(oldProps.rollCorrect, newProps.rollCorrect, 'rollCorrect', changedProps)
        checkQuaternionDiff(oldProps.rotationQuaternion, newProps.rotationQuaternion, 'rotationQuaternion', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 *
 * This code has been generated
 */
export class FiberFlyCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFlyCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FlyCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberFlyCamera"
    };
}

export class FiberFollowCameraPropsHandler implements PropsHandler<FiberFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.cameraAcceleration, newProps.cameraAcceleration, 'cameraAcceleration', changedProps)
        checkPrimitiveDiff(oldProps.heightOffset, newProps.heightOffset, 'heightOffset', changedProps)
        // type: 'BabylonjsCoreFollowCameraInputsManager' property (not coded) BabylonjsCoreFollowCamera.inputs.
        // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreFollowCamera.lockedTarget.
        checkPrimitiveDiff(oldProps.lowerHeightOffsetLimit, newProps.lowerHeightOffsetLimit, 'lowerHeightOffsetLimit', changedProps)
        checkPrimitiveDiff(oldProps.lowerRadiusLimit, newProps.lowerRadiusLimit, 'lowerRadiusLimit', changedProps)
        checkPrimitiveDiff(oldProps.lowerRotationOffsetLimit, newProps.lowerRotationOffsetLimit, 'lowerRotationOffsetLimit', changedProps)
        checkPrimitiveDiff(oldProps.maxCameraSpeed, newProps.maxCameraSpeed, 'maxCameraSpeed', changedProps)
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        checkPrimitiveDiff(oldProps.rotationOffset, newProps.rotationOffset, 'rotationOffset', changedProps)
        checkPrimitiveDiff(oldProps.upperHeightOffsetLimit, newProps.upperHeightOffsetLimit, 'upperHeightOffsetLimit', changedProps)
        checkPrimitiveDiff(oldProps.upperRadiusLimit, newProps.upperRadiusLimit, 'upperRadiusLimit', changedProps)
        checkPrimitiveDiff(oldProps.upperRotationOffsetLimit, newProps.upperRotationOffsetLimit, 'upperRotationOffsetLimit', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 *
 * This code has been generated
 */
export class FiberFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FollowCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberFollowCamera"
    };
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<FiberArcFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
        checkPrimitiveDiff(oldProps.beta, newProps.beta, 'beta', changedProps)
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 *
 * This code has been generated
 */
export class FiberArcFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcFollowCamera",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
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
export class FiberBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
                        "name": "wrap",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "topBaseAt",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "bottomBaseAt",
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberBox"
    };
}

/**
 * Creates a tiled box mesh
 * * faceTiles sets the pattern, tile size and number of tiles for a face
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberTiledBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTiledBox",
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
                        "name": "pattern",
                        "type": "number",
                        "optional": true
                    },
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
                        "optional": false
                    },
                    {
                        "name": "tileSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileWidth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileHeight",
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
                        "name": "alignHorizontal",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "alignVertical",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberTiledBox"
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
export class FiberSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberDisc implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberIcoSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberRibbon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
 * * The parameter `cap` sets the way the cylinder is capped. Possible values : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL (default).
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
export class FiberCylinder implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
                        "name": "cap",
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
        "isNode": true,
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
export class FiberTorus implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberTorusKnot implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberLineSystem implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberDashedLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberExtrudeShape implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberExtrudeShapeCustom implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberLathe implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberLathe"
    };
}

/**
 * Creates a tiled plane mesh
 * * You can set a limited pattern arrangement with the tiles
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberTiledPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTiledPlane",
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
                        "name": "pattern",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileWidth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileHeight",
                        "type": "number",
                        "optional": true
                    },
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
                        "name": "alignHorizontal",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "alignVertical",
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberTiledPlane"
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
export class FiberPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberTiledGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberGroundFromHeightMap implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberPolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberExtrudePolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
                    },
                    {
                        "name": "wrap",
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
        "isNode": true,
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
export class FiberTube implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberPolyhedron implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
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
export class FiberDecal implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberDecal"
    };
}

/**
 * Creates a Capsule Mesh
 *
 * This code has been generated
 */
export class FiberCapsule implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateCapsule",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": "BabylonjsCoreICreateCapsuleOptions",
                "optional": true
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
        "isNode": true,
        "isMesh": true,
        "className": "FiberCapsule"
    };
}

export class FiberMaterialPropsHandler implements PropsHandler<FiberMaterialProps> {
    getPropertyUpdates(oldProps: FiberMaterialProps, newProps: FiberMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.allowShaderHotSwapping, newProps.allowShaderHotSwapping, 'allowShaderHotSwapping', changedProps)
        checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
        checkPrimitiveDiff(oldProps.alphaMode, newProps.alphaMode, 'alphaMode', changedProps)
        // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreMaterial.animations.
        checkPrimitiveDiff(oldProps.backFaceCulling, newProps.backFaceCulling, 'backFaceCulling', changedProps)
        checkPrimitiveDiff(oldProps.checkReadyOnEveryCall, newProps.checkReadyOnEveryCall, 'checkReadyOnEveryCall', changedProps)
        checkPrimitiveDiff(oldProps.checkReadyOnlyOnce, newProps.checkReadyOnlyOnce, 'checkReadyOnlyOnce', changedProps)
        checkLambdaDiff(oldProps.customShaderNameResolve, newProps.customShaderNameResolve, 'customShaderNameResolve', changedProps)
        checkPrimitiveDiff(oldProps.depthFunction, newProps.depthFunction, 'depthFunction', changedProps)
        checkPrimitiveDiff(oldProps.disableColorWrite, newProps.disableColorWrite, 'disableColorWrite', changedProps)
        checkPrimitiveDiff(oldProps.disableDepthWrite, newProps.disableDepthWrite, 'disableDepthWrite', changedProps)
        checkPrimitiveDiff(oldProps.doNotSerialize, newProps.doNotSerialize, 'doNotSerialize', changedProps)
        checkPrimitiveDiff(oldProps.fillMode, newProps.fillMode, 'fillMode', changedProps)
        checkPrimitiveDiff(oldProps.fogEnabled, newProps.fogEnabled, 'fogEnabled', changedProps)
        checkPrimitiveDiff(oldProps.forceDepthWrite, newProps.forceDepthWrite, 'forceDepthWrite', changedProps)
        checkLambdaDiff(oldProps.getRenderTargetTextures, newProps.getRenderTargetTextures, 'getRenderTargetTextures', changedProps)
        checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
        // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreMaterial.inspectableCustomProperties.
        // type: '{ [id: string]: BabylonjsCoreAbstractMesh; }' property (not coded) BabylonjsCoreMaterial.meshMap.
        // type: 'any' property (not coded) BabylonjsCoreMaterial.metadata.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.needDepthPrePass, newProps.needDepthPrePass, 'needDepthPrePass', changedProps)
        checkLambdaDiff(oldProps.onBind, newProps.onBind, 'onBind', changedProps)
        checkLambdaDiff(oldProps.onCompiled, newProps.onCompiled, 'onCompiled', changedProps)
        checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        checkLambdaDiff(oldProps.onError, newProps.onError, 'onError', changedProps)
        checkPrimitiveDiff(oldProps.pointsCloud, newProps.pointsCloud, 'pointsCloud', changedProps)
        checkPrimitiveDiff(oldProps.pointSize, newProps.pointSize, 'pointSize', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreMaterial.releaseVertexArrayObject.
        // type: 'any' property (not coded) BabylonjsCoreMaterial.reservedDataStore.
        checkPrimitiveDiff(oldProps.separateCullingPass, newProps.separateCullingPass, 'separateCullingPass', changedProps)
        // type: 'BabylonjsCoreShadowDepthWrapper' property (not coded) BabylonjsCoreMaterial.shadowDepthWrapper.
        checkPrimitiveDiff(oldProps.sideOrientation, newProps.sideOrientation, 'sideOrientation', changedProps)
        checkPrimitiveDiff(oldProps.state, newProps.state, 'state', changedProps)
        checkPrimitiveDiff(oldProps.transparencyMode, newProps.transparencyMode, 'transparencyMode', changedProps)
        checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
        checkPrimitiveDiff(oldProps.wireframe, newProps.wireframe, 'wireframe', changedProps)
        checkPrimitiveDiff(oldProps.zOffset, newProps.zOffset, 'zOffset', changedProps)
        checkMethodDiff(oldProps.setPrePassRenderer, newProps.setPrePassRenderer, 'setPrePassRenderer', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Base class for the main features of a material in Babylon.js
 *
 * This code has been generated
 */
export class FiberMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Material",
        "namespace": "@babylonjs/core",
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

export class FiberPushMaterialPropsHandler implements PropsHandler<FiberPushMaterialProps> {
    getPropertyUpdates(oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Base class of materials working in push mode in babylon JS
 *
 * This code has been generated
 */
export class FiberPushMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PushMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberNodeMaterialPropsHandler implements PropsHandler<FiberNodeMaterialProps> {
    getPropertyUpdates(oldProps: FiberNodeMaterialProps, newProps: FiberNodeMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreNodeMaterialBlock[]' property (not coded) BabylonjsCoreNodeMaterial.attachedBlocks.
        // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.BJSNODEMATERIALEDITOR.
        checkPrimitiveDiff(oldProps.comment, newProps.comment, 'comment', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.editorData.
        checkPrimitiveDiff(oldProps.ignoreAlpha, newProps.ignoreAlpha, 'ignoreAlpha', changedProps)
        // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreNodeMaterial.imageProcessingConfiguration.
        checkPrimitiveDiff(oldProps.maxSimultaneousLights, newProps.maxSimultaneousLights, 'maxSimultaneousLights', changedProps)
        checkObservableDiff(oldProps.onBuildObservable, newProps.onBuildObservable, 'onBuildObservable', changedProps)
        // type: 'BabylonjsCoreINodeMaterialOptions' property (not coded) BabylonjsCoreNodeMaterial.options.
        checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
        checkMethodDiff(oldProps.addOutputNode, newProps.addOutputNode, 'addOutputNode', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a node based material built by assembling shader blocks
 *
 * This code has been generated
 */
export class FiberNodeMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodeMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NodeMaterial",
        "namespace": "@babylonjs/core",
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
                "name": "options",
                "type": "Partial<BabylonjsCoreINodeMaterialOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberNodeMaterial"
    };
}

export class FiberStandardMaterialPropsHandler implements PropsHandler<FiberStandardMaterialProps> {
    getPropertyUpdates(oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
        checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.ambientTexture.
        checkPrimitiveDiff(oldProps.AmbientTextureEnabled, newProps.AmbientTextureEnabled, 'AmbientTextureEnabled', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.bumpTexture.
        checkPrimitiveDiff(oldProps.BumpTextureEnabled, newProps.BumpTextureEnabled, 'BumpTextureEnabled', changedProps)
        // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreStandardMaterial.cameraColorCurves.
        checkPrimitiveDiff(oldProps.cameraColorCurvesEnabled, newProps.cameraColorCurvesEnabled, 'cameraColorCurvesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.cameraColorGradingEnabled, newProps.cameraColorGradingEnabled, 'cameraColorGradingEnabled', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.cameraColorGradingTexture.
        checkPrimitiveDiff(oldProps.cameraContrast, newProps.cameraContrast, 'cameraContrast', changedProps)
        checkPrimitiveDiff(oldProps.cameraExposure, newProps.cameraExposure, 'cameraExposure', changedProps)
        checkPrimitiveDiff(oldProps.cameraToneMappingEnabled, newProps.cameraToneMappingEnabled, 'cameraToneMappingEnabled', changedProps)
        checkPrimitiveDiff(oldProps.ColorGradingTextureEnabled, newProps.ColorGradingTextureEnabled, 'ColorGradingTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.DetailTextureEnabled, newProps.DetailTextureEnabled, 'DetailTextureEnabled', changedProps)
        checkColor3Diff(oldProps.diffuseColor, newProps.diffuseColor, 'diffuseColor', changedProps)
        checkFresnelParametersDiff(oldProps.diffuseFresnelParameters, newProps.diffuseFresnelParameters, 'diffuseFresnelParameters', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.diffuseTexture.
        checkPrimitiveDiff(oldProps.DiffuseTextureEnabled, newProps.DiffuseTextureEnabled, 'DiffuseTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.disableLighting, newProps.disableLighting, 'disableLighting', changedProps)
        checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
        checkFresnelParametersDiff(oldProps.emissiveFresnelParameters, newProps.emissiveFresnelParameters, 'emissiveFresnelParameters', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.emissiveTexture.
        checkPrimitiveDiff(oldProps.EmissiveTextureEnabled, newProps.EmissiveTextureEnabled, 'EmissiveTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.FresnelEnabled, newProps.FresnelEnabled, 'FresnelEnabled', changedProps)
        // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreStandardMaterial.imageProcessingConfiguration.
        checkPrimitiveDiff(oldProps.indexOfRefraction, newProps.indexOfRefraction, 'indexOfRefraction', changedProps)
        checkPrimitiveDiff(oldProps.invertNormalMapX, newProps.invertNormalMapX, 'invertNormalMapX', changedProps)
        checkPrimitiveDiff(oldProps.invertNormalMapY, newProps.invertNormalMapY, 'invertNormalMapY', changedProps)
        checkPrimitiveDiff(oldProps.invertRefractionY, newProps.invertRefractionY, 'invertRefractionY', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.lightmapTexture.
        checkPrimitiveDiff(oldProps.LightmapTextureEnabled, newProps.LightmapTextureEnabled, 'LightmapTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.linkEmissiveWithDiffuse, newProps.linkEmissiveWithDiffuse, 'linkEmissiveWithDiffuse', changedProps)
        checkPrimitiveDiff(oldProps.maxSimultaneousLights, newProps.maxSimultaneousLights, 'maxSimultaneousLights', changedProps)
        checkFresnelParametersDiff(oldProps.opacityFresnelParameters, newProps.opacityFresnelParameters, 'opacityFresnelParameters', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.opacityTexture.
        checkPrimitiveDiff(oldProps.OpacityTextureEnabled, newProps.OpacityTextureEnabled, 'OpacityTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.parallaxScaleBias, newProps.parallaxScaleBias, 'parallaxScaleBias', changedProps)
        checkFresnelParametersDiff(oldProps.reflectionFresnelParameters, newProps.reflectionFresnelParameters, 'reflectionFresnelParameters', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.reflectionTexture.
        checkPrimitiveDiff(oldProps.ReflectionTextureEnabled, newProps.ReflectionTextureEnabled, 'ReflectionTextureEnabled', changedProps)
        checkFresnelParametersDiff(oldProps.refractionFresnelParameters, newProps.refractionFresnelParameters, 'refractionFresnelParameters', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.refractionTexture.
        checkPrimitiveDiff(oldProps.RefractionTextureEnabled, newProps.RefractionTextureEnabled, 'RefractionTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
        checkColor3Diff(oldProps.specularColor, newProps.specularColor, 'specularColor', changedProps)
        checkPrimitiveDiff(oldProps.specularPower, newProps.specularPower, 'specularPower', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.specularTexture.
        checkPrimitiveDiff(oldProps.SpecularTextureEnabled, newProps.SpecularTextureEnabled, 'SpecularTextureEnabled', changedProps)
        checkPrimitiveDiff(oldProps.twoSidedLighting, newProps.twoSidedLighting, 'twoSidedLighting', changedProps)
        checkPrimitiveDiff(oldProps.useAlphaFromDiffuseTexture, newProps.useAlphaFromDiffuseTexture, 'useAlphaFromDiffuseTexture', changedProps)
        checkPrimitiveDiff(oldProps.useEmissiveAsIllumination, newProps.useEmissiveAsIllumination, 'useEmissiveAsIllumination', changedProps)
        checkPrimitiveDiff(oldProps.useGlossinessFromSpecularMapAlpha, newProps.useGlossinessFromSpecularMapAlpha, 'useGlossinessFromSpecularMapAlpha', changedProps)
        checkPrimitiveDiff(oldProps.useLightmapAsShadowmap, newProps.useLightmapAsShadowmap, 'useLightmapAsShadowmap', changedProps)
        checkPrimitiveDiff(oldProps.useLogarithmicDepth, newProps.useLogarithmicDepth, 'useLogarithmicDepth', changedProps)
        checkPrimitiveDiff(oldProps.useObjectSpaceNormalMap, newProps.useObjectSpaceNormalMap, 'useObjectSpaceNormalMap', changedProps)
        checkPrimitiveDiff(oldProps.useParallax, newProps.useParallax, 'useParallax', changedProps)
        checkPrimitiveDiff(oldProps.useParallaxOcclusion, newProps.useParallaxOcclusion, 'useParallaxOcclusion', changedProps)
        checkPrimitiveDiff(oldProps.useReflectionFresnelFromSpecular, newProps.useReflectionFresnelFromSpecular, 'useReflectionFresnelFromSpecular', changedProps)
        checkPrimitiveDiff(oldProps.useReflectionOverAlpha, newProps.useReflectionOverAlpha, 'useReflectionOverAlpha', changedProps)
        checkPrimitiveDiff(oldProps.useSpecularOverAlpha, newProps.useSpecularOverAlpha, 'useSpecularOverAlpha', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 *
 * This code has been generated
 */
export class FiberStandardMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStandardMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StandardMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberBackgroundMaterialPropsHandler implements PropsHandler<FiberBackgroundMaterialProps> {
    getPropertyUpdates(oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps._perceptualColor, newProps._perceptualColor, '_perceptualColor', changedProps)
        // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorCurves.
        checkPrimitiveDiff(oldProps.cameraColorCurvesEnabled, newProps.cameraColorCurvesEnabled, 'cameraColorCurvesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.cameraColorGradingEnabled, newProps.cameraColorGradingEnabled, 'cameraColorGradingEnabled', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorGradingTexture.
        checkPrimitiveDiff(oldProps.cameraContrast, newProps.cameraContrast, 'cameraContrast', changedProps)
        checkPrimitiveDiff(oldProps.cameraExposure, newProps.cameraExposure, 'cameraExposure', changedProps)
        checkPrimitiveDiff(oldProps.cameraToneMappingEnabled, newProps.cameraToneMappingEnabled, 'cameraToneMappingEnabled', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.diffuseTexture.
        checkPrimitiveDiff(oldProps.enableNoise, newProps.enableNoise, 'enableNoise', changedProps)
        checkPrimitiveDiff(oldProps.fovMultiplier, newProps.fovMultiplier, 'fovMultiplier', changedProps)
        // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreBackgroundMaterial.imageProcessingConfiguration.
        checkPrimitiveDiff(oldProps.maxSimultaneousLights, newProps.maxSimultaneousLights, 'maxSimultaneousLights', changedProps)
        checkPrimitiveDiff(oldProps.opacityFresnel, newProps.opacityFresnel, 'opacityFresnel', changedProps)
        checkColor3Diff(oldProps.primaryColor, newProps.primaryColor, 'primaryColor', changedProps)
        checkPrimitiveDiff(oldProps.primaryColorHighlightLevel, newProps.primaryColorHighlightLevel, 'primaryColorHighlightLevel', changedProps)
        checkPrimitiveDiff(oldProps.primaryColorShadowLevel, newProps.primaryColorShadowLevel, 'primaryColorShadowLevel', changedProps)
        checkPrimitiveDiff(oldProps.reflectionAmount, newProps.reflectionAmount, 'reflectionAmount', changedProps)
        checkPrimitiveDiff(oldProps.reflectionBlur, newProps.reflectionBlur, 'reflectionBlur', changedProps)
        checkPrimitiveDiff(oldProps.reflectionFalloffDistance, newProps.reflectionFalloffDistance, 'reflectionFalloffDistance', changedProps)
        checkPrimitiveDiff(oldProps.reflectionFresnel, newProps.reflectionFresnel, 'reflectionFresnel', changedProps)
        checkPrimitiveDiff(oldProps.reflectionReflectance0, newProps.reflectionReflectance0, 'reflectionReflectance0', changedProps)
        checkPrimitiveDiff(oldProps.reflectionReflectance90, newProps.reflectionReflectance90, 'reflectionReflectance90', changedProps)
        checkPrimitiveDiff(oldProps.reflectionStandardFresnelWeight, newProps.reflectionStandardFresnelWeight, 'reflectionStandardFresnelWeight', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.reflectionTexture.
        checkVector3Diff(oldProps.sceneCenter, newProps.sceneCenter, 'sceneCenter', changedProps)
        checkPrimitiveDiff(oldProps['sceneCenter-x'], newProps['sceneCenter-x'], 'sceneCenter.x', changedProps)
        checkPrimitiveDiff(oldProps['sceneCenter-y'], newProps['sceneCenter-y'], 'sceneCenter.y', changedProps)
        checkPrimitiveDiff(oldProps['sceneCenter-z'], newProps['sceneCenter-z'], 'sceneCenter.z', changedProps)
        checkPrimitiveDiff(oldProps.shadowLevel, newProps.shadowLevel, 'shadowLevel', changedProps)
        // type: 'BabylonjsCoreIShadowLight[]' property (not coded) BabylonjsCoreBackgroundMaterial.shadowLights.
        checkPrimitiveDiff(oldProps.shadowOnly, newProps.shadowOnly, 'shadowOnly', changedProps)
        checkPrimitiveDiff(oldProps.switchToBGR, newProps.switchToBGR, 'switchToBGR', changedProps)
        checkPrimitiveDiff(oldProps.useEquirectangularFOV, newProps.useEquirectangularFOV, 'useEquirectangularFOV', changedProps)
        checkPrimitiveDiff(oldProps.useRGBColor, newProps.useRGBColor, 'useRGBColor', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Background material used to create an efficient environement around your scene.
 *
 * This code has been generated
 */
export class FiberBackgroundMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBackgroundMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BackgroundMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<FiberPBRBaseMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugFactor.
        // type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugLimit.
        checkPrimitiveDiff(oldProps.debugMode, newProps.debugMode, 'debugMode', changedProps)
        checkPrimitiveDiff(oldProps.realTimeFiltering, newProps.realTimeFiltering, 'realTimeFiltering', changedProps)
        checkPrimitiveDiff(oldProps.realTimeFilteringQuality, newProps.realTimeFilteringQuality, 'realTimeFilteringQuality', changedProps)
        checkPrimitiveDiff(oldProps.useLogarithmicDepth, newProps.useLogarithmicDepth, 'useLogarithmicDepth', changedProps)
        checkMethodDiff(oldProps.setPrePassRenderer, newProps.setPrePassRenderer, 'setPrePassRenderer', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export class FiberPBRBaseMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
        checkPrimitiveDiff(oldProps.disableLighting, newProps.disableLighting, 'disableLighting', changedProps)
        checkPrimitiveDiff(oldProps.doubleSided, newProps.doubleSided, 'doubleSided', changedProps)
        checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.emissiveTexture.
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.environmentTexture.
        checkPrimitiveDiff(oldProps.invertNormalMapX, newProps.invertNormalMapX, 'invertNormalMapX', changedProps)
        checkPrimitiveDiff(oldProps.invertNormalMapY, newProps.invertNormalMapY, 'invertNormalMapY', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.lightmapTexture.
        checkPrimitiveDiff(oldProps.maxSimultaneousLights, newProps.maxSimultaneousLights, 'maxSimultaneousLights', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.normalTexture.
        checkPrimitiveDiff(oldProps.occlusionStrength, newProps.occlusionStrength, 'occlusionStrength', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.occlusionTexture.
        checkPrimitiveDiff(oldProps.useLightmapAsShadowmap, newProps.useLightmapAsShadowmap, 'useLightmapAsShadowmap', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseSimpleMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps.baseColor, newProps.baseColor, 'baseColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.baseTexture.
        checkPrimitiveDiff(oldProps.metallic, newProps.metallic, 'metallic', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.metallicRoughnessTexture.
        checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMetallicRoughnessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMetallicRoughnessMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps.diffuseColor, newProps.diffuseColor, 'diffuseColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.diffuseTexture.
        checkPrimitiveDiff(oldProps.glossiness, newProps.glossiness, 'glossiness', changedProps)
        checkColor3Diff(oldProps.specularColor, newProps.specularColor, 'specularColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.specularGlossinessTexture.
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRSpecularGlossinessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRSpecularGlossinessMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberPBRMaterialPropsHandler implements PropsHandler<FiberPBRMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps.albedoColor, newProps.albedoColor, 'albedoColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.albedoTexture.
        checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
        checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.ambientTexture.
        checkPrimitiveDiff(oldProps.ambientTextureImpactOnAnalyticalLights, newProps.ambientTextureImpactOnAnalyticalLights, 'ambientTextureImpactOnAnalyticalLights', changedProps)
        checkPrimitiveDiff(oldProps.ambientTextureStrength, newProps.ambientTextureStrength, 'ambientTextureStrength', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.bumpTexture.
        // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCorePBRMaterial.cameraColorCurves.
        checkPrimitiveDiff(oldProps.cameraColorCurvesEnabled, newProps.cameraColorCurvesEnabled, 'cameraColorCurvesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.cameraColorGradingEnabled, newProps.cameraColorGradingEnabled, 'cameraColorGradingEnabled', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.cameraColorGradingTexture.
        checkPrimitiveDiff(oldProps.cameraContrast, newProps.cameraContrast, 'cameraContrast', changedProps)
        checkPrimitiveDiff(oldProps.cameraExposure, newProps.cameraExposure, 'cameraExposure', changedProps)
        checkPrimitiveDiff(oldProps.cameraToneMappingEnabled, newProps.cameraToneMappingEnabled, 'cameraToneMappingEnabled', changedProps)
        checkPrimitiveDiff(oldProps.directIntensity, newProps.directIntensity, 'directIntensity', changedProps)
        checkPrimitiveDiff(oldProps.disableBumpMap, newProps.disableBumpMap, 'disableBumpMap', changedProps)
        checkPrimitiveDiff(oldProps.disableLighting, newProps.disableLighting, 'disableLighting', changedProps)
        checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
        checkPrimitiveDiff(oldProps.emissiveIntensity, newProps.emissiveIntensity, 'emissiveIntensity', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.emissiveTexture.
        checkPrimitiveDiff(oldProps.enableSpecularAntiAliasing, newProps.enableSpecularAntiAliasing, 'enableSpecularAntiAliasing', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.environmentBRDFTexture.
        checkPrimitiveDiff(oldProps.environmentIntensity, newProps.environmentIntensity, 'environmentIntensity', changedProps)
        checkPrimitiveDiff(oldProps.forceAlphaTest, newProps.forceAlphaTest, 'forceAlphaTest', changedProps)
        checkPrimitiveDiff(oldProps.forceIrradianceInFragment, newProps.forceIrradianceInFragment, 'forceIrradianceInFragment', changedProps)
        checkPrimitiveDiff(oldProps.forceNormalForward, newProps.forceNormalForward, 'forceNormalForward', changedProps)
        // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCorePBRMaterial.imageProcessingConfiguration.
        checkPrimitiveDiff(oldProps.indexOfRefraction, newProps.indexOfRefraction, 'indexOfRefraction', changedProps)
        checkPrimitiveDiff(oldProps.invertNormalMapX, newProps.invertNormalMapX, 'invertNormalMapX', changedProps)
        checkPrimitiveDiff(oldProps.invertNormalMapY, newProps.invertNormalMapY, 'invertNormalMapY', changedProps)
        checkPrimitiveDiff(oldProps.invertRefractionY, newProps.invertRefractionY, 'invertRefractionY', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.lightmapTexture.
        checkPrimitiveDiff(oldProps.linkRefractionWithTransparency, newProps.linkRefractionWithTransparency, 'linkRefractionWithTransparency', changedProps)
        checkPrimitiveDiff(oldProps.maxSimultaneousLights, newProps.maxSimultaneousLights, 'maxSimultaneousLights', changedProps)
        checkPrimitiveDiff(oldProps.metallic, newProps.metallic, 'metallic', changedProps)
        checkPrimitiveDiff(oldProps.metallicF0Factor, newProps.metallicF0Factor, 'metallicF0Factor', changedProps)
        checkColor3Diff(oldProps.metallicReflectanceColor, newProps.metallicReflectanceColor, 'metallicReflectanceColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.metallicReflectanceTexture.
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.metallicTexture.
        checkPrimitiveDiff(oldProps.microSurface, newProps.microSurface, 'microSurface', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.microSurfaceTexture.
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.opacityTexture.
        checkPrimitiveDiff(oldProps.parallaxScaleBias, newProps.parallaxScaleBias, 'parallaxScaleBias', changedProps)
        checkColor3Diff(oldProps.reflectionColor, newProps.reflectionColor, 'reflectionColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectionTexture.
        checkColor3Diff(oldProps.reflectivityColor, newProps.reflectivityColor, 'reflectivityColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectivityTexture.
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.refractionTexture.
        checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
        checkPrimitiveDiff(oldProps.specularIntensity, newProps.specularIntensity, 'specularIntensity', changedProps)
        checkPrimitiveDiff(oldProps.twoSidedLighting, newProps.twoSidedLighting, 'twoSidedLighting', changedProps)
        checkPrimitiveDiff(oldProps.unlit, newProps.unlit, 'unlit', changedProps)
        checkPrimitiveDiff(oldProps.useAlphaFresnel, newProps.useAlphaFresnel, 'useAlphaFresnel', changedProps)
        checkPrimitiveDiff(oldProps.useAlphaFromAlbedoTexture, newProps.useAlphaFromAlbedoTexture, 'useAlphaFromAlbedoTexture', changedProps)
        checkPrimitiveDiff(oldProps.useAmbientInGrayScale, newProps.useAmbientInGrayScale, 'useAmbientInGrayScale', changedProps)
        checkPrimitiveDiff(oldProps.useAmbientOcclusionFromMetallicTextureRed, newProps.useAmbientOcclusionFromMetallicTextureRed, 'useAmbientOcclusionFromMetallicTextureRed', changedProps)
        checkPrimitiveDiff(oldProps.useAutoMicroSurfaceFromReflectivityMap, newProps.useAutoMicroSurfaceFromReflectivityMap, 'useAutoMicroSurfaceFromReflectivityMap', changedProps)
        checkPrimitiveDiff(oldProps.useGLTFLightFalloff, newProps.useGLTFLightFalloff, 'useGLTFLightFalloff', changedProps)
        checkPrimitiveDiff(oldProps.useHorizonOcclusion, newProps.useHorizonOcclusion, 'useHorizonOcclusion', changedProps)
        checkPrimitiveDiff(oldProps.useLightmapAsShadowmap, newProps.useLightmapAsShadowmap, 'useLightmapAsShadowmap', changedProps)
        checkPrimitiveDiff(oldProps.useLinearAlphaFresnel, newProps.useLinearAlphaFresnel, 'useLinearAlphaFresnel', changedProps)
        checkPrimitiveDiff(oldProps.useMetallnessFromMetallicTextureBlue, newProps.useMetallnessFromMetallicTextureBlue, 'useMetallnessFromMetallicTextureBlue', changedProps)
        checkPrimitiveDiff(oldProps.useMicroSurfaceFromReflectivityMapAlpha, newProps.useMicroSurfaceFromReflectivityMapAlpha, 'useMicroSurfaceFromReflectivityMapAlpha', changedProps)
        checkPrimitiveDiff(oldProps.useObjectSpaceNormalMap, newProps.useObjectSpaceNormalMap, 'useObjectSpaceNormalMap', changedProps)
        checkPrimitiveDiff(oldProps.useParallax, newProps.useParallax, 'useParallax', changedProps)
        checkPrimitiveDiff(oldProps.useParallaxOcclusion, newProps.useParallaxOcclusion, 'useParallaxOcclusion', changedProps)
        checkPrimitiveDiff(oldProps.usePhysicalLightFalloff, newProps.usePhysicalLightFalloff, 'usePhysicalLightFalloff', changedProps)
        checkPrimitiveDiff(oldProps.useRadianceOcclusion, newProps.useRadianceOcclusion, 'useRadianceOcclusion', changedProps)
        checkPrimitiveDiff(oldProps.useRadianceOverAlpha, newProps.useRadianceOverAlpha, 'useRadianceOverAlpha', changedProps)
        checkPrimitiveDiff(oldProps.useRoughnessFromMetallicTextureAlpha, newProps.useRoughnessFromMetallicTextureAlpha, 'useRoughnessFromMetallicTextureAlpha', changedProps)
        checkPrimitiveDiff(oldProps.useRoughnessFromMetallicTextureGreen, newProps.useRoughnessFromMetallicTextureGreen, 'useRoughnessFromMetallicTextureGreen', changedProps)
        checkPrimitiveDiff(oldProps.useSpecularOverAlpha, newProps.useSpecularOverAlpha, 'useSpecularOverAlpha', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The Physically based material of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export class FiberPBRMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberFluentMaterialPropsHandler implements PropsHandler<FiberFluentMaterialProps> {
    getPropertyUpdates(oldProps: FiberFluentMaterialProps, newProps: FiberFluentMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps.albedoColor, newProps.albedoColor, 'albedoColor', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsGuiFluentMaterial.albedoTexture.
        checkPrimitiveDiff(oldProps.borderMinValue, newProps.borderMinValue, 'borderMinValue', changedProps)
        checkPrimitiveDiff(oldProps.borderWidth, newProps.borderWidth, 'borderWidth', changedProps)
        checkPrimitiveDiff(oldProps.edgeSmoothingValue, newProps.edgeSmoothingValue, 'edgeSmoothingValue', changedProps)
        checkColor4Diff(oldProps.hoverColor, newProps.hoverColor, 'hoverColor', changedProps)
        checkVector3Diff(oldProps.hoverPosition, newProps.hoverPosition, 'hoverPosition', changedProps)
        checkPrimitiveDiff(oldProps['hoverPosition-x'], newProps['hoverPosition-x'], 'hoverPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['hoverPosition-y'], newProps['hoverPosition-y'], 'hoverPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['hoverPosition-z'], newProps['hoverPosition-z'], 'hoverPosition.z', changedProps)
        checkPrimitiveDiff(oldProps.hoverRadius, newProps.hoverRadius, 'hoverRadius', changedProps)
        checkColor3Diff(oldProps.innerGlowColor, newProps.innerGlowColor, 'innerGlowColor', changedProps)
        checkPrimitiveDiff(oldProps.innerGlowColorIntensity, newProps.innerGlowColorIntensity, 'innerGlowColorIntensity', changedProps)
        checkPrimitiveDiff(oldProps.renderBorders, newProps.renderBorders, 'renderBorders', changedProps)
        checkPrimitiveDiff(oldProps.renderHoverLight, newProps.renderHoverLight, 'renderHoverLight', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to render controls with fluent desgin
 *
 * This code has been generated
 */
export class FiberFluentMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFluentMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FluentMaterial",
        "namespace": "@babylonjs/core",
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
        "className": "FiberFluentMaterial"
    };
}

export class FiberShaderMaterialPropsHandler implements PropsHandler<FiberShaderMaterialProps> {
    getPropertyUpdates(oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'any' property (not coded) BabylonjsCoreShaderMaterial.shaderPath.
        checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
        checkMethodDiff(oldProps.setArray2, newProps.setArray2, 'setArray2', changedProps)
        checkMethodDiff(oldProps.setArray3, newProps.setArray3, 'setArray3', changedProps)
        checkMethodDiff(oldProps.setArray4, newProps.setArray4, 'setArray4', changedProps)
        checkMethodDiff(oldProps.setColor3, newProps.setColor3, 'setColor3', changedProps)
        checkMethodDiff(oldProps.setColor3Array, newProps.setColor3Array, 'setColor3Array', changedProps)
        checkMethodDiff(oldProps.setColor4, newProps.setColor4, 'setColor4', changedProps)
        checkMethodDiff(oldProps.setColor4Array, newProps.setColor4Array, 'setColor4Array', changedProps)
        checkMethodDiff(oldProps.setFloat, newProps.setFloat, 'setFloat', changedProps)
        checkMethodDiff(oldProps.setFloats, newProps.setFloats, 'setFloats', changedProps)
        checkMethodDiff(oldProps.setInt, newProps.setInt, 'setInt', changedProps)
        checkMethodDiff(oldProps.setMatrices, newProps.setMatrices, 'setMatrices', changedProps)
        checkMethodDiff(oldProps.setMatrix, newProps.setMatrix, 'setMatrix', changedProps)
        checkMethodDiff(oldProps.setMatrix2x2, newProps.setMatrix2x2, 'setMatrix2x2', changedProps)
        checkMethodDiff(oldProps.setMatrix3x3, newProps.setMatrix3x3, 'setMatrix3x3', changedProps)
        checkMethodDiff(oldProps.setTexture, newProps.setTexture, 'setTexture', changedProps)
        checkMethodDiff(oldProps.setTextureArray, newProps.setTextureArray, 'setTextureArray', changedProps)
        checkMethodDiff(oldProps.setVector2, newProps.setVector2, 'setVector2', changedProps)
        checkMethodDiff(oldProps.setVector3, newProps.setVector3, 'setVector3', changedProps)
        checkMethodDiff(oldProps.setVector4, newProps.setVector4, 'setVector4', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 *
 * This returned material effects how the mesh will look based on the code in the shaders.
 *
 * This code has been generated
 */
export class FiberShaderMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShaderMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShaderMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberMultiMaterialPropsHandler implements PropsHandler<FiberMultiMaterialProps> {
    getPropertyUpdates(oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps): PropertyUpdate[] | null {
        // skipping type: 'BabylonjsCoreMaterial[]' property (not coded) BabylonjsCoreMultiMaterial.subMaterials.
        return null; // no props to check
    }
}

/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 *
 * This code has been generated
 */
export class FiberMultiMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiMaterial",
        "namespace": "@babylonjs/core",
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

export class FiberLightPropsHandler implements PropsHandler<FiberLightProps> {
    getPropertyUpdates(oldProps: FiberLightProps, newProps: FiberLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkColor3Diff(oldProps.diffuse, newProps.diffuse, 'diffuse', changedProps)
        // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.excludedMeshes.
        checkPrimitiveDiff(oldProps.excludeWithLayerMask, newProps.excludeWithLayerMask, 'excludeWithLayerMask', changedProps)
        checkPrimitiveDiff(oldProps.falloffType, newProps.falloffType, 'falloffType', changedProps)
        // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.includedOnlyMeshes.
        checkPrimitiveDiff(oldProps.includeOnlyWithLayerMask, newProps.includeOnlyWithLayerMask, 'includeOnlyWithLayerMask', changedProps)
        checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
        checkPrimitiveDiff(oldProps.intensityMode, newProps.intensityMode, 'intensityMode', changedProps)
        checkPrimitiveDiff(oldProps.lightmapMode, newProps.lightmapMode, 'lightmapMode', changedProps)
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        checkPrimitiveDiff(oldProps.range, newProps.range, 'range', changedProps)
        checkPrimitiveDiff(oldProps.renderPriority, newProps.renderPriority, 'renderPriority', changedProps)
        checkPrimitiveDiff(oldProps.shadowEnabled, newProps.shadowEnabled, 'shadowEnabled', changedProps)
        checkColor3Diff(oldProps.specular, newProps.specular, 'specular', changedProps)
        checkMethodDiff(oldProps.setEnabled, newProps.setEnabled, 'setEnabled', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 *
 * This code has been generated
 */
export class FiberLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Light",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberLight"
    };
}

export class FiberShadowLightPropsHandler implements PropsHandler<FiberShadowLightProps> {
    getPropertyUpdates(oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkLambdaDiff(oldProps.customProjectionMatrixBuilder, newProps.customProjectionMatrixBuilder, 'customProjectionMatrixBuilder', changedProps)
        checkVector3Diff(oldProps.direction, newProps.direction, 'direction', changedProps)
        checkPrimitiveDiff(oldProps['direction-x'], newProps['direction-x'], 'direction.x', changedProps)
        checkPrimitiveDiff(oldProps['direction-y'], newProps['direction-y'], 'direction.y', changedProps)
        checkPrimitiveDiff(oldProps['direction-z'], newProps['direction-z'], 'direction.z', changedProps)
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        checkPrimitiveDiff(oldProps.shadowMaxZ, newProps.shadowMaxZ, 'shadowMaxZ', changedProps)
        checkPrimitiveDiff(oldProps.shadowMinZ, newProps.shadowMinZ, 'shadowMinZ', changedProps)
        checkVector3Diff(oldProps.transformedDirection, newProps.transformedDirection, 'transformedDirection', changedProps)
        checkPrimitiveDiff(oldProps['transformedDirection-x'], newProps['transformedDirection-x'], 'transformedDirection.x', changedProps)
        checkPrimitiveDiff(oldProps['transformedDirection-y'], newProps['transformedDirection-y'], 'transformedDirection.y', changedProps)
        checkPrimitiveDiff(oldProps['transformedDirection-z'], newProps['transformedDirection-z'], 'transformedDirection.z', changedProps)
        checkVector3Diff(oldProps.transformedPosition, newProps.transformedPosition, 'transformedPosition', changedProps)
        checkPrimitiveDiff(oldProps['transformedPosition-x'], newProps['transformedPosition-x'], 'transformedPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['transformedPosition-y'], newProps['transformedPosition-y'], 'transformedPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['transformedPosition-z'], newProps['transformedPosition-z'], 'transformedPosition.z', changedProps)
        checkMethodDiff(oldProps.setDirectionToTarget, newProps.setDirectionToTarget, 'setDirectionToTarget', changedProps)
        checkMethodDiff(oldProps.setShadowProjectionMatrix, newProps.setShadowProjectionMatrix, 'setShadowProjectionMatrix', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 *
 * This code has been generated
 */
export class FiberShadowLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowLight",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberShadowLight"
    };
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<FiberDirectionalLightProps> {
    getPropertyUpdates(oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoCalcShadowZBounds, newProps.autoCalcShadowZBounds, 'autoCalcShadowZBounds', changedProps)
        checkPrimitiveDiff(oldProps.autoUpdateExtends, newProps.autoUpdateExtends, 'autoUpdateExtends', changedProps)
        checkPrimitiveDiff(oldProps.shadowFrustumSize, newProps.shadowFrustumSize, 'shadowFrustumSize', changedProps)
        checkPrimitiveDiff(oldProps.shadowOrthoScale, newProps.shadowOrthoScale, 'shadowOrthoScale', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberDirectionalLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDirectionalLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DirectionalLight",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberDirectionalLight"
    };
}

export class FiberPointLightPropsHandler implements PropsHandler<FiberPointLightProps> {
    getPropertyUpdates(oldProps: FiberPointLightProps, newProps: FiberPointLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkVector3Diff(oldProps.direction, newProps.direction, 'direction', changedProps)
        checkPrimitiveDiff(oldProps['direction-x'], newProps['direction-x'], 'direction.x', changedProps)
        checkPrimitiveDiff(oldProps['direction-y'], newProps['direction-y'], 'direction.y', changedProps)
        checkPrimitiveDiff(oldProps['direction-z'], newProps['direction-z'], 'direction.z', changedProps)
        checkPrimitiveDiff(oldProps.shadowAngle, newProps.shadowAngle, 'shadowAngle', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberPointLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointLight",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberPointLight"
    };
}

export class FiberSpotLightPropsHandler implements PropsHandler<FiberSpotLightProps> {
    getPropertyUpdates(oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.angle, newProps.angle, 'angle', changedProps)
        checkPrimitiveDiff(oldProps.exponent, newProps.exponent, 'exponent', changedProps)
        checkPrimitiveDiff(oldProps.innerAngle, newProps.innerAngle, 'innerAngle', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreSpotLight.projectionTexture.
        checkPrimitiveDiff(oldProps.projectionTextureLightFar, newProps.projectionTextureLightFar, 'projectionTextureLightFar', changedProps)
        checkPrimitiveDiff(oldProps.projectionTextureLightNear, newProps.projectionTextureLightNear, 'projectionTextureLightNear', changedProps)
        checkVector3Diff(oldProps.projectionTextureUpDirection, newProps.projectionTextureUpDirection, 'projectionTextureUpDirection', changedProps)
        checkPrimitiveDiff(oldProps['projectionTextureUpDirection-x'], newProps['projectionTextureUpDirection-x'], 'projectionTextureUpDirection.x', changedProps)
        checkPrimitiveDiff(oldProps['projectionTextureUpDirection-y'], newProps['projectionTextureUpDirection-y'], 'projectionTextureUpDirection.y', changedProps)
        checkPrimitiveDiff(oldProps['projectionTextureUpDirection-z'], newProps['projectionTextureUpDirection-z'], 'projectionTextureUpDirection.z', changedProps)
        checkPrimitiveDiff(oldProps.shadowAngleScale, newProps.shadowAngleScale, 'shadowAngleScale', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberSpotLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpotLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpotLight",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberSpotLight"
    };
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<FiberHemisphericLightProps> {
    getPropertyUpdates(oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkVector3Diff(oldProps.direction, newProps.direction, 'direction', changedProps)
        checkPrimitiveDiff(oldProps['direction-x'], newProps['direction-x'], 'direction.x', changedProps)
        checkPrimitiveDiff(oldProps['direction-y'], newProps['direction-y'], 'direction.y', changedProps)
        checkPrimitiveDiff(oldProps['direction-z'], newProps['direction-z'], 'direction.z', changedProps)
        checkColor3Diff(oldProps.groundColor, newProps.groundColor, 'groundColor', changedProps)
        checkMethodDiff(oldProps.setDirectionToTarget, newProps.setDirectionToTarget, 'setDirectionToTarget', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 *
 * This code has been generated
 */
export class FiberHemisphericLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHemisphericLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HemisphericLight",
        "namespace": "@babylonjs/core",
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
        "isNode": true,
        "className": "FiberHemisphericLight"
    };
}

export class FiberControlPropsHandler implements PropsHandler<FiberControlProps> {
    getPropertyUpdates(oldProps: FiberControlProps, newProps: FiberControlProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
        checkPrimitiveDiff(oldProps.clipChildren, newProps.clipChildren, 'clipChildren', changedProps)
        checkPrimitiveDiff(oldProps.clipContent, newProps.clipContent, 'clipContent', changedProps)
        checkPrimitiveDiff(oldProps.color, newProps.color, 'color', changedProps)
        checkPrimitiveDiff(oldProps.disabledColor, newProps.disabledColor, 'disabledColor', changedProps)
        checkPrimitiveDiff(oldProps.disabledColorItem, newProps.disabledColorItem, 'disabledColorItem', changedProps)
        checkPrimitiveDiff(oldProps.fixedRatio, newProps.fixedRatio, 'fixedRatio', changedProps)
        checkPrimitiveDiff(oldProps.fontFamily, newProps.fontFamily, 'fontFamily', changedProps)
        // type: '{ ascent: number; height: number; descent: number; }' property (not coded) BabylonjsGuiControl.fontOffset.
        checkPrimitiveDiff(oldProps.fontSize, newProps.fontSize, 'fontSize', changedProps)
        checkPrimitiveDiff(oldProps.fontSizeInPixels, newProps.fontSizeInPixels, 'fontSizeInPixels', changedProps)
        checkPrimitiveDiff(oldProps.fontStyle, newProps.fontStyle, 'fontStyle', changedProps)
        checkPrimitiveDiff(oldProps.fontWeight, newProps.fontWeight, 'fontWeight', changedProps)
        checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
        checkPrimitiveDiff(oldProps.heightInPixels, newProps.heightInPixels, 'heightInPixels', changedProps)
        checkPrimitiveDiff(oldProps.horizontalAlignment, newProps.horizontalAlignment, 'horizontalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.hoverCursor, newProps.hoverCursor, 'hoverCursor', changedProps)
        checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
        checkPrimitiveDiff(oldProps.isFocusInvisible, newProps.isFocusInvisible, 'isFocusInvisible', changedProps)
        checkPrimitiveDiff(oldProps.isHighlighted, newProps.isHighlighted, 'isHighlighted', changedProps)
        checkPrimitiveDiff(oldProps.isHitTestVisible, newProps.isHitTestVisible, 'isHitTestVisible', changedProps)
        checkPrimitiveDiff(oldProps.isPointerBlocker, newProps.isPointerBlocker, 'isPointerBlocker', changedProps)
        checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
        checkPrimitiveDiff(oldProps.left, newProps.left, 'left', changedProps)
        checkPrimitiveDiff(oldProps.leftInPixels, newProps.leftInPixels, 'leftInPixels', changedProps)
        checkPrimitiveDiff(oldProps.linkOffsetX, newProps.linkOffsetX, 'linkOffsetX', changedProps)
        checkPrimitiveDiff(oldProps.linkOffsetXInPixels, newProps.linkOffsetXInPixels, 'linkOffsetXInPixels', changedProps)
        checkPrimitiveDiff(oldProps.linkOffsetY, newProps.linkOffsetY, 'linkOffsetY', changedProps)
        checkPrimitiveDiff(oldProps.linkOffsetYInPixels, newProps.linkOffsetYInPixels, 'linkOffsetYInPixels', changedProps)
        // type: 'any' property (not coded) BabylonjsGuiControl.metadata.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.notRenderable, newProps.notRenderable, 'notRenderable', changedProps)
        checkObservableDiff(oldProps.onAfterDrawObservable, newProps.onAfterDrawObservable, 'onAfterDrawObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeDrawObservable, newProps.onBeforeDrawObservable, 'onBeforeDrawObservable', changedProps)
        checkObservableDiff(oldProps.onDirtyObservable, newProps.onDirtyObservable, 'onDirtyObservable', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        checkObservableDiff(oldProps.onPointerClickObservable, newProps.onPointerClickObservable, 'onPointerClickObservable', changedProps)
        checkObservableDiff(oldProps.onPointerDownObservable, newProps.onPointerDownObservable, 'onPointerDownObservable', changedProps)
        checkObservableDiff(oldProps.onPointerEnterObservable, newProps.onPointerEnterObservable, 'onPointerEnterObservable', changedProps)
        checkObservableDiff(oldProps.onPointerMoveObservable, newProps.onPointerMoveObservable, 'onPointerMoveObservable', changedProps)
        checkObservableDiff(oldProps.onPointerOutObservable, newProps.onPointerOutObservable, 'onPointerOutObservable', changedProps)
        checkObservableDiff(oldProps.onPointerUpObservable, newProps.onPointerUpObservable, 'onPointerUpObservable', changedProps)
        checkObservableDiff(oldProps.onWheelObservable, newProps.onWheelObservable, 'onWheelObservable', changedProps)
        checkPrimitiveDiff(oldProps.paddingBottom, newProps.paddingBottom, 'paddingBottom', changedProps)
        checkPrimitiveDiff(oldProps.paddingBottomInPixels, newProps.paddingBottomInPixels, 'paddingBottomInPixels', changedProps)
        checkPrimitiveDiff(oldProps.paddingLeft, newProps.paddingLeft, 'paddingLeft', changedProps)
        checkPrimitiveDiff(oldProps.paddingLeftInPixels, newProps.paddingLeftInPixels, 'paddingLeftInPixels', changedProps)
        checkPrimitiveDiff(oldProps.paddingRight, newProps.paddingRight, 'paddingRight', changedProps)
        checkPrimitiveDiff(oldProps.paddingRightInPixels, newProps.paddingRightInPixels, 'paddingRightInPixels', changedProps)
        checkPrimitiveDiff(oldProps.paddingTop, newProps.paddingTop, 'paddingTop', changedProps)
        checkPrimitiveDiff(oldProps.paddingTopInPixels, newProps.paddingTopInPixels, 'paddingTopInPixels', changedProps)
        // type: 'BabylonjsGuiContainer' property (not coded) BabylonjsGuiControl.parent.
        checkPrimitiveDiff(oldProps.rotation, newProps.rotation, 'rotation', changedProps)
        checkPrimitiveDiff(oldProps.scaleX, newProps.scaleX, 'scaleX', changedProps)
        checkPrimitiveDiff(oldProps.scaleY, newProps.scaleY, 'scaleY', changedProps)
        checkPrimitiveDiff(oldProps.shadowBlur, newProps.shadowBlur, 'shadowBlur', changedProps)
        checkPrimitiveDiff(oldProps.shadowColor, newProps.shadowColor, 'shadowColor', changedProps)
        checkPrimitiveDiff(oldProps.shadowOffsetX, newProps.shadowOffsetX, 'shadowOffsetX', changedProps)
        checkPrimitiveDiff(oldProps.shadowOffsetY, newProps.shadowOffsetY, 'shadowOffsetY', changedProps)
        // type: 'BabylonjsGuiStyle' property (not coded) BabylonjsGuiControl.style.
        checkPrimitiveDiff(oldProps.top, newProps.top, 'top', changedProps)
        checkPrimitiveDiff(oldProps.topInPixels, newProps.topInPixels, 'topInPixels', changedProps)
        checkPrimitiveDiff(oldProps.transformCenterX, newProps.transformCenterX, 'transformCenterX', changedProps)
        checkPrimitiveDiff(oldProps.transformCenterY, newProps.transformCenterY, 'transformCenterY', changedProps)
        checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
        checkPrimitiveDiff(oldProps.useBitmapCache, newProps.useBitmapCache, 'useBitmapCache', changedProps)
        checkPrimitiveDiff(oldProps.verticalAlignment, newProps.verticalAlignment, 'verticalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
        checkPrimitiveDiff(oldProps.widthInPixels, newProps.widthInPixels, 'widthInPixels', changedProps)
        checkPrimitiveDiff(oldProps.zIndex, newProps.zIndex, 'zIndex', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export class FiberControl implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control",
        "namespace": "@babylonjs/gui",
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

export class FiberContainerPropsHandler implements PropsHandler<FiberContainerProps> {
    getPropertyUpdates(oldProps: FiberContainerProps, newProps: FiberContainerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.adaptHeightToChildren, newProps.adaptHeightToChildren, 'adaptHeightToChildren', changedProps)
        checkPrimitiveDiff(oldProps.adaptWidthToChildren, newProps.adaptWidthToChildren, 'adaptWidthToChildren', changedProps)
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.logLayoutCycleErrors, newProps.logLayoutCycleErrors, 'logLayoutCycleErrors', changedProps)
        checkPrimitiveDiff(oldProps.maxLayoutCycle, newProps.maxLayoutCycle, 'maxLayoutCycle', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export class FiberContainer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container",
        "namespace": "@babylonjs/gui",
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

export class FiberRectanglePropsHandler implements PropsHandler<FiberRectangleProps> {
    getPropertyUpdates(oldProps: FiberRectangleProps, newProps: FiberRectangleProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.cornerRadius, newProps.cornerRadius, 'cornerRadius', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export class FiberRectangle implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Rectangle",
        "namespace": "@babylonjs/gui",
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

export class FiberButtonPropsHandler implements PropsHandler<FiberButtonProps> {
    getPropertyUpdates(oldProps: FiberButtonProps, newProps: FiberButtonProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.delegatePickingToChildren, newProps.delegatePickingToChildren, 'delegatePickingToChildren', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkLambdaDiff(oldProps.pointerDownAnimation, newProps.pointerDownAnimation, 'pointerDownAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerEnterAnimation, newProps.pointerEnterAnimation, 'pointerEnterAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerOutAnimation, newProps.pointerOutAnimation, 'pointerOutAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerUpAnimation, newProps.pointerUpAnimation, 'pointerUpAnimation', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export class FiberButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButtonPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button",
        "namespace": "@babylonjs/gui",
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

export class FiberSelectionPanelPropsHandler implements PropsHandler<FiberSelectionPanelProps> {
    getPropertyUpdates(oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.barColor, newProps.barColor, 'barColor', changedProps)
        checkPrimitiveDiff(oldProps.barHeight, newProps.barHeight, 'barHeight', changedProps)
        checkPrimitiveDiff(oldProps.buttonBackground, newProps.buttonBackground, 'buttonBackground', changedProps)
        checkPrimitiveDiff(oldProps.buttonColor, newProps.buttonColor, 'buttonColor', changedProps)
        // type: 'BabylonjsGuiSelectorGroup[]' property (not coded) BabylonjsGuiSelectionPanel.groups.
        checkPrimitiveDiff(oldProps.headerColor, newProps.headerColor, 'headerColor', changedProps)
        checkPrimitiveDiff(oldProps.labelColor, newProps.labelColor, 'labelColor', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.spacerHeight, newProps.spacerHeight, 'spacerHeight', changedProps)
        checkMethodDiff(oldProps.addGroup, newProps.addGroup, 'addGroup', changedProps)
        checkMethodDiff(oldProps.addToGroupCheckbox, newProps.addToGroupCheckbox, 'addToGroupCheckbox', changedProps)
        checkMethodDiff(oldProps.addToGroupRadio, newProps.addToGroupRadio, 'addToGroupRadio', changedProps)
        checkMethodDiff(oldProps.addToGroupSlider, newProps.addToGroupSlider, 'addToGroupSlider', changedProps)
        checkMethodDiff(oldProps.setHeaderName, newProps.setHeaderName, 'setHeaderName', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export class FiberSelectionPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSelectionPanelPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SelectionPanel",
        "namespace": "@babylonjs/gui",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "groups",
                "type": "BabylonjsGuiSelectorGroup[]",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberSelectionPanel"
    };
}

export class FiberScrollViewerPropsHandler implements PropsHandler<FiberScrollViewerProps> {
    getPropertyUpdates(oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.barBackground, newProps.barBackground, 'barBackground', changedProps)
        checkPrimitiveDiff(oldProps.barColor, newProps.barColor, 'barColor', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.barImage.
        checkPrimitiveDiff(oldProps.barImageHeight, newProps.barImageHeight, 'barImageHeight', changedProps)
        checkPrimitiveDiff(oldProps.barSize, newProps.barSize, 'barSize', changedProps)
        checkPrimitiveDiff(oldProps.forceHorizontalBar, newProps.forceHorizontalBar, 'forceHorizontalBar', changedProps)
        checkPrimitiveDiff(oldProps.forceVerticalBar, newProps.forceVerticalBar, 'forceVerticalBar', changedProps)
        checkPrimitiveDiff(oldProps.freezeControls, newProps.freezeControls, 'freezeControls', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalBarImage.
        checkPrimitiveDiff(oldProps.horizontalBarImageHeight, newProps.horizontalBarImageHeight, 'horizontalBarImageHeight', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalThumbImage.
        checkPrimitiveDiff(oldProps.scrollBackground, newProps.scrollBackground, 'scrollBackground', changedProps)
        checkPrimitiveDiff(oldProps.thumbHeight, newProps.thumbHeight, 'thumbHeight', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.thumbImage.
        checkPrimitiveDiff(oldProps.thumbLength, newProps.thumbLength, 'thumbLength', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalBarImage.
        checkPrimitiveDiff(oldProps.verticalBarImageHeight, newProps.verticalBarImageHeight, 'verticalBarImageHeight', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalThumbImage.
        checkPrimitiveDiff(oldProps.wheelPrecision, newProps.wheelPrecision, 'wheelPrecision', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        checkMethodDiff(oldProps.setBucketSizes, newProps.setBucketSizes, 'setBucketSizes', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export class FiberScrollViewer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollViewerPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollViewer",
        "namespace": "@babylonjs/gui",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "isImageBased",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberScrollViewer"
    };
}

export class FiberStackPanelPropsHandler implements PropsHandler<FiberStackPanelProps> {
    getPropertyUpdates(oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
        checkPrimitiveDiff(oldProps.ignoreLayoutWarnings, newProps.ignoreLayoutWarnings, 'ignoreLayoutWarnings', changedProps)
        checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export class FiberStackPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel",
        "namespace": "@babylonjs/gui",
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

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<FiberVirtualKeyboardProps> {
    getPropertyUpdates(oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.defaultButtonBackground, newProps.defaultButtonBackground, 'defaultButtonBackground', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonColor, newProps.defaultButtonColor, 'defaultButtonColor', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonHeight, newProps.defaultButtonHeight, 'defaultButtonHeight', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonPaddingBottom, newProps.defaultButtonPaddingBottom, 'defaultButtonPaddingBottom', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonPaddingLeft, newProps.defaultButtonPaddingLeft, 'defaultButtonPaddingLeft', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonPaddingRight, newProps.defaultButtonPaddingRight, 'defaultButtonPaddingRight', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonPaddingTop, newProps.defaultButtonPaddingTop, 'defaultButtonPaddingTop', changedProps)
        checkPrimitiveDiff(oldProps.defaultButtonWidth, newProps.defaultButtonWidth, 'defaultButtonWidth', changedProps)
        checkObservableDiff(oldProps.onKeyPressObservable, newProps.onKeyPressObservable, 'onKeyPressObservable', changedProps)
        checkPrimitiveDiff(oldProps.selectedShiftThickness, newProps.selectedShiftThickness, 'selectedShiftThickness', changedProps)
        checkPrimitiveDiff(oldProps.shiftButtonColor, newProps.shiftButtonColor, 'shiftButtonColor', changedProps)
        checkPrimitiveDiff(oldProps.shiftState, newProps.shiftState, 'shiftState', changedProps)
        checkMethodDiff(oldProps.addKeysRow, newProps.addKeysRow, 'addKeysRow', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export class FiberVirtualKeyboard implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualKeyboardPropsHandler(),
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualKeyboard",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberVirtualKeyboard"
    };
}

export class FiberEllipsePropsHandler implements PropsHandler<FiberEllipseProps> {
    getPropertyUpdates(oldProps: FiberEllipseProps, newProps: FiberEllipseProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export class FiberEllipse implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEllipsePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Ellipse",
        "namespace": "@babylonjs/gui",
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

export class FiberGridPropsHandler implements PropsHandler<FiberGridProps> {
    getPropertyUpdates(oldProps: FiberGridProps, newProps: FiberGridProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkMethodDiff(oldProps.addColumnDefinition, newProps.addColumnDefinition, 'addColumnDefinition', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        checkMethodDiff(oldProps.addRowDefinition, newProps.addRowDefinition, 'addRowDefinition', changedProps)
        checkMethodDiff(oldProps.setColumnDefinition, newProps.setColumnDefinition, 'setColumnDefinition', changedProps)
        checkMethodDiff(oldProps.setRowDefinition, newProps.setRowDefinition, 'setRowDefinition', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export class FiberGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGridPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Grid",
        "namespace": "@babylonjs/gui",
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

export class Fiber_ScrollViewerWindowPropsHandler implements PropsHandler<Fiber_ScrollViewerWindowProps> {
    getPropertyUpdates(oldProps: Fiber_ScrollViewerWindowProps, newProps: Fiber_ScrollViewerWindowProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.freezeControls, newProps.freezeControls, 'freezeControls', changedProps)
        checkPrimitiveDiff(oldProps.parentClientHeight, newProps.parentClientHeight, 'parentClientHeight', changedProps)
        checkPrimitiveDiff(oldProps.parentClientWidth, newProps.parentClientWidth, 'parentClientWidth', changedProps)
        checkMethodDiff(oldProps.setBucketSizes, newProps.setBucketSizes, 'setBucketSizes', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export class Fiber_ScrollViewerWindow implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new Fiber_ScrollViewerWindowPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "_ScrollViewerWindow",
        "namespace": "@babylonjs/gui",
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
        "className": "Fiber_ScrollViewerWindow"
    };
}

export class FiberTextBlockPropsHandler implements PropsHandler<FiberTextBlockProps> {
    getPropertyUpdates(oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.lineSpacing, newProps.lineSpacing, 'lineSpacing', changedProps)
        checkPrimitiveDiff(oldProps.lineThrough, newProps.lineThrough, 'lineThrough', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onLinesReadyObservable, newProps.onLinesReadyObservable, 'onLinesReadyObservable', changedProps)
        checkObservableDiff(oldProps.onTextChangedObservable, newProps.onTextChangedObservable, 'onTextChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.outlineColor, newProps.outlineColor, 'outlineColor', changedProps)
        checkPrimitiveDiff(oldProps.outlineWidth, newProps.outlineWidth, 'outlineWidth', changedProps)
        checkPrimitiveDiff(oldProps.resizeToFit, newProps.resizeToFit, 'resizeToFit', changedProps)
        checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
        checkPrimitiveDiff(oldProps.textHorizontalAlignment, newProps.textHorizontalAlignment, 'textHorizontalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.textVerticalAlignment, newProps.textVerticalAlignment, 'textVerticalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.textWrapping, newProps.textWrapping, 'textWrapping', changedProps)
        checkPrimitiveDiff(oldProps.underline, newProps.underline, 'underline', changedProps)
        checkLambdaDiff(oldProps.wordSplittingFunction, newProps.wordSplittingFunction, 'wordSplittingFunction', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export class FiberTextBlock implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTextBlockPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TextBlock",
        "namespace": "@babylonjs/gui",
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

export class FiberImagePropsHandler implements PropsHandler<FiberImageProps> {
    getPropertyUpdates(oldProps: FiberImageProps, newProps: FiberImageProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoScale, newProps.autoScale, 'autoScale', changedProps)
        checkPrimitiveDiff(oldProps.cellHeight, newProps.cellHeight, 'cellHeight', changedProps)
        checkPrimitiveDiff(oldProps.cellId, newProps.cellId, 'cellId', changedProps)
        checkPrimitiveDiff(oldProps.cellWidth, newProps.cellWidth, 'cellWidth', changedProps)
        checkPrimitiveDiff(oldProps.detectPointerOnOpaqueOnly, newProps.detectPointerOnOpaqueOnly, 'detectPointerOnOpaqueOnly', changedProps)
        // type: 'HTMLImageElement' property (not coded) BabylonjsGuiImage.domImage.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onImageLoadedObservable, newProps.onImageLoadedObservable, 'onImageLoadedObservable', changedProps)
        checkObservableDiff(oldProps.onSVGAttributesComputedObservable, newProps.onSVGAttributesComputedObservable, 'onSVGAttributesComputedObservable', changedProps)
        checkPrimitiveDiff(oldProps.populateNinePatchSlicesFromImage, newProps.populateNinePatchSlicesFromImage, 'populateNinePatchSlicesFromImage', changedProps)
        checkPrimitiveDiff(oldProps.sliceBottom, newProps.sliceBottom, 'sliceBottom', changedProps)
        checkPrimitiveDiff(oldProps.sliceLeft, newProps.sliceLeft, 'sliceLeft', changedProps)
        checkPrimitiveDiff(oldProps.sliceRight, newProps.sliceRight, 'sliceRight', changedProps)
        checkPrimitiveDiff(oldProps.sliceTop, newProps.sliceTop, 'sliceTop', changedProps)
        checkPrimitiveDiff(oldProps.source, newProps.source, 'source', changedProps)
        checkPrimitiveDiff(oldProps.sourceHeight, newProps.sourceHeight, 'sourceHeight', changedProps)
        checkPrimitiveDiff(oldProps.sourceLeft, newProps.sourceLeft, 'sourceLeft', changedProps)
        checkPrimitiveDiff(oldProps.sourceTop, newProps.sourceTop, 'sourceTop', changedProps)
        checkPrimitiveDiff(oldProps.sourceWidth, newProps.sourceWidth, 'sourceWidth', changedProps)
        checkPrimitiveDiff(oldProps.stretch, newProps.stretch, 'stretch', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export class FiberImage implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImagePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Image",
        "namespace": "@babylonjs/gui",
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

export class FiberCheckboxPropsHandler implements PropsHandler<FiberCheckboxProps> {
    getPropertyUpdates(oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.checkSizeRatio, newProps.checkSizeRatio, 'checkSizeRatio', changedProps)
        checkPrimitiveDiff(oldProps.isChecked, newProps.isChecked, 'isChecked', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onIsCheckedChangedObservable, newProps.onIsCheckedChangedObservable, 'onIsCheckedChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export class FiberCheckbox implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCheckboxPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Checkbox",
        "namespace": "@babylonjs/gui",
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

export class FiberColorPickerPropsHandler implements PropsHandler<FiberColorPickerProps> {
    getPropertyUpdates(oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onValueChangedObservable, newProps.onValueChangedObservable, 'onValueChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.size, newProps.size, 'size', changedProps)
        checkColor3Diff(oldProps.value, newProps.value, 'value', changedProps)
        checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export class FiberColorPicker implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorPickerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorPicker",
        "namespace": "@babylonjs/gui",
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

export class FiberInputTextPropsHandler implements PropsHandler<FiberInputTextProps> {
    getPropertyUpdates(oldProps: FiberInputTextProps, newProps: FiberInputTextProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.addKey, newProps.addKey, 'addKey', changedProps)
        checkPrimitiveDiff(oldProps.autoStretchWidth, newProps.autoStretchWidth, 'autoStretchWidth', changedProps)
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.currentKey, newProps.currentKey, 'currentKey', changedProps)
        checkPrimitiveDiff(oldProps.deadKey, newProps.deadKey, 'deadKey', changedProps)
        checkPrimitiveDiff(oldProps.disableMobilePrompt, newProps.disableMobilePrompt, 'disableMobilePrompt', changedProps)
        checkPrimitiveDiff(oldProps.focusedBackground, newProps.focusedBackground, 'focusedBackground', changedProps)
        checkPrimitiveDiff(oldProps.focusedColor, newProps.focusedColor, 'focusedColor', changedProps)
        checkPrimitiveDiff(oldProps.highligherOpacity, newProps.highligherOpacity, 'highligherOpacity', changedProps)
        checkPrimitiveDiff(oldProps.highlightedText, newProps.highlightedText, 'highlightedText', changedProps)
        checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
        checkPrimitiveDiff(oldProps.maxWidth, newProps.maxWidth, 'maxWidth', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onBeforeKeyAddObservable, newProps.onBeforeKeyAddObservable, 'onBeforeKeyAddObservable', changedProps)
        checkObservableDiff(oldProps.onBlurObservable, newProps.onBlurObservable, 'onBlurObservable', changedProps)
        checkObservableDiff(oldProps.onFocusObservable, newProps.onFocusObservable, 'onFocusObservable', changedProps)
        checkPrimitiveDiff(oldProps.onFocusSelectAll, newProps.onFocusSelectAll, 'onFocusSelectAll', changedProps)
        checkObservableDiff(oldProps.onKeyboardEventProcessedObservable, newProps.onKeyboardEventProcessedObservable, 'onKeyboardEventProcessedObservable', changedProps)
        checkObservableDiff(oldProps.onTextChangedObservable, newProps.onTextChangedObservable, 'onTextChangedObservable', changedProps)
        checkObservableDiff(oldProps.onTextCopyObservable, newProps.onTextCopyObservable, 'onTextCopyObservable', changedProps)
        checkObservableDiff(oldProps.onTextCutObservable, newProps.onTextCutObservable, 'onTextCutObservable', changedProps)
        checkObservableDiff(oldProps.onTextHighlightObservable, newProps.onTextHighlightObservable, 'onTextHighlightObservable', changedProps)
        checkObservableDiff(oldProps.onTextPasteObservable, newProps.onTextPasteObservable, 'onTextPasteObservable', changedProps)
        checkPrimitiveDiff(oldProps.placeholderColor, newProps.placeholderColor, 'placeholderColor', changedProps)
        checkPrimitiveDiff(oldProps.placeholderText, newProps.placeholderText, 'placeholderText', changedProps)
        checkPrimitiveDiff(oldProps.promptMessage, newProps.promptMessage, 'promptMessage', changedProps)
        checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
        checkPrimitiveDiff(oldProps.textHighlightColor, newProps.textHighlightColor, 'textHighlightColor', changedProps)
        checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
        checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export class FiberInputText implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputText",
        "namespace": "@babylonjs/gui",
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

export class FiberInputPasswordPropsHandler implements PropsHandler<FiberInputPasswordProps> {
    getPropertyUpdates(oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export class FiberInputPassword implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputPasswordPropsHandler(),
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputPassword",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberInputPassword"
    };
}

export class FiberLinePropsHandler implements PropsHandler<FiberLineProps> {
    getPropertyUpdates(oldProps: FiberLineProps, newProps: FiberLineProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkControlDiff(oldProps.connectedControl, newProps.connectedControl, 'connectedControl', changedProps)
        checkNumericArrayDiff(oldProps.dash, newProps.dash, 'dash', changedProps)
        checkPrimitiveDiff(oldProps.horizontalAlignment, newProps.horizontalAlignment, 'horizontalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.verticalAlignment, newProps.verticalAlignment, 'verticalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.x1, newProps.x1, 'x1', changedProps)
        checkPrimitiveDiff(oldProps.x2, newProps.x2, 'x2', changedProps)
        checkPrimitiveDiff(oldProps.y1, newProps.y1, 'y1', changedProps)
        checkPrimitiveDiff(oldProps.y2, newProps.y2, 'y2', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export class FiberLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Line",
        "namespace": "@babylonjs/gui",
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

export class FiberMultiLinePropsHandler implements PropsHandler<FiberMultiLineProps> {
    getPropertyUpdates(oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkNumericArrayDiff(oldProps.dash, newProps.dash, 'dash', changedProps)
        checkPrimitiveDiff(oldProps.horizontalAlignment, newProps.horizontalAlignment, 'horizontalAlignment', changedProps)
        checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkLambdaDiff(oldProps.onPointUpdate, newProps.onPointUpdate, 'onPointUpdate', changedProps)
        checkPrimitiveDiff(oldProps.verticalAlignment, newProps.verticalAlignment, 'verticalAlignment', changedProps)
        checkMethodDiff(oldProps.add, newProps.add, 'add', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export class FiberMultiLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiLine",
        "namespace": "@babylonjs/gui",
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

export class FiberRadioButtonPropsHandler implements PropsHandler<FiberRadioButtonProps> {
    getPropertyUpdates(oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.checkSizeRatio, newProps.checkSizeRatio, 'checkSizeRatio', changedProps)
        checkPrimitiveDiff(oldProps.group, newProps.group, 'group', changedProps)
        checkPrimitiveDiff(oldProps.isChecked, newProps.isChecked, 'isChecked', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onIsCheckedChangedObservable, newProps.onIsCheckedChangedObservable, 'onIsCheckedChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export class FiberRadioButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRadioButtonPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RadioButton",
        "namespace": "@babylonjs/gui",
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

export class FiberBaseSliderPropsHandler implements PropsHandler<FiberBaseSliderProps> {
    getPropertyUpdates(oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.barOffset, newProps.barOffset, 'barOffset', changedProps)
        checkPrimitiveDiff(oldProps.displayThumb, newProps.displayThumb, 'displayThumb', changedProps)
        checkPrimitiveDiff(oldProps.isThumbClamped, newProps.isThumbClamped, 'isThumbClamped', changedProps)
        checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
        checkPrimitiveDiff(oldProps.maximum, newProps.maximum, 'maximum', changedProps)
        checkPrimitiveDiff(oldProps.minimum, newProps.minimum, 'minimum', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onValueChangedObservable, newProps.onValueChangedObservable, 'onValueChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.step, newProps.step, 'step', changedProps)
        checkPrimitiveDiff(oldProps.thumbWidth, newProps.thumbWidth, 'thumbWidth', changedProps)
        checkPrimitiveDiff(oldProps.value, newProps.value, 'value', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberBaseSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseSlider",
        "namespace": "@babylonjs/gui",
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

export class FiberScrollBarPropsHandler implements PropsHandler<FiberScrollBarProps> {
    getPropertyUpdates(oldProps: FiberScrollBarProps, newProps: FiberScrollBarProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.borderColor, newProps.borderColor, 'borderColor', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollBar",
        "namespace": "@babylonjs/gui",
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
        "className": "FiberScrollBar"
    };
}

export class FiberImageScrollBarPropsHandler implements PropsHandler<FiberImageScrollBarProps> {
    getPropertyUpdates(oldProps: FiberImageScrollBarProps, newProps: FiberImageScrollBarProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.backgroundImage.
        checkPrimitiveDiff(oldProps.barImageHeight, newProps.barImageHeight, 'barImageHeight', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.num90RotationInVerticalMode, newProps.num90RotationInVerticalMode, 'num90RotationInVerticalMode', changedProps)
        checkPrimitiveDiff(oldProps.thumbHeight, newProps.thumbHeight, 'thumbHeight', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.thumbImage.
        checkPrimitiveDiff(oldProps.thumbLength, newProps.thumbLength, 'thumbLength', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberImageScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageScrollBar",
        "namespace": "@babylonjs/gui",
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
        "className": "FiberImageScrollBar"
    };
}

export class FiberSliderPropsHandler implements PropsHandler<FiberSliderProps> {
    getPropertyUpdates(oldProps: FiberSliderProps, newProps: FiberSliderProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.borderColor, newProps.borderColor, 'borderColor', changedProps)
        checkPrimitiveDiff(oldProps.displayValueBar, newProps.displayValueBar, 'displayValueBar', changedProps)
        checkPrimitiveDiff(oldProps.isThumbCircle, newProps.isThumbCircle, 'isThumbCircle', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.thumbColor, newProps.thumbColor, 'thumbColor', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Slider",
        "namespace": "@babylonjs/gui",
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

export class FiberImageBasedSliderPropsHandler implements PropsHandler<FiberImageBasedSliderProps> {
    getPropertyUpdates(oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.backgroundImage.
        checkPrimitiveDiff(oldProps.displayThumb, newProps.displayThumb, 'displayThumb', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.thumbImage.
        // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.valueBarImage.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export class FiberImageBasedSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageBasedSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageBasedSlider",
        "namespace": "@babylonjs/gui",
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

export class FiberDisplayGridPropsHandler implements PropsHandler<FiberDisplayGridProps> {
    getPropertyUpdates(oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.cellHeight, newProps.cellHeight, 'cellHeight', changedProps)
        checkPrimitiveDiff(oldProps.cellWidth, newProps.cellWidth, 'cellWidth', changedProps)
        checkPrimitiveDiff(oldProps.displayMajorLines, newProps.displayMajorLines, 'displayMajorLines', changedProps)
        checkPrimitiveDiff(oldProps.displayMinorLines, newProps.displayMinorLines, 'displayMinorLines', changedProps)
        checkPrimitiveDiff(oldProps.majorLineColor, newProps.majorLineColor, 'majorLineColor', changedProps)
        checkPrimitiveDiff(oldProps.majorLineFrequency, newProps.majorLineFrequency, 'majorLineFrequency', changedProps)
        checkPrimitiveDiff(oldProps.majorLineTickness, newProps.majorLineTickness, 'majorLineTickness', changedProps)
        checkPrimitiveDiff(oldProps.minorLineColor, newProps.minorLineColor, 'minorLineColor', changedProps)
        checkPrimitiveDiff(oldProps.minorLineTickness, newProps.minorLineTickness, 'minorLineTickness', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export class FiberDisplayGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDisplayGridPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DisplayGrid",
        "namespace": "@babylonjs/gui",
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

export class FiberControl3DPropsHandler implements PropsHandler<FiberControl3DProps> {
    getPropertyUpdates(oldProps: FiberControl3DProps, newProps: FiberControl3DProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onPointerClickObservable, newProps.onPointerClickObservable, 'onPointerClickObservable', changedProps)
        checkObservableDiff(oldProps.onPointerDownObservable, newProps.onPointerDownObservable, 'onPointerDownObservable', changedProps)
        checkObservableDiff(oldProps.onPointerEnterObservable, newProps.onPointerEnterObservable, 'onPointerEnterObservable', changedProps)
        checkObservableDiff(oldProps.onPointerMoveObservable, newProps.onPointerMoveObservable, 'onPointerMoveObservable', changedProps)
        checkObservableDiff(oldProps.onPointerOutObservable, newProps.onPointerOutObservable, 'onPointerOutObservable', changedProps)
        checkObservableDiff(oldProps.onPointerUpObservable, newProps.onPointerUpObservable, 'onPointerUpObservable', changedProps)
        // type: 'BabylonjsGuiContainer3D' property (not coded) BabylonjsGuiControl3D.parent.
        checkLambdaDiff(oldProps.pointerDownAnimation, newProps.pointerDownAnimation, 'pointerDownAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerEnterAnimation, newProps.pointerEnterAnimation, 'pointerEnterAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerOutAnimation, newProps.pointerOutAnimation, 'pointerOutAnimation', changedProps)
        checkLambdaDiff(oldProps.pointerUpAnimation, newProps.pointerUpAnimation, 'pointerUpAnimation', changedProps)
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        checkVector3Diff(oldProps.scaling, newProps.scaling, 'scaling', changedProps)
        checkPrimitiveDiff(oldProps['scaling-x'], newProps['scaling-x'], 'scaling.x', changedProps)
        checkPrimitiveDiff(oldProps['scaling-y'], newProps['scaling-y'], 'scaling.y', changedProps)
        checkPrimitiveDiff(oldProps['scaling-z'], newProps['scaling-z'], 'scaling.z', changedProps)
        checkMethodDiff(oldProps.addBehavior, newProps.addBehavior, 'addBehavior', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export class FiberControl3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control3D",
        "namespace": "@babylonjs/gui",
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

export class FiberContainer3DPropsHandler implements PropsHandler<FiberContainer3DProps> {
    getPropertyUpdates(oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.blockLayout, newProps.blockLayout, 'blockLayout', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export class FiberContainer3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container3D",
        "namespace": "@babylonjs/gui",
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

export class FiberVolumeBasedPanelPropsHandler implements PropsHandler<FiberVolumeBasedPanelProps> {
    getPropertyUpdates(oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.columns, newProps.columns, 'columns', changedProps)
        checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
        checkPrimitiveDiff(oldProps.orientation, newProps.orientation, 'orientation', changedProps)
        checkPrimitiveDiff(oldProps.rows, newProps.rows, 'rows', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export class FiberVolumeBasedPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VolumeBasedPanel",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberVolumeBasedPanel"
    };
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<FiberCylinderPanelProps> {
    getPropertyUpdates(oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export class FiberCylinderPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCylinderPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CylinderPanel",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberCylinderPanel"
    };
}

export class FiberPlanePanelPropsHandler implements PropsHandler<FiberPlanePanelProps> {
    getPropertyUpdates(oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export class FiberPlanePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPlanePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PlanePanel",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberPlanePanel"
    };
}

export class FiberScatterPanelPropsHandler implements PropsHandler<FiberScatterPanelProps> {
    getPropertyUpdates(oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.iteration, newProps.iteration, 'iteration', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export class FiberScatterPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScatterPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScatterPanel",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberScatterPanel"
    };
}

export class FiberSpherePanelPropsHandler implements PropsHandler<FiberSpherePanelProps> {
    getPropertyUpdates(oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export class FiberSpherePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpherePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpherePanel",
        "namespace": "@babylonjs/gui",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberSpherePanel"
    };
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<FiberStackPanel3DProps> {
    getPropertyUpdates(oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
        checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export class FiberStackPanel3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanel3DPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel3D",
        "namespace": "@babylonjs/gui",
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

export class FiberAbstractButton3DPropsHandler implements PropsHandler<FiberAbstractButton3DProps> {
    getPropertyUpdates(oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export class FiberAbstractButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractButton3D",
        "namespace": "@babylonjs/gui",
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

export class FiberButton3DPropsHandler implements PropsHandler<FiberButton3DProps> {
    getPropertyUpdates(oldProps: FiberButton3DProps, newProps: FiberButton3DProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkControlDiff(oldProps.content, newProps.content, 'content', changedProps)
        checkPrimitiveDiff(oldProps.contentResolution, newProps.contentResolution, 'contentResolution', changedProps)
        checkPrimitiveDiff(oldProps.contentScaleRatio, newProps.contentScaleRatio, 'contentScaleRatio', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export class FiberButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button3D",
        "namespace": "@babylonjs/gui",
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

export class FiberHolographicButtonPropsHandler implements PropsHandler<FiberHolographicButtonProps> {
    getPropertyUpdates(oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.imageUrl, newProps.imageUrl, 'imageUrl', changedProps)
        checkPrimitiveDiff(oldProps.renderingGroupId, newProps.renderingGroupId, 'renderingGroupId', changedProps)
        checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
        checkPrimitiveDiff(oldProps.tooltipText, newProps.tooltipText, 'tooltipText', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export class FiberHolographicButton implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHolographicButtonPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HolographicButton",
        "namespace": "@babylonjs/gui",
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

export class FiberMeshButton3DPropsHandler implements PropsHandler<FiberMeshButton3DProps> {
    getPropertyUpdates(oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export class FiberMeshButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshButton3DPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MeshButton3D",
        "namespace": "@babylonjs/gui",
        "parameters": [
            {
                "name": "mesh",
                "type": "BabylonjsCoreMesh",
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

export class FiberEffectLayerPropsHandler implements PropsHandler<FiberEffectLayerProps> {
    getPropertyUpdates(oldProps: FiberEffectLayerProps, newProps: FiberEffectLayerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.disableBoundingBoxesFromEffectLayer, newProps.disableBoundingBoxesFromEffectLayer, 'disableBoundingBoxesFromEffectLayer', changedProps)
        checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkColor4Diff(oldProps.neutralColor, newProps.neutralColor, 'neutralColor', changedProps)
        checkObservableDiff(oldProps.onAfterComposeObservable, newProps.onAfterComposeObservable, 'onAfterComposeObservable', changedProps)
        checkObservableDiff(oldProps.onAfterRenderMeshToEffect, newProps.onAfterRenderMeshToEffect, 'onAfterRenderMeshToEffect', changedProps)
        checkObservableDiff(oldProps.onBeforeComposeObservable, newProps.onBeforeComposeObservable, 'onBeforeComposeObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderMainTextureObservable, newProps.onBeforeRenderMainTextureObservable, 'onBeforeRenderMainTextureObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderMeshToEffect, newProps.onBeforeRenderMeshToEffect, 'onBeforeRenderMeshToEffect', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        checkObservableDiff(oldProps.onSizeChangedObservable, newProps.onSizeChangedObservable, 'onSizeChangedObservable', changedProps)
        checkPrimitiveDiff(oldProps.renderingGroupId, newProps.renderingGroupId, 'renderingGroupId', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The effect layer Helps adding post process effect blended with the main pass.
 *
 * This can be for instance use to generate glow or higlight effects on the scene.
 *
 * The effect layer class can not be used directly and is intented to inherited from to be
 * customized per effects.
 *
 * This code has been generated
 */
export class FiberEffectLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EffectLayer",
        "namespace": "@babylonjs/core",
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
        "isEffectLayer": true,
        "className": "FiberEffectLayer"
    };
}

export class FiberGlowLayerPropsHandler implements PropsHandler<FiberGlowLayerProps> {
    getPropertyUpdates(oldProps: FiberGlowLayerProps, newProps: FiberGlowLayerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.blurKernelSize, newProps.blurKernelSize, 'blurKernelSize', changedProps)
        checkLambdaDiff(oldProps.customEmissiveColorSelector, newProps.customEmissiveColorSelector, 'customEmissiveColorSelector', changedProps)
        checkLambdaDiff(oldProps.customEmissiveTextureSelector, newProps.customEmissiveTextureSelector, 'customEmissiveTextureSelector', changedProps)
        checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
        checkMethodDiff(oldProps.addExcludedMesh, newProps.addExcludedMesh, 'addExcludedMesh', changedProps)
        checkMethodDiff(oldProps.addIncludedOnlyMesh, newProps.addIncludedOnlyMesh, 'addIncludedOnlyMesh', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The glow layer Helps adding a glow effect around the emissive parts of a mesh.
 *
 * Once instantiated in a scene, by default, all the emissive meshes will glow.
 *
 * Documentation: https://doc.babylonjs.com/how_to/glow_layer
 *
 * This code has been generated
 */
export class FiberGlowLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGlowLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GlowLayer",
        "namespace": "@babylonjs/core",
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
                "type": "Partial<BabylonjsCoreIGlowLayerOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEffectLayer": true,
        "className": "FiberGlowLayer"
    };
}

export class FiberHighlightLayerPropsHandler implements PropsHandler<FiberHighlightLayerProps> {
    getPropertyUpdates(oldProps: FiberHighlightLayerProps, newProps: FiberHighlightLayerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.blurHorizontalSize, newProps.blurHorizontalSize, 'blurHorizontalSize', changedProps)
        checkPrimitiveDiff(oldProps.blurVerticalSize, newProps.blurVerticalSize, 'blurVerticalSize', changedProps)
        checkPrimitiveDiff(oldProps.innerGlow, newProps.innerGlow, 'innerGlow', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkObservableDiff(oldProps.onAfterBlurObservable, newProps.onAfterBlurObservable, 'onAfterBlurObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeBlurObservable, newProps.onBeforeBlurObservable, 'onBeforeBlurObservable', changedProps)
        checkPrimitiveDiff(oldProps.outerGlow, newProps.outerGlow, 'outerGlow', changedProps)
        checkMethodDiff(oldProps.addExcludedMesh, newProps.addExcludedMesh, 'addExcludedMesh', changedProps)
        checkMethodDiff(oldProps.addMesh, newProps.addMesh, 'addMesh', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The highlight layer Helps adding a glow effect around a mesh.
 *
 * Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
 * glowy meshes to your scene.
 *
 * !!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!
 *
 * This code has been generated
 */
export class FiberHighlightLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHighlightLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HighlightLayer",
        "namespace": "@babylonjs/core",
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
                "type": "Partial<BabylonjsCoreIHighlightLayerOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEffectLayer": true,
        "className": "FiberHighlightLayer"
    };
}

export class FiberThinTexturePropsHandler implements PropsHandler<FiberThinTextureProps> {
    getPropertyUpdates(oldProps: FiberThinTextureProps, newProps: FiberThinTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.anisotropicFilteringLevel, newProps.anisotropicFilteringLevel, 'anisotropicFilteringLevel', changedProps)
        checkPrimitiveDiff(oldProps.delayLoadState, newProps.delayLoadState, 'delayLoadState', changedProps)
        checkPrimitiveDiff(oldProps.is2DArray, newProps.is2DArray, 'is2DArray', changedProps)
        checkPrimitiveDiff(oldProps.is3D, newProps.is3D, 'is3D', changedProps)
        checkPrimitiveDiff(oldProps.isCube, newProps.isCube, 'isCube', changedProps)
        checkPrimitiveDiff(oldProps.wrapR, newProps.wrapR, 'wrapR', changedProps)
        checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
        checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties required to work with Thin Engine.
 *
 * This code has been generated
 */
export class FiberThinTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ThinTexture",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "internalTexture",
                "type": "BabylonjsCoreInternalTexture",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberThinTexture"
    };
}

export class FiberBaseTexturePropsHandler implements PropsHandler<FiberBaseTextureProps> {
    getPropertyUpdates(oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreBaseTexture.animations.
        checkPrimitiveDiff(oldProps.anisotropicFilteringLevel, newProps.anisotropicFilteringLevel, 'anisotropicFilteringLevel', changedProps)
        checkPrimitiveDiff(oldProps.coordinatesIndex, newProps.coordinatesIndex, 'coordinatesIndex', changedProps)
        checkPrimitiveDiff(oldProps.coordinatesMode, newProps.coordinatesMode, 'coordinatesMode', changedProps)
        checkPrimitiveDiff(oldProps.gammaSpace, newProps.gammaSpace, 'gammaSpace', changedProps)
        checkPrimitiveDiff(oldProps.getAlphaFromRGB, newProps.getAlphaFromRGB, 'getAlphaFromRGB', changedProps)
        checkPrimitiveDiff(oldProps.hasAlpha, newProps.hasAlpha, 'hasAlpha', changedProps)
        checkPrimitiveDiff(oldProps.invertZ, newProps.invertZ, 'invertZ', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBaseTexture.irradianceTexture.
        checkPrimitiveDiff(oldProps.is2DArray, newProps.is2DArray, 'is2DArray', changedProps)
        checkPrimitiveDiff(oldProps.is3D, newProps.is3D, 'is3D', changedProps)
        checkPrimitiveDiff(oldProps.isCube, newProps.isCube, 'isCube', changedProps)
        checkPrimitiveDiff(oldProps.isRenderTarget, newProps.isRenderTarget, 'isRenderTarget', changedProps)
        checkPrimitiveDiff(oldProps.isRGBD, newProps.isRGBD, 'isRGBD', changedProps)
        checkPrimitiveDiff(oldProps.level, newProps.level, 'level', changedProps)
        checkPrimitiveDiff(oldProps.linearSpecularLOD, newProps.linearSpecularLOD, 'linearSpecularLOD', changedProps)
        checkPrimitiveDiff(oldProps.lodGenerationOffset, newProps.lodGenerationOffset, 'lodGenerationOffset', changedProps)
        checkPrimitiveDiff(oldProps.lodGenerationScale, newProps.lodGenerationScale, 'lodGenerationScale', changedProps)
        checkPrimitiveDiff(oldProps.lodLevelInAlpha, newProps.lodLevelInAlpha, 'lodLevelInAlpha', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreBaseTexture.metadata.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreBaseTexture.reservedDataStore.
        checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
        checkPrimitiveDiff(oldProps.wrapR, newProps.wrapR, 'wrapR', changedProps)
        checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
        checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 *
 * This code has been generated
 */
export class FiberBaseTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseTexture",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "sceneOrEngine",
                "type": "BabylonjsCoreScene | BabylonjsCoreThinEngine",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberBaseTexture"
    };
}

export class FiberCubeTexturePropsHandler implements PropsHandler<FiberCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkVector3Diff(oldProps.boundingBoxPosition, newProps.boundingBoxPosition, 'boundingBoxPosition', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-x'], newProps['boundingBoxPosition-x'], 'boundingBoxPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-y'], newProps['boundingBoxPosition-y'], 'boundingBoxPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-z'], newProps['boundingBoxPosition-z'], 'boundingBoxPosition.z', changedProps)
        checkVector3Diff(oldProps.boundingBoxSize, newProps.boundingBoxSize, 'boundingBoxSize', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-x'], newProps['boundingBoxSize-x'], 'boundingBoxSize.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-y'], newProps['boundingBoxSize-y'], 'boundingBoxSize.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-z'], newProps['boundingBoxSize-z'], 'boundingBoxSize.z', changedProps)
        checkObservableDiff(oldProps.onLoadObservable, newProps.onLoadObservable, 'onLoadObservable', changedProps)
        checkPrimitiveDiff(oldProps.rotationY, newProps.rotationY, 'rotationY', changedProps)
        checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
        checkMethodDiff(oldProps.setReflectionTextureMatrix, newProps.setReflectionTextureMatrix, 'setReflectionTextureMatrix', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class for creating a cube texture
 *
 * This code has been generated
 */
export class FiberCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CubeTexture",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "rootUrl",
                "type": "string",
                "optional": false
            },
            {
                "name": "sceneOrEngine",
                "type": "BabylonjsCoreScene | BabylonjsCoreThinEngine",
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
            },
            {
                "name": "loaderOptions",
                "type": "any",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberCubeTexture"
    };
}

export class FiberRawCubeTexturePropsHandler implements PropsHandler<FiberRawCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Raw cube texture where the raw buffers are passed in
 *
 * This code has been generated
 */
export class FiberRawCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawCubeTexturePropsHandler(),
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawCubeTexture",
        "namespace": "@babylonjs/core",
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

export class FiberTexturePropsHandler implements PropsHandler<FiberTextureProps> {
    getPropertyUpdates(oldProps: FiberTextureProps, newProps: FiberTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.homogeneousRotationInUVTransform, newProps.homogeneousRotationInUVTransform, 'homogeneousRotationInUVTransform', changedProps)
        // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreTexture.inspectableCustomProperties.
        checkPrimitiveDiff(oldProps.isBlocking, newProps.isBlocking, 'isBlocking', changedProps)
        checkObservableDiff(oldProps.onLoadObservable, newProps.onLoadObservable, 'onLoadObservable', changedProps)
        checkPrimitiveDiff(oldProps.uAng, newProps.uAng, 'uAng', changedProps)
        checkPrimitiveDiff(oldProps.uOffset, newProps.uOffset, 'uOffset', changedProps)
        checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
        checkPrimitiveDiff(oldProps.uRotationCenter, newProps.uRotationCenter, 'uRotationCenter', changedProps)
        checkPrimitiveDiff(oldProps.uScale, newProps.uScale, 'uScale', changedProps)
        checkPrimitiveDiff(oldProps.vAng, newProps.vAng, 'vAng', changedProps)
        checkPrimitiveDiff(oldProps.vOffset, newProps.vOffset, 'vOffset', changedProps)
        checkPrimitiveDiff(oldProps.vRotationCenter, newProps.vRotationCenter, 'vRotationCenter', changedProps)
        checkPrimitiveDiff(oldProps.vScale, newProps.vScale, 'vScale', changedProps)
        checkPrimitiveDiff(oldProps.wAng, newProps.wAng, 'wAng', changedProps)
        checkPrimitiveDiff(oldProps.wRotationCenter, newProps.wRotationCenter, 'wRotationCenter', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 *
 * This code has been generated
 */
export class FiberTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Texture",
        "namespace": "@babylonjs/core",
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
                "type": "string | HTMLImageElement | ArrayBufferView | ArrayBuffer | Blob | ImageBitmap",
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
            },
            {
                "name": "loaderOptions",
                "type": "any",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberTexture"
    };
}

export class FiberRawTexturePropsHandler implements PropsHandler<FiberRawTextureProps> {
    getPropertyUpdates(oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 *
 * This code has been generated
 */
export class FiberRawTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture",
        "namespace": "@babylonjs/core",
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
                "name": "sceneOrEngine",
                "type": "BabylonjsCoreScene | BabylonjsCoreThinEngine",
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

export class FiberProceduralTexturePropsHandler implements PropsHandler<FiberProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoClear, newProps.autoClear, 'autoClear', changedProps)
        checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
        // type: 'BabylonjsCoreNodeMaterial' property (not coded) BabylonjsCoreProceduralTexture.nodeMaterialSource.
        checkObservableDiff(oldProps.onBeforeGenerationObservable, newProps.onBeforeGenerationObservable, 'onBeforeGenerationObservable', changedProps)
        checkLambdaDiff(oldProps.onGenerated, newProps.onGenerated, 'onGenerated', changedProps)
        checkObservableDiff(oldProps.onGeneratedObservable, newProps.onGeneratedObservable, 'onGeneratedObservable', changedProps)
        checkPrimitiveDiff(oldProps.refreshRate, newProps.refreshRate, 'refreshRate', changedProps)
        checkMethodDiff(oldProps.setColor3, newProps.setColor3, 'setColor3', changedProps)
        checkMethodDiff(oldProps.setColor4, newProps.setColor4, 'setColor4', changedProps)
        checkMethodDiff(oldProps.setFloat, newProps.setFloat, 'setFloat', changedProps)
        checkMethodDiff(oldProps.setFloats, newProps.setFloats, 'setFloats', changedProps)
        checkMethodDiff(oldProps.setFragment, newProps.setFragment, 'setFragment', changedProps)
        checkMethodDiff(oldProps.setInt, newProps.setInt, 'setInt', changedProps)
        checkMethodDiff(oldProps.setMatrix, newProps.setMatrix, 'setMatrix', changedProps)
        checkMethodDiff(oldProps.setTexture, newProps.setTexture, 'setTexture', changedProps)
        checkMethodDiff(oldProps.setVector2, newProps.setVector2, 'setVector2', changedProps)
        checkMethodDiff(oldProps.setVector3, newProps.setVector3, 'setVector3', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 *
 * This code has been generated
 */
export class FiberProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ProceduralTexture",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "BabylonjsCoreRenderTargetTextureSize",
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
        "className": "FiberProceduralTexture"
    };
}

export class FiberCustomProceduralTexturePropsHandler implements PropsHandler<FiberCustomProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.animate, newProps.animate, 'animate', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 *
 * This code has been generated
 */
export class FiberCustomProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCustomProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CustomProceduralTexture",
        "namespace": "@babylonjs/core",
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

export class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.animationSpeedFactor, newProps.animationSpeedFactor, 'animationSpeedFactor', changedProps)
        checkPrimitiveDiff(oldProps.brightness, newProps.brightness, 'brightness', changedProps)
        checkPrimitiveDiff(oldProps.octaves, newProps.octaves, 'octaves', changedProps)
        checkPrimitiveDiff(oldProps.persistence, newProps.persistence, 'persistence', changedProps)
        checkPrimitiveDiff(oldProps.time, newProps.time, 'time', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to generate noise procedural textures
 *
 * This code has been generated
 */
export class FiberNoiseProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNoiseProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NoiseProceduralTexture",
        "namespace": "@babylonjs/core",
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

export class FiberRenderTargetTexturePropsHandler implements PropsHandler<FiberRenderTargetTextureProps> {
    getPropertyUpdates(oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreRenderTargetTexture.activeCamera.
        checkVector3Diff(oldProps.boundingBoxPosition, newProps.boundingBoxPosition, 'boundingBoxPosition', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-x'], newProps['boundingBoxPosition-x'], 'boundingBoxPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-y'], newProps['boundingBoxPosition-y'], 'boundingBoxPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-z'], newProps['boundingBoxPosition-z'], 'boundingBoxPosition.z', changedProps)
        checkVector3Diff(oldProps.boundingBoxSize, newProps.boundingBoxSize, 'boundingBoxSize', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-x'], newProps['boundingBoxSize-x'], 'boundingBoxSize.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-y'], newProps['boundingBoxSize-y'], 'boundingBoxSize.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-z'], newProps['boundingBoxSize-z'], 'boundingBoxSize.z', changedProps)
        checkColor4Diff(oldProps.clearColor, newProps.clearColor, 'clearColor', changedProps)
        checkLambdaDiff(oldProps.customIsReadyFunction, newProps.customIsReadyFunction, 'customIsReadyFunction', changedProps)
        checkLambdaDiff(oldProps.customRenderFunction, newProps.customRenderFunction, 'customRenderFunction', changedProps)
        checkLambdaDiff(oldProps.getCustomRenderList, newProps.getCustomRenderList, 'getCustomRenderList', changedProps)
        checkPrimitiveDiff(oldProps.ignoreCameraViewport, newProps.ignoreCameraViewport, 'ignoreCameraViewport', changedProps)
        checkLambdaDiff(oldProps.onAfterRender, newProps.onAfterRender, 'onAfterRender', changedProps)
        checkObservableDiff(oldProps.onAfterRenderObservable, newProps.onAfterRenderObservable, 'onAfterRenderObservable', changedProps)
        checkLambdaDiff(oldProps.onAfterUnbind, newProps.onAfterUnbind, 'onAfterUnbind', changedProps)
        checkObservableDiff(oldProps.onAfterUnbindObservable, newProps.onAfterUnbindObservable, 'onAfterUnbindObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeBindObservable, newProps.onBeforeBindObservable, 'onBeforeBindObservable', changedProps)
        checkLambdaDiff(oldProps.onBeforeRender, newProps.onBeforeRender, 'onBeforeRender', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderObservable, newProps.onBeforeRenderObservable, 'onBeforeRenderObservable', changedProps)
        checkLambdaDiff(oldProps.onClear, newProps.onClear, 'onClear', changedProps)
        checkObservableDiff(oldProps.onClearObservable, newProps.onClearObservable, 'onClearObservable', changedProps)
        checkObservableDiff(oldProps.onResizeObservable, newProps.onResizeObservable, 'onResizeObservable', changedProps)
        checkPrimitiveDiff(oldProps.refreshRate, newProps.refreshRate, 'refreshRate', changedProps)
        // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.renderList.
        checkLambdaDiff(oldProps.renderListPredicate, newProps.renderListPredicate, 'renderListPredicate', changedProps)
        checkPrimitiveDiff(oldProps.renderParticles, newProps.renderParticles, 'renderParticles', changedProps)
        checkPrimitiveDiff(oldProps.renderSprites, newProps.renderSprites, 'renderSprites', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreRenderTargetTexture.renderToTarget.
        checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
        checkPrimitiveDiff(oldProps.useCameraPostProcesses, newProps.useCameraPostProcesses, 'useCameraPostProcesses', changedProps)
        checkMethodDiff(oldProps.addPostProcess, newProps.addPostProcess, 'addPostProcess', changedProps)
        checkMethodDiff(oldProps.setRenderingAutoClearDepthStencil, newProps.setRenderingAutoClearDepthStencil, 'setRenderingAutoClearDepthStencil', changedProps)
        checkMethodDiff(oldProps.setRenderingOrder, newProps.setRenderingOrder, 'setRenderingOrder', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 *
 * This code has been generated
 */
export class FiberRenderTargetTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RenderTargetTexture",
        "namespace": "@babylonjs/core",
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

export class FiberMirrorTexturePropsHandler implements PropsHandler<FiberMirrorTextureProps> {
    getPropertyUpdates(oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.adaptiveBlurKernel, newProps.adaptiveBlurKernel, 'adaptiveBlurKernel', changedProps)
        checkPrimitiveDiff(oldProps.blurKernel, newProps.blurKernel, 'blurKernel', changedProps)
        checkPrimitiveDiff(oldProps.blurKernelX, newProps.blurKernelX, 'blurKernelX', changedProps)
        checkPrimitiveDiff(oldProps.blurKernelY, newProps.blurKernelY, 'blurKernelY', changedProps)
        checkPrimitiveDiff(oldProps.blurRatio, newProps.blurRatio, 'blurRatio', changedProps)
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMirrorTexture.mirrorPlane.
        // type: 'any' property (not coded) BabylonjsCoreMirrorTexture.scene.
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberMirrorTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMirrorTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MirrorTexture",
        "namespace": "@babylonjs/core",
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

export class FiberMultiRenderTargetPropsHandler implements PropsHandler<FiberMultiRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
        checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
        checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberMultiRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiRenderTarget",
        "namespace": "@babylonjs/core",
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

export class FiberRefractionTexturePropsHandler implements PropsHandler<FiberRefractionTextureProps> {
    getPropertyUpdates(oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.depth, newProps.depth, 'depth', changedProps)
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreRefractionTexture.refractionPlane.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 *
 * This code has been generated
 */
export class FiberRefractionTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRefractionTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RefractionTexture",
        "namespace": "@babylonjs/core",
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

export class FiberMultiviewRenderTargetPropsHandler implements PropsHandler<FiberMultiviewRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiviewRenderTargetProps, newProps: FiberMultiviewRenderTargetProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * Renders to multiple views with a single draw call
 *
 * This code has been generated
 */
export class FiberMultiviewRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiviewRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiviewRenderTarget",
        "namespace": "@babylonjs/core",
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

export class FiberVideoTexturePropsHandler implements PropsHandler<FiberVideoTextureProps> {
    getPropertyUpdates(oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps): PropertyUpdate[] | null {
        // skipping type: 'any' property (not coded) BabylonjsCoreVideoTexture.reset.
        return null; // no props to check
    }
}

/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 *
 * This code has been generated
 */
export class FiberVideoTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVideoTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VideoTexture",
        "namespace": "@babylonjs/core",
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

export class FiberDynamicTexturePropsHandler implements PropsHandler<FiberDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * A class extending Texture allowing drawing on a texture
 *
 * This code has been generated
 */
export class FiberDynamicTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTexture",
        "namespace": "@babylonjs/core",
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
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberDynamicTexture"
    };
}

export class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
        checkPrimitiveDiff(oldProps.clipboardData, newProps.clipboardData, 'clipboardData', changedProps)
        // type: 'BabylonjsGuiIFocusableControl' property (not coded) BabylonjsGuiAdvancedDynamicTexture.focusedControl.
        checkPrimitiveDiff(oldProps.idealHeight, newProps.idealHeight, 'idealHeight', changedProps)
        checkPrimitiveDiff(oldProps.idealWidth, newProps.idealWidth, 'idealWidth', changedProps)
        checkPrimitiveDiff(oldProps.isForeground, newProps.isForeground, 'isForeground', changedProps)
        checkObservableDiff(oldProps.onBeginLayoutObservable, newProps.onBeginLayoutObservable, 'onBeginLayoutObservable', changedProps)
        checkObservableDiff(oldProps.onBeginRenderObservable, newProps.onBeginRenderObservable, 'onBeginRenderObservable', changedProps)
        // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardCopy.
        // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardCut.
        checkObservableDiff(oldProps.onClipboardObservable, newProps.onClipboardObservable, 'onClipboardObservable', changedProps)
        // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardPaste.
        checkObservableDiff(oldProps.onControlPickedObservable, newProps.onControlPickedObservable, 'onControlPickedObservable', changedProps)
        checkObservableDiff(oldProps.onEndLayoutObservable, newProps.onEndLayoutObservable, 'onEndLayoutObservable', changedProps)
        checkObservableDiff(oldProps.onEndRenderObservable, newProps.onEndRenderObservable, 'onEndRenderObservable', changedProps)
        checkPrimitiveDiff(oldProps.premulAlpha, newProps.premulAlpha, 'premulAlpha', changedProps)
        checkPrimitiveDiff(oldProps.renderAtIdealSize, newProps.renderAtIdealSize, 'renderAtIdealSize', changedProps)
        checkPrimitiveDiff(oldProps.renderScale, newProps.renderScale, 'renderScale', changedProps)
        checkPrimitiveDiff(oldProps.useInvalidateRectOptimization, newProps.useInvalidateRectOptimization, 'useInvalidateRectOptimization', changedProps)
        checkPrimitiveDiff(oldProps.useSmallestIdeal, newProps.useSmallestIdeal, 'useSmallestIdeal', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export class FiberAdvancedDynamicTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler(),
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AdvancedDynamicTexture",
        "namespace": "@babylonjs/core",
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
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "isTexture": true,
        "className": "FiberAdvancedDynamicTexture"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
 *
 * This code has been generated
 */
export class FiberADTForMesh implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
            , new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
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
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "isGUI2DControl": true,
        "className": "FiberADTForMesh"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh) BUT do not create a new material for the mesh. You will be responsible for connecting the texture
 *
 * This code has been generated
 */
export class FiberADTForMeshTexture implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
            , new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "advancedDynamicTexture",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateForMeshTexture",
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
                "name": "invertY",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "isGUI2DControl": true,
        "className": "FiberADTForMeshTexture"
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
export class FiberADTFullscreenUI implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
            , new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
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
        "isTexture": true,
        "isGUI2DControl": true,
        "className": "FiberADTFullscreenUI"
    };
}

export class FiberRawTexture2DArrayPropsHandler implements PropsHandler<FiberRawTexture2DArrayProps> {
    getPropertyUpdates(oldProps: FiberRawTexture2DArrayProps, newProps: FiberRawTexture2DArrayProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to store 2D array textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture2DArray implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture2DArrayPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture2DArray",
        "namespace": "@babylonjs/core",
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

export class FiberRawTexture3DPropsHandler implements PropsHandler<FiberRawTexture3DProps> {
    getPropertyUpdates(oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to store 3D textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture3D implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture3DPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture3D",
        "namespace": "@babylonjs/core",
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

export class FiberColorGradingTexturePropsHandler implements PropsHandler<FiberColorGradingTextureProps> {
    getPropertyUpdates(oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.load3dlTexture.
        // type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.loadTexture.
        checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberColorGradingTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorGradingTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorGradingTexture",
        "namespace": "@babylonjs/core",
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
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberColorGradingTexture"
    };
}

export class FiberEquiRectangularCubeTexturePropsHandler implements PropsHandler<FiberEquiRectangularCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberEquiRectangularCubeTextureProps, newProps: FiberEquiRectangularCubeTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.getFloat32ArrayFromArrayBuffer.
        // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadImage.
        // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadTexture.
        checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 *
 * This code has been generated
 */
export class FiberEquiRectangularCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEquiRectangularCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EquiRectangularCubeTexture",
        "namespace": "@babylonjs/core",
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

export class FiberHDRCubeTexturePropsHandler implements PropsHandler<FiberHDRCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkVector3Diff(oldProps.boundingBoxPosition, newProps.boundingBoxPosition, 'boundingBoxPosition', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-x'], newProps['boundingBoxPosition-x'], 'boundingBoxPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-y'], newProps['boundingBoxPosition-y'], 'boundingBoxPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxPosition-z'], newProps['boundingBoxPosition-z'], 'boundingBoxPosition.z', changedProps)
        checkVector3Diff(oldProps.boundingBoxSize, newProps.boundingBoxSize, 'boundingBoxSize', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-x'], newProps['boundingBoxSize-x'], 'boundingBoxSize.x', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-y'], newProps['boundingBoxSize-y'], 'boundingBoxSize.y', changedProps)
        checkPrimitiveDiff(oldProps['boundingBoxSize-z'], newProps['boundingBoxSize-z'], 'boundingBoxSize.z', changedProps)
        checkPrimitiveDiff(oldProps.isBlocking, newProps.isBlocking, 'isBlocking', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreHDRCubeTexture.loadTexture.
        checkPrimitiveDiff(oldProps.rotationY, newProps.rotationY, 'rotationY', changedProps)
        checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
        checkMethodDiff(oldProps.setReflectionTextureMatrix, newProps.setReflectionTextureMatrix, 'setReflectionTextureMatrix', changedProps)
        return changedProps.length === 0 ? null : changedProps;
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
export class FiberHDRCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHDRCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HDRCubeTexture",
        "namespace": "@babylonjs/core",
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
                "name": "prefilterOnLoad",
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

export class FiberHtmlElementTexturePropsHandler implements PropsHandler<FiberHtmlElementTextureProps> {
    getPropertyUpdates(oldProps: FiberHtmlElementTextureProps, newProps: FiberHtmlElementTextureProps): PropertyUpdate[] | null {
        // skipping type: 'HTMLVideoElement | HTMLCanvasElement' property (not coded) BabylonjsCoreHtmlElementTexture.element.
        return null; // no props to check
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
export class FiberHtmlElementTexture implements HasPropsHandlers<FiberThinTextureProps> {
    private propsHandlers: PropsHandler<FiberThinTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHtmlElementTexturePropsHandler(),
            new FiberBaseTexturePropsHandler(),
            new FiberThinTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HtmlElementTexture",
        "namespace": "@babylonjs/core",
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

export class FiberGUI3DManagerPropsHandler implements PropsHandler<FiberGUI3DManagerProps> {
    getPropertyUpdates(oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkObservableDiff(oldProps.onPickedPointChangedObservable, newProps.onPickedPointChangedObservable, 'onPickedPointChangedObservable', changedProps)
        checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export class FiberGUI3DManager implements HasPropsHandlers<FiberGUI3DManagerProps> {
    private propsHandlers: PropsHandler<FiberGUI3DManagerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGUI3DManagerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberGUI3DManagerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberGUI3DManagerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GUI3DManager",
        "namespace": "@babylonjs/gui",
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

export class FiberShadowGeneratorPropsHandler implements PropsHandler<FiberShadowGeneratorProps> {
    getPropertyUpdates(oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.bias, newProps.bias, 'bias', changedProps)
        checkPrimitiveDiff(oldProps.blurBoxOffset, newProps.blurBoxOffset, 'blurBoxOffset', changedProps)
        checkPrimitiveDiff(oldProps.blurKernel, newProps.blurKernel, 'blurKernel', changedProps)
        checkPrimitiveDiff(oldProps.blurScale, newProps.blurScale, 'blurScale', changedProps)
        checkPrimitiveDiff(oldProps.contactHardeningLightSizeUVRatio, newProps.contactHardeningLightSizeUVRatio, 'contactHardeningLightSizeUVRatio', changedProps)
        // type: 'BabylonjsCoreICustomShaderOptions' property (not coded) BabylonjsCoreShadowGenerator.customShaderOptions.
        checkPrimitiveDiff(oldProps.darkness, newProps.darkness, 'darkness', changedProps)
        checkPrimitiveDiff(oldProps.depthScale, newProps.depthScale, 'depthScale', changedProps)
        checkPrimitiveDiff(oldProps.enableSoftTransparentShadow, newProps.enableSoftTransparentShadow, 'enableSoftTransparentShadow', changedProps)
        checkPrimitiveDiff(oldProps.filter, newProps.filter, 'filter', changedProps)
        checkPrimitiveDiff(oldProps.filteringQuality, newProps.filteringQuality, 'filteringQuality', changedProps)
        checkPrimitiveDiff(oldProps.forceBackFacesOnly, newProps.forceBackFacesOnly, 'forceBackFacesOnly', changedProps)
        checkPrimitiveDiff(oldProps.frustumEdgeFalloff, newProps.frustumEdgeFalloff, 'frustumEdgeFalloff', changedProps)
        checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
        checkPrimitiveDiff(oldProps.mapSize, newProps.mapSize, 'mapSize', changedProps)
        checkPrimitiveDiff(oldProps.normalBias, newProps.normalBias, 'normalBias', changedProps)
        checkObservableDiff(oldProps.onAfterShadowMapRenderMeshObservable, newProps.onAfterShadowMapRenderMeshObservable, 'onAfterShadowMapRenderMeshObservable', changedProps)
        checkObservableDiff(oldProps.onAfterShadowMapRenderObservable, newProps.onAfterShadowMapRenderObservable, 'onAfterShadowMapRenderObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeShadowMapRenderMeshObservable, newProps.onBeforeShadowMapRenderMeshObservable, 'onBeforeShadowMapRenderMeshObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeShadowMapRenderObservable, newProps.onBeforeShadowMapRenderObservable, 'onBeforeShadowMapRenderObservable', changedProps)
        checkPrimitiveDiff(oldProps.transparencyShadow, newProps.transparencyShadow, 'transparencyShadow', changedProps)
        checkPrimitiveDiff(oldProps.useBlurCloseExponentialShadowMap, newProps.useBlurCloseExponentialShadowMap, 'useBlurCloseExponentialShadowMap', changedProps)
        checkPrimitiveDiff(oldProps.useBlurExponentialShadowMap, newProps.useBlurExponentialShadowMap, 'useBlurExponentialShadowMap', changedProps)
        checkPrimitiveDiff(oldProps.useCloseExponentialShadowMap, newProps.useCloseExponentialShadowMap, 'useCloseExponentialShadowMap', changedProps)
        checkPrimitiveDiff(oldProps.useContactHardeningShadow, newProps.useContactHardeningShadow, 'useContactHardeningShadow', changedProps)
        checkPrimitiveDiff(oldProps.useExponentialShadowMap, newProps.useExponentialShadowMap, 'useExponentialShadowMap', changedProps)
        checkPrimitiveDiff(oldProps.useKernelBlur, newProps.useKernelBlur, 'useKernelBlur', changedProps)
        checkPrimitiveDiff(oldProps.usePercentageCloserFiltering, newProps.usePercentageCloserFiltering, 'usePercentageCloserFiltering', changedProps)
        checkPrimitiveDiff(oldProps.usePoissonSampling, newProps.usePoissonSampling, 'usePoissonSampling', changedProps)
        checkMethodDiff(oldProps.addShadowCaster, newProps.addShadowCaster, 'addShadowCaster', changedProps)
        checkMethodDiff(oldProps.setDarkness, newProps.setDarkness, 'setDarkness', changedProps)
        checkMethodDiff(oldProps.setTransparencyShadow, newProps.setTransparencyShadow, 'setTransparencyShadow', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 *
 * This code has been generated
 */
export class FiberShadowGenerator implements HasPropsHandlers<FiberShadowGeneratorProps> {
    private propsHandlers: PropsHandler<FiberShadowGeneratorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowGeneratorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberShadowGeneratorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberShadowGeneratorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowGenerator",
        "namespace": "@babylonjs/core",
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

export class FiberCascadedShadowGeneratorPropsHandler implements PropsHandler<FiberCascadedShadowGeneratorProps> {
    getPropertyUpdates(oldProps: FiberCascadedShadowGeneratorProps, newProps: FiberCascadedShadowGeneratorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoCalcDepthBounds, newProps.autoCalcDepthBounds, 'autoCalcDepthBounds', changedProps)
        checkPrimitiveDiff(oldProps.autoCalcDepthBoundsRefreshRate, newProps.autoCalcDepthBoundsRefreshRate, 'autoCalcDepthBoundsRefreshRate', changedProps)
        checkPrimitiveDiff(oldProps.cascadeBlendPercentage, newProps.cascadeBlendPercentage, 'cascadeBlendPercentage', changedProps)
        checkPrimitiveDiff(oldProps.debug, newProps.debug, 'debug', changedProps)
        checkPrimitiveDiff(oldProps.depthClamp, newProps.depthClamp, 'depthClamp', changedProps)
        checkPrimitiveDiff(oldProps.freezeShadowCastersBoundingInfo, newProps.freezeShadowCastersBoundingInfo, 'freezeShadowCastersBoundingInfo', changedProps)
        checkPrimitiveDiff(oldProps.lambda, newProps.lambda, 'lambda', changedProps)
        checkPrimitiveDiff(oldProps.numCascades, newProps.numCascades, 'numCascades', changedProps)
        checkPrimitiveDiff(oldProps.penumbraDarkness, newProps.penumbraDarkness, 'penumbraDarkness', changedProps)
        // type: 'BabylonjsCoreBoundingInfo' property (not coded) BabylonjsCoreCascadedShadowGenerator.shadowCastersBoundingInfo.
        checkPrimitiveDiff(oldProps.shadowMaxZ, newProps.shadowMaxZ, 'shadowMaxZ', changedProps)
        checkPrimitiveDiff(oldProps.stabilizeCascades, newProps.stabilizeCascades, 'stabilizeCascades', changedProps)
        checkMethodDiff(oldProps.setDepthRenderer, newProps.setDepthRenderer, 'setDepthRenderer', changedProps)
        checkMethodDiff(oldProps.setMinMaxDistance, newProps.setMinMaxDistance, 'setMinMaxDistance', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A CSM implementation allowing casting shadows on large scenes.
 * Documentation : https://doc.babylonjs.com/babylon101/cascadedShadows
 * Based on: https://github.com/TheRealMJP/Shadows and https://johanmedestrom.wordpress.com/2016/03/18/opengl-cascaded-shadow-maps/
 *
 * This code has been generated
 */
export class FiberCascadedShadowGenerator implements HasPropsHandlers<FiberCascadedShadowGeneratorProps> {
    private propsHandlers: PropsHandler<FiberCascadedShadowGeneratorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCascadedShadowGeneratorPropsHandler(),
            new FiberShadowGeneratorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCascadedShadowGeneratorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCascadedShadowGeneratorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CascadedShadowGenerator",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "mapSize",
                "type": "number",
                "optional": false
            },
            {
                "name": "light",
                "type": "BabylonjsCoreDirectionalLight",
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
        "className": "FiberCascadedShadowGenerator"
    };
}

export class FiberEnvironmentHelperPropsHandler implements PropsHandler<FiberEnvironmentHelperProps> {
    getPropertyUpdates(oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkObservableDiff(oldProps.onErrorObservable, newProps.onErrorObservable, 'onErrorObservable', changedProps)
        checkMethodDiff(oldProps.setMainColor, newProps.setMainColor, 'setMainColor', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 *
 * This code has been generated
 */
export class FiberEnvironmentHelper implements HasPropsHandlers<FiberEnvironmentHelperProps> {
    private propsHandlers: PropsHandler<FiberEnvironmentHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEnvironmentHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEnvironmentHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEnvironmentHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EnvironmentHelper",
        "namespace": "@babylonjs/core",
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

export class FiberPhysicsImpostorPropsHandler implements PropsHandler<FiberPhysicsImpostorProps> {
    getPropertyUpdates(oldProps: FiberPhysicsImpostorProps, newProps: FiberPhysicsImpostorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkLambdaDiff(oldProps.afterStep, newProps.afterStep, 'afterStep', changedProps)
        checkLambdaDiff(oldProps.beforeStep, newProps.beforeStep, 'beforeStep', changedProps)
        checkPrimitiveDiff(oldProps.friction, newProps.friction, 'friction', changedProps)
        checkPrimitiveDiff(oldProps.mass, newProps.mass, 'mass', changedProps)
        // type: 'BabylonjsCoreIPhysicsEnabledObject' property (not coded) BabylonjsCorePhysicsImpostor.object.
        checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
        checkLambdaDiff(oldProps.onCollideEvent, newProps.onCollideEvent, 'onCollideEvent', changedProps)
        // type: 'BabylonjsCorePhysicsImpostor' property (not coded) BabylonjsCorePhysicsImpostor.parent.
        // type: 'any' property (not coded) BabylonjsCorePhysicsImpostor.physicsBody.
        checkPrimitiveDiff(oldProps.positionIterations, newProps.positionIterations, 'positionIterations', changedProps)
        checkPrimitiveDiff(oldProps.pressure, newProps.pressure, 'pressure', changedProps)
        checkPrimitiveDiff(oldProps.restitution, newProps.restitution, 'restitution', changedProps)
        checkPrimitiveDiff(oldProps.segments, newProps.segments, 'segments', changedProps)
        checkPrimitiveDiff(oldProps.soft, newProps.soft, 'soft', changedProps)
        checkPrimitiveDiff(oldProps.stiffness, newProps.stiffness, 'stiffness', changedProps)
        checkPrimitiveDiff(oldProps.type, newProps.type, 'type', changedProps)
        checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
        checkPrimitiveDiff(oldProps.velocityIterations, newProps.velocityIterations, 'velocityIterations', changedProps)
        checkMethodDiff(oldProps.addAnchor, newProps.addAnchor, 'addAnchor', changedProps)
        checkMethodDiff(oldProps.addHook, newProps.addHook, 'addHook', changedProps)
        checkMethodDiff(oldProps.addJoint, newProps.addJoint, 'addJoint', changedProps)
        checkMethodDiff(oldProps.setAngularVelocity, newProps.setAngularVelocity, 'setAngularVelocity', changedProps)
        checkMethodDiff(oldProps.setDeltaPosition, newProps.setDeltaPosition, 'setDeltaPosition', changedProps)
        checkMethodDiff(oldProps.setDeltaRotation, newProps.setDeltaRotation, 'setDeltaRotation', changedProps)
        checkMethodDiff(oldProps.setLinearVelocity, newProps.setLinearVelocity, 'setLinearVelocity', changedProps)
        checkMethodDiff(oldProps.setMass, newProps.setMass, 'setMass', changedProps)
        checkMethodDiff(oldProps.setParam, newProps.setParam, 'setParam', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export class FiberPhysicsImpostor implements HasPropsHandlers<FiberPhysicsImpostorProps> {
    private propsHandlers: PropsHandler<FiberPhysicsImpostorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPhysicsImpostorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberPhysicsImpostorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberPhysicsImpostorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PhysicsImpostor",
        "namespace": "@babylonjs/core",
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

export class FiberVRExperienceHelperPropsHandler implements PropsHandler<FiberVRExperienceHelperProps> {
    getPropertyUpdates(oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.beforeRender.
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.completeVRInit.
        checkPrimitiveDiff(oldProps.displayGaze, newProps.displayGaze, 'displayGaze', changedProps)
        checkPrimitiveDiff(oldProps.displayLaserPointer, newProps.displayLaserPointer, 'displayLaserPointer', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.displayVRButton.
        checkPrimitiveDiff(oldProps.enableGazeEvenWhenNoPointerLock, newProps.enableGazeEvenWhenNoPointerLock, 'enableGazeEvenWhenNoPointerLock', changedProps)
        checkPrimitiveDiff(oldProps.exitVROnDoubleTap, newProps.exitVROnDoubleTap, 'exitVROnDoubleTap', changedProps)
        // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.gazeTrackerMesh.
        checkLambdaDiff(oldProps.meshSelectionPredicate, newProps.meshSelectionPredicate, 'meshSelectionPredicate', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.moveButtonToBottomRight.
        checkObservableDiff(oldProps.onAfterCameraTeleport, newProps.onAfterCameraTeleport, 'onAfterCameraTeleport', changedProps)
        checkObservableDiff(oldProps.onAfterEnteringVRObservable, newProps.onAfterEnteringVRObservable, 'onAfterEnteringVRObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeCameraTeleport, newProps.onBeforeCameraTeleport, 'onBeforeCameraTeleport', changedProps)
        checkObservableDiff(oldProps.onControllerMeshLoadedObservable, newProps.onControllerMeshLoadedObservable, 'onControllerMeshLoadedObservable', changedProps)
        checkObservableDiff(oldProps.onEnteringVRObservable, newProps.onEnteringVRObservable, 'onEnteringVRObservable', changedProps)
        checkObservableDiff(oldProps.onExitingVRObservable, newProps.onExitingVRObservable, 'onExitingVRObservable', changedProps)
        checkObservableDiff(oldProps.onMeshSelectedWithController, newProps.onMeshSelectedWithController, 'onMeshSelectedWithController', changedProps)
        checkObservableDiff(oldProps.onNewMeshPicked, newProps.onNewMeshPicked, 'onNewMeshPicked', changedProps)
        checkObservableDiff(oldProps.onNewMeshSelected, newProps.onNewMeshSelected, 'onNewMeshSelected', changedProps)
        checkObservableDiff(oldProps.onSelectedMeshUnselected, newProps.onSelectedMeshUnselected, 'onSelectedMeshUnselected', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.onVRDisplayChanged.
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.onVrDisplayPresentChange.
        checkVector3Diff(oldProps.position, newProps.position, 'position', changedProps)
        checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
        checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
        checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
        checkLambdaDiff(oldProps.raySelectionPredicate, newProps.raySelectionPredicate, 'raySelectionPredicate', changedProps)
        checkPrimitiveDiff(oldProps.requestPointerLockOnFullScreen, newProps.requestPointerLockOnFullScreen, 'requestPointerLockOnFullScreen', changedProps)
        checkPrimitiveDiff(oldProps.teleportationEnabled, newProps.teleportationEnabled, 'teleportationEnabled', changedProps)
        // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.teleportationTarget.
        // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.updateButtonVisibility.
        checkPrimitiveDiff(oldProps.updateControllerLaserColor, newProps.updateControllerLaserColor, 'updateControllerLaserColor', changedProps)
        checkPrimitiveDiff(oldProps.updateGazeTrackerColor, newProps.updateGazeTrackerColor, 'updateGazeTrackerColor', changedProps)
        checkPrimitiveDiff(oldProps.updateGazeTrackerScale, newProps.updateGazeTrackerScale, 'updateGazeTrackerScale', changedProps)
        // type: 'BabylonjsCoreVRExperienceHelperOptions' property (not coded) BabylonjsCoreVRExperienceHelper.webVROptions.
        // type: 'BabylonjsCoreWebXRDefaultExperience' property (not coded) BabylonjsCoreVRExperienceHelper.xr.
        checkPrimitiveDiff(oldProps.xrTestDone, newProps.xrTestDone, 'xrTestDone', changedProps)
        checkMethodDiff(oldProps.addFloorMesh, newProps.addFloorMesh, 'addFloorMesh', changedProps)
        checkMethodDiff(oldProps.enableTeleportation, newProps.enableTeleportation, 'enableTeleportation', changedProps)
        checkMethodDiff(oldProps.setGazeColor, newProps.setGazeColor, 'setGazeColor', changedProps)
        checkMethodDiff(oldProps.setLaserColor, newProps.setLaserColor, 'setLaserColor', changedProps)
        checkMethodDiff(oldProps.setLaserLightingState, newProps.setLaserLightingState, 'setLaserLightingState', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Helps to quickly add VR support to an existing scene.
 * See https://doc.babylonjs.com/how_to/webvr_helper
 *
 * This code has been generated
 */
export class FiberVRExperienceHelper implements HasPropsHandlers<FiberVRExperienceHelperProps> {
    private propsHandlers: PropsHandler<FiberVRExperienceHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRExperienceHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberVRExperienceHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberVRExperienceHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRExperienceHelper",
        "namespace": "@babylonjs/core",
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

export class FiberDynamicTerrainPropsHandler implements PropsHandler<FiberDynamicTerrainProps> {
    getPropertyUpdates(oldProps: FiberDynamicTerrainProps, newProps: FiberDynamicTerrainProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreCamera' property (not coded) ExtensionsDynamicTerrain.camera.
        checkPrimitiveDiff(oldProps.cameraLODCorrection, newProps.cameraLODCorrection, 'cameraLODCorrection', changedProps)
        checkPrimitiveDiff(oldProps.computeNormals, newProps.computeNormals, 'computeNormals', changedProps)
        checkPrimitiveDiff(oldProps.initialLOD, newProps.initialLOD, 'initialLOD', changedProps)
        checkPrimitiveDiff(oldProps.isAlwaysVisible, newProps.isAlwaysVisible, 'isAlwaysVisible', changedProps)
        checkNumericArrayDiff(oldProps.LODLimits, newProps.LODLimits, 'LODLimits', changedProps)
        checkPrimitiveDiff(oldProps.LODNegativeX, newProps.LODNegativeX, 'LODNegativeX', changedProps)
        checkPrimitiveDiff(oldProps.LODNegativeZ, newProps.LODNegativeZ, 'LODNegativeZ', changedProps)
        checkPrimitiveDiff(oldProps.LODPositiveX, newProps.LODPositiveX, 'LODPositiveX', changedProps)
        checkPrimitiveDiff(oldProps.LODPositiveZ, newProps.LODPositiveZ, 'LODPositiveZ', changedProps)
        // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapColors.
        // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapData.
        // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapNormals.
        checkPrimitiveDiff(oldProps.mapSubX, newProps.mapSubX, 'mapSubX', changedProps)
        checkPrimitiveDiff(oldProps.mapSubZ, newProps.mapSubZ, 'mapSubZ', changedProps)
        // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapUVs.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.precomputeNormalsFromMap, newProps.precomputeNormalsFromMap, 'precomputeNormalsFromMap', changedProps)
        checkPrimitiveDiff(oldProps.refreshEveryFrame, newProps.refreshEveryFrame, 'refreshEveryFrame', changedProps)
        // type: '{ x: number; z: number; }' property (not coded) ExtensionsDynamicTerrain.shiftFromCamera.
        checkPrimitiveDiff(oldProps.subToleranceX, newProps.subToleranceX, 'subToleranceX', changedProps)
        checkPrimitiveDiff(oldProps.subToleranceZ, newProps.subToleranceZ, 'subToleranceZ', changedProps)
        checkPrimitiveDiff(oldProps.useCustomVertexFunction, newProps.useCustomVertexFunction, 'useCustomVertexFunction', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/** This code has been generated */
export class FiberDynamicTerrain implements HasPropsHandlers<FiberDynamicTerrainProps> {
    private propsHandlers: PropsHandler<FiberDynamicTerrainProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTerrainPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberDynamicTerrainProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberDynamicTerrainProps>): void {
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
                        "type": "BabylonjsCoreFloatArray",
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
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "mapColors",
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "mapNormals",
                        "type": "BabylonjsCoreFloatArray",
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

export class FiberPointsCloudSystemPropsHandler implements PropsHandler<FiberPointsCloudSystemProps> {
    getPropertyUpdates(oldProps: FiberPointsCloudSystemProps, newProps: FiberPointsCloudSystemProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.computeBoundingBox, newProps.computeBoundingBox, 'computeBoundingBox', changedProps)
        checkPrimitiveDiff(oldProps.computeParticleColor, newProps.computeParticleColor, 'computeParticleColor', changedProps)
        checkPrimitiveDiff(oldProps.computeParticleRotation, newProps.computeParticleRotation, 'computeParticleRotation', changedProps)
        checkPrimitiveDiff(oldProps.computeParticleTexture, newProps.computeParticleTexture, 'computeParticleTexture', changedProps)
        checkPrimitiveDiff(oldProps.counter, newProps.counter, 'counter', changedProps)
        checkPrimitiveDiff(oldProps.isAlwaysVisible, newProps.isAlwaysVisible, 'isAlwaysVisible', changedProps)
        // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCorePointsCloudSystem.mesh.
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        checkPrimitiveDiff(oldProps.nbParticles, newProps.nbParticles, 'nbParticles', changedProps)
        // type: 'BabylonjsCoreCloudPoint[]' property (not coded) BabylonjsCorePointsCloudSystem.particles.
        // type: 'any' property (not coded) BabylonjsCorePointsCloudSystem.vars.
        checkMethodDiff(oldProps.addPoints, newProps.addPoints, 'addPoints', changedProps)
        checkMethodDiff(oldProps.addSurfacePoints, newProps.addSurfacePoints, 'addSurfacePoints', changedProps)
        checkMethodDiff(oldProps.addVolumePoints, newProps.addVolumePoints, 'addVolumePoints', changedProps)
        checkMethodDiff(oldProps.setParticles, newProps.setParticles, 'setParticles', changedProps)
        checkMethodDiff(oldProps.setVisibilityBox, newProps.setVisibilityBox, 'setVisibilityBox', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The PointCloudSystem (PCS) is a single updatable mesh. The points corresponding to the vertices of this big mesh.
 * As it is just a mesh, the PointCloudSystem has all the same properties as any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.
 *
 * The PointCloudSytem is also a particle system, with each point being a particle. It provides some methods to manage the particles.
 * However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.
 *
 * Full documentation here : TO BE ENTERED
 *
 * This code has been generated
 */
export class FiberPointsCloudSystem implements HasPropsHandlers<FiberPointsCloudSystemProps> {
    private propsHandlers: PropsHandler<FiberPointsCloudSystemProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointsCloudSystemPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberPointsCloudSystemProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberPointsCloudSystemProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointsCloudSystem",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "pointSize",
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
                "type": [
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberPointsCloudSystem"
    };
}

export class FiberAutoRotationBehaviorPropsHandler implements PropsHandler<FiberAutoRotationBehaviorProps> {
    getPropertyUpdates(oldProps: FiberAutoRotationBehaviorProps, newProps: FiberAutoRotationBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.idleRotationSpeed, newProps.idleRotationSpeed, 'idleRotationSpeed', changedProps)
        checkPrimitiveDiff(oldProps.idleRotationSpinupTime, newProps.idleRotationSpinupTime, 'idleRotationSpinupTime', changedProps)
        checkPrimitiveDiff(oldProps.idleRotationWaitTime, newProps.idleRotationWaitTime, 'idleRotationWaitTime', changedProps)
        checkPrimitiveDiff(oldProps.zoomStopsAnimation, newProps.zoomStopsAnimation, 'zoomStopsAnimation', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.
 *
 * This code has been generated
 */
export class FiberAutoRotationBehavior implements HasPropsHandlers<FiberAutoRotationBehaviorProps> {
    private propsHandlers: PropsHandler<FiberAutoRotationBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAutoRotationBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAutoRotationBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAutoRotationBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AutoRotationBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberAutoRotationBehavior"
    };
}

export class FiberBouncingBehaviorPropsHandler implements PropsHandler<FiberBouncingBehaviorProps> {
    getPropertyUpdates(oldProps: FiberBouncingBehaviorProps, newProps: FiberBouncingBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoTransitionRange, newProps.autoTransitionRange, 'autoTransitionRange', changedProps)
        checkPrimitiveDiff(oldProps.lowerRadiusTransitionRange, newProps.lowerRadiusTransitionRange, 'lowerRadiusTransitionRange', changedProps)
        checkPrimitiveDiff(oldProps.transitionDuration, newProps.transitionDuration, 'transitionDuration', changedProps)
        checkPrimitiveDiff(oldProps.upperRadiusTransitionRange, newProps.upperRadiusTransitionRange, 'upperRadiusTransitionRange', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
 *
 * This code has been generated
 */
export class FiberBouncingBehavior implements HasPropsHandlers<FiberBouncingBehaviorProps> {
    private propsHandlers: PropsHandler<FiberBouncingBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBouncingBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBouncingBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBouncingBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BouncingBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberBouncingBehavior"
    };
}

export class FiberFramingBehaviorPropsHandler implements PropsHandler<FiberFramingBehaviorProps> {
    getPropertyUpdates(oldProps: FiberFramingBehaviorProps, newProps: FiberFramingBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.autoCorrectCameraLimitsAndSensibility, newProps.autoCorrectCameraLimitsAndSensibility, 'autoCorrectCameraLimitsAndSensibility', changedProps)
        checkPrimitiveDiff(oldProps.defaultElevation, newProps.defaultElevation, 'defaultElevation', changedProps)
        checkPrimitiveDiff(oldProps.elevationReturnTime, newProps.elevationReturnTime, 'elevationReturnTime', changedProps)
        checkPrimitiveDiff(oldProps.elevationReturnWaitTime, newProps.elevationReturnWaitTime, 'elevationReturnWaitTime', changedProps)
        checkPrimitiveDiff(oldProps.framingTime, newProps.framingTime, 'framingTime', changedProps)
        checkPrimitiveDiff(oldProps.mode, newProps.mode, 'mode', changedProps)
        checkPrimitiveDiff(oldProps.positionScale, newProps.positionScale, 'positionScale', changedProps)
        checkPrimitiveDiff(oldProps.radiusScale, newProps.radiusScale, 'radiusScale', changedProps)
        checkPrimitiveDiff(oldProps.zoomStopsAnimation, newProps.zoomStopsAnimation, 'zoomStopsAnimation', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.
 *
 * This code has been generated
 */
export class FiberFramingBehavior implements HasPropsHandlers<FiberFramingBehaviorProps> {
    private propsHandlers: PropsHandler<FiberFramingBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFramingBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberFramingBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberFramingBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FramingBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberFramingBehavior"
    };
}

export class FiberAttachToBoxBehaviorPropsHandler implements PropsHandler<FiberAttachToBoxBehaviorProps> {
    getPropertyUpdates(oldProps: FiberAttachToBoxBehaviorProps, newProps: FiberAttachToBoxBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.distanceAwayFromBottomOfFace, newProps.distanceAwayFromBottomOfFace, 'distanceAwayFromBottomOfFace', changedProps)
        checkPrimitiveDiff(oldProps.distanceAwayFromFace, newProps.distanceAwayFromFace, 'distanceAwayFromFace', changedProps)
        checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreAttachToBoxBehavior.ui.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera
 *
 * This code has been generated
 */
export class FiberAttachToBoxBehavior implements HasPropsHandlers<FiberAttachToBoxBehaviorProps> {
    private propsHandlers: PropsHandler<FiberAttachToBoxBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAttachToBoxBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAttachToBoxBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAttachToBoxBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AttachToBoxBehavior",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "ui",
                "type": "BabylonjsCoreTransformNode",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberAttachToBoxBehavior"
    };
}

export class FiberFadeInOutBehaviorPropsHandler implements PropsHandler<FiberFadeInOutBehaviorProps> {
    getPropertyUpdates(oldProps: FiberFadeInOutBehaviorProps, newProps: FiberFadeInOutBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.delay, newProps.delay, 'delay', changedProps)
        checkPrimitiveDiff(oldProps.fadeInTime, newProps.fadeInTime, 'fadeInTime', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 *
 * This code has been generated
 */
export class FiberFadeInOutBehavior implements HasPropsHandlers<FiberFadeInOutBehaviorProps> {
    private propsHandlers: PropsHandler<FiberFadeInOutBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFadeInOutBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberFadeInOutBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberFadeInOutBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FadeInOutBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberFadeInOutBehavior"
    };
}

export class FiberMultiPointerScaleBehaviorPropsHandler implements PropsHandler<FiberMultiPointerScaleBehaviorProps> {
    getPropertyUpdates(oldProps: FiberMultiPointerScaleBehaviorProps, newProps: FiberMultiPointerScaleBehaviorProps): PropertyUpdate[] | null {
        return null; // no props to check
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be scaled
 *
 * This code has been generated
 */
export class FiberMultiPointerScaleBehavior implements HasPropsHandlers<FiberMultiPointerScaleBehaviorProps> {
    private propsHandlers: PropsHandler<FiberMultiPointerScaleBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiPointerScaleBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMultiPointerScaleBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMultiPointerScaleBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiPointerScaleBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberMultiPointerScaleBehavior"
    };
}

export class FiberPointerDragBehaviorPropsHandler implements PropsHandler<FiberPointerDragBehaviorProps> {
    getPropertyUpdates(oldProps: FiberPointerDragBehaviorProps, newProps: FiberPointerDragBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCorePointerDragBehavior.attachedNode.
        checkPrimitiveDiff(oldProps.currentDraggingPointerID, newProps.currentDraggingPointerID, 'currentDraggingPointerID', changedProps)
        checkPrimitiveDiff(oldProps.detachCameraControls, newProps.detachCameraControls, 'detachCameraControls', changedProps)
        checkPrimitiveDiff(oldProps.dragDeltaRatio, newProps.dragDeltaRatio, 'dragDeltaRatio', changedProps)
        checkPrimitiveDiff(oldProps.dragging, newProps.dragging, 'dragging', changedProps)
        checkPrimitiveDiff(oldProps.enabled, newProps.enabled, 'enabled', changedProps)
        checkVector3Diff(oldProps.lastDragPosition, newProps.lastDragPosition, 'lastDragPosition', changedProps)
        checkPrimitiveDiff(oldProps['lastDragPosition-x'], newProps['lastDragPosition-x'], 'lastDragPosition.x', changedProps)
        checkPrimitiveDiff(oldProps['lastDragPosition-y'], newProps['lastDragPosition-y'], 'lastDragPosition.y', changedProps)
        checkPrimitiveDiff(oldProps['lastDragPosition-z'], newProps['lastDragPosition-z'], 'lastDragPosition.z', changedProps)
        checkPrimitiveDiff(oldProps.maxDragAngle, newProps.maxDragAngle, 'maxDragAngle', changedProps)
        checkPrimitiveDiff(oldProps.moveAttached, newProps.moveAttached, 'moveAttached', changedProps)
        checkObservableDiff(oldProps.onDragEndObservable, newProps.onDragEndObservable, 'onDragEndObservable', changedProps)
        checkObservableDiff(oldProps.onDragObservable, newProps.onDragObservable, 'onDragObservable', changedProps)
        checkObservableDiff(oldProps.onDragStartObservable, newProps.onDragStartObservable, 'onDragStartObservable', changedProps)
        // type: '{ dragAxis?: BabylonjsCoreVector3; dragPlaneNormal?: BabylonjsCoreVector3; }' property (not coded) BabylonjsCorePointerDragBehavior.options.
        checkPrimitiveDiff(oldProps.startAndReleaseDragOnPointerEvents, newProps.startAndReleaseDragOnPointerEvents, 'startAndReleaseDragOnPointerEvents', changedProps)
        checkPrimitiveDiff(oldProps.updateDragPlane, newProps.updateDragPlane, 'updateDragPlane', changedProps)
        checkPrimitiveDiff(oldProps.useObjectOrientationForDragging, newProps.useObjectOrientationForDragging, 'useObjectOrientationForDragging', changedProps)
        checkLambdaDiff(oldProps.validateDrag, newProps.validateDrag, 'validateDrag', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events
 *
 * This code has been generated
 */
export class FiberPointerDragBehavior implements HasPropsHandlers<FiberPointerDragBehaviorProps> {
    private propsHandlers: PropsHandler<FiberPointerDragBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointerDragBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberPointerDragBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberPointerDragBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointerDragBehavior",
        "namespace": "@babylonjs/core",
        "parameters": [
            {
                "name": "options",
                "type": [
                    {
                        "name": "dragAxis",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "dragPlaneNormal",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    }
                ],
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberPointerDragBehavior"
    };
}

export class FiberSixDofDragBehaviorPropsHandler implements PropsHandler<FiberSixDofDragBehaviorProps> {
    getPropertyUpdates(oldProps: FiberSixDofDragBehaviorProps, newProps: FiberSixDofDragBehaviorProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        checkPrimitiveDiff(oldProps.currentDraggingPointerID, newProps.currentDraggingPointerID, 'currentDraggingPointerID', changedProps)
        checkPrimitiveDiff(oldProps.detachCameraControls, newProps.detachCameraControls, 'detachCameraControls', changedProps)
        checkPrimitiveDiff(oldProps.dragDeltaRatio, newProps.dragDeltaRatio, 'dragDeltaRatio', changedProps)
        checkPrimitiveDiff(oldProps.dragging, newProps.dragging, 'dragging', changedProps)
        checkObservableDiff(oldProps.onDragEndObservable, newProps.onDragEndObservable, 'onDragEndObservable', changedProps)
        checkObservableDiff(oldProps.onDragObservable, newProps.onDragObservable, 'onDragObservable', changedProps)
        checkObservableDiff(oldProps.onDragStartObservable, newProps.onDragStartObservable, 'onDragStartObservable', changedProps)
        checkPrimitiveDiff(oldProps.rotateDraggedObject, newProps.rotateDraggedObject, 'rotateDraggedObject', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreSixDofDragBehavior.zDragFactor.
        return changedProps.length === 0 ? null : changedProps;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray
 *
 * This code has been generated
 */
export class FiberSixDofDragBehavior implements HasPropsHandlers<FiberSixDofDragBehaviorProps> {
    private propsHandlers: PropsHandler<FiberSixDofDragBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSixDofDragBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberSixDofDragBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberSixDofDragBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SixDofDragBehavior",
        "namespace": "@babylonjs/core",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberSixDofDragBehavior"
    };
}

export class FiberScenePropsHandler implements PropsHandler<FiberSceneProps> {
    getPropertyUpdates(oldProps: FiberSceneProps, newProps: FiberSceneProps): PropertyUpdate[] | null {
        const changedProps: PropertyUpdate[] = []
        // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreScene.actionManager.
        // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.activeCamera.
        // type: 'BabylonjsCoreCamera[]' property (not coded) BabylonjsCoreScene.activeCameras.
        checkLambdaDiff(oldProps.afterCameraRender, newProps.afterCameraRender, 'afterCameraRender', changedProps)
        checkLambdaDiff(oldProps.afterRender, newProps.afterRender, 'afterRender', changedProps)
        checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
        // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreScene.animationPropertiesOverride.
        checkPrimitiveDiff(oldProps.animationsEnabled, newProps.animationsEnabled, 'animationsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.animationTimeScale, newProps.animationTimeScale, 'animationTimeScale', changedProps)
        checkPrimitiveDiff(oldProps.autoClear, newProps.autoClear, 'autoClear', changedProps)
        checkPrimitiveDiff(oldProps.autoClearDepthAndStencil, newProps.autoClearDepthAndStencil, 'autoClearDepthAndStencil', changedProps)
        checkLambdaDiff(oldProps.beforeCameraRender, newProps.beforeCameraRender, 'beforeCameraRender', changedProps)
        checkLambdaDiff(oldProps.beforeRender, newProps.beforeRender, 'beforeRender', changedProps)
        checkPrimitiveDiff(oldProps.blockfreeActiveMeshesAndRenderingGroups, newProps.blockfreeActiveMeshesAndRenderingGroups, 'blockfreeActiveMeshesAndRenderingGroups', changedProps)
        checkPrimitiveDiff(oldProps.blockMaterialDirtyMechanism, newProps.blockMaterialDirtyMechanism, 'blockMaterialDirtyMechanism', changedProps)
        // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.cameraToUseForPointers.
        checkColor4Diff(oldProps.clearColor, newProps.clearColor, 'clearColor', changedProps)
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane.
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane2.
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane3.
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane4.
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane5.
        // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane6.
        checkPrimitiveDiff(oldProps.collisionsEnabled, newProps.collisionsEnabled, 'collisionsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.constantlyUpdateMeshUnderPointer, newProps.constantlyUpdateMeshUnderPointer, 'constantlyUpdateMeshUnderPointer', changedProps)
        checkLambdaDiff(oldProps.customLODSelector, newProps.customLODSelector, 'customLODSelector', changedProps)
        // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreScene.customRenderTargets.
        checkPrimitiveDiff(oldProps.defaultCursor, newProps.defaultCursor, 'defaultCursor', changedProps)
        // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreScene.defaultMaterial.
        // type: 'RegExp[]' property (not coded) BabylonjsCoreScene.disableOfflineSupportExceptionRules.
        checkPrimitiveDiff(oldProps.dispatchAllSubMeshesOfActiveMeshes, newProps.dispatchAllSubMeshesOfActiveMeshes, 'dispatchAllSubMeshesOfActiveMeshes', changedProps)
        checkPrimitiveDiff(oldProps.doNotHandleCursors, newProps.doNotHandleCursors, 'doNotHandleCursors', changedProps)
        checkPrimitiveDiff(oldProps.DoubleClickDelay, newProps.DoubleClickDelay, 'DoubleClickDelay', changedProps)
        checkPrimitiveDiff(oldProps.DragMovementThreshold, newProps.DragMovementThreshold, 'DragMovementThreshold', changedProps)
        checkPrimitiveDiff(oldProps.dumpNextRenderTargets, newProps.dumpNextRenderTargets, 'dumpNextRenderTargets', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentBRDFTexture.
        checkPrimitiveDiff(oldProps.environmentIntensity, newProps.environmentIntensity, 'environmentIntensity', changedProps)
        // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentTexture.
        checkPrimitiveDiff(oldProps.ExclusiveDoubleClickMode, newProps.ExclusiveDoubleClickMode, 'ExclusiveDoubleClickMode', changedProps)
        checkColor3Diff(oldProps.fogColor, newProps.fogColor, 'fogColor', changedProps)
        checkPrimitiveDiff(oldProps.fogDensity, newProps.fogDensity, 'fogDensity', changedProps)
        checkPrimitiveDiff(oldProps.fogEnabled, newProps.fogEnabled, 'fogEnabled', changedProps)
        checkPrimitiveDiff(oldProps.fogEnd, newProps.fogEnd, 'fogEnd', changedProps)
        checkPrimitiveDiff(oldProps.fogMode, newProps.fogMode, 'fogMode', changedProps)
        checkPrimitiveDiff(oldProps.fogStart, newProps.fogStart, 'fogStart', changedProps)
        checkPrimitiveDiff(oldProps.forcePointsCloud, newProps.forcePointsCloud, 'forcePointsCloud', changedProps)
        checkPrimitiveDiff(oldProps.forceWireframe, newProps.forceWireframe, 'forceWireframe', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreScene.geometriesByUniqueId.
        checkLambdaDiff(oldProps.getActiveMeshCandidates, newProps.getActiveMeshCandidates, 'getActiveMeshCandidates', changedProps)
        checkLambdaDiff(oldProps.getActiveSubMeshCandidates, newProps.getActiveSubMeshCandidates, 'getActiveSubMeshCandidates', changedProps)
        checkLambdaDiff(oldProps.getCollidingSubMeshCandidates, newProps.getCollidingSubMeshCandidates, 'getCollidingSubMeshCandidates', changedProps)
        checkLambdaDiff(oldProps.getDeterministicFrameTime, newProps.getDeterministicFrameTime, 'getDeterministicFrameTime', changedProps)
        checkLambdaDiff(oldProps.getIntersectingSubMeshCandidates, newProps.getIntersectingSubMeshCandidates, 'getIntersectingSubMeshCandidates', changedProps)
        checkVector3Diff(oldProps.gravity, newProps.gravity, 'gravity', changedProps)
        checkPrimitiveDiff(oldProps['gravity-x'], newProps['gravity-x'], 'gravity.x', changedProps)
        checkPrimitiveDiff(oldProps['gravity-y'], newProps['gravity-y'], 'gravity.y', changedProps)
        checkPrimitiveDiff(oldProps['gravity-z'], newProps['gravity-z'], 'gravity.z', changedProps)
        checkPrimitiveDiff(oldProps.hoverCursor, newProps.hoverCursor, 'hoverCursor', changedProps)
        // type: 'String[]' property (not coded) BabylonjsCoreScene.importedMeshesFiles.
        checkPrimitiveDiff(oldProps.lensFlaresEnabled, newProps.lensFlaresEnabled, 'lensFlaresEnabled', changedProps)
        checkPrimitiveDiff(oldProps.lightsEnabled, newProps.lightsEnabled, 'lightsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.loadingPluginName, newProps.loadingPluginName, 'loadingPluginName', changedProps)
        checkPrimitiveDiff(oldProps.LongPressDelay, newProps.LongPressDelay, 'LongPressDelay', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreScene.metadata.
        // type: 'BabylonjsCoreIOfflineProvider' property (not coded) BabylonjsCoreScene.offlineProvider.
        checkObservableDiff(oldProps.onActiveCameraChanged, newProps.onActiveCameraChanged, 'onActiveCameraChanged', changedProps)
        checkObservableDiff(oldProps.onAfterActiveMeshesEvaluationObservable, newProps.onAfterActiveMeshesEvaluationObservable, 'onAfterActiveMeshesEvaluationObservable', changedProps)
        checkObservableDiff(oldProps.onAfterAnimationsObservable, newProps.onAfterAnimationsObservable, 'onAfterAnimationsObservable', changedProps)
        checkObservableDiff(oldProps.onAfterCameraRenderObservable, newProps.onAfterCameraRenderObservable, 'onAfterCameraRenderObservable', changedProps)
        checkObservableDiff(oldProps.onAfterDrawPhaseObservable, newProps.onAfterDrawPhaseObservable, 'onAfterDrawPhaseObservable', changedProps)
        checkObservableDiff(oldProps.onAfterParticlesRenderingObservable, newProps.onAfterParticlesRenderingObservable, 'onAfterParticlesRenderingObservable', changedProps)
        checkObservableDiff(oldProps.onAfterPhysicsObservable, newProps.onAfterPhysicsObservable, 'onAfterPhysicsObservable', changedProps)
        checkObservableDiff(oldProps.onAfterRenderCameraObservable, newProps.onAfterRenderCameraObservable, 'onAfterRenderCameraObservable', changedProps)
        checkObservableDiff(oldProps.onAfterRenderingGroupObservable, newProps.onAfterRenderingGroupObservable, 'onAfterRenderingGroupObservable', changedProps)
        checkObservableDiff(oldProps.onAfterRenderObservable, newProps.onAfterRenderObservable, 'onAfterRenderObservable', changedProps)
        checkObservableDiff(oldProps.onAfterRenderTargetsRenderObservable, newProps.onAfterRenderTargetsRenderObservable, 'onAfterRenderTargetsRenderObservable', changedProps)
        checkObservableDiff(oldProps.onAfterStepObservable, newProps.onAfterStepObservable, 'onAfterStepObservable', changedProps)
        checkObservableDiff(oldProps.onAnimationFileImportedObservable, newProps.onAnimationFileImportedObservable, 'onAnimationFileImportedObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeActiveMeshesEvaluationObservable, newProps.onBeforeActiveMeshesEvaluationObservable, 'onBeforeActiveMeshesEvaluationObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeAnimationsObservable, newProps.onBeforeAnimationsObservable, 'onBeforeAnimationsObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeCameraRenderObservable, newProps.onBeforeCameraRenderObservable, 'onBeforeCameraRenderObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeDrawPhaseObservable, newProps.onBeforeDrawPhaseObservable, 'onBeforeDrawPhaseObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeParticlesRenderingObservable, newProps.onBeforeParticlesRenderingObservable, 'onBeforeParticlesRenderingObservable', changedProps)
        checkObservableDiff(oldProps.onBeforePhysicsObservable, newProps.onBeforePhysicsObservable, 'onBeforePhysicsObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderingGroupObservable, newProps.onBeforeRenderingGroupObservable, 'onBeforeRenderingGroupObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderObservable, newProps.onBeforeRenderObservable, 'onBeforeRenderObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeRenderTargetsRenderObservable, newProps.onBeforeRenderTargetsRenderObservable, 'onBeforeRenderTargetsRenderObservable', changedProps)
        checkObservableDiff(oldProps.onBeforeStepObservable, newProps.onBeforeStepObservable, 'onBeforeStepObservable', changedProps)
        checkObservableDiff(oldProps.onCameraRemovedObservable, newProps.onCameraRemovedObservable, 'onCameraRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onDataLoadedObservable, newProps.onDataLoadedObservable, 'onDataLoadedObservable', changedProps)
        checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
        checkObservableDiff(oldProps.onDisposeObservable, newProps.onDisposeObservable, 'onDisposeObservable', changedProps)
        checkObservableDiff(oldProps.onGeometryRemovedObservable, newProps.onGeometryRemovedObservable, 'onGeometryRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onKeyboardObservable, newProps.onKeyboardObservable, 'onKeyboardObservable', changedProps)
        checkObservableDiff(oldProps.onLightRemovedObservable, newProps.onLightRemovedObservable, 'onLightRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onMaterialRemovedObservable, newProps.onMaterialRemovedObservable, 'onMaterialRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onMeshImportedObservable, newProps.onMeshImportedObservable, 'onMeshImportedObservable', changedProps)
        checkObservableDiff(oldProps.onMeshRemovedObservable, newProps.onMeshRemovedObservable, 'onMeshRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onMultiMaterialRemovedObservable, newProps.onMultiMaterialRemovedObservable, 'onMultiMaterialRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onNewCameraAddedObservable, newProps.onNewCameraAddedObservable, 'onNewCameraAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewGeometryAddedObservable, newProps.onNewGeometryAddedObservable, 'onNewGeometryAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewLightAddedObservable, newProps.onNewLightAddedObservable, 'onNewLightAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewMaterialAddedObservable, newProps.onNewMaterialAddedObservable, 'onNewMaterialAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewMeshAddedObservable, newProps.onNewMeshAddedObservable, 'onNewMeshAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewMultiMaterialAddedObservable, newProps.onNewMultiMaterialAddedObservable, 'onNewMultiMaterialAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewSkeletonAddedObservable, newProps.onNewSkeletonAddedObservable, 'onNewSkeletonAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewTextureAddedObservable, newProps.onNewTextureAddedObservable, 'onNewTextureAddedObservable', changedProps)
        checkObservableDiff(oldProps.onNewTransformNodeAddedObservable, newProps.onNewTransformNodeAddedObservable, 'onNewTransformNodeAddedObservable', changedProps)
        checkLambdaDiff(oldProps.onPointerDown, newProps.onPointerDown, 'onPointerDown', changedProps)
        checkLambdaDiff(oldProps.onPointerMove, newProps.onPointerMove, 'onPointerMove', changedProps)
        checkObservableDiff(oldProps.onPointerObservable, newProps.onPointerObservable, 'onPointerObservable', changedProps)
        checkLambdaDiff(oldProps.onPointerPick, newProps.onPointerPick, 'onPointerPick', changedProps)
        checkLambdaDiff(oldProps.onPointerUp, newProps.onPointerUp, 'onPointerUp', changedProps)
        checkObservableDiff(oldProps.onPreKeyboardObservable, newProps.onPreKeyboardObservable, 'onPreKeyboardObservable', changedProps)
        checkObservableDiff(oldProps.onPrePointerObservable, newProps.onPrePointerObservable, 'onPrePointerObservable', changedProps)
        checkObservableDiff(oldProps.onReadyObservable, newProps.onReadyObservable, 'onReadyObservable', changedProps)
        checkObservableDiff(oldProps.onSkeletonRemovedObservable, newProps.onSkeletonRemovedObservable, 'onSkeletonRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onTextureRemovedObservable, newProps.onTextureRemovedObservable, 'onTextureRemovedObservable', changedProps)
        checkObservableDiff(oldProps.onTransformNodeRemovedObservable, newProps.onTransformNodeRemovedObservable, 'onTransformNodeRemovedObservable', changedProps)
        checkPrimitiveDiff(oldProps.particlesEnabled, newProps.particlesEnabled, 'particlesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.physicsEnabled, newProps.physicsEnabled, 'physicsEnabled', changedProps)
        checkLambdaDiff(oldProps.pointerDownPredicate, newProps.pointerDownPredicate, 'pointerDownPredicate', changedProps)
        checkLambdaDiff(oldProps.pointerMovePredicate, newProps.pointerMovePredicate, 'pointerMovePredicate', changedProps)
        checkLambdaDiff(oldProps.pointerUpPredicate, newProps.pointerUpPredicate, 'pointerUpPredicate', changedProps)
        checkPrimitiveDiff(oldProps.pointerX, newProps.pointerX, 'pointerX', changedProps)
        checkPrimitiveDiff(oldProps.pointerY, newProps.pointerY, 'pointerY', changedProps)
        checkPrimitiveDiff(oldProps.postProcessesEnabled, newProps.postProcessesEnabled, 'postProcessesEnabled', changedProps)
        // type: 'BabylonjsCorePostProcessManager' property (not coded) BabylonjsCoreScene.postProcessManager.
        checkPrimitiveDiff(oldProps.prePass, newProps.prePass, 'prePass', changedProps)
        checkPrimitiveDiff(oldProps.preventDefaultOnPointerDown, newProps.preventDefaultOnPointerDown, 'preventDefaultOnPointerDown', changedProps)
        checkPrimitiveDiff(oldProps.preventDefaultOnPointerUp, newProps.preventDefaultOnPointerUp, 'preventDefaultOnPointerUp', changedProps)
        checkPrimitiveDiff(oldProps.probesEnabled, newProps.probesEnabled, 'probesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.proceduralTexturesEnabled, newProps.proceduralTexturesEnabled, 'proceduralTexturesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.renderTargetsEnabled, newProps.renderTargetsEnabled, 'renderTargetsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.requireLightSorting, newProps.requireLightSorting, 'requireLightSorting', changedProps)
        // type: 'any' property (not coded) BabylonjsCoreScene.reservedDataStore.
        checkPrimitiveDiff(oldProps.shadowsEnabled, newProps.shadowsEnabled, 'shadowsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.skeletonsEnabled, newProps.skeletonsEnabled, 'skeletonsEnabled', changedProps)
        checkPrimitiveDiff(oldProps.skipFrustumClipping, newProps.skipFrustumClipping, 'skipFrustumClipping', changedProps)
        checkPrimitiveDiff(oldProps.spritesEnabled, newProps.spritesEnabled, 'spritesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.texturesEnabled, newProps.texturesEnabled, 'texturesEnabled', changedProps)
        checkPrimitiveDiff(oldProps.useConstantAnimationDeltaTime, newProps.useConstantAnimationDeltaTime, 'useConstantAnimationDeltaTime', changedProps)
        checkPrimitiveDiff(oldProps.useDelayedTextureLoading, newProps.useDelayedTextureLoading, 'useDelayedTextureLoading', changedProps)
        checkPrimitiveDiff(oldProps.useRightHandedSystem, newProps.useRightHandedSystem, 'useRightHandedSystem', changedProps)
        checkMethodDiff(oldProps.addActionManager, newProps.addActionManager, 'addActionManager', changedProps)
        checkMethodDiff(oldProps.addAnimation, newProps.addAnimation, 'addAnimation', changedProps)
        checkMethodDiff(oldProps.addAnimationGroup, newProps.addAnimationGroup, 'addAnimationGroup', changedProps)
        checkMethodDiff(oldProps.addCamera, newProps.addCamera, 'addCamera', changedProps)
        checkMethodDiff(oldProps.addExternalData, newProps.addExternalData, 'addExternalData', changedProps)
        checkMethodDiff(oldProps.addGeometry, newProps.addGeometry, 'addGeometry', changedProps)
        checkMethodDiff(oldProps.addLight, newProps.addLight, 'addLight', changedProps)
        checkMethodDiff(oldProps.addMaterial, newProps.addMaterial, 'addMaterial', changedProps)
        checkMethodDiff(oldProps.addMesh, newProps.addMesh, 'addMesh', changedProps)
        checkMethodDiff(oldProps.addMorphTargetManager, newProps.addMorphTargetManager, 'addMorphTargetManager', changedProps)
        checkMethodDiff(oldProps.addMultiMaterial, newProps.addMultiMaterial, 'addMultiMaterial', changedProps)
        checkMethodDiff(oldProps.addParticleSystem, newProps.addParticleSystem, 'addParticleSystem', changedProps)
        checkMethodDiff(oldProps.addSkeleton, newProps.addSkeleton, 'addSkeleton', changedProps)
        checkMethodDiff(oldProps.addTexture, newProps.addTexture, 'addTexture', changedProps)
        checkMethodDiff(oldProps.addTransformNode, newProps.addTransformNode, 'addTransformNode', changedProps)
        checkMethodDiff(oldProps.deleteCompoundImpostor, newProps.deleteCompoundImpostor, 'deleteCompoundImpostor', changedProps)
        checkMethodDiff(oldProps.enablePhysics, newProps.enablePhysics, 'enablePhysics', changedProps)
        checkMethodDiff(oldProps.setActiveCameraByID, newProps.setActiveCameraByID, 'setActiveCameraByID', changedProps)
        checkMethodDiff(oldProps.setActiveCameraByName, newProps.setActiveCameraByName, 'setActiveCameraByName', changedProps)
        checkMethodDiff(oldProps.setPointerOverMesh, newProps.setPointerOverMesh, 'setPointerOverMesh', changedProps)
        checkMethodDiff(oldProps.setRenderingAutoClearDepthStencil, newProps.setRenderingAutoClearDepthStencil, 'setRenderingAutoClearDepthStencil', changedProps)
        checkMethodDiff(oldProps.setRenderingOrder, newProps.setRenderingOrder, 'setRenderingOrder', changedProps)
        checkMethodDiff(oldProps.setStepId, newProps.setStepId, 'setStepId', changedProps)
        checkMethodDiff(oldProps.setTransformMatrix, newProps.setTransformMatrix, 'setTransformMatrix', changedProps)
        return changedProps.length === 0 ? null : changedProps;
    }
}

export const ADTForMesh: string = 'ADTForMesh', ADTForMeshTexture: string = 'ADTForMeshTexture', ADTFullscreenUI: string = 'ADTFullscreenUI', AbstractButton3D: string = 'AbstractButton3D', AbstractMesh: string = 'AbstractMesh', AdvancedDynamicTexture: string = 'AdvancedDynamicTexture', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', AttachToBoxBehavior: string = 'AttachToBoxBehavior', AutoRotationBehavior: string = 'AutoRotationBehavior', BackgroundMaterial: string = 'BackgroundMaterial', BaseSlider: string = 'BaseSlider', BaseTexture: string = 'BaseTexture', BouncingBehavior: string = 'BouncingBehavior', Box: string = 'Box', Button: string = 'Button', Button3D: string = 'Button3D', Camera: string = 'Camera', Capsule: string = 'Capsule', CascadedShadowGenerator: string = 'CascadedShadowGenerator', Checkbox: string = 'Checkbox', ColorGradingTexture: string = 'ColorGradingTexture', ColorPicker: string = 'ColorPicker', Container: string = 'Container', Container3D: string = 'Container3D', Control: string = 'Control', Control3D: string = 'Control3D', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', CylinderPanel: string = 'CylinderPanel', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DisplayGrid: string = 'DisplayGrid', DynamicTerrain: string = 'DynamicTerrain', DynamicTexture: string = 'DynamicTexture', EffectLayer: string = 'EffectLayer', Ellipse: string = 'Ellipse', EnvironmentHelper: string = 'EnvironmentHelper', EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FadeInOutBehavior: string = 'FadeInOutBehavior', FluentMaterial: string = 'FluentMaterial', FlyCamera: string = 'FlyCamera', FollowCamera: string = 'FollowCamera', FramingBehavior: string = 'FramingBehavior', FreeCamera: string = 'FreeCamera', GUI3DManager: string = 'GUI3DManager', GamepadCamera: string = 'GamepadCamera', GlowLayer: string = 'GlowLayer', Grid: string = 'Grid', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', GroundMesh: string = 'GroundMesh', HDRCubeTexture: string = 'HDRCubeTexture', HemisphericLight: string = 'HemisphericLight', HighlightLayer: string = 'HighlightLayer', HolographicButton: string = 'HolographicButton', HtmlElementTexture: string = 'HtmlElementTexture', IcoSphere: string = 'IcoSphere', Image: string = 'Image', ImageBasedSlider: string = 'ImageBasedSlider', ImageScrollBar: string = 'ImageScrollBar', InputPassword: string = 'InputPassword', InputText: string = 'InputText', InstancedLinesMesh: string = 'InstancedLinesMesh', InstancedMesh: string = 'InstancedMesh', Lathe: string = 'Lathe', Light: string = 'Light', Line: string = 'Line', LineSystem: string = 'LineSystem', Lines: string = 'Lines', LinesMesh: string = 'LinesMesh', Material: string = 'Material', Mesh: string = 'Mesh', MeshButton3D: string = 'MeshButton3D', MirrorTexture: string = 'MirrorTexture', MultiLine: string = 'MultiLine', MultiMaterial: string = 'MultiMaterial', MultiPointerScaleBehavior: string = 'MultiPointerScaleBehavior', MultiRenderTarget: string = 'MultiRenderTarget', MultiviewRenderTarget: string = 'MultiviewRenderTarget', Node: string = 'Node', NodeMaterial: string = 'NodeMaterial', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', PhysicsImpostor: string = 'PhysicsImpostor', Plane: string = 'Plane', PlanePanel: string = 'PlanePanel', PointLight: string = 'PointLight', PointerDragBehavior: string = 'PointerDragBehavior', PointsCloudSystem: string = 'PointsCloudSystem', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', ProceduralTexture: string = 'ProceduralTexture', PushMaterial: string = 'PushMaterial', RadioButton: string = 'RadioButton', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture2DArray: string = 'RawTexture2DArray', RawTexture3D: string = 'RawTexture3D', Rectangle: string = 'Rectangle', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ScatterPanel: string = 'ScatterPanel', ScrollBar: string = 'ScrollBar', ScrollViewer: string = 'ScrollViewer', SelectionPanel: string = 'SelectionPanel', ShaderMaterial: string = 'ShaderMaterial', ShadowGenerator: string = 'ShadowGenerator', ShadowLight: string = 'ShadowLight', SixDofDragBehavior: string = 'SixDofDragBehavior', Slider: string = 'Slider', Sphere: string = 'Sphere', SpherePanel: string = 'SpherePanel', SpotLight: string = 'SpotLight', StackPanel: string = 'StackPanel', StackPanel3D: string = 'StackPanel3D', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', TextBlock: string = 'TextBlock', Texture: string = 'Texture', ThinTexture: string = 'ThinTexture', TiledBox: string = 'TiledBox', TiledGround: string = 'TiledGround', TiledPlane: string = 'TiledPlane', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', TrailMesh: string = 'TrailMesh', TransformNode: string = 'TransformNode', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', VirtualKeyboard: string = 'VirtualKeyboard', VolumeBasedPanel: string = 'VolumeBasedPanel', WebVRFreeCamera: string = 'WebVRFreeCamera', WebXRCamera: string = 'WebXRCamera', _ScrollViewerWindow: string = '_ScrollViewerWindow';
const classesMap: object = {
    dynamicTerrain: ExtensionsDynamicTerrain, DynamicTerrain: ExtensionsDynamicTerrain,
    abstractScene: BabylonjsCoreAbstractScene, AbstractScene: BabylonjsCoreAbstractScene,
    scene: BabylonjsCoreScene, Scene: BabylonjsCoreScene,
    camera: BabylonjsCoreCamera, Camera: BabylonjsCoreCamera,
    environmentHelper: BabylonjsCoreEnvironmentHelper, EnvironmentHelper: BabylonjsCoreEnvironmentHelper,
    effectLayer: BabylonjsCoreEffectLayer, EffectLayer: BabylonjsCoreEffectLayer,
    light: BabylonjsCoreLight, Light: BabylonjsCoreLight,
    material: BabylonjsCoreMaterial, Material: BabylonjsCoreMaterial,
    abstractMesh: BabylonjsCoreAbstractMesh, AbstractMesh: BabylonjsCoreAbstractMesh,
    mesh: BabylonjsCoreMesh, Mesh: BabylonjsCoreMesh,
    meshBuilder: BabylonjsCoreMeshBuilder, MeshBuilder: BabylonjsCoreMeshBuilder,
    transformNode: BabylonjsCoreTransformNode, TransformNode: BabylonjsCoreTransformNode,
    pointsCloudSystem: BabylonjsCorePointsCloudSystem, PointsCloudSystem: BabylonjsCorePointsCloudSystem,
    physicsImpostor: BabylonjsCorePhysicsImpostor, PhysicsImpostor: BabylonjsCorePhysicsImpostor,
    advancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture, AdvancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture,
    gui3DManager: BabylonjsGuiGUI3DManager, GUI3DManager: BabylonjsGuiGUI3DManager,
    autoRotationBehavior: BabylonjsCoreAutoRotationBehavior, AutoRotationBehavior: BabylonjsCoreAutoRotationBehavior,
    bouncingBehavior: BabylonjsCoreBouncingBehavior, BouncingBehavior: BabylonjsCoreBouncingBehavior,
    framingBehavior: BabylonjsCoreFramingBehavior, FramingBehavior: BabylonjsCoreFramingBehavior,
    attachToBoxBehavior: BabylonjsCoreAttachToBoxBehavior, AttachToBoxBehavior: BabylonjsCoreAttachToBoxBehavior,
    fadeInOutBehavior: BabylonjsCoreFadeInOutBehavior, FadeInOutBehavior: BabylonjsCoreFadeInOutBehavior,
    multiPointerScaleBehavior: BabylonjsCoreMultiPointerScaleBehavior, MultiPointerScaleBehavior: BabylonjsCoreMultiPointerScaleBehavior,
    pointerDragBehavior: BabylonjsCorePointerDragBehavior, PointerDragBehavior: BabylonjsCorePointerDragBehavior,
    sixDofDragBehavior: BabylonjsCoreSixDofDragBehavior, SixDofDragBehavior: BabylonjsCoreSixDofDragBehavior,
    vrExperienceHelper: BabylonjsCoreVRExperienceHelper, VRExperienceHelper: BabylonjsCoreVRExperienceHelper,
    cascadedShadowGenerator: BabylonjsCoreCascadedShadowGenerator, CascadedShadowGenerator: BabylonjsCoreCascadedShadowGenerator,
    shadowGenerator: BabylonjsCoreShadowGenerator, ShadowGenerator: BabylonjsCoreShadowGenerator,
    thinTexture: BabylonjsCoreThinTexture, ThinTexture: BabylonjsCoreThinTexture,
    control: BabylonjsGuiControl, Control: BabylonjsGuiControl,
    textBlock: BabylonjsGuiTextBlock, TextBlock: BabylonjsGuiTextBlock,
    control3D: BabylonjsGuiControl3D, Control3D: BabylonjsGuiControl3D,
    node: BabylonjsCoreNode, Node: BabylonjsCoreNode,
    instancedMesh: BabylonjsCoreInstancedMesh, InstancedMesh: BabylonjsCoreInstancedMesh,
    instancedLinesMesh: BabylonjsCoreInstancedLinesMesh, InstancedLinesMesh: BabylonjsCoreInstancedLinesMesh,
    linesMesh: BabylonjsCoreLinesMesh, LinesMesh: BabylonjsCoreLinesMesh,
    groundMesh: BabylonjsCoreGroundMesh, GroundMesh: BabylonjsCoreGroundMesh,
    trailMesh: BabylonjsCoreTrailMesh, TrailMesh: BabylonjsCoreTrailMesh,
    renderTargetTexture: BabylonjsCoreRenderTargetTexture, RenderTargetTexture: BabylonjsCoreRenderTargetTexture,
    targetCamera: BabylonjsCoreTargetCamera, TargetCamera: BabylonjsCoreTargetCamera,
    freeCamera: BabylonjsCoreFreeCamera, FreeCamera: BabylonjsCoreFreeCamera,
    touchCamera: BabylonjsCoreTouchCamera, TouchCamera: BabylonjsCoreTouchCamera,
    universalCamera: BabylonjsCoreUniversalCamera, UniversalCamera: BabylonjsCoreUniversalCamera,
    gamepadCamera: BabylonjsCoreGamepadCamera, GamepadCamera: BabylonjsCoreGamepadCamera,
    anaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera, AnaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera,
    stereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera, StereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera,
    anaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera, AnaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera,
    stereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera, StereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera,
    deviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera, DeviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera,
    vrDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera, VRDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera,
    vrDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera, VRDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera,
    anaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera, AnaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera,
    stereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera, StereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera,
    virtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera, VirtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera,
    webVrFreeCamera: BabylonjsCoreWebVRFreeCamera, WebVRFreeCamera: BabylonjsCoreWebVRFreeCamera,
    webXrCamera: BabylonjsCoreWebXRCamera, WebXRCamera: BabylonjsCoreWebXRCamera,
    arcRotateCamera: BabylonjsCoreArcRotateCamera, ArcRotateCamera: BabylonjsCoreArcRotateCamera,
    anaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera, AnaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera,
    stereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera, StereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera,
    vrDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera, VRDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera,
    flyCamera: BabylonjsCoreFlyCamera, FlyCamera: BabylonjsCoreFlyCamera,
    followCamera: BabylonjsCoreFollowCamera, FollowCamera: BabylonjsCoreFollowCamera,
    arcFollowCamera: BabylonjsCoreArcFollowCamera, ArcFollowCamera: BabylonjsCoreArcFollowCamera,
    pushMaterial: BabylonjsCorePushMaterial, PushMaterial: BabylonjsCorePushMaterial,
    nodeMaterial: BabylonjsCoreNodeMaterial, NodeMaterial: BabylonjsCoreNodeMaterial,
    standardMaterial: BabylonjsCoreStandardMaterial, StandardMaterial: BabylonjsCoreStandardMaterial,
    baseTexture: BabylonjsCoreBaseTexture, BaseTexture: BabylonjsCoreBaseTexture,
    backgroundMaterial: BabylonjsCoreBackgroundMaterial, BackgroundMaterial: BabylonjsCoreBackgroundMaterial,
    shadowLight: BabylonjsCoreShadowLight, ShadowLight: BabylonjsCoreShadowLight,
    pbrBaseMaterial: BabylonjsCorePBRBaseMaterial, PBRBaseMaterial: BabylonjsCorePBRBaseMaterial,
    pbrBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial, PBRBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial,
    pbrMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial, PBRMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial,
    pbrSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial, PBRSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial,
    pbrMaterial: BabylonjsCorePBRMaterial, PBRMaterial: BabylonjsCorePBRMaterial,
    fluentMaterial: BabylonjsGuiFluentMaterial, FluentMaterial: BabylonjsGuiFluentMaterial,
    shaderMaterial: BabylonjsCoreShaderMaterial, ShaderMaterial: BabylonjsCoreShaderMaterial,
    multiMaterial: BabylonjsCoreMultiMaterial, MultiMaterial: BabylonjsCoreMultiMaterial,
    directionalLight: BabylonjsCoreDirectionalLight, DirectionalLight: BabylonjsCoreDirectionalLight,
    pointLight: BabylonjsCorePointLight, PointLight: BabylonjsCorePointLight,
    spotLight: BabylonjsCoreSpotLight, SpotLight: BabylonjsCoreSpotLight,
    hemisphericLight: BabylonjsCoreHemisphericLight, HemisphericLight: BabylonjsCoreHemisphericLight,
    container: BabylonjsGuiContainer, Container: BabylonjsGuiContainer,
    rectangle: BabylonjsGuiRectangle, Rectangle: BabylonjsGuiRectangle,
    'babylon-button': BabylonjsGuiButton, Button: BabylonjsGuiButton,
    selectionPanel: BabylonjsGuiSelectionPanel, SelectionPanel: BabylonjsGuiSelectionPanel,
    scrollViewer: BabylonjsGuiScrollViewer, ScrollViewer: BabylonjsGuiScrollViewer,
    'babylon-image': BabylonjsGuiImage, Image: BabylonjsGuiImage,
    stackPanel: BabylonjsGuiStackPanel, StackPanel: BabylonjsGuiStackPanel,
    virtualKeyboard: BabylonjsGuiVirtualKeyboard, VirtualKeyboard: BabylonjsGuiVirtualKeyboard,
    'babylon-ellipse': BabylonjsGuiEllipse, Ellipse: BabylonjsGuiEllipse,
    grid: BabylonjsGuiGrid, Grid: BabylonjsGuiGrid,
    scrollViewerWindow: BabylonjsGui_ScrollViewerWindow, _ScrollViewerWindow: BabylonjsGui_ScrollViewerWindow,
    checkbox: BabylonjsGuiCheckbox, Checkbox: BabylonjsGuiCheckbox,
    colorPicker: BabylonjsGuiColorPicker, ColorPicker: BabylonjsGuiColorPicker,
    inputText: BabylonjsGuiInputText, InputText: BabylonjsGuiInputText,
    inputPassword: BabylonjsGuiInputPassword, InputPassword: BabylonjsGuiInputPassword,
    'babylon-line': BabylonjsGuiLine, Line: BabylonjsGuiLine,
    multiLine: BabylonjsGuiMultiLine, MultiLine: BabylonjsGuiMultiLine,
    radioButton: BabylonjsGuiRadioButton, RadioButton: BabylonjsGuiRadioButton,
    baseSlider: BabylonjsGuiBaseSlider, BaseSlider: BabylonjsGuiBaseSlider,
    scrollBar: BabylonjsGuiScrollBar, ScrollBar: BabylonjsGuiScrollBar,
    imageScrollBar: BabylonjsGuiImageScrollBar, ImageScrollBar: BabylonjsGuiImageScrollBar,
    slider: BabylonjsGuiSlider, Slider: BabylonjsGuiSlider,
    imageBasedSlider: BabylonjsGuiImageBasedSlider, ImageBasedSlider: BabylonjsGuiImageBasedSlider,
    displayGrid: BabylonjsGuiDisplayGrid, DisplayGrid: BabylonjsGuiDisplayGrid,
    container3D: BabylonjsGuiContainer3D, Container3D: BabylonjsGuiContainer3D,
    volumeBasedPanel: BabylonjsGuiVolumeBasedPanel, VolumeBasedPanel: BabylonjsGuiVolumeBasedPanel,
    cylinderPanel: BabylonjsGuiCylinderPanel, CylinderPanel: BabylonjsGuiCylinderPanel,
    planePanel: BabylonjsGuiPlanePanel, PlanePanel: BabylonjsGuiPlanePanel,
    scatterPanel: BabylonjsGuiScatterPanel, ScatterPanel: BabylonjsGuiScatterPanel,
    spherePanel: BabylonjsGuiSpherePanel, SpherePanel: BabylonjsGuiSpherePanel,
    stackPanel3D: BabylonjsGuiStackPanel3D, StackPanel3D: BabylonjsGuiStackPanel3D,
    abstractButton3D: BabylonjsGuiAbstractButton3D, AbstractButton3D: BabylonjsGuiAbstractButton3D,
    button3D: BabylonjsGuiButton3D, Button3D: BabylonjsGuiButton3D,
    holographicButton: BabylonjsGuiHolographicButton, HolographicButton: BabylonjsGuiHolographicButton,
    meshButton3D: BabylonjsGuiMeshButton3D, MeshButton3D: BabylonjsGuiMeshButton3D,
    glowLayer: BabylonjsCoreGlowLayer, GlowLayer: BabylonjsCoreGlowLayer,
    texture: BabylonjsCoreTexture, Texture: BabylonjsCoreTexture,
    highlightLayer: BabylonjsCoreHighlightLayer, HighlightLayer: BabylonjsCoreHighlightLayer,
    cubeTexture: BabylonjsCoreCubeTexture, CubeTexture: BabylonjsCoreCubeTexture,
    rawCubeTexture: BabylonjsCoreRawCubeTexture, RawCubeTexture: BabylonjsCoreRawCubeTexture,
    rawTexture: BabylonjsCoreRawTexture, RawTexture: BabylonjsCoreRawTexture,
    proceduralTexture: BabylonjsCoreProceduralTexture, ProceduralTexture: BabylonjsCoreProceduralTexture,
    customProceduralTexture: BabylonjsCoreCustomProceduralTexture, CustomProceduralTexture: BabylonjsCoreCustomProceduralTexture,
    noiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture, NoiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture,
    mirrorTexture: BabylonjsCoreMirrorTexture, MirrorTexture: BabylonjsCoreMirrorTexture,
    multiRenderTarget: BabylonjsCoreMultiRenderTarget, MultiRenderTarget: BabylonjsCoreMultiRenderTarget,
    refractionTexture: BabylonjsCoreRefractionTexture, RefractionTexture: BabylonjsCoreRefractionTexture,
    multiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget, MultiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget,
    videoTexture: BabylonjsCoreVideoTexture, VideoTexture: BabylonjsCoreVideoTexture,
    dynamicTexture: BabylonjsCoreDynamicTexture, DynamicTexture: BabylonjsCoreDynamicTexture,
    rawTexture2DArray: BabylonjsCoreRawTexture2DArray, RawTexture2DArray: BabylonjsCoreRawTexture2DArray,
    rawTexture3D: BabylonjsCoreRawTexture3D, RawTexture3D: BabylonjsCoreRawTexture3D,
    colorGradingTexture: BabylonjsCoreColorGradingTexture, ColorGradingTexture: BabylonjsCoreColorGradingTexture,
    equiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture, EquiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture,
    hdrCubeTexture: BabylonjsCoreHDRCubeTexture, HDRCubeTexture: BabylonjsCoreHDRCubeTexture,
    htmlElementTexture: BabylonjsCoreHtmlElementTexture, HtmlElementTexture: BabylonjsCoreHtmlElementTexture
};
export const intrinsicClassMap: object = {
    dynamicTerrain: 'DynamicTerrain',
    abstractScene: 'AbstractScene',
    scene: 'Scene',
    camera: 'Camera',
    environmentHelper: 'EnvironmentHelper',
    effectLayer: 'EffectLayer',
    light: 'Light',
    material: 'Material',
    abstractMesh: 'AbstractMesh',
    mesh: 'Mesh',
    meshBuilder: 'MeshBuilder',
    transformNode: 'TransformNode',
    pointsCloudSystem: 'PointsCloudSystem',
    physicsImpostor: 'PhysicsImpostor',
    advancedDynamicTexture: 'AdvancedDynamicTexture',
    gui3DManager: 'GUI3DManager',
    autoRotationBehavior: 'AutoRotationBehavior',
    bouncingBehavior: 'BouncingBehavior',
    framingBehavior: 'FramingBehavior',
    attachToBoxBehavior: 'AttachToBoxBehavior',
    fadeInOutBehavior: 'FadeInOutBehavior',
    multiPointerScaleBehavior: 'MultiPointerScaleBehavior',
    pointerDragBehavior: 'PointerDragBehavior',
    sixDofDragBehavior: 'SixDofDragBehavior',
    vrExperienceHelper: 'VRExperienceHelper',
    cascadedShadowGenerator: 'CascadedShadowGenerator',
    shadowGenerator: 'ShadowGenerator',
    thinTexture: 'ThinTexture',
    control: 'Control',
    textBlock: 'TextBlock',
    control3D: 'Control3D',
    node: 'Node',
    instancedMesh: 'InstancedMesh',
    instancedLinesMesh: 'InstancedLinesMesh',
    linesMesh: 'LinesMesh',
    groundMesh: 'GroundMesh',
    trailMesh: 'TrailMesh',
    renderTargetTexture: 'RenderTargetTexture',
    targetCamera: 'TargetCamera',
    freeCamera: 'FreeCamera',
    touchCamera: 'TouchCamera',
    universalCamera: 'UniversalCamera',
    gamepadCamera: 'GamepadCamera',
    anaglyphGamepadCamera: 'AnaglyphGamepadCamera',
    stereoscopicGamepadCamera: 'StereoscopicGamepadCamera',
    anaglyphUniversalCamera: 'AnaglyphUniversalCamera',
    stereoscopicUniversalCamera: 'StereoscopicUniversalCamera',
    deviceOrientationCamera: 'DeviceOrientationCamera',
    vrDeviceOrientationFreeCamera: 'VRDeviceOrientationFreeCamera',
    vrDeviceOrientationGamepadCamera: 'VRDeviceOrientationGamepadCamera',
    anaglyphFreeCamera: 'AnaglyphFreeCamera',
    stereoscopicFreeCamera: 'StereoscopicFreeCamera',
    virtualJoysticksCamera: 'VirtualJoysticksCamera',
    webVrFreeCamera: 'WebVRFreeCamera',
    webXrCamera: 'WebXRCamera',
    arcRotateCamera: 'ArcRotateCamera',
    anaglyphArcRotateCamera: 'AnaglyphArcRotateCamera',
    stereoscopicArcRotateCamera: 'StereoscopicArcRotateCamera',
    vrDeviceOrientationArcRotateCamera: 'VRDeviceOrientationArcRotateCamera',
    flyCamera: 'FlyCamera',
    followCamera: 'FollowCamera',
    arcFollowCamera: 'ArcFollowCamera',
    pushMaterial: 'PushMaterial',
    nodeMaterial: 'NodeMaterial',
    standardMaterial: 'StandardMaterial',
    baseTexture: 'BaseTexture',
    backgroundMaterial: 'BackgroundMaterial',
    shadowLight: 'ShadowLight',
    pbrBaseMaterial: 'PBRBaseMaterial',
    pbrBaseSimpleMaterial: 'PBRBaseSimpleMaterial',
    pbrMetallicRoughnessMaterial: 'PBRMetallicRoughnessMaterial',
    pbrSpecularGlossinessMaterial: 'PBRSpecularGlossinessMaterial',
    pbrMaterial: 'PBRMaterial',
    fluentMaterial: 'FluentMaterial',
    shaderMaterial: 'ShaderMaterial',
    multiMaterial: 'MultiMaterial',
    directionalLight: 'DirectionalLight',
    pointLight: 'PointLight',
    spotLight: 'SpotLight',
    hemisphericLight: 'HemisphericLight',
    container: 'Container',
    rectangle: 'Rectangle',
    'babylon-button': 'Button',
    selectionPanel: 'SelectionPanel',
    scrollViewer: 'ScrollViewer',
    'babylon-image': 'Image',
    stackPanel: 'StackPanel',
    virtualKeyboard: 'VirtualKeyboard',
    'babylon-ellipse': 'Ellipse',
    grid: 'Grid',
    scrollViewerWindow: '_ScrollViewerWindow',
    checkbox: 'Checkbox',
    colorPicker: 'ColorPicker',
    inputText: 'InputText',
    inputPassword: 'InputPassword',
    'babylon-line': 'Line',
    multiLine: 'MultiLine',
    radioButton: 'RadioButton',
    baseSlider: 'BaseSlider',
    scrollBar: 'ScrollBar',
    imageScrollBar: 'ImageScrollBar',
    slider: 'Slider',
    imageBasedSlider: 'ImageBasedSlider',
    displayGrid: 'DisplayGrid',
    container3D: 'Container3D',
    volumeBasedPanel: 'VolumeBasedPanel',
    cylinderPanel: 'CylinderPanel',
    planePanel: 'PlanePanel',
    scatterPanel: 'ScatterPanel',
    spherePanel: 'SpherePanel',
    stackPanel3D: 'StackPanel3D',
    abstractButton3D: 'AbstractButton3D',
    button3D: 'Button3D',
    holographicButton: 'HolographicButton',
    meshButton3D: 'MeshButton3D',
    glowLayer: 'GlowLayer',
    texture: 'Texture',
    highlightLayer: 'HighlightLayer',
    cubeTexture: 'CubeTexture',
    rawCubeTexture: 'RawCubeTexture',
    rawTexture: 'RawTexture',
    proceduralTexture: 'ProceduralTexture',
    customProceduralTexture: 'CustomProceduralTexture',
    noiseProceduralTexture: 'NoiseProceduralTexture',
    mirrorTexture: 'MirrorTexture',
    multiRenderTarget: 'MultiRenderTarget',
    refractionTexture: 'RefractionTexture',
    multiviewRenderTarget: 'MultiviewRenderTarget',
    videoTexture: 'VideoTexture',
    dynamicTexture: 'DynamicTexture',
    rawTexture2DArray: 'RawTexture2DArray',
    rawTexture3D: 'RawTexture3D',
    colorGradingTexture: 'ColorGradingTexture',
    equiRectangularCubeTexture: 'EquiRectangularCubeTexture',
    hdrCubeTexture: 'HDRCubeTexture',
    htmlElementTexture: 'HtmlElementTexture',
    box: 'Box',
    capsule: 'Capsule',
    cylinder: 'Cylinder',
    dashedLines: 'DashedLines',
    decal: 'Decal',
    disc: 'Disc',
    extrudePolygon: 'ExtrudePolygon',
    extrudeShape: 'ExtrudeShape',
    extrudeShapeCustom: 'ExtrudeShapeCustom',
    ground: 'Ground',
    groundFromHeightMap: 'GroundFromHeightMap',
    icoSphere: 'IcoSphere',
    lathe: 'Lathe',
    lines: 'Lines',
    lineSystem: 'LineSystem',
    plane: 'Plane',
    'babylon-polygon': 'Polygon',
    polyhedron: 'Polyhedron',
    ribbon: 'Ribbon',
    sphere: 'Sphere',
    tiledBox: 'TiledBox',
    tiledGround: 'TiledGround',
    tiledPlane: 'TiledPlane',
    torus: 'Torus',
    torusKnot: 'TorusKnot',
    tube: 'Tube',
    adtForMesh: 'ADTForMesh',
    adtForMeshTexture: 'ADTForMeshTexture',
    adtFullscreenUi: 'ADTFullscreenUI'
};

export function babylonClassFactory(importAlias: string): any {
    return (classesMap as any)[importAlias];
}
