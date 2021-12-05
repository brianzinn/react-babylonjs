import React, { useEffect, useState } from 'react';
import { Vector3 } from '@babylonjs/core';
import { Engine, Scene, useScene } from 'react-babylonjs';

import '../../style.css';
import { ValueAndUnit } from '@babylonjs/gui/2D/valueAndUnit';

export default { title: 'GUI' };

const Inspector = () => {
  const scene = useScene();
  scene.debugLayer.show();
  return null;
}

const FullScreen = () => {
  // should run on latest alphas of BabylonJS 5.0 alpha 63+
  // https://github.com/BabylonJS/Babylon.js/pull/11569
  // https://playground.babylonjs.com/#0ZVTMY
  // const direction = useRef(1);
  // const [low, setLow] = useState(0.5);

  // useEffect(() => {
  //   const handle = setInterval(() => {
  //     setLow(cur => {
  //       const next = cur + (0.1 * direction.current);
  //       console.log('next:', next);
  //       if (next < 0.1 || next > 0.9) {
  //         direction.current *= -1;
  //       }
  //       return next;
  //     })
  //   }, 1000);

  //   return () => {
  //     clearInterval(handle);
  //   }
  // }, [])

  const [background, setBackground] = useState('black');
  useEffect(() => {
    const handle = setInterval(() => {
      setBackground(cur => cur === 'black' ? '#222222' : 'black')
    }, 1000);

    return () => {
      clearInterval(handle);
    }
  }, [])


  return (
    <adtFullscreenUi name='ui1'>
      <rectangle name="main" background='#222222' width='80%' thickness={3}>
        <grid name='grid1' background={background} width='500px'>
          <rowDefinition value={0.5} />
          <rowDefinition value={0.5} />
          <columnDefinition value={100} unit={ValueAndUnit.UNITMODE_PIXEL} />
          <columnDefinition value={0.5} />
          <columnDefinition value={0.5} />
          <columnDefinition value={100} unit={ValueAndUnit.UNITMODE_PIXEL} />
          <rectangle name="rect-0-1" background="green" thickness={0} gridRow={0} gridColumn={1} />
          <rectangle name="rect-1-2" background="red" thickness={0} gridRow={1} gridColumn={2} />
          <rectangle name="rect-0-2" background="yellow" thickness={0} gridRow={0} gridColumn={2} />
        </grid>
      </rectangle>
    </adtFullscreenUi>
  )
}

export const Grid = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera name='camera1' radius={7} beta={Math.PI / 4} alpha={Math.PI / 2} target={Vector3.Zero()} minZ={0.001} wheelPrecision={30} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <FullScreen />
        <Inspector />
      </Scene>
    </Engine>
  </div>
)

Grid.story = {
  name: "Grid"
}