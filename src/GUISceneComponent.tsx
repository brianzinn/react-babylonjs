import { Control3D } from "babylonjs-gui";
import SceneComponent, { SceneComponentProps } from "./SceneComponent";

/**
 * This allows us also to flow addControl() through other controls like Anchors.
 */
export interface GuiControl {
    addControl(control: Control3D) : void

    // canAddControl() : boolean
    // getControl(): Control3D | undefined

    // TODO: call parent removeControl() on component Unmount as default implementation?
    removeControl(control: Control3D) : void
}

export default abstract class GUISceneComponent<T extends U, U , V extends SceneComponentProps<T>> extends SceneComponent<T, U, V> implements GuiControl {

    protected added : boolean = false;

    constructor(props: V, context?: any) {
        super(props, context);
        
        this.addControl = this.addControl.bind(this);
        this.removeControl = this.removeControl.bind(this);
    }

    protected init(child: T) : void {
        // only GUISceneComponent inherite
        if (typeof this.props.container.addControl === "function") {
            this.added = true
            this.props.container.addControl(child)
        }
    }

    abstract addControl(control: Control3D): void;

    abstract removeControl(control: Control3D): void;
}