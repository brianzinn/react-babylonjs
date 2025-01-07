import { TransformOptions, transformSync } from '@babel/core'

const transformOptions: TransformOptions = {
  ast: true,
  retainLines: true,
  // plugin-syntax-jsx allows to read JSX without transforming it to JS
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

/**
 * Use babel for TSX transform because:
 * - it can keep new lines
 * - it provides AST, so we can avoid parsing the file to process imports
 */
export const transformTsxToJsx = (code: string) => transformSync(code, transformOptions)
