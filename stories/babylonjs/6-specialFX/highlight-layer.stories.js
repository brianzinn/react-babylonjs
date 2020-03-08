import React, {useEffect, useRef} from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene, useBeforeRender} from '../../../dist/react-babylonjs.es5'
import {Color3, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'

/**
 * TODO
 * alpha mesh highlight
 */

function WithHighlightLayer() {
  const boxRef = useRef(null);
  const highlightLayerEL = useRef(null);

  useBeforeRender(() => {
    if (boxRef.current && highlightLayerEL.current) {
      highlightLayerEL.current.hostInstance.addMesh(boxRef.current.hostInstance, Color3.Green());
    }
  });

  return (
    <>
      <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
      <sphere name='sphere1' ref={boxRef} diameter={2} segments={16} position={new Vector3(0, 1, 0)} />
      <ground name='ground1' width={6} height={6} subdivisions={2} />
      <highlightLayer name='hl' ref={highlightLayerEL}/>
    </>
  )
}

export default storiesOf('Special FX', module)
  .add('Highlight layer', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          <WithHighlightLayer/>
        </Scene>
      </Engine>
    </div>
  ))
