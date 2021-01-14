[react-babylonjs](../README.md) / [Exports](../modules.md) / engine

# Module: engine

## Table of contents

### Type aliases

- [EngineCanvasContextType](engine.md#enginecanvascontexttype)

### Variables

- [EngineCanvasContext](engine.md#enginecanvascontext)

### Functions

- [useCanvas](engine.md#usecanvas)
- [useEngine](engine.md#useengine)
- [withEngineCanvasContext](engine.md#withenginecanvascontext)

## Type aliases

### EngineCanvasContextType

Ƭ **EngineCanvasContextType**: { `canvas`: *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\> ; `engine`: *Nullable*<Engine\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`canvas` | *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\> |
`engine` | *Nullable*<Engine\> |

Defined in: [engine.tsx:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L5)

## Variables

### EngineCanvasContext

• `Const` **EngineCanvasContext**: *Context*<[*EngineCanvasContextType*](engine.md#enginecanvascontexttype)\>

Defined in: [engine.tsx:10](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L10)

## Functions

### useCanvas

▸ `Const`**useCanvas**(): *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\>

Get the canvas DOM element from the context.

**Returns:** *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\>

Defined in: [engine.tsx:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L52)

___

### useEngine

▸ `Const`**useEngine**(): *Nullable*<*Engine*\>

Get the engine from the context.

**Returns:** *Nullable*<*Engine*\>

Defined in: [engine.tsx:35](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L35)

___

### withEngineCanvasContext

▸ **withEngineCanvasContext**<P, R\>(`Component`: *React.ComponentClass*<P\> \| *React.FunctionComponent*<P\>): *React.FunctionComponent*<R\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`P` | { `engineCanvasContext`: [*EngineCanvasContextType*](engine.md#enginecanvascontexttype)  } | - |
`R` | - | *Pick*<P, *Exclude*<keyof P, *engineCanvasContext*\\>\\> |

#### Parameters:

Name | Type |
------ | ------ |
`Component` | *React.ComponentClass*<P\> \| *React.FunctionComponent*<P\> |

**Returns:** *React.FunctionComponent*<R\>

Defined in: [engine.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L17)
