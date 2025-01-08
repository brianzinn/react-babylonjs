const getImportFnString = `const imports = new Map()

function getImport(importName) {
  const result = imports.get(importName)

  if (!result) {
    throw new Error(\`Can't resolve \${importName}.\`)
  }

  return result.default ?? result
}

export { imports }

export default getImport`

/**
 * Prepares a string template to be injected into
 * node_modules with RspackVirtualModulePlugin.
 * It will be used to resolve external modules
 * when compiling code in the browser
 *
 * Usage:
 * import getImport from '_playground_virtual_modules'
 *
 * getImport('react')
 */
export const getVirtualModulesCode = (allImports: Record<string, string>) => {
  const importModuleNames = Object.keys(allImports)

  const importStatements = importModuleNames.map(
    (moduleName, index) => `import * as i_${index} from '${moduleName}';`
  )

  const importSetters = importModuleNames.map(
    (moduleName, index) => `imports.set('${moduleName}', i_${index});`
  )

  return [getImportFnString, '\n', ...importStatements, '\n', ...importSetters].join('\n')
}
