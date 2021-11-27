import { Scene } from "@babylonjs/core/scene";
import { Nullable } from "@babylonjs/core/types";
import { Grid } from "@babylonjs/gui/2D/controls/grid";
import { ValueAndUnit } from "@babylonjs/gui/2D/valueAndUnit";
import { Key, ReactNode, Ref } from "react";
import { CreatedInstance, CreatedInstanceMetadata } from "../../CreatedInstance";
import { DynamicHost } from "../../HostRegistrationStore";
import { checkPrimitiveDiff, HasPropsHandlers, PropertyUpdate, PropsHandler } from "../../PropsHandler";
import DeferredCreationLifecycleListener from "../DeferredCreationLifecycleListener";

export type GridNode = {
  key?: Key;
  ref?: Ref<ReactNode>; // will return value and unit?
};

export type RowDefinitionProps = {
  /**
   * Numerical value to apply to height
   */
  height: number
  /**
   * Indicating if the value is stored as pixel
   */
  isPixel?: boolean
}

export type ColumnDefinitionProps = {
  width: number
  isPixel?: boolean
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      rowDefinition: RowDefinitionProps & GridNode;
      columnDefinition: ColumnDefinitionProps & GridNode;
    }
  }
}

export class CustomRowDefinitionPropsHandler implements PropsHandler<RowDefinitionProps> {
  getPropertyUpdates(oldProps: RowDefinitionProps, newProps: RowDefinitionProps): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.height, newProps.height, 'height', changedProps)
    checkPrimitiveDiff(oldProps.isPixel, newProps.isPixel, 'isPixel', changedProps)
    return changedProps.length === 0 ? null : changedProps;
  }
}

/**
 * Handles property updates.
 */
export class RowDefinitionPropsHandler implements HasPropsHandlers<RowDefinitionProps> {
  private propsHandlers: PropsHandler<RowDefinitionProps>[];

  constructor() {
    this.propsHandlers = [
      // NOTE: Cannot set property isPixel of [object Object] which has only a getter
      // new CustomRowDefinitionPropsHandler()
    ];
  }

  getPropsHandlers(): PropsHandler<RowDefinitionProps>[] {
    return this.propsHandlers;
  }

  addPropsHandler(propHandler: PropsHandler<RowDefinitionProps>): void {
    this.propsHandlers.push(propHandler);
  }
}

export const RowDefinition: DynamicHost<ValueAndUnit, RowDefinitionProps> = {
  hostElementName: "rowDefinition",

  propHandlerInstance: new RowDefinitionPropsHandler(),

  hostFactory: (scene: Scene) => null,

  lifecycleListenerFactory: (scene: Scene, props: any) => new RowDefinitionLifecycleListener(scene, props),

  createInfo: {
    "creationType": "Constructor",
    "libraryLocation": "ValueAndUnit",
    "namespace": "@babylonjs/gui",
    "parameters": [/* value and unit! */]
  },
  // TODO: this should be "M"etadata
  metadata: {
    "className": "RowDefinition",
    "delayCreation": true,
  }
}

/**
 * We delay instantiation and when parented add a row definition to parent "Grid".
 */
export default class RowDefinitionLifecycleListener extends DeferredCreationLifecycleListener<ValueAndUnit, any> {

  private _grid: Grid | undefined;

  createInstance = (instance: CreatedInstance<ValueAndUnit>, scene: Scene, props: RowDefinitionProps): Nullable<ValueAndUnit> => {
    if (!this._grid) {
      return null;
    }
    // these should be set from the props handler.  TODO: test.
    this._grid.addRowDefinition(props.height, props.isPixel);
    instance.hostInstance = this._grid.getRowDefinition(this._grid.rowCount - 1)!;
    console.log('added row:', instance.hostInstance);
    return instance.hostInstance;
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    super.onParented(parent, child);
    // TODO: search hierarchy for a grid, but it should always be parent.
    console.log('adding row definition to:', parent.metadata, parent.hostInstance);
    this._grid = parent.hostInstance;
  }
}