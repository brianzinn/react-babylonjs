import React, {useEffect, useRef} from 'react'
import {Control} from '@babylonjs/gui/2D/controls/control'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene} from '../../../dist/react-babylonjs'
import {Color3, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'

function useHighlight() {

}

/**
 * TODO
 * alpha mesh highlight
 */

function WithHighlightLayer() {
  const highlightLayerEL = useRef(null);
  const sphereRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (highlightLayerEL.current, sphereRef.current) {
      highlightLayerEL.current.hostInstance.addMesh(sphereRef.current.hostInstance, Color3.Green());
      highlightLayerEL.current.hostInstance.addExcludedMesh(boxRef.current.hostInstance, Color3.Green());
    }
  }, [sphereRef.current, highlightLayerEL.current, boxRef.current])

  const onCheckboxClicked = (value) => {
    if (highlightLayerEL.current) {
      highlightLayerEL.current.hostInstance.isEnabled = value;
    }
  };

  return (
    <>
      <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
      <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
      <sphere name='sphere1' ref={sphereRef} diameter={2} segments={16} position={new Vector3(-2, 1, 0)} />
      <box name='box' ref={boxRef} width={1.5} height={1.5} depth={1.5}
           position={new Vector3(2, 0.75, 0)} visibility={0.6}>
      </box>
      <ground name='ground1' width={10} height={6} subdivisions={2} />
      <highlightLayer name='hl' ref={highlightLayerEL} />
      <adtFullscreenUi name='ui1'>
          <stackPanel
            width='200px'
            isVertical={false}
            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT }
            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}
          >
            <checkbox width='20px' height='20px' isChecked={true} color='green'
              onIsCheckedChangedObservable={onCheckboxClicked}
            />
            <textBlock text='Highlight Enabled' width='180px' paddingLeft='5px' color='white'
              textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
            />
          </stackPanel>
        </adtFullscreenUi>
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
