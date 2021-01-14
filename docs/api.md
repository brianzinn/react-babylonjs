# Hooks API
The hooks are useful to get access to scene or engine object or get access to render loop or hover/click on meshes, etc.  The hooks for SceneLoader and AssetManager require that the component using them be enclosed in `Suspense`.

*(This is just generated for now and needs cleanup + examples)*

[Hooks API documentation](hooks/modules.md)

# Code generated API
Due to using code generation from the Babylon typings, all of these declarative elements will adhere to the same API as you find on [Babylon.js documentation site](https://doc.babylonjs.com/):

If you want to declaratively use something not listed here create an issue :)  Some extensions have been added to allow for declarative scene creation (ie: Shadows, Textures, etc.)

# @babylonjs/core API Support
1. **Node -> Mesh** - abstractMesh, groundMesh, instancedLinesMesh, instancedMesh, linesMesh, mesh, node, transformNode, trailMesh

2. **Cameras** - anaglyphArcRotateCamera, anaglyphFreeCamera, anaglyphGamepadCamera, anaglyphUniversalCamera, arcFollowCamera, arcRotateCamera, camera, deviceOrientationCamera, flyCamera, followCamera, freeCamera, gamepadCamera, stereoscopicArcRotateCamera, stereoscopicFreeCamera, stereoscopicGamepadCamera, stereoscopicUniversalCamera, targetCamera, touchCamera, universalCamera, virtualJoysticksCamera, vrDeviceOrientationArcRotateCamera, vrDeviceOrientationFreeCamera, vrDeviceOrientationGamepadCamera, webVrFreeCamera, webXrCamera

3. **Geometries (meshes)** - box, capsule, cylinder, dashedLines, decal, disc, extrudePolygon, extrudeShape, extrudeShapeCustom, ground, groundFromHeightMap, icoSphere, lathe, lines, lineSystem, plane, babylon-polygon/Polygon, polyhedron, ribbon, sphere, tiledBox, tiledGround, tiledPlane, torus, torusKnot, tube
> note: `babylon-polygon` instead of `polygon` due to JSX conflict with `React.SVGProps<SVGPolygonElement>`

4. **Materials** - backgroundMaterial, fluentMaterial, material, multiMaterial, nodeMaterial, pbrBaseMaterial, pbrBaseSimpleMaterial, pbrMaterial, pbrMetallicRoughnessMaterial, pbrSpecularGlossinessMaterial, pushMaterial, shaderMaterial, standardMaterial

5. **Lights** - directionalLight, hemisphericLight, light, pointLight, shadowLight, spotLight

6. **Textures** - advancedDynamicTexture, baseTexture, colorGradingTexture, cubeTexture, customProceduralTexture, dynamicTexture, equiRectangularCubeTexture, hdrCubeTexture, htmlElementTexture, mirrorTexture, multiRenderTarget, multiviewRenderTarget, noiseProceduralTexture, proceduralTexture, rawCubeTexture, rawTexture, rawTexture2DArray, rawTexture3D, refractionTexture, renderTargetTexture, texture, videoTexture

7. **EffectLayers** - effectLayer, glowLayer, highlightLayer

8. **Behaviors** - autoRotationBehavior, bouncingBehavior, framingBehavior, attachToBoxBehavior, fadeInOutBehavior, multiPointerScaleBehavior, pointerDragBehavior, sixDofDragBehavior

9. **Others** - adtForMesh, adtFullScreenUi, environmentHelper, physicsImpostor, pointsCloudSystem, shadowGenerator, cascadedShadowGenerator, vrExperienceHelper

## @babylonjs/gui
1. GUI3DManager
2. **2D Controls** - scrollViewerWindow, baseSlider, babylon-button/Button, checkbox, colorPicker, container, control, displayGrid, babylon-ellipse/Ellipse, grid, babylon-image/Image, imageBasedSlider, imageScrollBar, inputPassword, inputText, babylon-line/Line, multiLine, radioButton, rectangle, scrollBar, scrollViewer, selectionPanel, slider, stackPanel, textBlock, virtualKeyboard
> note: 'babylon-*' for `button`, `ellipse`, `image` & `line` due to JSX conflict with `React.SVGProps<T>`, otherwise use the ProperCase equivalent, but you miss editor auto-completion.

3. **3D Controls** -  abstractButton3D, button3D, container3D, control3D, cylinderPanel, holographicButton, meshButton3D, planePanel, scatterPanel, spherePanel, stackPanel3D, volumeBasedPanel

## Extensions (new in 2.0)
1. dynamicTerrain