import fs from 'node:fs'
import path from 'node:path'
import { visit } from 'unist-util-visit'
import type { RspressPlugin } from '@rspress/shared'
import { RspackVirtualModulePlugin } from 'rspack-plugin-virtual-module'
import { PlaygroundProps } from '../shared/types'
import { remarkPlugin } from './remarkPlugin'
import { getMdxJsxAttribute } from './helpers/getMdxJsxAttribute'
import { getMdxFromMarkdownString } from './helpers/getMdxFromMarkdownString'
import { getFilesAndImports } from './helpers/getFilesAndImports'
import { _skipForTesting } from './helpers/_skipForTesting'
import { getDemoDependencies, getPackageJsonDependencies } from './helpers/getDependencies'
import { getVirtualModulesCode } from './helpers/getVirtualModulesCode'

export type DemoDataByPath = Record<string, PlaygroundProps>

const demoDataByPath: DemoDataByPath = {}

/**
 * Scan all files and:
 * - find nodes of the type `<code src='./path/to/Component.tsx' >`
 * - resolve the file content from the `src` attribute
 * - resolve relative imports inside that file
 * - resolve imported npm modules and inject a getImport getter as a virtual module, which make them available in browser
 * - create `files` and `dependencies` objects for each demo
 * - Through `remarkPlugin`, replace `<code src='./path/to/Component.tsx' >`
 * with `<Playground files={files} dependencies={dependencies} />`
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
      // Collect all imports to make them available in browser through
      // the `getImport` getter, injected as a virtual module
      const allImports: Record<string, string> = { react: 'react' }
      const packageJsonDependencies = await getPackageJsonDependencies()

      // Scan all MDX files
      for (const route of routes) {
        // for testing purposes
        // if (_skipForTesting(route.absolutePath)) continue

        const isMdxFile = /\.mdx$/.test(route.absolutePath)

        if (!isMdxFile) continue

        try {
          const mdxSource = fs.readFileSync(route.absolutePath, 'utf-8')
          const mdxAst = getMdxFromMarkdownString(mdxSource)

          const demoImportPaths: string[] = []

          // Find files containing demo markup `<code src='./path/to/Demo.tsx' >`,
          // and collect import paths in `demoImportPaths`.
          // Eg: `demoImportPaths.push(['./path/to/Demo.tsx', ...])`
          visit(mdxAst, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'code') {
              const importPath = getMdxJsxAttribute(node, 'src')

              if (typeof importPath === 'string') {
                demoImportPaths.push(importPath)
              }
            }
          })

          // Create files and dependencies objects for each demo
          // These will be passed as props to Playground component
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

      playgroundVirtualModule.writeModule(
        '_playground_virtual_modules',
        getVirtualModulesCode(allImports)
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
            // Babel is quite heavy, so we load it as a script tag
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
      // Perhaps we can move this to `remarkPlugin`
      // to add it only when there's <code src"" />
      // Not sure how `globalComponents` works, actually
      globalComponents: [path.join(__dirname, '../web/Playground')],
    },
  }
}
