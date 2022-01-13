
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight.js';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator.js';

import BaseShadowGeneratorLifecycleListener from './BaseShadowGeneratorLifecycleListener';

export default class ShadowGeneratorLifecycleListener extends BaseShadowGeneratorLifecycleListener<ShadowGenerator, any> {
  createShadowGenerator = (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => {
    return new ShadowGenerator(mapSize, light, useFullFloatFirst);
  };

  get generatorType(): string {
    return 'ShadowGenerator';
  }
}