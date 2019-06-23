import * as BABYLON from "babylonjs"
import GUI from "babylonjs-gui"

export class FiberDynamicTerrainProps {
  name?: string
  scene?: any
  terrainSub?: number
  mapData?: number[] | Float32Array
  mapSubX?: number
  mapSubZ?: number
  mapUVs?: number[] | Float32Array
  mapColors?: number[] | Float32Array
  mapNormals?: number[] | Float32Array
  invertSide?: boolean
  camera?: any
  SPmapData?: number[][] | Float32Array[]
  sps?: any
  SPcolorData?: number[][] | Float32Array[]
  SPuvData?: number[][] | Float32Array[]
  intializedCallback?: any
}
export class FiberNodeProps {
  addToSceneRootNodes?: any
  animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride
  animations?: BABYLON.Animation[]
  doNotSerialize?: boolean
  id?: string
  metadata?: any
  name?: string
  onDispose?: () => void
  onDisposeObservable?: BABYLON.Observable<BABYLON.Node>
  onReady?: (node: BABYLON.Node) => void
  parent?: BABYLON.Node
  removeFromSceneRootNodes?: any
  reservedDataStore?: any
  state?: string
  uniqueId?: number
  setEnabled?: any
}

export class FiberTransformNodeProps extends FiberNodeProps {
  billboardMode?: number
  ignoreNonUniformScaling?: boolean
  infiniteDistance?: boolean
  onAfterWorldMatrixUpdateObservable?: BABYLON.Observable<BABYLON.TransformNode>
  position?: BABYLON.Vector3
  rotation?: BABYLON.Vector3
  rotationQuaternion?: BABYLON.Quaternion
  scaling?: BABYLON.Vector3
  scalingDeterminant?: number
  setAbsolutePosition?: any
  setDirection?: any
  setParent?: any
  setPivotMatrix?: any
  setPivotPoint?: any
  setPositionWithLocalVector?: any
  setPreTransformMatrix?: any
}

export class FiberAbstractMeshProps extends FiberTransformNodeProps {
  actionManager?: BABYLON.ActionManager
  alphaIndex?: number
  alwaysSelectAsActiveMesh?: boolean
  applyFog?: boolean
  checkCollisions?: boolean
  collisionGroup?: number
  collisionMask?: number
  computeBonesUsingShaders?: boolean
  cullingStrategy?: number
  definedFacingForward?: boolean
  edgesColor?: BABYLON.Color4
  edgesWidth?: number
  ellipsoid?: BABYLON.Vector3
  ellipsoidOffset?: BABYLON.Vector3
  enablePointerMoveEvents?: boolean
  facetDepthSortFrom?: BABYLON.Vector3
  hasVertexAlpha?: boolean
  isBlocker?: boolean
  isPickable?: boolean
  isVisible?: boolean
  layerMask?: number
  material?: BABYLON.Material
  mustDepthSortFacets?: boolean
  numBoneInfluencers?: number
  onCollide?: () => void
  onCollideObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  onCollisionPositionChange?: () => void
  onCollisionPositionChangeObservable?: BABYLON.Observable<BABYLON.Vector3>
  onMaterialChangedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  onRebuildObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  outlineColor?: BABYLON.Color3
  outlineWidth?: number
  overlayAlpha?: number
  overlayColor?: BABYLON.Color3
  partitioningBBoxRatio?: number
  partitioningSubdivisions?: number
  receiveShadows?: boolean
  renderingGroupId?: number
  scaling?: BABYLON.Vector3
  showSubMeshesBoundingBox?: boolean
  skeleton?: BABYLON.Skeleton
  subMeshes?: BABYLON.SubMesh[]
  useOctreeForCollisions?: boolean
  useOctreeForPicking?: boolean
  useOctreeForRenderingSelection?: boolean
  useVertexColors?: boolean
  visibility?: number
  setBoundingInfo?: any
  setIndices?: any
  setVerticesData?: any
}

export class FiberMeshProps extends FiberAbstractMeshProps {
  delayLoadingFile?: string
  delayLoadState?: number
  instances?: BABYLON.InstancedMesh[]
  isUnIndexed?: boolean
  meshMap?: any
  morphTargetManager?: BABYLON.MorphTargetManager
  normalizeSkinFourWeights?: any
  normalizeSkinWeightsAndExtra?: any
  onBeforeDraw?: () => void
  onLODLevelSelection?: (distance: number, mesh: BABYLON.Mesh, selectedLevel: BABYLON.Mesh) => void
  overrideMaterialSideOrientation?: number
  overridenInstanceCount?: number
  setIndices?: any
  setMaterialByID?: any
  setVerticesBuffer?: any
  setVerticesData?: any
}

export class FiberCameraProps extends FiberNodeProps {
  cameraRigMode?: number
  customRenderTargets?: BABYLON.RenderTargetTexture[]
  fov?: number
  fovMode?: number
  inertia?: number
  inputs?: BABYLON.CameraInputsManager<BABYLON.Camera>
  interaxialDistance?: number
  isIntermediate?: boolean
  isStereoscopicSideBySide?: boolean
  layerMask?: number
  maxZ?: number
  minZ?: number
  mode?: number
  onAfterCheckInputsObservable?: BABYLON.Observable<BABYLON.Camera>
  onProjectionMatrixChangedObservable?: BABYLON.Observable<BABYLON.Camera>
  onRestoreStateObservable?: BABYLON.Observable<BABYLON.Camera>
  onViewMatrixChangedObservable?: BABYLON.Observable<BABYLON.Camera>
  orthoBottom?: number
  orthoLeft?: number
  orthoRight?: number
  orthoTop?: number
  outputRenderTarget?: BABYLON.RenderTargetTexture
  position?: BABYLON.Vector3
  upVector?: BABYLON.Vector3
  viewport?: BABYLON.Viewport
  setCameraRigMode?: any
  setCameraRigParameter?: any
}

