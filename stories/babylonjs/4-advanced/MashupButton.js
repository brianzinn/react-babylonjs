import React from 'react'
import { withScene } from '../../../dist/react-babylonjs'
import { Color3 } from '@babylonjs/core/Maths/math'

function onControlAdded (button3d) {
  if (button3d.hostInstance && button3d.hostInstance.mesh && button3d.hostInstance.mesh.material) {
    // the material is only available after attaching to BabylonJS host (3D GUI)
    const material = button3d.hostInstance.mesh.material

    material.diffuseColor = Color3.Black()

    button3d.hostInstance.pointerEnterAnimation = () => {
      material.emissiveColor = Color3.FromInts(15, 15, 15)
    }

    button3d.hostInstance.pointerOutAnimation = () => {
      material.emissiveColor = Color3.Black()
    }
  } else {
    console.error('onControlAdded(): no host instance -> mesh -> material', button3d)
  }
}

const MashupButton = (props) => (
  <button3D onControlAdded={onControlAdded} childrenAsContent onPointerDownObservable={props.onPointerDown}>
    <stackPanel background='#CCCCCC' isVertical height='256px'>
      <babylon-image name={`img-${props.text}`} width='180px' height='180px' paddingTop='10px' paddingBottom='10px' url={props.imageUrl} />
      <textBlock name={`text-${props.text}`} text={props.text} color={props.fontColor} fontSize={props.fontSize} height='56px' />
    </stackPanel>
  </button3D>
)

export default withScene(MashupButton)
