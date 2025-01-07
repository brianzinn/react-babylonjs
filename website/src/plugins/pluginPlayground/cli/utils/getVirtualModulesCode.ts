import fs from 'node:fs'
import path from 'node:path'

export const getVirtualModulesCode = (allImports: Record<string, string>) => {
  const importModuleNames = Object.keys(allImports)

  const getImportFnString = fs.readFileSync(path.join(__dirname, './getImport.js'), 'utf-8')

  const importStatements = importModuleNames.map(
    (moduleName, index) => `import * as i_${index} from '${moduleName}';`
  )

  const importSetters = importModuleNames.map(
    (moduleName, index) => `imports.set('${moduleName}', i_${index});`
  )

  return [getImportFnString, '\n', ...importStatements, '\n', ...importSetters].join('\n')
}