export class FiberTargetCameraProps extends FiberCameraProps {
  cameraDirection?: BABYLON.Vector3
  cameraRotation?: BABYLON.Vector2
  lockedTarget?: any
  noRotationConstraint?: boolean
  rotation?: BABYLON.Vector3
  rotationQuaternion?: BABYLON.Quaternion
  speed?: number
  updateUpVectorFromRotation?: boolean
  setTarget?: any
}

export class FiberArcRotateCameraProps extends FiberTargetCameraProps {
  allowUpsideDown?: boolean
  alpha?: number
  angularSensibilityX?: number
  angularSensibilityY?: number
  beta?: number
  checkCollisions?: boolean
  collisionRadius?: BABYLON.Vector3
  inertialAlphaOffset?: number
  inertialBetaOffset?: number
  inertialPanningX?: number
  inertialPanningY?: number
  inertialRadiusOffset?: number
  inputs?: BABYLON.ArcRotateCameraInputsManager
  keysDown?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysUp?: number[]
  lowerAlphaLimit?: number
  lowerBetaLimit?: number
  lowerRadiusLimit?: number
  onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void
  onMeshTargetChangedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  panningAxis?: BABYLON.Vector3
  panningDistanceLimit?: number
  panningInertia?: number
  panningOriginTarget?: BABYLON.Vector3
  panningSensibility?: number
  pinchDeltaPercentage?: number
  pinchPrecision?: number
  pinchToPanMaxDistance?: number
  radius?: number
  target?: BABYLON.Vector3
  targetScreenOffset?: BABYLON.Vector2
  upperAlphaLimit?: number
  upperBetaLimit?: number
  upperRadiusLimit?: number
  useAutoRotationBehavior?: boolean
  useBouncingBehavior?: boolean
  useFramingBehavior?: boolean
  useInputToRestoreState?: boolean
  wheelDeltaPercentage?: number
  wheelPrecision?: number
  zoomOnFactor?: number
  setPosition?: any
  setTarget?: any
}

export class FiberVRDeviceOrientationArcRotateCameraProps extends FiberArcRotateCameraProps {}

export class FiberAnaglyphArcRotateCameraProps extends FiberArcRotateCameraProps {}

export class FiberStereoscopicArcRotateCameraProps extends FiberArcRotateCameraProps {}

export class FiberFlyCameraProps extends FiberTargetCameraProps {
  angularSensibility?: number
  applyGravity?: boolean
  bankedTurn?: boolean
  bankedTurnLimit?: number
  bankedTurnMultiplier?: number
  cameraDirection?: BABYLON.Vector3
  checkCollisions?: boolean
  collisionMask?: number
  ellipsoid?: BABYLON.Vector3
  ellipsoidOffset?: BABYLON.Vector3
  inputs?: BABYLON.FlyCameraInputsManager
  keysBackward?: number[]
  keysDown?: number[]
  keysForward?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysUp?: number[]
  onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void
  rollCorrect?: number
  rotationQuaternion?: BABYLON.Quaternion
}

export class FiberFollowCameraProps extends FiberTargetCameraProps {
  cameraAcceleration?: number
  heightOffset?: number
  lockedTarget?: BABYLON.AbstractMesh
  maxCameraSpeed?: number
  radius?: number
  rotationOffset?: number
}

export class FiberArcFollowCameraProps extends FiberTargetCameraProps {
  alpha?: number
  beta?: number
  radius?: number
  target?: BABYLON.AbstractMesh
}

export class FiberFreeCameraProps extends FiberTargetCameraProps {
  angularSensibility?: number
  applyGravity?: boolean
  checkCollisions?: boolean
  collisionMask?: number
  ellipsoid?: BABYLON.Vector3
  ellipsoidOffset?: BABYLON.Vector3
  inputs?: BABYLON.FreeCameraInputsManager
  keysDown?: number[]
  keysLeft?: number[]
  keysRight?: number[]
  keysUp?: number[]
  onCollide?: (collidedMesh: BABYLON.AbstractMesh) => void
}

export class FiberDeviceOrientationCameraProps extends FiberFreeCameraProps {}

export class FiberVRDeviceOrientationFreeCameraProps extends FiberDeviceOrientationCameraProps {}

export class FiberVRDeviceOrientationGamepadCameraProps extends FiberVRDeviceOrientationFreeCameraProps {}

export class FiberTouchCameraProps extends FiberFreeCameraProps {
  touchAngularSensibility?: number
  touchMoveSensibility?: number
}

export class FiberUniversalCameraProps extends FiberTouchCameraProps {
  gamepadAngularSensibility?: number
  gamepadMoveSensibility?: number
}

export class FiberGamepadCameraProps extends FiberUniversalCameraProps {}

export class FiberAnaglyphGamepadCameraProps extends FiberGamepadCameraProps {}

export class FiberStereoscopicGamepadCameraProps extends FiberGamepadCameraProps {}

export class FiberAnaglyphUniversalCameraProps extends FiberUniversalCameraProps {}

export class FiberStereoscopicUniversalCameraProps extends FiberUniversalCameraProps {}

export class FiberVirtualJoysticksCameraProps extends FiberFreeCameraProps {}

export class FiberWebVRFreeCameraProps extends FiberFreeCameraProps {
  controllers?: BABYLON.WebVRController[]
  devicePosition?: BABYLON.Vector3
  deviceRotationQuaternion?: BABYLON.Quaternion
  deviceScaleFactor?: number
  onControllerMeshLoadedObservable?: BABYLON.Observable<BABYLON.WebVRController>
  onControllersAttachedObservable?: BABYLON.Observable<BABYLON.WebVRController[]>
  onPoseUpdatedFromDeviceObservable?: BABYLON.Observable<any>
  rawPose?: BABYLON.DevicePose
  rigParenting?: boolean
  updateCacheCalled?: any
  webVROptions?: any
}

export class FiberAnaglyphFreeCameraProps extends FiberFreeCameraProps {}

export class FiberStereoscopicFreeCameraProps extends FiberFreeCameraProps {}

export class FiberWebXRCameraProps extends FiberFreeCameraProps {}

