const visit = require('unist-util-visit')
const { dirname, resolve } = require('path')

const ts = require('typescript')
const { readFileSync } = require('fs')
const prettier = require('prettier')

module.exports = (meta, pluginOptions) => {
  // console.log(meta)
  const { markdownAST, markdownNode } = meta

  visit(markdownAST, 'paragraph', (currentMarkdownNode, idx) => {
    const c = currentMarkdownNode.children[0]
    const { type, identifier } = c
    if (type !== 'linkReference' || !identifier.startsWith('demo:')) return
    const [junk, fname] = identifier.split(/:/)

    const { fileAbsolutePath } = markdownNode

    absoluteDir = dirname(fileAbsolutePath)

    const fullFname = resolve(absoluteDir, fname)
    console.log(fullFname)

    const source = readFileSync(fullFname, { encoding: 'utf-8' })
    const formattedSource = prettier.format(source, {
      jsxBracketSameLine: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      semi: false,
      printWidth: 80,
      proseWrap: 'always',
    })
    // console.log(source)

    // const result = ts.transpileModule(source, {
    //   compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: 'preserve' },
    // })

    // console.log(result)
    // console.log(JSON.stringify(markdownAST, null, 2))
    markdownAST.children.splice(idx, 0, {
      type: 'code',
      lang: 'typescript',
      position: {
        start: {
          line: 24,
          column: 1,
          offset: 487,
        },
        end: {
          line: 34,
          column: 4,
          offset: 654,
        },
      },
      meta: null,
      value: formattedSource,
    })

    const [moduleName] = fname.split('.')
    const importSymbol = `Component_${moduleName}`
    markdownAST.children.unshift({
      type: 'import',
      value: `import ${importSymbol} from './${moduleName}'`,
    })

    currentMarkdownNode.type = 'jsx'
    currentMarkdownNode.children = []
    currentMarkdownNode.value = `
<ReactDemo >
  <${importSymbol}/>
</ReactDemo>
`

    return currentMarkdownNode
  })
  console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST
}
