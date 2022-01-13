[react-babylonjs](../README.md) / [Exports](../modules.md) / loaders

# Module: loaders

## Table of contents

### Enumerations

- [LoaderStatus](../enums/loaders.loaderstatus.md)
- [TaskType](../enums/loaders.tasktype.md)

### Classes

- [LoadedModel](../classes/loaders.loadedmodel.md)

### Interfaces

- [ILoadedModel](../interfaces/loaders.iloadedmodel.md)

### Type aliases

- [AssetManagerContextProviderProps](loaders.md#assetmanagercontextproviderprops)
- [AssetManagerContextType](loaders.md#assetmanagercontexttype)
- [AssetManagerOptions](loaders.md#assetmanageroptions)
- [AssetManagerProgressType](loaders.md#assetmanagerprogresstype)
- [BinaryTask](loaders.md#binarytask)
- [MeshTask](loaders.md#meshtask)
- [SceneLoaderContextProviderProps](loaders.md#sceneloadercontextproviderprops)
- [SceneLoaderContextType](loaders.md#sceneloadercontexttype)
- [SceneLoaderOptions](loaders.md#sceneloaderoptions)
- [Task](loaders.md#task)
- [TextureTask](loaders.md#texturetask)

### Variables

- [AssetManagerContext](loaders.md#assetmanagercontext)
- [AssetManagerContextProvider](loaders.md#assetmanagercontextprovider)
- [SceneLoaderContext](loaders.md#sceneloadercontext)
- [SceneLoaderContextProvider](loaders.md#sceneloadercontextprovider)

### Functions

- [useAssetManager](loaders.md#useassetmanager)
- [useSceneLoader](loaders.md#usesceneloader)

## Type aliases

### AssetManagerContextProviderProps

Ƭ **AssetManagerContextProviderProps**: { `children`: React.ReactNode ; `startProgress?`: [_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype) }

#### Type declaration:

| Name             | Type                                                                              |
| ---------------- | --------------------------------------------------------------------------------- |
| `children`       | React.ReactNode                                                                   |
| `startProgress?` | [_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype) |

Defined in: [loaders/useAssetManager.tsx:48](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L48)

---

### AssetManagerContextType

Ƭ **AssetManagerContextType**: { `lastProgress?`: [_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype) ; `updateProgress`: (`progress`: [_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype)) => _void_ } \| _undefined_

Defined in: [loaders/useAssetManager.tsx:36](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L36)

---

### AssetManagerOptions

Ƭ **AssetManagerOptions**: { `reportProgress?`: _boolean_ ; `scene?`: Scene ; `useDefaultLoadingScreen?`: _boolean_ }

#### Type declaration:

| Name                       | Type      |
| -------------------------- | --------- |
| `reportProgress?`          | _boolean_ |
| `scene?`                   | Scene     |
| `useDefaultLoadingScreen?` | _boolean_ |

Defined in: [loaders/useAssetManager.tsx:61](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L61)

---

### AssetManagerProgressType

Ƭ **AssetManagerProgressType**: { `eventData`: IAssetsProgressEvent ; `eventState`: EventState } \| _undefined_

Defined in: [loaders/useAssetManager.tsx:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L43)

---

### BinaryTask

Ƭ **BinaryTask**: { `name`: _string_ ; `taskType`: [_Binary_](../enums/loaders/useassetmanager.tasktype.md#binary) ; `url`: _string_ }

#### Type declaration:

| Name       | Type                                                            |
| ---------- | --------------------------------------------------------------- |
| `name`     | _string_                                                        |
| `taskType` | [_Binary_](../enums/loaders/useassetmanager.tasktype.md#binary) |
| `url`      | _string_                                                        |

Defined in: [loaders/useAssetManager.tsx:11](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L11)

---

### MeshTask

Ƭ **MeshTask**: { `meshesNames?`: _any_ ; `name`: _string_ ; `rootUrl`: _string_ ; `sceneFilename`: _string_ ; `taskType`: [_Mesh_](../enums/loaders/useassetmanager.tasktype.md#mesh) }

#### Type declaration:

| Name            | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| `meshesNames?`  | _any_                                                       |
| `name`          | _string_                                                    |
| `rootUrl`       | _string_                                                    |
| `sceneFilename` | _string_                                                    |
| `taskType`      | [_Mesh_](../enums/loaders/useassetmanager.tasktype.md#mesh) |

Defined in: [loaders/useAssetManager.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L17)

---

### SceneLoaderContextProviderProps

Ƭ **SceneLoaderContextProviderProps**: { `children`: React.ReactNode ; `startProgress?`: ISceneLoaderProgressEvent }

#### Type declaration:

| Name             | Type                      |
| ---------------- | ------------------------- |
| `children`       | React.ReactNode           |
| `startProgress?` | ISceneLoaderProgressEvent |

Defined in: [loaders/useSceneLoader.tsx:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L14)

---

### SceneLoaderContextType

Ƭ **SceneLoaderContextType**: { `lastProgress?`: _Nullable_<ISceneLoaderProgressEvent\> ; `updateProgress`: (`progress`: ISceneLoaderProgressEvent) => _void_ } \| _undefined_

Defined in: [loaders/useSceneLoader.tsx:7](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L7)

---

### SceneLoaderOptions

Ƭ **SceneLoaderOptions**: { `alwaysSelectAsActiveMesh?`: _boolean_ ; `onModelLoaded?`: (`loadedModel`: [_ILoadedModel_](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => _void_ ; `receiveShadows?`: _boolean_ ; `reportProgress?`: _boolean_ ; `scaleToDimension?`: _number_ ; `scene?`: Scene }

#### Type declaration:

| Name                        | Type                                                                                           | Description                                                                                                               |
| --------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `alwaysSelectAsActiveMesh?` | _boolean_                                                                                      | Always select root mesh as active. Defaults to false.                                                                     |
| `onModelLoaded?`            | (`loadedModel`: [_ILoadedModel_](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => _void_ | Access to loaded model as soon as it is loaded, so it provides a way to hide or scale the meshes before the first render. |
| `receiveShadows?`           | _boolean_                                                                                      | set that all meshes receive shadows. Defaults to false.                                                                   |
| `reportProgress?`           | _boolean_                                                                                      | SceneLoader progress events are set on context provider (when available). Defaults to false.                              |
| `scaleToDimension?`         | _number_                                                                                       | Scale entire model within these square bounds Defaults to no scaling.                                                     |
| `scene?`                    | Scene                                                                                          | -                                                                                                                         |

Defined in: [loaders/useSceneLoader.tsx:27](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L27)

---

### Task

Ƭ **Task**: [_BinaryTask_](loaders_useassetmanager.md#binarytask) \| [_MeshTask_](loaders_useassetmanager.md#meshtask) \| [_TextureTask_](loaders_useassetmanager.md#texturetask)

Defined in: [loaders/useAssetManager.tsx:34](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L34)

---

### TextureTask

Ƭ **TextureTask**: { `invertY?`: _boolean_ ; `name`: _string_ ; `noMipmap?`: _boolean_ ; `samplingMode?`: _number_ ; `taskType`: [_Texture_](../enums/loaders/useassetmanager.tasktype.md#texture) ; `url`: _string_ }

#### Type declaration:

| Name            | Type                                                              |
| --------------- | ----------------------------------------------------------------- |
| `invertY?`      | _boolean_                                                         |
| `name`          | _string_                                                          |
| `noMipmap?`     | _boolean_                                                         |
| `samplingMode?` | _number_                                                          |
| `taskType`      | [_Texture_](../enums/loaders/useassetmanager.tasktype.md#texture) |
| `url`           | _string_                                                          |

Defined in: [loaders/useAssetManager.tsx:25](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L25)

## Variables

### AssetManagerContext

• `Const` **AssetManagerContext**: _Context_<[_AssetManagerContextType_](loaders_useassetmanager.md#assetmanagercontexttype)\>

Defined in: [loaders/useAssetManager.tsx:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L41)

---

### AssetManagerContextProvider

• `Const` **AssetManagerContextProvider**: _React.FC_<[_AssetManagerContextProviderProps_](loaders_useassetmanager.md#assetmanagercontextproviderprops)\>

Defined in: [loaders/useAssetManager.tsx:53](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L53)

---

### SceneLoaderContext

• `Const` **SceneLoaderContext**: _Context_<[_SceneLoaderContextType_](loaders_usesceneloader.md#sceneloadercontexttype)\>

Defined in: [loaders/useSceneLoader.tsx:12](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L12)

---

### SceneLoaderContextProvider

• `Const` **SceneLoaderContextProvider**: _React.FC_<[_SceneLoaderContextProviderProps_](loaders_usesceneloader.md#sceneloadercontextproviderprops)\>

Defined in: [loaders/useSceneLoader.tsx:19](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L19)

## Functions

### useAssetManager

▸ `Const`**useAssetManager**(`tasks`: [_Task_](loaders_useassetmanager.md#task)[], `options?`: [_AssetManagerOptions_](loaders_useassetmanager.md#assetmanageroptions)): AssetManagerResult

#### Parameters:

| Name       | Type                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| `tasks`    | [_Task_](loaders_useassetmanager.md#task)[]                             |
| `options?` | [_AssetManagerOptions_](loaders_useassetmanager.md#assetmanageroptions) |

**Returns:** AssetManagerResult

Defined in: [loaders/useAssetManager.tsx:249](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L249)

---

### useSceneLoader

▸ `Const`**useSceneLoader**(`rootUrl`: _string_, `sceneFilename`: _string_, `pluginExtension?`: _string_, `options?`: [_SceneLoaderOptions_](loaders_usesceneloader.md#sceneloaderoptions)): [_LoadedModel_](../classes/loaders/loadedmodel.loadedmodel.md)

#### Parameters:

| Name               | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `rootUrl`          | _string_                                                             |
| `sceneFilename`    | _string_                                                             |
| `pluginExtension?` | _string_                                                             |
| `options?`         | [_SceneLoaderOptions_](loaders_usesceneloader.md#sceneloaderoptions) |

**Returns:** [_LoadedModel_](../classes/loaders/loadedmodel.loadedmodel.md)

Defined in: [loaders/useSceneLoader.tsx:202](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L202)
