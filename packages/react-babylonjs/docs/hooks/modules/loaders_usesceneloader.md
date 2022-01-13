[react-babylonjs](../README.md) / [Exports](../modules.md) /
loaders/useSceneLoader

# Module: loaders/useSceneLoader

## Table of contents

### Type aliases

- [SceneLoaderContextProviderProps](loaders_usesceneloader.md#sceneloadercontextproviderprops)
- [SceneLoaderContextType](loaders_usesceneloader.md#sceneloadercontexttype)
- [SceneLoaderOptions](loaders_usesceneloader.md#sceneloaderoptions)

### Variables

- [SceneLoaderContext](loaders_usesceneloader.md#sceneloadercontext)
- [SceneLoaderContextProvider](loaders_usesceneloader.md#sceneloadercontextprovider)

### Functions

- [useSceneLoader](loaders_usesceneloader.md#usesceneloader)

## Type aliases

### SceneLoaderContextProviderProps

Ƭ **SceneLoaderContextProviderProps**: { `children`: React.ReactNode ;
`startProgress?`: ISceneLoaderProgressEvent }

#### Type declaration:

| Name             | Type                      |
| ---------------- | ------------------------- |
| `children`       | React.ReactNode           |
| `startProgress?` | ISceneLoaderProgressEvent |

Defined in:
[loaders/useSceneLoader.tsx:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L14)

---

### SceneLoaderContextType

Ƭ **SceneLoaderContextType**: { `lastProgress?`:
_Nullable_<ISceneLoaderProgressEvent\> ; `updateProgress`: (`progress`:
ISceneLoaderProgressEvent) => _void_ } \| _undefined_

Defined in:
[loaders/useSceneLoader.tsx:7](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L7)

---

### SceneLoaderOptions

Ƭ **SceneLoaderOptions**: { `alwaysSelectAsActiveMesh?`: _boolean_ ;
`onModelLoaded?`: (`loadedModel`:
[_ILoadedModel_](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => _void_ ;
`receiveShadows?`: _boolean_ ; `reportProgress?`: _boolean_ ;
`scaleToDimension?`: _number_ ; `scene?`: Scene }

#### Type declaration:

| Name                        | Type                                                                                           | Description                                                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `alwaysSelectAsActiveMesh?` | _boolean_                                                                                      | Always select root mesh as active. Defaults to false.                                                                     |
| `onModelLoaded?`            | (`loadedModel`: [_ILoadedModel_](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => _void_ | Access to loaded model as soon as it is loaded, so it provides a way to hide or scale the meshes before the first render. |
| `receiveShadows?`           | _boolean_                                                                                      | set that all meshes receive shadows. Defaults to false.                                                                   |
| `reportProgress?`           | _boolean_                                                                                      | SceneLoader progress events are set on context provider (when available). Defaults to false.                              |
| `scaleToDimension?`         | _number_                                                                                       | Scale entire model within these square bounds Defaults to no scaling.                                                     |
| `scene?`                    | Scene                                                                                          | -                                                                                                                         |

Defined in:
[loaders/useSceneLoader.tsx:27](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L27)

## Variables

### SceneLoaderContext

• `Const` **SceneLoaderContext**:
_Context_<[_SceneLoaderContextType_](loaders_usesceneloader.md#sceneloadercontexttype)\>

Defined in:
[loaders/useSceneLoader.tsx:12](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L12)

---

### SceneLoaderContextProvider

• `Const` **SceneLoaderContextProvider**:
_React.FC_<[_SceneLoaderContextProviderProps_](loaders_usesceneloader.md#sceneloadercontextproviderprops)\>

Defined in:
[loaders/useSceneLoader.tsx:19](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L19)

## Functions

### useSceneLoader

▸ `Const`**useSceneLoader**(`rootUrl`: _string_, `sceneFilename`: _string_,
`pluginExtension?`: _string_, `options?`:
[_SceneLoaderOptions_](loaders_usesceneloader.md#sceneloaderoptions)):
[_LoadedModel_](../classes/loaders/loadedmodel.loadedmodel.md)

#### Parameters:

| Name               | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `rootUrl`          | _string_                                                             |
| `sceneFilename`    | _string_                                                             |
| `pluginExtension?` | _string_                                                             |
| `options?`         | [_SceneLoaderOptions_](loaders_usesceneloader.md#sceneloaderoptions) |

**Returns:** [_LoadedModel_](../classes/loaders/loadedmodel.loadedmodel.md)

Defined in:
[loaders/useSceneLoader.tsx:202](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L202)
