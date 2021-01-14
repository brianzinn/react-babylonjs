import React, { useState, useCallback, useEffect } from 'react'
import { Vector3, NodeMaterial, Color3 } from '@babylonjs/core';
import {  Texture } from "@babylonjs/core/Materials/Textures/texture";
import '@babylonjs/core/Rendering/edgesRenderer' // You this need for side-effects
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs'

import '../../style.css';

export default { title: 'Babylon Basic' };


const setBlockValue = (
  name,
  value,
  material
) => {
    if(value instanceof Texture){
      let textureBlock = material.getTextureBlocks().find((b) => b.name === name);
      if (textureBlock !== undefined) {
        textureBlock.texture = value;
      }
    }else{
      let block = material.getInputBlockByPredicate((b) => b.name === name);
      if (block !== null) {
      block.value = value;
      }
  }
};

const SnippetMaterialById = ({snippetId, name, blockValues, freeze}) => {
  const scene = useScene();
  const [material, setMaterial] = useState(null);
  const parseMaterial = useCallback(async () => {
    NodeMaterial.ParseFromSnippetAsync(snippetId, scene).then(
      (nodeMaterial) => {
        if(freeze === true){
          material.freeze();
        }
        setMaterial(nodeMaterial);
      }
    );
  }, [snippetId, scene]);

  useEffect(() => {
    if (material) {
      if(freeze === true && material.isFrozen){
        material.unfreeze();
      }
      blockValues.forEach((entry) =>{
        setBlockValue(entry.name, entry.value, material)
      })
      if(freeze === true){
        material.freeze();
      }
    }
  }, [blockValues]);

  useEffect(() => {
    parseMaterial();
  }, [parseMaterial]);

  return material === null ? null : (
    <nodeMaterial name={name} fromInstance={material} />
  );
};

const colors = ["Red", "Green", "Yellow"]

export const SnippetMaterial = () => {
  const [selectedColor, setSelectedColor] = useState("Green");
  const onChange = (e) => {
    setSelectedColor(e.target.value);
  }
  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <select onChange={onChange}>
          {colors.map(color => <option key={color} value={color} selected={selectedColor === color}>{color}</option>)}
        </select>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
          <Scene>
            <arcRotateCamera name="arc" target={Vector3.Zero()} minZ={0.001}
              alpha={-Math.PI / 4} beta={(Math.PI / 4)} radius={5} upperBetaLimit={(Math.PI / 2) * 0.99}
            />
            <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
            <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
              <SnippetMaterialById name="sphereMat" snippetId="#81NNDY#20" freeze blockValues={[{name:"Surface Color", value: Color3[selectedColor]()}]} />
            </sphere>
            <ground name="ground1" width={6} height={6} subdivisions={2} />
          </Scene>
        </Engine>
      </div>
    </>
  )
}
