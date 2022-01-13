import { Color3, Color4, Vector3 } from "@babylonjs/core";
import { defineGrid, extendHex } from "honeycomb-grid";
import React, { useCallback, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";

export default { title: "Babylon Basic" };

const GRID_WIDTH = 60;
const GRID_HEIGHT = 40;
const HOVER_COLOR = new Color4(0.8, 0.8, 0.8, 1);

export const Instances = () => {
  const [_, setState] = useState(false);
  const createUpdate = () => {
    setState((state) => !state);
  };

  // const hexRef = useRef<CreatedInstance<Mesh>>(null);
  const [hexMesh, setHexMesh] = useState(null);
  const hexRef = useCallback((node) => {
    if (node) {
      const mesh = node;
      mesh.registerInstancedBuffer("color", 4);
      setHexMesh(mesh);
    }
  }, []);

  const Hex = extendHex({
    size: 1, // default: 1
    orientation: "flat", // default: 'pointy'
    color: new Color4(0, 0.68, 1),
    hovered: false,
  });

  // create a Grid factory that uses the Hex factory:
  const Grid = defineGrid(Hex);

  // create a rectangle grid with each tile assigned a random color:
  const grid = Grid.rectangle({
    width: GRID_WIDTH,
    height: GRID_HEIGHT,
    onCreate: (hex) => {
      hex.color = new Color4(Math.random(), Math.random(), Math.random(), 1);
      hex.isHovered = Math.random() < 0.1;
    },
  });

  return (
    <div className="App">
      <button onClick={createUpdate}>Change hex colours</button>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene clearColor={Color4.FromColor3(Color3.White())}>
          <arcRotateCamera
            name="arc"
            target={Vector3.Zero()}
            minZ={0.001}
            alpha={-Math.PI / 2}
            beta={Math.PI / 1.2}
            radius={Math.max(GRID_WIDTH, GRID_HEIGHT) * 1.5}
          />
          <hemisphericLight
            name="light1"
            intensity={0.9}
            direction={Vector3.Down()}
          />
          <disc
            ref={hexRef}
            name="hex"
            radius={1}
            tessellation={6}
            isVisible={false}
          />
          {hexMesh &&
            Array.from(grid.entries()).map((entry) => {
              const [i, tile] = entry;
              const { x, y } = tile.toPoint();
              console.log(`${i}->{${x},${y}} (${tile.width()})`);
              return (
                <instancedMesh
                  source={hexMesh}
                  key={i}
                  name={`hex-${i}`}
                  position={
                    new Vector3(
                      x + tile.width() / 2 - GRID_WIDTH * 0.75,
                      y + tile.height() / 2 - (Math.sqrt(3) * GRID_HEIGHT) / 2,
                      0
                    )
                  }
                  instancedBuffers={{
                    color: tile.isHovered ? HOVER_COLOR : tile.color,
                  }}
                />
              );
            })}
        </Scene>
      </Engine>
    </div>
  );
};
