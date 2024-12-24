import { NodeMaterial } from '@babylonjs/core/Materials/Node/nodeMaterial'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Nullable } from '@babylonjs/core/types'
import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

const setBlockValue = (name: string, value: Color3 | Texture, material: NodeMaterial) => {
  if (value instanceof Texture) {
    let textureBlock = material.getTextureBlocks().find((b) => b.name === name)
    if (textureBlock !== undefined) {
      textureBlock.texture = value
    }
  } else {
    let block = material.getInputBlockByPredicate((b) => b.name === name)
    if (block !== null) {
      block.value = value
    }
  }
}

const SnippetMaterialById: FC<{
  snippetId: string
  name: string
  blockValues: { name: string; value: Color3 | Texture }[]
  freeze: boolean
}> = ({ snippetId, name, blockValues, freeze }) => {
  const scene = useScene()
  const [material, setMaterial] = useState<Nullable<NodeMaterial>>(null)
  const parseMaterial = useCallback(async () => {
    NodeMaterial.ParseFromSnippetAsync(snippetId, scene!).then((nodeMaterial: NodeMaterial) => {
      if (material !== null && freeze === true) {
        material.freeze()
      }
      setMaterial(nodeMaterial)
    })
  }, [snippetId])

  useEffect(() => {
    if (material) {
      if (freeze === true && material.isFrozen) {
        material.unfreeze()
      }
      blockValues.forEach((entry) => {
        setBlockValue(entry.name, entry.value, material)
      })
      if (freeze === true) {
        material.freeze()
      }
    }
  }, [blockValues])

  useEffect(() => {
    parseMaterial()
  }, [parseMaterial])

  return material === null ? null : <nodeMaterial name={name} fromInstance={material} />
}

type KnownColorTypes = 'Green' | 'Red' | 'Yellow'
const colors = ['Red', 'Green', 'Yellow']

const SnippetMaterial: FC = () => {
  const [selectedColor, setSelectedColor] = useState<KnownColorTypes>('Green')
  const onColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let newColor: KnownColorTypes = e.target.value as KnownColorTypes
    console.log('new color:', newColor)
    setSelectedColor(newColor)
  }
  return (
    <>
      <div className="row">
        <label className="col-sm-2 col-form-label" htmlFor="color-select">
          Choose Color:
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            onChange={onColorChange}
            id="color-select"
            defaultValue={selectedColor}
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Engine antialias adaptToDeviceRatio canvasId="babylon-js">
            <Scene>
              <arcRotateCamera
                name="arc"
                target={Vector3.Zero()}
                minZ={0.001}
                alpha={-Math.PI / 4}
                beta={Math.PI / 4}
                radius={5}
                upperBetaLimit={(Math.PI / 2) * 0.99}
              />
              <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
              <sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)}>
                {/* TODO: fix material */}
                <SnippetMaterialById
                  name="sphereMat"
                  snippetId="#81NNDY#20"
                  freeze
                  blockValues={[{ name: 'Surface Color', value: Color3[selectedColor]() }]}
                />
              </sphere>
              <ground name="ground1" width={6} height={6} subdivisions={2} />
            </Scene>
          </Engine>
        </div>
      </div>
    </>
  )
}
export default SnippetMaterial
