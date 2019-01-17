import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json';

const pkg = require('./package.json')
const camelCase = require('lodash.camelcase')

const libraryName = 'react-babylonjs'

export default {
  input: `compiled/${libraryName}.js`,
  output: [
	  {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        babylonjs: 'BABYLON',
        'babylonjs-gui': 'BABYLON.GUI'
      }
    }, {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  context: 'window',
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [ 'react', 'babylonjs', 'babylonjs-gui', 'babylonjs-loaders'],
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    json(),

    // Resolve source maps to the original source
    sourceMaps()
  ]
}
