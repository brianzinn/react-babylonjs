import assert from 'assert';
import sinon, { SinonSpy } from 'sinon';
import { Fiber } from 'react-reconciler';
import { CreatedInstance, CustomProps } from '../src/CreatedInstance';
import renderer, { Container } from '../src/ReactBabylonJSHostConfig';
import { Engine, FreeCamera, Mesh, NullEngine, PBRMaterial, Scene, StandardMaterial, Vector3 } from '@babylonjs/core';
import { CameraLifecycleListener, FallbackLifecycleListener, NodeLifecycleListener } from '../src/customHosts';
import { PBRClearCoatConfiguration } from '@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration';

describe(' > Reconciler tests', function testSuite() {

  /**
   * We use the NullEngine, which doesn't render screenshots.
   */
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
        hostInstance: scene,
        metadata: {
          className: 'root'
        },
        observers: {},
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

  it('assignFrom should attach properly to parent property and assign deferred props (ie: without a prop update or re-render)', async function test() {
    const container = getRootContainerInstance();

    const pbrClearCoatConfiguration: CreatedInstance<PBRClearCoatConfiguration> | undefined = renderer.createInstance('pbrClearCoatConfiguration', {
      assignFrom: 'clearCoat',
      isEnabled: true,
      roughness: 0.9
    }, container, null as any as Container, null as any as Fiber);

    const pbrMaterial: CreatedInstance<PBRMaterial> | undefined = renderer.createInstance('pbrMaterial', {
      name: 'material'
    }, container, null as any as Container, null as any as Fiber);

    assert.strictEqual(pbrMaterial.hostInstance.clearCoat.isEnabled, false, "ClearCoat is not enabled by default");
    assert.strictEqual(pbrMaterial.hostInstance.clearCoat.roughness, 0, 'clear coat layer roughness is 0 by default');

    renderer.appendChild(pbrMaterial, pbrClearCoatConfiguration);

    assert.ok(pbrMaterial.hostInstance.clearCoat.isEnabled, "ClearCoat should be enabled from 'assignFrom' host element");
    assert.strictEqual(pbrMaterial.hostInstance.clearCoat.roughness, 0.9, 'clear coat layer roughness should update to host element from delayed props assignment');
  })

  it('targetable Camera should be locked to target when specified.', async function test() {
      const container = getRootContainerInstance();
  
      const box1: CreatedInstance<any> | undefined = renderer.createInstance('box', {
        name: 'box1',
        size: 6
      }, container, null as any as Container, null as any as Fiber);

      const freeCamera: CreatedInstance<FreeCamera> | undefined = renderer.createInstance('freeCamera', {
        name: 'freeCamera',
        position: Vector3.Zero(),
        lockedTargetMeshName: 'box1'
      }, container, null as any as Container, null as any as Fiber);

      assert.notStrictEqual(freeCamera!.lifecycleListener, undefined);
      assert.ok(freeCamera?.lifecycleListener instanceof CameraLifecycleListener, `expecting camera lifecycle listener (that does targeting in onMount)`);
      assert.strictEqual(freeCamera.metadata.isTargetable, true, "isTargetable should be set true (when propsHandlers is)");

      // targetCamera.lockedTarget
      assert.notStrictEqual(undefined, freeCamera.hostInstance.lockedTarget, "should have a locked target assigned already (TargetPropsHandler called by renderer on creation)");

      // Not needed - it will be assigned automatically.
      // freeCamera.lifecycleListener.onMount(freeCamera);
      assert.strictEqual(freeCamera.hostInstance.lockedTarget, box1.hostInstance, "lockedTarget should match ");
      // NOTE: there is no scene observable, if the target is added "after" by name.
  })

  it('removing from rootContainer should remove recursively child nodes.', async function test() {
    const container = getRootContainerInstance();

    const box: CreatedInstance<Mesh> = renderer.createInstance('box', {
      name: 'box',
      size: 6
    }, container, null as any as Container, null as any as Fiber)!;

    const sphere: CreatedInstance<Mesh> = renderer.createInstance('sphere', {
      name: 'sphere',
    }, container, null as any as Container, null as any as Fiber)!;

    const standardMaterial: CreatedInstance<StandardMaterial> = renderer.createInstance('standardMaterial', {
      name: 'boxMaterial'
    }, container, null as any as Container, null as any as Fiber)!;

    const ground: CreatedInstance<Mesh> = renderer.createInstance("ground", {
      name: 'ground'
    }, container, null as any as Container, null as any as Fiber)!;

    renderer.appendInitialChild(box, standardMaterial);
    assert.strictEqual(1, box.children.length, 'box should have 1 child (material)');
    renderer.appendInitialChild(ground, sphere);
    renderer.appendInitialChild(ground, box);

    assert.strictEqual(2, ground.children.length, 'ground should have 2 children (box + sphere)')
    renderer.appendChildToContainer(container, ground);

    assert.strictEqual(3, container.scene.meshes.length, 'box + ground + sphere = 3 meshes');
    renderer.removeChildFromContainer(container, ground);

    assert.strictEqual(0, container.scene.meshes.length, 'box and sphere should also both be removed (they are "children")');
  });

});