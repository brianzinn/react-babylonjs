import React, { Component } from 'react'
import { Scene, Vector3, Nullable, AbstractMesh, Material as BabylonMaterial, Light } from 'babylonjs'
import { ComponentContainer, ComponentRegistry } from './Scene';

export interface Behaviour<T> {
    apply(target: T, scene: Scene): void;
}

// NOTE: probably does not need to be generic.  Only applying it to AbstractMesh anyway so far.
export interface Material<T> {
    material?: BabylonMaterial;
    apply(target: T, scene: Scene): void;
}

export type ComponentContainerProps = {
    scene: Scene,
    name: string,
    container: any,
    componentRegistry: ComponentRegistry,
    addBehaviour: (behaviour: any) => void, // TODO: add more types
    setMaterial: (material: Material<AbstractMesh>) => void
}

export type SceneComponentProps<T> = {
    childComponents: any[],
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
    private materialComponent?: Material<AbstractMesh>;
    
    constructor(props: V, context?: any) {
        super(props, context);
        this.name = props ? props.name : undefined;

        this.create = this.create.bind(this);
        this.addBehaviour = this.addBehaviour.bind(this);
        this.setMaterial = this.setMaterial.bind(this);
    }

    /**
     * Called once for each Scene Component
     * 
     * @param scene babylonJS scene
     */
    abstract create(scene: Scene) : T;

    /**
     * Just a lifecycle hook called once after all components have had a chance to be created.
     */
    abstract componentsCreated() : void;
    
    abstract get propsHandlers(): PropsHandler<U, V>[];

    public addBehaviour(behaviour: Behaviour<U>) : void {
        this.behaviours.push(behaviour);
    }

    public setMaterial(material: Material<AbstractMesh>) : void {
        this.materialComponent = material;
    }

    /**
     * 
     * @param child called by child passing in they're created <T>
     */
    onRegisterChild(child: T) : void {
        console.log('child registered', child, this);
    }

    /**
     * Called after every prop and state change after render().
     * Not called after first render(), that is only componentDidMount
     */
    componentDidUpdate() {
        if (this.hasRendered) {
            console.log('component did update', this);
            this.componentsCreated();
        }
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child: any, index) => React.cloneElement(child, {
                scene: this.props.scene,
                index,
                componentRegistry: this.props.componentRegistry,
                container: this,
                registerChild: this.onRegisterChild,
                addBehaviour: this.addBehaviour,
                setMaterial: this.setMaterial,
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

            if (this.materialComponent !== undefined) {
                // if 'child' is not abstract mesh - will apply mesh to anything:
                this.materialComponent.apply(child as any, this.props.scene);
            }
        } else if (this.props.scene) {
            if (typeof this.propsHandlers !== undefined && Array.isArray(this.propsHandlers)) {
                this.propsHandlers.forEach(propsHandlers => {
                    propsHandlers.handle(this.babylonObject!, this.props);
                })
            }
        }

        // we are rendering DOM.  partially for testing, but may be useful. Cannot return [{children}], need JSX.Element.
        // TODO: update with React.createElement()
        return (
            <div style={{visibility: 'hidden'}} title={this.props.name}>{children}</div>
        );
    }
}