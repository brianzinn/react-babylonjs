import { FiberDirectionalLightProps, FiberArcRotateCameraProps, FiberMeshProps, FiberFreeCameraProps, FiberHemisphericLightProps, FiberSpherePropsCtor, FiberGroundPropsCtor } from './generatedProps'

// old tsconfig did not emit global
declare global {
    namespace JSX {
        interface IntrinsicElements {
            directionalLight: FiberDirectionalLightProps
            arcRotateCamera: FiberArcRotateCameraProps
            box: FiberMeshProps
            freeCamera: FiberFreeCameraProps
            hemisphericLight: FiberHemisphericLightProps
            sphere: FiberMeshProps & FiberSpherePropsCtor
            ground: FiberMeshProps & FiberGroundPropsCtor
        }
    }
}