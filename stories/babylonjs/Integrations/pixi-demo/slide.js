import React, { useEffect, useRef } from "react"
import { Effect, Vector3, Mesh, Texture, Color3, ShaderMaterial } from '@babylonjs/core';
import { Control } from '@babylonjs/gui'
import { useBabylonScene } from '../../../../dist/react-babylonjs'
import  './shaders'; 
import lerp from "lerp"
import { Block, useBlock } from "./block"
import state from "./store"
import VaporWave from './VaporWave'
let time = 0;


function CustomPlaneBlock(props){
  const {keyText, index, scaling, image} = props;
  const {  contentMaxWidth: w, viewportHeight, offsetFactor } = useBlock()
  const scene = useBabylonScene();
  const planeRef = useRef(undefined)
  let last = state.top.current;
  useEffect(() => {
    const observable = scene.onBeforeRenderObservable.add((scene) => {
      if (scene !== null && planeRef !== null) {
        time += scene.getEngine().getDeltaTime();
        const shMat = planeRef.current.material 
        shMat.setFloat("time", time);
        const { pages, top } = state;
        shMat.setFloat("scale", lerp(shMat._floats.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1));
        shMat.setFloat("shift", lerp(shMat._floats.shift, (top.current - last) / 150, 0.1));
        last = top.current
      }
    })
    return () => {
      scene.onBeforeRenderObservable.remove(observable);
    }
  })

  const onCustomProceduralTextureCreated = (e) => {
    const options = {
      attributes: ['position', 'normal', 'uv'],
      samplers: ['textureSampler'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'projection', 'scale', 'shift', 'color', 'opacity', 'hasTexture']
    }
    const shMat = new ShaderMaterial(`shaderRGB`, scene, {vertexSource: Effect.ShadersStore.shaderShiftRGBVertexShader, fragmentSource: Effect.ShadersStore.shaderShiftRGBPixelShader }, options)
    const _img = new Texture(image, scene);
    _img.wrapU = Texture.CLAMP_ADDRESSMODE
    _img.wrapV = Texture.CLAMP_ADDRESSMODE
    shMat.backFaceCulling = false;
    shMat.checkReadyOnEveryCall = true;
    shMat.setTexture("textureSampler",  _img);
    shMat.setFloat("hasTexture", 1);
    shMat.setFloat("scale", 0);
    shMat.setFloat("shift", 0);
    shMat.setFloat("opacity", 1);
    shMat.setVector3("color", new Color3(0,0,0));
    e.material = shMat;
  }

  return(
    <plane ref={planeRef} name={`plane${keyText}-${index}`}  scaling={scaling}  onCreated={(e) => onCustomProceduralTextureCreated(e)}/>
  )
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const keyText = text ? text.split(' ').join('') : Math.random() + '--rando';
  const {  contentMaxWidth: w, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const left = !(index % 2)
  return (
    <Block factor={factor} offset={offset} name={`block${keyText}-${index}`}>
        <CustomPlaneBlock image={image}  name={`plane${keyText}-${index}`} keyText={keyText} index={index}  scaling={new Vector3(w * size, (w * size) / aspect, 1)}  />
        <plane name={`dialog${keyText}-${index}`} scaling={new Vector3(w * size, (w * size) / aspect, 1)}  size={w * 0.04} position={new Vector3(((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1)} sideOrientation={Mesh.BACKSIDE}>
                <advancedDynamicTexture
                    name={`dialogTexture${keyText}-${index}`}
                    height={1024} width={1024}
                    createForParentMesh={true}
                    generateMipMaps={true}
                    samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
                >
                    <rectangle  name={`rect-1${keyText}-${index}`} thickness={0} cornerRadius={0}>
                        <textBlock text={header} fontSize={120} color="white" fontStyle="bold" />
                    </rectangle>
                </advancedDynamicTexture>
            </plane>
            <plane name={`dialogText${keyText}-${index}`} scaling={new Vector3(w * size, (w * size) / aspect, 1)}  size={w * 0.04} position={new Vector3(-w / 8, -w / 4 / aspect, -4)} sideOrientation={Mesh.BACKSIDE}>
                <advancedDynamicTexture
                    name={`dialogTextTexture${keyText}-${index}`}
                    height={256} 
                    width={512}
                    createForParentMesh={true}
                    generateMipMaps={true}
                    samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
                >
                        <textBlock textHorizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT} textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP} textWrapping resizeToFit text={text} /*fontSize={120}*/ color="white" fontStyle="normal" />
                </advancedDynamicTexture>
            </plane>
    </Block>
  )
}

function Content(mainProps) {

  return (
    <>
    <Block factor={1.0} offset={-0.7}>
        <VaporWave />
    </Block>
      {state.paragraphs.map((props, index) => {
          return (
            <Paragraph key={index} index={index} {...props}  />
          )
      })}
      {state.stripes.map(({ offset, color, height, width }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <plane width={width} height={height} name={`stripe-${index}`} rotation={new Vector3(0, 0, Math.PI / 8)} position={new Vector3(0, 0, 2)}>
          <standardMaterial name={`boxmat${index}`} diffuseColor={Color3.FromHexString(color)} specularColor={Color3.Black()} />
          </plane>
        </Block>
      ))}
    </>
  )
}

function Slide(props) {
  return <Content {...props} />
}

export default Slide