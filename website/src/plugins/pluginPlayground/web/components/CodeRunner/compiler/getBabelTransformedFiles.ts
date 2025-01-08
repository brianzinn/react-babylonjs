import type babel from '@babel/standalone'
import { TransformOptions } from '@babel/core'
import { Language } from '@pluginPlayground/shared/constants'
import { Files } from './compileComponentFromFiles'

type Babel = typeof babel

// @babel/standalone is loaded with html script tag
// see builderConfig.html.tags in pluginPlayground
declare global {
  interface Window {
    Babel: Babel
  }
}

type GetBabelTransformedFiles = {
  files: Files
  language: Language
}

export function getBabelTransformedFiles({ files, language }: GetBabelTransformedFiles) {
  const { availablePresets, transform } = window.Babel

  const presets: TransformOptions['presets'] = [[availablePresets.react, { pure: false }]]

  if (language === Language.tsx) {
    presets.push([availablePresets.typescript, { allExtensions: true, isTSX: true }])
  }

  return Object.keys(files).reduce<Files>((acc, fileName) => {
    const code = files[fileName]

    const fileResult = transform(code, { presets })

    if (fileResult?.code) {
      acc[fileName] = fileResult.code
    }

    return acc
  }, {})
}
