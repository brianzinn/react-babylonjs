const visit = require('unist-util-visit')
const { dirname, resolve, basename } = require('path')

const ts = require('typescript')
const { readFileSync } = require('fs')
const prettier = require('prettier')

function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * max)
}

module.exports = (meta, pluginOptions) => {
  // console.log(meta)
  const { markdownAST, markdownNode } = meta

  const seen = {}

  visit(markdownAST, 'paragraph', (currentMarkdownNode, idx) => {
    const c = currentMarkdownNode.children[0]
    const { type, label } = c
    if (type !== 'linkReference') return
    const [shortCodeType] = label.split(':')

    const [junk, fname] = label.split(/:/)

    const { fileAbsolutePath } = markdownNode

    const absoluteDir = dirname(fileAbsolutePath)

    const fullFname = resolve(absoluteDir, fname)
    console.log(fullFname)

    // console.log(JSON.stringify(currentMarkdownNode, null, 2))
    switch (shortCodeType) {
      case 'code':
        {
          const source = readFileSync(fullFname, { encoding: 'utf-8' })
          const formattedSource = prettier.format(`// ${basename(fullFname)}\n\n${source}`, {
            jsxBracketSameLine: false,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'es5',
            semi: false,
            printWidth: 80,
            proseWrap: 'always',
          })
          currentMarkdownNode.type = 'code'
          currentMarkdownNode.lang = 'typescript'
          currentMarkdownNode.children = []
          currentMarkdownNode.meta = null
          currentMarkdownNode.value = formattedSource
        }
        break
      case 'demo':
        {
          const [moduleName] = fname.split('.')
          const importSymbol = `Component_${moduleName}`
          if (!seen[moduleName]) {
            markdownAST.children.unshift({
              type: 'import',
              value: `import ${importSymbol} from './${moduleName}'`,
            })
            seen[moduleName] = true
            console.log(JSON.stringify(markdownAST.children, null, 2))
          }
          currentMarkdownNode.type = 'jsx'
          currentMarkdownNode.children = []
          currentMarkdownNode.value = `
            <ReactDemo >
              <${importSymbol}/>
            </ReactDemo>
          `
        }
        break
    }
    return
  })
  // console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST
}
