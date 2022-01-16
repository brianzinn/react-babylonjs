
import React, { useEffect } from 'react';
import { Vector2, Mesh } from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import './shaders';
let customProceduralTexture = null;
let time = 0;

const onCustomProceduralTextureCreated = (cpt) => {
  customProceduralTexture = cpt; // assigning to reflection/refraction of mirrorball
}

const VaporWave = (props) => {
    const scene = useScene();
    useEffect(() => {
        const observable = scene.onBeforeRenderObservable.add((scene) => {
          if (scene !== null && customProceduralTexture !== null) {
            time += scene.getEngine().getDeltaTime();
            customProceduralTexture.setFloat("time", time);
          }
        })
        return () => {
          scene.onBeforeRenderObservable.remove(observable);
        }
      })

    return (<>
    <plane
        name='vaporWareSunset'
        width={20}
        height={20}
        billboardMode={Mesh.BILLBOARDMODE_ALL}>
        <standardMaterial name='shaderMat'>
        <customProceduralTexture
            name='vaporWaveTexture'
            texturePath="vaporWave"
            size={512}
            onCreated={onCustomProceduralTextureCreated}
            assignTo='diffuseTexture'
            setVector2={["resolution", new Vector2(1, 1)]}
        />
        </standardMaterial>
    </plane>
    </>)
}

export default VaporWave