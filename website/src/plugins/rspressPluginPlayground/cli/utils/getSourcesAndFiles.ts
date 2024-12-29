import fs from 'node:fs'
import {
  JsxEmit,
  ModuleKind,
  NewLineKind,
  ScriptTarget,
  TranspileOptions,
  transpileModule,
} from 'typescript'
import { transformAssetPaths } from './transformAssetPaths'
import { APP_FILE_NAME } from '../../constants/files'

const TRANSPILE_OPTIONS: TranspileOptions = {
  reportDiagnostics: false,
  compilerOptions: {
    jsx: JsxEmit.Preserve,
    module: ModuleKind.ESNext,
    target: ScriptTarget.ESNext,
    newLine: NewLineKind.CarriageReturnLineFeed,
    removeComments: false,
  },
}

export const getSourcesAndFiles = (params: { resolvedPath: string; importPath: string }) => {
  const { resolvedPath, importPath } = params

  const sources: Record<string, string> = {}
  const files: Record<string, string> = {}

  try {
    const sourceTsxBase = fs.readFileSync(resolvedPath, { encoding: 'utf8' })

    sources.tsx = transformAssetPaths(sourceTsxBase)
    sources.jsx = transpileModule(sources.tsx, TRANSPILE_OPTIONS).outputText

    files[`/${APP_FILE_NAME}.tsx`] = sources.tsx
    files['/JS.jsx'] = sources.jsx
  } catch {
    throw new Error(`Could not find file at "${resolvedPath}".
      Make sure you have a file named "${importPath}.tsx"`)
  }

  return { sources, files }
}
