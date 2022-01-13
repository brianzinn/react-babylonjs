import { Mesh, Vector3, VertexData } from "@babylonjs/core";
import React, { useState } from "react";
import { Engine, Scene, useScene } from "react-babylonjs";
import "../../style.css";

export default { title: "Babylon Basic" };

const CustomMesh = (props) => {
  const scene = useScene();

  const [customMesh] = useState(() => {
    const meshInstance = new Mesh(props.name, scene);

    //Set arrays for positions and indices
    var positions = [
      -5, 2, -3, -7, -2, -3, -3, -2, -3, 5, 2, 3, 7, -2, 3, 3, -2, 3,
    ];
    var indices = [0, 1, 2, 3, 4, 5];
    var colors = [
      1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1,
    ];

    //Empty array to contain calculated values
    var normals = [];

    var vertexData = new VertexData();
    VertexData.ComputeNormals(positions, indices, normals);

    //Assign positions, indices and normals to vertexData
    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    vertexData.colors = colors;

    //Apply vertexData to custom mesh
    vertexData.applyToMesh(meshInstance);

    return meshInstance;
  });

  return (
    <mesh
      fromInstance={customMesh}
      disposeInstanceOnUnmount
      position={props.position}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        wireframe={props.useWireframe}
      />
    </mesh>
  );
};

export const CustomMeshes = () => {
  const [displayLast, setDisplayLast] = useState(true);
  const toggleDisplay = () => {
    setDisplayLast((cur) => !cur);
  };
  return (
    <>
      <div>
        <button onClick={toggleDisplay}>Toggle Top Triangle Visibility</button>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene>
            <arcRotateCamera
              name="camera1"
              target={Vector3.Zero()}
              alpha={Math.PI / 2}
              beta={Math.PI / 2}
              radius={20}
            />
            <hemisphericLight
              name="light1"
              intensity={0.7}
              direction={Vector3.Up()}
            />

            <CustomMesh
              name="custom-0"
              position={new Vector3(0, 0, 0)}
              useWireframe={false}
            />
            <CustomMesh
              name="custom-2"
              position={new Vector3(0, 2, 0)}
              useWireframe={true}
            />
            {displayLast && (
              <CustomMesh
                name="custom-4"
                position={new Vector3(0, 4, 0)}
                useWireframe={false}
              />
            )}
          </Scene>
        </Engine>
      </div>
    </>
  );
};
