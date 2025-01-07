import { GET_IMPORT_FUNC_NAME } from '../constants'
import { getFnFromFunctionString } from './getFnFromFunctionString'
import { getBabelTransformedFiles } from './getBabelTransformedFiles'
import { getBundledCode } from './getBundledCode'

export type Files = Record<string, string>

export const getComponentFromCode = async (files: Files) => {
  if (!window.Babel) return

  const fileNames = Object.keys(files)
  // console.log({ fileNames })
  const entryFilename = fileNames.find((name) => name.includes('App'))

  const babelTransformedFiles = getBabelTransformedFiles(files)
  const bundledCodeString = await getBundledCode({
    entryFilename,
    files: babelTransformedFiles,
  })

  // console.log({ babelTransformedFiles })

  // This and some of the below should probably be done
  // in a transform plugin hook
  let fnString = bundledCodeString.replaceAll('require(', `${GET_IMPORT_FUNC_NAME}(`)

  if (!fnString.includes('const React =')) {
    fnString = `const React = ${GET_IMPORT_FUNC_NAME}('react');\n${fnString}`
  }

  const componentFn = getFnFromFunctionString(fnString)

  // console.log({ componentFn: componentFn.toString() })

  if (!componentFn) {
    throw new Error(`${entryFilename} needs to have a default export`)
  }

  return componentFn
}
