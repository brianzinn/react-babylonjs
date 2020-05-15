import "@babylonjs/loaders";
import {
  AbstractMesh,
  AnimationGroup,
  Engine,
  IParticleSystem,
  Scene,
  SceneLoader,
  Skeleton
} from "@babylonjs/core";
import {useEffect, useState} from "react";
import {useBabylonScene, useEngine} from "../Scene";
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

function load(url:string, engine: Engine) {
  return new Promise(resolve => {
    console.log(url, engine)
    SceneLoader.Load(url, '', engine, function(scene) {
      resolve(scene);
    });
  })
}

const memoImportMesh = memo(importMesh);
const memoLoad = memo(load);

/**
 * TODO: support url[]
 * @param url
 */
export function useLoader(url: string): [boolean, LoaderResult] {
  const scene = useBabylonScene();

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
        setResults(result);
        setLoaded(true);
      })
  }, [url])

  return [loaded, results];
}
