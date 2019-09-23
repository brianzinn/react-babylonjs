import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import 'babylonjs-inspector'
import {
  Engine, Scene, FreeCamera, DynamicTerrain, HemisphericLight
} from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3, Color4, StandardMaterial as StandardMaterialJ } from 'babylonjs'
import '../../style.css'

const xSize = 500
const zSize = 500
const subSize = 100

const getMapData = () => {
  let mapSubX = xSize
  let mapSubZ = zSize

  // map creation
  let mapData = new Float32Array(mapSubX * mapSubZ * 3)
  for (var l = 0; l < mapSubZ; l++) {
    for (var w = 0; w < mapSubX; w++) {
      mapData[3 * (l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0
      mapData[3 * (l * mapSubX + w) + 1] = w / (l + 1) * Math.sin((l + 1) / 2) * Math.cos(w / 2) * 2.0
      mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0
    }
  }
  return mapData
}

export class WithDynamicTerrain extends Component {
  constructor (props) {
    super(props)
    this.scene = null
    this.onSceneMount = this.onSceneMount.bind(this)
  }

  onSceneMountTerrain (e) {
    e.mesh.position.z = 0
    let terrainMaterial = new StandardMaterialJ('tm', this.scene)
    terrainMaterial.diffuseColor = Color3.Green()
    e.mesh.material = terrainMaterial
    e.mesh.material.wireframe = true
  }

  onSceneMount (e) {
    // const { scene, canvas } = e
    const { scene } = e
    this.scene = scene
    /*
    scene.beforeCameraRender = (e) => {
    }

    scene.debugLayer.show()
    */
  }

  render () {
    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene clearColor={new Color4(0.2, 0.4, 0.75, 1.0)} onSceneMount={this.onSceneMount} >
          <HemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
          <FreeCamera name='camera1' position={new Vector3(-1, 0, 0)} setTarget={[Vector3.Zero()]} />
          <DynamicTerrain intializedCallback={this.onSceneMountTerrain} name='ContinuousTerrain' mapData={getMapData()} mapSubX={xSize} mapSubZ={zSize} terrainSub={subSize} position={new Vector3(0, 0, 0)} />
        </Scene>
      </Engine>
    )
  }
}

export default storiesOf('Babylon Basic', module)
  .addWithJSX('Dynamic Terrain', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <WithDynamicTerrain />
    </div>
  ))
