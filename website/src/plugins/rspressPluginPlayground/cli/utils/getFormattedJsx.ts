import prettier from 'prettier'
import { tsxToJsx } from './babel'

const formatCode = async (code: string, filePath: string) => {
  const fallbackConfig: prettier.Options = {
    printWidth: 100,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    semi: false,
  }

  // try to resolve .prettierrc config, or use a fallback
  const config = (await prettier.resolveConfig(filePath)) ?? fallbackConfig

  const result = await prettier.format(code, { ...config, parser: 'babel' })

  return result
}

const getFormattedJsx = async (code: string, filePath: string) => {
  const jsx = tsxToJsx(code)

  return await formatCode(jsx, filePath)
}

export { getFormattedJsx }
