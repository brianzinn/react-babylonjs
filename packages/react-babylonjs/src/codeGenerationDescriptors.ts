export interface GeneratedParameter {
  name: string
  type: string | GeneratedParameter[]
  optional: boolean
}

export class CreationType {
  public static readonly FactoryMethod: string = "FactoryMethod"
  public static readonly Constructor: string = "Constructor"
}

export interface CreateInfo {
  libraryLocation: string // ie: `${libraryLocation}`
  /**
   * so far only '@babylonjs/core', '@babylonjs/gui', or 'BABYLONEXT' (for Terrain)
   */
  namespace: string
  factoryMethod?: string // required for 'Factory' creation type.
  creationType: string // TODO: enum
  parameters: GeneratedParameter[]
}
