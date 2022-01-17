import type { TranspileOptions } from 'typescript'
import { JsxEmit, ModuleKind, transpileModule } from 'typescript'

export type Options = {
  esModule: boolean
  transpileOptions: TranspileOptions
}

export const TRANSPILE_OPTIONS = {
  esModule: false,
  transpileOptions: {
    compilerOptions: {
      strict: false,
      esModuleInterop: true,
      jsx: JsxEmit.Preserve,
      module: ModuleKind.ESNext,
      noEmitHelpers: true,
      downlevelIteration: false,
    },
  },
}

function transpileLoader(source: string) {
  //@ts-ignore
  const options: Partial<Options> = this.getOptions()

  const _options: Options = TRANSPILE_OPTIONS

  console.log('transpile-ts-loader options', JSON.stringify(_options, null, 2))

  const { esModule, transpileOptions } = _options

  const js = (() => {
    try {
      return transpileModule(source, transpileOptions).outputText
    } catch (e) {
      console.error(e)
      return '// Transpile from TSX failed.'
    }
  })()
  console.log('transpiled', js)

  const json = JSON.stringify(js)

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`
}

module.exports = transpileLoader
