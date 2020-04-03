import React, {useState} from 'react'
import {Engine, Scene, useClick} from '../../../dist/react-babylonjs'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Color3} from "@babylonjs/core/Maths/math.color";

export default {title: 'Events'};

const getRandomColor = (function () {
  // const Colors = ['#4F86EC', '#D9503F', '#F2BD42', '#58A55C'];
  const Colors = [[0.31, 0.53, 0.93, 1], [0.85, 0.31, 0.25, 1], [0.95, 0.74, 0.26, 1], [0.35, 0.65, 0.36, 1]];

  let i = 0;
  return () => {
    console.log('i', i)
    i++;
    return Colors[i % Colors.length];
  }
})();

const initialColor = Color3.FromArray(getRandomColor());

function WithUseClick() {
  const [color, setColor] = useState(initialColor);
  const [ref] = useClick(_ => {
    const color = getRandomColor();
    console.log('click', color);
    setColor(Color3.FromArray(color))
  });

  return <sphere name='sphere1' ref={ref}
                 diameter={2} segments={16}
                 position={new Vector3(0, 1, 0)}>
    <standardMaterial name='mat' diffuseColor={color}/>
  </sphere>
}

export const UseClickEvent = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]}/>
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>
        <WithUseClick/>
        <ground name='ground1' width={6} height={6} subdivisions={2}/>
      </Scene>
    </Engine>
  </div>
)
