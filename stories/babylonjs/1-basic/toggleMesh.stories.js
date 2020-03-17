import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import {Engine, Scene, useBabylonScene} from '../../../dist/react-babylonjs'
import {Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {Color3} from "@babylonjs/core";
import ScaledModelWithProgress from "../ScaledModelWithProgress";


/**
 * To fix two bugs when toggle meshes:
 * 1.  model's mesh can't be destroyed.
 * 2. `removeChildFromContainer()` only destroy babylon instance.
 * The model is rootAbstractMesh's and Parent's child.
 * `container.rootInstance.children` will be very large after few toggles.
 */


function WithToggleMesh() {
  const [isShown, toggleShown] = useState(true);

  const onClick = _ => {
    toggleShown(isShown => !isShown)
  };

  return (
    <>
      {isShown &&
        <ground name='ground1' width={10} height={6} subdivisions={2}
                position={new Vector3(0, 0, 0)}>

          <sphere name='sphere1' diameter={2} segments={16}
                  position={new Vector3(-2, 1, 0)}>
          </sphere>

          <ScaledModelWithProgress
            rootUrl={`assets/models/`} sceneFilename='atom.glb'
            progressBarColor={Color3.FromInts(135, 206, 235)}
            center={new Vector3(2, 1, 0)}/>
        </ground>
      }

      <adtFullscreenUi name='ui'>
        <rectangle name="rect" height='50px' width='150px'>
          <rectangle>
            <babylon-button name="close-icon"
                            background="green"
                            onPointerDownObservable={onClick}>
              <textBlock text={isShown ? 'hide' : 'show'}
                         fontFamily="FontAwesome" fontStyle="bold"
                         fontSize={20} color="white"/>
            </babylon-button>
          </rectangle>
        </rectangle>
      </adtFullscreenUi>
    </>
  )
}

export default storiesOf('Babylon Basic', module)
  .add('Toggle Mesh', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          <freeCamera name='camera1' position={new Vector3(0, 5, -10)}
                      setTarget={[Vector3.Zero()]}/>
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>
          <WithToggleMesh/>
        </Scene>
      </Engine>
    </div>
  ))
