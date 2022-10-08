import { NodePluginArgs } from 'gatsby'
import md5 from 'md5'
import { SetOptional } from 'type-fest'
import visit from 'unist-util-visit'
import type { Content, Jsx, LinkReference, Parent, Tsx } from './mdast'

type ShortcodeNames = 'devtool' | 'code'

type MaybeParent = SetOptional<Parent, 'children'>

type MarkdownAST = Parent

type GatsbyMdxNodeId = string

type GatsbyMdxNode = {
  id: GatsbyMdxNodeId
  children: GatsbyMdxNode[]
  parent: GatsbyMdxNodeId
  internal: {
    content: any
    type: `Mdx` | 'File'
  }
  frontmatter: {
    title: string
    [key: string]: string
  }
  excerpt: string
  exports: any
  rawBody: string
}

type GatsbyMdxFileNode = GatsbyMdxNode & {
  internal: GatsbyMdxNode['internal'] & {
    type: 'File'
  }
  fileAbsolutePath: string
}

type GatsbyMdxPluginMeta = NodePluginArgs & {
  markdownAST: MarkdownAST
  markdownNode: GatsbyMdxFileNode
}

type GatsbyMdxPlugin = (meta: GatsbyMdxPluginMeta) => Promise<MarkdownAST>

const mkGuid = (() => {
  let id = +new Date()
  return () => `g${++id}`
})()

const plugin = async (meta: GatsbyMdxPluginMeta): Promise<MarkdownAST> => {
  // console.error('options', meta)
  const { markdownAST, markdownNode } = meta
  // console.error({ meta })

  const seen: { [_: string]: boolean } = {}

  const isCodeOrDevtool = (type: string): type is ShortcodeNames => {
    const shortcodeNames: ShortcodeNames[] = ['code', 'devtool']
    return shortcodeNames.includes(type as ShortcodeNames)
  }

  const isLinkReference = (node: Content): node is LinkReference => {
    return node.type === 'linkReference'
  }

  const isParent = (node: MaybeParent): node is Parent => {
    return !!node.children
  }

  const isSoloChild = (node: Parent) => {
    return node.children.length === 1
  }

  const ALLOWED_EXT = ['tsx']
  const isAllowedExt = (ext: string): ext is Tsx['type'] => ALLOWED_EXT.includes(ext)

  const promises: Promise<void>[] = []
  visit(markdownAST, 'paragraph', (paragraphNode: MaybeParent, idx) => {
    promises.push(
      (async () => {
        // Only process paragraph nodes
        if (!isParent(paragraphNode)) return

        // Only allow the shortcode by itself in a paragraph
        if (!isSoloChild(paragraphNode)) return

        // The [shortcode] syntax shows up as a linkReference node - filter out all others
        const [linkRefNode] = paragraphNode.children
        if (!isLinkReference(linkRefNode)) return

        // The 'label' is the shortcode. Filter out any empty links
        const { label } = linkRefNode
        if (!label) return

        // Shortcode format:  (devtool|code):fname.ext[?params...]
        const [shortCodeType, fnameWithQuery] = label.split(':')
        const [fname, querystring] = fnameWithQuery.split('?')
        const [moduleName, ext] = fname.split('.')

        // Filter out any shortcode that is not ours
        if (!isCodeOrDevtool(shortCodeType)) return

        // Error on any file type not currently supported
        if (!isAllowedExt(ext)) {
          throw new Error(`${fname} is not supported. Only jsx and tsx are supported.`)
        }

        // Wire up devtool harness
        const hash = md5(markdownNode.fileAbsolutePath).toString()
        const importSymbol = `Component_${moduleName}_${hash}`
        const devtoolResult = `Devtool_${moduleName}_${hash}`
        // console.error('devToolSymbol', importSymbol, devtoolResult)

        // Import the DevTool component
        if (!seen['DevTool']) {
          const node: Content = {
            type: 'import',
            value: `import {DevTool} from '@devtool/react'`,
          }
          markdownAST.children.unshift(node)
          seen['DevTool'] = true
          console.log(`Adding: ${node.value}`)
        }

        // Splice in a run container before the code listing, warn if in dev mode
        const guid = `${markdownNode.fileAbsolutePath}/${fname}`
        const devtoolComponent = [
          `<DevTool 
              prefix={${JSON.stringify(guid)}}
              component={${importSymbol}}
              meta={${devtoolResult}} 
            />`,
        ].join('\n')
        console.log('devtoolComponent', devtoolComponent)

        // Typescript kung fu to convert to a Code node
        ;((node: Jsx) => {
          node.type = 'jsx'
          node.value = devtoolComponent
          console.error(`converted node to runtime container`)
          // console.log(JSON.stringify(node, null, 2))
        })(linkRefNode as unknown as Jsx)

        // Insert an import if this component hasn't been seen yet
        if (!seen[moduleName]) {
          const node: Content = {
            type: 'import',
            value: [
              `import ${importSymbol} from './${moduleName}'`,
              `import ${devtoolResult} from '!!@devtool/loader!./${moduleName}'`,
            ].join('\n'),
          }
          markdownAST.children.unshift(node)
          console.log(`Adding: ${node.value}`)
          seen[moduleName] = true
        }
      })()
    )
  })
  await Promise.all(promises)

  // console.log('calling codesandbox', _options.codesandbox)

  // console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST
}

export = plugin
