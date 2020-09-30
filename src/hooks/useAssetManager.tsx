import React, { useContext, useState } from 'react';
import { AbstractAssetTask, AssetsManager, EventState, IAssetsProgressEvent, Nullable, Scene } from "@babylonjs/core";
import { useBabylonScene } from "../Scene";
import { isNullOrUndefined } from 'util';

export enum TaskType {
    Binary = 'Binary',
    Mesh = 'Mesh'
}

export type BinaryTask = {
    taskType: TaskType.Binary,
    name: string,
    url: string
}

export type MeshTask = {
    taskType: TaskType.Mesh,
    name: string,
    meshesNames: any,
    rootUrl: string,
    sceneFilename: string
}

export type Task = BinaryTask | MeshTask

export type AssetManagerContextType = {
    updateProgress: (progress: AssetManagerProgressType) => void
    lastProgress?: AssetManagerProgressType
} | undefined;

export const AssetManagerContext = React.createContext<AssetManagerContextType>(undefined);

export type AssetManagerProgressType = {
    eventData: IAssetsProgressEvent
    eventState: EventState
} | undefined;

export type AssetManagerContextProviderProps = {
    startProgress?: AssetManagerProgressType,
    children: any,
}

export const AssetManagerContextProvider: React.FC<AssetManagerContextProviderProps> =  (props: AssetManagerContextProviderProps) => {
    const [progress, setProgress] = useState<AssetManagerProgressType>(undefined);

    return (<AssetManagerContext.Provider value={{lastProgress: progress, updateProgress:setProgress}}>
        {props.children}
    </AssetManagerContext.Provider>);
}

export type AssetManagerOptions = {
    useDefaultLoadingScreen: boolean,
    reportProgress?: boolean, // TODO: improve name.  this is the opt-out of reporting (can trigger many re-renders).
    scene?: Scene
}

const getTaskKey = (task: Task): string | undefined => {
    switch(task.taskType) {
        case TaskType.Binary:
            return `binary:${task.url}`;
        case TaskType.Mesh:
            return `mesh:${task.rootUrl}/${task.sceneFilename}`
        default:
            console.error(`unsupported task type in: ${JSON.stringify(task)}`);
    }
}

/**
 * This has limited functionality, since it only works for binary assets currently.
 * 
 * This is an experimental API and *WILL* change.
 * 
 * onProgress() cannot be reported through the Suspense boundary without context, so thought needed on how to accomplish progress indicator in fallback.
 */
const useAssetManagerWithCache = () => {
    // we need our own memoized cache. useMemo, useState, etc. fail miserably - throwing a promise forces the component to remount.
    const suspenseCache: Record<string, () => Nullable<AbstractAssetTask[]>> = {};

    // TODO: do we need this?
    const completedCache: Record<string, AbstractAssetTask> = {};

    return (tasks: Task[], options?: AssetManagerOptions) => {
        const hookScene = useBabylonScene();

        const assetManagerContext = useContext<AssetManagerContextType>(AssetManagerContext);

        const createGetAssets = (tasks: Task[]): () => Nullable<AbstractAssetTask[]> => {
            if (!Array.isArray(tasks)) {
                throw new Error('Asset Manager tasks must be an array')
            }

            const opts = options || {
                useDefaultLoadingScreen: false
            };

            if (opts.scene === undefined && hookScene === null) {
                throw new Error('useAssetManager can only be used inside a Scene component (or pass scene as a prop)')
            }

            const newRequests: Map<AbstractAssetTask, Task> = new Map<AbstractAssetTask, Task>();

            const assetManager: AssetsManager = new AssetsManager(opts.scene || hookScene!);
            const cachedTasks: any[] = [];
            tasks.forEach(task => {
                const key = getTaskKey(task);
                if (key !== undefined && suspenseCache[key]) {
                    cachedTasks.push(suspenseCache[key]);
                } else {
                    switch (task.taskType) {
                        case TaskType.Binary:
                            const binaryTask = assetManager.addBinaryFileTask(task.name, task.url);
                            newRequests.set(binaryTask, task);
                            break;
                        case TaskType.Mesh:
                            const meshTask = assetManager.addMeshTask(`${task.sceneFilename}`, task.meshesNames, task.rootUrl, task.sceneFilename);
                            newRequests.set(meshTask, task);
                            break;
                        default:
                            throw new Error(`Only binary/mesh supported currently.  'taskType' found on ${JSON.stringify(task)}`);
                    }
                }
            })

            const taskPromise = (tasks.length === cachedTasks.length)
                ? new Promise<AbstractAssetTask[]>(resolve => resolve(cachedTasks))
                : new Promise<AbstractAssetTask[]>((resolve, reject) => {
                let failed = false
                assetManager.useDefaultLoadingScreen = opts.useDefaultLoadingScreen;
                assetManager.onFinish = (tasks: AbstractAssetTask[]) => {
                    // whether it failed or not - we cache all results
                    tasks.forEach(task => {
                        if (newRequests.has(task)) {
                            // NOTE: we can skip caching failed requests (ie: due to temporary outage / 500)
                            const originalTask: Task = newRequests.get(task)!;
                            const key = getTaskKey(originalTask)!;
                            completedCache[key] = task;
                        }
                    })
                    if (failed === false) {
                        // include cached ones as well.
                        const allTasks = tasks.concat(cachedTasks);
                        resolve(allTasks);
                    }
                };

                if (opts.reportProgress !== false && assetManagerContext !== undefined) {
                    assetManager.onProgressObservable.add((eventData: IAssetsProgressEvent, eventState: EventState) => {
                        // console.log('progress update received:', eventData, eventState);
                        assetManagerContext!.updateProgress({eventData, eventState});
                    })
                }

                assetManager.onTaskError = (task: AbstractAssetTask) => {
                    failed = true;
                    reject(`Failed task ${task.errorObject ? task.errorObject.message ?? `no error message on '${task.name}'` : task.name}`)
                };

                assetManager.load();
            });

            let result: Nullable<AbstractAssetTask[]> = null;
            let error: Nullable<Error> = null;
            let suspender: Nullable<Promise<void>> = (async () => {
                try {
                    result = await taskPromise;
                } catch (e) {
                    error = e;
                } finally {
                    suspender = null;
                }
            })();

            const getAssets = () => {
                if (suspender) {
                    throw suspender
                };
                if (error !== null) {
                    throw error;
                }

                return result;
            };
            return getAssets;
        };

        const key = JSON.stringify(tasks);
        if (suspenseCache[key] === undefined) {
            suspenseCache[key] = createGetAssets(tasks);
        }

        const fn: () => Nullable<AbstractAssetTask[]> = suspenseCache[key];
        return [fn()];
    }
}

export const useAssetManager = useAssetManagerWithCache();