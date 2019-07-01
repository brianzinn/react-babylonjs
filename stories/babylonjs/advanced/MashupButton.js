import React from 'react'
import { Button3D, TextBlock, StackPanel, Image, withScene } from '../../../dist/react-babylonjs.es5'
import { Color3 } from 'babylonjs'

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
  <Button3D onControlAdded={onControlAdded} childrenAsContent onPointerDownObservable={props.onPointerDown}>
    <StackPanel background='#CCCCCC' isVertical height='256px'>
      <Image name={`img-${props.text}`} width='180px' height='180px' paddingTop='10px' paddingBottom='10px' url={props.imageUrl} />
      <TextBlock name={`text-${props.text}`} text={props.text} color={props.fontColor} fontSize={props.fontSize} height='56px' />
    </StackPanel>
  </Button3D>
)

export default withScene(MashupButton)
