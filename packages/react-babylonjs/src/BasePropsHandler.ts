import { HasPropsHandlers, PropsHandler } from './PropsHandler'

/**
 * TODO: Integrate this into the generated code, which duplicates for every class.
 */
export default class BasePropsHandler<U> implements HasPropsHandlers<U> {
  private propsHandlers: PropsHandler<U>[]

  constructor(propsHandlers: PropsHandler<U>[]) {
    this.propsHandlers = propsHandlers
  }

  getPropsHandlers(): PropsHandler<U>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<U>): void {
    this.propsHandlers.push(propHandler)
  }
}