export class FiberMaterialProps {
  alpha?: number
  alphaMode?: number
  animations?: BABYLON.Animation[]
  backFaceCulling?: boolean
  checkReadyOnEveryCall?: boolean
  checkReadyOnlyOnce?: boolean
  disableDepthWrite?: boolean
  doNotSerialize?: boolean
  fillMode?: number
  fogEnabled?: boolean
  forceDepthWrite?: boolean
  getRenderTargetTextures?: () => BABYLON.SmartArray<BABYLON.RenderTargetTexture>
  id?: string
  meshMap?: { [id: string]: BABYLON.AbstractMesh }
  metadata?: any
  name?: string
  needDepthPrePass?: boolean
  onBind?: (Mesh: BABYLON.AbstractMesh) => void
  onCompiled?: (effect: BABYLON.Effect) => void
  onDispose?: () => void
  onDisposeObservable?: BABYLON.Observable<BABYLON.Material>
  onError?: (effect: BABYLON.Effect, errors: string) => void
  pointsCloud?: boolean
  pointSize?: number
  releaseVertexArrayObject?: any
  reservedDataStore?: any
  separateCullingPass?: boolean
  sideOrientation?: number
  state?: string
  uniqueId?: number
  wireframe?: boolean
  zOffset?: number
}

export class FiberMultiMaterialProps extends FiberMaterialProps {
  subMaterials?: BABYLON.Material[]
}

export class FiberPushMaterialProps extends FiberMaterialProps {
  allowShaderHotSwapping?: boolean
}

export class FiberStandardMaterialProps extends FiberPushMaterialProps {
  alphaCutOff?: number
  ambientColor?: BABYLON.Color3
  ambientTexture?: BABYLON.BaseTexture
  bumpTexture?: BABYLON.BaseTexture
  cameraColorCurves?: BABYLON.ColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BABYLON.BaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  customShaderNameResolve?: (
    shaderName: string,
    uniforms: string[],
    uniformBuffers: string[],
    samplers: string[],
    defines: BABYLON.StandardMaterialDefines
  ) => string
  diffuseColor?: BABYLON.Color3
  diffuseFresnelParameters?: BABYLON.FresnelParameters
  diffuseTexture?: BABYLON.BaseTexture
  disableLighting?: boolean
  emissiveColor?: BABYLON.Color3
  emissiveFresnelParameters?: BABYLON.FresnelParameters
  emissiveTexture?: BABYLON.BaseTexture
  imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration
  indexOfRefraction?: number
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  invertRefractionY?: boolean
  lightmapTexture?: BABYLON.BaseTexture
  linkEmissiveWithDiffuse?: boolean
  maxSimultaneousLights?: number
  opacityFresnelParameters?: BABYLON.FresnelParameters
  opacityTexture?: BABYLON.BaseTexture
  parallaxScaleBias?: number
  reflectionFresnelParameters?: BABYLON.FresnelParameters
  reflectionTexture?: BABYLON.BaseTexture
  refractionFresnelParameters?: BABYLON.FresnelParameters
  refractionTexture?: BABYLON.BaseTexture
  roughness?: number
  specularColor?: BABYLON.Color3
  specularPower?: number
  specularTexture?: BABYLON.BaseTexture
  twoSidedLighting?: boolean
  useAlphaFromDiffuseTexture?: boolean
  useEmissiveAsIllumination?: boolean
  useGlossinessFromSpecularMapAlpha?: boolean
  useLightmapAsShadowmap?: boolean
  useLogarithmicDepth?: boolean
  useObjectSpaceNormalMap?: boolean
  useParallax?: boolean
  useParallaxOcclusion?: boolean
  useReflectionFresnelFromSpecular?: boolean
  useReflectionOverAlpha?: boolean
  useSpecularOverAlpha?: boolean
}

export class FiberBackgroundMaterialProps extends FiberPushMaterialProps {
  cameraColorCurves?: BABYLON.ColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BABYLON.BaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  diffuseTexture?: BABYLON.BaseTexture
  enableNoise?: boolean
  fovMultiplier?: number
  imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration
  maxSimultaneousLights?: number
  opacityFresnel?: boolean
  primaryColor?: BABYLON.Color3
  primaryColorHighlightLevel?: number
  primaryColorShadowLevel?: number
  reflectionAmount?: number
  reflectionBlur?: number
  reflectionFalloffDistance?: number
  reflectionFresnel?: boolean
  reflectionReflectance0?: number
  reflectionReflectance90?: number
  reflectionStandardFresnelWeight?: number
  reflectionTexture?: BABYLON.BaseTexture
  sceneCenter?: BABYLON.Vector3
  shadowLevel?: number
  shadowLights?: BABYLON.IShadowLight[]
  switchToBGR?: boolean
  useEquirectangularFOV?: boolean
  useRGBColor?: boolean
}

export class FiberPBRBaseMaterialProps extends FiberPushMaterialProps {
  transparencyMode?: number
  useLogarithmicDepth?: boolean
}

export class FiberPBRBaseSimpleMaterialProps extends FiberPBRBaseMaterialProps {
  alphaCutOff?: number
  disableLighting?: boolean
  doubleSided?: boolean
  emissiveColor?: BABYLON.Color3
  emissiveTexture?: BABYLON.BaseTexture
  environmentTexture?: BABYLON.BaseTexture
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  lightmapTexture?: BABYLON.BaseTexture
  maxSimultaneousLights?: number
  normalTexture?: BABYLON.BaseTexture
  occlusionStrength?: number
  occlusionTexture?: BABYLON.BaseTexture
  useLightmapAsShadowmap?: boolean
}

export class FiberPBRMetallicRoughnessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
  baseColor?: BABYLON.Color3
  baseTexture?: BABYLON.BaseTexture
  metallic?: number
  metallicRoughnessTexture?: BABYLON.BaseTexture
  roughness?: number
}

export class FiberPBRSpecularGlossinessMaterialProps extends FiberPBRBaseSimpleMaterialProps {
  diffuseColor?: BABYLON.Color3
  diffuseTexture?: BABYLON.BaseTexture
  glossiness?: number
  specularColor?: BABYLON.Color3
  specularGlossinessTexture?: BABYLON.BaseTexture
}

