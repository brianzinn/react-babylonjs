import path from 'node:path'
import { visit } from 'unist-util-visit'
import fs from 'node:fs'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { RouteMeta } from '@rspress/core'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { parseImportsTraverse } from './utils/parseImportsTraverse'
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
    // if (_skipForTesting(vfile.path)) return

    const route = routeMeta.find(
      (meta) => path.resolve(meta.absolutePath) === path.resolve(vfile.path || vfile.history[0])
    )

    if (!route) {
      return
    }

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

        const res = parseImportsTraverse({
          importPath: demoImportPath,
          dirname: path.dirname(route.absolutePath),
        })

        Object.assign(node, {
          type: 'mdxJsxFlowElement',
          name: 'Playground',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'files',
              value: JSON.stringify(res.files),
            },
          ],
        })
      }
    })
  }
}
