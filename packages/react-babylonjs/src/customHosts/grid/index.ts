import {
  checkPrimitiveDiff,
  HasPropsHandlers,
  PropertyUpdate,
  PropsHandler,
} from '../../PropsHandler'

export type RowOrColumnDefinitionProps = {
  value: number
  unit?: number
}

export class RowOrColumnDefinitionPropsHandlers
  implements PropsHandler<RowOrColumnDefinitionProps>
{
  getPropertyUpdates(
    oldProps: RowOrColumnDefinitionProps,
    newProps: RowOrColumnDefinitionProps
  ): PropertyUpdate[] | null {
    const changedProps: PropertyUpdate[] = []
    checkPrimitiveDiff(oldProps.value, newProps.value, 'value', changedProps)
    checkPrimitiveDiff(oldProps.unit, newProps.unit, 'unit', changedProps)
    return changedProps.length === 0 ? null : changedProps
  }
}

/**
 * Handles property updates.
 */
export class RowOrColumnDefinitionPropsHandler
  implements HasPropsHandlers<RowOrColumnDefinitionProps>
{
  private propsHandlers: PropsHandler<RowOrColumnDefinitionProps>[]

  constructor() {
    this.propsHandlers = [new RowOrColumnDefinitionPropsHandlers()]
  }

  getPropsHandlers(): PropsHandler<RowOrColumnDefinitionProps>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<RowOrColumnDefinitionProps>): void {
    this.propsHandlers.push(propHandler)
  }
}
