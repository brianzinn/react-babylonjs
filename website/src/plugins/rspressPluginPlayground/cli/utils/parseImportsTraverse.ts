import path from 'node:path'
import { parseSync } from '@swc/core'
import { getSourcesAndFiles } from './getSourcesAndFiles'
import { getPathWithExt, localImportRegex } from './getImport'

export const parseImportsTraverse = (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = getPathWithExt(importPath)
  const resolvedPath = path.join(dirname, filePath)

  const { sources, files } = getSourcesAndFiles({ resolvedPath, importPath })

  const parsed = parseSync(sources.tsx, {
    target: 'esnext',
    syntax: 'typescript',
    tsx: true,
  })

  const imports: Record<string, string> = {}
  const localImportSources: Record<string, string> = {}

  for (const statement of parsed.body) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (localImportRegex.test(importPath)) {
      const nested = parseImportsTraverse({ importPath, dirname })

      localImportSources[importPath] = nested.sources.tsx
    } else {
      imports[importPath] = importPath
    }
  }

  return {
    files,
    imports,
    sources,
    localImportSources,
  }
}
