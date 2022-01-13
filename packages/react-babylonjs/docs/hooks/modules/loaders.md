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

Ƭ **AssetManagerContextProviderProps**: { `children`: React.ReactNode ; `startProgress?`: [*AssetManagerProgressType*](loaders_useassetmanager.md#assetmanagerprogresstype)  }

#### Type declaration:

Name | Type |
------ | ------ |
`children` | React.ReactNode |
`startProgress?` | [*AssetManagerProgressType*](loaders_useassetmanager.md#assetmanagerprogresstype) |

Defined in: [loaders/useAssetManager.tsx:48](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L48)

___

### AssetManagerContextType

Ƭ **AssetManagerContextType**: { `lastProgress?`: [*AssetManagerProgressType*](loaders_useassetmanager.md#assetmanagerprogresstype) ; `updateProgress`: (`progress`: [*AssetManagerProgressType*](loaders_useassetmanager.md#assetmanagerprogresstype)) => *void*  } \| *undefined*

Defined in: [loaders/useAssetManager.tsx:36](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L36)

___

### AssetManagerOptions

Ƭ **AssetManagerOptions**: { `reportProgress?`: *boolean* ; `scene?`: Scene ; `useDefaultLoadingScreen?`: *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`reportProgress?` | *boolean* |
`scene?` | Scene |
`useDefaultLoadingScreen?` | *boolean* |

Defined in: [loaders/useAssetManager.tsx:61](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L61)

___

### AssetManagerProgressType

Ƭ **AssetManagerProgressType**: { `eventData`: IAssetsProgressEvent ; `eventState`: EventState  } \| *undefined*

Defined in: [loaders/useAssetManager.tsx:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L43)

___

### BinaryTask

Ƭ **BinaryTask**: { `name`: *string* ; `taskType`: [*Binary*](../enums/loaders/useassetmanager.tasktype.md#binary) ; `url`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`name` | *string* |
`taskType` | [*Binary*](../enums/loaders/useassetmanager.tasktype.md#binary) |
`url` | *string* |

Defined in: [loaders/useAssetManager.tsx:11](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L11)

___

### MeshTask

Ƭ **MeshTask**: { `meshesNames?`: *any* ; `name`: *string* ; `rootUrl`: *string* ; `sceneFilename`: *string* ; `taskType`: [*Mesh*](../enums/loaders/useassetmanager.tasktype.md#mesh)  }

#### Type declaration:

Name | Type |
------ | ------ |
`meshesNames?` | *any* |
`name` | *string* |
`rootUrl` | *string* |
`sceneFilename` | *string* |
`taskType` | [*Mesh*](../enums/loaders/useassetmanager.tasktype.md#mesh) |

Defined in: [loaders/useAssetManager.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L17)

___

### SceneLoaderContextProviderProps

Ƭ **SceneLoaderContextProviderProps**: { `children`: React.ReactNode ; `startProgress?`: ISceneLoaderProgressEvent  }

#### Type declaration:

Name | Type |
------ | ------ |
`children` | React.ReactNode |
`startProgress?` | ISceneLoaderProgressEvent |

Defined in: [loaders/useSceneLoader.tsx:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L14)

___

### SceneLoaderContextType

Ƭ **SceneLoaderContextType**: { `lastProgress?`: *Nullable*<ISceneLoaderProgressEvent\> ; `updateProgress`: (`progress`: ISceneLoaderProgressEvent) => *void*  } \| *undefined*

Defined in: [loaders/useSceneLoader.tsx:7](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L7)

___

### SceneLoaderOptions

Ƭ **SceneLoaderOptions**: { `alwaysSelectAsActiveMesh?`: *boolean* ; `onModelLoaded?`: (`loadedModel`: [*ILoadedModel*](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => *void* ; `receiveShadows?`: *boolean* ; `reportProgress?`: *boolean* ; `scaleToDimension?`: *number* ; `scene?`: Scene  }

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`alwaysSelectAsActiveMesh?` | *boolean* | Always select root mesh as active. Defaults to false.   |
`onModelLoaded?` | (`loadedModel`: [*ILoadedModel*](../interfaces/loaders/loadedmodel.iloadedmodel.md)) => *void* | Access to loaded model as soon as it is loaded, so it provides a way to hide or scale the meshes before the first render.   |
`receiveShadows?` | *boolean* | set that all meshes receive shadows. Defaults to false.   |
`reportProgress?` | *boolean* | SceneLoader progress events are set on context provider (when available). Defaults to false.   |
`scaleToDimension?` | *number* | Scale entire model within these square bounds Defaults to no scaling.   |
`scene?` | Scene | - |

Defined in: [loaders/useSceneLoader.tsx:27](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L27)

___

### Task

Ƭ **Task**: [*BinaryTask*](loaders_useassetmanager.md#binarytask) \| [*MeshTask*](loaders_useassetmanager.md#meshtask) \| [*TextureTask*](loaders_useassetmanager.md#texturetask)

Defined in: [loaders/useAssetManager.tsx:34](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L34)

___

### TextureTask

Ƭ **TextureTask**: { `invertY?`: *boolean* ; `name`: *string* ; `noMipmap?`: *boolean* ; `samplingMode?`: *number* ; `taskType`: [*Texture*](../enums/loaders/useassetmanager.tasktype.md#texture) ; `url`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`invertY?` | *boolean* |
`name` | *string* |
`noMipmap?` | *boolean* |
`samplingMode?` | *number* |
`taskType` | [*Texture*](../enums/loaders/useassetmanager.tasktype.md#texture) |
`url` | *string* |

Defined in: [loaders/useAssetManager.tsx:25](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L25)

## Variables

### AssetManagerContext

• `Const` **AssetManagerContext**: *Context*<[*AssetManagerContextType*](loaders_useassetmanager.md#assetmanagercontexttype)\>

Defined in: [loaders/useAssetManager.tsx:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L41)

___

### AssetManagerContextProvider

• `Const` **AssetManagerContextProvider**: *React.FC*<[*AssetManagerContextProviderProps*](loaders_useassetmanager.md#assetmanagercontextproviderprops)\>

Defined in: [loaders/useAssetManager.tsx:53](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L53)

___

### SceneLoaderContext

• `Const` **SceneLoaderContext**: *Context*<[*SceneLoaderContextType*](loaders_usesceneloader.md#sceneloadercontexttype)\>

Defined in: [loaders/useSceneLoader.tsx:12](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L12)

___

### SceneLoaderContextProvider

• `Const` **SceneLoaderContextProvider**: *React.FC*<[*SceneLoaderContextProviderProps*](loaders_usesceneloader.md#sceneloadercontextproviderprops)\>

Defined in: [loaders/useSceneLoader.tsx:19](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L19)

## Functions

### useAssetManager

▸ `Const`**useAssetManager**(`tasks`: [*Task*](loaders_useassetmanager.md#task)[], `options?`: [*AssetManagerOptions*](loaders_useassetmanager.md#assetmanageroptions)): AssetManagerResult

#### Parameters:

Name | Type |
------ | ------ |
`tasks` | [*Task*](loaders_useassetmanager.md#task)[] |
`options?` | [*AssetManagerOptions*](loaders_useassetmanager.md#assetmanageroptions) |

**Returns:** AssetManagerResult

Defined in: [loaders/useAssetManager.tsx:249](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L249)

___

### useSceneLoader

▸ `Const`**useSceneLoader**(`rootUrl`: *string*, `sceneFilename`: *string*, `pluginExtension?`: *string*, `options?`: [*SceneLoaderOptions*](loaders_usesceneloader.md#sceneloaderoptions)): [*LoadedModel*](../classes/loaders/loadedmodel.loadedmodel.md)

#### Parameters:

Name | Type |
------ | ------ |
`rootUrl` | *string* |
`sceneFilename` | *string* |
`pluginExtension?` | *string* |
`options?` | [*SceneLoaderOptions*](loaders_usesceneloader.md#sceneloaderoptions) |

**Returns:** [*LoadedModel*](../classes/loaders/loadedmodel.loadedmodel.md)

Defined in: [loaders/useSceneLoader.tsx:202](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L202)
