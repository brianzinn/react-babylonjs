[react-babylonjs](../README.md) / [Exports](../modules.md) / loaders/useSceneLoader

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

## Variables

### SceneLoaderContext

• `Const` **SceneLoaderContext**: *Context*<[*SceneLoaderContextType*](loaders_usesceneloader.md#sceneloadercontexttype)\>

Defined in: [loaders/useSceneLoader.tsx:12](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L12)

___

### SceneLoaderContextProvider

• `Const` **SceneLoaderContextProvider**: *React.FC*<[*SceneLoaderContextProviderProps*](loaders_usesceneloader.md#sceneloadercontextproviderprops)\>

Defined in: [loaders/useSceneLoader.tsx:19](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L19)

## Functions

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