export class FiberPBRMaterialProps extends FiberPBRBaseMaterialProps {
  albedoColor?: BABYLON.Color3
  albedoTexture?: BABYLON.BaseTexture
  alphaCutOff?: number
  ambientColor?: BABYLON.Color3
  ambientTexture?: BABYLON.BaseTexture
  ambientTextureImpactOnAnalyticalLights?: number
  ambientTextureStrength?: number
  bumpTexture?: BABYLON.BaseTexture
  cameraColorCurves?: BABYLON.ColorCurves
  cameraColorCurvesEnabled?: boolean
  cameraColorGradingEnabled?: boolean
  cameraColorGradingTexture?: BABYLON.BaseTexture
  cameraContrast?: number
  cameraExposure?: number
  cameraToneMappingEnabled?: boolean
  directIntensity?: number
  disableBumpMap?: boolean
  disableLighting?: boolean
  emissiveColor?: BABYLON.Color3
  emissiveIntensity?: number
  emissiveTexture?: BABYLON.BaseTexture
  enableSpecularAntiAliasing?: boolean
  environmentBRDFTexture?: BABYLON.BaseTexture
  environmentIntensity?: number
  forceAlphaTest?: boolean
  forceIrradianceInFragment?: boolean
  forceNormalForward?: boolean
  imageProcessingConfiguration?: BABYLON.ImageProcessingConfiguration
  indexOfRefraction?: number
  invertNormalMapX?: boolean
  invertNormalMapY?: boolean
  invertRefractionY?: boolean
  lightmapTexture?: BABYLON.BaseTexture
  linkRefractionWithTransparency?: boolean
  maxSimultaneousLights?: number
  metallic?: number
  metallicTexture?: BABYLON.BaseTexture
  microSurface?: number
  microSurfaceTexture?: BABYLON.BaseTexture
  opacityTexture?: BABYLON.BaseTexture
  parallaxScaleBias?: number
  reflectionColor?: BABYLON.Color3
  reflectionTexture?: BABYLON.BaseTexture
  reflectivityColor?: BABYLON.Color3
  reflectivityTexture?: BABYLON.BaseTexture
  refractionTexture?: BABYLON.BaseTexture
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
  useParallax?: boolean
  useParallaxOcclusion?: boolean
  usePhysicalLightFalloff?: boolean
  useRadianceOcclusion?: boolean
  useRadianceOverAlpha?: boolean
  useRoughnessFromMetallicTextureAlpha?: boolean
  useRoughnessFromMetallicTextureGreen?: boolean
  useSpecularOverAlpha?: boolean
}

export class FiberShaderMaterialProps extends FiberMaterialProps {
  setArray2?: any
  setArray3?: any
  setColor3?: any
  setColor3Array?: any
  setColor4?: any
  setFloat?: any
  setFloats?: any
  setInt?: any
  setMatrix?: any
  setMatrix2x2?: any
  setMatrix3x3?: any
  setTexture?: any
  setTextureArray?: any
  setVector2?: any
  setVector3?: any
  setVector4?: any
}

export class FiberLightProps extends FiberNodeProps {
  diffuse?: BABYLON.Color3
  excludedMeshes?: BABYLON.AbstractMesh[]
  excludeWithLayerMask?: number
  falloffType?: number
  includedOnlyMeshes?: BABYLON.AbstractMesh[]
  includeOnlyWithLayerMask?: number
  intensity?: number
  intensityMode?: number
  lightmapMode?: number
  radius?: number
  range?: number
  renderPriority?: number
  shadowEnabled?: boolean
  specular?: BABYLON.Color3
  setEnabled?: any
}

export class FiberHemisphericLightProps extends FiberLightProps {
  direction?: BABYLON.Vector3
  groundColor?: BABYLON.Color3
  setDirectionToTarget?: any
}

export class FiberShadowLightProps extends FiberLightProps {
  customProjectionMatrixBuilder?: (viewMatrix: BABYLON.Matrix, renderList: BABYLON.AbstractMesh[], result: BABYLON.Matrix) => void
  direction?: BABYLON.Vector3
  position?: BABYLON.Vector3
  shadowMaxZ?: number
  shadowMinZ?: number
  transformedDirection?: BABYLON.Vector3
  transformedPosition?: BABYLON.Vector3
  setDirectionToTarget?: any
  setShadowProjectionMatrix?: any
}

export class FiberDirectionalLightProps extends FiberShadowLightProps {
  autoUpdateExtends?: boolean
  shadowFrustumSize?: number
  shadowOrthoScale?: number
}

export class FiberPointLightProps extends FiberShadowLightProps {
  direction?: BABYLON.Vector3
  shadowAngle?: number
}

export class FiberSpotLightProps extends FiberShadowLightProps {
  angle?: number
  exponent?: number
  innerAngle?: number
  projectionTexture?: BABYLON.BaseTexture
  projectionTextureLightFar?: number
  projectionTextureLightNear?: number
  projectionTextureUpDirection?: BABYLON.Vector3
  shadowAngleScale?: number
}

export class FiberControlProps {
  alpha?: number
  clipChildren?: boolean
  color?: string
  disabledColor?: string
  fontFamily?: string
  fontOffset?: { ascent: number; height: number; descent: number }
  fontSize?: string | number
  fontStyle?: string
  fontWeight?: string
  height?: string | number
  horizontalAlignment?: number
  hoverCursor?: string
  isEnabled?: boolean
  isFocusInvisible?: boolean
  isHighlighted?: boolean
  isHitTestVisible?: boolean
  isPointerBlocker?: boolean
  isVisible?: boolean
  left?: string | number
  linkOffsetX?: string | number
  linkOffsetY?: string | number
  metadata?: any
  name?: string
  notRenderable?: boolean
  onAfterDrawObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  onBeforeDrawObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  onDirtyObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  onPointerClickObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>
  onPointerDownObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>
  onPointerEnterObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  onPointerMoveObservable?: BABYLON.Observable<BABYLON.Vector2>
  onPointerOutObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  onPointerUpObservable?: BABYLON.Observable<BABYLON.GUI.Vector2WithInfo>
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  parent?: BABYLON.GUI.Container
  rotation?: number
  scaleX?: number
  scaleY?: number
  shadowBlur?: number
  shadowColor?: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  style?: BABYLON.GUI.Style
  top?: string | number
  transformCenterX?: number
  transformCenterY?: number
  uniqueId?: number
  verticalAlignment?: number
  width?: string | number
  zIndex?: number
}

