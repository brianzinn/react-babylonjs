export interface GeneratedParameter {
    name: string;
    type: string | GeneratedParameter[];
    optional: boolean;
}
export declare class CreationType {
    static readonly FactoryMethod: string;
    static readonly Constructor: string;
}
export interface CreateInfo {
    libraryLocation: string;
    namespace: string;
    factoryMethod?: string;
    creationType: string;
    parameters: GeneratedParameter[];
}
