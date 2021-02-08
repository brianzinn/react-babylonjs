import assert from 'assert';
import sinon, { SinonStub, SinonSpy } from 'sinon';
import { Fiber } from 'react-reconciler';
import { CreatedInstance } from '../src/CreatedInstance';
import renderer, { Container } from '../src/ReactBabylonJSHostConfig';
import { Engine, NullEngine, Scene } from '@babylonjs/core';
import { NodeLifecycleListener } from './customHosts';

describe(' > Reconciler tests', function testSuite() {

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

  it('Create box missing required "name" property should log a warning', async function test() {
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
    assert.ok(true);
    renderer.createInstance('box', {
      // name: 'box', required constructor argument - not supplied.
      size: 6
    }, container, container, null as any as Fiber);

    const logger = console.warn as SinonSpy;
    assert.strictEqual(logger.callCount, 1, 'console.warn called once.');
    const [actual] = logger.firstCall.args;
    assert.deepStrictEqual(actual, "On box you are missing a non-optional parameter 'name' of type 'string'")
  });

  it('Create box missing required "name" property should log a warning', async function test() {
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
    assert.ok(true);
    renderer.createInstance('box', {
      name: 'box',
      size: 6
    }, container, container, null as any as Fiber);

    const logger = console.warn as SinonSpy;
    assert.ok(logger.notCalled, 'console.warn should not be called.');
  });

  it('Create box (Mesh) should be assigned NodeLifecycleListener', async function test() {
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
    assert.ok(true);
    const createdInstance: CreatedInstance<any> | undefined = renderer.createInstance('box', {
      // name: 'box', required constructor argument - not supplied.
      size: 6
    }, container, container, null as any as Fiber);

    assert.notStrictEqual(createdInstance, undefined);
    assert.notStrictEqual(createdInstance!.lifecycleListener, undefined);
    assert.ok(createdInstance?.lifecycleListener instanceof NodeLifecycleListener, `expecting node lifecycle listener: ${createdInstance?.lifecycleListener}`);
  });
});