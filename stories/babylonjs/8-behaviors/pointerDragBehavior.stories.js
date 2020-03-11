import React from 'react'
import {storiesOf} from '@storybook/react'
import {Engine, Scene} from '../../../dist/react-babylonjs.es5'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'

/**
 * official demo:
 * https://www.babylonjs-playground.com/#YEZPVT
 *
 * TODO: camera autoAttaching?
 */

function WithPointerDragBehavior() {
  return (
    <>
      <sphere name='sphere1' diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
        <pointerDragBehavior dragAxis={new Vector3(1, 0, 0)}
                             useObjectOrientationForDragging={true}
                             onDragStartObservable={_ => console.log('dragStart')}
                             onDragObservable={_ => console.log('drag')}
                             onDragEndObservable={_ => console.log('dragEnd')}/>
      </sphere>
      <ground name='ground1' width={6} height={6} subdivisions={2}/>
    </>
  )
}

export default storiesOf('Behaviors', module)
  .add('Pointer drag behavior', () => (
      <div style={{flex: 1, display: 'flex'}}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
          <Scene>
            <freeCamera name='camera1'
                        position={new Vector3(0, 5, -10)}
                        setTarget={[Vector3.Zero()]}/>
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>
            <WithPointerDragBehavior/>
          </Scene>
        </Engine>
      </div>
    )
  )
