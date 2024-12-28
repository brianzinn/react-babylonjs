import path from 'node:path'
import fs from 'node:fs'
import { parseSync } from '@swc/core'
import { getCodeSnippets } from './getCodeSnippets'
import { getPathWithExt, localImportRegex } from './getImport'
import { transformAssetPaths } from './transformAssetPaths'

export const parseImportsTraverse = (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = getPathWithExt(importPath)
  const resolvedPath = path.join(dirname, filePath)

  let sourceTsx = ''

  const files: Record<string, string> = {}

  try {
    const sourceBase = fs.readFileSync(resolvedPath, { encoding: 'utf8' })

    sourceTsx = transformAssetPaths(sourceBase)
    files['/App.tsx'] = sourceTsx
  } catch {
    throw new Error(`Could not find file at "${resolvedPath}".
      Make sure you have a file named "${importPath}.tsx"`)
  }

  const parsed = parseSync(sourceTsx, {
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

      localImportSources[importPath] = nested.sourceTsx
    } else {
      imports[importPath] = importPath
    }
  }

  const codeSnippets = getCodeSnippets(sourceTsx)

  return {
    files,
    imports,
    sourceTsx,
    codeSnippets,
    localImportSources,
  }
}
