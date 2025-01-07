import fs from 'node:fs'
import { SandpackFiles } from '@codesandbox/sandpack-react'
import { ENTRY_FILE_NAME } from '../../shared/constants'
import { transformAssetPaths } from './transformAssetPaths'
import { formatCode } from './formatCode'
import { transformTsxToJsx } from './transformTsxToJsx'

export const getFiles = async (params: { resolvedPath: string; importPath: string }) => {
  const { resolvedPath, importPath } = params

  const sources: Record<string, string> = {}
  const files: SandpackFiles = {}

  try {
    sources.tsx = fs.readFileSync(resolvedPath, { encoding: 'utf8' })
  } catch {
    throw new Error(`Could not find file at "${resolvedPath}".
      Make sure you have a file named "${importPath}.tsx"`)
  }

  sources.tsx = transformAssetPaths(sources.tsx)

  const transformResult = transformTsxToJsx(sources.tsx)
  if (transformResult?.code) {
    sources.jsx = await formatCode(transformResult.code, resolvedPath)
  }

  files[`${ENTRY_FILE_NAME}.tsx`] = sources.tsx

  const astBody = transformResult?.ast?.program.body ?? []

  return { files, astBody }
}
