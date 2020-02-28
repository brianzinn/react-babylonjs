import React from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene} from '../../../dist/react-babylonjs.es5'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Control} from '@babylonjs/gui';

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

        <sphere name='Sphere1' segments={10} diameter={9} position={new Vector3(-30, 0, 0)}/>
        <sphere name='Sphere2' segments={2} diameter={9} position={new Vector3(-20, 0, 0)}/>
        <sphere name='Sphere3' segments={10} diameter={9} position={new Vector3(-10, 0, 0)}/>
        <sphere name='Sphere4' segments={10} diameter={0.5} position={new Vector3(0, 0, 0)}/>
        <sphere name='Sphere5' segments={10} diameter={9} position={new Vector3(10, 0, 0)}/>
        <sphere name='Sphere6' segments={10} diameter={9} position={new Vector3(20, 0, 0)}/>


        <sphere name='Sphere7' segments={10} diameter={9} position={new Vector3(30, 0, 0)}>
          <plane name="dialog" size={2} position={new Vector3(0, 1.5, 0)}>
            <adtFullscreenUi name='ui1'>
              {/*<stackPanel width='220px' fontSize='14px'*/}
              {/*            horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}*/}
              {/*            verticalAlignment={Control.VERTICAL_ALIGNMENT_CENTER}>*/}
              {/*  <textBlock text='Slider' height='40px' color='white'*/}
              {/*             textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}*/}
              {/*             paddingTop='10px'/>*/}

              {/*</stackPanel>*/}


              <rectangle name='label for Sphere7' background='black' height='30px' alpha={0.5}
                         width='100px' cornerRadius={20} thickness={1}
                         linkOffsetY={30} top='10%'
                         createForParentMesh={true}
                         zIndex={5} verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}>
                <textBlock text='Sphere7' color='White'/>
                <babylon-line alpha={0.5} lineWidth={5} dash={[5, 10]}/>
              </rectangle>

              <babylon-ellipse width='10px' height='10px' color='white' background='black'/>
            </adtFullscreenUi>
          </plane>
        </sphere>
      </Scene>
    </Engine>
  )
}

export default storiesOf('GUI', module)
  .add('GUI', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <WithGUI/>
    </div>
  ))
