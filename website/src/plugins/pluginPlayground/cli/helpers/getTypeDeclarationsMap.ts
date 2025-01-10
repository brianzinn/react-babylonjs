import path from 'node:path'
import fsPromises from 'node:fs/promises'

type TypeDirEntry = {
  // Root directory of the module
  moduleDir: string
  // Types directory, if different from moduleDir
  // Eg: '@types/react'
  typesDir?: string
  // Dist directory, if different from moduleDir
  distDir?: string
  // // Entry file, if different from index.d.ts
  // entry?: string
  // Only read these files
  include?: string[]
}

const typeDirs: TypeDirEntry[] = [
  {
    moduleDir: 'react',
    typesDir: '@types/react',
    include: ['index.d.ts', 'global.d.ts'],
  },
  {
    moduleDir: 'react-babylonjs',
    // distDir: 'dist',
    include: ['dist/', 'package.json'],
    // entry: 'react-babylonjs.d.ts',
  },
  { moduleDir: '@babylonjs/core' },
  { moduleDir: '@babylonjs/gui' },
]

// For script testing
// const typesMap = await getTypeDeclarationsMap()
// console.log(Object.keys(typesMap))

type FilePath = string
type FileContent = string
type TypeDeclarationsMap = Record<FilePath, FileContent>

/**
 * Builds a map of d.ts files content: `{ "path/to/index.d.ts": fileContentString }`
 *
 * Type declarations are needed for intellisense to work in MonacoEditor
 */
export async function getTypeDeclarationsMap(): Promise<Record<FilePath, FileContent>> {
  const typesMap: TypeDeclarationsMap = {}

  for (const entry of typeDirs) {
    const dirTypesMap = await getDirTypeDeclarations(entry)

    Object.assign(typesMap, dirTypesMap)
  }

  return typesMap
}

async function getDirTypeDeclarations(params: TypeDirEntry) {
  const filePromises = await getFilePromises(params)

  const filePromiseResults = await Promise.allSettled(filePromises)

  return filePromiseResults.reduce<TypeDeclarationsMap>((acc, result) => {
    if (result.status === 'fulfilled') {
      const [moduleFilePath, content] = result.value

      acc[moduleFilePath] = content
    } else {
      console.error(result.reason)
    }

    return acc
  }, {})
}

async function getFilePromises(params: TypeDirEntry) {
  const dtsAbsolutePaths = await getDtsAbsolutePaths(params)

  return dtsAbsolutePaths.flatMap((absolutePath) => {
    const moduleFilePath = prepareModulePath(absolutePath, params)

    if (!moduleFilePath) return []

    return fsPromises.readFile(absolutePath, 'utf8').then((content) => [moduleFilePath, content])
  })
}

function prepareModulePath(absolutePath: string, params: TypeDirEntry) {
  // E.g.:
  // absolutePath = "/react-babylonjs/website/node_modules/@types/react/index.d.ts"
  // moduleFilePath = "@types/react/index.d.ts"
  let moduleFilePath = absolutePath.match(/node_modules.*/)?.[0]

  if (!moduleFilePath) return

  const { moduleDir, typesDir = moduleDir } = params

  if (moduleDir !== typesDir) {
    // E.g.: @types/react -> react
    moduleFilePath = moduleFilePath.replace(typesDir, moduleDir)
  }

  // if (entry && moduleFilePath === path.join(moduleDir, entry)) {
  //   // E.g.: react-babylonjs/react-babylonjs.d.ts -> react-babylonjs/index.d.ts
  //   // Otherwise, intellisense wouldn't figure it out, as it doesn't have access to package.json
  //   // Can we maybe copy package.json too?
  //   moduleFilePath = moduleFilePath.replace(entry, 'index.d.ts')
  // }

  return moduleFilePath
}

async function getDtsAbsolutePaths(params: TypeDirEntry) {
  try {
    const { moduleDir, typesDir = moduleDir, include = [] } = params

    // grab types from the root node_modules to ensure that babylonjs and react-babylonjs types are aligned
    const typesDirPath = path.join(process.cwd(), '../node_modules', typesDir)

    const entries = await fsPromises.readdir(typesDirPath, {
      recursive: true,
      withFileTypes: true,
    })

    const includedPaths = include.map((includedPath) => path.join(typesDirPath, includedPath))

    const dtsFiles = entries.flatMap((entry) => {
      if (!entry.isFile() || !(entry.name.endsWith('.d.ts') || entry.name === 'package.json'))
        return []

      const absolutePath = path.join(entry.parentPath, entry.name)

      if (
        includedPaths.length &&
        !includedPaths.some((includedPath) => absolutePath.includes(includedPath))
      ) {
        return []
      }

      return absolutePath
    })

    return dtsFiles
  } catch (error) {
    console.error('Error:', error)

    return []
  }
}
