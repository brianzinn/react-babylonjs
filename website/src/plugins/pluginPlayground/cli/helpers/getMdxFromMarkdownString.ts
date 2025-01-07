import { mdxFromMarkdown } from 'mdast-util-mdx'
import { mdxjs } from 'micromark-extension-mdxjs'
import { fromMarkdown } from 'mdast-util-from-markdown'

export const getMdxFromMarkdownString = (mdString: string) =>
  fromMarkdown(mdString, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  })
