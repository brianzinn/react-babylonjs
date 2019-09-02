import { Vector3, SceneLoaderProgressEvent, AbstractMesh } from "babylonjs";
import { LoadedModel } from "./Model";
import BasePropsHandler from "../BasePropsHandler";
import { UpdatePayload, PropsHandler } from "../PropsHandler";
export declare type ModelProps = {
    meshNames?: any;
    receiveShadows?: boolean;
    rootUrl: string;
    sceneFilename: string;
    pluginExtension?: string;
    position?: Vector3;
    scaling?: Vector3;
    rotation?: Vector3;
    showBoundingBox?: boolean;
    /**
     * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
     */
    scaleToDimension?: number;
    onModelLoaded?: (model: LoadedModel) => void;
    onModelError?: (model: LoadedModel) => void;
    onLoadProgress?: (event: SceneLoaderProgressEvent) => void;
    onCreated?: (rootMesh: AbstractMesh) => void;
};
export declare class FiberModel extends BasePropsHandler<LoadedModel, ModelProps> {
    constructor();
}
export declare class ModelPropsHandler implements PropsHandler<LoadedModel, ModelProps> {
    getPropertyUpdates(hostInstance: LoadedModel, oldProps: ModelProps, newProps: ModelProps, scene: BABYLON.Scene): UpdatePayload;
}
