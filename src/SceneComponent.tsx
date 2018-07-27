import React, { Component } from 'react'
import { Scene, Vector3 } from 'babylonjs'

export interface Behavior<T> {
    attach(target: T): void;
}

export type SceneComponentProps<T> = {
    scene: Scene,
    name: string,
    container: any,
    onCreated: (child: T) => void,
    registerChild: (child: T) => void
}

export type NodeProps = {
    position: Vector3
}

export interface PropsInitialiser<T, U> {
    init(target: T, props: U) : void;
}

export interface Behaviour<T> {
    attach(target: T): void;
}

/**
 * Base implemention of SceneComponent.  Not using it right now, but maybe later with mixins:
 * https://www.typescriptlang.org/docs/handbook/mixins.html
 */
export default abstract class SceneComponent<T extends U, U, V extends SceneComponentProps<T>> extends Component<V, {}> {
    
    protected name?: string;
    private hasRendered: boolean = false;

    constructor(props?: V, context?: any) {
        super(props, context);
        this.name = props ? props.name : undefined;

        this.create = this.create.bind(this);
    }

    /**
     * Called once for each Scene Component
     * 
     * @param scene babylonJS scene
     */
    abstract create(scene: Scene) : T;
    
    abstract get propsInitialisers(): PropsInitialiser<U, V>[];

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
                name: this.props.name
            })
        );

        if (this.hasRendered === false && this.props.scene) {
            this.hasRendered = true;
            let child: T = this.create(this.props.scene);

            if (typeof this.propsInitialisers !== undefined && Array.isArray(this.propsInitialisers)) {
                console.log(`Calling '${this.props.name}' props initialisers.`)
                this.propsInitialisers.forEach(propsInitialiser => {
                    propsInitialiser.init(child, this.props);
                })
            } else {
                console.error('Scene component missing propsInitialisers', this);
            }

            // allow access to lifecycle phase.  ie: access propery/method exposed in props.
            if (typeof this.props.onCreated === 'function') {
                this.props.onCreated!(child);
            }

            // notify parent
            if (this.props.registerChild) {
                this.props.registerChild!(child)
            }
        }

        return (<div style={{visibility: 'hidden'}} title={this.props.name}>{children}</div>);
    }
}