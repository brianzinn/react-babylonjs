import { Vector3 } from '@babylonjs/core/Maths/math'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { Rectangle, TextWrapping } from '@babylonjs/gui/2D/controls'
import { Control } from '@babylonjs/gui/2D/controls/control'
import React, { MutableRefObject, useState } from 'react'
import { Engine, Scene, useHover } from 'react-babylonjs'

function WithUseHover() {
  const [scaling, setScaling] = useState(new Vector3(1, 1, 1))
  const [ref] = useHover(
    () => setScaling(new Vector3(1.5, 1.5, 1.5)),
    () => setScaling(new Vector3(1, 1, 1))
  )

  return (
    <sphere
      name="sphere1"
      ref={ref as MutableRefObject<Mesh | null>}
      diameter={2}
      segments={32}
      scaling={scaling}
      position={new Vector3(0, 1.5, 0)}
    ></sphere>
  )
}

const WithUseHoverGui = () => {
  const [color, setColor] = useState('white')
  const [isHovered, setIsHovered] = useState(false)
  const [rectRef] = useHover(
    () => {
      setColor('yellow')
      setIsHovered(true)
    },
    () => {
      setColor('white')
      setIsHovered(false)
    }
  )

  return (
    <adtFullscreenUi name="ui">
      <stackPanel verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}>
        <rectangle
          ref={rectRef as MutableRefObject<Rectangle | null>}
          background={color}
          name="rect"
          height="50px"
          width="150px"
        >
          <rectangle>
            <textBlock
              text={isHovered ? 'hovered' : 'not\nhovered'}
              fontFamily="FontAwesome"
              fontStyle="bold"
              fontSize={20}
              color="black"
              textWrapping={TextWrapping.WordWrap}
            />
          </rectangle>
        </rectangle>
      </stackPanel>
    </adtFullscreenUi>
  )
}

const UseHoverEvent = () => (
  <div>
    <div className="m-2">
      Hover over the GUI (rectangle) or 3D Sphere mesh to view the hover over/out events.
    </div>
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <freeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <WithUseHover />
        <WithUseHoverGui />
        <ground name="ground1" width={6} height={6} subdivisions={2} />
      </Scene>
    </Engine>
  </div>
)

export default UseHoverEvent
