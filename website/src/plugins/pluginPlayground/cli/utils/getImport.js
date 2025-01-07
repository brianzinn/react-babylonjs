const imports = new Map()

function getImport(importName) {
  const result = imports.get(importName)

  if (!result) {
    throw new Error(`Can't resolve ${importName}.`)
  }

  return result.default ?? result
}

export { imports }

export default getImport
