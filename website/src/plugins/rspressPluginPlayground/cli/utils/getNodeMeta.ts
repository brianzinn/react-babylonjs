export const getNodeMeta = (node: any, metaName: string): string | undefined => {
  if (!node.meta) {
    return
  }
  const meta: string[] = node.meta.split(' ')
  const item: string | undefined = meta.find((x: string) => x.startsWith(metaName))
  if (item?.startsWith(`${metaName}=`)) {
    return item.substring(metaName.length + 1)
  }
  return item
}
