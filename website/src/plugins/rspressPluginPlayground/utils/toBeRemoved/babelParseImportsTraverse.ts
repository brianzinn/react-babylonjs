// import path from 'node:path'
// import fs from 'node:fs'
// import type { Program, Statement } from '@babel/types'
// import { parseSync, transformFromAstSync } from '@babel/core'
// import { availablePresets } from '@babel/standalone'
// import '@babel/preset-react'
// import '@babel/preset-typescript'

// const babelPresets = [
//   [availablePresets.typescript, { allExtensions: true, isTSX: true }],
//   [availablePresets.react, { runtime: 'automatic' }],
//   [availablePresets.env],
// ]

// export const parseImportsTraverse = (params: { importPath: string; dirname: string }) => {
//   const { importPath, dirname } = params

//   const filePath = importPath.endsWith('.tsx') ? importPath : `${importPath}.tsx`
//   const resolvedPath = path.join(dirname, filePath)
//   const fileName = path.basename(filePath)

//   // console.log({ resolvedPath, fileName })

//   let code = ''

//   try {
//     code = fs.readFileSync(resolvedPath, { encoding: 'utf8' })
//   } catch (err) {
//     throw new Error(`Could not find file at "${resolvedPath}".
//       Make sure you have a file named "${importPath}.tsx"
//       ${err}`)
//   }

//   let parseResult
//   try {
//     parseResult = parseSync(code, {
//       ast: true,
//       comments: false,
//       filename: importPath,
//       presets: babelPresets,
//     })
//   } catch (err) {
//     throw new Error(`Could not parse file at "${resolvedPath}".
//       ${err}`)
//   }

//   if (!parseResult) return

//   const imports: Record<string, Statement> = {}
//   const newBody: Statement[] = []

//   for (const statement of parseResult.program.body) {
//     if (statement.type === 'ImportDeclaration') {
//       const importPath = statement.source.value

//       if (importPath.startsWith('.')) {
//         const nested = parseImportsTraverse({ importPath, dirname })

//         if (nested) {
//           Object.assign(imports, nested.imports)
//           newBody.push(...nested.newBody)
//         }
//       } else {
//         imports[importPath] = statement
//       }
//     } else {
//       newBody.push(statement)
//     }
//   }

//   const transformed = transformFromAstSync(
//     { ...parseResult, program: { ...parseResult.program, body: newBody } },
//     code,
//     {
//       // ast: true,
//       // sourceMaps: 'inline',
//       // targets: { chrome: true },
//       filename: importPath,
//       presets: babelPresets,
//     }
//   )

//   console.log({ transformed: transformed?.code })

//   // console.log(
//   //   transformed?.code &&
//   //     parseSync(transformed.code, {
//   //       comments: false,
//   //       filename: importPath,
//   //       presets: babelPresets,
//   //     })
//   // )

//   return { code, imports, newBody, importDeps: Object.keys(imports) }
// }
