import { forEach } from '@s-libs/micro-dash'
import { existsSync, readFileSync } from 'fs'
import { NodePluginArgs } from 'gatsby'
import { basename, dirname, resolve } from 'path'
import prettier, { Options as PrettierOptions } from 'prettier'
import { env } from 'process'
import { CSSProperties } from 'react'
//@ts-ignore Can't figure out ambient module declaration for a subpackage
import codesandbox from 'remark-codesandbox/gatsby'
import { PartialDeep, SetOptional } from 'type-fest'
import * as ts from 'typescript'
import visit from 'unist-util-visit'
import type { Code, Content, Jsx, LinkReference, Parent, Tsx } from './mdast'

type ShortcodeNames = 'devtool' | 'code'

const IS_DEVELOPMENT_MODE = env['NODE_ENV'] === 'development'

type MaybeParent = SetOptional<Parent, 'children'>

type CustomTemplate = {
  extends: string
  entry: string
}

export type PluginOptions = {
  development: {
    style: CSSProperties
  }
  prettier: PrettierOptions
  codesandbox: {
    mode: 'iframe' | 'button' | 'meta'
    defaultQuery: CodeSandBoxQuery
    customTemplates: {
      [_: string]: CustomTemplate
      default: CustomTemplate
    }
  }
}

type CodeSandBoxQuery = {
  template: string
  fontsize: string
  hidenavigation: '0' | '1'
  theme: 'dark' | 'light'
  entry: string
  module: string
  style: string
}

type MarkdownAST = Parent

type GatsbyMdxNodeId = string

type GatsbyMdxNode = {
  id: GatsbyMdxNodeId
  children: GatsbyMdxNode[]
  parent: GatsbyMdxNodeId
  internal: {
    content: any
    type: `Mdx` | 'File'
  }
  frontmatter: {
    title: string
    [key: string]: string
  }
  excerpt: string
  exports: any
  rawBody: string
}

type GatsbyMdxFileNode = GatsbyMdxNode & {
  internal: GatsbyMdxNode['internal'] & {
    type: 'File'
  }
  fileAbsolutePath: string
}

type GatsbyMdxPluginMeta = NodePluginArgs & {
  markdownAST: MarkdownAST
  markdownNode: GatsbyMdxFileNode
}

type GatsbyMdxPlugin<TOptions extends {}> = (
  meta: GatsbyMdxPluginMeta,
  pluginOptions: PartialDeep<TOptions>
) => Promise<MarkdownAST>

const guid = (() => {
  let id = +new Date()
  return () => `g${++id}`
})()

export const TRANSPILE_OPTIONS: ts.TranspileOptions = {
  compilerOptions: {
    noImplicitAny: true,
    strictNullChecks: true,
    strictFunctionTypes: true,
    strictPropertyInitialization: true,
    strictBindCallApply: true,
    noImplicitThis: true,
    noImplicitReturns: true,
    alwaysStrict: true,
    esModuleInterop: true,
    declaration: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    strict: false,
    target: ts.ScriptTarget.ES2017,
    jsx: ts.JsxEmit.Preserve,
    module: ts.ModuleKind.ESNext,
    noEmitHelpers: true,
    downlevelIteration: false,
    removeComments: false,
  },
}

