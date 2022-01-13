[react-babylonjs](../../README.md) / [Exports](../../modules.md) / [loaders/loadedModel](../../modules/loaders_loadedmodel.md) / LoadedModel

# Class: LoadedModel

[loaders/loadedModel](../../modules/loaders_loadedmodel.md).LoadedModel

## Hierarchy

* **LoadedModel**

## Implements

* [*ILoadedModel*](../../interfaces/loaders/loadedmodel.iloadedmodel.md)

## Table of contents

### Constructors

- [constructor](loadedmodel.loadedmodel.md#constructor)

### Properties

- [\_scaledToDimension](loadedmodel.loadedmodel.md#_scaledtodimension)
- [animationGroups](loadedmodel.loadedmodel.md#animationgroups)
- [errorMessage](loadedmodel.loadedmodel.md#errormessage)
- [loaderName](loadedmodel.loadedmodel.md#loadername)
- [meshes](loadedmodel.loadedmodel.md#meshes)
- [particleSystems](loadedmodel.loadedmodel.md#particlesystems)
- [rootMesh](loadedmodel.loadedmodel.md#rootmesh)
- [skeletons](loadedmodel.loadedmodel.md#skeletons)
- [status](loadedmodel.loadedmodel.md#status)

### Accessors

- [boundingInfo](loadedmodel.loadedmodel.md#boundinginfo)
- [scaledToDimension](loadedmodel.loadedmodel.md#scaledtodimension)

### Methods

- [dispose](loadedmodel.loadedmodel.md#dispose)
- [scaleTo](loadedmodel.loadedmodel.md#scaleto)

## Constructors

### constructor

\+ **new LoadedModel**(): [*LoadedModel*](loadedmodel.loadedmodel.md)

**Returns:** [*LoadedModel*](loadedmodel.loadedmodel.md)

## Properties

### \_scaledToDimension

• `Private` `Optional` **\_scaledToDimension**: *undefined* \| *number*

Defined in: [loaders/loadedModel.ts:44](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L44)

___

### animationGroups

• `Optional` **animationGroups**: *undefined* \| *AnimationGroup*[]

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[animationGroups](../../interfaces/loaders/loadedmodel.iloadedmodel.md#animationgroups)

Defined in: [loaders/loadedModel.ts:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L43)

___

### errorMessage

• `Optional` **errorMessage**: *undefined* \| *string*

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[errorMessage](../../interfaces/loaders/loadedmodel.iloadedmodel.md#errormessage)

Defined in: [loaders/loadedModel.ts:38](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L38)

___

### loaderName

• `Optional` **loaderName**: *undefined* \| *string*

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[loaderName](../../interfaces/loaders/loadedmodel.iloadedmodel.md#loadername)

Defined in: [loaders/loadedModel.ts:39](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L39)

___

### meshes

• `Optional` **meshes**: *undefined* \| *AbstractMesh*[]

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[meshes](../../interfaces/loaders/loadedmodel.iloadedmodel.md#meshes)

Defined in: [loaders/loadedModel.ts:40](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L40)

___

### particleSystems

• `Optional` **particleSystems**: *undefined* \| IParticleSystem[]

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[particleSystems](../../interfaces/loaders/loadedmodel.iloadedmodel.md#particlesystems)

Defined in: [loaders/loadedModel.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L41)

___

### rootMesh

• `Optional` **rootMesh**: *undefined* \| *AbstractMesh*

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[rootMesh](../../interfaces/loaders/loadedmodel.iloadedmodel.md#rootmesh)

Defined in: [loaders/loadedModel.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L37)

___

### skeletons

• `Optional` **skeletons**: *undefined* \| *Skeleton*[]

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[skeletons](../../interfaces/loaders/loadedmodel.iloadedmodel.md#skeletons)

Defined in: [loaders/loadedModel.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L42)

___

### status

• **status**: [*LoaderStatus*](../../enums/loaders/loadedmodel.loaderstatus.md)

Implementation of: [ILoadedModel](../../interfaces/loaders/loadedmodel.iloadedmodel.md).[status](../../interfaces/loaders/loadedmodel.iloadedmodel.md#status)

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
