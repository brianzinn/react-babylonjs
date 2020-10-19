import React, { useEffect, useRef } from 'react'
import { Vector3, Animation } from '@babylonjs/core';
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs'
import '../../style.css';

export default { title: 'Babylon Basic' };

/**
 * This is for optimizing animation when first mount application.
 * But this story works well，Animation is smooth。
 */
function WithAnimation() {
  // console.time('Timing');

  const groupRef = useRef(null);
  const scene = useScene();

  const position = Vector3.Zero();

  const playAnimation = () => {
    if (groupRef.current) {
      const group = groupRef.current.hostInstance;
      const animations = getSlideUpAnimation(position, -2);
      const animatable = scene.beginDirectAnimation(group, animations, 0, 120, true);
      // console.timeLog('Timing', 'beginAnimation');
    }
  };

  useEffect(_ => {
    // console.timeLog('Timing', 'useEffect');
    playAnimation();
  }, []);

  const onCreated = _ => {
    // console.timeLog('Timing', 'onCreated');
  };

  const spheres = getSpheres(10);

  return (
    <transformNode name='group' ref={groupRef} position={position} onCreated={onCreated}>
      {spheres}
    </transformNode>
  )
}

function getSpheres(count) {
  const results = [];

  for (let i = -count / 2; i < count / 2; i++) {
    for (let j = -count / 2; j < count / 2; j++) {
      const key = `sphere-${i}-${j}`;
      results.push(
        <sphere name={key} key={key} diameter={0.5}
          segments={16} position={new Vector3(i, 1, j)} />
      )
    }
  }

  return results;
}

function getSlideUpAnimation(position, offsetY) {
  const { y } = position;

  const keys = [{
    frame: 0,
    value: y + offsetY,
  }, {
    frame: 60,
    value: y
  }, {
    frame: 120,
    value: y + offsetY
  }];

  const animation = new Animation(
    'animation', "position.y",
    60, 0, 1
  );
  animation.setKeys(keys);

  return [animation];
}


export const Animations = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 10, -20)}
          setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <WithAnimation />
      </Scene>
    </Engine>
  </div>
)
