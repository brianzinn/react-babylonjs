import { ShadowGenerator, DirectionalLight } from '@babylonjs/core';
import BaseShadowGeneratorLifecycleListener from './BaseShadowGeneratorLifecycleListener';

export default class ShadowGeneratorLifecycleListener extends BaseShadowGeneratorLifecycleListener<ShadowGenerator, any> {
  createShadowGenerator = (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => {
    return new ShadowGenerator(mapSize, light, useFullFloatFirst);
  };

  get generatorType(): string {
    return 'ShadowGenerator';
  }
}