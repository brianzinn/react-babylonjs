import path from 'node:path'
import { visit } from 'unist-util-visit'
import fs from 'node:fs'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { RouteMeta } from '@rspress/core'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { parseImportsTraverse } from './utils/parseImportsTraverse'
import { getMdxFromMarkdown } from '../utils/getMdxFromMarkdown'
import { _skipForTesting } from './utils/_skipForTesting'

interface RemarkPluginProps {
  getRouteMeta: () => RouteMeta[]
}

/**
 * remark plugin to transform code to demo
 */
export const remarkPlugin: Plugin<[RemarkPluginProps], Root> = ({ getRouteMeta }) => {
  const routeMeta = getRouteMeta()

  return (tree, vfile) => {
    // for testing
    if (_skipForTesting(vfile.path)) return

    const route = routeMeta.find(
      (meta) => path.resolve(meta.absolutePath) === path.resolve(vfile.path || vfile.history[0])
    )

    if (!route) {
      return
    }

    const seen: Record<string, boolean> = {}

    // 1. External demo , use <code src="foo" /> to declare demo
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      if (node.name === 'code') {
        const demoImportPath = getNodeAttribute(node, 'src')

        if (!demoImportPath) {
          return
        }

        const demoFilePath = path.join(path.dirname(route.absolutePath), demoImportPath)

        if (!fs.existsSync(demoFilePath)) {
          return
        }

        const importStrings: string[] = []

        const [moduleName, language = 'tsx'] = path.basename(demoImportPath).split('.')

        // Insert imports if they haven't been seen yet
        if (!seen[moduleName]) {
          importStrings.push(`import ${moduleName} from './${moduleName}'`)
          seen[moduleName] = true
        }

        if (!seen['Tabs']) {
          importStrings.push(`import { Tabs, Tab } from 'rspress/theme'`)
          seen['Tabs'] = true
        }

        const res = parseImportsTraverse({
          importPath: demoImportPath,
          dirname: path.dirname(route.absolutePath),
        })

        const playgroundString = `<Playground files={${JSON.stringify(
          res.files
        )}} language='${language}' />`

        const previewTabsString = [
          `<Tabs groupId="previews" defaultValue="preview">`,
          `<Tab value="preview" label="Preview"><${moduleName} /></Tab>`,
          `<Tab value="code-tsx" label="Typescript">\n${res.codeSnippets.tsx}\n</Tab>`,
          `<Tab value="code-jsx" label="Javascript">\n${res.codeSnippets.jsx}\n</Tab>`,
          `<Tab value="playground" label="Playground">${playgroundString}</Tab>`,
          `</Tabs>`,
        ]

        const mdxContentString = [...importStrings, '\n', ...previewTabsString].join('\n')

        Object.assign(node, getMdxFromMarkdown(mdxContentString))
      }
    })
  }
}
