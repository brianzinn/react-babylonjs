import * as React from 'react';
import { Engine, Scene, useCustomPropsHandler, CustomPropsHandler, PropChangeType } from 'react-babylonjs';
import { animated as a } from 'react-babylon-spring';
import { Vector3, Color3, Texture, Mesh } from '@babylonjs/core';
import { Controls, useControl } from 'react-three-gui';

import '../../style.css'

export default {title: 'Integrations'};

class CustomVector3ArrayHandler  {
    get name() {
        return 'testing:Vector3Array'
    }

    get propChangeType() { return PropChangeType.Vector3 };

    accept(newProp) {
        return Array.isArray(newProp);
    }

    process(oldProp, newProp) {

        if (oldProp === undefined || oldProp.length !== newProp.length) {
            console.log(`found diff length (${oldProp?.length}/${newProp?.length}) Color3Array new? ${oldProp === undefined}`)
            return {
                processed: true,
                value: Vector3.FromArray(newProp)
            };
        }

        for (let i = 0; i < oldProp.length; i++) {
            if (oldProp[i] !== newProp[i]) {
                console.log(`found diff value (${oldProp[i]} -> ${newProp[i]}) Color3Array new? index: ${i}`)
                return {
                    processed: true,
                    value: Vector3.FromArray(newProp)
                };
            }
        }

        return { processed: false, value: null };
    }
}

CustomPropsHandler.RegisterPropsHandler(new CustomVector3ArrayHandler());

const Next = () => {
    const rotationX = useControl('Rotate', { group: 'Second Box', type: 'number', spring: true });
    return (
        <a.box name='next-box' position={new Vector3(1.5, 0, 0)} rotation-x={rotationX}>
            <a.standardMaterial />
        </a.box>
    )
};

const Box = () => {
    const rotationX = useControl('Rotate X', { group: 'Box One', type: 'number', spring: true });
    const rotationY = useControl('Rotate Y', {
        type: 'number',
        group: 'Box One',
        scrub: true,
        min: 0,
        max: 20,
        distance: 10,
        spring: {
            friction: 2,
            mass: 2,
        },
    });

    const color = useControl('Material color', {
        type: 'color',
        group: 'Box One',
    });

    const position = useControl('Position', {
        group: 'Box One',
        type: 'xypad',
        value: { x: 0, y: 0 },
        distance: Math.PI,
    });

    const str = useControl('Text', {
        group: 'More',
        type: 'string',
        value: 'example',
    });
    const dropdown = useControl('Pick one', {
        group: 'More',
        type: 'select',
        items: ['one box', 'two boxes']
    });

    const ref = React.useRef();

    return (
        <>
            <a.box
                size={1}
                ref={ref}
                name='box1'
                position={[position.x, -position.y, 0]}
                rotation-x={rotationX}
                rotation-y={rotationY}
            >
                <a.standardMaterial name='box1mat' emissiveColor={Color3.FromHexString(color)} />
            </a.box>
            <plane name="dialog" size={10} position={new Vector3(0, 0, 2)} sideOrientation={Mesh.BACKSIDE}>
                <advancedDynamicTexture
                    name="dialogTexture"
                    height={1024} width={1024}
                    createForParentMesh={true}
                    generateMipMaps={true}
                    samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
                >
                    <rectangle name="rect-1" height={0.5} width={1} thickness={4} cornerRadius={4}>
                        <textBlock text={str} fontSize={120} color="white" />
                    </rectangle>
                </advancedDynamicTexture>
            </plane>
            {dropdown === 'two boxes' && <Next />}
        </>
    )
}

export const ReactThreeGui = () => {
    return (
        <div>
            <Engine antialias adaptToDeviceRatio canvasId='babylonCanvas'>
                <Scene>
                    <pointLight position={new Vector3(0, 2, 2)} intensity={0.2} />
                    <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
                    <arcRotateCamera name="arc" target={new Vector3(0, 1, 0)} minZ={0.001}
                        alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))} radius={5} />
                    <Box />
                </Scene>
            </Engine>
            <Controls />
        </div>
    );
};

ReactThreeGui.story = {
    name: 'react-three-gui'
}
