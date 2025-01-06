import fs from 'node:fs'
import { SandpackFiles } from '@codesandbox/sandpack-react'
import { transformAssetPaths } from './transformAssetPaths'
import { getFormattedJsx } from './getFormattedJsx'

export const getSourcesAndFiles = async (params: { resolvedPath: string; importPath: string }) => {
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
  sources.jsx = await getFormattedJsx(sources.tsx, resolvedPath)

  files['App.tsx'] = sources.tsx

  return { sources, files }
}
