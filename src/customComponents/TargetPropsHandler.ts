import { Scene } from '@babylonjs/core'
import { CreatedInstance } from "../CreatedInstance"
import { UpdatePayload, PropertyUpdate, PropsHandler } from "../PropsHandler"

// This does not work when declared component with "lockedTargetMeshName" is before the mesh with that name.
// Need to wait for full commit mount of entire tree, so use in conjunction with LifecycleListner is best option.
export default class TargetPropsHandler implements PropsHandler<any> {

  constructor(private scene: Scene) {}

  getPropertyUpdates(oldProps: any, newProps: any): UpdatePayload {
    const propertyUpdates: PropertyUpdate[] = []
    if (!oldProps.lockedTargetMeshName || oldProps.lockedTargetMeshName !== newProps.lockedTargetMeshName) {
      if (typeof newProps.lockedTargetMeshName === "string") {
        propertyUpdates.push({
          type: "BabylonjsCoreMesh",
          value: this.scene.getMeshByName(newProps.lockedTargetMeshName),
          propertyName: "lockedTarget"
        })
      }
    }

    return propertyUpdates
  }
}
