import React from 'react'
import {
  Engine,
  Scene,
  useHover,
  useSprings,
  useSpring,
  a, // "animated" versions of all react-babylonjs objects
  useCustomPropsHandler,
  CustomColor3ArrayHandler,
  CustomColor3StringHandler,
  CustomVector3ArrayHandler
} from '../../../dist/react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math';
import '../../style.css'

export default {title: 'Integrations'};

const getRandomColor = (function () {
  // const Colors = ['#4F86EC', '#D9503F', '#F2BD42', '#58A55C'];
  const Colors = [[0.31, 0.53, 0.93, 1], [0.85, 0.31, 0.25, 1], [0.95, 0.74, 0.26, 1], [0.35, 0.65, 0.36, 1]];

  let i = 0;
  return () => {
    i++;
    return Colors[i % Colors.length];
  }
})();

function getCyclePosition(i, blankRadius) {
  i += blankRadius;
  let angle = i % Math.PI * 2;
  const x = i * Math.cos(angle);
  const z = i * Math.sin(angle);

  return [x, z];
}

const WithSpring = () => {
  useCustomPropsHandler(new CustomColor3ArrayHandler());
  useCustomPropsHandler(new CustomColor3StringHandler());
  useCustomPropsHandler(new CustomVector3ArrayHandler());

  const [props, set] = useSprings(100, i => {
    const [x, z] = getCyclePosition(i, 30);

    return {
      position: [x, 20, z],
      color: getRandomColor(),
      from: {
        position: [x, Math.random() * 50 - 60, z],
      },
      config: {
        duration: 3000,
      }
    }
  });

  const [ref, isHovering] = useHover(_ => {
    set((index, ctrl) => {
      return {
        color: getRandomColor(),
        position: [0, 20, 0],
        config: {
          duration: 2000,
        }
      }
    });
  }, _ => {
    set(i => {
      const [x, z] = getCyclePosition(i, 30);
      return {
        position: [x, 20, z],
        config: {
          duration: 2000,
        }
      }
    });
  });

  const groupProps = useSpring({
    rotation: isHovering ? [0, Math.PI * 2, 0] : [0, 0, 0],
    config: {
      duration: 2000
    }
  });

  return (
    <>
      <freeCamera name='camera1' position={new Vector3(0, 200, -200)} setTarget={[Vector3.Zero()]}/>
      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>

      <a.transformNode name='' rotation={groupProps.rotation}>
        {
          props.map(({position, color}, i) =>
            <a.box key={i} name='' width={6} height={16} depth={6} position={position}>
              <a.standardMaterial name='' diffuseColor={color}/>
            </a.box>
          )
        }
      </a.transformNode>


      <sphere ref={ref} name='' diameter={40} position={new Vector3(0, 20, 0)}>
        <standardMaterial name='' diffuseColor={new Color3(0.3, 0.6, 0.9)} alpha={0.8} />
      </sphere>

      <ground name='ground1' width={1000} height={1000} subdivisions={2}/>
    </>
  )
}

export const ReactSpring = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <WithSpring/>
      </Scene>
    </Engine>
  </div>
);

ReactSpring.story = {
  name: 'react-spring'
}