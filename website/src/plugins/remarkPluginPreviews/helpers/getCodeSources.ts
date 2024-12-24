import fs from 'node:fs'
import {
  JsxEmit,
  ModuleKind,
  NewLineKind,
  ScriptTarget,
  TranspileOptions,
  transpileModule,
} from 'typescript'

const TRANSPILE_OPTIONS: TranspileOptions = {
  reportDiagnostics: false,
  compilerOptions: {
    jsx: JsxEmit.Preserve,
    module: ModuleKind.ESNext,
    target: ScriptTarget.ESNext,
    newLine: NewLineKind.CarriageReturnLineFeed,
    // removeComments: false,
  },
}

export const getCodeSources = ({ fileBase, dirPath }: { fileBase: string; dirPath: string }) => {
  const sourceFilePath = `${dirPath}/${fileBase}.tsx`

  let sourceTsx

  try {
    sourceTsx = fs.readFileSync(sourceFilePath, 'utf-8')
  } catch (err) {
    throw new Error(
      `Could not find file at ${sourceFilePath}. Make sure you have a file named ${fileBase}.tsx`
    )
  }

  const sourceJsx = transpileModule(sourceTsx, TRANSPILE_OPTIONS).outputText

  const tsx = '```tsx\n' + sourceTsx + '\n```'
  const jsx = '```jsx\n' + sourceJsx + '\n```'

  return { tsx, jsx }
}
