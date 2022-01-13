import { Color3, Vector3 } from "@babylonjs/core";
import { ActionManager, SetValueAction } from "@babylonjs/core/Actions";
import "@babylonjs/inspector";
import React, { Component, Suspense } from "react";
import { Engine, Model, Scene } from "react-babylonjs";
import "../../style.css";
import ScaledModelWithProgress from "../ScaledModelWithProgress";

export default { title: "Models" };
class WithModel extends Component {
  constructor() {
    super();

    this.state = {
      avocadoYPos: -1.5,
      avocadoScaling: 3.0,
    };

    this.moveAvocadoUp = this.moveAvocadoUp.bind(this);
    this.moveAvocadoDown = this.moveAvocadoDown.bind(this);
    this.increaseAvocadoSize = this.increaseAvocadoSize.bind(this);
    this.decreaseAvocadoSize = this.decreaseAvocadoSize.bind(this);
    this.onModelLoaded = this.onModelLoaded.bind(this);
  }

  moveAvocadoDown() {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos - 0.5,
    }));
  }

  moveAvocadoUp() {
    this.setState((state) => ({
      ...state,
      avocadoYPos: state.avocadoYPos + 0.5,
    }));
  }

  increaseAvocadoSize() {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling + 0.1,
    }));
  }

  decreaseAvocadoSize() {
    this.setState((state) => ({
      ...state,
      avocadoScaling: state.avocadoScaling - 0.1,
    }));
  }

  onModelLoaded = (model, sceneContext) => {
    let mesh = model.meshes[1];
    mesh.actionManager = new ActionManager(mesh._scene);
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOverTrigger,
        mesh.material,
        "wireframe",
        true
      )
    );
    mesh.actionManager.registerAction(
      new SetValueAction(
        ActionManager.OnPointerOutTrigger,
        mesh.material,
        "wireframe",
        false
      )
    );
  };

  render() {
    let baseUrl =
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/";
    return (
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
          <arcRotateCamera
            name="camera1"
            alpha={Math.PI / 2}
            beta={Math.PI / 2}
            radius={9.0}
            target={Vector3.Zero()}
            minZ={0.001}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />

          <ScaledModelWithProgress
            rootUrl={`${baseUrl}BoomBox/glTF/`}
            sceneFilename="BoomBox.gltf"
            scaleTo={3}
            progressBarColor={Color3.FromInts(255, 165, 0)}
            center={new Vector3(2.5, 0, 0)}
            onModelLoaded={this.onModelLoaded}
          />

          <Suspense
            fallback={
              <box
                name="fallback"
                position={new Vector3(-2.5, this.state.avocadoYPos, 0)}
              />
            }
          >
            <Model
              rootUrl={`${baseUrl}Avocado/glTF/`}
              sceneFilename="Avocado.gltf"
              scaleToDimension={this.state.avocadoScaling}
              position={new Vector3(-2.5, this.state.avocadoYPos, 0)}
            />
          </Suspense>
        </Scene>
      </Engine>
    );
  }
}

export const ModelStory = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <WithModel />
  </div>
);

ModelStory.story = {
  name: "3D-Model",
};
