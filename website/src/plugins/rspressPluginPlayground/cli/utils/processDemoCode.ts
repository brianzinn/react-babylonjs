import path from 'node:path'
import { parseSync } from '@swc/core'
import { getSourcesAndFiles } from './getSourcesAndFiles'
import { getPathWithExt, localImportRegex } from './getImport'

export const processDemoCode = async (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = getPathWithExt(importPath)
  const resolvedPath = path.join(dirname, filePath)

  const { sources, files } = await getSourcesAndFiles({ resolvedPath, importPath })

  const parsed = parseSync(sources.tsx, {
    target: 'esnext',
    syntax: 'typescript',
    tsx: true,
  })

  const importPaths: Record<string, string> = {}
  const localImportSources: Record<string, string> = {}

  for (const statement of parsed.body) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (localImportRegex.test(importPath)) {
      const nested = await processDemoCode({ importPath, dirname })

      localImportSources[importPath] = nested.sources.tsx
    } else {
      importPaths[importPath] = importPath
    }
  }

  return {
    files,
    sources,
    importPaths,
    localImportSources,
  }
}
