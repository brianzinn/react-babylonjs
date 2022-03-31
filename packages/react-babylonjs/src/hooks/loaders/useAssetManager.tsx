import {
  AbstractAssetTask,
  AssetsManager,
  BinaryFileAssetTask,
  IAssetsProgressEvent,
  MeshAssetTask,
  TextureAssetTask,
} from '@babylonjs/core/Misc/assetsManager.js'
import { EventState } from '@babylonjs/core/Misc/observable.js'
import { Scene } from '@babylonjs/core/scene.js'
import { Nullable } from '@babylonjs/core/types.js'
import React, { useContext, useState } from 'react'
import { useScene } from '../scene'

export enum TaskType {
  Binary = 'Binary',
  Mesh = 'Mesh',
  Texture = 'Texture',
}

export type BinaryTask = {
  taskType: TaskType.Binary
  name: string
  url: string
  onSuccess?: BinaryFileAssetTask['onSuccess']
  onError?: BinaryFileAssetTask['onError']
}

export type MeshTask = {
  taskType: TaskType.Mesh
  name: string
  meshesNames?: any
  rootUrl: string
  sceneFilename: string
  onSuccess?: MeshAssetTask['onSuccess']
  onError?: MeshAssetTask['onError']
}

export type TextureTask = {
  taskType: TaskType.Texture
  name: string
  url: string
  noMipmap?: boolean
  invertY?: boolean
  samplingMode?: number
  onSuccess?: TextureAssetTask['onSuccess']
  onError?: TextureAssetTask['onError']
}

export type Task = BinaryTask | MeshTask | TextureTask

export type AssetManagerContextType =
  | {
      updateProgress: (progress: AssetManagerProgressType) => void
      lastProgress?: AssetManagerProgressType
    }
  | undefined

export const AssetManagerContext = React.createContext<AssetManagerContextType>(undefined)

export type AssetManagerProgressType =
  | {
      eventData: IAssetsProgressEvent
      eventState: EventState
    }
  | undefined

export type AssetManagerContextProviderProps = {
  startProgress?: AssetManagerProgressType
  children: React.ReactNode
}

export const AssetManagerContextProvider: React.FC<AssetManagerContextProviderProps> = (
  props: AssetManagerContextProviderProps
) => {
  const [progress, setProgress] = useState<AssetManagerProgressType>(undefined)

  return (
    <AssetManagerContext.Provider value={{ lastProgress: progress, updateProgress: setProgress }}>
      {props.children}
    </AssetManagerContext.Provider>
  )
}

export type AssetManagerOptions = {
  useDefaultLoadingScreen?: boolean
  reportProgress?: boolean // TODO: improve name.  this is the opt-out of reporting (can trigger many re-renders).
  scene?: Scene
}

const getTaskKey = (task: Task): string | undefined => {
  switch (task.taskType) {
    case TaskType.Binary:
      return `binary:${task.url}`
    case TaskType.Mesh:
      return `mesh:${task.rootUrl}/${task.sceneFilename}`
    case TaskType.Texture:
      return `texture:${task.url}`
    default:
      throw new Error(`Unknown task type: ${JSON.stringify(task)}`)
  }
}

type AssetManagerResult = {
  tasks: AbstractAssetTask[]
  taskNameMap: Record<string, AbstractAssetTask>
}

/**
 * This has limited functionality and only works for limited asset types.
 *
 * This is an experimental API and *WILL* change.
 * TODO: function signature is not any.
 */
