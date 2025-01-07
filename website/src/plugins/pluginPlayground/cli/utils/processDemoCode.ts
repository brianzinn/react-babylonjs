import path from 'node:path'
import { ENTRY_FILE_NAME } from '../../shared/constants'
import { getSourcesAndFiles } from './getSourcesAndFiles'
import { getPathWithExt, isRelativeImport, prepareFileNameWithExt } from '../../shared/files'
import { getAstBody } from './babel'

export const processDemoCode = async (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const filePath = getPathWithExt(importPath)
  const resolvedPath = path.join(dirname, filePath)

  const { sources, files } = await getSourcesAndFiles({ resolvedPath, importPath })

  const imports: Record<string, string> = {}

  const astBody = getAstBody(sources.tsx)
  for (const statement of astBody) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (isRelativeImport(importPath)) {
      const nested = await processDemoCode({ importPath, dirname })

      files[prepareFileNameWithExt(importPath)] = nested.files[`${ENTRY_FILE_NAME}.tsx`]
    } else {
      imports[importPath] = importPath
    }
  }

  return { files, imports }
}
