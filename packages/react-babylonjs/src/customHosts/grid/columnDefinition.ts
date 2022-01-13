import { Scene } from "@babylonjs/core/scene.js";
import { Nullable } from "@babylonjs/core/types.js";
import { Grid } from "@babylonjs/gui/2D/controls/grid.js";
import { ValueAndUnit } from "@babylonjs/gui/2D/valueAndUnit.js";
import {
  RowOrColumnDefinitionProps,
  RowOrColumnDefinitionPropsHandler,
} from ".";
import { CreatedInstance } from "../../CreatedInstance";
import { DynamicHost } from "../../HostRegistrationStore";
import DeferredCreationLifecycleListener from "../DeferredCreationLifecycleListener";

/**
 * We delay instantiation and when parented add a column definition to parent "Grid".
 */
export default class ColumnDefinitionLifecycleListener extends DeferredCreationLifecycleListener<
  ValueAndUnit,
  any
> {
  private _grid: Grid | undefined;

  createInstance = (
    instance: CreatedInstance<ValueAndUnit>,
    scene: Scene,
    props: RowOrColumnDefinitionProps
  ): Nullable<ValueAndUnit> => {
    if (!this._grid) {
      return null;
    }
    this._grid.addColumnDefinition(
      props.value,
      props.unit === ValueAndUnit.UNITMODE_PIXEL
    );
    instance.hostInstance = this._grid.getColumnDefinition(
      this._grid.columnCount - 1
    )!;
    return instance.hostInstance;
  };

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {
    super.onParented(parent, child);
    // TODO: search hierarchy for a grid, but it should always be parent.
    this._grid = parent.hostInstance;
  }
}

export const ColumnDefinition: DynamicHost<
  ValueAndUnit,
  RowOrColumnDefinitionProps
> = {
  hostElementName: "columnDefinition",

  propHandlerInstance: new RowOrColumnDefinitionPropsHandler(),

  hostFactory: (scene: Scene) => null,

  lifecycleListenerFactory: (scene: Scene, props: any) =>
    new ColumnDefinitionLifecycleListener(scene, props),

  createInfo: {
    creationType: "Constructor",
    libraryLocation: "ValueAndUnit",
    namespace: "@babylonjs/gui",
    parameters: [
      /* value and unit! */
    ],
  },
  // TODO: this should be "M"etadata
  metadata: {
    className: "ColumnDefinition",
    delayCreation: true,
  },
};
