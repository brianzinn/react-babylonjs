import { FiberDirectionalLightProps, FiberArcRotateCameraProps, FiberMeshProps, FiberFreeCameraProps, FiberHemisphericLightProps } from './generatedProps'

// old tsconfig did not emit global
declare global {
    namespace JSX {
        interface IntrinsicElements {
            directionalLight: FiberDirectionalLightProps
            arcRotateCamera: FiberArcRotateCameraProps
            box: FiberMeshProps
            freeCamera: FiberFreeCameraProps
            hemisphericLight: FiberHemisphericLightProps
            sphere: FiberMeshProps & { diameter: number, segments: number }
            ground: FiberMeshProps & { width: number, height: number, subdivisions: number }
        }
    }
}