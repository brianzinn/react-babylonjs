[react-babylonjs](../README.md) / [Exports](../modules.md) /
[index](../modules/index.md) / ILoadedModel

# Interface: ILoadedModel

[index](../modules/index.md).ILoadedModel

## Hierarchy

- **ILoadedModel**

## Table of contents

### Properties

- [animationGroups](index.iloadedmodel.md#animationgroups)
- [boundingInfo](index.iloadedmodel.md#boundinginfo)
- [errorMessage](index.iloadedmodel.md#errormessage)
- [loaderName](index.iloadedmodel.md#loadername)
- [meshes](index.iloadedmodel.md#meshes)
- [particleSystems](index.iloadedmodel.md#particlesystems)
- [rootMesh](index.iloadedmodel.md#rootmesh)
- [skeletons](index.iloadedmodel.md#skeletons)
- [status](index.iloadedmodel.md#status)

## Properties

### animationGroups

• `Optional` **animationGroups**: _undefined_ \| _AnimationGroup_[]

Defined in:
[loaders/loadedModel.ts:30](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L30)

---

### boundingInfo

• `Readonly` **boundingInfo**: _Nullable_<_BoundingInfo_\>

Defined in:
[loaders/loadedModel.ts:32](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L32)

---

### errorMessage

• `Optional` **errorMessage**: _undefined_ \| _string_

Error message when loader fails.

Defined in:
[loaders/loadedModel.ts:21](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L21)

---

### loaderName

• `Optional` **loaderName**: _undefined_ \| _string_

Name of loader used - either as explicitly specified or inferred from extension

Defined in:
[loaders/loadedModel.ts:25](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L25)

---

### meshes

• `Optional` **meshes**: _undefined_ \| _AbstractMesh_[]

Defined in:
[loaders/loadedModel.ts:27](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L27)

---

### particleSystems

• `Optional` **particleSystems**: _undefined_ \| IParticleSystem[]

Defined in:
[loaders/loadedModel.ts:28](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L28)

---

### rootMesh

• `Optional` **rootMesh**: _undefined_ \| _AbstractMesh_

Mesh created when successfully loaded and all non-parented meshes are parented
to this mesh

Defined in:
[loaders/loadedModel.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L17)

---

### skeletons

• `Optional` **skeletons**: _undefined_ \| _Skeleton_[]

Defined in:
[loaders/loadedModel.ts:29](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L29)

---

### status

• **status**: [_LoaderStatus_](../enums/loaders/loadedmodel.loaderstatus.md)

LoaderStatus reports if the load succeeded or not.

Defined in:
[loaders/loadedModel.ts:13](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/loadedModel.ts#L13)
