import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Engine, Scene } from '../../../dist/react-babylonjs.es5'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import { Control } from '@babylonjs/gui'
import MashupButton from './MashupButton'
import ScaledModelWithProgress from '../ScaledModelWithProgress'
import '../../style.css'

export class RemixMeshMashup extends Component {
  constructor () {
    super()

    this.state = {
      headers: [],
      autoFetch: {
        enabled: true,
        type: 'microsoft' // anything else will fall through to default channels, as if you went to the remix3d homepage
      },
      searchText: '',
      results: [],
      model: undefined,
      modelLoadProgress: 1
    }

    fetch('https://cors-anywhere.herokuapp.com/https://remixmeshmashup.azurewebsites.net/api/getToken?code=asLEw4snsUwpUJod9RQd1RUhvWwmnxWJ4EXaUNpgvdtipsC6/P5EFA==')
      .then(response => response.json())
      .then(headers => {
        this.setState((prevState) => ({
          ...prevState,
          headers
        }))

        if (this.state.autoFetch.enabled === true) {
          switch (this.state.autoFetch.type) {
            case 'microsoft':
              this.getItems('https://api.remix3d.com/v3/users/46reU3-wFPz/uploads', 'uploads', headers)
              break
            default:
              fetch('https://api.remix3d.com/v3/channelsets/Default/channels', {
                headers
              })
                .then(defaultChannelsResponse => defaultChannelsResponse.json())
                .then(defaultChannels => {
                  if (defaultChannels.totalCount > 0 && defaultChannels.results && defaultChannels.results.length) {
                    this.getItems(`https://api.remix3d.com/v3/channels/${defaultChannels.results[0].id}/items`, 'channels', headers)
                  }
                })
              break
          }
        }
      })
  }

  mapItem (item) {
    switch (item.type) {
      case 'Board':
        return { type: 'board', item: item.board }
      case 'Creation':
        return { type: 'creation', item: item.creation }
      default:
        console.warn(`result unknown type: ${item.type}`)
        return undefined
    }
  }

    getItems = (itemsUri, requestType, headers, requests) => {
      if (headers === undefined) {
        console.error(`Cannot get ${requestType} 'items' w/o headers`)
        return
      }

      requests = (requests === undefined) ? 0 : ++requests

      fetch(itemsUri, {
        headers
      })
        .then(itemsResponse => itemsResponse.json())
        .then(responseJson => {
          let results
          let continuationUri

          switch (requestType) {
            case 'channels': // contains generally boards
            case 'search': // contains creations
              results = responseJson.results.map(this.mapItem).filter(x => x !== undefined)
              continuationUri = responseJson.continuationUri
              break
            case 'boards': // boards contain creations
            case 'uploads': // contains creations
              results = ((responseJson.items) ? responseJson.items : responseJson).results.map(result => ({ type: 'creation', item: result }))
              continuationUri = ((responseJson.items) ? responseJson.items : responseJson).continuationUri
              break
            default:
              console.error('Unknown requestType:' + requestType)
              return
          }

          let newTotal = (requests === 0) ? results.length : this.state.results.length + results.length
          const max = 15 * 2 /* columns x rows */

          this.setState((prevState) => ({
            ...prevState,
            results: ((requests === 0) ? results : prevState.results.concat(results)).slice(0, max) /* truncate to max */
          }))

          if (newTotal < max && continuationUri && requests <= (max / 10)) {
            this.getItems(continuationUri, requestType, headers, requests)
          }
        })
    }

    loadCreation (creation) {
      const viewManifest = (!creation.manifestUris) ? undefined : creation.manifestUris.find(manifest => manifest.usage === 'View')

      if (viewManifest === undefined) {
        console.warn('creation has no (View) manifestUri :( - can try assetUris')
        return
      }

      var uri = viewManifest.uri
      var filenameIndex = uri.lastIndexOf('/')

      const viewerStagingData = creation.stagingData ? creation.stagingData.viewerStagingData : undefined

      // viewerStagingData['Model.RotationOffsetAxisY'] * Tools.ToRadians(viewerStagingData['Model.RotationOffsetAngle'])
      const modelYRotation = viewerStagingData && viewerStagingData['Camera.State.Rotation.Y']
        ? viewerStagingData['Camera.State.Rotation.Y'] + Math.PI
        : Math.PI

      this.setState((prevState) => ({
        ...prevState,
        model: {
          rootUrl: uri.substring(0, filenameIndex + 1),
          sceneFilename: uri.substring(filenameIndex + 1),
          fileExtension: '.' + viewManifest.format.toLowerCase(), // ie: 'GLTF' -> '.gltf'
          key: creation.id,
          fileSize: creation.fileSize,
          description: creation.name,
          hasAnimations: creation.hasAnimations,
          yRotation: modelYRotation
        }
      }))
    }

    updateSearchTextBabylon = (input) => {
      const searchText = input.text /* need local var for setState() */
      this.setState((prevState) => ({
        ...prevState,
        searchText
      }))
    }

