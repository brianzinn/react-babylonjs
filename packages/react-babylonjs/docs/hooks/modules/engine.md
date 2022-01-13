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

Ƭ **EngineCanvasContextType**: { `canvas`: _Nullable_<HTMLCanvasElement \|
WebGLRenderingContext\> ; `engine`: _Nullable_<Engine\> }

#### Type declaration:

| Name     | Type                                                    |
| -------- | ------------------------------------------------------- |
| `canvas` | _Nullable_<HTMLCanvasElement \| WebGLRenderingContext\> |
| `engine` | _Nullable_<Engine\>                                     |

Defined in:
[engine.tsx:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L5)

## Variables

### EngineCanvasContext

• `Const` **EngineCanvasContext**:
_Context_<[_EngineCanvasContextType_](engine.md#enginecanvascontexttype)\>

Defined in:
[engine.tsx:10](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L10)

## Functions

### useCanvas

▸ `Const`**useCanvas**(): _Nullable_<HTMLCanvasElement \|
WebGLRenderingContext\>

Get the canvas DOM element from the context.

**Returns:** _Nullable_<HTMLCanvasElement \| WebGLRenderingContext\>

Defined in:
[engine.tsx:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L52)

---

### useEngine

▸ `Const`**useEngine**(): _Nullable_<_Engine_\>

Get the engine from the context.

**Returns:** _Nullable_<_Engine_\>

Defined in:
[engine.tsx:35](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L35)

---

### withEngineCanvasContext

▸ **withEngineCanvasContext**<P, R\>(`Component`: _React.ComponentClass_<P\> \|
_React.FunctionComponent_<P\>): _React.FunctionComponent_<R\>

#### Type parameters:

| Name | Type                                                                                      | Default                                                  |
| ---- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `P`  | { `engineCanvasContext`: [_EngineCanvasContextType_](engine.md#enginecanvascontexttype) } | -                                                        |
| `R`  | -                                                                                         | _Pick_<P, _Exclude_<keyof P, _engineCanvasContext_\\>\\> |

#### Parameters:

| Name        | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| `Component` | _React.ComponentClass_<P\> \| _React.FunctionComponent_<P\> |

**Returns:** _React.FunctionComponent_<R\>

Defined in:
[engine.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L17)
