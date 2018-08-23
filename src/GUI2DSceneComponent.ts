import { Control } from "babylonjs-gui";
import SceneComponent, { SceneComponentProps } from "./SceneComponent";

/**
 * This allows us also to flow addControl() through other controls like Anchors.
 */
export interface GUI2DControl {
    addControl(control: Control) : void

    // TODO: call parent removeControl() on component Unmount as default implementation?
    removeControl(control: Control) : void
}

export default abstract class GUI2DSceneComponent<T extends U, U , V extends SceneComponentProps<T>> extends SceneComponent<T, U, V> implements GUI2DControl {

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
        } else {
            console.log('from 2D no addControl on:', this.props.container)
        }
    }

    abstract addControl(control: Control): void;

    abstract removeControl(control: Control): void;
}