[react-babylonjs](../README.md) / [Exports](../modules.md) / camera

# Module: camera

## Table of contents

### Functions

- [useCamera](camera.md#usecamera)

## Functions

### useCamera

▸ `Const`**useCamera**<T\>(`createCameraFn`: (`scene`: *Scene*) => T, `autoAttach?`: *boolean*, `noPreventDefault?`: *boolean*): *Nullable*<T\>

Handles creating a camera and attaching/disposing.
TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *Camera*<T\> |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`createCameraFn` | (`scene`: *Scene*) => T | - | function that creates and returns a camera   |
`autoAttach` | *boolean* | true | Attach the input controls (default true)   |
`noPreventDefault` | *boolean* | true | Events caught by controls should call prevent default   |

**Returns:** *Nullable*<T\>

Defined in: [camera.ts:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/camera.ts#L14)
