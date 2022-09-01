import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { Camera } from '@babylonjs/core/Cameras/camera'
import { Engine } from '@babylonjs/core/Engines/engine'
import { NullEngine } from '@babylonjs/core/Engines/nullEngine'
import { EffectLayer } from '@babylonjs/core/Layers/effectLayer'
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import '@babylonjs/core/Rendering/boundingBoxRenderer'
import { Scene } from '@babylonjs/core/scene'
import assert from 'assert'
import React, { ReactElement } from 'react'
import sinon from 'sinon'
import { SceneContext } from '../src/hooks/scene'
import { CustomPropsHandler, PropChangeType } from '../src/PropsHandler'
import { Container } from '../src/ReactBabylonJSHostConfig'
import { createReconciler, ReconcilerInstance } from '../src/render'

describe(' > Reconciler/Render tests', function testSuite() {
  let engine: Engine

  beforeEach(() => {
    // const stubBabylonCore = sinon.stub(require('@babylonjs/core'));
    sinon.spy(console, 'log')
    sinon.spy(console, 'warn')
    sinon.spy(console, 'error')

    engine = new NullEngine({
      renderHeight: 256,
      renderWidth: 256,
      textureSize: 256,
      deterministicLockstep: false,
      lockstepMaxSteps: 1,
    })
  })

  afterEach(async function afterEach() {
    sinon.restore()
  })

  const getRootContainerInstance = (): Container => {
    const scene = new Scene(engine)
    const container: Container = {
      scene,
      rootInstance: {
        children: [],
        customProps: {},
        hostInstance: scene,
        metadata: {
          className: 'root',
        },
        observers: {},
        parent: null,
      },
    }
    return container
  }

  const doRender = (
    reconciler: ReconcilerInstance,
    sceneGraph: ReactElement<any>,
    container: Container
  ): Promise<boolean> => {
    console.log('calling render')
    const renderPromisified = new Promise<boolean>((resolve, reject) => {
      const handle = setTimeout(() => {
        reject('took too long')
      }, 1000)
      reconciler.render(
        sceneGraph,
        container,
        () => {
          clearTimeout(handle)
          resolve(true)
        },
        null
      )
    })
    return renderPromisified
  }

  it('Should create a basic scene with a box.', async function test() {
    const container: Container = getRootContainerInstance()
    const reconciler: ReconcilerInstance = createReconciler({})

    const sceneGraph = (
      <SceneContext.Provider
        value={{
          scene: container.scene,
          sceneReady: true,
        }}
      >
        <arcRotateCamera
          name="camera1"
          alpha={0}
          beta={Math.PI / 3}
          radius={10}
          target={Vector3.Zero()}
        />
        <hemisphericLight name="light1" direction={Vector3.Up()} />
        <box name="box" size={2} position={new Vector3(0, 1.2, 0)}>
          <standardMaterial name="boxMat" />
        </box>
      </SceneContext.Provider>
    )

    const result = await doRender(reconciler, sceneGraph, container)
    assert.strictEqual(result, true, 'render callback should have returned true')
    assert.ok(container.scene !== null, 'scene should be non-null')
    const box: AbstractMesh | undefined = container.scene.meshes.find((m) => m.name === 'box')
    assert.ok(
      box !== undefined,
      `Expected to find 'box', but found only '${container.scene.meshes
        .map((m) => m.name)
        .join(',')}'`
    )
    assert.ok(box.material !== null, 'Box material should be non-null')
    assert.strictEqual('boxMat', box.material.name)
  })

  it('Should transform registered Vector3 conversion from array.', async function test() {
    class CustomVector3ArrayHandler {
      get name() {
        return `test:Vector3Array`
      }

      get propChangeType() {
        return PropChangeType.Vector3
      }

      accept(newProp) {
        // console.log('Vector3: newProp:', newProp, Array.isArray(newProp));
        return Array.isArray(newProp)
      }

      process(oldProp, newProp) {
        if (oldProp === undefined || oldProp.length !== newProp.length) {
          // console.log(`found diff length (${oldProp?.length}/${newProp?.length}) Color3Array new? ${oldProp === undefined}`)
          return {
            processed: true,
            value: Vector3.FromArray(newProp),
          }
        }

        for (let i = 0; i < oldProp.length; i++) {
          if (oldProp[i] !== newProp[i]) {
            // console.log('found difference...', oldProp, newProp);
            return {
              processed: true,
              value: Vector3.FromArray(newProp),
            }
          }
        }

        // console.log('not processed...');
        return { processed: false, value: null }
      }
    }
    CustomPropsHandler.RegisterPropsHandler(new CustomVector3ArrayHandler())

    const container: Container = getRootContainerInstance()
    const reconciler: ReconcilerInstance = createReconciler({})

    const sceneGraph = (
      <SceneContext.Provider
        value={{
          scene: container.scene,
          sceneReady: true,
        }}
      >
        <arcRotateCamera
          name="camera1"
          alpha={0}
          beta={Math.PI / 3}
          radius={10}
          target={[0, 1, 0] as any as Vector3}
        />
        <hemisphericLight name="light1" direction={Vector3.Up()} />
        <box name="box" size={2} position={new Vector3(0, 1.2, 0)}>
          <standardMaterial name="boxMat" />
        </box>
      </SceneContext.Provider>
    )

    const result = await doRender(reconciler, sceneGraph, container)
    assert.strictEqual(result, true, 'render callback should have returned true')

    assert.ok(container.scene !== null, 'scene should be non-null')

    const camera: Camera | undefined = container.scene.cameras.find((c) => c.name === 'camera1')
    assert.ok(
      camera !== undefined,
      `Camera 'camera1' should be defined.  Found: '${container.scene.cameras
        .map((c) => c.name)
        .join(',')}'`
    )
    assert.ok(camera instanceof ArcRotateCamera, 'Should be ArcRotateCamera')
    assert.ok(Vector3.Up().equals(camera.target), 'should be the same as Vector3.Up')
  })

  it('GlowLayer should include children to inclusion list (when configured).', async function test() {
    const container: Container = getRootContainerInstance()
    const reconciler: ReconcilerInstance = createReconciler({})

    const sceneGraph = (
      <SceneContext.Provider
        value={{
          scene: container.scene,
          sceneReady: true,
        }}
      >
        <arcRotateCamera
          name="camera1"
          alpha={0}
          beta={Math.PI / 3}
          radius={10}
          target={Vector3.Zero()}
        />
        <hemisphericLight name="light1" direction={Vector3.Up()} />
        <glowLayer name="glow1" addIncludeOnlyChildren>
          <box name="box" size={2} position={new Vector3(0, 1.2, 0)}>
            <standardMaterial name="boxMat" />
          </box>
        </glowLayer>
      </SceneContext.Provider>
    )

    const result = await doRender(reconciler, sceneGraph, container)
    assert.strictEqual(result, true, 'render callback should have returned true')

    assert.ok(container.scene !== null, 'scene should be non-null')
    const box: AbstractMesh | undefined = container.scene.meshes.find((m) => m.name === 'box')
    assert.ok(
      box !== undefined,
      `box should be found: '${container.scene.meshes.map((m) => m.name).join(',')}'`
    )

    const effectLayers: EffectLayer[] = container.scene.effectLayers
    assert.strictEqual(1, effectLayers.length, 'glow layer should be part of scene')
    assert.ok(effectLayers[0] instanceof GlowLayer)

    const glowLayer: GlowLayer = effectLayers[0] as GlowLayer
    assert.ok(glowLayer.hasMesh(box))
    assert.strictEqual((glowLayer as any)._includedOnlyMeshes.length, 1)
    assert.strictEqual((glowLayer as any)._includedOnlyMeshes[0], box.uniqueId)
  })
})
