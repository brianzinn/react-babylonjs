import React from 'react';
import { Engine, Scene, useBabylonEngine, useBabylonCanvas, useBabylonScene } from '../../../dist/react-babylonjs'
import { Vector3 } from '@babylonjs/core'

export default { title: 'Hooks' };

const MyScene = () => {
    const engine = useBabylonEngine();
    const canvas = useBabylonCanvas();
    const scene = useBabylonScene();

    // engine and canvas are null.  they are not currently bridged.
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
    const engine = useBabylonEngine();
    const canvas = useBabylonCanvas();

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