import React, { Component } from 'react'
import { Scene, Vector3, Nullable, AbstractMesh, Material as BabylonMaterial, Light } from 'babylonjs'
import { ComponentContainer, ComponentRegistry } from './Scene';

export interface Behavior<T> {
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
    addBehavior: (behavior: any) => void, // TODO: add more types
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
export default abstract class SceneComponent<T extends U, U /* extends {name?: string} (not on GUI3DManager )*/, V extends SceneComponentProps<T>> extends Component<V, {}> implements ComponentContainer {
    
    protected name?: string;
    protected babylonObject?: T;
    protected hasRendered: boolean = false;
    protected children: any[] = [];
    private behaviors: Behavior<U>[] = [];
    private materialComponent?: Material<AbstractMesh>;
    
    constructor(props: V, context?: any) {
        super(props, context);
        this.name = props ? props.name : undefined;

        this.create = this.create.bind(this);
        this.addBehavior = this.addBehavior.bind(this);
        this.setMaterial = this.setMaterial.bind(this);
        this.onRegisterChild = this.onRegisterChild.bind(this);
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

    /**
     * Opportunity for component to do any setup, since this will be called before componentsCreated()
     * 
     * @param child 
     */
    onRegisterChild(child: any): void {
        this.children.push(child);
    }
    
    abstract get propsHandlers(): PropsHandler<U, V>[];

    public addBehavior(behavior: Behavior<U>) : void {
        this.behaviors.push(behavior);
    }

    public setMaterial(material: Material<AbstractMesh>) : void {
        this.materialComponent = material;
    }

    /**
     * Called after every prop and state change after render().
     * Not called after first render(), that is only componentDidMount
     */
    componentDidUpdate() {
        if (this.hasRendered) {
            this.componentsCreated();
        }
    }

    render() {
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

            // notify parent - using parent as 'this' context.
            if (this.props.container && this.props.container.onRegisterChild) {
                this.props.container.onRegisterChild(this);
            }

            if (this.behaviors.length !== 0) {
                this.behaviors.forEach(behavior => {
                    behavior.apply(child, this.props.scene);
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

        const children = React.Children.map(this.props.children,
            (child: any, index) => React.cloneElement(child, {
                scene: this.props.scene,
                index,
                componentRegistry: this.props.componentRegistry,
                container: this,
                addBehavior: this.addBehavior,
                setMaterial: this.setMaterial
            })
        );

        // we are rendering DOM.  just for testing, but may be useful for other purposes in the future. Cannot return [{children}], need JSX.Element.
        // TODO: update with React.createElement('component-name', ''');
        return (
            <div style={{visibility: 'hidden'}} title={this.props.name}>{children}</div>
        );
    }
}