import React, { Component } from 'react'

import { Model, Box, StandardMaterial, Mesh, withScene } from '../../dist/react-babylonjs.es5'
import { Vector3, Matrix, Color3 } from 'babylonjs'

// try with later versions of RHL to get hooks working here:
// const [loadProgress, updateProgress] = useState(0)
class ScaledModelWithProgress extends Component {
  constructor () {
    super()

    this.state = {
      loadProgress: 0
    }
  }

  render () {
    return (
      <React.Fragment>
        <Model
          scaleToDimension={this.props.scaleTo}
          onLoadProgress={(evt) => {
            let modelLoadProgress = evt.lengthComputable
              ? evt.loaded / evt.total
              : evt.loaded / (this.props.estimatedFileSize * 0.085) /* provided fileSize is not for 'view' manifest, a bad guess often, but generally factor ~0.085 smaller  */

            this.setState({ loadProgress: modelLoadProgress })
          }}
          onModelLoaded={(model) => {
            this.setState({ loadProgress: 1 })
            if (this.props.onModelLoaded) {
              this.props.onModelLoaded(model, this.props.sceneContext)
            }
          }}
          position={this.props.center}
          rootUrl={this.props.rootUrl}
          sceneFilename={this.props.sceneFilename}
          pluginExtension={this.props.fileExtension}
          rotation={this.props.modelRotation}
        />
        {(this.state.loadProgress < 1) &&
        <Mesh rotation={this.props.progressRotation} position={this.props.center}>
          <Box key='progress' name='boxProgress' height={this.props.scaleTo / 15} width={this.props.scaleTo} depth={this.props.scaleTo / 30} scaling={new Vector3(this.state.loadProgress, 1, 1)}
            position={new Vector3(this.props.scaleTo / 2, 0, this.props.scaleTo / 60)}
            setPivotMatrix={[ Matrix.Translation(-this.props.scaleTo, 0, 0) ]}
            setPreTransformMatrix={[ Matrix.Translation(-this.props.scaleTo / 2, 0, 0) ]}>
            <StandardMaterial diffuseColor={this.props.progressBarColor} specularColor={Color3.Black()} />
          </Box>
          <Box key='back' name='boxBack' height={this.props.scaleTo / 15} width={this.props.scaleTo} depth={this.props.scaleTo / 30}
            position={new Vector3(0, 0, this.props.scaleTo / -60)}
          />
        </Mesh>
        }
      </React.Fragment>
    )
  }
}

export default withScene(ScaledModelWithProgress)
