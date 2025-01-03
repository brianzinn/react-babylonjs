import { transformSync } from '@babel/core'
import prettier from 'prettier'

const babelTransform = (code: string) => {
  const result = transformSync(code, {
    retainLines: true,
    // plugin-syntax-jsx allows to read JSX without transforming it
    plugins: ['@babel/plugin-syntax-jsx'],
    presets: [
      [
        '@babel/preset-typescript',
        {
          allExtensions: true,
          isTSX: true,
        },
      ],
    ],
  })

  return result?.code ?? ''
}

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
  const jsx = babelTransform(code)

  return await formatCode(jsx, filePath)
}

export { getFormattedJsx }