export class FiberCheckboxProps extends FiberControlProps {
  background?: string
  checkSizeRatio?: number
  isChecked?: boolean
  name?: string
  onIsCheckedChangedObservable?: BABYLON.Observable<boolean>
  thickness?: number
}

export class FiberColorPickerProps extends FiberControlProps {
  height?: string | number
  name?: string
  onValueChangedObservable?: BABYLON.Observable<BABYLON.Color3>
  size?: string | number
  value?: BABYLON.Color3
  width?: string | number
}

export class FiberContainerProps extends FiberControlProps {
  adaptHeightToChildren?: boolean
  adaptWidthToChildren?: boolean
  background?: string
  name?: string
}

export class FiberEllipseProps extends FiberContainerProps {
  name?: string
  thickness?: number
}

export class FiberGridProps extends FiberContainerProps {
  name?: string
  setColumnDefinition?: any
  setRowDefinition?: any
}

export class FiberStackPanelProps extends FiberContainerProps {
  height?: string | number
  isVertical?: boolean
  name?: string
  width?: string | number
}

export class FiberVirtualKeyboardProps extends FiberStackPanelProps {
  defaultButtonBackground?: string
  defaultButtonColor?: string
  defaultButtonHeight?: string
  defaultButtonPaddingBottom?: string
  defaultButtonPaddingLeft?: string
  defaultButtonPaddingRight?: string
  defaultButtonPaddingTop?: string
  defaultButtonWidth?: string
  onKeyPressObservable?: BABYLON.Observable<string>
  selectedShiftThickness?: number
  shiftButtonColor?: string
  shiftState?: number
}

export class FiberRectangleProps extends FiberContainerProps {
  cornerRadius?: number
  name?: string
  thickness?: number
}

export class FiberButtonProps extends FiberRectangleProps {
  name?: string
  pointerDownAnimation?: () => void
  pointerEnterAnimation?: () => void
  pointerOutAnimation?: () => void
  pointerUpAnimation?: () => void
}

export class FiberSelectionPanelProps extends FiberRectangleProps {
  barColor?: string
  barHeight?: string
  buttonBackground?: string
  buttonColor?: string
  groups?: BABYLON.GUI.SelectorGroup[]
  headerColor?: string
  labelColor?: string
  name?: string
  spacerHeight?: string
  setHeaderName?: any
}

export class FiberScrollViewerProps extends FiberRectangleProps {
  barBackground?: string
  barBorderColor?: string
  barColor?: string
  name?: string
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
}

export class FiberImageProps extends FiberControlProps {
  autoScale?: boolean
  cellHeight?: number
  cellId?: number
  cellWidth?: number
  domImage?: HTMLImageElement
  name?: string
  onImageLoadedObservable?: BABYLON.Observable<BABYLON.GUI.Image>
  source?: string
  sourceHeight?: number
  sourceLeft?: number
  sourceTop?: number
  sourceWidth?: number
  stretch?: number
}

export class FiberInputTextProps extends FiberControlProps {
  addKey?: boolean
  autoStretchWidth?: boolean
  background?: string
  currentKey?: string
  deadKey?: boolean
  focusedBackground?: string
  highligherOpacity?: number
  highlightedText?: string
  margin?: string
  maxWidth?: string | number
  name?: string
  onBeforeKeyAddObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onBlurObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onFocusObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onFocusSelectAll?: boolean
  onTextChangedObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onTextCopyObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onTextCutObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onTextHighlightObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  onTextPasteObservable?: BABYLON.Observable<BABYLON.GUI.InputText>
  placeholderColor?: string
  placeholderText?: string
  promptMessage?: string
  text?: string
  textHighlightColor?: string
  thickness?: number
  width?: string | number
}

export class FiberInputPasswordProps extends FiberInputTextProps {}

export class FiberLineProps extends FiberControlProps {
  connectedControl?: BABYLON.GUI.Control
  dash?: number[]
  horizontalAlignment?: number
  lineWidth?: number
  name?: string
  verticalAlignment?: number
  x1?: string | number
  x2?: string | number
  y1?: string | number
  y2?: string | number
}

export class FiberMultiLineProps extends FiberControlProps {
  dash?: number[]
  horizontalAlignment?: number
  lineWidth?: number
  name?: string
  onPointUpdate?: () => void
  verticalAlignment?: number
}

export class FiberRadioButtonProps extends FiberControlProps {
  background?: string
  checkSizeRatio?: number
  group?: string
  isChecked?: boolean
  name?: string
  onIsCheckedChangedObservable?: BABYLON.Observable<boolean>
  thickness?: number
}

export class FiberTextBlockProps extends FiberControlProps {
  lineSpacing?: string | number
  name?: string
  onLinesReadyObservable?: BABYLON.Observable<BABYLON.GUI.TextBlock>
  onTextChangedObservable?: BABYLON.Observable<BABYLON.GUI.TextBlock>
  outlineColor?: string
  outlineWidth?: number
  resizeToFit?: boolean
  text?: string
  textHorizontalAlignment?: number
  textVerticalAlignment?: number
  textWrapping?: boolean | BABYLON.GUI.TextWrapping
}

export class FiberDisplayGridProps extends FiberControlProps {
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
}

export class FiberBaseSliderProps extends FiberControlProps {
  barOffset?: string | number
  displayThumb?: boolean
  isThumbClamped?: boolean
  isVertical?: boolean
  maximum?: number
  minimum?: number
  name?: string
  onValueChangedObservable?: BABYLON.Observable<number>
  thumbWidth?: string | number
  value?: number
}

