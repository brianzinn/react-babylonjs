import { Sprite } from '@babylonjs/core/Sprites/sprite.js'
import { SpriteManager } from '@babylonjs/core/Sprites/spriteManager.js'
import { CreatedInstance } from '../CreatedInstance'
import { assignProperty } from '../helper/property'
import DeferredCreationLifecycleListener from './DeferredCreationLifecycleListener'
import { Nullable } from '@babylonjs/core/types'
import { Scene } from '@babylonjs/core/scene'

export default class SpriteLifecycleListener extends DeferredCreationLifecycleListener<
  Sprite,
  any
> {
  createInstance = (
    instance: CreatedInstance<Sprite>,
    scene: Scene,
    props: any
  ): Nullable<Sprite> => {
    let result: Nullable<Sprite> = null
    let tmp: CreatedInstance<any> | null = instance.parent

    while (tmp !== null) {
      // FiberSpriteManager and FiberSpritePackedManager
      if (
        tmp.metadata.className.startsWith('FiberSprite') &&
        tmp.metadata.className.endsWith('Manager')
      ) {
        const manager = tmp.hostInstance as SpriteManager
        instance.hostInstance = result = new Sprite(props.name, manager)
        break
      }
      tmp = tmp.parent
    }

    if (result === null) {
      console.warn(`No SpriteManager found as child node of '${props.name ?? 'no name'}'`)
    }

    return result
  }
}
