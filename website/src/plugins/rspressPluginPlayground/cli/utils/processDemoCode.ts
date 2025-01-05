import path from 'node:path'
import { getSourcesAndFiles } from './getSourcesAndFiles'
import { getPathWithExt, localImportRegex, prepareFileNameWithExt } from './getImport'
import { getAstBody } from './babel'

export const processDemoCode = async (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = getPathWithExt(importPath)
  const resolvedPath = path.join(dirname, filePath)

  const { sources, files } = await getSourcesAndFiles({ resolvedPath, importPath })

  const imports: Record<string, string> = {}
  const localImportSources: Record<string, string> = {}

  const astBody = getAstBody(sources.tsx)
  for (const statement of astBody) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (localImportRegex.test(importPath)) {
      const nested = await processDemoCode({ importPath, dirname })

      const nestedMainFile = nested.files['App.tsx']
      const nestedFileCode =
        typeof nestedMainFile === 'string' ? nestedMainFile : nestedMainFile.code

      const fileNameWithExt = prepareFileNameWithExt(importPath)

      localImportSources[fileNameWithExt] = nestedFileCode

      files[fileNameWithExt] = {
        code: nestedFileCode,
        hidden: true,
        readOnly: true,
      }
    } else {
      imports[importPath] = importPath
    }
  }

  return { files, imports, localImportSources }
}
