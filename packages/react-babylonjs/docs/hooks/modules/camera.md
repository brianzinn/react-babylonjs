[react-babylonjs](../README.md) / [Exports](../modules.md) / camera

# Module: camera

## Table of contents

### Functions

- [useCamera](camera.md#usecamera)

## Functions

### useCamera

▸ `Const`**useCamera**<T\>(`createCameraFn`: (`scene`: _Scene_) => T, `autoAttach?`: _boolean_, `noPreventDefault?`: _boolean_): _Nullable_<T\>

Handles creating a camera and attaching/disposing.
TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton

#### Type parameters:

| Name | Type         |
| ---- | ------------ |
| `T`  | _Camera_<T\> |

#### Parameters:

| Name               | Type                    | Default value | Description                                           |
| ------------------ | ----------------------- | ------------- | ----------------------------------------------------- |
| `createCameraFn`   | (`scene`: _Scene_) => T | -             | function that creates and returns a camera            |
| `autoAttach`       | _boolean_               | true          | Attach the input controls (default true)              |
| `noPreventDefault` | _boolean_               | true          | Events caught by controls should call prevent default |

**Returns:** _Nullable_<T\>

Defined in: [camera.ts:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/camera.ts#L14)
