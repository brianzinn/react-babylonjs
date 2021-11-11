# Hooks API
The hooks are useful to get access to scene or engine object or get access to render loop or hover/click on meshes, etc.  The hooks for SceneLoader and AssetManager require that the component using them be enclosed in `Suspense`.

*(This is just generated for now and needs cleanup + examples)*

[Hooks API documentation](hooks/modules.md)

# Code generated API
Due to using code generation from the Babylon typings, all of these declarative elements will adhere to the same API (See CustomProps below for exceptions) as you find on [Babylon.js documentation site](https://doc.babylonjs.com/):

If you want to declaratively use something not listed here create an issue :)  Some extensions have been added to allow for declarative scene creation (ie: Shadows, Textures, etc.)

# @babylonjs/core API Support
1. **Node -> Mesh** - abstractMesh, groundMesh, instancedLinesMesh, instancedMesh, linesMesh, mesh, node, transformNode, trailMesh

2. **Cameras** - anaglyphArcRotateCamera, anaglyphFreeCamera, anaglyphGamepadCamera, anaglyphUniversalCamera, arcFollowCamera, arcRotateCamera, camera, deviceOrientationCamera, flyCamera, followCamera, freeCamera, gamepadCamera, stereoscopicArcRotateCamera, stereoscopicFreeCamera, stereoscopicGamepadCamera, stereoscopicUniversalCamera, targetCamera, touchCamera, universalCamera, virtualJoysticksCamera, vrDeviceOrientationArcRotateCamera, vrDeviceOrientationFreeCamera, vrDeviceOrientationGamepadCamera, webVrFreeCamera, webXrCamera

3. **Geometries (meshes)** - box, capsule, cylinder, dashedLines, decal, disc, extrudePolygon, extrudeShape, extrudeShapeCustom, ground, groundFromHeightMap, icoSphere, lathe, lines, lineSystem, plane, babylon-polygon/Polygon, polyhedron, ribbon, sphere, tiledBox, tiledGround, tiledPlane, torus, torusKnot, tube
> note: `babylon-polygon` instead of `polygon` due to JSX conflict with `React.SVGProps<SVGPolygonElement>`

4. **Materials** - backgroundMaterial, fluentMaterial, material, multiMaterial, nodeMaterial, pbrBaseMaterial, pbrBaseSimpleMaterial, pbrMaterial, pbrMetallicRoughnessMaterial, pbrSpecularGlossinessMaterial, pushMaterial, shaderMaterial, standardMaterial

> note: Materials can have configuration (read-only) properties as classes.  With `assignFrom` prop you can declare detailMapConfiguration, pbrClearCoatConfiguration, pbrAnisotropicConfiguration, pbrbrdfConfiguration, pbrSheenConfiguration, pbrSubSurfaceConfiguration to attach to declaratively.  PBRBaseMaterial has all, while StandardMaterial has only detailMapConfiguration. (prePassConfiguration has no updateable properties, but can be attached).

5. **Lights** - directionalLight, hemisphericLight, light, pointLight, shadowLight, spotLight

6. **Textures** - advancedDynamicTexture, baseTexture, colorGradingTexture, cubeTexture, customProceduralTexture, dynamicTexture, equiRectangularCubeTexture, hdrCubeTexture, htmlElementTexture, mirrorTexture, multiRenderTarget, multiviewRenderTarget, noiseProceduralTexture, proceduralTexture, rawCubeTexture, rawTexture, rawTexture2DArray, rawTexture3D, refractionTexture, renderTargetTexture, texture, thinTexture, videoTexture

7. **EffectLayers** - effectLayer, glowLayer, highlightLayer

8. **Behaviors** - autoRotationBehavior, bouncingBehavior, framingBehavior, attachToBoxBehavior, fadeInOutBehavior, multiPointerScaleBehavior, pointerDragBehavior, sixDofDragBehavior

9. **PostProcessRenderPipelines**: defaultRenderingPipeline, lensRenderingPipeline, postProcessRenderPipeline, ssao2RenderingPipeline, ssaoRenderingPipeline, standardRenderingPipeline

