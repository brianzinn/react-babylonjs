import type babel from '@babel/standalone'
import { Files } from './getComponentFromFiles'

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

    const fileResult = window.Babel.transform(code, {
      presets: [
        [window.Babel.availablePresets.react, { pure: false }],
        [window.Babel.availablePresets.typescript, { allExtensions: true, isTSX: true }],
      ],
    })

    if (fileResult?.code) {
      acc[fileName] = fileResult.code
    }

    return acc
  }, {})
}
