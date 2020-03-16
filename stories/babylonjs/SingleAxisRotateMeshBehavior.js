import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HostWithEvents, withBabylonJS }  from '../../dist/react-babylonjs'
import { Axis } from '@babylonjs/core/Maths/math'

class SingleAxisRotateMeshBehavior extends Component {
  componentWillUnmount () {
    this.scene.onBeforeRenderObservable.remove(this.handler)
  }

  render () {
    return (<HostWithEvents {...this.props} onParented={(scene, engine, parent) => {
      this.scene = scene
      this.handler = scene.onBeforeRenderObservable.add(() => {
        // TODO: if parent.hostInstance.rotationQuaternion then .rotate(xxx, axis)
        switch (this.props.axis) {
          case Axis.X:
            this.rotationProperty = 'x'
            break
          case Axis.Z:
            this.rotationProperty = 'z'
            break
          default:
            this.rotationProperty = 'y'
            break
        }
        let deltaTimeInMillis = engine.getDeltaTime()
        parent.hostInstance.rotation[this.rotationProperty] += ((this.props.rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
      })
    }

    } />)
  }
}

// Specifies the default values for props:
SingleAxisRotateMeshBehavior.defaultProps = {
  rpm: 1,
  axis: Axis.Y
}

SingleAxisRotateMeshBehavior.propTypes = {
  rpm: PropTypes.number,
  axis: PropTypes.object
}

export default withBabylonJS(SingleAxisRotateMeshBehavior)
