import { TransformOptions, transformSync } from '@babel/core'

const transformOptions: TransformOptions = {
  ast: true,
  retainLines: true,
  // plugin-syntax-jsx allows to read JSX without transforming it to JS
  plugins: ['@babel/plugin-syntax-jsx'],
  presets: [['@babel/preset-typescript', { allExtensions: true, isTSX: true }]],
}

/**
 * Use babel for TSX transform because:
 * - unlike bundlers and typescript.transpileModule, it can keep both new lines and comments, keeping JSX consistent with TSX file
 * - it also returns file AST, so we can avoid parsing the file again when collecting file's module imports
 */
export const transformTsxToJsx = (code: string) => {
  return transformSync(code, transformOptions)
}
