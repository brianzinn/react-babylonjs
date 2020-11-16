import React, { Suspense, useState, useMemo, useRef, useLayoutEffect } from 'react';
import { Engine, Scene, useAssetManager, TaskType, useBeforeRender } from '../../../dist/react-babylonjs';
import { Vector3, Color4, Color3, Axis } from '@babylonjs/core';
import '../../style.css';

export default { title: 'Hooks' };

// redeclaring array will force load the asset (not deep equality check on by reference)
const pointCloudAssets = [{ taskType: TaskType.Binary, url: 'assets/kitti/000000.bin', name: 'Velodyne-kitt-dataset' }];

const MyPCS = () => {
  const pcsRef = useRef(null);
  const [result] = useAssetManager(pointCloudAssets);
  const [pcs, setPcs] = useState(null);
  const [pcsMesh, setPcsMesh] = useState(null);

  useLayoutEffect(() => {
    if (pcsRef.current) { // only loaded after suspend returns
      setPcs(pcsRef.current);
    }
  }, [pcsRef]);

  useMemo(() => {
    if (result && pcs) {
      const floats = new Float32Array(result.tasks[0].data);
      const POINTS_PER_FLOAT = 4;
      const numPoints = floats.length / POINTS_PER_FLOAT;

      // particle is the current particle, the i-th one in the PCS and the s-th one in its group
      const particleFunc = (particle, i, s) => {
        // KITTI-formatted PCD
        const x = floats[POINTS_PER_FLOAT * i]
        const y = floats[POINTS_PER_FLOAT * i + 1]
        const z = floats[POINTS_PER_FLOAT * i + 2]
        particle.position = new Vector3(x, y, z)
        particle.color = Color4.FromColor3(Color3.White())
      }

      // NOTE: you can do with useRef/useState <pointsCloudSystem ... addPoints={[nbPoints, particleFunc]} />
      //       but you don't know WHEN the reconciler will commit those changes and add the points...
      pcs.addPoints(numPoints, particleFunc);
      pcs.buildMeshAsync(() => {
        setPcsMesh(pcs.mesh);
      })
    }
  }, [result, pcsRef.current])

  return <pointsCloudSystem ref={pcsRef} name='my-points-cloud' pointSize={2}>
    {pcsMesh &&
      <mesh fromInstance={pcsMesh} position={Vector3.Zero()} />
    }
  </pointsCloudSystem>
}

const MyFallback = () => {
  const boxRef = useRef();
  useBeforeRender((scene) => {
    if (boxRef.current) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      boxRef.current.rotation.x = Math.PI / 4;
      boxRef.current.rotation.y += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
    }
  })

  return <box ref={boxRef} name='fallback' size={2} />
}

export const UseAssetManager = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 2}
          radius={20}
        />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <Suspense fallback={<MyFallback />}>
          <MyPCS />
        </Suspense>
      </Scene>
    </Engine>
  </div>
);

UseAssetManager.story = {
  name: 'useAssetManager',
  parameters: {
    notes: {
      markdown: `## Citation

      ./storybook-static/assets/kitti/000000.bin is a part of [the KITTI dataset](http://www.cvlibs.net/datasets/kitti/raw_data.php):
      
      @ARTICLE{Geiger2013IJRR,
        author = {Andreas Geiger and Philip Lenz and Christoph Stiller and Raquel Urtasun},
        title = {Vision meets Robotics: The KITTI Dataset},
        journal = {International Journal of Robotics Research (IJRR)},
        year = {2013}
      }
      `
    }
  }
}