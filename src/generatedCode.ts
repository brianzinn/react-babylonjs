import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberPushMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberNodeMaterialProps, FiberFluentMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberControlProps, FiberContainerProps, FiberRectangleProps, FiberButtonProps, FiberSelectionPanelProps, FiberScrollViewerProps, FiberStackPanelProps, FiberVirtualKeyboardProps, FiberEllipseProps, FiberGridProps, Fiber_ScrollViewerWindowProps, FiberTextBlockProps, FiberImageProps, FiberCheckboxProps, FiberColorPickerProps, FiberInputTextProps, FiberInputPasswordProps, FiberLineProps, FiberMultiLineProps, FiberRadioButtonProps, FiberBaseSliderProps, FiberScrollBarProps, FiberImageScrollBarProps, FiberSliderProps, FiberImageBasedSliderProps, FiberDisplayGridProps, FiberControl3DProps, FiberContainer3DProps, FiberVolumeBasedPanelProps, FiberCylinderPanelProps, FiberPlanePanelProps, FiberScatterPanelProps, FiberSpherePanelProps, FiberStackPanel3DProps, FiberAbstractButton3DProps, FiberButton3DProps, FiberHolographicButtonProps, FiberMeshButton3DProps, FiberEffectLayerProps, FiberGlowLayerProps, FiberHighlightLayerProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture3DProps, FiberRawTexture2DArrayProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberAutoRotationBehaviorProps, FiberBouncingBehaviorProps, FiberFramingBehaviorProps, FiberAttachToBoxBehaviorProps, FiberFadeInOutBehaviorProps, FiberMultiPointerScaleBehaviorProps, FiberPointerDragBehaviorProps, FiberSixDofDragBehaviorProps, FiberSceneProps } from "./generatedProps";
import { DynamicTerrain as ExtensionsDynamicTerrain } from "./extensions/DynamicTerrain";
import { AbstractScene as BabylonjsCoreAbstractScene } from "@babylonjs/core/abstractScene";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { DebugLayerTab as BabylonjsCoreDebugLayerTab } from "@babylonjs/core/Debug/debugLayer";
import { DualShockButton as BabylonjsCoreDualShockButton, DualShockDpad as BabylonjsCoreDualShockDpad } from "@babylonjs/core/Gamepads/dualShockGamepad";
import { Xbox360Button as BabylonjsCoreXbox360Button, Xbox360Dpad as BabylonjsCoreXbox360Dpad } from "@babylonjs/core/Gamepads/xboxGamepad";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper, IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions } from "@babylonjs/core/Helpers/environmentHelper";
import { EffectLayer as BabylonjsCoreEffectLayer } from "@babylonjs/core/Layers/effectLayer";
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
import { AutoRotationBehavior as BabylonjsCoreAutoRotationBehavior } from "@babylonjs/core/Behaviors/Cameras/autoRotationBehavior";
import { BouncingBehavior as BabylonjsCoreBouncingBehavior } from "@babylonjs/core/Behaviors/Cameras/bouncingBehavior";
import { FramingBehavior as BabylonjsCoreFramingBehavior } from "@babylonjs/core/Behaviors/Cameras/framingBehavior";
import { AttachToBoxBehavior as BabylonjsCoreAttachToBoxBehavior } from "@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior";
import { FadeInOutBehavior as BabylonjsCoreFadeInOutBehavior } from "@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior";
import { MultiPointerScaleBehavior as BabylonjsCoreMultiPointerScaleBehavior } from "@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior";
import { PointerDragBehavior as BabylonjsCorePointerDragBehavior } from "@babylonjs/core/Behaviors/Meshes/pointerDragBehavior";
import { SixDofDragBehavior as BabylonjsCoreSixDofDragBehavior } from "@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper, OnAfterEnteringVRObservableEvent as BabylonjsCoreOnAfterEnteringVRObservableEvent, VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { PoseEnabledControllerType as BabylonjsCorePoseEnabledControllerType } from "@babylonjs/core/Gamepads/Controllers/poseEnabledController";
import { ShadowGenerator as BabylonjsCoreShadowGenerator, ICustomShaderOptions as BabylonjsCoreICustomShaderOptions } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { NodeMaterialConnectionPointCompatibilityStates as BabylonjsCoreNodeMaterialConnectionPointCompatibilityStates, NodeMaterialConnectionPointDirection as BabylonjsCoreNodeMaterialConnectionPointDirection } from "@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { InternalTextureSource as BabylonjsCoreInternalTextureSource } from "@babylonjs/core/Materials/Textures/internalTexture";
import { Control as BabylonjsGuiControl } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping as BabylonjsGuiTextWrapping, TextBlock as BabylonjsGuiTextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Control3D as BabylonjsGuiControl3D } from "@babylonjs/gui/3D/controls/control3D";
import { TrigonometryBlockOperations as BabylonjsCoreTrigonometryBlockOperations } from "@babylonjs/core/Materials/Node/Blocks/trigonometryBlock";
import { WaveBlockKind as BabylonjsCoreWaveBlockKind } from "@babylonjs/core/Materials/Node/Blocks/waveBlock";
import { NodeMaterialBlockConnectionPointMode as BabylonjsCoreNodeMaterialBlockConnectionPointMode } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode";
import { NodeMaterialBlockConnectionPointTypes as BabylonjsCoreNodeMaterialBlockConnectionPointTypes } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes";
import { NodeMaterialBlockTargets as BabylonjsCoreNodeMaterialBlockTargets } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets";
import { NodeMaterialSystemValues as BabylonjsCoreNodeMaterialSystemValues } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues";
import { AnimatedInputBlockTypes as BabylonjsCoreAnimatedInputBlockTypes } from "@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes";
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from "@babylonjs/core/Animations/animationPropertiesOverride";
import { Animation as BabylonjsCoreAnimation } from "@babylonjs/core/Animations/animation";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector3 as BabylonjsCoreVector3, Quaternion as BabylonjsCoreQuaternion, Matrix as BabylonjsCoreMatrix, Vector2 as BabylonjsCoreVector2, Vector4 as BabylonjsCoreVector4 } from "@babylonjs/core/Maths/math.vector";
import { DeepImmutableObject as BabylonjsCoreDeepImmutableObject, IndicesArray as BabylonjsCoreIndicesArray, FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from "@babylonjs/core/Actions/abstractActionManager";
import { Color4 as BabylonjsCoreColor4, Color3 as BabylonjsCoreColor3 } from "@babylonjs/core/Maths/math.color";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { InstancedMesh as BabylonjsCoreInstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { MorphTargetManager as BabylonjsCoreMorphTargetManager } from "@babylonjs/core/Morph/morphTargetManager";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
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
import { LinesMesh as BabylonjsCoreLinesMesh } from "@babylonjs/core/Meshes/linesMesh";
import { Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math.plane";
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
import { NodeMaterial as BabylonjsCoreNodeMaterial, INodeMaterialOptions as BabylonjsCoreINodeMaterialOptions } from "@babylonjs/core/Materials/Node/nodeMaterial";
import { NodeMaterialBlock as BabylonjsCoreNodeMaterialBlock } from "@babylonjs/core/Materials/Node/nodeMaterialBlock";
import { FluentMaterial as BabylonjsGuiFluentMaterial } from "@babylonjs/gui/3D/materials/fluentMaterial";
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
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard } from "@babylonjs/gui/2D/controls/virtualKeyboard";
import { Ellipse as BabylonjsGuiEllipse } from "@babylonjs/gui/2D/controls/ellipse";
import { Grid as BabylonjsGuiGrid } from "@babylonjs/gui/2D/controls/grid";
import { _ScrollViewerWindow as BabylonjsGui_ScrollViewerWindow } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow";
import { Checkbox as BabylonjsGuiCheckbox } from "@babylonjs/gui/2D/controls/checkbox";
import { ColorPicker as BabylonjsGuiColorPicker } from "@babylonjs/gui/2D/controls/colorpicker";
import { InputText as BabylonjsGuiInputText } from "@babylonjs/gui/2D/controls/inputText";
import { InputPassword as BabylonjsGuiInputPassword } from "@babylonjs/gui/2D/controls/inputPassword";
import { Line as BabylonjsGuiLine } from "@babylonjs/gui/2D/controls/line";
import { MultiLine as BabylonjsGuiMultiLine } from "@babylonjs/gui/2D/controls/multiLine";
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
import { HighlightLayer as BabylonjsCoreHighlightLayer, IHighlightLayerOptions as BabylonjsCoreIHighlightLayerOptions } from "@babylonjs/core/Layers/highlightLayer";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { ThinEngine as BabylonjsCoreThinEngine } from "@babylonjs/core/Engines/thinEngine";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { Engine as BabylonjsCoreEngine } from "@babylonjs/core/Engines/engine";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
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
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { WebXRDefaultExperience as BabylonjsCoreWebXRDefaultExperience } from "@babylonjs/core/XR/webXRDefaultExperience";
import { SolidParticleSystem as BabylonjsCoreSolidParticleSystem } from "@babylonjs/core/Particles/solidParticleSystem";
import { Collider as BabylonjsCoreCollider } from "@babylonjs/core/Collisions/collider";
import { Ray as BabylonjsCoreRay } from "@babylonjs/core/Culling/ray";
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from "@babylonjs/core/Offline/IOfflineProvider";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo, KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerEventTypes as BabylonjsCorePointerEventTypes, PointerInfo as BabylonjsCorePointerInfo, PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { PostProcess as BabylonjsCorePostProcess } from "@babylonjs/core/PostProcesses/postProcess";
import { PostProcessManager as BabylonjsCorePostProcessManager } from "@babylonjs/core/PostProcesses/postProcessManager";
import { IPhysicsEnginePlugin as BabylonjsCoreIPhysicsEnginePlugin } from "@babylonjs/core/Physics/IPhysicsEngine";

export class FiberNodePropsHandler implements PropsHandler<BabylonjsCoreNode, FiberNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNode, oldProps: FiberNodeProps, newProps: FiberNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreNode.animationPropertiesOverride.
        // TODO: type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreNode.animations.
        // BabylonjsCoreNode.doNotSerialize (boolean):
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // BabylonjsCoreNode.id (string):
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreNode.inspectableCustomProperties.
        // TODO: type: 'any' property (not coded) BabylonjsCoreNode.metadata.
        // BabylonjsCoreNode.name (string):
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
        // TODO: type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreNode.parent.
        // TODO: type: 'any' property (not coded) BabylonjsCoreNode.reservedDataStore.
        // BabylonjsCoreNode.state (string):
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // BabylonjsCoreNode.uniqueId (number):
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BabylonjsCoreNode.setEnabled of type '(value?: boolean) => void':
        if (oldProps.setEnabled !== newProps.setEnabled) {
            updates.push({
                propertyName: 'setEnabled',
                value: newProps.setEnabled,
                type: '(value?: boolean) => void'
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
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberNode"
    };
}

export class FiberTransformNodePropsHandler implements PropsHandler<BabylonjsCoreTransformNode, FiberTransformNodeProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTransformNode, oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreTransformNode.billboardMode (number):
        if (oldProps.billboardMode !== newProps.billboardMode) {
            updates.push({
                propertyName: 'billboardMode',
                value: newProps.billboardMode,
                type: 'number'
            });
        }
        // BabylonjsCoreTransformNode.ignoreNonUniformScaling (boolean):
        if (oldProps.ignoreNonUniformScaling !== newProps.ignoreNonUniformScaling) {
            updates.push({
                propertyName: 'ignoreNonUniformScaling',
                value: newProps.ignoreNonUniformScaling,
                type: 'boolean'
            });
        }
        // BabylonjsCoreTransformNode.infiniteDistance (boolean):
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
        // BabylonjsCoreTransformNode.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreTransformNode.preserveParentRotationForBillboard (boolean):
        if (oldProps.preserveParentRotationForBillboard !== newProps.preserveParentRotationForBillboard) {
            updates.push({
                propertyName: 'preserveParentRotationForBillboard',
                value: newProps.preserveParentRotationForBillboard,
                type: 'boolean'
            });
        }
        // BabylonjsCoreTransformNode.reIntegrateRotationIntoRotationQuaternion (boolean):
        if (oldProps.reIntegrateRotationIntoRotationQuaternion !== newProps.reIntegrateRotationIntoRotationQuaternion) {
            updates.push({
                propertyName: 'reIntegrateRotationIntoRotationQuaternion',
                value: newProps.reIntegrateRotationIntoRotationQuaternion,
                type: 'boolean'
            });
        }
        // BabylonjsCoreTransformNode.rotation (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreTransformNode.rotationQuaternion.
        // BabylonjsCoreTransformNode.scaling (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreTransformNode.scalingDeterminant (number):
        if (oldProps.scalingDeterminant !== newProps.scalingDeterminant) {
            updates.push({
                propertyName: 'scalingDeterminant',
                value: newProps.scalingDeterminant,
                type: 'number'
            });
        }
        // BabylonjsCoreTransformNode.setAbsolutePosition of type '(absolutePosition?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode':
        if (oldProps.setAbsolutePosition !== newProps.setAbsolutePosition) {
            updates.push({
                propertyName: 'setAbsolutePosition',
                value: newProps.setAbsolutePosition,
                type: '(absolutePosition?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setDirection of type '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number) => BabylonjsCoreTransformNode':
        if (oldProps.setDirection !== newProps.setDirection) {
            updates.push({
                propertyName: 'setDirection',
                value: newProps.setDirection,
                type: '(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setParent of type '(node?: BabylonjsCoreNode) => BabylonjsCoreTransformNode':
        if (oldProps.setParent !== newProps.setParent) {
            updates.push({
                propertyName: 'setParent',
                value: newProps.setParent,
                type: '(node?: BabylonjsCoreNode) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setPivotMatrix of type '(matrix?: BabylonjsCoreDeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean) => BabylonjsCoreTransformNode':
        if (oldProps.setPivotMatrix !== newProps.setPivotMatrix) {
            updates.push({
                propertyName: 'setPivotMatrix',
                value: newProps.setPivotMatrix,
                type: '(matrix?: BabylonjsCoreDeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setPivotPoint of type '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace) => BabylonjsCoreTransformNode':
        if (oldProps.setPivotPoint !== newProps.setPivotPoint) {
            updates.push({
                propertyName: 'setPivotPoint',
                value: newProps.setPivotPoint,
                type: '(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setPositionWithLocalVector of type '(vector3?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode':
        if (oldProps.setPositionWithLocalVector !== newProps.setPositionWithLocalVector) {
            updates.push({
                propertyName: 'setPositionWithLocalVector',
                value: newProps.setPositionWithLocalVector,
                type: '(vector3?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode'
            });
        }
        // BabylonjsCoreTransformNode.setPreTransformMatrix of type '(matrix?: BabylonjsCoreMatrix) => BabylonjsCoreTransformNode':
        if (oldProps.setPreTransformMatrix !== newProps.setPreTransformMatrix) {
            updates.push({
                propertyName: 'setPreTransformMatrix',
                value: newProps.setPreTransformMatrix,
                type: '(matrix?: BabylonjsCoreMatrix) => BabylonjsCoreTransformNode'
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
        "isNode": true,
        "className": "FiberTransformNode"
    };
}

export class FiberAbstractMeshPropsHandler implements PropsHandler<BabylonjsCoreAbstractMesh, FiberAbstractMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAbstractMesh, oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreAbstractMesh.actionManager.
        // BabylonjsCoreAbstractMesh.alphaIndex (number):
        if (oldProps.alphaIndex !== newProps.alphaIndex) {
            updates.push({
                propertyName: 'alphaIndex',
                value: newProps.alphaIndex,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.alwaysSelectAsActiveMesh (boolean):
        if (oldProps.alwaysSelectAsActiveMesh !== newProps.alwaysSelectAsActiveMesh) {
            updates.push({
                propertyName: 'alwaysSelectAsActiveMesh',
                value: newProps.alwaysSelectAsActiveMesh,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.applyFog (boolean):
        if (oldProps.applyFog !== newProps.applyFog) {
            updates.push({
                propertyName: 'applyFog',
                value: newProps.applyFog,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.checkCollisions (boolean):
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.collisionGroup (number):
        if (oldProps.collisionGroup !== newProps.collisionGroup) {
            updates.push({
                propertyName: 'collisionGroup',
                value: newProps.collisionGroup,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.collisionMask (number):
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.computeBonesUsingShaders (boolean):
        if (oldProps.computeBonesUsingShaders !== newProps.computeBonesUsingShaders) {
            updates.push({
                propertyName: 'computeBonesUsingShaders',
                value: newProps.computeBonesUsingShaders,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.cullingStrategy (number):
        if (oldProps.cullingStrategy !== newProps.cullingStrategy) {
            updates.push({
                propertyName: 'cullingStrategy',
                value: newProps.cullingStrategy,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.definedFacingForward (boolean):
        if (oldProps.definedFacingForward !== newProps.definedFacingForward) {
            updates.push({
                propertyName: 'definedFacingForward',
                value: newProps.definedFacingForward,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.doNotSyncBoundingInfo (boolean):
        if (oldProps.doNotSyncBoundingInfo !== newProps.doNotSyncBoundingInfo) {
            updates.push({
                propertyName: 'doNotSyncBoundingInfo',
                value: newProps.doNotSyncBoundingInfo,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.edgesColor of BabylonjsCoreColor4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.edgesColor && (!oldProps.edgesColor || oldProps.edgesColor.r !== newProps.edgesColor.r || oldProps.edgesColor.g !== newProps.edgesColor.g || oldProps.edgesColor.b !== newProps.edgesColor.b || oldProps.edgesColor.a !== newProps.edgesColor.a)) {
            updates.push({
                propertyName: 'edgesColor',
                value: newProps.edgesColor,
                type: 'BabylonjsCoreColor4'
            });
        }
        // BabylonjsCoreAbstractMesh.edgesWidth (number):
        if (oldProps.edgesWidth !== newProps.edgesWidth) {
            updates.push({
                propertyName: 'edgesWidth',
                value: newProps.edgesWidth,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.ellipsoid (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreAbstractMesh.ellipsoidOffset (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreAbstractMesh.enablePointerMoveEvents (boolean):
        if (oldProps.enablePointerMoveEvents !== newProps.enablePointerMoveEvents) {
            updates.push({
                propertyName: 'enablePointerMoveEvents',
                value: newProps.enablePointerMoveEvents,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.facetDepthSortFrom (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.facetDepthSortFrom && (!oldProps.facetDepthSortFrom || !oldProps.facetDepthSortFrom.equals(newProps.facetDepthSortFrom))) {
            updates.push({
                propertyName: 'facetDepthSortFrom',
                value: newProps.facetDepthSortFrom,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreAbstractMesh.hasVertexAlpha (boolean):
        if (oldProps.hasVertexAlpha !== newProps.hasVertexAlpha) {
            updates.push({
                propertyName: 'hasVertexAlpha',
                value: newProps.hasVertexAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.isBlocker (boolean):
        if (oldProps.isBlocker !== newProps.isBlocker) {
            updates.push({
                propertyName: 'isBlocker',
                value: newProps.isBlocker,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.isPickable (boolean):
        if (oldProps.isPickable !== newProps.isPickable) {
            updates.push({
                propertyName: 'isPickable',
                value: newProps.isPickable,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.isVisible (boolean):
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.layerMask (number):
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreAbstractMesh.material.
        // BabylonjsCoreAbstractMesh.mustDepthSortFacets (boolean):
        if (oldProps.mustDepthSortFacets !== newProps.mustDepthSortFacets) {
            updates.push({
                propertyName: 'mustDepthSortFacets',
                value: newProps.mustDepthSortFacets,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.numBoneInfluencers (number):
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
        // BabylonjsCoreAbstractMesh.outlineColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.outlineColor && (!oldProps.outlineColor || !oldProps.outlineColor.equals(newProps.outlineColor))) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreAbstractMesh.outlineWidth (number):
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.overlayAlpha (number):
        if (oldProps.overlayAlpha !== newProps.overlayAlpha) {
            updates.push({
                propertyName: 'overlayAlpha',
                value: newProps.overlayAlpha,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.overlayColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.overlayColor && (!oldProps.overlayColor || !oldProps.overlayColor.equals(newProps.overlayColor))) {
            updates.push({
                propertyName: 'overlayColor',
                value: newProps.overlayColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreAbstractMesh.partitioningBBoxRatio (number):
        if (oldProps.partitioningBBoxRatio !== newProps.partitioningBBoxRatio) {
            updates.push({
                propertyName: 'partitioningBBoxRatio',
                value: newProps.partitioningBBoxRatio,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.partitioningSubdivisions (number):
        if (oldProps.partitioningSubdivisions !== newProps.partitioningSubdivisions) {
            updates.push({
                propertyName: 'partitioningSubdivisions',
                value: newProps.partitioningSubdivisions,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.receiveShadows (boolean):
        if (oldProps.receiveShadows !== newProps.receiveShadows) {
            updates.push({
                propertyName: 'receiveShadows',
                value: newProps.receiveShadows,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.renderingGroupId (number):
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.scaling (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreAbstractMesh.showSubMeshesBoundingBox (boolean):
        if (oldProps.showSubMeshesBoundingBox !== newProps.showSubMeshesBoundingBox) {
            updates.push({
                propertyName: 'showSubMeshesBoundingBox',
                value: newProps.showSubMeshesBoundingBox,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreSkeleton' property (not coded) BabylonjsCoreAbstractMesh.skeleton.
        // TODO: type: 'BabylonjsCoreSubMesh[]' property (not coded) BabylonjsCoreAbstractMesh.subMeshes.
        // BabylonjsCoreAbstractMesh.useOctreeForCollisions (boolean):
        if (oldProps.useOctreeForCollisions !== newProps.useOctreeForCollisions) {
            updates.push({
                propertyName: 'useOctreeForCollisions',
                value: newProps.useOctreeForCollisions,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.useOctreeForPicking (boolean):
        if (oldProps.useOctreeForPicking !== newProps.useOctreeForPicking) {
            updates.push({
                propertyName: 'useOctreeForPicking',
                value: newProps.useOctreeForPicking,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.useOctreeForRenderingSelection (boolean):
        if (oldProps.useOctreeForRenderingSelection !== newProps.useOctreeForRenderingSelection) {
            updates.push({
                propertyName: 'useOctreeForRenderingSelection',
                value: newProps.useOctreeForRenderingSelection,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.useVertexColors (boolean):
        if (oldProps.useVertexColors !== newProps.useVertexColors) {
            updates.push({
                propertyName: 'useVertexColors',
                value: newProps.useVertexColors,
                type: 'boolean'
            });
        }
        // BabylonjsCoreAbstractMesh.visibility (number):
        if (oldProps.visibility !== newProps.visibility) {
            updates.push({
                propertyName: 'visibility',
                value: newProps.visibility,
                type: 'number'
            });
        }
        // BabylonjsCoreAbstractMesh.setBoundingInfo of type '(boundingInfo?: BabylonjsCoreBoundingInfo) => BabylonjsCoreAbstractMesh':
        if (oldProps.setBoundingInfo !== newProps.setBoundingInfo) {
            updates.push({
                propertyName: 'setBoundingInfo',
                value: newProps.setBoundingInfo,
                type: '(boundingInfo?: BabylonjsCoreBoundingInfo) => BabylonjsCoreAbstractMesh'
            });
        }
        // BabylonjsCoreAbstractMesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number) => BabylonjsCoreAbstractMesh':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number) => BabylonjsCoreAbstractMesh'
            });
        }
        // BabylonjsCoreAbstractMesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh'
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
        "isNode": true,
        "className": "FiberAbstractMesh"
    };
}

export class FiberMeshPropsHandler implements PropsHandler<BabylonjsCoreMesh, FiberMeshProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMesh, oldProps: FiberMeshProps, newProps: FiberMeshProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreMesh.delayLoadingFile (string):
        if (oldProps.delayLoadingFile !== newProps.delayLoadingFile) {
            updates.push({
                propertyName: 'delayLoadingFile',
                value: newProps.delayLoadingFile,
                type: 'string'
            });
        }
        // BabylonjsCoreMesh.delayLoadState (number):
        if (oldProps.delayLoadState !== newProps.delayLoadState) {
            updates.push({
                propertyName: 'delayLoadState',
                value: newProps.delayLoadState,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreInstancedMesh[]' property (not coded) BabylonjsCoreMesh.instances.
        // BabylonjsCoreMesh.isUnIndexed (boolean):
        if (oldProps.isUnIndexed !== newProps.isUnIndexed) {
            updates.push({
                propertyName: 'isUnIndexed',
                value: newProps.isUnIndexed,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMesh.manualUpdateOfWorldMatrixInstancedBuffer (boolean):
        if (oldProps.manualUpdateOfWorldMatrixInstancedBuffer !== newProps.manualUpdateOfWorldMatrixInstancedBuffer) {
            updates.push({
                propertyName: 'manualUpdateOfWorldMatrixInstancedBuffer',
                value: newProps.manualUpdateOfWorldMatrixInstancedBuffer,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreMorphTargetManager' property (not coded) BabylonjsCoreMesh.morphTargetManager.
        // TODO: type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinFourWeights.
        // TODO: type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinWeightsAndExtra.
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
        // BabylonjsCoreMesh.overrideMaterialSideOrientation (number):
        if (oldProps.overrideMaterialSideOrientation !== newProps.overrideMaterialSideOrientation) {
            updates.push({
                propertyName: 'overrideMaterialSideOrientation',
                value: newProps.overrideMaterialSideOrientation,
                type: 'number'
            });
        }
        // BabylonjsCoreMesh.overridenInstanceCount (number):
        if (oldProps.overridenInstanceCount !== newProps.overridenInstanceCount) {
            updates.push({
                propertyName: 'overridenInstanceCount',
                value: newProps.overridenInstanceCount,
                type: 'number'
            });
        }
        // BabylonjsCoreMesh.setIndices of type '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean) => BabylonjsCoreAbstractMesh':
        if (oldProps.setIndices !== newProps.setIndices) {
            updates.push({
                propertyName: 'setIndices',
                value: newProps.setIndices,
                type: '(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean) => BabylonjsCoreAbstractMesh'
            });
        }
        // BabylonjsCoreMesh.setMaterialByID of type '(id?: string) => BabylonjsCoreMesh':
        if (oldProps.setMaterialByID !== newProps.setMaterialByID) {
            updates.push({
                propertyName: 'setMaterialByID',
                value: newProps.setMaterialByID,
                type: '(id?: string) => BabylonjsCoreMesh'
            });
        }
        // BabylonjsCoreMesh.setVerticesBuffer of type '(buffer?: BabylonjsCoreVertexBuffer) => BabylonjsCoreMesh':
        if (oldProps.setVerticesBuffer !== newProps.setVerticesBuffer) {
            updates.push({
                propertyName: 'setVerticesBuffer',
                value: newProps.setVerticesBuffer,
                type: '(buffer?: BabylonjsCoreVertexBuffer) => BabylonjsCoreMesh'
            });
        }
        // BabylonjsCoreMesh.setVerticesData of type '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh':
        if (oldProps.setVerticesData !== newProps.setVerticesData) {
            updates.push({
                propertyName: 'setVerticesData',
                value: newProps.setVerticesData,
                type: '(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh'
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
        "isNode": true,
        "className": "FiberMesh"
    };
}

export class FiberCameraPropsHandler implements PropsHandler<BabylonjsCoreCamera, FiberCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreCamera, oldProps: FiberCameraProps, newProps: FiberCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreCamera.cameraRigMode (number):
        if (oldProps.cameraRigMode !== newProps.cameraRigMode) {
            updates.push({
                propertyName: 'cameraRigMode',
                value: newProps.cameraRigMode,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreCamera.customRenderTargets.
        // BabylonjsCoreCamera.fov (number):
        if (oldProps.fov !== newProps.fov) {
            updates.push({
                propertyName: 'fov',
                value: newProps.fov,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.fovMode (number):
        if (oldProps.fovMode !== newProps.fovMode) {
            updates.push({
                propertyName: 'fovMode',
                value: newProps.fovMode,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.inertia (number):
        if (oldProps.inertia !== newProps.inertia) {
            updates.push({
                propertyName: 'inertia',
                value: newProps.inertia,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.inputs.
        // BabylonjsCoreCamera.interaxialDistance (number):
        if (oldProps.interaxialDistance !== newProps.interaxialDistance) {
            updates.push({
                propertyName: 'interaxialDistance',
                value: newProps.interaxialDistance,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.isIntermediate (boolean):
        if (oldProps.isIntermediate !== newProps.isIntermediate) {
            updates.push({
                propertyName: 'isIntermediate',
                value: newProps.isIntermediate,
                type: 'boolean'
            });
        }
        // BabylonjsCoreCamera.isRigCamera (boolean):
        if (oldProps.isRigCamera !== newProps.isRigCamera) {
            updates.push({
                propertyName: 'isRigCamera',
                value: newProps.isRigCamera,
                type: 'boolean'
            });
        }
        // BabylonjsCoreCamera.isStereoscopicSideBySide (boolean):
        if (oldProps.isStereoscopicSideBySide !== newProps.isStereoscopicSideBySide) {
            updates.push({
                propertyName: 'isStereoscopicSideBySide',
                value: newProps.isStereoscopicSideBySide,
                type: 'boolean'
            });
        }
        // BabylonjsCoreCamera.layerMask (number):
        if (oldProps.layerMask !== newProps.layerMask) {
            updates.push({
                propertyName: 'layerMask',
                value: newProps.layerMask,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.maxZ (number):
        if (oldProps.maxZ !== newProps.maxZ) {
            updates.push({
                propertyName: 'maxZ',
                value: newProps.maxZ,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.minZ (number):
        if (oldProps.minZ !== newProps.minZ) {
            updates.push({
                propertyName: 'minZ',
                value: newProps.minZ,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.mode (number):
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
        // BabylonjsCoreCamera.orthoBottom (number):
        if (oldProps.orthoBottom !== newProps.orthoBottom) {
            updates.push({
                propertyName: 'orthoBottom',
                value: newProps.orthoBottom,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.orthoLeft (number):
        if (oldProps.orthoLeft !== newProps.orthoLeft) {
            updates.push({
                propertyName: 'orthoLeft',
                value: newProps.orthoLeft,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.orthoRight (number):
        if (oldProps.orthoRight !== newProps.orthoRight) {
            updates.push({
                propertyName: 'orthoRight',
                value: newProps.orthoRight,
                type: 'number'
            });
        }
        // BabylonjsCoreCamera.orthoTop (number):
        if (oldProps.orthoTop !== newProps.orthoTop) {
            updates.push({
                propertyName: 'orthoTop',
                value: newProps.orthoTop,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCoreCamera.outputRenderTarget.
        // BabylonjsCoreCamera.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreCamera.rigParent.
        // BabylonjsCoreCamera.upVector (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.upVector && (!oldProps.upVector || !oldProps.upVector.equals(newProps.upVector))) {
            updates.push({
                propertyName: 'upVector',
                value: newProps.upVector,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreViewport' property (not coded) BabylonjsCoreCamera.viewport.
        // BabylonjsCoreCamera.setCameraRigMode of type '(mode?: number, rigParams?: any) => void':
        if (oldProps.setCameraRigMode !== newProps.setCameraRigMode) {
            updates.push({
                propertyName: 'setCameraRigMode',
                value: newProps.setCameraRigMode,
                type: '(mode?: number, rigParams?: any) => void'
            });
        }
        // BabylonjsCoreCamera.setCameraRigParameter of type '(name?: string, value?: any) => void':
        if (oldProps.setCameraRigParameter !== newProps.setCameraRigParameter) {
            updates.push({
                propertyName: 'setCameraRigParameter',
                value: newProps.setCameraRigParameter,
                type: '(name?: string, value?: any) => void'
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
        "isNode": true,
        "className": "FiberCamera"
    };
}

export class FiberTargetCameraPropsHandler implements PropsHandler<BabylonjsCoreTargetCamera, FiberTargetCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTargetCamera, oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreTargetCamera.cameraDirection (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.cameraDirection && (!oldProps.cameraDirection || !oldProps.cameraDirection.equals(newProps.cameraDirection))) {
            updates.push({
                propertyName: 'cameraDirection',
                value: newProps.cameraDirection,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreTargetCamera.cameraRotation.
        // TODO: type: 'any' property (not coded) BabylonjsCoreTargetCamera.lockedTarget.
        // BabylonjsCoreTargetCamera.noRotationConstraint (boolean):
        if (oldProps.noRotationConstraint !== newProps.noRotationConstraint) {
            updates.push({
                propertyName: 'noRotationConstraint',
                value: newProps.noRotationConstraint,
                type: 'boolean'
            });
        }
        // BabylonjsCoreTargetCamera.rotation (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.rotation && (!oldProps.rotation || !oldProps.rotation.equals(newProps.rotation))) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreTargetCamera.rotationQuaternion.
        // BabylonjsCoreTargetCamera.speed (number):
        if (oldProps.speed !== newProps.speed) {
            updates.push({
                propertyName: 'speed',
                value: newProps.speed,
                type: 'number'
            });
        }
        // BabylonjsCoreTargetCamera.updateUpVectorFromRotation (boolean):
        if (oldProps.updateUpVectorFromRotation !== newProps.updateUpVectorFromRotation) {
            updates.push({
                propertyName: 'updateUpVectorFromRotation',
                value: newProps.updateUpVectorFromRotation,
                type: 'boolean'
            });
        }
        // BabylonjsCoreTargetCamera.setTarget of type '(target?: BabylonjsCoreVector3) => void':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BabylonjsCoreVector3) => void'
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
        "isNode": true,
        "className": "FiberTargetCamera"
    };
}

export class FiberFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreFreeCamera, FiberFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFreeCamera, oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreFreeCamera.angularSensibility (number):
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // BabylonjsCoreFreeCamera.applyGravity (boolean):
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFreeCamera.checkCollisions (boolean):
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFreeCamera.collisionMask (number):
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BabylonjsCoreFreeCamera.ellipsoid (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreFreeCamera.ellipsoidOffset (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreFreeCameraInputsManager' property (not coded) BabylonjsCoreFreeCamera.inputs.
        // BabylonjsCoreFreeCamera.keysDown (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysDown && (!oldProps.keysDown || oldProps.keysDown.length !== newProps.keysDown.length)) {
            updates.push({
                propertyName: 'keysDown',
                value: newProps.keysDown,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFreeCamera.keysLeft (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysLeft && (!oldProps.keysLeft || oldProps.keysLeft.length !== newProps.keysLeft.length)) {
            updates.push({
                propertyName: 'keysLeft',
                value: newProps.keysLeft,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFreeCamera.keysRight (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysRight && (!oldProps.keysRight || oldProps.keysRight.length !== newProps.keysRight.length)) {
            updates.push({
                propertyName: 'keysRight',
                value: newProps.keysRight,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFreeCamera.keysUp (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysUp && (!oldProps.keysUp || oldProps.keysUp.length !== newProps.keysUp.length)) {
            updates.push({
                propertyName: 'keysUp',
                value: newProps.keysUp,
                type: 'number[]'
            });
        }
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
        "isNode": true,
        "className": "FiberFreeCamera"
    };
}

export class FiberTouchCameraPropsHandler implements PropsHandler<BabylonjsCoreTouchCamera, FiberTouchCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreTouchCamera, oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreTouchCamera.touchAngularSensibility (number):
        if (oldProps.touchAngularSensibility !== newProps.touchAngularSensibility) {
            updates.push({
                propertyName: 'touchAngularSensibility',
                value: newProps.touchAngularSensibility,
                type: 'number'
            });
        }
        // BabylonjsCoreTouchCamera.touchMoveSensibility (number):
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
        "isNode": true,
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<BabylonjsCoreUniversalCamera, FiberUniversalCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreUniversalCamera, oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreUniversalCamera.gamepadAngularSensibility (number):
        if (oldProps.gamepadAngularSensibility !== newProps.gamepadAngularSensibility) {
            updates.push({
                propertyName: 'gamepadAngularSensibility',
                value: newProps.gamepadAngularSensibility,
                type: 'number'
            });
        }
        // BabylonjsCoreUniversalCamera.gamepadMoveSensibility (number):
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<BabylonjsCoreDeviceOrientationCamera, FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDeviceOrientationCamera, oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreDeviceOrientationCamera.disablePointerInputWhenUsingDeviceOrientation (boolean):
        if (oldProps.disablePointerInputWhenUsingDeviceOrientation !== newProps.disablePointerInputWhenUsingDeviceOrientation) {
            updates.push({
                propertyName: 'disablePointerInputWhenUsingDeviceOrientation',
                value: newProps.disablePointerInputWhenUsingDeviceOrientation,
                type: 'boolean'
            });
        }
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<BabylonjsCoreWebVRFreeCamera, FiberWebVRFreeCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebVRFreeCamera, oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreWebVRController[]' property (not coded) BabylonjsCoreWebVRFreeCamera.controllers.
        // BabylonjsCoreWebVRFreeCamera.devicePosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.devicePosition && (!oldProps.devicePosition || !oldProps.devicePosition.equals(newProps.devicePosition))) {
            updates.push({
                propertyName: 'devicePosition',
                value: newProps.devicePosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreWebVRFreeCamera.deviceRotationQuaternion.
        // BabylonjsCoreWebVRFreeCamera.deviceScaleFactor (number):
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
        // TODO: type: 'BabylonjsCoreDevicePose' property (not coded) BabylonjsCoreWebVRFreeCamera.rawPose.
        // BabylonjsCoreWebVRFreeCamera.rigParenting (boolean):
        if (oldProps.rigParenting !== newProps.rigParenting) {
            updates.push({
                propertyName: 'rigParenting',
                value: newProps.rigParenting,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.updateCacheCalled.
        // TODO: type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.webVROptions.
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
        "isNode": true,
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<BabylonjsCoreWebXRCamera, FiberWebXRCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreWebXRCamera, oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreWebXRCamera.compensateOnFirstFrame (boolean):
        if (oldProps.compensateOnFirstFrame !== newProps.compensateOnFirstFrame) {
            updates.push({
                propertyName: 'compensateOnFirstFrame',
                value: newProps.compensateOnFirstFrame,
                type: 'boolean'
            });
        }
        // BabylonjsCoreWebXRCamera.setTransformationFromNonVRCamera of type '(otherCamera?: BabylonjsCoreCamera, resetToBaseReferenceSpace?: boolean) => void':
        if (oldProps.setTransformationFromNonVRCamera !== newProps.setTransformationFromNonVRCamera) {
            updates.push({
                propertyName: 'setTransformationFromNonVRCamera',
                value: newProps.setTransformationFromNonVRCamera,
                type: '(otherCamera?: BabylonjsCoreCamera, resetToBaseReferenceSpace?: boolean) => void'
            });
        }
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

export class FiberArcRotateCameraPropsHandler implements PropsHandler<BabylonjsCoreArcRotateCamera, FiberArcRotateCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcRotateCamera, oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreArcRotateCamera.allowUpsideDown (boolean):
        if (oldProps.allowUpsideDown !== newProps.allowUpsideDown) {
            updates.push({
                propertyName: 'allowUpsideDown',
                value: newProps.allowUpsideDown,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.alpha (number):
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.angularSensibilityX (number):
        if (oldProps.angularSensibilityX !== newProps.angularSensibilityX) {
            updates.push({
                propertyName: 'angularSensibilityX',
                value: newProps.angularSensibilityX,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.angularSensibilityY (number):
        if (oldProps.angularSensibilityY !== newProps.angularSensibilityY) {
            updates.push({
                propertyName: 'angularSensibilityY',
                value: newProps.angularSensibilityY,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.beta (number):
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.checkCollisions (boolean):
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.collisionRadius (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.collisionRadius && (!oldProps.collisionRadius || !oldProps.collisionRadius.equals(newProps.collisionRadius))) {
            updates.push({
                propertyName: 'collisionRadius',
                value: newProps.collisionRadius,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreArcRotateCamera.inertialAlphaOffset (number):
        if (oldProps.inertialAlphaOffset !== newProps.inertialAlphaOffset) {
            updates.push({
                propertyName: 'inertialAlphaOffset',
                value: newProps.inertialAlphaOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.inertialBetaOffset (number):
        if (oldProps.inertialBetaOffset !== newProps.inertialBetaOffset) {
            updates.push({
                propertyName: 'inertialBetaOffset',
                value: newProps.inertialBetaOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.inertialPanningX (number):
        if (oldProps.inertialPanningX !== newProps.inertialPanningX) {
            updates.push({
                propertyName: 'inertialPanningX',
                value: newProps.inertialPanningX,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.inertialPanningY (number):
        if (oldProps.inertialPanningY !== newProps.inertialPanningY) {
            updates.push({
                propertyName: 'inertialPanningY',
                value: newProps.inertialPanningY,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.inertialRadiusOffset (number):
        if (oldProps.inertialRadiusOffset !== newProps.inertialRadiusOffset) {
            updates.push({
                propertyName: 'inertialRadiusOffset',
                value: newProps.inertialRadiusOffset,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreArcRotateCameraInputsManager' property (not coded) BabylonjsCoreArcRotateCamera.inputs.
        // BabylonjsCoreArcRotateCamera.keysDown (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysDown && (!oldProps.keysDown || oldProps.keysDown.length !== newProps.keysDown.length)) {
            updates.push({
                propertyName: 'keysDown',
                value: newProps.keysDown,
                type: 'number[]'
            });
        }
        // BabylonjsCoreArcRotateCamera.keysLeft (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysLeft && (!oldProps.keysLeft || oldProps.keysLeft.length !== newProps.keysLeft.length)) {
            updates.push({
                propertyName: 'keysLeft',
                value: newProps.keysLeft,
                type: 'number[]'
            });
        }
        // BabylonjsCoreArcRotateCamera.keysRight (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysRight && (!oldProps.keysRight || oldProps.keysRight.length !== newProps.keysRight.length)) {
            updates.push({
                propertyName: 'keysRight',
                value: newProps.keysRight,
                type: 'number[]'
            });
        }
        // BabylonjsCoreArcRotateCamera.keysUp (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysUp && (!oldProps.keysUp || oldProps.keysUp.length !== newProps.keysUp.length)) {
            updates.push({
                propertyName: 'keysUp',
                value: newProps.keysUp,
                type: 'number[]'
            });
        }
        // BabylonjsCoreArcRotateCamera.lowerAlphaLimit (number):
        if (oldProps.lowerAlphaLimit !== newProps.lowerAlphaLimit) {
            updates.push({
                propertyName: 'lowerAlphaLimit',
                value: newProps.lowerAlphaLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.lowerBetaLimit (number):
        if (oldProps.lowerBetaLimit !== newProps.lowerBetaLimit) {
            updates.push({
                propertyName: 'lowerBetaLimit',
                value: newProps.lowerBetaLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.lowerRadiusLimit (number):
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
        // BabylonjsCoreArcRotateCamera.panningAxis (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.panningAxis && (!oldProps.panningAxis || !oldProps.panningAxis.equals(newProps.panningAxis))) {
            updates.push({
                propertyName: 'panningAxis',
                value: newProps.panningAxis,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreArcRotateCamera.panningDistanceLimit (number):
        if (oldProps.panningDistanceLimit !== newProps.panningDistanceLimit) {
            updates.push({
                propertyName: 'panningDistanceLimit',
                value: newProps.panningDistanceLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.panningInertia (number):
        if (oldProps.panningInertia !== newProps.panningInertia) {
            updates.push({
                propertyName: 'panningInertia',
                value: newProps.panningInertia,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.panningOriginTarget (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.panningOriginTarget && (!oldProps.panningOriginTarget || !oldProps.panningOriginTarget.equals(newProps.panningOriginTarget))) {
            updates.push({
                propertyName: 'panningOriginTarget',
                value: newProps.panningOriginTarget,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreArcRotateCamera.panningSensibility (number):
        if (oldProps.panningSensibility !== newProps.panningSensibility) {
            updates.push({
                propertyName: 'panningSensibility',
                value: newProps.panningSensibility,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.pinchDeltaPercentage (number):
        if (oldProps.pinchDeltaPercentage !== newProps.pinchDeltaPercentage) {
            updates.push({
                propertyName: 'pinchDeltaPercentage',
                value: newProps.pinchDeltaPercentage,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.pinchPrecision (number):
        if (oldProps.pinchPrecision !== newProps.pinchPrecision) {
            updates.push({
                propertyName: 'pinchPrecision',
                value: newProps.pinchPrecision,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.pinchToPanMaxDistance (number):
        if (oldProps.pinchToPanMaxDistance !== newProps.pinchToPanMaxDistance) {
            updates.push({
                propertyName: 'pinchToPanMaxDistance',
                value: newProps.pinchToPanMaxDistance,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreArcRotateCamera.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.target (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.target && (!oldProps.target || !oldProps.target.equals(newProps.target))) {
            updates.push({
                propertyName: 'target',
                value: newProps.target,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreArcRotateCamera.targetScreenOffset.
        // BabylonjsCoreArcRotateCamera.upperAlphaLimit (number):
        if (oldProps.upperAlphaLimit !== newProps.upperAlphaLimit) {
            updates.push({
                propertyName: 'upperAlphaLimit',
                value: newProps.upperAlphaLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.upperBetaLimit (number):
        if (oldProps.upperBetaLimit !== newProps.upperBetaLimit) {
            updates.push({
                propertyName: 'upperBetaLimit',
                value: newProps.upperBetaLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.upperRadiusLimit (number):
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.upVector (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.upVector && (!oldProps.upVector || !oldProps.upVector.equals(newProps.upVector))) {
            updates.push({
                propertyName: 'upVector',
                value: newProps.upVector,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreArcRotateCamera.useAutoRotationBehavior (boolean):
        if (oldProps.useAutoRotationBehavior !== newProps.useAutoRotationBehavior) {
            updates.push({
                propertyName: 'useAutoRotationBehavior',
                value: newProps.useAutoRotationBehavior,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.useBouncingBehavior (boolean):
        if (oldProps.useBouncingBehavior !== newProps.useBouncingBehavior) {
            updates.push({
                propertyName: 'useBouncingBehavior',
                value: newProps.useBouncingBehavior,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.useFramingBehavior (boolean):
        if (oldProps.useFramingBehavior !== newProps.useFramingBehavior) {
            updates.push({
                propertyName: 'useFramingBehavior',
                value: newProps.useFramingBehavior,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.useInputToRestoreState (boolean):
        if (oldProps.useInputToRestoreState !== newProps.useInputToRestoreState) {
            updates.push({
                propertyName: 'useInputToRestoreState',
                value: newProps.useInputToRestoreState,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.useNaturalPinchZoom (boolean):
        if (oldProps.useNaturalPinchZoom !== newProps.useNaturalPinchZoom) {
            updates.push({
                propertyName: 'useNaturalPinchZoom',
                value: newProps.useNaturalPinchZoom,
                type: 'boolean'
            });
        }
        // BabylonjsCoreArcRotateCamera.wheelDeltaPercentage (number):
        if (oldProps.wheelDeltaPercentage !== newProps.wheelDeltaPercentage) {
            updates.push({
                propertyName: 'wheelDeltaPercentage',
                value: newProps.wheelDeltaPercentage,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.wheelPrecision (number):
        if (oldProps.wheelPrecision !== newProps.wheelPrecision) {
            updates.push({
                propertyName: 'wheelPrecision',
                value: newProps.wheelPrecision,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.zoomOnFactor (number):
        if (oldProps.zoomOnFactor !== newProps.zoomOnFactor) {
            updates.push({
                propertyName: 'zoomOnFactor',
                value: newProps.zoomOnFactor,
                type: 'number'
            });
        }
        // BabylonjsCoreArcRotateCamera.setPosition of type '(position?: BabylonjsCoreVector3) => void':
        if (oldProps.setPosition !== newProps.setPosition) {
            updates.push({
                propertyName: 'setPosition',
                value: newProps.setPosition,
                type: '(position?: BabylonjsCoreVector3) => void'
            });
        }
        // BabylonjsCoreArcRotateCamera.setTarget of type '(target?: BabylonjsCoreAbstractMesh | BabylonjsCoreVector3, toBoundingCenter?: boolean, allowSamePosition?: boolean) => void':
        if (oldProps.setTarget !== newProps.setTarget) {
            updates.push({
                propertyName: 'setTarget',
                value: newProps.setTarget,
                type: '(target?: BabylonjsCoreAbstractMesh | BabylonjsCoreVector3, toBoundingCenter?: boolean, allowSamePosition?: boolean) => void'
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
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
        "isNode": true,
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberFlyCameraPropsHandler implements PropsHandler<BabylonjsCoreFlyCamera, FiberFlyCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFlyCamera, oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreFlyCamera.angularSensibility (number):
        if (oldProps.angularSensibility !== newProps.angularSensibility) {
            updates.push({
                propertyName: 'angularSensibility',
                value: newProps.angularSensibility,
                type: 'number'
            });
        }
        // BabylonjsCoreFlyCamera.applyGravity (boolean):
        if (oldProps.applyGravity !== newProps.applyGravity) {
            updates.push({
                propertyName: 'applyGravity',
                value: newProps.applyGravity,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFlyCamera.bankedTurn (boolean):
        if (oldProps.bankedTurn !== newProps.bankedTurn) {
            updates.push({
                propertyName: 'bankedTurn',
                value: newProps.bankedTurn,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFlyCamera.bankedTurnLimit (number):
        if (oldProps.bankedTurnLimit !== newProps.bankedTurnLimit) {
            updates.push({
                propertyName: 'bankedTurnLimit',
                value: newProps.bankedTurnLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFlyCamera.bankedTurnMultiplier (number):
        if (oldProps.bankedTurnMultiplier !== newProps.bankedTurnMultiplier) {
            updates.push({
                propertyName: 'bankedTurnMultiplier',
                value: newProps.bankedTurnMultiplier,
                type: 'number'
            });
        }
        // BabylonjsCoreFlyCamera.cameraDirection (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.cameraDirection && (!oldProps.cameraDirection || !oldProps.cameraDirection.equals(newProps.cameraDirection))) {
            updates.push({
                propertyName: 'cameraDirection',
                value: newProps.cameraDirection,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreFlyCamera.checkCollisions (boolean):
        if (oldProps.checkCollisions !== newProps.checkCollisions) {
            updates.push({
                propertyName: 'checkCollisions',
                value: newProps.checkCollisions,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFlyCamera.collisionMask (number):
        if (oldProps.collisionMask !== newProps.collisionMask) {
            updates.push({
                propertyName: 'collisionMask',
                value: newProps.collisionMask,
                type: 'number'
            });
        }
        // BabylonjsCoreFlyCamera.ellipsoid (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoid && (!oldProps.ellipsoid || !oldProps.ellipsoid.equals(newProps.ellipsoid))) {
            updates.push({
                propertyName: 'ellipsoid',
                value: newProps.ellipsoid,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreFlyCamera.ellipsoidOffset (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.ellipsoidOffset && (!oldProps.ellipsoidOffset || !oldProps.ellipsoidOffset.equals(newProps.ellipsoidOffset))) {
            updates.push({
                propertyName: 'ellipsoidOffset',
                value: newProps.ellipsoidOffset,
                type: 'BabylonjsCoreVector3'
            });
        }
        // TODO: type: 'BabylonjsCoreFlyCameraInputsManager' property (not coded) BabylonjsCoreFlyCamera.inputs.
        // BabylonjsCoreFlyCamera.keysBackward (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysBackward && (!oldProps.keysBackward || oldProps.keysBackward.length !== newProps.keysBackward.length)) {
            updates.push({
                propertyName: 'keysBackward',
                value: newProps.keysBackward,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFlyCamera.keysDown (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysDown && (!oldProps.keysDown || oldProps.keysDown.length !== newProps.keysDown.length)) {
            updates.push({
                propertyName: 'keysDown',
                value: newProps.keysDown,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFlyCamera.keysForward (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysForward && (!oldProps.keysForward || oldProps.keysForward.length !== newProps.keysForward.length)) {
            updates.push({
                propertyName: 'keysForward',
                value: newProps.keysForward,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFlyCamera.keysLeft (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysLeft && (!oldProps.keysLeft || oldProps.keysLeft.length !== newProps.keysLeft.length)) {
            updates.push({
                propertyName: 'keysLeft',
                value: newProps.keysLeft,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFlyCamera.keysRight (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysRight && (!oldProps.keysRight || oldProps.keysRight.length !== newProps.keysRight.length)) {
            updates.push({
                propertyName: 'keysRight',
                value: newProps.keysRight,
                type: 'number[]'
            });
        }
        // BabylonjsCoreFlyCamera.keysUp (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.keysUp && (!oldProps.keysUp || oldProps.keysUp.length !== newProps.keysUp.length)) {
            updates.push({
                propertyName: 'keysUp',
                value: newProps.keysUp,
                type: 'number[]'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreFlyCamera.onCollide of type '(collidedMesh: BabylonjsCoreAbstractMesh) => void/fn':
        if (oldProps.onCollide === undefined && oldProps.onCollide !== newProps.onCollide) {
            updates.push({
                propertyName: 'onCollide',
                value: newProps.onCollide,
                type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void'
            });
        }
        // BabylonjsCoreFlyCamera.rollCorrect (number):
        if (oldProps.rollCorrect !== newProps.rollCorrect) {
            updates.push({
                propertyName: 'rollCorrect',
                value: newProps.rollCorrect,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreFlyCamera.rotationQuaternion.
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
        "isNode": true,
        "className": "FiberFlyCamera"
    };
}

export class FiberFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreFollowCamera, FiberFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFollowCamera, oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreFollowCamera.cameraAcceleration (number):
        if (oldProps.cameraAcceleration !== newProps.cameraAcceleration) {
            updates.push({
                propertyName: 'cameraAcceleration',
                value: newProps.cameraAcceleration,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.heightOffset (number):
        if (oldProps.heightOffset !== newProps.heightOffset) {
            updates.push({
                propertyName: 'heightOffset',
                value: newProps.heightOffset,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreFollowCameraInputsManager' property (not coded) BabylonjsCoreFollowCamera.inputs.
        // TODO: type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreFollowCamera.lockedTarget.
        // BabylonjsCoreFollowCamera.lowerHeightOffsetLimit (number):
        if (oldProps.lowerHeightOffsetLimit !== newProps.lowerHeightOffsetLimit) {
            updates.push({
                propertyName: 'lowerHeightOffsetLimit',
                value: newProps.lowerHeightOffsetLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.lowerRadiusLimit (number):
        if (oldProps.lowerRadiusLimit !== newProps.lowerRadiusLimit) {
            updates.push({
                propertyName: 'lowerRadiusLimit',
                value: newProps.lowerRadiusLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.lowerRotationOffsetLimit (number):
        if (oldProps.lowerRotationOffsetLimit !== newProps.lowerRotationOffsetLimit) {
            updates.push({
                propertyName: 'lowerRotationOffsetLimit',
                value: newProps.lowerRotationOffsetLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.maxCameraSpeed (number):
        if (oldProps.maxCameraSpeed !== newProps.maxCameraSpeed) {
            updates.push({
                propertyName: 'maxCameraSpeed',
                value: newProps.maxCameraSpeed,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.rotationOffset (number):
        if (oldProps.rotationOffset !== newProps.rotationOffset) {
            updates.push({
                propertyName: 'rotationOffset',
                value: newProps.rotationOffset,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.upperHeightOffsetLimit (number):
        if (oldProps.upperHeightOffsetLimit !== newProps.upperHeightOffsetLimit) {
            updates.push({
                propertyName: 'upperHeightOffsetLimit',
                value: newProps.upperHeightOffsetLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.upperRadiusLimit (number):
        if (oldProps.upperRadiusLimit !== newProps.upperRadiusLimit) {
            updates.push({
                propertyName: 'upperRadiusLimit',
                value: newProps.upperRadiusLimit,
                type: 'number'
            });
        }
        // BabylonjsCoreFollowCamera.upperRotationOffsetLimit (number):
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
        "isNode": true,
        "className": "FiberFollowCamera"
    };
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<BabylonjsCoreArcFollowCamera, FiberArcFollowCameraProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreArcFollowCamera, oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreArcFollowCamera.alpha (number):
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BabylonjsCoreArcFollowCamera.beta (number):
        if (oldProps.beta !== newProps.beta) {
            updates.push({
                propertyName: 'beta',
                value: newProps.beta,
                type: 'number'
            });
        }
        // BabylonjsCoreArcFollowCamera.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreArcFollowCamera.target.
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
export class FiberTiledBox implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
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
export class FiberTiledPlane implements HasPropsHandlers<BabylonjsCoreMesh, FiberMeshProps> {
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
        "className": "FiberDecal"
    };
}

export class FiberMaterialPropsHandler implements PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMaterial, oldProps: FiberMaterialProps, newProps: FiberMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreMaterial.alpha (number):
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BabylonjsCoreMaterial.alphaMode (number):
        if (oldProps.alphaMode !== newProps.alphaMode) {
            updates.push({
                propertyName: 'alphaMode',
                value: newProps.alphaMode,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreMaterial.animations.
        // BabylonjsCoreMaterial.backFaceCulling (boolean):
        if (oldProps.backFaceCulling !== newProps.backFaceCulling) {
            updates.push({
                propertyName: 'backFaceCulling',
                value: newProps.backFaceCulling,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.checkReadyOnEveryCall (boolean):
        if (oldProps.checkReadyOnEveryCall !== newProps.checkReadyOnEveryCall) {
            updates.push({
                propertyName: 'checkReadyOnEveryCall',
                value: newProps.checkReadyOnEveryCall,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.checkReadyOnlyOnce (boolean):
        if (oldProps.checkReadyOnlyOnce !== newProps.checkReadyOnlyOnce) {
            updates.push({
                propertyName: 'checkReadyOnlyOnce',
                value: newProps.checkReadyOnlyOnce,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.depthFunction (number):
        if (oldProps.depthFunction !== newProps.depthFunction) {
            updates.push({
                propertyName: 'depthFunction',
                value: newProps.depthFunction,
                type: 'number'
            });
        }
        // BabylonjsCoreMaterial.disableDepthWrite (boolean):
        if (oldProps.disableDepthWrite !== newProps.disableDepthWrite) {
            updates.push({
                propertyName: 'disableDepthWrite',
                value: newProps.disableDepthWrite,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.doNotSerialize (boolean):
        if (oldProps.doNotSerialize !== newProps.doNotSerialize) {
            updates.push({
                propertyName: 'doNotSerialize',
                value: newProps.doNotSerialize,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.fillMode (number):
        if (oldProps.fillMode !== newProps.fillMode) {
            updates.push({
                propertyName: 'fillMode',
                value: newProps.fillMode,
                type: 'number'
            });
        }
        // BabylonjsCoreMaterial.fogEnabled (boolean):
        if (oldProps.fogEnabled !== newProps.fogEnabled) {
            updates.push({
                propertyName: 'fogEnabled',
                value: newProps.fogEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.forceDepthWrite (boolean):
        if (oldProps.forceDepthWrite !== newProps.forceDepthWrite) {
            updates.push({
                propertyName: 'forceDepthWrite',
                value: newProps.forceDepthWrite,
                type: 'boolean'
            });
        }
        // TODO: type: '() => BabylonjsCoreSmartArray<BabylonjsCoreRenderTargetTexture>' property (not coded) BabylonjsCoreMaterial.getRenderTargetTextures.
        // BabylonjsCoreMaterial.id (string):
        if (oldProps.id !== newProps.id) {
            updates.push({
                propertyName: 'id',
                value: newProps.id,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreMaterial.inspectableCustomProperties.
        // TODO: type: '{ [id: string]: BabylonjsCoreAbstractMesh; }' property (not coded) BabylonjsCoreMaterial.meshMap.
        // TODO: type: 'any' property (not coded) BabylonjsCoreMaterial.metadata.
        // BabylonjsCoreMaterial.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsCoreMaterial.needDepthPrePass (boolean):
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
        // BabylonjsCoreMaterial.pointsCloud (boolean):
        if (oldProps.pointsCloud !== newProps.pointsCloud) {
            updates.push({
                propertyName: 'pointsCloud',
                value: newProps.pointsCloud,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.pointSize (number):
        if (oldProps.pointSize !== newProps.pointSize) {
            updates.push({
                propertyName: 'pointSize',
                value: newProps.pointSize,
                type: 'number'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreMaterial.releaseVertexArrayObject.
        // TODO: type: 'any' property (not coded) BabylonjsCoreMaterial.reservedDataStore.
        // BabylonjsCoreMaterial.separateCullingPass (boolean):
        if (oldProps.separateCullingPass !== newProps.separateCullingPass) {
            updates.push({
                propertyName: 'separateCullingPass',
                value: newProps.separateCullingPass,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.sideOrientation (number):
        if (oldProps.sideOrientation !== newProps.sideOrientation) {
            updates.push({
                propertyName: 'sideOrientation',
                value: newProps.sideOrientation,
                type: 'number'
            });
        }
        // BabylonjsCoreMaterial.state (string):
        if (oldProps.state !== newProps.state) {
            updates.push({
                propertyName: 'state',
                value: newProps.state,
                type: 'string'
            });
        }
        // BabylonjsCoreMaterial.uniqueId (number):
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BabylonjsCoreMaterial.wireframe (boolean):
        if (oldProps.wireframe !== newProps.wireframe) {
            updates.push({
                propertyName: 'wireframe',
                value: newProps.wireframe,
                type: 'boolean'
            });
        }
        // BabylonjsCoreMaterial.zOffset (number):
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
        // TODO: type: 'any' property (not coded) BabylonjsCoreShaderMaterial.shaderPath.
        // BabylonjsCoreShaderMaterial.setArray2 of type '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setArray2 !== newProps.setArray2) {
            updates.push({
                propertyName: 'setArray2',
                value: newProps.setArray2,
                type: '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setArray3 of type '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setArray3 !== newProps.setArray3) {
            updates.push({
                propertyName: 'setArray3',
                value: newProps.setArray3,
                type: '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setArray4 of type '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setArray4 !== newProps.setArray4) {
            updates.push({
                propertyName: 'setArray4',
                value: newProps.setArray4,
                type: '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setColor3 of type '(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreShaderMaterial':
        if (oldProps.setColor3 !== newProps.setColor3) {
            updates.push({
                propertyName: 'setColor3',
                value: newProps.setColor3,
                type: '(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setColor3Array of type '(name?: string, value?: BabylonjsCoreColor3[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setColor3Array !== newProps.setColor3Array) {
            updates.push({
                propertyName: 'setColor3Array',
                value: newProps.setColor3Array,
                type: '(name?: string, value?: BabylonjsCoreColor3[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setColor4 of type '(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreShaderMaterial':
        if (oldProps.setColor4 !== newProps.setColor4) {
            updates.push({
                propertyName: 'setColor4',
                value: newProps.setColor4,
                type: '(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setColor4Array of type '(name?: string, value?: BabylonjsCoreColor4[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setColor4Array !== newProps.setColor4Array) {
            updates.push({
                propertyName: 'setColor4Array',
                value: newProps.setColor4Array,
                type: '(name?: string, value?: BabylonjsCoreColor4[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setFloat of type '(name?: string, value?: number) => BabylonjsCoreShaderMaterial':
        if (oldProps.setFloat !== newProps.setFloat) {
            updates.push({
                propertyName: 'setFloat',
                value: newProps.setFloat,
                type: '(name?: string, value?: number) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setFloats of type '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setFloats !== newProps.setFloats) {
            updates.push({
                propertyName: 'setFloats',
                value: newProps.setFloats,
                type: '(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setInt of type '(name?: string, value?: number) => BabylonjsCoreShaderMaterial':
        if (oldProps.setInt !== newProps.setInt) {
            updates.push({
                propertyName: 'setInt',
                value: newProps.setInt,
                type: '(name?: string, value?: number) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setMatrices of type '(name?: string, value?: BabylonjsCoreMatrix[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setMatrices !== newProps.setMatrices) {
            updates.push({
                propertyName: 'setMatrices',
                value: newProps.setMatrices,
                type: '(name?: string, value?: BabylonjsCoreMatrix[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setMatrix of type '(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreShaderMaterial':
        if (oldProps.setMatrix !== newProps.setMatrix) {
            updates.push({
                propertyName: 'setMatrix',
                value: newProps.setMatrix,
                type: '(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setMatrix2x2 of type '(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial':
        if (oldProps.setMatrix2x2 !== newProps.setMatrix2x2) {
            updates.push({
                propertyName: 'setMatrix2x2',
                value: newProps.setMatrix2x2,
                type: '(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setMatrix3x3 of type '(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial':
        if (oldProps.setMatrix3x3 !== newProps.setMatrix3x3) {
            updates.push({
                propertyName: 'setMatrix3x3',
                value: newProps.setMatrix3x3,
                type: '(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setTexture of type '(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreShaderMaterial':
        if (oldProps.setTexture !== newProps.setTexture) {
            updates.push({
                propertyName: 'setTexture',
                value: newProps.setTexture,
                type: '(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setTextureArray of type '(name?: string, textures?: BabylonjsCoreTexture[]) => BabylonjsCoreShaderMaterial':
        if (oldProps.setTextureArray !== newProps.setTextureArray) {
            updates.push({
                propertyName: 'setTextureArray',
                value: newProps.setTextureArray,
                type: '(name?: string, textures?: BabylonjsCoreTexture[]) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setVector2 of type '(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreShaderMaterial':
        if (oldProps.setVector2 !== newProps.setVector2) {
            updates.push({
                propertyName: 'setVector2',
                value: newProps.setVector2,
                type: '(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setVector3 of type '(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreShaderMaterial':
        if (oldProps.setVector3 !== newProps.setVector3) {
            updates.push({
                propertyName: 'setVector3',
                value: newProps.setVector3,
                type: '(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreShaderMaterial'
            });
        }
        // BabylonjsCoreShaderMaterial.setVector4 of type '(name?: string, value?: BabylonjsCoreVector4) => BabylonjsCoreShaderMaterial':
        if (oldProps.setVector4 !== newProps.setVector4) {
            updates.push({
                propertyName: 'setVector4',
                value: newProps.setVector4,
                type: '(name?: string, value?: BabylonjsCoreVector4) => BabylonjsCoreShaderMaterial'
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
        // TODO: type: 'BabylonjsCoreMaterial[]' property (not coded) BabylonjsCoreMultiMaterial.subMaterials.
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
        // BabylonjsCorePushMaterial.allowShaderHotSwapping (boolean):
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
        // BabylonjsCoreStandardMaterial.alphaCutOff (number):
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BabylonjsCoreStandardMaterial.ambientColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.ambientTexture.
        // BabylonjsCoreStandardMaterial.AmbientTextureEnabled (boolean):
        if (oldProps.AmbientTextureEnabled !== newProps.AmbientTextureEnabled) {
            updates.push({
                propertyName: 'AmbientTextureEnabled',
                value: newProps.AmbientTextureEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.bumpTexture.
        // BabylonjsCoreStandardMaterial.BumpTextureEnabled (boolean):
        if (oldProps.BumpTextureEnabled !== newProps.BumpTextureEnabled) {
            updates.push({
                propertyName: 'BumpTextureEnabled',
                value: newProps.BumpTextureEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreStandardMaterial.cameraColorCurves.
        // BabylonjsCoreStandardMaterial.cameraColorCurvesEnabled (boolean):
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.cameraColorGradingEnabled (boolean):
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.cameraColorGradingTexture.
        // BabylonjsCoreStandardMaterial.cameraContrast (number):
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BabylonjsCoreStandardMaterial.cameraExposure (number):
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BabylonjsCoreStandardMaterial.cameraToneMappingEnabled (boolean):
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.ColorGradingTextureEnabled (boolean):
        if (oldProps.ColorGradingTextureEnabled !== newProps.ColorGradingTextureEnabled) {
            updates.push({
                propertyName: 'ColorGradingTextureEnabled',
                value: newProps.ColorGradingTextureEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: '(shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCoreStandardMaterialDefines) => string' property (not coded) BabylonjsCoreStandardMaterial.customShaderNameResolve.
        // BabylonjsCoreStandardMaterial.diffuseColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.diffuseColor && (!oldProps.diffuseColor || !oldProps.diffuseColor.equals(newProps.diffuseColor))) {
            updates.push({
                propertyName: 'diffuseColor',
                value: newProps.diffuseColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.diffuseFresnelParameters.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.diffuseTexture.
        // BabylonjsCoreStandardMaterial.DiffuseTextureEnabled (boolean):
        if (oldProps.DiffuseTextureEnabled !== newProps.DiffuseTextureEnabled) {
            updates.push({
                propertyName: 'DiffuseTextureEnabled',
                value: newProps.DiffuseTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.disableLighting (boolean):
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.emissiveColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.emissiveFresnelParameters.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.emissiveTexture.
        // BabylonjsCoreStandardMaterial.EmissiveTextureEnabled (boolean):
        if (oldProps.EmissiveTextureEnabled !== newProps.EmissiveTextureEnabled) {
            updates.push({
                propertyName: 'EmissiveTextureEnabled',
                value: newProps.EmissiveTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.FresnelEnabled (boolean):
        if (oldProps.FresnelEnabled !== newProps.FresnelEnabled) {
            updates.push({
                propertyName: 'FresnelEnabled',
                value: newProps.FresnelEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreStandardMaterial.imageProcessingConfiguration.
        // BabylonjsCoreStandardMaterial.indexOfRefraction (number):
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // BabylonjsCoreStandardMaterial.invertNormalMapX (boolean):
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.invertNormalMapY (boolean):
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.invertRefractionY (boolean):
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.lightmapTexture.
        // BabylonjsCoreStandardMaterial.LightmapTextureEnabled (boolean):
        if (oldProps.LightmapTextureEnabled !== newProps.LightmapTextureEnabled) {
            updates.push({
                propertyName: 'LightmapTextureEnabled',
                value: newProps.LightmapTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.linkEmissiveWithDiffuse (boolean):
        if (oldProps.linkEmissiveWithDiffuse !== newProps.linkEmissiveWithDiffuse) {
            updates.push({
                propertyName: 'linkEmissiveWithDiffuse',
                value: newProps.linkEmissiveWithDiffuse,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.maxSimultaneousLights (number):
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.opacityFresnelParameters.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.opacityTexture.
        // BabylonjsCoreStandardMaterial.OpacityTextureEnabled (boolean):
        if (oldProps.OpacityTextureEnabled !== newProps.OpacityTextureEnabled) {
            updates.push({
                propertyName: 'OpacityTextureEnabled',
                value: newProps.OpacityTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.parallaxScaleBias (number):
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.reflectionFresnelParameters.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.reflectionTexture.
        // BabylonjsCoreStandardMaterial.ReflectionTextureEnabled (boolean):
        if (oldProps.ReflectionTextureEnabled !== newProps.ReflectionTextureEnabled) {
            updates.push({
                propertyName: 'ReflectionTextureEnabled',
                value: newProps.ReflectionTextureEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.refractionFresnelParameters.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.refractionTexture.
        // BabylonjsCoreStandardMaterial.RefractionTextureEnabled (boolean):
        if (oldProps.RefractionTextureEnabled !== newProps.RefractionTextureEnabled) {
            updates.push({
                propertyName: 'RefractionTextureEnabled',
                value: newProps.RefractionTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.roughness (number):
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // BabylonjsCoreStandardMaterial.specularColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.specularColor && (!oldProps.specularColor || !oldProps.specularColor.equals(newProps.specularColor))) {
            updates.push({
                propertyName: 'specularColor',
                value: newProps.specularColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreStandardMaterial.specularPower (number):
        if (oldProps.specularPower !== newProps.specularPower) {
            updates.push({
                propertyName: 'specularPower',
                value: newProps.specularPower,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.specularTexture.
        // BabylonjsCoreStandardMaterial.SpecularTextureEnabled (boolean):
        if (oldProps.SpecularTextureEnabled !== newProps.SpecularTextureEnabled) {
            updates.push({
                propertyName: 'SpecularTextureEnabled',
                value: newProps.SpecularTextureEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.twoSidedLighting (boolean):
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useAlphaFromDiffuseTexture (boolean):
        if (oldProps.useAlphaFromDiffuseTexture !== newProps.useAlphaFromDiffuseTexture) {
            updates.push({
                propertyName: 'useAlphaFromDiffuseTexture',
                value: newProps.useAlphaFromDiffuseTexture,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useEmissiveAsIllumination (boolean):
        if (oldProps.useEmissiveAsIllumination !== newProps.useEmissiveAsIllumination) {
            updates.push({
                propertyName: 'useEmissiveAsIllumination',
                value: newProps.useEmissiveAsIllumination,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useGlossinessFromSpecularMapAlpha (boolean):
        if (oldProps.useGlossinessFromSpecularMapAlpha !== newProps.useGlossinessFromSpecularMapAlpha) {
            updates.push({
                propertyName: 'useGlossinessFromSpecularMapAlpha',
                value: newProps.useGlossinessFromSpecularMapAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useLightmapAsShadowmap (boolean):
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useLogarithmicDepth (boolean):
        if (oldProps.useLogarithmicDepth !== newProps.useLogarithmicDepth) {
            updates.push({
                propertyName: 'useLogarithmicDepth',
                value: newProps.useLogarithmicDepth,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useObjectSpaceNormalMap (boolean):
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useParallax (boolean):
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useParallaxOcclusion (boolean):
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useReflectionFresnelFromSpecular (boolean):
        if (oldProps.useReflectionFresnelFromSpecular !== newProps.useReflectionFresnelFromSpecular) {
            updates.push({
                propertyName: 'useReflectionFresnelFromSpecular',
                value: newProps.useReflectionFresnelFromSpecular,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useReflectionOverAlpha (boolean):
        if (oldProps.useReflectionOverAlpha !== newProps.useReflectionOverAlpha) {
            updates.push({
                propertyName: 'useReflectionOverAlpha',
                value: newProps.useReflectionOverAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCoreStandardMaterial.useSpecularOverAlpha (boolean):
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
        // BabylonjsCoreBackgroundMaterial._perceptualColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps._perceptualColor && (!oldProps._perceptualColor || !oldProps._perceptualColor.equals(newProps._perceptualColor))) {
            updates.push({
                propertyName: '_perceptualColor',
                value: newProps._perceptualColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorCurves.
        // BabylonjsCoreBackgroundMaterial.cameraColorCurvesEnabled (boolean):
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.cameraColorGradingEnabled (boolean):
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorGradingTexture.
        // BabylonjsCoreBackgroundMaterial.cameraContrast (number):
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.cameraExposure (number):
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.cameraToneMappingEnabled (boolean):
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.diffuseTexture.
        // BabylonjsCoreBackgroundMaterial.enableNoise (boolean):
        if (oldProps.enableNoise !== newProps.enableNoise) {
            updates.push({
                propertyName: 'enableNoise',
                value: newProps.enableNoise,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.fovMultiplier (number):
        if (oldProps.fovMultiplier !== newProps.fovMultiplier) {
            updates.push({
                propertyName: 'fovMultiplier',
                value: newProps.fovMultiplier,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreBackgroundMaterial.imageProcessingConfiguration.
        // BabylonjsCoreBackgroundMaterial.maxSimultaneousLights (number):
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.opacityFresnel (boolean):
        if (oldProps.opacityFresnel !== newProps.opacityFresnel) {
            updates.push({
                propertyName: 'opacityFresnel',
                value: newProps.opacityFresnel,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.primaryColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.primaryColor && (!oldProps.primaryColor || !oldProps.primaryColor.equals(newProps.primaryColor))) {
            updates.push({
                propertyName: 'primaryColor',
                value: newProps.primaryColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreBackgroundMaterial.primaryColorHighlightLevel (number):
        if (oldProps.primaryColorHighlightLevel !== newProps.primaryColorHighlightLevel) {
            updates.push({
                propertyName: 'primaryColorHighlightLevel',
                value: newProps.primaryColorHighlightLevel,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.primaryColorShadowLevel (number):
        if (oldProps.primaryColorShadowLevel !== newProps.primaryColorShadowLevel) {
            updates.push({
                propertyName: 'primaryColorShadowLevel',
                value: newProps.primaryColorShadowLevel,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionAmount (number):
        if (oldProps.reflectionAmount !== newProps.reflectionAmount) {
            updates.push({
                propertyName: 'reflectionAmount',
                value: newProps.reflectionAmount,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionBlur (number):
        if (oldProps.reflectionBlur !== newProps.reflectionBlur) {
            updates.push({
                propertyName: 'reflectionBlur',
                value: newProps.reflectionBlur,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionFalloffDistance (number):
        if (oldProps.reflectionFalloffDistance !== newProps.reflectionFalloffDistance) {
            updates.push({
                propertyName: 'reflectionFalloffDistance',
                value: newProps.reflectionFalloffDistance,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionFresnel (boolean):
        if (oldProps.reflectionFresnel !== newProps.reflectionFresnel) {
            updates.push({
                propertyName: 'reflectionFresnel',
                value: newProps.reflectionFresnel,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionReflectance0 (number):
        if (oldProps.reflectionReflectance0 !== newProps.reflectionReflectance0) {
            updates.push({
                propertyName: 'reflectionReflectance0',
                value: newProps.reflectionReflectance0,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionReflectance90 (number):
        if (oldProps.reflectionReflectance90 !== newProps.reflectionReflectance90) {
            updates.push({
                propertyName: 'reflectionReflectance90',
                value: newProps.reflectionReflectance90,
                type: 'number'
            });
        }
        // BabylonjsCoreBackgroundMaterial.reflectionStandardFresnelWeight (number):
        if (oldProps.reflectionStandardFresnelWeight !== newProps.reflectionStandardFresnelWeight) {
            updates.push({
                propertyName: 'reflectionStandardFresnelWeight',
                value: newProps.reflectionStandardFresnelWeight,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.reflectionTexture.
        // BabylonjsCoreBackgroundMaterial.sceneCenter (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.sceneCenter && (!oldProps.sceneCenter || !oldProps.sceneCenter.equals(newProps.sceneCenter))) {
            updates.push({
                propertyName: 'sceneCenter',
                value: newProps.sceneCenter,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreBackgroundMaterial.shadowLevel (number):
        if (oldProps.shadowLevel !== newProps.shadowLevel) {
            updates.push({
                propertyName: 'shadowLevel',
                value: newProps.shadowLevel,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreIShadowLight[]' property (not coded) BabylonjsCoreBackgroundMaterial.shadowLights.
        // BabylonjsCoreBackgroundMaterial.switchToBGR (boolean):
        if (oldProps.switchToBGR !== newProps.switchToBGR) {
            updates.push({
                propertyName: 'switchToBGR',
                value: newProps.switchToBGR,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.useEquirectangularFOV (boolean):
        if (oldProps.useEquirectangularFOV !== newProps.useEquirectangularFOV) {
            updates.push({
                propertyName: 'useEquirectangularFOV',
                value: newProps.useEquirectangularFOV,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBackgroundMaterial.useRGBColor (boolean):
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
        // TODO: type: '(shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCorePBRMaterialDefines) => string' property (not coded) BabylonjsCorePBRBaseMaterial.customShaderNameResolve.
        // TODO: type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugFactor.
        // TODO: type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugLimit.
        // BabylonjsCorePBRBaseMaterial.debugMode (number):
        if (oldProps.debugMode !== newProps.debugMode) {
            updates.push({
                propertyName: 'debugMode',
                value: newProps.debugMode,
                type: 'number'
            });
        }
        // BabylonjsCorePBRBaseMaterial.transparencyMode (number):
        if (oldProps.transparencyMode !== newProps.transparencyMode) {
            updates.push({
                propertyName: 'transparencyMode',
                value: newProps.transparencyMode,
                type: 'number'
            });
        }
        // BabylonjsCorePBRBaseMaterial.useLogarithmicDepth (boolean):
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
 * https://doc.babylonjs.com/how_to/physically_based_rendering
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
        // BabylonjsCorePBRBaseSimpleMaterial.alphaCutOff (number):
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BabylonjsCorePBRBaseSimpleMaterial.disableLighting (boolean):
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRBaseSimpleMaterial.doubleSided (boolean):
        if (oldProps.doubleSided !== newProps.doubleSided) {
            updates.push({
                propertyName: 'doubleSided',
                value: newProps.doubleSided,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRBaseSimpleMaterial.emissiveColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.emissiveTexture.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.environmentTexture.
        // BabylonjsCorePBRBaseSimpleMaterial.invertNormalMapX (boolean):
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRBaseSimpleMaterial.invertNormalMapY (boolean):
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.lightmapTexture.
        // BabylonjsCorePBRBaseSimpleMaterial.maxSimultaneousLights (number):
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.normalTexture.
        // BabylonjsCorePBRBaseSimpleMaterial.occlusionStrength (number):
        if (oldProps.occlusionStrength !== newProps.occlusionStrength) {
            updates.push({
                propertyName: 'occlusionStrength',
                value: newProps.occlusionStrength,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.occlusionTexture.
        // BabylonjsCorePBRBaseSimpleMaterial.useLightmapAsShadowmap (boolean):
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
        // BabylonjsCorePBRMetallicRoughnessMaterial.baseColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.baseColor && (!oldProps.baseColor || !oldProps.baseColor.equals(newProps.baseColor))) {
            updates.push({
                propertyName: 'baseColor',
                value: newProps.baseColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.baseTexture.
        // BabylonjsCorePBRMetallicRoughnessMaterial.metallic (number):
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.metallicRoughnessTexture.
        // BabylonjsCorePBRMetallicRoughnessMaterial.roughness (number):
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
        // BabylonjsCorePBRSpecularGlossinessMaterial.diffuseColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.diffuseColor && (!oldProps.diffuseColor || !oldProps.diffuseColor.equals(newProps.diffuseColor))) {
            updates.push({
                propertyName: 'diffuseColor',
                value: newProps.diffuseColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.diffuseTexture.
        // BabylonjsCorePBRSpecularGlossinessMaterial.glossiness (number):
        if (oldProps.glossiness !== newProps.glossiness) {
            updates.push({
                propertyName: 'glossiness',
                value: newProps.glossiness,
                type: 'number'
            });
        }
        // BabylonjsCorePBRSpecularGlossinessMaterial.specularColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.specularColor && (!oldProps.specularColor || !oldProps.specularColor.equals(newProps.specularColor))) {
            updates.push({
                propertyName: 'specularColor',
                value: newProps.specularColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.specularGlossinessTexture.
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
        // BabylonjsCorePBRMaterial.albedoColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.albedoColor && (!oldProps.albedoColor || !oldProps.albedoColor.equals(newProps.albedoColor))) {
            updates.push({
                propertyName: 'albedoColor',
                value: newProps.albedoColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.albedoTexture.
        // BabylonjsCorePBRMaterial.alphaCutOff (number):
        if (oldProps.alphaCutOff !== newProps.alphaCutOff) {
            updates.push({
                propertyName: 'alphaCutOff',
                value: newProps.alphaCutOff,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.ambientColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.ambientColor && (!oldProps.ambientColor || !oldProps.ambientColor.equals(newProps.ambientColor))) {
            updates.push({
                propertyName: 'ambientColor',
                value: newProps.ambientColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.ambientTexture.
        // BabylonjsCorePBRMaterial.ambientTextureImpactOnAnalyticalLights (number):
        if (oldProps.ambientTextureImpactOnAnalyticalLights !== newProps.ambientTextureImpactOnAnalyticalLights) {
            updates.push({
                propertyName: 'ambientTextureImpactOnAnalyticalLights',
                value: newProps.ambientTextureImpactOnAnalyticalLights,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.ambientTextureStrength (number):
        if (oldProps.ambientTextureStrength !== newProps.ambientTextureStrength) {
            updates.push({
                propertyName: 'ambientTextureStrength',
                value: newProps.ambientTextureStrength,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.bumpTexture.
        // TODO: type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCorePBRMaterial.cameraColorCurves.
        // BabylonjsCorePBRMaterial.cameraColorCurvesEnabled (boolean):
        if (oldProps.cameraColorCurvesEnabled !== newProps.cameraColorCurvesEnabled) {
            updates.push({
                propertyName: 'cameraColorCurvesEnabled',
                value: newProps.cameraColorCurvesEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.cameraColorGradingEnabled (boolean):
        if (oldProps.cameraColorGradingEnabled !== newProps.cameraColorGradingEnabled) {
            updates.push({
                propertyName: 'cameraColorGradingEnabled',
                value: newProps.cameraColorGradingEnabled,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.cameraColorGradingTexture.
        // BabylonjsCorePBRMaterial.cameraContrast (number):
        if (oldProps.cameraContrast !== newProps.cameraContrast) {
            updates.push({
                propertyName: 'cameraContrast',
                value: newProps.cameraContrast,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.cameraExposure (number):
        if (oldProps.cameraExposure !== newProps.cameraExposure) {
            updates.push({
                propertyName: 'cameraExposure',
                value: newProps.cameraExposure,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.cameraToneMappingEnabled (boolean):
        if (oldProps.cameraToneMappingEnabled !== newProps.cameraToneMappingEnabled) {
            updates.push({
                propertyName: 'cameraToneMappingEnabled',
                value: newProps.cameraToneMappingEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.directIntensity (number):
        if (oldProps.directIntensity !== newProps.directIntensity) {
            updates.push({
                propertyName: 'directIntensity',
                value: newProps.directIntensity,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.disableBumpMap (boolean):
        if (oldProps.disableBumpMap !== newProps.disableBumpMap) {
            updates.push({
                propertyName: 'disableBumpMap',
                value: newProps.disableBumpMap,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.disableLighting (boolean):
        if (oldProps.disableLighting !== newProps.disableLighting) {
            updates.push({
                propertyName: 'disableLighting',
                value: newProps.disableLighting,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.emissiveColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.emissiveColor && (!oldProps.emissiveColor || !oldProps.emissiveColor.equals(newProps.emissiveColor))) {
            updates.push({
                propertyName: 'emissiveColor',
                value: newProps.emissiveColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCorePBRMaterial.emissiveIntensity (number):
        if (oldProps.emissiveIntensity !== newProps.emissiveIntensity) {
            updates.push({
                propertyName: 'emissiveIntensity',
                value: newProps.emissiveIntensity,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.emissiveTexture.
        // BabylonjsCorePBRMaterial.enableSpecularAntiAliasing (boolean):
        if (oldProps.enableSpecularAntiAliasing !== newProps.enableSpecularAntiAliasing) {
            updates.push({
                propertyName: 'enableSpecularAntiAliasing',
                value: newProps.enableSpecularAntiAliasing,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.environmentBRDFTexture.
        // BabylonjsCorePBRMaterial.environmentIntensity (number):
        if (oldProps.environmentIntensity !== newProps.environmentIntensity) {
            updates.push({
                propertyName: 'environmentIntensity',
                value: newProps.environmentIntensity,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.forceAlphaTest (boolean):
        if (oldProps.forceAlphaTest !== newProps.forceAlphaTest) {
            updates.push({
                propertyName: 'forceAlphaTest',
                value: newProps.forceAlphaTest,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.forceIrradianceInFragment (boolean):
        if (oldProps.forceIrradianceInFragment !== newProps.forceIrradianceInFragment) {
            updates.push({
                propertyName: 'forceIrradianceInFragment',
                value: newProps.forceIrradianceInFragment,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.forceNormalForward (boolean):
        if (oldProps.forceNormalForward !== newProps.forceNormalForward) {
            updates.push({
                propertyName: 'forceNormalForward',
                value: newProps.forceNormalForward,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCorePBRMaterial.imageProcessingConfiguration.
        // BabylonjsCorePBRMaterial.indexOfRefraction (number):
        if (oldProps.indexOfRefraction !== newProps.indexOfRefraction) {
            updates.push({
                propertyName: 'indexOfRefraction',
                value: newProps.indexOfRefraction,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.invertNormalMapX (boolean):
        if (oldProps.invertNormalMapX !== newProps.invertNormalMapX) {
            updates.push({
                propertyName: 'invertNormalMapX',
                value: newProps.invertNormalMapX,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.invertNormalMapY (boolean):
        if (oldProps.invertNormalMapY !== newProps.invertNormalMapY) {
            updates.push({
                propertyName: 'invertNormalMapY',
                value: newProps.invertNormalMapY,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.invertRefractionY (boolean):
        if (oldProps.invertRefractionY !== newProps.invertRefractionY) {
            updates.push({
                propertyName: 'invertRefractionY',
                value: newProps.invertRefractionY,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.lightmapTexture.
        // BabylonjsCorePBRMaterial.linkRefractionWithTransparency (boolean):
        if (oldProps.linkRefractionWithTransparency !== newProps.linkRefractionWithTransparency) {
            updates.push({
                propertyName: 'linkRefractionWithTransparency',
                value: newProps.linkRefractionWithTransparency,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.maxSimultaneousLights (number):
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.metallic (number):
        if (oldProps.metallic !== newProps.metallic) {
            updates.push({
                propertyName: 'metallic',
                value: newProps.metallic,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.metallicF0Factor (number):
        if (oldProps.metallicF0Factor !== newProps.metallicF0Factor) {
            updates.push({
                propertyName: 'metallicF0Factor',
                value: newProps.metallicF0Factor,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.metallicTexture.
        // BabylonjsCorePBRMaterial.microSurface (number):
        if (oldProps.microSurface !== newProps.microSurface) {
            updates.push({
                propertyName: 'microSurface',
                value: newProps.microSurface,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.microSurfaceTexture.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.opacityTexture.
        // BabylonjsCorePBRMaterial.parallaxScaleBias (number):
        if (oldProps.parallaxScaleBias !== newProps.parallaxScaleBias) {
            updates.push({
                propertyName: 'parallaxScaleBias',
                value: newProps.parallaxScaleBias,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.reflectionColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.reflectionColor && (!oldProps.reflectionColor || !oldProps.reflectionColor.equals(newProps.reflectionColor))) {
            updates.push({
                propertyName: 'reflectionColor',
                value: newProps.reflectionColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectionTexture.
        // BabylonjsCorePBRMaterial.reflectivityColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.reflectivityColor && (!oldProps.reflectivityColor || !oldProps.reflectivityColor.equals(newProps.reflectivityColor))) {
            updates.push({
                propertyName: 'reflectivityColor',
                value: newProps.reflectivityColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectivityTexture.
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.refractionTexture.
        // BabylonjsCorePBRMaterial.roughness (number):
        if (oldProps.roughness !== newProps.roughness) {
            updates.push({
                propertyName: 'roughness',
                value: newProps.roughness,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.specularIntensity (number):
        if (oldProps.specularIntensity !== newProps.specularIntensity) {
            updates.push({
                propertyName: 'specularIntensity',
                value: newProps.specularIntensity,
                type: 'number'
            });
        }
        // BabylonjsCorePBRMaterial.twoSidedLighting (boolean):
        if (oldProps.twoSidedLighting !== newProps.twoSidedLighting) {
            updates.push({
                propertyName: 'twoSidedLighting',
                value: newProps.twoSidedLighting,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.unlit (boolean):
        if (oldProps.unlit !== newProps.unlit) {
            updates.push({
                propertyName: 'unlit',
                value: newProps.unlit,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useAlphaFresnel (boolean):
        if (oldProps.useAlphaFresnel !== newProps.useAlphaFresnel) {
            updates.push({
                propertyName: 'useAlphaFresnel',
                value: newProps.useAlphaFresnel,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useAlphaFromAlbedoTexture (boolean):
        if (oldProps.useAlphaFromAlbedoTexture !== newProps.useAlphaFromAlbedoTexture) {
            updates.push({
                propertyName: 'useAlphaFromAlbedoTexture',
                value: newProps.useAlphaFromAlbedoTexture,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useAmbientInGrayScale (boolean):
        if (oldProps.useAmbientInGrayScale !== newProps.useAmbientInGrayScale) {
            updates.push({
                propertyName: 'useAmbientInGrayScale',
                value: newProps.useAmbientInGrayScale,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useAmbientOcclusionFromMetallicTextureRed (boolean):
        if (oldProps.useAmbientOcclusionFromMetallicTextureRed !== newProps.useAmbientOcclusionFromMetallicTextureRed) {
            updates.push({
                propertyName: 'useAmbientOcclusionFromMetallicTextureRed',
                value: newProps.useAmbientOcclusionFromMetallicTextureRed,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useAutoMicroSurfaceFromReflectivityMap (boolean):
        if (oldProps.useAutoMicroSurfaceFromReflectivityMap !== newProps.useAutoMicroSurfaceFromReflectivityMap) {
            updates.push({
                propertyName: 'useAutoMicroSurfaceFromReflectivityMap',
                value: newProps.useAutoMicroSurfaceFromReflectivityMap,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useGLTFLightFalloff (boolean):
        if (oldProps.useGLTFLightFalloff !== newProps.useGLTFLightFalloff) {
            updates.push({
                propertyName: 'useGLTFLightFalloff',
                value: newProps.useGLTFLightFalloff,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useHorizonOcclusion (boolean):
        if (oldProps.useHorizonOcclusion !== newProps.useHorizonOcclusion) {
            updates.push({
                propertyName: 'useHorizonOcclusion',
                value: newProps.useHorizonOcclusion,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useLightmapAsShadowmap (boolean):
        if (oldProps.useLightmapAsShadowmap !== newProps.useLightmapAsShadowmap) {
            updates.push({
                propertyName: 'useLightmapAsShadowmap',
                value: newProps.useLightmapAsShadowmap,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useLinearAlphaFresnel (boolean):
        if (oldProps.useLinearAlphaFresnel !== newProps.useLinearAlphaFresnel) {
            updates.push({
                propertyName: 'useLinearAlphaFresnel',
                value: newProps.useLinearAlphaFresnel,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useMetallicF0FactorFromMetallicTexture (boolean):
        if (oldProps.useMetallicF0FactorFromMetallicTexture !== newProps.useMetallicF0FactorFromMetallicTexture) {
            updates.push({
                propertyName: 'useMetallicF0FactorFromMetallicTexture',
                value: newProps.useMetallicF0FactorFromMetallicTexture,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useMetallnessFromMetallicTextureBlue (boolean):
        if (oldProps.useMetallnessFromMetallicTextureBlue !== newProps.useMetallnessFromMetallicTextureBlue) {
            updates.push({
                propertyName: 'useMetallnessFromMetallicTextureBlue',
                value: newProps.useMetallnessFromMetallicTextureBlue,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useMicroSurfaceFromReflectivityMapAlpha (boolean):
        if (oldProps.useMicroSurfaceFromReflectivityMapAlpha !== newProps.useMicroSurfaceFromReflectivityMapAlpha) {
            updates.push({
                propertyName: 'useMicroSurfaceFromReflectivityMapAlpha',
                value: newProps.useMicroSurfaceFromReflectivityMapAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useObjectSpaceNormalMap (boolean):
        if (oldProps.useObjectSpaceNormalMap !== newProps.useObjectSpaceNormalMap) {
            updates.push({
                propertyName: 'useObjectSpaceNormalMap',
                value: newProps.useObjectSpaceNormalMap,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useParallax (boolean):
        if (oldProps.useParallax !== newProps.useParallax) {
            updates.push({
                propertyName: 'useParallax',
                value: newProps.useParallax,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useParallaxOcclusion (boolean):
        if (oldProps.useParallaxOcclusion !== newProps.useParallaxOcclusion) {
            updates.push({
                propertyName: 'useParallaxOcclusion',
                value: newProps.useParallaxOcclusion,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.usePhysicalLightFalloff (boolean):
        if (oldProps.usePhysicalLightFalloff !== newProps.usePhysicalLightFalloff) {
            updates.push({
                propertyName: 'usePhysicalLightFalloff',
                value: newProps.usePhysicalLightFalloff,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useRadianceOcclusion (boolean):
        if (oldProps.useRadianceOcclusion !== newProps.useRadianceOcclusion) {
            updates.push({
                propertyName: 'useRadianceOcclusion',
                value: newProps.useRadianceOcclusion,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useRadianceOverAlpha (boolean):
        if (oldProps.useRadianceOverAlpha !== newProps.useRadianceOverAlpha) {
            updates.push({
                propertyName: 'useRadianceOverAlpha',
                value: newProps.useRadianceOverAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useRoughnessFromMetallicTextureAlpha (boolean):
        if (oldProps.useRoughnessFromMetallicTextureAlpha !== newProps.useRoughnessFromMetallicTextureAlpha) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureAlpha',
                value: newProps.useRoughnessFromMetallicTextureAlpha,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useRoughnessFromMetallicTextureGreen (boolean):
        if (oldProps.useRoughnessFromMetallicTextureGreen !== newProps.useRoughnessFromMetallicTextureGreen) {
            updates.push({
                propertyName: 'useRoughnessFromMetallicTextureGreen',
                value: newProps.useRoughnessFromMetallicTextureGreen,
                type: 'boolean'
            });
        }
        // BabylonjsCorePBRMaterial.useSpecularOverAlpha (boolean):
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
 * https://doc.babylonjs.com/how_to/physically_based_rendering
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

export class FiberNodeMaterialPropsHandler implements PropsHandler<BabylonjsCoreNodeMaterial, FiberNodeMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreNodeMaterial, oldProps: FiberNodeMaterialProps, newProps: FiberNodeMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreNodeMaterialBlock[]' property (not coded) BabylonjsCoreNodeMaterial.attachedBlocks.
        // TODO: type: 'any' property (not coded) BabylonjsCoreNodeMaterial.BJSNODEMATERIALEDITOR.
        // TODO: type: 'any' property (not coded) BabylonjsCoreNodeMaterial.editorData.
        // BabylonjsCoreNodeMaterial.ignoreAlpha (boolean):
        if (oldProps.ignoreAlpha !== newProps.ignoreAlpha) {
            updates.push({
                propertyName: 'ignoreAlpha',
                value: newProps.ignoreAlpha,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreNodeMaterial.imageProcessingConfiguration.
        // BabylonjsCoreNodeMaterial.maxSimultaneousLights (number):
        if (oldProps.maxSimultaneousLights !== newProps.maxSimultaneousLights) {
            updates.push({
                propertyName: 'maxSimultaneousLights',
                value: newProps.maxSimultaneousLights,
                type: 'number'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreNodeMaterial.onBuildObservable of type 'BabylonjsCoreObservable<BabylonjsCoreNodeMaterial>/fn':
        if (oldProps.onBuildObservable === undefined && oldProps.onBuildObservable !== newProps.onBuildObservable) {
            updates.push({
                propertyName: 'onBuildObservable',
                value: newProps.onBuildObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreNodeMaterial>'
            });
        }
        // TODO: type: 'BabylonjsCoreINodeMaterialOptions' property (not coded) BabylonjsCoreNodeMaterial.options.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a node based material built by assembling shader blocks
 *
 * This code has been generated
 */
export class FiberNodeMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodeMaterialPropsHandler(),
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
        "libraryLocation": "NodeMaterial",
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

export class FiberFluentMaterialPropsHandler implements PropsHandler<BabylonjsGuiFluentMaterial, FiberFluentMaterialProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiFluentMaterial, oldProps: FiberFluentMaterialProps, newProps: FiberFluentMaterialProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiFluentMaterial.albedoColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.albedoColor && (!oldProps.albedoColor || !oldProps.albedoColor.equals(newProps.albedoColor))) {
            updates.push({
                propertyName: 'albedoColor',
                value: newProps.albedoColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsGuiFluentMaterial.albedoTexture.
        // BabylonjsGuiFluentMaterial.alpha (number):
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.borderMinValue (number):
        if (oldProps.borderMinValue !== newProps.borderMinValue) {
            updates.push({
                propertyName: 'borderMinValue',
                value: newProps.borderMinValue,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.borderWidth (number):
        if (oldProps.borderWidth !== newProps.borderWidth) {
            updates.push({
                propertyName: 'borderWidth',
                value: newProps.borderWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.edgeSmoothingValue (number):
        if (oldProps.edgeSmoothingValue !== newProps.edgeSmoothingValue) {
            updates.push({
                propertyName: 'edgeSmoothingValue',
                value: newProps.edgeSmoothingValue,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.hoverColor of BabylonjsCoreColor4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.hoverColor && (!oldProps.hoverColor || oldProps.hoverColor.r !== newProps.hoverColor.r || oldProps.hoverColor.g !== newProps.hoverColor.g || oldProps.hoverColor.b !== newProps.hoverColor.b || oldProps.hoverColor.a !== newProps.hoverColor.a)) {
            updates.push({
                propertyName: 'hoverColor',
                value: newProps.hoverColor,
                type: 'BabylonjsCoreColor4'
            });
        }
        // BabylonjsGuiFluentMaterial.hoverPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.hoverPosition && (!oldProps.hoverPosition || !oldProps.hoverPosition.equals(newProps.hoverPosition))) {
            updates.push({
                propertyName: 'hoverPosition',
                value: newProps.hoverPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsGuiFluentMaterial.hoverRadius (number):
        if (oldProps.hoverRadius !== newProps.hoverRadius) {
            updates.push({
                propertyName: 'hoverRadius',
                value: newProps.hoverRadius,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.innerGlowColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.innerGlowColor && (!oldProps.innerGlowColor || !oldProps.innerGlowColor.equals(newProps.innerGlowColor))) {
            updates.push({
                propertyName: 'innerGlowColor',
                value: newProps.innerGlowColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsGuiFluentMaterial.innerGlowColorIntensity (number):
        if (oldProps.innerGlowColorIntensity !== newProps.innerGlowColorIntensity) {
            updates.push({
                propertyName: 'innerGlowColorIntensity',
                value: newProps.innerGlowColorIntensity,
                type: 'number'
            });
        }
        // BabylonjsGuiFluentMaterial.renderBorders (boolean):
        if (oldProps.renderBorders !== newProps.renderBorders) {
            updates.push({
                propertyName: 'renderBorders',
                value: newProps.renderBorders,
                type: 'boolean'
            });
        }
        // BabylonjsGuiFluentMaterial.renderHoverLight (boolean):
        if (oldProps.renderHoverLight !== newProps.renderHoverLight) {
            updates.push({
                propertyName: 'renderHoverLight',
                value: newProps.renderHoverLight,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render controls with fluent desgin
 *
 * This code has been generated
 */
export class FiberFluentMaterial implements HasPropsHandlers<BabylonjsCoreMaterial, FiberMaterialProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMaterial, FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFluentMaterialPropsHandler(),
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
        "libraryLocation": "FluentMaterial",
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
        "className": "FiberFluentMaterial"
    };
}

export class FiberLightPropsHandler implements PropsHandler<BabylonjsCoreLight, FiberLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreLight, oldProps: FiberLightProps, newProps: FiberLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreLight.diffuse (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.diffuse && (!oldProps.diffuse || !oldProps.diffuse.equals(newProps.diffuse))) {
            updates.push({
                propertyName: 'diffuse',
                value: newProps.diffuse,
                type: 'BabylonjsCoreColor3'
            });
        }
        // TODO: type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.excludedMeshes.
        // BabylonjsCoreLight.excludeWithLayerMask (number):
        if (oldProps.excludeWithLayerMask !== newProps.excludeWithLayerMask) {
            updates.push({
                propertyName: 'excludeWithLayerMask',
                value: newProps.excludeWithLayerMask,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.falloffType (number):
        if (oldProps.falloffType !== newProps.falloffType) {
            updates.push({
                propertyName: 'falloffType',
                value: newProps.falloffType,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.includedOnlyMeshes.
        // BabylonjsCoreLight.includeOnlyWithLayerMask (number):
        if (oldProps.includeOnlyWithLayerMask !== newProps.includeOnlyWithLayerMask) {
            updates.push({
                propertyName: 'includeOnlyWithLayerMask',
                value: newProps.includeOnlyWithLayerMask,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.intensity (number):
        if (oldProps.intensity !== newProps.intensity) {
            updates.push({
                propertyName: 'intensity',
                value: newProps.intensity,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.intensityMode (number):
        if (oldProps.intensityMode !== newProps.intensityMode) {
            updates.push({
                propertyName: 'intensityMode',
                value: newProps.intensityMode,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.lightmapMode (number):
        if (oldProps.lightmapMode !== newProps.lightmapMode) {
            updates.push({
                propertyName: 'lightmapMode',
                value: newProps.lightmapMode,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.range (number):
        if (oldProps.range !== newProps.range) {
            updates.push({
                propertyName: 'range',
                value: newProps.range,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.renderPriority (number):
        if (oldProps.renderPriority !== newProps.renderPriority) {
            updates.push({
                propertyName: 'renderPriority',
                value: newProps.renderPriority,
                type: 'number'
            });
        }
        // BabylonjsCoreLight.shadowEnabled (boolean):
        if (oldProps.shadowEnabled !== newProps.shadowEnabled) {
            updates.push({
                propertyName: 'shadowEnabled',
                value: newProps.shadowEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreLight.specular (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.specular && (!oldProps.specular || !oldProps.specular.equals(newProps.specular))) {
            updates.push({
                propertyName: 'specular',
                value: newProps.specular,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreLight.setEnabled of type '(value?: boolean) => void':
        if (oldProps.setEnabled !== newProps.setEnabled) {
            updates.push({
                propertyName: 'setEnabled',
                value: newProps.setEnabled,
                type: '(value?: boolean) => void'
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
        "isNode": true,
        "className": "FiberLight"
    };
}

export class FiberShadowLightPropsHandler implements PropsHandler<BabylonjsCoreShadowLight, FiberShadowLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreShadowLight, oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: '(viewMatrix: BabylonjsCoreMatrix, renderList: BabylonjsCoreAbstractMesh[], result: BabylonjsCoreMatrix) => void' property (not coded) BabylonjsCoreShadowLight.customProjectionMatrixBuilder.
        // BabylonjsCoreShadowLight.direction (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreShadowLight.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreShadowLight.shadowMaxZ (number):
        if (oldProps.shadowMaxZ !== newProps.shadowMaxZ) {
            updates.push({
                propertyName: 'shadowMaxZ',
                value: newProps.shadowMaxZ,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowLight.shadowMinZ (number):
        if (oldProps.shadowMinZ !== newProps.shadowMinZ) {
            updates.push({
                propertyName: 'shadowMinZ',
                value: newProps.shadowMinZ,
                type: 'number'
            });
        }
        // BabylonjsCoreShadowLight.transformedDirection (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.transformedDirection && (!oldProps.transformedDirection || !oldProps.transformedDirection.equals(newProps.transformedDirection))) {
            updates.push({
                propertyName: 'transformedDirection',
                value: newProps.transformedDirection,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreShadowLight.transformedPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.transformedPosition && (!oldProps.transformedPosition || !oldProps.transformedPosition.equals(newProps.transformedPosition))) {
            updates.push({
                propertyName: 'transformedPosition',
                value: newProps.transformedPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreShadowLight.setDirectionToTarget of type '(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreShadowLight.setShadowProjectionMatrix of type '(matrix?: BabylonjsCoreMatrix, viewMatrix?: BabylonjsCoreMatrix, renderList?: BabylonjsCoreAbstractMesh[]) => BabylonjsCoreIShadowLight':
        if (oldProps.setShadowProjectionMatrix !== newProps.setShadowProjectionMatrix) {
            updates.push({
                propertyName: 'setShadowProjectionMatrix',
                value: newProps.setShadowProjectionMatrix,
                type: '(matrix?: BabylonjsCoreMatrix, viewMatrix?: BabylonjsCoreMatrix, renderList?: BabylonjsCoreAbstractMesh[]) => BabylonjsCoreIShadowLight'
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberShadowLight"
    };
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<BabylonjsCoreDirectionalLight, FiberDirectionalLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreDirectionalLight, oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreDirectionalLight.autoCalcShadowZBounds (boolean):
        if (oldProps.autoCalcShadowZBounds !== newProps.autoCalcShadowZBounds) {
            updates.push({
                propertyName: 'autoCalcShadowZBounds',
                value: newProps.autoCalcShadowZBounds,
                type: 'boolean'
            });
        }
        // BabylonjsCoreDirectionalLight.autoUpdateExtends (boolean):
        if (oldProps.autoUpdateExtends !== newProps.autoUpdateExtends) {
            updates.push({
                propertyName: 'autoUpdateExtends',
                value: newProps.autoUpdateExtends,
                type: 'boolean'
            });
        }
        // BabylonjsCoreDirectionalLight.shadowFrustumSize (number):
        if (oldProps.shadowFrustumSize !== newProps.shadowFrustumSize) {
            updates.push({
                propertyName: 'shadowFrustumSize',
                value: newProps.shadowFrustumSize,
                type: 'number'
            });
        }
        // BabylonjsCoreDirectionalLight.shadowOrthoScale (number):
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberDirectionalLight"
    };
}

export class FiberPointLightPropsHandler implements PropsHandler<BabylonjsCorePointLight, FiberPointLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePointLight, oldProps: FiberPointLightProps, newProps: FiberPointLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCorePointLight.direction (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCorePointLight.shadowAngle (number):
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberPointLight"
    };
}

export class FiberSpotLightPropsHandler implements PropsHandler<BabylonjsCoreSpotLight, FiberSpotLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreSpotLight, oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreSpotLight.angle (number):
        if (oldProps.angle !== newProps.angle) {
            updates.push({
                propertyName: 'angle',
                value: newProps.angle,
                type: 'number'
            });
        }
        // BabylonjsCoreSpotLight.exponent (number):
        if (oldProps.exponent !== newProps.exponent) {
            updates.push({
                propertyName: 'exponent',
                value: newProps.exponent,
                type: 'number'
            });
        }
        // BabylonjsCoreSpotLight.innerAngle (number):
        if (oldProps.innerAngle !== newProps.innerAngle) {
            updates.push({
                propertyName: 'innerAngle',
                value: newProps.innerAngle,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreSpotLight.projectionTexture.
        // BabylonjsCoreSpotLight.projectionTextureLightFar (number):
        if (oldProps.projectionTextureLightFar !== newProps.projectionTextureLightFar) {
            updates.push({
                propertyName: 'projectionTextureLightFar',
                value: newProps.projectionTextureLightFar,
                type: 'number'
            });
        }
        // BabylonjsCoreSpotLight.projectionTextureLightNear (number):
        if (oldProps.projectionTextureLightNear !== newProps.projectionTextureLightNear) {
            updates.push({
                propertyName: 'projectionTextureLightNear',
                value: newProps.projectionTextureLightNear,
                type: 'number'
            });
        }
        // BabylonjsCoreSpotLight.projectionTextureUpDirection (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.projectionTextureUpDirection && (!oldProps.projectionTextureUpDirection || !oldProps.projectionTextureUpDirection.equals(newProps.projectionTextureUpDirection))) {
            updates.push({
                propertyName: 'projectionTextureUpDirection',
                value: newProps.projectionTextureUpDirection,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreSpotLight.shadowAngleScale (number):
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
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberSpotLight"
    };
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<BabylonjsCoreHemisphericLight, FiberHemisphericLightProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHemisphericLight, oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreHemisphericLight.direction (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.direction && (!oldProps.direction || !oldProps.direction.equals(newProps.direction))) {
            updates.push({
                propertyName: 'direction',
                value: newProps.direction,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCoreHemisphericLight.groundColor (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.groundColor && (!oldProps.groundColor || !oldProps.groundColor.equals(newProps.groundColor))) {
            updates.push({
                propertyName: 'groundColor',
                value: newProps.groundColor,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsCoreHemisphericLight.setDirectionToTarget of type '(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3':
        if (oldProps.setDirectionToTarget !== newProps.setDirectionToTarget) {
            updates.push({
                propertyName: 'setDirectionToTarget',
                value: newProps.setDirectionToTarget,
                type: '(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3'
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
        "isNode": true,
        "className": "FiberHemisphericLight"
    };
}

export class FiberControlPropsHandler implements PropsHandler<BabylonjsGuiControl, FiberControlProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiControl, oldProps: FiberControlProps, newProps: FiberControlProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiControl.alpha (number):
        if (oldProps.alpha !== newProps.alpha) {
            updates.push({
                propertyName: 'alpha',
                value: newProps.alpha,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.clipChildren (boolean):
        if (oldProps.clipChildren !== newProps.clipChildren) {
            updates.push({
                propertyName: 'clipChildren',
                value: newProps.clipChildren,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.clipContent (boolean):
        if (oldProps.clipContent !== newProps.clipContent) {
            updates.push({
                propertyName: 'clipContent',
                value: newProps.clipContent,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.color (string):
        if (oldProps.color !== newProps.color) {
            updates.push({
                propertyName: 'color',
                value: newProps.color,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.disabledColor (string):
        if (oldProps.disabledColor !== newProps.disabledColor) {
            updates.push({
                propertyName: 'disabledColor',
                value: newProps.disabledColor,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.disabledColorItem (string):
        if (oldProps.disabledColorItem !== newProps.disabledColorItem) {
            updates.push({
                propertyName: 'disabledColorItem',
                value: newProps.disabledColorItem,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.fontFamily (string):
        if (oldProps.fontFamily !== newProps.fontFamily) {
            updates.push({
                propertyName: 'fontFamily',
                value: newProps.fontFamily,
                type: 'string'
            });
        }
        // TODO: type: '{ ascent: number; height: number; descent: number; }' property (not coded) BabylonjsGuiControl.fontOffset.
        // BabylonjsGuiControl.fontSize (string | number):
        if (oldProps.fontSize !== newProps.fontSize) {
            updates.push({
                propertyName: 'fontSize',
                value: newProps.fontSize,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.fontSizeInPixels (number):
        if (oldProps.fontSizeInPixels !== newProps.fontSizeInPixels) {
            updates.push({
                propertyName: 'fontSizeInPixels',
                value: newProps.fontSizeInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.fontStyle (string):
        if (oldProps.fontStyle !== newProps.fontStyle) {
            updates.push({
                propertyName: 'fontStyle',
                value: newProps.fontStyle,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.fontWeight (string):
        if (oldProps.fontWeight !== newProps.fontWeight) {
            updates.push({
                propertyName: 'fontWeight',
                value: newProps.fontWeight,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.height (string | number):
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.heightInPixels (number):
        if (oldProps.heightInPixels !== newProps.heightInPixels) {
            updates.push({
                propertyName: 'heightInPixels',
                value: newProps.heightInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.horizontalAlignment (number):
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.hoverCursor (string):
        if (oldProps.hoverCursor !== newProps.hoverCursor) {
            updates.push({
                propertyName: 'hoverCursor',
                value: newProps.hoverCursor,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.isEnabled (boolean):
        if (oldProps.isEnabled !== newProps.isEnabled) {
            updates.push({
                propertyName: 'isEnabled',
                value: newProps.isEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.isFocusInvisible (boolean):
        if (oldProps.isFocusInvisible !== newProps.isFocusInvisible) {
            updates.push({
                propertyName: 'isFocusInvisible',
                value: newProps.isFocusInvisible,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.isHighlighted (boolean):
        if (oldProps.isHighlighted !== newProps.isHighlighted) {
            updates.push({
                propertyName: 'isHighlighted',
                value: newProps.isHighlighted,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.isHitTestVisible (boolean):
        if (oldProps.isHitTestVisible !== newProps.isHitTestVisible) {
            updates.push({
                propertyName: 'isHitTestVisible',
                value: newProps.isHitTestVisible,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.isPointerBlocker (boolean):
        if (oldProps.isPointerBlocker !== newProps.isPointerBlocker) {
            updates.push({
                propertyName: 'isPointerBlocker',
                value: newProps.isPointerBlocker,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.isVisible (boolean):
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.left (string | number):
        if (oldProps.left !== newProps.left) {
            updates.push({
                propertyName: 'left',
                value: newProps.left,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.leftInPixels (number):
        if (oldProps.leftInPixels !== newProps.leftInPixels) {
            updates.push({
                propertyName: 'leftInPixels',
                value: newProps.leftInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.linkOffsetX (string | number):
        if (oldProps.linkOffsetX !== newProps.linkOffsetX) {
            updates.push({
                propertyName: 'linkOffsetX',
                value: newProps.linkOffsetX,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.linkOffsetXInPixels (number):
        if (oldProps.linkOffsetXInPixels !== newProps.linkOffsetXInPixels) {
            updates.push({
                propertyName: 'linkOffsetXInPixels',
                value: newProps.linkOffsetXInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.linkOffsetY (string | number):
        if (oldProps.linkOffsetY !== newProps.linkOffsetY) {
            updates.push({
                propertyName: 'linkOffsetY',
                value: newProps.linkOffsetY,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.linkOffsetYInPixels (number):
        if (oldProps.linkOffsetYInPixels !== newProps.linkOffsetYInPixels) {
            updates.push({
                propertyName: 'linkOffsetYInPixels',
                value: newProps.linkOffsetYInPixels,
                type: 'number'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsGuiControl.metadata.
        // BabylonjsGuiControl.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.notRenderable (boolean):
        if (oldProps.notRenderable !== newProps.notRenderable) {
            updates.push({
                propertyName: 'notRenderable',
                value: newProps.notRenderable,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onAfterDrawObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onAfterDrawObservable === undefined && oldProps.onAfterDrawObservable !== newProps.onAfterDrawObservable) {
            updates.push({
                propertyName: 'onAfterDrawObservable',
                value: newProps.onAfterDrawObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onBeforeDrawObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onBeforeDrawObservable === undefined && oldProps.onBeforeDrawObservable !== newProps.onBeforeDrawObservable) {
            updates.push({
                propertyName: 'onBeforeDrawObservable',
                value: newProps.onBeforeDrawObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onDirtyObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onDirtyObservable === undefined && oldProps.onDirtyObservable !== newProps.onDirtyObservable) {
            updates.push({
                propertyName: 'onDirtyObservable',
                value: newProps.onDirtyObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerClickObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>/fn':
        if (oldProps.onPointerClickObservable === undefined && oldProps.onPointerClickObservable !== newProps.onPointerClickObservable) {
            updates.push({
                propertyName: 'onPointerClickObservable',
                value: newProps.onPointerClickObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerDownObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>/fn':
        if (oldProps.onPointerDownObservable === undefined && oldProps.onPointerDownObservable !== newProps.onPointerDownObservable) {
            updates.push({
                propertyName: 'onPointerDownObservable',
                value: newProps.onPointerDownObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerEnterObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onPointerEnterObservable === undefined && oldProps.onPointerEnterObservable !== newProps.onPointerEnterObservable) {
            updates.push({
                propertyName: 'onPointerEnterObservable',
                value: newProps.onPointerEnterObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerMoveObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector2>/fn':
        if (oldProps.onPointerMoveObservable === undefined && oldProps.onPointerMoveObservable !== newProps.onPointerMoveObservable) {
            updates.push({
                propertyName: 'onPointerMoveObservable',
                value: newProps.onPointerMoveObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector2>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerOutObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl>/fn':
        if (oldProps.onPointerOutObservable === undefined && oldProps.onPointerOutObservable !== newProps.onPointerOutObservable) {
            updates.push({
                propertyName: 'onPointerOutObservable',
                value: newProps.onPointerOutObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onPointerUpObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>/fn':
        if (oldProps.onPointerUpObservable === undefined && oldProps.onPointerUpObservable !== newProps.onPointerUpObservable) {
            updates.push({
                propertyName: 'onPointerUpObservable',
                value: newProps.onPointerUpObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl.onWheelObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector2>/fn':
        if (oldProps.onWheelObservable === undefined && oldProps.onWheelObservable !== newProps.onWheelObservable) {
            updates.push({
                propertyName: 'onWheelObservable',
                value: newProps.onWheelObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector2>'
            });
        }
        // BabylonjsGuiControl.paddingBottom (string | number):
        if (oldProps.paddingBottom !== newProps.paddingBottom) {
            updates.push({
                propertyName: 'paddingBottom',
                value: newProps.paddingBottom,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.paddingBottomInPixels (number):
        if (oldProps.paddingBottomInPixels !== newProps.paddingBottomInPixels) {
            updates.push({
                propertyName: 'paddingBottomInPixels',
                value: newProps.paddingBottomInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.paddingLeft (string | number):
        if (oldProps.paddingLeft !== newProps.paddingLeft) {
            updates.push({
                propertyName: 'paddingLeft',
                value: newProps.paddingLeft,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.paddingLeftInPixels (number):
        if (oldProps.paddingLeftInPixels !== newProps.paddingLeftInPixels) {
            updates.push({
                propertyName: 'paddingLeftInPixels',
                value: newProps.paddingLeftInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.paddingRight (string | number):
        if (oldProps.paddingRight !== newProps.paddingRight) {
            updates.push({
                propertyName: 'paddingRight',
                value: newProps.paddingRight,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.paddingRightInPixels (number):
        if (oldProps.paddingRightInPixels !== newProps.paddingRightInPixels) {
            updates.push({
                propertyName: 'paddingRightInPixels',
                value: newProps.paddingRightInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.paddingTop (string | number):
        if (oldProps.paddingTop !== newProps.paddingTop) {
            updates.push({
                propertyName: 'paddingTop',
                value: newProps.paddingTop,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.paddingTopInPixels (number):
        if (oldProps.paddingTopInPixels !== newProps.paddingTopInPixels) {
            updates.push({
                propertyName: 'paddingTopInPixels',
                value: newProps.paddingTopInPixels,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiContainer' property (not coded) BabylonjsGuiControl.parent.
        // BabylonjsGuiControl.rotation (number):
        if (oldProps.rotation !== newProps.rotation) {
            updates.push({
                propertyName: 'rotation',
                value: newProps.rotation,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.scaleX (number):
        if (oldProps.scaleX !== newProps.scaleX) {
            updates.push({
                propertyName: 'scaleX',
                value: newProps.scaleX,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.scaleY (number):
        if (oldProps.scaleY !== newProps.scaleY) {
            updates.push({
                propertyName: 'scaleY',
                value: newProps.scaleY,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.shadowBlur (number):
        if (oldProps.shadowBlur !== newProps.shadowBlur) {
            updates.push({
                propertyName: 'shadowBlur',
                value: newProps.shadowBlur,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.shadowColor (string):
        if (oldProps.shadowColor !== newProps.shadowColor) {
            updates.push({
                propertyName: 'shadowColor',
                value: newProps.shadowColor,
                type: 'string'
            });
        }
        // BabylonjsGuiControl.shadowOffsetX (number):
        if (oldProps.shadowOffsetX !== newProps.shadowOffsetX) {
            updates.push({
                propertyName: 'shadowOffsetX',
                value: newProps.shadowOffsetX,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.shadowOffsetY (number):
        if (oldProps.shadowOffsetY !== newProps.shadowOffsetY) {
            updates.push({
                propertyName: 'shadowOffsetY',
                value: newProps.shadowOffsetY,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiStyle' property (not coded) BabylonjsGuiControl.style.
        // BabylonjsGuiControl.top (string | number):
        if (oldProps.top !== newProps.top) {
            updates.push({
                propertyName: 'top',
                value: newProps.top,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.topInPixels (number):
        if (oldProps.topInPixels !== newProps.topInPixels) {
            updates.push({
                propertyName: 'topInPixels',
                value: newProps.topInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.transformCenterX (number):
        if (oldProps.transformCenterX !== newProps.transformCenterX) {
            updates.push({
                propertyName: 'transformCenterX',
                value: newProps.transformCenterX,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.transformCenterY (number):
        if (oldProps.transformCenterY !== newProps.transformCenterY) {
            updates.push({
                propertyName: 'transformCenterY',
                value: newProps.transformCenterY,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.uniqueId (number):
        if (oldProps.uniqueId !== newProps.uniqueId) {
            updates.push({
                propertyName: 'uniqueId',
                value: newProps.uniqueId,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.useBitmapCache (boolean):
        if (oldProps.useBitmapCache !== newProps.useBitmapCache) {
            updates.push({
                propertyName: 'useBitmapCache',
                value: newProps.useBitmapCache,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl.verticalAlignment (number):
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.width (string | number):
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
        // BabylonjsGuiControl.widthInPixels (number):
        if (oldProps.widthInPixels !== newProps.widthInPixels) {
            updates.push({
                propertyName: 'widthInPixels',
                value: newProps.widthInPixels,
                type: 'number'
            });
        }
        // BabylonjsGuiControl.zIndex (number):
        if (oldProps.zIndex !== newProps.zIndex) {
            updates.push({
                propertyName: 'zIndex',
                value: newProps.zIndex,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export class FiberControl implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberContainerPropsHandler implements PropsHandler<BabylonjsGuiContainer, FiberContainerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiContainer, oldProps: FiberContainerProps, newProps: FiberContainerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiContainer.adaptHeightToChildren (boolean):
        if (oldProps.adaptHeightToChildren !== newProps.adaptHeightToChildren) {
            updates.push({
                propertyName: 'adaptHeightToChildren',
                value: newProps.adaptHeightToChildren,
                type: 'boolean'
            });
        }
        // BabylonjsGuiContainer.adaptWidthToChildren (boolean):
        if (oldProps.adaptWidthToChildren !== newProps.adaptWidthToChildren) {
            updates.push({
                propertyName: 'adaptWidthToChildren',
                value: newProps.adaptWidthToChildren,
                type: 'boolean'
            });
        }
        // BabylonjsGuiContainer.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiContainer.logLayoutCycleErrors (boolean):
        if (oldProps.logLayoutCycleErrors !== newProps.logLayoutCycleErrors) {
            updates.push({
                propertyName: 'logLayoutCycleErrors',
                value: newProps.logLayoutCycleErrors,
                type: 'boolean'
            });
        }
        // BabylonjsGuiContainer.maxLayoutCycle (number):
        if (oldProps.maxLayoutCycle !== newProps.maxLayoutCycle) {
            updates.push({
                propertyName: 'maxLayoutCycle',
                value: newProps.maxLayoutCycle,
                type: 'number'
            });
        }
        // BabylonjsGuiContainer.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export class FiberContainer implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberRectanglePropsHandler implements PropsHandler<BabylonjsGuiRectangle, FiberRectangleProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiRectangle, oldProps: FiberRectangleProps, newProps: FiberRectangleProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiRectangle.cornerRadius (number):
        if (oldProps.cornerRadius !== newProps.cornerRadius) {
            updates.push({
                propertyName: 'cornerRadius',
                value: newProps.cornerRadius,
                type: 'number'
            });
        }
        // BabylonjsGuiRectangle.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiRectangle.thickness (number):
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export class FiberRectangle implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Rectangle",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberButtonPropsHandler implements PropsHandler<BabylonjsGuiButton, FiberButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiButton, oldProps: FiberButtonProps, newProps: FiberButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiButton.delegatePickingToChildren (boolean):
        if (oldProps.delegatePickingToChildren !== newProps.delegatePickingToChildren) {
            updates.push({
                propertyName: 'delegatePickingToChildren',
                value: newProps.delegatePickingToChildren,
                type: 'boolean'
            });
        }
        // BabylonjsGuiButton.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: '() => void' property (not coded) BabylonjsGuiButton.pointerDownAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiButton.pointerEnterAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiButton.pointerOutAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiButton.pointerUpAnimation.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export class FiberButton implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButtonPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberSelectionPanelPropsHandler implements PropsHandler<BabylonjsGuiSelectionPanel, FiberSelectionPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSelectionPanel, oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiSelectionPanel.barColor (string):
        if (oldProps.barColor !== newProps.barColor) {
            updates.push({
                propertyName: 'barColor',
                value: newProps.barColor,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.barHeight (string):
        if (oldProps.barHeight !== newProps.barHeight) {
            updates.push({
                propertyName: 'barHeight',
                value: newProps.barHeight,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.buttonBackground (string):
        if (oldProps.buttonBackground !== newProps.buttonBackground) {
            updates.push({
                propertyName: 'buttonBackground',
                value: newProps.buttonBackground,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.buttonColor (string):
        if (oldProps.buttonColor !== newProps.buttonColor) {
            updates.push({
                propertyName: 'buttonColor',
                value: newProps.buttonColor,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsGuiSelectorGroup[]' property (not coded) BabylonjsGuiSelectionPanel.groups.
        // BabylonjsGuiSelectionPanel.headerColor (string):
        if (oldProps.headerColor !== newProps.headerColor) {
            updates.push({
                propertyName: 'headerColor',
                value: newProps.headerColor,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.labelColor (string):
        if (oldProps.labelColor !== newProps.labelColor) {
            updates.push({
                propertyName: 'labelColor',
                value: newProps.labelColor,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.spacerHeight (string):
        if (oldProps.spacerHeight !== newProps.spacerHeight) {
            updates.push({
                propertyName: 'spacerHeight',
                value: newProps.spacerHeight,
                type: 'string'
            });
        }
        // BabylonjsGuiSelectionPanel.setHeaderName of type '(label?: string, groupNb?: number) => void':
        if (oldProps.setHeaderName !== newProps.setHeaderName) {
            updates.push({
                propertyName: 'setHeaderName',
                value: newProps.setHeaderName,
                type: '(label?: string, groupNb?: number) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export class FiberSelectionPanel implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSelectionPanelPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SelectionPanel",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberScrollViewerPropsHandler implements PropsHandler<BabylonjsGuiScrollViewer, FiberScrollViewerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScrollViewer, oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiScrollViewer.barBackground (string):
        if (oldProps.barBackground !== newProps.barBackground) {
            updates.push({
                propertyName: 'barBackground',
                value: newProps.barBackground,
                type: 'string'
            });
        }
        // BabylonjsGuiScrollViewer.barColor (string):
        if (oldProps.barColor !== newProps.barColor) {
            updates.push({
                propertyName: 'barColor',
                value: newProps.barColor,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.barImage.
        // BabylonjsGuiScrollViewer.barImageHeight (number):
        if (oldProps.barImageHeight !== newProps.barImageHeight) {
            updates.push({
                propertyName: 'barImageHeight',
                value: newProps.barImageHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiScrollViewer.barSize (number):
        if (oldProps.barSize !== newProps.barSize) {
            updates.push({
                propertyName: 'barSize',
                value: newProps.barSize,
                type: 'number'
            });
        }
        // BabylonjsGuiScrollViewer.forceHorizontalBar (boolean):
        if (oldProps.forceHorizontalBar !== newProps.forceHorizontalBar) {
            updates.push({
                propertyName: 'forceHorizontalBar',
                value: newProps.forceHorizontalBar,
                type: 'boolean'
            });
        }
        // BabylonjsGuiScrollViewer.forceVerticalBar (boolean):
        if (oldProps.forceVerticalBar !== newProps.forceVerticalBar) {
            updates.push({
                propertyName: 'forceVerticalBar',
                value: newProps.forceVerticalBar,
                type: 'boolean'
            });
        }
        // BabylonjsGuiScrollViewer.freezeControls (boolean):
        if (oldProps.freezeControls !== newProps.freezeControls) {
            updates.push({
                propertyName: 'freezeControls',
                value: newProps.freezeControls,
                type: 'boolean'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalBarImage.
        // BabylonjsGuiScrollViewer.horizontalBarImageHeight (number):
        if (oldProps.horizontalBarImageHeight !== newProps.horizontalBarImageHeight) {
            updates.push({
                propertyName: 'horizontalBarImageHeight',
                value: newProps.horizontalBarImageHeight,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalThumbImage.
        // BabylonjsGuiScrollViewer.scrollBackground (string):
        if (oldProps.scrollBackground !== newProps.scrollBackground) {
            updates.push({
                propertyName: 'scrollBackground',
                value: newProps.scrollBackground,
                type: 'string'
            });
        }
        // BabylonjsGuiScrollViewer.thumbHeight (number):
        if (oldProps.thumbHeight !== newProps.thumbHeight) {
            updates.push({
                propertyName: 'thumbHeight',
                value: newProps.thumbHeight,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.thumbImage.
        // BabylonjsGuiScrollViewer.thumbLength (number):
        if (oldProps.thumbLength !== newProps.thumbLength) {
            updates.push({
                propertyName: 'thumbLength',
                value: newProps.thumbLength,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalBarImage.
        // BabylonjsGuiScrollViewer.verticalBarImageHeight (number):
        if (oldProps.verticalBarImageHeight !== newProps.verticalBarImageHeight) {
            updates.push({
                propertyName: 'verticalBarImageHeight',
                value: newProps.verticalBarImageHeight,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalThumbImage.
        // BabylonjsGuiScrollViewer.wheelPrecision (number):
        if (oldProps.wheelPrecision !== newProps.wheelPrecision) {
            updates.push({
                propertyName: 'wheelPrecision',
                value: newProps.wheelPrecision,
                type: 'number'
            });
        }
        // BabylonjsGuiScrollViewer.setBucketSizes of type '(width?: number, height?: number) => void':
        if (oldProps.setBucketSizes !== newProps.setBucketSizes) {
            updates.push({
                propertyName: 'setBucketSizes',
                value: newProps.setBucketSizes,
                type: '(width?: number, height?: number) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export class FiberScrollViewer implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollViewerPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollViewer",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberStackPanelPropsHandler implements PropsHandler<BabylonjsGuiStackPanel, FiberStackPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiStackPanel, oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiStackPanel.height (string | number):
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
        // BabylonjsGuiStackPanel.ignoreLayoutWarnings (boolean):
        if (oldProps.ignoreLayoutWarnings !== newProps.ignoreLayoutWarnings) {
            updates.push({
                propertyName: 'ignoreLayoutWarnings',
                value: newProps.ignoreLayoutWarnings,
                type: 'boolean'
            });
        }
        // BabylonjsGuiStackPanel.isVertical (boolean):
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // BabylonjsGuiStackPanel.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiStackPanel.width (string | number):
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export class FiberStackPanel implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<BabylonjsGuiVirtualKeyboard, FiberVirtualKeyboardProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiVirtualKeyboard, oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiVirtualKeyboard.defaultButtonBackground (string):
        if (oldProps.defaultButtonBackground !== newProps.defaultButtonBackground) {
            updates.push({
                propertyName: 'defaultButtonBackground',
                value: newProps.defaultButtonBackground,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonColor (string):
        if (oldProps.defaultButtonColor !== newProps.defaultButtonColor) {
            updates.push({
                propertyName: 'defaultButtonColor',
                value: newProps.defaultButtonColor,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonHeight (string):
        if (oldProps.defaultButtonHeight !== newProps.defaultButtonHeight) {
            updates.push({
                propertyName: 'defaultButtonHeight',
                value: newProps.defaultButtonHeight,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonPaddingBottom (string):
        if (oldProps.defaultButtonPaddingBottom !== newProps.defaultButtonPaddingBottom) {
            updates.push({
                propertyName: 'defaultButtonPaddingBottom',
                value: newProps.defaultButtonPaddingBottom,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonPaddingLeft (string):
        if (oldProps.defaultButtonPaddingLeft !== newProps.defaultButtonPaddingLeft) {
            updates.push({
                propertyName: 'defaultButtonPaddingLeft',
                value: newProps.defaultButtonPaddingLeft,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonPaddingRight (string):
        if (oldProps.defaultButtonPaddingRight !== newProps.defaultButtonPaddingRight) {
            updates.push({
                propertyName: 'defaultButtonPaddingRight',
                value: newProps.defaultButtonPaddingRight,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonPaddingTop (string):
        if (oldProps.defaultButtonPaddingTop !== newProps.defaultButtonPaddingTop) {
            updates.push({
                propertyName: 'defaultButtonPaddingTop',
                value: newProps.defaultButtonPaddingTop,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.defaultButtonWidth (string):
        if (oldProps.defaultButtonWidth !== newProps.defaultButtonWidth) {
            updates.push({
                propertyName: 'defaultButtonWidth',
                value: newProps.defaultButtonWidth,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiVirtualKeyboard.onKeyPressObservable of type 'BabylonjsCoreObservable<string>/fn':
        if (oldProps.onKeyPressObservable === undefined && oldProps.onKeyPressObservable !== newProps.onKeyPressObservable) {
            updates.push({
                propertyName: 'onKeyPressObservable',
                value: newProps.onKeyPressObservable,
                type: 'BabylonjsCoreObservable<string>'
            });
        }
        // BabylonjsGuiVirtualKeyboard.selectedShiftThickness (number):
        if (oldProps.selectedShiftThickness !== newProps.selectedShiftThickness) {
            updates.push({
                propertyName: 'selectedShiftThickness',
                value: newProps.selectedShiftThickness,
                type: 'number'
            });
        }
        // BabylonjsGuiVirtualKeyboard.shiftButtonColor (string):
        if (oldProps.shiftButtonColor !== newProps.shiftButtonColor) {
            updates.push({
                propertyName: 'shiftButtonColor',
                value: newProps.shiftButtonColor,
                type: 'string'
            });
        }
        // BabylonjsGuiVirtualKeyboard.shiftState (number):
        if (oldProps.shiftState !== newProps.shiftState) {
            updates.push({
                propertyName: 'shiftState',
                value: newProps.shiftState,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export class FiberVirtualKeyboard implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualKeyboardPropsHandler(),
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualKeyboard",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberVirtualKeyboard"
    };
}

export class FiberEllipsePropsHandler implements PropsHandler<BabylonjsGuiEllipse, FiberEllipseProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiEllipse, oldProps: FiberEllipseProps, newProps: FiberEllipseProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiEllipse.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiEllipse.thickness (number):
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export class FiberEllipse implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEllipsePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Ellipse",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberGridPropsHandler implements PropsHandler<BabylonjsGuiGrid, FiberGridProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiGrid, oldProps: FiberGridProps, newProps: FiberGridProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiGrid.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiGrid.setColumnDefinition of type '(index?: number, width?: number, isPixel?: boolean) => BabylonjsGuiGrid':
        if (oldProps.setColumnDefinition !== newProps.setColumnDefinition) {
            updates.push({
                propertyName: 'setColumnDefinition',
                value: newProps.setColumnDefinition,
                type: '(index?: number, width?: number, isPixel?: boolean) => BabylonjsGuiGrid'
            });
        }
        // BabylonjsGuiGrid.setRowDefinition of type '(index?: number, height?: number, isPixel?: boolean) => BabylonjsGuiGrid':
        if (oldProps.setRowDefinition !== newProps.setRowDefinition) {
            updates.push({
                propertyName: 'setRowDefinition',
                value: newProps.setRowDefinition,
                type: '(index?: number, height?: number, isPixel?: boolean) => BabylonjsGuiGrid'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export class FiberGrid implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGridPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Grid",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class Fiber_ScrollViewerWindowPropsHandler implements PropsHandler<BabylonjsGui_ScrollViewerWindow, Fiber_ScrollViewerWindowProps> {
    getPropertyUpdates(hostInstance: BabylonjsGui_ScrollViewerWindow, oldProps: Fiber_ScrollViewerWindowProps, newProps: Fiber_ScrollViewerWindowProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGui_ScrollViewerWindow.freezeControls (boolean):
        if (oldProps.freezeControls !== newProps.freezeControls) {
            updates.push({
                propertyName: 'freezeControls',
                value: newProps.freezeControls,
                type: 'boolean'
            });
        }
        // BabylonjsGui_ScrollViewerWindow.parentClientHeight (number):
        if (oldProps.parentClientHeight !== newProps.parentClientHeight) {
            updates.push({
                propertyName: 'parentClientHeight',
                value: newProps.parentClientHeight,
                type: 'number'
            });
        }
        // BabylonjsGui_ScrollViewerWindow.parentClientWidth (number):
        if (oldProps.parentClientWidth !== newProps.parentClientWidth) {
            updates.push({
                propertyName: 'parentClientWidth',
                value: newProps.parentClientWidth,
                type: 'number'
            });
        }
        // BabylonjsGui_ScrollViewerWindow.setBucketSizes of type '(width?: number, height?: number) => void':
        if (oldProps.setBucketSizes !== newProps.setBucketSizes) {
            updates.push({
                propertyName: 'setBucketSizes',
                value: newProps.setBucketSizes,
                type: '(width?: number, height?: number) => void'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export class Fiber_ScrollViewerWindow implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new Fiber_ScrollViewerWindowPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "_ScrollViewerWindow",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberTextBlockPropsHandler implements PropsHandler<BabylonjsGuiTextBlock, FiberTextBlockProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiTextBlock, oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiTextBlock.lineSpacing (string | number):
        if (oldProps.lineSpacing !== newProps.lineSpacing) {
            updates.push({
                propertyName: 'lineSpacing',
                value: newProps.lineSpacing,
                type: 'string | number'
            });
        }
        // BabylonjsGuiTextBlock.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiTextBlock.onLinesReadyObservable of type 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>/fn':
        if (oldProps.onLinesReadyObservable === undefined && oldProps.onLinesReadyObservable !== newProps.onLinesReadyObservable) {
            updates.push({
                propertyName: 'onLinesReadyObservable',
                value: newProps.onLinesReadyObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiTextBlock.onTextChangedObservable of type 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>/fn':
        if (oldProps.onTextChangedObservable === undefined && oldProps.onTextChangedObservable !== newProps.onTextChangedObservable) {
            updates.push({
                propertyName: 'onTextChangedObservable',
                value: newProps.onTextChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>'
            });
        }
        // BabylonjsGuiTextBlock.outlineColor (string):
        if (oldProps.outlineColor !== newProps.outlineColor) {
            updates.push({
                propertyName: 'outlineColor',
                value: newProps.outlineColor,
                type: 'string'
            });
        }
        // BabylonjsGuiTextBlock.outlineWidth (number):
        if (oldProps.outlineWidth !== newProps.outlineWidth) {
            updates.push({
                propertyName: 'outlineWidth',
                value: newProps.outlineWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiTextBlock.resizeToFit (boolean):
        if (oldProps.resizeToFit !== newProps.resizeToFit) {
            updates.push({
                propertyName: 'resizeToFit',
                value: newProps.resizeToFit,
                type: 'boolean'
            });
        }
        // BabylonjsGuiTextBlock.text (string):
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // BabylonjsGuiTextBlock.textHorizontalAlignment (number):
        if (oldProps.textHorizontalAlignment !== newProps.textHorizontalAlignment) {
            updates.push({
                propertyName: 'textHorizontalAlignment',
                value: newProps.textHorizontalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiTextBlock.textVerticalAlignment (number):
        if (oldProps.textVerticalAlignment !== newProps.textVerticalAlignment) {
            updates.push({
                propertyName: 'textVerticalAlignment',
                value: newProps.textVerticalAlignment,
                type: 'number'
            });
        }
        // TODO: type: 'boolean | BabylonjsGuiTextWrapping' property (not coded) BabylonjsGuiTextBlock.textWrapping.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export class FiberTextBlock implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTextBlockPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TextBlock",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberImagePropsHandler implements PropsHandler<BabylonjsGuiImage, FiberImageProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiImage, oldProps: FiberImageProps, newProps: FiberImageProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiImage.autoScale (boolean):
        if (oldProps.autoScale !== newProps.autoScale) {
            updates.push({
                propertyName: 'autoScale',
                value: newProps.autoScale,
                type: 'boolean'
            });
        }
        // BabylonjsGuiImage.cellHeight (number):
        if (oldProps.cellHeight !== newProps.cellHeight) {
            updates.push({
                propertyName: 'cellHeight',
                value: newProps.cellHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.cellId (number):
        if (oldProps.cellId !== newProps.cellId) {
            updates.push({
                propertyName: 'cellId',
                value: newProps.cellId,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.cellWidth (number):
        if (oldProps.cellWidth !== newProps.cellWidth) {
            updates.push({
                propertyName: 'cellWidth',
                value: newProps.cellWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.detectPointerOnOpaqueOnly (boolean):
        if (oldProps.detectPointerOnOpaqueOnly !== newProps.detectPointerOnOpaqueOnly) {
            updates.push({
                propertyName: 'detectPointerOnOpaqueOnly',
                value: newProps.detectPointerOnOpaqueOnly,
                type: 'boolean'
            });
        }
        // TODO: type: 'HTMLImageElement' property (not coded) BabylonjsGuiImage.domImage.
        // BabylonjsGuiImage.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiImage.onImageLoadedObservable of type 'BabylonjsCoreObservable<BabylonjsGuiImage>/fn':
        if (oldProps.onImageLoadedObservable === undefined && oldProps.onImageLoadedObservable !== newProps.onImageLoadedObservable) {
            updates.push({
                propertyName: 'onImageLoadedObservable',
                value: newProps.onImageLoadedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiImage>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiImage.onSVGAttributesComputedObservable of type 'BabylonjsCoreObservable<BabylonjsGuiImage>/fn':
        if (oldProps.onSVGAttributesComputedObservable === undefined && oldProps.onSVGAttributesComputedObservable !== newProps.onSVGAttributesComputedObservable) {
            updates.push({
                propertyName: 'onSVGAttributesComputedObservable',
                value: newProps.onSVGAttributesComputedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiImage>'
            });
        }
        // BabylonjsGuiImage.populateNinePatchSlicesFromImage (boolean):
        if (oldProps.populateNinePatchSlicesFromImage !== newProps.populateNinePatchSlicesFromImage) {
            updates.push({
                propertyName: 'populateNinePatchSlicesFromImage',
                value: newProps.populateNinePatchSlicesFromImage,
                type: 'boolean'
            });
        }
        // BabylonjsGuiImage.sliceBottom (number):
        if (oldProps.sliceBottom !== newProps.sliceBottom) {
            updates.push({
                propertyName: 'sliceBottom',
                value: newProps.sliceBottom,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sliceLeft (number):
        if (oldProps.sliceLeft !== newProps.sliceLeft) {
            updates.push({
                propertyName: 'sliceLeft',
                value: newProps.sliceLeft,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sliceRight (number):
        if (oldProps.sliceRight !== newProps.sliceRight) {
            updates.push({
                propertyName: 'sliceRight',
                value: newProps.sliceRight,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sliceTop (number):
        if (oldProps.sliceTop !== newProps.sliceTop) {
            updates.push({
                propertyName: 'sliceTop',
                value: newProps.sliceTop,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.source (string):
        if (oldProps.source !== newProps.source) {
            updates.push({
                propertyName: 'source',
                value: newProps.source,
                type: 'string'
            });
        }
        // BabylonjsGuiImage.sourceHeight (number):
        if (oldProps.sourceHeight !== newProps.sourceHeight) {
            updates.push({
                propertyName: 'sourceHeight',
                value: newProps.sourceHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sourceLeft (number):
        if (oldProps.sourceLeft !== newProps.sourceLeft) {
            updates.push({
                propertyName: 'sourceLeft',
                value: newProps.sourceLeft,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sourceTop (number):
        if (oldProps.sourceTop !== newProps.sourceTop) {
            updates.push({
                propertyName: 'sourceTop',
                value: newProps.sourceTop,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.sourceWidth (number):
        if (oldProps.sourceWidth !== newProps.sourceWidth) {
            updates.push({
                propertyName: 'sourceWidth',
                value: newProps.sourceWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiImage.stretch (number):
        if (oldProps.stretch !== newProps.stretch) {
            updates.push({
                propertyName: 'stretch',
                value: newProps.stretch,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export class FiberImage implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImagePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Image",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberCheckboxPropsHandler implements PropsHandler<BabylonjsGuiCheckbox, FiberCheckboxProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiCheckbox, oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiCheckbox.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiCheckbox.checkSizeRatio (number):
        if (oldProps.checkSizeRatio !== newProps.checkSizeRatio) {
            updates.push({
                propertyName: 'checkSizeRatio',
                value: newProps.checkSizeRatio,
                type: 'number'
            });
        }
        // BabylonjsGuiCheckbox.isChecked (boolean):
        if (oldProps.isChecked !== newProps.isChecked) {
            updates.push({
                propertyName: 'isChecked',
                value: newProps.isChecked,
                type: 'boolean'
            });
        }
        // BabylonjsGuiCheckbox.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiCheckbox.onIsCheckedChangedObservable of type 'BabylonjsCoreObservable<boolean>/fn':
        if (oldProps.onIsCheckedChangedObservable === undefined && oldProps.onIsCheckedChangedObservable !== newProps.onIsCheckedChangedObservable) {
            updates.push({
                propertyName: 'onIsCheckedChangedObservable',
                value: newProps.onIsCheckedChangedObservable,
                type: 'BabylonjsCoreObservable<boolean>'
            });
        }
        // BabylonjsGuiCheckbox.thickness (number):
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export class FiberCheckbox implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCheckboxPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Checkbox",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberColorPickerPropsHandler implements PropsHandler<BabylonjsGuiColorPicker, FiberColorPickerProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiColorPicker, oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiColorPicker.height (string | number):
        if (oldProps.height !== newProps.height) {
            updates.push({
                propertyName: 'height',
                value: newProps.height,
                type: 'string | number'
            });
        }
        // BabylonjsGuiColorPicker.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiColorPicker.onValueChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreColor3>/fn':
        if (oldProps.onValueChangedObservable === undefined && oldProps.onValueChangedObservable !== newProps.onValueChangedObservable) {
            updates.push({
                propertyName: 'onValueChangedObservable',
                value: newProps.onValueChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreColor3>'
            });
        }
        // BabylonjsGuiColorPicker.size (string | number):
        if (oldProps.size !== newProps.size) {
            updates.push({
                propertyName: 'size',
                value: newProps.size,
                type: 'string | number'
            });
        }
        // BabylonjsGuiColorPicker.value (BabylonjsCoreColor3 uses object equals to find diffs):
        if (newProps.value && (!oldProps.value || !oldProps.value.equals(newProps.value))) {
            updates.push({
                propertyName: 'value',
                value: newProps.value,
                type: 'BabylonjsCoreColor3'
            });
        }
        // BabylonjsGuiColorPicker.width (string | number):
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export class FiberColorPicker implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorPickerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorPicker",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberInputTextPropsHandler implements PropsHandler<BabylonjsGuiInputText, FiberInputTextProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiInputText, oldProps: FiberInputTextProps, newProps: FiberInputTextProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiInputText.addKey (boolean):
        if (oldProps.addKey !== newProps.addKey) {
            updates.push({
                propertyName: 'addKey',
                value: newProps.addKey,
                type: 'boolean'
            });
        }
        // BabylonjsGuiInputText.autoStretchWidth (boolean):
        if (oldProps.autoStretchWidth !== newProps.autoStretchWidth) {
            updates.push({
                propertyName: 'autoStretchWidth',
                value: newProps.autoStretchWidth,
                type: 'boolean'
            });
        }
        // BabylonjsGuiInputText.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.currentKey (string):
        if (oldProps.currentKey !== newProps.currentKey) {
            updates.push({
                propertyName: 'currentKey',
                value: newProps.currentKey,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.deadKey (boolean):
        if (oldProps.deadKey !== newProps.deadKey) {
            updates.push({
                propertyName: 'deadKey',
                value: newProps.deadKey,
                type: 'boolean'
            });
        }
        // BabylonjsGuiInputText.disableMobilePrompt (boolean):
        if (oldProps.disableMobilePrompt !== newProps.disableMobilePrompt) {
            updates.push({
                propertyName: 'disableMobilePrompt',
                value: newProps.disableMobilePrompt,
                type: 'boolean'
            });
        }
        // BabylonjsGuiInputText.focusedBackground (string):
        if (oldProps.focusedBackground !== newProps.focusedBackground) {
            updates.push({
                propertyName: 'focusedBackground',
                value: newProps.focusedBackground,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.focusedColor (string):
        if (oldProps.focusedColor !== newProps.focusedColor) {
            updates.push({
                propertyName: 'focusedColor',
                value: newProps.focusedColor,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.highligherOpacity (number):
        if (oldProps.highligherOpacity !== newProps.highligherOpacity) {
            updates.push({
                propertyName: 'highligherOpacity',
                value: newProps.highligherOpacity,
                type: 'number'
            });
        }
        // BabylonjsGuiInputText.highlightedText (string):
        if (oldProps.highlightedText !== newProps.highlightedText) {
            updates.push({
                propertyName: 'highlightedText',
                value: newProps.highlightedText,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.margin (string):
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.maxWidth (string | number):
        if (oldProps.maxWidth !== newProps.maxWidth) {
            updates.push({
                propertyName: 'maxWidth',
                value: newProps.maxWidth,
                type: 'string | number'
            });
        }
        // BabylonjsGuiInputText.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onBeforeKeyAddObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onBeforeKeyAddObservable === undefined && oldProps.onBeforeKeyAddObservable !== newProps.onBeforeKeyAddObservable) {
            updates.push({
                propertyName: 'onBeforeKeyAddObservable',
                value: newProps.onBeforeKeyAddObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onBlurObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onBlurObservable === undefined && oldProps.onBlurObservable !== newProps.onBlurObservable) {
            updates.push({
                propertyName: 'onBlurObservable',
                value: newProps.onBlurObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onFocusObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onFocusObservable === undefined && oldProps.onFocusObservable !== newProps.onFocusObservable) {
            updates.push({
                propertyName: 'onFocusObservable',
                value: newProps.onFocusObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onFocusSelectAll of type 'boolean/fn':
        if (oldProps.onFocusSelectAll === undefined && oldProps.onFocusSelectAll !== newProps.onFocusSelectAll) {
            updates.push({
                propertyName: 'onFocusSelectAll',
                value: newProps.onFocusSelectAll,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onKeyboardEventProcessedObservable of type 'BabylonjsCoreObservable<KeyboardEvent>/fn':
        if (oldProps.onKeyboardEventProcessedObservable === undefined && oldProps.onKeyboardEventProcessedObservable !== newProps.onKeyboardEventProcessedObservable) {
            updates.push({
                propertyName: 'onKeyboardEventProcessedObservable',
                value: newProps.onKeyboardEventProcessedObservable,
                type: 'BabylonjsCoreObservable<KeyboardEvent>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onTextChangedObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onTextChangedObservable === undefined && oldProps.onTextChangedObservable !== newProps.onTextChangedObservable) {
            updates.push({
                propertyName: 'onTextChangedObservable',
                value: newProps.onTextChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onTextCopyObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onTextCopyObservable === undefined && oldProps.onTextCopyObservable !== newProps.onTextCopyObservable) {
            updates.push({
                propertyName: 'onTextCopyObservable',
                value: newProps.onTextCopyObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onTextCutObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onTextCutObservable === undefined && oldProps.onTextCutObservable !== newProps.onTextCutObservable) {
            updates.push({
                propertyName: 'onTextCutObservable',
                value: newProps.onTextCutObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onTextHighlightObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onTextHighlightObservable === undefined && oldProps.onTextHighlightObservable !== newProps.onTextHighlightObservable) {
            updates.push({
                propertyName: 'onTextHighlightObservable',
                value: newProps.onTextHighlightObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiInputText.onTextPasteObservable of type 'BabylonjsCoreObservable<BabylonjsGuiInputText>/fn':
        if (oldProps.onTextPasteObservable === undefined && oldProps.onTextPasteObservable !== newProps.onTextPasteObservable) {
            updates.push({
                propertyName: 'onTextPasteObservable',
                value: newProps.onTextPasteObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>'
            });
        }
        // BabylonjsGuiInputText.placeholderColor (string):
        if (oldProps.placeholderColor !== newProps.placeholderColor) {
            updates.push({
                propertyName: 'placeholderColor',
                value: newProps.placeholderColor,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.placeholderText (string):
        if (oldProps.placeholderText !== newProps.placeholderText) {
            updates.push({
                propertyName: 'placeholderText',
                value: newProps.placeholderText,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.promptMessage (string):
        if (oldProps.promptMessage !== newProps.promptMessage) {
            updates.push({
                propertyName: 'promptMessage',
                value: newProps.promptMessage,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.text (string):
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.textHighlightColor (string):
        if (oldProps.textHighlightColor !== newProps.textHighlightColor) {
            updates.push({
                propertyName: 'textHighlightColor',
                value: newProps.textHighlightColor,
                type: 'string'
            });
        }
        // BabylonjsGuiInputText.thickness (number):
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        // BabylonjsGuiInputText.width (string | number):
        if (oldProps.width !== newProps.width) {
            updates.push({
                propertyName: 'width',
                value: newProps.width,
                type: 'string | number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export class FiberInputText implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputText",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberInputPasswordPropsHandler implements PropsHandler<BabylonjsGuiInputPassword, FiberInputPasswordProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiInputPassword, oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export class FiberInputPassword implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputPasswordPropsHandler(),
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputPassword",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberInputPassword"
    };
}

export class FiberLinePropsHandler implements PropsHandler<BabylonjsGuiLine, FiberLineProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiLine, oldProps: FiberLineProps, newProps: FiberLineProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiLine.connectedControl (BabylonjsGuiControl) sets once:
        if (newProps.connectedControl && (!oldProps.connectedControl)) {
            updates.push({
                propertyName: 'connectedControl',
                value: newProps.connectedControl,
                type: 'BabylonjsGuiControl'
            });
        }
        // BabylonjsGuiLine.dash (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.dash && (!oldProps.dash || oldProps.dash.length !== newProps.dash.length)) {
            updates.push({
                propertyName: 'dash',
                value: newProps.dash,
                type: 'number[]'
            });
        }
        // BabylonjsGuiLine.horizontalAlignment (number):
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiLine.lineWidth (number):
        if (oldProps.lineWidth !== newProps.lineWidth) {
            updates.push({
                propertyName: 'lineWidth',
                value: newProps.lineWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiLine.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiLine.verticalAlignment (number):
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiLine.x1 (string | number):
        if (oldProps.x1 !== newProps.x1) {
            updates.push({
                propertyName: 'x1',
                value: newProps.x1,
                type: 'string | number'
            });
        }
        // BabylonjsGuiLine.x2 (string | number):
        if (oldProps.x2 !== newProps.x2) {
            updates.push({
                propertyName: 'x2',
                value: newProps.x2,
                type: 'string | number'
            });
        }
        // BabylonjsGuiLine.y1 (string | number):
        if (oldProps.y1 !== newProps.y1) {
            updates.push({
                propertyName: 'y1',
                value: newProps.y1,
                type: 'string | number'
            });
        }
        // BabylonjsGuiLine.y2 (string | number):
        if (oldProps.y2 !== newProps.y2) {
            updates.push({
                propertyName: 'y2',
                value: newProps.y2,
                type: 'string | number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export class FiberLine implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Line",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberMultiLinePropsHandler implements PropsHandler<BabylonjsGuiMultiLine, FiberMultiLineProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiMultiLine, oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiMultiLine.dash (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.dash && (!oldProps.dash || oldProps.dash.length !== newProps.dash.length)) {
            updates.push({
                propertyName: 'dash',
                value: newProps.dash,
                type: 'number[]'
            });
        }
        // BabylonjsGuiMultiLine.horizontalAlignment (number):
        if (oldProps.horizontalAlignment !== newProps.horizontalAlignment) {
            updates.push({
                propertyName: 'horizontalAlignment',
                value: newProps.horizontalAlignment,
                type: 'number'
            });
        }
        // BabylonjsGuiMultiLine.lineWidth (number):
        if (oldProps.lineWidth !== newProps.lineWidth) {
            updates.push({
                propertyName: 'lineWidth',
                value: newProps.lineWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiMultiLine.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiMultiLine.onPointUpdate of type '() => void/fn':
        if (oldProps.onPointUpdate === undefined && oldProps.onPointUpdate !== newProps.onPointUpdate) {
            updates.push({
                propertyName: 'onPointUpdate',
                value: newProps.onPointUpdate,
                type: '() => void'
            });
        }
        // BabylonjsGuiMultiLine.verticalAlignment (number):
        if (oldProps.verticalAlignment !== newProps.verticalAlignment) {
            updates.push({
                propertyName: 'verticalAlignment',
                value: newProps.verticalAlignment,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export class FiberMultiLine implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiLine",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberRadioButtonPropsHandler implements PropsHandler<BabylonjsGuiRadioButton, FiberRadioButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiRadioButton, oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiRadioButton.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiRadioButton.checkSizeRatio (number):
        if (oldProps.checkSizeRatio !== newProps.checkSizeRatio) {
            updates.push({
                propertyName: 'checkSizeRatio',
                value: newProps.checkSizeRatio,
                type: 'number'
            });
        }
        // BabylonjsGuiRadioButton.group (string):
        if (oldProps.group !== newProps.group) {
            updates.push({
                propertyName: 'group',
                value: newProps.group,
                type: 'string'
            });
        }
        // BabylonjsGuiRadioButton.isChecked (boolean):
        if (oldProps.isChecked !== newProps.isChecked) {
            updates.push({
                propertyName: 'isChecked',
                value: newProps.isChecked,
                type: 'boolean'
            });
        }
        // BabylonjsGuiRadioButton.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiRadioButton.onIsCheckedChangedObservable of type 'BabylonjsCoreObservable<boolean>/fn':
        if (oldProps.onIsCheckedChangedObservable === undefined && oldProps.onIsCheckedChangedObservable !== newProps.onIsCheckedChangedObservable) {
            updates.push({
                propertyName: 'onIsCheckedChangedObservable',
                value: newProps.onIsCheckedChangedObservable,
                type: 'BabylonjsCoreObservable<boolean>'
            });
        }
        // BabylonjsGuiRadioButton.thickness (number):
        if (oldProps.thickness !== newProps.thickness) {
            updates.push({
                propertyName: 'thickness',
                value: newProps.thickness,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export class FiberRadioButton implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRadioButtonPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RadioButton",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberBaseSliderPropsHandler implements PropsHandler<BabylonjsGuiBaseSlider, FiberBaseSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiBaseSlider, oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiBaseSlider.barOffset (string | number):
        if (oldProps.barOffset !== newProps.barOffset) {
            updates.push({
                propertyName: 'barOffset',
                value: newProps.barOffset,
                type: 'string | number'
            });
        }
        // BabylonjsGuiBaseSlider.displayThumb (boolean):
        if (oldProps.displayThumb !== newProps.displayThumb) {
            updates.push({
                propertyName: 'displayThumb',
                value: newProps.displayThumb,
                type: 'boolean'
            });
        }
        // BabylonjsGuiBaseSlider.isThumbClamped (boolean):
        if (oldProps.isThumbClamped !== newProps.isThumbClamped) {
            updates.push({
                propertyName: 'isThumbClamped',
                value: newProps.isThumbClamped,
                type: 'boolean'
            });
        }
        // BabylonjsGuiBaseSlider.isVertical (boolean):
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // BabylonjsGuiBaseSlider.maximum (number):
        if (oldProps.maximum !== newProps.maximum) {
            updates.push({
                propertyName: 'maximum',
                value: newProps.maximum,
                type: 'number'
            });
        }
        // BabylonjsGuiBaseSlider.minimum (number):
        if (oldProps.minimum !== newProps.minimum) {
            updates.push({
                propertyName: 'minimum',
                value: newProps.minimum,
                type: 'number'
            });
        }
        // BabylonjsGuiBaseSlider.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiBaseSlider.onValueChangedObservable of type 'BabylonjsCoreObservable<number>/fn':
        if (oldProps.onValueChangedObservable === undefined && oldProps.onValueChangedObservable !== newProps.onValueChangedObservable) {
            updates.push({
                propertyName: 'onValueChangedObservable',
                value: newProps.onValueChangedObservable,
                type: 'BabylonjsCoreObservable<number>'
            });
        }
        // BabylonjsGuiBaseSlider.step (number):
        if (oldProps.step !== newProps.step) {
            updates.push({
                propertyName: 'step',
                value: newProps.step,
                type: 'number'
            });
        }
        // BabylonjsGuiBaseSlider.thumbWidth (string | number):
        if (oldProps.thumbWidth !== newProps.thumbWidth) {
            updates.push({
                propertyName: 'thumbWidth',
                value: newProps.thumbWidth,
                type: 'string | number'
            });
        }
        // BabylonjsGuiBaseSlider.value (number):
        if (oldProps.value !== newProps.value) {
            updates.push({
                propertyName: 'value',
                value: newProps.value,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberBaseSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseSlider",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberScrollBarPropsHandler implements PropsHandler<BabylonjsGuiScrollBar, FiberScrollBarProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScrollBar, oldProps: FiberScrollBarProps, newProps: FiberScrollBarProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiScrollBar.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiScrollBar.borderColor (string):
        if (oldProps.borderColor !== newProps.borderColor) {
            updates.push({
                propertyName: 'borderColor',
                value: newProps.borderColor,
                type: 'string'
            });
        }
        // BabylonjsGuiScrollBar.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberScrollBar implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollBar",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberImageScrollBarPropsHandler implements PropsHandler<BabylonjsGuiImageScrollBar, FiberImageScrollBarProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiImageScrollBar, oldProps: FiberImageScrollBarProps, newProps: FiberImageScrollBarProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.backgroundImage.
        // BabylonjsGuiImageScrollBar.barImageHeight (number):
        if (oldProps.barImageHeight !== newProps.barImageHeight) {
            updates.push({
                propertyName: 'barImageHeight',
                value: newProps.barImageHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiImageScrollBar.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsGuiImageScrollBar.num90RotationInVerticalMode (number):
        if (oldProps.num90RotationInVerticalMode !== newProps.num90RotationInVerticalMode) {
            updates.push({
                propertyName: 'num90RotationInVerticalMode',
                value: newProps.num90RotationInVerticalMode,
                type: 'number'
            });
        }
        // BabylonjsGuiImageScrollBar.thumbHeight (number):
        if (oldProps.thumbHeight !== newProps.thumbHeight) {
            updates.push({
                propertyName: 'thumbHeight',
                value: newProps.thumbHeight,
                type: 'number'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.thumbImage.
        // BabylonjsGuiImageScrollBar.thumbLength (number):
        if (oldProps.thumbLength !== newProps.thumbLength) {
            updates.push({
                propertyName: 'thumbLength',
                value: newProps.thumbLength,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberImageScrollBar implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageScrollBar",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberSliderPropsHandler implements PropsHandler<BabylonjsGuiSlider, FiberSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSlider, oldProps: FiberSliderProps, newProps: FiberSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiSlider.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiSlider.borderColor (string):
        if (oldProps.borderColor !== newProps.borderColor) {
            updates.push({
                propertyName: 'borderColor',
                value: newProps.borderColor,
                type: 'string'
            });
        }
        // BabylonjsGuiSlider.displayValueBar (boolean):
        if (oldProps.displayValueBar !== newProps.displayValueBar) {
            updates.push({
                propertyName: 'displayValueBar',
                value: newProps.displayValueBar,
                type: 'boolean'
            });
        }
        // BabylonjsGuiSlider.isThumbCircle (boolean):
        if (oldProps.isThumbCircle !== newProps.isThumbCircle) {
            updates.push({
                propertyName: 'isThumbCircle',
                value: newProps.isThumbCircle,
                type: 'boolean'
            });
        }
        // BabylonjsGuiSlider.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Slider",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberImageBasedSliderPropsHandler implements PropsHandler<BabylonjsGuiImageBasedSlider, FiberImageBasedSliderProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiImageBasedSlider, oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.backgroundImage.
        // BabylonjsGuiImageBasedSlider.displayThumb (boolean):
        if (oldProps.displayThumb !== newProps.displayThumb) {
            updates.push({
                propertyName: 'displayThumb',
                value: newProps.displayThumb,
                type: 'boolean'
            });
        }
        // BabylonjsGuiImageBasedSlider.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.thumbImage.
        // TODO: type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.valueBarImage.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export class FiberImageBasedSlider implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageBasedSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageBasedSlider",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberDisplayGridPropsHandler implements PropsHandler<BabylonjsGuiDisplayGrid, FiberDisplayGridProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiDisplayGrid, oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiDisplayGrid.background (string):
        if (oldProps.background !== newProps.background) {
            updates.push({
                propertyName: 'background',
                value: newProps.background,
                type: 'string'
            });
        }
        // BabylonjsGuiDisplayGrid.cellHeight (number):
        if (oldProps.cellHeight !== newProps.cellHeight) {
            updates.push({
                propertyName: 'cellHeight',
                value: newProps.cellHeight,
                type: 'number'
            });
        }
        // BabylonjsGuiDisplayGrid.cellWidth (number):
        if (oldProps.cellWidth !== newProps.cellWidth) {
            updates.push({
                propertyName: 'cellWidth',
                value: newProps.cellWidth,
                type: 'number'
            });
        }
        // BabylonjsGuiDisplayGrid.displayMajorLines (boolean):
        if (oldProps.displayMajorLines !== newProps.displayMajorLines) {
            updates.push({
                propertyName: 'displayMajorLines',
                value: newProps.displayMajorLines,
                type: 'boolean'
            });
        }
        // BabylonjsGuiDisplayGrid.displayMinorLines (boolean):
        if (oldProps.displayMinorLines !== newProps.displayMinorLines) {
            updates.push({
                propertyName: 'displayMinorLines',
                value: newProps.displayMinorLines,
                type: 'boolean'
            });
        }
        // BabylonjsGuiDisplayGrid.majorLineColor (string):
        if (oldProps.majorLineColor !== newProps.majorLineColor) {
            updates.push({
                propertyName: 'majorLineColor',
                value: newProps.majorLineColor,
                type: 'string'
            });
        }
        // BabylonjsGuiDisplayGrid.majorLineFrequency (number):
        if (oldProps.majorLineFrequency !== newProps.majorLineFrequency) {
            updates.push({
                propertyName: 'majorLineFrequency',
                value: newProps.majorLineFrequency,
                type: 'number'
            });
        }
        // BabylonjsGuiDisplayGrid.majorLineTickness (number):
        if (oldProps.majorLineTickness !== newProps.majorLineTickness) {
            updates.push({
                propertyName: 'majorLineTickness',
                value: newProps.majorLineTickness,
                type: 'number'
            });
        }
        // BabylonjsGuiDisplayGrid.minorLineColor (string):
        if (oldProps.minorLineColor !== newProps.minorLineColor) {
            updates.push({
                propertyName: 'minorLineColor',
                value: newProps.minorLineColor,
                type: 'string'
            });
        }
        // BabylonjsGuiDisplayGrid.minorLineTickness (number):
        if (oldProps.minorLineTickness !== newProps.minorLineTickness) {
            updates.push({
                propertyName: 'minorLineTickness',
                value: newProps.minorLineTickness,
                type: 'number'
            });
        }
        // BabylonjsGuiDisplayGrid.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export class FiberDisplayGrid implements HasPropsHandlers<BabylonjsGuiControl, FiberControlProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl, FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDisplayGridPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl, FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl, FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DisplayGrid",
        "namespace": "@babylonjs/gui/2D/controls/control",
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

export class FiberControl3DPropsHandler implements PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiControl3D, oldProps: FiberControl3DProps, newProps: FiberControl3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiControl3D.isVisible (boolean):
        if (oldProps.isVisible !== newProps.isVisible) {
            updates.push({
                propertyName: 'isVisible',
                value: newProps.isVisible,
                type: 'boolean'
            });
        }
        // BabylonjsGuiControl3D.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerClickObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>/fn':
        if (oldProps.onPointerClickObservable === undefined && oldProps.onPointerClickObservable !== newProps.onPointerClickObservable) {
            updates.push({
                propertyName: 'onPointerClickObservable',
                value: newProps.onPointerClickObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerDownObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>/fn':
        if (oldProps.onPointerDownObservable === undefined && oldProps.onPointerDownObservable !== newProps.onPointerDownObservable) {
            updates.push({
                propertyName: 'onPointerDownObservable',
                value: newProps.onPointerDownObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerEnterObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl3D>/fn':
        if (oldProps.onPointerEnterObservable === undefined && oldProps.onPointerEnterObservable !== newProps.onPointerEnterObservable) {
            updates.push({
                propertyName: 'onPointerEnterObservable',
                value: newProps.onPointerEnterObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl3D>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerMoveObservable of type 'BabylonjsCoreObservable<BabylonjsCoreVector3>/fn':
        if (oldProps.onPointerMoveObservable === undefined && oldProps.onPointerMoveObservable !== newProps.onPointerMoveObservable) {
            updates.push({
                propertyName: 'onPointerMoveObservable',
                value: newProps.onPointerMoveObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerOutObservable of type 'BabylonjsCoreObservable<BabylonjsGuiControl3D>/fn':
        if (oldProps.onPointerOutObservable === undefined && oldProps.onPointerOutObservable !== newProps.onPointerOutObservable) {
            updates.push({
                propertyName: 'onPointerOutObservable',
                value: newProps.onPointerOutObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiControl3D>'
            });
        }
        // xxx-ns-xxx.BabylonjsGuiControl3D.onPointerUpObservable of type 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>/fn':
        if (oldProps.onPointerUpObservable === undefined && oldProps.onPointerUpObservable !== newProps.onPointerUpObservable) {
            updates.push({
                propertyName: 'onPointerUpObservable',
                value: newProps.onPointerUpObservable,
                type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>'
            });
        }
        // TODO: type: 'BabylonjsGuiContainer3D' property (not coded) BabylonjsGuiControl3D.parent.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerDownAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerEnterAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerOutAnimation.
        // TODO: type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerUpAnimation.
        // BabylonjsGuiControl3D.position (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.position && (!oldProps.position || !oldProps.position.equals(newProps.position))) {
            updates.push({
                propertyName: 'position',
                value: newProps.position,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsGuiControl3D.scaling (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.scaling && (!oldProps.scaling || !oldProps.scaling.equals(newProps.scaling))) {
            updates.push({
                propertyName: 'scaling',
                value: newProps.scaling,
                type: 'BabylonjsCoreVector3'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export class FiberControl3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberContainer3DPropsHandler implements PropsHandler<BabylonjsGuiContainer3D, FiberContainer3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiContainer3D, oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiContainer3D.blockLayout (boolean):
        if (oldProps.blockLayout !== newProps.blockLayout) {
            updates.push({
                propertyName: 'blockLayout',
                value: newProps.blockLayout,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export class FiberContainer3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberVolumeBasedPanelPropsHandler implements PropsHandler<BabylonjsGuiVolumeBasedPanel, FiberVolumeBasedPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiVolumeBasedPanel, oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiVolumeBasedPanel.columns (number):
        if (oldProps.columns !== newProps.columns) {
            updates.push({
                propertyName: 'columns',
                value: newProps.columns,
                type: 'number'
            });
        }
        // BabylonjsGuiVolumeBasedPanel.margin (number):
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'number'
            });
        }
        // BabylonjsGuiVolumeBasedPanel.orientation (number):
        if (oldProps.orientation !== newProps.orientation) {
            updates.push({
                propertyName: 'orientation',
                value: newProps.orientation,
                type: 'number'
            });
        }
        // BabylonjsGuiVolumeBasedPanel.rows (number):
        if (oldProps.rows !== newProps.rows) {
            updates.push({
                propertyName: 'rows',
                value: newProps.rows,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export class FiberVolumeBasedPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VolumeBasedPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberVolumeBasedPanel"
    };
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<BabylonjsGuiCylinderPanel, FiberCylinderPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiCylinderPanel, oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiCylinderPanel.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export class FiberCylinderPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCylinderPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CylinderPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberCylinderPanel"
    };
}

export class FiberPlanePanelPropsHandler implements PropsHandler<BabylonjsGuiPlanePanel, FiberPlanePanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiPlanePanel, oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export class FiberPlanePanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPlanePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PlanePanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberPlanePanel"
    };
}

export class FiberScatterPanelPropsHandler implements PropsHandler<BabylonjsGuiScatterPanel, FiberScatterPanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiScatterPanel, oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiScatterPanel.iteration (number):
        if (oldProps.iteration !== newProps.iteration) {
            updates.push({
                propertyName: 'iteration',
                value: newProps.iteration,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export class FiberScatterPanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScatterPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScatterPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberScatterPanel"
    };
}

export class FiberSpherePanelPropsHandler implements PropsHandler<BabylonjsGuiSpherePanel, FiberSpherePanelProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiSpherePanel, oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiSpherePanel.radius (number):
        if (oldProps.radius !== newProps.radius) {
            updates.push({
                propertyName: 'radius',
                value: newProps.radius,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export class FiberSpherePanel implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpherePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpherePanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberSpherePanel"
    };
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<BabylonjsGuiStackPanel3D, FiberStackPanel3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiStackPanel3D, oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiStackPanel3D.isVertical (boolean):
        if (oldProps.isVertical !== newProps.isVertical) {
            updates.push({
                propertyName: 'isVertical',
                value: newProps.isVertical,
                type: 'boolean'
            });
        }
        // BabylonjsGuiStackPanel3D.margin (number):
        if (oldProps.margin !== newProps.margin) {
            updates.push({
                propertyName: 'margin',
                value: newProps.margin,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export class FiberStackPanel3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanel3DPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberAbstractButton3DPropsHandler implements PropsHandler<BabylonjsGuiAbstractButton3D, FiberAbstractButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiAbstractButton3D, oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export class FiberAbstractButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractButton3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberButton3DPropsHandler implements PropsHandler<BabylonjsGuiButton3D, FiberButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiButton3D, oldProps: FiberButton3DProps, newProps: FiberButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiButton3D.content (BabylonjsGuiControl) sets once:
        if (newProps.content && (!oldProps.content)) {
            updates.push({
                propertyName: 'content',
                value: newProps.content,
                type: 'BabylonjsGuiControl'
            });
        }
        // BabylonjsGuiButton3D.contentResolution (number):
        if (oldProps.contentResolution !== newProps.contentResolution) {
            updates.push({
                propertyName: 'contentResolution',
                value: newProps.contentResolution,
                type: 'number'
            });
        }
        // BabylonjsGuiButton3D.contentScaleRatio (number):
        if (oldProps.contentScaleRatio !== newProps.contentScaleRatio) {
            updates.push({
                propertyName: 'contentScaleRatio',
                value: newProps.contentScaleRatio,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export class FiberButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberHolographicButtonPropsHandler implements PropsHandler<BabylonjsGuiHolographicButton, FiberHolographicButtonProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiHolographicButton, oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsGuiHolographicButton.imageUrl (string):
        if (oldProps.imageUrl !== newProps.imageUrl) {
            updates.push({
                propertyName: 'imageUrl',
                value: newProps.imageUrl,
                type: 'string'
            });
        }
        // BabylonjsGuiHolographicButton.renderingGroupId (number):
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        // BabylonjsGuiHolographicButton.text (string):
        if (oldProps.text !== newProps.text) {
            updates.push({
                propertyName: 'text',
                value: newProps.text,
                type: 'string'
            });
        }
        // BabylonjsGuiHolographicButton.tooltipText (string):
        if (oldProps.tooltipText !== newProps.tooltipText) {
            updates.push({
                propertyName: 'tooltipText',
                value: newProps.tooltipText,
                type: 'string'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export class FiberHolographicButton implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHolographicButtonPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HolographicButton",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberMeshButton3DPropsHandler implements PropsHandler<BabylonjsGuiMeshButton3D, FiberMeshButton3DProps> {
    getPropertyUpdates(hostInstance: BabylonjsGuiMeshButton3D, oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export class FiberMeshButton3D implements HasPropsHandlers<BabylonjsGuiControl3D, FiberControl3DProps> {
    private propsHandlers: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshButton3DPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsGuiControl3D, FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MeshButton3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
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

export class FiberEffectLayerPropsHandler implements PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreEffectLayer, oldProps: FiberEffectLayerProps, newProps: FiberEffectLayerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreEffectLayer.isEnabled (boolean):
        if (oldProps.isEnabled !== newProps.isEnabled) {
            updates.push({
                propertyName: 'isEnabled',
                value: newProps.isEnabled,
                type: 'boolean'
            });
        }
        // BabylonjsCoreEffectLayer.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // BabylonjsCoreEffectLayer.neutralColor of BabylonjsCoreColor4.  Color4.equals() not available in BabylonJS < 4:
        if (newProps.neutralColor && (!oldProps.neutralColor || oldProps.neutralColor.r !== newProps.neutralColor.r || oldProps.neutralColor.g !== newProps.neutralColor.g || oldProps.neutralColor.b !== newProps.neutralColor.b || oldProps.neutralColor.a !== newProps.neutralColor.a)) {
            updates.push({
                propertyName: 'neutralColor',
                value: newProps.neutralColor,
                type: 'BabylonjsCoreColor4'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onAfterComposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>/fn':
        if (oldProps.onAfterComposeObservable === undefined && oldProps.onAfterComposeObservable !== newProps.onAfterComposeObservable) {
            updates.push({
                propertyName: 'onAfterComposeObservable',
                value: newProps.onAfterComposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onAfterRenderMeshToEffect of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onAfterRenderMeshToEffect === undefined && oldProps.onAfterRenderMeshToEffect !== newProps.onAfterRenderMeshToEffect) {
            updates.push({
                propertyName: 'onAfterRenderMeshToEffect',
                value: newProps.onAfterRenderMeshToEffect,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onBeforeComposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>/fn':
        if (oldProps.onBeforeComposeObservable === undefined && oldProps.onBeforeComposeObservable !== newProps.onBeforeComposeObservable) {
            updates.push({
                propertyName: 'onBeforeComposeObservable',
                value: newProps.onBeforeComposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onBeforeRenderMainTextureObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>/fn':
        if (oldProps.onBeforeRenderMainTextureObservable === undefined && oldProps.onBeforeRenderMainTextureObservable !== newProps.onBeforeRenderMainTextureObservable) {
            updates.push({
                propertyName: 'onBeforeRenderMainTextureObservable',
                value: newProps.onBeforeRenderMainTextureObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onBeforeRenderMeshToEffect of type 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>/fn':
        if (oldProps.onBeforeRenderMeshToEffect === undefined && oldProps.onBeforeRenderMeshToEffect !== newProps.onBeforeRenderMeshToEffect) {
            updates.push({
                propertyName: 'onBeforeRenderMeshToEffect',
                value: newProps.onBeforeRenderMeshToEffect,
                type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onDisposeObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>/fn':
        if (oldProps.onDisposeObservable === undefined && oldProps.onDisposeObservable !== newProps.onDisposeObservable) {
            updates.push({
                propertyName: 'onDisposeObservable',
                value: newProps.onDisposeObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreEffectLayer.onSizeChangedObservable of type 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>/fn':
        if (oldProps.onSizeChangedObservable === undefined && oldProps.onSizeChangedObservable !== newProps.onSizeChangedObservable) {
            updates.push({
                propertyName: 'onSizeChangedObservable',
                value: newProps.onSizeChangedObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>'
            });
        }
        // BabylonjsCoreEffectLayer.renderingGroupId (number):
        if (oldProps.renderingGroupId !== newProps.renderingGroupId) {
            updates.push({
                propertyName: 'renderingGroupId',
                value: newProps.renderingGroupId,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberEffectLayer implements HasPropsHandlers<BabylonjsCoreEffectLayer, FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EffectLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
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

export class FiberGlowLayerPropsHandler implements PropsHandler<BabylonjsCoreGlowLayer, FiberGlowLayerProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreGlowLayer, oldProps: FiberGlowLayerProps, newProps: FiberGlowLayerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreGlowLayer.blurKernelSize (number):
        if (oldProps.blurKernelSize !== newProps.blurKernelSize) {
            updates.push({
                propertyName: 'blurKernelSize',
                value: newProps.blurKernelSize,
                type: 'number'
            });
        }
        // TODO: type: '(mesh: BabylonjsCoreMesh, subMesh: BabylonjsCoreSubMesh, material: BabylonjsCoreMaterial, result: BabylonjsCoreColor4) => void' property (not coded) BabylonjsCoreGlowLayer.customEmissiveColorSelector.
        // TODO: type: '(mesh: BabylonjsCoreMesh, subMesh: BabylonjsCoreSubMesh, material: BabylonjsCoreMaterial) => BabylonjsCoreTexture' property (not coded) BabylonjsCoreGlowLayer.customEmissiveTextureSelector.
        // BabylonjsCoreGlowLayer.intensity (number):
        if (oldProps.intensity !== newProps.intensity) {
            updates.push({
                propertyName: 'intensity',
                value: newProps.intensity,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberGlowLayer implements HasPropsHandlers<BabylonjsCoreEffectLayer, FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGlowLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GlowLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
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

export class FiberHighlightLayerPropsHandler implements PropsHandler<BabylonjsCoreHighlightLayer, FiberHighlightLayerProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreHighlightLayer, oldProps: FiberHighlightLayerProps, newProps: FiberHighlightLayerProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreHighlightLayer.blurHorizontalSize (number):
        if (oldProps.blurHorizontalSize !== newProps.blurHorizontalSize) {
            updates.push({
                propertyName: 'blurHorizontalSize',
                value: newProps.blurHorizontalSize,
                type: 'number'
            });
        }
        // BabylonjsCoreHighlightLayer.blurVerticalSize (number):
        if (oldProps.blurVerticalSize !== newProps.blurVerticalSize) {
            updates.push({
                propertyName: 'blurVerticalSize',
                value: newProps.blurVerticalSize,
                type: 'number'
            });
        }
        // BabylonjsCoreHighlightLayer.innerGlow (boolean):
        if (oldProps.innerGlow !== newProps.innerGlow) {
            updates.push({
                propertyName: 'innerGlow',
                value: newProps.innerGlow,
                type: 'boolean'
            });
        }
        // BabylonjsCoreHighlightLayer.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreHighlightLayer.onAfterBlurObservable of type 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>/fn':
        if (oldProps.onAfterBlurObservable === undefined && oldProps.onAfterBlurObservable !== newProps.onAfterBlurObservable) {
            updates.push({
                propertyName: 'onAfterBlurObservable',
                value: newProps.onAfterBlurObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreHighlightLayer.onBeforeBlurObservable of type 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>/fn':
        if (oldProps.onBeforeBlurObservable === undefined && oldProps.onBeforeBlurObservable !== newProps.onBeforeBlurObservable) {
            updates.push({
                propertyName: 'onBeforeBlurObservable',
                value: newProps.onBeforeBlurObservable,
                type: 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>'
            });
        }
        // BabylonjsCoreHighlightLayer.outerGlow (boolean):
        if (oldProps.outerGlow !== newProps.outerGlow) {
            updates.push({
                propertyName: 'outerGlow',
                value: newProps.outerGlow,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
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
export class FiberHighlightLayer implements HasPropsHandlers<BabylonjsCoreEffectLayer, FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHighlightLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreEffectLayer, FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HighlightLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
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
        "isTexture": true,
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
        "isTexture": true,
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
        // ExtensionsDynamicTerrain.LODLimits (number[]) (just length - missing loop + indexOf comparison):
        if (newProps.LODLimits && (!oldProps.LODLimits || oldProps.LODLimits.length !== newProps.LODLimits.length)) {
            updates.push({
                propertyName: 'LODLimits',
                value: newProps.LODLimits,
                type: 'number[]'
            });
        }
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
        // TODO: type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapColors.
        // TODO: type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapData.
        // TODO: type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapNormals.
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
        // TODO: type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapUVs.
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

export class FiberAutoRotationBehaviorPropsHandler implements PropsHandler<BabylonjsCoreAutoRotationBehavior, FiberAutoRotationBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAutoRotationBehavior, oldProps: FiberAutoRotationBehaviorProps, newProps: FiberAutoRotationBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreAutoRotationBehavior.idleRotationSpeed (number):
        if (oldProps.idleRotationSpeed !== newProps.idleRotationSpeed) {
            updates.push({
                propertyName: 'idleRotationSpeed',
                value: newProps.idleRotationSpeed,
                type: 'number'
            });
        }
        // BabylonjsCoreAutoRotationBehavior.idleRotationSpinupTime (number):
        if (oldProps.idleRotationSpinupTime !== newProps.idleRotationSpinupTime) {
            updates.push({
                propertyName: 'idleRotationSpinupTime',
                value: newProps.idleRotationSpinupTime,
                type: 'number'
            });
        }
        // BabylonjsCoreAutoRotationBehavior.idleRotationWaitTime (number):
        if (oldProps.idleRotationWaitTime !== newProps.idleRotationWaitTime) {
            updates.push({
                propertyName: 'idleRotationWaitTime',
                value: newProps.idleRotationWaitTime,
                type: 'number'
            });
        }
        // BabylonjsCoreAutoRotationBehavior.zoomStopsAnimation (boolean):
        if (oldProps.zoomStopsAnimation !== newProps.zoomStopsAnimation) {
            updates.push({
                propertyName: 'zoomStopsAnimation',
                value: newProps.zoomStopsAnimation,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.
 *
 * This code has been generated
 */
export class FiberAutoRotationBehavior implements HasPropsHandlers<BabylonjsCoreAutoRotationBehavior, FiberAutoRotationBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreAutoRotationBehavior, FiberAutoRotationBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAutoRotationBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreAutoRotationBehavior, FiberAutoRotationBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreAutoRotationBehavior, FiberAutoRotationBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AutoRotationBehavior",
        "namespace": "@babylonjs/core/Behaviors/Cameras/autoRotationBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberAutoRotationBehavior"
    };
}

export class FiberBouncingBehaviorPropsHandler implements PropsHandler<BabylonjsCoreBouncingBehavior, FiberBouncingBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreBouncingBehavior, oldProps: FiberBouncingBehaviorProps, newProps: FiberBouncingBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreBouncingBehavior.autoTransitionRange (boolean):
        if (oldProps.autoTransitionRange !== newProps.autoTransitionRange) {
            updates.push({
                propertyName: 'autoTransitionRange',
                value: newProps.autoTransitionRange,
                type: 'boolean'
            });
        }
        // BabylonjsCoreBouncingBehavior.lowerRadiusTransitionRange (number):
        if (oldProps.lowerRadiusTransitionRange !== newProps.lowerRadiusTransitionRange) {
            updates.push({
                propertyName: 'lowerRadiusTransitionRange',
                value: newProps.lowerRadiusTransitionRange,
                type: 'number'
            });
        }
        // BabylonjsCoreBouncingBehavior.transitionDuration (number):
        if (oldProps.transitionDuration !== newProps.transitionDuration) {
            updates.push({
                propertyName: 'transitionDuration',
                value: newProps.transitionDuration,
                type: 'number'
            });
        }
        // BabylonjsCoreBouncingBehavior.upperRadiusTransitionRange (number):
        if (oldProps.upperRadiusTransitionRange !== newProps.upperRadiusTransitionRange) {
            updates.push({
                propertyName: 'upperRadiusTransitionRange',
                value: newProps.upperRadiusTransitionRange,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
 *
 * This code has been generated
 */
export class FiberBouncingBehavior implements HasPropsHandlers<BabylonjsCoreBouncingBehavior, FiberBouncingBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreBouncingBehavior, FiberBouncingBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBouncingBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreBouncingBehavior, FiberBouncingBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreBouncingBehavior, FiberBouncingBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BouncingBehavior",
        "namespace": "@babylonjs/core/Behaviors/Cameras/bouncingBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberBouncingBehavior"
    };
}

export class FiberFramingBehaviorPropsHandler implements PropsHandler<BabylonjsCoreFramingBehavior, FiberFramingBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFramingBehavior, oldProps: FiberFramingBehaviorProps, newProps: FiberFramingBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreFramingBehavior.autoCorrectCameraLimitsAndSensibility (boolean):
        if (oldProps.autoCorrectCameraLimitsAndSensibility !== newProps.autoCorrectCameraLimitsAndSensibility) {
            updates.push({
                propertyName: 'autoCorrectCameraLimitsAndSensibility',
                value: newProps.autoCorrectCameraLimitsAndSensibility,
                type: 'boolean'
            });
        }
        // BabylonjsCoreFramingBehavior.defaultElevation (number):
        if (oldProps.defaultElevation !== newProps.defaultElevation) {
            updates.push({
                propertyName: 'defaultElevation',
                value: newProps.defaultElevation,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.elevationReturnTime (number):
        if (oldProps.elevationReturnTime !== newProps.elevationReturnTime) {
            updates.push({
                propertyName: 'elevationReturnTime',
                value: newProps.elevationReturnTime,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.elevationReturnWaitTime (number):
        if (oldProps.elevationReturnWaitTime !== newProps.elevationReturnWaitTime) {
            updates.push({
                propertyName: 'elevationReturnWaitTime',
                value: newProps.elevationReturnWaitTime,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.framingTime (number):
        if (oldProps.framingTime !== newProps.framingTime) {
            updates.push({
                propertyName: 'framingTime',
                value: newProps.framingTime,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.mode (number):
        if (oldProps.mode !== newProps.mode) {
            updates.push({
                propertyName: 'mode',
                value: newProps.mode,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.positionScale (number):
        if (oldProps.positionScale !== newProps.positionScale) {
            updates.push({
                propertyName: 'positionScale',
                value: newProps.positionScale,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.radiusScale (number):
        if (oldProps.radiusScale !== newProps.radiusScale) {
            updates.push({
                propertyName: 'radiusScale',
                value: newProps.radiusScale,
                type: 'number'
            });
        }
        // BabylonjsCoreFramingBehavior.zoomStopsAnimation (boolean):
        if (oldProps.zoomStopsAnimation !== newProps.zoomStopsAnimation) {
            updates.push({
                propertyName: 'zoomStopsAnimation',
                value: newProps.zoomStopsAnimation,
                type: 'boolean'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.
 *
 * This code has been generated
 */
export class FiberFramingBehavior implements HasPropsHandlers<BabylonjsCoreFramingBehavior, FiberFramingBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreFramingBehavior, FiberFramingBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFramingBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreFramingBehavior, FiberFramingBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreFramingBehavior, FiberFramingBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FramingBehavior",
        "namespace": "@babylonjs/core/Behaviors/Cameras/framingBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberFramingBehavior"
    };
}

export class FiberAttachToBoxBehaviorPropsHandler implements PropsHandler<BabylonjsCoreAttachToBoxBehavior, FiberAttachToBoxBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreAttachToBoxBehavior, oldProps: FiberAttachToBoxBehaviorProps, newProps: FiberAttachToBoxBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreAttachToBoxBehavior.distanceAwayFromBottomOfFace (number):
        if (oldProps.distanceAwayFromBottomOfFace !== newProps.distanceAwayFromBottomOfFace) {
            updates.push({
                propertyName: 'distanceAwayFromBottomOfFace',
                value: newProps.distanceAwayFromBottomOfFace,
                type: 'number'
            });
        }
        // BabylonjsCoreAttachToBoxBehavior.distanceAwayFromFace (number):
        if (oldProps.distanceAwayFromFace !== newProps.distanceAwayFromFace) {
            updates.push({
                propertyName: 'distanceAwayFromFace',
                value: newProps.distanceAwayFromFace,
                type: 'number'
            });
        }
        // BabylonjsCoreAttachToBoxBehavior.name (string):
        if (oldProps.name !== newProps.name) {
            updates.push({
                propertyName: 'name',
                value: newProps.name,
                type: 'string'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreAttachToBoxBehavior.ui.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera
 *
 * This code has been generated
 */
export class FiberAttachToBoxBehavior implements HasPropsHandlers<BabylonjsCoreAttachToBoxBehavior, FiberAttachToBoxBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreAttachToBoxBehavior, FiberAttachToBoxBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAttachToBoxBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreAttachToBoxBehavior, FiberAttachToBoxBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreAttachToBoxBehavior, FiberAttachToBoxBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AttachToBoxBehavior",
        "namespace": "@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior",
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

export class FiberFadeInOutBehaviorPropsHandler implements PropsHandler<BabylonjsCoreFadeInOutBehavior, FiberFadeInOutBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreFadeInOutBehavior, oldProps: FiberFadeInOutBehaviorProps, newProps: FiberFadeInOutBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreFadeInOutBehavior.delay (number):
        if (oldProps.delay !== newProps.delay) {
            updates.push({
                propertyName: 'delay',
                value: newProps.delay,
                type: 'number'
            });
        }
        // BabylonjsCoreFadeInOutBehavior.fadeInTime (number):
        if (oldProps.fadeInTime !== newProps.fadeInTime) {
            updates.push({
                propertyName: 'fadeInTime',
                value: newProps.fadeInTime,
                type: 'number'
            });
        }
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 *
 * This code has been generated
 */
export class FiberFadeInOutBehavior implements HasPropsHandlers<BabylonjsCoreFadeInOutBehavior, FiberFadeInOutBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreFadeInOutBehavior, FiberFadeInOutBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFadeInOutBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreFadeInOutBehavior, FiberFadeInOutBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreFadeInOutBehavior, FiberFadeInOutBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FadeInOutBehavior",
        "namespace": "@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberFadeInOutBehavior"
    };
}

export class FiberMultiPointerScaleBehaviorPropsHandler implements PropsHandler<BabylonjsCoreMultiPointerScaleBehavior, FiberMultiPointerScaleBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreMultiPointerScaleBehavior, oldProps: FiberMultiPointerScaleBehaviorProps, newProps: FiberMultiPointerScaleBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be scaled
 *
 * This code has been generated
 */
export class FiberMultiPointerScaleBehavior implements HasPropsHandlers<BabylonjsCoreMultiPointerScaleBehavior, FiberMultiPointerScaleBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreMultiPointerScaleBehavior, FiberMultiPointerScaleBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiPointerScaleBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreMultiPointerScaleBehavior, FiberMultiPointerScaleBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreMultiPointerScaleBehavior, FiberMultiPointerScaleBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiPointerScaleBehavior",
        "namespace": "@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberMultiPointerScaleBehavior"
    };
}

export class FiberPointerDragBehaviorPropsHandler implements PropsHandler<BabylonjsCorePointerDragBehavior, FiberPointerDragBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCorePointerDragBehavior, oldProps: FiberPointerDragBehaviorProps, newProps: FiberPointerDragBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // TODO: type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCorePointerDragBehavior.attachedNode.
        // BabylonjsCorePointerDragBehavior.currentDraggingPointerID (number):
        if (oldProps.currentDraggingPointerID !== newProps.currentDraggingPointerID) {
            updates.push({
                propertyName: 'currentDraggingPointerID',
                value: newProps.currentDraggingPointerID,
                type: 'number'
            });
        }
        // BabylonjsCorePointerDragBehavior.detachCameraControls (boolean):
        if (oldProps.detachCameraControls !== newProps.detachCameraControls) {
            updates.push({
                propertyName: 'detachCameraControls',
                value: newProps.detachCameraControls,
                type: 'boolean'
            });
        }
        // BabylonjsCorePointerDragBehavior.dragDeltaRatio (number):
        if (oldProps.dragDeltaRatio !== newProps.dragDeltaRatio) {
            updates.push({
                propertyName: 'dragDeltaRatio',
                value: newProps.dragDeltaRatio,
                type: 'number'
            });
        }
        // BabylonjsCorePointerDragBehavior.dragging (boolean):
        if (oldProps.dragging !== newProps.dragging) {
            updates.push({
                propertyName: 'dragging',
                value: newProps.dragging,
                type: 'boolean'
            });
        }
        // BabylonjsCorePointerDragBehavior.enabled (boolean):
        if (oldProps.enabled !== newProps.enabled) {
            updates.push({
                propertyName: 'enabled',
                value: newProps.enabled,
                type: 'boolean'
            });
        }
        // BabylonjsCorePointerDragBehavior.lastDragPosition (BabylonjsCoreVector3 uses object equals to find diffs):
        if (newProps.lastDragPosition && (!oldProps.lastDragPosition || !oldProps.lastDragPosition.equals(newProps.lastDragPosition))) {
            updates.push({
                propertyName: 'lastDragPosition',
                value: newProps.lastDragPosition,
                type: 'BabylonjsCoreVector3'
            });
        }
        // BabylonjsCorePointerDragBehavior.maxDragAngle (number):
        if (oldProps.maxDragAngle !== newProps.maxDragAngle) {
            updates.push({
                propertyName: 'maxDragAngle',
                value: newProps.maxDragAngle,
                type: 'number'
            });
        }
        // BabylonjsCorePointerDragBehavior.moveAttached (boolean):
        if (oldProps.moveAttached !== newProps.moveAttached) {
            updates.push({
                propertyName: 'moveAttached',
                value: newProps.moveAttached,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePointerDragBehavior.onDragEndObservable of type 'BabylonjsCoreObservable<{ dragPlanePoint: BabylonjsCoreVector3; pointerId: number; }>/fn':
        if (oldProps.onDragEndObservable === undefined && oldProps.onDragEndObservable !== newProps.onDragEndObservable) {
            updates.push({
                propertyName: 'onDragEndObservable',
                value: newProps.onDragEndObservable,
                type: 'BabylonjsCoreObservable<{ dragPlanePoint: BabylonjsCoreVector3; pointerId: number; }>'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePointerDragBehavior.onDragObservable of type 'BabylonjsCoreObservable<{ delta: BabylonjsCoreVector3; dragPlanePoint: BabylonjsCoreVector3; dragPlaneNormal: BabylonjsCoreVector3; dragDistance: number; pointerId: number; }>/fn':
        if (oldProps.onDragObservable === undefined && oldProps.onDragObservable !== newProps.onDragObservable) {
            updates.push({
                propertyName: 'onDragObservable',
                value: newProps.onDragObservable,
                type: 'BabylonjsCoreObservable<{ delta: BabylonjsCoreVector3; dragPlanePoint: BabylonjsCoreVector3; dragPlaneNormal: BabylonjsCoreVector3; dragDistance: number; pointerId: number; }>'
            });
        }
        // xxx-ns-xxx.BabylonjsCorePointerDragBehavior.onDragStartObservable of type 'BabylonjsCoreObservable<{ dragPlanePoint: BabylonjsCoreVector3; pointerId: number; }>/fn':
        if (oldProps.onDragStartObservable === undefined && oldProps.onDragStartObservable !== newProps.onDragStartObservable) {
            updates.push({
                propertyName: 'onDragStartObservable',
                value: newProps.onDragStartObservable,
                type: 'BabylonjsCoreObservable<{ dragPlanePoint: BabylonjsCoreVector3; pointerId: number; }>'
            });
        }
        // TODO: type: '{ dragAxis?: BabylonjsCoreVector3; dragPlaneNormal?: BabylonjsCoreVector3; }' property (not coded) BabylonjsCorePointerDragBehavior.options.
        // BabylonjsCorePointerDragBehavior.startAndReleaseDragOnPointerEvents (boolean):
        if (oldProps.startAndReleaseDragOnPointerEvents !== newProps.startAndReleaseDragOnPointerEvents) {
            updates.push({
                propertyName: 'startAndReleaseDragOnPointerEvents',
                value: newProps.startAndReleaseDragOnPointerEvents,
                type: 'boolean'
            });
        }
        // BabylonjsCorePointerDragBehavior.updateDragPlane (boolean):
        if (oldProps.updateDragPlane !== newProps.updateDragPlane) {
            updates.push({
                propertyName: 'updateDragPlane',
                value: newProps.updateDragPlane,
                type: 'boolean'
            });
        }
        // BabylonjsCorePointerDragBehavior.useObjectOrientationForDragging (boolean):
        if (oldProps.useObjectOrientationForDragging !== newProps.useObjectOrientationForDragging) {
            updates.push({
                propertyName: 'useObjectOrientationForDragging',
                value: newProps.useObjectOrientationForDragging,
                type: 'boolean'
            });
        }
        // TODO: type: '(targetPosition: BabylonjsCoreVector3) => boolean' property (not coded) BabylonjsCorePointerDragBehavior.validateDrag.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events
 *
 * This code has been generated
 */
export class FiberPointerDragBehavior implements HasPropsHandlers<BabylonjsCorePointerDragBehavior, FiberPointerDragBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCorePointerDragBehavior, FiberPointerDragBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointerDragBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCorePointerDragBehavior, FiberPointerDragBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCorePointerDragBehavior, FiberPointerDragBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointerDragBehavior",
        "namespace": "@babylonjs/core/Behaviors/Meshes/pointerDragBehavior",
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

export class FiberSixDofDragBehaviorPropsHandler implements PropsHandler<BabylonjsCoreSixDofDragBehavior, FiberSixDofDragBehaviorProps> {
    getPropertyUpdates(hostInstance: BabylonjsCoreSixDofDragBehavior, oldProps: FiberSixDofDragBehaviorProps, newProps: FiberSixDofDragBehaviorProps, scene: BabylonjsCoreScene): PropertyUpdate[] | null {
        // generated code
        let updates: PropertyUpdate[] = [];
        // BabylonjsCoreSixDofDragBehavior.currentDraggingPointerID (number):
        if (oldProps.currentDraggingPointerID !== newProps.currentDraggingPointerID) {
            updates.push({
                propertyName: 'currentDraggingPointerID',
                value: newProps.currentDraggingPointerID,
                type: 'number'
            });
        }
        // BabylonjsCoreSixDofDragBehavior.detachCameraControls (boolean):
        if (oldProps.detachCameraControls !== newProps.detachCameraControls) {
            updates.push({
                propertyName: 'detachCameraControls',
                value: newProps.detachCameraControls,
                type: 'boolean'
            });
        }
        // BabylonjsCoreSixDofDragBehavior.dragDeltaRatio (number):
        if (oldProps.dragDeltaRatio !== newProps.dragDeltaRatio) {
            updates.push({
                propertyName: 'dragDeltaRatio',
                value: newProps.dragDeltaRatio,
                type: 'number'
            });
        }
        // BabylonjsCoreSixDofDragBehavior.dragging (boolean):
        if (oldProps.dragging !== newProps.dragging) {
            updates.push({
                propertyName: 'dragging',
                value: newProps.dragging,
                type: 'boolean'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreSixDofDragBehavior.onDragEndObservable of type 'BabylonjsCoreObservable<{}>/fn':
        if (oldProps.onDragEndObservable === undefined && oldProps.onDragEndObservable !== newProps.onDragEndObservable) {
            updates.push({
                propertyName: 'onDragEndObservable',
                value: newProps.onDragEndObservable,
                type: 'BabylonjsCoreObservable<{}>'
            });
        }
        // xxx-ns-xxx.BabylonjsCoreSixDofDragBehavior.onDragStartObservable of type 'BabylonjsCoreObservable<{}>/fn':
        if (oldProps.onDragStartObservable === undefined && oldProps.onDragStartObservable !== newProps.onDragStartObservable) {
            updates.push({
                propertyName: 'onDragStartObservable',
                value: newProps.onDragStartObservable,
                type: 'BabylonjsCoreObservable<{}>'
            });
        }
        // BabylonjsCoreSixDofDragBehavior.rotateDraggedObject (boolean):
        if (oldProps.rotateDraggedObject !== newProps.rotateDraggedObject) {
            updates.push({
                propertyName: 'rotateDraggedObject',
                value: newProps.rotateDraggedObject,
                type: 'boolean'
            });
        }
        // TODO: type: 'any' property (not coded) BabylonjsCoreSixDofDragBehavior.zDragFactor.
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray
 *
 * This code has been generated
 */
export class FiberSixDofDragBehavior implements HasPropsHandlers<BabylonjsCoreSixDofDragBehavior, FiberSixDofDragBehaviorProps> {
    private propsHandlers: PropsHandler<BabylonjsCoreSixDofDragBehavior, FiberSixDofDragBehaviorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSixDofDragBehaviorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<BabylonjsCoreSixDofDragBehavior, FiberSixDofDragBehaviorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<BabylonjsCoreSixDofDragBehavior, FiberSixDofDragBehaviorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SixDofDragBehavior",
        "namespace": "@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isBehavior": true,
        "className": "FiberSixDofDragBehavior"
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

export const ADTForMesh: string = 'ADTForMesh', ADTFullscreenUI: string = 'ADTFullscreenUI', AbstractButton3D: string = 'AbstractButton3D', AbstractMesh: string = 'AbstractMesh', AdvancedDynamicTexture: string = 'AdvancedDynamicTexture', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', AttachToBoxBehavior: string = 'AttachToBoxBehavior', AutoRotationBehavior: string = 'AutoRotationBehavior', BackgroundMaterial: string = 'BackgroundMaterial', BaseSlider: string = 'BaseSlider', BaseTexture: string = 'BaseTexture', BouncingBehavior: string = 'BouncingBehavior', Box: string = 'Box', Button: string = 'Button', Button3D: string = 'Button3D', Camera: string = 'Camera', Checkbox: string = 'Checkbox', ColorGradingTexture: string = 'ColorGradingTexture', ColorPicker: string = 'ColorPicker', Container: string = 'Container', Container3D: string = 'Container3D', Control: string = 'Control', Control3D: string = 'Control3D', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', CylinderPanel: string = 'CylinderPanel', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DisplayGrid: string = 'DisplayGrid', DynamicTerrain: string = 'DynamicTerrain', DynamicTexture: string = 'DynamicTexture', EffectLayer: string = 'EffectLayer', Ellipse: string = 'Ellipse', EnvironmentHelper: string = 'EnvironmentHelper', EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FadeInOutBehavior: string = 'FadeInOutBehavior', FluentMaterial: string = 'FluentMaterial', FlyCamera: string = 'FlyCamera', FollowCamera: string = 'FollowCamera', FramingBehavior: string = 'FramingBehavior', FreeCamera: string = 'FreeCamera', GUI3DManager: string = 'GUI3DManager', GamepadCamera: string = 'GamepadCamera', GlowLayer: string = 'GlowLayer', Grid: string = 'Grid', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HemisphericLight: string = 'HemisphericLight', HighlightLayer: string = 'HighlightLayer', HolographicButton: string = 'HolographicButton', HtmlElementTexture: string = 'HtmlElementTexture', IcoSphere: string = 'IcoSphere', Image: string = 'Image', ImageBasedSlider: string = 'ImageBasedSlider', ImageScrollBar: string = 'ImageScrollBar', InputPassword: string = 'InputPassword', InputText: string = 'InputText', Lathe: string = 'Lathe', Light: string = 'Light', Line: string = 'Line', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', Mesh: string = 'Mesh', MeshButton3D: string = 'MeshButton3D', MirrorTexture: string = 'MirrorTexture', Model: string = 'Model', MultiLine: string = 'MultiLine', MultiMaterial: string = 'MultiMaterial', MultiPointerScaleBehavior: string = 'MultiPointerScaleBehavior', MultiRenderTarget: string = 'MultiRenderTarget', MultiviewRenderTarget: string = 'MultiviewRenderTarget', Node: string = 'Node', NodeMaterial: string = 'NodeMaterial', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', PhysicsImpostor: string = 'PhysicsImpostor', Plane: string = 'Plane', PlanePanel: string = 'PlanePanel', PointLight: string = 'PointLight', PointerDragBehavior: string = 'PointerDragBehavior', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', ProceduralTexture: string = 'ProceduralTexture', PushMaterial: string = 'PushMaterial', RadioButton: string = 'RadioButton', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture2DArray: string = 'RawTexture2DArray', RawTexture3D: string = 'RawTexture3D', Rectangle: string = 'Rectangle', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ScatterPanel: string = 'ScatterPanel', ScrollBar: string = 'ScrollBar', ScrollViewer: string = 'ScrollViewer', SelectionPanel: string = 'SelectionPanel', ShaderMaterial: string = 'ShaderMaterial', ShadowGenerator: string = 'ShadowGenerator', ShadowLight: string = 'ShadowLight', SixDofDragBehavior: string = 'SixDofDragBehavior', Slider: string = 'Slider', Sphere: string = 'Sphere', SpherePanel: string = 'SpherePanel', SpotLight: string = 'SpotLight', StackPanel: string = 'StackPanel', StackPanel3D: string = 'StackPanel3D', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', TextBlock: string = 'TextBlock', Texture: string = 'Texture', TiledBox: string = 'TiledBox', TiledGround: string = 'TiledGround', TiledPlane: string = 'TiledPlane', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', TransformNode: string = 'TransformNode', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', VirtualKeyboard: string = 'VirtualKeyboard', VolumeBasedPanel: string = 'VolumeBasedPanel', WebVRFreeCamera: string = 'WebVRFreeCamera', WebXRCamera: string = 'WebXRCamera', _ScrollViewerWindow: string = '_ScrollViewerWindow';
const classesMap: object = {
    dynamicTerrain: ExtensionsDynamicTerrain, DynamicTerrain: ExtensionsDynamicTerrain,
    abstractScene: BabylonjsCoreAbstractScene, AbstractScene: BabylonjsCoreAbstractScene,
    node: BabylonjsCoreNode, Node: BabylonjsCoreNode,
    scene: BabylonjsCoreScene, Scene: BabylonjsCoreScene,
    camera: BabylonjsCoreCamera, Camera: BabylonjsCoreCamera,
    environmentHelper: BabylonjsCoreEnvironmentHelper, EnvironmentHelper: BabylonjsCoreEnvironmentHelper,
    effectLayer: BabylonjsCoreEffectLayer, EffectLayer: BabylonjsCoreEffectLayer,
    light: BabylonjsCoreLight, Light: BabylonjsCoreLight,
    material: BabylonjsCoreMaterial, Material: BabylonjsCoreMaterial,
    mesh: BabylonjsCoreMesh, Mesh: BabylonjsCoreMesh,
    meshBuilder: BabylonjsCoreMeshBuilder, MeshBuilder: BabylonjsCoreMeshBuilder,
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
    shadowGenerator: BabylonjsCoreShadowGenerator, ShadowGenerator: BabylonjsCoreShadowGenerator,
    baseTexture: BabylonjsCoreBaseTexture, BaseTexture: BabylonjsCoreBaseTexture,
    control: BabylonjsGuiControl, Control: BabylonjsGuiControl,
    textBlock: BabylonjsGuiTextBlock, TextBlock: BabylonjsGuiTextBlock,
    control3D: BabylonjsGuiControl3D, Control3D: BabylonjsGuiControl3D,
    transformNode: BabylonjsCoreTransformNode, TransformNode: BabylonjsCoreTransformNode,
    abstractMesh: BabylonjsCoreAbstractMesh, AbstractMesh: BabylonjsCoreAbstractMesh,
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
    shaderMaterial: BabylonjsCoreShaderMaterial, ShaderMaterial: BabylonjsCoreShaderMaterial,
    texture: BabylonjsCoreTexture, Texture: BabylonjsCoreTexture,
    multiMaterial: BabylonjsCoreMultiMaterial, MultiMaterial: BabylonjsCoreMultiMaterial,
    pushMaterial: BabylonjsCorePushMaterial, PushMaterial: BabylonjsCorePushMaterial,
    standardMaterial: BabylonjsCoreStandardMaterial, StandardMaterial: BabylonjsCoreStandardMaterial,
    backgroundMaterial: BabylonjsCoreBackgroundMaterial, BackgroundMaterial: BabylonjsCoreBackgroundMaterial,
    shadowLight: BabylonjsCoreShadowLight, ShadowLight: BabylonjsCoreShadowLight,
    pbrBaseMaterial: BabylonjsCorePBRBaseMaterial, PBRBaseMaterial: BabylonjsCorePBRBaseMaterial,
    pbrBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial, PBRBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial,
    pbrMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial, PBRMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial,
    pbrSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial, PBRSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial,
    pbrMaterial: BabylonjsCorePBRMaterial, PBRMaterial: BabylonjsCorePBRMaterial,
    nodeMaterial: BabylonjsCoreNodeMaterial, NodeMaterial: BabylonjsCoreNodeMaterial,
    fluentMaterial: BabylonjsGuiFluentMaterial, FluentMaterial: BabylonjsGuiFluentMaterial,
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
    effectLayer: 'EffectLayer',
    light: 'Light',
    material: 'Material',
    mesh: 'Mesh',
    meshBuilder: 'MeshBuilder',
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
    shadowGenerator: 'ShadowGenerator',
    baseTexture: 'BaseTexture',
    control: 'Control',
    textBlock: 'TextBlock',
    control3D: 'Control3D',
    transformNode: 'TransformNode',
    abstractMesh: 'AbstractMesh',
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
    shaderMaterial: 'ShaderMaterial',
    texture: 'Texture',
    multiMaterial: 'MultiMaterial',
    pushMaterial: 'PushMaterial',
    standardMaterial: 'StandardMaterial',
    backgroundMaterial: 'BackgroundMaterial',
    shadowLight: 'ShadowLight',
    pbrBaseMaterial: 'PBRBaseMaterial',
    pbrBaseSimpleMaterial: 'PBRBaseSimpleMaterial',
    pbrMetallicRoughnessMaterial: 'PBRMetallicRoughnessMaterial',
    pbrSpecularGlossinessMaterial: 'PBRSpecularGlossinessMaterial',
    pbrMaterial: 'PBRMaterial',
    nodeMaterial: 'NodeMaterial',
    fluentMaterial: 'FluentMaterial',
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
    rawTexture3D: 'RawTexture3D',
    rawTexture2DArray: 'RawTexture2DArray',
    colorGradingTexture: 'ColorGradingTexture',
    equiRectangularCubeTexture: 'EquiRectangularCubeTexture',
    hdrCubeTexture: 'HDRCubeTexture',
    htmlElementTexture: 'HtmlElementTexture',
    adtForMesh: 'ADTForMesh',
    adtFullscreenUi: 'ADTFullscreenUI',
    box: 'Box',
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
    tube: 'Tube'
};

export function babylonClassFactory(importAlias: string): any {
    return (classesMap as any)[importAlias];
}