export class FiberSliderProps extends FiberBaseSliderProps {
  background?: string
  borderColor?: string
  isThumbCircle?: boolean
  name?: string
}

export class FiberImageBasedSliderProps extends FiberBaseSliderProps {
  backgroundImage?: BABYLON.GUI.Image
  displayThumb?: boolean
  name?: string
  thumbImage?: BABYLON.GUI.Image
  valueBarImage?: BABYLON.GUI.Image
}

export class FiberControl3DProps {
  isVisible?: boolean
  name?: string
  onPointerClickObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>
  onPointerDownObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>
  onPointerEnterObservable?: BABYLON.Observable<BABYLON.GUI.Control3D>
  onPointerMoveObservable?: BABYLON.Observable<BABYLON.Vector3>
  onPointerOutObservable?: BABYLON.Observable<BABYLON.GUI.Control3D>
  onPointerUpObservable?: BABYLON.Observable<BABYLON.GUI.Vector3WithInfo>
  parent?: BABYLON.GUI.Container3D
  pointerDownAnimation?: () => void
  pointerEnterAnimation?: () => void
  pointerOutAnimation?: () => void
  pointerUpAnimation?: () => void
  position?: BABYLON.Vector3
  scaling?: BABYLON.Vector3
}

export class FiberAbstractButton3DProps extends FiberControl3DProps {}

export class FiberButton3DProps extends FiberAbstractButton3DProps {
  content?: BABYLON.GUI.Control
  contentResolution?: number
  contentScaleRatio?: number
}

export class FiberHolographicButtonProps extends FiberButton3DProps {
  imageUrl?: string
  text?: string
  tooltipText?: string
}

export class FiberMeshButton3DProps extends FiberButton3DProps {}

export class FiberContainer3DProps extends FiberControl3DProps {
  blockLayout?: boolean
}

export class FiberStackPanel3DProps extends FiberContainer3DProps {
  isVertical?: boolean
  margin?: number
}

export class FiberVolumeBasedPanelProps extends FiberContainer3DProps {
  columns?: number
  margin?: number
  orientation?: number
  rows?: number
}

export class FiberCylinderPanelProps extends FiberVolumeBasedPanelProps {
  radius?: number
}

export class FiberPlanePanelProps extends FiberVolumeBasedPanelProps {}

export class FiberScatterPanelProps extends FiberVolumeBasedPanelProps {
  iteration?: number
}

export class FiberSpherePanelProps extends FiberVolumeBasedPanelProps {
  radius?: number
}

export class FiberBaseTextureProps {
  animations?: BABYLON.Animation[]
  anisotropicFilteringLevel?: number
  coordinatesIndex?: number
  coordinatesMode?: number
  delayLoadState?: number
  gammaSpace?: boolean
  getAlphaFromRGB?: boolean
  hasAlpha?: boolean
  invertZ?: boolean
  is3D?: boolean
  isCube?: boolean
  isRenderTarget?: boolean
  level?: number
  lodGenerationOffset?: number
  lodGenerationScale?: number
  lodLevelInAlpha?: boolean
  metadata?: any
  name?: string
  onDispose?: () => void
  onDisposeObservable?: BABYLON.Observable<BABYLON.BaseTexture>
  reservedDataStore?: any
  sphericalPolynomial?: BABYLON.SphericalPolynomial
  uniqueId?: number
  wrapR?: number
  wrapU?: number
  wrapV?: number
}

export class FiberColorGradingTextureProps extends FiberBaseTextureProps {
  load3dlTexture?: any
  loadTexture?: any
  url?: string
}

export class FiberCubeTextureProps extends FiberBaseTextureProps {
  boundingBoxPosition?: BABYLON.Vector3
  boundingBoxSize?: BABYLON.Vector3
  rotationY?: number
  url?: string
  setReflectionTextureMatrix?: any
}

export class FiberRawCubeTextureProps extends FiberCubeTextureProps {}

export class FiberHDRCubeTextureProps extends FiberBaseTextureProps {
  boundingBoxPosition?: BABYLON.Vector3
  boundingBoxSize?: BABYLON.Vector3
  coordinatesMode?: number
  isBlocking?: boolean
  loadTexture?: any
  rotationY?: number
  url?: string
  setReflectionTextureMatrix?: any
}

export class FiberTextureProps extends FiberBaseTextureProps {
  isBlocking?: boolean
  onLoadObservable?: BABYLON.Observable<BABYLON.Texture>
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
}

export class FiberDynamicTextureProps extends FiberTextureProps {}

export class FiberRawTextureProps extends FiberTextureProps {
  format?: number
}

export class FiberRawTexture3DProps extends FiberTextureProps {
  format?: number
}

export class FiberRenderTargetTextureProps extends FiberTextureProps {
  activeCamera?: BABYLON.Camera
  boundingBoxPosition?: BABYLON.Vector3
  boundingBoxSize?: BABYLON.Vector3
  clearColor?: BABYLON.Color4
  coordinatesMode?: number
  customRenderFunction?: (
    opaqueSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>,
    alphaTestSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>,
    transparentSubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>,
    depthOnlySubMeshes: BABYLON.SmartArray<BABYLON.SubMesh>,
    beforeTransparents?: () => void
  ) => void
  depthStencilTexture?: BABYLON.InternalTexture
  ignoreCameraViewport?: boolean
  isCube?: boolean
  onAfterRender?: (faceIndex: number) => void
  onAfterRenderObservable?: BABYLON.Observable<number>
  onAfterUnbind?: () => void
  onAfterUnbindObservable?: BABYLON.Observable<BABYLON.RenderTargetTexture>
  onBeforeBindObservable?: BABYLON.Observable<BABYLON.RenderTargetTexture>
  onBeforeRender?: (faceIndex: number) => void
  onBeforeRenderObservable?: BABYLON.Observable<number>
  onClear?: (Engine: BABYLON.Engine) => void
  onClearObservable?: BABYLON.Observable<BABYLON.Engine>
  refreshRate?: number
  renderList?: BABYLON.AbstractMesh[]
  renderListPredicate?: (AbstractMesh: BABYLON.AbstractMesh) => boolean
  renderParticles?: boolean
  renderSprites?: boolean
  renderToTarget?: any
  samples?: number
  useCameraPostProcesses?: boolean
  setRenderingAutoClearDepthStencil?: any
  setRenderingOrder?: any
}

