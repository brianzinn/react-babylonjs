// starts with ./ or ../
const relativeImportRegex = /^\.{1,2}\//

export const isRelativeImport = (importPath: string) => relativeImportRegex.test(importPath)

const stripRelativeImport = (importPath: string) => importPath.replace(/[./]+/, '')

export const getPathWithExt = (path: string, ext = 'tsx') => {
  return path.endsWith(ext) ? path : `${path}.${ext}`
}

export const prepareFileNameWithExt = (importPath: string) => {
  const baseName = stripRelativeImport(importPath)

  return getPathWithExt(baseName)
}
