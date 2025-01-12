import fs from 'node:fs'
import { EntryFiles, Language } from '../../shared/constants'
import type { PlaygroundProps } from '../../shared/types'
import { formatCode } from './formatCode'
import { transformAssetPaths } from './transformAssetPaths'
import { transformTsxToJsx } from './transformTsxToJsx'

/**
 * Create files object for Sandpack
 */
export const getFiles = async (params: { resolvedPath: string; importPath: string }) => {
  const { resolvedPath, importPath } = params

  const files: PlaygroundProps['files'] = {
    [Language.tsx]: {},
    [Language.jsx]: {},
  }

  let tsxCode = ''
  try {
    tsxCode = transformAssetPaths(
      fs.readFileSync(resolvedPath, {
        encoding: 'utf8',
      })
    )
  } catch {
    throw new Error(`Could not find file at "${resolvedPath}".
      Make sure you have a file named "${importPath}.tsx"`)
  }

  const tsxToJsxResult = transformTsxToJsx(tsxCode)
  const astBody = tsxToJsxResult?.ast?.program.body ?? []

  if (tsxToJsxResult?.code) {
    files.jsx[EntryFiles.jsx] = await formatCode(tsxToJsxResult.code, resolvedPath)
  }

  files.tsx[EntryFiles.tsx] = tsxCode

  return { files, astBody }
}
