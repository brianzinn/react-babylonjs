import React, { useMemo } from 'react'
import { Engine, Scene, useLoader } from '../../../dist/react-babylonjs'
import { Vector3 } from '@babylonjs/core'
import '../../style.css'

export default { title: 'Hooks' };

const MemoGlTF = ({ position }) => {
    let url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF/Box.gltf';
    const [loaded, { meshes }] = useLoader(url);

    useMemo(() => {
        if (loaded) {
            // if you need to re-use a mesh - use memoization
            console.log('different meshes[1].uniqueId:', meshes[1].uniqueId)

            meshes[1].position = position;
            return meshes[1];
        }
    }, [loaded]);

    return null;
}

export const UseLoader = () => (
    <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
            <Scene>
                <arcRotateCamera name="arc" target={Vector3.Zero()} minZ={0.001}
                    alpha={-Math.PI / 4} beta={(Math.PI / 4)} radius={5}
                />
                <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
                <MemoGlTF position={new Vector3(2, 0, 0)} />
                <MemoGlTF position={new Vector3(-2, 0, 0)} />
                <ground name='ground1' width={6} height={6} subdivisions={2} />
            </Scene>
        </Engine>
    </div>
)

UseLoader.story = {
    name: 'useLoader'
}
