import { Language } from '@pluginPlayground/shared/constants'
import { getRollupBundledCode } from './getRollupBundledCode'
import { getBabelTransformedFiles } from './getBabelTransformedFiles'
import { getComponentFnFromCodeString } from './getFnFromFunctionString'

export type Files = Record<string, string>

export const compileComponentFromFiles = async (files: Files, language: Language) => {
  if (!window.Babel) return

  // Rollup requires plugins to handle JSX/TSX,
  // but they don't work in the browser.
  // Using @babel/standalone to transform JSX/TSX into JS
  const babelTransformedFiles = getBabelTransformedFiles({ files, language })

  // Bundle files into a single chunk
  const bundledCode = await getRollupBundledCode({
    language,
    files: babelTransformedFiles,
  })

  return getComponentFnFromCodeString(bundledCode)
}
