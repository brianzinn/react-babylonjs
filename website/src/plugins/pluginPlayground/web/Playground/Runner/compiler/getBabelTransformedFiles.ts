import type babel from '@babel/standalone'
import { Files } from './getComponentFromCode'

type Babel = typeof babel

// @babel/standalone is loaded with html script tag
// see builderConfig.html.tags in pluginPlayground
declare global {
  interface Window {
    Babel: Babel
  }
}

export function getBabelTransformedFiles(files: Files) {
  return Object.keys(files).reduce<Files>((acc, fileName) => {
    const code = files[fileName]

    const transformResult = window.Babel.transform(code, {
      presets: [
        [window.Babel.availablePresets.react, { pure: false }],
        [window.Babel.availablePresets.typescript, { allExtensions: true, isTSX: true }],
      ],
    })

    const transformedCode = transformResult?.code

    if (transformedCode) {
      acc[fileName] = transformedCode
    }

    return acc
  }, {})
}
