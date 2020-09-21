import { AbstractAssetTask, AssetsManager, Nullable, Scene } from "@babylonjs/core";
import { useBabylonScene } from "../Scene";

export enum TaskType {
    Binary = 'Binary'
}

export type Task = {
    taskType: TaskType,
    name: string,
    url: string
}

/**
 * This has limited functionality, since it only works for binary assets currently.
 * onProgress() cannot be reported through the Suspense boundary without context, so thought needed on how to accomplish progress indicator in fallback.
 */
const useAssetManagerWithCache = () => {
    // we need our own memoized cache. useMemo, useState, etc. fail miserably - throwing a promise forces the component to remount.
    const suspenseCache: Record<string, () => Nullable<AbstractAssetTask[]>> = {};

    return (tasks: Task[], useDefaultLoadingScreen: boolean = false, scene?: Scene) => {
        const hookScene = useBabylonScene();

        const createGetAssets = (tasks: Task[]): () => Nullable<AbstractAssetTask[]> => {
            if (!Array.isArray(tasks)) {
                throw new Error('Asset Manager tasks must be an array')
            }

            if (scene === undefined && hookScene === null) {
                throw new Error('useAssetManager can only be used inside a Scene component (or pass scene as a prop)')
            }

            const assetManager: AssetsManager = new AssetsManager(scene || hookScene!);

            tasks.forEach(task => {
                switch (task.taskType) {
                    case TaskType.Binary:
                        assetManager.addBinaryFileTask(task.name, task.url);
                        break;
                    default:
                        throw new Error(`Only binary supported currently.  Not ${task.taskType}`);
                }
            })

            const taskPromise = new Promise<AbstractAssetTask[]>((resolve, reject) => {
                let failed = false
                assetManager.useDefaultLoadingScreen = useDefaultLoadingScreen;
                assetManager.onFinish = (tasks: AbstractAssetTask[]) => {
                    if (failed === false) {
                        // setTimeout(() => { /* for testing delays */
                        resolve(tasks);
                        // }, 3000);
                    }
                };
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