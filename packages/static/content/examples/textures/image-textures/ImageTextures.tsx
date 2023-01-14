// import "@babylonjs/inspector";
import { TextureAssetTask } from '@babylonjs/core'
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import React, { FC, Suspense, useState } from 'react'
import { Engine, Scene, Task, TaskType, useAssetManager } from 'react-babylonjs'

const textureAssets: Task[] = [
  {
    taskType: TaskType.Texture,
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png',
    name: 'malamute',
  },
  {
    taskType: TaskType.Texture,
    url: '../../assets/textures/grass.png',
    name: 'grass',
  },
  {
    taskType: TaskType.Texture,
    url: 'http://i.imgur.com/wGyk6os.png',
    name: 'bump',
  },
]

type ShapesType = {
  showBumpSphere: true
}

const Shapes: FC<ShapesType> = ({ showBumpSphere }) => {
  const assetManagerResult = useAssetManager(textureAssets, {
    useDefaultLoadingScreen: true,
  })

  return (
    <>
      <sphere name="sphere" position={new Vector3(-1.5, 0, 0)}>
        <standardMaterial name="grass">
          <texture
            fromInstance={(assetManagerResult.taskNameMap['grass'] as TextureAssetTask).texture}
            assignTo="emissiveTexture"
          />
        </standardMaterial>
      </sphere>
      <box name="box">
        <standardMaterial name="dog" backFaceCulling={false}>
          <texture
            fromInstance={(assetManagerResult.taskNameMap['malamute'] as TextureAssetTask).texture}
            assignTo="diffuseTexture"
            hasAlpha={true}
          />
        </standardMaterial>
      </box>
      {showBumpSphere && (
        <sphere name="sphere" position={new Vector3(1.5, 0, 0)}>
          <standardMaterial name="bump" diffuseColor={Color3.Green()}>
            <texture
              fromInstance={(assetManagerResult.taskNameMap['bump'] as TextureAssetTask).texture}
              assignTo="bumpTexture"
            />
          </standardMaterial>
        </sphere>
      )}
    </>
  )
}

/**
 * official examples
 * - https://www.babylonjs-playground.com/#YDO1F#75
 * - https://www.babylonjs-playground.com/#20OAV9#15
 */
const Textures = () => {
  const [showBumpSphere, setShowBumpSphere] = useState(true)

  const toggleShowBumpSphere = () => {
    setShowBumpSphere((cur) => !cur)
  }

  return (
    <>
      <div style={{ flex: 1, display: 'flex' }}>
        <button onClick={toggleShowBumpSphere}>Hide Bump Sphere</button>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene clearColor={new Color4(0.02, 0.022, 0.02, 1)}>
            <arcRotateCamera
              name="Camera"
              alpha={(3 * Math.PI) / 2}
              beta={Math.PI / 2}
              radius={5}
              target={Vector3.Zero()}
            />

            <hemisphericLight
              name="light1"
              direction={Vector3.Up()}
              intensity={0.7}
              diffuse={Color3.Red()}
              specular={Color3.Green()}
              groundColor={Color3.Green()}
            />
            <Suspense fallback={null}>
              <Shapes showBumpSphere={showBumpSphere} />
            </Suspense>
          </Scene>
        </Engine>
      </div>
    </>
  )
}

export default Textures
