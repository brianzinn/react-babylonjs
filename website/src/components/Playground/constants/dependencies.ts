import { SandpackSetup } from '@codesandbox/sandpack-react'

export const dependencies: SandpackSetup['dependencies'] = {
  '@babylonjs/gui': '7.41.1',
  '@babylonjs/havok': '1.3.2',
  '@babylonjs/loaders': '7.41.1',
  '@babylonjs/materials': '7.41.1',
  '@babylonjs/procedural-textures': '7.41.1',
  'babylonjs-hook': '0.1.1',
  cannon: '0.6.2',
  earcut: '2.2.4',
}

export const defaultDependencies: SandpackSetup['dependencies'] = {
  '@babylonjs/core': '7.41.1',
  bootstrap: '5.1.3',
  'react-babylonjs': '3.2.2',
}
