import { Control3D } from "babylonjs-gui";
import SceneComponent, { SceneComponentProps } from "./SceneComponent";

/**
 * This allows us also to flow addControl() through other controls like Anchors.
 */
export interface GuiControl {
    addControl(control: Control3D) : void

    // canAddControl() : boolean
    // getControl(): Control3D | undefined

    /**
     * Life-cycle method to ensure created objects are available (ie: Utility Layer and RootContainer are ready)
     * Called once before children are called with ComponentsCreated()
     */
    onBeforeGuiComponentsCreated() : void

    /**
     * Will only be called once all parents components have had their onComponentsCreatedCalled.
     */
    onGuiComponentsCreated() : void

    // TODO: remove control on component Unmount
    removeControl(control: Control3D) : void
}

export default abstract class GUISceneComponent<T extends U, U , V extends SceneComponentProps<T>> extends SceneComponent<T, U, V> implements GuiControl {
    
    private created: boolean = false;

    constructor(props: V, context?: any) {
        super(props, context);
        
        this.onBeforeGuiComponentsCreated = this.onBeforeGuiComponentsCreated.bind(this);
        this.addControl = this.addControl.bind(this);
        this.removeControl = this.removeControl.bind(this);
        this.onGuiComponentsCreated = this.onGuiComponentsCreated.bind(this);
    }

    abstract addControl(control: Control3D): void;

    abstract removeControl(control: Control3D): void;
    
    abstract onGuiComponentsCreated(): void;

    onBeforeGuiComponentsCreated(): void {
        if (this.created === false) {
            this.created = true;
            if (this.props.container && this.props.container.onBeforeGuiComponentsCreated) {
                this.props.container.onBeforeGuiComponentsCreated();
            }

            // at least for this part of the hierarchy tree.
            this.onGuiComponentsCreated();
        }
    }
}