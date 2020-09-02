import { CascadedShadowGenerator, DirectionalLight } from "@babylonjs/core";
import BaseShadowGeneratorLifecycleListener from "./BaseShadowGeneratorLifecycleListener";

export default class CascadedShadowGeneratorLifecycleListener extends BaseShadowGeneratorLifecycleListener<CascadedShadowGenerator> {
  createShadowGenerator = (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => {
    return new CascadedShadowGenerator(mapSize, light, useFullFloatFirst);
  };

  get generatorType(): string {
    return "CascadedShadowGenerator";
  }
}