    updateSearchTextForm = (e) => {
      const searchText = e.target.value /* need local var for setState() */
      this.setState((prevState) => ({
        ...prevState,
        searchText
      }))
    }

    doSearch = () => {
      this.getItems(`https://api.remix3d.com/v3/creations?q=${this.state.searchText}&$select=id,%20name,%20previewImage`, 'search', this.state.headers)
    }

    render () {
      return (
        <Engine canvasId='babylonJS' antialias adaptToDeviceRatio engineOptions={{ stencil: true, preserveDrawingBuffer: true }}>
          <Scene>
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <arcRotateCamera target={Vector3.Zero()} radius={4} alpha={-Math.PI / 2} beta={(Math.PI / 2)} minZ={0.001} wheelPrecision={30} />
            <mesh name='panelAnchor' position={new Vector3(0, 2, 0)} />
            <gui3DManager name='gui3d'>
              <cylinderPanel name='panel' margin={0.2} rows={2} radius={4} linkToTransformNodeByName='panelAnchor'>
                {
                  this.state.results.map(result => {
                    if (result.type === 'board' || result.type === 'creation') {
                      var buttonText = result.item.name + (result.item.hasAnimations ? ' *' : '')
                      var fontSize = buttonText.length <= 12 ? 36 : (buttonText.length <= 20 ? 24 : 20) // TODO: ctx.measureText(...)
                      return (
                        <MashupButton key={result.item.id} name={result.item.name} imageUrl={result.item.previewImage.source}
                          text={buttonText} fontColor='black' fontSize={fontSize}
                          onPointerDown={() => {
                            if (result.type === 'board') {
                              this.getItems(`https://api.remix3d.com/v3/boards/${result.item.id}`, 'boards', this.state.headers)
                            } else if (result.type === 'creation') {
                              this.loadCreation(result.item)
                            }
                          }}
                        />
                      )
                    } else {
                      return null
                    }
                  })
                }
              </cylinderPanel>
            </gui3DManager>
            <box height={1 / 8 + 0.1} width={1.1} depth={0.01} position={new Vector3(0, -0.5, -2)}>
              <standardMaterial diffuseColor={Color3.White()} specularColor={Color3.Black()} />
            </box>
            <plane name='dialog' width={1} height={1 / 8} position={new Vector3(0, -0.5, -2.008)}>
              <advancedDynamicTexture name='adt' height={1024} width={1024} createForParentMesh>
                <rectangle name='rect' color='#666666' height={1 / 8} scaleY={8}>
                  <stackPanel name='sp-1' isVertical={false} padding={0.05}>
                    <inputText name='searchInputText' text={this.state.searchText} color='white' fontSize={36} width={0.8} onTextChanged={this.updateSearchTextBabylon} />
                    <babylon-button name='button' background='#FFAF00' width={0.2} cornerRadius={10} onPointerDown={this.doSearch}>
                      <stackPanel name='sp-2' isVertical={false} padding={0.05}>
                        <textBlock key='search-text' name='search-text' text='Search' fontStyle='bold' fontSize={36} color='black' width={0.7} />
                        <textBlock key='search-icon' name='search-icon' text={'\uf002'} fontFamily='FontAwesome' fontSize={36} color='black' width={0.3} />
                      </stackPanel>
                    </babylon-button>
                  </stackPanel>
                </rectangle>
              </advancedDynamicTexture>
            </plane>
            <plane name='keyboard' width={1} height={1 / 4} position={new Vector3(0, -(0.6 + 1 / 8), -2.1414)} rotation={new Vector3(Math.PI / 4, 0, 0)} >
              <advancedDynamicTexture height={1024} width={1024} createForParentMesh onlyAlphaTesting>
                <rectangle color='white' height={1 / 4} scaleY={4}>
                  <virtualKeyboard connectControlNames={['searchInputText']} defaultKeyboard disableOffFocus verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP} />
                </rectangle>
              </advancedDynamicTexture>
            </plane>
            {this.state.model &&
            <ScaledModelWithProgress key={this.state.model.key} rootUrl={this.state.model.rootUrl} sceneFilename={this.state.model.sceneFilename} scaleTo={2}
              progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, 0, 0)}
              pluginExtension={this.state.model.fileExtension}
              modelRotation={new Vector3(0, this.state.model.yRotation, 0)} progressRotation={new Vector3(0, Math.PI, 0)}
              estimatedFileSize={this.state.model.fileSize * 0.85}
            />
            }

            <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} teleportEnvironmentGround enableInteractions />
            <environmentHelper enableGroundShadow groundYBias={1} mainColor={Color3.FromHexString('#74b9ff')} />
          </Scene>
        </Engine>
      )
    }
}

export default storiesOf('Babylon Advanced', module)
  .add('Remix API MashUP', () => (
    <div style={{ flex: 1, display: 'flex' }}>
      <RemixMeshMashup />
    </div>
  ))
