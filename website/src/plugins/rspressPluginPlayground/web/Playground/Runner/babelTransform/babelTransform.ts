import { type TransformOptions } from '@babel/core'
import type babel from '@babel/standalone'
import { babelPluginTransformImports } from './babelPluginTransformImports'
import { moduleStringToComponent } from '../moduleStringToComponent'

type Babel = typeof babel

// @babel/standalone is loaded with html script tag
// see builderConfig.html.tags in pluginPlayground
declare global {
  interface Window {
    Babel: Babel
  }
}

const getBabelConfig = (availablePresets: Babel['availablePresets']): TransformOptions => {
  return {
    plugins: [babelPluginTransformImports()],
    presets: [
      [availablePresets.react],
      [availablePresets.env, { targets: { esmodules: true } }],
      [availablePresets.typescript, { allExtensions: true, isTSX: true }],
    ],
  }
}

const babelTransform = (targetCode: string) => {
  if (!window.Babel) return

  const transformOptions = getBabelConfig(window.Babel.availablePresets)
  const transformResult = window.Babel.transform(targetCode, transformOptions)

  if (transformResult.code) {
    return moduleStringToComponent(transformResult.code)?.default
  }
}

export { getBabelConfig, babelTransform }
