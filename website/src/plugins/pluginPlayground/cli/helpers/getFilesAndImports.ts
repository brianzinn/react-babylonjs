import path from 'node:path'
import { ENTRY_FILE_NAME } from '../../shared/constants'
import { getPathWithExt, isRelativeImport, prepareFileNameWithExt } from '../../shared/files'
import { getFiles } from './getFiles'

export const getFilesAndImports = async (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const resolvedPath = path.join(dirname, getPathWithExt(importPath))

  const { files, astBody } = await getFiles({ resolvedPath, importPath })

  const imports: Record<string, string> = {}

  // Could this be done through Babel plugins in transformTsxToJsx?
  for (const statement of astBody) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (isRelativeImport(importPath)) {
      const nested = await getFilesAndImports({ importPath, dirname })

      files[prepareFileNameWithExt(importPath)] = nested.files[`${ENTRY_FILE_NAME}.tsx`]
    } else {
      // external modules will be resolved through _playground_virtual_modules
      imports[importPath] = importPath
    }
  }

  return { files, imports }
}
