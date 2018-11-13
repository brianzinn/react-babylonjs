import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig"

export default class GUI2DControlLifecycleListener implements LifecycleListeners {
  private added: boolean = false

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    // if (parent.metadata.isGUI2DControl === true) {
    //     if (parent.babylonJsObject) {
    //         console.warn('calling ', parent.babylonJsObject.name + '.addControl(', child.babylonJsObject.name)
    //         parent.babylonJsObject.addControl(child.babylonJsObject);
    //         this.added = true;
    //     } else {
    //         console.error('wanting to add, but parent not ready yet... child:', child)
    //     }
    // } else {
    //     console.error('parent 2d not GUI2d', parent, child);
    // }
  }

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {
    // console.log('child added 2d', child, parent);
    // if (child.metadata.isGUI2DControl === true) {
    //     if (parent.babylonJsObject) {
    //         console.warn('calling ', parent.babylonJsObject.name + '.addControl(', child.babylonJsObject.name + ')')
    //         parent.babylonJsObject.addControl(child.babylonJsObject);
    //     } else {
    //         console.error('parent babylonJSobject is not defined.')
    //     }
    // }
  }

  onMount(instance: CreatedInstance<any>): void {
    // if (this.added !== true) {
    //     let tmp = instance.parent
    //     while(tmp) {
    //         if (tmp.metadata.isGUI2DControl) {
    //             // If it cannot attach then the parent is likely the AdvancedDynamicTexture and we are the root of the GUI.
    //             if(tmp.babylonJsObject) {
    //                 tmp.babylonJsObject.addControl(instance.babylonJsObject);
    //             } else {
    //                 console.error('Not mounting a GUI 2D (root to texture?):', instance);
    //             }
    //             break;
    //         }
    //         tmp = tmp.parent
    //     }
    // }
  }
}
