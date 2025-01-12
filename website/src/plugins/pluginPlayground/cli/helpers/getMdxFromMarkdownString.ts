import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'

export const getMdxFromMarkdownString = (mdString: string) =>
  fromMarkdown(mdString, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  })
