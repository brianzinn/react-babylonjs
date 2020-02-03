import React, { useCallback } from 'react'
import { storiesOf } from '@storybook/react'
import '@babylonjs/inspector'
import { Engine, Scene } from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3, CSG, Mesh } from '@babylonjs/core'
import * as Earcut from 'earcut';
import "@babylonjs/core/Meshes/meshBuilder";
import '../../style.css'

//Polygon shape in XoZ plane
var starPath = [ 
    new Vector3(4, 0, -4), 
    new Vector3(2, 0, 0), 
    new Vector3(5, 0, 2), 
    new Vector3(1, 0, 2), 
    new Vector3(-5, 0, 5), 
    new Vector3(-3, 0, 1), 
    new Vector3(-4, 0, -4), 
    new Vector3(-2, 0, -3), 
    new Vector3(2, 0, -3)
];

//Holes in XoZ plane
var holes = [
    [
        new Vector3(1, 0, -1),
        new Vector3(1.5, 0, 0),
        new Vector3(1.4, 0, 1),
        new Vector3(0.5, 0, 1.5)
    ], [
        new Vector3(0, 0, -2),
        new Vector3(0.5, 0, -1),
        new Vector3(0.4, 0, 0),
        new Vector3(-1.5, 0, 0.5)
    ]
];

const Shapes = () => {
    const ref = useCallback(node => {
        if (node) {
            console.log(node);
            console.log(node.hostInstance.constructor, typeof node.hostInstance)
            console.log(Mesh.constructor, typeof Mesh)
            console.log(node.hostInstance instanceof Mesh)
            // const csg = CSG.FromMesh(node.hostInstance);
        }
    }, []);
    
    return (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene>
                <arcRotateCamera name='camera1' alpha={1/4 * Math.PI} beta={1/4 * Math.PI} radius={20.0} target={Vector3.Zero()} minZ={0.001} />
                <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
                <extrudePolygon
                    ref={ref}
                    name='wall'
                    holes={holes}
                    shape={starPath}
                    depth={2}
                    sideOrientation= {Mesh.DOUBLESIDE}
                    earcutInjection={Earcut}
                >
                    <standardMaterial name='starMaterial' diffuseColor={Color3.Green()} specularColor={Color3.Black()} />
                </extrudePolygon>
            </Scene>
        </Engine>
    )
}

export default storiesOf('Babylon Basic', module)
  .add('Shapes', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <Shapes />
    </div>
  ))