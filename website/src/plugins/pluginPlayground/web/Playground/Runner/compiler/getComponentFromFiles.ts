import { getComponentFnFromCodeString } from './getFnFromFunctionString'
import { getBabelTransformedFiles } from './getBabelTransformedFiles'
import { getBundledCode } from './getBundledCode'

export type Files = Record<string, string>

export const getComponentFromFiles = async (files: Files) => {
  if (!window.Babel) return

  // Rollup can't handle TSX, and its typescript plugin doesn't work in the browser.
  // Using @babel/standalone transform TSX into JS
  const babelTransformedFiles = getBabelTransformedFiles(files)

  // Bundle files into a single chunk
  const bundledCode = await getBundledCode({
    files: babelTransformedFiles,
  })

  return getComponentFnFromCodeString(bundledCode)
}
