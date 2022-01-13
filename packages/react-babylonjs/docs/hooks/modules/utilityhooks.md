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

Ƭ **Gui2dEventType**: (`eventData`: _Control_, `eventState`: _EventState_) => _void_

Defined in: [utilityHooks.ts:37](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L37)

---

### HoverType

Ƭ **HoverType**: [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype)

Defined in: [utilityHooks.ts:41](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L41)

---

### MeshEventType

Ƭ **MeshEventType**: (`ev`: _ActionEvent_) => _void_

Defined in: [utilityHooks.ts:33](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L33)

## Functions

### useClick

▸ **useClick**(`onClick`: [_MeshEventType_](utilityhooks.md#mesheventtype), `ownRef?`: _MutableRefObject_<_Nullable_<Mesh\>\>): [*MutableRefObject*<*Nullable*<Mesh\>\>]

useClick hook

#### Parameters:

| Name      | Type                                             | Description                                                                      |
| --------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| `onClick` | [_MeshEventType_](utilityhooks.md#mesheventtype) | What would be passed in the OnPickTrigger from ActionManager                     |
| `ownRef?` | _MutableRefObject_<_Nullable_<Mesh\>\>           | to re-use a Ref you already have, otherwise one is created for you and returned. |

**Returns:** [*MutableRefObject*<*Nullable*<Mesh\>\>]

Defined in: [utilityHooks.ts:134](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L134)

---

### useCustomPropsHandler

▸ `Const`**useCustomPropsHandler**(`propsHandler`: _ICustomPropsHandler_<_any_, _any_\>): _void_

#### Parameters:

| Name           | Type                                 |
| -------------- | ------------------------------------ |
| `propsHandler` | _ICustomPropsHandler_<_any_, _any_\> |

**Returns:** _void_

Defined in: [utilityHooks.ts:17](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L17)

---

### useHover

▸ `Const`**useHover**(`over?`: [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype), `out?`: [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype), `ownRef?`: _MutableRefObject_<_null_ \| _Mesh_ \| _Control_\>): [*MutableRefObject*<*null* \| *Mesh* \| *Control*\>, *boolean*]

useHover hook

NOTE: Supports Mesh and 2D GUI controls only (not 3D GUI).

#### Parameters:

| Name      | Type                                                                                                   | Description                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `over?`   | [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype) | expression when hover over starts                                                |
| `out?`    | [_MeshEventType_](utilityhooks.md#mesheventtype) \| [_Gui2dEventType_](utilityhooks.md#gui2deventtype) | expression when hover stops                                                      |
| `ownRef?` | _MutableRefObject_<_null_ \| _Mesh_ \| _Control_\>                                                     | to re-use a Ref you already have, otherwise one is created for you and returned. |

**Returns:** [*MutableRefObject*<*null* \| *Mesh* \| *Control*\>, *boolean*]

Defined in: [utilityHooks.ts:52](https://github.com/brianzinn/react-babylonjs/blob/eba7b00/src/hooks/utilityHooks.ts#L52)
