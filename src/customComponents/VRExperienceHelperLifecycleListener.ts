import { LifecycleListeners, CreatedInstance } from "../ReactBabylonJSHostConfig"

export default class VRExperienceHelperLifecycleListener implements LifecycleListeners {

  private props: any;

  constructor(props: any) {
      this.props = props;
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {}

  onMount(instance: CreatedInstance<any>): void {
    if (this.props.enableInteractions) {
      if (typeof instance.babylonJsObject.enableInteractions === 'function') {
        instance.babylonJsObject.enableInteractions()
      }
    }
  }
}