const plugin: GatsbyMdxPlugin<PluginOptions> = async (meta, pluginOptions) => {
  const _options: PluginOptions = {
    development: {
      style: (pluginOptions?.development?.style as CSSProperties | undefined) || {
        marginTop: '20px',
        padding: '16px',
        border: '15px solid rgb(245, 247, 249)',
        backgroundColor: 'black',
        color: 'white',
        marginBottom: '20px',
      },
    },
    prettier: {
      jsxBracketSameLine: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      semi: false,
      printWidth: 80,
      proseWrap: 'always',
      parser: 'typescript',
    },
    codesandbox: {
      mode: pluginOptions?.codesandbox?.mode || 'meta',
      defaultQuery: {
        template: 'default',
        entry: 'src/App.tsx',
        fontsize: '14px',
        hidenavigation: '0',
        theme: 'dark',
        module: '',
        style: '',
      },
      customTemplates: {
        //@ts-ignore
        default: (pluginOptions.codesandbox?.customTemplates?.default as
          | CustomTemplate
          | undefined) || {
          extends: `file:${__dirname}/../src/codesandbox-template`,
          entry: 'src/App.tsx',
        },
        ...pluginOptions.codesandbox?.customTemplates,
      },
    },
  }
  // console.log('options', _options)
  const { markdownAST, markdownNode } = meta
  // console.log({ meta })

  // Import the DevTool component
  {
    const node: Content = {
      type: 'import',
      value: `import {DevTool} from 'react-codesandbox-devtool'`,
    }
    markdownAST.children.unshift(node)
    console.log(`Adding: ${node.value}`)
  }

  const seen: { [_: string]: boolean } = {}

  const isCodeOrDevtool = (type: string): type is ShortcodeNames => {
    const shortcodeNames: ShortcodeNames[] = ['code', 'devtool']
    return shortcodeNames.includes(type as ShortcodeNames)
  }

  const isLinkReference = (node: Content): node is LinkReference => {
    return node.type === 'linkReference'
  }

  const isParent = (node: MaybeParent): node is Parent => {
    return !!node.children
  }

  const isSoloChild = (node: Parent) => {
    return node.children.length === 1
  }

  const ALLOWED_EXT = ['tsx']
  const isAllowedExt = (ext: string): ext is Tsx['type'] => ALLOWED_EXT.includes(ext)

  const makeCodesandboxUrl = async (
    templateName: string,
    computedQuerystring: string,
    source: string
  ) => {
    const node: Code = {
      type: 'code',
      lang: 'tsx',
      meta: `codesandbox=${templateName}?${computedQuerystring}`,
      value: source,
    }
    await codesandbox({ ...meta, markdownAST: node }, _options.codesandbox)

    // console.log(JSON.stringify(node, null, 2))
    const url = (node.data?.hProperties as { dataCodesandboxUrl?: string })?.dataCodesandboxUrl
    if (!url) {
      throw new Error(`Failed to create sandbox URL from ${node.meta}`)
    }
    // console.log(`converted node to sandbox url ${url}`)
    return url
  }

  const promises: Promise<void>[] = []
  visit(markdownAST, 'paragraph', (paragraphNode: MaybeParent, idx) => {
    promises.push(
      (async () => {
        // Only process paragraph nodes
        if (!isParent(paragraphNode)) return

        // Only allow the shortcode by itself in a paragraph
        if (!isSoloChild(paragraphNode)) return

        // The [shortcode] syntax shows up as a linkReference node - filter out all others
        const [linkRefNode] = paragraphNode.children
        if (!isLinkReference(linkRefNode)) return

        // The 'label' is the shortcode. Filter out any empty links
        const { label } = linkRefNode
        if (!label) return

        // Shortcode format:  (devtool|code):fname.ext[?params...]
        const [shortCodeType, fnameWithQuery] = label.split(':')
        const [fname, querystring] = fnameWithQuery.split('?')
        const [moduleName, ext] = fname.split('.')

        // Filter out any shortcode that is not ours
        if (!isCodeOrDevtool(shortCodeType)) return

        // Error on any file type not currently supported
        if (!isAllowedExt(ext)) {
          throw new Error(`${fname} is not supported. Only jsx and tsx are supported.`)
        }

        // Copy default values into query
        const query = new URLSearchParams()
        forEach(_options.codesandbox.defaultQuery, (v, k) => {
          if (!!v) query.set(k, v)
        })

        // Calculate the template name
        const parsed = new URLSearchParams(querystring)
        const templateName = parsed.get('template') || query.get('template') || 'default'
        parsed.delete('template')
        query.delete('template')
        console.log(`Template name is ${templateName}`)

        // Overwrite defaults with tempalte defaults if available
        const { customTemplates } = _options.codesandbox
        if (templateName && customTemplates[templateName]) {
          forEach(customTemplates[templateName], (v, k) => {
            if (!!v) query.set(k, v)
          })
        }

        // Overwrite default value union with values specified on querystring
        parsed.forEach((v, k) => {
          if (!!v) query.set(k, v)
        })

        // Compute the new querystring
        const computedQuerystring = decodeURIComponent(query.toString())
        console.log(`full query: ${templateName}?${computedQuerystring}`)

        // Calculate the full path to the code file name and error out if it doesn't exist
        const { fileAbsolutePath } = markdownNode
        const absoluteDir = dirname(fileAbsolutePath)
        const codeFileAbsolutePath = resolve(absoluteDir, fname)
        if (!existsSync(codeFileAbsolutePath)) {
          throw new Error(`${fname} was not found at ${codeFileAbsolutePath}.`)
        }
        console.log(codeFileAbsolutePath)

        // Read the source file
        const source = readFileSync(codeFileAbsolutePath, { encoding: 'utf-8' })

        // Prettify it so it displays nicely in the site
        const lines = [
          `// ${basename(codeFileAbsolutePath)}`,
          '',
          ...(IS_DEVELOPMENT_MODE
            ? [
                `{/** `,
                ` ********* WARNING ********`,
                ` * THIS CODE WAS LAUNCHED FROM LOCALHOST.`,
                ` * LOCAL PACKAGES MAY NOT MATCH THE DEPENDENCIES`,
                ` * USED IN THIS SANDBOX.`,
                ` * `,
                ` * TEST SANDBOX FOR BACKWARD COMPATIBLITY IF DESIRED.`,
                ` ********* WARNING ********`,
                ` */}`,
                '',
              ]
            : []),
          source,
        ]
        const unformattedTsx = lines.join('\n')
        console.log('unformattedTsx', unformattedTsx)
        const formattedSourceTsx = prettier.format(unformattedTsx, _options.prettier)
        console.log('formattedSourceTsx', formattedSourceTsx)

        // Transpile to JS
        const formattedSourceJsx = prettier.format(
          ts.transpileModule(unformattedTsx, TRANSPILE_OPTIONS).outputText,
          _options.prettier
        )
        console.log('formattedSourceJsx', formattedSourceJsx)

        // Generate the TS sandbox URL link

        const codesandboxTsUrl = await makeCodesandboxUrl(
          templateName,
          computedQuerystring,
          formattedSourceTsx
        )

        // Generate the JS sandbox URL link
        const codesandboxJsUrl = await makeCodesandboxUrl(
          templateName,
          computedQuerystring,
          formattedSourceJsx
        )

        switch (shortCodeType) {
          // The 'code' case is where we do normal inline code
          case 'code':
            {
              // Typescript kung fu to convert to a Code node
              ;((node: Code) => {
                node.type = 'code'
                node.lang = 'tsx'
                // node.meta = `codesandbox=${templateName}?${computedQuerystring}`
                node.value = formattedSourceTsx
                console.log(`converted node to code`)
                // console.log(JSON.stringify(node, null, 2))
              })(linkRefNode as unknown as Code)
            }
            break

          // The 'devtool' case is a codesandbox and, if in dev/localhost mode, a working devtool running aginst local code
          case 'devtool':
            {
              // Wire up devtool harness
              const importSymbol = `Component_${moduleName}`
              const importSymbolTsSrc = `Component_${moduleName}TsSrc`
              const importSymbolJsSrc = `Component_${moduleName}JsSrc`

              // Splice in a run container before the code listing, warn if in dev mode
              const devtoolComponent = [
                `<DevTool 
                  prefix={${JSON.stringify(guid())}}
                  isDevelopmentMode={${IS_DEVELOPMENT_MODE ? 'true' : 'false'}}
                  component={${importSymbol}}
                  typescript={${importSymbolTsSrc}} 
                  javascript={${importSymbolJsSrc}}
                  codesandboxTsUrl={${JSON.stringify(codesandboxTsUrl)}}
                  codesandboxJsUrl={${JSON.stringify(codesandboxJsUrl)}}
                />`,
              ].join('\n')
              console.log(devtoolComponent)

              // Typescript kung fu to convert to a Code node
              ;((node: Jsx) => {
                node.type = 'jsx'
                node.value = devtoolComponent
                console.log(`converted node to runtime container`)
                // console.log(JSON.stringify(node, null, 2))
              })(linkRefNode as unknown as Jsx)

              // Insert an import if this component hasn't been seen yet
              if (!seen[moduleName]) {
                const node: Content = {
                  type: 'import',
                  value: [
                    `import ${importSymbol} from './${moduleName}'`,
                    `import ${importSymbolTsSrc} from '!!raw-loader!./${moduleName}'`,
                    `import ${importSymbolJsSrc} from '!!transpile-ts-loader!./${moduleName}'`,
                  ].join('\n'),
                }
                markdownAST.children.unshift(node)
                console.log(`Adding: ${node.value}`)
                seen[moduleName] = true
              }
            }
            break
        }
      })()
    )
  })
  await Promise.all(promises)

  // console.log('calling codesandbox', _options.codesandbox)

  console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST
}

module.exports = plugin
