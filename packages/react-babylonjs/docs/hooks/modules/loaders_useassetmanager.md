[react-babylonjs](../README.md) / [Exports](../modules.md) /
loaders/useAssetManager

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

Ƭ **AssetManagerContextProviderProps**: { `children`: React.ReactNode ;
`startProgress?`:
[_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype)
}

#### Type declaration:

| Name             | Type                                                                              |
| ---------------- | --------------------------------------------------------------------------------- |
| `children`       | React.ReactNode                                                                   |
| `startProgress?` | [_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype) |

Defined in:
[loaders/useAssetManager.tsx:48](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L48)

---

### AssetManagerContextType

Ƭ **AssetManagerContextType**: { `lastProgress?`:
[_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype)
; `updateProgress`: (`progress`:
[_AssetManagerProgressType_](loaders_useassetmanager.md#assetmanagerprogresstype))
=> _void_ } \| _undefined_

Defined in:
[loaders/useAssetManager.tsx:36](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L36)

---

### AssetManagerOptions

Ƭ **AssetManagerOptions**: { `reportProgress?`: _boolean_ ; `scene?`: Scene ;
`useDefaultLoadingScreen?`: _boolean_ }

#### Type declaration:

| Name                       | Type      |
| -------------------------- | --------- |
| `reportProgress?`          | _boolean_ |
| `scene?`                   | Scene     |
| `useDefaultLoadingScreen?` | _boolean_ |

Defined in:
[loaders/useAssetManager.tsx:61](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L61)

---

### AssetManagerProgressType

Ƭ **AssetManagerProgressType**: { `eventData`: IAssetsProgressEvent ;
`eventState`: EventState } \| _undefined_

Defined in:
[loaders/useAssetManager.tsx:43](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L43)

---

### BinaryTask

Ƭ **BinaryTask**: { `name`: _string_ ; `taskType`:
[_Binary_](../enums/loaders/useassetmanager.tasktype.md#binary) ; `url`:
_string_ }

#### Type declaration:

| Name       | Type                                                            |
| ---------- | --------------------------------------------------------------- |
| `name`     | _string_                                                        |
| `taskType` | [_Binary_](../enums/loaders/useassetmanager.tasktype.md#binary) |
| `url`      | _string_                                                        |

Defined in:
[loaders/useAssetManager.tsx:11](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L11)

---

### MeshTask

Ƭ **MeshTask**: { `meshesNames?`: _any_ ; `name`: _string_ ; `rootUrl`: _string_
; `sceneFilename`: _string_ ; `taskType`:
[_Mesh_](../enums/loaders/useassetmanager.tasktype.md#mesh) }

#### Type declaration:

| Name            | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| `meshesNames?`  | _any_                                                       |
| `name`          | _string_                                                    |
| `rootUrl`       | _string_                                                    |
| `sceneFilename` | _string_                                                    |
| `taskType`      | [_Mesh_](../enums/loaders/useassetmanager.tasktype.md#mesh) |

Defined in:
[loaders/useAssetManager.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L17)

---

### Task

Ƭ **Task**: [_BinaryTask_](loaders_useassetmanager.md#binarytask) \|
[_MeshTask_](loaders_useassetmanager.md#meshtask) \|
[_TextureTask_](loaders_useassetmanager.md#texturetask)

Defined in:
[loaders/useAssetManager.tsx:34](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L34)

---

### TextureTask

Ƭ **TextureTask**: { `invertY?`: _boolean_ ; `name`: _string_ ; `noMipmap?`:
_boolean_ ; `samplingMode?`: _number_ ; `taskType`:
[_Texture_](../enums/loaders/useassetmanager.tasktype.md#texture) ; `url`:
_string_ }

#### Type declaration:

| Name            | Type                                                              |
| --------------- | ----------------------------------------------------------------- |
| `invertY?`      | _boolean_                                                         |
| `name`          | _string_                                                          |
| `noMipmap?`     | _boolean_                                                         |
| `samplingMode?` | _number_                                                          |
| `taskType`      | [_Texture_](../enums/loaders/useassetmanager.tasktype.md#texture) |
| `url`           | _string_                                                          |

Defined in:
[loaders/useAssetManager.tsx:25](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L25)

## Variables

### AssetManagerContext

• `Const` **AssetManagerContext**:
_Context_<[_AssetManagerContextType_](loaders_useassetmanager.md#assetmanagercontexttype)\>

Defined in:
[loaders/useAssetManager.tsx:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L41)

---

### AssetManagerContextProvider

• `Const` **AssetManagerContextProvider**:
_React.FC_<[_AssetManagerContextProviderProps_](loaders_useassetmanager.md#assetmanagercontextproviderprops)\>

Defined in:
[loaders/useAssetManager.tsx:53](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L53)

## Functions

### useAssetManager

▸ `Const`**useAssetManager**(`tasks`:
[_Task_](loaders_useassetmanager.md#task)[], `options?`:
[_AssetManagerOptions_](loaders_useassetmanager.md#assetmanageroptions)):
AssetManagerResult

#### Parameters:

| Name       | Type                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| `tasks`    | [_Task_](loaders_useassetmanager.md#task)[]                             |
| `options?` | [_AssetManagerOptions_](loaders_useassetmanager.md#assetmanageroptions) |

**Returns:** AssetManagerResult

Defined in:
[loaders/useAssetManager.tsx:249](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useAssetManager.tsx#L249)
