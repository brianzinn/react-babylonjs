export const localImportRegex = /^[./]+/
export const stripLocalImportPath = (importPath) => importPath.replace(localImportRegex, '')

export const getPathWithExt = (path) => {
  return path.endsWith('.tsx') ? path : `${path}.tsx`
}

export const prepareFileNameWithExt = (importPath) => {
  const baseName = stripLocalImportPath(importPath)

  return getPathWithExt(baseName)
}

const imports = new Map()

function getImport(importName, getDefault) {
  let name = importName

  if (localImportRegex.test(name)) {
    name = prepareFileNameWithExt(name)
  }

  if (!imports.has(name)) {
    throw new Error('Module ' + name + ' not found')
  }
  const result = imports.get(name)
  if (getDefault && typeof result === 'object') {
    return result.default || result
  }
  return result
}

export { imports }

export default getImport
