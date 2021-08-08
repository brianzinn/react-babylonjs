import React, { useEffect, useRef } from 'react';
import { Axis } from '@babylonjs/core/Maths/math.axis.js';
import { HostWithEvents, useScene }  from '../../dist/react-babylonjs';

const SingleAxisRotateMeshBehavior = props => {
  const { rpm, axis} = props;
  const scene = useScene();
  const observableHandler = useRef();
  useEffect(() => {
    return (() => {
      console.log('removing observer');
      scene.onBeforeRenderObservable.remove(observableHandler.current);
    })
  }, []);

  return (<HostWithEvents {...props} onParented={(scene, engine, parent) => {
    observableHandler.current = scene.onBeforeRenderObservable.add(() => {
      // TODO: if parent.rotationQuaternion then .rotate(xxx, axis)
      let rotationProperty;
      switch (axis) {
        case Axis.X:
          rotationProperty = 'x'
          break
        case Axis.Z:
          rotationProperty = 'z'
          break
        default:
          rotationProperty = 'y'
          break
      }
      let deltaTimeInMillis = engine.getDeltaTime();
      // using HostWithEvents exposes you to the internal state of what is on the Fiber.  hostInstance is the public instance (Babylon object).
      parent.hostInstance.rotation[rotationProperty] += ((rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
    })
  }}
  />)
}

export default SingleAxisRotateMeshBehavior;
