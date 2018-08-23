import { Scene } from "babylonjs"
import { Control, StackPanel as BabylonStackPanel } from "babylonjs-gui"

import { SceneComponentProps } from "./SceneComponent"
import GUI2DSceneComponent from "./GUI2DSceneComponent";
import ContainerPropsHandler, { ContainerProps } from "./ContainerProps";
import ControlPropsHandler from "./2DControlProps";

export type StackPanelProps = {
    isVertical?: boolean
} & ContainerProps &
    SceneComponentProps<BabylonStackPanel>

export default class StackPanel extends GUI2DSceneComponent<BabylonStackPanel, BabylonStackPanel, StackPanelProps> {

    private stackPanel?: BabylonStackPanel

    create(scene: Scene): BabylonStackPanel {
        this.stackPanel = new BabylonStackPanel(this.props.name);

        if (this.props.isVertical !== undefined) {
            this.stackPanel.isVertical = this.props.isVertical
        }

        return this.stackPanel
    }

    addControl(control: Control): void {
        this.stackPanel!.addControl(control)
        console.log('stack panel added:', control, control.name, this.children.length, this.children)
    }

    removeControl(control: Control): void {
        this.stackPanel!.removeControl(control)
    }

    componentsCreated(): void {
        /* ignore */
    }

    public get propsHandlers() {
        return [
            new ContainerPropsHandler(),
            new ControlPropsHandler()
        ]
    }
}
