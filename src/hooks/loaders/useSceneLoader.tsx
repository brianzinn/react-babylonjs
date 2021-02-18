import React, { useContext, useState } from 'react';
import { SceneLoader, Scene, Nullable, ISceneLoaderPlugin, ISceneLoaderPluginAsync, AbstractMesh, IParticleSystem, Skeleton, AnimationGroup, ISceneLoaderProgressEvent } from '@babylonjs/core';
import { useScene } from '../scene';

import { ILoadedModel, LoadedModel, LoaderStatus } from './loadedModel';

export type SceneLoaderContextType = {
  updateProgress: (progress: ISceneLoaderProgressEvent) => void
  lastProgress?: Nullable<ISceneLoaderProgressEvent>
} | undefined;

export const SceneLoaderContext = React.createContext<SceneLoaderContextType>(undefined);

export type SceneLoaderContextProviderProps = {
  startProgress?: ISceneLoaderProgressEvent,
  children: React.ReactNode,
}

export const SceneLoaderContextProvider: React.FC<SceneLoaderContextProviderProps> = (props: SceneLoaderContextProviderProps) => {
  const [progress, setProgress] = useState<Nullable<ISceneLoaderProgressEvent>>(null);

  return (<SceneLoaderContext.Provider value={{ lastProgress: progress, updateProgress: setProgress }}>
    {props.children}
  </SceneLoaderContext.Provider>);
}

export type SceneLoaderOptions = {
  /**
   * An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
   */
  meshNames?: any

  /**
   * set that all meshes receive shadows.
   * Defaults to false.
   */
  receiveShadows?: boolean

  /**
   * Scale entire model within these square bounds
   * Defaults to no scaling.
   */
  scaleToDimension?: number

  /**
   * Always select root mesh as active.
   * Defaults to false.
   */
  alwaysSelectAsActiveMesh?: boolean

  /**
   * SceneLoader progress events are set on context provider (when available).
   * Defaults to false.
   */
  reportProgress?: boolean

  /**
   * Not needed if you are within a SceneContext.
   */
  scene?: Scene

  /**
   * Access to loaded model as soon as it is loaded, so it provides a way to hide or scale the meshes before the first render.
   */
  onModelLoaded?: (loadedModel: ILoadedModel) => void

  /**
   * Raw progress event for SceneLoader
   */
  onLoadProgress?: (event: ISceneLoaderProgressEvent) => void

  /**
   * Called if SceneLoader returns an error.
   */
  onModelError?: (model: ILoadedModel) => void
}

/**
 * A cached version of SceneLoader with a Suspense cache.
 */
const useSceneLoaderWithCache = (): (rootUrl: string, sceneFilename: string, pluginExtension?: string, options?: SceneLoaderOptions) => LoadedModel => {
  // we need our own memoized cache. useMemo, useState, etc. fail miserably - throwing a promise forces the component to remount.
  let suspenseCache: Record<string, undefined | (() => LoadedModel)> = {};
  let suspenseScene: Nullable<Scene> = null;

  // let tasksCompletedCache: Record<string, LoadedModel> = {};

  return (rootUrl: string, sceneFilename: string, pluginExtension?: string, options?: SceneLoaderOptions): LoadedModel => {
    const opts: SceneLoaderOptions = options || {};

    const hookScene = useScene();

    if (opts.scene === undefined && hookScene === null) {
      throw new Error('useSceneLoader can only be used inside a Scene component (or pass scene as an option)')
    }

    const scene: Scene = opts.scene || hookScene!

    if (suspenseScene == null) {
      suspenseScene = scene;
    } else {
      if (suspenseScene !== scene) {
        // console.log('new scene detected - clearing useAssetManager cache');
        suspenseCache = {};
        // NOTE: could keep meshes with mesh.serialize and Mesh.Parse
        // Need to research how to do with textures, etc.
        // browser cache should make the load fast in most cases
        // tasksCompletedCache = {};
        suspenseScene = scene;
      }
    }

    const suspenseKey = `${rootUrl}/${sceneFilename}`;
    const sceneLoaderContext = useContext<SceneLoaderContextType>(SceneLoaderContext);

    const createSceneLoader = (): () => LoadedModel => {
      const taskPromise = new Promise<LoadedModel>((resolve, reject) => {
        let loadedModel = new LoadedModel()

        loadedModel.status = LoaderStatus.Loading

        let loader: Nullable<ISceneLoaderPlugin | ISceneLoaderPluginAsync> = SceneLoader.ImportMesh(
          opts.meshNames,
          rootUrl,
          sceneFilename,
          scene,
          (meshes: AbstractMesh[], particleSystems: IParticleSystem[], skeletons: Skeleton[], animationGroups: AnimationGroup[]): void => {
            loadedModel.rootMesh = new AbstractMesh(sceneFilename + "-root-model", scene);
            if (opts.alwaysSelectAsActiveMesh === true) {
              loadedModel.rootMesh.alwaysSelectAsActiveMesh = true;
            }

            loadedModel.meshes = [];
            meshes.forEach(mesh => {
              loadedModel.meshes!.push(mesh);

              // leave meshes already parented to maintain model hierarchy:
              if (!mesh.parent) {
                mesh.parent = loadedModel.rootMesh!;
              }

              if (opts.receiveShadows === true) {
                mesh.receiveShadows = true;
              }
            })
            loadedModel.particleSystems = particleSystems;
            loadedModel.skeletons = skeletons;
            loadedModel.animationGroups = animationGroups;

            loadedModel.status = LoaderStatus.Loaded;

            if (opts.scaleToDimension) {
              loadedModel.scaleTo(opts.scaleToDimension);
            }
            if (options?.onModelLoaded) {
              options.onModelLoaded(loadedModel);
            }

            const originalDispose = loadedModel.dispose;
            loadedModel.dispose = () => {
              // console.log('Clearing cache (cannot re-use meshes).');
              suspenseCache[suspenseKey] = undefined;
              originalDispose.call(loadedModel);
            }

            resolve(loadedModel);
          },
          (event: ISceneLoaderProgressEvent): void => {
            if (opts.reportProgress === true && sceneLoaderContext !== undefined) {
              sceneLoaderContext!.updateProgress(event);
            }
            if (opts.onLoadProgress) {
              opts.onLoadProgress(event);
            }
          },
          (_: Scene, message: string, exception?: any): void => {
            if (opts.onModelError) {
              opts.onModelError(loadedModel);
            }
            reject(exception ?? message);
          },
          pluginExtension
        )

        if (loader) {
          loadedModel.loaderName = loader.name
        } else {
          loadedModel.loaderName = "no loader found"
        }
      });

      let result: LoadedModel;
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
    }

    if (suspenseCache[suspenseKey] === undefined) {
      suspenseCache[suspenseKey] = createSceneLoader();
    }

    return suspenseCache[suspenseKey]!();
  }
}

export const useSceneLoader = useSceneLoaderWithCache();
