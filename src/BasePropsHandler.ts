import { HasPropsHandlers, PropsHandler } from "./PropsHandler";


/**
 * TODO: Integrate this into the generated code, which duplicates for every class.
 */
export default abstract class BasePropsHandler<T, U> implements HasPropsHandlers<T, U> {
  private propsHandlers: PropsHandler<T, U>[]

  constructor(propsHandlers: PropsHandler<T, U>[]) {
    this.propsHandlers = propsHandlers
  }

  getPropsHandlers(): PropsHandler<T, U>[] {
    return this.propsHandlers
  }

  addPropsHandler(propHandler: PropsHandler<T, U>): void {
    this.propsHandlers.push(propHandler)
  }
}
