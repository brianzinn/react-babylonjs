import React, { useState, useRef } from 'react'
import { Engine, Scene, useClick, useHover, useBeforeRender } from 'react-babylonjs'

import ScaledModelWithProgress from '../ScaledModelWithProgress'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import '../../style.css'

export default { title: 'VR' };

const SpinningIcoSphere = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements
  const icoSphereRef = useRef(null);

  const { setRotationY, rotationDelta, rpm, position, color, hoveredColor, name } = props;

  useClick(
    () => setRotationY(current => current + rotationDelta),
    icoSphereRef
  );

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    icoSphereRef
  );

  useBeforeRender((scene) => {
    if (icoSphereRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      icoSphereRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  });

  return (<icoSphere name={name} ref={icoSphereRef} radius={0.2} flat subdivisions={1} position={position}>
    <standardMaterial name={`${name}-mat`} diffuseColor={hovered ? hoveredColor : color} specularColor={Color3.Black()} />
  </icoSphere>);
}

const WithVR = (props) => {

  const [rotationY, setRotationY] = useState(Math.PI);
  const { showIcoSpheres } = props;

  let baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
  return (
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera name='arc' target={new Vector3(0, 1, 0)}
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={2} minZ={0.001} wheelPrecision={50} />

        <directionalLight name='dl' direction={new Vector3(0, -0.5, 0.5)} position={new Vector3(0, 2, 0.5)}>
          <shadowGenerator mapSize={1024} useBlurExponentialShadowMap blurKernel={32} shadowCastChildren>
            {showIcoSpheres &&
              <SpinningIcoSphere name='counterClockwise' position={new Vector3(-0.5, 1, 0)} color={Color3.Yellow()} hoveredColor={Color3.Red()} rpm={5} setRotationY={setRotationY} rotationDelta={0.1} />
            }
            <ScaledModelWithProgress rootUrl={`${baseUrl}BoomBox/glTF/`} sceneFilename='BoomBox.gltf' scaleTo={0.4}
              progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, 1, 0)}
              progressRotation={new Vector3(0, -Math.PI, 0)}
              modelRotation={new Vector3(0, rotationY, 0)}
            />
            {showIcoSpheres &&
              <SpinningIcoSphere name='clockwise' position={new Vector3(0.5, 1, 0)} color={Color3.FromInts(255, 165, 0)} hoveredColor={Color3.Red()} rpm={5} setRotationY={setRotationY} rotationDelta={-0.1} />
            }
          </shadowGenerator>
        </directionalLight>
        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} teleportEnvironmentGround enableInteractions />
        <environmentHelper options={{ enableGroundShadow: true /* true by default */, groundYBias: 1 }} setMainColor={[Color3.FromHexString('#74b9ff')]} />
      </Scene>
    </Engine>
  )
}

export const SimpleVR = () => {
  const [showIcoSpheres, setShowIcoSpheres] = useState(true);
  const toggleShowIcoSpheres = () => {
    setShowIcoSpheres(current => !current);
  };
  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <button onClick={toggleShowIcoSpheres}>Hide/Show IcoSpheres</button>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <WithVR showIcoSpheres={showIcoSpheres} />
      </div>
    </>
  )
};

SimpleVR.story = {
  name: 'VR',
  parameters: {
    notes: {
      markdown: `Click on ICO spheres to rotate ghettoblaster model (clockwise/counter-clockwise).
      
        ##In VR mode
        Use your hand-held controls to click ICO spheres and teleport by clicking on the ground.`
    }
  }
}
