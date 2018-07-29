import React, { Component } from 'react'
import { Scene, Vector3, Nullable } from 'babylonjs'
import { ComponentContainer } from './Scene';

export interface Behaviour<T> {
    apply(target: T, scene: Scene): void;
}

export type ComponentContainerProps = {
    scene: Scene,
    name: string,
    container: any,
    addBehaviour: (behaviour: any) => void // TODO: add another type here?
}

export type SceneComponentProps<T> = {
    onCreated: (child: Nullable<T>) => void,
    registerChild: (child: Nullable<T>) => void, 
} & ComponentContainerProps

export type NodeProps = {
    position: Vector3
}

export interface PropsHandler<T, U> {
    handle(target: T, props: U) : void;
}

/**
 * Base implemention of SceneComponent.  Currently all classes are inheriting from this.
 *
 */
export default abstract class SceneComponent<T extends U, U, V extends SceneComponentProps<T>> extends Component<V, {}> implements ComponentContainer {
    
    protected name?: string;
    private babylonObject?: T;
    private hasRendered: boolean = false;
    private behaviours: Behaviour<U>[] = [];

    constructor(props: V, context?: any) {
        super(props, context);
        this.name = props ? props.name : undefined;

        this.create = this.create.bind(this);
        this.addBehaviour = this.addBehaviour.bind(this);
    }

    /**
     * Called once for each Scene Component
     * 
     * @param scene babylonJS scene
     */
    abstract create(scene: Scene) : T;
    
    abstract get propsHandlers(): PropsHandler<U, V>[];

    public addBehaviour(behaviour: Behaviour<U>) : void {
        this.behaviours.push(behaviour);
    }

    /**
     * 
     * @param child called by child passing in their created <T>
     */
    onRegisterChild(child: T) : void {}

    render() {
        const children = React.Children.map(this.props.children,
            (child: any, index) => React.cloneElement(child, {
                scene: this.props.scene,
                index,
                container: this,
                registerChild: this.onRegisterChild,
                addBehaviour: this.addBehaviour,
                name: this.props.name
            })
        );

        if (this.hasRendered === false && this.props.scene) {
            this.hasRendered = true;
            let child: T = this.create(this.props.scene);
            this.babylonObject = child

            // we want to set these before onCreated() is fired.
            if (typeof this.propsHandlers !== undefined && Array.isArray(this.propsHandlers)) {
                this.propsHandlers.forEach(propsHandlers => {
                    propsHandlers.handle(child, this.props);
                })
            } else {
                console.error('Scene component missing propsHandlers', this);
            }

            // allow access to lifecycle phase.  ie: access propery/method exposed in props.
            if (typeof this.props.onCreated === 'function') {
                this.props.onCreated!(child);
            }

            // notify parent
            if (this.props.registerChild) {
                this.props.registerChild!(child)
            }

            if (this.behaviours.length !== 0) {
                this.behaviours.forEach(behaviour => {
                    behaviour.apply(child, this.props.scene); // double dispatch
                })
            }
        } else if (this.props.scene) {
            if (typeof this.propsHandlers !== undefined && Array.isArray(this.propsHandlers)) {
                this.propsHandlers.forEach(propsHandlers => {
                    propsHandlers.handle(this.babylonObject!, this.props);
                })
            }
        }

        // we are rendering DOM.  partially for testing, but may be useful. Cannot retur [{children}], need JSX.Element.
        return (<div style={{visibility: 'hidden'}} title={this.props.name}>{children}</div>);
    }
}