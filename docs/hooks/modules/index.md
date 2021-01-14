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

### EngineCanvasContextType

Ƭ **EngineCanvasContextType**: { `canvas`: *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\> ; `engine`: *Nullable*<Engine\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`canvas` | *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\> |
`engine` | *Nullable*<Engine\> |

Defined in: [engine.tsx:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L5)

___

### Gui2dEventType

Ƭ **Gui2dEventType**: (`eventData`: *Control*, `eventState`: *EventState*) => *void*

Defined in: [utilityHooks.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L37)

___

### HoverType

Ƭ **HoverType**: [*MeshEventType*](utilityhooks.md#mesheventtype) \| [*Gui2dEventType*](utilityhooks.md#gui2deventtype)

Defined in: [utilityHooks.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L41)

___

### MeshEventType

Ƭ **MeshEventType**: (`ev`: *ActionEvent*) => *void*

Defined in: [utilityHooks.ts:33](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L33)

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

### OnFrameRenderFn

Ƭ **OnFrameRenderFn**: (`eventData`: Scene, `eventState`: EventState) => *void*

Defined in: [render.ts:5](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L5)

___

### SceneContextType

Ƭ **SceneContextType**: { `scene`: *Nullable*<Scene\> ; `sceneReady`: *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`scene` | *Nullable*<Scene\> |
`sceneReady` | *boolean* |

Defined in: [scene.ts:4](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L4)

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

### EngineCanvasContext

• `Const` **EngineCanvasContext**: *Context*<[*EngineCanvasContextType*](engine.md#enginecanvascontexttype)\>

Defined in: [engine.tsx:10](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L10)

___

### SceneContext

• `Const` **SceneContext**: *Context*<[*SceneContextType*](scene.md#scenecontexttype)\>

Defined in: [scene.ts:9](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L9)

___

### SceneLoaderContext

• `Const` **SceneLoaderContext**: *Context*<[*SceneLoaderContextType*](loaders_usesceneloader.md#sceneloadercontexttype)\>

Defined in: [loaders/useSceneLoader.tsx:12](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L12)

___

### SceneLoaderContextProvider

• `Const` **SceneLoaderContextProvider**: *React.FC*<[*SceneLoaderContextProviderProps*](loaders_usesceneloader.md#sceneloadercontextproviderprops)\>

Defined in: [loaders/useSceneLoader.tsx:19](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/loaders/useSceneLoader.tsx#L19)

## Functions

### useAfterRender

▸ `Const`**useAfterRender**(`callback`: [*OnFrameRenderFn*](render.md#onframerenderfn), `mask?`: *number*, `insertFirst?`: *boolean*, `callOnce?`: *boolean*): *void*

Register a callback for after the scene renders.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*OnFrameRenderFn*](render.md#onframerenderfn) | called using onBeforeRender functionality of scene   |
`mask?` | *number* | the mask used to filter observers   |
`insertFirst?` | *boolean* | if true will be inserted at first position, if false (default) will be last position.   |
`callOnce?` | *boolean* | only call the callback once    |

**Returns:** *void*

Defined in: [render.ts:42](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L42)

___

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

### useBeforeRender

▸ `Const`**useBeforeRender**(`callback`: [*OnFrameRenderFn*](render.md#onframerenderfn), `mask?`: *number*, `insertFirst?`: *boolean*, `callOnce?`: *boolean*): *void*

Register a callback for before the scene renders.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [*OnFrameRenderFn*](render.md#onframerenderfn) | called using onBeforeRender functionality of scene   |
`mask?` | *number* | the mask used to filter observers   |
`insertFirst?` | *boolean* | if true will be inserted at first position, if false (default) will be last position.   |
`callOnce?` | *boolean* | only call the callback once    |

**Returns:** *void*

Defined in: [render.ts:15](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/render.ts#L15)

___

### useCamera

▸ `Const`**useCamera**<T\>(`createCameraFn`: (`scene`: *Scene*) => T, `autoAttach?`: *boolean*, `noPreventDefault?`: *boolean*): *Nullable*<T\>

Handles creating a camera and attaching/disposing.
TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *Camera*<T\> |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`createCameraFn` | (`scene`: *Scene*) => T | - | function that creates and returns a camera   |
`autoAttach` | *boolean* | true | Attach the input controls (default true)   |
`noPreventDefault` | *boolean* | true | Events caught by controls should call prevent default   |

**Returns:** *Nullable*<T\>

Defined in: [camera.ts:14](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/camera.ts#L14)

___

### useCanvas

▸ `Const`**useCanvas**(): *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\>

Get the canvas DOM element from the context.

**Returns:** *Nullable*<HTMLCanvasElement \| WebGLRenderingContext\>

Defined in: [engine.tsx:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L52)

___

### useClick

▸ **useClick**(`onClick`: [*MeshEventType*](utilityhooks.md#mesheventtype), `ownRef?`: *MutableRefObject*<*Nullable*<Mesh\>\>): [*MutableRefObject*<*Nullable*<Mesh\>\>]

useClick hook

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`onClick` | [*MeshEventType*](utilityhooks.md#mesheventtype) | What would be passed in the OnPickTrigger from ActionManager   |
`ownRef?` | *MutableRefObject*<*Nullable*<Mesh\>\> | to re-use a Ref you already have, otherwise one is created for you and returned.    |

**Returns:** [*MutableRefObject*<*Nullable*<Mesh\>\>]

Defined in: [utilityHooks.ts:134](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L134)

___

### useCustomPropsHandler

▸ `Const`**useCustomPropsHandler**(`propsHandler`: *ICustomPropsHandler*<*any*, *any*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`propsHandler` | *ICustomPropsHandler*<*any*, *any*\> |

**Returns:** *void*

Defined in: [utilityHooks.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L17)

___

### useEngine

▸ `Const`**useEngine**(): *Nullable*<*Engine*\>

Get the engine from the context.

**Returns:** *Nullable*<*Engine*\>

Defined in: [engine.tsx:35](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L35)

___

### useHover

▸ `Const`**useHover**(`over?`: [*MeshEventType*](utilityhooks.md#mesheventtype) \| [*Gui2dEventType*](utilityhooks.md#gui2deventtype), `out?`: [*MeshEventType*](utilityhooks.md#mesheventtype) \| [*Gui2dEventType*](utilityhooks.md#gui2deventtype), `ownRef?`: *MutableRefObject*<*null* \| *Mesh* \| *Control*\>): [*MutableRefObject*<*null* \| *Mesh* \| *Control*\>, *boolean*]

useHover hook

NOTE: Supports Mesh and 2D GUI controls only (not 3D GUI).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`over?` | [*MeshEventType*](utilityhooks.md#mesheventtype) \| [*Gui2dEventType*](utilityhooks.md#gui2deventtype) | expression when hover over starts   |
`out?` | [*MeshEventType*](utilityhooks.md#mesheventtype) \| [*Gui2dEventType*](utilityhooks.md#gui2deventtype) | expression when hover stops   |
`ownRef?` | *MutableRefObject*<*null* \| *Mesh* \| *Control*\> | to re-use a Ref you already have, otherwise one is created for you and returned.    |

**Returns:** [*MutableRefObject*<*null* \| *Mesh* \| *Control*\>, *boolean*]

Defined in: [utilityHooks.ts:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L52)

___

### useScene

▸ `Const`**useScene**(): *Nullable*<*Scene*\>

Get the scene from the context.

**Returns:** *Nullable*<*Scene*\>

Defined in: [scene.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/scene.ts#L17)

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

___

### withEngineCanvasContext

▸ **withEngineCanvasContext**<P, R\>(`Component`: *React.ComponentClass*<P\> \| *React.FunctionComponent*<P\>): *React.FunctionComponent*<R\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`P` | { `engineCanvasContext`: [*EngineCanvasContextType*](engine.md#enginecanvascontexttype)  } | - |
`R` | - | *Pick*<P, *Exclude*<keyof P, *engineCanvasContext*\\>\\> |

#### Parameters:

Name | Type |
------ | ------ |
`Component` | *React.ComponentClass*<P\> \| *React.FunctionComponent*<P\> |

**Returns:** *React.FunctionComponent*<R\>

Defined in: [engine.tsx:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/engine.tsx#L17)
