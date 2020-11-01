import React from 'react';
import { SceneLoaderContext } from 'react-babylonjs-loaders';

const ProgressFallback = (props) => {
  const sceneLoaderContext = useContext(SceneLoaderContext);

  console.log('scene loader context:', sceneLoaderContext);

  const loadProgress = 0.5;

  return (
    <transformNode name='load-mesh' rotation={props.rotation} position={props.center}>
      <box key='progress' name='boxProgress' height={props.scaleTo / 15} width={props.scaleTo} depth={props.scaleTo / 30} scaling={new Vector3(loadProgress, 1, 1)}
        position={new Vector3(props.scaleTo / 2, 0, props.scaleTo / 60)}
        setPivotMatrix={[Matrix.Translation(-props.scaleTo, 0, 0)]}
        setPreTransformMatrix={[Matrix.Translation(-props.scaleTo / 2, 0, 0)]}>
        <standardMaterial name='progress-mat' diffuseColor={props.progressBarColor} specularColor={Color3.Black()} />
      </box>
      <box key='back' name='boxBack' height={props.scaleTo / 15} width={props.scaleTo} depth={props.scaleTo / 30}
        position={new Vector3(0, 0, props.scaleTo / -60)}
      />
    </transformNode>
  )
}

export default ProgressFallback;