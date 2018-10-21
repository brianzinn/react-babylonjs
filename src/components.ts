export const Ground = "Ground"

export const Sphere = "Sphere"

export const FreeCamera = "FreeCamera"

export const DirectionalLight = "DirectionalLight"

export const IcoSphere = "IcoSphere"

export const Plane = "Plane"

export const HemisphericLight = "HemisphericLight";

export const StandardMaterial = "StandardMaterial"

export const ArcRotateCamera = "ArcRotateCamera"

export const Box = "Box"

export default {
    "AnaglyphArcRotateCamera": {
      "args": [
        "name",
        "alpha",
        "beta",
        "radius",
        "target",
        "interaxialDistance",
        "scene"
      ],
      "family": "cameras",
      "name": "AnaglyphArcRotateCamera",
      "props": []
    },
    "AnaglyphFreeCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "scene"
      ],
      "family": "cameras",
      "name": "AnaglyphFreeCamera",
      "props": []
    },
    "AnaglyphGamepadCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "scene"
      ],
      "family": "cameras",
      "name": "AnaglyphGamepadCamera",
      "props": []
    },
    "AnaglyphUniversalCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "scene"
      ],
      "family": "cameras",
      "name": "AnaglyphUniversalCamera",
      "props": []
    },
    "ArcFollowCamera": {
      "args": [
        "name",
        "alpha",
        "beta",
        "radius",
        "target",
        "scene"
      ],
      "family": "cameras",
      "name": "ArcFollowCamera",
      "props": [
        "alpha",
        "beta",
        "radius",
        "target"
      ]
    },
    "ArcRotateCamera": {
      "args": [
        "name",
        "alpha",
        "beta",
        "radius",
        "target",
        "scene",
        "setActiveOnSceneIfNoneActive"
      ],
      "family": "cameras",
      "name": "ArcRotateCamera",
      "props": [
        "alpha",
        "beta",
        "radius",
        "target",
        "inertialAlphaOffset",
        "inertialBetaOffset",
        "inertialRadiusOffset",
        "lowerAlphaLimit",
        "upperAlphaLimit",
        "lowerBetaLimit",
        "upperBetaLimit",
        "lowerRadiusLimit",
        "upperRadiusLimit",
        "inertialPanningX",
        "inertialPanningY",
        "pinchToPanMaxDistance",
        "panningDistanceLimit",
        "panningOriginTarget",
        "panningInertia",
        "angularSensibilityX",
        "angularSensibilityY",
        "pinchPrecision",
        "pinchDeltaPercentage",
        "panningSensibility",
        "keysUp",
        "keysDown",
        "keysLeft",
        "keysRight",
        "wheelPrecision",
        "wheelDeltaPercentage",
        "zoomOnFactor",
        "targetScreenOffset",
        "allowUpsideDown",
        "useInputToRestoreState",
        "inputs",
        "panningAxis",
        "bouncingBehavior",
        "useBouncingBehavior",
        "framingBehavior",
        "useFramingBehavior",
        "autoRotationBehavior",
        "useAutoRotationBehavior",
        "onMeshTargetChangedObservable",
        "onCollide",
        "checkCollisions",
        "collisionRadius"
      ]
    },
    "BackgroundMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "BackgroundMaterial",
      "props": [
        "primaryColor",
        "primaryColorShadowLevel",
        "primaryColorHighlightLevel",
        "reflectionTexture",
        "reflectionBlur",
        "diffuseTexture",
        "shadowLights",
        "shadowLevel",
        "sceneCenter",
        "opacityFresnel",
        "reflectionFresnel",
        "reflectionFalloffDistance",
        "reflectionAmount",
        "reflectionReflectance0",
        "reflectionReflectance90",
        "reflectionStandardFresnelWeight",
        "useRGBColor",
        "enableNoise",
        "fovMultiplier",
        "useEquirectangularFOV",
        "maxSimultaneousLights",
        "imageProcessingConfiguration",
        "cameraColorCurvesEnabled",
        "cameraColorGradingEnabled",
        "cameraToneMappingEnabled",
        "cameraExposure",
        "cameraContrast",
        "cameraColorGradingTexture",
        "cameraColorCurves",
        "switchToBGR",
        "hasRenderTargetTextures"
      ]
    },
    "BaseTexture": {
      "args": [
        "scene"
      ],
      "family": "materials",
      "name": "BaseTexture",
      "props": [
        "name",
        "hasAlpha",
        "getAlphaFromRGB",
        "level",
        "coordinatesIndex",
        "coordinatesMode",
        "wrapU",
        "wrapV",
        "wrapR",
        "anisotropicFilteringLevel",
        "isCube",
        "is3D",
        "gammaSpace",
        "isRGBD",
        "invertZ",
        "lodLevelInAlpha",
        "lodGenerationOffset",
        "lodGenerationScale",
        "isRenderTarget",
        "uid",
        "animations",
        "onDisposeObservable",
        "onDispose",
        "delayLoadState",
        "isBlocking",
        "canRescale",
        "textureType",
        "textureFormat",
        "sphericalPolynomial"
      ]
    },
    "Box": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Box",
      "options": [
        "size",
        "width",
        "height",
        "depth",
        "faceUV",
        "faceColors",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "updatable"
      ]
    },
    "Camera": {
      "args": [
        "name",
        "position",
        "scene",
        "setActiveOnSceneIfNoneActive"
      ],
      "family": "cameras",
      "name": "Camera",
      "props": [
        "inputs",
        "position",
        "upVector",
        "orthoLeft",
        "orthoRight",
        "orthoBottom",
        "orthoTop",
        "fov",
        "minZ",
        "maxZ",
        "inertia",
        "mode",
        "isIntermediate",
        "viewport",
        "layerMask",
        "fovMode",
        "cameraRigMode",
        "interaxialDistance",
        "isStereoscopicSideBySide",
        "customRenderTargets",
        "onViewMatrixChangedObservable",
        "onProjectionMatrixChangedObservable",
        "onAfterCheckInputsObservable",
        "onRestoreStateObservable",
        "globalPosition",
        "rigCameras",
        "rigPostProcess",
        "leftCamera",
        "rightCamera"
      ]
    },
    "ColorGradingTexture": {
      "args": [
        "url",
        "scene"
      ],
      "family": "materials",
      "name": "ColorGradingTexture",
      "props": [
        "url",
        "load3dlTexture",
        "loadTexture"
      ]
    },
    "CubeTexture": {
      "args": [
        "rootUrl",
        "scene",
        "extensions",
        "noMipmap",
        "files",
        "onLoad",
        "onError",
        "format",
        "prefiltered",
        "forcedExtension",
        "createPolynomials",
        "lodScale",
        "lodOffset"
      ],
      "family": "materials",
      "name": "CubeTexture",
      "props": [
        "url",
        "boundingBoxPosition",
        "boundingBoxSize",
        "rotationY"
      ]
    },
    "CubeTextureAssetTask": {
      "args": [
        "name",
        "url",
        "extensions",
        "noMipmap",
        "files"
      ],
      "family": "materials",
      "name": "CubeTextureAssetTask",
      "props": [
        "name",
        "url",
        "extensions",
        "noMipmap",
        "files",
        "texture",
        "onSuccess",
        "onError"
      ]
    },
    "CustomProceduralTexture": {
      "args": [
        "name",
        "texturePath",
        "size",
        "scene",
        "fallbackTexture",
        "generateMipMaps"
      ],
      "family": "materials",
      "name": "CustomProceduralTexture",
      "props": [
        "animate"
      ]
    },
    "Cylinder": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Cylinder",
      "options": [
        "height",
        "diameterTop",
        "diameterBottom",
        "diameter",
        "tessellation",
        "subdivisions",
        "arc",
        "faceColors",
        "faceUV",
        "updatable",
        "hasRings",
        "enclose",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "DashedLines": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "DashedLines",
      "options": [
        "points",
        "dashSize",
        "gapSize",
        "dashNb",
        "updatable",
        "instance"
      ]
    },
    "Decal": {
      "args": [
        "name",
        "sourceMesh",
        "options"
      ],
      "family": "meshes",
      "name": "Decal",
      "options": [
        "position",
        "normal",
        "size",
        "angle"
      ]
    },
    "DepthTextureCreationOptions": {
      "args": [],
      "family": "materials",
      "name": "DepthTextureCreationOptions",
      "props": [
        "generateStencil",
        "bilinearFiltering",
        "comparisonFunction",
        "isCube"
      ]
    },
    "DeviceOrientationCamera": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "cameras",
      "name": "DeviceOrientationCamera",
      "props": []
    },
    "DirectionalLight": {
      "args": [
        "name",
        "direction",
        "scene"
      ],
      "family": "lights",
      "name": "DirectionalLight",
      "props": [
        "shadowFrustumSize",
        "shadowOrthoScale",
        "autoUpdateExtends"
      ]
    },
    "Disc": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Disc",
      "options": [
        "radius",
        "tessellation",
        "arc",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "DummyInternalTextureTracker": {
      "args": [],
      "family": "materials",
      "name": "DummyInternalTextureTracker",
      "props": [
        "previous",
        "next"
      ]
    },
    "DynamicTexture": {
      "args": [
        "name",
        "options",
        "scene",
        "generateMipMaps",
        "samplingMode",
        "format"
      ],
      "family": "materials",
      "name": "DynamicTexture",
      "props": [
        "canRescale"
      ]
    },
    "EnvironmentTextureTools": {
      "args": [],
      "family": "materials",
      "name": "EnvironmentTextureTools",
      "props": []
    },
    "FollowCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "lockedTarget"
      ],
      "family": "cameras",
      "name": "FollowCamera",
      "props": [
        "radius",
        "rotationOffset",
        "heightOffset",
        "cameraAcceleration",
        "maxCameraSpeed",
        "lockedTarget"
      ]
    },
    "FreeCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "setActiveOnSceneIfNoneActive"
      ],
      "family": "cameras",
      "name": "FreeCamera",
      "props": [
        "ellipsoid",
        "ellipsoidOffset",
        "checkCollisions",
        "applyGravity",
        "inputs",
        "angularSensibility",
        "keysUp",
        "keysDown",
        "keysLeft",
        "keysRight",
        "onCollide",
        "collisionMask"
      ]
    },
    "GamepadCamera": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "cameras",
      "name": "GamepadCamera",
      "props": []
    },
    "Ground": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Ground",
      "options": [
        "width",
        "height",
        "subdivisions",
        "subdivisionsX",
        "subdivisionsY",
        "updatable"
      ]
    },
    "GroundFromHeightMap": {
      "args": [
        "name",
        "url",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "GroundFromHeightMap",
      "options": [
        "width",
        "height",
        "subdivisions",
        "minHeight",
        "maxHeight",
        "colorFilter",
        "alphaFilter",
        "updatable",
        "onReady"
      ]
    },
    "HDRCubeTexture": {
      "args": [
        "url",
        "scene",
        "size",
        "noMipmap",
        "generateHarmonics",
        "gammaSpace",
        "reserved",
        "onLoad",
        "onError"
      ],
      "family": "materials",
      "name": "HDRCubeTexture",
      "props": [
        "url",
        "coordinatesMode",
        "isBlocking",
        "rotationY",
        "boundingBoxPosition",
        "boundingBoxSize",
        "loadTexture"
      ]
    },
    "HDRCubeTextureAssetTask": {
      "args": [
        "name",
        "url",
        "size",
        "noMipmap",
        "generateHarmonics",
        "gammaSpace",
        "reserved"
      ],
      "family": "materials",
      "name": "HDRCubeTextureAssetTask",
      "props": [
        "name",
        "url",
        "size",
        "noMipmap",
        "generateHarmonics",
        "gammaSpace",
        "reserved",
        "texture",
        "onSuccess",
        "onError"
      ]
    },
    "HemisphericLight": {
      "args": [
        "name",
        "direction",
        "scene"
      ],
      "family": "lights",
      "name": "HemisphericLight",
      "props": [
        "groundColor",
        "direction"
      ]
    },
    "IcoSphere": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "IcoSphere",
      "options": [
        "radius",
        "radiusX",
        "radiusY",
        "radiusZ",
        "flat",
        "subdivisions",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "updatable"
      ]
    },
    "InternalTexture": {
      "args": [
        "engine",
        "dataSource"
      ],
      "family": "materials",
      "name": "InternalTexture",
      "props": [
        "isReady",
        "isCube",
        "is3D",
        "url",
        "samplingMode",
        "generateMipMaps",
        "samples",
        "type",
        "format",
        "onLoadedObservable",
        "width",
        "height",
        "depth",
        "baseWidth",
        "baseHeight",
        "baseDepth",
        "invertY",
        "previous",
        "next",
        "dataSource"
      ]
    },
    "KhronosTextureContainer": {
      "args": [
        "arrayBuffer",
        "facesExpected",
        "threeDExpected",
        "textureArrayExpected"
      ],
      "family": "materials",
      "name": "KhronosTextureContainer",
      "props": [
        "arrayBuffer",
        "glType",
        "glTypeSize",
        "glFormat",
        "glInternalFormat",
        "glBaseInternalFormat",
        "pixelWidth",
        "pixelHeight",
        "pixelDepth",
        "numberOfArrayElements",
        "numberOfFaces",
        "numberOfMipmapLevels",
        "bytesOfKeyValueData",
        "loadType"
      ]
    },
    "Lathe": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Lathe",
      "options": [
        "shape",
        "radius",
        "tessellation",
        "clip",
        "arc",
        "closed",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "cap",
        "invertUV"
      ]
    },
    "Light": {
      "args": [
        "name",
        "scene"
      ],
      "family": "lights",
      "name": "Light",
      "props": [
        "diffuse",
        "specular",
        "falloffType",
        "intensity",
        "range",
        "intensityMode",
        "radius",
        "renderPriority",
        "shadowEnabled",
        "includedOnlyMeshes",
        "excludedMeshes",
        "excludeWithLayerMask",
        "includeOnlyWithLayerMask",
        "lightmapMode"
      ]
    },
    "LineSystem": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "LineSystem",
      "options": [
        "lines",
        "updatable",
        "instance",
        "colors",
        "useVertexAlpha"
      ]
    },
    "Lines": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Lines",
      "options": [
        "points",
        "updatable",
        "instance",
        "colors",
        "useVertexAlpha"
      ]
    },
    "Material": {
      "args": [
        "name",
        "scene",
        "doNotAdd"
      ],
      "family": "materials",
      "name": "Material",
      "props": [
        "id",
        "uniqueId",
        "name",
        "checkReadyOnEveryCall",
        "checkReadyOnlyOnce",
        "state",
        "alpha",
        "backFaceCulling",
        "sideOrientation",
        "onCompiled",
        "onError",
        "getRenderTargetTextures",
        "hasRenderTargetTextures",
        "doNotSerialize",
        "storeEffectOnSubMeshes",
        "animations",
        "onDisposeObservable",
        "onDispose",
        "onBindObservable",
        "onBind",
        "onUnBindObservable",
        "alphaMode",
        "needDepthPrePass",
        "disableDepthWrite",
        "forceDepthWrite",
        "separateCullingPass",
        "fogEnabled",
        "pointSize",
        "zOffset",
        "wireframe",
        "pointsCloud",
        "fillMode",
        "isFrozen"
      ]
    },
    "MaterialHelper": {
      "args": [],
      "family": "materials",
      "name": "MaterialHelper",
      "props": []
    },
    "Mesh": {
      "args": [
        "name",
        "scene",
        "parent",
        "source",
        "doNotCloneChildren",
        "clonePhysicsImpostor"
      ],
      "family": "meshes",
      "name": "Mesh",
      "props": [
        "onBeforeRenderObservable",
        "onAfterRenderObservable",
        "onBeforeDrawObservable",
        "onBeforeDraw",
        "delayLoadState",
        "instances",
        "delayLoadingFile",
        "onLODLevelSelection",
        "morphTargetManager",
        "overrideMaterialSideOrientation",
        "source",
        "isUnIndexed",
        "hasLODLevels",
        "geometry",
        "isBlocked",
        "areNormalsFrozen",
        "overridenInstanceCount",
        "normalizeSkinFourWeights",
        "normalizeSkinWeightsAndExtra"
      ]
    },
    "MirrorTexture": {
      "args": [
        "name",
        "size",
        "scene",
        "generateMipMaps",
        "type",
        "samplingMode",
        "generateDepthBuffer"
      ],
      "family": "materials",
      "name": "MirrorTexture",
      "props": [
        "scene",
        "mirrorPlane",
        "blurRatio",
        "adaptiveBlurKernel",
        "blurKernel",
        "blurKernelX",
        "blurKernelY"
      ]
    },
    "MultiMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "MultiMaterial",
      "props": [
        "subMaterials"
      ]
    },
    "NoiseProceduralTexture": {
      "args": [
        "name",
        "size",
        "scene",
        "fallbackTexture",
        "generateMipMaps"
      ],
      "family": "materials",
      "name": "NoiseProceduralTexture",
      "props": [
        "brightness",
        "octaves",
        "persistence",
        "animationSpeedFactor"
      ]
    },
    "PBRBaseMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PBRBaseMaterial",
      "props": [
        "hasRenderTargetTextures",
        "useLogarithmicDepth",
        "transparencyMode"
      ]
    },
    "PBRBaseSimpleMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PBRBaseSimpleMaterial",
      "props": [
        "maxSimultaneousLights",
        "disableLighting",
        "environmentTexture",
        "invertNormalMapX",
        "invertNormalMapY",
        "normalTexture",
        "emissiveColor",
        "emissiveTexture",
        "occlusionStrength",
        "occlusionTexture",
        "alphaCutOff",
        "doubleSided",
        "lightmapTexture",
        "useLightmapAsShadowmap"
      ]
    },
    "PBRMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PBRMaterial",
      "props": [
        "directIntensity",
        "emissiveIntensity",
        "environmentIntensity",
        "specularIntensity",
        "disableBumpMap",
        "albedoTexture",
        "ambientTexture",
        "ambientTextureStrength",
        "ambientTextureImpactOnAnalyticalLights",
        "opacityTexture",
        "reflectionTexture",
        "emissiveTexture",
        "reflectivityTexture",
        "metallicTexture",
        "metallic",
        "roughness",
        "microSurfaceTexture",
        "bumpTexture",
        "lightmapTexture",
        "refractionTexture",
        "ambientColor",
        "albedoColor",
        "reflectivityColor",
        "reflectionColor",
        "emissiveColor",
        "microSurface",
        "indexOfRefraction",
        "invertRefractionY",
        "linkRefractionWithTransparency",
        "useLightmapAsShadowmap",
        "useAlphaFromAlbedoTexture",
        "forceAlphaTest",
        "alphaCutOff",
        "useSpecularOverAlpha",
        "useMicroSurfaceFromReflectivityMapAlpha",
        "useRoughnessFromMetallicTextureAlpha",
        "useRoughnessFromMetallicTextureGreen",
        "useMetallnessFromMetallicTextureBlue",
        "useAmbientOcclusionFromMetallicTextureRed",
        "useAmbientInGrayScale",
        "useAutoMicroSurfaceFromReflectivityMap",
        "usePhysicalLightFalloff",
        "useGLTFLightFalloff",
        "useRadianceOverAlpha",
        "useObjectSpaceNormalMap",
        "useParallax",
        "useParallaxOcclusion",
        "parallaxScaleBias",
        "disableLighting",
        "forceIrradianceInFragment",
        "maxSimultaneousLights",
        "invertNormalMapX",
        "invertNormalMapY",
        "twoSidedLighting",
        "useAlphaFresnel",
        "useLinearAlphaFresnel",
        "environmentBRDFTexture",
        "forceNormalForward",
        "enableSpecularAntiAliasing",
        "useHorizonOcclusion",
        "useRadianceOcclusion",
        "unlit",
        "imageProcessingConfiguration",
        "cameraColorCurvesEnabled",
        "cameraColorGradingEnabled",
        "cameraToneMappingEnabled",
        "cameraExposure",
        "cameraContrast",
        "cameraColorGradingTexture",
        "cameraColorCurves"
      ]
    },
    "PBRMetallicRoughnessMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PBRMetallicRoughnessMaterial",
      "props": [
        "baseColor",
        "baseTexture",
        "metallic",
        "roughness",
        "metallicRoughnessTexture"
      ]
    },
    "PBRSpecularGlossinessMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PBRSpecularGlossinessMaterial",
      "props": [
        "diffuseColor",
        "diffuseTexture",
        "specularColor",
        "glossiness",
        "specularGlossinessTexture"
      ]
    },
    "Plane": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Plane",
      "options": [
        "size",
        "width",
        "height",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "updatable",
        "sourcePlane"
      ]
    },
    "PointLight": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "lights",
      "name": "PointLight",
      "props": [
        "shadowAngle",
        "direction"
      ]
    },
    "Polygon": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Polygon",
      "options": [
        "shape",
        "holes",
        "depth",
        "faceUV",
        "faceColors",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "Polyhedron": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Polyhedron",
      "options": [
        "type",
        "size",
        "sizeX",
        "sizeY",
        "sizeZ",
        "custom",
        "faceUV",
        "faceColors",
        "flat",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "PositionNormalTextureVertex": {
      "args": [
        "position",
        "normal",
        "uv"
      ],
      "family": "materials",
      "name": "PositionNormalTextureVertex",
      "props": [
        "position",
        "normal",
        "uv"
      ]
    },
    "ProceduralTexture": {
      "args": [
        "name",
        "size",
        "fragment",
        "scene",
        "fallbackTexture",
        "generateMipMaps",
        "isCube"
      ],
      "family": "materials",
      "name": "ProceduralTexture",
      "props": [
        "isCube",
        "isEnabled",
        "autoClear",
        "onGenerated",
        "onGeneratedObservable",
        "refreshRate"
      ]
    },
    "ProceduralTextureSceneComponent": {
      "args": [
        "scene"
      ],
      "family": "materials",
      "name": "ProceduralTextureSceneComponent",
      "props": [
        "name",
        "scene"
      ]
    },
    "PushMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "PushMaterial",
      "props": []
    },
    "RawCubeTexture": {
      "args": [
        "scene",
        "data",
        "size",
        "format",
        "type",
        "generateMipMaps",
        "invertY",
        "samplingMode",
        "compression"
      ],
      "family": "materials",
      "name": "RawCubeTexture",
      "props": []
    },
    "RawTexture": {
      "args": [
        "data",
        "width",
        "height",
        "format",
        "scene",
        "generateMipMaps",
        "invertY",
        "samplingMode",
        "type"
      ],
      "family": "materials",
      "name": "RawTexture",
      "props": [
        "format"
      ]
    },
    "RawTexture3D": {
      "args": [
        "data",
        "width",
        "height",
        "depth",
        "format",
        "scene",
        "generateMipMaps",
        "invertY",
        "samplingMode",
        "textureType"
      ],
      "family": "materials",
      "name": "RawTexture3D",
      "props": [
        "format"
      ]
    },
    "RefractionTexture": {
      "args": [
        "name",
        "size",
        "scene",
        "generateMipMaps"
      ],
      "family": "materials",
      "name": "RefractionTexture",
      "props": [
        "refractionPlane",
        "depth"
      ]
    },
    "RenderTargetTexture": {
      "args": [
        "name",
        "size",
        "scene",
        "generateMipMaps",
        "doNotChangeAspectRatio",
        "type",
        "isCube",
        "samplingMode",
        "generateDepthBuffer",
        "generateStencilBuffer",
        "isMulti",
        "format"
      ],
      "family": "materials",
      "name": "RenderTargetTexture",
      "props": [
        "isCube",
        "renderListPredicate",
        "renderList",
        "renderParticles",
        "renderSprites",
        "coordinatesMode",
        "activeCamera",
        "customRenderFunction",
        "useCameraPostProcesses",
        "ignoreCameraViewport",
        "onBeforeBindObservable",
        "onAfterUnbindObservable",
        "onAfterUnbind",
        "onBeforeRenderObservable",
        "onBeforeRender",
        "onAfterRenderObservable",
        "onAfterRender",
        "onClearObservable",
        "onClear",
        "clearColor",
        "renderTargetOptions",
        "boundingBoxPosition",
        "boundingBoxSize",
        "depthStencilTexture",
        "samples",
        "refreshRate",
        "canRescale",
        "renderToTarget"
      ]
    },
    "Ribbon": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Ribbon",
      "options": [
        "pathArray",
        "closeArray",
        "closePath",
        "offset",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "instance",
        "invertUV",
        "uvs",
        "colors"
      ]
    },
    "ShaderMaterial": {
      "args": [
        "name",
        "scene",
        "shaderPath",
        "options"
      ],
      "family": "materials",
      "name": "ShaderMaterial",
      "props": []
    },
    "ShadowLight": {
      "args": [],
      "family": "lights",
      "name": "ShadowLight",
      "props": [
        "position",
        "direction",
        "shadowMinZ",
        "shadowMaxZ",
        "customProjectionMatrixBuilder",
        "transformedPosition",
        "transformedDirection"
      ]
    },
    "Sphere": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Sphere",
      "options": [
        "segments",
        "diameter",
        "diameterX",
        "diameterY",
        "diameterZ",
        "arc",
        "slice",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "updatable"
      ]
    },
    "SpotLight": {
      "args": [
        "name",
        "position",
        "direction",
        "angle",
        "exponent",
        "scene"
      ],
      "family": "lights",
      "name": "SpotLight",
      "props": [
        "angle",
        "innerAngle",
        "shadowAngleScale",
        "exponent",
        "projectionTextureMatrix",
        "projectionTextureLightNear",
        "projectionTextureLightFar",
        "projectionTextureUpDirection",
        "projectionTexture"
      ]
    },
    "Sprite": {
      "args": [
        "name",
        "manager"
      ],
      "family": "materials",
      "name": "Sprite",
      "props": [
        "name",
        "position",
        "color",
        "width",
        "height",
        "angle",
        "cellIndex",
        "invertU",
        "invertV",
        "disposeWhenFinishedAnimating",
        "animations",
        "isPickable",
        "actionManager",
        "isVisible",
        "size"
      ]
    },
    "SpriteManager": {
      "args": [
        "name",
        "imgUrl",
        "capacity",
        "cellSize",
        "scene",
        "epsilon",
        "samplingMode"
      ],
      "family": "materials",
      "name": "SpriteManager",
      "props": [
        "name",
        "sprites",
        "renderingGroupId",
        "layerMask",
        "fogEnabled",
        "isPickable",
        "cellWidth",
        "cellHeight",
        "onDisposeObservable",
        "onDispose",
        "texture"
      ]
    },
    "SpriteSceneComponent": {
      "args": [
        "scene"
      ],
      "family": "materials",
      "name": "SpriteSceneComponent",
      "props": [
        "name",
        "scene"
      ]
    },
    "StandardMaterial": {
      "args": [
        "name",
        "scene"
      ],
      "family": "materials",
      "name": "StandardMaterial",
      "props": [
        "diffuseTexture",
        "ambientTexture",
        "opacityTexture",
        "reflectionTexture",
        "emissiveTexture",
        "specularTexture",
        "bumpTexture",
        "lightmapTexture",
        "refractionTexture",
        "ambientColor",
        "diffuseColor",
        "specularColor",
        "emissiveColor",
        "specularPower",
        "useAlphaFromDiffuseTexture",
        "useEmissiveAsIllumination",
        "linkEmissiveWithDiffuse",
        "useSpecularOverAlpha",
        "useReflectionOverAlpha",
        "disableLighting",
        "useObjectSpaceNormalMap",
        "useParallax",
        "useParallaxOcclusion",
        "parallaxScaleBias",
        "roughness",
        "indexOfRefraction",
        "invertRefractionY",
        "alphaCutOff",
        "useLightmapAsShadowmap",
        "diffuseFresnelParameters",
        "opacityFresnelParameters",
        "reflectionFresnelParameters",
        "refractionFresnelParameters",
        "emissiveFresnelParameters",
        "useReflectionFresnelFromSpecular",
        "useGlossinessFromSpecularMapAlpha",
        "maxSimultaneousLights",
        "invertNormalMapX",
        "invertNormalMapY",
        "twoSidedLighting",
        "imageProcessingConfiguration",
        "cameraColorCurvesEnabled",
        "cameraColorGradingEnabled",
        "cameraToneMappingEnabled",
        "cameraExposure",
        "cameraContrast",
        "cameraColorGradingTexture",
        "cameraColorCurves",
        "customShaderNameResolve",
        "hasRenderTargetTextures",
        "useLogarithmicDepth"
      ]
    },
    "StereoscopicArcRotateCamera": {
      "args": [
        "name",
        "alpha",
        "beta",
        "radius",
        "target",
        "interaxialDistance",
        "isStereoscopicSideBySide",
        "scene"
      ],
      "family": "cameras",
      "name": "StereoscopicArcRotateCamera",
      "props": []
    },
    "StereoscopicFreeCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "isStereoscopicSideBySide",
        "scene"
      ],
      "family": "cameras",
      "name": "StereoscopicFreeCamera",
      "props": []
    },
    "StereoscopicGamepadCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "isStereoscopicSideBySide",
        "scene"
      ],
      "family": "cameras",
      "name": "StereoscopicGamepadCamera",
      "props": []
    },
    "StereoscopicUniversalCamera": {
      "args": [
        "name",
        "position",
        "interaxialDistance",
        "isStereoscopicSideBySide",
        "scene"
      ],
      "family": "cameras",
      "name": "StereoscopicUniversalCamera",
      "props": []
    },
    "TargetCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "setActiveOnSceneIfNoneActive"
      ],
      "family": "cameras",
      "name": "TargetCamera",
      "props": [
        "cameraDirection",
        "cameraRotation",
        "rotation",
        "rotationQuaternion",
        "speed",
        "noRotationConstraint",
        "lockedTarget"
      ]
    },
    "Texture": {
      "args": [
        "url",
        "scene",
        "noMipmap",
        "invertY",
        "samplingMode",
        "onLoad",
        "onError",
        "buffer",
        "deleteBuffer",
        "format"
      ],
      "family": "materials",
      "name": "Texture",
      "props": [
        "url",
        "uOffset",
        "vOffset",
        "uScale",
        "vScale",
        "uAng",
        "vAng",
        "wAng",
        "uRotationCenter",
        "vRotationCenter",
        "wRotationCenter",
        "noMipmap",
        "onLoadObservable",
        "isBlocking",
        "samplingMode"
      ]
    },
    "TextureAssetTask": {
      "args": [
        "name",
        "url",
        "noMipmap",
        "invertY",
        "samplingMode"
      ],
      "family": "materials",
      "name": "TextureAssetTask",
      "props": [
        "name",
        "url",
        "noMipmap",
        "invertY",
        "samplingMode",
        "texture",
        "onSuccess",
        "onError"
      ]
    },
    "TextureOptimization": {
      "args": [
        "priority",
        "maximumSize",
        "step"
      ],
      "family": "materials",
      "name": "TextureOptimization",
      "props": [
        "priority",
        "maximumSize",
        "step"
      ]
    },
    "TextureTools": {
      "args": [],
      "family": "materials",
      "name": "TextureTools",
      "props": []
    },
    "TiledGround": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "TiledGround",
      "options": [
        "xmin",
        "zmin",
        "xmax",
        "zmax",
        "subdivisions",
        "precision",
        "updatable"
      ]
    },
    "Torus": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Torus",
      "options": [
        "diameter",
        "thickness",
        "tessellation",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "TorusKnot": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "TorusKnot",
      "options": [
        "radius",
        "tube",
        "radialSegments",
        "tubularSegments",
        "p",
        "q",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs"
      ]
    },
    "TouchCamera": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "cameras",
      "name": "TouchCamera",
      "props": [
        "touchAngularSensibility",
        "touchMoveSensibility"
      ]
    },
    "Tube": {
      "args": [
        "name",
        "options",
        "scene"
      ],
      "family": "meshes",
      "name": "Tube",
      "options": [
        "path",
        "radius",
        "tessellation",
        "radiusFunction",
        "cap",
        "arc",
        "updatable",
        "sideOrientation",
        "frontUVs",
        "backUVs",
        "instance",
        "invertUV"
      ]
    },
    "UniversalCamera": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "cameras",
      "name": "UniversalCamera",
      "props": [
        "gamepadAngularSensibility",
        "gamepadMoveSensibility"
      ]
    },
    "VRCameraMetrics": {
      "args": [],
      "family": "cameras",
      "name": "VRCameraMetrics",
      "props": [
        "hResolution",
        "vResolution",
        "hScreenSize",
        "vScreenSize",
        "vScreenCenter",
        "eyeToScreenDistance",
        "lensSeparationDistance",
        "interpupillaryDistance",
        "distortionK",
        "chromaAbCorrection",
        "postProcessScaleFactor",
        "lensCenterOffset",
        "compensateDistortion",
        "aspectRatio",
        "aspectRatioFov",
        "leftHMatrix",
        "rightHMatrix",
        "leftPreViewMatrix",
        "rightPreViewMatrix"
      ]
    },
    "VRDeviceOrientationArcRotateCamera": {
      "args": [
        "name",
        "alpha",
        "beta",
        "radius",
        "target",
        "scene",
        "compensateDistortion",
        "vrCameraMetrics"
      ],
      "family": "cameras",
      "name": "VRDeviceOrientationArcRotateCamera",
      "props": []
    },
    "VRDeviceOrientationFreeCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "compensateDistortion",
        "vrCameraMetrics"
      ],
      "family": "cameras",
      "name": "VRDeviceOrientationFreeCamera",
      "props": []
    },
    "VRDeviceOrientationGamepadCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "compensateDistortion",
        "vrCameraMetrics"
      ],
      "family": "cameras",
      "name": "VRDeviceOrientationGamepadCamera",
      "props": []
    },
    "VideoTexture": {
      "args": [
        "name",
        "src",
        "scene",
        "generateMipMaps",
        "invertY",
        "samplingMode",
        "settings"
      ],
      "family": "materials",
      "name": "VideoTexture",
      "props": [
        "autoUpdateTexture",
        "video",
        "onUserActionRequestedObservable",
        "reset"
      ]
    },
    "VirtualJoysticksCamera": {
      "args": [
        "name",
        "position",
        "scene"
      ],
      "family": "cameras",
      "name": "VirtualJoysticksCamera",
      "props": []
    },
    "WebVRFreeCamera": {
      "args": [
        "name",
        "position",
        "scene",
        "webVROptions"
      ],
      "family": "cameras",
      "name": "WebVRFreeCamera",
      "props": [
        "webVROptions",
        "rawPose",
        "devicePosition",
        "deviceRotationQuaternion",
        "deviceScaleFactor",
        "controllers",
        "onControllersAttachedObservable",
        "onControllerMeshLoadedObservable",
        "onPoseUpdatedFromDeviceObservable",
        "rigParenting",
        "leftController",
        "rightController",
        "updateCacheCalled"
      ]
    }
  }