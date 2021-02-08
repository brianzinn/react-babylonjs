import assert from 'assert';
import sinon, { SinonStub, SinonSpy } from 'sinon';
import { Fiber } from 'react-reconciler';
import { CreatedInstance, CustomProps } from '../src/CreatedInstance';
import renderer, { Container } from '../src/ReactBabylonJSHostConfig';
import { Engine, NullEngine, Scene } from '@babylonjs/core';
import { FallbackLifecycleListener, NodeLifecycleListener } from '../src/customHosts';

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

  it('Create box missing required "name" property should log a warning', async function test() {
    const container = getRootContainerInstance();

    renderer.createInstance('box', {
      // name: 'box', required constructor argument - not supplied.
      size: 6
    }, container, null as any as Container, null as any as Fiber);

    const logger = console.warn as SinonSpy;
    assert.strictEqual(logger.callCount, 1, 'console.warn called once.');
    const [actual] = logger.firstCall.args;
    assert.deepStrictEqual(actual, "On box you are missing a non-optional parameter 'name' of type 'string'")
  });

  it('Create box with required "name" property should not log warnings', async function test() {
    const container = getRootContainerInstance();

    renderer.createInstance('box', {
      name: 'box',
      size: 6
    }, container, null as any as Container, null as any as Fiber);

    const logger = console.warn as SinonSpy;
    assert.ok(logger.notCalled, 'console.warn should not be called.');
  });

  it('Create box (Mesh) should be assigned NodeLifecycleListener', async function test() {
    const container = getRootContainerInstance();

    const createdInstance: CreatedInstance<any> | undefined = renderer.createInstance('box', {
      name: 'box',
      size: 6
    }, container, null as any as Container, null as any as Fiber);

    assert.notStrictEqual(createdInstance, undefined);
    assert.notStrictEqual(createdInstance!.lifecycleListener, undefined);
    assert.ok(createdInstance?.lifecycleListener instanceof NodeLifecycleListener, `expecting node lifecycle listener: ${createdInstance?.lifecycleListener}`);
  });

  it('Create "assignFrom" should defer construction and included delayed creation props', async function test() {
    const container = getRootContainerInstance();

    const createdInstance: CreatedInstance<any> | undefined = renderer.createInstance('pbrClearCoatConfiguration', {
      assignFrom: 'clearCoat',
      isEnabled: true,
      roughness: 1
    }, container, null as any as Container, null as any as Fiber);

    assert.notStrictEqual(createdInstance, undefined);
    const customProps: CustomProps = createdInstance!.customProps;
    assert.strictEqual(customProps.assignFrom, 'clearCoat', "should set where to assign from to CustomProps");
    assert.strictEqual(customProps.disposeInstanceOnUnmount, false, "should not automatically dispose when using 'assignFrom'");

    assert.strictEqual(createdInstance!.deferredCreationProps?.isEnabled, true, "should have isEnabled as a deferred creation prop");
    assert.strictEqual(createdInstance!.deferredCreationProps?.roughness, 1, "should have roughness as a deferred creation prop");

    assert.notStrictEqual(createdInstance!.lifecycleListener, undefined);
    assert.ok(createdInstance?.lifecycleListener instanceof FallbackLifecycleListener, `expecting fallback lifecycle listener to ensure deferred creation props are assigned`);
  });
});