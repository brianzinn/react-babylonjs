import fs from 'node:fs'
import path from 'node:path'
import { extractRelativeImportsInfo } from './extractRelativeImportsInfo'

const APP_FILE_NAME = '/App.tsx'
const EXT_TSX = '.tsx'

export const getFileSourcesWithRelativeImports = (entryFileString: string, dirPath: string) => {
  const sources: Record<string, string> = { [APP_FILE_NAME]: entryFileString }

  const imports = extractRelativeImportsInfo(entryFileString)

  for (const { importPath, importStatement, fileName } of imports) {
    const importPathWithExt = importPath.endsWith(EXT_TSX) ? importPath : `${importPath}${EXT_TSX}`

    const filePath = path.resolve(dirPath, importPathWithExt)

    if (fileName) {
      sources[APP_FILE_NAME] = sources[APP_FILE_NAME].replace(
        importStatement,
        `import ${fileName} from './${fileName}'`
      )

      try {
        sources[`/${fileName}${EXT_TSX}`] = fs.readFileSync(filePath, 'utf-8')
      } catch (err) {
        throw new Error(
          `Could not find file at ${filePath}. Make sure you have a file named ${fileName}${EXT_TSX}`
        )
      }
    }
  }

  return sources
}
