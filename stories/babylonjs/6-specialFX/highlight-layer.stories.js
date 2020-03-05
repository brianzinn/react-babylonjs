import React, {useEffect, useRef} from 'react'
import {storiesOf} from '@storybook/react'
import '@babylonjs/inspector'
import {Engine, Scene, useBeforeRender} from '../../../dist/react-babylonjs.es5'
import {Color3, Vector3} from '@babylonjs/core/Maths/math'
import '../../style.css'
import {HighlightLayer, Mesh} from "@babylonjs/core";

/**
 * official example
 * https://www.babylonjs-playground.com/#6ZVKE3#0
 */

/**
 * TODO
 * HDRCubeTexture
 * PBRMaterial
 * mesh.translate
 */

function WithHighlightLayer() {
  // const highlightLayerEL = useRef < HighlightLayer > null;
  // const meshEL = useRef < Mesh > null;
  const boxRef = useRef(null);

  // useEffect(() => {
  //   if (highlightLayerEL && meshEL) {
  //     highlightLayerEL.addMesh(meshEL, Color3.Black());
  //   }
  // });

  useBeforeRender(() => {
    console.log('ref', boxRef)
  })

  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera
          name='Camera'
          alpha={-Math.PI / 4}
          beta={Math.PI / 2.5}
          radius={200}
          target={Vector3.Zero()}/>
        {/*<pointLight position={new Vector3(0, 40, 0)}/>*/}

        <box ref={boxRef} name='box1' size={2} position={new Vector3(0, 1, 0)}>
          <standardMaterial diffuseColor={Color3.Red()} specularColor={Color3.Black()} />
        </box>

        {/*<sphere name='sphereGlass' segments={48} diameter={30} ref={boxRef}>*/}
        {/*  /!*<pbrMaterial name='glass'*!/*/}
        {/*  /!*             linkRefractionWithTransparency*!/*/}
        {/*  /!*             alpha={0.8}*!/*/}
        {/*  /!*             directIntensity={0.52}*!/*/}
        {/*  /!*             environmentIntensity={0.5}*!/*/}
        {/*  /!*             cameraExposure={0.5}*!/*/}
        {/*  /!*             cameraContrast={1.7}*!/*/}
        {/*  /!*             microSurface={1}*!/*/}
        {/*  /!*             reflectionColor={new Vector3(0.2, 0.2, 0.2)}*!/*/}
        {/*  /!*             albedoColor={new Color3(0.95, 0.95, 0.95)}>*!/*/}

        {/*  /!*  <hdrCubeTexture url='textures/room.hdr' size={512} assignTo='reflectionTexture'/>*!/*/}
        {/*  /!*</pbrMaterial>*!/*/}
        {/*</sphere>*/}

        {/*<highlightLayer name='h1' ref={highlightLayerEL}/>*/}
      </Scene>
    </Engine>
  )
}

export default storiesOf('Special FX', module)
  .add('Highlight layer', () => (
    <div style={{flex: 1, display: 'flex'}}>
      <WithHighlightLayer/>
    </div>
  ))
