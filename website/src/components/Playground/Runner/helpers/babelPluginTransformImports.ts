import { createGetImport, createObjectPattern, createVariableDeclaration } from './ast'
import { Node } from '@babel/types'
import { PluginItem } from '@babel/core'

export const babelPluginTransformImports = (): PluginItem => {
  let hasReactImported = false

  return {
    visitor: {
      ImportDeclaration(path) {
        const pkg = path.node.source.value

        const code: Node[] = []
        const specifiers: (string | [string, string])[] = []

        for (const specifier of path.node.specifiers) {
          if (specifier.local.name === 'React') {
            hasReactImported = true
          }
          // import X from 'foo'
          if (specifier.type === 'ImportDefaultSpecifier') {
            // const ${specifier.local.name} = __get_import()
            code.push(createVariableDeclaration(specifier.local.name, createGetImport(pkg, true)))
          }
          // import * as X from 'foo'
          if (specifier.type === 'ImportNamespaceSpecifier') {
            // const ${specifier.local.name} = __get_import()
            code.push(createVariableDeclaration(specifier.local.name, createGetImport(pkg)))
          }
          // import { a, b, c } from 'foo'
          if (specifier.type === 'ImportSpecifier') {
            // import { foo: bar } from 'baz'
            if ('name' in specifier.imported && specifier.imported.name !== specifier.local.name) {
              // const {${specifier.imported.name}: ${specifier.local.name}} = __get_import()
              specifiers.push([specifier.imported.name, specifier.local.name])
            } else {
              // const {${specifier.local.name}} = __get_import()
              specifiers.push(specifier.local.name)
            }
          }
        }
        if (specifiers.length > 0) {
          code.push(
            createVariableDeclaration(createObjectPattern(specifiers), createGetImport(pkg))
          )
        }
        path.node && path.replaceWithMultiple(code)
      },
    },
    post(file) {
      // Auto import React
      if (!hasReactImported) {
        file.ast.program.body.unshift(
          createVariableDeclaration('React', createGetImport('react', true))
        )
      }
    },
  }
}
