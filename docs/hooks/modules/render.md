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

Ƭ **OnFrameRenderFn**: (`eventData`: Scene, `eventState`: EventState) => *void*

Defined in: [render.ts:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L5)

## Functions

### useAfterRender

▸ `Const`**useAfterRender**(`callback`: [*OnFrameRenderFn*](render.md#onframerenderfn), `mask?`: *number*, `insertFirst?`: *boolean*, `callOnce?`: *boolean*): *void*

Register a callback for after the scene renders.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*OnFrameRenderFn*](render.md#onframerenderfn) | called using onBeforeRender functionality of scene   |
`mask?` | *number* | the mask used to filter observers   |
`insertFirst?` | *boolean* | if true will be inserted at first position, if false (default) will be last position.   |
`callOnce?` | *boolean* | only call the callback once    |

**Returns:** *void*

Defined in: [render.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L42)

___

### useBeforeRender

▸ `Const`**useBeforeRender**(`callback`: [*OnFrameRenderFn*](render.md#onframerenderfn), `mask?`: *number*, `insertFirst?`: *boolean*, `callOnce?`: *boolean*): *void*

Register a callback for before the scene renders.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*OnFrameRenderFn*](render.md#onframerenderfn) | called using onBeforeRender functionality of scene   |
`mask?` | *number* | the mask used to filter observers   |
`insertFirst?` | *boolean* | if true will be inserted at first position, if false (default) will be last position.   |
`callOnce?` | *boolean* | only call the callback once    |

**Returns:** *void*

Defined in: [render.ts:15](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L15)
