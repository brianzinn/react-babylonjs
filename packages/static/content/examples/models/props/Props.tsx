import { ActionManager, SetValueAction } from '@babylonjs/core/Actions'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
// import "@babylonjs/inspector";
import React, { FC, Suspense, useState } from 'react'
import { Engine, ILoadedModel, Model, Scene } from 'react-babylonjs'

import ScaledModelWithProgress from '../../ScaledModelWithProgress'

const WithModel: FC = () => {
  const [avocadoYPos, setAvocadoYPos] = useState(-1.5)
  const [avocadoScaling, setAvocadoScaling] = useState(3.0)

  console.log('rendering', avocadoScaling)

  const moveAvocadoDown = () => setAvocadoYPos(avocadoYPos - 0.5)

  const moveAvocadoUp = () => setAvocadoYPos(avocadoYPos + 0.5)

  const increaseAvocadoSize = () => setAvocadoScaling(avocadoScaling + 0.1)

  const decreaseAvocadoSize = () => {
    console.log('decreasing', avocadoScaling)
    setAvocadoScaling(avocadoScaling - 0.1)
  }

  const onModelLoaded = (model: ILoadedModel): void => {
    if (!model.meshes) {
      throw new Error('model.meshes not set')
    }
    let mesh = model.meshes[1]
    mesh.actionManager = new ActionManager(mesh._scene)
    mesh.actionManager.registerAction(
      new SetValueAction(ActionManager.OnPointerOverTrigger, mesh.material, 'wireframe', true)
    )
    mesh.actionManager.registerAction(
      new SetValueAction(ActionManager.OnPointerOutTrigger, mesh.material, 'wireframe', false)
    )
  }

  let baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
  return (
    <>
      <div className="row">
        <div className="col-12">
          <button onClick={decreaseAvocadoSize} className="btn btn-primary">
            -
          </button>

          <button onClick={moveAvocadoUp} className="btn btn-primary m-2">
            up
          </button>
          <button onClick={moveAvocadoDown} className="btn btn-primary m-2">
            down
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
            <Scene>
              <arcRotateCamera
                name="camera1"
                alpha={Math.PI / 2}
                beta={Math.PI / 2}
                radius={9.0}
                target={Vector3.Zero()}
                minZ={0.001}
              />
              <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />

              <ScaledModelWithProgress
                rootUrl={`${baseUrl}BoomBox/glTF/`}
                sceneFilename="BoomBox.gltf"
                scaleTo={3}
                progressBarColor={Color3.FromInts(255, 165, 0)}
                center={new Vector3(2.5, 0, 0)}
                onModelLoaded={onModelLoaded}
              />

              <Suspense
                fallback={<box name="fallback" position={new Vector3(-2.5, avocadoYPos, 0)} />}
              >
                <Model
                  name="avocado"
                  rootUrl={`${baseUrl}Avocado/glTF/`}
                  sceneFilename="Avocado.gltf"
                  scaleToDimension={avocadoScaling}
                  position={new Vector3(-2.5, avocadoYPos, 0)}
                />
              </Suspense>
            </Scene>
          </Engine>
        </div>
      </div>
    </>
  )
}

const ModelStory = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <WithModel />
  </div>
)

export default ModelStory
