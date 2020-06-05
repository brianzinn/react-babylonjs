import { useEffect, useState } from "react";
import "@babylonjs/loaders";
import {
  AbstractMesh,
  AnimationGroup,
  IParticleSystem,
  Scene,
  SceneLoader,
  Skeleton,
  Nullable
} from "@babylonjs/core";

import { useBabylonScene } from "../Scene";

type LoaderResult = {
  meshes: AbstractMesh[];
  particleSystems: IParticleSystem[];
  skeletons: Skeleton[];
  animationGroups: AnimationGroup[];
}

const importMesh = (meshNames: any, rootUrl: string, sceneFilename: string | undefined, pluginExtension: string | undefined, scene: Scene): Promise<LoaderResult> => {
  return new Promise((resolve, reject) => {
    SceneLoader.ImportMesh(meshNames, rootUrl, sceneFilename, scene,
      (meshes: AbstractMesh[], particleSystems: IParticleSystem[], skeletons: Skeleton[], animationGroups: AnimationGroup[]) => {
        resolve({ meshes, particleSystems, skeletons, animationGroups });
      }, undefined, (_, message, exception) => {
        reject(exception ?? message)
      },
      pluginExtension);
  })
}

/**
 * Same parameters as SceneLoader.ImportMesh (see docs)
 *
 * @param rootUrl
 * @param sceneFilename
 * @param pluginExtension
 * @param meshNames
 */
export const useLoader = (rootUrl: string, sceneFilename?: string, pluginExtension?: string, meshNames?: any): [boolean, LoaderResult] => {
  const scene = useBabylonScene();

  const [loaded, setLoaded] = useState<boolean>(false);
  // using empty object to allow destructuring from hook (instead of Nullable<LoaderResult>)
  const [results, setResults] = useState<LoaderResult>({
    animationGroups: [],
    meshes: [],
    particleSystems: [],
    skeletons: []
  });

  useEffect(() => {
    importMesh(meshNames, rootUrl, sceneFilename, pluginExtension, scene!)
      .then((result: LoaderResult) => {
        setResults(result);
        setLoaded(true);
      })
  }, [rootUrl, sceneFilename])

  return [loaded, results];
}

// TODO: add support for Suspense
// type AsyncStatus = 'init' | 'success' | 'error';
// let status: AsyncStatus = 'init';
// let loadedModel = {meshes: [], ...}
// const suspender = importMesh(...)
//         .then((loaded: LoadedModel) => {
//             loadedModel = loaded; // available from closure
//             status = 'success';
//         })
//         .catch((e) => {
//             error = e;
//             status = 'error';
//         });

//     return () => {
//         if (status === 'init') {
//             // Yes, throw the Promise if it's not resolved yet!
//             throw suspender;
//         } else if (status === 'error') {
//             throw error;
//         } else {
//             return loadedModel;
//         }
//     }
