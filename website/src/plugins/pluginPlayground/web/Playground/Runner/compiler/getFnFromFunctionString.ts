import getImport from '_playground_virtual_imports'
import { GET_IMPORT_FUNC_NAME } from '../constants'

enum ExportType {
  ModuleExports = 'module.exports',
  ExportsDefault = 'exports.default',
}

/**
 * In CommonJS default export is either of the two:
 * - `module.exports = MainComponent`
 * - `exports.default = MainComponent`
 *
 * We plug in our `stubObject` that mimics that form to get the exported component assigned to it
 */
export function getFnFromFunctionString(fnString: string) {
  let exportType

  if (fnString.includes(ExportType.ModuleExports)) {
    exportType = ExportType.ModuleExports
  } else if (fnString.includes(ExportType.ExportsDefault)) {
    exportType = ExportType.ExportsDefault
  } else {
    return
  }

  const [OBJECT_NAME, ASSIGN_TO_PROP] = exportType.split('.')

  const func = new Function(GET_IMPORT_FUNC_NAME, OBJECT_NAME, fnString)

  let stubObject: Record<string, React.FC> = {}

  func(getImport, stubObject)

  return stubObject[ASSIGN_TO_PROP]
}
