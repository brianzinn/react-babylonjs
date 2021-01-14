[react-babylonjs](../../README.md) / [Exports](../../modules.md) / [loaders/loadedModel](../../modules/loaders_loadedmodel.md) / ILoadedModel

# Interface: ILoadedModel

[loaders/loadedModel](../../modules/loaders_loadedmodel.md).ILoadedModel

## Hierarchy

* **ILoadedModel**

## Implemented by

* [*LoadedModel*](../../classes/loaders/loadedmodel.loadedmodel.md)
* [*LoadedModel*](../../classes/index.loadedmodel.md)
* [*LoadedModel*](../../classes/loaders.loadedmodel.md)

## Table of contents

### Properties

- [animationGroups](loadedmodel.iloadedmodel.md#animationgroups)
- [boundingInfo](loadedmodel.iloadedmodel.md#boundinginfo)
- [errorMessage](loadedmodel.iloadedmodel.md#errormessage)
- [loaderName](loadedmodel.iloadedmodel.md#loadername)
- [meshes](loadedmodel.iloadedmodel.md#meshes)
- [particleSystems](loadedmodel.iloadedmodel.md#particlesystems)
- [rootMesh](loadedmodel.iloadedmodel.md#rootmesh)
- [skeletons](loadedmodel.iloadedmodel.md#skeletons)
- [status](loadedmodel.iloadedmodel.md#status)

## Properties

### animationGroups

• `Optional` **animationGroups**: *undefined* \| *AnimationGroup*[]

Defined in: [loaders/loadedModel.ts:30](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L30)

___

### boundingInfo

• `Readonly` **boundingInfo**: *Nullable*<*BoundingInfo*\>

Defined in: [loaders/loadedModel.ts:32](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L32)

___

### errorMessage

• `Optional` **errorMessage**: *undefined* \| *string*

Error message when loader fails.

Defined in: [loaders/loadedModel.ts:21](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L21)

___

### loaderName

• `Optional` **loaderName**: *undefined* \| *string*

Name of loader used - either as explicitly specified or inferred from extension

Defined in: [loaders/loadedModel.ts:25](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L25)

___

### meshes

• `Optional` **meshes**: *undefined* \| *AbstractMesh*[]

Defined in: [loaders/loadedModel.ts:27](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L27)

___

### particleSystems

• `Optional` **particleSystems**: *undefined* \| IParticleSystem[]

Defined in: [loaders/loadedModel.ts:28](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L28)

___

### rootMesh

• `Optional` **rootMesh**: *undefined* \| *AbstractMesh*

Mesh created when successfully loaded and all non-parented meshes are parented to this mesh

Defined in: [loaders/loadedModel.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L17)

___

### skeletons

• `Optional` **skeletons**: *undefined* \| *Skeleton*[]

Defined in: [loaders/loadedModel.ts:29](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L29)

___

### status

• **status**: [*LoaderStatus*](../../enums/loaders/loadedmodel.loaderstatus.md)

LoaderStatus reports if the load succeeded or not.

Defined in: [loaders/loadedModel.ts:13](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L13)
