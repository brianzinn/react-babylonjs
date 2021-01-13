import React from 'react';
import { Engine, Scene, useEngine, useCanvas, useScene } from '../../../dist/react-babylonjs'
import { Vector3 } from '@babylonjs/core'

export default { title: 'Hooks' };

const MyScene = () => {
    const engine = useEngine();
    const canvas = useCanvas();
    const scene = useScene();

    // engine and canvas were null.  Although not currently "bridged", the hooks check contexts on each side of renderer.
    // https://github.com/konvajs/react-konva/issues/188#issuecomment-478302062
    console.log('MyScene', { engine, canvas, scene })
    
    return (
        <>
          <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
          <box name='box1' size={2} position={new Vector3(0, 1, 0)}/>
        </>
      )
}

const EngineChild = () => {
    const engine = useEngine();
    const canvas = useCanvas();

    console.log('EngineChild', { engine, canvas});
    return null;
}

const RenderHooks = () => {
    return (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
            <EngineChild />
            <Scene>
                <MyScene />
            </Scene>
        </Engine>
    )
}

export const ConvenienceHooks = () => (
    <div style={{ flex: 1, display: 'flex' }}>
        <div>Look at console.</div>
        <RenderHooks x={5} />
    </div>
)

ConvenienceHooks.story = {
    name: 'engine/canvas/scene'
}