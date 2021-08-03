import { Texture } from '@babylonjs/core';

import { CreatedInstance } from '../CreatedInstance';
import { assignProperty } from '../helper/property';
import BaseLifecycleListener from './BaseLifecycleListener';

export default class TexturesLifecycleListener extends BaseLifecycleListener<Texture, any> {
  onMount(instance: CreatedInstance<Texture>) {
    const { assignTo } = instance.customProps;
    const texture = instance.hostInstance;

    let tmp: CreatedInstance<any> | null = instance.parent;

    while (tmp !== null) {
      if (tmp.metadata && (tmp.metadata.isMaterial === true || tmp.metadata.className === 'Model')) {
        if (assignTo) {
          assignProperty(texture, tmp.hostInstance, assignTo);
        } else {
          // maybe below case is more common, so let it default
          tmp.hostInstance.diffuseTexture = texture;
        }
        break;
      }
      tmp = tmp.parent;
    }
  }
}
