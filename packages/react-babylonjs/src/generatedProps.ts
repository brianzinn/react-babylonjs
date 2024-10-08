import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from '@babylonjs/core/Actions/abstractActionManager.js'
import { ActionManager as BabylonjsCoreActionManager } from '@babylonjs/core/Actions/actionManager.js'
import { Animation as BabylonjsCoreAnimation } from '@babylonjs/core/Animations/animation.js'
import { AnimationGroup as BabylonjsCoreAnimationGroup } from '@babylonjs/core/Animations/animationGroup.js'
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from '@babylonjs/core/Animations/animationPropertiesOverride.js'
import { ISoundOptions as BabylonjsCoreISoundOptions } from '@babylonjs/core/Audio/Interfaces/ISoundOptions.js'
import { Sound as BabylonjsCoreSound } from '@babylonjs/core/Audio/sound.js'
import { IBakedVertexAnimationManager as BabylonjsCoreIBakedVertexAnimationManager } from '@babylonjs/core/BakedVertexAnimation/bakedVertexAnimationManager.js'
import { AutoRotationBehavior as BabylonjsCoreAutoRotationBehavior } from '@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js'
import { BouncingBehavior as BabylonjsCoreBouncingBehavior } from '@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js'
import { FramingBehavior as BabylonjsCoreFramingBehavior } from '@babylonjs/core/Behaviors/Cameras/framingBehavior.js'
import { AttachToBoxBehavior as BabylonjsCoreAttachToBoxBehavior } from '@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior.js'
import { BaseSixDofDragBehavior as BabylonjsCoreBaseSixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js'
import { FadeInOutBehavior as BabylonjsCoreFadeInOutBehavior } from '@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior.js'
import { FollowBehavior as BabylonjsCoreFollowBehavior } from '@babylonjs/core/Behaviors/Meshes/followBehavior.js'
import {
  HandConstraintBehavior as BabylonjsCoreHandConstraintBehavior,
  HandConstraintOrientation as BabylonjsCoreHandConstraintOrientation,
  HandConstraintVisibility as BabylonjsCoreHandConstraintVisibility,
  HandConstraintZone as BabylonjsCoreHandConstraintZone,
} from '@babylonjs/core/Behaviors/Meshes/handConstraintBehavior.js'
import { MultiPointerScaleBehavior as BabylonjsCoreMultiPointerScaleBehavior } from '@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior.js'
import { PointerDragBehavior as BabylonjsCorePointerDragBehavior } from '@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js'
import { SixDofDragBehavior as BabylonjsCoreSixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js'
import { SurfaceMagnetismBehavior as BabylonjsCoreSurfaceMagnetismBehavior } from '@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior.js'
import { Skeleton as BabylonjsCoreSkeleton } from '@babylonjs/core/Bones/skeleton.js'
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera.js'
import { ArcRotateCameraInputsManager as BabylonjsCoreArcRotateCameraInputsManager } from '@babylonjs/core/Cameras/arcRotateCameraInputsManager.js'
import {
  Camera as BabylonjsCoreCamera,
  IObliqueParams as BabylonjsCoreIObliqueParams,
} from '@babylonjs/core/Cameras/camera.js'
import { CameraInputsManager as BabylonjsCoreCameraInputsManager } from '@babylonjs/core/Cameras/cameraInputsManager.js'
import { DeviceOrientationCamera as BabylonjsCoreDeviceOrientationCamera } from '@babylonjs/core/Cameras/deviceOrientationCamera.js'
import { FlyCamera as BabylonjsCoreFlyCamera } from '@babylonjs/core/Cameras/flyCamera.js'
import { FlyCameraInputsManager as BabylonjsCoreFlyCameraInputsManager } from '@babylonjs/core/Cameras/flyCameraInputsManager.js'
import {
  ArcFollowCamera as BabylonjsCoreArcFollowCamera,
  FollowCamera as BabylonjsCoreFollowCamera,
} from '@babylonjs/core/Cameras/followCamera.js'
import { FollowCameraInputsManager as BabylonjsCoreFollowCameraInputsManager } from '@babylonjs/core/Cameras/followCameraInputsManager.js'
import { FreeCamera as BabylonjsCoreFreeCamera } from '@babylonjs/core/Cameras/freeCamera.js'
import { FreeCameraInputsManager as BabylonjsCoreFreeCameraInputsManager } from '@babylonjs/core/Cameras/freeCameraInputsManager.js'
import { GamepadCamera as BabylonjsCoreGamepadCamera } from '@babylonjs/core/Cameras/gamepadCamera.js'
import { AnaglyphArcRotateCamera as BabylonjsCoreAnaglyphArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera.js'
import { AnaglyphFreeCamera as BabylonjsCoreAnaglyphFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera.js'
import { AnaglyphGamepadCamera as BabylonjsCoreAnaglyphGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera.js'
import { AnaglyphUniversalCamera as BabylonjsCoreAnaglyphUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera.js'
import { StereoscopicArcRotateCamera as BabylonjsCoreStereoscopicArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera.js'
import { StereoscopicFreeCamera as BabylonjsCoreStereoscopicFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera.js'
import { StereoscopicGamepadCamera as BabylonjsCoreStereoscopicGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera.js'
import { StereoscopicScreenUniversalCamera as BabylonjsCoreStereoscopicScreenUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera.js'
import { StereoscopicUniversalCamera as BabylonjsCoreStereoscopicUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera.js'
import { TargetCamera as BabylonjsCoreTargetCamera } from '@babylonjs/core/Cameras/targetCamera.js'
import { TouchCamera as BabylonjsCoreTouchCamera } from '@babylonjs/core/Cameras/touchCamera.js'
import { UniversalCamera as BabylonjsCoreUniversalCamera } from '@babylonjs/core/Cameras/universalCamera.js'
import { VirtualJoysticksCamera as BabylonjsCoreVirtualJoysticksCamera } from '@babylonjs/core/Cameras/virtualJoysticksCamera.js'
import { VRCameraMetrics as BabylonjsCoreVRCameraMetrics } from '@babylonjs/core/Cameras/VR/vrCameraMetrics.js'
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera.js'
import { VRDeviceOrientationFreeCamera as BabylonjsCoreVRDeviceOrientationFreeCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js'
import { VRDeviceOrientationGamepadCamera as BabylonjsCoreVRDeviceOrientationGamepadCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera.js'
import {
  VRExperienceHelper as BabylonjsCoreVRExperienceHelper,
  VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions,
} from '@babylonjs/core/Cameras/VR/vrExperienceHelper.js'
import { Collider as BabylonjsCoreCollider } from '@babylonjs/core/Collisions/collider.js'
import { PickingInfo as BabylonjsCorePickingInfo } from '@babylonjs/core/Collisions/pickingInfo.js'
import { BoundingInfo as BabylonjsCoreBoundingInfo } from '@babylonjs/core/Culling/boundingInfo.js'
import { Ray as BabylonjsCoreRay } from '@babylonjs/core/Culling/ray.core.js'
import { AbstractEngine as BabylonjsCoreAbstractEngine } from '@babylonjs/core/Engines/abstractEngine.js'
import { EngineView as BabylonjsCoreEngineView } from '@babylonjs/core/Engines/AbstractEngine/abstractEngine.views.js'
import { IImage as BabylonjsCoreIImage } from '@babylonjs/core/Engines/ICanvas.js'
import { RenderTargetWrapper as BabylonjsCoreRenderTargetWrapper } from '@babylonjs/core/Engines/renderTargetWrapper.js'
import { ThinEngine as BabylonjsCoreThinEngine } from '@babylonjs/core/Engines/thinEngine.js'
import { IPointerEvent as BabylonjsCoreIPointerEvent } from '@babylonjs/core/Events/deviceInputEvents.js'
import { PointerEventTypes as BabylonjsCorePointerEventTypes } from '@babylonjs/core/Events/pointerEvents.js'
import {
  AxisDragGizmo as BabylonjsCoreAxisDragGizmo,
  IAxisDragGizmo as BabylonjsCoreIAxisDragGizmo,
} from '@babylonjs/core/Gizmos/axisDragGizmo.js'
import {
  AxisScaleGizmo as BabylonjsCoreAxisScaleGizmo,
  IAxisScaleGizmo as BabylonjsCoreIAxisScaleGizmo,
} from '@babylonjs/core/Gizmos/axisScaleGizmo.js'
import {
  BoundingBoxGizmo as BabylonjsCoreBoundingBoxGizmo,
  IBoundingBoxGizmo as BabylonjsCoreIBoundingBoxGizmo,
} from '@babylonjs/core/Gizmos/boundingBoxGizmo.js'
import { CameraGizmo as BabylonjsCoreCameraGizmo } from '@babylonjs/core/Gizmos/cameraGizmo.js'
import {
  Gizmo as BabylonjsCoreGizmo,
  GizmoAnchorPoint as BabylonjsCoreGizmoAnchorPoint,
  GizmoCoordinatesMode as BabylonjsCoreGizmoCoordinatesMode,
} from '@babylonjs/core/Gizmos/gizmo.js'
import { GizmoManager as BabylonjsCoreGizmoManager } from '@babylonjs/core/Gizmos/gizmoManager.js'
import { LightGizmo as BabylonjsCoreLightGizmo } from '@babylonjs/core/Gizmos/lightGizmo.js'
import {
  IPlaneDragGizmo as BabylonjsCoreIPlaneDragGizmo,
  PlaneDragGizmo as BabylonjsCorePlaneDragGizmo,
} from '@babylonjs/core/Gizmos/planeDragGizmo.js'
import {
  IPlaneRotationGizmo as BabylonjsCoreIPlaneRotationGizmo,
  PlaneRotationGizmo as BabylonjsCorePlaneRotationGizmo,
} from '@babylonjs/core/Gizmos/planeRotationGizmo.js'
import {
  IPositionGizmo as BabylonjsCoreIPositionGizmo,
  PositionGizmo as BabylonjsCorePositionGizmo,
  PositionGizmoOptions as BabylonjsCorePositionGizmoOptions,
} from '@babylonjs/core/Gizmos/positionGizmo.js'
import {
  IRotationGizmo as BabylonjsCoreIRotationGizmo,
  RotationGizmo as BabylonjsCoreRotationGizmo,
  RotationGizmoOptions as BabylonjsCoreRotationGizmoOptions,
} from '@babylonjs/core/Gizmos/rotationGizmo.js'
import {
  IScaleGizmo as BabylonjsCoreIScaleGizmo,
  ScaleGizmo as BabylonjsCoreScaleGizmo,
  ScaleGizmoOptions as BabylonjsCoreScaleGizmoOptions,
} from '@babylonjs/core/Gizmos/scaleGizmo.js'
import {
  EnvironmentHelper as BabylonjsCoreEnvironmentHelper,
  IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions,
} from '@babylonjs/core/Helpers/environmentHelper.js'
import { IAccessibilityTag as BabylonjsCoreIAccessibilityTag } from '@babylonjs/core/IAccessibilityTag.js'
import { EffectLayer as BabylonjsCoreEffectLayer } from '@babylonjs/core/Layers/effectLayer.js'
import {
  GlowLayer as BabylonjsCoreGlowLayer,
  IGlowLayerOptions as BabylonjsCoreIGlowLayerOptions,
} from '@babylonjs/core/Layers/glowLayer.js'
import {
  HighlightLayer as BabylonjsCoreHighlightLayer,
  IHighlightLayerOptions as BabylonjsCoreIHighlightLayerOptions,
} from '@babylonjs/core/Layers/highlightLayer.js'
import { Layer as BabylonjsCoreLayer } from '@babylonjs/core/Layers/layer.js'
import { LensFlareSystem as BabylonjsCoreLensFlareSystem } from '@babylonjs/core/LensFlares/lensFlareSystem.js'
import { DirectionalLight as BabylonjsCoreDirectionalLight } from '@babylonjs/core/Lights/directionalLight.js'
import { HemisphericLight as BabylonjsCoreHemisphericLight } from '@babylonjs/core/Lights/hemisphericLight.js'
import { Light as BabylonjsCoreLight } from '@babylonjs/core/Lights/light.js'
import { PointLight as BabylonjsCorePointLight } from '@babylonjs/core/Lights/pointLight.js'
import {
  IShadowLight as BabylonjsCoreIShadowLight,
  ShadowLight as BabylonjsCoreShadowLight,
} from '@babylonjs/core/Lights/shadowLight.js'
import { CascadedShadowGenerator as BabylonjsCoreCascadedShadowGenerator } from '@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js'
import {
  ICustomShaderOptions as BabylonjsCoreICustomShaderOptions,
  ShadowGenerator as BabylonjsCoreShadowGenerator,
} from '@babylonjs/core/Lights/Shadows/shadowGenerator.js'
import { SpotLight as BabylonjsCoreSpotLight } from '@babylonjs/core/Lights/spotLight.js'
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial.js'
import { ColorCurves as BabylonjsCoreColorCurves } from '@babylonjs/core/Materials/colorCurves.js'
import {
  Effect as BabylonjsCoreEffect,
  IShaderPath as BabylonjsCoreIShaderPath,
} from '@babylonjs/core/Materials/effect.js'
import { FresnelParameters as BabylonjsCoreFresnelParameters } from '@babylonjs/core/Materials/fresnelParameters.js'
import { GaussianSplattingMaterial as BabylonjsCoreGaussianSplattingMaterial } from '@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial.js'
import {
  GreasedLineMaterialOptions as BabylonjsCoreGreasedLineMaterialOptions,
  GreasedLineMeshColorDistributionType as BabylonjsCoreGreasedLineMeshColorDistributionType,
  GreasedLineMeshColorMode as BabylonjsCoreGreasedLineMeshColorMode,
} from '@babylonjs/core/Materials/GreasedLine/greasedLineMaterialInterfaces.js'
import { GreasedLineSimpleMaterial as BabylonjsCoreGreasedLineSimpleMaterial } from '@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial.js'
import { ImageProcessingConfiguration as BabylonjsCoreImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration.js'
import { DetailMapConfiguration as BabylonjsCoreDetailMapConfiguration } from '@babylonjs/core/Materials/material.detailMapConfiguration.js'
import {
  ICustomShaderNameResolveOptions as BabylonjsCoreICustomShaderNameResolveOptions,
  Material as BabylonjsCoreMaterial,
} from '@babylonjs/core/Materials/material.js'
import { MaterialDefines as BabylonjsCoreMaterialDefines } from '@babylonjs/core/Materials/materialDefines.js'
import { MaterialPluginBase as BabylonjsCoreMaterialPluginBase } from '@babylonjs/core/Materials/materialPluginBase.js'
import { MultiMaterial as BabylonjsCoreMultiMaterial } from '@babylonjs/core/Materials/multiMaterial.js'
import { NodeMaterialModes as BabylonjsCoreNodeMaterialModes } from '@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js'
import {
  INodeMaterialOptions as BabylonjsCoreINodeMaterialOptions,
  NodeMaterial as BabylonjsCoreNodeMaterial,
} from '@babylonjs/core/Materials/Node/nodeMaterial.js'
import { NodeMaterialBlock as BabylonjsCoreNodeMaterialBlock } from '@babylonjs/core/Materials/Node/nodeMaterialBlock.js'
import { OcclusionMaterial as BabylonjsCoreOcclusionMaterial } from '@babylonjs/core/Materials/Occlusion/occlusionMaterial.js'
import { PBRAnisotropicConfiguration as BabylonjsCorePBRAnisotropicConfiguration } from '@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js'
import { PBRBaseMaterial as BabylonjsCorePBRBaseMaterial } from '@babylonjs/core/Materials/PBR/pbrBaseMaterial.js'
import { PBRBaseSimpleMaterial as BabylonjsCorePBRBaseSimpleMaterial } from '@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js'
import { PBRBRDFConfiguration as BabylonjsCorePBRBRDFConfiguration } from '@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js'
import { PBRClearCoatConfiguration as BabylonjsCorePBRClearCoatConfiguration } from '@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js'
import { PBRIridescenceConfiguration as BabylonjsCorePBRIridescenceConfiguration } from '@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js'
import { PBRMaterial as BabylonjsCorePBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial.js'
import { PBRMetallicRoughnessMaterial as BabylonjsCorePBRMetallicRoughnessMaterial } from '@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial.js'
import { PBRSheenConfiguration as BabylonjsCorePBRSheenConfiguration } from '@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js'
import { PBRSpecularGlossinessMaterial as BabylonjsCorePBRSpecularGlossinessMaterial } from '@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial.js'
import { PBRSubSurfaceConfiguration as BabylonjsCorePBRSubSurfaceConfiguration } from '@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js'
import { PrePassConfiguration as BabylonjsCorePrePassConfiguration } from '@babylonjs/core/Materials/prePassConfiguration.js'
import { PushMaterial as BabylonjsCorePushMaterial } from '@babylonjs/core/Materials/pushMaterial.js'
import { ShaderLanguage as BabylonjsCoreShaderLanguage } from '@babylonjs/core/Materials/shaderLanguage.js'
import {
  IShaderMaterialOptions as BabylonjsCoreIShaderMaterialOptions,
  ShaderMaterial as BabylonjsCoreShaderMaterial,
} from '@babylonjs/core/Materials/shaderMaterial.js'
import { ShadowDepthWrapper as BabylonjsCoreShadowDepthWrapper } from '@babylonjs/core/Materials/shadowDepthWrapper.js'
import { StandardMaterial as BabylonjsCoreStandardMaterial } from '@babylonjs/core/Materials/standardMaterial.js'
import { BaseTexture as BabylonjsCoreBaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture.js'
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from '@babylonjs/core/Materials/Textures/colorGradingTexture.js'
import {
  CubeTexture as BabylonjsCoreCubeTexture,
  ICubeTextureCreationOptions as BabylonjsCoreICubeTextureCreationOptions,
} from '@babylonjs/core/Materials/Textures/cubeTexture.js'
import { DynamicTexture as BabylonjsCoreDynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture.js'
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from '@babylonjs/core/Materials/Textures/equiRectangularCubeTexture.js'
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from '@babylonjs/core/Materials/Textures/hdrCubeTexture.js'
import {
  HtmlElementTexture as BabylonjsCoreHtmlElementTexture,
  IHtmlElementTextureOptions as BabylonjsCoreIHtmlElementTextureOptions,
} from '@babylonjs/core/Materials/Textures/htmlElementTexture.js'
import { InternalTexture as BabylonjsCoreInternalTexture } from '@babylonjs/core/Materials/Textures/internalTexture.js'
import { MirrorTexture as BabylonjsCoreMirrorTexture } from '@babylonjs/core/Materials/Textures/mirrorTexture.js'
import {
  IMultiRenderTargetOptions as BabylonjsCoreIMultiRenderTargetOptions,
  MultiRenderTarget as BabylonjsCoreMultiRenderTarget,
} from '@babylonjs/core/Materials/Textures/multiRenderTarget.js'
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from '@babylonjs/core/Materials/Textures/MultiviewRenderTarget.js'
import { PrePassRenderTarget as BabylonjsCorePrePassRenderTarget } from '@babylonjs/core/Materials/Textures/prePassRenderTarget.js'
import {
  CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture,
  ICustomProceduralTextureCreationOptions as BabylonjsCoreICustomProceduralTextureCreationOptions,
} from '@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture.js'
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture.js'
import {
  IProceduralTextureCreationOptions as BabylonjsCoreIProceduralTextureCreationOptions,
  ProceduralTexture as BabylonjsCoreProceduralTexture,
} from '@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js'
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from '@babylonjs/core/Materials/Textures/rawCubeTexture.js'
import { RawTexture as BabylonjsCoreRawTexture } from '@babylonjs/core/Materials/Textures/rawTexture.js'
import { RawTexture2DArray as BabylonjsCoreRawTexture2DArray } from '@babylonjs/core/Materials/Textures/rawTexture2DArray.js'
import { RawTexture3D as BabylonjsCoreRawTexture3D } from '@babylonjs/core/Materials/Textures/rawTexture3D.js'
import { RefractionTexture as BabylonjsCoreRefractionTexture } from '@babylonjs/core/Materials/Textures/refractionTexture.js'
import {
  RenderTargetTexture as BabylonjsCoreRenderTargetTexture,
  RenderTargetTextureOptions as BabylonjsCoreRenderTargetTextureOptions,
} from '@babylonjs/core/Materials/Textures/renderTargetTexture.js'
import {
  ITextureCreationOptions as BabylonjsCoreITextureCreationOptions,
  Texture as BabylonjsCoreTexture,
} from '@babylonjs/core/Materials/Textures/texture.js'
import {
  RenderTargetCreationOptions as BabylonjsCoreRenderTargetCreationOptions,
  TextureSize as BabylonjsCoreTextureSize,
} from '@babylonjs/core/Materials/Textures/textureCreationOptions.js'
import { ThinRenderTargetTexture as BabylonjsCoreThinRenderTargetTexture } from '@babylonjs/core/Materials/Textures/thinRenderTargetTexture.js'
import { ThinTexture as BabylonjsCoreThinTexture } from '@babylonjs/core/Materials/Textures/thinTexture.js'
import {
  VideoTexture as BabylonjsCoreVideoTexture,
  VideoTextureSettings as BabylonjsCoreVideoTextureSettings,
} from '@babylonjs/core/Materials/Textures/videoTexture.js'
import {
  Color3 as BabylonjsCoreColor3,
  Color4 as BabylonjsCoreColor4,
} from '@babylonjs/core/Maths/math.color.js'
import {
  IColor4Like as BabylonjsCoreIColor4Like,
  IVector3Like as BabylonjsCoreIVector3Like,
} from '@babylonjs/core/Maths/math.like.js'
import { Plane as BabylonjsCorePlane } from '@babylonjs/core/Maths/math.plane.js'
import {
  Matrix as BabylonjsCoreMatrix,
  Quaternion as BabylonjsCoreQuaternion,
  Vector2 as BabylonjsCoreVector2,
  Vector3 as BabylonjsCoreVector3,
  Vector4 as BabylonjsCoreVector4,
} from '@babylonjs/core/Maths/math.vector.js'
import { Viewport as BabylonjsCoreViewport } from '@babylonjs/core/Maths/math.viewport.js'
import { AbstractMesh as BabylonjsCoreAbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import { ICreateCapsuleOptions as BabylonjsCoreICreateCapsuleOptions } from '@babylonjs/core/Meshes/Builders/capsuleBuilder.js'
import { GoldbergCreationOption as BabylonjsCoreGoldbergCreationOption } from '@babylonjs/core/Meshes/Builders/goldbergBuilder.js'
import { IFontData as BabylonjsCoreIFontData } from '@babylonjs/core/Meshes/Builders/textBuilder.js'
import { GaussianSplattingMesh as BabylonjsCoreGaussianSplattingMesh } from '@babylonjs/core/Meshes/GaussianSplatting/gaussianSplattingMesh.js'
import { Geometry as BabylonjsCoreGeometry } from '@babylonjs/core/Meshes/geometry.js'
import {
  GoldbergData as BabylonjsCoreGoldbergData,
  GoldbergMesh as BabylonjsCoreGoldbergMesh,
} from '@babylonjs/core/Meshes/goldbergMesh.js'
import {
  GreasedLineBaseMesh as BabylonjsCoreGreasedLineBaseMesh,
  GreasedLineMeshOptions as BabylonjsCoreGreasedLineMeshOptions,
} from '@babylonjs/core/Meshes/GreasedLine/greasedLineBaseMesh.js'
import { GreasedLineMesh as BabylonjsCoreGreasedLineMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineMesh.js'
import { GreasedLineRibbonMesh as BabylonjsCoreGreasedLineRibbonMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh.js'
import { GroundMesh as BabylonjsCoreGroundMesh } from '@babylonjs/core/Meshes/groundMesh.js'
import { InstancedMesh as BabylonjsCoreInstancedMesh } from '@babylonjs/core/Meshes/instancedMesh.js'
import {
  InstancedLinesMesh as BabylonjsCoreInstancedLinesMesh,
  LinesMesh as BabylonjsCoreLinesMesh,
} from '@babylonjs/core/Meshes/linesMesh.js'
import { Mesh as BabylonjsCoreMesh } from '@babylonjs/core/Meshes/mesh.js'
import { SubMesh as BabylonjsCoreSubMesh } from '@babylonjs/core/Meshes/subMesh.js'
import { TrailMesh as BabylonjsCoreTrailMesh } from '@babylonjs/core/Meshes/trailMesh.js'
import { TransformNode as BabylonjsCoreTransformNode } from '@babylonjs/core/Meshes/transformNode.js'
import { IInspectable as BabylonjsCoreIInspectable } from '@babylonjs/core/Misc/iInspectable.js'
import {
  ISmartArrayLike as BabylonjsCoreISmartArrayLike,
  SmartArray as BabylonjsCoreSmartArray,
} from '@babylonjs/core/Misc/smartArray.js'
import { MorphTargetManager as BabylonjsCoreMorphTargetManager } from '@babylonjs/core/Morph/morphTargetManager.js'
import { Node as BabylonjsCoreNode } from '@babylonjs/core/node.js'
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from '@babylonjs/core/Offline/IOfflineProvider.js'
import { CloudPoint as BabylonjsCoreCloudPoint } from '@babylonjs/core/Particles/cloudPoint.js'
import { IParticleSystem as BabylonjsCoreIParticleSystem } from '@babylonjs/core/Particles/IParticleSystem.js'
import { PointsCloudSystem as BabylonjsCorePointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem.js'
import { SolidParticleSystem as BabylonjsCoreSolidParticleSystem } from '@babylonjs/core/Particles/solidParticleSystem.js'
import {
  IPhysicsEnabledObject as BabylonjsCoreIPhysicsEnabledObject,
  PhysicsImpostor as BabylonjsCorePhysicsImpostor,
  PhysicsImpostorParameters as BabylonjsCorePhysicsImpostorParameters,
} from '@babylonjs/core/Physics/v1/physicsImpostor.js'
import { PhysicsShapeType as BabylonjsCorePhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js'
import {
  PhysicsAggregate as BabylonjsCorePhysicsAggregate,
  PhysicsAggregateParameters as BabylonjsCorePhysicsAggregateParameters,
} from '@babylonjs/core/Physics/v2/physicsAggregate.js'
import { PhysicsBody as BabylonjsCorePhysicsBody } from '@babylonjs/core/Physics/v2/physicsBody.js'
import { PhysicsMaterial as BabylonjsCorePhysicsMaterial } from '@babylonjs/core/Physics/v2/physicsMaterial.js'
import { PhysicsShape as BabylonjsCorePhysicsShape } from '@babylonjs/core/Physics/v2/physicsShape.js'
import { AnaglyphPostProcess as BabylonjsCoreAnaglyphPostProcess } from '@babylonjs/core/PostProcesses/anaglyphPostProcess.js'
import { BlackAndWhitePostProcess as BabylonjsCoreBlackAndWhitePostProcess } from '@babylonjs/core/PostProcesses/blackAndWhitePostProcess.js'
import { BloomMergePostProcess as BabylonjsCoreBloomMergePostProcess } from '@babylonjs/core/PostProcesses/bloomMergePostProcess.js'
import { BlurPostProcess as BabylonjsCoreBlurPostProcess } from '@babylonjs/core/PostProcesses/blurPostProcess.js'
import { ChromaticAberrationPostProcess as BabylonjsCoreChromaticAberrationPostProcess } from '@babylonjs/core/PostProcesses/chromaticAberrationPostProcess.js'
import { CircleOfConfusionPostProcess as BabylonjsCoreCircleOfConfusionPostProcess } from '@babylonjs/core/PostProcesses/circleOfConfusionPostProcess.js'
import { ColorCorrectionPostProcess as BabylonjsCoreColorCorrectionPostProcess } from '@babylonjs/core/PostProcesses/colorCorrectionPostProcess.js'
import { ConvolutionPostProcess as BabylonjsCoreConvolutionPostProcess } from '@babylonjs/core/PostProcesses/convolutionPostProcess.js'
import { DepthOfFieldBlurPostProcess as BabylonjsCoreDepthOfFieldBlurPostProcess } from '@babylonjs/core/PostProcesses/depthOfFieldBlurPostProcess.js'
import {
  DepthOfFieldEffect as BabylonjsCoreDepthOfFieldEffect,
  DepthOfFieldEffectBlurLevel as BabylonjsCoreDepthOfFieldEffectBlurLevel,
} from '@babylonjs/core/PostProcesses/depthOfFieldEffect.js'
import { DepthOfFieldMergePostProcess as BabylonjsCoreDepthOfFieldMergePostProcess } from '@babylonjs/core/PostProcesses/depthOfFieldMergePostProcess.js'
import { DisplayPassPostProcess as BabylonjsCoreDisplayPassPostProcess } from '@babylonjs/core/PostProcesses/displayPassPostProcess.js'
import { ExtractHighlightsPostProcess as BabylonjsCoreExtractHighlightsPostProcess } from '@babylonjs/core/PostProcesses/extractHighlightsPostProcess.js'
import { FilterPostProcess as BabylonjsCoreFilterPostProcess } from '@babylonjs/core/PostProcesses/filterPostProcess.js'
import { FxaaPostProcess as BabylonjsCoreFxaaPostProcess } from '@babylonjs/core/PostProcesses/fxaaPostProcess.js'
import { GrainPostProcess as BabylonjsCoreGrainPostProcess } from '@babylonjs/core/PostProcesses/grainPostProcess.js'
import { HighlightsPostProcess as BabylonjsCoreHighlightsPostProcess } from '@babylonjs/core/PostProcesses/highlightsPostProcess.js'
import { ImageProcessingPostProcess as BabylonjsCoreImageProcessingPostProcess } from '@babylonjs/core/PostProcesses/imageProcessingPostProcess.js'
import { MotionBlurPostProcess as BabylonjsCoreMotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess.js'
import {
  PassCubePostProcess as BabylonjsCorePassCubePostProcess,
  PassPostProcess as BabylonjsCorePassPostProcess,
} from '@babylonjs/core/PostProcesses/passPostProcess.js'
import {
  PostProcess as BabylonjsCorePostProcess,
  PostProcessOptions as BabylonjsCorePostProcessOptions,
} from '@babylonjs/core/PostProcesses/postProcess.js'
import { PostProcessManager as BabylonjsCorePostProcessManager } from '@babylonjs/core/PostProcesses/postProcessManager.js'
import { RefractionPostProcess as BabylonjsCoreRefractionPostProcess } from '@babylonjs/core/PostProcesses/refractionPostProcess.js'
import { DefaultRenderingPipeline as BabylonjsCoreDefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.js'
import { LensRenderingPipeline as BabylonjsCoreLensRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.js'
import { SSAO2RenderingPipeline as BabylonjsCoreSSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.js'
import { SSAORenderingPipeline as BabylonjsCoreSSAORenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.js'
import { SSRRenderingPipeline as BabylonjsCoreSSRRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.js'
import { StandardRenderingPipeline as BabylonjsCoreStandardRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline.js'
import { TAARenderingPipeline as BabylonjsCoreTAARenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/taaRenderingPipeline.js'
import { PostProcessRenderPipeline as BabylonjsCorePostProcessRenderPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipeline.js'
import { ScreenSpaceCurvaturePostProcess as BabylonjsCoreScreenSpaceCurvaturePostProcess } from '@babylonjs/core/PostProcesses/screenSpaceCurvaturePostProcess.js'
import { ScreenSpaceReflectionPostProcess as BabylonjsCoreScreenSpaceReflectionPostProcess } from '@babylonjs/core/PostProcesses/screenSpaceReflectionPostProcess.js'
import { SharpenPostProcess as BabylonjsCoreSharpenPostProcess } from '@babylonjs/core/PostProcesses/sharpenPostProcess.js'
import {
  StereoscopicInterlacePostProcess as BabylonjsCoreStereoscopicInterlacePostProcess,
  StereoscopicInterlacePostProcessI as BabylonjsCoreStereoscopicInterlacePostProcessI,
} from '@babylonjs/core/PostProcesses/stereoscopicInterlacePostProcess.js'
import { SubSurfaceScatteringPostProcess as BabylonjsCoreSubSurfaceScatteringPostProcess } from '@babylonjs/core/PostProcesses/subSurfaceScatteringPostProcess.js'
import {
  TonemappingOperator as BabylonjsCoreTonemappingOperator,
  TonemapPostProcess as BabylonjsCoreTonemapPostProcess,
} from '@babylonjs/core/PostProcesses/tonemapPostProcess.js'
import { VolumetricLightScatteringPostProcess as BabylonjsCoreVolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess.js'
import { VRDistortionCorrectionPostProcess as BabylonjsCoreVRDistortionCorrectionPostProcess } from '@babylonjs/core/PostProcesses/vrDistortionCorrectionPostProcess.js'
import { VRMultiviewToSingleviewPostProcess as BabylonjsCoreVRMultiviewToSingleviewPostProcess } from '@babylonjs/core/PostProcesses/vrMultiviewToSingleviewPostProcess.js'
import { IblShadowsRenderPipeline as BabylonjsCoreIblShadowsRenderPipeline } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsRenderPipeline.js'
import { UtilityLayerRenderer as BabylonjsCoreUtilityLayerRenderer } from '@babylonjs/core/Rendering/utilityLayerRenderer.js'
import {
  Scene as BabylonjsCoreScene,
  ScenePerformancePriority as BabylonjsCoreScenePerformancePriority,
} from '@babylonjs/core/scene.js'
import { Sprite as BabylonjsCoreSprite } from '@babylonjs/core/Sprites/sprite.js'
import {
  ISpriteManager as BabylonjsCoreISpriteManager,
  SpriteManager as BabylonjsCoreSpriteManager,
} from '@babylonjs/core/Sprites/spriteManager.js'
import { SpritePackedManager as BabylonjsCoreSpritePackedManager } from '@babylonjs/core/Sprites/spritePackedManager.js'
import { ThinSprite as BabylonjsCoreThinSprite } from '@babylonjs/core/Sprites/thinSprite.js'
import { FloatArray as BabylonjsCoreFloatArray } from '@babylonjs/core/types.js'
import { XRSpaceWarpRenderTarget as BabylonjsCoreXRSpaceWarpRenderTarget } from '@babylonjs/core/XR/features/WebXRSpaceWarp.js'
import { WebXRCamera as BabylonjsCoreWebXRCamera } from '@babylonjs/core/XR/webXRCamera.js'
import { WebXRDefaultExperience as BabylonjsCoreWebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience.js'
import { WebXRExperienceHelper as BabylonjsCoreWebXRExperienceHelper } from '@babylonjs/core/XR/webXRExperienceHelper.js'
import { WebXRSessionManager as BabylonjsCoreWebXRSessionManager } from '@babylonjs/core/XR/webXRSessionManager.js'
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture.js'
import { Button as BabylonjsGuiButton } from '@babylonjs/gui/2D/controls/button.js'
import { Checkbox as BabylonjsGuiCheckbox } from '@babylonjs/gui/2D/controls/checkbox.js'
import { ColorPicker as BabylonjsGuiColorPicker } from '@babylonjs/gui/2D/controls/colorpicker.js'
import { Container as BabylonjsGuiContainer } from '@babylonjs/gui/2D/controls/container.js'
import { Control as BabylonjsGuiControl } from '@babylonjs/gui/2D/controls/control.js'
import { DisplayGrid as BabylonjsGuiDisplayGrid } from '@babylonjs/gui/2D/controls/displayGrid.js'
import { Ellipse as BabylonjsGuiEllipse } from '@babylonjs/gui/2D/controls/ellipse.js'
import { FocusableButton as BabylonjsGuiFocusableButton } from '@babylonjs/gui/2D/controls/focusableButton.js'
import { BaseGradient as BabylonjsGuiBaseGradient } from '@babylonjs/gui/2D/controls/gradient/BaseGradient.js'
import { Grid as BabylonjsGuiGrid } from '@babylonjs/gui/2D/controls/grid.js'
import { Image as BabylonjsGuiImage } from '@babylonjs/gui/2D/controls/image.js'
import { InputPassword as BabylonjsGuiInputPassword } from '@babylonjs/gui/2D/controls/inputPassword.js'
import { InputText as BabylonjsGuiInputText } from '@babylonjs/gui/2D/controls/inputText.js'
import { InputTextArea as BabylonjsGuiInputTextArea } from '@babylonjs/gui/2D/controls/inputTextArea.js'
import { Line as BabylonjsGuiLine } from '@babylonjs/gui/2D/controls/line.js'
import { MultiLine as BabylonjsGuiMultiLine } from '@babylonjs/gui/2D/controls/multiLine.js'
import { RadioButton as BabylonjsGuiRadioButton } from '@babylonjs/gui/2D/controls/radioButton.js'
import { Rectangle as BabylonjsGuiRectangle } from '@babylonjs/gui/2D/controls/rectangle.js'
import { ScrollViewer as BabylonjsGuiScrollViewer } from '@babylonjs/gui/2D/controls/scrollViewers/scrollViewer.js'
import { _ScrollViewerWindow as BabylonjsGui_ScrollViewerWindow } from '@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow.js'
import {
  SelectionPanel as BabylonjsGuiSelectionPanel,
  SelectorGroup as BabylonjsGuiSelectorGroup,
} from '@babylonjs/gui/2D/controls/selector.js'
import { BaseSlider as BabylonjsGuiBaseSlider } from '@babylonjs/gui/2D/controls/sliders/baseSlider.js'
import { ImageBasedSlider as BabylonjsGuiImageBasedSlider } from '@babylonjs/gui/2D/controls/sliders/imageBasedSlider.js'
import { ImageScrollBar as BabylonjsGuiImageScrollBar } from '@babylonjs/gui/2D/controls/sliders/imageScrollBar.js'
import { ScrollBar as BabylonjsGuiScrollBar } from '@babylonjs/gui/2D/controls/sliders/scrollBar.js'
import { Slider as BabylonjsGuiSlider } from '@babylonjs/gui/2D/controls/sliders/slider.js'
import { StackPanel as BabylonjsGuiStackPanel } from '@babylonjs/gui/2D/controls/stackPanel.js'
import {
  TextBlock as BabylonjsGuiTextBlock,
  TextWrapping as BabylonjsGuiTextWrapping,
} from '@babylonjs/gui/2D/controls/textBlock.js'
import { ToggleButton as BabylonjsGuiToggleButton } from '@babylonjs/gui/2D/controls/toggleButton.js'
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard.js'
import { Style as BabylonjsGuiStyle } from '@babylonjs/gui/2D/style.js'
import { DefaultBehavior as BabylonjsGuiDefaultBehavior } from '@babylonjs/gui/3D/behaviors/defaultBehavior.js'
import { AbstractButton3D as BabylonjsGuiAbstractButton3D } from '@babylonjs/gui/3D/controls/abstractButton3D.js'
import {
  Button3D as BabylonjsGuiButton3D,
  IButton3DCreationOptions as BabylonjsGuiIButton3DCreationOptions,
} from '@babylonjs/gui/3D/controls/button3D.js'
import { Container3D as BabylonjsGuiContainer3D } from '@babylonjs/gui/3D/controls/container3D.js'
import { ContentDisplay3D as BabylonjsGuiContentDisplay3D } from '@babylonjs/gui/3D/controls/contentDisplay3D.js'
import { Control3D as BabylonjsGuiControl3D } from '@babylonjs/gui/3D/controls/control3D.js'
import { CylinderPanel as BabylonjsGuiCylinderPanel } from '@babylonjs/gui/3D/controls/cylinderPanel.js'
import { HandMenu as BabylonjsGuiHandMenu } from '@babylonjs/gui/3D/controls/handMenu.js'
import { HolographicBackplate as BabylonjsGuiHolographicBackplate } from '@babylonjs/gui/3D/controls/holographicBackplate.js'
import { HolographicButton as BabylonjsGuiHolographicButton } from '@babylonjs/gui/3D/controls/holographicButton.js'
import { HolographicSlate as BabylonjsGuiHolographicSlate } from '@babylonjs/gui/3D/controls/holographicSlate.js'
import { MeshButton3D as BabylonjsGuiMeshButton3D } from '@babylonjs/gui/3D/controls/meshButton3D.js'
import { NearMenu as BabylonjsGuiNearMenu } from '@babylonjs/gui/3D/controls/nearMenu.js'
import { PlanePanel as BabylonjsGuiPlanePanel } from '@babylonjs/gui/3D/controls/planePanel.js'
import { ScatterPanel as BabylonjsGuiScatterPanel } from '@babylonjs/gui/3D/controls/scatterPanel.js'
import { Slider3D as BabylonjsGuiSlider3D } from '@babylonjs/gui/3D/controls/slider3D.js'
import { SpherePanel as BabylonjsGuiSpherePanel } from '@babylonjs/gui/3D/controls/spherePanel.js'
import { StackPanel3D as BabylonjsGuiStackPanel3D } from '@babylonjs/gui/3D/controls/stackPanel3D.js'
import { TouchButton3D as BabylonjsGuiTouchButton3D } from '@babylonjs/gui/3D/controls/touchButton3D.js'
import { TouchHolographicButton as BabylonjsGuiTouchHolographicButton } from '@babylonjs/gui/3D/controls/touchHolographicButton.js'
import { TouchHolographicMenu as BabylonjsGuiTouchHolographicMenu } from '@babylonjs/gui/3D/controls/touchHolographicMenu.js'
import { TouchMeshButton3D as BabylonjsGuiTouchMeshButton3D } from '@babylonjs/gui/3D/controls/touchMeshButton3D.js'
import { VolumeBasedPanel as BabylonjsGuiVolumeBasedPanel } from '@babylonjs/gui/3D/controls/volumeBasedPanel.js'
import { SlateGizmo as BabylonjsGuiSlateGizmo } from '@babylonjs/gui/3D/gizmos/slateGizmo.js'
import { GUI3DManager as BabylonjsGuiGUI3DManager } from '@babylonjs/gui/3D/gui3DManager.js'
import { FluentMaterial as BabylonjsGuiFluentMaterial } from '@babylonjs/gui/3D/materials/fluent/fluentMaterial.js'
import { FluentBackplateMaterial as BabylonjsGuiFluentBackplateMaterial } from '@babylonjs/gui/3D/materials/fluentBackplate/fluentBackplateMaterial.js'
import { FluentButtonMaterial as BabylonjsGuiFluentButtonMaterial } from '@babylonjs/gui/3D/materials/fluentButton/fluentButtonMaterial.js'
import { HandleMaterial as BabylonjsGuiHandleMaterial } from '@babylonjs/gui/3D/materials/handle/handleMaterial.js'
import { MRDLBackglowMaterial as BabylonjsGuiMRDLBackglowMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlBackglowMaterial.js'
import { MRDLBackplateMaterial as BabylonjsGuiMRDLBackplateMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlBackplateMaterial.js'
import { MRDLFrontplateMaterial as BabylonjsGuiMRDLFrontplateMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlFrontplateMaterial.js'
import { MRDLInnerquadMaterial as BabylonjsGuiMRDLInnerquadMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlInnerquadMaterial.js'
import { MRDLSliderBarMaterial as BabylonjsGuiMRDLSliderBarMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlSliderBarMaterial.js'
import { MRDLSliderThumbMaterial as BabylonjsGuiMRDLSliderThumbMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlSliderThumbMaterial.js'
import { Key, ReactNode, Ref } from 'react'
import { RowOrColumnDefinitionProps } from './customHosts/grid/'
import {
  AbstractMeshCustomProps,
  ADTCustomProps,
  CameraCustomProps,
  Control2DCustomProps,
  Control3DCustomProps,
  CustomProps,
  GizmoCustomProps,
  GlowLayerCustomProps,
  MaterialCustomProps,
  ShadowGeneratorCustomProps,
  VirtualKeyboardCustomProps,
  VRExperienceHelperCustomProps,
} from './CustomProps'
import { DynamicTerrain as ExtensionsDynamicTerrain } from './extensions/DynamicTerrain'

export type BabylonNode<T> = {
  children?: ReactNode
  key?: Key
  onCreated?: (instance: T, scene: BabylonjsCoreScene) => void
  ref?: Ref<T>
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      node: FiberNodeProps & FiberNodePropsCtor & BabylonNode<BabylonjsCoreNode>
      transformNode: FiberTransformNodeProps &
        FiberTransformNodePropsCtor &
        BabylonNode<BabylonjsCoreTransformNode>
      abstractMesh: FiberAbstractMeshProps &
        FiberAbstractMeshPropsCtor &
        BabylonNode<BabylonjsCoreAbstractMesh> &
        AbstractMeshCustomProps
      instancedMesh: FiberInstancedMeshProps &
        FiberInstancedMeshPropsCtor &
        BabylonNode<BabylonjsCoreInstancedMesh>
      instancedLinesMesh: FiberInstancedLinesMeshProps &
        FiberInstancedLinesMeshPropsCtor &
        BabylonNode<BabylonjsCoreInstancedLinesMesh>
      mesh: FiberMeshProps & FiberMeshPropsCtor & BabylonNode<BabylonjsCoreMesh>
      goldbergMesh: FiberGoldbergMeshProps &
        FiberGoldbergMeshPropsCtor &
        BabylonNode<BabylonjsCoreGoldbergMesh>
      groundMesh: FiberGroundMeshProps &
        FiberGroundMeshPropsCtor &
        BabylonNode<BabylonjsCoreGroundMesh>
      linesMesh: FiberLinesMeshProps & FiberLinesMeshPropsCtor & BabylonNode<BabylonjsCoreLinesMesh>
      trailMesh: FiberTrailMeshProps & FiberTrailMeshPropsCtor & BabylonNode<BabylonjsCoreTrailMesh>
      greasedLineBaseMesh: FiberGreasedLineBaseMeshProps &
        FiberGreasedLineBaseMeshPropsCtor &
        BabylonNode<BabylonjsCoreGreasedLineBaseMesh>
      greasedLineMesh: FiberGreasedLineMeshProps &
        FiberGreasedLineMeshPropsCtor &
        BabylonNode<BabylonjsCoreGreasedLineMesh>
      greasedLineRibbonMesh: FiberGreasedLineRibbonMeshProps &
        FiberGreasedLineRibbonMeshPropsCtor &
        BabylonNode<BabylonjsCoreGreasedLineRibbonMesh>
      gaussianSplattingMesh: FiberGaussianSplattingMeshProps &
        FiberGaussianSplattingMeshPropsCtor &
        BabylonNode<BabylonjsCoreGaussianSplattingMesh>
      camera: FiberCameraProps & FiberCameraPropsCtor & BabylonNode<BabylonjsCoreCamera>
      targetCamera: FiberTargetCameraProps &
        FiberTargetCameraPropsCtor &
        BabylonNode<BabylonjsCoreTargetCamera>
      freeCamera: FiberFreeCameraProps &
        FiberFreeCameraPropsCtor &
        BabylonNode<BabylonjsCoreFreeCamera>
      webXrCamera: FiberWebXRCameraProps &
        FiberWebXRCameraPropsCtor &
        BabylonNode<BabylonjsCoreWebXRCamera>
      touchCamera: FiberTouchCameraProps &
        FiberTouchCameraPropsCtor &
        BabylonNode<BabylonjsCoreTouchCamera>
      universalCamera: FiberUniversalCameraProps &
        FiberUniversalCameraPropsCtor &
        BabylonNode<BabylonjsCoreUniversalCamera>
      gamepadCamera: FiberGamepadCameraProps &
        FiberGamepadCameraPropsCtor &
        BabylonNode<BabylonjsCoreGamepadCamera>
      anaglyphGamepadCamera: FiberAnaglyphGamepadCameraProps &
        FiberAnaglyphGamepadCameraPropsCtor &
        BabylonNode<BabylonjsCoreAnaglyphGamepadCamera>
      stereoscopicGamepadCamera: FiberStereoscopicGamepadCameraProps &
        FiberStereoscopicGamepadCameraPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicGamepadCamera>
      anaglyphUniversalCamera: FiberAnaglyphUniversalCameraProps &
        FiberAnaglyphUniversalCameraPropsCtor &
        BabylonNode<BabylonjsCoreAnaglyphUniversalCamera>
      stereoscopicUniversalCamera: FiberStereoscopicUniversalCameraProps &
        FiberStereoscopicUniversalCameraPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicUniversalCamera>
      stereoscopicScreenUniversalCamera: FiberStereoscopicScreenUniversalCameraProps &
        FiberStereoscopicScreenUniversalCameraPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicScreenUniversalCamera>
      deviceOrientationCamera: FiberDeviceOrientationCameraProps &
        FiberDeviceOrientationCameraPropsCtor &
        BabylonNode<BabylonjsCoreDeviceOrientationCamera>
      vrDeviceOrientationFreeCamera: FiberVRDeviceOrientationFreeCameraProps &
        FiberVRDeviceOrientationFreeCameraPropsCtor &
        BabylonNode<BabylonjsCoreVRDeviceOrientationFreeCamera>
      vrDeviceOrientationGamepadCamera: FiberVRDeviceOrientationGamepadCameraProps &
        FiberVRDeviceOrientationGamepadCameraPropsCtor &
        BabylonNode<BabylonjsCoreVRDeviceOrientationGamepadCamera>
      anaglyphFreeCamera: FiberAnaglyphFreeCameraProps &
        FiberAnaglyphFreeCameraPropsCtor &
        BabylonNode<BabylonjsCoreAnaglyphFreeCamera>
      stereoscopicFreeCamera: FiberStereoscopicFreeCameraProps &
        FiberStereoscopicFreeCameraPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicFreeCamera>
      virtualJoysticksCamera: FiberVirtualJoysticksCameraProps &
        FiberVirtualJoysticksCameraPropsCtor &
        BabylonNode<BabylonjsCoreVirtualJoysticksCamera>
      arcRotateCamera: FiberArcRotateCameraProps &
        FiberArcRotateCameraPropsCtor &
        BabylonNode<BabylonjsCoreArcRotateCamera>
      anaglyphArcRotateCamera: FiberAnaglyphArcRotateCameraProps &
        FiberAnaglyphArcRotateCameraPropsCtor &
        BabylonNode<BabylonjsCoreAnaglyphArcRotateCamera>
      stereoscopicArcRotateCamera: FiberStereoscopicArcRotateCameraProps &
        FiberStereoscopicArcRotateCameraPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicArcRotateCamera>
      vrDeviceOrientationArcRotateCamera: FiberVRDeviceOrientationArcRotateCameraProps &
        FiberVRDeviceOrientationArcRotateCameraPropsCtor &
        BabylonNode<BabylonjsCoreVRDeviceOrientationArcRotateCamera>
      flyCamera: FiberFlyCameraProps & FiberFlyCameraPropsCtor & BabylonNode<BabylonjsCoreFlyCamera>
      followCamera: FiberFollowCameraProps &
        FiberFollowCameraPropsCtor &
        BabylonNode<BabylonjsCoreFollowCamera>
      arcFollowCamera: FiberArcFollowCameraProps &
        FiberArcFollowCameraPropsCtor &
        BabylonNode<BabylonjsCoreArcFollowCamera>
      box: FiberMeshProps & FiberBoxPropsCtor & BabylonNode<BabylonjsCoreMesh>
      tiledBox: FiberMeshProps & FiberTiledBoxPropsCtor & BabylonNode<BabylonjsCoreMesh>
      sphere: FiberMeshProps & FiberSpherePropsCtor & BabylonNode<BabylonjsCoreMesh>
      disc: FiberMeshProps & FiberDiscPropsCtor & BabylonNode<BabylonjsCoreMesh>
      icoSphere: FiberMeshProps & FiberIcoSpherePropsCtor & BabylonNode<BabylonjsCoreMesh>
      ribbon: FiberMeshProps & FiberRibbonPropsCtor & BabylonNode<BabylonjsCoreMesh>
      cylinder: FiberMeshProps & FiberCylinderPropsCtor & BabylonNode<BabylonjsCoreMesh>
      torus: FiberMeshProps & FiberTorusPropsCtor & BabylonNode<BabylonjsCoreMesh>
      torusKnot: FiberMeshProps & FiberTorusKnotPropsCtor & BabylonNode<BabylonjsCoreMesh>
      lineSystem: FiberLinesMeshProps &
        FiberLineSystemPropsCtor &
        BabylonNode<BabylonjsCoreLinesMesh>
      lines: FiberLinesMeshProps & FiberLinesPropsCtor & BabylonNode<BabylonjsCoreLinesMesh>
      dashedLines: FiberLinesMeshProps &
        FiberDashedLinesPropsCtor &
        BabylonNode<BabylonjsCoreLinesMesh>
      extrudeShape: FiberMeshProps & FiberExtrudeShapePropsCtor & BabylonNode<BabylonjsCoreMesh>
      extrudeShapeCustom: FiberMeshProps &
        FiberExtrudeShapeCustomPropsCtor &
        BabylonNode<BabylonjsCoreMesh>
      lathe: FiberMeshProps & FiberLathePropsCtor & BabylonNode<BabylonjsCoreMesh>
      tiledPlane: FiberMeshProps & FiberTiledPlanePropsCtor & BabylonNode<BabylonjsCoreMesh>
      plane: FiberMeshProps & FiberPlanePropsCtor & BabylonNode<BabylonjsCoreMesh>
      ground: FiberGroundMeshProps & FiberGroundPropsCtor & BabylonNode<BabylonjsCoreGroundMesh>
      tiledGround: FiberMeshProps & FiberTiledGroundPropsCtor & BabylonNode<BabylonjsCoreMesh>
      groundFromHeightMap: FiberGroundMeshProps &
        FiberGroundFromHeightMapPropsCtor &
        BabylonNode<BabylonjsCoreGroundMesh>
      'babylon-polygon': FiberMeshProps & FiberPolygonPropsCtor & BabylonNode<BabylonjsCoreMesh>
      extrudePolygon: FiberMeshProps & FiberExtrudePolygonPropsCtor & BabylonNode<BabylonjsCoreMesh>
      tube: FiberMeshProps & FiberTubePropsCtor & BabylonNode<BabylonjsCoreMesh>
      polyhedron: FiberMeshProps & FiberPolyhedronPropsCtor & BabylonNode<BabylonjsCoreMesh>
      geodesic: FiberMeshProps & FiberGeodesicPropsCtor & BabylonNode<BabylonjsCoreMesh>
      goldberg: FiberGoldbergMeshProps &
        FiberGoldbergPropsCtor &
        BabylonNode<BabylonjsCoreGoldbergMesh>
      decal: FiberMeshProps & FiberDecalPropsCtor & BabylonNode<BabylonjsCoreMesh>
      capsule: FiberMeshProps & FiberCapsulePropsCtor & BabylonNode<BabylonjsCoreMesh>
      'babylon-text': FiberMeshProps & FiberTextPropsCtor & BabylonNode<BabylonjsCoreMesh>
      material: FiberMaterialProps & FiberMaterialPropsCtor & BabylonNode<BabylonjsCoreMaterial>
      pushMaterial: FiberPushMaterialProps &
        FiberPushMaterialPropsCtor &
        BabylonNode<BabylonjsCorePushMaterial>
      nodeMaterial: FiberNodeMaterialProps &
        FiberNodeMaterialPropsCtor &
        BabylonNode<BabylonjsCoreNodeMaterial>
      shaderMaterial: FiberShaderMaterialProps &
        FiberShaderMaterialPropsCtor &
        BabylonNode<BabylonjsCoreShaderMaterial>
      occlusionMaterial: FiberOcclusionMaterialProps &
        FiberOcclusionMaterialPropsCtor &
        BabylonNode<BabylonjsCoreOcclusionMaterial>
      greasedLineSimpleMaterial: FiberGreasedLineSimpleMaterialProps &
        FiberGreasedLineSimpleMaterialPropsCtor &
        BabylonNode<BabylonjsCoreGreasedLineSimpleMaterial>
      handleMaterial: FiberHandleMaterialProps &
        FiberHandleMaterialPropsCtor &
        BabylonNode<BabylonjsGuiHandleMaterial>
      pbrBaseMaterial: FiberPBRBaseMaterialProps &
        FiberPBRBaseMaterialPropsCtor &
        BabylonNode<BabylonjsCorePBRBaseMaterial>
      pbrBaseSimpleMaterial: FiberPBRBaseSimpleMaterialProps &
        FiberPBRBaseSimpleMaterialPropsCtor &
        BabylonNode<BabylonjsCorePBRBaseSimpleMaterial>
      pbrMetallicRoughnessMaterial: FiberPBRMetallicRoughnessMaterialProps &
        FiberPBRMetallicRoughnessMaterialPropsCtor &
        BabylonNode<BabylonjsCorePBRMetallicRoughnessMaterial>
      pbrSpecularGlossinessMaterial: FiberPBRSpecularGlossinessMaterialProps &
        FiberPBRSpecularGlossinessMaterialPropsCtor &
        BabylonNode<BabylonjsCorePBRSpecularGlossinessMaterial>
      pbrMaterial: FiberPBRMaterialProps &
        FiberPBRMaterialPropsCtor &
        BabylonNode<BabylonjsCorePBRMaterial>
      standardMaterial: FiberStandardMaterialProps &
        FiberStandardMaterialPropsCtor &
        BabylonNode<BabylonjsCoreStandardMaterial>
      backgroundMaterial: FiberBackgroundMaterialProps &
        FiberBackgroundMaterialPropsCtor &
        BabylonNode<BabylonjsCoreBackgroundMaterial>
      gaussianSplattingMaterial: FiberGaussianSplattingMaterialProps &
        FiberGaussianSplattingMaterialPropsCtor &
        BabylonNode<BabylonjsCoreGaussianSplattingMaterial>
      fluentMaterial: FiberFluentMaterialProps &
        FiberFluentMaterialPropsCtor &
        BabylonNode<BabylonjsGuiFluentMaterial>
      fluentButtonMaterial: FiberFluentButtonMaterialProps &
        FiberFluentButtonMaterialPropsCtor &
        BabylonNode<BabylonjsGuiFluentButtonMaterial>
      fluentBackplateMaterial: FiberFluentBackplateMaterialProps &
        FiberFluentBackplateMaterialPropsCtor &
        BabylonNode<BabylonjsGuiFluentBackplateMaterial>
      mrdlSliderBarMaterial: FiberMRDLSliderBarMaterialProps &
        FiberMRDLSliderBarMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLSliderBarMaterial>
      mrdlSliderThumbMaterial: FiberMRDLSliderThumbMaterialProps &
        FiberMRDLSliderThumbMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLSliderThumbMaterial>
      mrdlBackplateMaterial: FiberMRDLBackplateMaterialProps &
        FiberMRDLBackplateMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLBackplateMaterial>
      mrdlBackglowMaterial: FiberMRDLBackglowMaterialProps &
        FiberMRDLBackglowMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLBackglowMaterial>
      mrdlFrontplateMaterial: FiberMRDLFrontplateMaterialProps &
        FiberMRDLFrontplateMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLFrontplateMaterial>
      mrdlInnerquadMaterial: FiberMRDLInnerquadMaterialProps &
        FiberMRDLInnerquadMaterialPropsCtor &
        BabylonNode<BabylonjsGuiMRDLInnerquadMaterial>
      multiMaterial: FiberMultiMaterialProps &
        FiberMultiMaterialPropsCtor &
        BabylonNode<BabylonjsCoreMultiMaterial>
      light: FiberLightProps & FiberLightPropsCtor & BabylonNode<BabylonjsCoreLight>
      shadowLight: FiberShadowLightProps &
        FiberShadowLightPropsCtor &
        BabylonNode<BabylonjsCoreShadowLight>
      directionalLight: FiberDirectionalLightProps &
        FiberDirectionalLightPropsCtor &
        BabylonNode<BabylonjsCoreDirectionalLight>
      pointLight: FiberPointLightProps &
        FiberPointLightPropsCtor &
        BabylonNode<BabylonjsCorePointLight>
      spotLight: FiberSpotLightProps & FiberSpotLightPropsCtor & BabylonNode<BabylonjsCoreSpotLight>
      hemisphericLight: FiberHemisphericLightProps &
        FiberHemisphericLightPropsCtor &
        BabylonNode<BabylonjsCoreHemisphericLight>
      control: FiberControlProps & FiberControlPropsCtor & BabylonNode<BabylonjsGuiControl>
      container: FiberContainerProps & FiberContainerPropsCtor & BabylonNode<BabylonjsGuiContainer>
      rectangle: FiberRectangleProps & FiberRectanglePropsCtor & BabylonNode<BabylonjsGuiRectangle>
      'babylon-button': FiberButtonProps & FiberButtonPropsCtor & BabylonNode<BabylonjsGuiButton>
      focusableButton: FiberFocusableButtonProps &
        FiberFocusableButtonPropsCtor &
        BabylonNode<BabylonjsGuiFocusableButton>
      selectionPanel: FiberSelectionPanelProps &
        FiberSelectionPanelPropsCtor &
        BabylonNode<BabylonjsGuiSelectionPanel>
      scrollViewer: FiberScrollViewerProps &
        FiberScrollViewerPropsCtor &
        BabylonNode<BabylonjsGuiScrollViewer>
      toggleButton: FiberToggleButtonProps &
        FiberToggleButtonPropsCtor &
        BabylonNode<BabylonjsGuiToggleButton>
      stackPanel: FiberStackPanelProps &
        FiberStackPanelPropsCtor &
        BabylonNode<BabylonjsGuiStackPanel>
      virtualKeyboard: FiberVirtualKeyboardProps &
        FiberVirtualKeyboardPropsCtor &
        BabylonNode<BabylonjsGuiVirtualKeyboard> &
        VirtualKeyboardCustomProps
      'babylon-ellipse': FiberEllipseProps &
        FiberEllipsePropsCtor &
        BabylonNode<BabylonjsGuiEllipse>
      grid: FiberGridProps & FiberGridPropsCtor & BabylonNode<BabylonjsGuiGrid>
      scrollViewerWindow: Fiber_ScrollViewerWindowProps &
        Fiber_ScrollViewerWindowPropsCtor &
        BabylonNode<BabylonjsGui_ScrollViewerWindow>
      textBlock: FiberTextBlockProps & FiberTextBlockPropsCtor & BabylonNode<BabylonjsGuiTextBlock>
      'babylon-image': FiberImageProps & FiberImagePropsCtor & BabylonNode<BabylonjsGuiImage>
      checkbox: FiberCheckboxProps & FiberCheckboxPropsCtor & BabylonNode<BabylonjsGuiCheckbox>
      colorPicker: FiberColorPickerProps &
        FiberColorPickerPropsCtor &
        BabylonNode<BabylonjsGuiColorPicker>
      inputText: FiberInputTextProps & FiberInputTextPropsCtor & BabylonNode<BabylonjsGuiInputText>
      inputTextArea: FiberInputTextAreaProps &
        FiberInputTextAreaPropsCtor &
        BabylonNode<BabylonjsGuiInputTextArea>
      inputPassword: FiberInputPasswordProps &
        FiberInputPasswordPropsCtor &
        BabylonNode<BabylonjsGuiInputPassword>
      'babylon-line': FiberLineProps & FiberLinePropsCtor & BabylonNode<BabylonjsGuiLine>
      multiLine: FiberMultiLineProps & FiberMultiLinePropsCtor & BabylonNode<BabylonjsGuiMultiLine>
      radioButton: FiberRadioButtonProps &
        FiberRadioButtonPropsCtor &
        BabylonNode<BabylonjsGuiRadioButton>
      baseSlider: FiberBaseSliderProps &
        FiberBaseSliderPropsCtor &
        BabylonNode<BabylonjsGuiBaseSlider>
      scrollBar: FiberScrollBarProps & FiberScrollBarPropsCtor & BabylonNode<BabylonjsGuiScrollBar>
      imageScrollBar: FiberImageScrollBarProps &
        FiberImageScrollBarPropsCtor &
        BabylonNode<BabylonjsGuiImageScrollBar>
      slider: FiberSliderProps & FiberSliderPropsCtor & BabylonNode<BabylonjsGuiSlider>
      imageBasedSlider: FiberImageBasedSliderProps &
        FiberImageBasedSliderPropsCtor &
        BabylonNode<BabylonjsGuiImageBasedSlider>
      displayGrid: FiberDisplayGridProps &
        FiberDisplayGridPropsCtor &
        BabylonNode<BabylonjsGuiDisplayGrid>
      control3D: FiberControl3DProps & FiberControl3DPropsCtor & BabylonNode<BabylonjsGuiControl3D>
      container3D: FiberContainer3DProps &
        FiberContainer3DPropsCtor &
        BabylonNode<BabylonjsGuiContainer3D>
      volumeBasedPanel: FiberVolumeBasedPanelProps &
        FiberVolumeBasedPanelPropsCtor &
        BabylonNode<BabylonjsGuiVolumeBasedPanel>
      cylinderPanel: FiberCylinderPanelProps &
        FiberCylinderPanelPropsCtor &
        BabylonNode<BabylonjsGuiCylinderPanel>
      touchHolographicMenu: FiberTouchHolographicMenuProps &
        FiberTouchHolographicMenuPropsCtor &
        BabylonNode<BabylonjsGuiTouchHolographicMenu>
      handMenu: FiberHandMenuProps & FiberHandMenuPropsCtor & BabylonNode<BabylonjsGuiHandMenu>
      nearMenu: FiberNearMenuProps & FiberNearMenuPropsCtor & BabylonNode<BabylonjsGuiNearMenu>
      planePanel: FiberPlanePanelProps &
        FiberPlanePanelPropsCtor &
        BabylonNode<BabylonjsGuiPlanePanel>
      scatterPanel: FiberScatterPanelProps &
        FiberScatterPanelPropsCtor &
        BabylonNode<BabylonjsGuiScatterPanel>
      spherePanel: FiberSpherePanelProps &
        FiberSpherePanelPropsCtor &
        BabylonNode<BabylonjsGuiSpherePanel>
      stackPanel3D: FiberStackPanel3DProps &
        FiberStackPanel3DPropsCtor &
        BabylonNode<BabylonjsGuiStackPanel3D>
      contentDisplay3D: FiberContentDisplay3DProps &
        FiberContentDisplay3DPropsCtor &
        BabylonNode<BabylonjsGuiContentDisplay3D>
      abstractButton3D: FiberAbstractButton3DProps &
        FiberAbstractButton3DPropsCtor &
        BabylonNode<BabylonjsGuiAbstractButton3D>
      button3D: FiberButton3DProps & FiberButton3DPropsCtor & BabylonNode<BabylonjsGuiButton3D>
      touchButton3D: FiberTouchButton3DProps &
        FiberTouchButton3DPropsCtor &
        BabylonNode<BabylonjsGuiTouchButton3D>
      touchHolographicButton: FiberTouchHolographicButtonProps &
        FiberTouchHolographicButtonPropsCtor &
        BabylonNode<BabylonjsGuiTouchHolographicButton>
      touchMeshButton3D: FiberTouchMeshButton3DProps &
        FiberTouchMeshButton3DPropsCtor &
        BabylonNode<BabylonjsGuiTouchMeshButton3D>
      holographicButton: FiberHolographicButtonProps &
        FiberHolographicButtonPropsCtor &
        BabylonNode<BabylonjsGuiHolographicButton>
      meshButton3D: FiberMeshButton3DProps &
        FiberMeshButton3DPropsCtor &
        BabylonNode<BabylonjsGuiMeshButton3D>
      holographicSlate: FiberHolographicSlateProps &
        FiberHolographicSlatePropsCtor &
        BabylonNode<BabylonjsGuiHolographicSlate>
      holographicBackplate: FiberHolographicBackplateProps &
        FiberHolographicBackplatePropsCtor &
        BabylonNode<BabylonjsGuiHolographicBackplate>
      slider3D: FiberSlider3DProps & FiberSlider3DPropsCtor & BabylonNode<BabylonjsGuiSlider3D>
      spriteManager: FiberSpriteManagerProps &
        FiberSpriteManagerPropsCtor &
        BabylonNode<BabylonjsCoreSpriteManager>
      spritePackedManager: FiberSpritePackedManagerProps &
        FiberSpritePackedManagerPropsCtor &
        BabylonNode<BabylonjsCoreSpritePackedManager>
      thinSprite: FiberThinSpriteProps &
        FiberThinSpritePropsCtor &
        BabylonNode<BabylonjsCoreThinSprite>
      sprite: FiberSpriteProps & FiberSpritePropsCtor & BabylonNode<BabylonjsCoreSprite>
      sound: FiberSoundProps & FiberSoundPropsCtor & BabylonNode<BabylonjsCoreSound>
      effectLayer: FiberEffectLayerProps &
        FiberEffectLayerPropsCtor &
        BabylonNode<BabylonjsCoreEffectLayer>
      glowLayer: FiberGlowLayerProps &
        FiberGlowLayerPropsCtor &
        BabylonNode<BabylonjsCoreGlowLayer> &
        GlowLayerCustomProps
      highlightLayer: FiberHighlightLayerProps &
        FiberHighlightLayerPropsCtor &
        BabylonNode<BabylonjsCoreHighlightLayer>
      thinTexture: FiberThinTextureProps &
        FiberThinTexturePropsCtor &
        BabylonNode<BabylonjsCoreThinTexture>
      baseTexture: FiberBaseTextureProps &
        FiberBaseTexturePropsCtor &
        BabylonNode<BabylonjsCoreBaseTexture>
      cubeTexture: FiberCubeTextureProps &
        FiberCubeTexturePropsCtor &
        BabylonNode<BabylonjsCoreCubeTexture>
      rawCubeTexture: FiberRawCubeTextureProps &
        FiberRawCubeTexturePropsCtor &
        BabylonNode<BabylonjsCoreRawCubeTexture>
      texture: FiberTextureProps & FiberTexturePropsCtor & BabylonNode<BabylonjsCoreTexture>
      videoTexture: FiberVideoTextureProps &
        FiberVideoTexturePropsCtor &
        BabylonNode<BabylonjsCoreVideoTexture>
      proceduralTexture: FiberProceduralTextureProps &
        FiberProceduralTexturePropsCtor &
        BabylonNode<BabylonjsCoreProceduralTexture>
      customProceduralTexture: FiberCustomProceduralTextureProps &
        FiberCustomProceduralTexturePropsCtor &
        BabylonNode<BabylonjsCoreCustomProceduralTexture>
      noiseProceduralTexture: FiberNoiseProceduralTextureProps &
        FiberNoiseProceduralTexturePropsCtor &
        BabylonNode<BabylonjsCoreNoiseProceduralTexture>
      rawTexture: FiberRawTextureProps &
        FiberRawTexturePropsCtor &
        BabylonNode<BabylonjsCoreRawTexture>
      renderTargetTexture: FiberRenderTargetTextureProps &
        FiberRenderTargetTexturePropsCtor &
        BabylonNode<BabylonjsCoreRenderTargetTexture>
      mirrorTexture: FiberMirrorTextureProps &
        FiberMirrorTexturePropsCtor &
        BabylonNode<BabylonjsCoreMirrorTexture>
      multiRenderTarget: FiberMultiRenderTargetProps &
        FiberMultiRenderTargetPropsCtor &
        BabylonNode<BabylonjsCoreMultiRenderTarget>
      prePassRenderTarget: FiberPrePassRenderTargetProps &
        FiberPrePassRenderTargetPropsCtor &
        BabylonNode<BabylonjsCorePrePassRenderTarget>
      refractionTexture: FiberRefractionTextureProps &
        FiberRefractionTexturePropsCtor &
        BabylonNode<BabylonjsCoreRefractionTexture>
      xrSpaceWarpRenderTarget: FiberXRSpaceWarpRenderTargetProps &
        FiberXRSpaceWarpRenderTargetPropsCtor &
        BabylonNode<BabylonjsCoreXRSpaceWarpRenderTarget>
      multiviewRenderTarget: FiberMultiviewRenderTargetProps &
        FiberMultiviewRenderTargetPropsCtor &
        BabylonNode<BabylonjsCoreMultiviewRenderTarget>
      rawTexture2DArray: FiberRawTexture2DArrayProps &
        FiberRawTexture2DArrayPropsCtor &
        BabylonNode<BabylonjsCoreRawTexture2DArray>
      dynamicTexture: FiberDynamicTextureProps &
        FiberDynamicTexturePropsCtor &
        BabylonNode<BabylonjsCoreDynamicTexture>
      advancedDynamicTexture: FiberAdvancedDynamicTextureProps &
        FiberAdvancedDynamicTexturePropsCtor &
        BabylonNode<BabylonjsGuiAdvancedDynamicTexture> &
        ADTCustomProps
      adtForMesh: FiberAdvancedDynamicTextureProps &
        FiberADTForMeshPropsCtor &
        BabylonNode<BabylonjsGuiAdvancedDynamicTexture>
      adtForMeshTexture: FiberAdvancedDynamicTextureProps &
        FiberADTForMeshTexturePropsCtor &
        BabylonNode<BabylonjsGuiAdvancedDynamicTexture>
      adtFullscreenUi: FiberAdvancedDynamicTextureProps &
        FiberADTFullscreenUIPropsCtor &
        BabylonNode<BabylonjsGuiAdvancedDynamicTexture>
      rawTexture3D: FiberRawTexture3DProps &
        FiberRawTexture3DPropsCtor &
        BabylonNode<BabylonjsCoreRawTexture3D>
      colorGradingTexture: FiberColorGradingTextureProps &
        FiberColorGradingTexturePropsCtor &
        BabylonNode<BabylonjsCoreColorGradingTexture>
      equiRectangularCubeTexture: FiberEquiRectangularCubeTextureProps &
        FiberEquiRectangularCubeTexturePropsCtor &
        BabylonNode<BabylonjsCoreEquiRectangularCubeTexture>
      hdrCubeTexture: FiberHDRCubeTextureProps &
        FiberHDRCubeTexturePropsCtor &
        BabylonNode<BabylonjsCoreHDRCubeTexture>
      htmlElementTexture: FiberHtmlElementTextureProps &
        FiberHtmlElementTexturePropsCtor &
        BabylonNode<BabylonjsCoreHtmlElementTexture>
      thinRenderTargetTexture: FiberThinRenderTargetTextureProps &
        FiberThinRenderTargetTexturePropsCtor &
        BabylonNode<BabylonjsCoreThinRenderTargetTexture>
      postProcessRenderPipeline: FiberPostProcessRenderPipelineProps &
        FiberPostProcessRenderPipelinePropsCtor &
        BabylonNode<BabylonjsCorePostProcessRenderPipeline>
      defaultRenderingPipeline: FiberDefaultRenderingPipelineProps &
        FiberDefaultRenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreDefaultRenderingPipeline>
      lensRenderingPipeline: FiberLensRenderingPipelineProps &
        FiberLensRenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreLensRenderingPipeline>
      ssao2RenderingPipeline: FiberSSAO2RenderingPipelineProps &
        FiberSSAO2RenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreSSAO2RenderingPipeline>
      ssaoRenderingPipeline: FiberSSAORenderingPipelineProps &
        FiberSSAORenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreSSAORenderingPipeline>
      standardRenderingPipeline: FiberStandardRenderingPipelineProps &
        FiberStandardRenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreStandardRenderingPipeline>
      ssrRenderingPipeline: FiberSSRRenderingPipelineProps &
        FiberSSRRenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreSSRRenderingPipeline>
      taaRenderingPipeline: FiberTAARenderingPipelineProps &
        FiberTAARenderingPipelinePropsCtor &
        BabylonNode<BabylonjsCoreTAARenderingPipeline>
      iblShadowsRenderPipeline: FiberIblShadowsRenderPipelineProps &
        FiberIblShadowsRenderPipelinePropsCtor &
        BabylonNode<BabylonjsCoreIblShadowsRenderPipeline>
      postProcess: FiberPostProcessProps &
        FiberPostProcessPropsCtor &
        BabylonNode<BabylonjsCorePostProcess>
      imageProcessingPostProcess: FiberImageProcessingPostProcessProps &
        FiberImageProcessingPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreImageProcessingPostProcess>
      anaglyphPostProcess: FiberAnaglyphPostProcessProps &
        FiberAnaglyphPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreAnaglyphPostProcess>
      blackAndWhitePostProcess: FiberBlackAndWhitePostProcessProps &
        FiberBlackAndWhitePostProcessPropsCtor &
        BabylonNode<BabylonjsCoreBlackAndWhitePostProcess>
      extractHighlightsPostProcess: FiberExtractHighlightsPostProcessProps &
        FiberExtractHighlightsPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreExtractHighlightsPostProcess>
      bloomMergePostProcess: FiberBloomMergePostProcessProps &
        FiberBloomMergePostProcessPropsCtor &
        BabylonNode<BabylonjsCoreBloomMergePostProcess>
      blurPostProcess: FiberBlurPostProcessProps &
        FiberBlurPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreBlurPostProcess>
      depthOfFieldBlurPostProcess: FiberDepthOfFieldBlurPostProcessProps &
        FiberDepthOfFieldBlurPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreDepthOfFieldBlurPostProcess>
      chromaticAberrationPostProcess: FiberChromaticAberrationPostProcessProps &
        FiberChromaticAberrationPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreChromaticAberrationPostProcess>
      circleOfConfusionPostProcess: FiberCircleOfConfusionPostProcessProps &
        FiberCircleOfConfusionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreCircleOfConfusionPostProcess>
      colorCorrectionPostProcess: FiberColorCorrectionPostProcessProps &
        FiberColorCorrectionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreColorCorrectionPostProcess>
      convolutionPostProcess: FiberConvolutionPostProcessProps &
        FiberConvolutionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreConvolutionPostProcess>
      depthOfFieldMergePostProcess: FiberDepthOfFieldMergePostProcessProps &
        FiberDepthOfFieldMergePostProcessPropsCtor &
        BabylonNode<BabylonjsCoreDepthOfFieldMergePostProcess>
      displayPassPostProcess: FiberDisplayPassPostProcessProps &
        FiberDisplayPassPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreDisplayPassPostProcess>
      filterPostProcess: FiberFilterPostProcessProps &
        FiberFilterPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreFilterPostProcess>
      fxaaPostProcess: FiberFxaaPostProcessProps &
        FiberFxaaPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreFxaaPostProcess>
      grainPostProcess: FiberGrainPostProcessProps &
        FiberGrainPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreGrainPostProcess>
      highlightsPostProcess: FiberHighlightsPostProcessProps &
        FiberHighlightsPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreHighlightsPostProcess>
      motionBlurPostProcess: FiberMotionBlurPostProcessProps &
        FiberMotionBlurPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreMotionBlurPostProcess>
      passPostProcess: FiberPassPostProcessProps &
        FiberPassPostProcessPropsCtor &
        BabylonNode<BabylonjsCorePassPostProcess>
      passCubePostProcess: FiberPassCubePostProcessProps &
        FiberPassCubePostProcessPropsCtor &
        BabylonNode<BabylonjsCorePassCubePostProcess>
      refractionPostProcess: FiberRefractionPostProcessProps &
        FiberRefractionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreRefractionPostProcess>
      sharpenPostProcess: FiberSharpenPostProcessProps &
        FiberSharpenPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreSharpenPostProcess>
      screenSpaceReflectionPostProcess: FiberScreenSpaceReflectionPostProcessProps &
        FiberScreenSpaceReflectionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreScreenSpaceReflectionPostProcess>
      stereoscopicInterlacePostProcessI: FiberStereoscopicInterlacePostProcessIProps &
        FiberStereoscopicInterlacePostProcessIPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicInterlacePostProcessI>
      stereoscopicInterlacePostProcess: FiberStereoscopicInterlacePostProcessProps &
        FiberStereoscopicInterlacePostProcessPropsCtor &
        BabylonNode<BabylonjsCoreStereoscopicInterlacePostProcess>
      tonemapPostProcess: FiberTonemapPostProcessProps &
        FiberTonemapPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreTonemapPostProcess>
      volumetricLightScatteringPostProcess: FiberVolumetricLightScatteringPostProcessProps &
        FiberVolumetricLightScatteringPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreVolumetricLightScatteringPostProcess>
      vrDistortionCorrectionPostProcess: FiberVRDistortionCorrectionPostProcessProps &
        FiberVRDistortionCorrectionPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreVRDistortionCorrectionPostProcess>
      vrMultiviewToSingleviewPostProcess: FiberVRMultiviewToSingleviewPostProcessProps &
        FiberVRMultiviewToSingleviewPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreVRMultiviewToSingleviewPostProcess>
      screenSpaceCurvaturePostProcess: FiberScreenSpaceCurvaturePostProcessProps &
        FiberScreenSpaceCurvaturePostProcessPropsCtor &
        BabylonNode<BabylonjsCoreScreenSpaceCurvaturePostProcess>
      subSurfaceScatteringPostProcess: FiberSubSurfaceScatteringPostProcessProps &
        FiberSubSurfaceScatteringPostProcessPropsCtor &
        BabylonNode<BabylonjsCoreSubSurfaceScatteringPostProcess>
      gizmo: FiberGizmoProps & FiberGizmoPropsCtor & BabylonNode<BabylonjsCoreGizmo>
      planeDragGizmo: FiberPlaneDragGizmoProps &
        FiberPlaneDragGizmoPropsCtor &
        BabylonNode<BabylonjsCorePlaneDragGizmo>
      planeRotationGizmo: FiberPlaneRotationGizmoProps &
        FiberPlaneRotationGizmoPropsCtor &
        BabylonNode<BabylonjsCorePlaneRotationGizmo>
      rotationGizmo: FiberRotationGizmoProps &
        FiberRotationGizmoPropsCtor &
        BabylonNode<BabylonjsCoreRotationGizmo>
      axisScaleGizmo: FiberAxisScaleGizmoProps &
        FiberAxisScaleGizmoPropsCtor &
        BabylonNode<BabylonjsCoreAxisScaleGizmo>
      scaleGizmo: FiberScaleGizmoProps &
        FiberScaleGizmoPropsCtor &
        BabylonNode<BabylonjsCoreScaleGizmo>
      boundingBoxGizmo: FiberBoundingBoxGizmoProps &
        FiberBoundingBoxGizmoPropsCtor &
        BabylonNode<BabylonjsCoreBoundingBoxGizmo>
      positionGizmo: FiberPositionGizmoProps &
        FiberPositionGizmoPropsCtor &
        BabylonNode<BabylonjsCorePositionGizmo>
      axisDragGizmo: FiberAxisDragGizmoProps &
        FiberAxisDragGizmoPropsCtor &
        BabylonNode<BabylonjsCoreAxisDragGizmo>
      lightGizmo: FiberLightGizmoProps &
        FiberLightGizmoPropsCtor &
        BabylonNode<BabylonjsCoreLightGizmo>
      cameraGizmo: FiberCameraGizmoProps &
        FiberCameraGizmoPropsCtor &
        BabylonNode<BabylonjsCoreCameraGizmo>
      slateGizmo: FiberSlateGizmoProps &
        FiberSlateGizmoPropsCtor &
        BabylonNode<BabylonjsGuiSlateGizmo>
      gui3DManager: FiberGUI3DManagerProps &
        FiberGUI3DManagerPropsCtor &
        BabylonNode<BabylonjsGuiGUI3DManager>
      environmentHelper: FiberEnvironmentHelperProps &
        FiberEnvironmentHelperPropsCtor &
        BabylonNode<BabylonjsCoreEnvironmentHelper>
      physicsImpostor: FiberPhysicsImpostorProps &
        FiberPhysicsImpostorPropsCtor &
        BabylonNode<BabylonjsCorePhysicsImpostor>
      physicsAggregate: FiberPhysicsAggregateProps &
        FiberPhysicsAggregatePropsCtor &
        BabylonNode<BabylonjsCorePhysicsAggregate>
      vrExperienceHelper: FiberVRExperienceHelperProps &
        FiberVRExperienceHelperPropsCtor &
        BabylonNode<BabylonjsCoreVRExperienceHelper>
      dynamicTerrain: FiberDynamicTerrainProps &
        FiberDynamicTerrainPropsCtor &
        BabylonNode<ExtensionsDynamicTerrain>
      pointsCloudSystem: FiberPointsCloudSystemProps &
        FiberPointsCloudSystemPropsCtor &
        BabylonNode<BabylonjsCorePointsCloudSystem>
      viewport: FiberViewportProps & FiberViewportPropsCtor & BabylonNode<BabylonjsCoreViewport>
      utilityLayerRenderer: FiberUtilityLayerRendererProps &
        FiberUtilityLayerRendererPropsCtor &
        BabylonNode<BabylonjsCoreUtilityLayerRenderer>
      materialPluginBase: FiberMaterialPluginBaseProps &
        FiberMaterialPluginBasePropsCtor &
        BabylonNode<BabylonjsCoreMaterialPluginBase>
      shadowGenerator: FiberShadowGeneratorProps &
        FiberShadowGeneratorPropsCtor &
        BabylonNode<BabylonjsCoreShadowGenerator>
      cascadedShadowGenerator: FiberCascadedShadowGeneratorProps &
        FiberCascadedShadowGeneratorPropsCtor &
        BabylonNode<BabylonjsCoreCascadedShadowGenerator>
      engineView: FiberEngineViewProps &
        FiberEngineViewPropsCtor &
        BabylonNode<BabylonjsCoreEngineView>
      gizmoManager: FiberGizmoManagerProps &
        FiberGizmoManagerPropsCtor &
        BabylonNode<BabylonjsCoreGizmoManager>
      layer: FiberLayerProps & FiberLayerPropsCtor & BabylonNode<BabylonjsCoreLayer>
      imageProcessingConfiguration: FiberImageProcessingConfigurationProps &
        FiberImageProcessingConfigurationPropsCtor &
        BabylonNode<BabylonjsCoreImageProcessingConfiguration>
      pbrClearCoatConfiguration: FiberPBRClearCoatConfigurationProps &
        FiberPBRClearCoatConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRClearCoatConfiguration>
      pbrIridescenceConfiguration: FiberPBRIridescenceConfigurationProps &
        FiberPBRIridescenceConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRIridescenceConfiguration>
      pbrAnisotropicConfiguration: FiberPBRAnisotropicConfigurationProps &
        FiberPBRAnisotropicConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRAnisotropicConfiguration>
      pbrbrdfConfiguration: FiberPBRBRDFConfigurationProps &
        FiberPBRBRDFConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRBRDFConfiguration>
      pbrSheenConfiguration: FiberPBRSheenConfigurationProps &
        FiberPBRSheenConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRSheenConfiguration>
      pbrSubSurfaceConfiguration: FiberPBRSubSurfaceConfigurationProps &
        FiberPBRSubSurfaceConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePBRSubSurfaceConfiguration>
      prePassConfiguration: FiberPrePassConfigurationProps &
        FiberPrePassConfigurationPropsCtor &
        BabylonNode<BabylonjsCorePrePassConfiguration>
      detailMapConfiguration: FiberDetailMapConfigurationProps &
        FiberDetailMapConfigurationPropsCtor &
        BabylonNode<BabylonjsCoreDetailMapConfiguration>
      autoRotationBehavior: FiberAutoRotationBehaviorProps &
        FiberAutoRotationBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreAutoRotationBehavior>
      bouncingBehavior: FiberBouncingBehaviorProps &
        FiberBouncingBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreBouncingBehavior>
      framingBehavior: FiberFramingBehaviorProps &
        FiberFramingBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreFramingBehavior>
      attachToBoxBehavior: FiberAttachToBoxBehaviorProps &
        FiberAttachToBoxBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreAttachToBoxBehavior>
      baseSixDofDragBehavior: FiberBaseSixDofDragBehaviorProps &
        FiberBaseSixDofDragBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreBaseSixDofDragBehavior>
      fadeInOutBehavior: FiberFadeInOutBehaviorProps &
        FiberFadeInOutBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreFadeInOutBehavior>
      followBehavior: FiberFollowBehaviorProps &
        FiberFollowBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreFollowBehavior>
      handConstraintBehavior: FiberHandConstraintBehaviorProps &
        FiberHandConstraintBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreHandConstraintBehavior>
      multiPointerScaleBehavior: FiberMultiPointerScaleBehaviorProps &
        FiberMultiPointerScaleBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreMultiPointerScaleBehavior>
      pointerDragBehavior: FiberPointerDragBehaviorProps &
        FiberPointerDragBehaviorPropsCtor &
        BabylonNode<BabylonjsCorePointerDragBehavior>
      sixDofDragBehavior: FiberSixDofDragBehaviorProps &
        FiberSixDofDragBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreSixDofDragBehavior>
      surfaceMagnetismBehavior: FiberSurfaceMagnetismBehaviorProps &
        FiberSurfaceMagnetismBehaviorPropsCtor &
        BabylonNode<BabylonjsCoreSurfaceMagnetismBehavior>
      defaultBehavior: FiberDefaultBehaviorProps &
        FiberDefaultBehaviorPropsCtor &
        BabylonNode<BabylonjsGuiDefaultBehavior>
      rowDefinition: RowOrColumnDefinitionProps & BabylonNode<RowOrColumnDefinitionProps>
      columnDefinition: RowOrColumnDefinitionProps & BabylonNode<RowOrColumnDefinitionProps>
    }
  }
}

export type FiberNodeProps = {
  accessibilityTag?: BabylonjsCoreIAccessibilityTag
  addBehavior?: any
  animationPropertiesOverride?: BabylonjsCoreAnimationPropertiesOverride
  animations?: BabylonjsCoreAnimation[]
  doNotSerialize?: boolean
  id?: string
  inspectableCustomProperties?: BabylonjsCoreIInspectable[]
  metadata?: any
  name?: string
  onAccessibilityTagChangedObservable?: any
  onDispose?: () => void
  onDisposeObservable?: any
  onReady?: (node: BabylonjsCoreNode) => void
  parent?: BabylonjsCoreNode
  reservedDataStore?: any
  setEnabled?: any
  state?: string
  uniqueId?: number
} & CustomProps
export type FiberNodePropsCtor = {
  name: string
  isPure?: boolean
}
export type FiberTransformNodeProps = {
  addChild?: any
  addRotation?: any
  billboardMode?: number
  ignoreNonUniformScaling?: boolean
  infiniteDistance?: boolean
  onAfterWorldMatrixUpdateObservable?: any
  position?: BabylonjsCoreVector3
  preserveParentRotationForBillboard?: boolean
  reIntegrateRotationIntoRotationQuaternion?: boolean
  rotation?: BabylonjsCoreVector3
  rotationQuaternion?: BabylonjsCoreQuaternion
  scaling?: BabylonjsCoreVector3
  scalingDeterminant?: number
  setAbsolutePosition?: any
  setDirection?: any
  setParent?: any
  setPivotMatrix?: any
  setPivotPoint?: any
  setPositionWithLocalVector?: any
  setPreTransformMatrix?: any
  translate?: any
} & FiberNodeProps
export type FiberTransformNodePropsCtor = {
  name: string
  isPure?: boolean
}
export type FiberAbstractMeshProps = {
  actionManager?: BabylonjsCoreAbstractActionManager
  alphaIndex?: number
  alwaysSelectAsActiveMesh?: boolean
  applyFog?: boolean
  bakedVertexAnimationManager?: BabylonjsCoreIBakedVertexAnimationManager
  checkCollisions?: boolean
  collisionGroup?: number
  collisionMask?: number
  collisionResponse?: boolean
  collisionRetryCount?: number
  computeBonesUsingShaders?: boolean
  cullingStrategy?: number
  definedFacingForward?: boolean
  doNotSyncBoundingInfo?: boolean
  edgesColor?: BabylonjsCoreColor4
  edgesWidth?: number
  ellipsoid?: BabylonjsCoreVector3
  'ellipsoid-x'?: number
  'ellipsoid-y'?: number
  'ellipsoid-z'?: number
  ellipsoidOffset?: BabylonjsCoreVector3
  'ellipsoidOffset-x'?: number
  'ellipsoidOffset-y'?: number
  'ellipsoidOffset-z'?: number
  enableDistantPicking?: boolean
  enableEdgesRendering?: any
  enablePointerMoveEvents?: boolean
  facetDepthSortFrom?: BabylonjsCoreVector3
  hasVertexAlpha?: boolean
  inheritVisibility?: boolean
  instancedBuffers?: { [key: string]: any }
  isBlocker?: boolean
  isNearGrabbable?: boolean
  isNearPickable?: boolean
  isPickable?: boolean
  isVisible?: boolean
  layerMask?: number
  material?: BabylonjsCoreMaterial
  morphTargetManager?: BabylonjsCoreMorphTargetManager
  mustDepthSortFacets?: boolean
  numBoneInfluencers?: number
  onCollide?: (collidedMesh?: BabylonjsCoreAbstractMesh) => void
  onCollideObservable?: any
  onCollisionPositionChange?: () => void
  onCollisionPositionChangeObservable?: any
  onMaterialChangedObservable?: any
  onRebuildObservable?: any
  outlineColor?: BabylonjsCoreColor3
  outlineWidth?: number
  overlayAlpha?: number
  overlayColor?: BabylonjsCoreColor3
  partitioningBBoxRatio?: number
  partitioningSubdivisions?: number
  pointerOverDisableMeshTesting?: boolean
  rawBoundingInfo?: BabylonjsCoreBoundingInfo
  receiveShadows?: boolean
  renderingGroupId?: number
  setBoundingInfo?: any
  setIndices?: any
  setMaterialForRenderPass?: any
  setVerticesData?: any
  showSubMeshesBoundingBox?: boolean
  skeleton?: BabylonjsCoreSkeleton
  subMeshes?: BabylonjsCoreSubMesh[]
  surroundingMeshes?: BabylonjsCoreAbstractMesh[]
  useOctreeForCollisions?: boolean
  useOctreeForPicking?: boolean
  useOctreeForRenderingSelection?: boolean
  useVertexColors?: boolean
  visibility?: number
} & FiberTransformNodeProps
export type FiberAbstractMeshPropsCtor = {
  name: string
}
export type FiberInstancedMeshProps = {
  material?: BabylonjsCoreMaterial
  receiveShadows?: boolean
  renderingGroupId?: number
  setIndices?: any
  setVerticesData?: any
  skeleton?: BabylonjsCoreSkeleton
  visibility?: number
} & FiberAbstractMeshProps
export type FiberInstancedMeshPropsCtor = {
  name: string
  source: BabylonjsCoreMesh
}
export type FiberInstancedLinesMeshProps = {
  intersectionThreshold?: number
} & FiberInstancedMeshProps
export type FiberInstancedLinesMeshPropsCtor = {
  name: string
  source: BabylonjsCoreLinesMesh
}
export type FiberMeshProps = {
  addInstance?: any
  addLODLevel?: any
  computeBonesUsingShaders?: boolean
  delayLoadingFile?: string
  delayLoadState?: number
  forcedInstanceCount?: number
  forceWorldMatrixInstancedBufferUpdate?: boolean
  ignoreCameraMaxZ?: boolean
  instances?: BabylonjsCoreInstancedMesh[]
  isUnIndexed?: boolean
  manualUpdateOfPreviousWorldMatrixInstancedBuffer?: boolean
  manualUpdateOfWorldMatrixInstancedBuffer?: boolean
  material?: BabylonjsCoreMaterial
  onBeforeDraw?: () => void
  onLODLevelSelection?: (
    distance: number,
    mesh: BabylonjsCoreMesh,
    selectedLevel: BabylonjsCoreMesh
  ) => void
  onMeshReadyObservable?: any
  overrideMaterialSideOrientation?: number
  overridenInstanceCount?: number
  overrideRenderingFillMode?: number
  setIndexBuffer?: any
  setIndices?: any
  setMaterialById?: any
  setMaterialByID?: any
  setVerticesBuffer?: any
  setVerticesData?: any
  sideOrientation?: number
  useLODScreenCoverage?: boolean
} & FiberAbstractMeshProps
export type FiberMeshPropsCtor = {
  name: string
  parent?: BabylonjsCoreNode
  source?: BabylonjsCoreMesh
  doNotCloneChildren?: boolean
  clonePhysicsImpostor?: boolean
}
export type FiberGoldbergMeshProps = {
  goldbergData?: BabylonjsCoreGoldbergData
  setGoldbergFaceColors?: any
  setGoldbergFaceUVs?: any
} & FiberMeshProps
export type FiberGoldbergMeshPropsCtor = {}
export type FiberGroundMeshProps = {
  generateOctree?: boolean
} & FiberMeshProps
export type FiberGroundMeshPropsCtor = {
  name: string
}
export type FiberLinesMeshProps = {
  alpha?: number
  checkCollisions?: boolean
  color?: BabylonjsCoreColor3
  intersectionThreshold?: number
  material?: BabylonjsCoreMaterial
} & FiberMeshProps
export type FiberLinesMeshPropsCtor = {
  name: string
  parent?: BabylonjsCoreNode
  source?: BabylonjsCoreLinesMesh
  doNotCloneChildren?: boolean
  useVertexColor?: boolean
  useVertexAlpha?: boolean
  material?: BabylonjsCoreMaterial
}
export type FiberTrailMeshProps = {
  diameter?: number
} & FiberMeshProps
export type FiberTrailMeshPropsCtor = {
  name: string
  generator: BabylonjsCoreTransformNode
  diameter?: number
  length?: number
  autoStart?: boolean
}
export type FiberGreasedLineBaseMeshProps = {
  addPoints?: any
  colorPointers?: number[]
  offsets?: number[]
  setPoints?: any
  uvs?: BabylonjsCoreFloatArray
  widths?: number[]
} & FiberMeshProps
export type FiberGreasedLineBaseMeshPropsCtor = {
  name: string
  _options: BabylonjsCoreGreasedLineMeshOptions
}
export type FiberGreasedLineMeshProps = {
  intersectionThreshold?: number
} & FiberGreasedLineBaseMeshProps
export type FiberGreasedLineMeshPropsCtor = {
  name: string
  _options: BabylonjsCoreGreasedLineMeshOptions
}
export type FiberGreasedLineRibbonMeshProps = {
  addPoints?: any
  slopes?: number[]
} & FiberGreasedLineBaseMeshProps
export type FiberGreasedLineRibbonMeshPropsCtor = {
  name: string
  _options: BabylonjsCoreGreasedLineMeshOptions
  _pathOptions?: { options: BabylonjsCoreGreasedLineMeshOptions; pathCount: number }[]
}
export type FiberGaussianSplattingMeshProps = {} & FiberMeshProps
export type FiberGaussianSplattingMeshPropsCtor = {
  name: string
  url?: string
  keepInRam?: boolean
}
export type FiberCameraProps = {
  cameraRigMode?: number
  customRenderTargets?: BabylonjsCoreRenderTargetTexture[]
  fov?: number
  fovMode?: number
  inertia?: number
  inputs?: BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>
  interaxialDistance?: number
  isIntermediate?: boolean
  isRigCamera?: boolean
  isStereoscopicSideBySide?: boolean
  layerMask?: number
  maxZ?: number
  minZ?: number
  mode?: number
  oblique?: BabylonjsCoreIObliqueParams
  onAfterCheckInputsObservable?: any
  onProjectionMatrixChangedObservable?: any
  onRestoreStateObservable?: any
  onViewMatrixChangedObservable?: any
  orthoBottom?: number
  orthoLeft?: number
  orthoRight?: number
  orthoTop?: number
  outputRenderTarget?: BabylonjsCoreRenderTargetTexture
  position?: BabylonjsCoreVector3
  projectionPlaneTilt?: number
  renderPassId?: number
  rigParent?: BabylonjsCoreCamera
  setCameraRigMode?: any
  setCameraRigParameter?: any
  upVector?: BabylonjsCoreVector3
  viewport?: BabylonjsCoreViewport
} & FiberNodeProps &
  CameraCustomProps
export type FiberCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  setActiveOnSceneIfNoneActive?: boolean
}
export type FiberTargetCameraProps = {
  cameraDirection?: BabylonjsCoreVector3
  'cameraDirection-x'?: number
  'cameraDirection-y'?: number
  'cameraDirection-z'?: number
  cameraRotation?: BabylonjsCoreVector2
  ignoreParentScaling?: boolean
  inverseRotationSpeed?: number
  invertRotation?: boolean
  lockedTarget?: any
  noRotationConstraint?: boolean
  rotation?: BabylonjsCoreVector3
  'rotation-x'?: number
  'rotation-y'?: number
  'rotation-z'?: number
  rotationQuaternion?: BabylonjsCoreQuaternion
  setTarget?: any
  speed?: number
  target?: BabylonjsCoreVector3
  updateUpVectorFromRotation?: boolean
} & FiberCameraProps
export type FiberTargetCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  setActiveOnSceneIfNoneActive?: boolean
}
export type FiberFreeCameraProps = {
  angularSensibility?: number
  applyGravity?: boolean
  checkCollisions?: boolean
  collisionMask?: number
  ellipsoid?: BabylonjsCoreVector3
  'ellipsoid-x'?: number
  'ellipsoid-y'?: number
  'ellipsoid-z'?: number
  ellipsoidOffset?: BabylonjsCoreVector3
  'ellipsoidOffset-x'?: number
  'ellipsoidOffset-y'?: number
  'ellipsoidOffset-z'?: number
  inputs?: BabylonjsCoreFreeCameraInputsManager
  keysDown?: number[]
  keysDownward?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysRotateDown?: number[]
  keysRotateLeft?: number[]
  keysRotateRight?: number[]
  keysRotateUp?: number[]
  keysUp?: number[]
  keysUpward?: number[]
  needMoveForGravity?: boolean
  onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void
} & FiberTargetCameraProps
export type FiberFreeCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  setActiveOnSceneIfNoneActive?: boolean
}
export type FiberWebXRCameraProps = {
  compensateOnFirstFrame?: boolean
  onAfterCameraTeleport?: any
  onBeforeCameraTeleport?: any
  onTrackingStateChanged?: any
  onXRCameraInitializedObservable?: any
  setTarget?: any
  setTransformationFromNonVRCamera?: any
} & FiberFreeCameraProps
export type FiberWebXRCameraPropsCtor = {
  name: string
  _xrSessionManager: BabylonjsCoreWebXRSessionManager
}
export type FiberTouchCameraProps = {
  touchAngularSensibility?: number
  touchMoveSensibility?: number
} & FiberFreeCameraProps
export type FiberTouchCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberUniversalCameraProps = {
  gamepadAngularSensibility?: number
  gamepadMoveSensibility?: number
} & FiberTouchCameraProps
export type FiberUniversalCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberGamepadCameraProps = {} & FiberUniversalCameraProps
export type FiberGamepadCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberAnaglyphGamepadCameraProps = {} & FiberGamepadCameraProps
export type FiberAnaglyphGamepadCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
}
export type FiberStereoscopicGamepadCameraProps = {} & FiberGamepadCameraProps
export type FiberStereoscopicGamepadCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
  isStereoscopicSideBySide: boolean
}
export type FiberAnaglyphUniversalCameraProps = {} & FiberUniversalCameraProps
export type FiberAnaglyphUniversalCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
}
export type FiberStereoscopicUniversalCameraProps = {} & FiberUniversalCameraProps
export type FiberStereoscopicUniversalCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
  isStereoscopicSideBySide: boolean
}
export type FiberStereoscopicScreenUniversalCameraProps = {
  distanceBetweenEyes?: number
  distanceToProjectionPlane?: number
} & FiberUniversalCameraProps
export type FiberStereoscopicScreenUniversalCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  distanceToProjectionPlane?: number
  distanceBetweenEyes?: number
}
export type FiberDeviceOrientationCameraProps = {
  disablePointerInputWhenUsingDeviceOrientation?: boolean
  enableHorizontalDragging?: any
} & FiberFreeCameraProps
export type FiberDeviceOrientationCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberVRDeviceOrientationFreeCameraProps = {} & FiberDeviceOrientationCameraProps
export type FiberVRDeviceOrientationFreeCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  compensateDistortion?: boolean
  vrCameraMetrics?: BabylonjsCoreVRCameraMetrics
}
export type FiberVRDeviceOrientationGamepadCameraProps =
  {} & FiberVRDeviceOrientationFreeCameraProps
export type FiberVRDeviceOrientationGamepadCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  compensateDistortion?: boolean
  vrCameraMetrics?: BabylonjsCoreVRCameraMetrics
}
export type FiberAnaglyphFreeCameraProps = {} & FiberFreeCameraProps
export type FiberAnaglyphFreeCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
}
export type FiberStereoscopicFreeCameraProps = {} & FiberFreeCameraProps
export type FiberStereoscopicFreeCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  interaxialDistance: number
  isStereoscopicSideBySide: boolean
}
export type FiberVirtualJoysticksCameraProps = {} & FiberFreeCameraProps
export type FiberVirtualJoysticksCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberArcRotateCameraProps = {
  allowUpsideDown?: boolean
  alpha?: number
  angularSensibilityX?: number
  angularSensibilityY?: number
  beta?: number
  checkCollisions?: boolean
  collisionRadius?: BabylonjsCoreVector3
  'collisionRadius-x'?: number
  'collisionRadius-y'?: number
  'collisionRadius-z'?: number
  inertialAlphaOffset?: number
  inertialBetaOffset?: number
  inertialPanningX?: number
  inertialPanningY?: number
  inertialRadiusOffset?: number
  inputs?: BabylonjsCoreArcRotateCameraInputsManager
  keysDown?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysUp?: number[]
  lowerAlphaLimit?: number
  lowerBetaLimit?: number
  lowerRadiusLimit?: number
  mapPanning?: boolean
  onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void
  onMeshTargetChangedObservable?: any
  overrideCloneAlphaBetaRadius?: boolean
  panningAxis?: BabylonjsCoreVector3
  'panningAxis-x'?: number
  'panningAxis-y'?: number
  'panningAxis-z'?: number
  panningDistanceLimit?: number
  panningInertia?: number
  panningOriginTarget?: BabylonjsCoreVector3
  'panningOriginTarget-x'?: number
  'panningOriginTarget-y'?: number
  'panningOriginTarget-z'?: number
  panningSensibility?: number
  pinchDeltaPercentage?: number
  pinchPrecision?: number
  pinchToPanMaxDistance?: number
  position?: BabylonjsCoreVector3
  radius?: number
  restoreStateInterpolationFactor?: number
  setPosition?: any
  setTarget?: any
  target?: BabylonjsCoreVector3
  targetHost?: BabylonjsCoreTransformNode
  targetScreenOffset?: BabylonjsCoreVector2
  upperAlphaLimit?: number
  upperBetaLimit?: number
  upperRadiusLimit?: number
  upVector?: BabylonjsCoreVector3
  useAutoRotationBehavior?: boolean
  useBouncingBehavior?: boolean
  useFramingBehavior?: boolean
  useInputToRestoreState?: boolean
  useNaturalPinchZoom?: boolean
  wheelDeltaPercentage?: number
  wheelPrecision?: number
  zoomOnFactor?: number
  zoomToMouseLocation?: boolean
} & FiberTargetCameraProps
export type FiberArcRotateCameraPropsCtor = {
  name: string
  alpha: number
  beta: number
  radius: number
  target: BabylonjsCoreVector3
  setActiveOnSceneIfNoneActive?: boolean
}
export type FiberAnaglyphArcRotateCameraProps = {} & FiberArcRotateCameraProps
export type FiberAnaglyphArcRotateCameraPropsCtor = {
  name: string
  alpha: number
  beta: number
  radius: number
  target: BabylonjsCoreVector3
  interaxialDistance: number
}
export type FiberStereoscopicArcRotateCameraProps = {} & FiberArcRotateCameraProps
export type FiberStereoscopicArcRotateCameraPropsCtor = {
  name: string
  alpha: number
  beta: number
  radius: number
  target: BabylonjsCoreVector3
  interaxialDistance: number
  isStereoscopicSideBySide: boolean
}
export type FiberVRDeviceOrientationArcRotateCameraProps = {} & FiberArcRotateCameraProps
export type FiberVRDeviceOrientationArcRotateCameraPropsCtor = {
  name: string
  alpha: number
  beta: number
  radius: number
  target: BabylonjsCoreVector3
  compensateDistortion?: boolean
  vrCameraMetrics?: BabylonjsCoreVRCameraMetrics
}
export type FiberFlyCameraProps = {
  angularSensibility?: number
  applyGravity?: boolean
  bankedTurn?: boolean
  bankedTurnLimit?: number
  bankedTurnMultiplier?: number
  cameraDirection?: BabylonjsCoreVector3
  'cameraDirection-x'?: number
  'cameraDirection-y'?: number
  'cameraDirection-z'?: number
  checkCollisions?: boolean
  collisionMask?: number
  ellipsoid?: BabylonjsCoreVector3
  'ellipsoid-x'?: number
  'ellipsoid-y'?: number
  'ellipsoid-z'?: number
  ellipsoidOffset?: BabylonjsCoreVector3
  'ellipsoidOffset-x'?: number
  'ellipsoidOffset-y'?: number
  'ellipsoidOffset-z'?: number
  inputs?: BabylonjsCoreFlyCameraInputsManager
  keysBackward?: number[]
  keysDown?: number[]
  keysForward?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysUp?: number[]
  needMoveForGravity?: boolean
  onCollide?: (collidedMesh: BabylonjsCoreAbstractMesh) => void
  rollCorrect?: number
  rotationQuaternion?: BabylonjsCoreQuaternion
} & FiberTargetCameraProps
export type FiberFlyCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  setActiveOnSceneIfNoneActive?: boolean
}
export type FiberFollowCameraProps = {
  cameraAcceleration?: number
  heightOffset?: number
  inputs?: BabylonjsCoreFollowCameraInputsManager
  lockedTarget?: BabylonjsCoreAbstractMesh
  lowerHeightOffsetLimit?: number
  lowerRadiusLimit?: number
  lowerRotationOffsetLimit?: number
  maxCameraSpeed?: number
  radius?: number
  rotationOffset?: number
  upperHeightOffsetLimit?: number
  upperRadiusLimit?: number
  upperRotationOffsetLimit?: number
} & FiberTargetCameraProps
export type FiberFollowCameraPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  lockedTarget?: BabylonjsCoreAbstractMesh
}
export type FiberArcFollowCameraProps = {
  alpha?: number
  beta?: number
  radius?: number
  setMeshTarget?: any
} & FiberTargetCameraProps
export type FiberArcFollowCameraPropsCtor = {
  name: string
  alpha: number
  beta: number
  radius: number
  target: BabylonjsCoreAbstractMesh
}
export type FiberBoxPropsCtor = {
  name: string
  size?: number
  width?: number
  height?: number
  depth?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  wrap?: boolean
  topBaseAt?: number
  bottomBaseAt?: number
  updatable?: boolean
}
export type FiberTiledBoxPropsCtor = {
  name: string
  pattern?: number
  width?: number
  height?: number
  depth?: number
  tileSize?: number
  tileWidth?: number
  tileHeight?: number
  alignHorizontal?: number
  alignVertical?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  sideOrientation?: number
  updatable?: boolean
}
export type FiberSpherePropsCtor = {
  name: string
  segments?: number
  diameter?: number
  diameterX?: number
  diameterY?: number
  diameterZ?: number
  arc?: number
  slice?: number
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  updatable?: boolean
}
export type FiberDiscPropsCtor = {
  name: string
  radius?: number
  tessellation?: number
  arc?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberIcoSpherePropsCtor = {
  name: string
  radius?: number
  radiusX?: number
  radiusY?: number
  radiusZ?: number
  flat?: boolean
  subdivisions?: number
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  updatable?: boolean
}
export type FiberRibbonPropsCtor = {
  name: string
  pathArray?: BabylonjsCoreVector3[][]
  closeArray?: boolean
  closePath?: boolean
  offset?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  instance?: BabylonjsCoreMesh
  invertUV?: boolean
  uvs?: BabylonjsCoreVector2[]
  colors?: BabylonjsCoreColor4[]
}
export type FiberCylinderPropsCtor = {
  name: string
  height?: number
  diameterTop?: number
  diameterBottom?: number
  diameter?: number
  tessellation?: number
  subdivisions?: number
  arc?: number
  faceColors?: BabylonjsCoreColor4[]
  faceUV?: BabylonjsCoreVector4[]
  updatable?: boolean
  hasRings?: boolean
  enclose?: boolean
  cap?: number
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberTorusPropsCtor = {
  name: string
  diameter?: number
  thickness?: number
  tessellation?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberTorusKnotPropsCtor = {
  name: string
  radius?: number
  tube?: number
  radialSegments?: number
  tubularSegments?: number
  p?: number
  q?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberLineSystemPropsCtor = {
  name: string
  lines?: BabylonjsCoreVector3[][]
  updatable?: boolean
  instance?: BabylonjsCoreLinesMesh
  colors?: BabylonjsCoreColor4[][]
  useVertexAlpha?: boolean
  material?: BabylonjsCoreMaterial
}
export type FiberLinesPropsCtor = {
  name: string
  points?: BabylonjsCoreVector3[]
  updatable?: boolean
  instance?: BabylonjsCoreLinesMesh
  colors?: BabylonjsCoreColor4[]
  useVertexAlpha?: boolean
  material?: BabylonjsCoreMaterial
}
export type FiberDashedLinesPropsCtor = {
  name: string
  points?: BabylonjsCoreVector3[]
  dashSize?: number
  gapSize?: number
  dashNb?: number
  updatable?: boolean
  instance?: BabylonjsCoreLinesMesh
  useVertexAlpha?: boolean
  material?: BabylonjsCoreMaterial
}
export type FiberExtrudeShapePropsCtor = {
  name: string
  shape?: BabylonjsCoreVector3[]
  path?: BabylonjsCoreVector3[]
  scale?: number
  rotation?: number
  closeShape?: boolean
  closePath?: boolean
  cap?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  instance?: BabylonjsCoreMesh
  invertUV?: boolean
  firstNormal?: BabylonjsCoreVector3
  adjustFrame?: boolean
}
export type FiberExtrudeShapeCustomPropsCtor = {
  name: string
  shape?: BabylonjsCoreVector3[]
  path?: BabylonjsCoreVector3[]
  scaleFunction?: (i: number, distance: number) => number
  rotationFunction?: (i: number, distance: number) => number
  ribbonCloseArray?: boolean
  ribbonClosePath?: boolean
  closeShape?: boolean
  closePath?: boolean
  cap?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  instance?: BabylonjsCoreMesh
  invertUV?: boolean
  firstNormal?: BabylonjsCoreVector3
  adjustFrame?: boolean
}
export type FiberLathePropsCtor = {
  name: string
  shape?: BabylonjsCoreVector3[]
  radius?: number
  tessellation?: number
  clip?: number
  arc?: number
  closed?: boolean
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  cap?: number
  invertUV?: boolean
}
export type FiberTiledPlanePropsCtor = {
  name: string
  pattern?: number
  tileSize?: number
  tileWidth?: number
  tileHeight?: number
  size?: number
  width?: number
  height?: number
  alignHorizontal?: number
  alignVertical?: number
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  updatable?: boolean
}
export type FiberPlanePropsCtor = {
  name: string
  size?: number
  width?: number
  height?: number
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  updatable?: boolean
  sourcePlane?: BabylonjsCorePlane
}
export type FiberGroundPropsCtor = {
  name: string
  width?: number
  height?: number
  subdivisions?: number
  subdivisionsX?: number
  subdivisionsY?: number
  updatable?: boolean
}
export type FiberTiledGroundPropsCtor = {
  name: string
  xmin?: number
  zmin?: number
  xmax?: number
  zmax?: number
  subdivisions?: { w: number; h: number }
  precision?: { w: number; h: number }
  updatable?: boolean
}
export type FiberGroundFromHeightMapPropsCtor = {
  name: string
  url: string | { data: Uint8Array; width: number; height: number }
  width?: number
  height?: number
  subdivisions?: number
  minHeight?: number
  maxHeight?: number
  colorFilter?: BabylonjsCoreColor3
  alphaFilter?: number
  updatable?: boolean
  onReady?: (mesh: BabylonjsCoreGroundMesh, heightBuffer?: Float32Array) => void
  onError?: (message?: string, exception?: any) => void
  passHeightBufferInCallback?: boolean
}
export type FiberPolygonPropsCtor = {
  name: string
  shape?: BabylonjsCoreVector3[]
  holes?: BabylonjsCoreVector3[][]
  depth?: number
  smoothingThreshold?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  wrap?: boolean
  earcutInjection?: any
}
export type FiberExtrudePolygonPropsCtor = {
  name: string
  shape?: BabylonjsCoreVector3[]
  holes?: BabylonjsCoreVector3[][]
  depth?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  wrap?: boolean
  earcutInjection?: any
}
export type FiberTubePropsCtor = {
  name: string
  path?: BabylonjsCoreVector3[]
  radius?: number
  tessellation?: number
  radiusFunction?: (i: number, distance: number) => number
  cap?: number
  arc?: number
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
  instance?: BabylonjsCoreMesh
  invertUV?: boolean
}
export type FiberPolyhedronPropsCtor = {
  name: string
  type?: number
  size?: number
  sizeX?: number
  sizeY?: number
  sizeZ?: number
  custom?: any
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  flat?: boolean
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberGeodesicPropsCtor = {
  name: string
  m?: number
  n?: number
  size?: number
  sizeX?: number
  sizeY?: number
  sizeZ?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  flat?: boolean
  updatable?: boolean
  sideOrientation?: number
  frontUVs?: BabylonjsCoreVector4
  backUVs?: BabylonjsCoreVector4
}
export type FiberGoldbergPropsCtor = {
  name: string
  options: BabylonjsCoreGoldbergCreationOption
}
export type FiberDecalPropsCtor = {
  name: string
  sourceMesh: BabylonjsCoreAbstractMesh
  position?: BabylonjsCoreVector3
  normal?: BabylonjsCoreVector3
  size?: BabylonjsCoreVector3
  angle?: number
  captureUVS?: boolean
  cullBackFaces?: boolean
  localMode?: boolean
}
export type FiberCapsulePropsCtor = {
  name: string
  options?: BabylonjsCoreICreateCapsuleOptions
}
export type FiberTextPropsCtor = {
  name: string
  text: string
  fontData: BabylonjsCoreIFontData
  size?: number
  resolution?: number
  depth?: number
  sideOrientation?: number
  faceUV?: BabylonjsCoreVector4[]
  faceColors?: BabylonjsCoreColor4[]
  perLetterFaceUV?: (letterIndex: number) => BabylonjsCoreVector4[]
  perLetterFaceColors?: (letterIndex: number) => BabylonjsCoreColor4[]
  earcutInjection?: any
}
export type FiberMaterialProps = {
  allowShaderHotSwapping?: boolean
  alpha?: number
  alphaMode?: number
  animations?: BabylonjsCoreAnimation[]
  backFaceCulling?: boolean
  blockDirtyMechanism?: boolean
  checkReadyOnEveryCall?: boolean
  checkReadyOnlyOnce?: boolean
  clipPlane?: BabylonjsCorePlane
  clipPlane2?: BabylonjsCorePlane
  clipPlane3?: BabylonjsCorePlane
  clipPlane4?: BabylonjsCorePlane
  clipPlane5?: BabylonjsCorePlane
  clipPlane6?: BabylonjsCorePlane
  cullBackFaces?: boolean
  customShaderNameResolve?: (
    shaderName: string,
    uniforms: string[],
    uniformBuffers: string[],
    samplers: string[],
    defines: string[] | BabylonjsCoreMaterialDefines,
    attributes?: string[],
    options?: BabylonjsCoreICustomShaderNameResolveOptions
  ) => string
  depthFunction?: number
  disableColorWrite?: boolean
  disableDepthWrite?: boolean
  doNotSerialize?: boolean
  fillMode?: number
  fogEnabled?: boolean
  forceDepthWrite?: boolean
  getRenderTargetTextures?: () => BabylonjsCoreSmartArray<BabylonjsCoreRenderTargetTexture>
  id?: string
  inspectableCustomProperties?: BabylonjsCoreIInspectable[]
  meshMap?: { [id: string]: BabylonjsCoreAbstractMesh }
  metadata?: any
  name?: string
  needDepthPrePass?: boolean
  onBind?: (Mesh: BabylonjsCoreAbstractMesh) => void
  onCompiled?: (effect: BabylonjsCoreEffect) => void
  onDispose?: () => void
  onDisposeObservable?: any
  onError?: (effect: BabylonjsCoreEffect, errors: string) => void
  pointsCloud?: boolean
  pointSize?: number
  releaseVertexArrayObject?: any
  reservedDataStore?: any
  separateCullingPass?: boolean
  setPrePassRenderer?: any
  shadowDepthWrapper?: BabylonjsCoreShadowDepthWrapper
  sideOrientation?: number
  state?: string
  transparencyMode?: number
  uniqueId?: number
  useLogarithmicDepth?: boolean
  wireframe?: boolean
  zOffset?: number
  zOffsetUnits?: number
} & MaterialCustomProps
export type FiberMaterialPropsCtor = {
  name: string
  doNotAdd?: boolean
}
export type FiberPushMaterialProps = {} & FiberMaterialProps
export type FiberPushMaterialPropsCtor = {
  name: string
  storeEffectOnSubMeshes?: boolean
}
export type FiberNodeMaterialProps = {
  addOutputNode?: any
  attachedBlocks?: BabylonjsCoreNodeMaterialBlock[]
  BJSNODEMATERIALEDITOR?: any
  buildId?: number
  comment?: string
  editorData?: any
  forceAlphaBlending?: boolean
  ignoreAlpha?: boolean
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
  maxSimultaneousLights?: number
  mode?: BabylonjsCoreNodeMaterialModes
  onBuildErrorObservable?: any
  onBuildObservable?: any
  options?: BabylonjsCoreINodeMaterialOptions
  setPrePassRenderer?: any
  shaderLanguage?: BabylonjsCoreShaderLanguage
  snippetId?: string
} & FiberPushMaterialProps
export type FiberNodeMaterialPropsCtor = {
  name: string
  options?: Partial<BabylonjsCoreINodeMaterialOptions>
}
export type FiberShaderMaterialProps = {
  setArray2?: any
  setArray3?: any
  setArray4?: any
  setColor3?: any
  setColor3Array?: any
  setColor4?: any
  setColor4Array?: any
  setDefine?: any
  setExternalTexture?: any
  setFloat?: any
  setFloats?: any
  setInt?: any
  setMatrices?: any
  setMatrix?: any
  setMatrix2x2?: any
  setMatrix3x3?: any
  setQuaternion?: any
  setQuaternionArray?: any
  setStorageBuffer?: any
  setTexture?: any
  setTextureArray?: any
  setTextureSampler?: any
  setUInt?: any
  setUniformBuffer?: any
  setVector2?: any
  setVector3?: any
  setVector4?: any
  shaderPath?: string | BabylonjsCoreIShaderPath
  snippetId?: string
} & FiberPushMaterialProps
export type FiberShaderMaterialPropsCtor = {
  name: string
  shaderPath: string | BabylonjsCoreIShaderPath
  options?: Partial<BabylonjsCoreIShaderMaterialOptions>
  storeEffectOnSubMeshes?: boolean
}
export type FiberOcclusionMaterialProps = {} & FiberShaderMaterialProps
export type FiberOcclusionMaterialPropsCtor = {
  name: string
}
export type FiberGreasedLineSimpleMaterialProps = {
  color?: BabylonjsCoreColor3
  colorMode?: BabylonjsCoreGreasedLineMeshColorMode
  colors?: BabylonjsCoreColor3[]
  colorsDistributionType?: BabylonjsCoreGreasedLineMeshColorDistributionType
  colorsSampling?: number
  colorsTexture?: BabylonjsCoreRawTexture
  dashCount?: number
  dashOffset?: number
  dashRatio?: number
  resolution?: BabylonjsCoreVector2
  setColor?: any
  setColors?: any
  sizeAttenuation?: boolean
  useColors?: boolean
  useDash?: boolean
  visibility?: number
  width?: number
} & FiberShaderMaterialProps
export type FiberGreasedLineSimpleMaterialPropsCtor = {
  name: string
  options: BabylonjsCoreGreasedLineMaterialOptions
}
export type FiberHandleMaterialProps = {
  animationLength?: number
  baseColor?: BabylonjsCoreColor3
  baseScale?: number
  drag?: boolean
  dragScale?: number
  hover?: boolean
  hoverColor?: BabylonjsCoreColor3
  hoverScale?: number
} & FiberShaderMaterialProps
export type FiberHandleMaterialPropsCtor = {
  name: string
}
export type FiberPBRBaseMaterialProps = {
  debugFactor?: number
  debugLimit?: number
  debugMode?: number
  realTimeFiltering?: boolean
  realTimeFilteringQuality?: number
} & FiberPushMaterialProps
export type FiberPBRBaseMaterialPropsCtor = {
  name: string
  forceGLSL?: boolean
}
export type FiberPBRBaseSimpleMaterialProps = {
  alphaCutOff?: number
  disableLighting?: boolean
  doubleSided?: boolean
  emissiveColor?: BabylonjsCoreColor3
  emissiveTexture?: BabylonjsCoreBaseTexture
  environmentTexture?: BabylonjsCoreBaseTexture
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  lightmapTexture?: BabylonjsCoreBaseTexture
  maxSimultaneousLights?: number
  normalTexture?: BabylonjsCoreBaseTexture
  occlusionStrength?: number
  occlusionTexture?: BabylonjsCoreBaseTexture
  useLightmapAsShadowmap?: boolean
} & FiberPBRBaseMaterialProps
export type FiberPBRBaseSimpleMaterialPropsCtor = {
  name: string
}
export type FiberPBRMetallicRoughnessMaterialProps = {
  baseColor?: BabylonjsCoreColor3
  baseTexture?: BabylonjsCoreBaseTexture
  metallic?: number
  metallicRoughnessTexture?: BabylonjsCoreBaseTexture
  roughness?: number
} & FiberPBRBaseSimpleMaterialProps
export type FiberPBRMetallicRoughnessMaterialPropsCtor = {
  name: string
}
export type FiberPBRSpecularGlossinessMaterialProps = {
  diffuseColor?: BabylonjsCoreColor3
  diffuseTexture?: BabylonjsCoreBaseTexture
  glossiness?: number
  specularColor?: BabylonjsCoreColor3
  specularGlossinessTexture?: BabylonjsCoreBaseTexture
} & FiberPBRBaseSimpleMaterialProps
export type FiberPBRSpecularGlossinessMaterialPropsCtor = {
  name: string
}
export type FiberPBRMaterialProps = {
  albedoColor?: BabylonjsCoreColor3
  albedoTexture?: BabylonjsCoreBaseTexture
  alphaCutOff?: number
  ambientColor?: BabylonjsCoreColor3
  ambientTexture?: BabylonjsCoreBaseTexture
  ambientTextureImpactOnAnalyticalLights?: number
  ambientTextureStrength?: number
  applyDecalMapAfterDetailMap?: boolean
  bumpTexture?: BabylonjsCoreBaseTexture
  cameraColorCurves?: BabylonjsCoreColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BabylonjsCoreBaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  directIntensity?: number
  disableBumpMap?: boolean
  disableLighting?: boolean
  emissiveColor?: BabylonjsCoreColor3
  emissiveIntensity?: number
  emissiveTexture?: BabylonjsCoreBaseTexture
  enableSpecularAntiAliasing?: boolean
  environmentBRDFTexture?: BabylonjsCoreBaseTexture
  environmentIntensity?: number
  forceAlphaTest?: boolean
  forceIrradianceInFragment?: boolean
  forceNormalForward?: boolean
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
  indexOfRefraction?: number
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  invertRefractionY?: boolean
  lightmapTexture?: BabylonjsCoreBaseTexture
  linkRefractionWithTransparency?: boolean
  maxSimultaneousLights?: number
  metallic?: number
  metallicF0Factor?: number
  metallicReflectanceColor?: BabylonjsCoreColor3
  metallicReflectanceTexture?: BabylonjsCoreBaseTexture
  metallicTexture?: BabylonjsCoreBaseTexture
  microSurface?: number
  microSurfaceTexture?: BabylonjsCoreBaseTexture
  opacityTexture?: BabylonjsCoreBaseTexture
  parallaxScaleBias?: number
  reflectanceTexture?: BabylonjsCoreBaseTexture
  reflectionColor?: BabylonjsCoreColor3
  reflectionTexture?: BabylonjsCoreBaseTexture
  reflectivityColor?: BabylonjsCoreColor3
  reflectivityTexture?: BabylonjsCoreBaseTexture
  refractionTexture?: BabylonjsCoreBaseTexture
  roughness?: number
  specularIntensity?: number
  twoSidedLighting?: boolean
  unlit?: boolean
  useAlphaFresnel?: boolean
  useAlphaFromAlbedoTexture?: boolean
  useAmbientInGrayScale?: boolean
  useAmbientOcclusionFromMetallicTextureRed?: boolean
  useAutoMicroSurfaceFromReflectivityMap?: boolean
  useGLTFLightFalloff?: boolean
  useHorizonOcclusion?: boolean
  useLightmapAsShadowmap?: boolean
  useLinearAlphaFresnel?: boolean
  useMetallnessFromMetallicTextureBlue?: boolean
  useMicroSurfaceFromReflectivityMapAlpha?: boolean
  useObjectSpaceNormalMap?: boolean
  useOnlyMetallicFromMetallicReflectanceTexture?: boolean
  useParallax?: boolean
  useParallaxOcclusion?: boolean
  usePhysicalLightFalloff?: boolean
  useRadianceOcclusion?: boolean
  useRadianceOverAlpha?: boolean
  useRoughnessFromMetallicTextureAlpha?: boolean
  useRoughnessFromMetallicTextureGreen?: boolean
  useSpecularOverAlpha?: boolean
} & FiberPBRBaseMaterialProps
export type FiberPBRMaterialPropsCtor = {
  name: string
  forceGLSL?: boolean
}
export type FiberStandardMaterialProps = {
  alphaCutOff?: number
  ambientColor?: BabylonjsCoreColor3
  ambientTexture?: BabylonjsCoreBaseTexture
  AmbientTextureEnabled?: boolean
  applyDecalMapAfterDetailMap?: boolean
  bumpTexture?: BabylonjsCoreBaseTexture
  BumpTextureEnabled?: boolean
  cameraColorCurves?: BabylonjsCoreColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BabylonjsCoreBaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  ColorGradingTextureEnabled?: boolean
  DetailTextureEnabled?: boolean
  diffuseColor?: BabylonjsCoreColor3
  diffuseFresnelParameters?: BabylonjsCoreFresnelParameters
  diffuseTexture?: BabylonjsCoreBaseTexture
  DiffuseTextureEnabled?: boolean
  disableLighting?: boolean
  emissiveColor?: BabylonjsCoreColor3
  emissiveFresnelParameters?: BabylonjsCoreFresnelParameters
  emissiveTexture?: BabylonjsCoreBaseTexture
  EmissiveTextureEnabled?: boolean
  FresnelEnabled?: boolean
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
  indexOfRefraction?: number
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  invertRefractionY?: boolean
  lightmapTexture?: BabylonjsCoreBaseTexture
  LightmapTextureEnabled?: boolean
  linkEmissiveWithDiffuse?: boolean
  maxSimultaneousLights?: number
  opacityFresnelParameters?: BabylonjsCoreFresnelParameters
  opacityTexture?: BabylonjsCoreBaseTexture
  OpacityTextureEnabled?: boolean
  parallaxScaleBias?: number
  reflectionFresnelParameters?: BabylonjsCoreFresnelParameters
  reflectionTexture?: BabylonjsCoreBaseTexture
  ReflectionTextureEnabled?: boolean
  refractionFresnelParameters?: BabylonjsCoreFresnelParameters
  refractionTexture?: BabylonjsCoreBaseTexture
  RefractionTextureEnabled?: boolean
  roughness?: number
  specularColor?: BabylonjsCoreColor3
  specularPower?: number
  specularTexture?: BabylonjsCoreBaseTexture
  SpecularTextureEnabled?: boolean
  twoSidedLighting?: boolean
  useAlphaFromDiffuseTexture?: boolean
  useEmissiveAsIllumination?: boolean
  useGlossinessFromSpecularMapAlpha?: boolean
  useLightmapAsShadowmap?: boolean
  useObjectSpaceNormalMap?: boolean
  useParallax?: boolean
  useParallaxOcclusion?: boolean
  useReflectionFresnelFromSpecular?: boolean
  useReflectionOverAlpha?: boolean
  useSpecularOverAlpha?: boolean
} & FiberPushMaterialProps
export type FiberStandardMaterialPropsCtor = {
  name: string
  forceGLSL?: boolean
}
export type FiberBackgroundMaterialProps = {
  _perceptualColor?: BabylonjsCoreColor3
  cameraColorCurves?: BabylonjsCoreColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BabylonjsCoreBaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  diffuseTexture?: BabylonjsCoreBaseTexture
  enableGroundProjection?: boolean
  enableNoise?: boolean
  fovMultiplier?: number
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
  maxSimultaneousLights?: number
  opacityFresnel?: boolean
  primaryColor?: BabylonjsCoreColor3
  primaryColorHighlightLevel?: number
  primaryColorShadowLevel?: number
  projectedGroundHeight?: number
  projectedGroundRadius?: number
  reflectionAmount?: number
  reflectionBlur?: number
  reflectionFalloffDistance?: number
  reflectionFresnel?: boolean
  reflectionReflectance0?: number
  reflectionReflectance90?: number
  reflectionStandardFresnelWeight?: number
  reflectionTexture?: BabylonjsCoreBaseTexture
  sceneCenter?: BabylonjsCoreVector3
  'sceneCenter-x'?: number
  'sceneCenter-y'?: number
  'sceneCenter-z'?: number
  shadowLevel?: number
  shadowLights?: BabylonjsCoreIShadowLight[]
  shadowOnly?: boolean
  switchToBGR?: boolean
  useEquirectangularFOV?: boolean
  useRGBColor?: boolean
} & FiberPushMaterialProps
export type FiberBackgroundMaterialPropsCtor = {
  name: string
  forceGLSL?: boolean
}
export type FiberGaussianSplattingMaterialProps = {} & FiberPushMaterialProps
export type FiberGaussianSplattingMaterialPropsCtor = {
  name: string
}
export type FiberFluentMaterialProps = {
  albedoColor?: BabylonjsCoreColor3
  albedoTexture?: BabylonjsCoreBaseTexture
  borderMinValue?: number
  borderWidth?: number
  edgeSmoothingValue?: number
  hoverColor?: BabylonjsCoreColor4
  hoverPosition?: BabylonjsCoreVector3
  'hoverPosition-x'?: number
  'hoverPosition-y'?: number
  'hoverPosition-z'?: number
  hoverRadius?: number
  innerGlowColor?: BabylonjsCoreColor3
  innerGlowColorIntensity?: number
  renderBorders?: boolean
  renderHoverLight?: boolean
} & FiberPushMaterialProps
export type FiberFluentMaterialPropsCtor = {
  name: string
}
export type FiberFluentButtonMaterialProps = {
  activeFaceDir?: BabylonjsCoreVector3
  'activeFaceDir-x'?: number
  'activeFaceDir-y'?: number
  'activeFaceDir-z'?: number
  activeFaceUp?: BabylonjsCoreVector3
  'activeFaceUp-x'?: number
  'activeFaceUp-y'?: number
  'activeFaceUp-z'?: number
  blobFadeLength?: number
  blobFarDistance?: number
  blobFarSize?: number
  blobIntensity?: number
  blobNearDistance?: number
  edgeColor?: BabylonjsCoreColor4
  edgeWidth?: number
  enableFade?: boolean
  fadeWidth?: number
  globalLeftIndexTipPosition?: BabylonjsCoreVector3
  'globalLeftIndexTipPosition-x'?: number
  'globalLeftIndexTipPosition-y'?: number
  'globalLeftIndexTipPosition-z'?: number
  globalRightIndexTipPosition?: BabylonjsCoreVector3
  'globalRightIndexTipPosition-x'?: number
  'globalRightIndexTipPosition-y'?: number
  'globalRightIndexTipPosition-z'?: number
  leftBlobEnable?: boolean
  leftBlobFade?: number
  leftBlobInnerFade?: number
  leftBlobNearSize?: number
  leftBlobPulse?: number
  proximityAnisotropy?: number
  proximityFarDistance?: number
  proximityMaxIntensity?: number
  proximityNearRadius?: number
  rightBlobEnable?: boolean
  rightBlobFade?: number
  rightBlobInnerFade?: number
  rightBlobNearSize?: number
  rightBlobPulse?: number
  selected?: number
  selectedDistance?: number
  selectedFadeLength?: number
  selectionFade?: number
  selectionFadeSize?: number
  selectionFuzz?: number
  showFrame?: boolean
  smoothActiveFace?: boolean
  useBlobTexture?: boolean
} & FiberPushMaterialProps
export type FiberFluentButtonMaterialPropsCtor = {
  name: string
}
export type FiberFluentBackplateMaterialProps = {
  absoluteSizes?: boolean
  baseColor?: BabylonjsCoreColor4
  blobFade?: number
  blobFade2?: number
  blobFadeLength?: number
  blobFarDistance?: number
  blobFarSize?: number
  blobIntensity?: number
  blobNearDistance?: number
  blobNearSize?: number
  blobNearSize2?: number
  blobPulse?: number
  blobPulse2?: number
  fadeOut?: number
  globalLeftIndexTipPosition?: BabylonjsCoreVector3
  'globalLeftIndexTipPosition-x'?: number
  'globalLeftIndexTipPosition-y'?: number
  'globalLeftIndexTipPosition-z'?: number
  globalRightIndexTipPosition?: BabylonjsCoreVector3
  'globalRightIndexTipPosition-x'?: number
  'globalRightIndexTipPosition-y'?: number
  'globalRightIndexTipPosition-z'?: number
  highlightColor?: BabylonjsCoreColor4
  highlightWidth?: number
  iridescenceEdgeIntensity?: number
  iridescenceIntensity?: number
  lineColor?: BabylonjsCoreColor4
  lineWidth?: number
  radius?: number
} & FiberPushMaterialProps
export type FiberFluentBackplateMaterialPropsCtor = {
  name: string
}
export type FiberMRDLSliderBarMaterialProps = {
  albedo?: BabylonjsCoreColor4
  bevelBack?: number
  bevelBackStretch?: number
  bevelFront?: number
  bevelFrontStretch?: number
  blobFade?: number
  blobFade2?: number
  blobFadeLength?: number
  blobFarDistance?: number
  blobFarSize?: number
  blobIntensity?: number
  blobNearDistance?: number
  blobNearSize?: number
  blobNearSize2?: number
  blobPosition?: BabylonjsCoreVector3
  'blobPosition-x'?: number
  'blobPosition-y'?: number
  'blobPosition-z'?: number
  blobPosition2?: BabylonjsCoreVector3
  'blobPosition2-x'?: number
  'blobPosition2-y'?: number
  'blobPosition2-z'?: number
  blobPulse?: number
  blobPulse2?: number
  blobTexture?: BabylonjsCoreTexture
  bulgeEnabled?: boolean
  bulgeHeight?: number
  bulgeRadius?: number
  clipFade?: number
  decalFrontOnly?: boolean
  decalScaleXY?: BabylonjsCoreVector2
  edgeReflect?: number
  frontReflect?: number
  fuzz?: number
  globalLeftIndexMiddlePosition?: BabylonjsCoreVector4
  globalLeftIndexTipPosition?: BabylonjsCoreVector4
  globalLeftIndexTipProximity?: number
  globalLeftThumbTipPosition?: BabylonjsCoreVector4
  globalRightIndexMiddlePosition?: BabylonjsCoreVector4
  globalRightIndexTipProximity?: number
  globalRightThumbTipPosition?: BabylonjsCoreVector4
  globaRightIndexTipPosition?: BabylonjsCoreVector4
  groundColor?: BabylonjsCoreColor4
  horizonColor?: BabylonjsCoreColor4
  horizonPower?: number
  hueShift?: number
  indirectDiffuse?: number
  iridescenceIntensity?: number
  leftGradientColor?: BabylonjsCoreColor4
  leftIndexMiddlePosition?: BabylonjsCoreVector3
  'leftIndexMiddlePosition-x'?: number
  'leftIndexMiddlePosition-y'?: number
  'leftIndexMiddlePosition-z'?: number
  leftIndexPosition?: BabylonjsCoreVector3
  'leftIndexPosition-x'?: number
  'leftIndexPosition-y'?: number
  'leftIndexPosition-z'?: number
  minFuzz?: number
  power?: number
  radius?: number
  radiusBottomLeft?: number
  radiusBottomRight?: number
  radiusTopLeft?: number
  radiusTopRight?: number
  reflection?: number
  rightGradientColor?: BabylonjsCoreColor4
  rightIndexMiddlePosition?: BabylonjsCoreVector3
  'rightIndexMiddlePosition-x'?: number
  'rightIndexMiddlePosition-y'?: number
  'rightIndexMiddlePosition-z'?: number
  rightIndexPosition?: BabylonjsCoreVector3
  'rightIndexPosition-x'?: number
  'rightIndexPosition-y'?: number
  'rightIndexPosition-z'?: number
  rimHueShift?: number
  rimIntensity?: number
  rimSaturationShift?: number
  rimValueShift?: number
  saturationShift?: number
  sharpness?: number
  shininess?: number
  skyColor?: BabylonjsCoreColor4
  specular?: number
  subsurface?: number
  sunIntensity?: number
  sunPhi?: number
  sunTheta?: number
  useGlobalLeftIndex?: number
  useGlobalRightIndex?: number
  valueShift?: number
  width?: number
} & FiberPushMaterialProps
export type FiberMRDLSliderBarMaterialPropsCtor = {
  name: string
}
export type FiberMRDLSliderThumbMaterialProps = {
  albedo?: BabylonjsCoreColor4
  bevelBack?: number
  bevelBackStretch?: number
  bevelFront?: number
  bevelFrontStretch?: number
  blobFade?: number
  blobFade2?: number
  blobFadeLength?: number
  blobFarDistance?: number
  blobFarSize?: number
  blobIntensity?: number
  blobNearDistance?: number
  blobNearSize?: number
  blobNearSize2?: number
  blobPosition?: BabylonjsCoreVector3
  'blobPosition-x'?: number
  'blobPosition-y'?: number
  'blobPosition-z'?: number
  blobPosition2?: BabylonjsCoreVector3
  'blobPosition2-x'?: number
  'blobPosition2-y'?: number
  'blobPosition2-z'?: number
  blobPulse?: number
  blobPulse2?: number
  blobTexture?: BabylonjsCoreTexture
  bulgeEnabled?: boolean
  bulgeHeight?: number
  bulgeRadius?: number
  clipFade?: number
  decalFrontOnly?: boolean
  decalScaleXY?: BabylonjsCoreVector2
  edgeReflect?: number
  frontReflect?: number
  fuzz?: number
  globalLeftIndexMiddlePosition?: BabylonjsCoreVector4
  globalLeftIndexTipPosition?: BabylonjsCoreVector4
  globalLeftIndexTipProximity?: number
  globalLeftThumbTipPosition?: BabylonjsCoreVector4
  globalRightIndexMiddlePosition?: BabylonjsCoreVector4
  globalRightIndexTipProximity?: number
  globalRightThumbTipPosition?: BabylonjsCoreVector4
  globaRightIndexTipPosition?: BabylonjsCoreVector4
  groundColor?: BabylonjsCoreColor4
  horizonColor?: BabylonjsCoreColor4
  horizonPower?: number
  hueShift?: number
  indirectDiffuse?: number
  iridescenceIntensity?: number
  leftGradientColor?: BabylonjsCoreColor4
  leftIndexMiddlePosition?: BabylonjsCoreVector3
  'leftIndexMiddlePosition-x'?: number
  'leftIndexMiddlePosition-y'?: number
  'leftIndexMiddlePosition-z'?: number
  leftIndexPosition?: BabylonjsCoreVector3
  'leftIndexPosition-x'?: number
  'leftIndexPosition-y'?: number
  'leftIndexPosition-z'?: number
  minFuzz?: number
  power?: number
  radius?: number
  radiusBottomLeft?: number
  radiusBottomRight?: number
  radiusTopLeft?: number
  radiusTopRight?: number
  reflection?: number
  rightGradientColor?: BabylonjsCoreColor4
  rightIndexMiddlePosition?: BabylonjsCoreVector3
  'rightIndexMiddlePosition-x'?: number
  'rightIndexMiddlePosition-y'?: number
  'rightIndexMiddlePosition-z'?: number
  rightIndexPosition?: BabylonjsCoreVector3
  'rightIndexPosition-x'?: number
  'rightIndexPosition-y'?: number
  'rightIndexPosition-z'?: number
  rimHueShift?: number
  rimIntensity?: number
  rimSaturationShift?: number
  rimValueShift?: number
  saturationShift?: number
  sharpness?: number
  shininess?: number
  skyColor?: BabylonjsCoreColor4
  specular?: number
  subsurface?: number
  sunIntensity?: number
  sunPhi?: number
  sunTheta?: number
  useGlobalLeftIndex?: number
  useGlobalRightIndex?: number
  valueShift?: number
  width?: number
} & FiberPushMaterialProps
export type FiberMRDLSliderThumbMaterialPropsCtor = {
  name: string
}
export type FiberMRDLBackplateMaterialProps = {
  absoluteSizes?: boolean
  baseColor?: BabylonjsCoreColor4
  bottomLeftGradientColor?: BabylonjsCoreColor4
  bottomRightGradientColor?: BabylonjsCoreColor4
  edgeLineGradientBlend?: number
  edgePower?: number
  edgeWidth?: number
  fadeOut?: number
  gradientColor?: BabylonjsCoreColor4
  highlightColor?: BabylonjsCoreColor4
  highlightWidth?: number
  iridescenceEdgeIntensity?: number
  iridescenceIntensity?: number
  iridescenceTint?: BabylonjsCoreColor4
  lineColor?: BabylonjsCoreColor4
  lineWidth?: number
  radius?: number
  radiusBottomLeft?: number
  radiusBottomRight?: number
  radiusTopLeft?: number
  radiusTopRight?: number
  topLeftGradientColor?: BabylonjsCoreColor4
  topRightGradientColor?: BabylonjsCoreColor4
} & FiberPushMaterialProps
export type FiberMRDLBackplateMaterialPropsCtor = {
  name: string
}
export type FiberMRDLBackglowMaterialProps = {
  absoluteSizes?: boolean
  bevelRadius?: number
  bias?: number
  blendExponent?: number
  color?: BabylonjsCoreColor4
  falloff?: number
  innerColor?: BabylonjsCoreColor4
  intensityFadeInExponent?: number
  lineWidth?: number
  maxIntensity?: number
  motion?: number
  outerFuzzEnd?: number
  outerFuzzStart?: number
  tuningMotion?: number
} & FiberPushMaterialProps
export type FiberMRDLBackglowMaterialPropsCtor = {
  name: string
}
export type FiberMRDLFrontplateMaterialProps = {
  blobEnable?: boolean
  blobEnable2?: boolean
  blobFade?: number
  blobFade2?: number
  blobFadeLength?: number
  blobFarDistance?: number
  blobFarSize?: number
  blobInnerFade?: number
  blobInnerFade2?: number
  blobIntensity?: number
  blobNearDistance?: number
  blobNearSize?: number
  blobNearSize2?: number
  blobPosition?: BabylonjsCoreVector3
  'blobPosition-x'?: number
  'blobPosition-y'?: number
  'blobPosition-z'?: number
  blobPosition2?: BabylonjsCoreVector3
  'blobPosition2-x'?: number
  'blobPosition2-y'?: number
  'blobPosition2-z'?: number
  blobPulse?: number
  blobPulse2?: number
  blobPulseMaxSize?: number
  edgeColor?: BabylonjsCoreColor4
  fadeOut?: number
  gazeFocus?: number
  gazeIntensity?: number
  lineWidth?: number
  proximityAnisotropy?: number
  proximityFarDistance?: number
  proximityMaxIntensity?: number
  proximityNearRadius?: number
  radius?: number
  relativeToHeight?: boolean
  selected?: number
  selectedDistance?: number
  selectedFadeLength?: number
  selectionFade?: number
  selectionFadeSize?: number
  selectionFuzz?: number
  useGlobalLeftIndex?: boolean
  useGlobalRightIndex?: boolean
} & FiberPushMaterialProps
export type FiberMRDLFrontplateMaterialPropsCtor = {
  name: string
}
export type FiberMRDLInnerquadMaterialProps = {
  color?: BabylonjsCoreColor4
  fixedRadius?: boolean
  glowFalloff?: number
  glowFraction?: number
  glowMax?: number
  radius?: number
} & FiberPushMaterialProps
export type FiberMRDLInnerquadMaterialPropsCtor = {
  name: string
}
export type FiberMultiMaterialProps = {
  subMaterials?: BabylonjsCoreMaterial[]
} & FiberMaterialProps
export type FiberMultiMaterialPropsCtor = {
  name: string
}
export type FiberLightProps = {
  diffuse?: BabylonjsCoreColor3
  excludedMeshes?: BabylonjsCoreAbstractMesh[]
  excludeWithLayerMask?: number
  falloffType?: number
  includedOnlyMeshes?: BabylonjsCoreAbstractMesh[]
  includeOnlyWithLayerMask?: number
  intensity?: number
  intensityMode?: number
  lightmapMode?: number
  radius?: number
  range?: number
  renderPriority?: number
  setEnabled?: any
  shadowEnabled?: boolean
  specular?: BabylonjsCoreColor3
} & FiberNodeProps
export type FiberLightPropsCtor = {
  name: string
}
export type FiberShadowLightProps = {
  customProjectionMatrixBuilder?: (
    viewMatrix: BabylonjsCoreMatrix,
    renderList: BabylonjsCoreAbstractMesh[],
    result: BabylonjsCoreMatrix
  ) => void
  direction?: BabylonjsCoreVector3
  position?: BabylonjsCoreVector3
  setDirectionToTarget?: any
  setShadowProjectionMatrix?: any
  shadowMaxZ?: number
  shadowMinZ?: number
  transformedDirection?: BabylonjsCoreVector3
  'transformedDirection-x'?: number
  'transformedDirection-y'?: number
  'transformedDirection-z'?: number
  transformedPosition?: BabylonjsCoreVector3
  'transformedPosition-x'?: number
  'transformedPosition-y'?: number
  'transformedPosition-z'?: number
} & FiberLightProps
export type FiberShadowLightPropsCtor = {}
export type FiberDirectionalLightProps = {
  autoCalcShadowZBounds?: boolean
  autoUpdateExtends?: boolean
  orthoBottom?: number
  orthoLeft?: number
  orthoRight?: number
  orthoTop?: number
  shadowFrustumSize?: number
  shadowOrthoScale?: number
} & FiberShadowLightProps
export type FiberDirectionalLightPropsCtor = {
  name: string
  direction: BabylonjsCoreVector3
}
export type FiberPointLightProps = {
  direction?: BabylonjsCoreVector3
  shadowAngle?: number
} & FiberShadowLightProps
export type FiberPointLightPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
}
export type FiberSpotLightProps = {
  angle?: number
  exponent?: number
  innerAngle?: number
  projectionTexture?: BabylonjsCoreBaseTexture
  projectionTextureLightFar?: number
  projectionTextureLightNear?: number
  projectionTextureProjectionLightMatrix?: BabylonjsCoreMatrix
  projectionTextureUpDirection?: BabylonjsCoreVector3
  shadowAngleScale?: number
} & FiberShadowLightProps
export type FiberSpotLightPropsCtor = {
  name: string
  position: BabylonjsCoreVector3
  direction: BabylonjsCoreVector3
  angle: number
  exponent: number
}
export type FiberHemisphericLightProps = {
  direction?: BabylonjsCoreVector3
  'direction-x'?: number
  'direction-y'?: number
  'direction-z'?: number
  groundColor?: BabylonjsCoreColor3
  setDirectionToTarget?: any
} & FiberLightProps
export type FiberHemisphericLightPropsCtor = {
  name: string
  direction: BabylonjsCoreVector3
}
export type FiberControlProps = {
  accessibilityTag?: BabylonjsCoreIAccessibilityTag
  alpha?: number
  animations?: BabylonjsCoreAnimation[]
  clipChildren?: boolean
  clipContent?: boolean
  color?: string
  descendantsOnlyPadding?: boolean
  disabledColor?: string
  disabledColorItem?: string
  fixedRatio?: number
  fixedRatioMasterIsWidth?: boolean
  focusedColor?: string
  fontFamily?: string
  fontOffset?: { ascent: number; height: number; descent: number }
  fontSize?: string | number
  fontSizeInPixels?: number
  fontStyle?: string
  fontWeight?: string
  gradient?: BabylonjsGuiBaseGradient
  height?: string | number
  heightInPixels?: number
  highlightColor?: string
  highlightLineWidth?: number
  horizontalAlignment?: number
  hoverCursor?: string
  isEnabled?: boolean
  isFocusInvisible?: boolean
  isHighlighted?: boolean
  isHitTestVisible?: boolean
  isPointerBlocker?: boolean
  isReadOnly?: boolean
  isSerializable?: boolean
  isVisible?: boolean
  left?: string | number
  leftInPixels?: number
  linkOffsetX?: string | number
  linkOffsetXInPixels?: number
  linkOffsetY?: string | number
  linkOffsetYInPixels?: number
  metadata?: any
  name?: string
  notRenderable?: boolean
  onAccessibilityTagChangedObservable?: any
  onAfterDrawObservable?: any
  onBeforeDrawObservable?: any
  onBlurObservable?: any
  onDirtyObservable?: any
  onDisposeObservable?: any
  onEnabledStateChangedObservable?: any
  onEnterPressedObservable?: any
  onFocusObservable?: any
  onIsVisibleChangedObservable?: any
  onKeyboardEventProcessedObservable?: any
  onPointerClickObservable?: any
  onPointerDownObservable?: any
  onPointerEnterObservable?: any
  onPointerMoveObservable?: any
  onPointerOutObservable?: any
  onPointerUpObservable?: any
  onWheelObservable?: any
  overlapDeltaMultiplier?: number
  overlapGroup?: number
  paddingBottom?: string | number
  paddingBottomInPixels?: number
  paddingLeft?: string | number
  paddingLeftInPixels?: number
  paddingRight?: string | number
  paddingRightInPixels?: number
  paddingTop?: string | number
  paddingTopInPixels?: number
  parent?: BabylonjsGuiContainer
  rotation?: number
  scaleX?: number
  scaleY?: number
  setPadding?: any
  setPaddingInPixels?: any
  shadowBlur?: number
  shadowColor?: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  style?: BabylonjsGuiStyle
  tabIndex?: number
  top?: string | number
  topInPixels?: number
  transformCenterX?: number
  transformCenterY?: number
  uniqueId?: number
  useBitmapCache?: boolean
  verticalAlignment?: number
  width?: string | number
  widthInPixels?: number
  zIndex?: number
} & Control2DCustomProps
export type FiberControlPropsCtor = {
  name?: string
}
export type FiberContainerProps = {
  adaptHeightToChildren?: boolean
  adaptWidthToChildren?: boolean
  addControl?: any
  background?: string
  backgroundGradient?: BabylonjsGuiBaseGradient
  delegatePickingToChildren?: boolean
  isReadOnly?: boolean
  logLayoutCycleErrors?: boolean
  maxLayoutCycle?: number
  name?: string
  onControlAddedObservable?: any
  onControlRemovedObservable?: any
  renderToIntermediateTexture?: boolean
} & FiberControlProps
export type FiberContainerPropsCtor = {
  name?: string
}
export type FiberRectangleProps = {
  cornerRadius?: number
  cornerRadiusW?: number
  cornerRadiusX?: number
  cornerRadiusY?: number
  cornerRadiusZ?: number
  name?: string
  thickness?: number
} & FiberContainerProps
export type FiberRectanglePropsCtor = {
  name?: string
}
export type FiberButtonProps = {
  name?: string
  pointerDownAnimation?: () => void
  pointerEnterAnimation?: () => void
  pointerOutAnimation?: () => void
  pointerUpAnimation?: () => void
} & FiberRectangleProps
export type FiberButtonPropsCtor = {
  name?: string
}
export type FiberFocusableButtonProps = {
  name?: string
} & FiberButtonProps
export type FiberFocusableButtonPropsCtor = {
  name?: string
}
export type FiberSelectionPanelProps = {
  addGroup?: any
  addToGroupCheckbox?: any
  addToGroupRadio?: any
  addToGroupSlider?: any
  barColor?: string
  barHeight?: string
  buttonBackground?: string
  buttonColor?: string
  groups?: BabylonjsGuiSelectorGroup[]
  headerColor?: string
  labelColor?: string
  name?: string
  setHeaderName?: any
  spacerHeight?: string
} & FiberRectangleProps
export type FiberSelectionPanelPropsCtor = {
  name: string
  groups?: BabylonjsGuiSelectorGroup[]
}
export type FiberScrollViewerProps = {
  addControl?: any
  barBackground?: string
  barColor?: string
  barImage?: BabylonjsGuiImage
  barImageHeight?: number
  barSize?: number
  forceHorizontalBar?: boolean
  forceVerticalBar?: boolean
  freezeControls?: boolean
  horizontalBarImage?: BabylonjsGuiImage
  horizontalBarImageHeight?: number
  horizontalThumbImage?: BabylonjsGuiImage
  scrollBackground?: string
  setBucketSizes?: any
  thumbHeight?: number
  thumbImage?: BabylonjsGuiImage
  thumbLength?: number
  verticalBarImage?: BabylonjsGuiImage
  verticalBarImageHeight?: number
  verticalThumbImage?: BabylonjsGuiImage
  wheelPrecision?: number
} & FiberRectangleProps
export type FiberScrollViewerPropsCtor = {
  name?: string
  isImageBased?: boolean
}
export type FiberToggleButtonProps = {
  delegatePickingToChildren?: boolean
  group?: string
  isActive?: boolean
  name?: string
  onIsActiveChangedObservable?: any
  pointerDownActiveAnimation?: () => void
  pointerDownInactiveAnimation?: () => void
  pointerEnterActiveAnimation?: () => void
  pointerEnterInactiveAnimation?: () => void
  pointerOutActiveAnimation?: () => void
  pointerOutInactiveAnimation?: () => void
  pointerUpActiveAnimation?: () => void
  pointerUpInactiveAnimation?: () => void
  toActiveAnimation?: () => void
  toInactiveAnimation?: () => void
} & FiberRectangleProps
export type FiberToggleButtonPropsCtor = {
  name?: string
  group?: string
}
export type FiberStackPanelProps = {
  height?: string | number
  ignoreLayoutWarnings?: boolean
  isVertical?: boolean
  name?: string
  spacing?: number
  width?: string | number
} & FiberContainerProps
export type FiberStackPanelPropsCtor = {
  name?: string
}
export type FiberVirtualKeyboardProps = {
  addKeysRow?: any
  defaultButtonBackground?: string
  defaultButtonColor?: string
  defaultButtonHeight?: string
  defaultButtonPaddingBottom?: string
  defaultButtonPaddingLeft?: string
  defaultButtonPaddingRight?: string
  defaultButtonPaddingTop?: string
  defaultButtonWidth?: string
  onKeyPressObservable?: any
  selectedShiftThickness?: number
  shiftButtonColor?: string
  shiftState?: number
} & FiberStackPanelProps
export type FiberVirtualKeyboardPropsCtor = {}
export type FiberEllipseProps = {
  arc?: number
  name?: string
  thickness?: number
} & FiberContainerProps
export type FiberEllipsePropsCtor = {
  name?: string
}
export type FiberGridProps = {
  addColumnDefinition?: any
  addControl?: any
  addRowDefinition?: any
  clipChildren?: boolean
  clipContent?: boolean
  name?: string
  setColumnDefinition?: any
  setRowDefinition?: any
} & FiberContainerProps
export type FiberGridPropsCtor = {
  name?: string
}
export type Fiber_ScrollViewerWindowProps = {
  freezeControls?: boolean
  parentClientHeight?: number
  parentClientWidth?: number
  setBucketSizes?: any
} & FiberContainerProps
export type Fiber_ScrollViewerWindowPropsCtor = {
  name?: string
}
export type FiberTextBlockProps = {
  adjustWordWrappingHTMLElement?: (element: HTMLElement) => void
  applyOutlineToUnderline?: boolean
  forceResizeWidth?: boolean
  lineSpacing?: string | number
  lineThrough?: boolean
  name?: string
  onLinesReadyObservable?: any
  onTextChangedObservable?: any
  outlineColor?: string
  outlineWidth?: number
  resizeToFit?: boolean
  reuseHTMLForWordWrapping?: boolean
  text?: string
  textHorizontalAlignment?: number
  textVerticalAlignment?: number
  textWrapping?: boolean | BabylonjsGuiTextWrapping
  underline?: boolean
  wordDivider?: string
  wordSplittingFunction?: (line: string) => string[]
} & FiberControlProps
export type FiberTextBlockPropsCtor = {
  name?: string
  text?: string
}
export type FiberImageProps = {
  alt?: string
  autoScale?: boolean
  cellHeight?: number
  cellId?: number
  cellWidth?: number
  detectPointerOnOpaqueOnly?: boolean
  domImage?: BabylonjsCoreIImage
  name?: string
  onImageLoadedObservable?: any
  onSVGAttributesComputedObservable?: any
  populateNinePatchSlicesFromImage?: boolean
  referrerPolicy?: ReferrerPolicy
  sliceBottom?: number
  sliceLeft?: number
  sliceRight?: number
  sliceTop?: number
  source?: string
  sourceHeight?: number
  sourceLeft?: number
  sourceTop?: number
  sourceWidth?: number
  stretch?: number
} & FiberControlProps
export type FiberImagePropsCtor = {
  name?: string
  url?: string
}
export type FiberCheckboxProps = {
  background?: string
  checkSizeRatio?: number
  isChecked?: boolean
  name?: string
  onIsCheckedChangedObservable?: any
  thickness?: number
} & FiberControlProps
export type FiberCheckboxPropsCtor = {
  name?: string
}
export type FiberColorPickerProps = {
  height?: string | number
  name?: string
  onValueChangedObservable?: any
  size?: string | number
  value?: BabylonjsCoreColor3
  width?: string | number
} & FiberControlProps
export type FiberColorPickerPropsCtor = {
  name?: string
}
export type FiberInputTextProps = {
  addKey?: boolean
  autoStretchWidth?: boolean
  background?: string
  currentKey?: string
  deadKey?: boolean
  disableMobilePrompt?: boolean
  focusedBackground?: string
  focusedColor?: string
  highligherOpacity?: number
  highlightedText?: string
  isTextHighlightOn?: any
  margin?: string
  maxWidth?: string | number
  name?: string
  onBeforeKeyAddObservable?: any
  onFocusSelectAll?: boolean
  onTextChangedObservable?: any
  onTextCopyObservable?: any
  onTextCutObservable?: any
  onTextHighlightObservable?: any
  onTextPasteObservable?: any
  outlineColor?: string
  outlineWidth?: number
  placeholderColor?: string
  placeholderText?: string
  promptMessage?: string
  text?: string
  textHighlightColor?: string
  thickness?: number
  width?: string | number
} & FiberControlProps
export type FiberInputTextPropsCtor = {
  name?: string
  text?: string
}
export type FiberInputTextAreaProps = {
  autoStretchHeight?: boolean
  height?: string | number
  maxHeight?: string | number
  name?: string
  onLinesReadyObservable?: any
} & FiberInputTextProps
export type FiberInputTextAreaPropsCtor = {
  name?: string
  text?: string
}
export type FiberInputPasswordProps = {} & FiberInputTextProps
export type FiberInputPasswordPropsCtor = {}
export type FiberLineProps = {
  connectedControl?: BabylonjsGuiControl
  dash?: number[]
  horizontalAlignment?: number
  lineWidth?: number
  name?: string
  verticalAlignment?: number
  x1?: string | number
  x2?: string | number
  y1?: string | number
  y2?: string | number
} & FiberControlProps
export type FiberLinePropsCtor = {
  name?: string
}
export type FiberMultiLineProps = {
  add?: any
  dash?: number[]
  horizontalAlignment?: number
  lineWidth?: number
  name?: string
  onPointUpdate?: () => void
  verticalAlignment?: number
} & FiberControlProps
export type FiberMultiLinePropsCtor = {
  name?: string
}
export type FiberRadioButtonProps = {
  background?: string
  checkSizeRatio?: number
  group?: string
  isChecked?: boolean
  name?: string
  onIsCheckedChangedObservable?: any
  thickness?: number
} & FiberControlProps
export type FiberRadioButtonPropsCtor = {
  name?: string
}
export type FiberBaseSliderProps = {
  barOffset?: string | number
  displayThumb?: boolean
  isThumbClamped?: boolean
  isVertical?: boolean
  maximum?: number
  minimum?: number
  name?: string
  onValueChangedObservable?: any
  step?: number
  thumbWidth?: string | number
  value?: number
} & FiberControlProps
export type FiberBaseSliderPropsCtor = {
  name?: string
}
export type FiberScrollBarProps = {
  background?: string
  backgroundGradient?: BabylonjsGuiBaseGradient
  borderColor?: string
  invertScrollDirection?: boolean
  name?: string
} & FiberBaseSliderProps
export type FiberScrollBarPropsCtor = {
  name?: string
}
export type FiberImageScrollBarProps = {
  backgroundImage?: BabylonjsGuiImage
  barImageHeight?: number
  invertScrollDirection?: boolean
  name?: string
  num90RotationInVerticalMode?: number
  thumbHeight?: number
  thumbImage?: BabylonjsGuiImage
  thumbLength?: number
} & FiberBaseSliderProps
export type FiberImageScrollBarPropsCtor = {
  name?: string
}
export type FiberSliderProps = {
  background?: string
  backgroundGradient?: BabylonjsGuiBaseGradient
  borderColor?: string
  displayValueBar?: boolean
  isThumbCircle?: boolean
  name?: string
  thumbColor?: string
} & FiberBaseSliderProps
export type FiberSliderPropsCtor = {
  name?: string
}
export type FiberImageBasedSliderProps = {
  backgroundImage?: BabylonjsGuiImage
  displayThumb?: boolean
  name?: string
  thumbImage?: BabylonjsGuiImage
  valueBarImage?: BabylonjsGuiImage
} & FiberBaseSliderProps
export type FiberImageBasedSliderPropsCtor = {
  name?: string
}
export type FiberDisplayGridProps = {
  background?: string
  cellHeight?: number
  cellWidth?: number
  displayMajorLines?: boolean
  displayMinorLines?: boolean
  majorLineColor?: string
  majorLineFrequency?: number
  majorLineTickness?: number
  minorLineColor?: string
  minorLineTickness?: number
  name?: string
} & FiberControlProps
export type FiberDisplayGridPropsCtor = {
  name?: string
}
export type FiberControl3DProps = {
  addBehavior?: any
  isVisible?: boolean
  name?: string
  onPointerClickObservable?: any
  onPointerDownObservable?: any
  onPointerEnterObservable?: any
  onPointerMoveObservable?: any
  onPointerOutObservable?: any
  onPointerUpObservable?: any
  parent?: BabylonjsGuiContainer3D
  pointerDownAnimation?: () => void
  pointerEnterAnimation?: () => void
  pointerOutAnimation?: () => void
  pointerUpAnimation?: () => void
  position?: BabylonjsCoreVector3
  scaling?: BabylonjsCoreVector3
} & Control3DCustomProps
export type FiberControl3DPropsCtor = {
  name?: string
}
export type FiberContainer3DProps = {
  addControl?: any
  blockLayout?: boolean
} & FiberControl3DProps
export type FiberContainer3DPropsCtor = {
  name?: string
}
export type FiberVolumeBasedPanelProps = {
  columns?: number
  margin?: number
  orientation?: number
  rows?: number
} & FiberContainer3DProps
export type FiberVolumeBasedPanelPropsCtor = {
  name?: string
}
export type FiberCylinderPanelProps = {
  radius?: number
} & FiberVolumeBasedPanelProps
export type FiberCylinderPanelPropsCtor = {}
export type FiberTouchHolographicMenuProps = {
  addButton?: any
  addControl?: any
  backPlateMargin?: number
} & FiberVolumeBasedPanelProps
export type FiberTouchHolographicMenuPropsCtor = {
  name?: string
}
export type FiberHandMenuProps = {} & FiberTouchHolographicMenuProps
export type FiberHandMenuPropsCtor = {
  xr: BabylonjsCoreWebXRExperienceHelper
  name?: string
}
export type FiberNearMenuProps = {
  isPinned?: boolean
} & FiberTouchHolographicMenuProps
export type FiberNearMenuPropsCtor = {
  name?: string
}
export type FiberPlanePanelProps = {} & FiberVolumeBasedPanelProps
export type FiberPlanePanelPropsCtor = {}
export type FiberScatterPanelProps = {
  iteration?: number
} & FiberVolumeBasedPanelProps
export type FiberScatterPanelPropsCtor = {}
export type FiberSpherePanelProps = {
  radius?: number
} & FiberVolumeBasedPanelProps
export type FiberSpherePanelPropsCtor = {}
export type FiberStackPanel3DProps = {
  isVertical?: boolean
  margin?: number
} & FiberContainer3DProps
export type FiberStackPanel3DPropsCtor = {
  isVertical?: boolean
}
export type FiberContentDisplay3DProps = {
  content?: BabylonjsGuiControl
  contentResolution?: number | { width: number; height: number }
} & FiberControl3DProps
export type FiberContentDisplay3DPropsCtor = {}
export type FiberAbstractButton3DProps = {} & FiberContentDisplay3DProps
export type FiberAbstractButton3DPropsCtor = {
  name?: string
}
export type FiberButton3DProps = {} & FiberAbstractButton3DProps
export type FiberButton3DPropsCtor = {
  name?: string
  options?: BabylonjsGuiIButton3DCreationOptions
}
export type FiberTouchButton3DProps = {
  collidableFrontDirection?: BabylonjsCoreVector3
  collisionMesh?: BabylonjsCoreMesh
  isToggleButton?: boolean
  isToggled?: boolean
  onToggleObservable?: any
} & FiberButton3DProps
export type FiberTouchButton3DPropsCtor = {
  name?: string
  collisionMesh?: BabylonjsCoreMesh
}
export type FiberTouchHolographicButtonProps = {
  imageUrl?: string
  isBackplateVisible?: boolean
  renderingGroupId?: number
  text?: string
  tooltipText?: string
} & FiberTouchButton3DProps
export type FiberTouchHolographicButtonPropsCtor = {
  name?: string
  shareMaterials?: boolean
}
export type FiberTouchMeshButton3DProps = {} & FiberTouchButton3DProps
export type FiberTouchMeshButton3DPropsCtor = {
  mesh: BabylonjsCoreMesh
  name?: string
}
export type FiberHolographicButtonProps = {
  imageUrl?: string
  renderingGroupId?: number
  text?: string
  tooltipText?: string
} & FiberButton3DProps
export type FiberHolographicButtonPropsCtor = {
  name?: string
  shareMaterials?: boolean
}
export type FiberMeshButton3DProps = {} & FiberButton3DProps
export type FiberMeshButton3DPropsCtor = {
  mesh: BabylonjsCoreMesh
  name?: string
}
export type FiberHolographicSlateProps = {
  dimensions?: BabylonjsCoreVector2
  fitContentToDimensions?: boolean
  minDimensions?: BabylonjsCoreVector2
  origin?: BabylonjsCoreVector3
  'origin-x'?: number
  'origin-y'?: number
  'origin-z'?: number
  renderingGroupId?: number
  title?: string
  titleBarHeight?: number
  titleBarMargin?: number
} & FiberContentDisplay3DProps
export type FiberHolographicSlatePropsCtor = {
  name?: string
}
export type FiberHolographicBackplateProps = {
  renderingGroupId?: number
} & FiberControl3DProps
export type FiberHolographicBackplatePropsCtor = {
  name?: string
  _shareMaterials?: boolean
}
export type FiberSlider3DProps = {
  isVisible?: boolean
  maximum?: number
  minimum?: number
  onValueChangedObservable?: any
  step?: number
  value?: number
} & FiberControl3DProps
export type FiberSlider3DPropsCtor = {
  name?: string
  sliderBackplateVisible?: boolean
}
export type FiberSpriteManagerProps = {
  blendMode?: number
  cellHeight?: number
  cellWidth?: number
  disableDepthWrite?: boolean
  fogEnabled?: boolean
  isPickable?: boolean
  layerMask?: number
  metadata?: any
  name?: string
  onDispose?: () => void
  onDisposeObservable?: any
  pixelPerfect?: boolean
  renderingGroupId?: number
  snippetId?: string
  sprites?: BabylonjsCoreSprite[]
  texture?: BabylonjsCoreTexture
  uniqueId?: number
  useLogarithmicDepth?: boolean
} & CustomProps
export type FiberSpriteManagerPropsCtor = {
  name: string
  imgUrl: string
  capacity: number
  cellSize: any
  epsilon?: number
  samplingMode?: number
  fromPacked?: boolean
  spriteJSON?: any
}
export type FiberSpritePackedManagerProps = {
  name?: string
} & FiberSpriteManagerProps
export type FiberSpritePackedManagerPropsCtor = {
  name: string
  imgUrl: string
  capacity: number
  spriteJSON?: string
  epsilon?: number
  samplingMode?: number
}
export type FiberThinSpriteProps = {
  angle?: number
  cellIndex?: number
  cellRef?: string
  color?: BabylonjsCoreIColor4Like
  height?: number
  invertU?: boolean
  invertV?: boolean
  isVisible?: boolean
  position?: BabylonjsCoreIVector3Like
  width?: number
} & CustomProps
export type FiberThinSpritePropsCtor = {}
export type FiberSpriteProps = {
  actionManager?: BabylonjsCoreActionManager
  animations?: BabylonjsCoreAnimation[]
  color?: BabylonjsCoreColor4
  delay?: number
  disposeWhenFinishedAnimating?: boolean
  fromIndex?: number
  isPickable?: boolean
  loopAnimation?: boolean
  name?: string
  onDisposeObservable?: any
  position?: BabylonjsCoreVector3
  'position-x'?: number
  'position-y'?: number
  'position-z'?: number
  size?: number
  toIndex?: number
  uniqueId?: number
  useAlphaForPicking?: boolean
} & FiberThinSpriteProps
export type FiberSpritePropsCtor = {
  name: string
  manager?: BabylonjsCoreISpriteManager
}
export type FiberSoundProps = {
  autoplay?: boolean
  directionalConeInnerAngle?: number
  directionalConeOuterAngle?: number
  distanceModel?: string
  isPaused?: boolean
  isPlaying?: boolean
  loop?: boolean
  maxDistance?: number
  metadata?: any
  name?: string
  onended?: () => any
  onEndedObservable?: any
  refDistance?: number
  rolloffFactor?: number
  setAttenuationFunction?: any
  setAudioBuffer?: any
  setDirectionalCone?: any
  setLocalDirectionToMesh?: any
  setPlaybackRate?: any
  setPosition?: any
  setVolume?: any
  soundTrackId?: number
  spatialSound?: boolean
  useCustomAttenuation?: boolean
} & CustomProps
export type FiberSoundPropsCtor = {
  name: string
  urlOrArrayBuffer: any
  readyToPlayCallback?: () => void
  options?: BabylonjsCoreISoundOptions
}
export type FiberEffectLayerProps = {
  disableBoundingBoxesFromEffectLayer?: boolean
  isEnabled?: boolean
  name?: string
  neutralColor?: BabylonjsCoreColor4
  onAfterComposeObservable?: any
  onAfterRenderMeshToEffect?: any
  onBeforeComposeObservable?: any
  onBeforeRenderMainTextureObservable?: any
  onBeforeRenderMeshToEffect?: any
  onDisposeObservable?: any
  onSizeChangedObservable?: any
  renderingGroupId?: number
  setEffectIntensity?: any
  setMaterialForRendering?: any
} & CustomProps
export type FiberEffectLayerPropsCtor = {
  name: string
  forceGLSL?: boolean
}
export type FiberGlowLayerProps = {
  addExcludedMesh?: any
  addIncludedOnlyMesh?: any
  blurKernelSize?: number
  customEmissiveColorSelector?: (
    mesh: BabylonjsCoreMesh,
    subMesh: BabylonjsCoreSubMesh,
    material: BabylonjsCoreMaterial,
    result: BabylonjsCoreColor4
  ) => void
  customEmissiveTextureSelector?: (
    mesh: BabylonjsCoreMesh,
    subMesh: BabylonjsCoreSubMesh,
    material: BabylonjsCoreMaterial
  ) => BabylonjsCoreTexture
  intensity?: number
} & FiberEffectLayerProps
export type FiberGlowLayerPropsCtor = {
  name: string
  options?: Partial<BabylonjsCoreIGlowLayerOptions>
}
export type FiberHighlightLayerProps = {
  addExcludedMesh?: any
  addMesh?: any
  blurHorizontalSize?: number
  blurVerticalSize?: number
  innerGlow?: boolean
  name?: string
  onAfterBlurObservable?: any
  onBeforeBlurObservable?: any
  outerGlow?: boolean
} & FiberEffectLayerProps
export type FiberHighlightLayerPropsCtor = {
  name: string
  options?: Partial<BabylonjsCoreIHighlightLayerOptions>
}
export type FiberThinTextureProps = {
  anisotropicFilteringLevel?: number
  delayLoadState?: number
  is2DArray?: boolean
  is3D?: boolean
  isCube?: boolean
  wrapR?: number
  wrapU?: number
  wrapV?: number
} & CustomProps
export type FiberThinTexturePropsCtor = {
  internalTexture: BabylonjsCoreInternalTexture | BabylonjsCoreRenderTargetWrapper
}
export type FiberBaseTextureProps = {
  animations?: BabylonjsCoreAnimation[]
  anisotropicFilteringLevel?: number
  coordinatesIndex?: number
  coordinatesMode?: number
  gammaSpace?: boolean
  getAlphaFromRGB?: boolean
  hasAlpha?: boolean
  invertZ?: boolean
  irradianceTexture?: BabylonjsCoreBaseTexture
  is2DArray?: boolean
  is3D?: boolean
  isCube?: boolean
  isRenderTarget?: boolean
  isRGBD?: boolean
  level?: number
  linearSpecularLOD?: boolean
  lodGenerationOffset?: number
  lodGenerationScale?: number
  lodLevelInAlpha?: boolean
  metadata?: any
  name?: string
  onDispose?: () => void
  onDisposeObservable?: any
  optimizeUVAllocation?: boolean
  reservedDataStore?: any
  uniqueId?: number
  wrapR?: number
  wrapU?: number
  wrapV?: number
} & FiberThinTextureProps
export type FiberBaseTexturePropsCtor = {
  internalTexture?: BabylonjsCoreInternalTexture
}
export type FiberCubeTextureProps = {
  boundingBoxPosition?: BabylonjsCoreVector3
  'boundingBoxPosition-x'?: number
  'boundingBoxPosition-y'?: number
  'boundingBoxPosition-z'?: number
  boundingBoxSize?: BabylonjsCoreVector3
  onLoadObservable?: any
  rotationY?: number
  setReflectionTextureMatrix?: any
  url?: string
} & FiberBaseTextureProps
export type FiberCubeTexturePropsCtor = {
  rootUrl: string
  extensionsOrOptions?: string[] | BabylonjsCoreICubeTextureCreationOptions
  noMipmap?: boolean
  files?: string[]
  onLoad?: () => void
  onError?: (message?: string, exception?: any) => void
  format?: number
  prefiltered?: boolean
  forcedExtension?: any
  createPolynomials?: boolean
  lodScale?: number
  lodOffset?: number
  loaderOptions?: any
  useSRGBBuffer?: boolean
}
export type FiberRawCubeTextureProps = {} & FiberCubeTextureProps
export type FiberRawCubeTexturePropsCtor = {
  data: ArrayBufferView[]
  size: number
  format?: number
  type?: number
  generateMipMaps?: boolean
  invertY?: boolean
  samplingMode?: number
  compression?: string
}
export type FiberTextureProps = {
  homogeneousRotationInUVTransform?: boolean
  inspectableCustomProperties?: BabylonjsCoreIInspectable[]
  isBlocking?: boolean
  onLoadObservable?: any
  uAng?: number
  uOffset?: number
  url?: string
  uRotationCenter?: number
  uScale?: number
  vAng?: number
  vOffset?: number
  vRotationCenter?: number
  vScale?: number
  wAng?: number
  wRotationCenter?: number
} & FiberBaseTextureProps
export type FiberTexturePropsCtor = {
  url: string
  noMipmapOrOptions?: boolean | BabylonjsCoreITextureCreationOptions
  invertY?: boolean
  samplingMode?: number
  onLoad?: () => void
  onError?: (message?: string, exception?: any) => void
  buffer?: string | ArrayBufferView | ArrayBuffer | HTMLImageElement | Blob | ImageBitmap
  deleteBuffer?: boolean
  format?: number
  mimeType?: string
  loaderOptions?: any
  creationFlags?: number
  forcedExtension?: string
}
export type FiberVideoTextureProps = {} & FiberTextureProps
export type FiberVideoTexturePropsCtor = {
  name: string
  src: string | string[] | HTMLVideoElement
  generateMipMaps?: boolean
  invertY?: boolean
  samplingMode?: number
  settings?: Partial<BabylonjsCoreVideoTextureSettings>
  onError?: (message?: string, exception?: any) => void
  format?: number
}
export type FiberProceduralTextureProps = {
  autoClear?: boolean
  defines?: string
  isEnabled?: boolean
  nodeMaterialSource?: BabylonjsCoreNodeMaterial
  onBeforeGenerationObservable?: any
  onGenerated?: () => void
  onGeneratedObservable?: any
  refreshRate?: number
  setColor3?: any
  setColor4?: any
  setFloat?: any
  setFloats?: any
  setFragment?: any
  setInt?: any
  setMatrix?: any
  setTexture?: any
  setVector2?: any
  setVector3?: any
  setVector4?: any
} & FiberTextureProps
export type FiberProceduralTexturePropsCtor = {
  name: string
  size: BabylonjsCoreTextureSize
  fragment: any
  fallbackTexture?: BabylonjsCoreTexture | BabylonjsCoreIProceduralTextureCreationOptions
  generateMipMaps?: boolean
  isCube?: boolean
  textureType?: number
}
export type FiberCustomProceduralTextureProps = {
  animate?: boolean
} & FiberProceduralTextureProps
export type FiberCustomProceduralTexturePropsCtor = {
  name: string
  texturePath: string
  size: BabylonjsCoreTextureSize
  fallbackTexture?: BabylonjsCoreTexture | BabylonjsCoreICustomProceduralTextureCreationOptions
  generateMipMaps?: boolean
  skipJson?: boolean
}
export type FiberNoiseProceduralTextureProps = {
  animationSpeedFactor?: number
  brightness?: number
  octaves?: number
  persistence?: number
  time?: number
} & FiberProceduralTextureProps
export type FiberNoiseProceduralTexturePropsCtor = {
  name: string
  size?: number
  fallbackTexture?: BabylonjsCoreTexture
  generateMipMaps?: boolean
}
export type FiberRawTextureProps = {
  format?: number
} & FiberTextureProps
export type FiberRawTexturePropsCtor = {
  data: ArrayBufferView
  width: number
  height: number
  format: number
  generateMipMaps?: boolean
  invertY?: boolean
  samplingMode?: number
  type?: number
  creationFlags?: number
  useSRGBBuffer?: boolean
}
export type FiberRenderTargetTextureProps = {
  activeCamera?: BabylonjsCoreCamera
  addPostProcess?: any
  boundingBoxPosition?: BabylonjsCoreVector3
  'boundingBoxPosition-x'?: number
  'boundingBoxPosition-y'?: number
  'boundingBoxPosition-z'?: number
  boundingBoxSize?: BabylonjsCoreVector3
  clearColor?: BabylonjsCoreColor4
  customIsReadyFunction?: (
    mesh: BabylonjsCoreAbstractMesh,
    refreshRate: number,
    preWarm?: boolean
  ) => boolean
  customRenderFunction?: (
    opaqueSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>,
    alphaTestSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>,
    transparentSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>,
    depthOnlySubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>,
    beforeTransparents?: () => void
  ) => void
  forceLayerMaskCheck?: boolean
  getCustomRenderList?: (
    layerOrFace: number,
    renderList: readonly BabylonjsCoreAbstractMesh[],
    renderListLength: number
  ) => BabylonjsCoreAbstractMesh[]
  ignoreCameraViewport?: boolean
  onAfterRender?: (faceIndex: number) => void
  onAfterRenderObservable?: any
  onAfterUnbind?: () => void
  onAfterUnbindObservable?: any
  onBeforeBindObservable?: any
  onBeforeRender?: (faceIndex: number) => void
  onBeforeRenderObservable?: any
  onClear?: (Engine: BabylonjsCoreAbstractEngine) => void
  onClearObservable?: any
  onResizeObservable?: any
  refreshRate?: number
  renderList?: BabylonjsCoreAbstractMesh[]
  renderListPredicate?: (AbstractMesh: BabylonjsCoreAbstractMesh) => boolean
  renderParticles?: boolean
  renderPassId?: number
  renderSprites?: boolean
  samples?: number
  setMaterialForRendering?: any
  setRenderingAutoClearDepthStencil?: any
  setRenderingOrder?: any
  skipInitialClear?: boolean
  useCameraPostProcesses?: boolean
} & FiberTextureProps
export type FiberRenderTargetTexturePropsCtor = {
  name: string
  size: BabylonjsCoreTextureSize | { ratio: number }
  options?: BabylonjsCoreRenderTargetTextureOptions
}
export type FiberMirrorTextureProps = {
  adaptiveBlurKernel?: number
  blurKernel?: number
  blurKernelX?: number
  blurKernelY?: number
  blurRatio?: number
  mirrorPlane?: BabylonjsCorePlane
} & FiberRenderTargetTextureProps
export type FiberMirrorTexturePropsCtor = {
  name: string
  size: number | { width: number; height: number } | { ratio: number }
  generateMipMaps?: boolean
  type?: number
  samplingMode?: number
  generateDepthBuffer?: boolean
}
export type FiberMultiRenderTargetProps = {
  samples?: number
  setInternalTexture?: any
  setLayerAndFaceIndex?: any
  setLayerAndFaceIndices?: any
  wrapU?: number
  wrapV?: number
} & FiberRenderTargetTextureProps
export type FiberMultiRenderTargetPropsCtor = {
  name: string
  size: any
  count: number
  options?: BabylonjsCoreIMultiRenderTargetOptions
  textureNames?: string[]
}
export type FiberPrePassRenderTargetProps = {
  enabled?: boolean
  imageProcessingPostProcess?: BabylonjsCoreImageProcessingPostProcess
  renderTargetTexture?: BabylonjsCoreRenderTargetTexture
} & FiberMultiRenderTargetProps
export type FiberPrePassRenderTargetPropsCtor = {
  name: string
  renderTargetTexture: BabylonjsCoreRenderTargetTexture
  size: any
  count: number
  options?: BabylonjsCoreIMultiRenderTargetOptions
}
export type FiberRefractionTextureProps = {
  depth?: number
  refractionPlane?: BabylonjsCorePlane
} & FiberRenderTargetTextureProps
export type FiberRefractionTexturePropsCtor = {
  name: string
  size: number
  generateMipMaps?: boolean
}
export type FiberXRSpaceWarpRenderTargetProps = {} & FiberRenderTargetTextureProps
export type FiberXRSpaceWarpRenderTargetPropsCtor = {
  motionVectorTexture: WebGLTexture
  depthStencilTexture: WebGLTexture
  size?: number | { width: number; height: number } | { ratio: number }
}
export type FiberMultiviewRenderTargetProps = {
  samples?: number
} & FiberRenderTargetTextureProps
export type FiberMultiviewRenderTargetPropsCtor = {
  size?: number | { width: number; height: number } | { ratio: number }
}
export type FiberRawTexture2DArrayProps = {
  format?: number
} & FiberTextureProps
export type FiberRawTexture2DArrayPropsCtor = {
  data: ArrayBufferView
  width: number
  height: number
  depth: number
  format: number
  generateMipMaps?: boolean
  invertY?: boolean
  samplingMode?: number
  textureType?: number
  creationFlags?: number
}
export type FiberDynamicTextureProps = {} & FiberTextureProps
export type FiberDynamicTexturePropsCtor = {
  name: string
  options: any
  generateMipMaps?: boolean
  samplingMode?: number
  format?: number
  invertY?: boolean
}
export type FiberAdvancedDynamicTextureProps = {
  addControl?: any
  applyYInversionOnUpdate?: boolean
  background?: string
  checkPointerEveryFrame?: boolean
  clipboardData?: string
  disableTabNavigation?: boolean
  focusedControl?: BabylonjsGuiControl
  idealHeight?: number
  idealWidth?: number
  isForeground?: boolean
  onBeginLayoutObservable?: any
  onBeginRenderObservable?: any
  onClipboardObservable?: any
  onControlPickedObservable?: any
  onEndLayoutObservable?: any
  onEndRenderObservable?: any
  onGuiReadyObservable?: any
  parseContent?: (
    serializedObject: any,
    scaleToSize?: boolean,
    urlRewriter?: (url: string) => string
  ) => void
  premulAlpha?: boolean
  renderAtIdealSize?: boolean
  renderScale?: number
  skipBlockEvents?: number
  snippetId?: string
  useInvalidateRectOptimization?: boolean
  usePointerTapForClickEvent?: boolean
  useSmallestIdeal?: boolean
} & FiberDynamicTextureProps
export type FiberADTForMeshPropsCtor = {
  mesh: BabylonjsCoreAbstractMesh
  width?: number
  height?: number
  supportPointerMove?: boolean
  onlyAlphaTesting?: boolean
  invertY?: boolean
  materialSetupCallback?: (
    mesh: BabylonjsCoreAbstractMesh,
    uniqueId: string,
    texture: BabylonjsGuiAdvancedDynamicTexture,
    onlyAlphaTesting: boolean
  ) => void
  sampling?: number
}
export type FiberADTForMeshTexturePropsCtor = {
  mesh: BabylonjsCoreAbstractMesh
  width?: number
  height?: number
  supportPointerMove?: boolean
  invertY?: boolean
  sampling?: number
}
export type FiberADTFullscreenUIPropsCtor = {
  name: string
  foreground?: boolean
  sampling?: number
  adaptiveScaling?: boolean
}
export type FiberAdvancedDynamicTexturePropsCtor = {
  name: string
  width?: number
  height?: number
  generateMipMaps?: boolean
  samplingMode?: number
  invertY?: boolean
}
export type FiberRawTexture3DProps = {
  format?: number
} & FiberTextureProps
export type FiberRawTexture3DPropsCtor = {
  data: ArrayBufferView
  width: number
  height: number
  depth: number
  format: number
  generateMipMaps?: boolean
  invertY?: boolean
  samplingMode?: number
  textureType?: number
  creationFlags?: number
}
export type FiberColorGradingTextureProps = {
  url?: string
} & FiberBaseTextureProps
export type FiberColorGradingTexturePropsCtor = {
  url: string
  onLoad?: () => void
}
export type FiberEquiRectangularCubeTextureProps = {
  url?: string
} & FiberBaseTextureProps
export type FiberEquiRectangularCubeTexturePropsCtor = {
  url: string
  size: number
  noMipmap?: boolean
  gammaSpace?: boolean
  onLoad?: () => void
  onError?: (message?: string, exception?: any) => void
  supersample?: boolean
}
export type FiberHDRCubeTextureProps = {
  boundingBoxPosition?: BabylonjsCoreVector3
  'boundingBoxPosition-x'?: number
  'boundingBoxPosition-y'?: number
  'boundingBoxPosition-z'?: number
  boundingBoxSize?: BabylonjsCoreVector3
  isBlocking?: boolean
  onLoadObservable?: any
  rotationY?: number
  setReflectionTextureMatrix?: any
  url?: string
} & FiberBaseTextureProps
export type FiberHDRCubeTexturePropsCtor = {
  url: string
  size: number
  noMipmap?: boolean
  generateHarmonics?: boolean
  gammaSpace?: boolean
  prefilterOnLoad?: boolean
  onLoad?: () => void
  onError?: (message?: string, exception?: any) => void
  supersample?: boolean
}
export type FiberHtmlElementTextureProps = {
  element?: HTMLVideoElement | HTMLCanvasElement
  onLoadObservable?: any
} & FiberBaseTextureProps
export type FiberHtmlElementTexturePropsCtor = {
  name: string
  element: HTMLVideoElement | HTMLCanvasElement
  options: BabylonjsCoreIHtmlElementTextureOptions
}
export type FiberThinRenderTargetTextureProps = {} & FiberThinTextureProps
export type FiberThinRenderTargetTexturePropsCtor = {
  engine: BabylonjsCoreThinEngine
  size: BabylonjsCoreTextureSize
  options: BabylonjsCoreRenderTargetCreationOptions
}
export type FiberPostProcessRenderPipelineProps = {
  addEffect?: any
  inspectableCustomProperties?: BabylonjsCoreIInspectable[]
  setPrePassRenderer?: any
} & CustomProps
export type FiberPostProcessRenderPipelinePropsCtor = {
  _engine: BabylonjsCoreAbstractEngine
  name: string
}
export type FiberDefaultRenderingPipelineProps = {
  addCamera?: any
  animations?: BabylonjsCoreAnimation[]
  automaticBuild?: boolean
  bloom?: any
  bloomEnabled?: boolean
  bloomKernel?: number
  bloomScale?: number
  bloomThreshold?: number
  bloomWeight?: number
  chromaticAberration?: BabylonjsCoreChromaticAberrationPostProcess
  chromaticAberrationEnabled?: boolean
  depthOfField?: BabylonjsCoreDepthOfFieldEffect
  depthOfFieldBlurLevel?: BabylonjsCoreDepthOfFieldEffectBlurLevel
  depthOfFieldEnabled?: boolean
  fxaa?: BabylonjsCoreFxaaPostProcess
  fxaaEnabled?: boolean
  glowLayerEnabled?: boolean
  grain?: BabylonjsCoreGrainPostProcess
  grainEnabled?: boolean
  imageProcessing?: BabylonjsCoreImageProcessingPostProcess
  imageProcessingEnabled?: boolean
  onBuildObservable?: any
  samples?: number
  sharpen?: BabylonjsCoreSharpenPostProcess
  sharpenEnabled?: boolean
} & FiberPostProcessRenderPipelineProps
export type FiberDefaultRenderingPipelinePropsCtor = {
  name?: string
  hdr?: boolean
  cameras?: BabylonjsCoreCamera[]
  automaticBuild?: boolean
}
export type FiberLensRenderingPipelineProps = {
  blurNoise?: boolean
  chromaticAberration?: number
  darkenOutOfFocus?: number
  dofAperture?: number
  dofDistortion?: number
  edgeBlur?: number
  edgeDistortion?: number
  grainAmount?: number
  HighlightsEnhancingEffect?: string
  highlightsGain?: number
  highlightsThreshold?: number
  LensChromaticAberrationEffect?: string
  LensDepthOfFieldEffect?: string
  pentagonBokeh?: boolean
  setAperture?: any
  setChromaticAberration?: any
  setDarkenOutOfFocus?: any
  setEdgeBlur?: any
  setEdgeDistortion?: any
  setFocusDistance?: any
  setGrainAmount?: any
  setHighlightsGain?: any
  setHighlightsThreshold?: any
} & FiberPostProcessRenderPipelineProps
export type FiberLensRenderingPipelinePropsCtor = {
  name: string
  parameters: any
  ratio?: number
  cameras?: BabylonjsCoreCamera[]
}
export type FiberSSAO2RenderingPipelineProps = {
  base?: number
  bilateralSamples?: number
  bilateralSoften?: number
  bilateralTolerance?: number
  bypassBlur?: boolean
  epsilon?: number
  expensiveBlur?: boolean
  maxZ?: number
  minZAspect?: number
  radius?: number
  samples?: number
  SSAOBlurHRenderEffect?: string
  SSAOBlurVRenderEffect?: string
  SSAOCombineRenderEffect?: string
  SSAOOriginalSceneColorEffect?: string
  SSAORenderEffect?: string
  textureSamples?: number
  totalStrength?: number
} & FiberPostProcessRenderPipelineProps
export type FiberSSAO2RenderingPipelinePropsCtor = {
  name: string
  ratio: any
  cameras?: BabylonjsCoreCamera[]
  forceGeometryBuffer?: boolean
  textureType?: number
}
export type FiberSSAORenderingPipelineProps = {
  area?: number
  base?: number
  fallOff?: number
  radius?: number
  SSAOBlurHRenderEffect?: string
  SSAOBlurVRenderEffect?: string
  SSAOCombineRenderEffect?: string
  SSAOOriginalSceneColorEffect?: string
  SSAORenderEffect?: string
  totalStrength?: number
} & FiberPostProcessRenderPipelineProps
export type FiberSSAORenderingPipelinePropsCtor = {
  name: string
  ratio: any
  cameras?: BabylonjsCoreCamera[]
}
export type FiberStandardRenderingPipelineProps = {
  animations?: BabylonjsCoreAnimation[]
  BloomEnabled?: boolean
  blurHPostProcesses?: BabylonjsCorePostProcess[]
  blurVPostProcesses?: BabylonjsCorePostProcess[]
  blurWidth?: number
  brightPassPostProcess?: BabylonjsCorePostProcess
  brightThreshold?: number
  depthOfFieldBlurWidth?: number
  depthOfFieldDistance?: number
  DepthOfFieldEnabled?: boolean
  depthOfFieldPostProcess?: BabylonjsCorePostProcess
  downSampleX4PostProcess?: BabylonjsCorePostProcess
  exposure?: number
  fxaaEnabled?: boolean
  fxaaPostProcess?: BabylonjsCoreFxaaPostProcess
  hdrAutoExposure?: boolean
  hdrDecreaseRate?: number
  HDREnabled?: boolean
  hdrFinalPostProcess?: BabylonjsCorePostProcess
  hdrIncreaseRate?: number
  hdrMinimumLuminance?: number
  hdrPostProcess?: BabylonjsCorePostProcess
  horizontalBlur?: boolean
  lensColorTexture?: BabylonjsCoreTexture
  lensFlareBlurWidth?: number
  lensFlareComposePostProcess?: BabylonjsCorePostProcess
  lensFlareDirtTexture?: BabylonjsCoreTexture
  lensFlareDistortionStrength?: number
  LensFlareEnabled?: boolean
  lensFlareFinalPostProcess?: BabylonjsCorePostProcess
  lensFlareGhostDispersal?: number
  lensFlareHaloWidth?: number
  lensFlarePostProcess?: BabylonjsCorePostProcess
  lensFlareStrength?: number
  lensStarTexture?: BabylonjsCoreTexture
  lensTexture?: BabylonjsCoreTexture
  luminanceDownSamplePostProcesses?: BabylonjsCorePostProcess[]
  luminancePostProcess?: BabylonjsCorePostProcess
  MotionBlurEnabled?: boolean
  motionBlurPostProcess?: BabylonjsCorePostProcess
  motionBlurSamples?: number
  motionStrength?: number
  objectBasedMotionBlur?: boolean
  originalPostProcess?: BabylonjsCorePostProcess
  samples?: number
  screenSpaceReflectionPostProcess?: BabylonjsCoreScreenSpaceReflectionPostProcess
  screenSpaceReflectionsEnabled?: boolean
  sourceLight?: BabylonjsCoreDirectionalLight | BabylonjsCoreSpotLight
  textureAdderFinalPostProcess?: BabylonjsCorePostProcess
  textureAdderPostProcess?: BabylonjsCorePostProcess
  VLSEnabled?: boolean
  volumetricLightBlurScale?: number
  volumetricLightCoefficient?: number
  volumetricLightFinalPostProcess?: BabylonjsCorePostProcess
  volumetricLightMergePostProces?: BabylonjsCorePostProcess
  volumetricLightPostProcess?: BabylonjsCorePostProcess
  volumetricLightPower?: number
  volumetricLightSmoothXPostProcess?: BabylonjsCoreBlurPostProcess
  volumetricLightSmoothYPostProcess?: BabylonjsCoreBlurPostProcess
  volumetricLightStepsCount?: number
} & FiberPostProcessRenderPipelineProps
export type FiberStandardRenderingPipelinePropsCtor = {
  name: string
  ratio: number
  originalPostProcess?: BabylonjsCorePostProcess
  cameras?: BabylonjsCoreCamera[]
}
export type FiberSSRRenderingPipelineProps = {
  addCamera?: any
  attenuateBackfaceReflection?: boolean
  attenuateFacingCamera?: boolean
  attenuateIntersectionDistance?: boolean
  attenuateIntersectionIterations?: boolean
  attenuateScreenBorders?: boolean
  backfaceDepthTextureDownsample?: number
  backfaceForceDepthWriteTransparentMeshes?: boolean
  blurDispersionStrength?: number
  blurDownsample?: number
  clipToFrustum?: boolean
  debug?: boolean
  enableAutomaticThicknessComputation?: boolean
  enableSmoothReflections?: boolean
  environmentTexture?: BabylonjsCoreCubeTexture
  environmentTextureIsProbe?: boolean
  generateOutputInGammaSpace?: boolean
  inputTextureColorIsInGammaSpace?: boolean
  isEnabled?: boolean
  maxDistance?: number
  maxSteps?: number
  reflectionSpecularFalloffExponent?: number
  reflectivityThreshold?: number
  roughnessFactor?: number
  samples?: number
  selfCollisionNumSkip?: number
  SSRBlurRenderEffect?: string
  SSRCombineRenderEffect?: string
  ssrDownsample?: number
  SSRRenderEffect?: string
  step?: number
  strength?: number
  thickness?: number
  useFresnel?: boolean
} & FiberPostProcessRenderPipelineProps
export type FiberSSRRenderingPipelinePropsCtor = {
  name: string
  cameras?: BabylonjsCoreCamera[]
  forceGeometryBuffer?: boolean
  textureType?: number
  useScreenspaceDepth?: boolean
}
export type FiberTAARenderingPipelineProps = {
  addCamera?: any
  disableOnCameraMove?: boolean
  factor?: number
  isEnabled?: boolean
  msaaSamples?: number
  samples?: number
  TAAPassEffect?: string
  TAARenderEffect?: string
} & FiberPostProcessRenderPipelineProps
export type FiberTAARenderingPipelinePropsCtor = {
  name: string
  cameras?: BabylonjsCoreCamera[]
  textureType?: number
}
export type FiberIblShadowsRenderPipelineProps = {
  accumulationPassDebugEnabled?: boolean
  addExcludedMesh?: any
  allowDebugPasses?: boolean
  envRotation?: number
  gbufferDebugEnabled?: boolean
  importanceSamplingDebugEnabled?: boolean
  resolutionExp?: number
  sampleDirections?: number
  scene?: BabylonjsCoreScene
  setIblTexture?: any
  setPrePassRenderer?: any
  shadowOpacity?: number
  shadowRemenance?: number
  spatialBlurPassDebugEnabled?: boolean
  ssShadowMaxDist?: number
  ssShadowOpacity?: number
  ssShadowSamples?: number
  ssShadowStride?: number
  ssShadowThickness?: number
  voxelDebugAxis?: number
  voxelDebugDisplayMip?: number
  voxelDebugEnabled?: boolean
  voxelGridSize?: number
  voxelShadowOpacity?: number
  voxelTracingDebugEnabled?: boolean
} & FiberPostProcessRenderPipelineProps
export type FiberIblShadowsRenderPipelinePropsCtor = {
  name: string
  options?: Partial<IblShadowsSettings>
  cameras?: BabylonjsCoreCamera[]
}
export type FiberPostProcessProps = {
  adaptScaleToCurrentViewport?: boolean
  alphaConstants?: BabylonjsCoreColor4
  alphaMode?: number
  alwaysForcePOT?: boolean
  animations?: BabylonjsCoreAnimation[]
  autoClear?: boolean
  clearColor?: BabylonjsCoreColor4
  enablePixelPerfectMode?: boolean
  externalTextureSamplerBinding?: boolean
  forceAutoClearInAlphaMode?: boolean
  forceFullscreenViewport?: boolean
  height?: number
  inputTexture?: BabylonjsCoreRenderTargetWrapper
  inspectableCustomProperties?: BabylonjsCoreIInspectable[]
  name?: string
  nodeMaterialSource?: BabylonjsCoreNodeMaterial
  onActivate?: (camera: BabylonjsCoreCamera) => void
  onActivateObservable?: any
  onAfterRender?: (efect: BabylonjsCoreEffect) => void
  onAfterRenderObservable?: any
  onApply?: (effect: BabylonjsCoreEffect) => void
  onApplyObservable?: any
  onBeforeRender?: (effect: BabylonjsCoreEffect) => void
  onBeforeRenderObservable?: any
  onEffectCreatedObservable?: any
  onSizeChanged?: (postProcess: BabylonjsCorePostProcess) => void
  onSizeChangedObservable?: any
  renderTargetSamplingMode?: number
  samples?: number
  scaleMode?: number
  setPrePassRenderer?: any
  uniqueId?: number
  width?: number
} & CustomProps
export type FiberPostProcessPropsCtor = {
  name: string
  fragmentUrl: string
  options?: BabylonjsCorePostProcessOptions
}
export type FiberImageProcessingPostProcessProps = {
  colorCurves?: BabylonjsCoreColorCurves
  colorCurvesEnabled?: boolean
  colorGradingEnabled?: boolean
  colorGradingTexture?: BabylonjsCoreBaseTexture
  contrast?: number
  ditheringEnabled?: boolean
  ditheringIntensity?: number
  exposure?: number
  fromLinearSpace?: boolean
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
  toneMappingEnabled?: boolean
  toneMappingType?: number
  vignetteBlendMode?: number
  vignetteCameraFov?: number
  vignetteCenterX?: number
  vignetteCenterY?: number
  vignetteCentreX?: number
  vignetteCentreY?: number
  vignetteColor?: BabylonjsCoreColor4
  vignetteEnabled?: boolean
  vignetteStretch?: number
  vignetteWeight?: number
} & FiberPostProcessProps
export type FiberImageProcessingPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera?: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  imageProcessingConfiguration?: BabylonjsCoreImageProcessingConfiguration
}
export type FiberAnaglyphPostProcessProps = {} & FiberPostProcessProps
export type FiberAnaglyphPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  rigCameras: BabylonjsCoreCamera[]
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberBlackAndWhitePostProcessProps = {
  degree?: number
} & FiberPostProcessProps
export type FiberBlackAndWhitePostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberExtractHighlightsPostProcessProps = {
  threshold?: number
} & FiberPostProcessProps
export type FiberExtractHighlightsPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberBloomMergePostProcessProps = {
  weight?: number
} & FiberPostProcessProps
export type FiberBloomMergePostProcessPropsCtor = {
  name: string
  originalFromInput: BabylonjsCorePostProcess
  blurred: BabylonjsCorePostProcess
  weight: number
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberBlurPostProcessProps = {
  direction?: BabylonjsCoreVector2
  kernel?: number
  packedFloat?: boolean
} & FiberPostProcessProps
export type FiberBlurPostProcessPropsCtor = {
  name: string
  direction: BabylonjsCoreVector2
  kernel: number
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  defines?: string
  _blockCompilation?: boolean
  textureFormat?: number
}
export type FiberDepthOfFieldBlurPostProcessProps = {
  direction?: BabylonjsCoreVector2
} & FiberBlurPostProcessProps
export type FiberDepthOfFieldBlurPostProcessPropsCtor = {
  name: string
  direction: BabylonjsCoreVector2
  kernel: number
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  circleOfConfusion: BabylonjsCorePostProcess
  imageToBlur?: BabylonjsCorePostProcess
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
  textureFormat?: number
}
export type FiberChromaticAberrationPostProcessProps = {
  aberrationAmount?: number
  centerPosition?: BabylonjsCoreVector2
  direction?: BabylonjsCoreVector2
  radialIntensity?: number
  screenHeight?: number
  screenWidth?: number
} & FiberPostProcessProps
export type FiberChromaticAberrationPostProcessPropsCtor = {
  name: string
  screenWidth: number
  screenHeight: number
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberCircleOfConfusionPostProcessProps = {
  depthTexture?: BabylonjsCoreRenderTargetTexture
  focalLength?: number
  focusDistance?: number
  fStop?: number
  lensSize?: number
} & FiberPostProcessProps
export type FiberCircleOfConfusionPostProcessPropsCtor = {
  name: string
  depthTexture: BabylonjsCoreRenderTargetTexture
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberColorCorrectionPostProcessProps = {
  colorTableUrl?: string
} & FiberPostProcessProps
export type FiberColorCorrectionPostProcessPropsCtor = {
  name: string
  colorTableUrl: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberConvolutionPostProcessProps = {
  kernel?: number[]
} & FiberPostProcessProps
export type FiberConvolutionPostProcessPropsCtor = {
  name: string
  kernel: number[]
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
}
export type FiberDepthOfFieldMergePostProcessProps = {} & FiberPostProcessProps
export type FiberDepthOfFieldMergePostProcessPropsCtor = {
  name: string
  originalFromInput: BabylonjsCorePostProcess
  circleOfConfusion: BabylonjsCorePostProcess
  _blurSteps: BabylonjsCorePostProcess[]
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberDisplayPassPostProcessProps = {} & FiberPostProcessProps
export type FiberDisplayPassPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberFilterPostProcessProps = {
  kernelMatrix?: BabylonjsCoreMatrix
} & FiberPostProcessProps
export type FiberFilterPostProcessPropsCtor = {
  name: string
  kernelMatrix: BabylonjsCoreMatrix
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberFxaaPostProcessProps = {} & FiberPostProcessProps
export type FiberFxaaPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera?: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
}
export type FiberGrainPostProcessProps = {
  animated?: boolean
  intensity?: number
} & FiberPostProcessProps
export type FiberGrainPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberHighlightsPostProcessProps = {} & FiberPostProcessProps
export type FiberHighlightsPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
}
export type FiberMotionBlurPostProcessProps = {
  isObjectBased?: boolean
  motionBlurSamples?: number
  motionStrength?: number
} & FiberPostProcessProps
export type FiberMotionBlurPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
  forceGeometryBuffer?: boolean
}
export type FiberPassPostProcessProps = {} & FiberPostProcessProps
export type FiberPassPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera?: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberPassCubePostProcessProps = {
  face?: number
} & FiberPostProcessProps
export type FiberPassCubePostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera?: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberRefractionPostProcessProps = {
  color?: BabylonjsCoreColor3
  colorLevel?: number
  depth?: number
  refractionTexture?: BabylonjsCoreTexture
  refractionTextureUrl?: string
} & FiberPostProcessProps
export type FiberRefractionPostProcessPropsCtor = {
  name: string
  refractionTextureUrl: string
  color: BabylonjsCoreColor3
  depth: number
  colorLevel: number
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberSharpenPostProcessProps = {
  colorAmount?: number
  edgeAmount?: number
} & FiberPostProcessProps
export type FiberSharpenPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberScreenSpaceReflectionPostProcessProps = {
  enableSmoothReflections?: boolean
  reflectionSamples?: number
  reflectionSpecularFalloffExponent?: number
  roughnessFactor?: number
  smoothSteps?: number
  step?: number
  strength?: number
  threshold?: number
} & FiberPostProcessProps
export type FiberScreenSpaceReflectionPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
  forceGeometryBuffer?: boolean
}
export type FiberStereoscopicInterlacePostProcessIProps = {} & FiberPostProcessProps
export type FiberStereoscopicInterlacePostProcessIPropsCtor = {
  name: string
  rigCameras: BabylonjsCoreCamera[]
  isStereoscopicHoriz: boolean
  isStereoscopicInterlaced: boolean
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberStereoscopicInterlacePostProcessProps = {} & FiberPostProcessProps
export type FiberStereoscopicInterlacePostProcessPropsCtor = {
  name: string
  rigCameras: BabylonjsCoreCamera[]
  isStereoscopicHoriz: boolean
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberTonemapPostProcessProps = {
  exposureAdjustment?: number
} & FiberPostProcessProps
export type FiberTonemapPostProcessPropsCtor = {
  name: string
  _operator: BabylonjsCoreTonemappingOperator
  exposureAdjustment: number
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  textureFormat?: number
  reusable?: boolean
}
export type FiberVolumetricLightScatteringPostProcessProps = {
  attachedNode?: { position: BabylonjsCoreVector3 }
  customMeshPosition?: BabylonjsCoreVector3
  'customMeshPosition-x'?: number
  'customMeshPosition-y'?: number
  'customMeshPosition-z'?: number
  decay?: number
  density?: number
  excludedMeshes?: BabylonjsCoreAbstractMesh[]
  exposure?: number
  includedMeshes?: BabylonjsCoreAbstractMesh[]
  invert?: boolean
  mesh?: BabylonjsCoreMesh
  setCustomMeshPosition?: any
  useCustomMeshPosition?: boolean
  useDiffuseColor?: boolean
  weight?: number
} & FiberPostProcessProps
export type FiberVolumetricLightScatteringPostProcessPropsCtor = {
  name: string
  ratio: any
  camera: BabylonjsCoreCamera
  mesh?: BabylonjsCoreMesh
  samples?: number
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
}
export type FiberVRDistortionCorrectionPostProcessProps = {} & FiberPostProcessProps
export type FiberVRDistortionCorrectionPostProcessPropsCtor = {
  name: string
  camera: BabylonjsCoreCamera
  isRightEye: boolean
  vrMetrics: BabylonjsCoreVRCameraMetrics
}
export type FiberVRMultiviewToSingleviewPostProcessProps = {} & FiberPostProcessProps
export type FiberVRMultiviewToSingleviewPostProcessPropsCtor = {
  name: string
  camera: BabylonjsCoreCamera
  scaleFactor: number
}
export type FiberScreenSpaceCurvaturePostProcessProps = {
  ridge?: number
  valley?: number
} & FiberPostProcessProps
export type FiberScreenSpaceCurvaturePostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
  blockCompilation?: boolean
}
export type FiberSubSurfaceScatteringPostProcessProps = {} & FiberPostProcessProps
export type FiberSubSurfaceScatteringPostProcessPropsCtor = {
  name: string
  options: number | BabylonjsCorePostProcessOptions
  camera?: BabylonjsCoreCamera
  samplingMode?: number
  engine?: BabylonjsCoreAbstractEngine
  reusable?: boolean
  textureType?: number
}
export type FiberGizmoProps = {
  additionalTransformNode?: BabylonjsCoreTransformNode
  anchorPoint?: BabylonjsCoreGizmoAnchorPoint
  attachedMesh?: BabylonjsCoreAbstractMesh
  attachedNode?: BabylonjsCoreNode
  coordinatesMode?: BabylonjsCoreGizmoCoordinatesMode
  customRotationQuaternion?: BabylonjsCoreQuaternion
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  scaleRatio?: number
  setCustomMesh?: any
  updateGizmoPositionToMatchAttachedMesh?: boolean
  updateGizmoRotationToMatchAttachedMesh?: boolean
  updateScale?: boolean
} & GizmoCustomProps
export type FiberGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
}
export type FiberPlaneDragGizmoProps = {
  dragBehavior?: BabylonjsCorePointerDragBehavior
  isEnabled?: boolean
  onSnapObservable?: any
  snapDistance?: number
} & FiberGizmoProps
export type FiberPlaneDragGizmoPropsCtor = {
  dragPlaneNormal: BabylonjsCoreVector3
  color?: BabylonjsCoreColor3
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  parent?: BabylonjsCorePositionGizmo
  hoverColor?: BabylonjsCoreColor3
  disableColor?: BabylonjsCoreColor3
}
export type FiberPlaneRotationGizmoProps = {
  angle?: number
  dragBehavior?: BabylonjsCorePointerDragBehavior
  isEnabled?: boolean
  onSnapObservable?: any
  rotationColor?: BabylonjsCoreColor3
  sensitivity?: number
  snapDistance?: number
} & FiberGizmoProps
export type FiberPlaneRotationGizmoPropsCtor = {
  planeNormal: BabylonjsCoreVector3
  color?: BabylonjsCoreColor3
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  tessellation?: number
  parent?: BabylonjsCoreRotationGizmo
  useEulerRotation?: boolean
  thickness?: number
  hoverColor?: BabylonjsCoreColor3
  disableColor?: BabylonjsCoreColor3
}
export type FiberRotationGizmoProps = {
  additionalTransformNode?: BabylonjsCoreTransformNode
  addToAxisCache?: any
  anchorPoint?: BabylonjsCoreGizmoAnchorPoint
  attachedMesh?: BabylonjsCoreAbstractMesh
  attachedNode?: BabylonjsCoreNode
  coordinatesMode?: BabylonjsCoreGizmoCoordinatesMode
  customRotationQuaternion?: BabylonjsCoreQuaternion
  onDragEndObservable?: any
  onDragObservable?: any
  onDragStartObservable?: any
  scaleRatio?: number
  sensitivity?: number
  snapDistance?: number
  updateGizmoPositionToMatchAttachedMesh?: boolean
  updateGizmoRotationToMatchAttachedMesh?: boolean
  updateScale?: boolean
  xGizmo?: BabylonjsCoreIPlaneRotationGizmo
  yGizmo?: BabylonjsCoreIPlaneRotationGizmo
  zGizmo?: BabylonjsCoreIPlaneRotationGizmo
} & FiberGizmoProps
export type FiberRotationGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  tessellation?: number
  useEulerRotation?: boolean
  thickness?: number
  gizmoManager?: BabylonjsCoreGizmoManager
  options?: BabylonjsCoreRotationGizmoOptions
}
export type FiberAxisScaleGizmoProps = {
  dragBehavior?: BabylonjsCorePointerDragBehavior
  dragScale?: number
  incrementalSnap?: boolean
  isEnabled?: boolean
  onSnapObservable?: any
  sensitivity?: number
  setCustomMesh?: any
  snapDistance?: number
  uniformScaling?: boolean
} & FiberGizmoProps
export type FiberAxisScaleGizmoPropsCtor = {
  dragAxis: BabylonjsCoreVector3
  color?: BabylonjsCoreColor3
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  parent?: BabylonjsCoreScaleGizmo
  thickness?: number
  hoverColor?: BabylonjsCoreColor3
  disableColor?: BabylonjsCoreColor3
}
export type FiberScaleGizmoProps = {
  additionalTransformNode?: BabylonjsCoreTransformNode
  addToAxisCache?: any
  anchorPoint?: BabylonjsCoreGizmoAnchorPoint
  attachedMesh?: BabylonjsCoreAbstractMesh
  attachedNode?: BabylonjsCoreNode
  coordinatesMode?: BabylonjsCoreGizmoCoordinatesMode
  customRotationQuaternion?: BabylonjsCoreQuaternion
  incrementalSnap?: boolean
  onDragEndObservable?: any
  onDragObservable?: any
  onDragStartObservable?: any
  scaleRatio?: number
  sensitivity?: number
  snapDistance?: number
  uniformScaleGizmo?: BabylonjsCoreIAxisScaleGizmo
  updateGizmoRotationToMatchAttachedMesh?: boolean
  updateScale?: boolean
  xGizmo?: BabylonjsCoreIAxisScaleGizmo
  yGizmo?: BabylonjsCoreIAxisScaleGizmo
  zGizmo?: BabylonjsCoreIAxisScaleGizmo
} & FiberGizmoProps
export type FiberScaleGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  thickness?: number
  gizmoManager?: BabylonjsCoreGizmoManager
  options?: BabylonjsCoreScaleGizmoOptions
}
export type FiberBoundingBoxGizmoProps = {
  axisFactor?: BabylonjsCoreVector3
  fixedDragMeshBoundsSize?: boolean
  fixedDragMeshScreenSize?: boolean
  fixedDragMeshScreenSizeDistanceFactor?: number
  ignoreChildren?: boolean
  includeChildPredicate?: (abstractMesh: BabylonjsCoreAbstractMesh) => boolean
  incrementalSnap?: boolean
  onDragStartObservable?: any
  onRotationSphereDragEndObservable?: any
  onRotationSphereDragObservable?: any
  onScaleBoxDragEndObservable?: any
  onScaleBoxDragObservable?: any
  rotationSnapDistance?: number
  rotationSphereSize?: number
  scaleBoxSize?: number
  scaleDragSpeed?: number
  scalePivot?: BabylonjsCoreVector3
  'scalePivot-x'?: number
  'scalePivot-y'?: number
  'scalePivot-z'?: number
  scalingSnapDistance?: number
  setColor?: any
  setEnabledRotationAxis?: any
  setEnabledScaling?: any
} & FiberGizmoProps
export type FiberBoundingBoxGizmoPropsCtor = {
  color?: BabylonjsCoreColor3
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
}
export type FiberPositionGizmoProps = {
  additionalTransformNode?: BabylonjsCoreTransformNode
  addToAxisCache?: any
  anchorPoint?: BabylonjsCoreGizmoAnchorPoint
  attachedMesh?: BabylonjsCoreAbstractMesh
  attachedNode?: BabylonjsCoreNode
  coordinatesMode?: BabylonjsCoreGizmoCoordinatesMode
  customRotationQuaternion?: BabylonjsCoreQuaternion
  onDragEndObservable?: any
  onDragObservable?: any
  onDragStartObservable?: any
  planarGizmoEnabled?: boolean
  scaleRatio?: number
  snapDistance?: number
  updateGizmoPositionToMatchAttachedMesh?: boolean
  updateGizmoRotationToMatchAttachedMesh?: boolean
  updateScale?: boolean
  xGizmo?: BabylonjsCoreIAxisDragGizmo
  xPlaneGizmo?: BabylonjsCoreIPlaneDragGizmo
  yGizmo?: BabylonjsCoreIAxisDragGizmo
  yPlaneGizmo?: BabylonjsCoreIPlaneDragGizmo
  zGizmo?: BabylonjsCoreIAxisDragGizmo
  zPlaneGizmo?: BabylonjsCoreIPlaneDragGizmo
} & FiberGizmoProps
export type FiberPositionGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  thickness?: number
  gizmoManager?: BabylonjsCoreGizmoManager
  options?: BabylonjsCorePositionGizmoOptions
}
export type FiberAxisDragGizmoProps = {
  dragBehavior?: BabylonjsCorePointerDragBehavior
  isEnabled?: boolean
  onSnapObservable?: any
  snapDistance?: number
} & FiberGizmoProps
export type FiberAxisDragGizmoPropsCtor = {
  dragAxis: BabylonjsCoreVector3
  color?: BabylonjsCoreColor3
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  parent?: BabylonjsCorePositionGizmo
  thickness?: number
  hoverColor?: BabylonjsCoreColor3
  disableColor?: BabylonjsCoreColor3
}
export type FiberLightGizmoProps = {
  attachedNode?: BabylonjsCoreNode
  light?: BabylonjsCoreLight
  onClickedObservable?: any
} & FiberGizmoProps
export type FiberLightGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
}
export type FiberCameraGizmoProps = {
  camera?: BabylonjsCoreCamera
  displayFrustum?: boolean
  onClickedObservable?: any
  setCustomMesh?: any
} & FiberGizmoProps
export type FiberCameraGizmoPropsCtor = {
  gizmoLayer?: BabylonjsCoreUtilityLayerRenderer
  gizmoColor?: BabylonjsCoreColor3
  frustumLinesColor?: BabylonjsCoreColor3
}
export type FiberSlateGizmoProps = {
  attachedSlate?: BabylonjsGuiHolographicSlate
  fixedScreenSize?: boolean
  fixedScreenSizeDistanceFactor?: number
} & FiberGizmoProps
export type FiberSlateGizmoPropsCtor = {
  utilityLayer?: BabylonjsCoreUtilityLayerRenderer
}
export type FiberGUI3DManagerProps = {
  addControl?: any
  controlScaling?: number
  onPickedPointChangedObservable?: any
  onPickingObservable?: any
  useRealisticScaling?: boolean
} & CustomProps
export type FiberGUI3DManagerPropsCtor = {}
export type FiberEnvironmentHelperProps = {
  onErrorObservable?: any
  setMainColor?: any
} & CustomProps
export type FiberEnvironmentHelperPropsCtor = {
  options: Partial<BabylonjsCoreIEnvironmentHelperOptions>
}
export type FiberPhysicsImpostorProps = {
  addAnchor?: any
  addHook?: any
  addJoint?: any
  afterStep?: () => void
  beforeStep?: () => void
  friction?: number
  mass?: number
  object?: BabylonjsCoreIPhysicsEnabledObject
  onCollide?: (e: {
    body: any
    point: BabylonjsCoreVector3
    distance: number
    impulse: number
    normal: BabylonjsCoreVector3
  }) => void
  onCollideEvent?: (
    collider: BabylonjsCorePhysicsImpostor,
    collidedWith: BabylonjsCorePhysicsImpostor
  ) => void
  parent?: BabylonjsCorePhysicsImpostor
  physicsBody?: any
  positionIterations?: number
  pressure?: number
  restitution?: number
  segments?: number
  setAngularVelocity?: any
  setDeltaPosition?: any
  setDeltaRotation?: any
  setLinearVelocity?: any
  setMass?: any
  setParam?: any
  soft?: boolean
  stiffness?: number
  type?: number
  uniqueId?: number
  velocityIterations?: number
} & CustomProps
export type FiberPhysicsImpostorPropsCtor = {
  object?: BabylonjsCoreIPhysicsEnabledObject
  type: number
  _options?: BabylonjsCorePhysicsImpostorParameters
}
export type FiberPhysicsAggregateProps = {
  body?: BabylonjsCorePhysicsBody
  material?: BabylonjsCorePhysicsMaterial
  shape?: BabylonjsCorePhysicsShape
  transformNode?: BabylonjsCoreTransformNode
  type?: BabylonjsCorePhysicsShapeType | BabylonjsCorePhysicsShape
} & CustomProps
export type FiberPhysicsAggregatePropsCtor = {
  transformNode?: BabylonjsCoreTransformNode
  type: BabylonjsCorePhysicsShapeType | BabylonjsCorePhysicsShape
  _options?: BabylonjsCorePhysicsAggregateParameters
}
export type FiberVRExperienceHelperProps = {
  addFloorMesh?: any
  displayGaze?: boolean
  displayLaserPointer?: boolean
  enableGazeEvenWhenNoPointerLock?: boolean
  enableTeleportation?: any
  exitVROnDoubleTap?: boolean
  gazeTrackerMesh?: BabylonjsCoreMesh
  meshSelectionPredicate?: (mesh: BabylonjsCoreAbstractMesh) => boolean
  onAfterCameraTeleport?: any
  onAfterEnteringVRObservable?: any
  onBeforeCameraTeleport?: any
  onEnteringVRObservable?: any
  onExitingVRObservable?: any
  onNewMeshPicked?: any
  onNewMeshSelected?: any
  onSelectedMeshUnselected?: any
  position?: BabylonjsCoreVector3
  raySelectionPredicate?: (mesh: BabylonjsCoreAbstractMesh) => boolean
  requestPointerLockOnFullScreen?: boolean
  setGazeColor?: any
  setLaserColor?: any
  setLaserLightingState?: any
  teleportationEnabled?: boolean
  teleportationTarget?: BabylonjsCoreMesh
  updateControllerLaserColor?: boolean
  updateGazeTrackerColor?: boolean
  updateGazeTrackerScale?: boolean
  webVROptions?: BabylonjsCoreVRExperienceHelperOptions
  xr?: BabylonjsCoreWebXRDefaultExperience
  xrTestDone?: boolean
} & VRExperienceHelperCustomProps
export type FiberVRExperienceHelperPropsCtor = {
  webVROptions?: BabylonjsCoreVRExperienceHelperOptions
}
export type FiberDynamicTerrainProps = {
  camera?: BabylonjsCoreCamera
  cameraLODCorrection?: number
  computeNormals?: boolean
  initialLOD?: number
  isAlwaysVisible?: boolean
  LODLimits?: number[]
  LODNegativeX?: boolean
  LODNegativeZ?: boolean
  LODPositiveX?: boolean
  LODPositiveZ?: boolean
  mapColors?: number[] | Float32Array
  mapData?: number[] | Float32Array
  mapNormals?: number[] | Float32Array
  mapSubX?: number
  mapSubZ?: number
  mapUVs?: number[] | Float32Array
  name?: string
  precomputeNormalsFromMap?: boolean
  refreshEveryFrame?: boolean
  shiftFromCamera?: { x: number; z: number }
  subToleranceX?: number
  subToleranceZ?: number
  useCustomVertexFunction?: boolean
} & CustomProps
export type FiberDynamicTerrainPropsCtor = {
  name: string
  terrainSub?: number
  mapData?: number[] | Float32Array
  mapSubX?: number
  mapSubZ?: number
  mapUVs?: number[] | Float32Array
  mapColors?: number[] | Float32Array
  mapNormals?: number[] | Float32Array
  invertSide?: boolean
  camera?: BabylonjsCoreCamera
  SPmapData?: number[][] | Float32Array[]
  sps?: BabylonjsCoreSolidParticleSystem
  SPcolorData?: number[][] | Float32Array[]
  SPuvData?: number[][] | Float32Array[]
  intializedCallback?: any
}
export type FiberPointsCloudSystemProps = {
  addPoints?: any
  addSurfacePoints?: any
  addVolumePoints?: any
  computeBoundingBox?: boolean
  computeParticleColor?: boolean
  computeParticleRotation?: boolean
  computeParticleTexture?: boolean
  counter?: number
  isAlwaysVisible?: boolean
  mesh?: BabylonjsCoreMesh
  name?: string
  nbParticles?: number
  particles?: BabylonjsCoreCloudPoint[]
  setParticles?: any
  setVisibilityBox?: any
  vars?: any
} & CustomProps
export type FiberPointsCloudSystemPropsCtor = {
  name: string
  pointSize: number
  updatable?: boolean
}
export type FiberViewportProps = {
  height?: number
  width?: number
  x?: number
  y?: number
} & CustomProps
export type FiberViewportPropsCtor = {
  x: number
  y: number
  width: number
  height: number
}
export type FiberUtilityLayerRendererProps = {
  mainSceneTrackerPredicate?: (mesh: BabylonjsCoreAbstractMesh) => boolean
  onlyCheckPointerDownEvents?: boolean
  onPointerOutObservable?: any
  originalScene?: BabylonjsCoreScene
  pickingEnabled?: boolean
  pickUtilitySceneFirst?: boolean
  processAllEvents?: boolean
  setRenderCamera?: any
  shouldRender?: boolean
  utilityLayerScene?: BabylonjsCoreScene
} & CustomProps
export type FiberUtilityLayerRendererPropsCtor = {
  handleEvents?: boolean
}
export type FiberMaterialPluginBaseProps = {
  addFallbacks?: any
  name?: string
  priority?: number
  registerForExtraEvents?: boolean
  resolveIncludes?: boolean
} & CustomProps
export type FiberMaterialPluginBasePropsCtor = {
  material: BabylonjsCoreMaterial
  name: string
  priority: number
  defines?: { [key: string]: any }
  addToPluginList?: boolean
  enable?: boolean
  resolveIncludes?: boolean
}
export type FiberShadowGeneratorProps = {
  addShadowCaster?: any
  bias?: number
  blurBoxOffset?: number
  blurKernel?: number
  blurScale?: number
  contactHardeningLightSizeUVRatio?: number
  customAllowRendering?: (subMesh: BabylonjsCoreSubMesh) => boolean
  customShaderOptions?: BabylonjsCoreICustomShaderOptions
  darkness?: number
  depthScale?: number
  enableSoftTransparentShadow?: boolean
  filter?: number
  filteringQuality?: number
  forceBackFacesOnly?: boolean
  frustumEdgeFalloff?: number
  id?: string
  mapSize?: number
  normalBias?: number
  onAfterShadowMapRenderMeshObservable?: any
  onAfterShadowMapRenderObservable?: any
  onBeforeShadowMapRenderMeshObservable?: any
  onBeforeShadowMapRenderObservable?: any
  setDarkness?: any
  setTransparencyShadow?: any
  transparencyShadow?: boolean
  useBlurCloseExponentialShadowMap?: boolean
  useBlurExponentialShadowMap?: boolean
  useCloseExponentialShadowMap?: boolean
  useContactHardeningShadow?: boolean
  useExponentialShadowMap?: boolean
  useKernelBlur?: boolean
  useOpacityTextureForTransparentShadow?: boolean
  usePercentageCloserFiltering?: boolean
  usePoissonSampling?: boolean
} & ShadowGeneratorCustomProps
export type FiberShadowGeneratorPropsCtor = {
  mapSize: number
  light?: BabylonjsCoreIShadowLight
  usefullFloatFirst?: boolean
  camera?: BabylonjsCoreCamera
  useRedTextureType?: boolean
  forceGLSL?: boolean
}
export type FiberCascadedShadowGeneratorProps = {
  autoCalcDepthBounds?: boolean
  autoCalcDepthBoundsRefreshRate?: number
  cascadeBlendPercentage?: number
  debug?: boolean
  depthClamp?: boolean
  freezeShadowCastersBoundingInfo?: boolean
  lambda?: number
  numCascades?: number
  penumbraDarkness?: number
  setDepthRenderer?: any
  setMinMaxDistance?: any
  shadowCastersBoundingInfo?: BabylonjsCoreBoundingInfo
  shadowMaxZ?: number
  stabilizeCascades?: boolean
} & FiberShadowGeneratorProps
export type FiberCascadedShadowGeneratorPropsCtor = {
  mapSize: number
  light?: BabylonjsCoreDirectionalLight
  usefulFloatFirst?: boolean
  camera?: BabylonjsCoreCamera
  useRedTextureType?: boolean
}
export type FiberEngineViewProps = {
  camera?: BabylonjsCoreCamera | BabylonjsCoreCamera[]
  clearBeforeCopy?: boolean
  customResize?: (canvas: HTMLCanvasElement) => void
  enabled?: boolean
  target?: HTMLCanvasElement
} & CustomProps
export type FiberEngineViewPropsCtor = {}
export type FiberGizmoManagerProps = {
  additionalTransformNode?: BabylonjsCoreTransformNode
  addToAxisCache?: any
  attachableMeshes?: BabylonjsCoreAbstractMesh[]
  attachableNodes?: BabylonjsCoreNode[]
  boundingBoxDragBehavior?: BabylonjsCoreSixDofDragBehavior
  boundingBoxGizmoEnabled?: boolean
  clearGizmoOnEmptyPointerEvent?: boolean
  coordinatesMode?: BabylonjsCoreGizmoCoordinatesMode
  enableAutoPicking?: boolean
  gizmos?: {
    positionGizmo: BabylonjsCoreIPositionGizmo
    rotationGizmo: BabylonjsCoreIRotationGizmo
    scaleGizmo: BabylonjsCoreIScaleGizmo
    boundingBoxGizmo: BabylonjsCoreIBoundingBoxGizmo
  }
  onAttachedToMeshObservable?: any
  onAttachedToNodeObservable?: any
  positionGizmoEnabled?: boolean
  rotationGizmoEnabled?: boolean
  scaleGizmoEnabled?: boolean
  scaleRatio?: number
  usePointerToAttachGizmos?: boolean
} & CustomProps
export type FiberGizmoManagerPropsCtor = {
  thickness?: number
  utilityLayer?: BabylonjsCoreUtilityLayerRenderer
  keepDepthUtilityLayer?: BabylonjsCoreUtilityLayerRenderer
}
export type FiberLayerProps = {
  alphaBlendingMode?: number
  alphaTest?: boolean
  applyPostProcess?: boolean
  color?: BabylonjsCoreColor4
  isBackground?: boolean
  isEnabled?: boolean
  layerMask?: number
  name?: string
  offset?: BabylonjsCoreVector2
  onAfterRender?: () => void
  onAfterRenderObservable?: any
  onBeforeRender?: () => void
  onBeforeRenderObservable?: any
  onDispose?: () => void
  onDisposeObservable?: any
  renderOnlyInRenderTargetTextures?: boolean
  renderTargetTextures?: BabylonjsCoreRenderTargetTexture[]
  scale?: BabylonjsCoreVector2
  texture?: BabylonjsCoreBaseTexture
} & CustomProps
export type FiberLayerPropsCtor = {
  name: string
  imgUrl: string
  isBackground?: boolean
  color?: BabylonjsCoreColor4
  forceGLSL?: boolean
}
export type FiberImageProcessingConfigurationProps = {
  applyByPostProcess?: boolean
  colorCurves?: BabylonjsCoreColorCurves
  colorCurvesEnabled?: boolean
  colorGradingBGR?: boolean
  colorGradingEnabled?: boolean
  colorGradingTexture?: BabylonjsCoreBaseTexture
  colorGradingWithGreenDepth?: boolean
  contrast?: number
  ditheringEnabled?: boolean
  ditheringIntensity?: number
  exposure?: number
  isEnabled?: boolean
  onUpdateParameters?: any
  skipFinalColorClamp?: boolean
  toneMappingEnabled?: boolean
  toneMappingType?: number
  vignetteBlendMode?: number
  vignetteCameraFov?: number
  vignetteCenterX?: number
  vignetteCenterY?: number
  vignetteCentreX?: number
  vignetteCentreY?: number
  vignetteColor?: BabylonjsCoreColor4
  vignetteEnabled?: boolean
  vignetteStretch?: number
  vignetteWeight?: number
} & CustomProps
export type FiberImageProcessingConfigurationPropsCtor = {}
export type FiberPBRClearCoatConfigurationProps = {
  addFallbacks?: any
  bumpTexture?: BabylonjsCoreBaseTexture
  indexOfRefraction?: number
  intensity?: number
  isEnabled?: boolean
  isTintEnabled?: boolean
  remapF0OnInterfaceChange?: boolean
  roughness?: number
  texture?: BabylonjsCoreBaseTexture
  textureRoughness?: BabylonjsCoreBaseTexture
  tintColor?: BabylonjsCoreColor3
  tintColorAtDistance?: number
  tintTexture?: BabylonjsCoreBaseTexture
  tintThickness?: number
  useRoughnessFromMainTexture?: boolean
} & FiberMaterialPluginBaseProps
export type FiberPBRClearCoatConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPBRIridescenceConfigurationProps = {
  addFallbacks?: any
  indexOfRefraction?: number
  intensity?: number
  isEnabled?: boolean
  maximumThickness?: number
  minimumThickness?: number
  texture?: BabylonjsCoreBaseTexture
  thicknessTexture?: BabylonjsCoreBaseTexture
} & FiberMaterialPluginBaseProps
export type FiberPBRIridescenceConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPBRAnisotropicConfigurationProps = {
  addFallbacks?: any
  angle?: number
  direction?: BabylonjsCoreVector2
  intensity?: number
  isEnabled?: boolean
  legacy?: boolean
  texture?: BabylonjsCoreBaseTexture
} & FiberMaterialPluginBaseProps
export type FiberPBRAnisotropicConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPBRBRDFConfigurationProps = {
  useEnergyConservation?: boolean
  useSmithVisibilityHeightCorrelated?: boolean
  useSpecularGlossinessInputEnergyConservation?: boolean
  useSphericalHarmonics?: boolean
} & FiberMaterialPluginBaseProps
export type FiberPBRBRDFConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPBRSheenConfigurationProps = {
  addFallbacks?: any
  albedoScaling?: boolean
  color?: BabylonjsCoreColor3
  intensity?: number
  isEnabled?: boolean
  linkSheenWithAlbedo?: boolean
  roughness?: number
  texture?: BabylonjsCoreBaseTexture
  textureRoughness?: BabylonjsCoreBaseTexture
  useRoughnessFromMainTexture?: boolean
} & FiberMaterialPluginBaseProps
export type FiberPBRSheenConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPBRSubSurfaceConfigurationProps = {
  addFallbacks?: any
  diffusionDistance?: BabylonjsCoreColor3
  dispersion?: number
  indexOfRefraction?: number
  invertRefractionY?: boolean
  isDispersionEnabled?: boolean
  isRefractionEnabled?: boolean
  isScatteringEnabled?: boolean
  isTranslucencyEnabled?: boolean
  linkRefractionWithTransparency?: boolean
  maximumThickness?: number
  minimumThickness?: number
  refractionIntensity?: number
  refractionIntensityTexture?: BabylonjsCoreBaseTexture
  refractionTexture?: BabylonjsCoreBaseTexture
  scatteringDiffusionProfile?: BabylonjsCoreColor3
  thicknessTexture?: BabylonjsCoreBaseTexture
  tintColor?: BabylonjsCoreColor3
  tintColorAtDistance?: number
  translucencyColor?: BabylonjsCoreColor3
  translucencyColorTexture?: BabylonjsCoreBaseTexture
  translucencyIntensity?: number
  translucencyIntensityTexture?: BabylonjsCoreBaseTexture
  useAlbedoToTintRefraction?: boolean
  useAlbedoToTintTranslucency?: boolean
  useGltfStyleTextures?: boolean
  useMaskFromThicknessTexture?: boolean
  useThicknessAsDepth?: boolean
  volumeIndexOfRefraction?: number
} & FiberMaterialPluginBaseProps
export type FiberPBRSubSurfaceConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial
  addToPluginList?: boolean
}
export type FiberPrePassConfigurationProps = {
  currentViewProjection?: BabylonjsCoreMatrix
  previousBones?: { [index: number]: Float32Array }
  previousViewProjection?: BabylonjsCoreMatrix
  previousWorldMatrices?: { [index: number]: BabylonjsCoreMatrix }
} & CustomProps
export type FiberPrePassConfigurationPropsCtor = {}
export type FiberDetailMapConfigurationProps = {
  bumpLevel?: number
  diffuseBlendLevel?: number
  isEnabled?: boolean
  normalBlendMethod?: number
  roughnessBlendLevel?: number
  texture?: BabylonjsCoreBaseTexture
} & FiberMaterialPluginBaseProps
export type FiberDetailMapConfigurationPropsCtor = {
  material: BabylonjsCorePBRBaseMaterial | BabylonjsCoreStandardMaterial
  addToPluginList?: boolean
}
export type FiberAutoRotationBehaviorProps = {
  idleRotationSpeed?: number
  idleRotationSpinupTime?: number
  idleRotationWaitTime?: number
  targetAlpha?: number
  zoomStopsAnimation?: boolean
} & CustomProps
export type FiberAutoRotationBehaviorPropsCtor = {}
export type FiberBouncingBehaviorProps = {
  autoTransitionRange?: boolean
  lowerRadiusTransitionRange?: number
  transitionDuration?: number
  upperRadiusTransitionRange?: number
} & CustomProps
export type FiberBouncingBehaviorPropsCtor = {}
export type FiberFramingBehaviorProps = {
  autoCorrectCameraLimitsAndSensibility?: boolean
  defaultElevation?: number
  elevationReturnTime?: number
  elevationReturnWaitTime?: number
  framingTime?: number
  mode?: number
  onTargetFramingAnimationEndObservable?: any
  positionScale?: number
  radiusScale?: number
  zoomStopsAnimation?: boolean
} & CustomProps
export type FiberFramingBehaviorPropsCtor = {}
export type FiberAttachToBoxBehaviorProps = {
  distanceAwayFromBottomOfFace?: number
  distanceAwayFromFace?: number
  name?: string
} & CustomProps
export type FiberAttachToBoxBehaviorPropsCtor = {
  _ui: BabylonjsCoreTransformNode
}
export type FiberBaseSixDofDragBehaviorProps = {
  allowMultiPointer?: boolean
  currentDraggingPointerId?: number
  currentDraggingPointerID?: number
  currentDraggingPointerIds?: number[]
  detachCameraControls?: boolean
  draggableMeshes?: BabylonjsCoreAbstractMesh[]
  onDragEndObservable?: any
  onDragObservable?: any
  onDragStartObservable?: any
  zDragFactor?: number
} & CustomProps
export type FiberBaseSixDofDragBehaviorPropsCtor = {}
export type FiberFadeInOutBehaviorProps = {
  delay?: number
  fadeInDelay?: number
  fadeInTime?: number
  fadeOutDelay?: number
  fadeOutTime?: number
} & CustomProps
export type FiberFadeInOutBehaviorPropsCtor = {}
export type FiberFollowBehaviorProps = {
  attachedNode?: BabylonjsCoreTransformNode
  defaultDistance?: number
  fixedVerticalOffset?: number
  followedCamera?: BabylonjsCoreCamera
  ignoreAngleClamp?: boolean
  ignoreCameraPitchAndRoll?: boolean
  ignoreDistanceClamp?: boolean
  interpolatePose?: boolean
  lerpTime?: number
  maximumDistance?: number
  maxViewHorizontalDegrees?: number
  maxViewVerticalDegrees?: number
  minimumDistance?: number
  orientToCameraDeadzoneDegrees?: number
  pitchOffset?: number
  useFixedVerticalOffset?: boolean
  verticalMaxDistance?: number
} & CustomProps
export type FiberFollowBehaviorPropsCtor = {}
export type FiberHandConstraintBehaviorProps = {
  gazeProximityRadius?: number
  handConstraintVisibility?: BabylonjsCoreHandConstraintVisibility
  handedness?: XRHandedness
  lerpTime?: number
  nodeOrientationMode?: BabylonjsCoreHandConstraintOrientation
  palmUpStrictness?: number
  targetOffset?: number
  targetZone?: BabylonjsCoreHandConstraintZone
  zoneOrientationMode?: BabylonjsCoreHandConstraintOrientation
} & CustomProps
export type FiberHandConstraintBehaviorPropsCtor = {}
export type FiberMultiPointerScaleBehaviorProps = {} & CustomProps
export type FiberMultiPointerScaleBehaviorPropsCtor = {}
export type FiberPointerDragBehaviorProps = {
  attachedNode?: BabylonjsCoreAbstractMesh
  currentDraggingPointerId?: number
  currentDraggingPointerID?: number
  detachCameraControls?: boolean
  dragButtons?: number[]
  dragDeltaRatio?: number
  dragging?: boolean
  enabled?: boolean
  lastDragPosition?: BabylonjsCoreVector3
  'lastDragPosition-x'?: number
  'lastDragPosition-y'?: number
  'lastDragPosition-z'?: number
  maxDragAngle?: number
  moveAttached?: boolean
  onDragEndObservable?: any
  onDragObservable?: any
  onDragStartObservable?: any
  onEnabledObservable?: any
  options?: { dragAxis?: BabylonjsCoreVector3; dragPlaneNormal?: BabylonjsCoreVector3 }
  startAndReleaseDragOnPointerEvents?: boolean
  updateDragPlane?: boolean
  useObjectOrientationForDragging?: boolean
  validateDrag?: (target: BabylonjsCoreVector3) => boolean
} & CustomProps
export type FiberPointerDragBehaviorPropsCtor = {
  dragAxis?: BabylonjsCoreVector3
  dragPlaneNormal?: BabylonjsCoreVector3
}
export type FiberSixDofDragBehaviorProps = {
  disableMovement?: boolean
  dragDeltaRatio?: number
  faceCameraOnDragStart?: boolean
  onPositionChangedObservable?: any
  rotateAroundYOnly?: boolean
  rotateDraggedObject?: boolean
  rotateWithMotionController?: boolean
} & FiberBaseSixDofDragBehaviorProps
export type FiberSixDofDragBehaviorPropsCtor = {}
export type FiberSurfaceMagnetismBehaviorProps = {
  enabled?: boolean
  hitNormalOffset?: number
  interpolatePose?: boolean
  keepOrientationVertical?: boolean
  lerpTime?: number
  maxStickingDistance?: number
  meshes?: BabylonjsCoreAbstractMesh[]
} & CustomProps
export type FiberSurfaceMagnetismBehaviorPropsCtor = {}
export type FiberDefaultBehaviorProps = {
  attachedNode?: BabylonjsCoreMesh
  followBehaviorEnabled?: boolean
  sixDofDragBehaviorEnabled?: boolean
  surfaceMagnetismBehaviorEnabled?: boolean
} & CustomProps
export type FiberDefaultBehaviorPropsCtor = {}
export type FiberSceneProps = {
  actionManager?: BabylonjsCoreAbstractActionManager
  actionManagers?: BabylonjsCoreAbstractActionManager[]
  activeCamera?: BabylonjsCoreCamera
  activeCameras?: BabylonjsCoreCamera[]
  addActionManager?: any
  addAnimation?: any
  addAnimationGroup?: any
  addCamera?: any
  addExternalData?: any
  addGeometry?: any
  addLight?: any
  addMaterial?: any
  addMesh?: any
  addMorphTargetManager?: any
  addMultiMaterial?: any
  addParticleSystem?: any
  addPendingData?: any
  addSkeleton?: any
  addTexture?: any
  addTransformNode?: any
  afterCameraRender?: () => void
  afterRender?: () => void
  ambientColor?: BabylonjsCoreColor3
  animationGroups?: BabylonjsCoreAnimationGroup[]
  animationPropertiesOverride?: BabylonjsCoreAnimationPropertiesOverride
  animations?: BabylonjsCoreAnimation[]
  animationsEnabled?: boolean
  animationTimeScale?: number
  autoClear?: boolean
  autoClearDepthAndStencil?: boolean
  beforeCameraRender?: () => void
  beforeRender?: () => void
  blockfreeActiveMeshesAndRenderingGroups?: boolean
  blockMaterialDirtyMechanism?: boolean
  cameras?: BabylonjsCoreCamera[]
  cameraToUseForPointers?: BabylonjsCoreCamera
  clearColor?: BabylonjsCoreColor4
  clipPlane?: BabylonjsCorePlane
  clipPlane2?: BabylonjsCorePlane
  clipPlane3?: BabylonjsCorePlane
  clipPlane4?: BabylonjsCorePlane
  clipPlane5?: BabylonjsCorePlane
  clipPlane6?: BabylonjsCorePlane
  collisionsEnabled?: boolean
  constantlyUpdateMeshUnderPointer?: boolean
  customLODSelector?: (
    mesh: BabylonjsCoreAbstractMesh,
    camera: BabylonjsCoreCamera
  ) => BabylonjsCoreAbstractMesh
  customRenderFunction?: () => void
  customRenderTargets?: BabylonjsCoreRenderTargetTexture[]
  defaultCursor?: string
  defaultMaterial?: BabylonjsCoreMaterial
  deleteCompoundImpostor?: any
  deltaTime?: number
  disableOfflineSupportExceptionRules?: RegExp[]
  dispatchAllSubMeshesOfActiveMeshes?: boolean
  doNotHandleCursors?: boolean
  DoubleClickDelay?: number
  DragMovementThreshold?: number
  dumpNextRenderTargets?: boolean
  effectLayers?: BabylonjsCoreEffectLayer[]
  enablePhysics?: any
  environmentBRDFTexture?: BabylonjsCoreBaseTexture
  environmentIntensity?: number
  environmentTexture?: BabylonjsCoreBaseTexture
  ExclusiveDoubleClickMode?: boolean
  fogColor?: BabylonjsCoreColor3
  fogDensity?: number
  fogEnabled?: boolean
  fogEnd?: number
  fogMode?: number
  fogStart?: number
  forcePointsCloud?: boolean
  forceWireframe?: boolean
  geometries?: BabylonjsCoreGeometry[]
  getActiveMeshCandidates?: () => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh>
  getActiveSubMeshCandidates?: (
    mesh: BabylonjsCoreAbstractMesh
  ) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>
  getCollidingSubMeshCandidates?: (
    mesh: BabylonjsCoreAbstractMesh,
    collider: BabylonjsCoreCollider
  ) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>
  getDeterministicFrameTime?: () => number
  getIntersectingSubMeshCandidates?: (
    mesh: BabylonjsCoreAbstractMesh,
    localRay: BabylonjsCoreRay
  ) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>
  gravity?: BabylonjsCoreVector3
  'gravity-x'?: number
  'gravity-y'?: number
  'gravity-z'?: number
  hoverCursor?: string
  importedMeshesFiles?: string[]
  layers?: BabylonjsCoreLayer[]
  lensFlaresEnabled?: boolean
  lensFlareSystems?: BabylonjsCoreLensFlareSystem[]
  lights?: BabylonjsCoreLight[]
  lightsEnabled?: boolean
  loadingPluginName?: string
  LongPressDelay?: number
  materials?: BabylonjsCoreMaterial[]
  meshes?: BabylonjsCoreAbstractMesh[]
  metadata?: any
  morphTargetManagers?: BabylonjsCoreMorphTargetManager[]
  multiMaterials?: BabylonjsCoreMultiMaterial[]
  needsPreviousWorldMatrices?: boolean
  offlineProvider?: BabylonjsCoreIOfflineProvider
  onActiveCameraChanged?: any
  onActiveCamerasChanged?: any
  onAfterActiveMeshesEvaluationObservable?: any
  onAfterAnimationsObservable?: any
  onAfterCameraRenderObservable?: any
  onAfterDrawPhaseObservable?: any
  onAfterParticlesRenderingObservable?: any
  onAfterPhysicsObservable?: any
  onAfterRenderCameraObservable?: any
  onAfterRenderingGroupObservable?: any
  onAfterRenderObservable?: any
  onAfterRenderTargetsRenderObservable?: any
  onAfterStepObservable?: any
  onAnimationFileImportedObservable?: any
  onBeforeActiveMeshesEvaluationObservable?: any
  onBeforeAnimationsObservable?: any
  onBeforeCameraRenderObservable?: any
  onBeforeDrawPhaseObservable?: any
  onBeforeParticlesRenderingObservable?: any
  onBeforePhysicsObservable?: any
  onBeforeRenderingGroupObservable?: any
  onBeforeRenderObservable?: any
  onBeforeRenderTargetsRenderObservable?: any
  onBeforeStepObservable?: any
  onCameraRemovedObservable?: any
  onDataLoadedObservable?: any
  onDispose?: () => void
  onDisposeObservable?: any
  onGeometryRemovedObservable?: any
  onKeyboardObservable?: any
  onLightRemovedObservable?: any
  onMaterialRemovedObservable?: any
  onMeshImportedObservable?: any
  onMeshRemovedObservable?: any
  onMultiMaterialRemovedObservable?: any
  onNewCameraAddedObservable?: any
  onNewGeometryAddedObservable?: any
  onNewLightAddedObservable?: any
  onNewMaterialAddedObservable?: any
  onNewMeshAddedObservable?: any
  onNewMultiMaterialAddedObservable?: any
  onNewSkeletonAddedObservable?: any
  onNewTextureAddedObservable?: any
  onNewTransformNodeAddedObservable?: any
  onPointerDown?: (
    evt: BabylonjsCoreIPointerEvent,
    pickInfo: BabylonjsCorePickingInfo,
    type: BabylonjsCorePointerEventTypes
  ) => void
  onPointerMove?: (
    evt: BabylonjsCoreIPointerEvent,
    pickInfo: BabylonjsCorePickingInfo,
    type: BabylonjsCorePointerEventTypes
  ) => void
  onPointerObservable?: any
  onPointerPick?: (evt: BabylonjsCoreIPointerEvent, pickInfo: BabylonjsCorePickingInfo) => void
  onPointerUp?: (
    evt: BabylonjsCoreIPointerEvent,
    pickInfo: BabylonjsCorePickingInfo,
    type: BabylonjsCorePointerEventTypes
  ) => void
  onPreKeyboardObservable?: any
  onPrePointerObservable?: any
  onReadyObservable?: any
  onScenePerformancePriorityChangedObservable?: any
  onSkeletonRemovedObservable?: any
  onTextureRemovedObservable?: any
  onTransformNodeRemovedObservable?: any
  particlesEnabled?: boolean
  particleSystems?: BabylonjsCoreIParticleSystem[]
  performancePriority?: BabylonjsCoreScenePerformancePriority
  physicsEnabled?: boolean
  pointerDownFastCheck?: boolean
  pointerDownPredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean
  pointerDownTrianglePredicate?: (
    p0: BabylonjsCoreVector3,
    p1: BabylonjsCoreVector3,
    p2: BabylonjsCoreVector3,
    ray: BabylonjsCoreRay
  ) => boolean
  pointerMoveFastCheck?: boolean
  pointerMovePredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean
  pointerMoveTrianglePredicate?: (
    p0: BabylonjsCoreVector3,
    p1: BabylonjsCoreVector3,
    p2: BabylonjsCoreVector3,
    ray: BabylonjsCoreRay
  ) => boolean
  pointerUpFastCheck?: boolean
  pointerUpPredicate?: (Mesh: BabylonjsCoreAbstractMesh) => boolean
  pointerUpTrianglePredicate?: (
    p0: BabylonjsCoreVector3,
    p1: BabylonjsCoreVector3,
    p2: BabylonjsCoreVector3,
    ray: BabylonjsCoreRay
  ) => boolean
  pointerX?: number
  pointerY?: number
  postProcesses?: BabylonjsCorePostProcess[]
  postProcessesEnabled?: boolean
  postProcessManager?: BabylonjsCorePostProcessManager
  preventDefaultOnPointerDown?: boolean
  preventDefaultOnPointerUp?: boolean
  probesEnabled?: boolean
  proceduralTextures?: BabylonjsCoreProceduralTexture[]
  proceduralTexturesEnabled?: boolean
  renderTargetsEnabled?: boolean
  requireLightSorting?: boolean
  reservedDataStore?: any
  rootNodes?: BabylonjsCoreNode[]
  setActiveCameraById?: any
  setActiveCameraByID?: any
  setActiveCameraByName?: any
  setPointerOverMesh?: any
  setRenderingAutoClearDepthStencil?: any
  setRenderingOrder?: any
  setSceneUniformBuffer?: any
  setStepId?: any
  setTransformMatrix?: any
  shadowsEnabled?: boolean
  skeletons?: BabylonjsCoreSkeleton[]
  skeletonsEnabled?: boolean
  skipFrustumClipping?: boolean
  skipPointerDownPicking?: boolean
  skipPointerMovePicking?: boolean
  skipPointerUpPicking?: boolean
  sounds?: BabylonjsCoreSound[]
  spritesEnabled?: boolean
  textures?: BabylonjsCoreBaseTexture[]
  texturesEnabled?: boolean
  transformNodes?: BabylonjsCoreTransformNode[]
  useConstantAnimationDeltaTime?: boolean
  useDelayedTextureLoading?: boolean
  useRightHandedSystem?: boolean
} & CustomProps
