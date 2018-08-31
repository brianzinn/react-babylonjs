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
export { default as Plane, PlaneProps } from "./Plane"
export { default as Ground, GroundProps } from "./Ground"

// 3D GUI
export { default as GUI3DSceneComponent } from "./GUI3DSceneComponent"
export { default as GUI3DManager, GUI3DManagerProps } from "./GUI3DManager"
export { default as CylinderPanel, CylinderPanelProps } from "./CylinderPanel"
export { default as HolographicButton, HolographicButtonProps } from "./HolographicButton"
export { default as Button3D, Button3DProps } from "./Button3D"

// 2D GUI - Do not use with 3D, except as content.  ie: do not add to a 3D panel.
export { default as GUI2DSceneComponent } from "./GUI2DSceneComponent"
export { default as Text, TextProps } from "./Text"
export { default as InputText, InputTextProps } from "./InputText"
export { default as StackPanel, StackPanelProps } from "./StackPanel"
export { default as Rectangle, RectangleProps } from "./Rectangle"
export { default as AdvancedDynamicTexture, AdvancedDynamicTextureProps } from "./AdvancedDynamicTexture"
export { default as Button, ButtonProps } from "./Button"
export { default as VirtualKeyboard, VirtualKeyboardProps } from "./VirtualKeyboard"

// Only Arc Rotate and Free cam are available:
export { default as FreeCamera, FreeCameraProps } from "./FreeCamera"
export { default as ArcRotateCamera, ArcRotateCameraProps } from "./ArcRotateCamera"
export { CameraProps, CameraPropsHandler } from "./Camera"

// behaviors
export { default as RotateMeshBehavior, RotateMeshBehaviorProps } from "./RotateMeshBehavior"

// models/sceneloader
export { default as Model, LoadedModel, LoaderStatus } from "./Model"
export { ModelProps } from "./ModelProps"

// Helpers: VR,Environment
export { default as VRExperience, VRExperienceProps } from "./VRExperience"
export { default as Environment, EnvironmentProps } from "./Environment"
export { default as Skybox, SkyboxProps } from "./Skybox"

// materials
export { default as StandardMaterial, StandardMaterialProps } from "./StandardMaterial"
