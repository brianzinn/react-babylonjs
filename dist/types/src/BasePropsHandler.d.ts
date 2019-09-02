import { HasPropsHandlers, PropsHandler } from "./PropsHandler";
/**
 * TODO: Integrate this into the generated code, which duplicates for every class.
 */
export default class BasePropsHandler<T, U> implements HasPropsHandlers<T, U> {
    private propsHandlers;
    constructor(propsHandlers: PropsHandler<T, U>[]);
    getPropsHandlers(): PropsHandler<T, U>[];
    addPropsHandler(propHandler: PropsHandler<T, U>): void;
}
