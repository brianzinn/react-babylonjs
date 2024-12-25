import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import type { RouteMeta, RspressPlugin } from '@rspress/core'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { remarkPlugin } from './remarkPlugin'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { getMdxFromMarkdown } from '../utils/getMdxFromMarkdown'
import { parseImportsTraverse } from './utils/parseImportsTraverse'
import { _skipForTesting } from './utils/_skipForTesting'

export let routeMeta: RouteMeta[]

/**
 * The plugin is used to preview component.
 */
export function pluginPlayground(): RspressPlugin {
  const playgroundVirtualModule = new RspackVirtualModulePlugin({})
  const getRouteMeta = () => routeMeta

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

      const imports: Record<string, string> = {}

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

              for (const importName of res.importNames) {
                imports[importName] ??= importName
              }

              // make relative imports available as virtual modules
              // FIXME: as a side-effect, /ScaledModelWithProgress file is being created in dev mode
              for (const [fileName, fileSource] of Object.entries(res.files)) {
                playgroundVirtualModule.writeModule(fileName, fileSource)
              }
            }
          })
        } catch (e) {
          console.error(e)
          throw e
        }
      }

      if (!('react' in imports)) {
        imports.react = 'react'
      }

      const importKeys = Object.keys(imports)
      const code = [
        ...importKeys.map((x, index) => `import * as i_${index} from '${imports[x]}';`),
        'const imports = new Map();',
        ...importKeys.map((x, index) => `imports.set('${x}', i_${index});`),
        'function getImport(name, getDefault) {',
        '  if (!imports.has(name)) {',
        '    throw new Error("Module " + name + " not found");',
        '  }',
        '  const result = imports.get(name);',
        '  if (getDefault && typeof result === "object") {',
        '    return result.default || result;',
        '  }',
        '  return result;',
        '}',
        'export { imports };',
        'export default getImport;',
      ].join('\n')

      playgroundVirtualModule.writeModule('_rspress_playground_imports', code)
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
      remarkPlugins: [[remarkPlugin, { getRouteMeta }]],
      globalComponents: [path.join(__dirname, '../../components/Playground')],
    },
  }
}
