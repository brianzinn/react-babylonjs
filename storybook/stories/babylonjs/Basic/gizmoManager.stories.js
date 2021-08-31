import React, { useRef } from 'react';
import { Engine, Scene, useScene } from 'react-babylonjs';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '../../style.css'

export default { title: 'Babylon Basic' };

const Inspector = () => {
  const scene = useScene();
  scene.debugLayer.show();
  return null;
}

export const GizmoManager = () => {

  const lightRef = useRef(null);
  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
        <Scene>
          <arcRotateCamera name='arc' target={new Vector3(0, 1, 0)}
            alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
            radius={10} minZ={0.001} wheelPrecision={50}
          />
          {/* <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} /> */}
          <Inspector />
          <utilityLayerRenderer>
            <gizmoManager thickness={3} positionGizmoEnabled>
              <spotLight name='red-light' direction={new Vector3(0, 0, Math.PI)} intensity={8} angle={102} exponent={5}
                diffuse={Color3.Red()}
                specular={Color3.Red()}
                position={new Vector3(0, 5, 0)}
              >
                <shadowGenerator mapSize={1024} useBlurExponentialShadowMap blurKernel={32} shadowCastChildren>
                  <icoSphere name='ico1' position={new Vector3(0, 2, 0)} diffuseColor={Color3.Red()} />
                </shadowGenerator>
              </spotLight>
              <lightGizmo light={lightRef.current} updateScale skipAutoAttach={true} />
            </gizmoManager>
          </utilityLayerRenderer>
          <ground name='ground1' width={15} height={15} subdivisions={2} receiveShadows />
        </Scene>
      </Engine>
    </div>
  )
}