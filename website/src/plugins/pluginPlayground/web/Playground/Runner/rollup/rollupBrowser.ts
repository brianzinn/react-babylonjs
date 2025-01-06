import { Plugin, rollup } from '@rollup/browser'
import getImport from '_playground_virtual_imports'
import type babel from '@babel/standalone'
import { prepareFileNameWithExt } from '@/src/plugins/pluginPlayground/cli/utils/getImport'
import { GET_IMPORT_FUNC_NAME } from '../constants'

type Files = Record<string, string>

type Babel = typeof babel

// @babel/standalone is loaded with html script tag
// see builderConfig.html.tags in pluginPlayground
declare global {
  interface Window {
    Babel: Babel
  }
}

export const rollupBrowser = async (files: Files) => {
  if (!window.Babel) return

  const fileNames = Object.keys(files)
  // console.log({ fileNames })
  const appFileName = fileNames.find((name) => name.includes('App'))

  const transformedFiles = getBabelTransformedFiles(files)

  // console.log({ transformedFiles })

  const bundle = await rollup({
    input: appFileName,
    plugins: [
      loaderPlugin(transformedFiles),
      {
        name: 'test-transform',
        transform(code, id) {
          console.log({ code, id })
          return code
        },
      },
    ],
    // regexp to match non-local imports, ie. it does not start with . or /
    external: /^[^(.|/)]/,
  })

  const { output } = await bundle.generate({
    compact: false,
    strict: false,
    format: 'commonjs',
    generatedCode: 'es2015',
    plugins: [],
  })

  const moduleString = output[0].code
  // console.log({ rollupOutputCode: moduleString })

  // This and some of the below should probably be done
  // in a transform plugin hook
  let funcString = moduleString.replaceAll('require(', `${GET_IMPORT_FUNC_NAME}(`)

  if (!funcString.includes('const React =')) {
    funcString = `const React = ${GET_IMPORT_FUNC_NAME}('react');\n${funcString}`
  }

  let stubObject: {
    name: 'exports' | 'module'
    exports?: React.FC
    default?: React.FC
  } = {
    name: 'exports',
    default: () => null,
  }

  if (funcString.includes('module.exports')) {
    stubObject = {
      name: 'module',
      default: undefined,
      exports: () => null,
    }
  }

  const func = new Function(GET_IMPORT_FUNC_NAME, stubObject.name, funcString)

  // console.log({ func: func.toString() })

  /**
   * funcString in CommonJS format has either of the two:
   * - `module.exports = MainComponent`
   * - `exports.default = MainComponent`
   *
   * We plug in our `stubObject` to get the exported component assigned to its property
   */
  func(getImport, stubObject)

  return stubObject.default ?? stubObject.exports
}

function getBabelTransformedFiles(files: Files) {
  return Object.keys(files).reduce<Files>((acc, fileName) => {
    const code = files[fileName]

    const transformResult = window.Babel.transform(code, {
      presets: [
        [window.Babel.availablePresets.react],
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

function loaderPlugin(files: Files): Plugin {
  return {
    name: 'loader',
    resolveId(source, importer, options) {
      if (files.hasOwnProperty(source)) {
        return source
      }

      if (source.startsWith('.')) {
        const fileName = `/${prepareFileNameWithExt(source)}`

        if (files.hasOwnProperty(fileName)) {
          return fileName
        }
      }

      return source
    },
    load(id) {
      if (files.hasOwnProperty(id)) {
        return files[id]
      }
    },
  }
}
