import { CreatedInstance } from "./CreatedInstance";

/**
 * Props passed from controls that are not part of generated props and custom handling.  Typically used to aid declarative composition.
 */
export type CustomProps = {
  /**
   * Assign to this property on the parent.  Parent property is cleared on umnount.
   */
  assignTo?: string | string[];
  /**
   * Assigned from this existing property on the parent.  Will assign this host element to a parent property that contains an existing instance (no new instances created and no dispose called).
   */
  assignFrom?: string;
  /**
   * allows components to use instances of objects created non-declaratively
   */
  fromInstance?: any;
  /**
   * To automatically dispose of the underlying object when "fromInstance" is used.  Is not applied for regularly instanced objects.
   *
   * Default: false
   */
  disposeInstanceOnUnmount?: boolean;
};

export type AbstractMeshCustomProps = {
  /**
   * Signal to reconciler that child meshes are not tracked and are not part of tree.  ie: children need to be explicitly added to GlowLayer/ShadowGenerator.
   */
  childMeshesNotTracked?: boolean;
} & CustomProps;

export type Control3DCustomProps = {
  /**
   * for 3D control ".content" (which is 2D)
   */
  childrenAsContent?: boolean;
  /**
   * for Control3D, which has position, but not other properties like rotation.
   */
  linkToTransformNodeByName?: string;
  /**
   * See manager and Control lifecycle listener for details.
   */
  onControlAdded?: (instance: CreatedInstance<any>) => void;
} & CustomProps;

export type Control2DCustomProps = {
  /**
   * ???
   */
  gridColumn?: number;
  /**
   * ???
   */
  gridRow?: number;
} & CustomProps;

export type MaterialCustomProps = {
  /**
   * For attaching the same material to multiple meshes (by mesh name)
   */
  attachToMeshesByName?: string[];
} & CustomProps;

export type ShadowGeneratorCustomProps = {
  /**
   * List of mesh names to search for, which will be added as shadow casters.
   */
  shadowCasters?: string[];
  /**
   * List of mesh names to exclude from casting shadows (all other meshes by name will cast shadows)
   */
  shadowCastersExcluding?: string[];
  /**
   * Adds all child nodes as shadow casters.
   */
  shadowCastChildren?: boolean;
} & CustomProps;

export type VRExperienceHelperCustomProps = {
  enableInteractions?: boolean;
} & CustomProps;

/**
 * Custom Gizmo props used for declaratively attaching.
 */
export type GizmoCustomProps = {
  /**
   * Attach to nearest node (as opposed to a restricting mesh)
   */
  attachGizmoToNode?: boolean;
  /**
   * Attach to nearest node
   */
  attachGizmoToMesh?: boolean;
  /**
   * Do not automatically attach to a mesh/node
   */
  skipAutoAttach?: boolean;
  /**
   * Try to set 'gizmoLayer' automatically.
   */
  skipUtilityLayerAttach?: boolean;
} & CustomProps;

/**
 * The below Custom Props are added explicitly and not automatically by inheritance, so do not need union type "& CustomProps"
 * These are more useful when applicalbe to only part of the inheritance chain.
 */

/**
 * Currently only extra prop for controlling attaching camera
 */
export type CameraCustomProps = {
  /**
   * Passed through when attachControl(..) is called.  Defines whether event caught by the controls should call preventdefault()
   * (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
   */
  noPreventDefault?: boolean;
};

/**
 * Same functionality as Advanced Dynamic Texture factory method "createForMesh" (and for first parent mesh).
 */
export type ADTCustomProps = {
  /**
   * Only applicable for AdvanceDynamicTexture to attach to a mesh.  ADT.CreateForMesh(parent, ...)
   */
  createForParentMesh?: boolean;
};

/**
 * This is a subset of the EffectLayer classes.
 */
export type GlowLayerCustomProps = {
  /**
   * Adds all child nodes to the glow layer.
   */
  addIncludeOnlyChildren?: boolean;
};

export type VirtualKeyboardCustomProps = {
  /**
   * for VirtualKeyboard (2d input control names)
   */
  connectControlNames?: string[];
  /**
   * for VirtualKeyboard
   */
  defaultKeyboard?: boolean;
};

/**
 * A union of all CustomProps as a convenience typing and easier maintenance in other areas of code (ie: CreatedInstance and HostConfig)
 */
export type AnyCustomProps = CustomProps &
  (AbstractMeshCustomProps &
    ADTCustomProps &
    CameraCustomProps &
    Control2DCustomProps &
    Control3DCustomProps &
    GizmoCustomProps &
    GlowLayerCustomProps &
    VirtualKeyboardCustomProps &
    ShadowGeneratorCustomProps &
    MaterialCustomProps);
