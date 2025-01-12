import type { MdxJsxFlowElement } from 'mdast-util-mdx'

export const getMdxJsxAttribute = (node: MdxJsxFlowElement, attrName: string) => {
  const attribute = node.attributes.find((attr) => {
    return attr.type === 'mdxJsxAttribute' && attr.name === attrName
  })

  return attribute?.value
}
