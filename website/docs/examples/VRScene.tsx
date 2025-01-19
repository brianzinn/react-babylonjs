import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react'
import { Engine, Scene, useBeforeRender, useClick, useHover } from 'react-babylonjs'
import ScaledModelWithProgress from './ScaledModelWithProgress'

type SpinningIcoSphereProps = {
  setRotationY: Dispatch<SetStateAction<number>>
  rotationDelta: number
  rpm: number
  position: Vector3
  color: Color3
  hoveredColor: Color3
  name: string
}

const SpinningIcoSphere: FC<SpinningIcoSphereProps> = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements
  const icoSphereRef = useRef<Mesh>(null)

  const { setRotationY, rotationDelta, rpm, position, color, hoveredColor, name } = props

  useClick(() => setRotationY((current) => current + rotationDelta), icoSphereRef)

  const [hovered, setHovered] = useState(false)
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    icoSphereRef
  )

  useBeforeRender((scene) => {
    if (icoSphereRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime()
      icoSphereRef.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  })

  return (
    <icoSphere
      name={name}
      ref={icoSphereRef}
      radius={0.2}
      flat
      subdivisions={1}
      position={position}
    >
      <standardMaterial
        name={`${name}-mat`}
        diffuseColor={hovered ? hoveredColor : color}
        specularColor={Color3.Black()}
      />
    </icoSphere>
  )
}

type WithVRProps = {
  showIcoSpheres: boolean
}

const WithVR: FC<WithVRProps> = (props) => {
  const [rotationY, setRotationY] = useState(Math.PI)
  const { showIcoSpheres } = props

  let baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
  return (
    <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
      <Scene>
        <arcRotateCamera
          name="arc"
          target={new Vector3(0, 1, 0)}
          alpha={-Math.PI / 2}
          beta={0.5 + Math.PI / 4}
          radius={2}
          minZ={0.001}
          wheelPrecision={50}
        />

        <directionalLight
          name="dl"
          direction={new Vector3(0, -0.5, 0.5)}
          position={new Vector3(0, 2, 0.5)}
        >
          <shadowGenerator
            mapSize={1024}
            useBlurExponentialShadowMap
            blurKernel={32}
            shadowCastChildren
          >
            {showIcoSpheres && (
              <SpinningIcoSphere
                name="counterClockwise"
                position={new Vector3(-0.5, 1, 0)}
                color={Color3.Yellow()}
                hoveredColor={Color3.Red()}
                rpm={5}
                setRotationY={setRotationY}
                rotationDelta={0.1}
              />
            )}
            <ScaledModelWithProgress
              rootUrl={`${baseUrl}BoomBox/glTF/`}
              sceneFilename="BoomBox.gltf"
              scaleTo={0.4}
              progressBarColor={Color3.FromInts(255, 165, 0)}
              center={new Vector3(0, 1, 0)}
              progressRotation={new Vector3(0, -Math.PI, 0)}
              modelRotation={new Vector3(0, rotationY, 0)}
            />
            {showIcoSpheres && (
              <SpinningIcoSphere
                name="clockwise"
                position={new Vector3(0.5, 1, 0)}
                color={Color3.FromInts(255, 165, 0)}
                hoveredColor={Color3.Red()}
                rpm={5}
                setRotationY={setRotationY}
                rotationDelta={-0.1}
              />
            )}
          </shadowGenerator>
        </directionalLight>
        <vrExperienceHelper
          webVROptions={{ createDeviceOrientationCamera: false }}
          enableInteractions
        />
        <environmentHelper
          options={{
            enableGroundShadow: true /* true by default */,
            groundYBias: 1,
          }}
          setMainColor={[Color3.FromHexString('#74b9ff')]}
        />
      </Scene>
    </Engine>
  )
}

const SimpleVR = () => {
  const [showIcoSpheres, setShowIcoSpheres] = useState(true)
  const toggleShowIcoSpheres = () => {
    setShowIcoSpheres((current) => !current)
  }
  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <button className="btn btn-primary" onClick={toggleShowIcoSpheres}>
          Hide/Show IcoSpheres
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <WithVR showIcoSpheres={showIcoSpheres} />
      </div>
    </>
  )
}

export default SimpleVR
