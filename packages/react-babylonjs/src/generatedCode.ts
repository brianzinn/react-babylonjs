import { AbstractScene as BabylonjsCoreAbstractScene } from '@babylonjs/core/abstractScene.js'
import { Sound as BabylonjsCoreSound } from '@babylonjs/core/Audio/sound.js'
import { AutoRotationBehavior as BabylonjsCoreAutoRotationBehavior } from '@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js'
import { BouncingBehavior as BabylonjsCoreBouncingBehavior } from '@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js'
import { FramingBehavior as BabylonjsCoreFramingBehavior } from '@babylonjs/core/Behaviors/Cameras/framingBehavior.js'
import { AttachToBoxBehavior as BabylonjsCoreAttachToBoxBehavior } from '@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior.js'
import { BaseSixDofDragBehavior as BabylonjsCoreBaseSixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js'
import { FadeInOutBehavior as BabylonjsCoreFadeInOutBehavior } from '@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior.js'
import { FollowBehavior as BabylonjsCoreFollowBehavior } from '@babylonjs/core/Behaviors/Meshes/followBehavior.js'
import { HandConstraintBehavior as BabylonjsCoreHandConstraintBehavior } from '@babylonjs/core/Behaviors/Meshes/handConstraintBehavior.js'
import { MultiPointerScaleBehavior as BabylonjsCoreMultiPointerScaleBehavior } from '@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior.js'
import { PointerDragBehavior as BabylonjsCorePointerDragBehavior } from '@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js'
import { SixDofDragBehavior as BabylonjsCoreSixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js'
import { SurfaceMagnetismBehavior as BabylonjsCoreSurfaceMagnetismBehavior } from '@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior.js'
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera.js'
import { Camera as BabylonjsCoreCamera } from '@babylonjs/core/Cameras/camera.js'
import { DeviceOrientationCamera as BabylonjsCoreDeviceOrientationCamera } from '@babylonjs/core/Cameras/deviceOrientationCamera.js'
import { FlyCamera as BabylonjsCoreFlyCamera } from '@babylonjs/core/Cameras/flyCamera.js'
import {
  ArcFollowCamera as BabylonjsCoreArcFollowCamera,
  FollowCamera as BabylonjsCoreFollowCamera,
} from '@babylonjs/core/Cameras/followCamera.js'
import { FreeCamera as BabylonjsCoreFreeCamera } from '@babylonjs/core/Cameras/freeCamera.js'
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
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera.js'
import { VRDeviceOrientationFreeCamera as BabylonjsCoreVRDeviceOrientationFreeCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera.js'
import { VRDeviceOrientationGamepadCamera as BabylonjsCoreVRDeviceOrientationGamepadCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera.js'
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper } from '@babylonjs/core/Cameras/VR/vrExperienceHelper.js'
import { EngineView as BabylonjsCoreEngineView } from '@babylonjs/core/Engines/AbstractEngine/abstractEngine.views.js'
import { AxisDragGizmo as BabylonjsCoreAxisDragGizmo } from '@babylonjs/core/Gizmos/axisDragGizmo.js'
import { AxisScaleGizmo as BabylonjsCoreAxisScaleGizmo } from '@babylonjs/core/Gizmos/axisScaleGizmo.js'
import { BoundingBoxGizmo as BabylonjsCoreBoundingBoxGizmo } from '@babylonjs/core/Gizmos/boundingBoxGizmo.js'
import { CameraGizmo as BabylonjsCoreCameraGizmo } from '@babylonjs/core/Gizmos/cameraGizmo.js'
import { Gizmo as BabylonjsCoreGizmo } from '@babylonjs/core/Gizmos/gizmo.js'
import { GizmoManager as BabylonjsCoreGizmoManager } from '@babylonjs/core/Gizmos/gizmoManager.js'
import { LightGizmo as BabylonjsCoreLightGizmo } from '@babylonjs/core/Gizmos/lightGizmo.js'
import { PlaneDragGizmo as BabylonjsCorePlaneDragGizmo } from '@babylonjs/core/Gizmos/planeDragGizmo.js'
import { PlaneRotationGizmo as BabylonjsCorePlaneRotationGizmo } from '@babylonjs/core/Gizmos/planeRotationGizmo.js'
import { PositionGizmo as BabylonjsCorePositionGizmo } from '@babylonjs/core/Gizmos/positionGizmo.js'
import { RotationGizmo as BabylonjsCoreRotationGizmo } from '@babylonjs/core/Gizmos/rotationGizmo.js'
import { ScaleGizmo as BabylonjsCoreScaleGizmo } from '@babylonjs/core/Gizmos/scaleGizmo.js'
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper.js'
import { EffectLayer as BabylonjsCoreEffectLayer } from '@babylonjs/core/Layers/effectLayer.js'
import { GlowLayer as BabylonjsCoreGlowLayer } from '@babylonjs/core/Layers/glowLayer.js'
import { HighlightLayer as BabylonjsCoreHighlightLayer } from '@babylonjs/core/Layers/highlightLayer.js'
import { Layer as BabylonjsCoreLayer } from '@babylonjs/core/Layers/layer.js'
import { DirectionalLight as BabylonjsCoreDirectionalLight } from '@babylonjs/core/Lights/directionalLight.js'
import { HemisphericLight as BabylonjsCoreHemisphericLight } from '@babylonjs/core/Lights/hemisphericLight.js'
import { Light as BabylonjsCoreLight } from '@babylonjs/core/Lights/light.js'
import { PointLight as BabylonjsCorePointLight } from '@babylonjs/core/Lights/pointLight.js'
import { ShadowLight as BabylonjsCoreShadowLight } from '@babylonjs/core/Lights/shadowLight.js'
import { CascadedShadowGenerator as BabylonjsCoreCascadedShadowGenerator } from '@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js'
import { ShadowGenerator as BabylonjsCoreShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator.js'
import { SpotLight as BabylonjsCoreSpotLight } from '@babylonjs/core/Lights/spotLight.js'
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial.js'
import { GaussianSplattingMaterial as BabylonjsCoreGaussianSplattingMaterial } from '@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial.js'
import { GreasedLineSimpleMaterial as BabylonjsCoreGreasedLineSimpleMaterial } from '@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial.js'
import { ImageProcessingConfiguration as BabylonjsCoreImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration.js'
import { DetailMapConfiguration as BabylonjsCoreDetailMapConfiguration } from '@babylonjs/core/Materials/material.detailMapConfiguration.js'
import { Material as BabylonjsCoreMaterial } from '@babylonjs/core/Materials/material.js'
import { MaterialPluginBase as BabylonjsCoreMaterialPluginBase } from '@babylonjs/core/Materials/materialPluginBase.js'
import { MultiMaterial as BabylonjsCoreMultiMaterial } from '@babylonjs/core/Materials/multiMaterial.js'
import { NodeMaterial as BabylonjsCoreNodeMaterial } from '@babylonjs/core/Materials/Node/nodeMaterial.js'
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
import { ShaderMaterial as BabylonjsCoreShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial.js'
import { StandardMaterial as BabylonjsCoreStandardMaterial } from '@babylonjs/core/Materials/standardMaterial.js'
import { BaseTexture as BabylonjsCoreBaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture.js'
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from '@babylonjs/core/Materials/Textures/colorGradingTexture.js'
import { CubeTexture as BabylonjsCoreCubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture.js'
import { DynamicTexture as BabylonjsCoreDynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture.js'
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from '@babylonjs/core/Materials/Textures/equiRectangularCubeTexture.js'
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from '@babylonjs/core/Materials/Textures/hdrCubeTexture.js'
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture } from '@babylonjs/core/Materials/Textures/htmlElementTexture.js'
import { MirrorTexture as BabylonjsCoreMirrorTexture } from '@babylonjs/core/Materials/Textures/mirrorTexture.js'
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget } from '@babylonjs/core/Materials/Textures/multiRenderTarget.js'
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from '@babylonjs/core/Materials/Textures/MultiviewRenderTarget.js'
import { PrePassRenderTarget as BabylonjsCorePrePassRenderTarget } from '@babylonjs/core/Materials/Textures/prePassRenderTarget.js'
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture.js'
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture.js'
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js'
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from '@babylonjs/core/Materials/Textures/rawCubeTexture.js'
import { RawTexture as BabylonjsCoreRawTexture } from '@babylonjs/core/Materials/Textures/rawTexture.js'
import { RawTexture2DArray as BabylonjsCoreRawTexture2DArray } from '@babylonjs/core/Materials/Textures/rawTexture2DArray.js'
import { RawTexture3D as BabylonjsCoreRawTexture3D } from '@babylonjs/core/Materials/Textures/rawTexture3D.js'
import { RefractionTexture as BabylonjsCoreRefractionTexture } from '@babylonjs/core/Materials/Textures/refractionTexture.js'
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from '@babylonjs/core/Materials/Textures/renderTargetTexture.js'
import { Texture as BabylonjsCoreTexture } from '@babylonjs/core/Materials/Textures/texture.js'
import { ThinRenderTargetTexture as BabylonjsCoreThinRenderTargetTexture } from '@babylonjs/core/Materials/Textures/thinRenderTargetTexture.js'
import { ThinTexture as BabylonjsCoreThinTexture } from '@babylonjs/core/Materials/Textures/thinTexture.js'
import { VideoTexture as BabylonjsCoreVideoTexture } from '@babylonjs/core/Materials/Textures/videoTexture.js'
import { Viewport as BabylonjsCoreViewport } from '@babylonjs/core/Maths/math.viewport.js'
import { AbstractMesh as BabylonjsCoreAbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import { GaussianSplattingMesh as BabylonjsCoreGaussianSplattingMesh } from '@babylonjs/core/Meshes/GaussianSplatting/gaussianSplattingMesh.js'
import { GoldbergMesh as BabylonjsCoreGoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh.js'
import { GreasedLineBaseMesh as BabylonjsCoreGreasedLineBaseMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineBaseMesh.js'
import { GreasedLineMesh as BabylonjsCoreGreasedLineMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineMesh.js'
import { GreasedLineRibbonMesh as BabylonjsCoreGreasedLineRibbonMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh.js'
import { GroundMesh as BabylonjsCoreGroundMesh } from '@babylonjs/core/Meshes/groundMesh.js'
import { InstancedMesh as BabylonjsCoreInstancedMesh } from '@babylonjs/core/Meshes/instancedMesh.js'
import {
  InstancedLinesMesh as BabylonjsCoreInstancedLinesMesh,
  LinesMesh as BabylonjsCoreLinesMesh,
} from '@babylonjs/core/Meshes/linesMesh.js'
import { Mesh as BabylonjsCoreMesh } from '@babylonjs/core/Meshes/mesh.js'
import { MeshBuilder as BabylonjsCoreMeshBuilder } from '@babylonjs/core/Meshes/meshBuilder.js'
import { TrailMesh as BabylonjsCoreTrailMesh } from '@babylonjs/core/Meshes/trailMesh.js'
import { TransformNode as BabylonjsCoreTransformNode } from '@babylonjs/core/Meshes/transformNode.js'
import { Node as BabylonjsCoreNode } from '@babylonjs/core/node.js'
import { PointsCloudSystem as BabylonjsCorePointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem.js'
import { PhysicsImpostor as BabylonjsCorePhysicsImpostor } from '@babylonjs/core/Physics/v1/physicsImpostor.js'
import { PhysicsAggregate as BabylonjsCorePhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate.js'
import { AnaglyphPostProcess as BabylonjsCoreAnaglyphPostProcess } from '@babylonjs/core/PostProcesses/anaglyphPostProcess.js'
import { BlackAndWhitePostProcess as BabylonjsCoreBlackAndWhitePostProcess } from '@babylonjs/core/PostProcesses/blackAndWhitePostProcess.js'
import { BloomMergePostProcess as BabylonjsCoreBloomMergePostProcess } from '@babylonjs/core/PostProcesses/bloomMergePostProcess.js'
import { BlurPostProcess as BabylonjsCoreBlurPostProcess } from '@babylonjs/core/PostProcesses/blurPostProcess.js'
import { ChromaticAberrationPostProcess as BabylonjsCoreChromaticAberrationPostProcess } from '@babylonjs/core/PostProcesses/chromaticAberrationPostProcess.js'
import { CircleOfConfusionPostProcess as BabylonjsCoreCircleOfConfusionPostProcess } from '@babylonjs/core/PostProcesses/circleOfConfusionPostProcess.js'
import { ColorCorrectionPostProcess as BabylonjsCoreColorCorrectionPostProcess } from '@babylonjs/core/PostProcesses/colorCorrectionPostProcess.js'
import { ConvolutionPostProcess as BabylonjsCoreConvolutionPostProcess } from '@babylonjs/core/PostProcesses/convolutionPostProcess.js'
import { DepthOfFieldBlurPostProcess as BabylonjsCoreDepthOfFieldBlurPostProcess } from '@babylonjs/core/PostProcesses/depthOfFieldBlurPostProcess.js'
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
import { PostProcess as BabylonjsCorePostProcess } from '@babylonjs/core/PostProcesses/postProcess.js'
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
import { TonemapPostProcess as BabylonjsCoreTonemapPostProcess } from '@babylonjs/core/PostProcesses/tonemapPostProcess.js'
import { VolumetricLightScatteringPostProcess as BabylonjsCoreVolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess.js'
import { VRDistortionCorrectionPostProcess as BabylonjsCoreVRDistortionCorrectionPostProcess } from '@babylonjs/core/PostProcesses/vrDistortionCorrectionPostProcess.js'
import { VRMultiviewToSingleviewPostProcess as BabylonjsCoreVRMultiviewToSingleviewPostProcess } from '@babylonjs/core/PostProcesses/vrMultiviewToSingleviewPostProcess.js'
import { UtilityLayerRenderer as BabylonjsCoreUtilityLayerRenderer } from '@babylonjs/core/Rendering/utilityLayerRenderer.js'
import { Scene as BabylonjsCoreScene } from '@babylonjs/core/scene.js'
import { Sprite as BabylonjsCoreSprite } from '@babylonjs/core/Sprites/sprite.js'
import { SpriteManager as BabylonjsCoreSpriteManager } from '@babylonjs/core/Sprites/spriteManager.js'
import { SpritePackedManager as BabylonjsCoreSpritePackedManager } from '@babylonjs/core/Sprites/spritePackedManager.js'
import { ThinSprite as BabylonjsCoreThinSprite } from '@babylonjs/core/Sprites/thinSprite.js'
import { XRSpaceWarpRenderTarget as BabylonjsCoreXRSpaceWarpRenderTarget } from '@babylonjs/core/XR/features/WebXRSpaceWarp.js'
import { WebXRCamera as BabylonjsCoreWebXRCamera } from '@babylonjs/core/XR/webXRCamera.js'
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture.js'
import { Button as BabylonjsGuiButton } from '@babylonjs/gui/2D/controls/button.js'
import { Checkbox as BabylonjsGuiCheckbox } from '@babylonjs/gui/2D/controls/checkbox.js'
import { ColorPicker as BabylonjsGuiColorPicker } from '@babylonjs/gui/2D/controls/colorpicker.js'
import { Container as BabylonjsGuiContainer } from '@babylonjs/gui/2D/controls/container.js'
import { Control as BabylonjsGuiControl } from '@babylonjs/gui/2D/controls/control.js'
import { DisplayGrid as BabylonjsGuiDisplayGrid } from '@babylonjs/gui/2D/controls/displayGrid.js'
import { Ellipse as BabylonjsGuiEllipse } from '@babylonjs/gui/2D/controls/ellipse.js'
import { FocusableButton as BabylonjsGuiFocusableButton } from '@babylonjs/gui/2D/controls/focusableButton.js'
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
import { SelectionPanel as BabylonjsGuiSelectionPanel } from '@babylonjs/gui/2D/controls/selector.js'
import { BaseSlider as BabylonjsGuiBaseSlider } from '@babylonjs/gui/2D/controls/sliders/baseSlider.js'
import { ImageBasedSlider as BabylonjsGuiImageBasedSlider } from '@babylonjs/gui/2D/controls/sliders/imageBasedSlider.js'
import { ImageScrollBar as BabylonjsGuiImageScrollBar } from '@babylonjs/gui/2D/controls/sliders/imageScrollBar.js'
import { ScrollBar as BabylonjsGuiScrollBar } from '@babylonjs/gui/2D/controls/sliders/scrollBar.js'
import { Slider as BabylonjsGuiSlider } from '@babylonjs/gui/2D/controls/sliders/slider.js'
import { StackPanel as BabylonjsGuiStackPanel } from '@babylonjs/gui/2D/controls/stackPanel.js'
import { TextBlock as BabylonjsGuiTextBlock } from '@babylonjs/gui/2D/controls/textBlock.js'
import { ToggleButton as BabylonjsGuiToggleButton } from '@babylonjs/gui/2D/controls/toggleButton.js'
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard.js'
import { DefaultBehavior as BabylonjsGuiDefaultBehavior } from '@babylonjs/gui/3D/behaviors/defaultBehavior.js'
import { AbstractButton3D as BabylonjsGuiAbstractButton3D } from '@babylonjs/gui/3D/controls/abstractButton3D.js'
import { Button3D as BabylonjsGuiButton3D } from '@babylonjs/gui/3D/controls/button3D.js'
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
import { CreatedInstanceMetadata } from './CreatedInstance'
import { DynamicTerrain as ExtensionsDynamicTerrain } from './extensions/DynamicTerrain'
import {
  FiberAbstractButton3DProps,
  FiberAbstractMeshProps,
  FiberAdvancedDynamicTextureProps,
  FiberAnaglyphArcRotateCameraProps,
  FiberAnaglyphFreeCameraProps,
  FiberAnaglyphGamepadCameraProps,
  FiberAnaglyphPostProcessProps,
  FiberAnaglyphUniversalCameraProps,
  FiberArcFollowCameraProps,
  FiberArcRotateCameraProps,
  FiberAttachToBoxBehaviorProps,
  FiberAutoRotationBehaviorProps,
  FiberAxisDragGizmoProps,
  FiberAxisScaleGizmoProps,
  FiberBackgroundMaterialProps,
  FiberBaseSixDofDragBehaviorProps,
  FiberBaseSliderProps,
  FiberBaseTextureProps,
  FiberBlackAndWhitePostProcessProps,
  FiberBloomMergePostProcessProps,
  FiberBlurPostProcessProps,
  FiberBouncingBehaviorProps,
  FiberBoundingBoxGizmoProps,
  FiberButton3DProps,
  FiberButtonProps,
  FiberCameraGizmoProps,
  FiberCameraProps,
  FiberCascadedShadowGeneratorProps,
  FiberCheckboxProps,
  FiberChromaticAberrationPostProcessProps,
  FiberCircleOfConfusionPostProcessProps,
  FiberColorCorrectionPostProcessProps,
  FiberColorGradingTextureProps,
  FiberColorPickerProps,
  FiberContainer3DProps,
  FiberContainerProps,
  FiberContentDisplay3DProps,
  FiberControl3DProps,
  FiberControlProps,
  FiberConvolutionPostProcessProps,
  FiberCubeTextureProps,
  FiberCustomProceduralTextureProps,
  FiberCylinderPanelProps,
  FiberDefaultBehaviorProps,
  FiberDefaultRenderingPipelineProps,
  FiberDepthOfFieldBlurPostProcessProps,
  FiberDepthOfFieldMergePostProcessProps,
  FiberDetailMapConfigurationProps,
  FiberDeviceOrientationCameraProps,
  FiberDirectionalLightProps,
  FiberDisplayGridProps,
  FiberDisplayPassPostProcessProps,
  FiberDynamicTerrainProps,
  FiberDynamicTextureProps,
  FiberEffectLayerProps,
  FiberEllipseProps,
  FiberEngineViewProps,
  FiberEnvironmentHelperProps,
  FiberEquiRectangularCubeTextureProps,
  FiberExtractHighlightsPostProcessProps,
  FiberFadeInOutBehaviorProps,
  FiberFilterPostProcessProps,
  FiberFluentBackplateMaterialProps,
  FiberFluentButtonMaterialProps,
  FiberFluentMaterialProps,
  FiberFlyCameraProps,
  FiberFocusableButtonProps,
  FiberFollowBehaviorProps,
  FiberFollowCameraProps,
  FiberFramingBehaviorProps,
  FiberFreeCameraProps,
  FiberFxaaPostProcessProps,
  FiberGamepadCameraProps,
  FiberGaussianSplattingMaterialProps,
  FiberGaussianSplattingMeshProps,
  FiberGizmoManagerProps,
  FiberGizmoProps,
  FiberGlowLayerProps,
  FiberGoldbergMeshProps,
  FiberGrainPostProcessProps,
  FiberGreasedLineBaseMeshProps,
  FiberGreasedLineMeshProps,
  FiberGreasedLineRibbonMeshProps,
  FiberGreasedLineSimpleMaterialProps,
  FiberGridProps,
  FiberGroundMeshProps,
  FiberGUI3DManagerProps,
  FiberHandConstraintBehaviorProps,
  FiberHandleMaterialProps,
  FiberHandMenuProps,
  FiberHDRCubeTextureProps,
  FiberHemisphericLightProps,
  FiberHighlightLayerProps,
  FiberHighlightsPostProcessProps,
  FiberHolographicBackplateProps,
  FiberHolographicButtonProps,
  FiberHolographicSlateProps,
  FiberHtmlElementTextureProps,
  FiberImageBasedSliderProps,
  FiberImageProcessingConfigurationProps,
  FiberImageProcessingPostProcessProps,
  FiberImageProps,
  FiberImageScrollBarProps,
  FiberInputPasswordProps,
  FiberInputTextAreaProps,
  FiberInputTextProps,
  FiberInstancedLinesMeshProps,
  FiberInstancedMeshProps,
  FiberLayerProps,
  FiberLensRenderingPipelineProps,
  FiberLightGizmoProps,
  FiberLightProps,
  FiberLineProps,
  FiberLinesMeshProps,
  FiberMaterialPluginBaseProps,
  FiberMaterialProps,
  FiberMeshButton3DProps,
  FiberMeshProps,
  FiberMirrorTextureProps,
  FiberMotionBlurPostProcessProps,
  FiberMRDLBackglowMaterialProps,
  FiberMRDLBackplateMaterialProps,
  FiberMRDLFrontplateMaterialProps,
  FiberMRDLInnerquadMaterialProps,
  FiberMRDLSliderBarMaterialProps,
  FiberMRDLSliderThumbMaterialProps,
  FiberMultiLineProps,
  FiberMultiMaterialProps,
  FiberMultiPointerScaleBehaviorProps,
  FiberMultiRenderTargetProps,
  FiberMultiviewRenderTargetProps,
  FiberNearMenuProps,
  FiberNodeMaterialProps,
  FiberNodeProps,
  FiberNoiseProceduralTextureProps,
  FiberOcclusionMaterialProps,
  FiberPassCubePostProcessProps,
  FiberPassPostProcessProps,
  FiberPBRAnisotropicConfigurationProps,
  FiberPBRBaseMaterialProps,
  FiberPBRBaseSimpleMaterialProps,
  FiberPBRBRDFConfigurationProps,
  FiberPBRClearCoatConfigurationProps,
  FiberPBRIridescenceConfigurationProps,
  FiberPBRMaterialProps,
  FiberPBRMetallicRoughnessMaterialProps,
  FiberPBRSheenConfigurationProps,
  FiberPBRSpecularGlossinessMaterialProps,
  FiberPBRSubSurfaceConfigurationProps,
  FiberPhysicsAggregateProps,
  FiberPhysicsImpostorProps,
  FiberPlaneDragGizmoProps,
  FiberPlanePanelProps,
  FiberPlaneRotationGizmoProps,
  FiberPointerDragBehaviorProps,
  FiberPointLightProps,
  FiberPointsCloudSystemProps,
  FiberPositionGizmoProps,
  FiberPostProcessProps,
  FiberPostProcessRenderPipelineProps,
  FiberPrePassConfigurationProps,
  FiberPrePassRenderTargetProps,
  FiberProceduralTextureProps,
  FiberPushMaterialProps,
  FiberRadioButtonProps,
  FiberRawCubeTextureProps,
  FiberRawTexture2DArrayProps,
  FiberRawTexture3DProps,
  FiberRawTextureProps,
  FiberRectangleProps,
  FiberRefractionPostProcessProps,
  FiberRefractionTextureProps,
  FiberRenderTargetTextureProps,
  FiberRotationGizmoProps,
  FiberScaleGizmoProps,
  FiberScatterPanelProps,
  FiberSceneProps,
  FiberScreenSpaceCurvaturePostProcessProps,
  FiberScreenSpaceReflectionPostProcessProps,
  FiberScrollBarProps,
  FiberScrollViewerProps,
  FiberSelectionPanelProps,
  FiberShaderMaterialProps,
  FiberShadowGeneratorProps,
  FiberShadowLightProps,
  FiberSharpenPostProcessProps,
  FiberSixDofDragBehaviorProps,
  FiberSlateGizmoProps,
  FiberSlider3DProps,
  FiberSliderProps,
  FiberSoundProps,
  FiberSpherePanelProps,
  FiberSpotLightProps,
  FiberSpriteManagerProps,
  FiberSpritePackedManagerProps,
  FiberSpriteProps,
  FiberSSAO2RenderingPipelineProps,
  FiberSSAORenderingPipelineProps,
  FiberSSRRenderingPipelineProps,
  FiberStackPanel3DProps,
  FiberStackPanelProps,
  FiberStandardMaterialProps,
  FiberStandardRenderingPipelineProps,
  FiberStereoscopicArcRotateCameraProps,
  FiberStereoscopicFreeCameraProps,
  FiberStereoscopicGamepadCameraProps,
  FiberStereoscopicInterlacePostProcessIProps,
  FiberStereoscopicInterlacePostProcessProps,
  FiberStereoscopicScreenUniversalCameraProps,
  FiberStereoscopicUniversalCameraProps,
  FiberSubSurfaceScatteringPostProcessProps,
  FiberSurfaceMagnetismBehaviorProps,
  FiberTAARenderingPipelineProps,
  FiberTargetCameraProps,
  FiberTextBlockProps,
  FiberTextureProps,
  FiberThinRenderTargetTextureProps,
  FiberThinSpriteProps,
  FiberThinTextureProps,
  FiberToggleButtonProps,
  FiberTonemapPostProcessProps,
  FiberTouchButton3DProps,
  FiberTouchCameraProps,
  FiberTouchHolographicButtonProps,
  FiberTouchHolographicMenuProps,
  FiberTouchMeshButton3DProps,
  FiberTrailMeshProps,
  FiberTransformNodeProps,
  FiberUniversalCameraProps,
  FiberUtilityLayerRendererProps,
  FiberVideoTextureProps,
  FiberViewportProps,
  FiberVirtualJoysticksCameraProps,
  FiberVirtualKeyboardProps,
  FiberVolumeBasedPanelProps,
  FiberVolumetricLightScatteringPostProcessProps,
  FiberVRDeviceOrientationArcRotateCameraProps,
  FiberVRDeviceOrientationFreeCameraProps,
  FiberVRDeviceOrientationGamepadCameraProps,
  FiberVRDistortionCorrectionPostProcessProps,
  FiberVRExperienceHelperProps,
  FiberVRMultiviewToSingleviewPostProcessProps,
  FiberWebXRCameraProps,
  FiberXRSpaceWarpRenderTargetProps,
  Fiber_ScrollViewerWindowProps,
} from './generatedProps'
import {
  checkColor3Diff,
  checkColor4Diff,
  checkControlDiff,
  checkFresnelParametersDiff,
  checkLambdaDiff,
  checkMethodDiff,
  checkNumericArrayDiff,
  checkObjectDiff,
  checkObservableDiff,
  checkPrimitiveDiff,
  checkQuaternionDiff,
  checkTextureDiff,
  checkVector3Diff,
  HasPropsHandlers,
  PropertyUpdate,
  PropsHandler,
} from './PropsHandler'

export class FiberNodePropsHandler implements PropsHandler<FiberNodeProps> {
  getPropertyUpdates(oldProps: FiberNodeProps, newProps: FiberNodeProps): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreIAccessibilityTag' property (not coded) BabylonjsCoreNode.accessibilityTag.
    // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreNode.animationPropertiesOverride.
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreNode.animations.
    checkPrimitiveDiff(
      oldProps.doNotSerialize,
      newProps.doNotSerialize,
      'doNotSerialize',
      changedProps
    )
    checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
    // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreNode.inspectableCustomProperties.
    // type: 'any' property (not coded) BabylonjsCoreNode.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onAccessibilityTagChangedObservable,
      newProps.onAccessibilityTagChangedObservable,
      'onAccessibilityTagChangedObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onReady, newProps.onReady, 'onReady', changedProps)
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreNode.parent.
    // type: 'any' property (not coded) BabylonjsCoreNode.reservedDataStore.
    checkPrimitiveDiff(oldProps.state, newProps.state, 'state', changedProps)
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkMethodDiff(oldProps.addBehavior, newProps.addBehavior, 'addBehavior', changedProps)
    checkMethodDiff(oldProps.setEnabled, newProps.setEnabled, 'setEnabled', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 *
 * This code has been generated
 */
export class FiberNode implements HasPropsHandlers<FiberNodeProps> {
  private propsHandlers: PropsHandler<FiberNodeProps>[]

  constructor() {
    this.propsHandlers = [new FiberNodePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Node',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'isPure',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    className: 'FiberNode',
  }
}

export class FiberTransformNodePropsHandler implements PropsHandler<FiberTransformNodeProps> {
  getPropertyUpdates(
    oldProps: FiberTransformNodeProps,
    newProps: FiberTransformNodeProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.billboardMode,
      newProps.billboardMode,
      'billboardMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreNonUniformScaling,
      newProps.ignoreNonUniformScaling,
      'ignoreNonUniformScaling',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.infiniteDistance,
      newProps.infiniteDistance,
      'infiniteDistance',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterWorldMatrixUpdateObservable,
      newProps.onAfterWorldMatrixUpdateObservable,
      'onAfterWorldMatrixUpdateObservable',
      changedProps
    )
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkPrimitiveDiff(
      oldProps.preserveParentRotationForBillboard,
      newProps.preserveParentRotationForBillboard,
      'preserveParentRotationForBillboard',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reIntegrateRotationIntoRotationQuaternion,
      newProps.reIntegrateRotationIntoRotationQuaternion,
      'reIntegrateRotationIntoRotationQuaternion',
      changedProps
    )
    checkVector3Diff(oldProps.rotation, newProps.rotation, 'rotation', true, changedProps)
    checkQuaternionDiff(
      oldProps.rotationQuaternion,
      newProps.rotationQuaternion,
      'rotationQuaternion',
      true,
      changedProps
    )
    checkVector3Diff(oldProps.scaling, newProps.scaling, 'scaling', true, changedProps)
    checkPrimitiveDiff(
      oldProps.scalingDeterminant,
      newProps.scalingDeterminant,
      'scalingDeterminant',
      changedProps
    )
    checkMethodDiff(oldProps.addChild, newProps.addChild, 'addChild', changedProps)
    checkMethodDiff(oldProps.addRotation, newProps.addRotation, 'addRotation', changedProps)
    checkMethodDiff(
      oldProps.setAbsolutePosition,
      newProps.setAbsolutePosition,
      'setAbsolutePosition',
      changedProps
    )
    checkMethodDiff(oldProps.setDirection, newProps.setDirection, 'setDirection', changedProps)
    checkMethodDiff(oldProps.setParent, newProps.setParent, 'setParent', changedProps)
    checkMethodDiff(
      oldProps.setPivotMatrix,
      newProps.setPivotMatrix,
      'setPivotMatrix',
      changedProps
    )
    checkMethodDiff(oldProps.setPivotPoint, newProps.setPivotPoint, 'setPivotPoint', changedProps)
    checkMethodDiff(
      oldProps.setPositionWithLocalVector,
      newProps.setPositionWithLocalVector,
      'setPositionWithLocalVector',
      changedProps
    )
    checkMethodDiff(
      oldProps.setPreTransformMatrix,
      newProps.setPreTransformMatrix,
      'setPreTransformMatrix',
      changedProps
    )
    checkMethodDiff(oldProps.translate, newProps.translate, 'translate', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 *
 * This code has been generated
 */
export class FiberTransformNode implements HasPropsHandlers<FiberNodeProps> {
  private propsHandlers: PropsHandler<FiberNodeProps>[]

  constructor() {
    this.propsHandlers = [new FiberTransformNodePropsHandler(), new FiberNodePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TransformNode',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'isPure',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    className: 'FiberTransformNode',
  }
}

export class FiberAbstractMeshPropsHandler implements PropsHandler<FiberAbstractMeshProps> {
  getPropertyUpdates(
    oldProps: FiberAbstractMeshProps,
    newProps: FiberAbstractMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreAbstractMesh.actionManager.
    checkPrimitiveDiff(oldProps.alphaIndex, newProps.alphaIndex, 'alphaIndex', changedProps)
    checkPrimitiveDiff(
      oldProps.alwaysSelectAsActiveMesh,
      newProps.alwaysSelectAsActiveMesh,
      'alwaysSelectAsActiveMesh',
      changedProps
    )
    checkPrimitiveDiff(oldProps.applyFog, newProps.applyFog, 'applyFog', changedProps)
    // type: 'BabylonjsCoreIBakedVertexAnimationManager' property (not coded) BabylonjsCoreAbstractMesh.bakedVertexAnimationManager.
    checkPrimitiveDiff(
      oldProps.checkCollisions,
      newProps.checkCollisions,
      'checkCollisions',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionGroup,
      newProps.collisionGroup,
      'collisionGroup',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionMask,
      newProps.collisionMask,
      'collisionMask',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionResponse,
      newProps.collisionResponse,
      'collisionResponse',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionRetryCount,
      newProps.collisionRetryCount,
      'collisionRetryCount',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.computeBonesUsingShaders,
      newProps.computeBonesUsingShaders,
      'computeBonesUsingShaders',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cullingStrategy,
      newProps.cullingStrategy,
      'cullingStrategy',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.definedFacingForward,
      newProps.definedFacingForward,
      'definedFacingForward',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.doNotSyncBoundingInfo,
      newProps.doNotSyncBoundingInfo,
      'doNotSyncBoundingInfo',
      changedProps
    )
    checkColor4Diff(oldProps.edgesColor, newProps.edgesColor, 'edgesColor', changedProps)
    checkPrimitiveDiff(oldProps.edgesWidth, newProps.edgesWidth, 'edgesWidth', changedProps)
    checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', false, changedProps)
    checkPrimitiveDiff(
      oldProps['ellipsoid-x'],
      newProps['ellipsoid-x'],
      'ellipsoid.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-y'],
      newProps['ellipsoid-y'],
      'ellipsoid.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-z'],
      newProps['ellipsoid-z'],
      'ellipsoid.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.ellipsoidOffset,
      newProps.ellipsoidOffset,
      'ellipsoidOffset',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-x'],
      newProps['ellipsoidOffset-x'],
      'ellipsoidOffset.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-y'],
      newProps['ellipsoidOffset-y'],
      'ellipsoidOffset.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-z'],
      newProps['ellipsoidOffset-z'],
      'ellipsoidOffset.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableDistantPicking,
      newProps.enableDistantPicking,
      'enableDistantPicking',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enablePointerMoveEvents,
      newProps.enablePointerMoveEvents,
      'enablePointerMoveEvents',
      changedProps
    )
    checkVector3Diff(
      oldProps.facetDepthSortFrom,
      newProps.facetDepthSortFrom,
      'facetDepthSortFrom',
      true,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.hasVertexAlpha,
      newProps.hasVertexAlpha,
      'hasVertexAlpha',
      changedProps
    )
    checkObjectDiff(
      oldProps.instancedBuffers,
      newProps.instancedBuffers,
      'instancedBuffers',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isBlocker, newProps.isBlocker, 'isBlocker', changedProps)
    checkPrimitiveDiff(
      oldProps.isNearGrabbable,
      newProps.isNearGrabbable,
      'isNearGrabbable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isNearPickable,
      newProps.isNearPickable,
      'isNearPickable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isPickable, newProps.isPickable, 'isPickable', changedProps)
    checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
    checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
    // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreAbstractMesh.material.
    // type: 'BabylonjsCoreMorphTargetManager' property (not coded) BabylonjsCoreAbstractMesh.morphTargetManager.
    checkPrimitiveDiff(
      oldProps.mustDepthSortFacets,
      newProps.mustDepthSortFacets,
      'mustDepthSortFacets',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.numBoneInfluencers,
      newProps.numBoneInfluencers,
      'numBoneInfluencers',
      changedProps
    )
    checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
    checkObservableDiff(
      oldProps.onCollideObservable,
      newProps.onCollideObservable,
      'onCollideObservable',
      changedProps
    )
    checkLambdaDiff(
      oldProps.onCollisionPositionChange,
      newProps.onCollisionPositionChange,
      'onCollisionPositionChange',
      changedProps
    )
    checkObservableDiff(
      oldProps.onCollisionPositionChangeObservable,
      newProps.onCollisionPositionChangeObservable,
      'onCollisionPositionChangeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMaterialChangedObservable,
      newProps.onMaterialChangedObservable,
      'onMaterialChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onRebuildObservable,
      newProps.onRebuildObservable,
      'onRebuildObservable',
      changedProps
    )
    checkColor3Diff(oldProps.outlineColor, newProps.outlineColor, 'outlineColor', changedProps)
    checkPrimitiveDiff(oldProps.outlineWidth, newProps.outlineWidth, 'outlineWidth', changedProps)
    checkPrimitiveDiff(oldProps.overlayAlpha, newProps.overlayAlpha, 'overlayAlpha', changedProps)
    checkColor3Diff(oldProps.overlayColor, newProps.overlayColor, 'overlayColor', changedProps)
    checkPrimitiveDiff(
      oldProps.partitioningBBoxRatio,
      newProps.partitioningBBoxRatio,
      'partitioningBBoxRatio',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.partitioningSubdivisions,
      newProps.partitioningSubdivisions,
      'partitioningSubdivisions',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pointerOverDisableMeshTesting,
      newProps.pointerOverDisableMeshTesting,
      'pointerOverDisableMeshTesting',
      changedProps
    )
    // type: 'BabylonjsCoreBoundingInfo' property (not coded) BabylonjsCoreAbstractMesh.rawBoundingInfo.
    checkPrimitiveDiff(
      oldProps.receiveShadows,
      newProps.receiveShadows,
      'receiveShadows',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.showSubMeshesBoundingBox,
      newProps.showSubMeshesBoundingBox,
      'showSubMeshesBoundingBox',
      changedProps
    )
    // type: 'BabylonjsCoreSkeleton' property (not coded) BabylonjsCoreAbstractMesh.skeleton.
    // type: 'BabylonjsCoreSubMesh[]' property (not coded) BabylonjsCoreAbstractMesh.subMeshes.
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreAbstractMesh.surroundingMeshes.
    checkPrimitiveDiff(
      oldProps.useOctreeForCollisions,
      newProps.useOctreeForCollisions,
      'useOctreeForCollisions',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useOctreeForPicking,
      newProps.useOctreeForPicking,
      'useOctreeForPicking',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useOctreeForRenderingSelection,
      newProps.useOctreeForRenderingSelection,
      'useOctreeForRenderingSelection',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useVertexColors,
      newProps.useVertexColors,
      'useVertexColors',
      changedProps
    )
    checkPrimitiveDiff(oldProps.visibility, newProps.visibility, 'visibility', changedProps)
    checkMethodDiff(
      oldProps.enableEdgesRendering,
      newProps.enableEdgesRendering,
      'enableEdgesRendering',
      changedProps
    )
    checkMethodDiff(
      oldProps.setBoundingInfo,
      newProps.setBoundingInfo,
      'setBoundingInfo',
      changedProps
    )
    checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
    checkMethodDiff(
      oldProps.setMaterialForRenderPass,
      newProps.setMaterialForRenderPass,
      'setMaterialForRenderPass',
      changedProps
    )
    checkMethodDiff(
      oldProps.setVerticesData,
      newProps.setVerticesData,
      'setVerticesData',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to store all common mesh properties
 *
 * This code has been generated
 */
export class FiberAbstractMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AbstractMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberAbstractMesh',
  }
}

export class FiberInstancedMeshPropsHandler implements PropsHandler<FiberInstancedMeshProps> {
  getPropertyUpdates(
    oldProps: FiberInstancedMeshProps,
    newProps: FiberInstancedMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreInstancedMesh.material.
    checkPrimitiveDiff(
      oldProps.receiveShadows,
      newProps.receiveShadows,
      'receiveShadows',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    // type: 'BabylonjsCoreSkeleton' property (not coded) BabylonjsCoreInstancedMesh.skeleton.
    checkPrimitiveDiff(oldProps.visibility, newProps.visibility, 'visibility', changedProps)
    checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
    checkMethodDiff(
      oldProps.setVerticesData,
      newProps.setVerticesData,
      'setVerticesData',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Creates an instance based on a source mesh.
 *
 * This code has been generated
 */
export class FiberInstancedMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberInstancedMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'InstancedMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'source',
        type: 'BabylonjsCoreMesh',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberInstancedMesh',
  }
}

export class FiberInstancedLinesMeshPropsHandler
  implements PropsHandler<FiberInstancedLinesMeshProps>
{
  getPropertyUpdates(
    oldProps: FiberInstancedLinesMeshProps,
    newProps: FiberInstancedLinesMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.intersectionThreshold,
      newProps.intersectionThreshold,
      'intersectionThreshold',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Creates an instance based on a source LinesMesh
 *
 * This code has been generated
 */
export class FiberInstancedLinesMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberInstancedLinesMeshPropsHandler(),
      new FiberInstancedMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'InstancedLinesMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'source',
        type: 'BabylonjsCoreLinesMesh',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberInstancedLinesMesh',
  }
}

export class FiberMeshPropsHandler implements PropsHandler<FiberMeshProps> {
  getPropertyUpdates(oldProps: FiberMeshProps, newProps: FiberMeshProps): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.computeBonesUsingShaders,
      newProps.computeBonesUsingShaders,
      'computeBonesUsingShaders',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.delayLoadingFile,
      newProps.delayLoadingFile,
      'delayLoadingFile',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.delayLoadState,
      newProps.delayLoadState,
      'delayLoadState',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forcedInstanceCount,
      newProps.forcedInstanceCount,
      'forcedInstanceCount',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceWorldMatrixInstancedBufferUpdate,
      newProps.forceWorldMatrixInstancedBufferUpdate,
      'forceWorldMatrixInstancedBufferUpdate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreCameraMaxZ,
      newProps.ignoreCameraMaxZ,
      'ignoreCameraMaxZ',
      changedProps
    )
    // type: 'BabylonjsCoreInstancedMesh[]' property (not coded) BabylonjsCoreMesh.instances.
    checkPrimitiveDiff(oldProps.isUnIndexed, newProps.isUnIndexed, 'isUnIndexed', changedProps)
    checkPrimitiveDiff(
      oldProps.manualUpdateOfPreviousWorldMatrixInstancedBuffer,
      newProps.manualUpdateOfPreviousWorldMatrixInstancedBuffer,
      'manualUpdateOfPreviousWorldMatrixInstancedBuffer',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.manualUpdateOfWorldMatrixInstancedBuffer,
      newProps.manualUpdateOfWorldMatrixInstancedBuffer,
      'manualUpdateOfWorldMatrixInstancedBuffer',
      changedProps
    )
    checkLambdaDiff(oldProps.onBeforeDraw, newProps.onBeforeDraw, 'onBeforeDraw', changedProps)
    checkLambdaDiff(
      oldProps.onLODLevelSelection,
      newProps.onLODLevelSelection,
      'onLODLevelSelection',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMeshReadyObservable,
      newProps.onMeshReadyObservable,
      'onMeshReadyObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.overrideMaterialSideOrientation,
      newProps.overrideMaterialSideOrientation,
      'overrideMaterialSideOrientation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.overridenInstanceCount,
      newProps.overridenInstanceCount,
      'overridenInstanceCount',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.overrideRenderingFillMode,
      newProps.overrideRenderingFillMode,
      'overrideRenderingFillMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useLODScreenCoverage,
      newProps.useLODScreenCoverage,
      'useLODScreenCoverage',
      changedProps
    )
    checkMethodDiff(oldProps.addInstance, newProps.addInstance, 'addInstance', changedProps)
    checkMethodDiff(oldProps.addLODLevel, newProps.addLODLevel, 'addLODLevel', changedProps)
    checkMethodDiff(
      oldProps.setIndexBuffer,
      newProps.setIndexBuffer,
      'setIndexBuffer',
      changedProps
    )
    checkMethodDiff(oldProps.setIndices, newProps.setIndices, 'setIndices', changedProps)
    checkMethodDiff(
      oldProps.setMaterialById,
      newProps.setMaterialById,
      'setMaterialById',
      changedProps
    )
    checkMethodDiff(
      oldProps.setMaterialByID,
      newProps.setMaterialByID,
      'setMaterialByID',
      changedProps
    )
    checkMethodDiff(
      oldProps.setVerticesBuffer,
      newProps.setVerticesBuffer,
      'setVerticesBuffer',
      changedProps
    )
    checkMethodDiff(
      oldProps.setVerticesData,
      newProps.setVerticesData,
      'setVerticesData',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to represent renderable models
 *
 * This code has been generated
 */
export class FiberMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Mesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCoreNode',
        optional: true,
      },
      {
        name: 'source',
        type: 'BabylonjsCoreMesh',
        optional: true,
      },
      {
        name: 'doNotCloneChildren',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'clonePhysicsImpostor',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberMesh',
  }
}

export class FiberGoldbergMeshPropsHandler implements PropsHandler<FiberGoldbergMeshProps> {
  getPropertyUpdates(
    oldProps: FiberGoldbergMeshProps,
    newProps: FiberGoldbergMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreGoldbergData' property (not coded) BabylonjsCoreGoldbergMesh.goldbergData.
    checkMethodDiff(
      oldProps.setGoldbergFaceColors,
      newProps.setGoldbergFaceColors,
      'setGoldbergFaceColors',
      changedProps
    )
    checkMethodDiff(
      oldProps.setGoldbergFaceUVs,
      newProps.setGoldbergFaceUVs,
      'setGoldbergFaceUVs',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Mesh for a Goldberg Polyhedron which is made from 12 pentagonal and the rest hexagonal faces
 *
 * This code has been generated
 */
export class FiberGoldbergMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGoldbergMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GoldbergMesh',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGoldbergMesh',
  }
}

export class FiberLinesMeshPropsHandler implements PropsHandler<FiberLinesMeshProps> {
  getPropertyUpdates(
    oldProps: FiberLinesMeshProps,
    newProps: FiberLinesMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
    checkPrimitiveDiff(
      oldProps.checkCollisions,
      newProps.checkCollisions,
      'checkCollisions',
      changedProps
    )
    checkColor3Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(
      oldProps.intersectionThreshold,
      newProps.intersectionThreshold,
      'intersectionThreshold',
      changedProps
    )
    // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreLinesMesh.material.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Line mesh
 *
 * This code has been generated
 */
export class FiberLinesMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberLinesMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'LinesMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCoreNode',
        optional: true,
      },
      {
        name: 'source',
        type: 'BabylonjsCoreLinesMesh',
        optional: true,
      },
      {
        name: 'doNotCloneChildren',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'useVertexColor',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'useVertexAlpha',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'material',
        type: 'BabylonjsCoreMaterial',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberLinesMesh',
  }
}

export class FiberGroundMeshPropsHandler implements PropsHandler<FiberGroundMeshProps> {
  getPropertyUpdates(
    oldProps: FiberGroundMeshProps,
    newProps: FiberGroundMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.generateOctree,
      newProps.generateOctree,
      'generateOctree',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Mesh representing the ground
 *
 * This code has been generated
 */
export class FiberGroundMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGroundMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GroundMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGroundMesh',
  }
}

export class FiberTrailMeshPropsHandler implements PropsHandler<FiberTrailMeshProps> {
  getPropertyUpdates(
    oldProps: FiberTrailMeshProps,
    newProps: FiberTrailMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.diameter, newProps.diameter, 'diameter', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a trail following a mesh
 *
 * This code has been generated
 */
export class FiberTrailMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTrailMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TrailMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'generator',
        type: 'BabylonjsCoreTransformNode',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'diameter',
        type: 'number',
        optional: true,
      },
      {
        name: 'length',
        type: 'number',
        optional: true,
      },
      {
        name: 'autoStart',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberTrailMesh',
  }
}

export class FiberGreasedLineBaseMeshPropsHandler
  implements PropsHandler<FiberGreasedLineBaseMeshProps>
{
  getPropertyUpdates(
    oldProps: FiberGreasedLineBaseMeshProps,
    newProps: FiberGreasedLineBaseMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkNumericArrayDiff(
      oldProps.colorPointers,
      newProps.colorPointers,
      'colorPointers',
      changedProps
    )
    checkNumericArrayDiff(oldProps.offsets, newProps.offsets, 'offsets', changedProps)
    // type: 'BabylonjsCoreFloatArray' property (not coded) BabylonjsCoreGreasedLineBaseMesh.uvs.
    checkNumericArrayDiff(oldProps.widths, newProps.widths, 'widths', changedProps)
    checkMethodDiff(oldProps.addPoints, newProps.addPoints, 'addPoints', changedProps)
    checkMethodDiff(oldProps.setPoints, newProps.setPoints, 'setPoints', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * GreasedLineBaseMesh
 *
 * This code has been generated
 */
export class FiberGreasedLineBaseMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGreasedLineBaseMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GreasedLineBaseMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: '_options',
        type: 'BabylonjsCoreGreasedLineMeshOptions',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGreasedLineBaseMesh',
  }
}

export class FiberGreasedLineMeshPropsHandler implements PropsHandler<FiberGreasedLineMeshProps> {
  getPropertyUpdates(
    oldProps: FiberGreasedLineMeshProps,
    newProps: FiberGreasedLineMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.intersectionThreshold,
      newProps.intersectionThreshold,
      'intersectionThreshold',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * GreasedLineMesh
 * Use the GreasedLineBuilder.CreateGreasedLine function to create an instance of this class.
 *
 * This code has been generated
 */
export class FiberGreasedLineMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGreasedLineMeshPropsHandler(),
      new FiberGreasedLineBaseMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GreasedLineMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: '_options',
        type: 'BabylonjsCoreGreasedLineMeshOptions',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGreasedLineMesh',
  }
}

export class FiberGreasedLineRibbonMeshPropsHandler
  implements PropsHandler<FiberGreasedLineRibbonMeshProps>
{
  getPropertyUpdates(
    oldProps: FiberGreasedLineRibbonMeshProps,
    newProps: FiberGreasedLineRibbonMeshProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkNumericArrayDiff(oldProps.slopes, newProps.slopes, 'slopes', changedProps)
    checkMethodDiff(oldProps.addPoints, newProps.addPoints, 'addPoints', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * GreasedLineRibbonMesh
 * Use the GreasedLineBuilder.CreateGreasedLine function to create an instance of this class.
 *
 * This code has been generated
 */
export class FiberGreasedLineRibbonMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGreasedLineRibbonMeshPropsHandler(),
      new FiberGreasedLineBaseMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GreasedLineRibbonMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: '_options',
        type: 'BabylonjsCoreGreasedLineMeshOptions',
        optional: false,
      },
      {
        name: '_pathOptions',
        type: '{ options: BabylonjsCoreGreasedLineMeshOptions; pathCount: number; }[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGreasedLineRibbonMesh',
  }
}

export class FiberGaussianSplattingMeshPropsHandler
  implements PropsHandler<FiberGaussianSplattingMeshProps>
{
  getPropertyUpdates(
    oldProps: FiberGaussianSplattingMeshProps,
    newProps: FiberGaussianSplattingMeshProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to render a gaussian splatting mesh
 *
 * This code has been generated
 */
export class FiberGaussianSplattingMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
  private propsHandlers: PropsHandler<FiberAbstractMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGaussianSplattingMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GaussianSplattingMesh',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'url',
        type: 'string',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    acceptsMaterials: true,
    isMesh: true,
    className: 'FiberGaussianSplattingMesh',
  }
}

export class FiberCameraPropsHandler implements PropsHandler<FiberCameraProps> {
  getPropertyUpdates(
    oldProps: FiberCameraProps,
    newProps: FiberCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.cameraRigMode,
      newProps.cameraRigMode,
      'cameraRigMode',
      changedProps
    )
    // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreCamera.customRenderTargets.
    checkPrimitiveDiff(oldProps.fov, newProps.fov, 'fov', changedProps)
    checkPrimitiveDiff(oldProps.fovMode, newProps.fovMode, 'fovMode', changedProps)
    checkPrimitiveDiff(oldProps.inertia, newProps.inertia, 'inertia', changedProps)
    // type: 'BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.inputs.
    checkPrimitiveDiff(
      oldProps.interaxialDistance,
      newProps.interaxialDistance,
      'interaxialDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isIntermediate,
      newProps.isIntermediate,
      'isIntermediate',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isRigCamera, newProps.isRigCamera, 'isRigCamera', changedProps)
    checkPrimitiveDiff(
      oldProps.isStereoscopicSideBySide,
      newProps.isStereoscopicSideBySide,
      'isStereoscopicSideBySide',
      changedProps
    )
    checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
    checkPrimitiveDiff(oldProps.maxZ, newProps.maxZ, 'maxZ', changedProps)
    checkPrimitiveDiff(oldProps.minZ, newProps.minZ, 'minZ', changedProps)
    checkPrimitiveDiff(oldProps.mode, newProps.mode, 'mode', changedProps)
    // type: 'BabylonjsCoreIObliqueParams' property (not coded) BabylonjsCoreCamera.oblique.
    checkObservableDiff(
      oldProps.onAfterCheckInputsObservable,
      newProps.onAfterCheckInputsObservable,
      'onAfterCheckInputsObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onProjectionMatrixChangedObservable,
      newProps.onProjectionMatrixChangedObservable,
      'onProjectionMatrixChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onRestoreStateObservable,
      newProps.onRestoreStateObservable,
      'onRestoreStateObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onViewMatrixChangedObservable,
      newProps.onViewMatrixChangedObservable,
      'onViewMatrixChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.orthoBottom, newProps.orthoBottom, 'orthoBottom', changedProps)
    checkPrimitiveDiff(oldProps.orthoLeft, newProps.orthoLeft, 'orthoLeft', changedProps)
    checkPrimitiveDiff(oldProps.orthoRight, newProps.orthoRight, 'orthoRight', changedProps)
    checkPrimitiveDiff(oldProps.orthoTop, newProps.orthoTop, 'orthoTop', changedProps)
    // type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCoreCamera.outputRenderTarget.
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkPrimitiveDiff(
      oldProps.projectionPlaneTilt,
      newProps.projectionPlaneTilt,
      'projectionPlaneTilt',
      changedProps
    )
    checkPrimitiveDiff(oldProps.renderPassId, newProps.renderPassId, 'renderPassId', changedProps)
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreCamera.rigParent.
    checkVector3Diff(oldProps.upVector, newProps.upVector, 'upVector', true, changedProps)
    // type: 'BabylonjsCoreViewport' property (not coded) BabylonjsCoreCamera.viewport.
    checkMethodDiff(
      oldProps.setCameraRigMode,
      newProps.setCameraRigMode,
      'setCameraRigMode',
      changedProps
    )
    checkMethodDiff(
      oldProps.setCameraRigParameter,
      newProps.setCameraRigParameter,
      'setCameraRigParameter',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This is the base class of all the camera used in the application.
 *
 * This code has been generated
 */
export class FiberCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [new FiberCameraPropsHandler(), new FiberNodePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Camera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'setActiveOnSceneIfNoneActive',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberCamera',
  }
}

export class FiberTargetCameraPropsHandler implements PropsHandler<FiberTargetCameraProps> {
  getPropertyUpdates(
    oldProps: FiberTargetCameraProps,
    newProps: FiberTargetCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(
      oldProps.cameraDirection,
      newProps.cameraDirection,
      'cameraDirection',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-x'],
      newProps['cameraDirection-x'],
      'cameraDirection.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-y'],
      newProps['cameraDirection-y'],
      'cameraDirection.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-z'],
      newProps['cameraDirection-z'],
      'cameraDirection.z',
      changedProps
    )
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreTargetCamera.cameraRotation.
    checkPrimitiveDiff(
      oldProps.ignoreParentScaling,
      newProps.ignoreParentScaling,
      'ignoreParentScaling',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inverseRotationSpeed,
      newProps.inverseRotationSpeed,
      'inverseRotationSpeed',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertRotation,
      newProps.invertRotation,
      'invertRotation',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreTargetCamera.lockedTarget.
    checkPrimitiveDiff(
      oldProps.noRotationConstraint,
      newProps.noRotationConstraint,
      'noRotationConstraint',
      changedProps
    )
    checkVector3Diff(oldProps.rotation, newProps.rotation, 'rotation', false, changedProps)
    checkPrimitiveDiff(oldProps['rotation-x'], newProps['rotation-x'], 'rotation.x', changedProps)
    checkPrimitiveDiff(oldProps['rotation-y'], newProps['rotation-y'], 'rotation.y', changedProps)
    checkPrimitiveDiff(oldProps['rotation-z'], newProps['rotation-z'], 'rotation.z', changedProps)
    checkQuaternionDiff(
      oldProps.rotationQuaternion,
      newProps.rotationQuaternion,
      'rotationQuaternion',
      false,
      changedProps
    )
    checkPrimitiveDiff(oldProps.speed, newProps.speed, 'speed', changedProps)
    checkVector3Diff(oldProps.target, newProps.target, 'target', true, changedProps)
    checkPrimitiveDiff(
      oldProps.updateUpVectorFromRotation,
      newProps.updateUpVectorFromRotation,
      'updateUpVectorFromRotation',
      changedProps
    )
    checkMethodDiff(oldProps.setTarget, newProps.setTarget, 'setTarget', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 *
 * This code has been generated
 */
export class FiberTargetCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TargetCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'setActiveOnSceneIfNoneActive',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberTargetCamera',
  }
}

export class FiberFreeCameraPropsHandler implements PropsHandler<FiberFreeCameraProps> {
  getPropertyUpdates(
    oldProps: FiberFreeCameraProps,
    newProps: FiberFreeCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.angularSensibility,
      newProps.angularSensibility,
      'angularSensibility',
      changedProps
    )
    checkPrimitiveDiff(oldProps.applyGravity, newProps.applyGravity, 'applyGravity', changedProps)
    checkPrimitiveDiff(
      oldProps.checkCollisions,
      newProps.checkCollisions,
      'checkCollisions',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionMask,
      newProps.collisionMask,
      'collisionMask',
      changedProps
    )
    checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', false, changedProps)
    checkPrimitiveDiff(
      oldProps['ellipsoid-x'],
      newProps['ellipsoid-x'],
      'ellipsoid.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-y'],
      newProps['ellipsoid-y'],
      'ellipsoid.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-z'],
      newProps['ellipsoid-z'],
      'ellipsoid.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.ellipsoidOffset,
      newProps.ellipsoidOffset,
      'ellipsoidOffset',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-x'],
      newProps['ellipsoidOffset-x'],
      'ellipsoidOffset.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-y'],
      newProps['ellipsoidOffset-y'],
      'ellipsoidOffset.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-z'],
      newProps['ellipsoidOffset-z'],
      'ellipsoidOffset.z',
      changedProps
    )
    // type: 'BabylonjsCoreFreeCameraInputsManager' property (not coded) BabylonjsCoreFreeCamera.inputs.
    checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
    checkNumericArrayDiff(
      oldProps.keysDownward,
      newProps.keysDownward,
      'keysDownward',
      changedProps
    )
    checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
    checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
    checkNumericArrayDiff(
      oldProps.keysRotateDown,
      newProps.keysRotateDown,
      'keysRotateDown',
      changedProps
    )
    checkNumericArrayDiff(
      oldProps.keysRotateLeft,
      newProps.keysRotateLeft,
      'keysRotateLeft',
      changedProps
    )
    checkNumericArrayDiff(
      oldProps.keysRotateRight,
      newProps.keysRotateRight,
      'keysRotateRight',
      changedProps
    )
    checkNumericArrayDiff(
      oldProps.keysRotateUp,
      newProps.keysRotateUp,
      'keysRotateUp',
      changedProps
    )
    checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
    checkNumericArrayDiff(oldProps.keysUpward, newProps.keysUpward, 'keysUpward', changedProps)
    checkPrimitiveDiff(
      oldProps.needMoveForGravity,
      newProps.needMoveForGravity,
      'needMoveForGravity',
      changedProps
    )
    checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 *
 * This code has been generated
 */
export class FiberFreeCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FreeCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'setActiveOnSceneIfNoneActive',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberFreeCamera',
  }
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<FiberWebXRCameraProps> {
  getPropertyUpdates(
    oldProps: FiberWebXRCameraProps,
    newProps: FiberWebXRCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.compensateOnFirstFrame,
      newProps.compensateOnFirstFrame,
      'compensateOnFirstFrame',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterCameraTeleport,
      newProps.onAfterCameraTeleport,
      'onAfterCameraTeleport',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeCameraTeleport,
      newProps.onBeforeCameraTeleport,
      'onBeforeCameraTeleport',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTrackingStateChanged,
      newProps.onTrackingStateChanged,
      'onTrackingStateChanged',
      changedProps
    )
    checkObservableDiff(
      oldProps.onXRCameraInitializedObservable,
      newProps.onXRCameraInitializedObservable,
      'onXRCameraInitializedObservable',
      changedProps
    )
    checkMethodDiff(oldProps.setTarget, newProps.setTarget, 'setTarget', changedProps)
    checkMethodDiff(
      oldProps.setTransformationFromNonVRCamera,
      newProps.setTransformationFromNonVRCamera,
      'setTransformationFromNonVRCamera',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * WebXR Camera which holds the views for the xrSession
 *
 * This code has been generated
 */
export class FiberWebXRCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberWebXRCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'WebXRCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: '_xrSessionManager',
        type: 'BabylonjsCoreWebXRSessionManager',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberWebXRCamera',
  }
}

export class FiberTouchCameraPropsHandler implements PropsHandler<FiberTouchCameraProps> {
  getPropertyUpdates(
    oldProps: FiberTouchCameraProps,
    newProps: FiberTouchCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.touchAngularSensibility,
      newProps.touchAngularSensibility,
      'touchAngularSensibility',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.touchMoveSensibility,
      newProps.touchMoveSensibility,
      'touchMoveSensibility',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 *
 * This code has been generated
 */
export class FiberTouchCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TouchCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberTouchCamera',
  }
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<FiberUniversalCameraProps> {
  getPropertyUpdates(
    oldProps: FiberUniversalCameraProps,
    newProps: FiberUniversalCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.gamepadAngularSensibility,
      newProps.gamepadAngularSensibility,
      'gamepadAngularSensibility',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.gamepadMoveSensibility,
      newProps.gamepadMoveSensibility,
      'gamepadMoveSensibility',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 *
 * This code has been generated
 */
export class FiberUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'UniversalCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberUniversalCamera',
  }
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<FiberGamepadCameraProps> {
  getPropertyUpdates(
    oldProps: FiberGamepadCameraProps,
    newProps: FiberGamepadCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 *
 * This code has been generated
 */
export class FiberGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGamepadCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GamepadCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberGamepadCamera',
  }
}

export class FiberAnaglyphGamepadCameraPropsHandler
  implements PropsHandler<FiberAnaglyphGamepadCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberAnaglyphGamepadCameraProps,
    newProps: FiberAnaglyphGamepadCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAnaglyphGamepadCameraPropsHandler(),
      new FiberGamepadCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AnaglyphGamepadCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberAnaglyphGamepadCamera',
  }
}

export class FiberStereoscopicGamepadCameraPropsHandler
  implements PropsHandler<FiberStereoscopicGamepadCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicGamepadCameraProps,
    newProps: FiberStereoscopicGamepadCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicGamepadCameraPropsHandler(),
      new FiberGamepadCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicGamepadCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'isStereoscopicSideBySide',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberStereoscopicGamepadCamera',
  }
}

export class FiberAnaglyphUniversalCameraPropsHandler
  implements PropsHandler<FiberAnaglyphUniversalCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberAnaglyphUniversalCameraProps,
    newProps: FiberAnaglyphUniversalCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAnaglyphUniversalCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AnaglyphUniversalCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberAnaglyphUniversalCamera',
  }
}

export class FiberStereoscopicUniversalCameraPropsHandler
  implements PropsHandler<FiberStereoscopicUniversalCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicUniversalCameraProps,
    newProps: FiberStereoscopicUniversalCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicUniversalCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicUniversalCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'isStereoscopicSideBySide',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberStereoscopicUniversalCamera',
  }
}

export class FiberStereoscopicScreenUniversalCameraPropsHandler
  implements PropsHandler<FiberStereoscopicScreenUniversalCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicScreenUniversalCameraProps,
    newProps: FiberStereoscopicScreenUniversalCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.distanceBetweenEyes,
      newProps.distanceBetweenEyes,
      'distanceBetweenEyes',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.distanceToProjectionPlane,
      newProps.distanceToProjectionPlane,
      'distanceToProjectionPlane',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Camera used to simulate stereoscopic rendering on real screens (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicScreenUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicScreenUniversalCameraPropsHandler(),
      new FiberUniversalCameraPropsHandler(),
      new FiberTouchCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicScreenUniversalCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'distanceToProjectionPlane',
        type: 'number',
        optional: true,
      },
      {
        name: 'distanceBetweenEyes',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberStereoscopicScreenUniversalCamera',
  }
}

export class FiberDeviceOrientationCameraPropsHandler
  implements PropsHandler<FiberDeviceOrientationCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberDeviceOrientationCameraProps,
    newProps: FiberDeviceOrientationCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.disablePointerInputWhenUsingDeviceOrientation,
      newProps.disablePointerInputWhenUsingDeviceOrientation,
      'disablePointerInputWhenUsingDeviceOrientation',
      changedProps
    )
    checkMethodDiff(
      oldProps.enableHorizontalDragging,
      newProps.enableHorizontalDragging,
      'enableHorizontalDragging',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 *
 * This code has been generated
 */
export class FiberDeviceOrientationCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDeviceOrientationCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DeviceOrientationCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberDeviceOrientationCamera',
  }
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler
  implements PropsHandler<FiberVRDeviceOrientationFreeCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberVRDeviceOrientationFreeCameraProps,
    newProps: FiberVRDeviceOrientationFreeCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVRDeviceOrientationFreeCameraPropsHandler(),
      new FiberDeviceOrientationCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRDeviceOrientationFreeCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'compensateDistortion',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'vrCameraMetrics',
        type: 'BabylonjsCoreVRCameraMetrics',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberVRDeviceOrientationFreeCamera',
  }
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler
  implements PropsHandler<FiberVRDeviceOrientationGamepadCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberVRDeviceOrientationGamepadCameraProps,
    newProps: FiberVRDeviceOrientationGamepadCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVRDeviceOrientationGamepadCameraPropsHandler(),
      new FiberVRDeviceOrientationFreeCameraPropsHandler(),
      new FiberDeviceOrientationCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRDeviceOrientationGamepadCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'compensateDistortion',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'vrCameraMetrics',
        type: 'BabylonjsCoreVRCameraMetrics',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberVRDeviceOrientationGamepadCamera',
  }
}

export class FiberAnaglyphFreeCameraPropsHandler
  implements PropsHandler<FiberAnaglyphFreeCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberAnaglyphFreeCameraProps,
    newProps: FiberAnaglyphFreeCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphFreeCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAnaglyphFreeCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AnaglyphFreeCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberAnaglyphFreeCamera',
  }
}

export class FiberStereoscopicFreeCameraPropsHandler
  implements PropsHandler<FiberStereoscopicFreeCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicFreeCameraProps,
    newProps: FiberStereoscopicFreeCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicFreeCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicFreeCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicFreeCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'isStereoscopicSideBySide',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberStereoscopicFreeCamera',
  }
}

export class FiberVirtualJoysticksCameraPropsHandler
  implements PropsHandler<FiberVirtualJoysticksCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberVirtualJoysticksCameraProps,
    newProps: FiberVirtualJoysticksCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
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
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVirtualJoysticksCameraPropsHandler(),
      new FiberFreeCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VirtualJoysticksCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberVirtualJoysticksCamera',
  }
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<FiberArcRotateCameraProps> {
  getPropertyUpdates(
    oldProps: FiberArcRotateCameraProps,
    newProps: FiberArcRotateCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.allowUpsideDown,
      newProps.allowUpsideDown,
      'allowUpsideDown',
      changedProps
    )
    checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
    checkPrimitiveDiff(
      oldProps.angularSensibilityX,
      newProps.angularSensibilityX,
      'angularSensibilityX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.angularSensibilityY,
      newProps.angularSensibilityY,
      'angularSensibilityY',
      changedProps
    )
    checkPrimitiveDiff(oldProps.beta, newProps.beta, 'beta', changedProps)
    checkPrimitiveDiff(
      oldProps.checkCollisions,
      newProps.checkCollisions,
      'checkCollisions',
      changedProps
    )
    checkVector3Diff(
      oldProps.collisionRadius,
      newProps.collisionRadius,
      'collisionRadius',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['collisionRadius-x'],
      newProps['collisionRadius-x'],
      'collisionRadius.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['collisionRadius-y'],
      newProps['collisionRadius-y'],
      'collisionRadius.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['collisionRadius-z'],
      newProps['collisionRadius-z'],
      'collisionRadius.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inertialAlphaOffset,
      newProps.inertialAlphaOffset,
      'inertialAlphaOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inertialBetaOffset,
      newProps.inertialBetaOffset,
      'inertialBetaOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inertialPanningX,
      newProps.inertialPanningX,
      'inertialPanningX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inertialPanningY,
      newProps.inertialPanningY,
      'inertialPanningY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inertialRadiusOffset,
      newProps.inertialRadiusOffset,
      'inertialRadiusOffset',
      changedProps
    )
    // type: 'BabylonjsCoreArcRotateCameraInputsManager' property (not coded) BabylonjsCoreArcRotateCamera.inputs.
    checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
    checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
    checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
    checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
    checkPrimitiveDiff(
      oldProps.lowerAlphaLimit,
      newProps.lowerAlphaLimit,
      'lowerAlphaLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lowerBetaLimit,
      newProps.lowerBetaLimit,
      'lowerBetaLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lowerRadiusLimit,
      newProps.lowerRadiusLimit,
      'lowerRadiusLimit',
      changedProps
    )
    checkPrimitiveDiff(oldProps.mapPanning, newProps.mapPanning, 'mapPanning', changedProps)
    checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
    checkObservableDiff(
      oldProps.onMeshTargetChangedObservable,
      newProps.onMeshTargetChangedObservable,
      'onMeshTargetChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.overrideCloneAlphaBetaRadius,
      newProps.overrideCloneAlphaBetaRadius,
      'overrideCloneAlphaBetaRadius',
      changedProps
    )
    checkVector3Diff(oldProps.panningAxis, newProps.panningAxis, 'panningAxis', false, changedProps)
    checkPrimitiveDiff(
      oldProps['panningAxis-x'],
      newProps['panningAxis-x'],
      'panningAxis.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['panningAxis-y'],
      newProps['panningAxis-y'],
      'panningAxis.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['panningAxis-z'],
      newProps['panningAxis-z'],
      'panningAxis.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.panningDistanceLimit,
      newProps.panningDistanceLimit,
      'panningDistanceLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.panningInertia,
      newProps.panningInertia,
      'panningInertia',
      changedProps
    )
    checkVector3Diff(
      oldProps.panningOriginTarget,
      newProps.panningOriginTarget,
      'panningOriginTarget',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['panningOriginTarget-x'],
      newProps['panningOriginTarget-x'],
      'panningOriginTarget.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['panningOriginTarget-y'],
      newProps['panningOriginTarget-y'],
      'panningOriginTarget.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['panningOriginTarget-z'],
      newProps['panningOriginTarget-z'],
      'panningOriginTarget.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.panningSensibility,
      newProps.panningSensibility,
      'panningSensibility',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pinchDeltaPercentage,
      newProps.pinchDeltaPercentage,
      'pinchDeltaPercentage',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pinchPrecision,
      newProps.pinchPrecision,
      'pinchPrecision',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pinchToPanMaxDistance,
      newProps.pinchToPanMaxDistance,
      'pinchToPanMaxDistance',
      changedProps
    )
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkVector3Diff(oldProps.target, newProps.target, 'target', true, changedProps)
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreArcRotateCamera.targetHost.
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreArcRotateCamera.targetScreenOffset.
    checkPrimitiveDiff(
      oldProps.upperAlphaLimit,
      newProps.upperAlphaLimit,
      'upperAlphaLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperBetaLimit,
      newProps.upperBetaLimit,
      'upperBetaLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperRadiusLimit,
      newProps.upperRadiusLimit,
      'upperRadiusLimit',
      changedProps
    )
    checkVector3Diff(oldProps.upVector, newProps.upVector, 'upVector', true, changedProps)
    checkPrimitiveDiff(
      oldProps.useAutoRotationBehavior,
      newProps.useAutoRotationBehavior,
      'useAutoRotationBehavior',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useBouncingBehavior,
      newProps.useBouncingBehavior,
      'useBouncingBehavior',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useFramingBehavior,
      newProps.useFramingBehavior,
      'useFramingBehavior',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useInputToRestoreState,
      newProps.useInputToRestoreState,
      'useInputToRestoreState',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useNaturalPinchZoom,
      newProps.useNaturalPinchZoom,
      'useNaturalPinchZoom',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.wheelDeltaPercentage,
      newProps.wheelDeltaPercentage,
      'wheelDeltaPercentage',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.wheelPrecision,
      newProps.wheelPrecision,
      'wheelPrecision',
      changedProps
    )
    checkPrimitiveDiff(oldProps.zoomOnFactor, newProps.zoomOnFactor, 'zoomOnFactor', changedProps)
    checkPrimitiveDiff(
      oldProps.zoomToMouseLocation,
      newProps.zoomToMouseLocation,
      'zoomToMouseLocation',
      changedProps
    )
    checkMethodDiff(oldProps.setPosition, newProps.setPosition, 'setPosition', changedProps)
    checkMethodDiff(oldProps.setTarget, newProps.setTarget, 'setTarget', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberArcRotateCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ArcRotateCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'alpha',
        type: 'number',
        optional: false,
      },
      {
        name: 'beta',
        type: 'number',
        optional: false,
      },
      {
        name: 'radius',
        type: 'number',
        optional: false,
      },
      {
        name: 'target',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'setActiveOnSceneIfNoneActive',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberArcRotateCamera',
  }
}

export class FiberAnaglyphArcRotateCameraPropsHandler
  implements PropsHandler<FiberAnaglyphArcRotateCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberAnaglyphArcRotateCameraProps,
    newProps: FiberAnaglyphArcRotateCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAnaglyphArcRotateCameraPropsHandler(),
      new FiberArcRotateCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AnaglyphArcRotateCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'alpha',
        type: 'number',
        optional: false,
      },
      {
        name: 'beta',
        type: 'number',
        optional: false,
      },
      {
        name: 'radius',
        type: 'number',
        optional: false,
      },
      {
        name: 'target',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberAnaglyphArcRotateCamera',
  }
}

export class FiberStereoscopicArcRotateCameraPropsHandler
  implements PropsHandler<FiberStereoscopicArcRotateCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicArcRotateCameraProps,
    newProps: FiberStereoscopicArcRotateCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicArcRotateCameraPropsHandler(),
      new FiberArcRotateCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicArcRotateCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'alpha',
        type: 'number',
        optional: false,
      },
      {
        name: 'beta',
        type: 'number',
        optional: false,
      },
      {
        name: 'radius',
        type: 'number',
        optional: false,
      },
      {
        name: 'target',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'interaxialDistance',
        type: 'number',
        optional: false,
      },
      {
        name: 'isStereoscopicSideBySide',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberStereoscopicArcRotateCamera',
  }
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler
  implements PropsHandler<FiberVRDeviceOrientationArcRotateCameraProps>
{
  getPropertyUpdates(
    oldProps: FiberVRDeviceOrientationArcRotateCameraProps,
    newProps: FiberVRDeviceOrientationArcRotateCameraProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVRDeviceOrientationArcRotateCameraPropsHandler(),
      new FiberArcRotateCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRDeviceOrientationArcRotateCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'alpha',
        type: 'number',
        optional: false,
      },
      {
        name: 'beta',
        type: 'number',
        optional: false,
      },
      {
        name: 'radius',
        type: 'number',
        optional: false,
      },
      {
        name: 'target',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'compensateDistortion',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'vrCameraMetrics',
        type: 'BabylonjsCoreVRCameraMetrics',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberVRDeviceOrientationArcRotateCamera',
  }
}

export class FiberFlyCameraPropsHandler implements PropsHandler<FiberFlyCameraProps> {
  getPropertyUpdates(
    oldProps: FiberFlyCameraProps,
    newProps: FiberFlyCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.angularSensibility,
      newProps.angularSensibility,
      'angularSensibility',
      changedProps
    )
    checkPrimitiveDiff(oldProps.applyGravity, newProps.applyGravity, 'applyGravity', changedProps)
    checkPrimitiveDiff(oldProps.bankedTurn, newProps.bankedTurn, 'bankedTurn', changedProps)
    checkPrimitiveDiff(
      oldProps.bankedTurnLimit,
      newProps.bankedTurnLimit,
      'bankedTurnLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.bankedTurnMultiplier,
      newProps.bankedTurnMultiplier,
      'bankedTurnMultiplier',
      changedProps
    )
    checkVector3Diff(
      oldProps.cameraDirection,
      newProps.cameraDirection,
      'cameraDirection',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-x'],
      newProps['cameraDirection-x'],
      'cameraDirection.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-y'],
      newProps['cameraDirection-y'],
      'cameraDirection.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['cameraDirection-z'],
      newProps['cameraDirection-z'],
      'cameraDirection.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.checkCollisions,
      newProps.checkCollisions,
      'checkCollisions',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.collisionMask,
      newProps.collisionMask,
      'collisionMask',
      changedProps
    )
    checkVector3Diff(oldProps.ellipsoid, newProps.ellipsoid, 'ellipsoid', false, changedProps)
    checkPrimitiveDiff(
      oldProps['ellipsoid-x'],
      newProps['ellipsoid-x'],
      'ellipsoid.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-y'],
      newProps['ellipsoid-y'],
      'ellipsoid.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoid-z'],
      newProps['ellipsoid-z'],
      'ellipsoid.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.ellipsoidOffset,
      newProps.ellipsoidOffset,
      'ellipsoidOffset',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-x'],
      newProps['ellipsoidOffset-x'],
      'ellipsoidOffset.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-y'],
      newProps['ellipsoidOffset-y'],
      'ellipsoidOffset.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['ellipsoidOffset-z'],
      newProps['ellipsoidOffset-z'],
      'ellipsoidOffset.z',
      changedProps
    )
    // type: 'BabylonjsCoreFlyCameraInputsManager' property (not coded) BabylonjsCoreFlyCamera.inputs.
    checkNumericArrayDiff(
      oldProps.keysBackward,
      newProps.keysBackward,
      'keysBackward',
      changedProps
    )
    checkNumericArrayDiff(oldProps.keysDown, newProps.keysDown, 'keysDown', changedProps)
    checkNumericArrayDiff(oldProps.keysForward, newProps.keysForward, 'keysForward', changedProps)
    checkNumericArrayDiff(oldProps.keysLeft, newProps.keysLeft, 'keysLeft', changedProps)
    checkNumericArrayDiff(oldProps.keysRight, newProps.keysRight, 'keysRight', changedProps)
    checkNumericArrayDiff(oldProps.keysUp, newProps.keysUp, 'keysUp', changedProps)
    checkPrimitiveDiff(
      oldProps.needMoveForGravity,
      newProps.needMoveForGravity,
      'needMoveForGravity',
      changedProps
    )
    checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
    checkPrimitiveDiff(oldProps.rollCorrect, newProps.rollCorrect, 'rollCorrect', changedProps)
    checkQuaternionDiff(
      oldProps.rotationQuaternion,
      newProps.rotationQuaternion,
      'rotationQuaternion',
      false,
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 *
 * This code has been generated
 */
export class FiberFlyCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFlyCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FlyCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'setActiveOnSceneIfNoneActive',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberFlyCamera',
  }
}

export class FiberFollowCameraPropsHandler implements PropsHandler<FiberFollowCameraProps> {
  getPropertyUpdates(
    oldProps: FiberFollowCameraProps,
    newProps: FiberFollowCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.cameraAcceleration,
      newProps.cameraAcceleration,
      'cameraAcceleration',
      changedProps
    )
    checkPrimitiveDiff(oldProps.heightOffset, newProps.heightOffset, 'heightOffset', changedProps)
    // type: 'BabylonjsCoreFollowCameraInputsManager' property (not coded) BabylonjsCoreFollowCamera.inputs.
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreFollowCamera.lockedTarget.
    checkPrimitiveDiff(
      oldProps.lowerHeightOffsetLimit,
      newProps.lowerHeightOffsetLimit,
      'lowerHeightOffsetLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lowerRadiusLimit,
      newProps.lowerRadiusLimit,
      'lowerRadiusLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lowerRotationOffsetLimit,
      newProps.lowerRotationOffsetLimit,
      'lowerRotationOffsetLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxCameraSpeed,
      newProps.maxCameraSpeed,
      'maxCameraSpeed',
      changedProps
    )
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.rotationOffset,
      newProps.rotationOffset,
      'rotationOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperHeightOffsetLimit,
      newProps.upperHeightOffsetLimit,
      'upperHeightOffsetLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperRadiusLimit,
      newProps.upperRadiusLimit,
      'upperRadiusLimit',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperRotationOffsetLimit,
      newProps.upperRotationOffsetLimit,
      'upperRotationOffsetLimit',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 *
 * This code has been generated
 */
export class FiberFollowCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFollowCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FollowCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'lockedTarget',
        type: 'BabylonjsCoreAbstractMesh',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberFollowCamera',
  }
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<FiberArcFollowCameraProps> {
  getPropertyUpdates(
    oldProps: FiberArcFollowCameraProps,
    newProps: FiberArcFollowCameraProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
    checkPrimitiveDiff(oldProps.beta, newProps.beta, 'beta', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkMethodDiff(oldProps.setMeshTarget, newProps.setMeshTarget, 'setMeshTarget', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 *
 * This code has been generated
 */
export class FiberArcFollowCamera implements HasPropsHandlers<FiberCameraProps> {
  public readonly isTargetable = true
  private propsHandlers: PropsHandler<FiberCameraProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberArcFollowCameraPropsHandler(),
      new FiberTargetCameraPropsHandler(),
      new FiberCameraPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ArcFollowCamera',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'alpha',
        type: 'number',
        optional: false,
      },
      {
        name: 'beta',
        type: 'number',
        optional: false,
      },
      {
        name: 'radius',
        type: 'number',
        optional: false,
      },
      {
        name: 'target',
        type: 'BabylonjsCoreAbstractMesh',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isCamera: true,
    isNode: true,
    className: 'FiberArcFollowCamera',
  }
}

/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberBox implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateBox',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'depth',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'wrap',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'topBaseAt',
            type: 'number',
            optional: true,
          },
          {
            name: 'bottomBaseAt',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberBox',
  }
}

/**
 * Creates a tiled box mesh
 *
 * This code has been generated
 */
export class FiberTiledBox implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTiledBox',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'pattern',
            type: 'number',
            optional: true,
          },
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'depth',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileSize',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileWidth',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileHeight',
            type: 'number',
            optional: true,
          },
          {
            name: 'alignHorizontal',
            type: 'number',
            optional: true,
          },
          {
            name: 'alignVertical',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTiledBox',
  }
}

/**
 * Creates a sphere mesh
 * * The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
 * * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
 * * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
 * * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
 * * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberSphere implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateSphere',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'segments',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameter',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameterX',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameterY',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameterZ',
            type: 'number',
            optional: true,
          },
          {
            name: 'arc',
            type: 'number',
            optional: true,
          },
          {
            name: 'slice',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberSphere',
  }
}

/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberDisc implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateDisc',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'radius',
            type: 'number',
            optional: true,
          },
          {
            name: 'tessellation',
            type: 'number',
            optional: true,
          },
          {
            name: 'arc',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberDisc',
  }
}

/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (positive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberIcoSphere implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateIcoSphere',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'radius',
            type: 'number',
            optional: true,
          },
          {
            name: 'radiusX',
            type: 'number',
            optional: true,
          },
          {
            name: 'radiusY',
            type: 'number',
            optional: true,
          },
          {
            name: 'radiusZ',
            type: 'number',
            optional: true,
          },
          {
            name: 'flat',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'subdivisions',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberIcoSphere',
  }
}

/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
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
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateRibbon',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'pathArray',
            type: 'BabylonjsCoreVector3[][]',
            optional: false,
          },
          {
            name: 'closeArray',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'closePath',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'offset',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreMesh',
            optional: true,
          },
          {
            name: 'invertUV',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'uvs',
            type: 'BabylonjsCoreVector2[]',
            optional: true,
          },
          {
            name: 'colors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberRibbon',
  }
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
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberCylinder implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateCylinder',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameterTop',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameterBottom',
            type: 'number',
            optional: true,
          },
          {
            name: 'diameter',
            type: 'number',
            optional: true,
          },
          {
            name: 'tessellation',
            type: 'number',
            optional: true,
          },
          {
            name: 'subdivisions',
            type: 'number',
            optional: true,
          },
          {
            name: 'arc',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'hasRings',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'enclose',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'cap',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberCylinder',
  }
}

/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (positive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberTorus implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTorus',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'diameter',
            type: 'number',
            optional: true,
          },
          {
            name: 'thickness',
            type: 'number',
            optional: true,
          },
          {
            name: 'tessellation',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTorus',
  }
}

/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberTorusKnot implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTorusKnot',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'radius',
            type: 'number',
            optional: true,
          },
          {
            name: 'tube',
            type: 'number',
            optional: true,
          },
          {
            name: 'radialSegments',
            type: 'number',
            optional: true,
          },
          {
            name: 'tubularSegments',
            type: 'number',
            optional: true,
          },
          {
            name: 'p',
            type: 'number',
            optional: true,
          },
          {
            name: 'q',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTorusKnot',
  }
}

/**
 * Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
 * * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
 * * The parameter `lines` is an array of lines, each line being an array of successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
 * * The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
 * * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLineSystem implements HasPropsHandlers<FiberLinesMeshProps> {
  private propsHandlers: PropsHandler<FiberLinesMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberLinesMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLinesMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLinesMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateLineSystem',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'lines',
            type: 'BabylonjsCoreVector3[][]',
            optional: false,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreLinesMesh',
            optional: true,
          },
          {
            name: 'colors',
            type: 'BabylonjsCoreColor4[][]',
            optional: true,
          },
          {
            name: 'useVertexAlpha',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'material',
            type: 'BabylonjsCoreMaterial',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberLineSystem',
  }
}

/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
 * * The optional parameter `colors` is an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
 * * The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLines implements HasPropsHandlers<FiberLinesMeshProps> {
  private propsHandlers: PropsHandler<FiberLinesMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberLinesMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLinesMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLinesMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateLines',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'points',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreLinesMesh',
            optional: true,
          },
          {
            name: 'colors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'useVertexAlpha',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'material',
            type: 'BabylonjsCoreMaterial',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberLines',
  }
}

/**
 * Creates a dashed line mesh
 * * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
 * * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
 * * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberDashedLines implements HasPropsHandlers<FiberLinesMeshProps> {
  private propsHandlers: PropsHandler<FiberLinesMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberLinesMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLinesMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLinesMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateDashedLines',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'points',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'dashSize',
            type: 'number',
            optional: true,
          },
          {
            name: 'gapSize',
            type: 'number',
            optional: true,
          },
          {
            name: 'dashNb',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreLinesMesh',
            optional: true,
          },
          {
            name: 'useVertexAlpha',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'material',
            type: 'BabylonjsCoreMaterial',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberDashedLines',
  }
}

/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `closeShape` (boolean, default false) closes the shape when true, since v5.0.0.
 * * The parameter `closePath` (boolean, default false) closes the path when true and no caps, since v5.0.0.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 * * The optional parameter `firstNormal` (Vector3) defines the direction of the first normal of the supplied path. Consider using this for any path that is straight, and particular for paths in the xy plane.
 * * The optional `adjustFrame` (boolean, default false) will cause the internally generated Path3D tangents, normals, and binormals to be adjusted so that a) they are always well-defined, and b) they do not reverse from one path point to the next. This prevents the extruded shape from being flipped and/or rotated with resulting mesh self-intersections. This is primarily useful for straight paths that can reverse direction.
 *
 * This code has been generated
 */
export class FiberExtrudeShape implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'ExtrudeShape',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'shape',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'path',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'scale',
            type: 'number',
            optional: true,
          },
          {
            name: 'rotation',
            type: 'number',
            optional: true,
          },
          {
            name: 'closeShape',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'closePath',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'cap',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreMesh',
            optional: true,
          },
          {
            name: 'invertUV',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'firstNormal',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'adjustFrame',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberExtrudeShape',
  }
}

/**
 * Creates an custom extruded shape mesh.
 * The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the beginning of the path
 * * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
 * * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the beginning of the path
 * * It must returns a float value that will be the scale value applied to the shape on each path point
 * * The parameter `closeShape` (boolean, default false) closes the shape when true, since v5.0.0.
 * * The parameter `closePath` (boolean, default false) closes the path when true and no caps, since v5.0.0.
 * * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray` - depreciated in favor of closeShape
 * * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray` - depreciated in favor of closePath
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * The optional parameter `firstNormal` (Vector3) defines the direction of the first normal of the supplied path. It should be supplied when the path is in the xy plane, and particularly if these sections are straight, because the underlying Path3D object will pick a normal in the xy plane that causes the extrusion to be collapsed into the plane. This should be used for any path that is straight.
 * * The optional `adjustFrame` (boolean, default false) will cause the internally generated Path3D tangents, normals, and binormals to be adjusted so that a) they are always well-defined, and b) they do not reverse from one path point to the next. This prevents the extruded shape from being flipped and/or rotated with resulting mesh self-intersections. This is primarily useful for straight paths that can reverse direction.
 *
 * This code has been generated
 */
export class FiberExtrudeShapeCustom implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'ExtrudeShapeCustom',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'shape',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'path',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'scaleFunction',
            type: '(i: number, distance: number) => number',
            optional: true,
          },
          {
            name: 'rotationFunction',
            type: '(i: number, distance: number) => number',
            optional: true,
          },
          {
            name: 'ribbonCloseArray',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'ribbonClosePath',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'closeShape',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'closePath',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'cap',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreMesh',
            optional: true,
          },
          {
            name: 'invertUV',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'firstNormal',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'adjustFrame',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberExtrudeShapeCustom',
  }
}

/**
 * Creates lathe mesh.
 * The lathe is a shape with a symmetry axis : a 2D model shape is rotated around this axis to design the lathe
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
 * * The parameter `radius` (positive float, default 1) is the radius value of the lathe
 * * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
 * * The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
 * * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
 * * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLathe implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateLathe',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'shape',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'radius',
            type: 'number',
            optional: true,
          },
          {
            name: 'tessellation',
            type: 'number',
            optional: true,
          },
          {
            name: 'clip',
            type: 'number',
            optional: true,
          },
          {
            name: 'arc',
            type: 'number',
            optional: true,
          },
          {
            name: 'closed',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'cap',
            type: 'number',
            optional: true,
          },
          {
            name: 'invertUV',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberLathe',
  }
}

/**
 * Creates a tiled plane mesh
 *
 * This code has been generated
 */
export class FiberTiledPlane implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTiledPlane',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'pattern',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileSize',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileWidth',
            type: 'number',
            optional: true,
          },
          {
            name: 'tileHeight',
            type: 'number',
            optional: true,
          },
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'alignHorizontal',
            type: 'number',
            optional: true,
          },
          {
            name: 'alignVertical',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTiledPlane',
  }
}

/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberPlane implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreatePlane',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sourcePlane',
            type: 'BabylonjsCorePlane',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberPlane',
  }
}

/**
 * Creates a ground mesh
 *
 * This code has been generated
 */
export class FiberGround implements HasPropsHandlers<FiberGroundMeshProps> {
  private propsHandlers: PropsHandler<FiberGroundMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGroundMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberGroundMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGroundMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateGround',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'subdivisions',
            type: 'number',
            optional: true,
          },
          {
            name: 'subdivisionsX',
            type: 'number',
            optional: true,
          },
          {
            name: 'subdivisionsY',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberGround',
  }
}

/**
 * Creates a tiled ground mesh
 *
 * This code has been generated
 */
export class FiberTiledGround implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTiledGround',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'xmin',
            type: 'number',
            optional: false,
          },
          {
            name: 'zmin',
            type: 'number',
            optional: false,
          },
          {
            name: 'xmax',
            type: 'number',
            optional: false,
          },
          {
            name: 'zmax',
            type: 'number',
            optional: false,
          },
          {
            name: 'subdivisions',
            type: '{ w: number; h: number; }',
            optional: true,
          },
          {
            name: 'precision',
            type: '{ w: number; h: number; }',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTiledGround',
  }
}

/**
 * Creates a ground mesh from a height map. The height map download can take some frames,
 * so the mesh is not immediately ready. To wait for the mesh to be completely built,
 * you should use the `onReady` callback option.
 *
 * This code has been generated
 */
export class FiberGroundFromHeightMap implements HasPropsHandlers<FiberGroundMeshProps> {
  private propsHandlers: PropsHandler<FiberGroundMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGroundMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberGroundMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGroundMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateGroundFromHeightMap',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'url',
        type: 'string | { data: Uint8Array; width: number; height: number; }',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'width',
            type: 'number',
            optional: true,
          },
          {
            name: 'height',
            type: 'number',
            optional: true,
          },
          {
            name: 'subdivisions',
            type: 'number',
            optional: true,
          },
          {
            name: 'minHeight',
            type: 'number',
            optional: true,
          },
          {
            name: 'maxHeight',
            type: 'number',
            optional: true,
          },
          {
            name: 'colorFilter',
            type: 'BabylonjsCoreColor3',
            optional: true,
          },
          {
            name: 'alphaFilter',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'onReady',
            type: '(mesh: BabylonjsCoreGroundMesh, heightBuffer?: Float32Array) => void',
            optional: true,
          },
          {
            name: 'onError',
            type: '(message?: string, exception?: any) => void',
            optional: true,
          },
          {
            name: 'passHeightBufferInCallback',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberGroundFromHeightMap',
  }
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
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreatePolygon',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'shape',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'holes',
            type: 'BabylonjsCoreVector3[][]',
            optional: true,
          },
          {
            name: 'depth',
            type: 'number',
            optional: true,
          },
          {
            name: 'smoothingThreshold',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'wrap',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'earcutInjection',
        type: 'any',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberPolygon',
  }
}

/**
 * Creates an extruded polygon mesh, with depth in the Y direction.
 * * You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)
 *
 * This code has been generated
 */
export class FiberExtrudePolygon implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'ExtrudePolygon',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'shape',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'holes',
            type: 'BabylonjsCoreVector3[][]',
            optional: true,
          },
          {
            name: 'depth',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'wrap',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'earcutInjection',
        type: 'any',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberExtrudePolygon',
  }
}

/**
 * Creates a tube mesh.
 * The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
 * * The parameter `radius` (positive float, default 1) sets the tube radius size
 * * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
 * * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overrides the parameter `radius`
 * * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
 * * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter. The `path`Array HAS to have the SAME number of points as the previous one: https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created. The NUMBER of points CAN'T CHANGE, only their positions.
 *
 * This code has been generated
 */
export class FiberTube implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateTube',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'path',
            type: 'BabylonjsCoreVector3[]',
            optional: false,
          },
          {
            name: 'radius',
            type: 'number',
            optional: true,
          },
          {
            name: 'tessellation',
            type: 'number',
            optional: true,
          },
          {
            name: 'radiusFunction',
            type: '(i: number, distance: number) => number',
            optional: true,
          },
          {
            name: 'cap',
            type: 'number',
            optional: true,
          },
          {
            name: 'arc',
            type: 'number',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'instance',
            type: 'BabylonjsCoreMesh',
            optional: true,
          },
          {
            name: 'invertUV',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberTube',
  }
}

/**
 * Creates a polyhedron mesh
 * * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
 * * The parameter `size` (positive float, default 1) sets the polygon size
 * * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
 * * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overrides the parameter `type`
 * * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
 * * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberPolyhedron implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreatePolyhedron',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'type',
            type: 'number',
            optional: true,
          },
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeX',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeY',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeZ',
            type: 'number',
            optional: true,
          },
          {
            name: 'custom',
            type: 'any',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'flat',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberPolyhedron',
  }
}

/**
 * Creates the Mesh for a Geodesic Polyhedron
 *
 * This code has been generated
 */
export class FiberGeodesic implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateGeodesic',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'm',
            type: 'number',
            optional: true,
          },
          {
            name: 'n',
            type: 'number',
            optional: true,
          },
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeX',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeY',
            type: 'number',
            optional: true,
          },
          {
            name: 'sizeZ',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'flat',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'frontUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
          {
            name: 'backUVs',
            type: 'BabylonjsCoreVector4',
            optional: true,
          },
        ],
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberGeodesic',
  }
}

/**
 * Creates the Mesh for a Goldberg Polyhedron which is made from 12 pentagonal and the rest hexagonal faces
 *
 * This code has been generated
 */
export class FiberGoldberg implements HasPropsHandlers<FiberGoldbergMeshProps> {
  private propsHandlers: PropsHandler<FiberGoldbergMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGoldbergMeshPropsHandler(),
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberGoldbergMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGoldbergMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateGoldberg',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreGoldbergCreationOption',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberGoldberg',
  }
}

/**
 * Creates a decal mesh.
 * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
 * * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
 * * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
 * * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
 * * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
 * * The parameter `captureUVS` defines if we need to capture the uvs or compute them
 * * The parameter `cullBackFaces` defines if the back faces should be removed from the decal mesh
 * * The parameter `localMode` defines that the computations should be done with the local mesh coordinates instead of the world space coordinates.
 * *    Use this mode if you want the decal to be parented to the sourceMesh and move/rotate with it.
 * Note: Meshes with morph targets are not supported!
 *
 * This code has been generated
 */
export class FiberDecal implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateDecal',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'sourceMesh',
        type: 'BabylonjsCoreAbstractMesh',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'position',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'normal',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'size',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'angle',
            type: 'number',
            optional: true,
          },
          {
            name: 'captureUVS',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'cullBackFaces',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'localMode',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberDecal',
  }
}

/**
 * Creates a capsule or a pill mesh
 *
 * This code has been generated
 */
export class FiberCapsule implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateCapsule',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreICreateCapsuleOptions',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberCapsule',
  }
}

/**
 * Create a text mesh
 *
 * This code has been generated
 */
export class FiberText implements HasPropsHandlers<FiberMeshProps> {
  private propsHandlers: PropsHandler<FiberMeshProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshPropsHandler(),
      new FiberAbstractMeshPropsHandler(),
      new FiberTransformNodePropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'meshBuilder',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateText',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'text',
        type: 'string',
        optional: false,
      },
      {
        name: 'fontData',
        type: 'BabylonjsCoreIFontData',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'size',
            type: 'number',
            optional: true,
          },
          {
            name: 'resolution',
            type: 'number',
            optional: true,
          },
          {
            name: 'depth',
            type: 'number',
            optional: true,
          },
          {
            name: 'sideOrientation',
            type: 'number',
            optional: true,
          },
          {
            name: 'faceUV',
            type: 'BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'faceColors',
            type: 'BabylonjsCoreColor4[]',
            optional: true,
          },
          {
            name: 'perLetterFaceUV',
            type: '(letterIndex: number) => BabylonjsCoreVector4[]',
            optional: true,
          },
          {
            name: 'perLetterFaceColors',
            type: '(letterIndex: number) => BabylonjsCoreColor4[]',
            optional: true,
          },
        ],
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'earcutInjection',
        type: 'any',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    isNode: true,
    isMesh: true,
    className: 'FiberText',
  }
}

export class FiberMaterialPropsHandler implements PropsHandler<FiberMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberMaterialProps,
    newProps: FiberMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.allowShaderHotSwapping,
      newProps.allowShaderHotSwapping,
      'allowShaderHotSwapping',
      changedProps
    )
    checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
    checkPrimitiveDiff(oldProps.alphaMode, newProps.alphaMode, 'alphaMode', changedProps)
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreMaterial.animations.
    checkPrimitiveDiff(
      oldProps.backFaceCulling,
      newProps.backFaceCulling,
      'backFaceCulling',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blockDirtyMechanism,
      newProps.blockDirtyMechanism,
      'blockDirtyMechanism',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.checkReadyOnEveryCall,
      newProps.checkReadyOnEveryCall,
      'checkReadyOnEveryCall',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.checkReadyOnlyOnce,
      newProps.checkReadyOnlyOnce,
      'checkReadyOnlyOnce',
      changedProps
    )
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane2.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane3.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane4.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane5.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMaterial.clipPlane6.
    checkPrimitiveDiff(
      oldProps.cullBackFaces,
      newProps.cullBackFaces,
      'cullBackFaces',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customShaderNameResolve,
      newProps.customShaderNameResolve,
      'customShaderNameResolve',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.depthFunction,
      newProps.depthFunction,
      'depthFunction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disableColorWrite,
      newProps.disableColorWrite,
      'disableColorWrite',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disableDepthWrite,
      newProps.disableDepthWrite,
      'disableDepthWrite',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.doNotSerialize,
      newProps.doNotSerialize,
      'doNotSerialize',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fillMode, newProps.fillMode, 'fillMode', changedProps)
    checkPrimitiveDiff(oldProps.fogEnabled, newProps.fogEnabled, 'fogEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.forceDepthWrite,
      newProps.forceDepthWrite,
      'forceDepthWrite',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getRenderTargetTextures,
      newProps.getRenderTargetTextures,
      'getRenderTargetTextures',
      changedProps
    )
    checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
    // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreMaterial.inspectableCustomProperties.
    // type: '{ [id: string]: BabylonjsCoreAbstractMesh; }' property (not coded) BabylonjsCoreMaterial.meshMap.
    // type: 'any' property (not coded) BabylonjsCoreMaterial.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(
      oldProps.needDepthPrePass,
      newProps.needDepthPrePass,
      'needDepthPrePass',
      changedProps
    )
    checkLambdaDiff(oldProps.onBind, newProps.onBind, 'onBind', changedProps)
    checkLambdaDiff(oldProps.onCompiled, newProps.onCompiled, 'onCompiled', changedProps)
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onError, newProps.onError, 'onError', changedProps)
    checkPrimitiveDiff(oldProps.pointsCloud, newProps.pointsCloud, 'pointsCloud', changedProps)
    checkPrimitiveDiff(oldProps.pointSize, newProps.pointSize, 'pointSize', changedProps)
    // type: 'any' property (not coded) BabylonjsCoreMaterial.releaseVertexArrayObject.
    // type: 'any' property (not coded) BabylonjsCoreMaterial.reservedDataStore.
    checkPrimitiveDiff(
      oldProps.separateCullingPass,
      newProps.separateCullingPass,
      'separateCullingPass',
      changedProps
    )
    // type: 'BabylonjsCoreShadowDepthWrapper' property (not coded) BabylonjsCoreMaterial.shadowDepthWrapper.
    checkPrimitiveDiff(
      oldProps.sideOrientation,
      newProps.sideOrientation,
      'sideOrientation',
      changedProps
    )
    checkPrimitiveDiff(oldProps.state, newProps.state, 'state', changedProps)
    checkPrimitiveDiff(
      oldProps.transparencyMode,
      newProps.transparencyMode,
      'transparencyMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(
      oldProps.useLogarithmicDepth,
      newProps.useLogarithmicDepth,
      'useLogarithmicDepth',
      changedProps
    )
    checkPrimitiveDiff(oldProps.wireframe, newProps.wireframe, 'wireframe', changedProps)
    checkPrimitiveDiff(oldProps.zOffset, newProps.zOffset, 'zOffset', changedProps)
    checkPrimitiveDiff(oldProps.zOffsetUnits, newProps.zOffsetUnits, 'zOffsetUnits', changedProps)
    checkMethodDiff(
      oldProps.setPrePassRenderer,
      newProps.setPrePassRenderer,
      'setPrePassRenderer',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Base class for the main features of a material in Babylon.js
 *
 * This code has been generated
 */
export class FiberMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [new FiberMaterialPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Material',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'doNotAdd',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMaterial',
  }
}

export class FiberPushMaterialPropsHandler implements PropsHandler<FiberPushMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberPushMaterialProps,
    newProps: FiberPushMaterialProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Base class of materials working in push mode in babylon JS
 *
 * This code has been generated
 */
export class FiberPushMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [new FiberPushMaterialPropsHandler(), new FiberMaterialPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PushMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'storeEffectOnSubMeshes',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPushMaterial',
  }
}

export class FiberShaderMaterialPropsHandler implements PropsHandler<FiberShaderMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberShaderMaterialProps,
    newProps: FiberShaderMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkObservableDiff(
      oldProps.customBindingObservable,
      newProps.customBindingObservable,
      'customBindingObservable',
      changedProps
    )
    // type: 'string | BabylonjsCoreIShaderPath' property (not coded) BabylonjsCoreShaderMaterial.shaderPath.
    checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
    checkMethodDiff(oldProps.setArray2, newProps.setArray2, 'setArray2', changedProps)
    checkMethodDiff(oldProps.setArray3, newProps.setArray3, 'setArray3', changedProps)
    checkMethodDiff(oldProps.setArray4, newProps.setArray4, 'setArray4', changedProps)
    checkMethodDiff(oldProps.setColor3, newProps.setColor3, 'setColor3', changedProps)
    checkMethodDiff(
      oldProps.setColor3Array,
      newProps.setColor3Array,
      'setColor3Array',
      changedProps
    )
    checkMethodDiff(oldProps.setColor4, newProps.setColor4, 'setColor4', changedProps)
    checkMethodDiff(
      oldProps.setColor4Array,
      newProps.setColor4Array,
      'setColor4Array',
      changedProps
    )
    checkMethodDiff(oldProps.setDefine, newProps.setDefine, 'setDefine', changedProps)
    checkMethodDiff(
      oldProps.setExternalTexture,
      newProps.setExternalTexture,
      'setExternalTexture',
      changedProps
    )
    checkMethodDiff(oldProps.setFloat, newProps.setFloat, 'setFloat', changedProps)
    checkMethodDiff(oldProps.setFloats, newProps.setFloats, 'setFloats', changedProps)
    checkMethodDiff(oldProps.setInt, newProps.setInt, 'setInt', changedProps)
    checkMethodDiff(oldProps.setMatrices, newProps.setMatrices, 'setMatrices', changedProps)
    checkMethodDiff(oldProps.setMatrix, newProps.setMatrix, 'setMatrix', changedProps)
    checkMethodDiff(oldProps.setMatrix2x2, newProps.setMatrix2x2, 'setMatrix2x2', changedProps)
    checkMethodDiff(oldProps.setMatrix3x3, newProps.setMatrix3x3, 'setMatrix3x3', changedProps)
    checkMethodDiff(oldProps.setQuaternion, newProps.setQuaternion, 'setQuaternion', changedProps)
    checkMethodDiff(
      oldProps.setQuaternionArray,
      newProps.setQuaternionArray,
      'setQuaternionArray',
      changedProps
    )
    checkMethodDiff(
      oldProps.setStorageBuffer,
      newProps.setStorageBuffer,
      'setStorageBuffer',
      changedProps
    )
    checkMethodDiff(oldProps.setTexture, newProps.setTexture, 'setTexture', changedProps)
    checkMethodDiff(
      oldProps.setTextureArray,
      newProps.setTextureArray,
      'setTextureArray',
      changedProps
    )
    checkMethodDiff(
      oldProps.setTextureSampler,
      newProps.setTextureSampler,
      'setTextureSampler',
      changedProps
    )
    checkMethodDiff(oldProps.setUInt, newProps.setUInt, 'setUInt', changedProps)
    checkMethodDiff(
      oldProps.setUniformBuffer,
      newProps.setUniformBuffer,
      'setUniformBuffer',
      changedProps
    )
    checkMethodDiff(oldProps.setVector2, newProps.setVector2, 'setVector2', changedProps)
    checkMethodDiff(oldProps.setVector3, newProps.setVector3, 'setVector3', changedProps)
    checkMethodDiff(oldProps.setVector4, newProps.setVector4, 'setVector4', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberShaderMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ShaderMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'shaderPath',
        type: 'string | BabylonjsCoreIShaderPath',
        optional: false,
      },
      {
        name: 'options',
        type: 'Partial<BabylonjsCoreIShaderMaterialOptions>',
        optional: true,
      },
      {
        name: 'storeEffectOnSubMeshes',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberShaderMaterial',
  }
}

export class FiberOcclusionMaterialPropsHandler
  implements PropsHandler<FiberOcclusionMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberOcclusionMaterialProps,
    newProps: FiberOcclusionMaterialProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * A material to use for fast depth-only rendering.
 *
 * This code has been generated
 */
export class FiberOcclusionMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberOcclusionMaterialPropsHandler(),
      new FiberShaderMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'OcclusionMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberOcclusionMaterial',
  }
}

export class FiberGreasedLineSimpleMaterialPropsHandler
  implements PropsHandler<FiberGreasedLineSimpleMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberGreasedLineSimpleMaterialProps,
    newProps: FiberGreasedLineSimpleMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.colorMode, newProps.colorMode, 'colorMode', changedProps)
    // type: 'BabylonjsCoreColor3[]' property (not coded) BabylonjsCoreGreasedLineSimpleMaterial.colors.
    checkPrimitiveDiff(
      oldProps.colorsDistributionType,
      newProps.colorsDistributionType,
      'colorsDistributionType',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.colorsSampling,
      newProps.colorsSampling,
      'colorsSampling',
      changedProps
    )
    // type: 'BabylonjsCoreRawTexture' property (not coded) BabylonjsCoreGreasedLineSimpleMaterial.colorsTexture.
    checkPrimitiveDiff(oldProps.dashCount, newProps.dashCount, 'dashCount', changedProps)
    checkPrimitiveDiff(oldProps.dashOffset, newProps.dashOffset, 'dashOffset', changedProps)
    checkPrimitiveDiff(oldProps.dashRatio, newProps.dashRatio, 'dashRatio', changedProps)
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreGreasedLineSimpleMaterial.resolution.
    checkPrimitiveDiff(
      oldProps.sizeAttenuation,
      newProps.sizeAttenuation,
      'sizeAttenuation',
      changedProps
    )
    checkPrimitiveDiff(oldProps.useColors, newProps.useColors, 'useColors', changedProps)
    checkPrimitiveDiff(oldProps.useDash, newProps.useDash, 'useDash', changedProps)
    checkPrimitiveDiff(oldProps.visibility, newProps.visibility, 'visibility', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    checkMethodDiff(oldProps.setColor, newProps.setColor, 'setColor', changedProps)
    checkMethodDiff(oldProps.setColors, newProps.setColors, 'setColors', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * GreasedLineSimpleMaterial
 *
 * This code has been generated
 */
export class FiberGreasedLineSimpleMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGreasedLineSimpleMaterialPropsHandler(),
      new FiberShaderMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GreasedLineSimpleMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreGreasedLineMaterialOptions',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberGreasedLineSimpleMaterial',
  }
}

export class FiberHandleMaterialPropsHandler implements PropsHandler<FiberHandleMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberHandleMaterialProps,
    newProps: FiberHandleMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.animationLength,
      newProps.animationLength,
      'animationLength',
      changedProps
    )
    checkColor3Diff(oldProps.baseColor, newProps.baseColor, 'baseColor', changedProps)
    checkPrimitiveDiff(oldProps.baseScale, newProps.baseScale, 'baseScale', changedProps)
    checkPrimitiveDiff(oldProps.drag, newProps.drag, 'drag', changedProps)
    checkPrimitiveDiff(oldProps.dragScale, newProps.dragScale, 'dragScale', changedProps)
    checkPrimitiveDiff(oldProps.hover, newProps.hover, 'hover', changedProps)
    checkColor3Diff(oldProps.hoverColor, newProps.hoverColor, 'hoverColor', changedProps)
    checkPrimitiveDiff(oldProps.hoverScale, newProps.hoverScale, 'hoverScale', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render gizmo handles with fluent design
 *
 * This code has been generated
 */
export class FiberHandleMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHandleMaterialPropsHandler(),
      new FiberShaderMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HandleMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberHandleMaterial',
  }
}

export class FiberNodeMaterialPropsHandler implements PropsHandler<FiberNodeMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberNodeMaterialProps,
    newProps: FiberNodeMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreNodeMaterialBlock[]' property (not coded) BabylonjsCoreNodeMaterial.attachedBlocks.
    // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.BJSNODEMATERIALEDITOR.
    checkPrimitiveDiff(oldProps.buildId, newProps.buildId, 'buildId', changedProps)
    checkPrimitiveDiff(oldProps.comment, newProps.comment, 'comment', changedProps)
    // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.editorData.
    checkPrimitiveDiff(
      oldProps.forceAlphaBlending,
      newProps.forceAlphaBlending,
      'forceAlphaBlending',
      changedProps
    )
    checkPrimitiveDiff(oldProps.ignoreAlpha, newProps.ignoreAlpha, 'ignoreAlpha', changedProps)
    // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreNodeMaterial.imageProcessingConfiguration.
    checkPrimitiveDiff(
      oldProps.maxSimultaneousLights,
      newProps.maxSimultaneousLights,
      'maxSimultaneousLights',
      changedProps
    )
    checkPrimitiveDiff(oldProps.mode, newProps.mode, 'mode', changedProps)
    checkObservableDiff(
      oldProps.onBuildObservable,
      newProps.onBuildObservable,
      'onBuildObservable',
      changedProps
    )
    // type: 'BabylonjsCoreINodeMaterialOptions' property (not coded) BabylonjsCoreNodeMaterial.options.
    checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
    checkMethodDiff(oldProps.addOutputNode, newProps.addOutputNode, 'addOutputNode', changedProps)
    checkMethodDiff(
      oldProps.setPrePassRenderer,
      newProps.setPrePassRenderer,
      'setPrePassRenderer',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a node based material built by assembling shader blocks
 *
 * This code has been generated
 */
export class FiberNodeMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberNodeMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'NodeMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'Partial<BabylonjsCoreINodeMaterialOptions>',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberNodeMaterial',
  }
}

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<FiberPBRBaseMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberPBRBaseMaterialProps,
    newProps: FiberPBRBaseMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.debugFactor, newProps.debugFactor, 'debugFactor', changedProps)
    checkPrimitiveDiff(oldProps.debugLimit, newProps.debugLimit, 'debugLimit', changedProps)
    checkPrimitiveDiff(oldProps.debugMode, newProps.debugMode, 'debugMode', changedProps)
    checkPrimitiveDiff(
      oldProps.realTimeFiltering,
      newProps.realTimeFiltering,
      'realTimeFiltering',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.realTimeFilteringQuality,
      newProps.realTimeFilteringQuality,
      'realTimeFilteringQuality',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR
 *
 * This code has been generated
 */
export class FiberPBRBaseMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRBaseMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRBaseMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPBRBaseMaterial',
  }
}

export class FiberPBRBaseSimpleMaterialPropsHandler
  implements PropsHandler<FiberPBRBaseSimpleMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRBaseSimpleMaterialProps,
    newProps: FiberPBRBaseSimpleMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
    checkPrimitiveDiff(
      oldProps.disableLighting,
      newProps.disableLighting,
      'disableLighting',
      changedProps
    )
    checkPrimitiveDiff(oldProps.doubleSided, newProps.doubleSided, 'doubleSided', changedProps)
    checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
    checkTextureDiff(
      oldProps.emissiveTexture,
      newProps.emissiveTexture,
      'emissiveTexture',
      changedProps
    )
    checkTextureDiff(
      oldProps.environmentTexture,
      newProps.environmentTexture,
      'environmentTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapX,
      newProps.invertNormalMapX,
      'invertNormalMapX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapY,
      newProps.invertNormalMapY,
      'invertNormalMapY',
      changedProps
    )
    checkTextureDiff(
      oldProps.lightmapTexture,
      newProps.lightmapTexture,
      'lightmapTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxSimultaneousLights,
      newProps.maxSimultaneousLights,
      'maxSimultaneousLights',
      changedProps
    )
    checkTextureDiff(oldProps.normalTexture, newProps.normalTexture, 'normalTexture', changedProps)
    checkPrimitiveDiff(
      oldProps.occlusionStrength,
      newProps.occlusionStrength,
      'occlusionStrength',
      changedProps
    )
    checkTextureDiff(
      oldProps.occlusionTexture,
      newProps.occlusionTexture,
      'occlusionTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useLightmapAsShadowmap,
      newProps.useLightmapAsShadowmap,
      'useLightmapAsShadowmap',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRBaseSimpleMaterialPropsHandler(),
      new FiberPBRBaseMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRBaseSimpleMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPBRBaseSimpleMaterial',
  }
}

export class FiberPBRMetallicRoughnessMaterialPropsHandler
  implements PropsHandler<FiberPBRMetallicRoughnessMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRMetallicRoughnessMaterialProps,
    newProps: FiberPBRMetallicRoughnessMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.baseColor, newProps.baseColor, 'baseColor', changedProps)
    checkTextureDiff(oldProps.baseTexture, newProps.baseTexture, 'baseTexture', changedProps)
    checkPrimitiveDiff(oldProps.metallic, newProps.metallic, 'metallic', changedProps)
    checkTextureDiff(
      oldProps.metallicRoughnessTexture,
      newProps.metallicRoughnessTexture,
      'metallicRoughnessTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The PBR material of BJS following the metal roughness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/README.md
 *
 * This code has been generated
 */
export class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRMetallicRoughnessMaterialPropsHandler(),
      new FiberPBRBaseSimpleMaterialPropsHandler(),
      new FiberPBRBaseMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRMetallicRoughnessMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPBRMetallicRoughnessMaterial',
  }
}

export class FiberPBRSpecularGlossinessMaterialPropsHandler
  implements PropsHandler<FiberPBRSpecularGlossinessMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRSpecularGlossinessMaterialProps,
    newProps: FiberPBRSpecularGlossinessMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.diffuseColor, newProps.diffuseColor, 'diffuseColor', changedProps)
    checkTextureDiff(
      oldProps.diffuseTexture,
      newProps.diffuseTexture,
      'diffuseTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.glossiness, newProps.glossiness, 'glossiness', changedProps)
    checkColor3Diff(oldProps.specularColor, newProps.specularColor, 'specularColor', changedProps)
    checkTextureDiff(
      oldProps.specularGlossinessTexture,
      newProps.specularGlossinessTexture,
      'specularGlossinessTexture',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRSpecularGlossinessMaterialPropsHandler(),
      new FiberPBRBaseSimpleMaterialPropsHandler(),
      new FiberPBRBaseMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRSpecularGlossinessMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPBRSpecularGlossinessMaterial',
  }
}

export class FiberPBRMaterialPropsHandler implements PropsHandler<FiberPBRMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberPBRMaterialProps,
    newProps: FiberPBRMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.albedoColor, newProps.albedoColor, 'albedoColor', changedProps)
    checkTextureDiff(oldProps.albedoTexture, newProps.albedoTexture, 'albedoTexture', changedProps)
    checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
    checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
    checkTextureDiff(
      oldProps.ambientTexture,
      newProps.ambientTexture,
      'ambientTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ambientTextureImpactOnAnalyticalLights,
      newProps.ambientTextureImpactOnAnalyticalLights,
      'ambientTextureImpactOnAnalyticalLights',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ambientTextureStrength,
      newProps.ambientTextureStrength,
      'ambientTextureStrength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.applyDecalMapAfterDetailMap,
      newProps.applyDecalMapAfterDetailMap,
      'applyDecalMapAfterDetailMap',
      changedProps
    )
    checkTextureDiff(oldProps.bumpTexture, newProps.bumpTexture, 'bumpTexture', changedProps)
    // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCorePBRMaterial.cameraColorCurves.
    checkPrimitiveDiff(
      oldProps.cameraColorCurvesEnabled,
      newProps.cameraColorCurvesEnabled,
      'cameraColorCurvesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraColorGradingEnabled,
      newProps.cameraColorGradingEnabled,
      'cameraColorGradingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.cameraColorGradingTexture,
      newProps.cameraColorGradingTexture,
      'cameraColorGradingTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraContrast,
      newProps.cameraContrast,
      'cameraContrast',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraExposure,
      newProps.cameraExposure,
      'cameraExposure',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraToneMappingEnabled,
      newProps.cameraToneMappingEnabled,
      'cameraToneMappingEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.directIntensity,
      newProps.directIntensity,
      'directIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disableBumpMap,
      newProps.disableBumpMap,
      'disableBumpMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disableLighting,
      newProps.disableLighting,
      'disableLighting',
      changedProps
    )
    checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
    checkPrimitiveDiff(
      oldProps.emissiveIntensity,
      newProps.emissiveIntensity,
      'emissiveIntensity',
      changedProps
    )
    checkTextureDiff(
      oldProps.emissiveTexture,
      newProps.emissiveTexture,
      'emissiveTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableSpecularAntiAliasing,
      newProps.enableSpecularAntiAliasing,
      'enableSpecularAntiAliasing',
      changedProps
    )
    checkTextureDiff(
      oldProps.environmentBRDFTexture,
      newProps.environmentBRDFTexture,
      'environmentBRDFTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.environmentIntensity,
      newProps.environmentIntensity,
      'environmentIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceAlphaTest,
      newProps.forceAlphaTest,
      'forceAlphaTest',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceIrradianceInFragment,
      newProps.forceIrradianceInFragment,
      'forceIrradianceInFragment',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceNormalForward,
      newProps.forceNormalForward,
      'forceNormalForward',
      changedProps
    )
    // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCorePBRMaterial.imageProcessingConfiguration.
    checkPrimitiveDiff(
      oldProps.indexOfRefraction,
      newProps.indexOfRefraction,
      'indexOfRefraction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapX,
      newProps.invertNormalMapX,
      'invertNormalMapX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapY,
      newProps.invertNormalMapY,
      'invertNormalMapY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertRefractionY,
      newProps.invertRefractionY,
      'invertRefractionY',
      changedProps
    )
    checkTextureDiff(
      oldProps.lightmapTexture,
      newProps.lightmapTexture,
      'lightmapTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.linkRefractionWithTransparency,
      newProps.linkRefractionWithTransparency,
      'linkRefractionWithTransparency',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxSimultaneousLights,
      newProps.maxSimultaneousLights,
      'maxSimultaneousLights',
      changedProps
    )
    checkPrimitiveDiff(oldProps.metallic, newProps.metallic, 'metallic', changedProps)
    checkPrimitiveDiff(
      oldProps.metallicF0Factor,
      newProps.metallicF0Factor,
      'metallicF0Factor',
      changedProps
    )
    checkColor3Diff(
      oldProps.metallicReflectanceColor,
      newProps.metallicReflectanceColor,
      'metallicReflectanceColor',
      changedProps
    )
    checkTextureDiff(
      oldProps.metallicReflectanceTexture,
      newProps.metallicReflectanceTexture,
      'metallicReflectanceTexture',
      changedProps
    )
    checkTextureDiff(
      oldProps.metallicTexture,
      newProps.metallicTexture,
      'metallicTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.microSurface, newProps.microSurface, 'microSurface', changedProps)
    checkTextureDiff(
      oldProps.microSurfaceTexture,
      newProps.microSurfaceTexture,
      'microSurfaceTexture',
      changedProps
    )
    checkTextureDiff(
      oldProps.opacityTexture,
      newProps.opacityTexture,
      'opacityTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.parallaxScaleBias,
      newProps.parallaxScaleBias,
      'parallaxScaleBias',
      changedProps
    )
    checkTextureDiff(
      oldProps.reflectanceTexture,
      newProps.reflectanceTexture,
      'reflectanceTexture',
      changedProps
    )
    checkColor3Diff(
      oldProps.reflectionColor,
      newProps.reflectionColor,
      'reflectionColor',
      changedProps
    )
    checkTextureDiff(
      oldProps.reflectionTexture,
      newProps.reflectionTexture,
      'reflectionTexture',
      changedProps
    )
    checkColor3Diff(
      oldProps.reflectivityColor,
      newProps.reflectivityColor,
      'reflectivityColor',
      changedProps
    )
    checkTextureDiff(
      oldProps.reflectivityTexture,
      newProps.reflectivityTexture,
      'reflectivityTexture',
      changedProps
    )
    checkTextureDiff(
      oldProps.refractionTexture,
      newProps.refractionTexture,
      'refractionTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
    checkPrimitiveDiff(
      oldProps.specularIntensity,
      newProps.specularIntensity,
      'specularIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.twoSidedLighting,
      newProps.twoSidedLighting,
      'twoSidedLighting',
      changedProps
    )
    checkPrimitiveDiff(oldProps.unlit, newProps.unlit, 'unlit', changedProps)
    checkPrimitiveDiff(
      oldProps.useAlphaFresnel,
      newProps.useAlphaFresnel,
      'useAlphaFresnel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAlphaFromAlbedoTexture,
      newProps.useAlphaFromAlbedoTexture,
      'useAlphaFromAlbedoTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAmbientInGrayScale,
      newProps.useAmbientInGrayScale,
      'useAmbientInGrayScale',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAmbientOcclusionFromMetallicTextureRed,
      newProps.useAmbientOcclusionFromMetallicTextureRed,
      'useAmbientOcclusionFromMetallicTextureRed',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAutoMicroSurfaceFromReflectivityMap,
      newProps.useAutoMicroSurfaceFromReflectivityMap,
      'useAutoMicroSurfaceFromReflectivityMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGLTFLightFalloff,
      newProps.useGLTFLightFalloff,
      'useGLTFLightFalloff',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useHorizonOcclusion,
      newProps.useHorizonOcclusion,
      'useHorizonOcclusion',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useLightmapAsShadowmap,
      newProps.useLightmapAsShadowmap,
      'useLightmapAsShadowmap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useLinearAlphaFresnel,
      newProps.useLinearAlphaFresnel,
      'useLinearAlphaFresnel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useMetallnessFromMetallicTextureBlue,
      newProps.useMetallnessFromMetallicTextureBlue,
      'useMetallnessFromMetallicTextureBlue',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useMicroSurfaceFromReflectivityMapAlpha,
      newProps.useMicroSurfaceFromReflectivityMapAlpha,
      'useMicroSurfaceFromReflectivityMapAlpha',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useObjectSpaceNormalMap,
      newProps.useObjectSpaceNormalMap,
      'useObjectSpaceNormalMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useOnlyMetallicFromMetallicReflectanceTexture,
      newProps.useOnlyMetallicFromMetallicReflectanceTexture,
      'useOnlyMetallicFromMetallicReflectanceTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.useParallax, newProps.useParallax, 'useParallax', changedProps)
    checkPrimitiveDiff(
      oldProps.useParallaxOcclusion,
      newProps.useParallaxOcclusion,
      'useParallaxOcclusion',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.usePhysicalLightFalloff,
      newProps.usePhysicalLightFalloff,
      'usePhysicalLightFalloff',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRadianceOcclusion,
      newProps.useRadianceOcclusion,
      'useRadianceOcclusion',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRadianceOverAlpha,
      newProps.useRadianceOverAlpha,
      'useRadianceOverAlpha',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRoughnessFromMetallicTextureAlpha,
      newProps.useRoughnessFromMetallicTextureAlpha,
      'useRoughnessFromMetallicTextureAlpha',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRoughnessFromMetallicTextureGreen,
      newProps.useRoughnessFromMetallicTextureGreen,
      'useRoughnessFromMetallicTextureGreen',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSpecularOverAlpha,
      newProps.useSpecularOverAlpha,
      'useSpecularOverAlpha',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Physically based material of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR
 *
 * This code has been generated
 */
export class FiberPBRMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRMaterialPropsHandler(),
      new FiberPBRBaseMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberPBRMaterial',
  }
}

export class FiberStandardMaterialPropsHandler implements PropsHandler<FiberStandardMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberStandardMaterialProps,
    newProps: FiberStandardMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.alphaCutOff, newProps.alphaCutOff, 'alphaCutOff', changedProps)
    checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
    checkTextureDiff(
      oldProps.ambientTexture,
      newProps.ambientTexture,
      'ambientTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.AmbientTextureEnabled,
      newProps.AmbientTextureEnabled,
      'AmbientTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.applyDecalMapAfterDetailMap,
      newProps.applyDecalMapAfterDetailMap,
      'applyDecalMapAfterDetailMap',
      changedProps
    )
    checkTextureDiff(oldProps.bumpTexture, newProps.bumpTexture, 'bumpTexture', changedProps)
    checkPrimitiveDiff(
      oldProps.BumpTextureEnabled,
      newProps.BumpTextureEnabled,
      'BumpTextureEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreStandardMaterial.cameraColorCurves.
    checkPrimitiveDiff(
      oldProps.cameraColorCurvesEnabled,
      newProps.cameraColorCurvesEnabled,
      'cameraColorCurvesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraColorGradingEnabled,
      newProps.cameraColorGradingEnabled,
      'cameraColorGradingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.cameraColorGradingTexture,
      newProps.cameraColorGradingTexture,
      'cameraColorGradingTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraContrast,
      newProps.cameraContrast,
      'cameraContrast',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraExposure,
      newProps.cameraExposure,
      'cameraExposure',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraToneMappingEnabled,
      newProps.cameraToneMappingEnabled,
      'cameraToneMappingEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ColorGradingTextureEnabled,
      newProps.ColorGradingTextureEnabled,
      'ColorGradingTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.DetailTextureEnabled,
      newProps.DetailTextureEnabled,
      'DetailTextureEnabled',
      changedProps
    )
    checkColor3Diff(oldProps.diffuseColor, newProps.diffuseColor, 'diffuseColor', changedProps)
    checkFresnelParametersDiff(
      oldProps.diffuseFresnelParameters,
      newProps.diffuseFresnelParameters,
      'diffuseFresnelParameters',
      changedProps
    )
    checkTextureDiff(
      oldProps.diffuseTexture,
      newProps.diffuseTexture,
      'diffuseTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.DiffuseTextureEnabled,
      newProps.DiffuseTextureEnabled,
      'DiffuseTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disableLighting,
      newProps.disableLighting,
      'disableLighting',
      changedProps
    )
    checkColor3Diff(oldProps.emissiveColor, newProps.emissiveColor, 'emissiveColor', changedProps)
    checkFresnelParametersDiff(
      oldProps.emissiveFresnelParameters,
      newProps.emissiveFresnelParameters,
      'emissiveFresnelParameters',
      changedProps
    )
    checkTextureDiff(
      oldProps.emissiveTexture,
      newProps.emissiveTexture,
      'emissiveTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.EmissiveTextureEnabled,
      newProps.EmissiveTextureEnabled,
      'EmissiveTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.FresnelEnabled,
      newProps.FresnelEnabled,
      'FresnelEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreStandardMaterial.imageProcessingConfiguration.
    checkPrimitiveDiff(
      oldProps.indexOfRefraction,
      newProps.indexOfRefraction,
      'indexOfRefraction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapX,
      newProps.invertNormalMapX,
      'invertNormalMapX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertNormalMapY,
      newProps.invertNormalMapY,
      'invertNormalMapY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertRefractionY,
      newProps.invertRefractionY,
      'invertRefractionY',
      changedProps
    )
    checkTextureDiff(
      oldProps.lightmapTexture,
      newProps.lightmapTexture,
      'lightmapTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.LightmapTextureEnabled,
      newProps.LightmapTextureEnabled,
      'LightmapTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.linkEmissiveWithDiffuse,
      newProps.linkEmissiveWithDiffuse,
      'linkEmissiveWithDiffuse',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxSimultaneousLights,
      newProps.maxSimultaneousLights,
      'maxSimultaneousLights',
      changedProps
    )
    checkFresnelParametersDiff(
      oldProps.opacityFresnelParameters,
      newProps.opacityFresnelParameters,
      'opacityFresnelParameters',
      changedProps
    )
    checkTextureDiff(
      oldProps.opacityTexture,
      newProps.opacityTexture,
      'opacityTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.OpacityTextureEnabled,
      newProps.OpacityTextureEnabled,
      'OpacityTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.parallaxScaleBias,
      newProps.parallaxScaleBias,
      'parallaxScaleBias',
      changedProps
    )
    checkFresnelParametersDiff(
      oldProps.reflectionFresnelParameters,
      newProps.reflectionFresnelParameters,
      'reflectionFresnelParameters',
      changedProps
    )
    checkTextureDiff(
      oldProps.reflectionTexture,
      newProps.reflectionTexture,
      'reflectionTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ReflectionTextureEnabled,
      newProps.ReflectionTextureEnabled,
      'ReflectionTextureEnabled',
      changedProps
    )
    checkFresnelParametersDiff(
      oldProps.refractionFresnelParameters,
      newProps.refractionFresnelParameters,
      'refractionFresnelParameters',
      changedProps
    )
    checkTextureDiff(
      oldProps.refractionTexture,
      newProps.refractionTexture,
      'refractionTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.RefractionTextureEnabled,
      newProps.RefractionTextureEnabled,
      'RefractionTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
    checkColor3Diff(oldProps.specularColor, newProps.specularColor, 'specularColor', changedProps)
    checkPrimitiveDiff(
      oldProps.specularPower,
      newProps.specularPower,
      'specularPower',
      changedProps
    )
    checkTextureDiff(
      oldProps.specularTexture,
      newProps.specularTexture,
      'specularTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SpecularTextureEnabled,
      newProps.SpecularTextureEnabled,
      'SpecularTextureEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.twoSidedLighting,
      newProps.twoSidedLighting,
      'twoSidedLighting',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAlphaFromDiffuseTexture,
      newProps.useAlphaFromDiffuseTexture,
      'useAlphaFromDiffuseTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useEmissiveAsIllumination,
      newProps.useEmissiveAsIllumination,
      'useEmissiveAsIllumination',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGlossinessFromSpecularMapAlpha,
      newProps.useGlossinessFromSpecularMapAlpha,
      'useGlossinessFromSpecularMapAlpha',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useLightmapAsShadowmap,
      newProps.useLightmapAsShadowmap,
      'useLightmapAsShadowmap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useObjectSpaceNormalMap,
      newProps.useObjectSpaceNormalMap,
      'useObjectSpaceNormalMap',
      changedProps
    )
    checkPrimitiveDiff(oldProps.useParallax, newProps.useParallax, 'useParallax', changedProps)
    checkPrimitiveDiff(
      oldProps.useParallaxOcclusion,
      newProps.useParallaxOcclusion,
      'useParallaxOcclusion',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useReflectionFresnelFromSpecular,
      newProps.useReflectionFresnelFromSpecular,
      'useReflectionFresnelFromSpecular',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useReflectionOverAlpha,
      newProps.useReflectionOverAlpha,
      'useReflectionOverAlpha',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSpecularOverAlpha,
      newProps.useSpecularOverAlpha,
      'useSpecularOverAlpha',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 *
 * This code has been generated
 */
export class FiberStandardMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStandardMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StandardMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberStandardMaterial',
  }
}

export class FiberBackgroundMaterialPropsHandler
  implements PropsHandler<FiberBackgroundMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberBackgroundMaterialProps,
    newProps: FiberBackgroundMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(
      oldProps._perceptualColor,
      newProps._perceptualColor,
      '_perceptualColor',
      changedProps
    )
    // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorCurves.
    checkPrimitiveDiff(
      oldProps.cameraColorCurvesEnabled,
      newProps.cameraColorCurvesEnabled,
      'cameraColorCurvesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraColorGradingEnabled,
      newProps.cameraColorGradingEnabled,
      'cameraColorGradingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.cameraColorGradingTexture,
      newProps.cameraColorGradingTexture,
      'cameraColorGradingTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraContrast,
      newProps.cameraContrast,
      'cameraContrast',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraExposure,
      newProps.cameraExposure,
      'cameraExposure',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cameraToneMappingEnabled,
      newProps.cameraToneMappingEnabled,
      'cameraToneMappingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.diffuseTexture,
      newProps.diffuseTexture,
      'diffuseTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableGroundProjection,
      newProps.enableGroundProjection,
      'enableGroundProjection',
      changedProps
    )
    checkPrimitiveDiff(oldProps.enableNoise, newProps.enableNoise, 'enableNoise', changedProps)
    checkPrimitiveDiff(
      oldProps.fovMultiplier,
      newProps.fovMultiplier,
      'fovMultiplier',
      changedProps
    )
    // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreBackgroundMaterial.imageProcessingConfiguration.
    checkPrimitiveDiff(
      oldProps.maxSimultaneousLights,
      newProps.maxSimultaneousLights,
      'maxSimultaneousLights',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.opacityFresnel,
      newProps.opacityFresnel,
      'opacityFresnel',
      changedProps
    )
    checkColor3Diff(oldProps.primaryColor, newProps.primaryColor, 'primaryColor', changedProps)
    checkPrimitiveDiff(
      oldProps.primaryColorHighlightLevel,
      newProps.primaryColorHighlightLevel,
      'primaryColorHighlightLevel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.primaryColorShadowLevel,
      newProps.primaryColorShadowLevel,
      'primaryColorShadowLevel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.projectedGroundHeight,
      newProps.projectedGroundHeight,
      'projectedGroundHeight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.projectedGroundRadius,
      newProps.projectedGroundRadius,
      'projectedGroundRadius',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionAmount,
      newProps.reflectionAmount,
      'reflectionAmount',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionBlur,
      newProps.reflectionBlur,
      'reflectionBlur',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionFalloffDistance,
      newProps.reflectionFalloffDistance,
      'reflectionFalloffDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionFresnel,
      newProps.reflectionFresnel,
      'reflectionFresnel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionReflectance0,
      newProps.reflectionReflectance0,
      'reflectionReflectance0',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionReflectance90,
      newProps.reflectionReflectance90,
      'reflectionReflectance90',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionStandardFresnelWeight,
      newProps.reflectionStandardFresnelWeight,
      'reflectionStandardFresnelWeight',
      changedProps
    )
    checkTextureDiff(
      oldProps.reflectionTexture,
      newProps.reflectionTexture,
      'reflectionTexture',
      changedProps
    )
    checkVector3Diff(oldProps.sceneCenter, newProps.sceneCenter, 'sceneCenter', false, changedProps)
    checkPrimitiveDiff(
      oldProps['sceneCenter-x'],
      newProps['sceneCenter-x'],
      'sceneCenter.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['sceneCenter-y'],
      newProps['sceneCenter-y'],
      'sceneCenter.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['sceneCenter-z'],
      newProps['sceneCenter-z'],
      'sceneCenter.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.shadowLevel, newProps.shadowLevel, 'shadowLevel', changedProps)
    // type: 'BabylonjsCoreIShadowLight[]' property (not coded) BabylonjsCoreBackgroundMaterial.shadowLights.
    checkPrimitiveDiff(oldProps.shadowOnly, newProps.shadowOnly, 'shadowOnly', changedProps)
    checkPrimitiveDiff(oldProps.switchToBGR, newProps.switchToBGR, 'switchToBGR', changedProps)
    checkPrimitiveDiff(
      oldProps.useEquirectangularFOV,
      newProps.useEquirectangularFOV,
      'useEquirectangularFOV',
      changedProps
    )
    checkPrimitiveDiff(oldProps.useRGBColor, newProps.useRGBColor, 'useRGBColor', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Background material used to create an efficient environment around your scene.
 *
 * This code has been generated
 */
export class FiberBackgroundMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberBackgroundMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BackgroundMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberBackgroundMaterial',
  }
}

export class FiberGaussianSplattingMaterialPropsHandler
  implements PropsHandler<FiberGaussianSplattingMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberGaussianSplattingMaterialProps,
    newProps: FiberGaussianSplattingMaterialProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * GaussianSplattingMaterial material used to render Gaussian Splatting
 *
 * This code has been generated
 */
export class FiberGaussianSplattingMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGaussianSplattingMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GaussianSplattingMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberGaussianSplattingMaterial',
  }
}

export class FiberFluentMaterialPropsHandler implements PropsHandler<FiberFluentMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberFluentMaterialProps,
    newProps: FiberFluentMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.albedoColor, newProps.albedoColor, 'albedoColor', changedProps)
    checkTextureDiff(oldProps.albedoTexture, newProps.albedoTexture, 'albedoTexture', changedProps)
    checkPrimitiveDiff(
      oldProps.borderMinValue,
      newProps.borderMinValue,
      'borderMinValue',
      changedProps
    )
    checkPrimitiveDiff(oldProps.borderWidth, newProps.borderWidth, 'borderWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.edgeSmoothingValue,
      newProps.edgeSmoothingValue,
      'edgeSmoothingValue',
      changedProps
    )
    checkColor4Diff(oldProps.hoverColor, newProps.hoverColor, 'hoverColor', changedProps)
    checkVector3Diff(
      oldProps.hoverPosition,
      newProps.hoverPosition,
      'hoverPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['hoverPosition-x'],
      newProps['hoverPosition-x'],
      'hoverPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['hoverPosition-y'],
      newProps['hoverPosition-y'],
      'hoverPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['hoverPosition-z'],
      newProps['hoverPosition-z'],
      'hoverPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.hoverRadius, newProps.hoverRadius, 'hoverRadius', changedProps)
    checkColor3Diff(
      oldProps.innerGlowColor,
      newProps.innerGlowColor,
      'innerGlowColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.innerGlowColorIntensity,
      newProps.innerGlowColorIntensity,
      'innerGlowColorIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderBorders,
      newProps.renderBorders,
      'renderBorders',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderHoverLight,
      newProps.renderHoverLight,
      'renderHoverLight',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render controls with fluent design
 *
 * This code has been generated
 */
export class FiberFluentMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFluentMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FluentMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberFluentMaterial',
  }
}

export class FiberFluentButtonMaterialPropsHandler
  implements PropsHandler<FiberFluentButtonMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberFluentButtonMaterialProps,
    newProps: FiberFluentButtonMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(
      oldProps.activeFaceDir,
      newProps.activeFaceDir,
      'activeFaceDir',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceDir-x'],
      newProps['activeFaceDir-x'],
      'activeFaceDir.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceDir-y'],
      newProps['activeFaceDir-y'],
      'activeFaceDir.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceDir-z'],
      newProps['activeFaceDir-z'],
      'activeFaceDir.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.activeFaceUp,
      newProps.activeFaceUp,
      'activeFaceUp',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceUp-x'],
      newProps['activeFaceUp-x'],
      'activeFaceUp.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceUp-y'],
      newProps['activeFaceUp-y'],
      'activeFaceUp.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['activeFaceUp-z'],
      newProps['activeFaceUp-z'],
      'activeFaceUp.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFadeLength,
      newProps.blobFadeLength,
      'blobFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFarDistance,
      newProps.blobFarDistance,
      'blobFarDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFarSize, newProps.blobFarSize, 'blobFarSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobIntensity,
      newProps.blobIntensity,
      'blobIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobNearDistance,
      newProps.blobNearDistance,
      'blobNearDistance',
      changedProps
    )
    checkColor4Diff(oldProps.edgeColor, newProps.edgeColor, 'edgeColor', changedProps)
    checkPrimitiveDiff(oldProps.edgeWidth, newProps.edgeWidth, 'edgeWidth', changedProps)
    checkPrimitiveDiff(oldProps.enableFade, newProps.enableFade, 'enableFade', changedProps)
    checkPrimitiveDiff(oldProps.fadeWidth, newProps.fadeWidth, 'fadeWidth', changedProps)
    checkVector3Diff(
      oldProps.globalLeftIndexTipPosition,
      newProps.globalLeftIndexTipPosition,
      'globalLeftIndexTipPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-x'],
      newProps['globalLeftIndexTipPosition-x'],
      'globalLeftIndexTipPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-y'],
      newProps['globalLeftIndexTipPosition-y'],
      'globalLeftIndexTipPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-z'],
      newProps['globalLeftIndexTipPosition-z'],
      'globalLeftIndexTipPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.globalRightIndexTipPosition,
      newProps.globalRightIndexTipPosition,
      'globalRightIndexTipPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-x'],
      newProps['globalRightIndexTipPosition-x'],
      'globalRightIndexTipPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-y'],
      newProps['globalRightIndexTipPosition-y'],
      'globalRightIndexTipPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-z'],
      newProps['globalRightIndexTipPosition-z'],
      'globalRightIndexTipPosition.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.leftBlobEnable,
      newProps.leftBlobEnable,
      'leftBlobEnable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.leftBlobFade, newProps.leftBlobFade, 'leftBlobFade', changedProps)
    checkPrimitiveDiff(
      oldProps.leftBlobInnerFade,
      newProps.leftBlobInnerFade,
      'leftBlobInnerFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.leftBlobNearSize,
      newProps.leftBlobNearSize,
      'leftBlobNearSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.leftBlobPulse,
      newProps.leftBlobPulse,
      'leftBlobPulse',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityAnisotropy,
      newProps.proximityAnisotropy,
      'proximityAnisotropy',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityFarDistance,
      newProps.proximityFarDistance,
      'proximityFarDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityMaxIntensity,
      newProps.proximityMaxIntensity,
      'proximityMaxIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityNearRadius,
      newProps.proximityNearRadius,
      'proximityNearRadius',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rightBlobEnable,
      newProps.rightBlobEnable,
      'rightBlobEnable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rightBlobFade,
      newProps.rightBlobFade,
      'rightBlobFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rightBlobInnerFade,
      newProps.rightBlobInnerFade,
      'rightBlobInnerFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rightBlobNearSize,
      newProps.rightBlobNearSize,
      'rightBlobNearSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rightBlobPulse,
      newProps.rightBlobPulse,
      'rightBlobPulse',
      changedProps
    )
    checkPrimitiveDiff(oldProps.selected, newProps.selected, 'selected', changedProps)
    checkPrimitiveDiff(
      oldProps.selectedDistance,
      newProps.selectedDistance,
      'selectedDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectedFadeLength,
      newProps.selectedFadeLength,
      'selectedFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFade,
      newProps.selectionFade,
      'selectionFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFadeSize,
      newProps.selectionFadeSize,
      'selectionFadeSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFuzz,
      newProps.selectionFuzz,
      'selectionFuzz',
      changedProps
    )
    checkPrimitiveDiff(oldProps.showFrame, newProps.showFrame, 'showFrame', changedProps)
    checkPrimitiveDiff(
      oldProps.smoothActiveFace,
      newProps.smoothActiveFace,
      'smoothActiveFace',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useBlobTexture,
      newProps.useBlobTexture,
      'useBlobTexture',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render square buttons with fluent design
 *
 * This code has been generated
 */
export class FiberFluentButtonMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFluentButtonMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FluentButtonMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberFluentButtonMaterial',
  }
}

export class FiberFluentBackplateMaterialPropsHandler
  implements PropsHandler<FiberFluentBackplateMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberFluentBackplateMaterialProps,
    newProps: FiberFluentBackplateMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.absoluteSizes,
      newProps.absoluteSizes,
      'absoluteSizes',
      changedProps
    )
    checkColor4Diff(oldProps.baseColor, newProps.baseColor, 'baseColor', changedProps)
    checkPrimitiveDiff(oldProps.blobFade, newProps.blobFade, 'blobFade', changedProps)
    checkPrimitiveDiff(oldProps.blobFade2, newProps.blobFade2, 'blobFade2', changedProps)
    checkPrimitiveDiff(
      oldProps.blobFadeLength,
      newProps.blobFadeLength,
      'blobFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFarDistance,
      newProps.blobFarDistance,
      'blobFarDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFarSize, newProps.blobFarSize, 'blobFarSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobIntensity,
      newProps.blobIntensity,
      'blobIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobNearDistance,
      newProps.blobNearDistance,
      'blobNearDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobNearSize, newProps.blobNearSize, 'blobNearSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobNearSize2,
      newProps.blobNearSize2,
      'blobNearSize2',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobPulse, newProps.blobPulse, 'blobPulse', changedProps)
    checkPrimitiveDiff(oldProps.blobPulse2, newProps.blobPulse2, 'blobPulse2', changedProps)
    checkPrimitiveDiff(oldProps.fadeOut, newProps.fadeOut, 'fadeOut', changedProps)
    checkVector3Diff(
      oldProps.globalLeftIndexTipPosition,
      newProps.globalLeftIndexTipPosition,
      'globalLeftIndexTipPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-x'],
      newProps['globalLeftIndexTipPosition-x'],
      'globalLeftIndexTipPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-y'],
      newProps['globalLeftIndexTipPosition-y'],
      'globalLeftIndexTipPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalLeftIndexTipPosition-z'],
      newProps['globalLeftIndexTipPosition-z'],
      'globalLeftIndexTipPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.globalRightIndexTipPosition,
      newProps.globalRightIndexTipPosition,
      'globalRightIndexTipPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-x'],
      newProps['globalRightIndexTipPosition-x'],
      'globalRightIndexTipPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-y'],
      newProps['globalRightIndexTipPosition-y'],
      'globalRightIndexTipPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['globalRightIndexTipPosition-z'],
      newProps['globalRightIndexTipPosition-z'],
      'globalRightIndexTipPosition.z',
      changedProps
    )
    checkColor4Diff(
      oldProps.highlightColor,
      newProps.highlightColor,
      'highlightColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightWidth,
      newProps.highlightWidth,
      'highlightWidth',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceEdgeIntensity,
      newProps.iridescenceEdgeIntensity,
      'iridescenceEdgeIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceIntensity,
      newProps.iridescenceIntensity,
      'iridescenceIntensity',
      changedProps
    )
    checkColor4Diff(oldProps.lineColor, newProps.lineColor, 'lineColor', changedProps)
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render square buttons with fluent design
 *
 * This code has been generated
 */
export class FiberFluentBackplateMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFluentBackplateMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FluentBackplateMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberFluentBackplateMaterial',
  }
}

export class FiberMRDLSliderBarMaterialPropsHandler
  implements PropsHandler<FiberMRDLSliderBarMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLSliderBarMaterialProps,
    newProps: FiberMRDLSliderBarMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor4Diff(oldProps.albedo, newProps.albedo, 'albedo', changedProps)
    checkPrimitiveDiff(oldProps.bevelBack, newProps.bevelBack, 'bevelBack', changedProps)
    checkPrimitiveDiff(
      oldProps.bevelBackStretch,
      newProps.bevelBackStretch,
      'bevelBackStretch',
      changedProps
    )
    checkPrimitiveDiff(oldProps.bevelFront, newProps.bevelFront, 'bevelFront', changedProps)
    checkPrimitiveDiff(
      oldProps.bevelFrontStretch,
      newProps.bevelFrontStretch,
      'bevelFrontStretch',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFade, newProps.blobFade, 'blobFade', changedProps)
    checkPrimitiveDiff(oldProps.blobFade2, newProps.blobFade2, 'blobFade2', changedProps)
    checkPrimitiveDiff(
      oldProps.blobFadeLength,
      newProps.blobFadeLength,
      'blobFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFarDistance,
      newProps.blobFarDistance,
      'blobFarDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFarSize, newProps.blobFarSize, 'blobFarSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobIntensity,
      newProps.blobIntensity,
      'blobIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobNearDistance,
      newProps.blobNearDistance,
      'blobNearDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobNearSize, newProps.blobNearSize, 'blobNearSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobNearSize2,
      newProps.blobNearSize2,
      'blobNearSize2',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition,
      newProps.blobPosition,
      'blobPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-x'],
      newProps['blobPosition-x'],
      'blobPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-y'],
      newProps['blobPosition-y'],
      'blobPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-z'],
      newProps['blobPosition-z'],
      'blobPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition2,
      newProps.blobPosition2,
      'blobPosition2',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-x'],
      newProps['blobPosition2-x'],
      'blobPosition2.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-y'],
      newProps['blobPosition2-y'],
      'blobPosition2.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-z'],
      newProps['blobPosition2-z'],
      'blobPosition2.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobPulse, newProps.blobPulse, 'blobPulse', changedProps)
    checkPrimitiveDiff(oldProps.blobPulse2, newProps.blobPulse2, 'blobPulse2', changedProps)
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.blobTexture.
    checkPrimitiveDiff(oldProps.bulgeEnabled, newProps.bulgeEnabled, 'bulgeEnabled', changedProps)
    checkPrimitiveDiff(oldProps.bulgeHeight, newProps.bulgeHeight, 'bulgeHeight', changedProps)
    checkPrimitiveDiff(oldProps.bulgeRadius, newProps.bulgeRadius, 'bulgeRadius', changedProps)
    checkPrimitiveDiff(oldProps.clipFade, newProps.clipFade, 'clipFade', changedProps)
    checkPrimitiveDiff(
      oldProps.decalFrontOnly,
      newProps.decalFrontOnly,
      'decalFrontOnly',
      changedProps
    )
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.decalScaleXY.
    checkPrimitiveDiff(oldProps.edgeReflect, newProps.edgeReflect, 'edgeReflect', changedProps)
    checkPrimitiveDiff(oldProps.frontReflect, newProps.frontReflect, 'frontReflect', changedProps)
    checkPrimitiveDiff(oldProps.fuzz, newProps.fuzz, 'fuzz', changedProps)
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globalLeftIndexMiddlePosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globalLeftIndexTipPosition.
    checkPrimitiveDiff(
      oldProps.globalLeftIndexTipProximity,
      newProps.globalLeftIndexTipProximity,
      'globalLeftIndexTipProximity',
      changedProps
    )
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globalLeftThumbTipPosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globalRightIndexMiddlePosition.
    checkPrimitiveDiff(
      oldProps.globalRightIndexTipProximity,
      newProps.globalRightIndexTipProximity,
      'globalRightIndexTipProximity',
      changedProps
    )
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globalRightThumbTipPosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderBarMaterial.globaRightIndexTipPosition.
    checkColor4Diff(oldProps.groundColor, newProps.groundColor, 'groundColor', changedProps)
    checkColor4Diff(oldProps.horizonColor, newProps.horizonColor, 'horizonColor', changedProps)
    checkPrimitiveDiff(oldProps.horizonPower, newProps.horizonPower, 'horizonPower', changedProps)
    checkPrimitiveDiff(oldProps.hueShift, newProps.hueShift, 'hueShift', changedProps)
    checkPrimitiveDiff(
      oldProps.indirectDiffuse,
      newProps.indirectDiffuse,
      'indirectDiffuse',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceIntensity,
      newProps.iridescenceIntensity,
      'iridescenceIntensity',
      changedProps
    )
    checkColor4Diff(
      oldProps.leftGradientColor,
      newProps.leftGradientColor,
      'leftGradientColor',
      changedProps
    )
    checkVector3Diff(
      oldProps.leftIndexMiddlePosition,
      newProps.leftIndexMiddlePosition,
      'leftIndexMiddlePosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-x'],
      newProps['leftIndexMiddlePosition-x'],
      'leftIndexMiddlePosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-y'],
      newProps['leftIndexMiddlePosition-y'],
      'leftIndexMiddlePosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-z'],
      newProps['leftIndexMiddlePosition-z'],
      'leftIndexMiddlePosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.leftIndexPosition,
      newProps.leftIndexPosition,
      'leftIndexPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-x'],
      newProps['leftIndexPosition-x'],
      'leftIndexPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-y'],
      newProps['leftIndexPosition-y'],
      'leftIndexPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-z'],
      newProps['leftIndexPosition-z'],
      'leftIndexPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.minFuzz, newProps.minFuzz, 'minFuzz', changedProps)
    checkPrimitiveDiff(oldProps.power, newProps.power, 'power', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.radiusBottomLeft,
      newProps.radiusBottomLeft,
      'radiusBottomLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusBottomRight,
      newProps.radiusBottomRight,
      'radiusBottomRight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopLeft,
      newProps.radiusTopLeft,
      'radiusTopLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopRight,
      newProps.radiusTopRight,
      'radiusTopRight',
      changedProps
    )
    checkPrimitiveDiff(oldProps.reflection, newProps.reflection, 'reflection', changedProps)
    checkColor4Diff(
      oldProps.rightGradientColor,
      newProps.rightGradientColor,
      'rightGradientColor',
      changedProps
    )
    checkVector3Diff(
      oldProps.rightIndexMiddlePosition,
      newProps.rightIndexMiddlePosition,
      'rightIndexMiddlePosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-x'],
      newProps['rightIndexMiddlePosition-x'],
      'rightIndexMiddlePosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-y'],
      newProps['rightIndexMiddlePosition-y'],
      'rightIndexMiddlePosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-z'],
      newProps['rightIndexMiddlePosition-z'],
      'rightIndexMiddlePosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.rightIndexPosition,
      newProps.rightIndexPosition,
      'rightIndexPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-x'],
      newProps['rightIndexPosition-x'],
      'rightIndexPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-y'],
      newProps['rightIndexPosition-y'],
      'rightIndexPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-z'],
      newProps['rightIndexPosition-z'],
      'rightIndexPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.rimHueShift, newProps.rimHueShift, 'rimHueShift', changedProps)
    checkPrimitiveDiff(oldProps.rimIntensity, newProps.rimIntensity, 'rimIntensity', changedProps)
    checkPrimitiveDiff(
      oldProps.rimSaturationShift,
      newProps.rimSaturationShift,
      'rimSaturationShift',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rimValueShift,
      newProps.rimValueShift,
      'rimValueShift',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.saturationShift,
      newProps.saturationShift,
      'saturationShift',
      changedProps
    )
    checkPrimitiveDiff(oldProps.sharpness, newProps.sharpness, 'sharpness', changedProps)
    checkPrimitiveDiff(oldProps.shininess, newProps.shininess, 'shininess', changedProps)
    checkColor4Diff(oldProps.skyColor, newProps.skyColor, 'skyColor', changedProps)
    checkPrimitiveDiff(oldProps.specular, newProps.specular, 'specular', changedProps)
    checkPrimitiveDiff(oldProps.subsurface, newProps.subsurface, 'subsurface', changedProps)
    checkPrimitiveDiff(oldProps.sunIntensity, newProps.sunIntensity, 'sunIntensity', changedProps)
    checkPrimitiveDiff(oldProps.sunPhi, newProps.sunPhi, 'sunPhi', changedProps)
    checkPrimitiveDiff(oldProps.sunTheta, newProps.sunTheta, 'sunTheta', changedProps)
    checkPrimitiveDiff(
      oldProps.useGlobalLeftIndex,
      newProps.useGlobalLeftIndex,
      'useGlobalLeftIndex',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGlobalRightIndex,
      newProps.useGlobalRightIndex,
      'useGlobalRightIndex',
      changedProps
    )
    checkPrimitiveDiff(oldProps.valueShift, newProps.valueShift, 'valueShift', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render Slider Bar material with MRDL
 *
 * This code has been generated
 */
export class FiberMRDLSliderBarMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLSliderBarMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLSliderBarMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLSliderBarMaterial',
  }
}

export class FiberMRDLSliderThumbMaterialPropsHandler
  implements PropsHandler<FiberMRDLSliderThumbMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLSliderThumbMaterialProps,
    newProps: FiberMRDLSliderThumbMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor4Diff(oldProps.albedo, newProps.albedo, 'albedo', changedProps)
    checkPrimitiveDiff(oldProps.bevelBack, newProps.bevelBack, 'bevelBack', changedProps)
    checkPrimitiveDiff(
      oldProps.bevelBackStretch,
      newProps.bevelBackStretch,
      'bevelBackStretch',
      changedProps
    )
    checkPrimitiveDiff(oldProps.bevelFront, newProps.bevelFront, 'bevelFront', changedProps)
    checkPrimitiveDiff(
      oldProps.bevelFrontStretch,
      newProps.bevelFrontStretch,
      'bevelFrontStretch',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFade, newProps.blobFade, 'blobFade', changedProps)
    checkPrimitiveDiff(oldProps.blobFade2, newProps.blobFade2, 'blobFade2', changedProps)
    checkPrimitiveDiff(
      oldProps.blobFadeLength,
      newProps.blobFadeLength,
      'blobFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFarDistance,
      newProps.blobFarDistance,
      'blobFarDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFarSize, newProps.blobFarSize, 'blobFarSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobIntensity,
      newProps.blobIntensity,
      'blobIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobNearDistance,
      newProps.blobNearDistance,
      'blobNearDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobNearSize, newProps.blobNearSize, 'blobNearSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobNearSize2,
      newProps.blobNearSize2,
      'blobNearSize2',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition,
      newProps.blobPosition,
      'blobPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-x'],
      newProps['blobPosition-x'],
      'blobPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-y'],
      newProps['blobPosition-y'],
      'blobPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-z'],
      newProps['blobPosition-z'],
      'blobPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition2,
      newProps.blobPosition2,
      'blobPosition2',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-x'],
      newProps['blobPosition2-x'],
      'blobPosition2.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-y'],
      newProps['blobPosition2-y'],
      'blobPosition2.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-z'],
      newProps['blobPosition2-z'],
      'blobPosition2.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobPulse, newProps.blobPulse, 'blobPulse', changedProps)
    checkPrimitiveDiff(oldProps.blobPulse2, newProps.blobPulse2, 'blobPulse2', changedProps)
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.blobTexture.
    checkPrimitiveDiff(oldProps.bulgeEnabled, newProps.bulgeEnabled, 'bulgeEnabled', changedProps)
    checkPrimitiveDiff(oldProps.bulgeHeight, newProps.bulgeHeight, 'bulgeHeight', changedProps)
    checkPrimitiveDiff(oldProps.bulgeRadius, newProps.bulgeRadius, 'bulgeRadius', changedProps)
    checkPrimitiveDiff(oldProps.clipFade, newProps.clipFade, 'clipFade', changedProps)
    checkPrimitiveDiff(
      oldProps.decalFrontOnly,
      newProps.decalFrontOnly,
      'decalFrontOnly',
      changedProps
    )
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.decalScaleXY.
    checkPrimitiveDiff(oldProps.edgeReflect, newProps.edgeReflect, 'edgeReflect', changedProps)
    checkPrimitiveDiff(oldProps.frontReflect, newProps.frontReflect, 'frontReflect', changedProps)
    checkPrimitiveDiff(oldProps.fuzz, newProps.fuzz, 'fuzz', changedProps)
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globalLeftIndexMiddlePosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globalLeftIndexTipPosition.
    checkPrimitiveDiff(
      oldProps.globalLeftIndexTipProximity,
      newProps.globalLeftIndexTipProximity,
      'globalLeftIndexTipProximity',
      changedProps
    )
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globalLeftThumbTipPosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globalRightIndexMiddlePosition.
    checkPrimitiveDiff(
      oldProps.globalRightIndexTipProximity,
      newProps.globalRightIndexTipProximity,
      'globalRightIndexTipProximity',
      changedProps
    )
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globalRightThumbTipPosition.
    // type: 'BabylonjsCoreVector4' property (not coded) BabylonjsGuiMRDLSliderThumbMaterial.globaRightIndexTipPosition.
    checkColor4Diff(oldProps.groundColor, newProps.groundColor, 'groundColor', changedProps)
    checkColor4Diff(oldProps.horizonColor, newProps.horizonColor, 'horizonColor', changedProps)
    checkPrimitiveDiff(oldProps.horizonPower, newProps.horizonPower, 'horizonPower', changedProps)
    checkPrimitiveDiff(oldProps.hueShift, newProps.hueShift, 'hueShift', changedProps)
    checkPrimitiveDiff(
      oldProps.indirectDiffuse,
      newProps.indirectDiffuse,
      'indirectDiffuse',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceIntensity,
      newProps.iridescenceIntensity,
      'iridescenceIntensity',
      changedProps
    )
    checkColor4Diff(
      oldProps.leftGradientColor,
      newProps.leftGradientColor,
      'leftGradientColor',
      changedProps
    )
    checkVector3Diff(
      oldProps.leftIndexMiddlePosition,
      newProps.leftIndexMiddlePosition,
      'leftIndexMiddlePosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-x'],
      newProps['leftIndexMiddlePosition-x'],
      'leftIndexMiddlePosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-y'],
      newProps['leftIndexMiddlePosition-y'],
      'leftIndexMiddlePosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexMiddlePosition-z'],
      newProps['leftIndexMiddlePosition-z'],
      'leftIndexMiddlePosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.leftIndexPosition,
      newProps.leftIndexPosition,
      'leftIndexPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-x'],
      newProps['leftIndexPosition-x'],
      'leftIndexPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-y'],
      newProps['leftIndexPosition-y'],
      'leftIndexPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['leftIndexPosition-z'],
      newProps['leftIndexPosition-z'],
      'leftIndexPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.minFuzz, newProps.minFuzz, 'minFuzz', changedProps)
    checkPrimitiveDiff(oldProps.power, newProps.power, 'power', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.radiusBottomLeft,
      newProps.radiusBottomLeft,
      'radiusBottomLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusBottomRight,
      newProps.radiusBottomRight,
      'radiusBottomRight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopLeft,
      newProps.radiusTopLeft,
      'radiusTopLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopRight,
      newProps.radiusTopRight,
      'radiusTopRight',
      changedProps
    )
    checkPrimitiveDiff(oldProps.reflection, newProps.reflection, 'reflection', changedProps)
    checkColor4Diff(
      oldProps.rightGradientColor,
      newProps.rightGradientColor,
      'rightGradientColor',
      changedProps
    )
    checkVector3Diff(
      oldProps.rightIndexMiddlePosition,
      newProps.rightIndexMiddlePosition,
      'rightIndexMiddlePosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-x'],
      newProps['rightIndexMiddlePosition-x'],
      'rightIndexMiddlePosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-y'],
      newProps['rightIndexMiddlePosition-y'],
      'rightIndexMiddlePosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexMiddlePosition-z'],
      newProps['rightIndexMiddlePosition-z'],
      'rightIndexMiddlePosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.rightIndexPosition,
      newProps.rightIndexPosition,
      'rightIndexPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-x'],
      newProps['rightIndexPosition-x'],
      'rightIndexPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-y'],
      newProps['rightIndexPosition-y'],
      'rightIndexPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['rightIndexPosition-z'],
      newProps['rightIndexPosition-z'],
      'rightIndexPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.rimHueShift, newProps.rimHueShift, 'rimHueShift', changedProps)
    checkPrimitiveDiff(oldProps.rimIntensity, newProps.rimIntensity, 'rimIntensity', changedProps)
    checkPrimitiveDiff(
      oldProps.rimSaturationShift,
      newProps.rimSaturationShift,
      'rimSaturationShift',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rimValueShift,
      newProps.rimValueShift,
      'rimValueShift',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.saturationShift,
      newProps.saturationShift,
      'saturationShift',
      changedProps
    )
    checkPrimitiveDiff(oldProps.sharpness, newProps.sharpness, 'sharpness', changedProps)
    checkPrimitiveDiff(oldProps.shininess, newProps.shininess, 'shininess', changedProps)
    checkColor4Diff(oldProps.skyColor, newProps.skyColor, 'skyColor', changedProps)
    checkPrimitiveDiff(oldProps.specular, newProps.specular, 'specular', changedProps)
    checkPrimitiveDiff(oldProps.subsurface, newProps.subsurface, 'subsurface', changedProps)
    checkPrimitiveDiff(oldProps.sunIntensity, newProps.sunIntensity, 'sunIntensity', changedProps)
    checkPrimitiveDiff(oldProps.sunPhi, newProps.sunPhi, 'sunPhi', changedProps)
    checkPrimitiveDiff(oldProps.sunTheta, newProps.sunTheta, 'sunTheta', changedProps)
    checkPrimitiveDiff(
      oldProps.useGlobalLeftIndex,
      newProps.useGlobalLeftIndex,
      'useGlobalLeftIndex',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGlobalRightIndex,
      newProps.useGlobalRightIndex,
      'useGlobalRightIndex',
      changedProps
    )
    checkPrimitiveDiff(oldProps.valueShift, newProps.valueShift, 'valueShift', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render Slider Thumb material with MRDL
 *
 * This code has been generated
 */
export class FiberMRDLSliderThumbMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLSliderThumbMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLSliderThumbMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLSliderThumbMaterial',
  }
}

export class FiberMRDLBackplateMaterialPropsHandler
  implements PropsHandler<FiberMRDLBackplateMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLBackplateMaterialProps,
    newProps: FiberMRDLBackplateMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.absoluteSizes,
      newProps.absoluteSizes,
      'absoluteSizes',
      changedProps
    )
    checkColor4Diff(oldProps.baseColor, newProps.baseColor, 'baseColor', changedProps)
    checkColor4Diff(
      oldProps.bottomLeftGradientColor,
      newProps.bottomLeftGradientColor,
      'bottomLeftGradientColor',
      changedProps
    )
    checkColor4Diff(
      oldProps.bottomRightGradientColor,
      newProps.bottomRightGradientColor,
      'bottomRightGradientColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.edgeLineGradientBlend,
      newProps.edgeLineGradientBlend,
      'edgeLineGradientBlend',
      changedProps
    )
    checkPrimitiveDiff(oldProps.edgePower, newProps.edgePower, 'edgePower', changedProps)
    checkPrimitiveDiff(oldProps.edgeWidth, newProps.edgeWidth, 'edgeWidth', changedProps)
    checkPrimitiveDiff(oldProps.fadeOut, newProps.fadeOut, 'fadeOut', changedProps)
    checkColor4Diff(oldProps.gradientColor, newProps.gradientColor, 'gradientColor', changedProps)
    checkColor4Diff(
      oldProps.highlightColor,
      newProps.highlightColor,
      'highlightColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightWidth,
      newProps.highlightWidth,
      'highlightWidth',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceEdgeIntensity,
      newProps.iridescenceEdgeIntensity,
      'iridescenceEdgeIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.iridescenceIntensity,
      newProps.iridescenceIntensity,
      'iridescenceIntensity',
      changedProps
    )
    checkColor4Diff(
      oldProps.iridescenceTint,
      newProps.iridescenceTint,
      'iridescenceTint',
      changedProps
    )
    checkColor4Diff(oldProps.lineColor, newProps.lineColor, 'lineColor', changedProps)
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.radiusBottomLeft,
      newProps.radiusBottomLeft,
      'radiusBottomLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusBottomRight,
      newProps.radiusBottomRight,
      'radiusBottomRight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopLeft,
      newProps.radiusTopLeft,
      'radiusTopLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.radiusTopRight,
      newProps.radiusTopRight,
      'radiusTopRight',
      changedProps
    )
    checkColor4Diff(
      oldProps.topLeftGradientColor,
      newProps.topLeftGradientColor,
      'topLeftGradientColor',
      changedProps
    )
    checkColor4Diff(
      oldProps.topRightGradientColor,
      newProps.topRightGradientColor,
      'topRightGradientColor',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render backplate material with MRDL
 *
 * This code has been generated
 */
export class FiberMRDLBackplateMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLBackplateMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLBackplateMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLBackplateMaterial',
  }
}

export class FiberMRDLBackglowMaterialPropsHandler
  implements PropsHandler<FiberMRDLBackglowMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLBackglowMaterialProps,
    newProps: FiberMRDLBackglowMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.absoluteSizes,
      newProps.absoluteSizes,
      'absoluteSizes',
      changedProps
    )
    checkPrimitiveDiff(oldProps.bevelRadius, newProps.bevelRadius, 'bevelRadius', changedProps)
    checkPrimitiveDiff(oldProps.bias, newProps.bias, 'bias', changedProps)
    checkPrimitiveDiff(
      oldProps.blendExponent,
      newProps.blendExponent,
      'blendExponent',
      changedProps
    )
    checkColor4Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.falloff, newProps.falloff, 'falloff', changedProps)
    checkColor4Diff(oldProps.innerColor, newProps.innerColor, 'innerColor', changedProps)
    checkPrimitiveDiff(
      oldProps.intensityFadeInExponent,
      newProps.intensityFadeInExponent,
      'intensityFadeInExponent',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(oldProps.maxIntensity, newProps.maxIntensity, 'maxIntensity', changedProps)
    checkPrimitiveDiff(oldProps.motion, newProps.motion, 'motion', changedProps)
    checkPrimitiveDiff(oldProps.outerFuzzEnd, newProps.outerFuzzEnd, 'outerFuzzEnd', changedProps)
    checkPrimitiveDiff(
      oldProps.outerFuzzStart,
      newProps.outerFuzzStart,
      'outerFuzzStart',
      changedProps
    )
    checkPrimitiveDiff(oldProps.tuningMotion, newProps.tuningMotion, 'tuningMotion', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/** This code has been generated */
export class FiberMRDLBackglowMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLBackglowMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLBackglowMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLBackglowMaterial',
  }
}

export class FiberMRDLFrontplateMaterialPropsHandler
  implements PropsHandler<FiberMRDLFrontplateMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLFrontplateMaterialProps,
    newProps: FiberMRDLFrontplateMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.blobEnable, newProps.blobEnable, 'blobEnable', changedProps)
    checkPrimitiveDiff(oldProps.blobEnable2, newProps.blobEnable2, 'blobEnable2', changedProps)
    checkPrimitiveDiff(oldProps.blobFade, newProps.blobFade, 'blobFade', changedProps)
    checkPrimitiveDiff(oldProps.blobFade2, newProps.blobFade2, 'blobFade2', changedProps)
    checkPrimitiveDiff(
      oldProps.blobFadeLength,
      newProps.blobFadeLength,
      'blobFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobFarDistance,
      newProps.blobFarDistance,
      'blobFarDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobFarSize, newProps.blobFarSize, 'blobFarSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobInnerFade,
      newProps.blobInnerFade,
      'blobInnerFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobInnerFade2,
      newProps.blobInnerFade2,
      'blobInnerFade2',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobIntensity,
      newProps.blobIntensity,
      'blobIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blobNearDistance,
      newProps.blobNearDistance,
      'blobNearDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobNearSize, newProps.blobNearSize, 'blobNearSize', changedProps)
    checkPrimitiveDiff(
      oldProps.blobNearSize2,
      newProps.blobNearSize2,
      'blobNearSize2',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition,
      newProps.blobPosition,
      'blobPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-x'],
      newProps['blobPosition-x'],
      'blobPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-y'],
      newProps['blobPosition-y'],
      'blobPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition-z'],
      newProps['blobPosition-z'],
      'blobPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.blobPosition2,
      newProps.blobPosition2,
      'blobPosition2',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-x'],
      newProps['blobPosition2-x'],
      'blobPosition2.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-y'],
      newProps['blobPosition2-y'],
      'blobPosition2.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['blobPosition2-z'],
      newProps['blobPosition2-z'],
      'blobPosition2.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blobPulse, newProps.blobPulse, 'blobPulse', changedProps)
    checkPrimitiveDiff(oldProps.blobPulse2, newProps.blobPulse2, 'blobPulse2', changedProps)
    checkPrimitiveDiff(
      oldProps.blobPulseMaxSize,
      newProps.blobPulseMaxSize,
      'blobPulseMaxSize',
      changedProps
    )
    checkColor4Diff(oldProps.edgeColor, newProps.edgeColor, 'edgeColor', changedProps)
    checkPrimitiveDiff(oldProps.fadeOut, newProps.fadeOut, 'fadeOut', changedProps)
    checkPrimitiveDiff(oldProps.gazeFocus, newProps.gazeFocus, 'gazeFocus', changedProps)
    checkPrimitiveDiff(
      oldProps.gazeIntensity,
      newProps.gazeIntensity,
      'gazeIntensity',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.proximityAnisotropy,
      newProps.proximityAnisotropy,
      'proximityAnisotropy',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityFarDistance,
      newProps.proximityFarDistance,
      'proximityFarDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityMaxIntensity,
      newProps.proximityMaxIntensity,
      'proximityMaxIntensity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proximityNearRadius,
      newProps.proximityNearRadius,
      'proximityNearRadius',
      changedProps
    )
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.relativeToHeight,
      newProps.relativeToHeight,
      'relativeToHeight',
      changedProps
    )
    checkPrimitiveDiff(oldProps.selected, newProps.selected, 'selected', changedProps)
    checkPrimitiveDiff(
      oldProps.selectedDistance,
      newProps.selectedDistance,
      'selectedDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectedFadeLength,
      newProps.selectedFadeLength,
      'selectedFadeLength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFade,
      newProps.selectionFade,
      'selectionFade',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFadeSize,
      newProps.selectionFadeSize,
      'selectionFadeSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectionFuzz,
      newProps.selectionFuzz,
      'selectionFuzz',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGlobalLeftIndex,
      newProps.useGlobalLeftIndex,
      'useGlobalLeftIndex',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGlobalRightIndex,
      newProps.useGlobalRightIndex,
      'useGlobalRightIndex',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/** This code has been generated */
export class FiberMRDLFrontplateMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLFrontplateMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLFrontplateMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLFrontplateMaterial',
  }
}

export class FiberMRDLInnerquadMaterialPropsHandler
  implements PropsHandler<FiberMRDLInnerquadMaterialProps>
{
  getPropertyUpdates(
    oldProps: FiberMRDLInnerquadMaterialProps,
    newProps: FiberMRDLInnerquadMaterialProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor4Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.fixedRadius, newProps.fixedRadius, 'fixedRadius', changedProps)
    checkPrimitiveDiff(oldProps.glowFalloff, newProps.glowFalloff, 'glowFalloff', changedProps)
    checkPrimitiveDiff(oldProps.glowFraction, newProps.glowFraction, 'glowFraction', changedProps)
    checkPrimitiveDiff(oldProps.glowMax, newProps.glowMax, 'glowMax', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/** This code has been generated */
export class FiberMRDLInnerquadMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMRDLInnerquadMaterialPropsHandler(),
      new FiberPushMaterialPropsHandler(),
      new FiberMaterialPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MRDLInnerquadMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMRDLInnerquadMaterial',
  }
}

export class FiberMultiMaterialPropsHandler implements PropsHandler<FiberMultiMaterialProps> {
  getPropertyUpdates(
    oldProps: FiberMultiMaterialProps,
    newProps: FiberMultiMaterialProps
  ): PropertyUpdate[] | null {
    // skipping type: 'BabylonjsCoreMaterial[]' property (not coded) BabylonjsCoreMultiMaterial.subMaterials.
    return null // no props to check
  }
}

/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 *
 * This code has been generated
 */
export class FiberMultiMaterial implements HasPropsHandlers<FiberMaterialProps> {
  private propsHandlers: PropsHandler<FiberMaterialProps>[]

  constructor() {
    this.propsHandlers = [new FiberMultiMaterialPropsHandler(), new FiberMaterialPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MultiMaterial',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isMaterial: true,
    className: 'FiberMultiMaterial',
  }
}

export class FiberLightPropsHandler implements PropsHandler<FiberLightProps> {
  getPropertyUpdates(
    oldProps: FiberLightProps,
    newProps: FiberLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.diffuse, newProps.diffuse, 'diffuse', changedProps)
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.excludedMeshes.
    checkPrimitiveDiff(
      oldProps.excludeWithLayerMask,
      newProps.excludeWithLayerMask,
      'excludeWithLayerMask',
      changedProps
    )
    checkPrimitiveDiff(oldProps.falloffType, newProps.falloffType, 'falloffType', changedProps)
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.includedOnlyMeshes.
    checkPrimitiveDiff(
      oldProps.includeOnlyWithLayerMask,
      newProps.includeOnlyWithLayerMask,
      'includeOnlyWithLayerMask',
      changedProps
    )
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkPrimitiveDiff(
      oldProps.intensityMode,
      newProps.intensityMode,
      'intensityMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lightmapMode, newProps.lightmapMode, 'lightmapMode', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(oldProps.range, newProps.range, 'range', changedProps)
    checkPrimitiveDiff(
      oldProps.renderPriority,
      newProps.renderPriority,
      'renderPriority',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.shadowEnabled,
      newProps.shadowEnabled,
      'shadowEnabled',
      changedProps
    )
    checkColor3Diff(oldProps.specular, newProps.specular, 'specular', changedProps)
    checkMethodDiff(oldProps.setEnabled, newProps.setEnabled, 'setEnabled', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [new FiberLightPropsHandler(), new FiberNodePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Light',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    className: 'FiberLight',
  }
}

export class FiberShadowLightPropsHandler implements PropsHandler<FiberShadowLightProps> {
  getPropertyUpdates(
    oldProps: FiberShadowLightProps,
    newProps: FiberShadowLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkLambdaDiff(
      oldProps.customProjectionMatrixBuilder,
      newProps.customProjectionMatrixBuilder,
      'customProjectionMatrixBuilder',
      changedProps
    )
    checkVector3Diff(oldProps.direction, newProps.direction, 'direction', true, changedProps)
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkPrimitiveDiff(oldProps.shadowMaxZ, newProps.shadowMaxZ, 'shadowMaxZ', changedProps)
    checkPrimitiveDiff(oldProps.shadowMinZ, newProps.shadowMinZ, 'shadowMinZ', changedProps)
    checkVector3Diff(
      oldProps.transformedDirection,
      newProps.transformedDirection,
      'transformedDirection',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedDirection-x'],
      newProps['transformedDirection-x'],
      'transformedDirection.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedDirection-y'],
      newProps['transformedDirection-y'],
      'transformedDirection.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedDirection-z'],
      newProps['transformedDirection-z'],
      'transformedDirection.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.transformedPosition,
      newProps.transformedPosition,
      'transformedPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedPosition-x'],
      newProps['transformedPosition-x'],
      'transformedPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedPosition-y'],
      newProps['transformedPosition-y'],
      'transformedPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['transformedPosition-z'],
      newProps['transformedPosition-z'],
      'transformedPosition.z',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDirectionToTarget,
      newProps.setDirectionToTarget,
      'setDirectionToTarget',
      changedProps
    )
    checkMethodDiff(
      oldProps.setShadowProjectionMatrix,
      newProps.setShadowProjectionMatrix,
      'setShadowProjectionMatrix',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce duplication and better follow the DRY pattern.
 *
 * This code has been generated
 */
export class FiberShadowLight implements HasPropsHandlers<FiberLightProps> {
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberShadowLightPropsHandler(),
      new FiberLightPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ShadowLight',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    isShadowLight: true,
    className: 'FiberShadowLight',
  }
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<FiberDirectionalLightProps> {
  getPropertyUpdates(
    oldProps: FiberDirectionalLightProps,
    newProps: FiberDirectionalLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.autoCalcShadowZBounds,
      newProps.autoCalcShadowZBounds,
      'autoCalcShadowZBounds',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.autoUpdateExtends,
      newProps.autoUpdateExtends,
      'autoUpdateExtends',
      changedProps
    )
    checkPrimitiveDiff(oldProps.orthoBottom, newProps.orthoBottom, 'orthoBottom', changedProps)
    checkPrimitiveDiff(oldProps.orthoLeft, newProps.orthoLeft, 'orthoLeft', changedProps)
    checkPrimitiveDiff(oldProps.orthoRight, newProps.orthoRight, 'orthoRight', changedProps)
    checkPrimitiveDiff(oldProps.orthoTop, newProps.orthoTop, 'orthoTop', changedProps)
    checkPrimitiveDiff(
      oldProps.shadowFrustumSize,
      newProps.shadowFrustumSize,
      'shadowFrustumSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.shadowOrthoScale,
      newProps.shadowOrthoScale,
      'shadowOrthoScale',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A directional light is defined by a direction (what a surprise!).
 * The light is emitted from everywhere in the specified direction, and has an infinite range.
 * An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
 * Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
 *
 * This code has been generated
 */
export class FiberDirectionalLight implements HasPropsHandlers<FiberLightProps> {
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDirectionalLightPropsHandler(),
      new FiberShadowLightPropsHandler(),
      new FiberLightPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DirectionalLight',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'direction',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    isShadowLight: true,
    className: 'FiberDirectionalLight',
  }
}

export class FiberPointLightPropsHandler implements PropsHandler<FiberPointLightProps> {
  getPropertyUpdates(
    oldProps: FiberPointLightProps,
    newProps: FiberPointLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(oldProps.direction, newProps.direction, 'direction', true, changedProps)
    checkPrimitiveDiff(oldProps.shadowAngle, newProps.shadowAngle, 'shadowAngle', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A point light is a light defined by an unique point in world space.
 * The light is emitted in every direction from this point.
 * A good example of a point light is a standard light bulb.
 * Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
 *
 * This code has been generated
 */
export class FiberPointLight implements HasPropsHandlers<FiberLightProps> {
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPointLightPropsHandler(),
      new FiberShadowLightPropsHandler(),
      new FiberLightPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PointLight',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    isShadowLight: true,
    className: 'FiberPointLight',
  }
}

export class FiberSpotLightPropsHandler implements PropsHandler<FiberSpotLightProps> {
  getPropertyUpdates(
    oldProps: FiberSpotLightProps,
    newProps: FiberSpotLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.angle, newProps.angle, 'angle', changedProps)
    checkPrimitiveDiff(oldProps.exponent, newProps.exponent, 'exponent', changedProps)
    checkPrimitiveDiff(oldProps.innerAngle, newProps.innerAngle, 'innerAngle', changedProps)
    checkTextureDiff(
      oldProps.projectionTexture,
      newProps.projectionTexture,
      'projectionTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.projectionTextureLightFar,
      newProps.projectionTextureLightFar,
      'projectionTextureLightFar',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.projectionTextureLightNear,
      newProps.projectionTextureLightNear,
      'projectionTextureLightNear',
      changedProps
    )
    // type: 'BabylonjsCoreMatrix' property (not coded) BabylonjsCoreSpotLight.projectionTextureProjectionLightMatrix.
    checkVector3Diff(
      oldProps.projectionTextureUpDirection,
      newProps.projectionTextureUpDirection,
      'projectionTextureUpDirection',
      true,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.shadowAngleScale,
      newProps.shadowAngleScale,
      'shadowAngleScale',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A spot light is defined by a position, a direction, an angle, and an exponent.
 * These values define a cone of light starting from the position, emitting toward the direction.
 * The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
 * and the exponent defines the speed of the decay of the light with distance (reach).
 * Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
 *
 * This code has been generated
 */
export class FiberSpotLight implements HasPropsHandlers<FiberLightProps> {
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSpotLightPropsHandler(),
      new FiberShadowLightPropsHandler(),
      new FiberLightPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SpotLight',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'position',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'direction',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'angle',
        type: 'number',
        optional: false,
      },
      {
        name: 'exponent',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    isShadowLight: true,
    className: 'FiberSpotLight',
  }
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<FiberHemisphericLightProps> {
  getPropertyUpdates(
    oldProps: FiberHemisphericLightProps,
    newProps: FiberHemisphericLightProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(oldProps.direction, newProps.direction, 'direction', false, changedProps)
    checkPrimitiveDiff(
      oldProps['direction-x'],
      newProps['direction-x'],
      'direction.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['direction-y'],
      newProps['direction-y'],
      'direction.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['direction-z'],
      newProps['direction-z'],
      'direction.z',
      changedProps
    )
    checkColor3Diff(oldProps.groundColor, newProps.groundColor, 'groundColor', changedProps)
    checkMethodDiff(
      oldProps.setDirectionToTarget,
      newProps.setDirectionToTarget,
      'setDirectionToTarget',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 *
 * This code has been generated
 */
export class FiberHemisphericLight implements HasPropsHandlers<FiberLightProps> {
  private propsHandlers: PropsHandler<FiberLightProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHemisphericLightPropsHandler(),
      new FiberLightPropsHandler(),
      new FiberNodePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberLightProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HemisphericLight',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'direction',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isNode: true,
    className: 'FiberHemisphericLight',
  }
}

export class FiberControlPropsHandler implements PropsHandler<FiberControlProps> {
  getPropertyUpdates(
    oldProps: FiberControlProps,
    newProps: FiberControlProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreIAccessibilityTag' property (not coded) BabylonjsGuiControl.accessibilityTag.
    checkPrimitiveDiff(oldProps.alpha, newProps.alpha, 'alpha', changedProps)
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsGuiControl.animations.
    checkPrimitiveDiff(oldProps.clipChildren, newProps.clipChildren, 'clipChildren', changedProps)
    checkPrimitiveDiff(oldProps.clipContent, newProps.clipContent, 'clipContent', changedProps)
    checkPrimitiveDiff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(
      oldProps.descendantsOnlyPadding,
      newProps.descendantsOnlyPadding,
      'descendantsOnlyPadding',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disabledColor,
      newProps.disabledColor,
      'disabledColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.disabledColorItem,
      newProps.disabledColorItem,
      'disabledColorItem',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fixedRatio, newProps.fixedRatio, 'fixedRatio', changedProps)
    checkPrimitiveDiff(
      oldProps.fixedRatioMasterIsWidth,
      newProps.fixedRatioMasterIsWidth,
      'fixedRatioMasterIsWidth',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fontFamily, newProps.fontFamily, 'fontFamily', changedProps)
    // type: '{ ascent: number; height: number; descent: number; }' property (not coded) BabylonjsGuiControl.fontOffset.
    checkPrimitiveDiff(oldProps.fontSize, newProps.fontSize, 'fontSize', changedProps)
    checkPrimitiveDiff(
      oldProps.fontSizeInPixels,
      newProps.fontSizeInPixels,
      'fontSizeInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fontStyle, newProps.fontStyle, 'fontStyle', changedProps)
    checkPrimitiveDiff(oldProps.fontWeight, newProps.fontWeight, 'fontWeight', changedProps)
    // type: 'BabylonjsGuiBaseGradient' property (not coded) BabylonjsGuiControl.gradient.
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(
      oldProps.heightInPixels,
      newProps.heightInPixels,
      'heightInPixels',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightColor,
      newProps.highlightColor,
      'highlightColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightLineWidth,
      newProps.highlightLineWidth,
      'highlightLineWidth',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.horizontalAlignment,
      newProps.horizontalAlignment,
      'horizontalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.hoverCursor, newProps.hoverCursor, 'hoverCursor', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.isFocusInvisible,
      newProps.isFocusInvisible,
      'isFocusInvisible',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isHighlighted,
      newProps.isHighlighted,
      'isHighlighted',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isHitTestVisible,
      newProps.isHitTestVisible,
      'isHitTestVisible',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isPointerBlocker,
      newProps.isPointerBlocker,
      'isPointerBlocker',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isReadOnly, newProps.isReadOnly, 'isReadOnly', changedProps)
    checkPrimitiveDiff(
      oldProps.isSerializable,
      newProps.isSerializable,
      'isSerializable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
    checkPrimitiveDiff(oldProps.left, newProps.left, 'left', changedProps)
    checkPrimitiveDiff(oldProps.leftInPixels, newProps.leftInPixels, 'leftInPixels', changedProps)
    checkPrimitiveDiff(oldProps.linkOffsetX, newProps.linkOffsetX, 'linkOffsetX', changedProps)
    checkPrimitiveDiff(
      oldProps.linkOffsetXInPixels,
      newProps.linkOffsetXInPixels,
      'linkOffsetXInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.linkOffsetY, newProps.linkOffsetY, 'linkOffsetY', changedProps)
    checkPrimitiveDiff(
      oldProps.linkOffsetYInPixels,
      newProps.linkOffsetYInPixels,
      'linkOffsetYInPixels',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsGuiControl.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(
      oldProps.notRenderable,
      newProps.notRenderable,
      'notRenderable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAccessibilityTagChangedObservable,
      newProps.onAccessibilityTagChangedObservable,
      'onAccessibilityTagChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterDrawObservable,
      newProps.onAfterDrawObservable,
      'onAfterDrawObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeDrawObservable,
      newProps.onBeforeDrawObservable,
      'onBeforeDrawObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDirtyObservable,
      newProps.onDirtyObservable,
      'onDirtyObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onEnabledStateChangedObservable,
      newProps.onEnabledStateChangedObservable,
      'onEnabledStateChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onIsVisibleChangedObservable,
      newProps.onIsVisibleChangedObservable,
      'onIsVisibleChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerClickObservable,
      newProps.onPointerClickObservable,
      'onPointerClickObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerDownObservable,
      newProps.onPointerDownObservable,
      'onPointerDownObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerEnterObservable,
      newProps.onPointerEnterObservable,
      'onPointerEnterObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerMoveObservable,
      newProps.onPointerMoveObservable,
      'onPointerMoveObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerOutObservable,
      newProps.onPointerOutObservable,
      'onPointerOutObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerUpObservable,
      newProps.onPointerUpObservable,
      'onPointerUpObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onWheelObservable,
      newProps.onWheelObservable,
      'onWheelObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.overlapDeltaMultiplier,
      newProps.overlapDeltaMultiplier,
      'overlapDeltaMultiplier',
      changedProps
    )
    checkPrimitiveDiff(oldProps.overlapGroup, newProps.overlapGroup, 'overlapGroup', changedProps)
    checkPrimitiveDiff(
      oldProps.paddingBottom,
      newProps.paddingBottom,
      'paddingBottom',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.paddingBottomInPixels,
      newProps.paddingBottomInPixels,
      'paddingBottomInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.paddingLeft, newProps.paddingLeft, 'paddingLeft', changedProps)
    checkPrimitiveDiff(
      oldProps.paddingLeftInPixels,
      newProps.paddingLeftInPixels,
      'paddingLeftInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.paddingRight, newProps.paddingRight, 'paddingRight', changedProps)
    checkPrimitiveDiff(
      oldProps.paddingRightInPixels,
      newProps.paddingRightInPixels,
      'paddingRightInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.paddingTop, newProps.paddingTop, 'paddingTop', changedProps)
    checkPrimitiveDiff(
      oldProps.paddingTopInPixels,
      newProps.paddingTopInPixels,
      'paddingTopInPixels',
      changedProps
    )
    // type: 'BabylonjsGuiContainer' property (not coded) BabylonjsGuiControl.parent.
    checkPrimitiveDiff(oldProps.rotation, newProps.rotation, 'rotation', changedProps)
    checkPrimitiveDiff(oldProps.scaleX, newProps.scaleX, 'scaleX', changedProps)
    checkPrimitiveDiff(oldProps.scaleY, newProps.scaleY, 'scaleY', changedProps)
    checkPrimitiveDiff(oldProps.shadowBlur, newProps.shadowBlur, 'shadowBlur', changedProps)
    checkPrimitiveDiff(oldProps.shadowColor, newProps.shadowColor, 'shadowColor', changedProps)
    checkPrimitiveDiff(
      oldProps.shadowOffsetX,
      newProps.shadowOffsetX,
      'shadowOffsetX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.shadowOffsetY,
      newProps.shadowOffsetY,
      'shadowOffsetY',
      changedProps
    )
    // type: 'BabylonjsGuiStyle' property (not coded) BabylonjsGuiControl.style.
    checkPrimitiveDiff(oldProps.top, newProps.top, 'top', changedProps)
    checkPrimitiveDiff(oldProps.topInPixels, newProps.topInPixels, 'topInPixels', changedProps)
    checkPrimitiveDiff(
      oldProps.transformCenterX,
      newProps.transformCenterX,
      'transformCenterX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.transformCenterY,
      newProps.transformCenterY,
      'transformCenterY',
      changedProps
    )
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(
      oldProps.useBitmapCache,
      newProps.useBitmapCache,
      'useBitmapCache',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.verticalAlignment,
      newProps.verticalAlignment,
      'verticalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    checkPrimitiveDiff(
      oldProps.widthInPixels,
      newProps.widthInPixels,
      'widthInPixels',
      changedProps
    )
    checkPrimitiveDiff(oldProps.zIndex, newProps.zIndex, 'zIndex', changedProps)
    checkMethodDiff(oldProps.setPadding, newProps.setPadding, 'setPadding', changedProps)
    checkMethodDiff(
      oldProps.setPaddingInPixels,
      newProps.setPaddingInPixels,
      'setPaddingInPixels',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export class FiberControl implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Control',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberControl',
  }
}

export class FiberContainerPropsHandler implements PropsHandler<FiberContainerProps> {
  getPropertyUpdates(
    oldProps: FiberContainerProps,
    newProps: FiberContainerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.adaptHeightToChildren,
      newProps.adaptHeightToChildren,
      'adaptHeightToChildren',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.adaptWidthToChildren,
      newProps.adaptWidthToChildren,
      'adaptWidthToChildren',
      changedProps
    )
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    // type: 'BabylonjsGuiBaseGradient' property (not coded) BabylonjsGuiContainer.backgroundGradient.
    checkPrimitiveDiff(
      oldProps.delegatePickingToChildren,
      newProps.delegatePickingToChildren,
      'delegatePickingToChildren',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isReadOnly, newProps.isReadOnly, 'isReadOnly', changedProps)
    checkPrimitiveDiff(
      oldProps.logLayoutCycleErrors,
      newProps.logLayoutCycleErrors,
      'logLayoutCycleErrors',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxLayoutCycle,
      newProps.maxLayoutCycle,
      'maxLayoutCycle',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onControlAddedObservable,
      newProps.onControlAddedObservable,
      'onControlAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onControlRemovedObservable,
      newProps.onControlRemovedObservable,
      'onControlRemovedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderToIntermediateTexture,
      newProps.renderToIntermediateTexture,
      'renderToIntermediateTexture',
      changedProps
    )
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export class FiberContainer implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberContainerPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Container',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberContainer',
  }
}

export class FiberRectanglePropsHandler implements PropsHandler<FiberRectangleProps> {
  getPropertyUpdates(
    oldProps: FiberRectangleProps,
    newProps: FiberRectangleProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.cornerRadius, newProps.cornerRadius, 'cornerRadius', changedProps)
    checkPrimitiveDiff(
      oldProps.cornerRadiusW,
      newProps.cornerRadiusW,
      'cornerRadiusW',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cornerRadiusX,
      newProps.cornerRadiusX,
      'cornerRadiusX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cornerRadiusY,
      newProps.cornerRadiusY,
      'cornerRadiusY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cornerRadiusZ,
      newProps.cornerRadiusZ,
      'cornerRadiusZ',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export class FiberRectangle implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Rectangle',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberRectangle',
  }
}

export class FiberButtonPropsHandler implements PropsHandler<FiberButtonProps> {
  getPropertyUpdates(
    oldProps: FiberButtonProps,
    newProps: FiberButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkLambdaDiff(
      oldProps.pointerDownAnimation,
      newProps.pointerDownAnimation,
      'pointerDownAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerEnterAnimation,
      newProps.pointerEnterAnimation,
      'pointerEnterAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerOutAnimation,
      newProps.pointerOutAnimation,
      'pointerOutAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpAnimation,
      newProps.pointerUpAnimation,
      'pointerUpAnimation',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export class FiberButton implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberButtonPropsHandler(),
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Button',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberButton',
  }
}

export class FiberFocusableButtonPropsHandler implements PropsHandler<FiberFocusableButtonProps> {
  getPropertyUpdates(
    oldProps: FiberFocusableButtonProps,
    newProps: FiberFocusableButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.focusedColor, newProps.focusedColor, 'focusedColor', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onBlurObservable,
      newProps.onBlurObservable,
      'onBlurObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onFocusObservable,
      newProps.onFocusObservable,
      'onFocusObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onKeyboardEventProcessedObservable,
      newProps.onKeyboardEventProcessedObservable,
      'onKeyboardEventProcessedObservable',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a focusable button that can easily handle keyboard events
 *
 * This code has been generated
 */
export class FiberFocusableButton implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFocusableButtonPropsHandler(),
      new FiberButtonPropsHandler(),
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FocusableButton',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberFocusableButton',
  }
}

export class FiberSelectionPanelPropsHandler implements PropsHandler<FiberSelectionPanelProps> {
  getPropertyUpdates(
    oldProps: FiberSelectionPanelProps,
    newProps: FiberSelectionPanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.barColor, newProps.barColor, 'barColor', changedProps)
    checkPrimitiveDiff(oldProps.barHeight, newProps.barHeight, 'barHeight', changedProps)
    checkPrimitiveDiff(
      oldProps.buttonBackground,
      newProps.buttonBackground,
      'buttonBackground',
      changedProps
    )
    checkPrimitiveDiff(oldProps.buttonColor, newProps.buttonColor, 'buttonColor', changedProps)
    // type: 'BabylonjsGuiSelectorGroup[]' property (not coded) BabylonjsGuiSelectionPanel.groups.
    checkPrimitiveDiff(oldProps.headerColor, newProps.headerColor, 'headerColor', changedProps)
    checkPrimitiveDiff(oldProps.labelColor, newProps.labelColor, 'labelColor', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.spacerHeight, newProps.spacerHeight, 'spacerHeight', changedProps)
    checkMethodDiff(oldProps.addGroup, newProps.addGroup, 'addGroup', changedProps)
    checkMethodDiff(
      oldProps.addToGroupCheckbox,
      newProps.addToGroupCheckbox,
      'addToGroupCheckbox',
      changedProps
    )
    checkMethodDiff(
      oldProps.addToGroupRadio,
      newProps.addToGroupRadio,
      'addToGroupRadio',
      changedProps
    )
    checkMethodDiff(
      oldProps.addToGroupSlider,
      newProps.addToGroupSlider,
      'addToGroupSlider',
      changedProps
    )
    checkMethodDiff(oldProps.setHeaderName, newProps.setHeaderName, 'setHeaderName', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export class FiberSelectionPanel implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSelectionPanelPropsHandler(),
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SelectionPanel',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'groups',
        type: 'BabylonjsGuiSelectorGroup[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberSelectionPanel',
  }
}

export class FiberScrollViewerPropsHandler implements PropsHandler<FiberScrollViewerProps> {
  getPropertyUpdates(
    oldProps: FiberScrollViewerProps,
    newProps: FiberScrollViewerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.barBackground,
      newProps.barBackground,
      'barBackground',
      changedProps
    )
    checkPrimitiveDiff(oldProps.barColor, newProps.barColor, 'barColor', changedProps)
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.barImage.
    checkPrimitiveDiff(
      oldProps.barImageHeight,
      newProps.barImageHeight,
      'barImageHeight',
      changedProps
    )
    checkPrimitiveDiff(oldProps.barSize, newProps.barSize, 'barSize', changedProps)
    checkPrimitiveDiff(
      oldProps.forceHorizontalBar,
      newProps.forceHorizontalBar,
      'forceHorizontalBar',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceVerticalBar,
      newProps.forceVerticalBar,
      'forceVerticalBar',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.freezeControls,
      newProps.freezeControls,
      'freezeControls',
      changedProps
    )
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalBarImage.
    checkPrimitiveDiff(
      oldProps.horizontalBarImageHeight,
      newProps.horizontalBarImageHeight,
      'horizontalBarImageHeight',
      changedProps
    )
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalThumbImage.
    checkPrimitiveDiff(
      oldProps.scrollBackground,
      newProps.scrollBackground,
      'scrollBackground',
      changedProps
    )
    checkPrimitiveDiff(oldProps.thumbHeight, newProps.thumbHeight, 'thumbHeight', changedProps)
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.thumbImage.
    checkPrimitiveDiff(oldProps.thumbLength, newProps.thumbLength, 'thumbLength', changedProps)
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalBarImage.
    checkPrimitiveDiff(
      oldProps.verticalBarImageHeight,
      newProps.verticalBarImageHeight,
      'verticalBarImageHeight',
      changedProps
    )
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalThumbImage.
    checkPrimitiveDiff(
      oldProps.wheelPrecision,
      newProps.wheelPrecision,
      'wheelPrecision',
      changedProps
    )
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    checkMethodDiff(
      oldProps.setBucketSizes,
      newProps.setBucketSizes,
      'setBucketSizes',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export class FiberScrollViewer implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberScrollViewerPropsHandler(),
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScrollViewer',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'isImageBased',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberScrollViewer',
  }
}

export class FiberToggleButtonPropsHandler implements PropsHandler<FiberToggleButtonProps> {
  getPropertyUpdates(
    oldProps: FiberToggleButtonProps,
    newProps: FiberToggleButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.delegatePickingToChildren,
      newProps.delegatePickingToChildren,
      'delegatePickingToChildren',
      changedProps
    )
    checkPrimitiveDiff(oldProps.group, newProps.group, 'group', changedProps)
    checkPrimitiveDiff(oldProps.isActive, newProps.isActive, 'isActive', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onIsActiveChangedObservable,
      newProps.onIsActiveChangedObservable,
      'onIsActiveChangedObservable',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerDownActiveAnimation,
      newProps.pointerDownActiveAnimation,
      'pointerDownActiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerDownInactiveAnimation,
      newProps.pointerDownInactiveAnimation,
      'pointerDownInactiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerEnterActiveAnimation,
      newProps.pointerEnterActiveAnimation,
      'pointerEnterActiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerEnterInactiveAnimation,
      newProps.pointerEnterInactiveAnimation,
      'pointerEnterInactiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerOutActiveAnimation,
      newProps.pointerOutActiveAnimation,
      'pointerOutActiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerOutInactiveAnimation,
      newProps.pointerOutInactiveAnimation,
      'pointerOutInactiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpActiveAnimation,
      newProps.pointerUpActiveAnimation,
      'pointerUpActiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpInactiveAnimation,
      newProps.pointerUpInactiveAnimation,
      'pointerUpInactiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.toActiveAnimation,
      newProps.toActiveAnimation,
      'toActiveAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.toInactiveAnimation,
      newProps.toInactiveAnimation,
      'toInactiveAnimation',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create toggle buttons
 *
 * This code has been generated
 */
export class FiberToggleButton implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberToggleButtonPropsHandler(),
      new FiberRectanglePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ToggleButton',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'group',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberToggleButton',
  }
}

export class FiberStackPanelPropsHandler implements PropsHandler<FiberStackPanelProps> {
  getPropertyUpdates(
    oldProps: FiberStackPanelProps,
    newProps: FiberStackPanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(
      oldProps.ignoreLayoutWarnings,
      newProps.ignoreLayoutWarnings,
      'ignoreLayoutWarnings',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.spacing, newProps.spacing, 'spacing', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export class FiberStackPanel implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStackPanelPropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StackPanel',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberStackPanel',
  }
}

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<FiberVirtualKeyboardProps> {
  getPropertyUpdates(
    oldProps: FiberVirtualKeyboardProps,
    newProps: FiberVirtualKeyboardProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.defaultButtonBackground,
      newProps.defaultButtonBackground,
      'defaultButtonBackground',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonColor,
      newProps.defaultButtonColor,
      'defaultButtonColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonHeight,
      newProps.defaultButtonHeight,
      'defaultButtonHeight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonPaddingBottom,
      newProps.defaultButtonPaddingBottom,
      'defaultButtonPaddingBottom',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonPaddingLeft,
      newProps.defaultButtonPaddingLeft,
      'defaultButtonPaddingLeft',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonPaddingRight,
      newProps.defaultButtonPaddingRight,
      'defaultButtonPaddingRight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonPaddingTop,
      newProps.defaultButtonPaddingTop,
      'defaultButtonPaddingTop',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultButtonWidth,
      newProps.defaultButtonWidth,
      'defaultButtonWidth',
      changedProps
    )
    checkObservableDiff(
      oldProps.onKeyPressObservable,
      newProps.onKeyPressObservable,
      'onKeyPressObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.selectedShiftThickness,
      newProps.selectedShiftThickness,
      'selectedShiftThickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.shiftButtonColor,
      newProps.shiftButtonColor,
      'shiftButtonColor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.shiftState, newProps.shiftState, 'shiftState', changedProps)
    checkMethodDiff(oldProps.addKeysRow, newProps.addKeysRow, 'addKeysRow', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export class FiberVirtualKeyboard implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVirtualKeyboardPropsHandler(),
      new FiberStackPanelPropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VirtualKeyboard',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberVirtualKeyboard',
  }
}

export class FiberEllipsePropsHandler implements PropsHandler<FiberEllipseProps> {
  getPropertyUpdates(
    oldProps: FiberEllipseProps,
    newProps: FiberEllipseProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export class FiberEllipse implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberEllipsePropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Ellipse',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberEllipse',
  }
}

export class FiberGridPropsHandler implements PropsHandler<FiberGridProps> {
  getPropertyUpdates(oldProps: FiberGridProps, newProps: FiberGridProps): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.clipChildren, newProps.clipChildren, 'clipChildren', changedProps)
    checkPrimitiveDiff(oldProps.clipContent, newProps.clipContent, 'clipContent', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkMethodDiff(
      oldProps.addColumnDefinition,
      newProps.addColumnDefinition,
      'addColumnDefinition',
      changedProps
    )
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    checkMethodDiff(
      oldProps.addRowDefinition,
      newProps.addRowDefinition,
      'addRowDefinition',
      changedProps
    )
    checkMethodDiff(
      oldProps.setColumnDefinition,
      newProps.setColumnDefinition,
      'setColumnDefinition',
      changedProps
    )
    checkMethodDiff(
      oldProps.setRowDefinition,
      newProps.setRowDefinition,
      'setRowDefinition',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export class FiberGrid implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGridPropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Grid',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    isGUI2DGrid: true,
    className: 'FiberGrid',
  }
}

export class Fiber_ScrollViewerWindowPropsHandler
  implements PropsHandler<Fiber_ScrollViewerWindowProps>
{
  getPropertyUpdates(
    oldProps: Fiber_ScrollViewerWindowProps,
    newProps: Fiber_ScrollViewerWindowProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.freezeControls,
      newProps.freezeControls,
      'freezeControls',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.parentClientHeight,
      newProps.parentClientHeight,
      'parentClientHeight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.parentClientWidth,
      newProps.parentClientWidth,
      'parentClientWidth',
      changedProps
    )
    checkMethodDiff(
      oldProps.setBucketSizes,
      newProps.setBucketSizes,
      'setBucketSizes',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export class Fiber_ScrollViewerWindow implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new Fiber_ScrollViewerWindowPropsHandler(),
      new FiberContainerPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: '_ScrollViewerWindow',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'Fiber_ScrollViewerWindow',
  }
}

export class FiberTextBlockPropsHandler implements PropsHandler<FiberTextBlockProps> {
  getPropertyUpdates(
    oldProps: FiberTextBlockProps,
    newProps: FiberTextBlockProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.applyOutlineToUnderline,
      newProps.applyOutlineToUnderline,
      'applyOutlineToUnderline',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceResizeWidth,
      newProps.forceResizeWidth,
      'forceResizeWidth',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lineSpacing, newProps.lineSpacing, 'lineSpacing', changedProps)
    checkPrimitiveDiff(oldProps.lineThrough, newProps.lineThrough, 'lineThrough', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onLinesReadyObservable,
      newProps.onLinesReadyObservable,
      'onLinesReadyObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextChangedObservable,
      newProps.onTextChangedObservable,
      'onTextChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.outlineColor, newProps.outlineColor, 'outlineColor', changedProps)
    checkPrimitiveDiff(oldProps.outlineWidth, newProps.outlineWidth, 'outlineWidth', changedProps)
    checkPrimitiveDiff(oldProps.resizeToFit, newProps.resizeToFit, 'resizeToFit', changedProps)
    checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
    checkPrimitiveDiff(
      oldProps.textHorizontalAlignment,
      newProps.textHorizontalAlignment,
      'textHorizontalAlignment',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.textVerticalAlignment,
      newProps.textVerticalAlignment,
      'textVerticalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.textWrapping, newProps.textWrapping, 'textWrapping', changedProps)
    checkPrimitiveDiff(oldProps.underline, newProps.underline, 'underline', changedProps)
    checkPrimitiveDiff(oldProps.wordDivider, newProps.wordDivider, 'wordDivider', changedProps)
    checkLambdaDiff(
      oldProps.wordSplittingFunction,
      newProps.wordSplittingFunction,
      'wordSplittingFunction',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export class FiberTextBlock implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberTextBlockPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TextBlock',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'text',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberTextBlock',
  }
}

export class FiberImagePropsHandler implements PropsHandler<FiberImageProps> {
  getPropertyUpdates(
    oldProps: FiberImageProps,
    newProps: FiberImageProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.alt, newProps.alt, 'alt', changedProps)
    checkPrimitiveDiff(oldProps.autoScale, newProps.autoScale, 'autoScale', changedProps)
    checkPrimitiveDiff(oldProps.cellHeight, newProps.cellHeight, 'cellHeight', changedProps)
    checkPrimitiveDiff(oldProps.cellId, newProps.cellId, 'cellId', changedProps)
    checkPrimitiveDiff(oldProps.cellWidth, newProps.cellWidth, 'cellWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.detectPointerOnOpaqueOnly,
      newProps.detectPointerOnOpaqueOnly,
      'detectPointerOnOpaqueOnly',
      changedProps
    )
    // type: 'BabylonjsCoreIImage' property (not coded) BabylonjsGuiImage.domImage.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onImageLoadedObservable,
      newProps.onImageLoadedObservable,
      'onImageLoadedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onSVGAttributesComputedObservable,
      newProps.onSVGAttributesComputedObservable,
      'onSVGAttributesComputedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.populateNinePatchSlicesFromImage,
      newProps.populateNinePatchSlicesFromImage,
      'populateNinePatchSlicesFromImage',
      changedProps
    )
    // type: 'ReferrerPolicy' property (not coded) BabylonjsGuiImage.referrerPolicy.
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
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export class FiberImage implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberImagePropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Image',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'url',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberImage',
  }
}

export class FiberCheckboxPropsHandler implements PropsHandler<FiberCheckboxProps> {
  getPropertyUpdates(
    oldProps: FiberCheckboxProps,
    newProps: FiberCheckboxProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    checkPrimitiveDiff(
      oldProps.checkSizeRatio,
      newProps.checkSizeRatio,
      'checkSizeRatio',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isChecked, newProps.isChecked, 'isChecked', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onIsCheckedChangedObservable,
      newProps.onIsCheckedChangedObservable,
      'onIsCheckedChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export class FiberCheckbox implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberCheckboxPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Checkbox',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberCheckbox',
  }
}

export class FiberColorPickerPropsHandler implements PropsHandler<FiberColorPickerProps> {
  getPropertyUpdates(
    oldProps: FiberColorPickerProps,
    newProps: FiberColorPickerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onValueChangedObservable,
      newProps.onValueChangedObservable,
      'onValueChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.size, newProps.size, 'size', changedProps)
    checkColor3Diff(oldProps.value, newProps.value, 'value', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export class FiberColorPicker implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberColorPickerPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ColorPicker',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberColorPicker',
  }
}

export class FiberInputTextPropsHandler implements PropsHandler<FiberInputTextProps> {
  getPropertyUpdates(
    oldProps: FiberInputTextProps,
    newProps: FiberInputTextProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.addKey, newProps.addKey, 'addKey', changedProps)
    checkPrimitiveDiff(
      oldProps.autoStretchWidth,
      newProps.autoStretchWidth,
      'autoStretchWidth',
      changedProps
    )
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    checkPrimitiveDiff(oldProps.currentKey, newProps.currentKey, 'currentKey', changedProps)
    checkPrimitiveDiff(oldProps.deadKey, newProps.deadKey, 'deadKey', changedProps)
    checkPrimitiveDiff(
      oldProps.disableMobilePrompt,
      newProps.disableMobilePrompt,
      'disableMobilePrompt',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.focusedBackground,
      newProps.focusedBackground,
      'focusedBackground',
      changedProps
    )
    checkPrimitiveDiff(oldProps.focusedColor, newProps.focusedColor, 'focusedColor', changedProps)
    checkPrimitiveDiff(
      oldProps.highligherOpacity,
      newProps.highligherOpacity,
      'highligherOpacity',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightedText,
      newProps.highlightedText,
      'highlightedText',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsGuiInputText.isTextHighlightOn.
    checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
    checkPrimitiveDiff(oldProps.maxWidth, newProps.maxWidth, 'maxWidth', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onBeforeKeyAddObservable,
      newProps.onBeforeKeyAddObservable,
      'onBeforeKeyAddObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBlurObservable,
      newProps.onBlurObservable,
      'onBlurObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onFocusObservable,
      newProps.onFocusObservable,
      'onFocusObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.onFocusSelectAll,
      newProps.onFocusSelectAll,
      'onFocusSelectAll',
      changedProps
    )
    checkObservableDiff(
      oldProps.onKeyboardEventProcessedObservable,
      newProps.onKeyboardEventProcessedObservable,
      'onKeyboardEventProcessedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextChangedObservable,
      newProps.onTextChangedObservable,
      'onTextChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextCopyObservable,
      newProps.onTextCopyObservable,
      'onTextCopyObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextCutObservable,
      newProps.onTextCutObservable,
      'onTextCutObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextHighlightObservable,
      newProps.onTextHighlightObservable,
      'onTextHighlightObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextPasteObservable,
      newProps.onTextPasteObservable,
      'onTextPasteObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.outlineColor, newProps.outlineColor, 'outlineColor', changedProps)
    checkPrimitiveDiff(oldProps.outlineWidth, newProps.outlineWidth, 'outlineWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.placeholderColor,
      newProps.placeholderColor,
      'placeholderColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.placeholderText,
      newProps.placeholderText,
      'placeholderText',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.promptMessage,
      newProps.promptMessage,
      'promptMessage',
      changedProps
    )
    checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
    checkPrimitiveDiff(
      oldProps.textHighlightColor,
      newProps.textHighlightColor,
      'textHighlightColor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export class FiberInputText implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberInputTextPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'InputText',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'text',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberInputText',
  }
}

export class FiberInputTextAreaPropsHandler implements PropsHandler<FiberInputTextAreaProps> {
  getPropertyUpdates(
    oldProps: FiberInputTextAreaProps,
    newProps: FiberInputTextAreaProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.autoStretchHeight,
      newProps.autoStretchHeight,
      'autoStretchHeight',
      changedProps
    )
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(oldProps.maxHeight, newProps.maxHeight, 'maxHeight', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onLinesReadyObservable,
      newProps.onLinesReadyObservable,
      'onLinesReadyObservable',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export class FiberInputTextArea implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberInputTextAreaPropsHandler(),
      new FiberInputTextPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'InputTextArea',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'text',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberInputTextArea',
  }
}

export class FiberInputPasswordPropsHandler implements PropsHandler<FiberInputPasswordProps> {
  getPropertyUpdates(
    oldProps: FiberInputPasswordProps,
    newProps: FiberInputPasswordProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export class FiberInputPassword implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberInputPasswordPropsHandler(),
      new FiberInputTextPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'InputPassword',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberInputPassword',
  }
}

export class FiberLinePropsHandler implements PropsHandler<FiberLineProps> {
  getPropertyUpdates(oldProps: FiberLineProps, newProps: FiberLineProps): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkControlDiff(
      oldProps.connectedControl,
      newProps.connectedControl,
      'connectedControl',
      changedProps
    )
    checkNumericArrayDiff(oldProps.dash, newProps.dash, 'dash', changedProps)
    checkPrimitiveDiff(
      oldProps.horizontalAlignment,
      newProps.horizontalAlignment,
      'horizontalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(
      oldProps.verticalAlignment,
      newProps.verticalAlignment,
      'verticalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.x1, newProps.x1, 'x1', changedProps)
    checkPrimitiveDiff(oldProps.x2, newProps.x2, 'x2', changedProps)
    checkPrimitiveDiff(oldProps.y1, newProps.y1, 'y1', changedProps)
    checkPrimitiveDiff(oldProps.y2, newProps.y2, 'y2', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export class FiberLine implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberLinePropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Line',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberLine',
  }
}

export class FiberMultiLinePropsHandler implements PropsHandler<FiberMultiLineProps> {
  getPropertyUpdates(
    oldProps: FiberMultiLineProps,
    newProps: FiberMultiLineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkNumericArrayDiff(oldProps.dash, newProps.dash, 'dash', changedProps)
    checkPrimitiveDiff(
      oldProps.horizontalAlignment,
      newProps.horizontalAlignment,
      'horizontalAlignment',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lineWidth, newProps.lineWidth, 'lineWidth', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkLambdaDiff(oldProps.onPointUpdate, newProps.onPointUpdate, 'onPointUpdate', changedProps)
    checkPrimitiveDiff(
      oldProps.verticalAlignment,
      newProps.verticalAlignment,
      'verticalAlignment',
      changedProps
    )
    checkMethodDiff(oldProps.add, newProps.add, 'add', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export class FiberMultiLine implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberMultiLinePropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MultiLine',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberMultiLine',
  }
}

export class FiberRadioButtonPropsHandler implements PropsHandler<FiberRadioButtonProps> {
  getPropertyUpdates(
    oldProps: FiberRadioButtonProps,
    newProps: FiberRadioButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    checkPrimitiveDiff(
      oldProps.checkSizeRatio,
      newProps.checkSizeRatio,
      'checkSizeRatio',
      changedProps
    )
    checkPrimitiveDiff(oldProps.group, newProps.group, 'group', changedProps)
    checkPrimitiveDiff(oldProps.isChecked, newProps.isChecked, 'isChecked', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onIsCheckedChangedObservable,
      newProps.onIsCheckedChangedObservable,
      'onIsCheckedChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export class FiberRadioButton implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberRadioButtonPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RadioButton',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberRadioButton',
  }
}

export class FiberBaseSliderPropsHandler implements PropsHandler<FiberBaseSliderProps> {
  getPropertyUpdates(
    oldProps: FiberBaseSliderProps,
    newProps: FiberBaseSliderProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.barOffset, newProps.barOffset, 'barOffset', changedProps)
    checkPrimitiveDiff(oldProps.displayThumb, newProps.displayThumb, 'displayThumb', changedProps)
    checkPrimitiveDiff(
      oldProps.isThumbClamped,
      newProps.isThumbClamped,
      'isThumbClamped',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
    checkPrimitiveDiff(oldProps.maximum, newProps.maximum, 'maximum', changedProps)
    checkPrimitiveDiff(oldProps.minimum, newProps.minimum, 'minimum', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onValueChangedObservable,
      newProps.onValueChangedObservable,
      'onValueChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.step, newProps.step, 'step', changedProps)
    checkPrimitiveDiff(oldProps.thumbWidth, newProps.thumbWidth, 'thumbWidth', changedProps)
    checkPrimitiveDiff(oldProps.value, newProps.value, 'value', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberBaseSlider implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberBaseSliderPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BaseSlider',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberBaseSlider',
  }
}

export class FiberScrollBarPropsHandler implements PropsHandler<FiberScrollBarProps> {
  getPropertyUpdates(
    oldProps: FiberScrollBarProps,
    newProps: FiberScrollBarProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    // type: 'BabylonjsGuiBaseGradient' property (not coded) BabylonjsGuiScrollBar.backgroundGradient.
    checkPrimitiveDiff(oldProps.borderColor, newProps.borderColor, 'borderColor', changedProps)
    checkPrimitiveDiff(
      oldProps.invertScrollDirection,
      newProps.invertScrollDirection,
      'invertScrollDirection',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberScrollBar implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberScrollBarPropsHandler(),
      new FiberBaseSliderPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScrollBar',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberScrollBar',
  }
}

export class FiberImageScrollBarPropsHandler implements PropsHandler<FiberImageScrollBarProps> {
  getPropertyUpdates(
    oldProps: FiberImageScrollBarProps,
    newProps: FiberImageScrollBarProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.backgroundImage.
    checkPrimitiveDiff(
      oldProps.barImageHeight,
      newProps.barImageHeight,
      'barImageHeight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertScrollDirection,
      newProps.invertScrollDirection,
      'invertScrollDirection',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(
      oldProps.num90RotationInVerticalMode,
      newProps.num90RotationInVerticalMode,
      'num90RotationInVerticalMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.thumbHeight, newProps.thumbHeight, 'thumbHeight', changedProps)
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.thumbImage.
    checkPrimitiveDiff(oldProps.thumbLength, newProps.thumbLength, 'thumbLength', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberImageScrollBar implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberImageScrollBarPropsHandler(),
      new FiberBaseSliderPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ImageScrollBar',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberImageScrollBar',
  }
}

export class FiberSliderPropsHandler implements PropsHandler<FiberSliderProps> {
  getPropertyUpdates(
    oldProps: FiberSliderProps,
    newProps: FiberSliderProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    // type: 'BabylonjsGuiBaseGradient' property (not coded) BabylonjsGuiSlider.backgroundGradient.
    checkPrimitiveDiff(oldProps.borderColor, newProps.borderColor, 'borderColor', changedProps)
    checkPrimitiveDiff(
      oldProps.displayValueBar,
      newProps.displayValueBar,
      'displayValueBar',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isThumbCircle,
      newProps.isThumbCircle,
      'isThumbCircle',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.thumbColor, newProps.thumbColor, 'thumbColor', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSliderPropsHandler(),
      new FiberBaseSliderPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Slider',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberSlider',
  }
}

export class FiberImageBasedSliderPropsHandler implements PropsHandler<FiberImageBasedSliderProps> {
  getPropertyUpdates(
    oldProps: FiberImageBasedSliderProps,
    newProps: FiberImageBasedSliderProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.backgroundImage.
    checkPrimitiveDiff(oldProps.displayThumb, newProps.displayThumb, 'displayThumb', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.thumbImage.
    // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.valueBarImage.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export class FiberImageBasedSlider implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberImageBasedSliderPropsHandler(),
      new FiberBaseSliderPropsHandler(),
      new FiberControlPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ImageBasedSlider',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberImageBasedSlider',
  }
}

export class FiberDisplayGridPropsHandler implements PropsHandler<FiberDisplayGridProps> {
  getPropertyUpdates(
    oldProps: FiberDisplayGridProps,
    newProps: FiberDisplayGridProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    checkPrimitiveDiff(oldProps.cellHeight, newProps.cellHeight, 'cellHeight', changedProps)
    checkPrimitiveDiff(oldProps.cellWidth, newProps.cellWidth, 'cellWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.displayMajorLines,
      newProps.displayMajorLines,
      'displayMajorLines',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.displayMinorLines,
      newProps.displayMinorLines,
      'displayMinorLines',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.majorLineColor,
      newProps.majorLineColor,
      'majorLineColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.majorLineFrequency,
      newProps.majorLineFrequency,
      'majorLineFrequency',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.majorLineTickness,
      newProps.majorLineTickness,
      'majorLineTickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minorLineColor,
      newProps.minorLineColor,
      'minorLineColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minorLineTickness,
      newProps.minorLineTickness,
      'minorLineTickness',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export class FiberDisplayGrid implements HasPropsHandlers<FiberControlProps> {
  private propsHandlers: PropsHandler<FiberControlProps>[]

  constructor() {
    this.propsHandlers = [new FiberDisplayGridPropsHandler(), new FiberControlPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControlProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DisplayGrid',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    className: 'FiberDisplayGrid',
  }
}

export class FiberControl3DPropsHandler implements PropsHandler<FiberControl3DProps> {
  getPropertyUpdates(
    oldProps: FiberControl3DProps,
    newProps: FiberControl3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onPointerClickObservable,
      newProps.onPointerClickObservable,
      'onPointerClickObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerDownObservable,
      newProps.onPointerDownObservable,
      'onPointerDownObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerEnterObservable,
      newProps.onPointerEnterObservable,
      'onPointerEnterObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerMoveObservable,
      newProps.onPointerMoveObservable,
      'onPointerMoveObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerOutObservable,
      newProps.onPointerOutObservable,
      'onPointerOutObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerUpObservable,
      newProps.onPointerUpObservable,
      'onPointerUpObservable',
      changedProps
    )
    // type: 'BabylonjsGuiContainer3D' property (not coded) BabylonjsGuiControl3D.parent.
    checkLambdaDiff(
      oldProps.pointerDownAnimation,
      newProps.pointerDownAnimation,
      'pointerDownAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerEnterAnimation,
      newProps.pointerEnterAnimation,
      'pointerEnterAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerOutAnimation,
      newProps.pointerOutAnimation,
      'pointerOutAnimation',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpAnimation,
      newProps.pointerUpAnimation,
      'pointerUpAnimation',
      changedProps
    )
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkVector3Diff(oldProps.scaling, newProps.scaling, 'scaling', true, changedProps)
    checkMethodDiff(oldProps.addBehavior, newProps.addBehavior, 'addBehavior', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export class FiberControl3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [new FiberControl3DPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Control3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberControl3D',
  }
}

export class FiberContainer3DPropsHandler implements PropsHandler<FiberContainer3DProps> {
  getPropertyUpdates(
    oldProps: FiberContainer3DProps,
    newProps: FiberContainer3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.blockLayout, newProps.blockLayout, 'blockLayout', changedProps)
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export class FiberContainer3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [new FiberContainer3DPropsHandler(), new FiberControl3DPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Container3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberContainer3D',
  }
}

export class FiberVolumeBasedPanelPropsHandler implements PropsHandler<FiberVolumeBasedPanelProps> {
  getPropertyUpdates(
    oldProps: FiberVolumeBasedPanelProps,
    newProps: FiberVolumeBasedPanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.columns, newProps.columns, 'columns', changedProps)
    checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
    checkPrimitiveDiff(oldProps.orientation, newProps.orientation, 'orientation', changedProps)
    checkPrimitiveDiff(oldProps.rows, newProps.rows, 'rows', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export class FiberVolumeBasedPanel implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VolumeBasedPanel',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberVolumeBasedPanel',
  }
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<FiberCylinderPanelProps> {
  getPropertyUpdates(
    oldProps: FiberCylinderPanelProps,
    newProps: FiberCylinderPanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export class FiberCylinderPanel implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberCylinderPanelPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CylinderPanel',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberCylinderPanel',
  }
}

export class FiberTouchHolographicMenuPropsHandler
  implements PropsHandler<FiberTouchHolographicMenuProps>
{
  getPropertyUpdates(
    oldProps: FiberTouchHolographicMenuProps,
    newProps: FiberTouchHolographicMenuProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.backPlateMargin,
      newProps.backPlateMargin,
      'backPlateMargin',
      changedProps
    )
    checkMethodDiff(oldProps.addButton, newProps.addButton, 'addButton', changedProps)
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Simple menu that can contain holographic buttons
 *
 * This code has been generated
 */
export class FiberTouchHolographicMenu implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTouchHolographicMenuPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TouchHolographicMenu',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberTouchHolographicMenu',
  }
}

export class FiberHandMenuPropsHandler implements PropsHandler<FiberHandMenuProps> {
  getPropertyUpdates(
    oldProps: FiberHandMenuProps,
    newProps: FiberHandMenuProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Hand menu that displays buttons and floats around the hand.
 *
 * This code has been generated
 */
export class FiberHandMenu implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHandMenuPropsHandler(),
      new FiberTouchHolographicMenuPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HandMenu',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'xr',
        type: 'BabylonjsCoreWebXRExperienceHelper',
        optional: false,
      },
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberHandMenu',
  }
}

export class FiberNearMenuPropsHandler implements PropsHandler<FiberNearMenuProps> {
  getPropertyUpdates(
    oldProps: FiberNearMenuProps,
    newProps: FiberNearMenuProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.isPinned, newProps.isPinned, 'isPinned', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * NearMenu that displays buttons and follows the camera
 *
 * This code has been generated
 */
export class FiberNearMenu implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberNearMenuPropsHandler(),
      new FiberTouchHolographicMenuPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'NearMenu',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberNearMenu',
  }
}

export class FiberPlanePanelPropsHandler implements PropsHandler<FiberPlanePanelProps> {
  getPropertyUpdates(
    oldProps: FiberPlanePanelProps,
    newProps: FiberPlanePanelProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export class FiberPlanePanel implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPlanePanelPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PlanePanel',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberPlanePanel',
  }
}

export class FiberScatterPanelPropsHandler implements PropsHandler<FiberScatterPanelProps> {
  getPropertyUpdates(
    oldProps: FiberScatterPanelProps,
    newProps: FiberScatterPanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.iteration, newProps.iteration, 'iteration', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export class FiberScatterPanel implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberScatterPanelPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScatterPanel',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberScatterPanel',
  }
}

export class FiberSpherePanelPropsHandler implements PropsHandler<FiberSpherePanelProps> {
  getPropertyUpdates(
    oldProps: FiberSpherePanelProps,
    newProps: FiberSpherePanelProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export class FiberSpherePanel implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSpherePanelPropsHandler(),
      new FiberVolumeBasedPanelPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SpherePanel',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberSpherePanel',
  }
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<FiberStackPanel3DProps> {
  getPropertyUpdates(
    oldProps: FiberStackPanel3DProps,
    newProps: FiberStackPanel3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.isVertical, newProps.isVertical, 'isVertical', changedProps)
    checkPrimitiveDiff(oldProps.margin, newProps.margin, 'margin', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export class FiberStackPanel3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStackPanel3DPropsHandler(),
      new FiberContainer3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StackPanel3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'isVertical',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberStackPanel3D',
  }
}

export class FiberContentDisplay3DPropsHandler implements PropsHandler<FiberContentDisplay3DProps> {
  getPropertyUpdates(
    oldProps: FiberContentDisplay3DProps,
    newProps: FiberContentDisplay3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkControlDiff(oldProps.content, newProps.content, 'content', changedProps)
    checkPrimitiveDiff(
      oldProps.contentResolution,
      newProps.contentResolution,
      'contentResolution',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The base class for controls that display content
 *
 * This code has been generated
 */
export class FiberContentDisplay3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [new FiberContentDisplay3DPropsHandler(), new FiberControl3DPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ContentDisplay3D',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberContentDisplay3D',
  }
}

export class FiberAbstractButton3DPropsHandler implements PropsHandler<FiberAbstractButton3DProps> {
  getPropertyUpdates(
    oldProps: FiberAbstractButton3DProps,
    newProps: FiberAbstractButton3DProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export class FiberAbstractButton3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AbstractButton3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberAbstractButton3D',
  }
}

export class FiberButton3DPropsHandler implements PropsHandler<FiberButton3DProps> {
  getPropertyUpdates(
    oldProps: FiberButton3DProps,
    newProps: FiberButton3DProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export class FiberButton3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Button3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsGuiIButton3DCreationOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberButton3D',
  }
}

export class FiberTouchButton3DPropsHandler implements PropsHandler<FiberTouchButton3DProps> {
  getPropertyUpdates(
    oldProps: FiberTouchButton3DProps,
    newProps: FiberTouchButton3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(
      oldProps.collidableFrontDirection,
      newProps.collidableFrontDirection,
      'collidableFrontDirection',
      true,
      changedProps
    )
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsGuiTouchButton3D.collisionMesh.
    checkPrimitiveDiff(
      oldProps.isToggleButton,
      newProps.isToggleButton,
      'isToggleButton',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isToggled, newProps.isToggled, 'isToggled', changedProps)
    checkObservableDiff(
      oldProps.onToggleObservable,
      newProps.onToggleObservable,
      'onToggleObservable',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a touchable button in 3D
 *
 * This code has been generated
 */
export class FiberTouchButton3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTouchButton3DPropsHandler(),
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TouchButton3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'collisionMesh',
        type: 'BabylonjsCoreMesh',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberTouchButton3D',
  }
}

export class FiberTouchHolographicButtonPropsHandler
  implements PropsHandler<FiberTouchHolographicButtonProps>
{
  getPropertyUpdates(
    oldProps: FiberTouchHolographicButtonProps,
    newProps: FiberTouchHolographicButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.imageUrl, newProps.imageUrl, 'imageUrl', changedProps)
    checkPrimitiveDiff(
      oldProps.isBackplateVisible,
      newProps.isBackplateVisible,
      'isBackplateVisible',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
    checkPrimitiveDiff(oldProps.tooltipText, newProps.tooltipText, 'tooltipText', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export class FiberTouchHolographicButton implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTouchHolographicButtonPropsHandler(),
      new FiberTouchButton3DPropsHandler(),
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TouchHolographicButton',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'shareMaterials',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberTouchHolographicButton',
  }
}

export class FiberTouchMeshButton3DPropsHandler
  implements PropsHandler<FiberTouchMeshButton3DProps>
{
  getPropertyUpdates(
    oldProps: FiberTouchMeshButton3DProps,
    newProps: FiberTouchMeshButton3DProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to create an interactable object. It's a touchable 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export class FiberTouchMeshButton3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTouchMeshButton3DPropsHandler(),
      new FiberTouchButton3DPropsHandler(),
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TouchMeshButton3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'mesh',
        type: 'BabylonjsCoreMesh',
        optional: false,
      },
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberTouchMeshButton3D',
  }
}

export class FiberHolographicButtonPropsHandler
  implements PropsHandler<FiberHolographicButtonProps>
{
  getPropertyUpdates(
    oldProps: FiberHolographicButtonProps,
    newProps: FiberHolographicButtonProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.imageUrl, newProps.imageUrl, 'imageUrl', changedProps)
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkPrimitiveDiff(oldProps.text, newProps.text, 'text', changedProps)
    checkPrimitiveDiff(oldProps.tooltipText, newProps.tooltipText, 'tooltipText', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export class FiberHolographicButton implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHolographicButtonPropsHandler(),
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HolographicButton',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'shareMaterials',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberHolographicButton',
  }
}

export class FiberMeshButton3DPropsHandler implements PropsHandler<FiberMeshButton3DProps> {
  getPropertyUpdates(
    oldProps: FiberMeshButton3DProps,
    newProps: FiberMeshButton3DProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export class FiberMeshButton3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMeshButton3DPropsHandler(),
      new FiberButton3DPropsHandler(),
      new FiberAbstractButton3DPropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MeshButton3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'mesh',
        type: 'BabylonjsCoreMesh',
        optional: false,
      },
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberMeshButton3D',
  }
}

export class FiberHolographicSlatePropsHandler implements PropsHandler<FiberHolographicSlateProps> {
  getPropertyUpdates(
    oldProps: FiberHolographicSlateProps,
    newProps: FiberHolographicSlateProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsGuiHolographicSlate.dimensions.
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsGuiHolographicSlate.minDimensions.
    checkVector3Diff(oldProps.origin, newProps.origin, 'origin', false, changedProps)
    checkPrimitiveDiff(oldProps['origin-x'], newProps['origin-x'], 'origin.x', changedProps)
    checkPrimitiveDiff(oldProps['origin-y'], newProps['origin-y'], 'origin.y', changedProps)
    checkPrimitiveDiff(oldProps['origin-z'], newProps['origin-z'], 'origin.z', changedProps)
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkPrimitiveDiff(oldProps.title, newProps.title, 'title', changedProps)
    checkPrimitiveDiff(
      oldProps.titleBarHeight,
      newProps.titleBarHeight,
      'titleBarHeight',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.titleBarMargin,
      newProps.titleBarMargin,
      'titleBarMargin',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a holographic slate
 *
 * This code has been generated
 */
export class FiberHolographicSlate implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHolographicSlatePropsHandler(),
      new FiberContentDisplay3DPropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HolographicSlate',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberHolographicSlate',
  }
}

export class FiberHolographicBackplatePropsHandler
  implements PropsHandler<FiberHolographicBackplateProps>
{
  getPropertyUpdates(
    oldProps: FiberHolographicBackplateProps,
    newProps: FiberHolographicBackplateProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a holographic backplate in 3D
 *
 * This code has been generated
 */
export class FiberHolographicBackplate implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHolographicBackplatePropsHandler(),
      new FiberControl3DPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HolographicBackplate',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: '_shareMaterials',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberHolographicBackplate',
  }
}

export class FiberSlider3DPropsHandler implements PropsHandler<FiberSlider3DProps> {
  getPropertyUpdates(
    oldProps: FiberSlider3DProps,
    newProps: FiberSlider3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
    checkPrimitiveDiff(oldProps.maximum, newProps.maximum, 'maximum', changedProps)
    checkPrimitiveDiff(oldProps.minimum, newProps.minimum, 'minimum', changedProps)
    checkObservableDiff(
      oldProps.onValueChangedObservable,
      newProps.onValueChangedObservable,
      'onValueChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.step, newProps.step, 'step', changedProps)
    checkPrimitiveDiff(oldProps.value, newProps.value, 'value', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create a slider in 3D
 *
 * This code has been generated
 */
export class FiberSlider3D implements HasPropsHandlers<FiberControl3DProps> {
  private propsHandlers: PropsHandler<FiberControl3DProps>[]

  constructor() {
    this.propsHandlers = [new FiberSlider3DPropsHandler(), new FiberControl3DPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Slider3D',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'sliderBackplateVisible',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberSlider3D',
  }
}

export class FiberSpriteManagerPropsHandler implements PropsHandler<FiberSpriteManagerProps> {
  getPropertyUpdates(
    oldProps: FiberSpriteManagerProps,
    newProps: FiberSpriteManagerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.blendMode, newProps.blendMode, 'blendMode', changedProps)
    checkPrimitiveDiff(oldProps.cellHeight, newProps.cellHeight, 'cellHeight', changedProps)
    checkPrimitiveDiff(oldProps.cellWidth, newProps.cellWidth, 'cellWidth', changedProps)
    checkPrimitiveDiff(
      oldProps.disableDepthWrite,
      newProps.disableDepthWrite,
      'disableDepthWrite',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fogEnabled, newProps.fogEnabled, 'fogEnabled', changedProps)
    checkPrimitiveDiff(oldProps.isPickable, newProps.isPickable, 'isPickable', changedProps)
    checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
    // type: 'any' property (not coded) BabylonjsCoreSpriteManager.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.pixelPerfect, newProps.pixelPerfect, 'pixelPerfect', changedProps)
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
    // type: 'BabylonjsCoreSprite[]' property (not coded) BabylonjsCoreSpriteManager.sprites.
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreSpriteManager.texture.
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(
      oldProps.useLogarithmicDepth,
      newProps.useLogarithmicDepth,
      'useLogarithmicDepth',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to manage multiple sprites on the same spritesheet
 *
 * This code has been generated
 */
export class FiberSpriteManager implements HasPropsHandlers<FiberSpriteManagerProps> {
  private propsHandlers: PropsHandler<FiberSpriteManagerProps>[]

  constructor() {
    this.propsHandlers = [new FiberSpriteManagerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberSpriteManagerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberSpriteManagerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SpriteManager',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'imgUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'capacity',
        type: 'number',
        optional: false,
      },
      {
        name: 'cellSize',
        type: 'any',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'epsilon',
        type: 'number',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'fromPacked',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'spriteJSON',
        type: 'any',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSpriteManager',
  }
}

export class FiberSpritePackedManagerPropsHandler
  implements PropsHandler<FiberSpritePackedManagerProps>
{
  getPropertyUpdates(
    oldProps: FiberSpritePackedManagerProps,
    newProps: FiberSpritePackedManagerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to manage multiple sprites of different sizes on the same spritesheet
 *
 * This code has been generated
 */
export class FiberSpritePackedManager implements HasPropsHandlers<FiberSpriteManagerProps> {
  private propsHandlers: PropsHandler<FiberSpriteManagerProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSpritePackedManagerPropsHandler(),
      new FiberSpriteManagerPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberSpriteManagerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberSpriteManagerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SpritePackedManager',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'imgUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'capacity',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'spriteJSON',
        type: 'string',
        optional: true,
      },
      {
        name: 'epsilon',
        type: 'number',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSpritePackedManager',
  }
}

export class FiberThinSpritePropsHandler implements PropsHandler<FiberThinSpriteProps> {
  getPropertyUpdates(
    oldProps: FiberThinSpriteProps,
    newProps: FiberThinSpriteProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.angle, newProps.angle, 'angle', changedProps)
    checkPrimitiveDiff(oldProps.cellIndex, newProps.cellIndex, 'cellIndex', changedProps)
    checkPrimitiveDiff(oldProps.cellRef, newProps.cellRef, 'cellRef', changedProps)
    // type: 'BabylonjsCoreIColor4Like' property (not coded) BabylonjsCoreThinSprite.color.
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(oldProps.invertU, newProps.invertU, 'invertU', changedProps)
    checkPrimitiveDiff(oldProps.invertV, newProps.invertV, 'invertV', changedProps)
    checkPrimitiveDiff(oldProps.isVisible, newProps.isVisible, 'isVisible', changedProps)
    // type: 'BabylonjsCoreIVector3Like' property (not coded) BabylonjsCoreThinSprite.position.
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * ThinSprite Class used to represent a thin sprite
 * This is the base class for sprites but can also directly be used with ThinEngine
 *
 * This code has been generated
 */
export class FiberThinSprite implements HasPropsHandlers<FiberThinSpriteProps> {
  private propsHandlers: PropsHandler<FiberThinSpriteProps>[]

  constructor() {
    this.propsHandlers = [new FiberThinSpritePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberThinSpriteProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinSpriteProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ThinSprite',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    className: 'FiberThinSprite',
  }
}

export class FiberSpritePropsHandler implements PropsHandler<FiberSpriteProps> {
  getPropertyUpdates(
    oldProps: FiberSpriteProps,
    newProps: FiberSpriteProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreActionManager' property (not coded) BabylonjsCoreSprite.actionManager.
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreSprite.animations.
    checkColor4Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.delay, newProps.delay, 'delay', changedProps)
    checkPrimitiveDiff(
      oldProps.disposeWhenFinishedAnimating,
      newProps.disposeWhenFinishedAnimating,
      'disposeWhenFinishedAnimating',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fromIndex, newProps.fromIndex, 'fromIndex', changedProps)
    checkPrimitiveDiff(oldProps.isPickable, newProps.isPickable, 'isPickable', changedProps)
    checkPrimitiveDiff(
      oldProps.loopAnimation,
      newProps.loopAnimation,
      'loopAnimation',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkVector3Diff(oldProps.position, newProps.position, 'position', false, changedProps)
    checkPrimitiveDiff(oldProps['position-x'], newProps['position-x'], 'position.x', changedProps)
    checkPrimitiveDiff(oldProps['position-y'], newProps['position-y'], 'position.y', changedProps)
    checkPrimitiveDiff(oldProps['position-z'], newProps['position-z'], 'position.z', changedProps)
    checkPrimitiveDiff(oldProps.size, newProps.size, 'size', changedProps)
    checkPrimitiveDiff(oldProps.toIndex, newProps.toIndex, 'toIndex', changedProps)
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(
      oldProps.useAlphaForPicking,
      newProps.useAlphaForPicking,
      'useAlphaForPicking',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to represent a sprite
 *
 * This code has been generated
 */
export class FiberSprite implements HasPropsHandlers<FiberThinSpriteProps> {
  private propsHandlers: PropsHandler<FiberThinSpriteProps>[]

  constructor() {
    this.propsHandlers = [new FiberSpritePropsHandler(), new FiberThinSpritePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberThinSpriteProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinSpriteProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Sprite',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'manager',
        type: 'BabylonjsCoreISpriteManager',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    className: 'FiberSprite',
  }
}

export class FiberSoundPropsHandler implements PropsHandler<FiberSoundProps> {
  getPropertyUpdates(
    oldProps: FiberSoundProps,
    newProps: FiberSoundProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.autoplay, newProps.autoplay, 'autoplay', changedProps)
    checkPrimitiveDiff(
      oldProps.directionalConeInnerAngle,
      newProps.directionalConeInnerAngle,
      'directionalConeInnerAngle',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.directionalConeOuterAngle,
      newProps.directionalConeOuterAngle,
      'directionalConeOuterAngle',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.distanceModel,
      newProps.distanceModel,
      'distanceModel',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isPaused, newProps.isPaused, 'isPaused', changedProps)
    checkPrimitiveDiff(oldProps.isPlaying, newProps.isPlaying, 'isPlaying', changedProps)
    checkPrimitiveDiff(oldProps.loop, newProps.loop, 'loop', changedProps)
    checkPrimitiveDiff(oldProps.maxDistance, newProps.maxDistance, 'maxDistance', changedProps)
    // type: 'any' property (not coded) BabylonjsCoreSound.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkLambdaDiff(oldProps.onended, newProps.onended, 'onended', changedProps)
    checkObservableDiff(
      oldProps.onEndedObservable,
      newProps.onEndedObservable,
      'onEndedObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.refDistance, newProps.refDistance, 'refDistance', changedProps)
    checkPrimitiveDiff(
      oldProps.rolloffFactor,
      newProps.rolloffFactor,
      'rolloffFactor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.soundTrackId, newProps.soundTrackId, 'soundTrackId', changedProps)
    checkPrimitiveDiff(oldProps.spatialSound, newProps.spatialSound, 'spatialSound', changedProps)
    checkPrimitiveDiff(
      oldProps.useCustomAttenuation,
      newProps.useCustomAttenuation,
      'useCustomAttenuation',
      changedProps
    )
    checkMethodDiff(
      oldProps.setAttenuationFunction,
      newProps.setAttenuationFunction,
      'setAttenuationFunction',
      changedProps
    )
    checkMethodDiff(
      oldProps.setAudioBuffer,
      newProps.setAudioBuffer,
      'setAudioBuffer',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDirectionalCone,
      newProps.setDirectionalCone,
      'setDirectionalCone',
      changedProps
    )
    checkMethodDiff(
      oldProps.setLocalDirectionToMesh,
      newProps.setLocalDirectionToMesh,
      'setLocalDirectionToMesh',
      changedProps
    )
    checkMethodDiff(
      oldProps.setPlaybackRate,
      newProps.setPlaybackRate,
      'setPlaybackRate',
      changedProps
    )
    checkMethodDiff(oldProps.setPosition, newProps.setPosition, 'setPosition', changedProps)
    checkMethodDiff(oldProps.setVolume, newProps.setVolume, 'setVolume', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Defines a sound that can be played in the application.
 * The sound can either be an ambient track or a simple sound played in reaction to a user action.
 *
 * This code has been generated
 */
export class FiberSound implements HasPropsHandlers<FiberSoundProps> {
  private propsHandlers: PropsHandler<FiberSoundProps>[]

  constructor() {
    this.propsHandlers = [new FiberSoundPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberSoundProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberSoundProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Sound',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'urlOrArrayBuffer',
        type: 'any',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'readyToPlayCallback',
        type: '() => void',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreISoundOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSound',
  }
}

export class FiberEffectLayerPropsHandler implements PropsHandler<FiberEffectLayerProps> {
  getPropertyUpdates(
    oldProps: FiberEffectLayerProps,
    newProps: FiberEffectLayerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.disableBoundingBoxesFromEffectLayer,
      newProps.disableBoundingBoxesFromEffectLayer,
      'disableBoundingBoxesFromEffectLayer',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkColor4Diff(oldProps.neutralColor, newProps.neutralColor, 'neutralColor', changedProps)
    checkObservableDiff(
      oldProps.onAfterComposeObservable,
      newProps.onAfterComposeObservable,
      'onAfterComposeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterRenderMeshToEffect,
      newProps.onAfterRenderMeshToEffect,
      'onAfterRenderMeshToEffect',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeComposeObservable,
      newProps.onBeforeComposeObservable,
      'onBeforeComposeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderMainTextureObservable,
      newProps.onBeforeRenderMainTextureObservable,
      'onBeforeRenderMainTextureObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderMeshToEffect,
      newProps.onBeforeRenderMeshToEffect,
      'onBeforeRenderMeshToEffect',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onSizeChangedObservable,
      newProps.onSizeChangedObservable,
      'onSizeChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderingGroupId,
      newProps.renderingGroupId,
      'renderingGroupId',
      changedProps
    )
    checkMethodDiff(
      oldProps.setEffectIntensity,
      newProps.setEffectIntensity,
      'setEffectIntensity',
      changedProps
    )
    checkMethodDiff(
      oldProps.setMaterialForRendering,
      newProps.setMaterialForRendering,
      'setMaterialForRendering',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The effect layer Helps adding post process effect blended with the main pass.
 *
 * This can be for instance use to generate glow or highlight effects on the scene.
 *
 * The effect layer class can not be used directly and is intented to inherited from to be
 * customized per effects.
 *
 * This code has been generated
 */
export class FiberEffectLayer implements HasPropsHandlers<FiberEffectLayerProps> {
  private propsHandlers: PropsHandler<FiberEffectLayerProps>[]

  constructor() {
    this.propsHandlers = [new FiberEffectLayerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'EffectLayer',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isEffectLayer: true,
    isGlowLayer: false,
    className: 'FiberEffectLayer',
  }
}

export class FiberGlowLayerPropsHandler implements PropsHandler<FiberGlowLayerProps> {
  getPropertyUpdates(
    oldProps: FiberGlowLayerProps,
    newProps: FiberGlowLayerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.blurKernelSize,
      newProps.blurKernelSize,
      'blurKernelSize',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customEmissiveColorSelector,
      newProps.customEmissiveColorSelector,
      'customEmissiveColorSelector',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customEmissiveTextureSelector,
      newProps.customEmissiveTextureSelector,
      'customEmissiveTextureSelector',
      changedProps
    )
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkMethodDiff(
      oldProps.addExcludedMesh,
      newProps.addExcludedMesh,
      'addExcludedMesh',
      changedProps
    )
    checkMethodDiff(
      oldProps.addIncludedOnlyMesh,
      newProps.addIncludedOnlyMesh,
      'addIncludedOnlyMesh',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The glow layer Helps adding a glow effect around the emissive parts of a mesh.
 *
 * Once instantiated in a scene, by default, all the emissive meshes will glow.
 *
 * Documentation: https://doc.babylonjs.com/features/featuresDeepDive/mesh/glowLayer
 *
 * This code has been generated
 */
export class FiberGlowLayer implements HasPropsHandlers<FiberEffectLayerProps> {
  private propsHandlers: PropsHandler<FiberEffectLayerProps>[]

  constructor() {
    this.propsHandlers = [new FiberGlowLayerPropsHandler(), new FiberEffectLayerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GlowLayer',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'Partial<BabylonjsCoreIGlowLayerOptions>',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isEffectLayer: true,
    isGlowLayer: true,
    className: 'FiberGlowLayer',
  }
}

export class FiberHighlightLayerPropsHandler implements PropsHandler<FiberHighlightLayerProps> {
  getPropertyUpdates(
    oldProps: FiberHighlightLayerProps,
    newProps: FiberHighlightLayerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.blurHorizontalSize,
      newProps.blurHorizontalSize,
      'blurHorizontalSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blurVerticalSize,
      newProps.blurVerticalSize,
      'blurVerticalSize',
      changedProps
    )
    checkPrimitiveDiff(oldProps.innerGlow, newProps.innerGlow, 'innerGlow', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkObservableDiff(
      oldProps.onAfterBlurObservable,
      newProps.onAfterBlurObservable,
      'onAfterBlurObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeBlurObservable,
      newProps.onBeforeBlurObservable,
      'onBeforeBlurObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.outerGlow, newProps.outerGlow, 'outerGlow', changedProps)
    checkMethodDiff(
      oldProps.addExcludedMesh,
      newProps.addExcludedMesh,
      'addExcludedMesh',
      changedProps
    )
    checkMethodDiff(oldProps.addMesh, newProps.addMesh, 'addMesh', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberEffectLayerProps>[]

  constructor() {
    this.propsHandlers = [new FiberHighlightLayerPropsHandler(), new FiberEffectLayerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HighlightLayer',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'Partial<BabylonjsCoreIHighlightLayerOptions>',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isEffectLayer: true,
    isGlowLayer: false,
    className: 'FiberHighlightLayer',
  }
}

export class FiberThinTexturePropsHandler implements PropsHandler<FiberThinTextureProps> {
  getPropertyUpdates(
    oldProps: FiberThinTextureProps,
    newProps: FiberThinTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.anisotropicFilteringLevel,
      newProps.anisotropicFilteringLevel,
      'anisotropicFilteringLevel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.delayLoadState,
      newProps.delayLoadState,
      'delayLoadState',
      changedProps
    )
    // type: 'boolean' property (not coded) BabylonjsCoreThinTexture.is2DArray.
    // type: 'boolean' property (not coded) BabylonjsCoreThinTexture.is3D.
    // type: 'boolean' property (not coded) BabylonjsCoreThinTexture.isCube.
    checkPrimitiveDiff(oldProps.wrapR, newProps.wrapR, 'wrapR', changedProps)
    checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
    checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties required to work with Thin Engine.
 *
 * This code has been generated
 */
export class FiberThinTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [new FiberThinTexturePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ThinTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'internalTexture',
        type: 'BabylonjsCoreInternalTexture | BabylonjsCoreRenderTargetWrapper',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberThinTexture',
  }
}

export class FiberBaseTexturePropsHandler implements PropsHandler<FiberBaseTextureProps> {
  getPropertyUpdates(
    oldProps: FiberBaseTextureProps,
    newProps: FiberBaseTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreBaseTexture.animations.
    checkPrimitiveDiff(
      oldProps.anisotropicFilteringLevel,
      newProps.anisotropicFilteringLevel,
      'anisotropicFilteringLevel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.coordinatesIndex,
      newProps.coordinatesIndex,
      'coordinatesIndex',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.gammaSpace, newProps.gammaSpace, 'gammaSpace', changedProps)
    checkPrimitiveDiff(
      oldProps.getAlphaFromRGB,
      newProps.getAlphaFromRGB,
      'getAlphaFromRGB',
      changedProps
    )
    checkPrimitiveDiff(oldProps.hasAlpha, newProps.hasAlpha, 'hasAlpha', changedProps)
    checkPrimitiveDiff(oldProps.invertZ, newProps.invertZ, 'invertZ', changedProps)
    checkTextureDiff(
      oldProps.irradianceTexture,
      newProps.irradianceTexture,
      'irradianceTexture',
      changedProps
    )
    // type: 'boolean' property (not coded) BabylonjsCoreBaseTexture.is2DArray.
    // type: 'boolean' property (not coded) BabylonjsCoreBaseTexture.is3D.
    // type: 'boolean' property (not coded) BabylonjsCoreBaseTexture.isCube.
    checkPrimitiveDiff(
      oldProps.isRenderTarget,
      newProps.isRenderTarget,
      'isRenderTarget',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isRGBD, newProps.isRGBD, 'isRGBD', changedProps)
    checkPrimitiveDiff(oldProps.level, newProps.level, 'level', changedProps)
    checkPrimitiveDiff(
      oldProps.linearSpecularLOD,
      newProps.linearSpecularLOD,
      'linearSpecularLOD',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lodGenerationOffset,
      newProps.lodGenerationOffset,
      'lodGenerationOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lodGenerationScale,
      newProps.lodGenerationScale,
      'lodGenerationScale',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lodLevelInAlpha,
      newProps.lodLevelInAlpha,
      'lodLevelInAlpha',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreBaseTexture.metadata.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.optimizeUVAllocation,
      newProps.optimizeUVAllocation,
      'optimizeUVAllocation',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreBaseTexture.reservedDataStore.
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(oldProps.wrapR, newProps.wrapR, 'wrapR', changedProps)
    checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
    checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [new FiberBaseTexturePropsHandler(), new FiberThinTexturePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BaseTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'internalTexture',
        type: 'BabylonjsCoreInternalTexture',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberBaseTexture',
  }
}

export class FiberCubeTexturePropsHandler implements PropsHandler<FiberCubeTextureProps> {
  getPropertyUpdates(
    oldProps: FiberCubeTextureProps,
    newProps: FiberCubeTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(
      oldProps.boundingBoxPosition,
      newProps.boundingBoxPosition,
      'boundingBoxPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-x'],
      newProps['boundingBoxPosition-x'],
      'boundingBoxPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-y'],
      newProps['boundingBoxPosition-y'],
      'boundingBoxPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-z'],
      newProps['boundingBoxPosition-z'],
      'boundingBoxPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.boundingBoxSize,
      newProps.boundingBoxSize,
      'boundingBoxSize',
      true,
      changedProps
    )
    checkObservableDiff(
      oldProps.onLoadObservable,
      newProps.onLoadObservable,
      'onLoadObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.rotationY, newProps.rotationY, 'rotationY', changedProps)
    checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
    checkMethodDiff(
      oldProps.setReflectionTextureMatrix,
      newProps.setReflectionTextureMatrix,
      'setReflectionTextureMatrix',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class for creating a cube texture
 *
 * This code has been generated
 */
export class FiberCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberCubeTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CubeTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'rootUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: false,
      },
      {
        name: 'extensions',
        type: 'string[]',
        optional: true,
      },
      {
        name: 'noMipmap',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'files',
        type: 'string[]',
        optional: true,
      },
      {
        name: 'onLoad',
        type: '() => void',
        optional: true,
      },
      {
        name: 'onError',
        type: '(message?: string, exception?: any) => void',
        optional: true,
      },
      {
        name: 'format',
        type: 'number',
        optional: true,
      },
      {
        name: 'prefiltered',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'forcedExtension',
        type: 'any',
        optional: true,
      },
      {
        name: 'createPolynomials',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'lodScale',
        type: 'number',
        optional: true,
      },
      {
        name: 'lodOffset',
        type: 'number',
        optional: true,
      },
      {
        name: 'loaderOptions',
        type: 'any',
        optional: true,
      },
      {
        name: 'useSRGBBuffer',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberCubeTexture',
  }
}

export class FiberRawCubeTexturePropsHandler implements PropsHandler<FiberRawCubeTextureProps> {
  getPropertyUpdates(
    oldProps: FiberRawCubeTextureProps,
    newProps: FiberRawCubeTextureProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Raw cube texture where the raw buffers are passed in
 *
 * This code has been generated
 */
export class FiberRawCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRawCubeTexturePropsHandler(),
      new FiberCubeTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RawCubeTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'data',
        type: 'ArrayBufferView[]',
        optional: false,
      },
      {
        name: 'size',
        type: 'number',
        optional: false,
      },
      {
        name: 'format',
        type: 'number',
        optional: true,
      },
      {
        name: 'type',
        type: 'number',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'compression',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRawCubeTexture',
  }
}

export class FiberTexturePropsHandler implements PropsHandler<FiberTextureProps> {
  getPropertyUpdates(
    oldProps: FiberTextureProps,
    newProps: FiberTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.homogeneousRotationInUVTransform,
      newProps.homogeneousRotationInUVTransform,
      'homogeneousRotationInUVTransform',
      changedProps
    )
    // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreTexture.inspectableCustomProperties.
    checkPrimitiveDiff(oldProps.isBlocking, newProps.isBlocking, 'isBlocking', changedProps)
    checkObservableDiff(
      oldProps.onLoadObservable,
      newProps.onLoadObservable,
      'onLoadObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.uAng, newProps.uAng, 'uAng', changedProps)
    checkPrimitiveDiff(oldProps.uOffset, newProps.uOffset, 'uOffset', changedProps)
    checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
    checkPrimitiveDiff(
      oldProps.uRotationCenter,
      newProps.uRotationCenter,
      'uRotationCenter',
      changedProps
    )
    checkPrimitiveDiff(oldProps.uScale, newProps.uScale, 'uScale', changedProps)
    checkPrimitiveDiff(oldProps.vAng, newProps.vAng, 'vAng', changedProps)
    checkPrimitiveDiff(oldProps.vOffset, newProps.vOffset, 'vOffset', changedProps)
    checkPrimitiveDiff(
      oldProps.vRotationCenter,
      newProps.vRotationCenter,
      'vRotationCenter',
      changedProps
    )
    checkPrimitiveDiff(oldProps.vScale, newProps.vScale, 'vScale', changedProps)
    checkPrimitiveDiff(oldProps.wAng, newProps.wAng, 'wAng', changedProps)
    checkPrimitiveDiff(
      oldProps.wRotationCenter,
      newProps.wRotationCenter,
      'wRotationCenter',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 *
 * This code has been generated
 */
export class FiberTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Texture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'url',
        type: 'string',
        optional: false,
      },
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'noMipmapOrOptions',
        type: 'boolean | BabylonjsCoreITextureCreationOptions',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'onLoad',
        type: '() => void',
        optional: true,
      },
      {
        name: 'onError',
        type: '(message?: string, exception?: any) => void',
        optional: true,
      },
      {
        name: 'buffer',
        type: 'string | ArrayBufferView | ArrayBuffer | HTMLImageElement | Blob | ImageBitmap',
        optional: true,
      },
      {
        name: 'deleteBuffer',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'format',
        type: 'number',
        optional: true,
      },
      {
        name: 'mimeType',
        type: 'string',
        optional: true,
      },
      {
        name: 'loaderOptions',
        type: 'any',
        optional: true,
      },
      {
        name: 'creationFlags',
        type: 'number',
        optional: true,
      },
      {
        name: 'forcedExtension',
        type: 'string',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberTexture',
  }
}

export class FiberVideoTexturePropsHandler implements PropsHandler<FiberVideoTextureProps> {
  getPropertyUpdates(
    oldProps: FiberVideoTextureProps,
    newProps: FiberVideoTextureProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 *
 * This code has been generated
 */
export class FiberVideoTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVideoTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VideoTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'src',
        type: 'string | string[] | HTMLVideoElement',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'settings',
        type: 'Partial<BabylonjsCoreVideoTextureSettings>',
        optional: true,
      },
      {
        name: 'onError',
        type: '(message?: string, exception?: any) => void',
        optional: true,
      },
      {
        name: 'format',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberVideoTexture',
  }
}

export class FiberProceduralTexturePropsHandler
  implements PropsHandler<FiberProceduralTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberProceduralTextureProps,
    newProps: FiberProceduralTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.autoClear, newProps.autoClear, 'autoClear', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    // type: 'BabylonjsCoreNodeMaterial' property (not coded) BabylonjsCoreProceduralTexture.nodeMaterialSource.
    checkObservableDiff(
      oldProps.onBeforeGenerationObservable,
      newProps.onBeforeGenerationObservable,
      'onBeforeGenerationObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onGenerated, newProps.onGenerated, 'onGenerated', changedProps)
    checkObservableDiff(
      oldProps.onGeneratedObservable,
      newProps.onGeneratedObservable,
      'onGeneratedObservable',
      changedProps
    )
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
    checkMethodDiff(oldProps.setVector4, newProps.setVector4, 'setVector4', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 *
 * This code has been generated
 */
export class FiberProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberProceduralTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ProceduralTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'BabylonjsCoreTextureSize',
        optional: false,
      },
      {
        name: 'fragment',
        type: 'any',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'fallbackTexture',
        type: 'BabylonjsCoreTexture | BabylonjsCoreIProceduralTextureCreationOptions',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'isCube',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberProceduralTexture',
  }
}

export class FiberCustomProceduralTexturePropsHandler
  implements PropsHandler<FiberCustomProceduralTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberCustomProceduralTextureProps,
    newProps: FiberCustomProceduralTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.animate, newProps.animate, 'animate', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 *
 * This code has been generated
 */
export class FiberCustomProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberCustomProceduralTexturePropsHandler(),
      new FiberProceduralTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CustomProceduralTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'texturePath',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'BabylonjsCoreTextureSize',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'fallbackTexture',
        type: 'BabylonjsCoreTexture | BabylonjsCoreICustomProceduralTextureCreationOptions',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'skipJson',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberCustomProceduralTexture',
  }
}

export class FiberNoiseProceduralTexturePropsHandler
  implements PropsHandler<FiberNoiseProceduralTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberNoiseProceduralTextureProps,
    newProps: FiberNoiseProceduralTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.animationSpeedFactor,
      newProps.animationSpeedFactor,
      'animationSpeedFactor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.brightness, newProps.brightness, 'brightness', changedProps)
    checkPrimitiveDiff(oldProps.octaves, newProps.octaves, 'octaves', changedProps)
    checkPrimitiveDiff(oldProps.persistence, newProps.persistence, 'persistence', changedProps)
    checkPrimitiveDiff(oldProps.time, newProps.time, 'time', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to generate noise procedural textures
 *
 * This code has been generated
 */
export class FiberNoiseProceduralTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberNoiseProceduralTexturePropsHandler(),
      new FiberProceduralTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'NoiseProceduralTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'number',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'fallbackTexture',
        type: 'BabylonjsCoreTexture',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberNoiseProceduralTexture',
  }
}

export class FiberRawTexturePropsHandler implements PropsHandler<FiberRawTextureProps> {
  getPropertyUpdates(
    oldProps: FiberRawTextureProps,
    newProps: FiberRawTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRawTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RawTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'data',
        type: 'ArrayBufferView',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: false,
      },
      {
        name: 'height',
        type: 'number',
        optional: false,
      },
      {
        name: 'format',
        type: 'number',
        optional: false,
      },
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: false,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'type',
        type: 'number',
        optional: true,
      },
      {
        name: 'creationFlags',
        type: 'number',
        optional: true,
      },
      {
        name: 'useSRGBBuffer',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRawTexture',
  }
}

export class FiberRenderTargetTexturePropsHandler
  implements PropsHandler<FiberRenderTargetTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberRenderTargetTextureProps,
    newProps: FiberRenderTargetTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreRenderTargetTexture.activeCamera.
    checkVector3Diff(
      oldProps.boundingBoxPosition,
      newProps.boundingBoxPosition,
      'boundingBoxPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-x'],
      newProps['boundingBoxPosition-x'],
      'boundingBoxPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-y'],
      newProps['boundingBoxPosition-y'],
      'boundingBoxPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-z'],
      newProps['boundingBoxPosition-z'],
      'boundingBoxPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.boundingBoxSize,
      newProps.boundingBoxSize,
      'boundingBoxSize',
      true,
      changedProps
    )
    checkColor4Diff(oldProps.clearColor, newProps.clearColor, 'clearColor', changedProps)
    checkLambdaDiff(
      oldProps.customIsReadyFunction,
      newProps.customIsReadyFunction,
      'customIsReadyFunction',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customRenderFunction,
      newProps.customRenderFunction,
      'customRenderFunction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceLayerMaskCheck,
      newProps.forceLayerMaskCheck,
      'forceLayerMaskCheck',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getCustomRenderList,
      newProps.getCustomRenderList,
      'getCustomRenderList',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreCameraViewport,
      newProps.ignoreCameraViewport,
      'ignoreCameraViewport',
      changedProps
    )
    checkLambdaDiff(oldProps.onAfterRender, newProps.onAfterRender, 'onAfterRender', changedProps)
    checkObservableDiff(
      oldProps.onAfterRenderObservable,
      newProps.onAfterRenderObservable,
      'onAfterRenderObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onAfterUnbind, newProps.onAfterUnbind, 'onAfterUnbind', changedProps)
    checkObservableDiff(
      oldProps.onAfterUnbindObservable,
      newProps.onAfterUnbindObservable,
      'onAfterUnbindObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeBindObservable,
      newProps.onBeforeBindObservable,
      'onBeforeBindObservable',
      changedProps
    )
    checkLambdaDiff(
      oldProps.onBeforeRender,
      newProps.onBeforeRender,
      'onBeforeRender',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderObservable,
      newProps.onBeforeRenderObservable,
      'onBeforeRenderObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onClear, newProps.onClear, 'onClear', changedProps)
    checkObservableDiff(
      oldProps.onClearObservable,
      newProps.onClearObservable,
      'onClearObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onResizeObservable,
      newProps.onResizeObservable,
      'onResizeObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.refreshRate, newProps.refreshRate, 'refreshRate', changedProps)
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.renderList.
    checkLambdaDiff(
      oldProps.renderListPredicate,
      newProps.renderListPredicate,
      'renderListPredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderParticles,
      newProps.renderParticles,
      'renderParticles',
      changedProps
    )
    checkPrimitiveDiff(oldProps.renderPassId, newProps.renderPassId, 'renderPassId', changedProps)
    checkPrimitiveDiff(
      oldProps.renderSprites,
      newProps.renderSprites,
      'renderSprites',
      changedProps
    )
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(
      oldProps.skipInitialClear,
      newProps.skipInitialClear,
      'skipInitialClear',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useCameraPostProcesses,
      newProps.useCameraPostProcesses,
      'useCameraPostProcesses',
      changedProps
    )
    checkMethodDiff(
      oldProps.addPostProcess,
      newProps.addPostProcess,
      'addPostProcess',
      changedProps
    )
    checkMethodDiff(
      oldProps.setMaterialForRendering,
      newProps.setMaterialForRendering,
      'setMaterialForRendering',
      changedProps
    )
    checkMethodDiff(
      oldProps.setRenderingAutoClearDepthStencil,
      newProps.setRenderingAutoClearDepthStencil,
      'setRenderingAutoClearDepthStencil',
      changedProps
    )
    checkMethodDiff(
      oldProps.setRenderingOrder,
      newProps.setRenderingOrder,
      'setRenderingOrder',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RenderTargetTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'BabylonjsCoreTextureSize | { ratio: number; }',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreRenderTargetTextureOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRenderTargetTexture',
  }
}

export class FiberMirrorTexturePropsHandler implements PropsHandler<FiberMirrorTextureProps> {
  getPropertyUpdates(
    oldProps: FiberMirrorTextureProps,
    newProps: FiberMirrorTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.adaptiveBlurKernel,
      newProps.adaptiveBlurKernel,
      'adaptiveBlurKernel',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blurKernel, newProps.blurKernel, 'blurKernel', changedProps)
    checkPrimitiveDiff(oldProps.blurKernelX, newProps.blurKernelX, 'blurKernelX', changedProps)
    checkPrimitiveDiff(oldProps.blurKernelY, newProps.blurKernelY, 'blurKernelY', changedProps)
    checkPrimitiveDiff(oldProps.blurRatio, newProps.blurRatio, 'blurRatio', changedProps)
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMirrorTexture.mirrorPlane.
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMirrorTexturePropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MirrorTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'number | { width: number; height: number; } | { ratio: number; }',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'type',
        type: 'number',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'generateDepthBuffer',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberMirrorTexture',
  }
}

export class FiberMultiRenderTargetPropsHandler
  implements PropsHandler<FiberMultiRenderTargetProps>
{
  getPropertyUpdates(
    oldProps: FiberMultiRenderTargetProps,
    newProps: FiberMultiRenderTargetProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(oldProps.wrapU, newProps.wrapU, 'wrapU', changedProps)
    checkPrimitiveDiff(oldProps.wrapV, newProps.wrapV, 'wrapV', changedProps)
    checkMethodDiff(
      oldProps.setInternalTexture,
      newProps.setInternalTexture,
      'setInternalTexture',
      changedProps
    )
    checkMethodDiff(
      oldProps.setLayerAndFaceIndex,
      newProps.setLayerAndFaceIndex,
      'setLayerAndFaceIndex',
      changedProps
    )
    checkMethodDiff(
      oldProps.setLayerAndFaceIndices,
      newProps.setLayerAndFaceIndices,
      'setLayerAndFaceIndices',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A multi render target, like a render target provides the ability to render to a texture.
 * Unlike the render target, it can render to several draw buffers (render textures) in one draw.
 * This is specially interesting in deferred rendering or for any effects requiring more than
 * just one color from a single pass.
 *
 * This code has been generated
 */
export class FiberMultiRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMultiRenderTargetPropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MultiRenderTarget',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'any',
        optional: false,
      },
      {
        name: 'count',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreIMultiRenderTargetOptions',
        optional: true,
      },
      {
        name: 'textureNames',
        type: 'string[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberMultiRenderTarget',
  }
}

export class FiberPrePassRenderTargetPropsHandler
  implements PropsHandler<FiberPrePassRenderTargetProps>
{
  getPropertyUpdates(
    oldProps: FiberPrePassRenderTargetProps,
    newProps: FiberPrePassRenderTargetProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.enabled, newProps.enabled, 'enabled', changedProps)
    // type: 'BabylonjsCoreImageProcessingPostProcess' property (not coded) BabylonjsCorePrePassRenderTarget.imageProcessingPostProcess.
    // type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCorePrePassRenderTarget.renderTargetTexture.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A multi render target designed to render the prepass.
 * Prepass is a scene component used to render information in multiple textures
 * alongside with the scene materials rendering.
 * Note : This is an internal class, and you should NOT need to instanciate this.
 * Only the `PrePassRenderer` should instanciate this class.
 * It is more likely that you need a regular `MultiRenderTarget`
 *
 * This code has been generated
 */
export class FiberPrePassRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPrePassRenderTargetPropsHandler(),
      new FiberMultiRenderTargetPropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PrePassRenderTarget',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'renderTargetTexture',
        type: 'BabylonjsCoreRenderTargetTexture',
        optional: false,
      },
      {
        name: 'size',
        type: 'any',
        optional: false,
      },
      {
        name: 'count',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreIMultiRenderTargetOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberPrePassRenderTarget',
  }
}

export class FiberRefractionTexturePropsHandler
  implements PropsHandler<FiberRefractionTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberRefractionTextureProps,
    newProps: FiberRefractionTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.depth, newProps.depth, 'depth', changedProps)
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreRefractionTexture.refractionPlane.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 *
 * This code has been generated
 */
export class FiberRefractionTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRefractionTexturePropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RefractionTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'size',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRefractionTexture',
  }
}

export class FiberXRSpaceWarpRenderTargetPropsHandler
  implements PropsHandler<FiberXRSpaceWarpRenderTargetProps>
{
  getPropertyUpdates(
    oldProps: FiberXRSpaceWarpRenderTargetProps,
    newProps: FiberXRSpaceWarpRenderTargetProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Used for Space Warp render process
 *
 * This code has been generated
 */
export class FiberXRSpaceWarpRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberXRSpaceWarpRenderTargetPropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'XRSpaceWarpRenderTarget',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'motionVectorTexture',
        type: 'WebGLTexture',
        optional: false,
      },
      {
        name: 'depthStencilTexture',
        type: 'WebGLTexture',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'size',
        type: 'number | { width: number; height: number; } | { ratio: number; }',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberXRSpaceWarpRenderTarget',
  }
}

export class FiberMultiviewRenderTargetPropsHandler
  implements PropsHandler<FiberMultiviewRenderTargetProps>
{
  getPropertyUpdates(
    oldProps: FiberMultiviewRenderTargetProps,
    newProps: FiberMultiviewRenderTargetProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Renders to multiple views with a single draw call
 * Only for WebGL backends
 *
 * This code has been generated
 */
export class FiberMultiviewRenderTarget implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMultiviewRenderTargetPropsHandler(),
      new FiberRenderTargetTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MultiviewRenderTarget',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'size',
        type: 'number | { width: number; height: number; } | { ratio: number; }',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberMultiviewRenderTarget',
  }
}

export class FiberRawTexture2DArrayPropsHandler
  implements PropsHandler<FiberRawTexture2DArrayProps>
{
  getPropertyUpdates(
    oldProps: FiberRawTexture2DArrayProps,
    newProps: FiberRawTexture2DArrayProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to store 2D array textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture2DArray implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRawTexture2DArrayPropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RawTexture2DArray',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'data',
        type: 'ArrayBufferView',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: false,
      },
      {
        name: 'height',
        type: 'number',
        optional: false,
      },
      {
        name: 'depth',
        type: 'number',
        optional: false,
      },
      {
        name: 'format',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'creationFlags',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRawTexture2DArray',
  }
}

export class FiberDynamicTexturePropsHandler implements PropsHandler<FiberDynamicTextureProps> {
  getPropertyUpdates(
    oldProps: FiberDynamicTextureProps,
    newProps: FiberDynamicTextureProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * A class extending Texture allowing drawing on a texture
 *
 * This code has been generated
 */
export class FiberDynamicTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDynamicTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DynamicTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'any',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'format',
        type: 'number',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberDynamicTexture',
  }
}

export class FiberAdvancedDynamicTexturePropsHandler
  implements PropsHandler<FiberAdvancedDynamicTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberAdvancedDynamicTextureProps,
    newProps: FiberAdvancedDynamicTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.applyYInversionOnUpdate,
      newProps.applyYInversionOnUpdate,
      'applyYInversionOnUpdate',
      changedProps
    )
    checkPrimitiveDiff(oldProps.background, newProps.background, 'background', changedProps)
    checkPrimitiveDiff(
      oldProps.checkPointerEveryFrame,
      newProps.checkPointerEveryFrame,
      'checkPointerEveryFrame',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.clipboardData,
      newProps.clipboardData,
      'clipboardData',
      changedProps
    )
    // type: 'BabylonjsGuiIFocusableControl' property (not coded) BabylonjsGuiAdvancedDynamicTexture.focusedControl.
    checkPrimitiveDiff(oldProps.idealHeight, newProps.idealHeight, 'idealHeight', changedProps)
    checkPrimitiveDiff(oldProps.idealWidth, newProps.idealWidth, 'idealWidth', changedProps)
    checkPrimitiveDiff(oldProps.isForeground, newProps.isForeground, 'isForeground', changedProps)
    checkObservableDiff(
      oldProps.onBeginLayoutObservable,
      newProps.onBeginLayoutObservable,
      'onBeginLayoutObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeginRenderObservable,
      newProps.onBeginRenderObservable,
      'onBeginRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onClipboardObservable,
      newProps.onClipboardObservable,
      'onClipboardObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onControlPickedObservable,
      newProps.onControlPickedObservable,
      'onControlPickedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onEndLayoutObservable,
      newProps.onEndLayoutObservable,
      'onEndLayoutObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onEndRenderObservable,
      newProps.onEndRenderObservable,
      'onEndRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onGuiReadyObservable,
      newProps.onGuiReadyObservable,
      'onGuiReadyObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.parseContent, newProps.parseContent, 'parseContent', changedProps)
    checkPrimitiveDiff(oldProps.premulAlpha, newProps.premulAlpha, 'premulAlpha', changedProps)
    checkPrimitiveDiff(
      oldProps.renderAtIdealSize,
      newProps.renderAtIdealSize,
      'renderAtIdealSize',
      changedProps
    )
    checkPrimitiveDiff(oldProps.renderScale, newProps.renderScale, 'renderScale', changedProps)
    checkPrimitiveDiff(
      oldProps.skipBlockEvents,
      newProps.skipBlockEvents,
      'skipBlockEvents',
      changedProps
    )
    checkPrimitiveDiff(oldProps.snippetId, newProps.snippetId, 'snippetId', changedProps)
    checkPrimitiveDiff(
      oldProps.useInvalidateRectOptimization,
      newProps.useInvalidateRectOptimization,
      'useInvalidateRectOptimization',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSmallestIdeal,
      newProps.useSmallestIdeal,
      'useSmallestIdeal',
      changedProps
    )
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export class FiberAdvancedDynamicTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAdvancedDynamicTexturePropsHandler(),
      new FiberDynamicTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AdvancedDynamicTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: true,
      },
      {
        name: 'height',
        type: 'number',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI2DControl: true,
    isTexture: true,
    className: 'FiberAdvancedDynamicTexture',
  }
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
 *
 * This code has been generated
 */
export class FiberADTForMesh implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
  private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAdvancedDynamicTexturePropsHandler(),
      new FiberDynamicTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'advancedDynamicTexture',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateForMesh',
    parameters: [
      {
        name: 'mesh',
        type: 'BabylonjsCoreAbstractMesh',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: true,
      },
      {
        name: 'height',
        type: 'number',
        optional: true,
      },
      {
        name: 'supportPointerMove',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'onlyAlphaTesting',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'materialSetupCallback',
        type: '(mesh: BabylonjsCoreAbstractMesh, uniqueId: string, texture: BabylonjsGuiAdvancedDynamicTexture, onlyAlphaTesting: boolean) => void',
        optional: true,
      },
      {
        name: 'sampling',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    isGUI2DControl: true,
    className: 'FiberADTForMesh',
  }
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh) BUT do not create a new material for the mesh. You will be responsible for connecting the texture
 *
 * This code has been generated
 */
export class FiberADTForMeshTexture implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
  private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAdvancedDynamicTexturePropsHandler(),
      new FiberDynamicTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'advancedDynamicTexture',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateForMeshTexture',
    parameters: [
      {
        name: 'mesh',
        type: 'BabylonjsCoreAbstractMesh',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: true,
      },
      {
        name: 'height',
        type: 'number',
        optional: true,
      },
      {
        name: 'supportPointerMove',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'sampling',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    isGUI2DControl: true,
    className: 'FiberADTForMeshTexture',
  }
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
  private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAdvancedDynamicTexturePropsHandler(),
      new FiberDynamicTexturePropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'FactoryMethod',
    libraryLocation: 'advancedDynamicTexture',
    namespace: '@babylonjs/core',
    factoryMethod: 'CreateFullscreenUI',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'foreground',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'sampling',
        type: 'number',
        optional: true,
      },
      {
        name: 'adaptiveScaling',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    isGUI2DControl: true,
    className: 'FiberADTFullscreenUI',
  }
}

export class FiberRawTexture3DPropsHandler implements PropsHandler<FiberRawTexture3DProps> {
  getPropertyUpdates(
    oldProps: FiberRawTexture3DProps,
    newProps: FiberRawTexture3DProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.format, newProps.format, 'format', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to store 3D textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture3D implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRawTexture3DPropsHandler(),
      new FiberTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RawTexture3D',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'data',
        type: 'ArrayBufferView',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: false,
      },
      {
        name: 'height',
        type: 'number',
        optional: false,
      },
      {
        name: 'depth',
        type: 'number',
        optional: false,
      },
      {
        name: 'format',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'generateMipMaps',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'invertY',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'creationFlags',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberRawTexture3D',
  }
}

export class FiberColorGradingTexturePropsHandler
  implements PropsHandler<FiberColorGradingTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberColorGradingTextureProps,
    newProps: FiberColorGradingTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberColorGradingTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ColorGradingTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'url',
        type: 'string',
        optional: false,
      },
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: false,
      },
      {
        name: 'onLoad',
        type: '() => void',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberColorGradingTexture',
  }
}

export class FiberEquiRectangularCubeTexturePropsHandler
  implements PropsHandler<FiberEquiRectangularCubeTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberEquiRectangularCubeTextureProps,
    newProps: FiberEquiRectangularCubeTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 *
 * This code has been generated
 */
export class FiberEquiRectangularCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberEquiRectangularCubeTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'EquiRectangularCubeTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'url',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'size',
        type: 'number',
        optional: false,
      },
      {
        name: 'noMipmap',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'gammaSpace',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'onLoad',
        type: '() => void',
        optional: true,
      },
      {
        name: 'onError',
        type: '(message?: string, exception?: any) => void',
        optional: true,
      },
      {
        name: 'supersample',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberEquiRectangularCubeTexture',
  }
}

export class FiberHDRCubeTexturePropsHandler implements PropsHandler<FiberHDRCubeTextureProps> {
  getPropertyUpdates(
    oldProps: FiberHDRCubeTextureProps,
    newProps: FiberHDRCubeTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(
      oldProps.boundingBoxPosition,
      newProps.boundingBoxPosition,
      'boundingBoxPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-x'],
      newProps['boundingBoxPosition-x'],
      'boundingBoxPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-y'],
      newProps['boundingBoxPosition-y'],
      'boundingBoxPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['boundingBoxPosition-z'],
      newProps['boundingBoxPosition-z'],
      'boundingBoxPosition.z',
      changedProps
    )
    checkVector3Diff(
      oldProps.boundingBoxSize,
      newProps.boundingBoxSize,
      'boundingBoxSize',
      true,
      changedProps
    )
    checkPrimitiveDiff(oldProps.isBlocking, newProps.isBlocking, 'isBlocking', changedProps)
    checkObservableDiff(
      oldProps.onLoadObservable,
      newProps.onLoadObservable,
      'onLoadObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.rotationY, newProps.rotationY, 'rotationY', changedProps)
    checkPrimitiveDiff(oldProps.url, newProps.url, 'url', changedProps)
    checkMethodDiff(
      oldProps.setReflectionTextureMatrix,
      newProps.setReflectionTextureMatrix,
      'setReflectionTextureMatrix',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a texture coming from an HDR input.
 *
 * The only supported format is currently panorama picture stored in RGBE format.
 * Example of such files can be found on Poly Haven: https://polyhaven.com/hdris
 *
 * This code has been generated
 */
export class FiberHDRCubeTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHDRCubeTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HDRCubeTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'url',
        type: 'string',
        optional: false,
      },
      {
        name: 'sceneOrEngine',
        type: 'BabylonjsCoreScene | BabylonjsCoreAbstractEngine',
        optional: false,
      },
      {
        name: 'size',
        type: 'number',
        optional: false,
      },
      {
        name: 'noMipmap',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'generateHarmonics',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'gammaSpace',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'prefilterOnLoad',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'onLoad',
        type: '() => void',
        optional: true,
      },
      {
        name: 'onError',
        type: '(message?: string, exception?: any) => void',
        optional: true,
      },
      {
        name: 'supersample',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberHDRCubeTexture',
  }
}

export class FiberHtmlElementTexturePropsHandler
  implements PropsHandler<FiberHtmlElementTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberHtmlElementTextureProps,
    newProps: FiberHtmlElementTextureProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'HTMLVideoElement | HTMLCanvasElement' property (not coded) BabylonjsCoreHtmlElementTexture.element.
    checkObservableDiff(
      oldProps.onLoadObservable,
      newProps.onLoadObservable,
      'onLoadObservable',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
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
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHtmlElementTexturePropsHandler(),
      new FiberBaseTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HtmlElementTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'element',
        type: 'HTMLVideoElement | HTMLCanvasElement',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreIHtmlElementTextureOptions',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberHtmlElementTexture',
  }
}

export class FiberThinRenderTargetTexturePropsHandler
  implements PropsHandler<FiberThinRenderTargetTextureProps>
{
  getPropertyUpdates(
    oldProps: FiberThinRenderTargetTextureProps,
    newProps: FiberThinRenderTargetTextureProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * This is a tiny helper class to wrap a RenderTargetWrapper in a texture
 * usable as the input of an effect.
 *
 * This code has been generated
 */
export class FiberThinRenderTargetTexture implements HasPropsHandlers<FiberThinTextureProps> {
  private propsHandlers: PropsHandler<FiberThinTextureProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberThinRenderTargetTexturePropsHandler(),
      new FiberThinTexturePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberThinTextureProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberThinTextureProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ThinRenderTargetTexture',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'engine',
        type: 'BabylonjsCoreThinEngine',
        optional: false,
      },
      {
        name: 'size',
        type: 'BabylonjsCoreTextureSize',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreRenderTargetCreationOptions',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isTexture: true,
    className: 'FiberThinRenderTargetTexture',
  }
}

export class FiberPostProcessRenderPipelinePropsHandler
  implements PropsHandler<FiberPostProcessRenderPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberPostProcessRenderPipelineProps,
    newProps: FiberPostProcessRenderPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCorePostProcessRenderPipeline.inspectableCustomProperties.
    checkMethodDiff(oldProps.addEffect, newProps.addEffect, 'addEffect', changedProps)
    checkMethodDiff(
      oldProps.setPrePassRenderer,
      newProps.setPrePassRenderer,
      'setPrePassRenderer',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * PostProcessRenderPipeline
 *
 * This code has been generated
 */
export class FiberPostProcessRenderPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [new FiberPostProcessRenderPipelinePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PostProcessRenderPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: '_engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: false,
      },
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPostProcessRenderPipeline',
  }
}

export class FiberDefaultRenderingPipelinePropsHandler
  implements PropsHandler<FiberDefaultRenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberDefaultRenderingPipelineProps,
    newProps: FiberDefaultRenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreDefaultRenderingPipeline.animations.
    checkPrimitiveDiff(
      oldProps.automaticBuild,
      newProps.automaticBuild,
      'automaticBuild',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreDefaultRenderingPipeline.bloom.
    checkPrimitiveDiff(oldProps.bloomEnabled, newProps.bloomEnabled, 'bloomEnabled', changedProps)
    checkPrimitiveDiff(oldProps.bloomKernel, newProps.bloomKernel, 'bloomKernel', changedProps)
    checkPrimitiveDiff(oldProps.bloomScale, newProps.bloomScale, 'bloomScale', changedProps)
    checkPrimitiveDiff(
      oldProps.bloomThreshold,
      newProps.bloomThreshold,
      'bloomThreshold',
      changedProps
    )
    checkPrimitiveDiff(oldProps.bloomWeight, newProps.bloomWeight, 'bloomWeight', changedProps)
    // type: 'BabylonjsCoreChromaticAberrationPostProcess' property (not coded) BabylonjsCoreDefaultRenderingPipeline.chromaticAberration.
    checkPrimitiveDiff(
      oldProps.chromaticAberrationEnabled,
      newProps.chromaticAberrationEnabled,
      'chromaticAberrationEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreDepthOfFieldEffect' property (not coded) BabylonjsCoreDefaultRenderingPipeline.depthOfField.
    checkPrimitiveDiff(
      oldProps.depthOfFieldBlurLevel,
      newProps.depthOfFieldBlurLevel,
      'depthOfFieldBlurLevel',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.depthOfFieldEnabled,
      newProps.depthOfFieldEnabled,
      'depthOfFieldEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreFxaaPostProcess' property (not coded) BabylonjsCoreDefaultRenderingPipeline.fxaa.
    checkPrimitiveDiff(oldProps.fxaaEnabled, newProps.fxaaEnabled, 'fxaaEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.glowLayerEnabled,
      newProps.glowLayerEnabled,
      'glowLayerEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreGrainPostProcess' property (not coded) BabylonjsCoreDefaultRenderingPipeline.grain.
    checkPrimitiveDiff(oldProps.grainEnabled, newProps.grainEnabled, 'grainEnabled', changedProps)
    // type: 'BabylonjsCoreImageProcessingPostProcess' property (not coded) BabylonjsCoreDefaultRenderingPipeline.imageProcessing.
    checkPrimitiveDiff(
      oldProps.imageProcessingEnabled,
      newProps.imageProcessingEnabled,
      'imageProcessingEnabled',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBuildObservable,
      newProps.onBuildObservable,
      'onBuildObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    // type: 'BabylonjsCoreSharpenPostProcess' property (not coded) BabylonjsCoreDefaultRenderingPipeline.sharpen.
    checkPrimitiveDiff(
      oldProps.sharpenEnabled,
      newProps.sharpenEnabled,
      'sharpenEnabled',
      changedProps
    )
    checkMethodDiff(oldProps.addCamera, newProps.addCamera, 'addCamera', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The default rendering pipeline can be added to a scene to apply common post processing effects such as anti-aliasing or depth of field.
 * See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/defaultRenderingPipeline
 *
 * This code has been generated
 */
export class FiberDefaultRenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDefaultRenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DefaultRenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: true,
      },
      {
        name: 'hdr',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
      {
        name: 'automaticBuild',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberDefaultRenderingPipeline',
  }
}

export class FiberLensRenderingPipelinePropsHandler
  implements PropsHandler<FiberLensRenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberLensRenderingPipelineProps,
    newProps: FiberLensRenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.blurNoise, newProps.blurNoise, 'blurNoise', changedProps)
    checkPrimitiveDiff(
      oldProps.chromaticAberration,
      newProps.chromaticAberration,
      'chromaticAberration',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.darkenOutOfFocus,
      newProps.darkenOutOfFocus,
      'darkenOutOfFocus',
      changedProps
    )
    checkPrimitiveDiff(oldProps.dofAperture, newProps.dofAperture, 'dofAperture', changedProps)
    checkPrimitiveDiff(
      oldProps.dofDistortion,
      newProps.dofDistortion,
      'dofDistortion',
      changedProps
    )
    checkPrimitiveDiff(oldProps.edgeBlur, newProps.edgeBlur, 'edgeBlur', changedProps)
    checkPrimitiveDiff(
      oldProps.edgeDistortion,
      newProps.edgeDistortion,
      'edgeDistortion',
      changedProps
    )
    checkPrimitiveDiff(oldProps.grainAmount, newProps.grainAmount, 'grainAmount', changedProps)
    checkPrimitiveDiff(
      oldProps.HighlightsEnhancingEffect,
      newProps.HighlightsEnhancingEffect,
      'HighlightsEnhancingEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightsGain,
      newProps.highlightsGain,
      'highlightsGain',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.highlightsThreshold,
      newProps.highlightsThreshold,
      'highlightsThreshold',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.LensChromaticAberrationEffect,
      newProps.LensChromaticAberrationEffect,
      'LensChromaticAberrationEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.LensDepthOfFieldEffect,
      newProps.LensDepthOfFieldEffect,
      'LensDepthOfFieldEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pentagonBokeh,
      newProps.pentagonBokeh,
      'pentagonBokeh',
      changedProps
    )
    checkMethodDiff(oldProps.setAperture, newProps.setAperture, 'setAperture', changedProps)
    checkMethodDiff(
      oldProps.setChromaticAberration,
      newProps.setChromaticAberration,
      'setChromaticAberration',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDarkenOutOfFocus,
      newProps.setDarkenOutOfFocus,
      'setDarkenOutOfFocus',
      changedProps
    )
    checkMethodDiff(oldProps.setEdgeBlur, newProps.setEdgeBlur, 'setEdgeBlur', changedProps)
    checkMethodDiff(
      oldProps.setEdgeDistortion,
      newProps.setEdgeDistortion,
      'setEdgeDistortion',
      changedProps
    )
    checkMethodDiff(
      oldProps.setFocusDistance,
      newProps.setFocusDistance,
      'setFocusDistance',
      changedProps
    )
    checkMethodDiff(
      oldProps.setGrainAmount,
      newProps.setGrainAmount,
      'setGrainAmount',
      changedProps
    )
    checkMethodDiff(
      oldProps.setHighlightsGain,
      newProps.setHighlightsGain,
      'setHighlightsGain',
      changedProps
    )
    checkMethodDiff(
      oldProps.setHighlightsThreshold,
      newProps.setHighlightsThreshold,
      'setHighlightsThreshold',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * BABYLON.JS Chromatic Aberration GLSL Shader
 * Author: Olivier Guyot
 * Separates very slightly R, G and B colors on the edges of the screen
 * Inspired by Francois Tarlier & Martins Upitis
 *
 * This code has been generated
 */
export class FiberLensRenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberLensRenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'LensRenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'parameters',
        type: 'any',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'ratio',
        type: 'number',
        optional: true,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberLensRenderingPipeline',
  }
}

export class FiberSSAO2RenderingPipelinePropsHandler
  implements PropsHandler<FiberSSAO2RenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberSSAO2RenderingPipelineProps,
    newProps: FiberSSAO2RenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.base, newProps.base, 'base', changedProps)
    checkPrimitiveDiff(
      oldProps.bilateralSamples,
      newProps.bilateralSamples,
      'bilateralSamples',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.bilateralSoften,
      newProps.bilateralSoften,
      'bilateralSoften',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.bilateralTolerance,
      newProps.bilateralTolerance,
      'bilateralTolerance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.bypassBlur, newProps.bypassBlur, 'bypassBlur', changedProps)
    checkPrimitiveDiff(oldProps.epsilon, newProps.epsilon, 'epsilon', changedProps)
    checkPrimitiveDiff(
      oldProps.expensiveBlur,
      newProps.expensiveBlur,
      'expensiveBlur',
      changedProps
    )
    checkPrimitiveDiff(oldProps.maxZ, newProps.maxZ, 'maxZ', changedProps)
    checkPrimitiveDiff(oldProps.minZAspect, newProps.minZAspect, 'minZAspect', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(
      oldProps.SSAOBlurHRenderEffect,
      newProps.SSAOBlurHRenderEffect,
      'SSAOBlurHRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOBlurVRenderEffect,
      newProps.SSAOBlurVRenderEffect,
      'SSAOBlurVRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOCombineRenderEffect,
      newProps.SSAOCombineRenderEffect,
      'SSAOCombineRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOOriginalSceneColorEffect,
      newProps.SSAOOriginalSceneColorEffect,
      'SSAOOriginalSceneColorEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAORenderEffect,
      newProps.SSAORenderEffect,
      'SSAORenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.textureSamples,
      newProps.textureSamples,
      'textureSamples',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.totalStrength,
      newProps.totalStrength,
      'totalStrength',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Render pipeline to produce ssao effect
 *
 * This code has been generated
 */
export class FiberSSAO2RenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSSAO2RenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SSAO2RenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'ratio',
        type: 'any',
        optional: false,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
      {
        name: 'forceGeometryBuffer',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSSAO2RenderingPipeline',
  }
}

export class FiberSSAORenderingPipelinePropsHandler
  implements PropsHandler<FiberSSAORenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberSSAORenderingPipelineProps,
    newProps: FiberSSAORenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.area, newProps.area, 'area', changedProps)
    checkPrimitiveDiff(oldProps.base, newProps.base, 'base', changedProps)
    checkPrimitiveDiff(oldProps.fallOff, newProps.fallOff, 'fallOff', changedProps)
    checkPrimitiveDiff(oldProps.radius, newProps.radius, 'radius', changedProps)
    checkPrimitiveDiff(
      oldProps.SSAOBlurHRenderEffect,
      newProps.SSAOBlurHRenderEffect,
      'SSAOBlurHRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOBlurVRenderEffect,
      newProps.SSAOBlurVRenderEffect,
      'SSAOBlurVRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOCombineRenderEffect,
      newProps.SSAOCombineRenderEffect,
      'SSAOCombineRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAOOriginalSceneColorEffect,
      newProps.SSAOOriginalSceneColorEffect,
      'SSAOOriginalSceneColorEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSAORenderEffect,
      newProps.SSAORenderEffect,
      'SSAORenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.totalStrength,
      newProps.totalStrength,
      'totalStrength',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Render pipeline to produce ssao effect
 *
 * This code has been generated
 */
export class FiberSSAORenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSSAORenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SSAORenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'ratio',
        type: 'any',
        optional: false,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSSAORenderingPipeline',
  }
}

export class FiberStandardRenderingPipelinePropsHandler
  implements PropsHandler<FiberStandardRenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberStandardRenderingPipelineProps,
    newProps: FiberStandardRenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreStandardRenderingPipeline.animations.
    checkPrimitiveDiff(oldProps.BloomEnabled, newProps.BloomEnabled, 'BloomEnabled', changedProps)
    // type: 'BabylonjsCorePostProcess[]' property (not coded) BabylonjsCoreStandardRenderingPipeline.blurHPostProcesses.
    // type: 'BabylonjsCorePostProcess[]' property (not coded) BabylonjsCoreStandardRenderingPipeline.blurVPostProcesses.
    checkPrimitiveDiff(oldProps.blurWidth, newProps.blurWidth, 'blurWidth', changedProps)
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.brightPassPostProcess.
    checkPrimitiveDiff(
      oldProps.brightThreshold,
      newProps.brightThreshold,
      'brightThreshold',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.depthOfFieldBlurWidth,
      newProps.depthOfFieldBlurWidth,
      'depthOfFieldBlurWidth',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.depthOfFieldDistance,
      newProps.depthOfFieldDistance,
      'depthOfFieldDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.DepthOfFieldEnabled,
      newProps.DepthOfFieldEnabled,
      'DepthOfFieldEnabled',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.depthOfFieldPostProcess.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.downSampleX4PostProcess.
    checkPrimitiveDiff(oldProps.exposure, newProps.exposure, 'exposure', changedProps)
    checkPrimitiveDiff(oldProps.fxaaEnabled, newProps.fxaaEnabled, 'fxaaEnabled', changedProps)
    // type: 'BabylonjsCoreFxaaPostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.fxaaPostProcess.
    checkPrimitiveDiff(
      oldProps.hdrAutoExposure,
      newProps.hdrAutoExposure,
      'hdrAutoExposure',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.hdrDecreaseRate,
      newProps.hdrDecreaseRate,
      'hdrDecreaseRate',
      changedProps
    )
    checkPrimitiveDiff(oldProps.HDREnabled, newProps.HDREnabled, 'HDREnabled', changedProps)
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.hdrFinalPostProcess.
    checkPrimitiveDiff(
      oldProps.hdrIncreaseRate,
      newProps.hdrIncreaseRate,
      'hdrIncreaseRate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.hdrMinimumLuminance,
      newProps.hdrMinimumLuminance,
      'hdrMinimumLuminance',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.hdrPostProcess.
    checkPrimitiveDiff(
      oldProps.horizontalBlur,
      newProps.horizontalBlur,
      'horizontalBlur',
      changedProps
    )
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensColorTexture.
    checkPrimitiveDiff(
      oldProps.lensFlareBlurWidth,
      newProps.lensFlareBlurWidth,
      'lensFlareBlurWidth',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensFlareComposePostProcess.
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensFlareDirtTexture.
    checkPrimitiveDiff(
      oldProps.lensFlareDistortionStrength,
      newProps.lensFlareDistortionStrength,
      'lensFlareDistortionStrength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.LensFlareEnabled,
      newProps.LensFlareEnabled,
      'LensFlareEnabled',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensFlareFinalPostProcess.
    checkPrimitiveDiff(
      oldProps.lensFlareGhostDispersal,
      newProps.lensFlareGhostDispersal,
      'lensFlareGhostDispersal',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lensFlareHaloWidth,
      newProps.lensFlareHaloWidth,
      'lensFlareHaloWidth',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensFlarePostProcess.
    checkPrimitiveDiff(
      oldProps.lensFlareStrength,
      newProps.lensFlareStrength,
      'lensFlareStrength',
      changedProps
    )
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensStarTexture.
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreStandardRenderingPipeline.lensTexture.
    // type: 'BabylonjsCorePostProcess[]' property (not coded) BabylonjsCoreStandardRenderingPipeline.luminanceDownSamplePostProcesses.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.luminancePostProcess.
    checkPrimitiveDiff(
      oldProps.MotionBlurEnabled,
      newProps.MotionBlurEnabled,
      'MotionBlurEnabled',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.motionBlurPostProcess.
    checkPrimitiveDiff(
      oldProps.motionBlurSamples,
      newProps.motionBlurSamples,
      'motionBlurSamples',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.motionStrength,
      newProps.motionStrength,
      'motionStrength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.objectBasedMotionBlur,
      newProps.objectBasedMotionBlur,
      'objectBasedMotionBlur',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.originalPostProcess.
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    // type: 'BabylonjsCoreScreenSpaceReflectionPostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.screenSpaceReflectionPostProcess.
    checkPrimitiveDiff(
      oldProps.screenSpaceReflectionsEnabled,
      newProps.screenSpaceReflectionsEnabled,
      'screenSpaceReflectionsEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreDirectionalLight | BabylonjsCoreSpotLight' property (not coded) BabylonjsCoreStandardRenderingPipeline.sourceLight.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.textureAdderFinalPostProcess.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.textureAdderPostProcess.
    checkPrimitiveDiff(oldProps.VLSEnabled, newProps.VLSEnabled, 'VLSEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.volumetricLightBlurScale,
      newProps.volumetricLightBlurScale,
      'volumetricLightBlurScale',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.volumetricLightCoefficient,
      newProps.volumetricLightCoefficient,
      'volumetricLightCoefficient',
      changedProps
    )
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.volumetricLightFinalPostProcess.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.volumetricLightMergePostProces.
    // type: 'BabylonjsCorePostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.volumetricLightPostProcess.
    checkPrimitiveDiff(
      oldProps.volumetricLightPower,
      newProps.volumetricLightPower,
      'volumetricLightPower',
      changedProps
    )
    // type: 'BabylonjsCoreBlurPostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.volumetricLightSmoothXPostProcess.
    // type: 'BabylonjsCoreBlurPostProcess' property (not coded) BabylonjsCoreStandardRenderingPipeline.volumetricLightSmoothYPostProcess.
    checkPrimitiveDiff(
      oldProps.volumetricLightStepsCount,
      newProps.volumetricLightStepsCount,
      'volumetricLightStepsCount',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Standard rendering pipeline
 * Default pipeline should be used going forward but the standard pipeline will be kept for backwards compatibility.
 *
 * This code has been generated
 */
export class FiberStandardRenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStandardRenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StandardRenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'ratio',
        type: 'number',
        optional: false,
      },
      {
        name: 'originalPostProcess',
        type: 'BabylonjsCorePostProcess',
        optional: true,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberStandardRenderingPipeline',
  }
}

export class FiberSSRRenderingPipelinePropsHandler
  implements PropsHandler<FiberSSRRenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberSSRRenderingPipelineProps,
    newProps: FiberSSRRenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.attenuateBackfaceReflection,
      newProps.attenuateBackfaceReflection,
      'attenuateBackfaceReflection',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.attenuateFacingCamera,
      newProps.attenuateFacingCamera,
      'attenuateFacingCamera',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.attenuateIntersectionDistance,
      newProps.attenuateIntersectionDistance,
      'attenuateIntersectionDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.attenuateIntersectionIterations,
      newProps.attenuateIntersectionIterations,
      'attenuateIntersectionIterations',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.attenuateScreenBorders,
      newProps.attenuateScreenBorders,
      'attenuateScreenBorders',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.backfaceDepthTextureDownsample,
      newProps.backfaceDepthTextureDownsample,
      'backfaceDepthTextureDownsample',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.backfaceForceDepthWriteTransparentMeshes,
      newProps.backfaceForceDepthWriteTransparentMeshes,
      'backfaceForceDepthWriteTransparentMeshes',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blurDispersionStrength,
      newProps.blurDispersionStrength,
      'blurDispersionStrength',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blurDownsample,
      newProps.blurDownsample,
      'blurDownsample',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.clipToFrustum,
      newProps.clipToFrustum,
      'clipToFrustum',
      changedProps
    )
    checkPrimitiveDiff(oldProps.debug, newProps.debug, 'debug', changedProps)
    checkPrimitiveDiff(
      oldProps.enableAutomaticThicknessComputation,
      newProps.enableAutomaticThicknessComputation,
      'enableAutomaticThicknessComputation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableSmoothReflections,
      newProps.enableSmoothReflections,
      'enableSmoothReflections',
      changedProps
    )
    // type: 'BabylonjsCoreCubeTexture' property (not coded) BabylonjsCoreSSRRenderingPipeline.environmentTexture.
    checkPrimitiveDiff(
      oldProps.environmentTextureIsProbe,
      newProps.environmentTextureIsProbe,
      'environmentTextureIsProbe',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.generateOutputInGammaSpace,
      newProps.generateOutputInGammaSpace,
      'generateOutputInGammaSpace',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.inputTextureColorIsInGammaSpace,
      newProps.inputTextureColorIsInGammaSpace,
      'inputTextureColorIsInGammaSpace',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(oldProps.maxDistance, newProps.maxDistance, 'maxDistance', changedProps)
    checkPrimitiveDiff(oldProps.maxSteps, newProps.maxSteps, 'maxSteps', changedProps)
    checkPrimitiveDiff(
      oldProps.reflectionSpecularFalloffExponent,
      newProps.reflectionSpecularFalloffExponent,
      'reflectionSpecularFalloffExponent',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectivityThreshold,
      newProps.reflectivityThreshold,
      'reflectivityThreshold',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.roughnessFactor,
      newProps.roughnessFactor,
      'roughnessFactor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(
      oldProps.selfCollisionNumSkip,
      newProps.selfCollisionNumSkip,
      'selfCollisionNumSkip',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSRBlurRenderEffect,
      newProps.SSRBlurRenderEffect,
      'SSRBlurRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSRCombineRenderEffect,
      newProps.SSRCombineRenderEffect,
      'SSRCombineRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ssrDownsample,
      newProps.ssrDownsample,
      'ssrDownsample',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.SSRRenderEffect,
      newProps.SSRRenderEffect,
      'SSRRenderEffect',
      changedProps
    )
    checkPrimitiveDiff(oldProps.step, newProps.step, 'step', changedProps)
    checkPrimitiveDiff(oldProps.strength, newProps.strength, 'strength', changedProps)
    checkPrimitiveDiff(oldProps.thickness, newProps.thickness, 'thickness', changedProps)
    checkPrimitiveDiff(oldProps.useFresnel, newProps.useFresnel, 'useFresnel', changedProps)
    checkMethodDiff(oldProps.addCamera, newProps.addCamera, 'addCamera', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Render pipeline to produce Screen Space Reflections (SSR) effect
 *
 * References:
 *   Screen Space Ray Tracing:
 *     - http://casual-effects.blogspot.com/2014/08/screen-space-ray-tracing.html
 *     - https://sourceforge.net/p/g3d/code/HEAD/tree/G3D10/data-files/shader/screenSpaceRayTrace.glsl
 *     - https://github.com/kode80/kode80SSR
 *   SSR:
 *     - general tips: https://sakibsaikia.github.io/graphics/2016/12/26/Screen-Space-Reflection-in-Killing-Floor-2.html
 *     - computation of blur radius from roughness and distance: https://github.com/godotengine/godot/blob/master/servers/rendering/renderer_rd/shaders/effects/screen_space_reflection.glsl
 *     - blur and usage of back depth buffer: https://github.com/kode80/kode80SSR
 *
 * This code has been generated
 */
export class FiberSSRRenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSSRRenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SSRRenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
      {
        name: 'forceGeometryBuffer',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSSRRenderingPipeline',
  }
}

export class FiberTAARenderingPipelinePropsHandler
  implements PropsHandler<FiberTAARenderingPipelineProps>
{
  getPropertyUpdates(
    oldProps: FiberTAARenderingPipelineProps,
    newProps: FiberTAARenderingPipelineProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.disableOnCameraMove,
      newProps.disableOnCameraMove,
      'disableOnCameraMove',
      changedProps
    )
    checkPrimitiveDiff(oldProps.factor, newProps.factor, 'factor', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(oldProps.msaaSamples, newProps.msaaSamples, 'msaaSamples', changedProps)
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(
      oldProps.TAAPassEffect,
      newProps.TAAPassEffect,
      'TAAPassEffect',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.TAARenderEffect,
      newProps.TAARenderEffect,
      'TAARenderEffect',
      changedProps
    )
    checkMethodDiff(oldProps.addCamera, newProps.addCamera, 'addCamera', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Simple implementation of Temporal Anti-Aliasing (TAA).
 * This can be used to improve image quality for still pictures (screenshots for e.g.).
 *
 * This code has been generated
 */
export class FiberTAARenderingPipeline
  implements HasPropsHandlers<FiberPostProcessRenderPipelineProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessRenderPipelineProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTAARenderingPipelinePropsHandler(),
      new FiberPostProcessRenderPipelinePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessRenderPipelineProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessRenderPipelineProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TAARenderingPipeline',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'cameras',
        type: 'BabylonjsCoreCamera[]',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberTAARenderingPipeline',
  }
}

export class FiberPostProcessPropsHandler implements PropsHandler<FiberPostProcessProps> {
  getPropertyUpdates(
    oldProps: FiberPostProcessProps,
    newProps: FiberPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.adaptScaleToCurrentViewport,
      newProps.adaptScaleToCurrentViewport,
      'adaptScaleToCurrentViewport',
      changedProps
    )
    checkColor4Diff(
      oldProps.alphaConstants,
      newProps.alphaConstants,
      'alphaConstants',
      changedProps
    )
    checkPrimitiveDiff(oldProps.alphaMode, newProps.alphaMode, 'alphaMode', changedProps)
    checkPrimitiveDiff(
      oldProps.alwaysForcePOT,
      newProps.alwaysForcePOT,
      'alwaysForcePOT',
      changedProps
    )
    // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCorePostProcess.animations.
    checkPrimitiveDiff(oldProps.autoClear, newProps.autoClear, 'autoClear', changedProps)
    checkColor4Diff(oldProps.clearColor, newProps.clearColor, 'clearColor', changedProps)
    checkPrimitiveDiff(
      oldProps.enablePixelPerfectMode,
      newProps.enablePixelPerfectMode,
      'enablePixelPerfectMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.externalTextureSamplerBinding,
      newProps.externalTextureSamplerBinding,
      'externalTextureSamplerBinding',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceAutoClearInAlphaMode,
      newProps.forceAutoClearInAlphaMode,
      'forceAutoClearInAlphaMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceFullscreenViewport,
      newProps.forceFullscreenViewport,
      'forceFullscreenViewport',
      changedProps
    )
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    // type: 'BabylonjsCoreRenderTargetWrapper' property (not coded) BabylonjsCorePostProcess.inputTexture.
    // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCorePostProcess.inspectableCustomProperties.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    // type: 'BabylonjsCoreNodeMaterial' property (not coded) BabylonjsCorePostProcess.nodeMaterialSource.
    checkLambdaDiff(oldProps.onActivate, newProps.onActivate, 'onActivate', changedProps)
    checkObservableDiff(
      oldProps.onActivateObservable,
      newProps.onActivateObservable,
      'onActivateObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onAfterRender, newProps.onAfterRender, 'onAfterRender', changedProps)
    checkObservableDiff(
      oldProps.onAfterRenderObservable,
      newProps.onAfterRenderObservable,
      'onAfterRenderObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onApply, newProps.onApply, 'onApply', changedProps)
    checkObservableDiff(
      oldProps.onApplyObservable,
      newProps.onApplyObservable,
      'onApplyObservable',
      changedProps
    )
    checkLambdaDiff(
      oldProps.onBeforeRender,
      newProps.onBeforeRender,
      'onBeforeRender',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderObservable,
      newProps.onBeforeRenderObservable,
      'onBeforeRenderObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onSizeChanged, newProps.onSizeChanged, 'onSizeChanged', changedProps)
    checkObservableDiff(
      oldProps.onSizeChangedObservable,
      newProps.onSizeChangedObservable,
      'onSizeChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderTargetSamplingMode,
      newProps.renderTargetSamplingMode,
      'renderTargetSamplingMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.samples, newProps.samples, 'samples', changedProps)
    checkPrimitiveDiff(oldProps.scaleMode, newProps.scaleMode, 'scaleMode', changedProps)
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    checkMethodDiff(
      oldProps.setPrePassRenderer,
      newProps.setPrePassRenderer,
      'setPrePassRenderer',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * PostProcess can be used to apply a shader to a texture after it has been rendered
 * See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses
 *
 * This code has been generated
 */
export class FiberPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [new FiberPostProcessPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'fragmentUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'BabylonjsCorePostProcessOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPostProcess',
  }
}

export class FiberImageProcessingPostProcessPropsHandler
  implements PropsHandler<FiberImageProcessingPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberImageProcessingPostProcessProps,
    newProps: FiberImageProcessingPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreImageProcessingPostProcess.colorCurves.
    checkPrimitiveDiff(
      oldProps.colorCurvesEnabled,
      newProps.colorCurvesEnabled,
      'colorCurvesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.colorGradingEnabled,
      newProps.colorGradingEnabled,
      'colorGradingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.colorGradingTexture,
      newProps.colorGradingTexture,
      'colorGradingTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.contrast, newProps.contrast, 'contrast', changedProps)
    checkPrimitiveDiff(
      oldProps.ditheringEnabled,
      newProps.ditheringEnabled,
      'ditheringEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ditheringIntensity,
      newProps.ditheringIntensity,
      'ditheringIntensity',
      changedProps
    )
    checkPrimitiveDiff(oldProps.exposure, newProps.exposure, 'exposure', changedProps)
    checkPrimitiveDiff(
      oldProps.fromLinearSpace,
      newProps.fromLinearSpace,
      'fromLinearSpace',
      changedProps
    )
    // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreImageProcessingPostProcess.imageProcessingConfiguration.
    checkPrimitiveDiff(
      oldProps.toneMappingEnabled,
      newProps.toneMappingEnabled,
      'toneMappingEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.toneMappingType,
      newProps.toneMappingType,
      'toneMappingType',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteBlendMode,
      newProps.vignetteBlendMode,
      'vignetteBlendMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCameraFov,
      newProps.vignetteCameraFov,
      'vignetteCameraFov',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCenterX,
      newProps.vignetteCenterX,
      'vignetteCenterX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCenterY,
      newProps.vignetteCenterY,
      'vignetteCenterY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCentreX,
      newProps.vignetteCentreX,
      'vignetteCentreX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCentreY,
      newProps.vignetteCentreY,
      'vignetteCentreY',
      changedProps
    )
    checkColor4Diff(oldProps.vignetteColor, newProps.vignetteColor, 'vignetteColor', changedProps)
    checkPrimitiveDiff(
      oldProps.vignetteEnabled,
      newProps.vignetteEnabled,
      'vignetteEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteStretch,
      newProps.vignetteStretch,
      'vignetteStretch',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteWeight,
      newProps.vignetteWeight,
      'vignetteWeight',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * ImageProcessingPostProcess
 *
 * This code has been generated
 */
export class FiberImageProcessingPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberImageProcessingPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ImageProcessingPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'imageProcessingConfiguration',
        type: 'BabylonjsCoreImageProcessingConfiguration',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberImageProcessingPostProcess',
  }
}

export class FiberAnaglyphPostProcessPropsHandler
  implements PropsHandler<FiberAnaglyphPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberAnaglyphPostProcessProps,
    newProps: FiberAnaglyphPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Postprocess used to generate anaglyphic rendering
 *
 * This code has been generated
 */
export class FiberAnaglyphPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberAnaglyphPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AnaglyphPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'rigCameras',
        type: 'BabylonjsCoreCamera[]',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberAnaglyphPostProcess',
  }
}

export class FiberBlackAndWhitePostProcessPropsHandler
  implements PropsHandler<FiberBlackAndWhitePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberBlackAndWhitePostProcessProps,
    newProps: FiberBlackAndWhitePostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.degree, newProps.degree, 'degree', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Post process used to render in black and white
 *
 * This code has been generated
 */
export class FiberBlackAndWhitePostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberBlackAndWhitePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BlackAndWhitePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberBlackAndWhitePostProcess',
  }
}

export class FiberExtractHighlightsPostProcessPropsHandler
  implements PropsHandler<FiberExtractHighlightsPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberExtractHighlightsPostProcessProps,
    newProps: FiberExtractHighlightsPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.threshold, newProps.threshold, 'threshold', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The extract highlights post process sets all pixels to black except pixels above the specified luminance threshold. Used as the first step for a bloom effect.
 *
 * This code has been generated
 */
export class FiberExtractHighlightsPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberExtractHighlightsPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ExtractHighlightsPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberExtractHighlightsPostProcess',
  }
}

export class FiberBloomMergePostProcessPropsHandler
  implements PropsHandler<FiberBloomMergePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberBloomMergePostProcessProps,
    newProps: FiberBloomMergePostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.weight, newProps.weight, 'weight', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The BloomMergePostProcess merges blurred images with the original based on the values of the circle of confusion.
 *
 * This code has been generated
 */
export class FiberBloomMergePostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberBloomMergePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BloomMergePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'originalFromInput',
        type: 'BabylonjsCorePostProcess',
        optional: false,
      },
      {
        name: 'blurred',
        type: 'BabylonjsCorePostProcess',
        optional: false,
      },
      {
        name: 'weight',
        type: 'number',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberBloomMergePostProcess',
  }
}

export class FiberBlurPostProcessPropsHandler implements PropsHandler<FiberBlurPostProcessProps> {
  getPropertyUpdates(
    oldProps: FiberBlurPostProcessProps,
    newProps: FiberBlurPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreBlurPostProcess.direction.
    checkPrimitiveDiff(oldProps.kernel, newProps.kernel, 'kernel', changedProps)
    checkPrimitiveDiff(oldProps.packedFloat, newProps.packedFloat, 'packedFloat', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Blur Post Process which blurs an image based on a kernel and direction.
 * Can be used twice in x and y directions to perform a gaussian blur in two passes.
 *
 * This code has been generated
 */
export class FiberBlurPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberBlurPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BlurPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'direction',
        type: 'BabylonjsCoreVector2',
        optional: false,
      },
      {
        name: 'kernel',
        type: 'number',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'defines',
        type: 'string',
        optional: true,
      },
      {
        name: '_blockCompilation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureFormat',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberBlurPostProcess',
  }
}

export class FiberDepthOfFieldBlurPostProcessPropsHandler
  implements PropsHandler<FiberDepthOfFieldBlurPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberDepthOfFieldBlurPostProcessProps,
    newProps: FiberDepthOfFieldBlurPostProcessProps
  ): PropertyUpdate[] | null {
    // skipping type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreDepthOfFieldBlurPostProcess.direction.
    return null // no props to check
  }
}

/**
 * The DepthOfFieldBlurPostProcess applied a blur in a give direction.
 * This blur differs from the standard BlurPostProcess as it attempts to avoid blurring pixels
 * based on samples that have a large difference in distance than the center pixel.
 * See section 2.6.2 http://fileadmin.cs.lth.se/cs/education/edan35/lectures/12dof.pdf
 *
 * This code has been generated
 */
export class FiberDepthOfFieldBlurPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDepthOfFieldBlurPostProcessPropsHandler(),
      new FiberBlurPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DepthOfFieldBlurPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'direction',
        type: 'BabylonjsCoreVector2',
        optional: false,
      },
      {
        name: 'kernel',
        type: 'number',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'circleOfConfusion',
        type: 'BabylonjsCorePostProcess',
        optional: false,
      },
      {
        name: 'imageToBlur',
        type: 'BabylonjsCorePostProcess',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureFormat',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberDepthOfFieldBlurPostProcess',
  }
}

export class FiberChromaticAberrationPostProcessPropsHandler
  implements PropsHandler<FiberChromaticAberrationPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberChromaticAberrationPostProcessProps,
    newProps: FiberChromaticAberrationPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.aberrationAmount,
      newProps.aberrationAmount,
      'aberrationAmount',
      changedProps
    )
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreChromaticAberrationPostProcess.centerPosition.
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreChromaticAberrationPostProcess.direction.
    checkPrimitiveDiff(
      oldProps.radialIntensity,
      newProps.radialIntensity,
      'radialIntensity',
      changedProps
    )
    checkPrimitiveDiff(oldProps.screenHeight, newProps.screenHeight, 'screenHeight', changedProps)
    checkPrimitiveDiff(oldProps.screenWidth, newProps.screenWidth, 'screenWidth', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The ChromaticAberrationPostProcess separates the rgb channels in an image to produce chromatic distortion around the edges of the screen
 *
 * This code has been generated
 */
export class FiberChromaticAberrationPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberChromaticAberrationPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ChromaticAberrationPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'screenWidth',
        type: 'number',
        optional: false,
      },
      {
        name: 'screenHeight',
        type: 'number',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberChromaticAberrationPostProcess',
  }
}

export class FiberCircleOfConfusionPostProcessPropsHandler
  implements PropsHandler<FiberCircleOfConfusionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberCircleOfConfusionPostProcessProps,
    newProps: FiberCircleOfConfusionPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCoreCircleOfConfusionPostProcess.depthTexture.
    checkPrimitiveDiff(oldProps.focalLength, newProps.focalLength, 'focalLength', changedProps)
    checkPrimitiveDiff(
      oldProps.focusDistance,
      newProps.focusDistance,
      'focusDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.fStop, newProps.fStop, 'fStop', changedProps)
    checkPrimitiveDiff(oldProps.lensSize, newProps.lensSize, 'lensSize', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The CircleOfConfusionPostProcess computes the circle of confusion value for each pixel given required lens parameters. See https://en.wikipedia.org/wiki/Circle_of_confusion
 *
 * This code has been generated
 */
export class FiberCircleOfConfusionPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberCircleOfConfusionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CircleOfConfusionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'depthTexture',
        type: 'BabylonjsCoreRenderTargetTexture',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberCircleOfConfusionPostProcess',
  }
}

export class FiberColorCorrectionPostProcessPropsHandler
  implements PropsHandler<FiberColorCorrectionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberColorCorrectionPostProcessProps,
    newProps: FiberColorCorrectionPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.colorTableUrl,
      newProps.colorTableUrl,
      'colorTableUrl',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This post-process allows the modification of rendered colors by using
 * a 'look-up table' (LUT). This effect is also called Color Grading.
 *
 * The object needs to be provided an url to a texture containing the color
 * look-up table: the texture must be 256 pixels wide and 16 pixels high.
 * Use an image editing software to tweak the LUT to match your needs.
 *
 * For an example of a color LUT, see here:
 *
 * This code has been generated
 */
export class FiberColorCorrectionPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberColorCorrectionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ColorCorrectionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'colorTableUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberColorCorrectionPostProcess',
  }
}

export class FiberConvolutionPostProcessPropsHandler
  implements PropsHandler<FiberConvolutionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberConvolutionPostProcessProps,
    newProps: FiberConvolutionPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkNumericArrayDiff(oldProps.kernel, newProps.kernel, 'kernel', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The ConvolutionPostProcess applies a 3x3 kernel to every pixel of the
 * input texture to perform effects such as edge detection or sharpening
 * See http://en.wikipedia.org/wiki/Kernel_(image_processing)
 *
 * This code has been generated
 */
export class FiberConvolutionPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberConvolutionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ConvolutionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'kernel',
        type: 'number[]',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberConvolutionPostProcess',
  }
}

export class FiberDepthOfFieldMergePostProcessPropsHandler
  implements PropsHandler<FiberDepthOfFieldMergePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberDepthOfFieldMergePostProcessProps,
    newProps: FiberDepthOfFieldMergePostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * The DepthOfFieldMergePostProcess merges blurred images with the original based on the values of the circle of confusion.
 *
 * This code has been generated
 */
export class FiberDepthOfFieldMergePostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDepthOfFieldMergePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DepthOfFieldMergePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'originalFromInput',
        type: 'BabylonjsCorePostProcess',
        optional: false,
      },
      {
        name: 'circleOfConfusion',
        type: 'BabylonjsCorePostProcess',
        optional: false,
      },
      {
        name: '_blurSteps',
        type: 'BabylonjsCorePostProcess[]',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberDepthOfFieldMergePostProcess',
  }
}

export class FiberDisplayPassPostProcessPropsHandler
  implements PropsHandler<FiberDisplayPassPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberDisplayPassPostProcessProps,
    newProps: FiberDisplayPassPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * DisplayPassPostProcess which produces an output the same as it's input
 *
 * This code has been generated
 */
export class FiberDisplayPassPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDisplayPassPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DisplayPassPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberDisplayPassPostProcess',
  }
}

export class FiberFilterPostProcessPropsHandler
  implements PropsHandler<FiberFilterPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberFilterPostProcessProps,
    newProps: FiberFilterPostProcessProps
  ): PropertyUpdate[] | null {
    // skipping type: 'BabylonjsCoreMatrix' property (not coded) BabylonjsCoreFilterPostProcess.kernelMatrix.
    return null // no props to check
  }
}

/**
 * Applies a kernel filter to the image
 *
 * This code has been generated
 */
export class FiberFilterPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFilterPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FilterPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'kernelMatrix',
        type: 'BabylonjsCoreMatrix',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberFilterPostProcess',
  }
}

export class FiberFxaaPostProcessPropsHandler implements PropsHandler<FiberFxaaPostProcessProps> {
  getPropertyUpdates(
    oldProps: FiberFxaaPostProcessProps,
    newProps: FiberFxaaPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Fxaa post process
 *
 * This code has been generated
 */
export class FiberFxaaPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberFxaaPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FxaaPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberFxaaPostProcess',
  }
}

export class FiberGrainPostProcessPropsHandler implements PropsHandler<FiberGrainPostProcessProps> {
  getPropertyUpdates(
    oldProps: FiberGrainPostProcessProps,
    newProps: FiberGrainPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.animated, newProps.animated, 'animated', changedProps)
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The GrainPostProcess adds noise to the image at mid luminance levels
 *
 * This code has been generated
 */
export class FiberGrainPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberGrainPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GrainPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberGrainPostProcess',
  }
}

export class FiberHighlightsPostProcessPropsHandler
  implements PropsHandler<FiberHighlightsPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberHighlightsPostProcessProps,
    newProps: FiberHighlightsPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Extracts highlights from the image
 *
 * This code has been generated
 */
export class FiberHighlightsPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberHighlightsPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HighlightsPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberHighlightsPostProcess',
  }
}

export class FiberMotionBlurPostProcessPropsHandler
  implements PropsHandler<FiberMotionBlurPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberMotionBlurPostProcessProps,
    newProps: FiberMotionBlurPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.isObjectBased,
      newProps.isObjectBased,
      'isObjectBased',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.motionBlurSamples,
      newProps.motionBlurSamples,
      'motionBlurSamples',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.motionStrength,
      newProps.motionStrength,
      'motionStrength',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Motion Blur Post Process which blurs an image based on the objects velocity in scene.
 * Velocity can be affected by each object's rotation, position and scale depending on the transformation speed.
 * As an example, all you have to do is to create the post-process:
 *  var mb = new BABYLON.MotionBlurPostProcess(
 *      'mb', // The name of the effect.
 *      scene, // The scene containing the objects to blur according to their velocity.
 *      1.0, // The required width/height ratio to downsize to before computing the render pass.
 *      camera // The camera to apply the render pass to.
 * );
 * Then, all objects moving, rotating and/or scaling will be blurred depending on the transformation speed.
 *
 * This code has been generated
 */
export class FiberMotionBlurPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberMotionBlurPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MotionBlurPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'forceGeometryBuffer',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberMotionBlurPostProcess',
  }
}

export class FiberPassPostProcessPropsHandler implements PropsHandler<FiberPassPostProcessProps> {
  getPropertyUpdates(
    oldProps: FiberPassPostProcessProps,
    newProps: FiberPassPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * PassPostProcess which produces an output the same as it's input
 *
 * This code has been generated
 */
export class FiberPassPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPassPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PassPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPassPostProcess',
  }
}

export class FiberPassCubePostProcessPropsHandler
  implements PropsHandler<FiberPassCubePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberPassCubePostProcessProps,
    newProps: FiberPassCubePostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.face, newProps.face, 'face', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * PassCubePostProcess which produces an output the same as it's input (which must be a cube texture)
 *
 * This code has been generated
 */
export class FiberPassCubePostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPassCubePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PassCubePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPassCubePostProcess',
  }
}

export class FiberRefractionPostProcessPropsHandler
  implements PropsHandler<FiberRefractionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberRefractionPostProcessProps,
    newProps: FiberRefractionPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.colorLevel, newProps.colorLevel, 'colorLevel', changedProps)
    checkPrimitiveDiff(oldProps.depth, newProps.depth, 'depth', changedProps)
    // type: 'BabylonjsCoreTexture' property (not coded) BabylonjsCoreRefractionPostProcess.refractionTexture.
    checkPrimitiveDiff(
      oldProps.refractionTextureUrl,
      newProps.refractionTextureUrl,
      'refractionTextureUrl',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Post process which applies a refraction texture
 *
 * This code has been generated
 */
export class FiberRefractionPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberRefractionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RefractionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'refractionTextureUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: false,
      },
      {
        name: 'depth',
        type: 'number',
        optional: false,
      },
      {
        name: 'colorLevel',
        type: 'number',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberRefractionPostProcess',
  }
}

export class FiberSharpenPostProcessPropsHandler
  implements PropsHandler<FiberSharpenPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberSharpenPostProcessProps,
    newProps: FiberSharpenPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.colorAmount, newProps.colorAmount, 'colorAmount', changedProps)
    checkPrimitiveDiff(oldProps.edgeAmount, newProps.edgeAmount, 'edgeAmount', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The SharpenPostProcess applies a sharpen kernel to every pixel
 * See http://en.wikipedia.org/wiki/Kernel_(image_processing)
 *
 * This code has been generated
 */
export class FiberSharpenPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSharpenPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SharpenPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSharpenPostProcess',
  }
}

export class FiberScreenSpaceReflectionPostProcessPropsHandler
  implements PropsHandler<FiberScreenSpaceReflectionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberScreenSpaceReflectionPostProcessProps,
    newProps: FiberScreenSpaceReflectionPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.enableSmoothReflections,
      newProps.enableSmoothReflections,
      'enableSmoothReflections',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionSamples,
      newProps.reflectionSamples,
      'reflectionSamples',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.reflectionSpecularFalloffExponent,
      newProps.reflectionSpecularFalloffExponent,
      'reflectionSpecularFalloffExponent',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.roughnessFactor,
      newProps.roughnessFactor,
      'roughnessFactor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.smoothSteps, newProps.smoothSteps, 'smoothSteps', changedProps)
    checkPrimitiveDiff(oldProps.step, newProps.step, 'step', changedProps)
    checkPrimitiveDiff(oldProps.strength, newProps.strength, 'strength', changedProps)
    checkPrimitiveDiff(oldProps.threshold, newProps.threshold, 'threshold', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The ScreenSpaceReflectionPostProcess performs realtime reflections using only and only the available informations on the screen (positions and normals).
 * Basically, the screen space reflection post-process will compute reflections according the material's reflectivity.
 *
 * This code has been generated
 */
export class FiberScreenSpaceReflectionPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberScreenSpaceReflectionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScreenSpaceReflectionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'forceGeometryBuffer',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberScreenSpaceReflectionPostProcess',
  }
}

export class FiberStereoscopicInterlacePostProcessIPropsHandler
  implements PropsHandler<FiberStereoscopicInterlacePostProcessIProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicInterlacePostProcessIProps,
    newProps: FiberStereoscopicInterlacePostProcessIProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * StereoscopicInterlacePostProcessI used to render stereo views from a rigged camera with support for alternate line interlacing
 *
 * This code has been generated
 */
export class FiberStereoscopicInterlacePostProcessI
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicInterlacePostProcessIPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicInterlacePostProcessI',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'rigCameras',
        type: 'BabylonjsCoreCamera[]',
        optional: false,
      },
      {
        name: 'isStereoscopicHoriz',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'isStereoscopicInterlaced',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberStereoscopicInterlacePostProcessI',
  }
}

export class FiberStereoscopicInterlacePostProcessPropsHandler
  implements PropsHandler<FiberStereoscopicInterlacePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberStereoscopicInterlacePostProcessProps,
    newProps: FiberStereoscopicInterlacePostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * StereoscopicInterlacePostProcess used to render stereo views from a rigged camera
 *
 * This code has been generated
 */
export class FiberStereoscopicInterlacePostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberStereoscopicInterlacePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'StereoscopicInterlacePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'rigCameras',
        type: 'BabylonjsCoreCamera[]',
        optional: false,
      },
      {
        name: 'isStereoscopicHoriz',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberStereoscopicInterlacePostProcess',
  }
}

export class FiberTonemapPostProcessPropsHandler
  implements PropsHandler<FiberTonemapPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberTonemapPostProcessProps,
    newProps: FiberTonemapPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.exposureAdjustment,
      newProps.exposureAdjustment,
      'exposureAdjustment',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Defines a post process to apply tone mapping
 *
 * This code has been generated
 */
export class FiberTonemapPostProcess implements HasPropsHandlers<FiberPostProcessProps> {
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberTonemapPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'TonemapPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: '_operator',
        type: 'BabylonjsCoreTonemappingOperator',
        optional: false,
      },
      {
        name: 'exposureAdjustment',
        type: 'number',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreEngine',
        optional: true,
      },
      {
        name: 'textureFormat',
        type: 'number',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberTonemapPostProcess',
  }
}

export class FiberVolumetricLightScatteringPostProcessPropsHandler
  implements PropsHandler<FiberVolumetricLightScatteringPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberVolumetricLightScatteringPostProcessProps,
    newProps: FiberVolumetricLightScatteringPostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: '{ position: BabylonjsCoreVector3; }' property (not coded) BabylonjsCoreVolumetricLightScatteringPostProcess.attachedNode.
    checkVector3Diff(
      oldProps.customMeshPosition,
      newProps.customMeshPosition,
      'customMeshPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['customMeshPosition-x'],
      newProps['customMeshPosition-x'],
      'customMeshPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['customMeshPosition-y'],
      newProps['customMeshPosition-y'],
      'customMeshPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['customMeshPosition-z'],
      newProps['customMeshPosition-z'],
      'customMeshPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.decay, newProps.decay, 'decay', changedProps)
    checkPrimitiveDiff(oldProps.density, newProps.density, 'density', changedProps)
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreVolumetricLightScatteringPostProcess.excludedMeshes.
    checkPrimitiveDiff(oldProps.exposure, newProps.exposure, 'exposure', changedProps)
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreVolumetricLightScatteringPostProcess.includedMeshes.
    checkPrimitiveDiff(oldProps.invert, newProps.invert, 'invert', changedProps)
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVolumetricLightScatteringPostProcess.mesh.
    checkPrimitiveDiff(
      oldProps.useCustomMeshPosition,
      newProps.useCustomMeshPosition,
      'useCustomMeshPosition',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useDiffuseColor,
      newProps.useDiffuseColor,
      'useDiffuseColor',
      changedProps
    )
    checkPrimitiveDiff(oldProps.weight, newProps.weight, 'weight', changedProps)
    checkMethodDiff(
      oldProps.setCustomMeshPosition,
      newProps.setCustomMeshPosition,
      'setCustomMeshPosition',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Inspired by https://developer.nvidia.com/gpugems/gpugems3/part-ii-light-and-shadows/chapter-13-volumetric-light-scattering-post-process
 *
 * This code has been generated
 */
export class FiberVolumetricLightScatteringPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVolumetricLightScatteringPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VolumetricLightScatteringPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'ratio',
        type: 'any',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'mesh',
        type: 'BabylonjsCoreMesh',
        optional: true,
      },
      {
        name: 'samples',
        type: 'number',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberVolumetricLightScatteringPostProcess',
  }
}

export class FiberVRDistortionCorrectionPostProcessPropsHandler
  implements PropsHandler<FiberVRDistortionCorrectionPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberVRDistortionCorrectionPostProcessProps,
    newProps: FiberVRDistortionCorrectionPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * VRDistortionCorrectionPostProcess used for mobile VR
 *
 * This code has been generated
 */
export class FiberVRDistortionCorrectionPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVRDistortionCorrectionPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRDistortionCorrectionPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'isRightEye',
        type: 'boolean',
        optional: false,
      },
      {
        name: 'vrMetrics',
        type: 'BabylonjsCoreVRCameraMetrics',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberVRDistortionCorrectionPostProcess',
  }
}

export class FiberVRMultiviewToSingleviewPostProcessPropsHandler
  implements PropsHandler<FiberVRMultiviewToSingleviewPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberVRMultiviewToSingleviewPostProcessProps,
    newProps: FiberVRMultiviewToSingleviewPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * VRMultiviewToSingleview used to convert multiview texture arrays to standard textures for scenarios such as webVR
 * This will not be used for webXR as it supports displaying texture arrays directly
 *
 * This code has been generated
 */
export class FiberVRMultiviewToSingleviewPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberVRMultiviewToSingleviewPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRMultiviewToSingleviewPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'scaleFactor',
        type: 'number',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberVRMultiviewToSingleviewPostProcess',
  }
}

export class FiberScreenSpaceCurvaturePostProcessPropsHandler
  implements PropsHandler<FiberScreenSpaceCurvaturePostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberScreenSpaceCurvaturePostProcessProps,
    newProps: FiberScreenSpaceCurvaturePostProcessProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.ridge, newProps.ridge, 'ridge', changedProps)
    checkPrimitiveDiff(oldProps.valley, newProps.valley, 'valley', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The Screen Space curvature effect can help highlighting ridge and valley of a model.
 *
 * This code has been generated
 */
export class FiberScreenSpaceCurvaturePostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberScreenSpaceCurvaturePostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScreenSpaceCurvaturePostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: false,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
      {
        name: 'blockCompilation',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberScreenSpaceCurvaturePostProcess',
  }
}

export class FiberSubSurfaceScatteringPostProcessPropsHandler
  implements PropsHandler<FiberSubSurfaceScatteringPostProcessProps>
{
  getPropertyUpdates(
    oldProps: FiberSubSurfaceScatteringPostProcessProps,
    newProps: FiberSubSurfaceScatteringPostProcessProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * Sub surface scattering post process
 *
 * This code has been generated
 */
export class FiberSubSurfaceScatteringPostProcess
  implements HasPropsHandlers<FiberPostProcessProps>
{
  private propsHandlers: PropsHandler<FiberPostProcessProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSubSurfaceScatteringPostProcessPropsHandler(),
      new FiberPostProcessPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberPostProcessProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPostProcessProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SubSurfaceScatteringPostProcess',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: 'number | BabylonjsCorePostProcessOptions',
        optional: false,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'samplingMode',
        type: 'number',
        optional: true,
      },
      {
        name: 'engine',
        type: 'BabylonjsCoreAbstractEngine',
        optional: true,
      },
      {
        name: 'reusable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'textureType',
        type: 'number',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberSubSurfaceScatteringPostProcess',
  }
}

export class FiberGizmoPropsHandler implements PropsHandler<FiberGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberGizmoProps,
    newProps: FiberGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreGizmo.additionalTransformNode.
    checkPrimitiveDiff(oldProps.anchorPoint, newProps.anchorPoint, 'anchorPoint', changedProps)
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreGizmo.attachedMesh.
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreGizmo.attachedNode.
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkQuaternionDiff(
      oldProps.customRotationQuaternion,
      newProps.customRotationQuaternion,
      'customRotationQuaternion',
      true,
      changedProps
    )
    // type: 'BabylonjsCoreUtilityLayerRenderer' property (not coded) BabylonjsCoreGizmo.gizmoLayer.
    checkPrimitiveDiff(oldProps.scaleRatio, newProps.scaleRatio, 'scaleRatio', changedProps)
    checkPrimitiveDiff(
      oldProps.updateGizmoPositionToMatchAttachedMesh,
      newProps.updateGizmoPositionToMatchAttachedMesh,
      'updateGizmoPositionToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateGizmoRotationToMatchAttachedMesh,
      newProps.updateGizmoRotationToMatchAttachedMesh,
      'updateGizmoRotationToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(oldProps.updateScale, newProps.updateScale, 'updateScale', changedProps)
    checkMethodDiff(oldProps.setCustomMesh, newProps.setCustomMesh, 'setCustomMesh', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Renders gizmos on top of an existing scene which provide controls for position, rotation, etc.
 *
 * This code has been generated
 */
export class FiberGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Gizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberGizmo',
  }
}

export class FiberPlaneDragGizmoPropsHandler implements PropsHandler<FiberPlaneDragGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberPlaneDragGizmoProps,
    newProps: FiberPlaneDragGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCorePointerDragBehavior' property (not coded) BabylonjsCorePlaneDragGizmo.dragBehavior.
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkObservableDiff(
      oldProps.onSnapObservable,
      newProps.onSnapObservable,
      'onSnapObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Single plane drag gizmo
 *
 * This code has been generated
 */
export class FiberPlaneDragGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberPlaneDragGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PlaneDragGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'dragPlaneNormal',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCorePositionGizmo',
        optional: true,
      },
      {
        name: 'hoverColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'disableColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberPlaneDragGizmo',
  }
}

export class FiberPlaneRotationGizmoPropsHandler
  implements PropsHandler<FiberPlaneRotationGizmoProps>
{
  getPropertyUpdates(
    oldProps: FiberPlaneRotationGizmoProps,
    newProps: FiberPlaneRotationGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.angle, newProps.angle, 'angle', changedProps)
    // type: 'BabylonjsCorePointerDragBehavior' property (not coded) BabylonjsCorePlaneRotationGizmo.dragBehavior.
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkObservableDiff(
      oldProps.onSnapObservable,
      newProps.onSnapObservable,
      'onSnapObservable',
      changedProps
    )
    checkColor3Diff(oldProps.rotationColor, newProps.rotationColor, 'rotationColor', changedProps)
    checkPrimitiveDiff(oldProps.sensitivity, newProps.sensitivity, 'sensitivity', changedProps)
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Single plane rotation gizmo
 *
 * This code has been generated
 */
export class FiberPlaneRotationGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberPlaneRotationGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PlaneRotationGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'planeNormal',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'tessellation',
        type: 'number',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCoreRotationGizmo',
        optional: true,
      },
      {
        name: 'useEulerRotation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'hoverColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'disableColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberPlaneRotationGizmo',
  }
}

export class FiberRotationGizmoPropsHandler implements PropsHandler<FiberRotationGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberRotationGizmoProps,
    newProps: FiberRotationGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreRotationGizmo.additionalTransformNode.
    checkPrimitiveDiff(oldProps.anchorPoint, newProps.anchorPoint, 'anchorPoint', changedProps)
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreRotationGizmo.attachedMesh.
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreRotationGizmo.attachedNode.
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkQuaternionDiff(
      oldProps.customRotationQuaternion,
      newProps.customRotationQuaternion,
      'customRotationQuaternion',
      true,
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragEndObservable,
      newProps.onDragEndObservable,
      'onDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragObservable,
      newProps.onDragObservable,
      'onDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.scaleRatio, newProps.scaleRatio, 'scaleRatio', changedProps)
    checkPrimitiveDiff(oldProps.sensitivity, newProps.sensitivity, 'sensitivity', changedProps)
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    checkPrimitiveDiff(
      oldProps.updateGizmoPositionToMatchAttachedMesh,
      newProps.updateGizmoPositionToMatchAttachedMesh,
      'updateGizmoPositionToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateGizmoRotationToMatchAttachedMesh,
      newProps.updateGizmoRotationToMatchAttachedMesh,
      'updateGizmoRotationToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(oldProps.updateScale, newProps.updateScale, 'updateScale', changedProps)
    // type: 'BabylonjsCoreIPlaneRotationGizmo' property (not coded) BabylonjsCoreRotationGizmo.xGizmo.
    // type: 'BabylonjsCoreIPlaneRotationGizmo' property (not coded) BabylonjsCoreRotationGizmo.yGizmo.
    // type: 'BabylonjsCoreIPlaneRotationGizmo' property (not coded) BabylonjsCoreRotationGizmo.zGizmo.
    checkMethodDiff(
      oldProps.addToAxisCache,
      newProps.addToAxisCache,
      'addToAxisCache',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo that enables rotating a mesh along 3 axis
 *
 * This code has been generated
 */
export class FiberRotationGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberRotationGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'RotationGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'tessellation',
        type: 'number',
        optional: true,
      },
      {
        name: 'useEulerRotation',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'gizmoManager',
        type: 'BabylonjsCoreGizmoManager',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreRotationGizmoOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberRotationGizmo',
  }
}

export class FiberAxisScaleGizmoPropsHandler implements PropsHandler<FiberAxisScaleGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberAxisScaleGizmoProps,
    newProps: FiberAxisScaleGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCorePointerDragBehavior' property (not coded) BabylonjsCoreAxisScaleGizmo.dragBehavior.
    checkPrimitiveDiff(oldProps.dragScale, newProps.dragScale, 'dragScale', changedProps)
    checkPrimitiveDiff(
      oldProps.incrementalSnap,
      newProps.incrementalSnap,
      'incrementalSnap',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkObservableDiff(
      oldProps.onSnapObservable,
      newProps.onSnapObservable,
      'onSnapObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.sensitivity, newProps.sensitivity, 'sensitivity', changedProps)
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    checkPrimitiveDiff(
      oldProps.uniformScaling,
      newProps.uniformScaling,
      'uniformScaling',
      changedProps
    )
    checkMethodDiff(oldProps.setCustomMesh, newProps.setCustomMesh, 'setCustomMesh', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Single axis scale gizmo
 *
 * This code has been generated
 */
export class FiberAxisScaleGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberAxisScaleGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AxisScaleGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'dragAxis',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCoreScaleGizmo',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'hoverColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'disableColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberAxisScaleGizmo',
  }
}

export class FiberScaleGizmoPropsHandler implements PropsHandler<FiberScaleGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberScaleGizmoProps,
    newProps: FiberScaleGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreScaleGizmo.additionalTransformNode.
    checkPrimitiveDiff(oldProps.anchorPoint, newProps.anchorPoint, 'anchorPoint', changedProps)
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreScaleGizmo.attachedMesh.
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreScaleGizmo.attachedNode.
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkQuaternionDiff(
      oldProps.customRotationQuaternion,
      newProps.customRotationQuaternion,
      'customRotationQuaternion',
      true,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.incrementalSnap,
      newProps.incrementalSnap,
      'incrementalSnap',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragEndObservable,
      newProps.onDragEndObservable,
      'onDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragObservable,
      newProps.onDragObservable,
      'onDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.scaleRatio, newProps.scaleRatio, 'scaleRatio', changedProps)
    checkPrimitiveDiff(oldProps.sensitivity, newProps.sensitivity, 'sensitivity', changedProps)
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    // type: 'BabylonjsCoreIAxisScaleGizmo' property (not coded) BabylonjsCoreScaleGizmo.uniformScaleGizmo.
    checkPrimitiveDiff(
      oldProps.updateGizmoRotationToMatchAttachedMesh,
      newProps.updateGizmoRotationToMatchAttachedMesh,
      'updateGizmoRotationToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(oldProps.updateScale, newProps.updateScale, 'updateScale', changedProps)
    // type: 'BabylonjsCoreIAxisScaleGizmo' property (not coded) BabylonjsCoreScaleGizmo.xGizmo.
    // type: 'BabylonjsCoreIAxisScaleGizmo' property (not coded) BabylonjsCoreScaleGizmo.yGizmo.
    // type: 'BabylonjsCoreIAxisScaleGizmo' property (not coded) BabylonjsCoreScaleGizmo.zGizmo.
    checkMethodDiff(
      oldProps.addToAxisCache,
      newProps.addToAxisCache,
      'addToAxisCache',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo that enables scaling a mesh along 3 axis
 *
 * This code has been generated
 */
export class FiberScaleGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberScaleGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ScaleGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'gizmoManager',
        type: 'BabylonjsCoreGizmoManager',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCoreScaleGizmoOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberScaleGizmo',
  }
}

export class FiberBoundingBoxGizmoPropsHandler implements PropsHandler<FiberBoundingBoxGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberBoundingBoxGizmoProps,
    newProps: FiberBoundingBoxGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkVector3Diff(oldProps.axisFactor, newProps.axisFactor, 'axisFactor', true, changedProps)
    checkPrimitiveDiff(
      oldProps.fixedDragMeshBoundsSize,
      newProps.fixedDragMeshBoundsSize,
      'fixedDragMeshBoundsSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.fixedDragMeshScreenSize,
      newProps.fixedDragMeshScreenSize,
      'fixedDragMeshScreenSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.fixedDragMeshScreenSizeDistanceFactor,
      newProps.fixedDragMeshScreenSizeDistanceFactor,
      'fixedDragMeshScreenSizeDistanceFactor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreChildren,
      newProps.ignoreChildren,
      'ignoreChildren',
      changedProps
    )
    checkLambdaDiff(
      oldProps.includeChildPredicate,
      newProps.includeChildPredicate,
      'includeChildPredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.incrementalSnap,
      newProps.incrementalSnap,
      'incrementalSnap',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onRotationSphereDragEndObservable,
      newProps.onRotationSphereDragEndObservable,
      'onRotationSphereDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onRotationSphereDragObservable,
      newProps.onRotationSphereDragObservable,
      'onRotationSphereDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onScaleBoxDragEndObservable,
      newProps.onScaleBoxDragEndObservable,
      'onScaleBoxDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onScaleBoxDragObservable,
      newProps.onScaleBoxDragObservable,
      'onScaleBoxDragObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotationSnapDistance,
      newProps.rotationSnapDistance,
      'rotationSnapDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotationSphereSize,
      newProps.rotationSphereSize,
      'rotationSphereSize',
      changedProps
    )
    checkPrimitiveDiff(oldProps.scaleBoxSize, newProps.scaleBoxSize, 'scaleBoxSize', changedProps)
    checkPrimitiveDiff(
      oldProps.scaleDragSpeed,
      newProps.scaleDragSpeed,
      'scaleDragSpeed',
      changedProps
    )
    checkVector3Diff(oldProps.scalePivot, newProps.scalePivot, 'scalePivot', false, changedProps)
    checkPrimitiveDiff(
      oldProps['scalePivot-x'],
      newProps['scalePivot-x'],
      'scalePivot.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['scalePivot-y'],
      newProps['scalePivot-y'],
      'scalePivot.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['scalePivot-z'],
      newProps['scalePivot-z'],
      'scalePivot.z',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.scalingSnapDistance,
      newProps.scalingSnapDistance,
      'scalingSnapDistance',
      changedProps
    )
    checkMethodDiff(oldProps.setColor, newProps.setColor, 'setColor', changedProps)
    checkMethodDiff(
      oldProps.setEnabledRotationAxis,
      newProps.setEnabledRotationAxis,
      'setEnabledRotationAxis',
      changedProps
    )
    checkMethodDiff(
      oldProps.setEnabledScaling,
      newProps.setEnabledScaling,
      'setEnabledScaling',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Bounding box gizmo
 *
 * This code has been generated
 */
export class FiberBoundingBoxGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberBoundingBoxGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BoundingBoxGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberBoundingBoxGizmo',
  }
}

export class FiberPositionGizmoPropsHandler implements PropsHandler<FiberPositionGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberPositionGizmoProps,
    newProps: FiberPositionGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCorePositionGizmo.additionalTransformNode.
    checkPrimitiveDiff(oldProps.anchorPoint, newProps.anchorPoint, 'anchorPoint', changedProps)
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCorePositionGizmo.attachedMesh.
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCorePositionGizmo.attachedNode.
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkQuaternionDiff(
      oldProps.customRotationQuaternion,
      newProps.customRotationQuaternion,
      'customRotationQuaternion',
      true,
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragEndObservable,
      newProps.onDragEndObservable,
      'onDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragObservable,
      newProps.onDragObservable,
      'onDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.planarGizmoEnabled,
      newProps.planarGizmoEnabled,
      'planarGizmoEnabled',
      changedProps
    )
    checkPrimitiveDiff(oldProps.scaleRatio, newProps.scaleRatio, 'scaleRatio', changedProps)
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    checkPrimitiveDiff(
      oldProps.updateGizmoPositionToMatchAttachedMesh,
      newProps.updateGizmoPositionToMatchAttachedMesh,
      'updateGizmoPositionToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateGizmoRotationToMatchAttachedMesh,
      newProps.updateGizmoRotationToMatchAttachedMesh,
      'updateGizmoRotationToMatchAttachedMesh',
      changedProps
    )
    checkPrimitiveDiff(oldProps.updateScale, newProps.updateScale, 'updateScale', changedProps)
    // type: 'BabylonjsCoreIAxisDragGizmo' property (not coded) BabylonjsCorePositionGizmo.xGizmo.
    // type: 'BabylonjsCoreIPlaneDragGizmo' property (not coded) BabylonjsCorePositionGizmo.xPlaneGizmo.
    // type: 'BabylonjsCoreIAxisDragGizmo' property (not coded) BabylonjsCorePositionGizmo.yGizmo.
    // type: 'BabylonjsCoreIPlaneDragGizmo' property (not coded) BabylonjsCorePositionGizmo.yPlaneGizmo.
    // type: 'BabylonjsCoreIAxisDragGizmo' property (not coded) BabylonjsCorePositionGizmo.zGizmo.
    // type: 'BabylonjsCoreIPlaneDragGizmo' property (not coded) BabylonjsCorePositionGizmo.zPlaneGizmo.
    checkMethodDiff(
      oldProps.addToAxisCache,
      newProps.addToAxisCache,
      'addToAxisCache',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo that enables dragging a mesh along 3 axis
 *
 * This code has been generated
 */
export class FiberPositionGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberPositionGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PositionGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'gizmoManager',
        type: 'BabylonjsCoreGizmoManager',
        optional: true,
      },
      {
        name: 'options',
        type: 'BabylonjsCorePositionGizmoOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberPositionGizmo',
  }
}

export class FiberAxisDragGizmoPropsHandler implements PropsHandler<FiberAxisDragGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberAxisDragGizmoProps,
    newProps: FiberAxisDragGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCorePointerDragBehavior' property (not coded) BabylonjsCoreAxisDragGizmo.dragBehavior.
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkObservableDiff(
      oldProps.onSnapObservable,
      newProps.onSnapObservable,
      'onSnapObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.snapDistance, newProps.snapDistance, 'snapDistance', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Single axis drag gizmo
 *
 * This code has been generated
 */
export class FiberAxisDragGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberAxisDragGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AxisDragGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'dragAxis',
        type: 'BabylonjsCoreVector3',
        optional: false,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'parent',
        type: 'BabylonjsCorePositionGizmo',
        optional: true,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'hoverColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'disableColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberAxisDragGizmo',
  }
}

export class FiberLightGizmoPropsHandler implements PropsHandler<FiberLightGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberLightGizmoProps,
    newProps: FiberLightGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreLightGizmo.attachedNode.
    checkObjectDiff(oldProps.light, newProps.light, 'light', changedProps)
    checkObservableDiff(
      oldProps.onClickedObservable,
      newProps.onClickedObservable,
      'onClickedObservable',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo that enables viewing a light
 *
 * This code has been generated
 */
export class FiberLightGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberLightGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'LightGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberLightGizmo',
  }
}

export class FiberCameraGizmoPropsHandler implements PropsHandler<FiberCameraGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberCameraGizmoProps,
    newProps: FiberCameraGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreCameraGizmo.camera.
    checkPrimitiveDiff(
      oldProps.displayFrustum,
      newProps.displayFrustum,
      'displayFrustum',
      changedProps
    )
    checkObservableDiff(
      oldProps.onClickedObservable,
      newProps.onClickedObservable,
      'onClickedObservable',
      changedProps
    )
    checkMethodDiff(oldProps.setCustomMesh, newProps.setCustomMesh, 'setCustomMesh', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo that enables viewing a camera
 *
 * This code has been generated
 */
export class FiberCameraGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberCameraGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CameraGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'gizmoLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'gizmoColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
      {
        name: 'frustumLinesColor',
        type: 'BabylonjsCoreColor3',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberCameraGizmo',
  }
}

export class FiberSlateGizmoPropsHandler implements PropsHandler<FiberSlateGizmoProps> {
  getPropertyUpdates(
    oldProps: FiberSlateGizmoProps,
    newProps: FiberSlateGizmoProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsGuiHolographicSlate' property (not coded) BabylonjsGuiSlateGizmo.attachedSlate.
    checkPrimitiveDiff(
      oldProps.fixedScreenSize,
      newProps.fixedScreenSize,
      'fixedScreenSize',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.fixedScreenSizeDistanceFactor,
      newProps.fixedScreenSizeDistanceFactor,
      'fixedScreenSizeDistanceFactor',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Gizmo to resize 2D slates
 *
 * This code has been generated
 */
export class FiberSlateGizmo implements HasPropsHandlers<FiberGizmoProps> {
  private propsHandlers: PropsHandler<FiberGizmoProps>[]

  constructor() {
    this.propsHandlers = [new FiberSlateGizmoPropsHandler(), new FiberGizmoPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SlateGizmo',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'utilityLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGizmo: true,
    className: 'FiberSlateGizmo',
  }
}

export class FiberGUI3DManagerPropsHandler implements PropsHandler<FiberGUI3DManagerProps> {
  getPropertyUpdates(
    oldProps: FiberGUI3DManagerProps,
    newProps: FiberGUI3DManagerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.controlScaling,
      newProps.controlScaling,
      'controlScaling',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPickedPointChangedObservable,
      newProps.onPickedPointChangedObservable,
      'onPickedPointChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPickingObservable,
      newProps.onPickingObservable,
      'onPickingObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRealisticScaling,
      newProps.useRealisticScaling,
      'useRealisticScaling',
      changedProps
    )
    checkMethodDiff(oldProps.addControl, newProps.addControl, 'addControl', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export class FiberGUI3DManager implements HasPropsHandlers<FiberGUI3DManagerProps> {
  private propsHandlers: PropsHandler<FiberGUI3DManagerProps>[]

  constructor() {
    this.propsHandlers = [new FiberGUI3DManagerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGUI3DManagerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGUI3DManagerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GUI3DManager',
    namespace: '@babylonjs/gui',
    parameters: [
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isGUI3DControl: true,
    className: 'FiberGUI3DManager',
  }
}

export class FiberEnvironmentHelperPropsHandler
  implements PropsHandler<FiberEnvironmentHelperProps>
{
  getPropertyUpdates(
    oldProps: FiberEnvironmentHelperProps,
    newProps: FiberEnvironmentHelperProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkObservableDiff(
      oldProps.onErrorObservable,
      newProps.onErrorObservable,
      'onErrorObservable',
      changedProps
    )
    checkMethodDiff(oldProps.setMainColor, newProps.setMainColor, 'setMainColor', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The EnvironmentHelper class can be used to add a fully featured non-expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your ImageProcessingConfiguration.
 *
 * This code has been generated
 */
export class FiberEnvironmentHelper implements HasPropsHandlers<FiberEnvironmentHelperProps> {
  private propsHandlers: PropsHandler<FiberEnvironmentHelperProps>[]

  constructor() {
    this.propsHandlers = [new FiberEnvironmentHelperPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberEnvironmentHelperProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberEnvironmentHelperProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'EnvironmentHelper',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'options',
        type: 'Partial<BabylonjsCoreIEnvironmentHelperOptions>',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isEnvironment: true,
    className: 'FiberEnvironmentHelper',
  }
}

export class FiberPhysicsImpostorPropsHandler implements PropsHandler<FiberPhysicsImpostorProps> {
  getPropertyUpdates(
    oldProps: FiberPhysicsImpostorProps,
    newProps: FiberPhysicsImpostorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkLambdaDiff(oldProps.afterStep, newProps.afterStep, 'afterStep', changedProps)
    checkLambdaDiff(oldProps.beforeStep, newProps.beforeStep, 'beforeStep', changedProps)
    checkPrimitiveDiff(oldProps.friction, newProps.friction, 'friction', changedProps)
    checkPrimitiveDiff(oldProps.mass, newProps.mass, 'mass', changedProps)
    // type: 'BabylonjsCoreIPhysicsEnabledObject' property (not coded) BabylonjsCorePhysicsImpostor.object.
    checkLambdaDiff(oldProps.onCollide, newProps.onCollide, 'onCollide', changedProps)
    checkLambdaDiff(
      oldProps.onCollideEvent,
      newProps.onCollideEvent,
      'onCollideEvent',
      changedProps
    )
    // type: 'BabylonjsCorePhysicsImpostor' property (not coded) BabylonjsCorePhysicsImpostor.parent.
    // type: 'any' property (not coded) BabylonjsCorePhysicsImpostor.physicsBody.
    checkPrimitiveDiff(
      oldProps.positionIterations,
      newProps.positionIterations,
      'positionIterations',
      changedProps
    )
    checkPrimitiveDiff(oldProps.pressure, newProps.pressure, 'pressure', changedProps)
    checkPrimitiveDiff(oldProps.restitution, newProps.restitution, 'restitution', changedProps)
    checkPrimitiveDiff(oldProps.segments, newProps.segments, 'segments', changedProps)
    checkPrimitiveDiff(oldProps.soft, newProps.soft, 'soft', changedProps)
    checkPrimitiveDiff(oldProps.stiffness, newProps.stiffness, 'stiffness', changedProps)
    checkPrimitiveDiff(oldProps.type, newProps.type, 'type', changedProps)
    checkPrimitiveDiff(oldProps.uniqueId, newProps.uniqueId, 'uniqueId', changedProps)
    checkPrimitiveDiff(
      oldProps.velocityIterations,
      newProps.velocityIterations,
      'velocityIterations',
      changedProps
    )
    checkMethodDiff(oldProps.addAnchor, newProps.addAnchor, 'addAnchor', changedProps)
    checkMethodDiff(oldProps.addHook, newProps.addHook, 'addHook', changedProps)
    checkMethodDiff(oldProps.addJoint, newProps.addJoint, 'addJoint', changedProps)
    checkMethodDiff(
      oldProps.setAngularVelocity,
      newProps.setAngularVelocity,
      'setAngularVelocity',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDeltaPosition,
      newProps.setDeltaPosition,
      'setDeltaPosition',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDeltaRotation,
      newProps.setDeltaRotation,
      'setDeltaRotation',
      changedProps
    )
    checkMethodDiff(
      oldProps.setLinearVelocity,
      newProps.setLinearVelocity,
      'setLinearVelocity',
      changedProps
    )
    checkMethodDiff(oldProps.setMass, newProps.setMass, 'setMass', changedProps)
    checkMethodDiff(oldProps.setParam, newProps.setParam, 'setParam', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export class FiberPhysicsImpostor implements HasPropsHandlers<FiberPhysicsImpostorProps> {
  private propsHandlers: PropsHandler<FiberPhysicsImpostorProps>[]

  constructor() {
    this.propsHandlers = [new FiberPhysicsImpostorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPhysicsImpostorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPhysicsImpostorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PhysicsImpostor',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'object',
        type: 'BabylonjsCoreIPhysicsEnabledObject',
        optional: true,
      },
      {
        name: 'type',
        type: 'number',
        optional: false,
      },
      {
        name: '_options',
        type: 'BabylonjsCorePhysicsImpostorParameters',
        optional: true,
      },
      {
        name: '_scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    className: 'FiberPhysicsImpostor',
  }
}

export class FiberPhysicsAggregatePropsHandler implements PropsHandler<FiberPhysicsAggregateProps> {
  getPropertyUpdates(
    oldProps: FiberPhysicsAggregateProps,
    newProps: FiberPhysicsAggregateProps
  ): PropertyUpdate[] | null {
    // skipping type: 'BabylonjsCorePhysicsBody' property (not coded) BabylonjsCorePhysicsAggregate.body.
    // skipping type: 'BabylonjsCorePhysicsMaterial' property (not coded) BabylonjsCorePhysicsAggregate.material.
    // skipping type: 'BabylonjsCorePhysicsShape' property (not coded) BabylonjsCorePhysicsAggregate.shape.
    // skipping type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCorePhysicsAggregate.transformNode.
    // skipping type: 'BabylonjsCorePhysicsShapeType | BabylonjsCorePhysicsShape' property (not coded) BabylonjsCorePhysicsAggregate.type.
    return null // no props to check
  }
}

/**
 * Helper class to create and interact with a PhysicsAggregate.
 * This is a transition object that works like Physics Plugin V1 Impostors.
 * This helper instanciate all mandatory physics objects to get a body/shape and material.
 * It's less efficient that handling body and shapes independently but for prototyping or
 * a small numbers of physics objects, it's good enough.
 *
 * This code has been generated
 */
export class FiberPhysicsAggregate implements HasPropsHandlers<FiberPhysicsAggregateProps> {
  private propsHandlers: PropsHandler<FiberPhysicsAggregateProps>[]

  constructor() {
    this.propsHandlers = [new FiberPhysicsAggregatePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPhysicsAggregateProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPhysicsAggregateProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PhysicsAggregate',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'transformNode',
        type: 'BabylonjsCoreTransformNode',
        optional: true,
      },
      {
        name: 'type',
        type: 'BabylonjsCorePhysicsShapeType | BabylonjsCorePhysicsShape',
        optional: false,
      },
      {
        name: '_options',
        type: 'BabylonjsCorePhysicsAggregateParameters',
        optional: true,
      },
      {
        name: '_scene',
        type: 'BabylonjsCoreScene',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    className: 'FiberPhysicsAggregate',
  }
}

export class FiberVRExperienceHelperPropsHandler
  implements PropsHandler<FiberVRExperienceHelperProps>
{
  getPropertyUpdates(
    oldProps: FiberVRExperienceHelperProps,
    newProps: FiberVRExperienceHelperProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.displayGaze, newProps.displayGaze, 'displayGaze', changedProps)
    checkPrimitiveDiff(
      oldProps.displayLaserPointer,
      newProps.displayLaserPointer,
      'displayLaserPointer',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableGazeEvenWhenNoPointerLock,
      newProps.enableGazeEvenWhenNoPointerLock,
      'enableGazeEvenWhenNoPointerLock',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.exitVROnDoubleTap,
      newProps.exitVROnDoubleTap,
      'exitVROnDoubleTap',
      changedProps
    )
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.gazeTrackerMesh.
    checkLambdaDiff(
      oldProps.meshSelectionPredicate,
      newProps.meshSelectionPredicate,
      'meshSelectionPredicate',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterCameraTeleport,
      newProps.onAfterCameraTeleport,
      'onAfterCameraTeleport',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterEnteringVRObservable,
      newProps.onAfterEnteringVRObservable,
      'onAfterEnteringVRObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeCameraTeleport,
      newProps.onBeforeCameraTeleport,
      'onBeforeCameraTeleport',
      changedProps
    )
    checkObservableDiff(
      oldProps.onEnteringVRObservable,
      newProps.onEnteringVRObservable,
      'onEnteringVRObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onExitingVRObservable,
      newProps.onExitingVRObservable,
      'onExitingVRObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewMeshPicked,
      newProps.onNewMeshPicked,
      'onNewMeshPicked',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewMeshSelected,
      newProps.onNewMeshSelected,
      'onNewMeshSelected',
      changedProps
    )
    checkObservableDiff(
      oldProps.onSelectedMeshUnselected,
      newProps.onSelectedMeshUnselected,
      'onSelectedMeshUnselected',
      changedProps
    )
    checkVector3Diff(oldProps.position, newProps.position, 'position', true, changedProps)
    checkLambdaDiff(
      oldProps.raySelectionPredicate,
      newProps.raySelectionPredicate,
      'raySelectionPredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.requestPointerLockOnFullScreen,
      newProps.requestPointerLockOnFullScreen,
      'requestPointerLockOnFullScreen',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.teleportationEnabled,
      newProps.teleportationEnabled,
      'teleportationEnabled',
      changedProps
    )
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.teleportationTarget.
    checkPrimitiveDiff(
      oldProps.updateControllerLaserColor,
      newProps.updateControllerLaserColor,
      'updateControllerLaserColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateGazeTrackerColor,
      newProps.updateGazeTrackerColor,
      'updateGazeTrackerColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateGazeTrackerScale,
      newProps.updateGazeTrackerScale,
      'updateGazeTrackerScale',
      changedProps
    )
    // type: 'BabylonjsCoreVRExperienceHelperOptions' property (not coded) BabylonjsCoreVRExperienceHelper.webVROptions.
    // type: 'BabylonjsCoreWebXRDefaultExperience' property (not coded) BabylonjsCoreVRExperienceHelper.xr.
    checkPrimitiveDiff(oldProps.xrTestDone, newProps.xrTestDone, 'xrTestDone', changedProps)
    checkMethodDiff(oldProps.addFloorMesh, newProps.addFloorMesh, 'addFloorMesh', changedProps)
    checkMethodDiff(
      oldProps.enableTeleportation,
      newProps.enableTeleportation,
      'enableTeleportation',
      changedProps
    )
    checkMethodDiff(oldProps.setGazeColor, newProps.setGazeColor, 'setGazeColor', changedProps)
    checkMethodDiff(oldProps.setLaserColor, newProps.setLaserColor, 'setLaserColor', changedProps)
    checkMethodDiff(
      oldProps.setLaserLightingState,
      newProps.setLaserLightingState,
      'setLaserLightingState',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Helps to quickly add VR support to an existing scene.
 * See https://doc.babylonjs.com/features/featuresDeepDive/cameras/webVRHelper
 *
 * This code has been generated
 */
export class FiberVRExperienceHelper implements HasPropsHandlers<FiberVRExperienceHelperProps> {
  private propsHandlers: PropsHandler<FiberVRExperienceHelperProps>[]

  constructor() {
    this.propsHandlers = [new FiberVRExperienceHelperPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberVRExperienceHelperProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberVRExperienceHelperProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'VRExperienceHelper',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'webVROptions',
        type: 'BabylonjsCoreVRExperienceHelperOptions',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberVRExperienceHelper',
  }
}

export class FiberDynamicTerrainPropsHandler implements PropsHandler<FiberDynamicTerrainProps> {
  getPropertyUpdates(
    oldProps: FiberDynamicTerrainProps,
    newProps: FiberDynamicTerrainProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreCamera' property (not coded) ExtensionsDynamicTerrain.camera.
    checkPrimitiveDiff(
      oldProps.cameraLODCorrection,
      newProps.cameraLODCorrection,
      'cameraLODCorrection',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.computeNormals,
      newProps.computeNormals,
      'computeNormals',
      changedProps
    )
    checkPrimitiveDiff(oldProps.initialLOD, newProps.initialLOD, 'initialLOD', changedProps)
    checkPrimitiveDiff(
      oldProps.isAlwaysVisible,
      newProps.isAlwaysVisible,
      'isAlwaysVisible',
      changedProps
    )
    checkNumericArrayDiff(oldProps.LODLimits, newProps.LODLimits, 'LODLimits', changedProps)
    checkPrimitiveDiff(oldProps.LODNegativeX, newProps.LODNegativeX, 'LODNegativeX', changedProps)
    checkPrimitiveDiff(oldProps.LODNegativeZ, newProps.LODNegativeZ, 'LODNegativeZ', changedProps)
    checkPrimitiveDiff(oldProps.LODPositiveX, newProps.LODPositiveX, 'LODPositiveX', changedProps)
    checkPrimitiveDiff(oldProps.LODPositiveZ, newProps.LODPositiveZ, 'LODPositiveZ', changedProps)
    // type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapColors.
    // type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapData.
    // type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapNormals.
    checkPrimitiveDiff(oldProps.mapSubX, newProps.mapSubX, 'mapSubX', changedProps)
    checkPrimitiveDiff(oldProps.mapSubZ, newProps.mapSubZ, 'mapSubZ', changedProps)
    // type: 'number[] | Float32Array' property (not coded) ExtensionsDynamicTerrain.mapUVs.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(
      oldProps.precomputeNormalsFromMap,
      newProps.precomputeNormalsFromMap,
      'precomputeNormalsFromMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.refreshEveryFrame,
      newProps.refreshEveryFrame,
      'refreshEveryFrame',
      changedProps
    )
    // type: '{ x: number; z: number; }' property (not coded) ExtensionsDynamicTerrain.shiftFromCamera.
    checkPrimitiveDiff(
      oldProps.subToleranceX,
      newProps.subToleranceX,
      'subToleranceX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.subToleranceZ,
      newProps.subToleranceZ,
      'subToleranceZ',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useCustomVertexFunction,
      newProps.useCustomVertexFunction,
      'useCustomVertexFunction',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/** This code has been generated */
export class FiberDynamicTerrain implements HasPropsHandlers<FiberDynamicTerrainProps> {
  private propsHandlers: PropsHandler<FiberDynamicTerrainProps>[]

  constructor() {
    this.propsHandlers = [new FiberDynamicTerrainPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberDynamicTerrainProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberDynamicTerrainProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DynamicTerrain',
    namespace: './extensions/DynamicTerrain',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'terrainSub',
            type: 'number',
            optional: true,
          },
          {
            name: 'mapData',
            type: 'number[] | Float32Array',
            optional: true,
          },
          {
            name: 'mapSubX',
            type: 'number',
            optional: true,
          },
          {
            name: 'mapSubZ',
            type: 'number',
            optional: true,
          },
          {
            name: 'mapUVs',
            type: 'number[] | Float32Array',
            optional: true,
          },
          {
            name: 'mapColors',
            type: 'number[] | Float32Array',
            optional: true,
          },
          {
            name: 'mapNormals',
            type: 'number[] | Float32Array',
            optional: true,
          },
          {
            name: 'invertSide',
            type: 'boolean',
            optional: true,
          },
          {
            name: 'camera',
            type: 'BabylonjsCoreCamera',
            optional: true,
          },
          {
            name: 'SPmapData',
            type: 'number[][] | Float32Array[]',
            optional: true,
          },
          {
            name: 'sps',
            type: 'BabylonjsCoreSolidParticleSystem',
            optional: true,
          },
          {
            name: 'SPcolorData',
            type: 'number[][] | Float32Array[]',
            optional: true,
          },
          {
            name: 'SPuvData',
            type: 'number[][] | Float32Array[]',
            optional: true,
          },
          {
            name: 'intializedCallback',
            type: 'any',
            optional: true,
          },
        ],
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    acceptsMaterials: true,
    className: 'FiberDynamicTerrain',
  }
}

export class FiberPointsCloudSystemPropsHandler
  implements PropsHandler<FiberPointsCloudSystemProps>
{
  getPropertyUpdates(
    oldProps: FiberPointsCloudSystemProps,
    newProps: FiberPointsCloudSystemProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.computeBoundingBox,
      newProps.computeBoundingBox,
      'computeBoundingBox',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.computeParticleColor,
      newProps.computeParticleColor,
      'computeParticleColor',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.computeParticleRotation,
      newProps.computeParticleRotation,
      'computeParticleRotation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.computeParticleTexture,
      newProps.computeParticleTexture,
      'computeParticleTexture',
      changedProps
    )
    checkPrimitiveDiff(oldProps.counter, newProps.counter, 'counter', changedProps)
    checkPrimitiveDiff(
      oldProps.isAlwaysVisible,
      newProps.isAlwaysVisible,
      'isAlwaysVisible',
      changedProps
    )
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCorePointsCloudSystem.mesh.
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.nbParticles, newProps.nbParticles, 'nbParticles', changedProps)
    // type: 'BabylonjsCoreCloudPoint[]' property (not coded) BabylonjsCorePointsCloudSystem.particles.
    // type: 'any' property (not coded) BabylonjsCorePointsCloudSystem.vars.
    checkMethodDiff(oldProps.addPoints, newProps.addPoints, 'addPoints', changedProps)
    checkMethodDiff(
      oldProps.addSurfacePoints,
      newProps.addSurfacePoints,
      'addSurfacePoints',
      changedProps
    )
    checkMethodDiff(
      oldProps.addVolumePoints,
      newProps.addVolumePoints,
      'addVolumePoints',
      changedProps
    )
    checkMethodDiff(oldProps.setParticles, newProps.setParticles, 'setParticles', changedProps)
    checkMethodDiff(
      oldProps.setVisibilityBox,
      newProps.setVisibilityBox,
      'setVisibilityBox',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The PointCloudSystem (PCS) is a single updatable mesh. The points corresponding to the vertices of this big mesh.
 * As it is just a mesh, the PointCloudSystem has all the same properties as any other BJS mesh : not more, not less. It can be scaled, rotated, translated, enlighted, textured, moved, etc.
 *
 * The PointCloudSystem is also a particle system, with each point being a particle. It provides some methods to manage the particles.
 * However it is behavior agnostic. This means it has no emitter, no particle physics, no particle recycler. You have to implement your own behavior.
 *
 * Full documentation here : TO BE ENTERED
 *
 * This code has been generated
 */
export class FiberPointsCloudSystem implements HasPropsHandlers<FiberPointsCloudSystemProps> {
  private propsHandlers: PropsHandler<FiberPointsCloudSystemProps>[]

  constructor() {
    this.propsHandlers = [new FiberPointsCloudSystemPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPointsCloudSystemProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPointsCloudSystemProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PointsCloudSystem',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'pointSize',
        type: 'number',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'options',
        type: [
          {
            name: 'updatable',
            type: 'boolean',
            optional: true,
          },
        ],
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPointsCloudSystem',
  }
}

export class FiberViewportPropsHandler implements PropsHandler<FiberViewportProps> {
  getPropertyUpdates(
    oldProps: FiberViewportProps,
    newProps: FiberViewportProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(oldProps.width, newProps.width, 'width', changedProps)
    checkPrimitiveDiff(oldProps.x, newProps.x, 'x', changedProps)
    checkPrimitiveDiff(oldProps.y, newProps.y, 'y', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to represent a viewport on screen
 *
 * This code has been generated
 */
export class FiberViewport implements HasPropsHandlers<FiberViewportProps> {
  private propsHandlers: PropsHandler<FiberViewportProps>[]

  constructor() {
    this.propsHandlers = [new FiberViewportPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberViewportProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberViewportProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Viewport',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'x',
        type: 'number',
        optional: false,
      },
      {
        name: 'y',
        type: 'number',
        optional: false,
      },
      {
        name: 'width',
        type: 'number',
        optional: false,
      },
      {
        name: 'height',
        type: 'number',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberViewport',
  }
}

export class FiberUtilityLayerRendererPropsHandler
  implements PropsHandler<FiberUtilityLayerRendererProps>
{
  getPropertyUpdates(
    oldProps: FiberUtilityLayerRendererProps,
    newProps: FiberUtilityLayerRendererProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkLambdaDiff(
      oldProps.mainSceneTrackerPredicate,
      newProps.mainSceneTrackerPredicate,
      'mainSceneTrackerPredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.onlyCheckPointerDownEvents,
      newProps.onlyCheckPointerDownEvents,
      'onlyCheckPointerDownEvents',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPointerOutObservable,
      newProps.onPointerOutObservable,
      'onPointerOutObservable',
      changedProps
    )
    // type: 'BabylonjsCoreScene' property (not coded) BabylonjsCoreUtilityLayerRenderer.originalScene.
    checkPrimitiveDiff(
      oldProps.pickingEnabled,
      newProps.pickingEnabled,
      'pickingEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pickUtilitySceneFirst,
      newProps.pickUtilitySceneFirst,
      'pickUtilitySceneFirst',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.processAllEvents,
      newProps.processAllEvents,
      'processAllEvents',
      changedProps
    )
    checkPrimitiveDiff(oldProps.shouldRender, newProps.shouldRender, 'shouldRender', changedProps)
    // type: 'BabylonjsCoreScene' property (not coded) BabylonjsCoreUtilityLayerRenderer.utilityLayerScene.
    checkMethodDiff(
      oldProps.setRenderCamera,
      newProps.setRenderCamera,
      'setRenderCamera',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Renders a layer on top of an existing scene
 *
 * This code has been generated
 */
export class FiberUtilityLayerRenderer implements HasPropsHandlers<FiberUtilityLayerRendererProps> {
  private propsHandlers: PropsHandler<FiberUtilityLayerRendererProps>[]

  constructor() {
    this.propsHandlers = [new FiberUtilityLayerRendererPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberUtilityLayerRendererProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberUtilityLayerRendererProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'UtilityLayerRenderer',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'originalScene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'handleEvents',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isUtilityLayerRenderer: true,
    className: 'FiberUtilityLayerRenderer',
  }
}

export class FiberMaterialPluginBasePropsHandler
  implements PropsHandler<FiberMaterialPluginBaseProps>
{
  getPropertyUpdates(
    oldProps: FiberMaterialPluginBaseProps,
    newProps: FiberMaterialPluginBaseProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    checkPrimitiveDiff(oldProps.priority, newProps.priority, 'priority', changedProps)
    checkPrimitiveDiff(
      oldProps.registerForExtraEvents,
      newProps.registerForExtraEvents,
      'registerForExtraEvents',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.resolveIncludes,
      newProps.resolveIncludes,
      'resolveIncludes',
      changedProps
    )
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Base class for material plugins.
 *
 * This code has been generated
 */
export class FiberMaterialPluginBase implements HasPropsHandlers<FiberMaterialPluginBaseProps> {
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [new FiberMaterialPluginBasePropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MaterialPluginBase',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCoreMaterial',
        optional: false,
      },
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'priority',
        type: 'number',
        optional: false,
      },
      {
        name: 'defines',
        type: '{ [key: string]: any; }',
        optional: true,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'enable',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'resolveIncludes',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberMaterialPluginBase',
  }
}

export class FiberShadowGeneratorPropsHandler implements PropsHandler<FiberShadowGeneratorProps> {
  getPropertyUpdates(
    oldProps: FiberShadowGeneratorProps,
    newProps: FiberShadowGeneratorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.bias, newProps.bias, 'bias', changedProps)
    checkPrimitiveDiff(
      oldProps.blurBoxOffset,
      newProps.blurBoxOffset,
      'blurBoxOffset',
      changedProps
    )
    checkPrimitiveDiff(oldProps.blurKernel, newProps.blurKernel, 'blurKernel', changedProps)
    checkPrimitiveDiff(oldProps.blurScale, newProps.blurScale, 'blurScale', changedProps)
    checkPrimitiveDiff(
      oldProps.contactHardeningLightSizeUVRatio,
      newProps.contactHardeningLightSizeUVRatio,
      'contactHardeningLightSizeUVRatio',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customAllowRendering,
      newProps.customAllowRendering,
      'customAllowRendering',
      changedProps
    )
    // type: 'BabylonjsCoreICustomShaderOptions' property (not coded) BabylonjsCoreShadowGenerator.customShaderOptions.
    checkPrimitiveDiff(oldProps.darkness, newProps.darkness, 'darkness', changedProps)
    checkPrimitiveDiff(oldProps.depthScale, newProps.depthScale, 'depthScale', changedProps)
    checkPrimitiveDiff(
      oldProps.enableSoftTransparentShadow,
      newProps.enableSoftTransparentShadow,
      'enableSoftTransparentShadow',
      changedProps
    )
    checkPrimitiveDiff(oldProps.filter, newProps.filter, 'filter', changedProps)
    checkPrimitiveDiff(
      oldProps.filteringQuality,
      newProps.filteringQuality,
      'filteringQuality',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceBackFacesOnly,
      newProps.forceBackFacesOnly,
      'forceBackFacesOnly',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.frustumEdgeFalloff,
      newProps.frustumEdgeFalloff,
      'frustumEdgeFalloff',
      changedProps
    )
    checkPrimitiveDiff(oldProps.id, newProps.id, 'id', changedProps)
    checkPrimitiveDiff(oldProps.mapSize, newProps.mapSize, 'mapSize', changedProps)
    checkPrimitiveDiff(oldProps.normalBias, newProps.normalBias, 'normalBias', changedProps)
    checkObservableDiff(
      oldProps.onAfterShadowMapRenderMeshObservable,
      newProps.onAfterShadowMapRenderMeshObservable,
      'onAfterShadowMapRenderMeshObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterShadowMapRenderObservable,
      newProps.onAfterShadowMapRenderObservable,
      'onAfterShadowMapRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeShadowMapRenderMeshObservable,
      newProps.onBeforeShadowMapRenderMeshObservable,
      'onBeforeShadowMapRenderMeshObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeShadowMapRenderObservable,
      newProps.onBeforeShadowMapRenderObservable,
      'onBeforeShadowMapRenderObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.transparencyShadow,
      newProps.transparencyShadow,
      'transparencyShadow',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useBlurCloseExponentialShadowMap,
      newProps.useBlurCloseExponentialShadowMap,
      'useBlurCloseExponentialShadowMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useBlurExponentialShadowMap,
      newProps.useBlurExponentialShadowMap,
      'useBlurExponentialShadowMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useCloseExponentialShadowMap,
      newProps.useCloseExponentialShadowMap,
      'useCloseExponentialShadowMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useContactHardeningShadow,
      newProps.useContactHardeningShadow,
      'useContactHardeningShadow',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useExponentialShadowMap,
      newProps.useExponentialShadowMap,
      'useExponentialShadowMap',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useKernelBlur,
      newProps.useKernelBlur,
      'useKernelBlur',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useOpacityTextureForTransparentShadow,
      newProps.useOpacityTextureForTransparentShadow,
      'useOpacityTextureForTransparentShadow',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.usePercentageCloserFiltering,
      newProps.usePercentageCloserFiltering,
      'usePercentageCloserFiltering',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.usePoissonSampling,
      newProps.usePoissonSampling,
      'usePoissonSampling',
      changedProps
    )
    checkMethodDiff(
      oldProps.addShadowCaster,
      newProps.addShadowCaster,
      'addShadowCaster',
      changedProps
    )
    checkMethodDiff(oldProps.setDarkness, newProps.setDarkness, 'setDarkness', changedProps)
    checkMethodDiff(
      oldProps.setTransparencyShadow,
      newProps.setTransparencyShadow,
      'setTransparencyShadow',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows
 *
 * This code has been generated
 */
export class FiberShadowGenerator implements HasPropsHandlers<FiberShadowGeneratorProps> {
  private propsHandlers: PropsHandler<FiberShadowGeneratorProps>[]

  constructor() {
    this.propsHandlers = [new FiberShadowGeneratorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberShadowGeneratorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberShadowGeneratorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ShadowGenerator',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'mapSize',
        type: 'number',
        optional: false,
      },
      {
        name: 'light',
        type: 'BabylonjsCoreIShadowLight',
        optional: true,
      },
      {
        name: 'usefullFloatFirst',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'useRedTextureType',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    isShadowGenerator: true,
    className: 'FiberShadowGenerator',
  }
}

export class FiberCascadedShadowGeneratorPropsHandler
  implements PropsHandler<FiberCascadedShadowGeneratorProps>
{
  getPropertyUpdates(
    oldProps: FiberCascadedShadowGeneratorProps,
    newProps: FiberCascadedShadowGeneratorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.autoCalcDepthBounds,
      newProps.autoCalcDepthBounds,
      'autoCalcDepthBounds',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.autoCalcDepthBoundsRefreshRate,
      newProps.autoCalcDepthBoundsRefreshRate,
      'autoCalcDepthBoundsRefreshRate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.cascadeBlendPercentage,
      newProps.cascadeBlendPercentage,
      'cascadeBlendPercentage',
      changedProps
    )
    checkPrimitiveDiff(oldProps.debug, newProps.debug, 'debug', changedProps)
    checkPrimitiveDiff(oldProps.depthClamp, newProps.depthClamp, 'depthClamp', changedProps)
    checkPrimitiveDiff(
      oldProps.freezeShadowCastersBoundingInfo,
      newProps.freezeShadowCastersBoundingInfo,
      'freezeShadowCastersBoundingInfo',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lambda, newProps.lambda, 'lambda', changedProps)
    checkPrimitiveDiff(oldProps.numCascades, newProps.numCascades, 'numCascades', changedProps)
    checkPrimitiveDiff(
      oldProps.penumbraDarkness,
      newProps.penumbraDarkness,
      'penumbraDarkness',
      changedProps
    )
    // type: 'BabylonjsCoreBoundingInfo' property (not coded) BabylonjsCoreCascadedShadowGenerator.shadowCastersBoundingInfo.
    checkPrimitiveDiff(oldProps.shadowMaxZ, newProps.shadowMaxZ, 'shadowMaxZ', changedProps)
    checkPrimitiveDiff(
      oldProps.stabilizeCascades,
      newProps.stabilizeCascades,
      'stabilizeCascades',
      changedProps
    )
    checkMethodDiff(
      oldProps.setDepthRenderer,
      newProps.setDepthRenderer,
      'setDepthRenderer',
      changedProps
    )
    checkMethodDiff(
      oldProps.setMinMaxDistance,
      newProps.setMinMaxDistance,
      'setMinMaxDistance',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A CSM implementation allowing casting shadows on large scenes.
 * Documentation : https://doc.babylonjs.com/babylon101/cascadedShadows
 * Based on: https://github.com/TheRealMJP/Shadows and https://johanmedestrom.wordpress.com/2016/03/18/opengl-cascaded-shadow-maps/
 *
 * This code has been generated
 */
export class FiberCascadedShadowGenerator
  implements HasPropsHandlers<FiberCascadedShadowGeneratorProps>
{
  private propsHandlers: PropsHandler<FiberCascadedShadowGeneratorProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberCascadedShadowGeneratorPropsHandler(),
      new FiberShadowGeneratorPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberCascadedShadowGeneratorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberCascadedShadowGeneratorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'CascadedShadowGenerator',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'mapSize',
        type: 'number',
        optional: false,
      },
      {
        name: 'light',
        type: 'BabylonjsCoreDirectionalLight',
        optional: true,
      },
      {
        name: 'usefulFloatFirst',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'camera',
        type: 'BabylonjsCoreCamera',
        optional: true,
      },
      {
        name: 'useRedTextureType',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    isShadowGenerator: true,
    className: 'FiberCascadedShadowGenerator',
  }
}

export class FiberEngineViewPropsHandler implements PropsHandler<FiberEngineViewProps> {
  getPropertyUpdates(
    oldProps: FiberEngineViewProps,
    newProps: FiberEngineViewProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreCamera | BabylonjsCoreCamera[]' property (not coded) BabylonjsCoreEngineView.camera.
    checkPrimitiveDiff(
      oldProps.clearBeforeCopy,
      newProps.clearBeforeCopy,
      'clearBeforeCopy',
      changedProps
    )
    checkLambdaDiff(oldProps.customResize, newProps.customResize, 'customResize', changedProps)
    checkPrimitiveDiff(oldProps.enabled, newProps.enabled, 'enabled', changedProps)
    // type: 'HTMLCanvasElement' property (not coded) BabylonjsCoreEngineView.target.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Class used to define an additional view for the engine
 *
 * This code has been generated
 */
export class FiberEngineView implements HasPropsHandlers<FiberEngineViewProps> {
  private propsHandlers: PropsHandler<FiberEngineViewProps>[]

  constructor() {
    this.propsHandlers = [new FiberEngineViewPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberEngineViewProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberEngineViewProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'EngineView',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    delayCreation: true,
    className: 'FiberEngineView',
  }
}

export class FiberGizmoManagerPropsHandler implements PropsHandler<FiberGizmoManagerProps> {
  getPropertyUpdates(
    oldProps: FiberGizmoManagerProps,
    newProps: FiberGizmoManagerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreGizmoManager.additionalTransformNode.
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreGizmoManager.attachableMeshes.
    // type: 'BabylonjsCoreNode[]' property (not coded) BabylonjsCoreGizmoManager.attachableNodes.
    // type: 'BabylonjsCoreSixDofDragBehavior' property (not coded) BabylonjsCoreGizmoManager.boundingBoxDragBehavior.
    checkPrimitiveDiff(
      oldProps.boundingBoxGizmoEnabled,
      newProps.boundingBoxGizmoEnabled,
      'boundingBoxGizmoEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.clearGizmoOnEmptyPointerEvent,
      newProps.clearGizmoOnEmptyPointerEvent,
      'clearGizmoOnEmptyPointerEvent',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.coordinatesMode,
      newProps.coordinatesMode,
      'coordinatesMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.enableAutoPicking,
      newProps.enableAutoPicking,
      'enableAutoPicking',
      changedProps
    )
    // type: '{ positionGizmo: BabylonjsCoreIPositionGizmo; rotationGizmo: BabylonjsCoreIRotationGizmo; scaleGizmo: BabylonjsCoreIScaleGizmo; boundingBoxGizmo: BabylonjsCoreIBoundingBoxGizmo; }' property (not coded) BabylonjsCoreGizmoManager.gizmos.
    checkObservableDiff(
      oldProps.onAttachedToMeshObservable,
      newProps.onAttachedToMeshObservable,
      'onAttachedToMeshObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAttachedToNodeObservable,
      newProps.onAttachedToNodeObservable,
      'onAttachedToNodeObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.positionGizmoEnabled,
      newProps.positionGizmoEnabled,
      'positionGizmoEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotationGizmoEnabled,
      newProps.rotationGizmoEnabled,
      'rotationGizmoEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.scaleGizmoEnabled,
      newProps.scaleGizmoEnabled,
      'scaleGizmoEnabled',
      changedProps
    )
    checkPrimitiveDiff(oldProps.scaleRatio, newProps.scaleRatio, 'scaleRatio', changedProps)
    checkPrimitiveDiff(
      oldProps.usePointerToAttachGizmos,
      newProps.usePointerToAttachGizmos,
      'usePointerToAttachGizmos',
      changedProps
    )
    checkMethodDiff(
      oldProps.addToAxisCache,
      newProps.addToAxisCache,
      'addToAxisCache',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Helps setup gizmo's in the scene to rotate/scale/position nodes
 *
 * This code has been generated
 */
export class FiberGizmoManager implements HasPropsHandlers<FiberGizmoManagerProps> {
  private propsHandlers: PropsHandler<FiberGizmoManagerProps>[]

  constructor() {
    this.propsHandlers = [new FiberGizmoManagerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberGizmoManagerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberGizmoManagerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'GizmoManager',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: '_scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'thickness',
        type: 'number',
        optional: true,
      },
      {
        name: 'utilityLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
      {
        name: 'keepDepthUtilityLayer',
        type: 'BabylonjsCoreUtilityLayerRenderer',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberGizmoManager',
  }
}

export class FiberLayerPropsHandler implements PropsHandler<FiberLayerProps> {
  getPropertyUpdates(
    oldProps: FiberLayerProps,
    newProps: FiberLayerProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.alphaBlendingMode,
      newProps.alphaBlendingMode,
      'alphaBlendingMode',
      changedProps
    )
    checkPrimitiveDiff(oldProps.alphaTest, newProps.alphaTest, 'alphaTest', changedProps)
    checkPrimitiveDiff(
      oldProps.applyPostProcess,
      newProps.applyPostProcess,
      'applyPostProcess',
      changedProps
    )
    checkColor4Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.isBackground, newProps.isBackground, 'isBackground', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(oldProps.layerMask, newProps.layerMask, 'layerMask', changedProps)
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreLayer.offset.
    checkLambdaDiff(oldProps.onAfterRender, newProps.onAfterRender, 'onAfterRender', changedProps)
    checkObservableDiff(
      oldProps.onAfterRenderObservable,
      newProps.onAfterRenderObservable,
      'onAfterRenderObservable',
      changedProps
    )
    checkLambdaDiff(
      oldProps.onBeforeRender,
      newProps.onBeforeRender,
      'onBeforeRender',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderObservable,
      newProps.onBeforeRenderObservable,
      'onBeforeRenderObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderOnlyInRenderTargetTextures,
      newProps.renderOnlyInRenderTargetTextures,
      'renderOnlyInRenderTargetTextures',
      changedProps
    )
    // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreLayer.renderTargetTextures.
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreLayer.scale.
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This represents a full screen 2d layer.
 * This can be useful to display a picture in the  background of your scene for instance.
 *
 * This code has been generated
 */
export class FiberLayer implements HasPropsHandlers<FiberLayerProps> {
  private propsHandlers: PropsHandler<FiberLayerProps>[]

  constructor() {
    this.propsHandlers = [new FiberLayerPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberLayerProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberLayerProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'Layer',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'name',
        type: 'string',
        optional: false,
      },
      {
        name: 'imgUrl',
        type: 'string',
        optional: false,
      },
      {
        name: 'scene',
        type: 'BabylonjsCoreScene',
        optional: false,
      },
      {
        name: 'isBackground',
        type: 'boolean',
        optional: true,
      },
      {
        name: 'color',
        type: 'BabylonjsCoreColor4',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isLayer: true,
    className: 'FiberLayer',
  }
}

export class FiberImageProcessingConfigurationPropsHandler
  implements PropsHandler<FiberImageProcessingConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberImageProcessingConfigurationProps,
    newProps: FiberImageProcessingConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.applyByPostProcess,
      newProps.applyByPostProcess,
      'applyByPostProcess',
      changedProps
    )
    // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreImageProcessingConfiguration.colorCurves.
    checkPrimitiveDiff(
      oldProps.colorCurvesEnabled,
      newProps.colorCurvesEnabled,
      'colorCurvesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.colorGradingBGR,
      newProps.colorGradingBGR,
      'colorGradingBGR',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.colorGradingEnabled,
      newProps.colorGradingEnabled,
      'colorGradingEnabled',
      changedProps
    )
    checkTextureDiff(
      oldProps.colorGradingTexture,
      newProps.colorGradingTexture,
      'colorGradingTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.colorGradingWithGreenDepth,
      newProps.colorGradingWithGreenDepth,
      'colorGradingWithGreenDepth',
      changedProps
    )
    checkPrimitiveDiff(oldProps.contrast, newProps.contrast, 'contrast', changedProps)
    checkPrimitiveDiff(
      oldProps.ditheringEnabled,
      newProps.ditheringEnabled,
      'ditheringEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ditheringIntensity,
      newProps.ditheringIntensity,
      'ditheringIntensity',
      changedProps
    )
    checkPrimitiveDiff(oldProps.exposure, newProps.exposure, 'exposure', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkObservableDiff(
      oldProps.onUpdateParameters,
      newProps.onUpdateParameters,
      'onUpdateParameters',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skipFinalColorClamp,
      newProps.skipFinalColorClamp,
      'skipFinalColorClamp',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.toneMappingEnabled,
      newProps.toneMappingEnabled,
      'toneMappingEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.toneMappingType,
      newProps.toneMappingType,
      'toneMappingType',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteBlendMode,
      newProps.vignetteBlendMode,
      'vignetteBlendMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCameraFov,
      newProps.vignetteCameraFov,
      'vignetteCameraFov',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCenterX,
      newProps.vignetteCenterX,
      'vignetteCenterX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCenterY,
      newProps.vignetteCenterY,
      'vignetteCenterY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCentreX,
      newProps.vignetteCentreX,
      'vignetteCentreX',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteCentreY,
      newProps.vignetteCentreY,
      'vignetteCentreY',
      changedProps
    )
    checkColor4Diff(oldProps.vignetteColor, newProps.vignetteColor, 'vignetteColor', changedProps)
    checkPrimitiveDiff(
      oldProps.vignetteEnabled,
      newProps.vignetteEnabled,
      'vignetteEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteStretch,
      newProps.vignetteStretch,
      'vignetteStretch',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.vignetteWeight,
      newProps.vignetteWeight,
      'vignetteWeight',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * This groups together the common properties used for image processing either in direct forward pass
 * or through post processing effect depending on the use of the image processing pipeline in your scene
 * or not.
 *
 * This code has been generated
 */
export class FiberImageProcessingConfiguration
  implements HasPropsHandlers<FiberImageProcessingConfigurationProps>
{
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberImageProcessingConfigurationProps>[]

  constructor() {
    this.propsHandlers = [new FiberImageProcessingConfigurationPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberImageProcessingConfigurationProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberImageProcessingConfigurationProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'ImageProcessingConfiguration',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberImageProcessingConfiguration',
  }
}

export class FiberPBRClearCoatConfigurationPropsHandler
  implements PropsHandler<FiberPBRClearCoatConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRClearCoatConfigurationProps,
    newProps: FiberPBRClearCoatConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkTextureDiff(oldProps.bumpTexture, newProps.bumpTexture, 'bumpTexture', changedProps)
    checkPrimitiveDiff(
      oldProps.indexOfRefraction,
      newProps.indexOfRefraction,
      'indexOfRefraction',
      changedProps
    )
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.isTintEnabled,
      newProps.isTintEnabled,
      'isTintEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.remapF0OnInterfaceChange,
      newProps.remapF0OnInterfaceChange,
      'remapF0OnInterfaceChange',
      changedProps
    )
    checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    checkTextureDiff(
      oldProps.textureRoughness,
      newProps.textureRoughness,
      'textureRoughness',
      changedProps
    )
    checkColor3Diff(oldProps.tintColor, newProps.tintColor, 'tintColor', changedProps)
    checkPrimitiveDiff(
      oldProps.tintColorAtDistance,
      newProps.tintColorAtDistance,
      'tintColorAtDistance',
      changedProps
    )
    checkTextureDiff(oldProps.tintTexture, newProps.tintTexture, 'tintTexture', changedProps)
    checkPrimitiveDiff(
      oldProps.tintThickness,
      newProps.tintThickness,
      'tintThickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRoughnessFromMainTexture,
      newProps.useRoughnessFromMainTexture,
      'useRoughnessFromMainTexture',
      changedProps
    )
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the clear coat component of the PBR material
 *
 * This code has been generated
 */
export class FiberPBRClearCoatConfiguration
  implements HasPropsHandlers<FiberMaterialPluginBaseProps>
{
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRClearCoatConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRClearCoatConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRClearCoatConfiguration',
  }
}

export class FiberPBRIridescenceConfigurationPropsHandler
  implements PropsHandler<FiberPBRIridescenceConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRIridescenceConfigurationProps,
    newProps: FiberPBRIridescenceConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.indexOfRefraction,
      newProps.indexOfRefraction,
      'indexOfRefraction',
      changedProps
    )
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.maximumThickness,
      newProps.maximumThickness,
      'maximumThickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minimumThickness,
      newProps.minimumThickness,
      'minimumThickness',
      changedProps
    )
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    checkTextureDiff(
      oldProps.thicknessTexture,
      newProps.thicknessTexture,
      'thicknessTexture',
      changedProps
    )
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the iridescence (thin film) component of the PBR material
 *
 * This code has been generated
 */
export class FiberPBRIridescenceConfiguration
  implements HasPropsHandlers<FiberMaterialPluginBaseProps>
{
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRIridescenceConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRIridescenceConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRIridescenceConfiguration',
  }
}

export class FiberPBRAnisotropicConfigurationPropsHandler
  implements PropsHandler<FiberPBRAnisotropicConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRAnisotropicConfigurationProps,
    newProps: FiberPBRAnisotropicConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.angle, newProps.angle, 'angle', changedProps)
    // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCorePBRAnisotropicConfiguration.direction.
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(oldProps.legacy, newProps.legacy, 'legacy', changedProps)
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the anisotropic component of the PBR material
 *
 * This code has been generated
 */
export class FiberPBRAnisotropicConfiguration
  implements HasPropsHandlers<FiberMaterialPluginBaseProps>
{
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRAnisotropicConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRAnisotropicConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRAnisotropicConfiguration',
  }
}

export class FiberPBRBRDFConfigurationPropsHandler
  implements PropsHandler<FiberPBRBRDFConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRBRDFConfigurationProps,
    newProps: FiberPBRBRDFConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.useEnergyConservation,
      newProps.useEnergyConservation,
      'useEnergyConservation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSmithVisibilityHeightCorrelated,
      newProps.useSmithVisibilityHeightCorrelated,
      'useSmithVisibilityHeightCorrelated',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSpecularGlossinessInputEnergyConservation,
      newProps.useSpecularGlossinessInputEnergyConservation,
      'useSpecularGlossinessInputEnergyConservation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useSphericalHarmonics,
      newProps.useSphericalHarmonics,
      'useSphericalHarmonics',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the BRDF component of the PBR material
 *
 * This code has been generated
 */
export class FiberPBRBRDFConfiguration implements HasPropsHandlers<FiberMaterialPluginBaseProps> {
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRBRDFConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRBRDFConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRBRDFConfiguration',
  }
}

export class FiberPBRSheenConfigurationPropsHandler
  implements PropsHandler<FiberPBRSheenConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRSheenConfigurationProps,
    newProps: FiberPBRSheenConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.albedoScaling,
      newProps.albedoScaling,
      'albedoScaling',
      changedProps
    )
    checkColor3Diff(oldProps.color, newProps.color, 'color', changedProps)
    checkPrimitiveDiff(oldProps.intensity, newProps.intensity, 'intensity', changedProps)
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.linkSheenWithAlbedo,
      newProps.linkSheenWithAlbedo,
      'linkSheenWithAlbedo',
      changedProps
    )
    checkPrimitiveDiff(oldProps.roughness, newProps.roughness, 'roughness', changedProps)
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    checkTextureDiff(
      oldProps.textureRoughness,
      newProps.textureRoughness,
      'textureRoughness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRoughnessFromMainTexture,
      newProps.useRoughnessFromMainTexture,
      'useRoughnessFromMainTexture',
      changedProps
    )
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the sheen component of the PBR material.
 *
 * This code has been generated
 */
export class FiberPBRSheenConfiguration implements HasPropsHandlers<FiberMaterialPluginBaseProps> {
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRSheenConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRSheenConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRSheenConfiguration',
  }
}

export class FiberPBRSubSurfaceConfigurationPropsHandler
  implements PropsHandler<FiberPBRSubSurfaceConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPBRSubSurfaceConfigurationProps,
    newProps: FiberPBRSubSurfaceConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkColor3Diff(
      oldProps.diffusionDistance,
      newProps.diffusionDistance,
      'diffusionDistance',
      changedProps
    )
    checkPrimitiveDiff(oldProps.dispersion, newProps.dispersion, 'dispersion', changedProps)
    checkPrimitiveDiff(
      oldProps.indexOfRefraction,
      newProps.indexOfRefraction,
      'indexOfRefraction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.invertRefractionY,
      newProps.invertRefractionY,
      'invertRefractionY',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isDispersionEnabled,
      newProps.isDispersionEnabled,
      'isDispersionEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isRefractionEnabled,
      newProps.isRefractionEnabled,
      'isRefractionEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isScatteringEnabled,
      newProps.isScatteringEnabled,
      'isScatteringEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.isTranslucencyEnabled,
      newProps.isTranslucencyEnabled,
      'isTranslucencyEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.linkRefractionWithTransparency,
      newProps.linkRefractionWithTransparency,
      'linkRefractionWithTransparency',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maximumThickness,
      newProps.maximumThickness,
      'maximumThickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minimumThickness,
      newProps.minimumThickness,
      'minimumThickness',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.refractionIntensity,
      newProps.refractionIntensity,
      'refractionIntensity',
      changedProps
    )
    checkTextureDiff(
      oldProps.refractionIntensityTexture,
      newProps.refractionIntensityTexture,
      'refractionIntensityTexture',
      changedProps
    )
    checkTextureDiff(
      oldProps.refractionTexture,
      newProps.refractionTexture,
      'refractionTexture',
      changedProps
    )
    checkColor3Diff(
      oldProps.scatteringDiffusionProfile,
      newProps.scatteringDiffusionProfile,
      'scatteringDiffusionProfile',
      changedProps
    )
    checkTextureDiff(
      oldProps.thicknessTexture,
      newProps.thicknessTexture,
      'thicknessTexture',
      changedProps
    )
    checkColor3Diff(oldProps.tintColor, newProps.tintColor, 'tintColor', changedProps)
    checkPrimitiveDiff(
      oldProps.tintColorAtDistance,
      newProps.tintColorAtDistance,
      'tintColorAtDistance',
      changedProps
    )
    checkColor3Diff(
      oldProps.translucencyColor,
      newProps.translucencyColor,
      'translucencyColor',
      changedProps
    )
    checkTextureDiff(
      oldProps.translucencyColorTexture,
      newProps.translucencyColorTexture,
      'translucencyColorTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.translucencyIntensity,
      newProps.translucencyIntensity,
      'translucencyIntensity',
      changedProps
    )
    checkTextureDiff(
      oldProps.translucencyIntensityTexture,
      newProps.translucencyIntensityTexture,
      'translucencyIntensityTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAlbedoToTintRefraction,
      newProps.useAlbedoToTintRefraction,
      'useAlbedoToTintRefraction',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useAlbedoToTintTranslucency,
      newProps.useAlbedoToTintTranslucency,
      'useAlbedoToTintTranslucency',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useGltfStyleTextures,
      newProps.useGltfStyleTextures,
      'useGltfStyleTextures',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useMaskFromThicknessTexture,
      newProps.useMaskFromThicknessTexture,
      'useMaskFromThicknessTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useThicknessAsDepth,
      newProps.useThicknessAsDepth,
      'useThicknessAsDepth',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.volumeIndexOfRefraction,
      newProps.volumeIndexOfRefraction,
      'volumeIndexOfRefraction',
      changedProps
    )
    checkMethodDiff(oldProps.addFallbacks, newProps.addFallbacks, 'addFallbacks', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the sub surface component of the PBR material
 *
 * This code has been generated
 */
export class FiberPBRSubSurfaceConfiguration
  implements HasPropsHandlers<FiberMaterialPluginBaseProps>
{
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberPBRSubSurfaceConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PBRSubSurfaceConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPBRSubSurfaceConfiguration',
  }
}

export class FiberPrePassConfigurationPropsHandler
  implements PropsHandler<FiberPrePassConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberPrePassConfigurationProps,
    newProps: FiberPrePassConfigurationProps
  ): PropertyUpdate[] | null {
    // skipping type: 'BabylonjsCoreMatrix' property (not coded) BabylonjsCorePrePassConfiguration.currentViewProjection.
    // skipping type: '{ [index: number]: Float32Array; }' property (not coded) BabylonjsCorePrePassConfiguration.previousBones.
    // skipping type: 'BabylonjsCoreMatrix' property (not coded) BabylonjsCorePrePassConfiguration.previousViewProjection.
    // skipping type: '{ [index: number]: BabylonjsCoreMatrix; }' property (not coded) BabylonjsCorePrePassConfiguration.previousWorldMatrices.
    return null // no props to check
  }
}

/**
 * Configuration needed for prepass-capable materials
 *
 * This code has been generated
 */
export class FiberPrePassConfiguration implements HasPropsHandlers<FiberPrePassConfigurationProps> {
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberPrePassConfigurationProps>[]

  constructor() {
    this.propsHandlers = [new FiberPrePassConfigurationPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPrePassConfigurationProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPrePassConfigurationProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PrePassConfiguration',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberPrePassConfiguration',
  }
}

export class FiberDetailMapConfigurationPropsHandler
  implements PropsHandler<FiberDetailMapConfigurationProps>
{
  getPropertyUpdates(
    oldProps: FiberDetailMapConfigurationProps,
    newProps: FiberDetailMapConfigurationProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.bumpLevel, newProps.bumpLevel, 'bumpLevel', changedProps)
    checkPrimitiveDiff(
      oldProps.diffuseBlendLevel,
      newProps.diffuseBlendLevel,
      'diffuseBlendLevel',
      changedProps
    )
    checkPrimitiveDiff(oldProps.isEnabled, newProps.isEnabled, 'isEnabled', changedProps)
    checkPrimitiveDiff(
      oldProps.normalBlendMethod,
      newProps.normalBlendMethod,
      'normalBlendMethod',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.roughnessBlendLevel,
      newProps.roughnessBlendLevel,
      'roughnessBlendLevel',
      changedProps
    )
    checkTextureDiff(oldProps.texture, newProps.texture, 'texture', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Plugin that implements the detail map component of a material
 *
 * Inspired from:
 *   Unity: https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@9.0/manual/Mask-Map-and-Detail-Map.html and https://docs.unity3d.com/Manual/StandardShaderMaterialParameterDetail.html
 *   Unreal: https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/HowTo/DetailTexturing/index.html
 *   Cryengine: https://docs.cryengine.com/display/SDKDOC2/Detail+Maps
 *
 * This code has been generated
 */
export class FiberDetailMapConfiguration implements HasPropsHandlers<FiberMaterialPluginBaseProps> {
  public readonly isTargetable = false
  private propsHandlers: PropsHandler<FiberMaterialPluginBaseProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberDetailMapConfigurationPropsHandler(),
      new FiberMaterialPluginBasePropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberMaterialPluginBaseProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMaterialPluginBaseProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DetailMapConfiguration',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'material',
        type: 'BabylonjsCorePBRBaseMaterial | BabylonjsCoreStandardMaterial',
        optional: false,
      },
      {
        name: 'addToPluginList',
        type: 'boolean',
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    className: 'FiberDetailMapConfiguration',
  }
}

export class FiberAutoRotationBehaviorPropsHandler
  implements PropsHandler<FiberAutoRotationBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberAutoRotationBehaviorProps,
    newProps: FiberAutoRotationBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.idleRotationSpeed,
      newProps.idleRotationSpeed,
      'idleRotationSpeed',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.idleRotationSpinupTime,
      newProps.idleRotationSpinupTime,
      'idleRotationSpinupTime',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.idleRotationWaitTime,
      newProps.idleRotationWaitTime,
      'idleRotationWaitTime',
      changedProps
    )
    checkPrimitiveDiff(oldProps.targetAlpha, newProps.targetAlpha, 'targetAlpha', changedProps)
    checkPrimitiveDiff(
      oldProps.zoomStopsAnimation,
      newProps.zoomStopsAnimation,
      'zoomStopsAnimation',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.
 *
 * This code has been generated
 */
export class FiberAutoRotationBehavior implements HasPropsHandlers<FiberAutoRotationBehaviorProps> {
  private propsHandlers: PropsHandler<FiberAutoRotationBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberAutoRotationBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberAutoRotationBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAutoRotationBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AutoRotationBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberAutoRotationBehavior',
  }
}

export class FiberBouncingBehaviorPropsHandler implements PropsHandler<FiberBouncingBehaviorProps> {
  getPropertyUpdates(
    oldProps: FiberBouncingBehaviorProps,
    newProps: FiberBouncingBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.autoTransitionRange,
      newProps.autoTransitionRange,
      'autoTransitionRange',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lowerRadiusTransitionRange,
      newProps.lowerRadiusTransitionRange,
      'lowerRadiusTransitionRange',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.transitionDuration,
      newProps.transitionDuration,
      'transitionDuration',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.upperRadiusTransitionRange,
      newProps.upperRadiusTransitionRange,
      'upperRadiusTransitionRange',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
 *
 * This code has been generated
 */
export class FiberBouncingBehavior implements HasPropsHandlers<FiberBouncingBehaviorProps> {
  private propsHandlers: PropsHandler<FiberBouncingBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberBouncingBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberBouncingBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberBouncingBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BouncingBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberBouncingBehavior',
  }
}

export class FiberFramingBehaviorPropsHandler implements PropsHandler<FiberFramingBehaviorProps> {
  getPropertyUpdates(
    oldProps: FiberFramingBehaviorProps,
    newProps: FiberFramingBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.autoCorrectCameraLimitsAndSensibility,
      newProps.autoCorrectCameraLimitsAndSensibility,
      'autoCorrectCameraLimitsAndSensibility',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.defaultElevation,
      newProps.defaultElevation,
      'defaultElevation',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.elevationReturnTime,
      newProps.elevationReturnTime,
      'elevationReturnTime',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.elevationReturnWaitTime,
      newProps.elevationReturnWaitTime,
      'elevationReturnWaitTime',
      changedProps
    )
    checkPrimitiveDiff(oldProps.framingTime, newProps.framingTime, 'framingTime', changedProps)
    checkPrimitiveDiff(oldProps.mode, newProps.mode, 'mode', changedProps)
    checkObservableDiff(
      oldProps.onTargetFramingAnimationEndObservable,
      newProps.onTargetFramingAnimationEndObservable,
      'onTargetFramingAnimationEndObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.positionScale,
      newProps.positionScale,
      'positionScale',
      changedProps
    )
    checkPrimitiveDiff(oldProps.radiusScale, newProps.radiusScale, 'radiusScale', changedProps)
    checkPrimitiveDiff(
      oldProps.zoomStopsAnimation,
      newProps.zoomStopsAnimation,
      'zoomStopsAnimation',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.
 *
 * This code has been generated
 */
export class FiberFramingBehavior implements HasPropsHandlers<FiberFramingBehaviorProps> {
  private propsHandlers: PropsHandler<FiberFramingBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberFramingBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberFramingBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberFramingBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FramingBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberFramingBehavior',
  }
}

export class FiberAttachToBoxBehaviorPropsHandler
  implements PropsHandler<FiberAttachToBoxBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberAttachToBoxBehaviorProps,
    newProps: FiberAttachToBoxBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.distanceAwayFromBottomOfFace,
      newProps.distanceAwayFromBottomOfFace,
      'distanceAwayFromBottomOfFace',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.distanceAwayFromFace,
      newProps.distanceAwayFromFace,
      'distanceAwayFromFace',
      changedProps
    )
    checkPrimitiveDiff(oldProps.name, newProps.name, 'name', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera
 *
 * This code has been generated
 */
export class FiberAttachToBoxBehavior implements HasPropsHandlers<FiberAttachToBoxBehaviorProps> {
  private propsHandlers: PropsHandler<FiberAttachToBoxBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberAttachToBoxBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberAttachToBoxBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberAttachToBoxBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'AttachToBoxBehavior',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: '_ui',
        type: 'BabylonjsCoreTransformNode',
        optional: false,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberAttachToBoxBehavior',
  }
}

export class FiberBaseSixDofDragBehaviorPropsHandler
  implements PropsHandler<FiberBaseSixDofDragBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberBaseSixDofDragBehaviorProps,
    newProps: FiberBaseSixDofDragBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.allowMultiPointer,
      newProps.allowMultiPointer,
      'allowMultiPointer',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.currentDraggingPointerId,
      newProps.currentDraggingPointerId,
      'currentDraggingPointerId',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.currentDraggingPointerID,
      newProps.currentDraggingPointerID,
      'currentDraggingPointerID',
      changedProps
    )
    checkNumericArrayDiff(
      oldProps.currentDraggingPointerIds,
      newProps.currentDraggingPointerIds,
      'currentDraggingPointerIds',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.detachCameraControls,
      newProps.detachCameraControls,
      'detachCameraControls',
      changedProps
    )
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreBaseSixDofDragBehavior.draggableMeshes.
    checkObservableDiff(
      oldProps.onDragEndObservable,
      newProps.onDragEndObservable,
      'onDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragObservable,
      newProps.onDragObservable,
      'onDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkPrimitiveDiff(oldProps.zDragFactor, newProps.zDragFactor, 'zDragFactor', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Base behavior for six degrees of freedom interactions in XR experiences.
 * Creates virtual meshes that are dragged around
 * And observables for position/rotation changes
 *
 * This code has been generated
 */
export class FiberBaseSixDofDragBehavior
  implements HasPropsHandlers<FiberBaseSixDofDragBehaviorProps>
{
  private propsHandlers: PropsHandler<FiberBaseSixDofDragBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberBaseSixDofDragBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberBaseSixDofDragBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberBaseSixDofDragBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'BaseSixDofDragBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberBaseSixDofDragBehavior',
  }
}

export class FiberFadeInOutBehaviorPropsHandler
  implements PropsHandler<FiberFadeInOutBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberFadeInOutBehaviorProps,
    newProps: FiberFadeInOutBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.delay, newProps.delay, 'delay', changedProps)
    checkPrimitiveDiff(oldProps.fadeInDelay, newProps.fadeInDelay, 'fadeInDelay', changedProps)
    checkPrimitiveDiff(oldProps.fadeInTime, newProps.fadeInTime, 'fadeInTime', changedProps)
    checkPrimitiveDiff(oldProps.fadeOutDelay, newProps.fadeOutDelay, 'fadeOutDelay', changedProps)
    checkPrimitiveDiff(oldProps.fadeOutTime, newProps.fadeOutTime, 'fadeOutTime', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 *
 * This code has been generated
 */
export class FiberFadeInOutBehavior implements HasPropsHandlers<FiberFadeInOutBehaviorProps> {
  private propsHandlers: PropsHandler<FiberFadeInOutBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberFadeInOutBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberFadeInOutBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberFadeInOutBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FadeInOutBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberFadeInOutBehavior',
  }
}

export class FiberFollowBehaviorPropsHandler implements PropsHandler<FiberFollowBehaviorProps> {
  getPropertyUpdates(
    oldProps: FiberFollowBehaviorProps,
    newProps: FiberFollowBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreTransformNode' property (not coded) BabylonjsCoreFollowBehavior.attachedNode.
    checkPrimitiveDiff(
      oldProps.defaultDistance,
      newProps.defaultDistance,
      'defaultDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.fixedVerticalOffset,
      newProps.fixedVerticalOffset,
      'fixedVerticalOffset',
      changedProps
    )
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreFollowBehavior.followedCamera.
    checkPrimitiveDiff(
      oldProps.ignoreAngleClamp,
      newProps.ignoreAngleClamp,
      'ignoreAngleClamp',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreCameraPitchAndRoll,
      newProps.ignoreCameraPitchAndRoll,
      'ignoreCameraPitchAndRoll',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ignoreDistanceClamp,
      newProps.ignoreDistanceClamp,
      'ignoreDistanceClamp',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.interpolatePose,
      newProps.interpolatePose,
      'interpolatePose',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lerpTime, newProps.lerpTime, 'lerpTime', changedProps)
    checkPrimitiveDiff(
      oldProps.maximumDistance,
      newProps.maximumDistance,
      'maximumDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxViewHorizontalDegrees,
      newProps.maxViewHorizontalDegrees,
      'maxViewHorizontalDegrees',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.maxViewVerticalDegrees,
      newProps.maxViewVerticalDegrees,
      'maxViewVerticalDegrees',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.minimumDistance,
      newProps.minimumDistance,
      'minimumDistance',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.orientToCameraDeadzoneDegrees,
      newProps.orientToCameraDeadzoneDegrees,
      'orientToCameraDeadzoneDegrees',
      changedProps
    )
    checkPrimitiveDiff(oldProps.pitchOffset, newProps.pitchOffset, 'pitchOffset', changedProps)
    checkPrimitiveDiff(
      oldProps.useFixedVerticalOffset,
      newProps.useFixedVerticalOffset,
      'useFixedVerticalOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.verticalMaxDistance,
      newProps.verticalMaxDistance,
      'verticalMaxDistance',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that when attached to a mesh will follow a camera
 *
 * This code has been generated
 */
export class FiberFollowBehavior implements HasPropsHandlers<FiberFollowBehaviorProps> {
  private propsHandlers: PropsHandler<FiberFollowBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberFollowBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberFollowBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberFollowBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'FollowBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberFollowBehavior',
  }
}

export class FiberHandConstraintBehaviorPropsHandler
  implements PropsHandler<FiberHandConstraintBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberHandConstraintBehaviorProps,
    newProps: FiberHandConstraintBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.gazeProximityRadius,
      newProps.gazeProximityRadius,
      'gazeProximityRadius',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.handConstraintVisibility,
      newProps.handConstraintVisibility,
      'handConstraintVisibility',
      changedProps
    )
    // type: 'XRHandedness' property (not coded) BabylonjsCoreHandConstraintBehavior.handedness.
    checkPrimitiveDiff(oldProps.lerpTime, newProps.lerpTime, 'lerpTime', changedProps)
    checkPrimitiveDiff(
      oldProps.nodeOrientationMode,
      newProps.nodeOrientationMode,
      'nodeOrientationMode',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.palmUpStrictness,
      newProps.palmUpStrictness,
      'palmUpStrictness',
      changedProps
    )
    checkPrimitiveDiff(oldProps.targetOffset, newProps.targetOffset, 'targetOffset', changedProps)
    checkPrimitiveDiff(oldProps.targetZone, newProps.targetZone, 'targetZone', changedProps)
    checkPrimitiveDiff(
      oldProps.zoneOrientationMode,
      newProps.zoneOrientationMode,
      'zoneOrientationMode',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Hand constraint behavior that makes the attached `TransformNode` follow hands in XR experiences.
 *
 * This code has been generated
 */
export class FiberHandConstraintBehavior
  implements HasPropsHandlers<FiberHandConstraintBehaviorProps>
{
  private propsHandlers: PropsHandler<FiberHandConstraintBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberHandConstraintBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberHandConstraintBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberHandConstraintBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'HandConstraintBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberHandConstraintBehavior',
  }
}

export class FiberMultiPointerScaleBehaviorPropsHandler
  implements PropsHandler<FiberMultiPointerScaleBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberMultiPointerScaleBehaviorProps,
    newProps: FiberMultiPointerScaleBehaviorProps
  ): PropertyUpdate[] | null {
    return null // no props to check
  }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be scaled
 *
 * This code has been generated
 */
export class FiberMultiPointerScaleBehavior
  implements HasPropsHandlers<FiberMultiPointerScaleBehaviorProps>
{
  private propsHandlers: PropsHandler<FiberMultiPointerScaleBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberMultiPointerScaleBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberMultiPointerScaleBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberMultiPointerScaleBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'MultiPointerScaleBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberMultiPointerScaleBehavior',
  }
}

export class FiberPointerDragBehaviorPropsHandler
  implements PropsHandler<FiberPointerDragBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberPointerDragBehaviorProps,
    newProps: FiberPointerDragBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCorePointerDragBehavior.attachedNode.
    checkPrimitiveDiff(
      oldProps.currentDraggingPointerId,
      newProps.currentDraggingPointerId,
      'currentDraggingPointerId',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.currentDraggingPointerID,
      newProps.currentDraggingPointerID,
      'currentDraggingPointerID',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.detachCameraControls,
      newProps.detachCameraControls,
      'detachCameraControls',
      changedProps
    )
    checkNumericArrayDiff(oldProps.dragButtons, newProps.dragButtons, 'dragButtons', changedProps)
    checkPrimitiveDiff(
      oldProps.dragDeltaRatio,
      newProps.dragDeltaRatio,
      'dragDeltaRatio',
      changedProps
    )
    checkPrimitiveDiff(oldProps.dragging, newProps.dragging, 'dragging', changedProps)
    checkPrimitiveDiff(oldProps.enabled, newProps.enabled, 'enabled', changedProps)
    checkVector3Diff(
      oldProps.lastDragPosition,
      newProps.lastDragPosition,
      'lastDragPosition',
      false,
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['lastDragPosition-x'],
      newProps['lastDragPosition-x'],
      'lastDragPosition.x',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['lastDragPosition-y'],
      newProps['lastDragPosition-y'],
      'lastDragPosition.y',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps['lastDragPosition-z'],
      newProps['lastDragPosition-z'],
      'lastDragPosition.z',
      changedProps
    )
    checkPrimitiveDiff(oldProps.maxDragAngle, newProps.maxDragAngle, 'maxDragAngle', changedProps)
    checkPrimitiveDiff(oldProps.moveAttached, newProps.moveAttached, 'moveAttached', changedProps)
    checkObservableDiff(
      oldProps.onDragEndObservable,
      newProps.onDragEndObservable,
      'onDragEndObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragObservable,
      newProps.onDragObservable,
      'onDragObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDragStartObservable,
      newProps.onDragStartObservable,
      'onDragStartObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onEnabledObservable,
      newProps.onEnabledObservable,
      'onEnabledObservable',
      changedProps
    )
    // type: '{ dragAxis?: BabylonjsCoreVector3; dragPlaneNormal?: BabylonjsCoreVector3; }' property (not coded) BabylonjsCorePointerDragBehavior.options.
    checkPrimitiveDiff(
      oldProps.startAndReleaseDragOnPointerEvents,
      newProps.startAndReleaseDragOnPointerEvents,
      'startAndReleaseDragOnPointerEvents',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.updateDragPlane,
      newProps.updateDragPlane,
      'updateDragPlane',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useObjectOrientationForDragging,
      newProps.useObjectOrientationForDragging,
      'useObjectOrientationForDragging',
      changedProps
    )
    checkLambdaDiff(oldProps.validateDrag, newProps.validateDrag, 'validateDrag', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events
 *
 * This code has been generated
 */
export class FiberPointerDragBehavior implements HasPropsHandlers<FiberPointerDragBehaviorProps> {
  private propsHandlers: PropsHandler<FiberPointerDragBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberPointerDragBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberPointerDragBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberPointerDragBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'PointerDragBehavior',
    namespace: '@babylonjs/core',
    parameters: [
      {
        name: 'options',
        type: [
          {
            name: 'dragAxis',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
          {
            name: 'dragPlaneNormal',
            type: 'BabylonjsCoreVector3',
            optional: true,
          },
        ],
        optional: true,
      },
    ],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberPointerDragBehavior',
  }
}

export class FiberSixDofDragBehaviorPropsHandler
  implements PropsHandler<FiberSixDofDragBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberSixDofDragBehaviorProps,
    newProps: FiberSixDofDragBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(
      oldProps.disableMovement,
      newProps.disableMovement,
      'disableMovement',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.dragDeltaRatio,
      newProps.dragDeltaRatio,
      'dragDeltaRatio',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.faceCameraOnDragStart,
      newProps.faceCameraOnDragStart,
      'faceCameraOnDragStart',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPositionChangedObservable,
      newProps.onPositionChangedObservable,
      'onPositionChangedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotateAroundYOnly,
      newProps.rotateAroundYOnly,
      'rotateAroundYOnly',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotateDraggedObject,
      newProps.rotateDraggedObject,
      'rotateDraggedObject',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.rotateWithMotionController,
      newProps.rotateWithMotionController,
      'rotateWithMotionController',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray
 *
 * This code has been generated
 */
export class FiberSixDofDragBehavior implements HasPropsHandlers<FiberSixDofDragBehaviorProps> {
  private propsHandlers: PropsHandler<FiberSixDofDragBehaviorProps>[]

  constructor() {
    this.propsHandlers = [
      new FiberSixDofDragBehaviorPropsHandler(),
      new FiberBaseSixDofDragBehaviorPropsHandler(),
    ]
  }

  getPropsHandlers(): PropsHandler<FiberSixDofDragBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberSixDofDragBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SixDofDragBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberSixDofDragBehavior',
  }
}

export class FiberSurfaceMagnetismBehaviorPropsHandler
  implements PropsHandler<FiberSurfaceMagnetismBehaviorProps>
{
  getPropertyUpdates(
    oldProps: FiberSurfaceMagnetismBehaviorProps,
    newProps: FiberSurfaceMagnetismBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.enabled, newProps.enabled, 'enabled', changedProps)
    checkPrimitiveDiff(
      oldProps.hitNormalOffset,
      newProps.hitNormalOffset,
      'hitNormalOffset',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.interpolatePose,
      newProps.interpolatePose,
      'interpolatePose',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.keepOrientationVertical,
      newProps.keepOrientationVertical,
      'keepOrientationVertical',
      changedProps
    )
    checkPrimitiveDiff(oldProps.lerpTime, newProps.lerpTime, 'lerpTime', changedProps)
    checkPrimitiveDiff(
      oldProps.maxStickingDistance,
      newProps.maxStickingDistance,
      'maxStickingDistance',
      changedProps
    )
    // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreSurfaceMagnetismBehavior.meshes.
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * A behavior that allows a transform node to stick to a surface position/orientation
 *
 * This code has been generated
 */
export class FiberSurfaceMagnetismBehavior
  implements HasPropsHandlers<FiberSurfaceMagnetismBehaviorProps>
{
  private propsHandlers: PropsHandler<FiberSurfaceMagnetismBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberSurfaceMagnetismBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberSurfaceMagnetismBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberSurfaceMagnetismBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'SurfaceMagnetismBehavior',
    namespace: '@babylonjs/core',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberSurfaceMagnetismBehavior',
  }
}

export class FiberDefaultBehaviorPropsHandler implements PropsHandler<FiberDefaultBehaviorProps> {
  getPropertyUpdates(
    oldProps: FiberDefaultBehaviorProps,
    newProps: FiberDefaultBehaviorProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsGuiDefaultBehavior.attachedNode.
    checkPrimitiveDiff(
      oldProps.followBehaviorEnabled,
      newProps.followBehaviorEnabled,
      'followBehaviorEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.sixDofDragBehaviorEnabled,
      newProps.sixDofDragBehaviorEnabled,
      'sixDofDragBehaviorEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.surfaceMagnetismBehaviorEnabled,
      newProps.surfaceMagnetismBehaviorEnabled,
      'surfaceMagnetismBehaviorEnabled',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Default behavior for 3D UI elements.
 * Handles a FollowBehavior, SixDofBehavior and SurfaceMagnetismBehavior
 *
 * This code has been generated
 */
export class FiberDefaultBehavior implements HasPropsHandlers<FiberDefaultBehaviorProps> {
  private propsHandlers: PropsHandler<FiberDefaultBehaviorProps>[]

  constructor() {
    this.propsHandlers = [new FiberDefaultBehaviorPropsHandler()]
  }

  getPropsHandlers(): PropsHandler<FiberDefaultBehaviorProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<FiberDefaultBehaviorProps>): void {
    this.propsHandlers.push(propHandler)
  }

  public static readonly CreateInfo = {
    creationType: 'Constructor',
    libraryLocation: 'DefaultBehavior',
    namespace: '@babylonjs/gui',
    parameters: [],
  }
  public static readonly Metadata: CreatedInstanceMetadata = {
    isBehavior: true,
    className: 'FiberDefaultBehavior',
  }
}

export class FiberScenePropsHandler implements PropsHandler<FiberSceneProps> {
  getPropertyUpdates(
    oldProps: FiberSceneProps,
    newProps: FiberSceneProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreScene.actionManager.
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.activeCamera.
    // type: 'BabylonjsCoreCamera[]' property (not coded) BabylonjsCoreScene.activeCameras.
    checkLambdaDiff(
      oldProps.afterCameraRender,
      newProps.afterCameraRender,
      'afterCameraRender',
      changedProps
    )
    checkLambdaDiff(oldProps.afterRender, newProps.afterRender, 'afterRender', changedProps)
    checkColor3Diff(oldProps.ambientColor, newProps.ambientColor, 'ambientColor', changedProps)
    // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreScene.animationPropertiesOverride.
    checkPrimitiveDiff(
      oldProps.animationsEnabled,
      newProps.animationsEnabled,
      'animationsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.animationTimeScale,
      newProps.animationTimeScale,
      'animationTimeScale',
      changedProps
    )
    checkPrimitiveDiff(oldProps.autoClear, newProps.autoClear, 'autoClear', changedProps)
    checkPrimitiveDiff(
      oldProps.autoClearDepthAndStencil,
      newProps.autoClearDepthAndStencil,
      'autoClearDepthAndStencil',
      changedProps
    )
    checkLambdaDiff(
      oldProps.beforeCameraRender,
      newProps.beforeCameraRender,
      'beforeCameraRender',
      changedProps
    )
    checkLambdaDiff(oldProps.beforeRender, newProps.beforeRender, 'beforeRender', changedProps)
    checkPrimitiveDiff(
      oldProps.blockfreeActiveMeshesAndRenderingGroups,
      newProps.blockfreeActiveMeshesAndRenderingGroups,
      'blockfreeActiveMeshesAndRenderingGroups',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.blockMaterialDirtyMechanism,
      newProps.blockMaterialDirtyMechanism,
      'blockMaterialDirtyMechanism',
      changedProps
    )
    // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.cameraToUseForPointers.
    checkColor4Diff(oldProps.clearColor, newProps.clearColor, 'clearColor', changedProps)
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane2.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane3.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane4.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane5.
    // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane6.
    checkPrimitiveDiff(
      oldProps.collisionsEnabled,
      newProps.collisionsEnabled,
      'collisionsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.constantlyUpdateMeshUnderPointer,
      newProps.constantlyUpdateMeshUnderPointer,
      'constantlyUpdateMeshUnderPointer',
      changedProps
    )
    checkLambdaDiff(
      oldProps.customLODSelector,
      newProps.customLODSelector,
      'customLODSelector',
      changedProps
    )
    // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreScene.customRenderTargets.
    checkPrimitiveDiff(
      oldProps.defaultCursor,
      newProps.defaultCursor,
      'defaultCursor',
      changedProps
    )
    // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreScene.defaultMaterial.
    // type: 'RegExp[]' property (not coded) BabylonjsCoreScene.disableOfflineSupportExceptionRules.
    checkPrimitiveDiff(
      oldProps.dispatchAllSubMeshesOfActiveMeshes,
      newProps.dispatchAllSubMeshesOfActiveMeshes,
      'dispatchAllSubMeshesOfActiveMeshes',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.doNotHandleCursors,
      newProps.doNotHandleCursors,
      'doNotHandleCursors',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.DoubleClickDelay,
      newProps.DoubleClickDelay,
      'DoubleClickDelay',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.DragMovementThreshold,
      newProps.DragMovementThreshold,
      'DragMovementThreshold',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.dumpNextRenderTargets,
      newProps.dumpNextRenderTargets,
      'dumpNextRenderTargets',
      changedProps
    )
    checkTextureDiff(
      oldProps.environmentBRDFTexture,
      newProps.environmentBRDFTexture,
      'environmentBRDFTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.environmentIntensity,
      newProps.environmentIntensity,
      'environmentIntensity',
      changedProps
    )
    checkTextureDiff(
      oldProps.environmentTexture,
      newProps.environmentTexture,
      'environmentTexture',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.ExclusiveDoubleClickMode,
      newProps.ExclusiveDoubleClickMode,
      'ExclusiveDoubleClickMode',
      changedProps
    )
    checkColor3Diff(oldProps.fogColor, newProps.fogColor, 'fogColor', changedProps)
    checkPrimitiveDiff(oldProps.fogDensity, newProps.fogDensity, 'fogDensity', changedProps)
    checkPrimitiveDiff(oldProps.fogEnabled, newProps.fogEnabled, 'fogEnabled', changedProps)
    checkPrimitiveDiff(oldProps.fogEnd, newProps.fogEnd, 'fogEnd', changedProps)
    checkPrimitiveDiff(oldProps.fogMode, newProps.fogMode, 'fogMode', changedProps)
    checkPrimitiveDiff(oldProps.fogStart, newProps.fogStart, 'fogStart', changedProps)
    checkPrimitiveDiff(
      oldProps.forcePointsCloud,
      newProps.forcePointsCloud,
      'forcePointsCloud',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.forceWireframe,
      newProps.forceWireframe,
      'forceWireframe',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getActiveMeshCandidates,
      newProps.getActiveMeshCandidates,
      'getActiveMeshCandidates',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getActiveSubMeshCandidates,
      newProps.getActiveSubMeshCandidates,
      'getActiveSubMeshCandidates',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getCollidingSubMeshCandidates,
      newProps.getCollidingSubMeshCandidates,
      'getCollidingSubMeshCandidates',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getDeterministicFrameTime,
      newProps.getDeterministicFrameTime,
      'getDeterministicFrameTime',
      changedProps
    )
    checkLambdaDiff(
      oldProps.getIntersectingSubMeshCandidates,
      newProps.getIntersectingSubMeshCandidates,
      'getIntersectingSubMeshCandidates',
      changedProps
    )
    checkVector3Diff(oldProps.gravity, newProps.gravity, 'gravity', false, changedProps)
    checkPrimitiveDiff(oldProps['gravity-x'], newProps['gravity-x'], 'gravity.x', changedProps)
    checkPrimitiveDiff(oldProps['gravity-y'], newProps['gravity-y'], 'gravity.y', changedProps)
    checkPrimitiveDiff(oldProps['gravity-z'], newProps['gravity-z'], 'gravity.z', changedProps)
    checkPrimitiveDiff(oldProps.hoverCursor, newProps.hoverCursor, 'hoverCursor', changedProps)
    // type: 'string[]' property (not coded) BabylonjsCoreScene.importedMeshesFiles.
    checkPrimitiveDiff(
      oldProps.lensFlaresEnabled,
      newProps.lensFlaresEnabled,
      'lensFlaresEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.lightsEnabled,
      newProps.lightsEnabled,
      'lightsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.loadingPluginName,
      newProps.loadingPluginName,
      'loadingPluginName',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.LongPressDelay,
      newProps.LongPressDelay,
      'LongPressDelay',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreScene.metadata.
    checkPrimitiveDiff(
      oldProps.needsPreviousWorldMatrices,
      newProps.needsPreviousWorldMatrices,
      'needsPreviousWorldMatrices',
      changedProps
    )
    // type: 'BabylonjsCoreIOfflineProvider' property (not coded) BabylonjsCoreScene.offlineProvider.
    checkObservableDiff(
      oldProps.onActiveCameraChanged,
      newProps.onActiveCameraChanged,
      'onActiveCameraChanged',
      changedProps
    )
    checkObservableDiff(
      oldProps.onActiveCamerasChanged,
      newProps.onActiveCamerasChanged,
      'onActiveCamerasChanged',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterActiveMeshesEvaluationObservable,
      newProps.onAfterActiveMeshesEvaluationObservable,
      'onAfterActiveMeshesEvaluationObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterAnimationsObservable,
      newProps.onAfterAnimationsObservable,
      'onAfterAnimationsObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterCameraRenderObservable,
      newProps.onAfterCameraRenderObservable,
      'onAfterCameraRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterDrawPhaseObservable,
      newProps.onAfterDrawPhaseObservable,
      'onAfterDrawPhaseObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterParticlesRenderingObservable,
      newProps.onAfterParticlesRenderingObservable,
      'onAfterParticlesRenderingObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterPhysicsObservable,
      newProps.onAfterPhysicsObservable,
      'onAfterPhysicsObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterRenderCameraObservable,
      newProps.onAfterRenderCameraObservable,
      'onAfterRenderCameraObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterRenderingGroupObservable,
      newProps.onAfterRenderingGroupObservable,
      'onAfterRenderingGroupObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterRenderObservable,
      newProps.onAfterRenderObservable,
      'onAfterRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterRenderTargetsRenderObservable,
      newProps.onAfterRenderTargetsRenderObservable,
      'onAfterRenderTargetsRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAfterStepObservable,
      newProps.onAfterStepObservable,
      'onAfterStepObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onAnimationFileImportedObservable,
      newProps.onAnimationFileImportedObservable,
      'onAnimationFileImportedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeActiveMeshesEvaluationObservable,
      newProps.onBeforeActiveMeshesEvaluationObservable,
      'onBeforeActiveMeshesEvaluationObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeAnimationsObservable,
      newProps.onBeforeAnimationsObservable,
      'onBeforeAnimationsObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeCameraRenderObservable,
      newProps.onBeforeCameraRenderObservable,
      'onBeforeCameraRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeDrawPhaseObservable,
      newProps.onBeforeDrawPhaseObservable,
      'onBeforeDrawPhaseObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeParticlesRenderingObservable,
      newProps.onBeforeParticlesRenderingObservable,
      'onBeforeParticlesRenderingObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforePhysicsObservable,
      newProps.onBeforePhysicsObservable,
      'onBeforePhysicsObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderingGroupObservable,
      newProps.onBeforeRenderingGroupObservable,
      'onBeforeRenderingGroupObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderObservable,
      newProps.onBeforeRenderObservable,
      'onBeforeRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeRenderTargetsRenderObservable,
      newProps.onBeforeRenderTargetsRenderObservable,
      'onBeforeRenderTargetsRenderObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onBeforeStepObservable,
      newProps.onBeforeStepObservable,
      'onBeforeStepObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onCameraRemovedObservable,
      newProps.onCameraRemovedObservable,
      'onCameraRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onDataLoadedObservable,
      newProps.onDataLoadedObservable,
      'onDataLoadedObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onDispose, newProps.onDispose, 'onDispose', changedProps)
    checkObservableDiff(
      oldProps.onDisposeObservable,
      newProps.onDisposeObservable,
      'onDisposeObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onGeometryRemovedObservable,
      newProps.onGeometryRemovedObservable,
      'onGeometryRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onKeyboardObservable,
      newProps.onKeyboardObservable,
      'onKeyboardObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onLightRemovedObservable,
      newProps.onLightRemovedObservable,
      'onLightRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMaterialRemovedObservable,
      newProps.onMaterialRemovedObservable,
      'onMaterialRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMeshImportedObservable,
      newProps.onMeshImportedObservable,
      'onMeshImportedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMeshRemovedObservable,
      newProps.onMeshRemovedObservable,
      'onMeshRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onMultiMaterialRemovedObservable,
      newProps.onMultiMaterialRemovedObservable,
      'onMultiMaterialRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewCameraAddedObservable,
      newProps.onNewCameraAddedObservable,
      'onNewCameraAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewGeometryAddedObservable,
      newProps.onNewGeometryAddedObservable,
      'onNewGeometryAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewLightAddedObservable,
      newProps.onNewLightAddedObservable,
      'onNewLightAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewMaterialAddedObservable,
      newProps.onNewMaterialAddedObservable,
      'onNewMaterialAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewMeshAddedObservable,
      newProps.onNewMeshAddedObservable,
      'onNewMeshAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewMultiMaterialAddedObservable,
      newProps.onNewMultiMaterialAddedObservable,
      'onNewMultiMaterialAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewSkeletonAddedObservable,
      newProps.onNewSkeletonAddedObservable,
      'onNewSkeletonAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewTextureAddedObservable,
      newProps.onNewTextureAddedObservable,
      'onNewTextureAddedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onNewTransformNodeAddedObservable,
      newProps.onNewTransformNodeAddedObservable,
      'onNewTransformNodeAddedObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onPointerDown, newProps.onPointerDown, 'onPointerDown', changedProps)
    checkLambdaDiff(oldProps.onPointerMove, newProps.onPointerMove, 'onPointerMove', changedProps)
    checkObservableDiff(
      oldProps.onPointerObservable,
      newProps.onPointerObservable,
      'onPointerObservable',
      changedProps
    )
    checkLambdaDiff(oldProps.onPointerPick, newProps.onPointerPick, 'onPointerPick', changedProps)
    checkLambdaDiff(oldProps.onPointerUp, newProps.onPointerUp, 'onPointerUp', changedProps)
    checkObservableDiff(
      oldProps.onPreKeyboardObservable,
      newProps.onPreKeyboardObservable,
      'onPreKeyboardObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onPrePointerObservable,
      newProps.onPrePointerObservable,
      'onPrePointerObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onReadyObservable,
      newProps.onReadyObservable,
      'onReadyObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onScenePerformancePriorityChangedObservable,
      newProps.onScenePerformancePriorityChangedObservable,
      'onScenePerformancePriorityChangedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onSkeletonRemovedObservable,
      newProps.onSkeletonRemovedObservable,
      'onSkeletonRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTextureRemovedObservable,
      newProps.onTextureRemovedObservable,
      'onTextureRemovedObservable',
      changedProps
    )
    checkObservableDiff(
      oldProps.onTransformNodeRemovedObservable,
      newProps.onTransformNodeRemovedObservable,
      'onTransformNodeRemovedObservable',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.particlesEnabled,
      newProps.particlesEnabled,
      'particlesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.performancePriority,
      newProps.performancePriority,
      'performancePriority',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.physicsEnabled,
      newProps.physicsEnabled,
      'physicsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pointerDownFastCheck,
      newProps.pointerDownFastCheck,
      'pointerDownFastCheck',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerDownPredicate,
      newProps.pointerDownPredicate,
      'pointerDownPredicate',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerDownTrianglePredicate,
      newProps.pointerDownTrianglePredicate,
      'pointerDownTrianglePredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pointerMoveFastCheck,
      newProps.pointerMoveFastCheck,
      'pointerMoveFastCheck',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerMovePredicate,
      newProps.pointerMovePredicate,
      'pointerMovePredicate',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerMoveTrianglePredicate,
      newProps.pointerMoveTrianglePredicate,
      'pointerMoveTrianglePredicate',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.pointerUpFastCheck,
      newProps.pointerUpFastCheck,
      'pointerUpFastCheck',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpPredicate,
      newProps.pointerUpPredicate,
      'pointerUpPredicate',
      changedProps
    )
    checkLambdaDiff(
      oldProps.pointerUpTrianglePredicate,
      newProps.pointerUpTrianglePredicate,
      'pointerUpTrianglePredicate',
      changedProps
    )
    checkPrimitiveDiff(oldProps.pointerX, newProps.pointerX, 'pointerX', changedProps)
    checkPrimitiveDiff(oldProps.pointerY, newProps.pointerY, 'pointerY', changedProps)
    checkPrimitiveDiff(
      oldProps.postProcessesEnabled,
      newProps.postProcessesEnabled,
      'postProcessesEnabled',
      changedProps
    )
    // type: 'BabylonjsCorePostProcessManager' property (not coded) BabylonjsCoreScene.postProcessManager.
    checkPrimitiveDiff(
      oldProps.preventDefaultOnPointerDown,
      newProps.preventDefaultOnPointerDown,
      'preventDefaultOnPointerDown',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.preventDefaultOnPointerUp,
      newProps.preventDefaultOnPointerUp,
      'preventDefaultOnPointerUp',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.probesEnabled,
      newProps.probesEnabled,
      'probesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.proceduralTexturesEnabled,
      newProps.proceduralTexturesEnabled,
      'proceduralTexturesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.renderTargetsEnabled,
      newProps.renderTargetsEnabled,
      'renderTargetsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.requireLightSorting,
      newProps.requireLightSorting,
      'requireLightSorting',
      changedProps
    )
    // type: 'any' property (not coded) BabylonjsCoreScene.reservedDataStore.
    checkPrimitiveDiff(
      oldProps.shadowsEnabled,
      newProps.shadowsEnabled,
      'shadowsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skeletonsEnabled,
      newProps.skeletonsEnabled,
      'skeletonsEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skipFrustumClipping,
      newProps.skipFrustumClipping,
      'skipFrustumClipping',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skipPointerDownPicking,
      newProps.skipPointerDownPicking,
      'skipPointerDownPicking',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skipPointerMovePicking,
      newProps.skipPointerMovePicking,
      'skipPointerMovePicking',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.skipPointerUpPicking,
      newProps.skipPointerUpPicking,
      'skipPointerUpPicking',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.spritesEnabled,
      newProps.spritesEnabled,
      'spritesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.texturesEnabled,
      newProps.texturesEnabled,
      'texturesEnabled',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useConstantAnimationDeltaTime,
      newProps.useConstantAnimationDeltaTime,
      'useConstantAnimationDeltaTime',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useDelayedTextureLoading,
      newProps.useDelayedTextureLoading,
      'useDelayedTextureLoading',
      changedProps
    )
    checkPrimitiveDiff(
      oldProps.useRightHandedSystem,
      newProps.useRightHandedSystem,
      'useRightHandedSystem',
      changedProps
    )
    checkMethodDiff(
      oldProps.addActionManager,
      newProps.addActionManager,
      'addActionManager',
      changedProps
    )
    checkMethodDiff(oldProps.addAnimation, newProps.addAnimation, 'addAnimation', changedProps)
    checkMethodDiff(
      oldProps.addAnimationGroup,
      newProps.addAnimationGroup,
      'addAnimationGroup',
      changedProps
    )
    checkMethodDiff(oldProps.addCamera, newProps.addCamera, 'addCamera', changedProps)
    checkMethodDiff(
      oldProps.addExternalData,
      newProps.addExternalData,
      'addExternalData',
      changedProps
    )
    checkMethodDiff(oldProps.addGeometry, newProps.addGeometry, 'addGeometry', changedProps)
    checkMethodDiff(oldProps.addLight, newProps.addLight, 'addLight', changedProps)
    checkMethodDiff(oldProps.addMaterial, newProps.addMaterial, 'addMaterial', changedProps)
    checkMethodDiff(oldProps.addMesh, newProps.addMesh, 'addMesh', changedProps)
    checkMethodDiff(
      oldProps.addMorphTargetManager,
      newProps.addMorphTargetManager,
      'addMorphTargetManager',
      changedProps
    )
    checkMethodDiff(
      oldProps.addMultiMaterial,
      newProps.addMultiMaterial,
      'addMultiMaterial',
      changedProps
    )
    checkMethodDiff(
      oldProps.addParticleSystem,
      newProps.addParticleSystem,
      'addParticleSystem',
      changedProps
    )
    checkMethodDiff(
      oldProps.addPendingData,
      newProps.addPendingData,
      'addPendingData',
      changedProps
    )
    checkMethodDiff(oldProps.addSkeleton, newProps.addSkeleton, 'addSkeleton', changedProps)
    checkMethodDiff(oldProps.addTexture, newProps.addTexture, 'addTexture', changedProps)
    checkMethodDiff(
      oldProps.addTransformNode,
      newProps.addTransformNode,
      'addTransformNode',
      changedProps
    )
    checkMethodDiff(
      oldProps.deleteCompoundImpostor,
      newProps.deleteCompoundImpostor,
      'deleteCompoundImpostor',
      changedProps
    )
    checkMethodDiff(oldProps.enablePhysics, newProps.enablePhysics, 'enablePhysics', changedProps)
    checkMethodDiff(
      oldProps.setActiveCameraById,
      newProps.setActiveCameraById,
      'setActiveCameraById',
      changedProps
    )
    checkMethodDiff(
      oldProps.setActiveCameraByID,
      newProps.setActiveCameraByID,
      'setActiveCameraByID',
      changedProps
    )
    checkMethodDiff(
      oldProps.setActiveCameraByName,
      newProps.setActiveCameraByName,
      'setActiveCameraByName',
      changedProps
    )
    checkMethodDiff(
      oldProps.setPointerOverMesh,
      newProps.setPointerOverMesh,
      'setPointerOverMesh',
      changedProps
    )
    checkMethodDiff(
      oldProps.setRenderingAutoClearDepthStencil,
      newProps.setRenderingAutoClearDepthStencil,
      'setRenderingAutoClearDepthStencil',
      changedProps
    )
    checkMethodDiff(
      oldProps.setRenderingOrder,
      newProps.setRenderingOrder,
      'setRenderingOrder',
      changedProps
    )
    checkMethodDiff(
      oldProps.setSceneUniformBuffer,
      newProps.setSceneUniformBuffer,
      'setSceneUniformBuffer',
      changedProps
    )
    checkMethodDiff(oldProps.setStepId, newProps.setStepId, 'setStepId', changedProps)
    checkMethodDiff(
      oldProps.setTransformMatrix,
      newProps.setTransformMatrix,
      'setTransformMatrix',
      changedProps
    )
    return changedProps.length === 0 ? null : changedProps
  }
}

export const ADTForMesh: string = 'ADTForMesh',
  ADTForMeshTexture: string = 'ADTForMeshTexture',
  ADTFullscreenUI: string = 'ADTFullscreenUI',
  AbstractButton3D: string = 'AbstractButton3D',
  AbstractMesh: string = 'AbstractMesh',
  AdvancedDynamicTexture: string = 'AdvancedDynamicTexture',
  AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera',
  AnaglyphFreeCamera: string = 'AnaglyphFreeCamera',
  AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera',
  AnaglyphPostProcess: string = 'AnaglyphPostProcess',
  AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera',
  ArcFollowCamera: string = 'ArcFollowCamera',
  ArcRotateCamera: string = 'ArcRotateCamera',
  AttachToBoxBehavior: string = 'AttachToBoxBehavior',
  AutoRotationBehavior: string = 'AutoRotationBehavior',
  AxisDragGizmo: string = 'AxisDragGizmo',
  AxisScaleGizmo: string = 'AxisScaleGizmo',
  BackgroundMaterial: string = 'BackgroundMaterial',
  BaseSixDofDragBehavior: string = 'BaseSixDofDragBehavior',
  BaseSlider: string = 'BaseSlider',
  BaseTexture: string = 'BaseTexture',
  BlackAndWhitePostProcess: string = 'BlackAndWhitePostProcess',
  BloomMergePostProcess: string = 'BloomMergePostProcess',
  BlurPostProcess: string = 'BlurPostProcess',
  BouncingBehavior: string = 'BouncingBehavior',
  BoundingBoxGizmo: string = 'BoundingBoxGizmo',
  Box: string = 'Box',
  Button: string = 'Button',
  Button3D: string = 'Button3D',
  Camera: string = 'Camera',
  CameraGizmo: string = 'CameraGizmo',
  Capsule: string = 'Capsule',
  CascadedShadowGenerator: string = 'CascadedShadowGenerator',
  Checkbox: string = 'Checkbox',
  ChromaticAberrationPostProcess: string = 'ChromaticAberrationPostProcess',
  CircleOfConfusionPostProcess: string = 'CircleOfConfusionPostProcess',
  ColorCorrectionPostProcess: string = 'ColorCorrectionPostProcess',
  ColorGradingTexture: string = 'ColorGradingTexture',
  ColorPicker: string = 'ColorPicker',
  Container: string = 'Container',
  Container3D: string = 'Container3D',
  ContentDisplay3D: string = 'ContentDisplay3D',
  Control: string = 'Control',
  Control3D: string = 'Control3D',
  ConvolutionPostProcess: string = 'ConvolutionPostProcess',
  CubeTexture: string = 'CubeTexture',
  CustomProceduralTexture: string = 'CustomProceduralTexture',
  Cylinder: string = 'Cylinder',
  CylinderPanel: string = 'CylinderPanel',
  DashedLines: string = 'DashedLines',
  Decal: string = 'Decal',
  DefaultBehavior: string = 'DefaultBehavior',
  DefaultRenderingPipeline: string = 'DefaultRenderingPipeline',
  DepthOfFieldBlurPostProcess: string = 'DepthOfFieldBlurPostProcess',
  DepthOfFieldMergePostProcess: string = 'DepthOfFieldMergePostProcess',
  DetailMapConfiguration: string = 'DetailMapConfiguration',
  DeviceOrientationCamera: string = 'DeviceOrientationCamera',
  DirectionalLight: string = 'DirectionalLight',
  Disc: string = 'Disc',
  DisplayGrid: string = 'DisplayGrid',
  DisplayPassPostProcess: string = 'DisplayPassPostProcess',
  DynamicTerrain: string = 'DynamicTerrain',
  DynamicTexture: string = 'DynamicTexture',
  EffectLayer: string = 'EffectLayer',
  Ellipse: string = 'Ellipse',
  EngineView: string = 'EngineView',
  EnvironmentHelper: string = 'EnvironmentHelper',
  EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture',
  ExtractHighlightsPostProcess: string = 'ExtractHighlightsPostProcess',
  ExtrudePolygon: string = 'ExtrudePolygon',
  ExtrudeShape: string = 'ExtrudeShape',
  ExtrudeShapeCustom: string = 'ExtrudeShapeCustom',
  FadeInOutBehavior: string = 'FadeInOutBehavior',
  FilterPostProcess: string = 'FilterPostProcess',
  FluentBackplateMaterial: string = 'FluentBackplateMaterial',
  FluentButtonMaterial: string = 'FluentButtonMaterial',
  FluentMaterial: string = 'FluentMaterial',
  FlyCamera: string = 'FlyCamera',
  FocusableButton: string = 'FocusableButton',
  FollowBehavior: string = 'FollowBehavior',
  FollowCamera: string = 'FollowCamera',
  FramingBehavior: string = 'FramingBehavior',
  FreeCamera: string = 'FreeCamera',
  FxaaPostProcess: string = 'FxaaPostProcess',
  GUI3DManager: string = 'GUI3DManager',
  GamepadCamera: string = 'GamepadCamera',
  GaussianSplattingMaterial: string = 'GaussianSplattingMaterial',
  GaussianSplattingMesh: string = 'GaussianSplattingMesh',
  Geodesic: string = 'Geodesic',
  Gizmo: string = 'Gizmo',
  GizmoManager: string = 'GizmoManager',
  GlowLayer: string = 'GlowLayer',
  Goldberg: string = 'Goldberg',
  GoldbergMesh: string = 'GoldbergMesh',
  GrainPostProcess: string = 'GrainPostProcess',
  GreasedLineBaseMesh: string = 'GreasedLineBaseMesh',
  GreasedLineMesh: string = 'GreasedLineMesh',
  GreasedLineRibbonMesh: string = 'GreasedLineRibbonMesh',
  GreasedLineSimpleMaterial: string = 'GreasedLineSimpleMaterial',
  Grid: string = 'Grid',
  Ground: string = 'Ground',
  GroundFromHeightMap: string = 'GroundFromHeightMap',
  GroundMesh: string = 'GroundMesh',
  HDRCubeTexture: string = 'HDRCubeTexture',
  HandConstraintBehavior: string = 'HandConstraintBehavior',
  HandMenu: string = 'HandMenu',
  HandleMaterial: string = 'HandleMaterial',
  HemisphericLight: string = 'HemisphericLight',
  HighlightLayer: string = 'HighlightLayer',
  HighlightsPostProcess: string = 'HighlightsPostProcess',
  HolographicBackplate: string = 'HolographicBackplate',
  HolographicButton: string = 'HolographicButton',
  HolographicSlate: string = 'HolographicSlate',
  HtmlElementTexture: string = 'HtmlElementTexture',
  IcoSphere: string = 'IcoSphere',
  Image: string = 'Image',
  ImageBasedSlider: string = 'ImageBasedSlider',
  ImageProcessingConfiguration: string = 'ImageProcessingConfiguration',
  ImageProcessingPostProcess: string = 'ImageProcessingPostProcess',
  ImageScrollBar: string = 'ImageScrollBar',
  InputPassword: string = 'InputPassword',
  InputText: string = 'InputText',
  InputTextArea: string = 'InputTextArea',
  InstancedLinesMesh: string = 'InstancedLinesMesh',
  InstancedMesh: string = 'InstancedMesh',
  Lathe: string = 'Lathe',
  Layer: string = 'Layer',
  LensRenderingPipeline: string = 'LensRenderingPipeline',
  Light: string = 'Light',
  LightGizmo: string = 'LightGizmo',
  Line: string = 'Line',
  LineSystem: string = 'LineSystem',
  Lines: string = 'Lines',
  LinesMesh: string = 'LinesMesh',
  MRDLBackglowMaterial: string = 'MRDLBackglowMaterial',
  MRDLBackplateMaterial: string = 'MRDLBackplateMaterial',
  MRDLFrontplateMaterial: string = 'MRDLFrontplateMaterial',
  MRDLInnerquadMaterial: string = 'MRDLInnerquadMaterial',
  MRDLSliderBarMaterial: string = 'MRDLSliderBarMaterial',
  MRDLSliderThumbMaterial: string = 'MRDLSliderThumbMaterial',
  Material: string = 'Material',
  MaterialPluginBase: string = 'MaterialPluginBase',
  Mesh: string = 'Mesh',
  MeshButton3D: string = 'MeshButton3D',
  MirrorTexture: string = 'MirrorTexture',
  MotionBlurPostProcess: string = 'MotionBlurPostProcess',
  MultiLine: string = 'MultiLine',
  MultiMaterial: string = 'MultiMaterial',
  MultiPointerScaleBehavior: string = 'MultiPointerScaleBehavior',
  MultiRenderTarget: string = 'MultiRenderTarget',
  MultiviewRenderTarget: string = 'MultiviewRenderTarget',
  NearMenu: string = 'NearMenu',
  Node: string = 'Node',
  NodeMaterial: string = 'NodeMaterial',
  NoiseProceduralTexture: string = 'NoiseProceduralTexture',
  OcclusionMaterial: string = 'OcclusionMaterial',
  PBRAnisotropicConfiguration: string = 'PBRAnisotropicConfiguration',
  PBRBRDFConfiguration: string = 'PBRBRDFConfiguration',
  PBRBaseMaterial: string = 'PBRBaseMaterial',
  PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial',
  PBRClearCoatConfiguration: string = 'PBRClearCoatConfiguration',
  PBRIridescenceConfiguration: string = 'PBRIridescenceConfiguration',
  PBRMaterial: string = 'PBRMaterial',
  PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial',
  PBRSheenConfiguration: string = 'PBRSheenConfiguration',
  PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial',
  PBRSubSurfaceConfiguration: string = 'PBRSubSurfaceConfiguration',
  PassCubePostProcess: string = 'PassCubePostProcess',
  PassPostProcess: string = 'PassPostProcess',
  PhysicsAggregate: string = 'PhysicsAggregate',
  PhysicsImpostor: string = 'PhysicsImpostor',
  Plane: string = 'Plane',
  PlaneDragGizmo: string = 'PlaneDragGizmo',
  PlanePanel: string = 'PlanePanel',
  PlaneRotationGizmo: string = 'PlaneRotationGizmo',
  PointLight: string = 'PointLight',
  PointerDragBehavior: string = 'PointerDragBehavior',
  PointsCloudSystem: string = 'PointsCloudSystem',
  Polygon: string = 'Polygon',
  Polyhedron: string = 'Polyhedron',
  PositionGizmo: string = 'PositionGizmo',
  PostProcess: string = 'PostProcess',
  PostProcessRenderPipeline: string = 'PostProcessRenderPipeline',
  PrePassConfiguration: string = 'PrePassConfiguration',
  PrePassRenderTarget: string = 'PrePassRenderTarget',
  ProceduralTexture: string = 'ProceduralTexture',
  PushMaterial: string = 'PushMaterial',
  RadioButton: string = 'RadioButton',
  RawCubeTexture: string = 'RawCubeTexture',
  RawTexture: string = 'RawTexture',
  RawTexture2DArray: string = 'RawTexture2DArray',
  RawTexture3D: string = 'RawTexture3D',
  Rectangle: string = 'Rectangle',
  RefractionPostProcess: string = 'RefractionPostProcess',
  RefractionTexture: string = 'RefractionTexture',
  RenderTargetTexture: string = 'RenderTargetTexture',
  Ribbon: string = 'Ribbon',
  RotationGizmo: string = 'RotationGizmo',
  SSAO2RenderingPipeline: string = 'SSAO2RenderingPipeline',
  SSAORenderingPipeline: string = 'SSAORenderingPipeline',
  SSRRenderingPipeline: string = 'SSRRenderingPipeline',
  ScaleGizmo: string = 'ScaleGizmo',
  ScatterPanel: string = 'ScatterPanel',
  ScreenSpaceCurvaturePostProcess: string = 'ScreenSpaceCurvaturePostProcess',
  ScreenSpaceReflectionPostProcess: string = 'ScreenSpaceReflectionPostProcess',
  ScrollBar: string = 'ScrollBar',
  ScrollViewer: string = 'ScrollViewer',
  SelectionPanel: string = 'SelectionPanel',
  ShaderMaterial: string = 'ShaderMaterial',
  ShadowGenerator: string = 'ShadowGenerator',
  ShadowLight: string = 'ShadowLight',
  SharpenPostProcess: string = 'SharpenPostProcess',
  SixDofDragBehavior: string = 'SixDofDragBehavior',
  SlateGizmo: string = 'SlateGizmo',
  Slider: string = 'Slider',
  Slider3D: string = 'Slider3D',
  Sound: string = 'Sound',
  Sphere: string = 'Sphere',
  SpherePanel: string = 'SpherePanel',
  SpotLight: string = 'SpotLight',
  Sprite: string = 'Sprite',
  SpriteManager: string = 'SpriteManager',
  SpritePackedManager: string = 'SpritePackedManager',
  StackPanel: string = 'StackPanel',
  StackPanel3D: string = 'StackPanel3D',
  StandardMaterial: string = 'StandardMaterial',
  StandardRenderingPipeline: string = 'StandardRenderingPipeline',
  StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera',
  StereoscopicFreeCamera: string = 'StereoscopicFreeCamera',
  StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera',
  StereoscopicInterlacePostProcess: string = 'StereoscopicInterlacePostProcess',
  StereoscopicInterlacePostProcessI: string = 'StereoscopicInterlacePostProcessI',
  StereoscopicScreenUniversalCamera: string = 'StereoscopicScreenUniversalCamera',
  StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera',
  SubSurfaceScatteringPostProcess: string = 'SubSurfaceScatteringPostProcess',
  SurfaceMagnetismBehavior: string = 'SurfaceMagnetismBehavior',
  TAARenderingPipeline: string = 'TAARenderingPipeline',
  TargetCamera: string = 'TargetCamera',
  Text: string = 'Text',
  TextBlock: string = 'TextBlock',
  Texture: string = 'Texture',
  ThinRenderTargetTexture: string = 'ThinRenderTargetTexture',
  ThinSprite: string = 'ThinSprite',
  ThinTexture: string = 'ThinTexture',
  TiledBox: string = 'TiledBox',
  TiledGround: string = 'TiledGround',
  TiledPlane: string = 'TiledPlane',
  ToggleButton: string = 'ToggleButton',
  TonemapPostProcess: string = 'TonemapPostProcess',
  Torus: string = 'Torus',
  TorusKnot: string = 'TorusKnot',
  TouchButton3D: string = 'TouchButton3D',
  TouchCamera: string = 'TouchCamera',
  TouchHolographicButton: string = 'TouchHolographicButton',
  TouchHolographicMenu: string = 'TouchHolographicMenu',
  TouchMeshButton3D: string = 'TouchMeshButton3D',
  TrailMesh: string = 'TrailMesh',
  TransformNode: string = 'TransformNode',
  Tube: string = 'Tube',
  UniversalCamera: string = 'UniversalCamera',
  UtilityLayerRenderer: string = 'UtilityLayerRenderer',
  VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera',
  VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera',
  VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera',
  VRDistortionCorrectionPostProcess: string = 'VRDistortionCorrectionPostProcess',
  VRExperienceHelper: string = 'VRExperienceHelper',
  VRMultiviewToSingleviewPostProcess: string = 'VRMultiviewToSingleviewPostProcess',
  VideoTexture: string = 'VideoTexture',
  Viewport: string = 'Viewport',
  VirtualJoysticksCamera: string = 'VirtualJoysticksCamera',
  VirtualKeyboard: string = 'VirtualKeyboard',
  VolumeBasedPanel: string = 'VolumeBasedPanel',
  VolumetricLightScatteringPostProcess: string = 'VolumetricLightScatteringPostProcess',
  WebXRCamera: string = 'WebXRCamera',
  XRSpaceWarpRenderTarget: string = 'XRSpaceWarpRenderTarget',
  _ScrollViewerWindow: string = '_ScrollViewerWindow'
const classesMap: Record<string, any> = {
  abstractScene: BabylonjsCoreAbstractScene,
  AbstractScene: BabylonjsCoreAbstractScene,
  scene: BabylonjsCoreScene,
  Scene: BabylonjsCoreScene,
  dynamicTerrain: ExtensionsDynamicTerrain,
  DynamicTerrain: ExtensionsDynamicTerrain,
  sound: BabylonjsCoreSound,
  Sound: BabylonjsCoreSound,
  camera: BabylonjsCoreCamera,
  Camera: BabylonjsCoreCamera,
  gizmo: BabylonjsCoreGizmo,
  Gizmo: BabylonjsCoreGizmo,
  gizmoManager: BabylonjsCoreGizmoManager,
  GizmoManager: BabylonjsCoreGizmoManager,
  environmentHelper: BabylonjsCoreEnvironmentHelper,
  EnvironmentHelper: BabylonjsCoreEnvironmentHelper,
  effectLayer: BabylonjsCoreEffectLayer,
  EffectLayer: BabylonjsCoreEffectLayer,
  layer: BabylonjsCoreLayer,
  Layer: BabylonjsCoreLayer,
  light: BabylonjsCoreLight,
  Light: BabylonjsCoreLight,
  material: BabylonjsCoreMaterial,
  Material: BabylonjsCoreMaterial,
  materialPluginBase: BabylonjsCoreMaterialPluginBase,
  MaterialPluginBase: BabylonjsCoreMaterialPluginBase,
  viewport: BabylonjsCoreViewport,
  Viewport: BabylonjsCoreViewport,
  abstractMesh: BabylonjsCoreAbstractMesh,
  AbstractMesh: BabylonjsCoreAbstractMesh,
  mesh: BabylonjsCoreMesh,
  Mesh: BabylonjsCoreMesh,
  transformNode: BabylonjsCoreTransformNode,
  TransformNode: BabylonjsCoreTransformNode,
  pointsCloudSystem: BabylonjsCorePointsCloudSystem,
  PointsCloudSystem: BabylonjsCorePointsCloudSystem,
  postProcess: BabylonjsCorePostProcess,
  PostProcess: BabylonjsCorePostProcess,
  tonemapPostProcess: BabylonjsCoreTonemapPostProcess,
  TonemapPostProcess: BabylonjsCoreTonemapPostProcess,
  utilityLayerRenderer: BabylonjsCoreUtilityLayerRenderer,
  UtilityLayerRenderer: BabylonjsCoreUtilityLayerRenderer,
  sprite: BabylonjsCoreSprite,
  Sprite: BabylonjsCoreSprite,
  spriteManager: BabylonjsCoreSpriteManager,
  SpriteManager: BabylonjsCoreSpriteManager,
  advancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture,
  AdvancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture,
  gui3DManager: BabylonjsGuiGUI3DManager,
  GUI3DManager: BabylonjsGuiGUI3DManager,
  autoRotationBehavior: BabylonjsCoreAutoRotationBehavior,
  AutoRotationBehavior: BabylonjsCoreAutoRotationBehavior,
  bouncingBehavior: BabylonjsCoreBouncingBehavior,
  BouncingBehavior: BabylonjsCoreBouncingBehavior,
  framingBehavior: BabylonjsCoreFramingBehavior,
  FramingBehavior: BabylonjsCoreFramingBehavior,
  attachToBoxBehavior: BabylonjsCoreAttachToBoxBehavior,
  AttachToBoxBehavior: BabylonjsCoreAttachToBoxBehavior,
  baseSixDofDragBehavior: BabylonjsCoreBaseSixDofDragBehavior,
  BaseSixDofDragBehavior: BabylonjsCoreBaseSixDofDragBehavior,
  fadeInOutBehavior: BabylonjsCoreFadeInOutBehavior,
  FadeInOutBehavior: BabylonjsCoreFadeInOutBehavior,
  followBehavior: BabylonjsCoreFollowBehavior,
  FollowBehavior: BabylonjsCoreFollowBehavior,
  handConstraintBehavior: BabylonjsCoreHandConstraintBehavior,
  HandConstraintBehavior: BabylonjsCoreHandConstraintBehavior,
  multiPointerScaleBehavior: BabylonjsCoreMultiPointerScaleBehavior,
  MultiPointerScaleBehavior: BabylonjsCoreMultiPointerScaleBehavior,
  pointerDragBehavior: BabylonjsCorePointerDragBehavior,
  PointerDragBehavior: BabylonjsCorePointerDragBehavior,
  sixDofDragBehavior: BabylonjsCoreSixDofDragBehavior,
  SixDofDragBehavior: BabylonjsCoreSixDofDragBehavior,
  surfaceMagnetismBehavior: BabylonjsCoreSurfaceMagnetismBehavior,
  SurfaceMagnetismBehavior: BabylonjsCoreSurfaceMagnetismBehavior,
  vrExperienceHelper: BabylonjsCoreVRExperienceHelper,
  VRExperienceHelper: BabylonjsCoreVRExperienceHelper,
  engineView: BabylonjsCoreEngineView,
  EngineView: BabylonjsCoreEngineView,
  cascadedShadowGenerator: BabylonjsCoreCascadedShadowGenerator,
  CascadedShadowGenerator: BabylonjsCoreCascadedShadowGenerator,
  shadowGenerator: BabylonjsCoreShadowGenerator,
  ShadowGenerator: BabylonjsCoreShadowGenerator,
  thinTexture: BabylonjsCoreThinTexture,
  ThinTexture: BabylonjsCoreThinTexture,
  greasedLineBaseMesh: BabylonjsCoreGreasedLineBaseMesh,
  GreasedLineBaseMesh: BabylonjsCoreGreasedLineBaseMesh,
  physicsImpostor: BabylonjsCorePhysicsImpostor,
  PhysicsImpostor: BabylonjsCorePhysicsImpostor,
  physicsAggregate: BabylonjsCorePhysicsAggregate,
  PhysicsAggregate: BabylonjsCorePhysicsAggregate,
  postProcessRenderPipeline: BabylonjsCorePostProcessRenderPipeline,
  PostProcessRenderPipeline: BabylonjsCorePostProcessRenderPipeline,
  control: BabylonjsGuiControl,
  Control: BabylonjsGuiControl,
  textBlock: BabylonjsGuiTextBlock,
  TextBlock: BabylonjsGuiTextBlock,
  defaultBehavior: BabylonjsGuiDefaultBehavior,
  DefaultBehavior: BabylonjsGuiDefaultBehavior,
  control3D: BabylonjsGuiControl3D,
  Control3D: BabylonjsGuiControl3D,
  node: BabylonjsCoreNode,
  Node: BabylonjsCoreNode,
  instancedMesh: BabylonjsCoreInstancedMesh,
  InstancedMesh: BabylonjsCoreInstancedMesh,
  instancedLinesMesh: BabylonjsCoreInstancedLinesMesh,
  InstancedLinesMesh: BabylonjsCoreInstancedLinesMesh,
  linesMesh: BabylonjsCoreLinesMesh,
  LinesMesh: BabylonjsCoreLinesMesh,
  goldbergMesh: BabylonjsCoreGoldbergMesh,
  GoldbergMesh: BabylonjsCoreGoldbergMesh,
  groundMesh: BabylonjsCoreGroundMesh,
  GroundMesh: BabylonjsCoreGroundMesh,
  trailMesh: BabylonjsCoreTrailMesh,
  TrailMesh: BabylonjsCoreTrailMesh,
  greasedLineMesh: BabylonjsCoreGreasedLineMesh,
  GreasedLineMesh: BabylonjsCoreGreasedLineMesh,
  greasedLineRibbonMesh: BabylonjsCoreGreasedLineRibbonMesh,
  GreasedLineRibbonMesh: BabylonjsCoreGreasedLineRibbonMesh,
  gaussianSplattingMesh: BabylonjsCoreGaussianSplattingMesh,
  GaussianSplattingMesh: BabylonjsCoreGaussianSplattingMesh,
  renderTargetTexture: BabylonjsCoreRenderTargetTexture,
  RenderTargetTexture: BabylonjsCoreRenderTargetTexture,
  targetCamera: BabylonjsCoreTargetCamera,
  TargetCamera: BabylonjsCoreTargetCamera,
  freeCamera: BabylonjsCoreFreeCamera,
  FreeCamera: BabylonjsCoreFreeCamera,
  webXrCamera: BabylonjsCoreWebXRCamera,
  WebXRCamera: BabylonjsCoreWebXRCamera,
  touchCamera: BabylonjsCoreTouchCamera,
  TouchCamera: BabylonjsCoreTouchCamera,
  universalCamera: BabylonjsCoreUniversalCamera,
  UniversalCamera: BabylonjsCoreUniversalCamera,
  gamepadCamera: BabylonjsCoreGamepadCamera,
  GamepadCamera: BabylonjsCoreGamepadCamera,
  anaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera,
  AnaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera,
  stereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera,
  StereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera,
  anaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera,
  AnaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera,
  stereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera,
  StereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera,
  stereoscopicScreenUniversalCamera: BabylonjsCoreStereoscopicScreenUniversalCamera,
  StereoscopicScreenUniversalCamera: BabylonjsCoreStereoscopicScreenUniversalCamera,
  deviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera,
  DeviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera,
  vrDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera,
  VRDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera,
  vrDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera,
  VRDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera,
  anaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera,
  AnaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera,
  stereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera,
  StereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera,
  virtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera,
  VirtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera,
  arcRotateCamera: BabylonjsCoreArcRotateCamera,
  ArcRotateCamera: BabylonjsCoreArcRotateCamera,
  anaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera,
  AnaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera,
  stereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera,
  StereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera,
  vrDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera,
  VRDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera,
  flyCamera: BabylonjsCoreFlyCamera,
  FlyCamera: BabylonjsCoreFlyCamera,
  followCamera: BabylonjsCoreFollowCamera,
  FollowCamera: BabylonjsCoreFollowCamera,
  arcFollowCamera: BabylonjsCoreArcFollowCamera,
  ArcFollowCamera: BabylonjsCoreArcFollowCamera,
  meshBuilder: BabylonjsCoreMeshBuilder,
  MeshBuilder: BabylonjsCoreMeshBuilder,
  pushMaterial: BabylonjsCorePushMaterial,
  PushMaterial: BabylonjsCorePushMaterial,
  shaderMaterial: BabylonjsCoreShaderMaterial,
  ShaderMaterial: BabylonjsCoreShaderMaterial,
  baseTexture: BabylonjsCoreBaseTexture,
  BaseTexture: BabylonjsCoreBaseTexture,
  occlusionMaterial: BabylonjsCoreOcclusionMaterial,
  OcclusionMaterial: BabylonjsCoreOcclusionMaterial,
  greasedLineSimpleMaterial: BabylonjsCoreGreasedLineSimpleMaterial,
  GreasedLineSimpleMaterial: BabylonjsCoreGreasedLineSimpleMaterial,
  rawTexture: BabylonjsCoreRawTexture,
  RawTexture: BabylonjsCoreRawTexture,
  handleMaterial: BabylonjsGuiHandleMaterial,
  HandleMaterial: BabylonjsGuiHandleMaterial,
  nodeMaterial: BabylonjsCoreNodeMaterial,
  NodeMaterial: BabylonjsCoreNodeMaterial,
  imageProcessingConfiguration: BabylonjsCoreImageProcessingConfiguration,
  ImageProcessingConfiguration: BabylonjsCoreImageProcessingConfiguration,
  pbrBaseMaterial: BabylonjsCorePBRBaseMaterial,
  PBRBaseMaterial: BabylonjsCorePBRBaseMaterial,
  pbrBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial,
  PBRBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial,
  pbrMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial,
  PBRMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial,
  pbrSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial,
  PBRSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial,
  pbrMaterial: BabylonjsCorePBRMaterial,
  PBRMaterial: BabylonjsCorePBRMaterial,
  standardMaterial: BabylonjsCoreStandardMaterial,
  StandardMaterial: BabylonjsCoreStandardMaterial,
  backgroundMaterial: BabylonjsCoreBackgroundMaterial,
  BackgroundMaterial: BabylonjsCoreBackgroundMaterial,
  shadowLight: BabylonjsCoreShadowLight,
  ShadowLight: BabylonjsCoreShadowLight,
  gaussianSplattingMaterial: BabylonjsCoreGaussianSplattingMaterial,
  GaussianSplattingMaterial: BabylonjsCoreGaussianSplattingMaterial,
  fluentMaterial: BabylonjsGuiFluentMaterial,
  FluentMaterial: BabylonjsGuiFluentMaterial,
  fluentButtonMaterial: BabylonjsGuiFluentButtonMaterial,
  FluentButtonMaterial: BabylonjsGuiFluentButtonMaterial,
  fluentBackplateMaterial: BabylonjsGuiFluentBackplateMaterial,
  FluentBackplateMaterial: BabylonjsGuiFluentBackplateMaterial,
  mrdlSliderBarMaterial: BabylonjsGuiMRDLSliderBarMaterial,
  MRDLSliderBarMaterial: BabylonjsGuiMRDLSliderBarMaterial,
  texture: BabylonjsCoreTexture,
  Texture: BabylonjsCoreTexture,
  mrdlSliderThumbMaterial: BabylonjsGuiMRDLSliderThumbMaterial,
  MRDLSliderThumbMaterial: BabylonjsGuiMRDLSliderThumbMaterial,
  mrdlBackplateMaterial: BabylonjsGuiMRDLBackplateMaterial,
  MRDLBackplateMaterial: BabylonjsGuiMRDLBackplateMaterial,
  mrdlBackglowMaterial: BabylonjsGuiMRDLBackglowMaterial,
  MRDLBackglowMaterial: BabylonjsGuiMRDLBackglowMaterial,
  mrdlFrontplateMaterial: BabylonjsGuiMRDLFrontplateMaterial,
  MRDLFrontplateMaterial: BabylonjsGuiMRDLFrontplateMaterial,
  mrdlInnerquadMaterial: BabylonjsGuiMRDLInnerquadMaterial,
  MRDLInnerquadMaterial: BabylonjsGuiMRDLInnerquadMaterial,
  multiMaterial: BabylonjsCoreMultiMaterial,
  MultiMaterial: BabylonjsCoreMultiMaterial,
  directionalLight: BabylonjsCoreDirectionalLight,
  DirectionalLight: BabylonjsCoreDirectionalLight,
  pointLight: BabylonjsCorePointLight,
  PointLight: BabylonjsCorePointLight,
  spotLight: BabylonjsCoreSpotLight,
  SpotLight: BabylonjsCoreSpotLight,
  hemisphericLight: BabylonjsCoreHemisphericLight,
  HemisphericLight: BabylonjsCoreHemisphericLight,
  container: BabylonjsGuiContainer,
  Container: BabylonjsGuiContainer,
  rectangle: BabylonjsGuiRectangle,
  Rectangle: BabylonjsGuiRectangle,
  'babylon-button': BabylonjsGuiButton,
  Button: BabylonjsGuiButton,
  focusableButton: BabylonjsGuiFocusableButton,
  FocusableButton: BabylonjsGuiFocusableButton,
  selectionPanel: BabylonjsGuiSelectionPanel,
  SelectionPanel: BabylonjsGuiSelectionPanel,
  scrollViewer: BabylonjsGuiScrollViewer,
  ScrollViewer: BabylonjsGuiScrollViewer,
  'babylon-image': BabylonjsGuiImage,
  Image: BabylonjsGuiImage,
  toggleButton: BabylonjsGuiToggleButton,
  ToggleButton: BabylonjsGuiToggleButton,
  stackPanel: BabylonjsGuiStackPanel,
  StackPanel: BabylonjsGuiStackPanel,
  virtualKeyboard: BabylonjsGuiVirtualKeyboard,
  VirtualKeyboard: BabylonjsGuiVirtualKeyboard,
  'babylon-ellipse': BabylonjsGuiEllipse,
  Ellipse: BabylonjsGuiEllipse,
  grid: BabylonjsGuiGrid,
  Grid: BabylonjsGuiGrid,
  scrollViewerWindow: BabylonjsGui_ScrollViewerWindow,
  _ScrollViewerWindow: BabylonjsGui_ScrollViewerWindow,
  checkbox: BabylonjsGuiCheckbox,
  Checkbox: BabylonjsGuiCheckbox,
  colorPicker: BabylonjsGuiColorPicker,
  ColorPicker: BabylonjsGuiColorPicker,
  inputText: BabylonjsGuiInputText,
  InputText: BabylonjsGuiInputText,
  inputTextArea: BabylonjsGuiInputTextArea,
  InputTextArea: BabylonjsGuiInputTextArea,
  inputPassword: BabylonjsGuiInputPassword,
  InputPassword: BabylonjsGuiInputPassword,
  'babylon-line': BabylonjsGuiLine,
  Line: BabylonjsGuiLine,
  multiLine: BabylonjsGuiMultiLine,
  MultiLine: BabylonjsGuiMultiLine,
  radioButton: BabylonjsGuiRadioButton,
  RadioButton: BabylonjsGuiRadioButton,
  baseSlider: BabylonjsGuiBaseSlider,
  BaseSlider: BabylonjsGuiBaseSlider,
  scrollBar: BabylonjsGuiScrollBar,
  ScrollBar: BabylonjsGuiScrollBar,
  imageScrollBar: BabylonjsGuiImageScrollBar,
  ImageScrollBar: BabylonjsGuiImageScrollBar,
  slider: BabylonjsGuiSlider,
  Slider: BabylonjsGuiSlider,
  imageBasedSlider: BabylonjsGuiImageBasedSlider,
  ImageBasedSlider: BabylonjsGuiImageBasedSlider,
  displayGrid: BabylonjsGuiDisplayGrid,
  DisplayGrid: BabylonjsGuiDisplayGrid,
  container3D: BabylonjsGuiContainer3D,
  Container3D: BabylonjsGuiContainer3D,
  volumeBasedPanel: BabylonjsGuiVolumeBasedPanel,
  VolumeBasedPanel: BabylonjsGuiVolumeBasedPanel,
  cylinderPanel: BabylonjsGuiCylinderPanel,
  CylinderPanel: BabylonjsGuiCylinderPanel,
  touchHolographicMenu: BabylonjsGuiTouchHolographicMenu,
  TouchHolographicMenu: BabylonjsGuiTouchHolographicMenu,
  touchHolographicButton: BabylonjsGuiTouchHolographicButton,
  TouchHolographicButton: BabylonjsGuiTouchHolographicButton,
  handMenu: BabylonjsGuiHandMenu,
  HandMenu: BabylonjsGuiHandMenu,
  nearMenu: BabylonjsGuiNearMenu,
  NearMenu: BabylonjsGuiNearMenu,
  planePanel: BabylonjsGuiPlanePanel,
  PlanePanel: BabylonjsGuiPlanePanel,
  scatterPanel: BabylonjsGuiScatterPanel,
  ScatterPanel: BabylonjsGuiScatterPanel,
  spherePanel: BabylonjsGuiSpherePanel,
  SpherePanel: BabylonjsGuiSpherePanel,
  stackPanel3D: BabylonjsGuiStackPanel3D,
  StackPanel3D: BabylonjsGuiStackPanel3D,
  contentDisplay3D: BabylonjsGuiContentDisplay3D,
  ContentDisplay3D: BabylonjsGuiContentDisplay3D,
  abstractButton3D: BabylonjsGuiAbstractButton3D,
  AbstractButton3D: BabylonjsGuiAbstractButton3D,
  button3D: BabylonjsGuiButton3D,
  Button3D: BabylonjsGuiButton3D,
  touchButton3D: BabylonjsGuiTouchButton3D,
  TouchButton3D: BabylonjsGuiTouchButton3D,
  touchMeshButton3D: BabylonjsGuiTouchMeshButton3D,
  TouchMeshButton3D: BabylonjsGuiTouchMeshButton3D,
  holographicButton: BabylonjsGuiHolographicButton,
  HolographicButton: BabylonjsGuiHolographicButton,
  meshButton3D: BabylonjsGuiMeshButton3D,
  MeshButton3D: BabylonjsGuiMeshButton3D,
  holographicSlate: BabylonjsGuiHolographicSlate,
  HolographicSlate: BabylonjsGuiHolographicSlate,
  holographicBackplate: BabylonjsGuiHolographicBackplate,
  HolographicBackplate: BabylonjsGuiHolographicBackplate,
  slider3D: BabylonjsGuiSlider3D,
  Slider3D: BabylonjsGuiSlider3D,
  spritePackedManager: BabylonjsCoreSpritePackedManager,
  SpritePackedManager: BabylonjsCoreSpritePackedManager,
  thinSprite: BabylonjsCoreThinSprite,
  ThinSprite: BabylonjsCoreThinSprite,
  glowLayer: BabylonjsCoreGlowLayer,
  GlowLayer: BabylonjsCoreGlowLayer,
  highlightLayer: BabylonjsCoreHighlightLayer,
  HighlightLayer: BabylonjsCoreHighlightLayer,
  cubeTexture: BabylonjsCoreCubeTexture,
  CubeTexture: BabylonjsCoreCubeTexture,
  rawCubeTexture: BabylonjsCoreRawCubeTexture,
  RawCubeTexture: BabylonjsCoreRawCubeTexture,
  videoTexture: BabylonjsCoreVideoTexture,
  VideoTexture: BabylonjsCoreVideoTexture,
  proceduralTexture: BabylonjsCoreProceduralTexture,
  ProceduralTexture: BabylonjsCoreProceduralTexture,
  customProceduralTexture: BabylonjsCoreCustomProceduralTexture,
  CustomProceduralTexture: BabylonjsCoreCustomProceduralTexture,
  noiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture,
  NoiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture,
  mirrorTexture: BabylonjsCoreMirrorTexture,
  MirrorTexture: BabylonjsCoreMirrorTexture,
  multiRenderTarget: BabylonjsCoreMultiRenderTarget,
  MultiRenderTarget: BabylonjsCoreMultiRenderTarget,
  prePassRenderTarget: BabylonjsCorePrePassRenderTarget,
  PrePassRenderTarget: BabylonjsCorePrePassRenderTarget,
  imageProcessingPostProcess: BabylonjsCoreImageProcessingPostProcess,
  ImageProcessingPostProcess: BabylonjsCoreImageProcessingPostProcess,
  refractionTexture: BabylonjsCoreRefractionTexture,
  RefractionTexture: BabylonjsCoreRefractionTexture,
  xrSpaceWarpRenderTarget: BabylonjsCoreXRSpaceWarpRenderTarget,
  XRSpaceWarpRenderTarget: BabylonjsCoreXRSpaceWarpRenderTarget,
  multiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget,
  MultiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget,
  rawTexture2DArray: BabylonjsCoreRawTexture2DArray,
  RawTexture2DArray: BabylonjsCoreRawTexture2DArray,
  dynamicTexture: BabylonjsCoreDynamicTexture,
  DynamicTexture: BabylonjsCoreDynamicTexture,
  rawTexture3D: BabylonjsCoreRawTexture3D,
  RawTexture3D: BabylonjsCoreRawTexture3D,
  colorGradingTexture: BabylonjsCoreColorGradingTexture,
  ColorGradingTexture: BabylonjsCoreColorGradingTexture,
  equiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture,
  EquiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture,
  hdrCubeTexture: BabylonjsCoreHDRCubeTexture,
  HDRCubeTexture: BabylonjsCoreHDRCubeTexture,
  htmlElementTexture: BabylonjsCoreHtmlElementTexture,
  HtmlElementTexture: BabylonjsCoreHtmlElementTexture,
  thinRenderTargetTexture: BabylonjsCoreThinRenderTargetTexture,
  ThinRenderTargetTexture: BabylonjsCoreThinRenderTargetTexture,
  defaultRenderingPipeline: BabylonjsCoreDefaultRenderingPipeline,
  DefaultRenderingPipeline: BabylonjsCoreDefaultRenderingPipeline,
  chromaticAberrationPostProcess: BabylonjsCoreChromaticAberrationPostProcess,
  ChromaticAberrationPostProcess: BabylonjsCoreChromaticAberrationPostProcess,
  fxaaPostProcess: BabylonjsCoreFxaaPostProcess,
  FxaaPostProcess: BabylonjsCoreFxaaPostProcess,
  grainPostProcess: BabylonjsCoreGrainPostProcess,
  GrainPostProcess: BabylonjsCoreGrainPostProcess,
  sharpenPostProcess: BabylonjsCoreSharpenPostProcess,
  SharpenPostProcess: BabylonjsCoreSharpenPostProcess,
  lensRenderingPipeline: BabylonjsCoreLensRenderingPipeline,
  LensRenderingPipeline: BabylonjsCoreLensRenderingPipeline,
  ssao2RenderingPipeline: BabylonjsCoreSSAO2RenderingPipeline,
  SSAO2RenderingPipeline: BabylonjsCoreSSAO2RenderingPipeline,
  ssaoRenderingPipeline: BabylonjsCoreSSAORenderingPipeline,
  SSAORenderingPipeline: BabylonjsCoreSSAORenderingPipeline,
  standardRenderingPipeline: BabylonjsCoreStandardRenderingPipeline,
  StandardRenderingPipeline: BabylonjsCoreStandardRenderingPipeline,
  screenSpaceReflectionPostProcess: BabylonjsCoreScreenSpaceReflectionPostProcess,
  ScreenSpaceReflectionPostProcess: BabylonjsCoreScreenSpaceReflectionPostProcess,
  blurPostProcess: BabylonjsCoreBlurPostProcess,
  BlurPostProcess: BabylonjsCoreBlurPostProcess,
  ssrRenderingPipeline: BabylonjsCoreSSRRenderingPipeline,
  SSRRenderingPipeline: BabylonjsCoreSSRRenderingPipeline,
  taaRenderingPipeline: BabylonjsCoreTAARenderingPipeline,
  TAARenderingPipeline: BabylonjsCoreTAARenderingPipeline,
  anaglyphPostProcess: BabylonjsCoreAnaglyphPostProcess,
  AnaglyphPostProcess: BabylonjsCoreAnaglyphPostProcess,
  blackAndWhitePostProcess: BabylonjsCoreBlackAndWhitePostProcess,
  BlackAndWhitePostProcess: BabylonjsCoreBlackAndWhitePostProcess,
  extractHighlightsPostProcess: BabylonjsCoreExtractHighlightsPostProcess,
  ExtractHighlightsPostProcess: BabylonjsCoreExtractHighlightsPostProcess,
  bloomMergePostProcess: BabylonjsCoreBloomMergePostProcess,
  BloomMergePostProcess: BabylonjsCoreBloomMergePostProcess,
  depthOfFieldBlurPostProcess: BabylonjsCoreDepthOfFieldBlurPostProcess,
  DepthOfFieldBlurPostProcess: BabylonjsCoreDepthOfFieldBlurPostProcess,
  circleOfConfusionPostProcess: BabylonjsCoreCircleOfConfusionPostProcess,
  CircleOfConfusionPostProcess: BabylonjsCoreCircleOfConfusionPostProcess,
  colorCorrectionPostProcess: BabylonjsCoreColorCorrectionPostProcess,
  ColorCorrectionPostProcess: BabylonjsCoreColorCorrectionPostProcess,
  convolutionPostProcess: BabylonjsCoreConvolutionPostProcess,
  ConvolutionPostProcess: BabylonjsCoreConvolutionPostProcess,
  depthOfFieldMergePostProcess: BabylonjsCoreDepthOfFieldMergePostProcess,
  DepthOfFieldMergePostProcess: BabylonjsCoreDepthOfFieldMergePostProcess,
  displayPassPostProcess: BabylonjsCoreDisplayPassPostProcess,
  DisplayPassPostProcess: BabylonjsCoreDisplayPassPostProcess,
  filterPostProcess: BabylonjsCoreFilterPostProcess,
  FilterPostProcess: BabylonjsCoreFilterPostProcess,
  highlightsPostProcess: BabylonjsCoreHighlightsPostProcess,
  HighlightsPostProcess: BabylonjsCoreHighlightsPostProcess,
  motionBlurPostProcess: BabylonjsCoreMotionBlurPostProcess,
  MotionBlurPostProcess: BabylonjsCoreMotionBlurPostProcess,
  passPostProcess: BabylonjsCorePassPostProcess,
  PassPostProcess: BabylonjsCorePassPostProcess,
  passCubePostProcess: BabylonjsCorePassCubePostProcess,
  PassCubePostProcess: BabylonjsCorePassCubePostProcess,
  refractionPostProcess: BabylonjsCoreRefractionPostProcess,
  RefractionPostProcess: BabylonjsCoreRefractionPostProcess,
  stereoscopicInterlacePostProcessI: BabylonjsCoreStereoscopicInterlacePostProcessI,
  StereoscopicInterlacePostProcessI: BabylonjsCoreStereoscopicInterlacePostProcessI,
  stereoscopicInterlacePostProcess: BabylonjsCoreStereoscopicInterlacePostProcess,
  StereoscopicInterlacePostProcess: BabylonjsCoreStereoscopicInterlacePostProcess,
  volumetricLightScatteringPostProcess: BabylonjsCoreVolumetricLightScatteringPostProcess,
  VolumetricLightScatteringPostProcess: BabylonjsCoreVolumetricLightScatteringPostProcess,
  vrDistortionCorrectionPostProcess: BabylonjsCoreVRDistortionCorrectionPostProcess,
  VRDistortionCorrectionPostProcess: BabylonjsCoreVRDistortionCorrectionPostProcess,
  vrMultiviewToSingleviewPostProcess: BabylonjsCoreVRMultiviewToSingleviewPostProcess,
  VRMultiviewToSingleviewPostProcess: BabylonjsCoreVRMultiviewToSingleviewPostProcess,
  screenSpaceCurvaturePostProcess: BabylonjsCoreScreenSpaceCurvaturePostProcess,
  ScreenSpaceCurvaturePostProcess: BabylonjsCoreScreenSpaceCurvaturePostProcess,
  subSurfaceScatteringPostProcess: BabylonjsCoreSubSurfaceScatteringPostProcess,
  SubSurfaceScatteringPostProcess: BabylonjsCoreSubSurfaceScatteringPostProcess,
  planeDragGizmo: BabylonjsCorePlaneDragGizmo,
  PlaneDragGizmo: BabylonjsCorePlaneDragGizmo,
  positionGizmo: BabylonjsCorePositionGizmo,
  PositionGizmo: BabylonjsCorePositionGizmo,
  planeRotationGizmo: BabylonjsCorePlaneRotationGizmo,
  PlaneRotationGizmo: BabylonjsCorePlaneRotationGizmo,
  rotationGizmo: BabylonjsCoreRotationGizmo,
  RotationGizmo: BabylonjsCoreRotationGizmo,
  axisScaleGizmo: BabylonjsCoreAxisScaleGizmo,
  AxisScaleGizmo: BabylonjsCoreAxisScaleGizmo,
  scaleGizmo: BabylonjsCoreScaleGizmo,
  ScaleGizmo: BabylonjsCoreScaleGizmo,
  boundingBoxGizmo: BabylonjsCoreBoundingBoxGizmo,
  BoundingBoxGizmo: BabylonjsCoreBoundingBoxGizmo,
  axisDragGizmo: BabylonjsCoreAxisDragGizmo,
  AxisDragGizmo: BabylonjsCoreAxisDragGizmo,
  lightGizmo: BabylonjsCoreLightGizmo,
  LightGizmo: BabylonjsCoreLightGizmo,
  cameraGizmo: BabylonjsCoreCameraGizmo,
  CameraGizmo: BabylonjsCoreCameraGizmo,
  slateGizmo: BabylonjsGuiSlateGizmo,
  SlateGizmo: BabylonjsGuiSlateGizmo,
  pbrClearCoatConfiguration: BabylonjsCorePBRClearCoatConfiguration,
  PBRClearCoatConfiguration: BabylonjsCorePBRClearCoatConfiguration,
  pbrIridescenceConfiguration: BabylonjsCorePBRIridescenceConfiguration,
  PBRIridescenceConfiguration: BabylonjsCorePBRIridescenceConfiguration,
  pbrAnisotropicConfiguration: BabylonjsCorePBRAnisotropicConfiguration,
  PBRAnisotropicConfiguration: BabylonjsCorePBRAnisotropicConfiguration,
  pbrbrdfConfiguration: BabylonjsCorePBRBRDFConfiguration,
  PBRBRDFConfiguration: BabylonjsCorePBRBRDFConfiguration,
  pbrSheenConfiguration: BabylonjsCorePBRSheenConfiguration,
  PBRSheenConfiguration: BabylonjsCorePBRSheenConfiguration,
  pbrSubSurfaceConfiguration: BabylonjsCorePBRSubSurfaceConfiguration,
  PBRSubSurfaceConfiguration: BabylonjsCorePBRSubSurfaceConfiguration,
  prePassConfiguration: BabylonjsCorePrePassConfiguration,
  PrePassConfiguration: BabylonjsCorePrePassConfiguration,
  detailMapConfiguration: BabylonjsCoreDetailMapConfiguration,
  DetailMapConfiguration: BabylonjsCoreDetailMapConfiguration,
}
export const intrinsicClassMap: object = {
  abstractScene: 'AbstractScene',
  scene: 'Scene',
  dynamicTerrain: 'DynamicTerrain',
  sound: 'Sound',
  camera: 'Camera',
  gizmo: 'Gizmo',
  gizmoManager: 'GizmoManager',
  environmentHelper: 'EnvironmentHelper',
  effectLayer: 'EffectLayer',
  layer: 'Layer',
  light: 'Light',
  material: 'Material',
  materialPluginBase: 'MaterialPluginBase',
  viewport: 'Viewport',
  abstractMesh: 'AbstractMesh',
  mesh: 'Mesh',
  transformNode: 'TransformNode',
  pointsCloudSystem: 'PointsCloudSystem',
  postProcess: 'PostProcess',
  tonemapPostProcess: 'TonemapPostProcess',
  utilityLayerRenderer: 'UtilityLayerRenderer',
  sprite: 'Sprite',
  spriteManager: 'SpriteManager',
  advancedDynamicTexture: 'AdvancedDynamicTexture',
  gui3DManager: 'GUI3DManager',
  autoRotationBehavior: 'AutoRotationBehavior',
  bouncingBehavior: 'BouncingBehavior',
  framingBehavior: 'FramingBehavior',
  attachToBoxBehavior: 'AttachToBoxBehavior',
  baseSixDofDragBehavior: 'BaseSixDofDragBehavior',
  fadeInOutBehavior: 'FadeInOutBehavior',
  followBehavior: 'FollowBehavior',
  handConstraintBehavior: 'HandConstraintBehavior',
  multiPointerScaleBehavior: 'MultiPointerScaleBehavior',
  pointerDragBehavior: 'PointerDragBehavior',
  sixDofDragBehavior: 'SixDofDragBehavior',
  surfaceMagnetismBehavior: 'SurfaceMagnetismBehavior',
  vrExperienceHelper: 'VRExperienceHelper',
  engineView: 'EngineView',
  cascadedShadowGenerator: 'CascadedShadowGenerator',
  shadowGenerator: 'ShadowGenerator',
  thinTexture: 'ThinTexture',
  greasedLineBaseMesh: 'GreasedLineBaseMesh',
  physicsImpostor: 'PhysicsImpostor',
  physicsAggregate: 'PhysicsAggregate',
  postProcessRenderPipeline: 'PostProcessRenderPipeline',
  control: 'Control',
  textBlock: 'TextBlock',
  defaultBehavior: 'DefaultBehavior',
  control3D: 'Control3D',
  node: 'Node',
  instancedMesh: 'InstancedMesh',
  instancedLinesMesh: 'InstancedLinesMesh',
  linesMesh: 'LinesMesh',
  goldbergMesh: 'GoldbergMesh',
  groundMesh: 'GroundMesh',
  trailMesh: 'TrailMesh',
  greasedLineMesh: 'GreasedLineMesh',
  greasedLineRibbonMesh: 'GreasedLineRibbonMesh',
  gaussianSplattingMesh: 'GaussianSplattingMesh',
  renderTargetTexture: 'RenderTargetTexture',
  targetCamera: 'TargetCamera',
  freeCamera: 'FreeCamera',
  webXrCamera: 'WebXRCamera',
  touchCamera: 'TouchCamera',
  universalCamera: 'UniversalCamera',
  gamepadCamera: 'GamepadCamera',
  anaglyphGamepadCamera: 'AnaglyphGamepadCamera',
  stereoscopicGamepadCamera: 'StereoscopicGamepadCamera',
  anaglyphUniversalCamera: 'AnaglyphUniversalCamera',
  stereoscopicUniversalCamera: 'StereoscopicUniversalCamera',
  stereoscopicScreenUniversalCamera: 'StereoscopicScreenUniversalCamera',
  deviceOrientationCamera: 'DeviceOrientationCamera',
  vrDeviceOrientationFreeCamera: 'VRDeviceOrientationFreeCamera',
  vrDeviceOrientationGamepadCamera: 'VRDeviceOrientationGamepadCamera',
  anaglyphFreeCamera: 'AnaglyphFreeCamera',
  stereoscopicFreeCamera: 'StereoscopicFreeCamera',
  virtualJoysticksCamera: 'VirtualJoysticksCamera',
  arcRotateCamera: 'ArcRotateCamera',
  anaglyphArcRotateCamera: 'AnaglyphArcRotateCamera',
  stereoscopicArcRotateCamera: 'StereoscopicArcRotateCamera',
  vrDeviceOrientationArcRotateCamera: 'VRDeviceOrientationArcRotateCamera',
  flyCamera: 'FlyCamera',
  followCamera: 'FollowCamera',
  arcFollowCamera: 'ArcFollowCamera',
  meshBuilder: 'MeshBuilder',
  pushMaterial: 'PushMaterial',
  shaderMaterial: 'ShaderMaterial',
  baseTexture: 'BaseTexture',
  occlusionMaterial: 'OcclusionMaterial',
  greasedLineSimpleMaterial: 'GreasedLineSimpleMaterial',
  rawTexture: 'RawTexture',
  handleMaterial: 'HandleMaterial',
  nodeMaterial: 'NodeMaterial',
  imageProcessingConfiguration: 'ImageProcessingConfiguration',
  pbrBaseMaterial: 'PBRBaseMaterial',
  pbrBaseSimpleMaterial: 'PBRBaseSimpleMaterial',
  pbrMetallicRoughnessMaterial: 'PBRMetallicRoughnessMaterial',
  pbrSpecularGlossinessMaterial: 'PBRSpecularGlossinessMaterial',
  pbrMaterial: 'PBRMaterial',
  standardMaterial: 'StandardMaterial',
  backgroundMaterial: 'BackgroundMaterial',
  shadowLight: 'ShadowLight',
  gaussianSplattingMaterial: 'GaussianSplattingMaterial',
  fluentMaterial: 'FluentMaterial',
  fluentButtonMaterial: 'FluentButtonMaterial',
  fluentBackplateMaterial: 'FluentBackplateMaterial',
  mrdlSliderBarMaterial: 'MRDLSliderBarMaterial',
  texture: 'Texture',
  mrdlSliderThumbMaterial: 'MRDLSliderThumbMaterial',
  mrdlBackplateMaterial: 'MRDLBackplateMaterial',
  mrdlBackglowMaterial: 'MRDLBackglowMaterial',
  mrdlFrontplateMaterial: 'MRDLFrontplateMaterial',
  mrdlInnerquadMaterial: 'MRDLInnerquadMaterial',
  multiMaterial: 'MultiMaterial',
  directionalLight: 'DirectionalLight',
  pointLight: 'PointLight',
  spotLight: 'SpotLight',
  hemisphericLight: 'HemisphericLight',
  container: 'Container',
  rectangle: 'Rectangle',
  'babylon-button': 'Button',
  focusableButton: 'FocusableButton',
  selectionPanel: 'SelectionPanel',
  scrollViewer: 'ScrollViewer',
  'babylon-image': 'Image',
  toggleButton: 'ToggleButton',
  stackPanel: 'StackPanel',
  virtualKeyboard: 'VirtualKeyboard',
  'babylon-ellipse': 'Ellipse',
  grid: 'Grid',
  scrollViewerWindow: '_ScrollViewerWindow',
  checkbox: 'Checkbox',
  colorPicker: 'ColorPicker',
  inputText: 'InputText',
  inputTextArea: 'InputTextArea',
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
  touchHolographicMenu: 'TouchHolographicMenu',
  touchHolographicButton: 'TouchHolographicButton',
  handMenu: 'HandMenu',
  nearMenu: 'NearMenu',
  planePanel: 'PlanePanel',
  scatterPanel: 'ScatterPanel',
  spherePanel: 'SpherePanel',
  stackPanel3D: 'StackPanel3D',
  contentDisplay3D: 'ContentDisplay3D',
  abstractButton3D: 'AbstractButton3D',
  button3D: 'Button3D',
  touchButton3D: 'TouchButton3D',
  touchMeshButton3D: 'TouchMeshButton3D',
  holographicButton: 'HolographicButton',
  meshButton3D: 'MeshButton3D',
  holographicSlate: 'HolographicSlate',
  holographicBackplate: 'HolographicBackplate',
  slider3D: 'Slider3D',
  spritePackedManager: 'SpritePackedManager',
  thinSprite: 'ThinSprite',
  glowLayer: 'GlowLayer',
  highlightLayer: 'HighlightLayer',
  cubeTexture: 'CubeTexture',
  rawCubeTexture: 'RawCubeTexture',
  videoTexture: 'VideoTexture',
  proceduralTexture: 'ProceduralTexture',
  customProceduralTexture: 'CustomProceduralTexture',
  noiseProceduralTexture: 'NoiseProceduralTexture',
  mirrorTexture: 'MirrorTexture',
  multiRenderTarget: 'MultiRenderTarget',
  prePassRenderTarget: 'PrePassRenderTarget',
  imageProcessingPostProcess: 'ImageProcessingPostProcess',
  refractionTexture: 'RefractionTexture',
  xrSpaceWarpRenderTarget: 'XRSpaceWarpRenderTarget',
  multiviewRenderTarget: 'MultiviewRenderTarget',
  rawTexture2DArray: 'RawTexture2DArray',
  dynamicTexture: 'DynamicTexture',
  rawTexture3D: 'RawTexture3D',
  colorGradingTexture: 'ColorGradingTexture',
  equiRectangularCubeTexture: 'EquiRectangularCubeTexture',
  hdrCubeTexture: 'HDRCubeTexture',
  htmlElementTexture: 'HtmlElementTexture',
  thinRenderTargetTexture: 'ThinRenderTargetTexture',
  defaultRenderingPipeline: 'DefaultRenderingPipeline',
  chromaticAberrationPostProcess: 'ChromaticAberrationPostProcess',
  fxaaPostProcess: 'FxaaPostProcess',
  grainPostProcess: 'GrainPostProcess',
  sharpenPostProcess: 'SharpenPostProcess',
  lensRenderingPipeline: 'LensRenderingPipeline',
  ssao2RenderingPipeline: 'SSAO2RenderingPipeline',
  ssaoRenderingPipeline: 'SSAORenderingPipeline',
  standardRenderingPipeline: 'StandardRenderingPipeline',
  screenSpaceReflectionPostProcess: 'ScreenSpaceReflectionPostProcess',
  blurPostProcess: 'BlurPostProcess',
  ssrRenderingPipeline: 'SSRRenderingPipeline',
  taaRenderingPipeline: 'TAARenderingPipeline',
  anaglyphPostProcess: 'AnaglyphPostProcess',
  blackAndWhitePostProcess: 'BlackAndWhitePostProcess',
  extractHighlightsPostProcess: 'ExtractHighlightsPostProcess',
  bloomMergePostProcess: 'BloomMergePostProcess',
  depthOfFieldBlurPostProcess: 'DepthOfFieldBlurPostProcess',
  circleOfConfusionPostProcess: 'CircleOfConfusionPostProcess',
  colorCorrectionPostProcess: 'ColorCorrectionPostProcess',
  convolutionPostProcess: 'ConvolutionPostProcess',
  depthOfFieldMergePostProcess: 'DepthOfFieldMergePostProcess',
  displayPassPostProcess: 'DisplayPassPostProcess',
  filterPostProcess: 'FilterPostProcess',
  highlightsPostProcess: 'HighlightsPostProcess',
  motionBlurPostProcess: 'MotionBlurPostProcess',
  passPostProcess: 'PassPostProcess',
  passCubePostProcess: 'PassCubePostProcess',
  refractionPostProcess: 'RefractionPostProcess',
  stereoscopicInterlacePostProcessI: 'StereoscopicInterlacePostProcessI',
  stereoscopicInterlacePostProcess: 'StereoscopicInterlacePostProcess',
  volumetricLightScatteringPostProcess: 'VolumetricLightScatteringPostProcess',
  vrDistortionCorrectionPostProcess: 'VRDistortionCorrectionPostProcess',
  vrMultiviewToSingleviewPostProcess: 'VRMultiviewToSingleviewPostProcess',
  screenSpaceCurvaturePostProcess: 'ScreenSpaceCurvaturePostProcess',
  subSurfaceScatteringPostProcess: 'SubSurfaceScatteringPostProcess',
  planeDragGizmo: 'PlaneDragGizmo',
  positionGizmo: 'PositionGizmo',
  planeRotationGizmo: 'PlaneRotationGizmo',
  rotationGizmo: 'RotationGizmo',
  axisScaleGizmo: 'AxisScaleGizmo',
  scaleGizmo: 'ScaleGizmo',
  boundingBoxGizmo: 'BoundingBoxGizmo',
  axisDragGizmo: 'AxisDragGizmo',
  lightGizmo: 'LightGizmo',
  cameraGizmo: 'CameraGizmo',
  slateGizmo: 'SlateGizmo',
  pbrClearCoatConfiguration: 'PBRClearCoatConfiguration',
  pbrIridescenceConfiguration: 'PBRIridescenceConfiguration',
  pbrAnisotropicConfiguration: 'PBRAnisotropicConfiguration',
  pbrbrdfConfiguration: 'PBRBRDFConfiguration',
  pbrSheenConfiguration: 'PBRSheenConfiguration',
  pbrSubSurfaceConfiguration: 'PBRSubSurfaceConfiguration',
  prePassConfiguration: 'PrePassConfiguration',
  detailMapConfiguration: 'DetailMapConfiguration',
  adtForMesh: 'ADTForMesh',
  adtForMeshTexture: 'ADTForMeshTexture',
  adtFullscreenUi: 'ADTFullscreenUI',
  box: 'Box',
  capsule: 'Capsule',
  cylinder: 'Cylinder',
  dashedLines: 'DashedLines',
  decal: 'Decal',
  disc: 'Disc',
  extrudePolygon: 'ExtrudePolygon',
  extrudeShape: 'ExtrudeShape',
  extrudeShapeCustom: 'ExtrudeShapeCustom',
  geodesic: 'Geodesic',
  goldberg: 'Goldberg',
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
  'babylon-text': 'Text',
  tiledBox: 'TiledBox',
  tiledGround: 'TiledGround',
  tiledPlane: 'TiledPlane',
  torus: 'Torus',
  torusKnot: 'TorusKnot',
  tube: 'Tube',
}

export function babylonClassFactory(importAlias: string): any {
  return (classesMap as any)[importAlias]
}
