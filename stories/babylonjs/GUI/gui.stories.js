import React, { useRef, useCallback } from 'react'
import '@babylonjs/inspector'
import {Engine, Scene} from '../../../dist/react-babylonjs'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Control} from '@babylonjs/gui';

export default { title: 'GUI' };


/**
 * official example
 * https://www.babylonjs-playground.com/#3VMTI9#0
 */

/**
 * TODO: other gui、mesh link、
 */

/**
 * 2d GUI demos
 * @return {*}
 * @constructor
 */
function WithGUI() {
  // const lineRef = useRef(null)
  const sphere1Ref = useRef(null);
  const label1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const label2Ref = useRef(null);
  const sphere3Ref = useRef(null);
  const label3Ref = useRef(null);
  const sphere4Ref = useRef(null);
  const label4Ref = useRef(null);
  const sphere5Ref = useRef(null);
  const label5Ref = useRef(null);
  const sphere6Ref = useRef(null);
  const label6Ref = useRef(null);
  const sphere7Ref = useRef(null);
  const lineRef = useRef(null);
  const label7Ref = useRef(null);

  const refLookup = {
    '1': {
      sphere: sphere1Ref,
      label: label1Ref
    },
    '2': {
      sphere: sphere2Ref,
      label: label2Ref
    },
    '3': {
      sphere: sphere3Ref,
      label: label3Ref
    },
    '4': {
      sphere: sphere4Ref,
      label: label4Ref
    },
    '5': {
      sphere: sphere5Ref,
      label: label5Ref
    },
    '6': { 
      sphere: sphere6Ref,
      label: label6Ref
    },
    '7': {
      sphere: sphere7Ref,
      label: label7Ref
    }
  }

  const onFullScreenRef = useCallback(ref => {
      const line = lineRef.current
      
      try {
        line.hostInstance.linkWithMesh(sphere7Ref.current.hostInstance);
        line.hostInstance.connectedControl = label7Ref.current.hostInstance;

        
        [1,2,3,4,5,6].forEach((i) => {
          const lookup = refLookup[i.toString()];
          lookup.label.current.hostInstance.linkWithMesh(lookup.sphere.current.hostInstance)
        })
      } catch (e) {
        console.error(e)
      }
  });

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera
          name='Camera'
          alpha={-Math.PI / 2}
          beta={1}
          radius={110}
          target={Vector3.Zero()}/>

        <hemisphericLight name='toto' direction={Vector3.Up()}/>

        <sphere name='Sphere1' ref={sphere1Ref} segments={10} diameter={9} position={new Vector3(-30, 0, 0)}/>
        <sphere name='Sphere2' ref={sphere2Ref} segments={2} diameter={9} position={new Vector3(-20, 0, 0)}/>
        <sphere name='Sphere3' ref={sphere3Ref} segments={10} diameter={9} position={new Vector3(-10, 0, 0)}/>
        <sphere name='Sphere4' ref={sphere4Ref} segments={10} diameter={0.5} position={new Vector3(0, 0, 0)}/>
        <sphere name='Sphere5' ref={sphere5Ref} segments={10} diameter={9} position={new Vector3(10, 0, 0)}/>
        <sphere name='Sphere6' ref={sphere6Ref} segments={10} diameter={9} position={new Vector3(20, 0, 0)}/>
        <sphere name='Sphere7' ref={sphere7Ref} segments={10} diameter={9} position={new Vector3(30, 0, 0)}/>

        <adtFullscreenUi name='ui1' ref={onFullScreenRef}>
          {/*<stackPanel width='220px' fontSize='14px'*/}
          {/*            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}*/}
          {/*            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}>*/}
          {/*  <textBlock text='Slider' height='40px' color='white'*/}
          {/*             textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}*/}
          {/*             paddingTop='10px'/>*/}

          {/*</stackPanel>*/}

          {[1,2,3,4,5,6,7].map((i) =>
            <rectangle key={`label${i}`} name={`label for Sphere${i}`} background='black' height='30px' alpha={0.5}
                      width='100px' cornerRadius={20} thickness={1}
                      linkOffsetY={30} ref={refLookup[i.toString()].label}
                      verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                      top={i === 7 ? '10%' : 0}
            >
              <textBlock name={`sphere-${i}-text`} text={`Sphere${i}`} color='White'/>
            </rectangle>
          )

          }
          <babylon-line name="sphere-7-line" alpha={0.5} lineWidth={5} dash={[5, 10]} ref={lineRef} />

          <babylon-ellipse name="gui-ellipse" width='10px' height='10px' color='white' background='black'/>
        </adtFullscreenUi>
      </Scene>
    </Engine>
  )
}

export const GUIFullScreen = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <WithGUI/>
  </div>
)
