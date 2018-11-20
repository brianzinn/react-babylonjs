export interface GeneratedParameter {
    name: string,
    type: string | GeneratedParameter[],
    optional: boolean
}

export class CreationType {
    public static readonly FactoryMethod : string = 'FactoryMethod'
    public static readonly Constructor : string = 'Constructor'
}

export interface CreateInfo {
    libraryLocation: string // ie: `BABYLON.${libraryLocation}`
    namespace: string // so far only 'BABYLON' or 'GUI'
    factoryMethod?: string // required for 'Factory' creation type.
    creationType: string // TODO: enum
    parameters: GeneratedParameter[]
}