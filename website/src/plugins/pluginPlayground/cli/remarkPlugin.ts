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
 * Inject <Playground /> into MDX
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
      const attributes: Array<[string, string]> = [
        ['files', JSON.stringify(files)],
        ['dependencies', JSON.stringify(dependencies)],
      ]

      const standalone = getMdxJsxAttribute(node, 'standalone')
      if (standalone !== undefined) {
        attributes.push(['standalone', 'true'])
      }

      Object.assign(node, {
        type: 'mdxJsxFlowElement',
        name: 'Playground',
        attributes: getMdxJsxAttributes(attributes),
      })
    })
  }
}

function getMdxJsxAttributes(attrs: Array<[string, string]>): MdxJsxFlowElement['attributes'] {
  return attrs.map(([name, value]) => ({
    name,
    value,
    type: 'mdxJsxAttribute',
  }))
}
