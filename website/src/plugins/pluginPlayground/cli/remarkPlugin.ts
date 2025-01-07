import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { getNodeAttribute } from './utils/getNodeAttribute'
import { _skipForTesting } from './utils/_skipForTesting'
import { DemoDataByPath } from './pluginPlayground'

interface RemarkPluginProps {
  getDemoDataByPath: () => DemoDataByPath
}

/**
 * remark plugin to inject Playground into MDX
 */
export const remarkPlugin: Plugin<[RemarkPluginProps], Root> = ({ getDemoDataByPath }) => {
  const demoDataByPath = getDemoDataByPath()

  return (tree, vfile) => {
    if (_skipForTesting(vfile.path)) return

    // Transform <code src="./Component.tsx" />
    // into <Playground files={files} dependencies={dependencies} />
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      if (node.name !== 'code') return

      const demoImportPath = getNodeAttribute(node, 'src')

      if (!demoImportPath || !demoDataByPath[demoImportPath]) return

      const { files, dependencies } = demoDataByPath[demoImportPath]

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
            name: 'dependencies',
            value: JSON.stringify(dependencies),
          },
        ],
      })
    })
  }
}
