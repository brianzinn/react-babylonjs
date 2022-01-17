import { GatsbyNode } from 'gatsby'
import { getOptions } from 'loader-utils'
import * as ts from 'typescript'
import { Configuration } from 'webpack'

function transpileLoader(source: string) {
  //@ts-ignore
  const options = getOptions(this)

  console.log({ options })

  const js = (() => {
    try {
      return ts.transpileModule(source, {
        compilerOptions: {
          strict: false,
          esModuleInterop: true,
          jsx: ts.JsxEmit.Preserve,
          module: ts.ModuleKind.ESNext,
        },
      }).outputText
    } catch (e) {
      console.error(e)
      return '// Transpile from TSX failed.'
    }
  })()

  const json = JSON.stringify(js)

  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`
}

export default transpileLoader

export const handleCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const config: Configuration = {
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: [
            {
              loader: '',
              options: {
                compilerOptions: {
                  strict: false,
                  esModuleInterop: true,
                  jsx: ts.JsxEmit.Preserve,
                  module: ts.ModuleKind.ESNext,
                },
              },
            },
          ],
        },
      ],
    },
  }
  actions.setWebpackConfig(config)
}
