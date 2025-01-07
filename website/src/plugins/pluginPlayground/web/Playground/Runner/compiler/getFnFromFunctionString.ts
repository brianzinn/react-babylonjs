import getImport from '_playground_virtual_modules'

const GET_IMPORT_FN = '__get_import'

type ExportObject = 'module' | 'exports'
type ExportProperty = 'exports' | 'default'

export function getComponentFnFromCodeString(code: string) {
  /**
   * In CommonJS default export is either of the two forms:
   * - `module.exports = Component`
   * - `exports.default = Component`
   *
   * We will plug in our `exportObject` into the function
   * to get the default exported componentFn assigned to it.
   */
  const exportObject: {
    [Prop in ExportProperty]?: React.FC
  } = {}

  const [OBJECT_NAME, ASSIGN_TO_PROP] = resolveExportType(code)

  const fnArgNames = [GET_IMPORT_FN, OBJECT_NAME] as const
  const fnCode = replaceRequireWithGetImport(code)

  const func = new Function(...fnArgNames, fnCode) as (
    getImportFn: typeof getImport,
    exportsObj: typeof exportObject
  ) => void

  /**
   * After this call:
   * - `getImport` would resolve external module imports
   * - `exportObject` would be `{ [ExportProperty]: componentFn }`
   *
   * Thus, we can grab the componentFn from `exportObject`
   */
  func(getImport, exportObject)

  const componentFn = exportObject[ASSIGN_TO_PROP]

  return componentFn
}

function resolveExportType(code: string): [ExportObject, ExportProperty] {
  if (code.includes('module.exports')) {
    return ['module', 'exports']
  } else if (code.includes('exports.default')) {
    return ['exports', 'default']
  } else {
    throw new Error(`Missing default export in the file`)
  }
}

/**
 * Replaces `require('module')` with `__get_import('module')`
 * to later call `getImport` that resolves external modules.
 *
 * This might better be done with a proper AST traversal,
 * but let's just say we are following the KISS principle here
 * (if we can say that after all of the above)
 */
function replaceRequireWithGetImport(code: string) {
  let fnString = code.replaceAll('require(', `${GET_IMPORT_FN}(`)

  if (!fnString.includes('const React =')) {
    fnString = `const React = ${GET_IMPORT_FN}('react');\n${fnString}`
  }

  return fnString
}
