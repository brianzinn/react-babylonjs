import fs from 'node:fs'
import {
  JsxEmit,
  ModuleKind,
  NewLineKind,
  ScriptTarget,
  TranspileOptions,
  transpileModule,
} from 'typescript'
// import prettier, { Options as PrettierOptions } from 'prettier'
import { getFileSourcesWithRelativeImports } from './getFileSourcesWithRelativeImports'
import { transformAssetPaths } from './transformAssetPaths'

// const TRANSPILE_OPTIONS: TranspileOptions = {
//   reportDiagnostics: false,
//   compilerOptions: {
//     jsx: JsxEmit.Preserve,
//     module: ModuleKind.ESNext,
//     target: ScriptTarget.ESNext,
//     newLine: NewLineKind.CarriageReturnLineFeed,
//     // removeComments: false,
//   },
// }

// const prettierOptions: PrettierOptions = {
//   jsxBracketSameLine: false,
//   singleQuote: true,
//   tabWidth: 2,
//   trailingComma: 'es5',
//   semi: false,
//   printWidth: 80,
//   proseWrap: 'always',
//   parser: 'typescript',
// }

export const getSources = ({
  entryFileCode,
  dirPath,
}: {
  entryFileCode: string
  dirPath: string
}) => {
  const appFileString = transformAssetPaths(entryFileCode)

  // const unformattedJsx = transpileModule(appFileString, TRANSPILE_OPTIONS).outputText
  // const sourceJs = prettier.format(unformattedJsx, prettierOptions)

  const files = getFileSourcesWithRelativeImports(appFileString, dirPath)

  return { files }
}
