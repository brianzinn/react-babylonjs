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

export const getCodeSnippets = (sourceTsx: string) => {
  const sourceJsx = transpileModule(sourceTsx, TRANSPILE_OPTIONS).outputText

  const tsx = '```tsx\n' + sourceTsx + '\n```'
  const jsx = '```jsx\n' + sourceJsx + '\n```'

  return { tsx, jsx }
}
