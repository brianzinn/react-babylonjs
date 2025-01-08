import path from 'node:path'
import { EntryFiles, Language } from '../../shared/constants'
import { getPathWithExt, isRelativeImport, prepareFileNameWithExt } from '../../shared/pathHelpers'
import { getFiles } from './getFiles'

export const getFilesAndImports = async (params: { importPath: string; dirname: string }) => {
  const { importPath, dirname } = params

  const resolvedPath = path.join(dirname, getPathWithExt(importPath, Language.tsx))

  const { files, astBody } = await getFiles({ resolvedPath, importPath })

  const imports: Record<string, string> = {}

  // Could this be done through Babel plugins in transformTsxToJsx?
  for (const statement of astBody) {
    if (statement.type !== 'ImportDeclaration') continue

    const importPath = statement.source.value

    if (isRelativeImport(importPath)) {
      // Make relative imports available in the code editor
      const nested = await getFilesAndImports({ importPath, dirname })

      files[Language.tsx][prepareFileNameWithExt(importPath, Language.tsx)] =
        nested.files[Language.tsx][EntryFiles.tsx]

      files[Language.jsx][prepareFileNameWithExt(importPath, Language.jsx)] =
        nested.files[Language.jsx][EntryFiles.jsx]
    } else {
      // external modules will be resolved through _playground_virtual_modules
      imports[importPath] = importPath
    }
  }

  return { files, imports }
}
