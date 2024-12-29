import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import type { RouteMeta, RspressPlugin } from '@rspress/core'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { remarkPlugin } from './remarkPlugin'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { getMdxFromMarkdown } from '../../utils/getMdxFromMarkdown'
import { parseImportsTraverse } from './utils/parseImportsTraverse'
import { _skipForTesting } from './utils/_skipForTesting'
import { prepareFileNameWithExt } from './utils/getImport'

let routeMeta: RouteMeta[]
const filesByPath: Record<string, Record<string, string>> = {}

/**
 * The plugin is used to preview component.
 */
export function pluginPlayground(): RspressPlugin {
  const playgroundVirtualModule = new RspackVirtualModulePlugin({})
  const getRouteMeta = () => routeMeta
  const getFilesByPath = () => filesByPath

  return {
    name: '@rspress/plugin-playground',

    config(config) {
      config.markdown = config.markdown || {}
      // disable Rust compiler to use markdown plugins
      config.markdown.mdxRs = false

      return config
    },

    routeGenerated(routes: RouteMeta[]) {
      routeMeta = routes

      const importPaths: Record<string, string> = { react: 'react' }

      // Scan all files, and generate virtual modules
      // that make imports in demo files available in runtime
      for (const route of routes) {
        // for testing
        // if (_skipForTesting(route.absolutePath)) continue

        const isMdxFile = /\.mdx$/.test(route.absolutePath)

        if (!isMdxFile) {
          continue
        }

        try {
          const mdxSource = fs.readFileSync(route.absolutePath, 'utf-8')
          const mdxAst = getMdxFromMarkdown(mdxSource)

          visit(mdxAst, 'mdxJsxFlowElement', (node: any) => {
            if (node.name === 'code') {
              const demoImportPath = getNodeAttribute(node, 'src')

              if (!demoImportPath) {
                return
              }

              const res = parseImportsTraverse({
                importPath: demoImportPath,
                dirname: path.dirname(route.absolutePath),
              })

              Object.assign(importPaths, res.imports)
              filesByPath[demoImportPath] = res.files

              // make local imports available as virtual modules
              for (const [importPath, sourceCode] of Object.entries(res.localImportSources)) {
                const fileNameWithExt = prepareFileNameWithExt(importPath)

                importPaths[fileNameWithExt] = fileNameWithExt

                playgroundVirtualModule.writeModule(fileNameWithExt, sourceCode)
              }
            }
          })
        } catch (e) {
          console.error(e)
          throw e
        }
      }

      const importKeys = Object.keys(importPaths)

      const getImportString = fs.readFileSync(path.join(__dirname, './utils/getImport.js'), 'utf-8')

      const playgroundVirtualImportsCode = [
        getImportString,
        ...importKeys.map((x, index) => `import * as i_${index} from '${x}';`),
        '\n',
        ...importKeys.map((x, index) => `imports.set('${x}', i_${index});`),
      ].join('\n')

      console.log({ getImport: playgroundVirtualImportsCode })

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
    },

    markdown: {
      // per docs, disabling mdxRs when configuring globalComponents
      // https://rspress.dev/api/config/config-build#markdownglobalcomponents
      mdxRs: false,
      // @ts-expect-error: Plugin typings are weird
      remarkPlugins: [[remarkPlugin, { getRouteMeta, getFilesByPath }]],
      globalComponents: [path.join(__dirname, '../web/Playground')],
    },

    globalStyles: path.join(__dirname, '../static/playgroundGlobal.css'),
  }
}
