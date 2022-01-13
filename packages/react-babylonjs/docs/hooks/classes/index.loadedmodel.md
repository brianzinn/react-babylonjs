[react-babylonjs](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / LoadedModel

# Class: LoadedModel

[index](../modules/index.md).LoadedModel

## Hierarchy

- **LoadedModel**

## Implements

- [_ILoadedModel_](../interfaces/loaders/loadedmodel.iloadedmodel.md)

## Table of contents

### Constructors

- [constructor](index.loadedmodel.md#constructor)

### Properties

- [\_scaledToDimension](index.loadedmodel.md#_scaledtodimension)
- [animationGroups](index.loadedmodel.md#animationgroups)
- [errorMessage](index.loadedmodel.md#errormessage)
- [loaderName](index.loadedmodel.md#loadername)
- [meshes](index.loadedmodel.md#meshes)
- [particleSystems](index.loadedmodel.md#particlesystems)
- [rootMesh](index.loadedmodel.md#rootmesh)
- [skeletons](index.loadedmodel.md#skeletons)
- [status](index.loadedmodel.md#status)

### Accessors

- [boundingInfo](index.loadedmodel.md#boundinginfo)
- [scaledToDimension](index.loadedmodel.md#scaledtodimension)

### Methods

- [dispose](index.loadedmodel.md#dispose)
- [scaleTo](index.loadedmodel.md#scaleto)

## Constructors

### constructor

\+ **new LoadedModel**(): [_LoadedModel_](loaders/loadedmodel.loadedmodel.md)

**Returns:** [_LoadedModel_](loaders/loadedmodel.loadedmodel.md)

## Properties

### \_scaledToDimension

• `Private` `Optional` **\_scaledToDimension**: _undefined_ \| _number_

Defined in: [loaders/loadedModel.ts:44](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L44)

---

### animationGroups

• `Optional` **animationGroups**: _undefined_ \| _AnimationGroup_[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[animationGroups](../interfaces/loaders/loadedmodel.iloadedmodel.md#animationgroups)

Defined in: [loaders/loadedModel.ts:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L43)

---

### errorMessage

• `Optional` **errorMessage**: _undefined_ \| _string_

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[errorMessage](../interfaces/loaders/loadedmodel.iloadedmodel.md#errormessage)

Defined in: [loaders/loadedModel.ts:38](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L38)

---

### loaderName

• `Optional` **loaderName**: _undefined_ \| _string_

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[loaderName](../interfaces/loaders/loadedmodel.iloadedmodel.md#loadername)

Defined in: [loaders/loadedModel.ts:39](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L39)

---

### meshes

• `Optional` **meshes**: _undefined_ \| _AbstractMesh_[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[meshes](../interfaces/loaders/loadedmodel.iloadedmodel.md#meshes)

Defined in: [loaders/loadedModel.ts:40](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L40)

---

### particleSystems

• `Optional` **particleSystems**: _undefined_ \| IParticleSystem[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[particleSystems](../interfaces/loaders/loadedmodel.iloadedmodel.md#particlesystems)

Defined in: [loaders/loadedModel.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L41)

---

### rootMesh

• `Optional` **rootMesh**: _undefined_ \| _AbstractMesh_

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[rootMesh](../interfaces/loaders/loadedmodel.iloadedmodel.md#rootmesh)

Defined in: [loaders/loadedModel.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L37)

---

### skeletons

• `Optional` **skeletons**: _undefined_ \| _Skeleton_[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[skeletons](../interfaces/loaders/loadedmodel.iloadedmodel.md#skeletons)

Defined in: [loaders/loadedModel.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L42)

---

### status

• **status**: [_LoaderStatus_](../enums/loaders/loadedmodel.loaderstatus.md)

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[status](../interfaces/loaders/loadedmodel.iloadedmodel.md#status)

Defined in: [loaders/loadedModel.ts:36](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L36)

## Accessors

### boundingInfo

• **boundingInfo**(): _Nullable_<_BoundingInfo_\>

**Returns:** _Nullable_<_BoundingInfo_\>

Defined in: [loaders/loadedModel.ts:50](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L50)

---

### scaledToDimension

• **scaledToDimension**(): _undefined_ \| _number_

**Returns:** _undefined_ \| _number_

Defined in: [loaders/loadedModel.ts:46](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L46)

## Methods

### dispose

▸ **dispose**(): _void_

Clean up all resources.

**Returns:** _void_

Defined in: [loaders/loadedModel.ts:99](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L99)

---

### scaleTo

▸ **scaleTo**(`maxDimension`: _number_): _void_

#### Parameters:

| Name           | Type     |
| -------------- | -------- |
| `maxDimension` | _number_ |

**Returns:** _void_

Defined in: [loaders/loadedModel.ts:81](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L81)
