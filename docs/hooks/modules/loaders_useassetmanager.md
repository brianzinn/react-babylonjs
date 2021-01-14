[react-babylonjs](../README.md) / [Exports](../modules.md) / loaders/useAssetManager

# Module: loaders/useAssetManager

## Table of contents

### Enumerations

- [TaskType](../enums/loaders/useassetmanager.tasktype.md)

### Type aliases

- [AssetManagerContextProviderProps](loaders_useassetmanager.md#assetmanagercontextproviderprops)
- [AssetManagerContextType](loaders_useassetmanager.md#assetmanagercontexttype)
- [AssetManagerOptions](loaders_useassetmanager.md#assetmanageroptions)
- [AssetManagerProgressType](loaders_useassetmanager.md#assetmanagerprogresstype)
- [BinaryTask](loaders_useassetmanager.md#binarytask)
- [MeshTask](loaders_useassetmanager.md#meshtask)
- [Task](loaders_useassetmanager.md#task)
- [TextureTask](loaders_useassetmanager.md#texturetask)

### Variables

- [AssetManagerContext](loaders_useassetmanager.md#assetmanagercontext)
- [AssetManagerContextProvider](loaders_useassetmanager.md#assetmanagercontextprovider)

### Functions

- [useAssetManager](loaders_useassetmanager.md#useassetmanager)

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
