import type babel from '@babel/standalone'
import { babelPluginTransformImports } from './babelPluginTransformImports'

type Babel = typeof babel

// @babel/standalone is loaded with html script tag
// see builderConfig in pluginPlayground
declare global {
  interface Window {
    Babel: Babel
  }
}

const getBabelPresets = (availablePresets: Record<string, object | (() => void)>) => [
  [availablePresets.react],
  [availablePresets.env, { targets: { esmodules: true } }],
  [availablePresets.typescript, { allExtensions: true, isTSX: true }],
]

export const babelTransform = (targetCode: string) => {
  if (!window.Babel) return

  return window.Babel.transform(targetCode, {
    plugins: [babelPluginTransformImports()],
    presets: getBabelPresets(window.Babel.availablePresets),
  })
}
