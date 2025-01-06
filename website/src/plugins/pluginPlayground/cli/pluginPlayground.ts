import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import { SandpackFiles } from '@codesandbox/sandpack-react'
import type { RouteMeta, RspressPlugin } from '@rspress/core'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { remarkPlugin } from './remarkPlugin'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { getMdxFromMarkdown } from './utils/getMdxFromMarkdown'
import { processDemoCode } from './utils/processDemoCode'
import { _skipForTesting } from './utils/_skipForTesting'

let routeMeta: RouteMeta[]

export type DemoDataByPath = Record<
  string,
  {
    files: SandpackFiles
    imports: string[]
  }
>

const demoDataByPath: DemoDataByPath = {}

/**
 * The plugin is used to preview component.
 */
export function pluginPlayground(): RspressPlugin {
  const playgroundVirtualModule = new RspackVirtualModulePlugin({})
  const getRouteMeta = () => routeMeta
  const getDemoDataByPath = () => demoDataByPath

  return {
    name: '@rspress/plugin-playground',

    config(config) {
      config.markdown = config.markdown || {}
      // disable Rust compiler to use
      // markdown.remarkPlugins and markdown.globalComponents
      // https://rspress.dev/api/config/config-build#markdownglobalcomponents
      config.markdown.mdxRs = false

      return config
    },

    async routeGenerated(routes: RouteMeta[]) {
      routeMeta = routes

      const imports: Record<string, string> = { react: 'react' }

      // Scan all files, and generate virtual modules
      // that make imports in demo files available in runtime
      for (const route of routes) {
        if (_skipForTesting(route.absolutePath)) continue

        const isMdxFile = /\.mdx$/.test(route.absolutePath)

        if (!isMdxFile) {
          continue
        }

        try {
          const mdxSource = fs.readFileSync(route.absolutePath, 'utf-8')
          const mdxAst = getMdxFromMarkdown(mdxSource)

          const codeNodes: string[] = []

          visit(mdxAst, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'code') {
              const demoImportPath = getNodeAttribute(node, 'src')

              if (demoImportPath) {
                codeNodes.push(demoImportPath)
              }
            }
          })

          for (const demoImportPath of codeNodes) {
            const demo = await processDemoCode({
              importPath: demoImportPath,
              dirname: path.dirname(route.absolutePath),
            })

            Object.assign(imports, demo.imports)
            demoDataByPath[demoImportPath] = {
              files: demo.files,
              imports: Object.keys(demo.imports),
            }
          }
        } catch (e) {
          console.error(e)
          throw e
        }
      }

      const importModuleNames = Object.keys(imports)

      const getImportString = fs.readFileSync(path.join(__dirname, './utils/getImport.js'), 'utf-8')

      const playgroundVirtualImportsCode = [
        getImportString,
        ...importModuleNames.map(
          (moduleName, index) => `import * as i_${index} from '${moduleName}';`
        ),
        '\n',
        ...importModuleNames.map(
          (moduleName, index) => `imports.set('${moduleName}', i_${index});`
        ),
      ].join('\n')

      // console.log({ getImport: playgroundVirtualImportsCode })

      playgroundVirtualModule.writeModule(
        '_playground_virtual_imports',
        playgroundVirtualImportsCode
      )
    },

    builderConfig: {
      tools: {
        rspack: {
          plugins: [playgroundVirtualModule],
        },
      },
      html: {
        tags: [
          {
            tag: 'script',
            head: true,
            attrs: {
              src: 'https://unpkg.com/@babel/standalone/babel.min.js',
            },
          },
        ],
      },
    },

    markdown: {
      // // @ts-expect-error: plugin types are weird
      remarkPlugins: [[remarkPlugin, { getRouteMeta, getDemoDataByPath }]],
      globalComponents: [path.join(__dirname, '../web/Playground')],
    },
  }
}
