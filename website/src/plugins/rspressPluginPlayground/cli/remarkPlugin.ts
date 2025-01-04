import path from 'node:path'
import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { RouteMeta } from '@rspress/core'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { _skipForTesting } from './utils/_skipForTesting'
import { DemoDataByPath } from './pluginPlayground'

interface RemarkPluginProps {
  getRouteMeta: () => RouteMeta[]
  getDemoDataByPath: () => DemoDataByPath
}

/**
 * remark plugin to transform code to demo
 */
export const remarkPlugin: Plugin<[RemarkPluginProps], Root> = ({
  getRouteMeta,
  getDemoDataByPath,
}) => {
  const routeMeta = getRouteMeta()
  const demoDataByPath = getDemoDataByPath()

  return (tree, vfile) => {
    if (_skipForTesting(vfile.path)) return

    const route = routeMeta.find(
      (meta) => path.resolve(meta.absolutePath) === path.resolve(vfile.path || vfile.history[0])
    )

    if (!route) {
      return
    }

    // 1. External demo , use <code src="foo" /> to declare demo
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      if (node.name !== 'code') return

      const demoImportPath = getNodeAttribute(node, 'src')

      if (!demoImportPath || !demoDataByPath[demoImportPath]) return

      const { files, importPaths } = demoDataByPath[demoImportPath]

      Object.assign(node, {
        type: 'mdxJsxFlowElement',
        name: 'Playground',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'files',
            value: JSON.stringify(files),
          },
          {
            type: 'mdxJsxAttribute',
            name: 'importPaths',
            value: JSON.stringify(importPaths),
          },
        ],
      })
    })
  }
}