export class FiberMirrorTextureProps extends FiberRenderTargetTextureProps {
  adaptiveBlurKernel?: number
  blurKernel?: number
  blurKernelX?: number
  blurKernelY?: number
  blurRatio?: number
  mirrorPlane?: BABYLON.Plane
  scene?: any
}

export class FiberMultiRenderTargetProps extends FiberRenderTargetTextureProps {
  samples?: number
  wrapU?: number
  wrapV?: number
}

export class FiberRefractionTextureProps extends FiberRenderTargetTextureProps {
  depth?: number
  refractionPlane?: BABYLON.Plane
}

export class FiberVideoTextureProps extends FiberTextureProps {
  reset?: any
}

export class FiberProceduralTextureProps extends FiberTextureProps {
  autoClear?: boolean
  isCube?: boolean
  isEnabled?: boolean
  onGenerated?: () => void
  onGeneratedObservable?: BABYLON.Observable<BABYLON.ProceduralTexture>
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
}

export class FiberCustomProceduralTextureProps extends FiberProceduralTextureProps {
  animate?: boolean
}

export class FiberNoiseProceduralTextureProps extends FiberProceduralTextureProps {
  animationSpeedFactor?: number
  brightness?: number
  octaves?: number
  persistence?: number
}

export class FiberAdvancedDynamicTextureProps extends FiberDynamicTextureProps {
  background?: string
  clipboardData?: string
  focusedControl?: BABYLON.GUI.IFocusableControl
  idealHeight?: number
  idealWidth?: number
  isForeground?: boolean
  onClipboardObservable?: BABYLON.Observable<BABYLON.ClipboardInfo>
  onControlPickedObservable?: BABYLON.Observable<BABYLON.GUI.Control>
  premulAlpha?: boolean
  renderAtIdealSize?: boolean
  renderScale?: number
  useSmallestIdeal?: boolean
}

export class FiberGUI3DManagerProps {
  onPickedPointChangedObservable?: BABYLON.Observable<BABYLON.Vector3>
}

export class FiberShadowGeneratorProps {
  bias?: number
  blurBoxOffset?: number
  blurKernel?: number
  blurScale?: number
  contactHardeningLightSizeUVRatio?: number
  depthScale?: number
  filter?: number
  filteringQuality?: number
  forceBackFacesOnly?: boolean
  frustumEdgeFalloff?: number
  normalBias?: number
  useBlurCloseExponentialShadowMap?: boolean
  useBlurExponentialShadowMap?: boolean
  useCloseExponentialShadowMap?: boolean
  useContactHardeningShadow?: boolean
  useExponentialShadowMap?: boolean
  useKernelBlur?: boolean
  usePercentageCloserFiltering?: boolean
  usePoissonSampling?: boolean
  setDarkness?: any
  setTransparencyShadow?: any
}

export class FiberEnvironmentHelperProps {
  onErrorObservable?: BABYLON.Observable<{ message?: string; exception?: any }>
  setMainColor?: any
}

export class FiberVRExperienceHelperProps {
  beforeRender?: any
  displayGaze?: boolean
  displayLaserPointer?: boolean
  displayVRButton?: any
  gazeTrackerMesh?: BABYLON.Mesh
  meshSelectionPredicate?: (mesh: BABYLON.AbstractMesh) => boolean
  moveButtonToBottomRight?: any
  onAfterCameraTeleport?: BABYLON.Observable<BABYLON.Vector3>
  onBeforeCameraTeleport?: BABYLON.Observable<BABYLON.Vector3>
  onControllerMeshLoadedObservable?: BABYLON.Observable<BABYLON.WebVRController>
  onEnteringVRObservable?: BABYLON.Observable<BABYLON.VRExperienceHelper>
  onExitingVRObservable?: BABYLON.Observable<BABYLON.VRExperienceHelper>
  onNewMeshPicked?: BABYLON.Observable<BABYLON.PickingInfo>
  onNewMeshSelected?: BABYLON.Observable<BABYLON.AbstractMesh>
  onSelectedMeshUnselected?: BABYLON.Observable<BABYLON.AbstractMesh>
  onVRDisplayChanged?: any
  onVrDisplayPresentChange?: any
  position?: BABYLON.Vector3
  raySelectionPredicate?: (mesh: BABYLON.AbstractMesh) => boolean
  teleportationEnabled?: boolean
  teleportationTarget?: BABYLON.Mesh
  updateButtonVisibility?: any
  updateGazeTrackerScale?: boolean
  webVROptions?: BABYLON.VRExperienceHelperOptions
}

