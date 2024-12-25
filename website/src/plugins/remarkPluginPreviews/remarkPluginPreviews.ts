import { visit } from 'unist-util-visit'
import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { getCodeSources } from './helpers/getCodeSources'
import { getMdxFromMarkdown } from '../utils/getMdxFromMarkdown'

/**
 * remark plugin to transform [devtool:ComponentName.tsx] into previews
 */
export const remarkPluginPreviews: Plugin<[], Root> = () => (tree, file) => {
  // for testing
  // if (!file.dirname?.endsWith('basic/animations')) return

  const dirPath = file.dirname

  if (!dirPath) return

  const seen: Record<string, boolean> = {}

  /**
   * Traverse standalone paragraphs of the form `[devtool:ComponentName.tsx]`.
   * In markdown AST it is parsed as:
   * {
   *    type: "paragraph",
   *    children: [
   *      {
   *        type: "text",
   *        value: "[devtool:ComponentName.tsx]"
   *      }
   *    ]
   */
  visit(tree, 'paragraph', (node) => {
    // Only process parent nodes
    if (!node.children) return

    if (node.children.length !== 1) return

    const [childNode] = node.children

    if (childNode.type !== 'text') return

    const [devtoolCode, fileName] = childNode.value.split(':')

    if (devtoolCode !== '[devtool') return

    if (!fileName.endsWith('.tsx]')) {
      throw new Error('Only .tsx files are supported.')
    }

    const fileNameWithExt = fileName.replace(']', '')
    const [moduleName] = fileNameWithExt.split('.')

    const importStrings: string[] = []

    // Insert imports if they haven't been seen yet
    if (!seen[moduleName]) {
      importStrings.push(`import ${moduleName} from "./${moduleName}"`)
      seen[moduleName] = true
    }

    if (!seen['Tabs']) {
      importStrings.push(`import { Tabs, Tab } from 'rspress/theme'`)
      seen['Tabs'] = true
    }

    const codeSources = getCodeSources({ fileBase: moduleName, dirPath })

    const previewTabsString = [
      '## Current Previews',
      '\n',
      `<Tabs groupId="previews" defaultValue="preview">`,
      `<Tab value="preview" label="Preview"><${moduleName} /></Tab>`,
      `<Tab value="code-tsx" label="Typescript">\n${codeSources.tsx}\n</Tab>`,
      `<Tab value="code-jsx" label="Javascript">\n${codeSources.jsx}\n</Tab>`,
      `</Tabs>`,
    ]

    const mdxContentString = [...importStrings, '\n', ...previewTabsString].join('\n')
    const mdxContent = getMdxFromMarkdown(mdxContentString)

    // replace [devtool:ComponentName.tsx] text with the previews component
    Object.assign(node, mdxContent)
  })
}
