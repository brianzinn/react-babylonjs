import { getBundledCode } from './getBundledCode'
import { getBabelTransformedFiles } from './getBabelTransformedFiles'
import { getComponentFnFromCodeString } from './getFnFromFunctionString'

export type Files = Record<string, string>

export const compileComponentFromFiles = async (files: Files) => {
  if (!window.Babel) return

  // Rollup can't handle TSX, and its typescript plugin doesn't work in the browser.
  // Using @babel/standalone to transform TSX into JS
  const babelTransformedFiles = getBabelTransformedFiles(files)

  // Bundle files into a single chunk
  const bundledCode = await getBundledCode({
    files: babelTransformedFiles,
  })

  return getComponentFnFromCodeString(bundledCode)
}
