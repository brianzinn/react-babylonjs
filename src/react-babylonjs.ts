export {
  default as babylonJSMiddleware,
  actions /* action creators for Connect */,
  HandledResult,
  registerHandler,
  removeHandler
} from "./middleware"

export { default as Scene, SceneProps, SceneEventArgs, ComponentRegistry } from "./Scene"

// missing a few lights (ie: spot) - add shadows when you add more lights!
export { default as HemisphericLight, HemisphericLightProps } from "./HemisphericLight"
export { default as DirectionalLight, DirectionalLightProps } from "./DirectionalLight"
// currently only works with directional light:
export { default as ShadowGenerator, ShadowGeneratorProps } from "./ShadowGenerator"

// here is a start on the shapes - missing lots (cylinder, cone, torus, etc)!
export { default as Box, BoxProps } from "./Box"
export { default as Sphere, SphereProps } from "./Sphere"
export { default as IcoSphere, IcoSphereProps } from "./IcoSphere"

export { default as Ground, GroundProps } from "./Ground"

// missing a few cameras :)
export { default as FreeCamera, FreeCameraProps } from "./FreeCamera"
export { default as ArcRotateCamera, ArcRotateCameraProps } from "./ArcRotateCamera"

// behaviours
export { default as RotateMeshBehaviour, RotateMeshBehaviourProps } from "./RotateMeshBehaviour"

// models/sceneloader
export { default as Model, LoadedModel, LoaderStatus } from "./Model"
export { ModelProps } from "./ModelProps"

// Helpers: VR,Environment
export { default as VRExperience, VRExperienceProps } from "./VRExperience"
export { default as Environment, EnvironmentProps } from "./Environment"
export { default as Skybox, SkyboxProps } from "./Skybox"

// materials
export { default as StandardMaterial, StandardMaterialProps } from "./StandardMaterial"
