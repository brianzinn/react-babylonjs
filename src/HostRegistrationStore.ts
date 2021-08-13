import { Scene } from "@babylonjs/core/scene.js";

import { CreateInfo } from "./codeGenerationDescriptors";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { HasPropsHandlers } from "./PropsHandler";

export type DynamicHost<T, U> = {
  hostElementName: string
  hostFactory: (scene: Scene) => T
  propHandlerInstance: HasPropsHandlers<U>
  createInfo: CreateInfo
  metadata: CreatedInstanceMetadata
}

/**
 * Experimental - this will change - just a demo!
 * 
 * Allows dynamic registration of host elements that the reconciler will take into consideration (case sensitive).
 */
export class HostRegistrationStore {

  private static _store: Record<string, DynamicHost<any, any>> = {};

  /**
   * Registers a new host element
   * @param host host element to dynamically register
   */
  public static Register(host: DynamicHost<any, any>): void {
    this._store[host.hostElementName] = host;
  }

  /**
   * Retrieve a registered host by element name
   */
  public static GetRegisteredHost(hostElementName: string): DynamicHost<any, any> | undefined {
    return this._store[hostElementName];
  }
}