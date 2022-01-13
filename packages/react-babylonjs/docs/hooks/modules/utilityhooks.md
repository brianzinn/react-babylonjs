[react-babylonjs](../README.md) / [Exports](../modules.md) / utilityHooks

# Module: utilityHooks

## Table of contents

### Type aliases

- [Gui2dEventType](utilityhooks.md#gui2deventtype)
- [HoverType](utilityhooks.md#hovertype)
- [MeshEventType](utilityhooks.md#mesheventtype)

### Functions

- [useClick](utilityhooks.md#useclick)
- [useCustomPropsHandler](utilityhooks.md#usecustompropshandler)
- [useHover](utilityhooks.md#usehover)

## Type aliases

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

## Functions

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