const useAssetManagerWithCache = (): ((
  tasks: Task[],
  options?: AssetManagerOptions
) => AssetManagerResult) => {
  // we need our own memoized cache. useMemo, useState, etc. fail miserably - throwing a promise forces the component to remount.
  let suspenseCache: Record<string, () => AssetManagerResult> = {}
  let suspenseScene: Nullable<Scene> = null

  let tasksCompletedCache: Record<string, AbstractAssetTask> = {}

  return (tasks: Task[], options?: AssetManagerOptions): AssetManagerResult => {
    // hooks cannot be used inside a callback (this is not a callback)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hookScene = useScene()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const assetManagerContext = useContext<AssetManagerContextType>(AssetManagerContext)

    const opts = options || {
      useDefaultLoadingScreen: false,
    }

    if (opts.scene === undefined && hookScene === null) {
      throw new Error(
        'useAssetManager can only be used inside a Scene component (or pass scene as an option)'
      )
    }

    const scene: Scene = opts.scene || hookScene!

    if (suspenseScene == null) {
      suspenseScene = scene
    } else {
      if (suspenseScene !== scene) {
        // console.log('new scene detected - clearing useAssetManager cache');
        // new scene detected.  clearing all caches.
        suspenseCache = {}
        // NOTE: could keep meshes with mesh.serialize and Mesh.Parse
        // Need to research how to do with textures, etc.
        // browser cache should make the load fast in most cases
        tasksCompletedCache = {}
        suspenseScene = scene
      }
    }
    // invalidate cache with objects from another scene
    // Object.getOwnPropertyNames(tasksCompletedCache).forEach(propertyName => {
    //     const task: AbstractAssetTask = tasksCompletedCache[propertyName];
    //     if (task instanceof TextureAssetTask) {
    //         if (task.texture.getScene() !== scene) {
    //             console.log(`clearing ${task.name} from cache (different scene)`);
    //             delete tasksCompletedCache[propertyName];
    //         } else {
    //             console.log(`scane scene ${task.name}`, scene, task.texture.getScene());
    //         }
    //     }
    // });

    const createGetAssets = (tasks: Task[]): (() => AssetManagerResult) => {
      if (!Array.isArray(tasks)) {
        throw new Error('Asset Manager tasks must be an array')
      }

      const newRequests: Map<AbstractAssetTask, Task> = new Map<AbstractAssetTask, Task>()

      const assetManager: AssetsManager = new AssetsManager(scene)
      const cachedTasks: any[] = []
      tasks.forEach((task) => {
        const key = getTaskKey(task)
        if (key !== undefined && suspenseCache[key]) {
          cachedTasks.push(suspenseCache[key])
        } else {
          switch (task.taskType) {
            case TaskType.Binary: {
              const binaryTask = assetManager.addBinaryFileTask(task.name, task.url)
              newRequests.set(binaryTask, task)
              if (task.onSuccess) {
                binaryTask.onSuccess = task.onSuccess
              }
              if (task.onError) {
                binaryTask.onError = task.onError
              }
              break
            }
            case TaskType.Mesh: {
              const meshTask = assetManager.addMeshTask(
                task.name,
                task.meshesNames,
                task.rootUrl,
                task.sceneFilename
              )
              newRequests.set(meshTask, task)
              if (task.onSuccess) {
                meshTask.onSuccess = task.onSuccess
              }
              if (task.onError) {
                meshTask.onError = task.onError
              }
              break
            }
            case TaskType.Texture: {
              const textureTask: TextureAssetTask = assetManager.addTextureTask(
                task.name,
                task.url,
                task.noMipmap,
                task.invertY,
                task.samplingMode
              )
              newRequests.set(textureTask, task)
              if (task.onSuccess) {
                textureTask.onSuccess = task.onSuccess
              }
              if (task.onError) {
                textureTask.onError = task.onError
              }
              break
            }
            default:
              throw new Error(
                `Only binary/mesh supported currently.  'taskType' found on ${JSON.stringify(task)}`
              )
          }
        }
      })

      const createResultFromTasks = (tasks: AbstractAssetTask[]): AssetManagerResult => {
        const taskNameMap = tasks.reduce<Record<string, AbstractAssetTask>>(
          (prev: Record<string, AbstractAssetTask>, cur: AbstractAssetTask) => {
            prev[cur.name] = cur
            return prev
          },
          {}
        )
        return { tasks, taskNameMap }
      }

      const taskPromise =
        tasks.length === cachedTasks.length
          ? new Promise<AssetManagerResult>((resolve) =>
              resolve(createResultFromTasks(cachedTasks))
            )
          : new Promise<AssetManagerResult>((resolve, reject) => {
              let failed = false
              assetManager.useDefaultLoadingScreen = opts.useDefaultLoadingScreen ?? false
              assetManager.onFinish = (tasks: AbstractAssetTask[]) => {
                // whether it failed or not - we cache all results
                tasks.forEach((task) => {
                  if (newRequests.has(task)) {
                    // NOTE: we can skip caching failed requests (ie: due to temporary outage / 500)
                    const originalTask: Task = newRequests.get(task)!
                    const key = getTaskKey(originalTask)!
                    tasksCompletedCache[key] = task
                  }
                })
                if (failed === false) {
                  // include cached ones as well.
                  const result = createResultFromTasks(tasks.concat(cachedTasks))
                  resolve(result)
                }
              }

              if (opts.reportProgress !== false && assetManagerContext !== undefined) {
                assetManager.onProgressObservable.add(
                  (eventData: IAssetsProgressEvent, eventState: EventState) => {
                    assetManagerContext!.updateProgress({ eventData, eventState })
                  }
                )
              }

              assetManager.onTaskError = (task: AbstractAssetTask) => {
                failed = true
                reject(
                  `Failed task ${
                    task.errorObject
                      ? task.errorObject.message ?? `no error message on '${task.name}'`
                      : task.name
                  }`
                )
              }

              assetManager.load()
            })

      let result: AssetManagerResult
      let error: Nullable<Error> = null
      let suspender: Nullable<Promise<void>> = null
      suspender = (async () => {
        try {
          result = await taskPromise
        } catch (e) {
          error = e as Error
        } finally {
          suspender = null
        }
      })()

      const getAssets = () => {
        if (suspender) {
          throw suspender
        }
        if (error !== null) {
          throw error
        }

        return result
      }
      return getAssets
    }

    const key = JSON.stringify(tasks)
    if (suspenseCache[key] === undefined) {
      suspenseCache[key] = createGetAssets(tasks)
    }

    return suspenseCache[key]()
  }
}

// this isn't a hook being called
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAssetManager = useAssetManagerWithCache()
