import "@babylonjs/loaders";
import {AbstractMesh, AnimationGroup, IParticleSystem, Scene, SceneLoader, Skeleton} from "@babylonjs/core";
import {useEffect, useState} from "react";
import {useBabylonScene} from "../Scene";
import {memo} from "../helper/memo";

type LoaderResult = {
  meshes: AbstractMesh[];
  particleSystems: IParticleSystem[];
  skeletons: Skeleton[];
  animationGroups: AnimationGroup[];
}

function importMesh(url: string, scene: Scene) {
  return new Promise(resolve => {
    SceneLoader.ImportMesh("", url, "", scene,
      function (meshes: AbstractMesh[], particleSystems: IParticleSystem[], skeletons: Skeleton[], animationGroups: AnimationGroup[]) {
        resolve({meshes, particleSystems, skeletons, animationGroups});
      });
  })
}

const memoImportMesh = memo(importMesh);

/**
 * TODO: support url[]
 * @param url
 */
export function useLoader(url: string): [boolean, LoaderResult] {
  const scene = useBabylonScene();
  console.log('useLoader', scene)
  const [loaded, setLoaded] = useState<boolean>(false);
  const [results, setResults] = useState<LoaderResult>({
    meshes: [],
    particleSystems: [],
    skeletons: [],
    animationGroups: [],
  });

  useEffect(() => {
    memoImportMesh(url, scene)
      .then((result: LoaderResult) => {
        setLoaded(true);
        setResults(result);
      })
  }, [url])

  return [loaded, results];
}
