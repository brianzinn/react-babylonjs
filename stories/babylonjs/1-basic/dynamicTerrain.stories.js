import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import '@babylonjs/inspector'
import {
  Engine, Scene, dynamicTerrain
} from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math'
import { StandardMaterial as StandardMaterialJ } from '@babylonjs/core/Materials'
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
    this.sceneFromRef = React.createRef()
    this.setTerrainRef = element => {
      const dynamicTerrain = element.hostInstance;
      dynamicTerrain.mesh.position.z = 0

      let terrainMaterial = new StandardMaterialJ('tm', this.scene)
      terrainMaterial.diffuseColor = Color3.Green()
      terrainMaterial.wireframe = true;

      console.log('scene from ref', this.sceneFromRef.current, this.sceneFromRef)

      // TODO: add 'assignTo' prop
      dynamicTerrain.mesh.material = terrainMaterial
    };

    this.scene = null
    this.onSceneMount = this.onSceneMount.bind(this)
  }

  onSceneMount (e) {
    this.scene = e.scene
  }

  render () {
    return (
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene ref={this.sceneFromRef} clearColor={new Color4(0.2, 0.4, 0.75, 1.0)} onSceneMount={this.onSceneMount} >
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
          <freeCamera name='camera1' position={new Vector3(-50, 10, 0)} setTarget={[new Vector3(-20, 0, 0)]} />
          <dynamicTerrain ref={this.setTerrainRef} name='ContinuousTerrain' mapData={getMapData()} mapSubX={xSize} mapSubZ={zSize} terrainSub={subSize} position={new Vector3(0, 0, 0)} />
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
