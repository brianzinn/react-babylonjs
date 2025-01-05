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

function getImport(importName, isDefault = true) {
  let name = importName

  if (localImportRegex.test(name)) {
    name = prepareFileNameWithExt(name)
  }

  const result = imports.get(name)

  if (!result) {
    throw new Error(
      `${isDefault ? 'Default module' : 'Module'} ${name} not found in imports. Available keys:
      ${JSON.stringify(Array.from(imports.keys()))}`
    )
  }

  return isDefault && result?.default ? result.default : result
}

export { imports }

export default getImport
