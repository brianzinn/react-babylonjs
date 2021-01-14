[react-babylonjs](../README.md) / [Exports](../modules.md) / [loaders](../modules/loaders.md) / LoadedModel

# Class: LoadedModel

[loaders](../modules/loaders.md).LoadedModel

## Hierarchy

* **LoadedModel**

## Implements

* [*ILoadedModel*](../interfaces/loaders/loadedmodel.iloadedmodel.md)

## Table of contents

### Constructors

- [constructor](loaders.loadedmodel.md#constructor)

### Properties

- [\_scaledToDimension](loaders.loadedmodel.md#_scaledtodimension)
- [animationGroups](loaders.loadedmodel.md#animationgroups)
- [errorMessage](loaders.loadedmodel.md#errormessage)
- [loaderName](loaders.loadedmodel.md#loadername)
- [meshes](loaders.loadedmodel.md#meshes)
- [particleSystems](loaders.loadedmodel.md#particlesystems)
- [rootMesh](loaders.loadedmodel.md#rootmesh)
- [skeletons](loaders.loadedmodel.md#skeletons)
- [status](loaders.loadedmodel.md#status)

### Accessors

- [boundingInfo](loaders.loadedmodel.md#boundinginfo)
- [scaledToDimension](loaders.loadedmodel.md#scaledtodimension)

### Methods

- [dispose](loaders.loadedmodel.md#dispose)
- [scaleTo](loaders.loadedmodel.md#scaleto)

## Constructors

### constructor

\+ **new LoadedModel**(): [*LoadedModel*](loaders/loadedmodel.loadedmodel.md)

**Returns:** [*LoadedModel*](loaders/loadedmodel.loadedmodel.md)

## Properties

### \_scaledToDimension

• `Private` `Optional` **\_scaledToDimension**: *undefined* \| *number*

Defined in: [loaders/loadedModel.ts:44](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L44)

___

### animationGroups

• `Optional` **animationGroups**: *undefined* \| *AnimationGroup*[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[animationGroups](../interfaces/loaders/loadedmodel.iloadedmodel.md#animationgroups)

Defined in: [loaders/loadedModel.ts:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L43)

___

### errorMessage

• `Optional` **errorMessage**: *undefined* \| *string*

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[errorMessage](../interfaces/loaders/loadedmodel.iloadedmodel.md#errormessage)

Defined in: [loaders/loadedModel.ts:38](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L38)

___

### loaderName

• `Optional` **loaderName**: *undefined* \| *string*

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[loaderName](../interfaces/loaders/loadedmodel.iloadedmodel.md#loadername)

Defined in: [loaders/loadedModel.ts:39](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L39)

___

### meshes

• `Optional` **meshes**: *undefined* \| *AbstractMesh*[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[meshes](../interfaces/loaders/loadedmodel.iloadedmodel.md#meshes)

Defined in: [loaders/loadedModel.ts:40](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L40)

___

### particleSystems

• `Optional` **particleSystems**: *undefined* \| IParticleSystem[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[particleSystems](../interfaces/loaders/loadedmodel.iloadedmodel.md#particlesystems)

Defined in: [loaders/loadedModel.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L41)

___

### rootMesh

• `Optional` **rootMesh**: *undefined* \| *AbstractMesh*

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[rootMesh](../interfaces/loaders/loadedmodel.iloadedmodel.md#rootmesh)

Defined in: [loaders/loadedModel.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L37)

___

### skeletons

• `Optional` **skeletons**: *undefined* \| *Skeleton*[]

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[skeletons](../interfaces/loaders/loadedmodel.iloadedmodel.md#skeletons)

Defined in: [loaders/loadedModel.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L42)

___

### status

• **status**: [*LoaderStatus*](../enums/loaders/loadedmodel.loaderstatus.md)

Implementation of: [ILoadedModel](../interfaces/loaders/loadedmodel.iloadedmodel.md).[status](../interfaces/loaders/loadedmodel.iloadedmodel.md#status)

Defined in: [loaders/loadedModel.ts:36](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L36)

## Accessors

### boundingInfo

• **boundingInfo**(): *Nullable*<*BoundingInfo*\>

**Returns:** *Nullable*<*BoundingInfo*\>

Defined in: [loaders/loadedModel.ts:50](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L50)

___

### scaledToDimension

• **scaledToDimension**(): *undefined* \| *number*

**Returns:** *undefined* \| *number*

Defined in: [loaders/loadedModel.ts:46](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L46)

## Methods

### dispose

▸ **dispose**(): *void*

Clean up all resources.

**Returns:** *void*

Defined in: [loaders/loadedModel.ts:99](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L99)

___

### scaleTo

▸ **scaleTo**(`maxDimension`: *number*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`maxDimension` | *number* |

**Returns:** *void*

Defined in: [loaders/loadedModel.ts:81](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L81)