10. **PostProcesss** anaglyphPostProcess, blackAndWhitePostProcess, bloomMergePostProcess, blurPostProcess, chromaticAberrationPostProcess, circleOfConfusionPostProcess, colorCorrectionPostProcess, convolutionPostProcess, depthOfFieldBlurPostProcess, depthOfFieldMergePostProcess, displayPassPostProcess, extractHighlightsPostProcess, filterPostProcess, fxaaPostProcess, grainPostProcess, highlightsPostProcess, imageProcessingPostProcess, motionBlurPostProcess, passCubePostProcess, passPostProcess, postProcess, refractionPostProcess, screenSpaceCurvaturePostProcess, screenSpaceReflectionPostProcess, sharpenPostProcess, stereoscopicInterlacePostProcess, stereoscopicInterlacePostProcessI, subSurfaceScatteringPostProcess, tonemapPostProcess, volumetricLightScatteringPostProcess, vrDistortionCorrectionPostProcess, vrMultiviewToSingleviewPostProcess
> note: for `PostProcess` (and `PostProcessRenderPipeline`) the `ImageProcessingConfiguration` and `PrePassConfiguration` properties can be declared with `assignFrom`.

11. **Gizmo** axisDragGizmo, axisScaleGizmo, boundingBoxGizmo, cameraGizmo, gizmo, lightGizmo, planeDragGizmo, planeRotationGizmo, positionGizmo, rotationGizmo, scaleGizmo

12. **Others** - adtForMesh, adtForMeshTexture, adtFullScreenUi, environmentHelper, physicsImpostor, pointsCloudSystem, shadowGenerator / cascadedShadowGenerator, layer, utilityLayerRenderer, viewport, vrExperienceHelper

## @babylonjs/gui
1. GUI3DManager
2. **2D Controls** - scrollViewerWindow, baseSlider, babylon-button/Button, checkbox, colorPicker, container, control, displayGrid, babylon-ellipse/Ellipse, grid, babylon-image/Image, imageBasedSlider, imageScrollBar, inputPassword, inputText, babylon-line/Line, multiLine, radioButton, rectangle, scrollBar, scrollViewer, selectionPanel, slider, stackPanel, textBlock, virtualKeyboard
> note: 'babylon-*' for `button`, `ellipse`, `image` & `line` due to JSX conflict with `React.SVGProps<T>`, otherwise use the ProperCase equivalent, but you miss editor auto-completion.

3. **3D Controls** -  abstractButton3D, button3D, container3D, control3D, cylinderPanel, holographicButton, meshButton3D, planePanel, scatterPanel, spherePanel, stackPanel3D, volumeBasedPanel

## Extensions (new in 2.0)
1. dynamicTerrain

# Custom Props
To be able to allow more declarative capabilities there are additional props that are not on the default babylonjs object.  Other than these properties the React host elements follow the babylon API docs.  These are all optional.

## Props available to all host elements
1. `assignTo` - Assign to this property on the parent.  Parent property is cleared on umnount (ie: texture can be assigned to bump/diffuse/etc.)
2. `assignFrom` - Assigned from a parent property and then participates with props (ie: PBR configurations or PostProcess properties like grain)
3. `fromInstance` - Attach an instance you create (or want re-used) and the renderer will use that instance instead.
4. `disposeInstanceOnUnmount` - Applicable only when using `fromInstance`.  Defaults to `false`, but you can set to true for automatic cleanup.

### AdvancedDynamicTexture
1. `createForParentMesh` - Same as factory method for attaching an ADT to a plane and then the child components are 2D controls.

### Control3D
1. `childrenAsContent` - for 3D control ".content" (which is 2D)
2. `linkToTransformNodeByName` -for Control3D, which has position, but not other properties like rotation
3. `onControlAdded` - callback when control is added.

### GlowLayer
1. `addIncludeOnlyChildren` - Adds all child nodes to the glow layer (and nothing else).

### Material
1. `attachToMeshesByName` - For attaching the same material to multiple meshes (by mesh name)

### Meshes
1. `childMeshesNotTracked` - Useful if you attach children to a mesh and want the child meshes to participate in GlowLayer or ShadowGenerator (see props below).

### ShadowGenerator
1. `shadowCasters` - string array of mesh names to search for, which will be added as shadow casters.
2. `shadowCastersExcluding` - string array of mesh names to exclude from casting shadows (all other meshes by name will cast shadows)
3. `shadowCastChildren` - adds all child nodes as shadow casters.

### Virtual Keyboard
1. `connectControlNames` - 2d input control names
2. `defaultKeyboard` - Use default keyboard

### VRExperienceHelper
1. `enableInteractions` - call `enableInteractions()`.
