import { IParticleSystem, Skeleton, AnimationGroup, AbstractMesh, Nullable, BoundingInfo } from "babylonjs";
import "babylonjs-loaders";
export declare enum LoaderStatus {
    Loading = 0,
    Loaded = 1,
    Error = 2
}
export declare class LoadedModel {
    status?: LoaderStatus;
    rootMesh?: AbstractMesh;
    errorMessage?: string;
    loaderName?: string;
    meshes?: AbstractMesh[];
    particleSystems?: IParticleSystem[];
    skeletons?: Skeleton[];
    animationGroups?: AnimationGroup[];
    scaleToDimension?: number;
    readonly boundingInfo: Nullable<BoundingInfo>;
    /**
     * Clean up all resources.
     */
    dispose(): void;
}
