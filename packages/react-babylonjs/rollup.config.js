import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')
const libraryName = pkg.name

const isProduction = process.env.NODE_ENV === 'production'
console.log('ENV:', process.env.NODE_ENV, libraryName)

const exportGlobals = {
  react: 'React',
  'react-dom': 'ReactDom',
  'react-reconciler': 'ReactReconciler',
  '@babylonjs/core': 'BabylonjsCore',
}

export default {
  input: `src/${libraryName}.ts`,
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: isProduction,
      globals: exportGlobals,
    },
  ],
  context: 'window',
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    isProduction && terser(),
  ],
}
