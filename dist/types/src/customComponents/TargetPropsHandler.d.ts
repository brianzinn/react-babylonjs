import { CreatedInstance } from "../CreatedInstance";
import { UpdatePayload, PropsHandler } from "../PropsHandler";
export default class TargetPropsHandler implements PropsHandler<any, any> {
    getPropertyUpdates(createdInstance: CreatedInstance<any>, oldProps: any, newProps: any, scene: BABYLON.Scene): UpdatePayload;
}
