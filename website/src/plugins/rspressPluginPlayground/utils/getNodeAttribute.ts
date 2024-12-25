export const getNodeAttribute = (node: any, attrName: string): string | undefined => {
  return node.attributes.find((attr: { name: string; value: string }) => attr.name === attrName)
    ?.value
}
