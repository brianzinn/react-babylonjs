import path from 'node:path'
import fs from 'node:fs'
import { ModuleItem, parseSync } from '@swc/core'
import { getCodeSnippets } from './getCodeSnippets'

export const parseImportsTraverse = (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = importPath.endsWith('.tsx') ? importPath : `${importPath}.tsx`
  const resolvedPath = path.join(dirname, filePath)

  let sourceTsx = ''

  const files: Record<string, string> = {}

  try {
    sourceTsx = fs.readFileSync(resolvedPath, { encoding: 'utf8' })
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

  const imports: Record<string, ModuleItem> = {}
  const importPaths = new Set()

  for (const statement of parsed.body) {
    if (statement.type === 'ImportDeclaration') {
      const importPath = statement.source.value

      imports[importPath] = statement
      importPaths.add(importPath)

      if (importPath.startsWith('.')) {
        const nested = parseImportsTraverse({ importPath, dirname })
        const fileName = importPath.endsWith('.tsx') ? importPath : `${importPath}.tsx`

        files[`/${fileName}`] = nested.code
        Object.assign(imports, nested.imports)
      }
    }
  }

  const codeSnippets = getCodeSnippets(sourceTsx)

  return { files, code: sourceTsx, codeSnippets, imports, importNames: Object.keys(imports) }
}
