import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { ValueAndUnit } from '@babylonjs/gui/2D/valueAndUnit'
import { useState, FC, useEffect, useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const FullScreen: FC = () => {
  // should run on latest alphas of BabylonJS 5.0 alpha 63+
  // https://github.com/BabylonJS/Babylon.js/pull/11569
  // https://playground.babylonjs.com/#0ZVTMY
  const direction = useRef(1)
  const [low, setLow] = useState(0.5)

  useEffect(() => {
    const handle = setInterval(() => {
      setLow((cur) => {
        const next = cur + 0.001 * direction.current
        // console.log('next:', next);
        if (next < 0.1 || next > 0.9) {
          direction.current *= -1
        }
        return next
      })
    }, 10)

    return () => {
      clearInterval(handle)
    }
  }, [])

  // const [background, setBackground] = useState("black");
  // useEffect(() => {
  //   const handle = setInterval(() => {
  //     setBackground((cur) => (cur === "black" ? "#222222" : "black"));
  //   }, 1000);

  //   return () => {
  //     clearInterval(handle);
  //   };
  // }, []);

  return (
    <adtFullscreenUi name="ui1">
      <rectangle name="main" background="#222222" width="80%" thickness={3}>
        <grid name="grid1" background={'#222222'} width="500px">
          <rowDefinition value={low} />
          <rowDefinition value={1 - low} />
          <columnDefinition value={100} unit={ValueAndUnit.UNITMODE_PIXEL} />
          <columnDefinition value={low} />
          <columnDefinition value={1 - low} />
          <columnDefinition value={100} unit={ValueAndUnit.UNITMODE_PIXEL} />
          <rectangle name="rect-0-1" background="green" thickness={0} gridRow={0} gridColumn={1} />
          <rectangle name="rect-1-2" background="red" thickness={0} gridRow={1} gridColumn={2} />
          <rectangle name="rect-0-2" background="yellow" thickness={0} gridRow={0} gridColumn={2} />
        </grid>
      </rectangle>
    </adtFullscreenUi>
  )
}

const Grid = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="camera1"
          radius={7}
          beta={Math.PI / 4}
          alpha={Math.PI / 2}
          target={Vector3.Zero()}
          minZ={0.001}
          wheelPrecision={30}
        />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <FullScreen />
      </Scene>
    </Engine>
  </div>
)

export default Grid
