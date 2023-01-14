import { Color3, Color4, Vector3 } from '@babylonjs/core/Maths/math'
import React, { useEffect, useRef, useState } from 'react'
import { Engine, Scene } from 'react-babylonjs'

// insipiration demo: https://www.babylonjs.com/demos/dragndrop/dragdrop.js
const GROUND_SIZE = 1000
const validateDrag = (targetPosition: Vector3) => {
  return Math.max(Math.abs(targetPosition.x), Math.abs(targetPosition.z)) <= GROUND_SIZE / 2 - 10 // should be -15 for torus
}

const DragNDrop = () => {
  const red = useRef(0)
  const [pointLightDiffuse, setPointLightDiffuse] = useState(new Color3(red.current, 0.5, 0.5))

  useEffect(() => {
    const handle = setInterval(() => {
      red.current = (red.current + 0.1) % 1
      setPointLightDiffuse(new Color3(red.current, 0.5, 0.5))
    }, 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <Engine
      antialias
      adaptToDeviceRatio
      engineOptions={{ preserveDrawingBuffer: true, stencil: true }}
      canvasId="babylonJS"
    >
      <Scene clearColor={new Color4(0, 0, 0)}>
        <pointLight name="omni" position={new Vector3(0, 50, 0)} diffuse={pointLightDiffuse} />

        <arcRotateCamera
          name="camera"
          alpha={0}
          beta={0}
          radius={10}
          target={Vector3.Zero()}
          setPosition={[new Vector3(20, 200, 400)]}
          lowerBetaLimit={0.1}
          upperBetaLimit={(Math.PI / 2) * 0.99}
          lowerRadiusLimit={150}
        />

        <ground name="ground" width={GROUND_SIZE} height={GROUND_SIZE} subdivisions={1}>
          <standardMaterial name="groundMat" specularColor={Color3.Black()} />
        </ground>

        <sphere name="red" diameter={20} segments={32} position={new Vector3(-100, 10, 0)}>
          <standardMaterial
            name="redMat"
            diffuseColor={new Color3(0.4, 0.4, 0.4)}
            specularColor={new Color3(0.4, 0.4, 0.4)}
            emissiveColor={Color3.Red()}
          />
          <pointerDragBehavior dragPlaneNormal={new Vector3(0, 1, 0)} validateDrag={validateDrag} />
        </sphere>

        <box name="green" size={20} position={new Vector3(0, 11, -100)}>
          <standardMaterial
            name="greenMat"
            diffuseColor={new Color3(0.4, 0.4, 0.4)}
            specularColor={new Color3(0.4, 0.4, 0.4)}
            emissiveColor={Color3.Green()}
          />
          <pointerDragBehavior dragPlaneNormal={new Vector3(0, 1, 0)} validateDrag={validateDrag} />
        </box>

        <box name="blue" size={20} position={new Vector3(100, 11, 0)}>
          <standardMaterial
            name="greenMat"
            diffuseColor={new Color3(0.4, 0.4, 0.4)}
            specularColor={new Color3(0.4, 0.4, 0.4)}
            emissiveColor={Color3.Blue()}
          />
          <pointerDragBehavior dragPlaneNormal={new Vector3(0, 1, 0)} validateDrag={validateDrag} />
        </box>

        <torus
          name="torus"
          diameter={30}
          thickness={10}
          tessellation={32}
          position={new Vector3(0, 10, 100)}
        >
          <standardMaterial
            name="torusMat"
            diffuseColor={new Color3(0.4, 0.4, 0.4)}
            specularColor={new Color3(0.4, 0.4, 0.4)}
            emissiveColor={Color3.Purple()}
          />
          <pointerDragBehavior dragPlaneNormal={new Vector3(0, 1, 0)} validateDrag={validateDrag} />
        </torus>
      </Scene>
    </Engine>
  )
}

export default DragNDrop
