import type { Language } from './constants'

/** starting with ./ or ../  */
const relativeImportRegex = /^\.{1,2}\//

export const isRelativeImport = (importPath: string) => relativeImportRegex.test(importPath)

const stripRelativeImport = (importPath: string) => importPath.replace(/[./]+/, '')

export const getPathWithExt = (path: string, ext: Language) => {
  return path.endsWith(ext) ? path : `${path}.${ext}`
}

export const prepareFileNameWithExt = (importPath: string, ext: Language) => {
  const baseName = stripRelativeImport(importPath)

  return getPathWithExt(baseName, ext)
}
