import { TransformOptions, transformSync } from '@babel/core'

const transformOptions: TransformOptions = {
  ast: true,
  retainLines: true,
  plugins: ['@babel/plugin-syntax-jsx'], // read JSX without transforming it to JS
  presets: [['@babel/preset-typescript', { allExtensions: true, isTSX: true }]],
}

/**
 * Use babel for TSX transform because:
 * - unlike bundlers and typescript.transpileModule,
 *   it can keep both new lines and comments, keeping JSX consistent with TSX file
 * - it also returns file AST, so we can avoid parsing the file
 *   when collecting file's module imports
 */
export const transformTsxToJsx = (code: string) => {
  return transformSync(code, transformOptions)
}
