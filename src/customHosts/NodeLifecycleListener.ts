import { CreatedInstance } from '../CreatedInstance'
import { Node } from '@babylonjs/core/node'
import BaseLifecycleListener from './BaseLifecycleListener';
import { FiberNodeProps } from '../generatedProps';

export default class NodeLifecycleListener extends BaseLifecycleListener<Node, FiberNodeProps> {
  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>) {
    super.onParented(parent, child);
    if (parent.metadata.isNode && child.metadata.isNode) {
      // TODO: consider add option for setParent(), which parents and maintains mesh pos/rot in world space
      // child.hostInstance.setParent(parent.hostInstance)
      child.hostInstance.parent = parent.hostInstance
    }
  }
}
