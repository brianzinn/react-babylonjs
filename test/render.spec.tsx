import React from 'react';
import { AbstractMesh, Color4, Engine, NullEngine, Scene, Vector3 } from "@babylonjs/core";
import sinon from "sinon";
import assert from 'assert';

import { Container } from "../src/ReactBabylonJSHostConfig";
import { createReconciler, ReconcilerInstance } from '../src/render';
import { SceneContext } from '../src/hooks/scene';

describe(' > Reconciler/Render tests', function testSuite() {

  let engine: Engine;

  beforeEach(() => {
    // const stubBabylonCore = sinon.stub(require('@babylonjs/core'));
    sinon.spy(console, 'log');
    sinon.spy(console, 'warn');
    sinon.spy(console, 'error');

    engine = new NullEngine({
      renderHeight: 256,
      renderWidth: 256,
      textureSize: 256,
      deterministicLockstep: false,
      lockstepMaxSteps: 1
    });
  });

  afterEach(async function afterEach() {
    sinon.restore();
  });

  const getRootContainerInstance = (): Container => {
    const scene = new Scene(engine);
    const container: Container = {
      scene,
      rootInstance: {
        children: [],
        customProps: {},
        metadata: {
          className: 'root'
        },
        parent: null,
      }
    }
    return container;
  }

  it('Should create a basic scene with a box.', async function test() {
    const container: Container = getRootContainerInstance();
    const reconciler: ReconcilerInstance = createReconciler({});

    const sceneGraph = (
      <SceneContext.Provider value={{
        scene: container.scene,
        sceneReady: true
      }}>
          <arcRotateCamera name='camera1' alpha={0} beta={Math.PI / 3} radius={10} target={Vector3.Zero()} />
          <hemisphericLight name='light1' direction={Vector3.Up()} />
          <box
            name="box"
            size={2}
            position={new Vector3(0, 1.2, 0)}
          >
            <standardMaterial name='boxMat' />
          </box>
      </SceneContext.Provider>
    )
    reconciler.render(sceneGraph, container, () => { /* empty for now */ }, null)

    const box: AbstractMesh | undefined = container.scene.meshes.find(m => m.name === 'box');
    assert.ok(box !== undefined)
    assert.strictEqual('boxMat', box.material.name);

    
  })
})