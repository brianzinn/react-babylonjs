import { parseSync, transformSync } from '@babel/core'

const sharedConfig = {
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
}

const tsxToJsx = (code: string) => {
  const result = transformSync(code, {
    retainLines: true,
    ...sharedConfig,
  })

  return result?.code ?? ''
}

const getAstBody = (code: string) => {
  const result = parseSync(code, {
    ast: true,
    code: false,
    ...sharedConfig,
  })

  return result?.program.body ?? []
}

export { tsxToJsx, getAstBody }
