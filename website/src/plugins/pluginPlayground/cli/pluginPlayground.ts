import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import { SandpackFiles } from '@codesandbox/sandpack-react'
import type { RspressPlugin } from '@rspress/shared'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { remarkPlugin } from './remarkPlugin'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { getMdxFromMarkdown } from './utils/getMdxFromMarkdown'
import { processDemoCode } from './utils/processDemoCode'
import { _skipForTesting } from './utils/_skipForTesting'
import { getDemoDependencies, getPackageJsonDependencies } from './utils/getDependencies'
import { getVirtualModulesCode } from './utils/getVirtualModulesCode'

export type DemoDataByPath = Record<
  string,
  {
    files: SandpackFiles
    dependencies: Record<string, string>
  }
>

const demoDataByPath: DemoDataByPath = {}

/**
 * The plugin is used to preview component.
 */
export function pluginPlayground(): RspressPlugin {
  const playgroundVirtualModule = new RspackVirtualModulePlugin({})
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

    async routeGenerated(routes) {
      const allImports: Record<string, string> = { react: 'react' }
      const packageJsonDependencies = await getPackageJsonDependencies()

      // Scan all files, and generate virtual modules
      // that make imports in demo files available in runtime
      for (const route of routes) {
        if (_skipForTesting(route.absolutePath)) continue

        const isMdxFile = /\.mdx$/.test(route.absolutePath)

        if (!isMdxFile) continue

        try {
          const mdxSource = fs.readFileSync(route.absolutePath, 'utf-8')
          const mdxAst = getMdxFromMarkdown(mdxSource)

          const demoImportPaths: string[] = []

          visit(mdxAst, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'code') {
              const importPath = getNodeAttribute(node, 'src')

              if (importPath) {
                demoImportPaths.push(importPath)
              }
            }
          })

          for (const importPath of demoImportPaths) {
            const demo = await processDemoCode({
              importPath,
              dirname: path.dirname(route.absolutePath),
            })

            Object.assign(allImports, demo.imports)

            const dependencies = getDemoDependencies(
              Object.keys(demo.imports),
              packageJsonDependencies
            )

            demoDataByPath[importPath] = {
              dependencies,
              files: demo.files,
            }
          }
        } catch (e) {
          console.error(e)
          throw e
        }
      }

      const playgroundVirtualModulesCode = getVirtualModulesCode(allImports)

      playgroundVirtualModule.writeModule(
        '_playground_virtual_modules',
        playgroundVirtualModulesCode
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
      remarkPlugins: [[remarkPlugin, { getDemoDataByPath }]],
      globalComponents: [path.join(__dirname, '../web/Playground')],
    },
  }
}
