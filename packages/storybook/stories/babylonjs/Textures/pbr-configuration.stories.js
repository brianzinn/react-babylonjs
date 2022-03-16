import { Color3, Texture, Vector3 } from "@babylonjs/core";
import React, { useCallback, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";

export default { title: "Textures" };
var cubeTexture = null;
var cubeTextureClone = null;
const onSceneMounted = (createdArgs) => {
  createdArgs.scene.imageProcessingConfiguration.exposure = 0.6;
  createdArgs.scene.imageProcessingConfiguration.contrast = 1.6;
};

/**
 * Official Demo: https://www.babylonjs.com/demos/pbr/
 */
const WithDynamicConfig = ({ roughness }) => {
  let environmentUrl = "assets/textures/environment.dds";
  const [texturesLoaded, setTexturesLoaded] = useState(false);

  const cubeTextureRef = useCallback((node) => {
    if (node && texturesLoaded === false) {
      setTexturesLoaded(true); // trigger render and props assignment
      cubeTexture = node;

      cubeTextureClone = cubeTexture.clone();
      cubeTextureClone.name = "cloned texture";
      cubeTextureClone.coordinatesMode = Texture.SKYBOX_MODE;
    }
  }, []);

  return (
    <>
      <arcRotateCamera
        name="Camera"
        target={Vector3.Zero()}
        alpha={-Math.PI / 4}
        beta={Math.PI / 2.5}
        radius={200}
        minZ={0.1}
      />

      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <cubeTexture
        ref={cubeTextureRef}
        name="cubeTexture"
        rootUrl={environmentUrl}
        createPolynomials={true}
        format={undefined}
        prefiltered={true}
      />

      <box name="hdrSkyBox" size={1000} infiniteDistance>
        <pbrMaterial
          name="skyBox"
          backFaceCulling={false}
          reflectionTexture={cubeTextureClone}
          microSurface={1}
          disableLighting
        />
      </box>

      <sphere
        name="sphereGlass1"
        segments={48}
        diameter={30}
        position={new Vector3(-120, 0, 0)}
      >
        <pbrMaterial
          name="sphereGlass1mat"
          reflectionTexture={cubeTexture}
          refractionTexture={cubeTexture}
          linkRefractionWithTransparency
          indexOfRefraction={0.52}
          alpha={0}
          microSurface={1}
          reflectivityColor={new Color3(0.2, 0.2, 0.2)}
          albedoColor={new Color3(0.85, 0.85, 0.85)}
        >
          <pbrClearCoatConfiguration
            assignFrom="clearCoat"
            isEnabled
            roughness={roughness}
          />
        </pbrMaterial>
      </sphere>

      <sphere
        name="sphereMetal"
        segments={48}
        diameter={30}
        position={new Vector3(120, 0, 0)}
      >
        <pbrMaterial
          name="sphereMetalMat"
          reflectionTexture={cubeTexture}
          microSurface={0.96}
          reflectivityColor={new Color3(0.85, 0.85, 0.85)}
          albedoColor={new Color3(0.01, 0.01, 0.01)}
        >
          <pbrClearCoatConfiguration
            assignFrom="clearCoat"
            isEnabled
            roughness={roughness}
          />
        </pbrMaterial>
      </sphere>

      <sphere
        name="spherePlastic"
        segments={48}
        diameter={30}
        position={new Vector3(0, 0, -120)}
      >
        <pbrMaterial
          name="spherePlasticMat"
          reflectionTexture={cubeTexture}
          microSurface={0.96}
          albedoColor={new Color3(0.206, 0.94, 1)}
          reflectivityColor={new Color3(0.003, 0.003, 0.003)}
        >
          <pbrClearCoatConfiguration
            assignFrom="clearCoat"
            isEnabled
            roughness={roughness}
          />
        </pbrMaterial>
      </sphere>

      <sphere
        name="sphereGlass2"
        segments={48}
        diameter={30}
        position={new Vector3(0, 0, 120)}
      >
        <pbrMaterial
          name="sphereGlass2mat"
          reflectionTexture={cubeTexture}
          linkRefractionWithTransparency
          indexOfRefraction={0.52}
          alpha={0}
          microSurface={1}
          reflectivityColor={new Color3(0.2, 0.2, 0.2)}
          albedoColor={new Color3(0.85, 0.85, 0.85)}
        >
          <pbrClearCoatConfiguration
            assignFrom="clearCoat"
            isEnabled
            roughness={roughness}
          />
        </pbrMaterial>
      </sphere>

      <box name="plane" width={65} height={1} depth={65}>
        <pbrMaterial
          name="wood"
          reflectionTexture={cubeTexture}
          environmentIntensity={1}
          specularIntensity={0.3}
          albedoColor={Color3.White()}
          useMicroSurfaceFromReflectivityMapAlpha
        >
          <texture
            url="assets/textures/reflectivity.png"
            assignTo="reflectivityTexture"
          />
          <texture url="assets/textures/albedo.png" assignTo="albedoTexture" />
          <pbrClearCoatConfiguration
            assignFrom="clearCoat"
            isEnabled
            roughness={roughness}
          />
        </pbrMaterial>
      </box>
    </>
  );
};

export const DynamicConfig = () => {
  const [roughness, setRoughness] = useState(0.0);
  const toggleRoughness = () => {
    setRoughness((roughness) => (roughness === 0.0 ? 1.0 : 0.0));
  };

  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <button onClick={toggleRoughness}>Switch Roughness</button>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene onSceneMount={onSceneMounted}>
            <WithDynamicConfig roughness={roughness} />
          </Scene>
        </Engine>
      </div>
    </>
  );
};

DynamicConfig.story = {
  name: "PBR set roughness",
  parameters: {
    notes: "Experimental API.",
  },
};
