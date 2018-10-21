// hack to test exports -- import React from 'react'

export { default as Scene } from "./Scene"
export { default as Engine, withEngine } from "./Engine"

// auto-generated type-info
// TODO: eventually add more here
export { default as components } from "./components.json"

// these were just to test loading NPM module worked in another project.

// export class FreeCamera extends React.Component<{}, {}>{
//     constructor(props: any) {
//         super(props);
//         console.log('creating a free camera: ', props);
//     }

//     public render() { return null;}
// };
// export class HemisphericLight extends React.Component<{}, {}>{
//     constructor(props: any) {
//         super(props);
//         console.log('creating a hemi light: ', props);
//     }

//     public render() { return null;}
// };
// export class Sphere extends React.Component<{}, {}>{
//     constructor(props: any) {
//         super(props);
//         console.log('creating a sphere: ', props);
//     }

//     public render() { return null;}
// };
// export class Ground extends React.Component<{}, {}>{
//     constructor(props: any) {
//         super(props);
//         console.log('creating a ground: ', props);
//     }

//     public render() { return null;}
// };
// export class Skybox {};
// export class ArcRotateCamera{};
// export class GUI3DManager{};
// export class CylinderPanel{};
// export class Button3D{};
// export class StandardMaterial{};
// export class Plane{};
// export class AdvancedDynamicTexture{};
// export class Rectangle{};
// export class StackPanel{};
// export class InputText{};
// export class Text{};
// export class Box{};
// export class Button{};
// export class Environment{};
// export class VirtualKeyboard{};
// export class HolographicButton{};
// export class IcoSphere{};
// export class DirectionalLight{};

// currently only works with directional light:
export { default as ShadowGenerator, ShadowGeneratorProps } from "./ShadowGenerator"

// behaviors
export { default as RotateMeshBehavior, RotateMeshBehaviorProps } from "./RotateMeshBehavior"

// models/sceneloader
export { default as Model, LoadedModel, LoaderStatus } from "./Model"
export { ModelProps } from "./ModelProps"

// Helpers: VR,Environment
export { default as VRExperience, VRExperienceProps } from "./VRExperience"
