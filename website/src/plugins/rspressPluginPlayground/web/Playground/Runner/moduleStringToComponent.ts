import getImport from '_playground_virtual_imports'
import { GET_IMPORT_FUNC_NAME } from './constants'

export const moduleStringToComponent = (transformedCode: string) => {
  const runExports: Record<'default', React.FC | null> = { default: null }

  const func = new Function(GET_IMPORT_FUNC_NAME, 'exports', transformedCode)

  func(getImport, runExports)

  return runExports
}
