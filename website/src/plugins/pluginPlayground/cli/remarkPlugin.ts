import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { getMdxJsxAttribute } from './helpers/getMdxJsxAttribute'
import { _skipForTesting } from './helpers/_skipForTesting'
import { DemoDataByPath } from './pluginPlayground'
import { MdxJsxFlowElement } from 'mdast-util-mdx'

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
    visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement) => {
      if (node.name !== 'code') return

      const importPath = getMdxJsxAttribute(node, 'src')

      if (typeof importPath !== 'string' || !demoDataByPath[importPath]) {
        return
      }

      const { files, dependencies } = demoDataByPath[importPath]

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
