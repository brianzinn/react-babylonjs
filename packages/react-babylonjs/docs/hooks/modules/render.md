[react-babylonjs](../README.md) / [Exports](../modules.md) / render

# Module: render

## Table of contents

### Type aliases

- [OnFrameRenderFn](render.md#onframerenderfn)

### Functions

- [useAfterRender](render.md#useafterrender)
- [useBeforeRender](render.md#usebeforerender)

## Type aliases

### OnFrameRenderFn

Ƭ **OnFrameRenderFn**: (`eventData`: Scene, `eventState`: EventState) => _void_

Defined in: [render.ts:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L5)

## Functions

### useAfterRender

▸ `Const`**useAfterRender**(`callback`: [_OnFrameRenderFn_](render.md#onframerenderfn), `mask?`: _number_, `insertFirst?`: _boolean_, `callOnce?`: _boolean_): _void_

Register a callback for after the scene renders.

#### Parameters:

| Name           | Type                                           | Description                                                                           |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| `callback`     | [_OnFrameRenderFn_](render.md#onframerenderfn) | called using onBeforeRender functionality of scene                                    |
| `mask?`        | _number_                                       | the mask used to filter observers                                                     |
| `insertFirst?` | _boolean_                                      | if true will be inserted at first position, if false (default) will be last position. |
| `callOnce?`    | _boolean_                                      | only call the callback once                                                           |

**Returns:** _void_

Defined in: [render.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L42)

---

### useBeforeRender

▸ `Const`**useBeforeRender**(`callback`: [_OnFrameRenderFn_](render.md#onframerenderfn), `mask?`: _number_, `insertFirst?`: _boolean_, `callOnce?`: _boolean_): _void_

Register a callback for before the scene renders.

#### Parameters:

| Name           | Type                                           | Description                                                                           |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| `callback`     | [_OnFrameRenderFn_](render.md#onframerenderfn) | called using onBeforeRender functionality of scene                                    |
| `mask?`        | _number_                                       | the mask used to filter observers                                                     |
| `insertFirst?` | _boolean_                                      | if true will be inserted at first position, if false (default) will be last position. |
| `callOnce?`    | _boolean_                                      | only call the callback once                                                           |

**Returns:** _void_

Defined in: [render.ts:15](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L15)
