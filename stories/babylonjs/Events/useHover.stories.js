import React, {useState} from 'react'
import {Engine, Scene, useHover} from '../../../dist/react-babylonjs'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'

export default {title: 'Events'};

function WithUseHover() {
  const [scaling, setScaling] = useState(new Vector3(1, 1, 1));
  const [ref] = useHover(
    _ => setScaling(new Vector3(1.5, 1.5, 1.5)),
    _ => setScaling(new Vector3(1, 1, 1))
  );

  return <sphere name='sphere1' ref={ref}
                 diameter={2} segments={16}
                 scaling={scaling}
                 position={new Vector3(0, 1, 0)}>
  </sphere>
}

export const UseHoverEvent = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]}/>
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>
        <WithUseHover/>
        <ground name='ground1' width={6} height={6} subdivisions={2}/>
      </Scene>
    </Engine>
  </div>
);
