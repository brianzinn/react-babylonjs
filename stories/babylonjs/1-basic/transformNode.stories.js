import React, {useEffect, useState} from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene} from '../../../dist/react-babylonjs.es5'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'


function WithTransformNode() {
  const [position, setPosition] = useState(Vector3.Zero());
  const [rotation, setRotation] = useState(Vector3.Zero());

  let timer;

  const animate = _ => {
    const delta = 0.005;
    position.x += delta;
    rotation.y += delta;
    setPosition(position.clone());
    setRotation(rotation.clone());
    timer = requestAnimationFrame(animate);
  };

  useEffect(() => {
    timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)}
                    setTarget={[Vector3.Zero()]}/>

        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>

        <transformNode name="transform-node" position={position} rotation={rotation}>
          <sphere name='sphere1' diameter={2} segments={16}
                  position={new Vector3(0, 1, 0)}>
          </sphere>
          <ground name='ground1' width={6} height={6} subdivisions={2}
                  position={new Vector3(0, 0, 0)}/>
        </transformNode>
      </Scene>
    </Engine>
  )
}

export default storiesOf('Babylon Basic', module)
  .add('TransformNode', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <WithTransformNode/>
    </div>
  ))
