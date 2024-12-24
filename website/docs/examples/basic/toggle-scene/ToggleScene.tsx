import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { FC, useState } from 'react'
import { Engine, Scene } from 'react-babylonjs'

const FullScreenButton: FC<ShapeStateType> = (props) => {
  const [currentShape, setCurrentShape] = props.shapeState
  // TODO: get inspector working
  // const scene = useScene();
  // if (scene) {
  //   scene.debugLayer.show();
  // }
  const onClick = (_) => {
    setCurrentShape((currentShape) => {
      console.log('toggling current shape', currentShape)
      return currentShape === 'spheres' ? 'squares' : 'spheres'
    })
  }

  return (
    <adtFullscreenUi name="ui">
      <rectangle name="rect" height="50px" width="150px">
        <rectangle>
          <babylon-button name="close-icon" background="green" onPointerDownObservable={onClick}>
            <textBlock
              text={currentShape}
              fontFamily="FontAwesome"
              fontStyle="bold"
              fontSize={20}
              color="white"
            />
          </babylon-button>
        </rectangle>
      </rectangle>
    </adtFullscreenUi>
  )
}

type ShapeStateType = {
  shapeState: [string, React.Dispatch<React.SetStateAction<string>>]
}

const SphereScene: FC<ShapeStateType> = (props) => (
  <Scene>
    <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
    <hemisphericLight
      name="light1"
      direction={Vector3.Up()}
      intensity={0.7}
      diffuse={Color3.Red()}
      specular={Color3.Green()}
      groundColor={Color3.Green()}
    />
    <FullScreenButton shapeState={props.shapeState} />
    {[-4, -2, 0, 2, 4].map((number) => (
      <sphere name={`sphere-${number}`} key={number} position={new Vector3(number, 0, 0)} />
    ))}
  </Scene>
)

const SquareScene: FC<ShapeStateType> = (props) => (
  <Scene>
    <arcRotateCamera
      name="camera1"
      target={Vector3.Zero()}
      alpha={Math.PI / 2}
      beta={Math.PI / 4}
      radius={20}
    />
    <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
    <FullScreenButton shapeState={props.shapeState} />
    {[-4, -2, 0, 2, 4].map((number) => (
      <box name={`sphere-${number}`} key={number} position={new Vector3(number, 0, 0)} />
    ))}
  </Scene>
)

export const ToggleScene = () => {
  const shapeState = useState('spheres')

  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        {shapeState[0] === 'spheres' && <SphereScene shapeState={shapeState} />}
        {shapeState[0] === 'squares' && <SquareScene shapeState={shapeState} />}
      </Engine>
    </div>
  )
}

export default ToggleScene
