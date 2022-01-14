import {
  Animation,
  Color3,
  Color4,
  EasingFunction,
  ExponentialEase,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { Control } from "@babylonjs/gui";
import React, { Component } from "react";
import { Engine, Scene } from "react-babylonjs";
import "../../style.css";

export default { title: "GUI" };

const DEFAULT_BOXES = [
  {
    name: "red",
    position: new Vector3(-2.5, 1, 0),
    color: Color3.Red(),
    index: 1,
  },
  {
    name: "green",
    position: new Vector3(2.5, 1, 0),
    color: Color3.Green(),
    index: 2,
  },
  {
    name: "blue",
    position: new Vector3(0, 1, 0),
    color: Color3.Blue(),
    index: 3,
  },
];

class UIComponent extends Component {
  constructor() {
    super();

    this.state = {
      plane: undefined,
      showModal: false,
      clickMeshName: undefined,
      boxes: DEFAULT_BOXES,
      sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5),
    };

    this.meshPicked = this.meshPicked.bind(this);
    this.setPlane = this.setPlane.bind(this);
    this.deleteSelectedMesh = this.deleteSelectedMesh.bind(this);
    // TODO: fix that bind() is needed on assignment on button pointerDown handlers
  }

  meshPicked(mesh) {
    const matchingBox = this.state.boxes.find((box) => box.name === mesh.name);
    if (matchingBox !== undefined) {
      const clickedMeshName = mesh.name;
      let clickedMeshColor = matchingBox.color.toHexString();
      let sceneClearColor = Color4.FromColor3(matchingBox.color, 0.5);

      this.setState((state) => ({
        ...state,
        showModal: true,
        clickedMeshName,
        clickedMeshColor,
        sceneClearColor,
      }));
    } else {
      console.log("ignoring clicks on:", mesh.name, this.state);
    }
  }

  deleteSelectedMesh() {
    const newBoxes = this.state.boxes.filter(
      (box) => box.name !== this.state.clickedMeshName
    );
    this.setState((state) => ({
      ...state,
      sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5),
      boxes: newBoxes,
    }));

    // They're all 'deleted'.  Recreate them after a delay.
    if (newBoxes.length === 0) {
      console.log("recreating boxes in 2.5 seconds");
      let that = this;
      window.setTimeout(() => {
        that.setState((state) => ({
          ...state,
          boxes: DEFAULT_BOXES,
        }));
      }, 2500);
    }

    this.hideModal();
  }

  hideModal() {
    let { plane } = this.state;
    if (!plane) {
      return;
    }

    let keys = [];
    keys.push({ frame: 0, value: 1 });
    keys.push({ frame: 10, value: 0 });

    var animationClose = new Animation(
      "tv-off-1984",
      "scaling.x",
      10,
      Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    animationClose.setKeys(keys);

    let easingFunction = new ExponentialEase(9.7); // BABYLON.QuarticEase()
    easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
    animationClose.setEasingFunction(easingFunction);

    plane.animations.push(animationClose);
    plane._scene.beginAnimation(plane, 0, 100, false, 1, () => {
      plane.dispose();
      this.setState((state) => ({
        ...state,
        showModal: false,
        plane: undefined,
        sceneClearColor: new Color4(0.5, 0.5, 0.5, 0.5),
      }));
    });
  }

  setPlane(plane) {
    this.setState((state) => ({
      ...state,
      plane,
    }));

    if (plane._scene && plane._scene.activeCamera) {
      let { activeCamera } = plane._scene;

      window.setTimeout(() => {
        // we only need this hack because of storybook?
        let forwardRayDirection = activeCamera.getForwardRay().direction;
        plane.position = activeCamera.position.add(
          forwardRayDirection.scale(
            1.5 / activeCamera.fov /* * forwardRay.length */
          )
        );
        plane.lookAt(activeCamera.position, 0, Math.PI, Math.PI);
      }, 10);
    }
  }

  render() {
    let dialogWidth = 3;
    let dialogHeight = 1;

    // <button onClick={this.toggleOrder}>reverse order</button> (for testing insertBefore in react-reconciler - and put in a hosted element like the light).
    // boxes.sort((a, b) => a.index - b.index);

    return (
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene
          clearColor={this.state.sceneClearColor}
          onMeshPicked={this.meshPicked}
        >
          <arcRotateCamera
            name="camera1"
            radius={7}
            beta={Math.PI / 4}
            alpha={Math.PI / 2}
            target={Vector3.Zero()}
            minZ={0.001}
            wheelPrecision={30}
            onViewMatrixChangedObservable={(camera) => {
              let { plane } = this.state;

              if (plane) {
                let forwardRay = camera.getForwardRay();
                plane.position = camera.position
                  .clone()
                  .add(
                    forwardRay.direction.scale(
                      1.5 / camera.fov /* * forwardRay.length */
                    )
                  );
                plane.lookAt(camera.position, 0, Math.PI, Math.PI);
              }
            }}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={Vector3.Up()}
          />
          {this.state.boxes.map((box) => (
            <box
              key={box.index}
              size={2}
              name={box.name}
              position={box.position}
            >
              <standardMaterial
                name={`${box.name}-mat`}
                diffuseColor={box.color}
                specularColor={Color3.Black()}
              />
            </box>
          ))}

          {this.state.showModal === true && (
            <plane
              name="dialog"
              width={3}
              height={3 * (dialogHeight / dialogWidth)}
              onCreated={this.setPlane}
              rotation={new Vector3(0, Math.PI, 0)}
            >
              <advancedDynamicTexture
                name="dialogTexture"
                height={1024}
                width={1024}
                createForParentMesh
                generateMipMaps={true}
                samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
              >
                <rectangle
                  name="rect-1"
                  background="white"
                  color="#666666"
                  height={dialogHeight / dialogWidth}
                  width={1}
                  scaleY={dialogWidth}
                  scaleX={1}
                  thickness={2}
                  cornerRadius={12}
                >
                  <stackPanel name="sp-1">
                    <rectangle
                      name="header-rectangle"
                      height="70px"
                      verticalAlignment={Control.HORIZONTAL_ALIGNMENT_CENTER}
                      horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}
                    >
                      <stackPanel
                        name="header-stack-panel"
                        isVertical={false}
                        width="100%"
                      >
                        <textBlock
                          name="selection-made"
                          text="Selection Made"
                          color="black"
                          fontSize={28}
                          fontStyle="bold"
                          paddingLeft="20px"
                          textHorizontalAlignment={
                            Control.HORIZONTAL_ALIGNMENT_LEFT
                          }
                          textVerticalAlignment={
                            Control.VERTICAL_ALIGNMENT_CENTER
                          }
                        />
                        <babylon-button
                          name="close-icon"
                          width="1000px"
                          paddingLeft="950px"
                          height="80px"
                          onPointerDownObservable={this.hideModal.bind(this)}
                        >
                          <textBlock
                            text={"\uf00d"}
                            fontFamily="FontAwesome"
                            fontStyle="bold"
                            fontSize={24}
                            color="black"
                            textHorizontalAlignment={
                              Control.HORIZONTAL_ALIGNMENT_RIGHT
                            }
                            textVerticalAlignment={
                              Control.VERTICAL_ALIGNMENT_CENTER
                            }
                          />
                        </babylon-button>
                      </stackPanel>
                    </rectangle>
                    <rectangle
                      name="body-rectangle"
                      height="200px"
                      thickness={2}
                      color="#EEEEEE"
                    >
                      <stackPanel name="sp-3">
                        <textBlock
                          name="description"
                          key={`body-${this.state.clickedMeshName}`}
                          text={`You have clicked on '${this.state.clickedMeshName}' .\n....${this.state.boxes.length} remaining...`}
                          color="black"
                          fontSize={28}
                          textWrapping
                          height="100px"
                          textHorizontalAlignment={
                            Control.HORIZONTAL_ALIGNMENT_LEFT
                          }
                          textVerticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                          paddingLeft="10px"
                          paddingTop="10px"
                        />
                        {this.state.boxes.map((box) => (
                          <textBlock
                            key={`opt--${this.state.clickedMeshName}-${box.name}`}
                            text={"• " + box.name}
                            color="black"
                            fontSize={28}
                            height={`${90 / this.state.boxes.length}px`}
                            textHorizontalAlignment={
                              Control.HORIZONTAL_ALIGNMENT_LEFT
                            }
                            textVerticalAlignment={
                              Control.VERTICAL_ALIGNMENT_TOP
                            }
                            paddingLeft="20px"
                          />
                        ))}
                      </stackPanel>
                    </rectangle>
                    <stackPanel
                      name="footer-sp"
                      height="80px"
                      paddingTop="10px"
                      paddingBottom="10px"
                      isVertical={false}
                      horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_RIGHT}
                      verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP}
                    >
                      <babylon-button
                        name="cancel-button"
                        background="#6c757d"
                        width="290px"
                        height="60px"
                        cornerRadius={10}
                        onPointerDownObservable={this.hideModal.bind(this)}
                      >
                        <textBlock
                          name="cancel-text"
                          text="Cancel"
                          fontSize={28}
                          fontStyle="bold"
                          color="white"
                        />
                      </babylon-button>
                      <babylon-button
                        name="delete-button"
                        background={this.state.clickedMeshColor}
                        paddingLeft="50px"
                        paddingRight="30px"
                        width="350px"
                        height="60px"
                        cornerRadius={10}
                        onPointerDownObservable={this.deleteSelectedMesh}
                      >
                        <textBlock
                          name="cancel-text"
                          text={`Delete '${this.state.clickedMeshName}'`}
                          fontSize={28}
                          fontStyle="bold"
                          color="white"
                          textVerticalAlignment={
                            Control.VERTICAL_ALIGNMENT_CENTER
                          }
                        />
                      </babylon-button>
                    </stackPanel>
                  </stackPanel>
                </rectangle>
              </advancedDynamicTexture>
            </plane>
          )}
          <vrExperienceHelper
            webVROptions={{ createDeviceOrientationCamera: false }}
            enableInteractions
          />
        </Scene>
      </Engine>
    );
  }
}

export const With2DUI = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <UIComponent />
  </div>
);

With2DUI.story = {
  name: "2D UI",
};
