[react-babylonjs](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Enumerations

- [LoaderStatus](../enums/index.loaderstatus.md)
- [TaskType](../enums/index.tasktype.md)

### Classes

- [LoadedModel](../classes/index.loadedmodel.md)

### Interfaces

- [ILoadedModel](../interfaces/index.iloadedmodel.md)

### Type aliases

- [AssetManagerContextProviderProps](index.md#assetmanagercontextproviderprops)
- [AssetManagerContextType](index.md#assetmanagercontexttype)
- [AssetManagerOptions](index.md#assetmanageroptions)
- [AssetManagerProgressType](index.md#assetmanagerprogresstype)
- [BinaryTask](index.md#binarytask)
- [EngineCanvasContextType](index.md#enginecanvascontexttype)
- [Gui2dEventType](index.md#gui2deventtype)
- [HoverType](index.md#hovertype)
- [MeshEventType](index.md#mesheventtype)
- [MeshTask](index.md#meshtask)
- [OnFrameRenderFn](index.md#onframerenderfn)
- [SceneContextType](index.md#scenecontexttype)
- [SceneLoaderContextProviderProps](index.md#sceneloadercontextproviderprops)
- [SceneLoaderContextType](index.md#sceneloadercontexttype)
- [SceneLoaderOptions](index.md#sceneloaderoptions)
- [Task](index.md#task)
- [TextureTask](index.md#texturetask)

### Variables

- [AssetManagerContext](index.md#assetmanagercontext)
- [AssetManagerContextProvider](index.md#assetmanagercontextprovider)
- [EngineCanvasContext](index.md#enginecanvascontext)
- [SceneContext](index.md#scenecontext)
- [SceneLoaderContext](index.md#sceneloadercontext)
- [SceneLoaderContextProvider](index.md#sceneloadercontextprovider)

### Functions

- [useAfterRender](index.md#useafterrender)
- [useAssetManager](index.md#useassetmanager)
- [useBeforeRender](index.md#usebeforerender)
- [useCamera](index.md#usecamera)
- [useCanvas](index.md#usecanvas)
- [useClick](index.md#useclick)
- [useCustomPropsHandler](index.md#usecustompropshandler)
- [useEngine](index.md#useengine)
- [useHover](index.md#usehover)
- [useScene](index.md#usescene)
- [useSceneLoader](index.md#usesceneloader)
- [withEngineCanvasContext](index.md#withenginecanvascontext)

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

### EngineCanvasContextType

Ƭ **EngineCanvasContextType**: { `canvas`: _Nullable_<HTMLCanvasElement \|
WebGLRenderingContext\> ; `engine`: _Nullable_<Engine\> }

#### Type declaration:

| Name     | Type                                                    |
| -------- | ------------------------------------------------------- |
| `canvas` | _Nullable_<HTMLCanvasElement \| WebGLRenderingContext\> |
| `engine` | _Nullable_<Engine\>                                     |

Defined in:
[engine.tsx:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L5)

---

### Gui2dEventType

Ƭ **Gui2dEventType**: (`eventData`: _Control_, `eventState`: _EventState_) =>
_void_

Defined in:
[utilityHooks.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L37)

---

### HoverType

Ƭ **HoverType**: [_MeshEventType_](utilityhooks.md#mesheventtype) \|
[_Gui2dEventType_](utilityhooks.md#gui2deventtype)

Defined in:
[utilityHooks.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L41)

---

### MeshEventType

Ƭ **MeshEventType**: (`ev`: _ActionEvent_) => _void_

Defined in:
[utilityHooks.ts:33](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L33)

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

### OnFrameRenderFn

Ƭ **OnFrameRenderFn**: (`eventData`: Scene, `eventState`: EventState) => _void_

Defined in:
[render.ts:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L5)

---

### SceneContextType

Ƭ **SceneContextType**: { `scene`: _Nullable_<Scene\> ; `sceneReady`: _boolean_
}

#### Type declaration:

| Name         | Type               |
| ------------ | ------------------ |
| `scene`      | _Nullable_<Scene\> |
| `sceneReady` | _boolean_          |

Defined in:
[scene.ts:4](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L4)

---

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

---

### EngineCanvasContext

• `Const` **EngineCanvasContext**:
_Context_<[_EngineCanvasContextType_](engine.md#enginecanvascontexttype)\>

Defined in:
[engine.tsx:10](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L10)

---

### SceneContext

• `Const` **SceneContext**:
_Context_<[_SceneContextType_](scene.md#scenecontexttype)\>

Defined in:
[scene.ts:9](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L9)

---

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

### useAfterRender

▸ `Const`**useAfterRender**(`callback`:
[_OnFrameRenderFn_](render.md#onframerenderfn), `mask?`: _number_,
`insertFirst?`: _boolean_, `callOnce?`: _boolean_): _void_

Register a callback for after the scene renders.

#### Parameters:

| Name           | Type                                           | Description                                                                           |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| `callback`     | [_OnFrameRenderFn_](render.md#onframerenderfn) | called using onBeforeRender functionality of scene                                    |
| `mask?`        | _number_                                       | the mask used to filter observers                                                     |
| `insertFirst?` | _boolean_                                      | if true will be inserted at first position, if false (default) will be last position. |
| `callOnce?`    | _boolean_                                      | only call the callback once                                                           |

**Returns:** _void_

Defined in:
[render.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L42)

---

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

---

### useBeforeRender

▸ `Const`**useBeforeRender**(`callback`:
[_OnFrameRenderFn_](render.md#onframerenderfn), `mask?`: _number_,
`insertFirst?`: _boolean_, `callOnce?`: _boolean_): _void_

Register a callback for before the scene renders.

#### Parameters:

| Name           | Type                                           | Description                                                                           |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| `callback`     | [_OnFrameRenderFn_](render.md#onframerenderfn) | called using onBeforeRender functionality of scene                                    |
| `mask?`        | _number_                                       | the mask used to filter observers                                                     |
| `insertFirst?` | _boolean_                                      | if true will be inserted at first position, if false (default) will be last position. |
| `callOnce?`    | _boolean_                                      | only call the callback once                                                           |

**Returns:** _void_

Defined in:
[render.ts:15](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L15)

---

### useCamera

▸ `Const`**useCamera**<T\>(`createCameraFn`: (`scene`: _Scene_) => T,
`autoAttach?`: _boolean_, `noPreventDefault?`: _boolean_): _Nullable_<T\>

Handles creating a camera and attaching/disposing. TODO: add new 4.2 parameters:
useCtrlForPanning & panningMouseButton

#### Type parameters:

| Name | Type         |
| ---- | ------------ |
| `T`  | _Camera_<T\> |

#### Parameters:

| Name               | Type                    | Default value | Description                                           |
| ------------------ | ----------------------- | ------------- | ----------------------------------------------------- |
| `createCameraFn`   | (`scene`: _Scene_) => T | -             | function that creates and returns a camera            |
| `autoAttach`       | _boolean_               | true          | Attach the input controls (default true)              |
| `noPreventDefault` | _boolean_               | true          | Events caught by controls should call prevent default |

**Returns:** _Nullable_<T\>

Defined in:
[camera.ts:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/camera.ts#L14)

---

### useCanvas

▸ `Const`**useCanvas**(): _Nullable_<HTMLCanvasElement \|
WebGLRenderingContext\>

Get the canvas DOM element from the context.

**Returns:** _Nullable_<HTMLCanvasElement \| WebGLRenderingContext\>

Defined in:
[engine.tsx:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L52)

---

### useClick

▸ **useClick**(`onClick`: [_MeshEventType_](utilityhooks.md#mesheventtype),
`ownRef?`: _MutableRefObject_<_Nullable_<Mesh\>\>):
[*MutableRefObject*<*Nullable*<Mesh\>\>]

useClick hook

#### Parameters:

| Name      | Type                                             | Description                                                                      |
| --------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| `onClick` | [_MeshEventType_](utilityhooks.md#mesheventtype) | What would be passed in the OnPickTrigger from ActionManager                     |
| `ownRef?` | _MutableRefObject_<_Nullable_<Mesh\>\>           | to re-use a Ref you already have, otherwise one is created for you and returned. |

**Returns:** [*MutableRefObject*<*Nullable*<Mesh\>\>]

Defined in:
[utilityHooks.ts:134](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L134)

---

### useCustomPropsHandler

▸ `Const`**useCustomPropsHandler**(`propsHandler`: _ICustomPropsHandler_<_any_,
_any_\>): _void_

#### Parameters:

| Name           | Type                                 |
| -------------- | ------------------------------------ |
| `propsHandler` | _ICustomPropsHandler_<_any_, _any_\> |

**Returns:** _void_

Defined in:
[utilityHooks.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L17)

---

### useEngine

▸ `Const`**useEngine**(): _Nullable_<_Engine_\>

Get the engine from the context.

**Returns:** _Nullable_<_Engine_\>

Defined in:
[engine.tsx:35](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L35)

---

### useHover

▸ `Const`**useHover**(`over?`: [_MeshEventType_](utilityhooks.md#mesheventtype)
\| [_Gui2dEventType_](utilityhooks.md#gui2deventtype), `out?`:
[_MeshEventType_](utilityhooks.md#mesheventtype) \|
[_Gui2dEventType_](utilityhooks.md#gui2deventtype), `ownRef?`:
_MutableRefObject_<_null_ \| _Mesh_ \| _Control_\>): [*MutableRefObject*<*null*
\| *Mesh* \| *Control*\>, *boolean*]

useHover hook

NOTE: Supports Mesh and 2D GUI controls only (not 3D GUI).

#### Parameters:

| Name      | Type                                                                                                   | Description                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `over?`   | [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype) | expression when hover over starts                                                |
| `out?`    | [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype) | expression when hover stops                                                      |
| `ownRef?` | _MutableRefObject_<_null_ \| _Mesh_ \| _Control_\>                                                     | to re-use a Ref you already have, otherwise one is created for you and returned. |

**Returns:** [*MutableRefObject*<*null* \| *Mesh* \| *Control*\>, *boolean*]

Defined in:
[utilityHooks.ts:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L52)

---

### useScene

▸ `Const`**useScene**(): _Nullable_<_Scene_\>

Get the scene from the context.

**Returns:** _Nullable_<_Scene_\>

Defined in:
[scene.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L17)

---

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

---

### withEngineCanvasContext

▸ **withEngineCanvasContext**<P, R\>(`Component`: _React.ComponentClass_<P\> \|
_React.FunctionComponent_<P\>): _React.FunctionComponent_<R\>

#### Type parameters:

| Name | Type                                                                                      | Default                                                  |
| ---- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `P`  | { `engineCanvasContext`: [_EngineCanvasContextType_](engine.md#enginecanvascontexttype) } | -                                                        |
| `R`  | -                                                                                         | _Pick_<P, _Exclude_<keyof P, _engineCanvasContext_\\>\\> |

#### Parameters:

| Name        | Type                                                        |
| ----------- | ----------------------------------------------------------- |
| `Component` | _React.ComponentClass_<P\> \| _React.FunctionComponent_<P\> |

**Returns:** _React.FunctionComponent_<R\>

Defined in:
[engine.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L17)
