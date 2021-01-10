import React, { useState, useCallback, useEffect } from 'react'
import { Vector3, NodeMaterial } from '@babylonjs/core';
import '@babylonjs/core/Rendering/edgesRenderer' // You this need for side-effects
import { Engine, Scene, useScene } from '../../../dist/react-babylonjs'
import '../../style.css';

export default { title: 'Babylon Basic' };

const SnippetMaterialById = ({snippetId, name}) => {
  const scene = useScene();
  const [material, setMaterial] = useState(null);
  const parseMaterial = useCallback(async () => {
    NodeMaterial.ParseFromSnippetAsync(snippetId, scene).then(
      (nodeMaterial) => {
        setMaterial(nodeMaterial);
      }
    );
  }, [snippetId, scene]);

  useEffect(() => {
    parseMaterial();
  }, [parseMaterial]);

  return material === null ? null : (
    <nodeMaterial name={name} fromInstance={material} />
  );
};

export const SnippetMaterial = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
      <arcRotateCamera name="arc" target={Vector3.Zero()} minZ={0.001}
        alpha={-Math.PI / 4} beta={(Math.PI / 4)} radius={5} upperBetaLimit={(Math.PI / 2) * 0.99}
      />
        <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
        <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
          <SnippetMaterialById name="sphereMat" snippetId="#81NNDY#20" />
        </sphere>
        <ground name="ground1" width={6} height={6} subdivisions={2} />
      </Scene>
    </Engine>
  </div>
)
