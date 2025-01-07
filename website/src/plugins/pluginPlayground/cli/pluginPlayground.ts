import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import { SandpackFiles } from '@codesandbox/sandpack-react'
import type { RspressPlugin } from '@rspress/shared'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { remarkPlugin } from './remarkPlugin'
import { getMdxJsxAttribute } from './helpers/getMdxJsxAttribute'
import { getMdxFromMarkdownString } from './helpers/getMdxFromMarkdownString'
import { getFilesAndImports } from './helpers/getFilesAndImports'
import { _skipForTesting } from './helpers/_skipForTesting'
import { getDemoDependencies, getPackageJsonDependencies } from './helpers/getDependencies'
import { getVirtualModulesCode } from './helpers/getVirtualModulesCode'

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
          const mdxAst = getMdxFromMarkdownString(mdxSource)

          const demoImportPaths: string[] = []

          visit(mdxAst, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'code') {
              const importPath = getMdxJsxAttribute(node, 'src')

              if (typeof importPath === 'string') {
                demoImportPaths.push(importPath)
              }
            }
          })

          for (const importPath of demoImportPaths) {
            const demo = await getFilesAndImports({
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
              src: 'https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.4/babel.min.js',
              integrity: 'sha256-oShy6o2j0psqKWxRv6x8SC6BQZx1XyIHpJrZt3IA9Oo=',
              crossorigin: 'anonymous',
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
