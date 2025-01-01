import { PlaygroundProps } from './Playground'

export const dependencies: Record<string, string> = {
  'react-babylonjs': '3.2.2',
  '@babylonjs/core': '7.41.1',
  '@babylonjs/gui': '7.41.1',
  '@babylonjs/havok': '1.3.2',
  '@babylonjs/loaders': '7.41.1',
  '@babylonjs/materials': '7.41.1',
  '@babylonjs/procedural-textures': '7.41.1',
  'babylonjs-hook': '0.1.1',
  cannon: '0.6.2',
  earcut: '2.2.4',
}

// included in CS template
const defaultCodesandboxDependencies = ['react']

const depNames = Object.keys(dependencies)

// only include required dependencies for Codesandbox
export const getDependencies = (importPaths: PlaygroundProps['importPaths']) => {
  const paths: string[] = typeof importPaths === 'string' ? JSON.parse(importPaths) : importPaths

  const deps = paths.reduce<Record<string, string>>(
    (acc, importPath) => {
      const depName = depNames.find((name) => importPath.includes(name))

      if (depName) {
        acc[depName] = dependencies[depName]
      } else {
        if (!defaultCodesandboxDependencies.includes(importPath)) {
          console.warn(
            `Could resolve dependency for ${importPath}. Check the list of dependencies.`
          )
        }
      }

      return acc
    },
    {
      // peerDeps of react-babylonjs
      '@babylonjs/core': '7.41.1',
      '@babylonjs/gui': '7.41.1',
    }
  )

  return deps
}