export class FiberSceneProps {
  actionManager?: BABYLON.ActionManager
  activeCamera?: BABYLON.Camera
  activeCameras?: BABYLON.Camera[]
  afterCameraRender?: () => void
  afterRender?: () => void
  ambientColor?: BABYLON.Color3
  animationPropertiesOverride?: BABYLON.AnimationPropertiesOverride
  animationsEnabled?: boolean
  animationTimeScale?: number
  autoClear?: boolean
  autoClearDepthAndStencil?: boolean
  beforeCameraRender?: () => void
  beforeRender?: () => void
  blockfreeActiveMeshesAndRenderingGroups?: boolean
  blockMaterialDirtyMechanism?: boolean
  cameraToUseForPointers?: BABYLON.Camera
  clearColor?: BABYLON.Color4
  clipPlane?: BABYLON.Plane
  clipPlane2?: BABYLON.Plane
  clipPlane3?: BABYLON.Plane
  clipPlane4?: BABYLON.Plane
  collisionCoordinator?: BABYLON.ICollisionCoordinator
  collisionsEnabled?: boolean
  constantlyUpdateMeshUnderPointer?: boolean
  customRenderTargets?: BABYLON.RenderTargetTexture[]
  defaultCursor?: string
  defaultMaterial?: BABYLON.Material
  disableOfflineSupportExceptionRules?: RegExp[]
  dispatchAllSubMeshesOfActiveMeshes?: boolean
  dumpNextRenderTargets?: boolean
  environmentTexture?: BABYLON.BaseTexture
  fogColor?: BABYLON.Color3
  fogDensity?: number
  fogEnabled?: boolean
  fogEnd?: number
  fogMode?: number
  fogStart?: number
  forcePointsCloud?: boolean
  forceWireframe?: boolean
  geometriesById?: any
  getActiveMeshCandidates?: () => BABYLON.ISmartArrayLike<BABYLON.AbstractMesh>
  getActiveSubMeshCandidates?: (mesh: BABYLON.AbstractMesh) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>
  getCollidingSubMeshCandidates?: (mesh: BABYLON.AbstractMesh, collider: BABYLON.Collider) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>
  getDeterministicFrameTime?: () => number
  getIntersectingSubMeshCandidates?: (mesh: BABYLON.AbstractMesh, localRay: BABYLON.Ray) => BABYLON.ISmartArrayLike<BABYLON.SubMesh>
  gravity?: BABYLON.Vector3
  hoverCursor?: string
  importedMeshesFiles?: String[]
  lensFlaresEnabled?: boolean
  lightsEnabled?: boolean
  loadingPluginName?: string
  metadata?: any
  offlineProvider?: BABYLON.IOfflineProvider
  onActiveCameraChanged?: BABYLON.Observable<BABYLON.Scene>
  onAfterActiveMeshesEvaluationObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterAnimationsObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterCameraRenderObservable?: BABYLON.Observable<BABYLON.Camera>
  onAfterDrawPhaseObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterParticlesRenderingObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterRenderingGroupObservable?: BABYLON.Observable<BABYLON.RenderingGroupInfo>
  onAfterRenderObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterRenderTargetsRenderObservable?: BABYLON.Observable<BABYLON.Scene>
  onAfterStepObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeActiveMeshesEvaluationObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeAnimationsObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeCameraRenderObservable?: BABYLON.Observable<BABYLON.Camera>
  onBeforeDrawPhaseObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeParticlesRenderingObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeRenderingGroupObservable?: BABYLON.Observable<BABYLON.RenderingGroupInfo>
  onBeforeRenderObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeRenderTargetsRenderObservable?: BABYLON.Observable<BABYLON.Scene>
  onBeforeStepObservable?: BABYLON.Observable<BABYLON.Scene>
  onCameraRemovedObservable?: BABYLON.Observable<BABYLON.Camera>
  onDataLoadedObservable?: BABYLON.Observable<BABYLON.Scene>
  onDispose?: () => void
  onDisposeObservable?: BABYLON.Observable<BABYLON.Scene>
  onGeometryRemovedObservable?: BABYLON.Observable<BABYLON.Geometry>
  onKeyboardObservable?: BABYLON.Observable<BABYLON.KeyboardInfo>
  onLightRemovedObservable?: BABYLON.Observable<BABYLON.Light>
  onMaterialRemovedObservable?: BABYLON.Observable<BABYLON.Material>
  onMeshImportedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  onMeshRemovedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  onNewCameraAddedObservable?: BABYLON.Observable<BABYLON.Camera>
  onNewGeometryAddedObservable?: BABYLON.Observable<BABYLON.Geometry>
  onNewLightAddedObservable?: BABYLON.Observable<BABYLON.Light>
  onNewMaterialAddedObservable?: BABYLON.Observable<BABYLON.Material>
  onNewMeshAddedObservable?: BABYLON.Observable<BABYLON.AbstractMesh>
  onNewTextureAddedObservable?: BABYLON.Observable<BABYLON.BaseTexture>
  onNewTransformNodeAddedObservable?: BABYLON.Observable<BABYLON.TransformNode>
  onPointerDown?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void
  onPointerMove?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void
  onPointerObservable?: BABYLON.Observable<BABYLON.PointerInfo>
  onPointerPick?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo) => void
  onPointerUp?: (evt: PointerEvent, pickInfo: BABYLON.PickingInfo, type: BABYLON.PointerEventTypes) => void
  onPreKeyboardObservable?: BABYLON.Observable<BABYLON.KeyboardInfoPre>
  onPrePointerObservable?: BABYLON.Observable<BABYLON.PointerInfoPre>
  onReadyObservable?: BABYLON.Observable<BABYLON.Scene>
  onTextureRemovedObservable?: BABYLON.Observable<BABYLON.BaseTexture>
  onTransformNodeRemovedObservable?: BABYLON.Observable<BABYLON.TransformNode>
  particlesEnabled?: boolean
  pointerDownPredicate?: (Mesh: BABYLON.AbstractMesh) => boolean
  pointerMovePredicate?: (Mesh: BABYLON.AbstractMesh) => boolean
  pointerUpPredicate?: (Mesh: BABYLON.AbstractMesh) => boolean
  postProcesses?: BABYLON.PostProcess[]
  postProcessesEnabled?: boolean
  postProcessManager?: BABYLON.PostProcessManager
  preventDefaultOnPointerDown?: boolean
  preventDefaultOnPointerUp?: boolean
  probesEnabled?: boolean
  proceduralTexturesEnabled?: boolean
  renderTargetsEnabled?: boolean
  requireLightSorting?: boolean
  reservedDataStore?: any
  shadowsEnabled?: boolean
  skeletonsEnabled?: boolean
  spritesEnabled?: boolean
  texturesEnabled?: boolean
  useConstantAnimationDeltaTime?: boolean
  useDelayedTextureLoading?: boolean
  useRightHandedSystem?: boolean
  workerCollisions?: boolean
  setActiveCameraByID?: any
  setActiveCameraByName?: any
  setPointerOverMesh?: any
  setRenderingAutoClearDepthStencil?: any
  setRenderingOrder?: any
  setStepId?: any
  setTransformMatrix?: any
}
