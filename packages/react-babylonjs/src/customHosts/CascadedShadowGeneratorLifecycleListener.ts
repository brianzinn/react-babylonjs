import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight.js'
import { CascadedShadowGenerator } from '@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js'
import BaseShadowGeneratorLifecycleListener from './BaseShadowGeneratorLifecycleListener'

export default class CascadedShadowGeneratorLifecycleListener extends BaseShadowGeneratorLifecycleListener<
  CascadedShadowGenerator,
  any
> {
  createShadowGenerator = (
    mapSize: number,
    light: DirectionalLight,
    useFullFloatFirst?: boolean
  ) => {
    return new CascadedShadowGenerator(mapSize, light, useFullFloatFirst)
  }

  get generatorType(): string {
    return 'CascadedShadowGenerator'
  }
}
