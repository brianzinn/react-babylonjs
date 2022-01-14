const { readFileSync } = require('fs')
const { basename, dirname, resolve } = require('path')
const prettier = require('prettier')

function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * max)
}

module.exports = (meta, pluginOptions) => {
  const _options = {
    development: {
      style: pluginOptions?.development?.style || {
        margin: 5,
        padding: 5,
        border: '1px solid white',
        backgroundColor: 'black',
        color: 'white',
      },
    },
    codesandbox: {
      mode: pluginOptions?.codesandbox?.mode || 'iframe',
      customTemplates: {
        default: pluginOptions.codesandbox?.customTemplates?.default || {
          extends: 'file:./codesandbox-template',
          entry: './src/App.tsx',
        },
      },
    },
  }
  console.log('options', JSON.stringify(_options, null, 2))
  const { markdownAST, markdownNode } = meta

  const seen = {}

  const isCodeOrDemo = (type) => {
    return ['code', 'demo'].includes(type)
  }

  const isLinkReference = (node) => {
    return node.type === 'linkReference'
  }

  markdownAST.children.forEach((currentMarkdownNode) => {
    const { type } = currentMarkdownNode
    if (!isLinkReference(currentMarkdownNode)) return
    const { label } = currentMarkdownNode
    if (!label) return
    const [shortCodeType, fname] = label.split(':')
    if (!isCodeOrDemo(shortCodeType)) return
    const { fileAbsolutePath } = markdownNode
    const absoluteDir = dirname(fileAbsolutePath)
    const fullFname = resolve(absoluteDir, fname)
    console.log(fullFname)

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
          // Typescript kung fu to convert to a Code node
          ;((node) => {
            node.type = 'code'
            node.lang = 'typescript'
            node.meta = null
            node.value = formattedSource
          })(currentMarkdownNode)
        }
        break
      case 'demo':
        {
          const [moduleName, ext] = fname.split('.')
          const importSymbol = `Component_${moduleName}`
          if (!seen[moduleName]) {
            markdownAST.children.unshift({
              type: 'import',
              value: `import ${importSymbol} from './${moduleName}'`,
            })
            seen[moduleName] = true
            console.log(JSON.stringify(markdownAST.children, null, 2))
          }
          ;((node) => {
            node.type = 'jsx'
            node.value = `
              <div style={${JSON.stringify(_options.development.style)}}>
                <${importSymbol}/>
              </ReactDemo>
            `
          })(currentMarkdownNode)
        }
        break
    }
  })

  // console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST
}
