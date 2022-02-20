const toc = [
  '/',
  '/quickstart',
  '/guides/index',
  '/guides/react-boilerplate/index',
  '/guides/react-with-imperitive-babylonjs/index',
  '/guides/react-with-declarative-babylonjs/index',
  '/guides/animation/index',
  '/guides/debugging/index',
  '/guides/getting-even-more-reactive/index',
  '/guides/hoc/index',
  '/guides/adding-animation-and-color/index',
]

const navSortMap = toc.reduce((c, slug, i) => {
  c[slug] = i
  return c
}, {})

const sortPages = (allMdx) => {
  // console.log('nav sort map:', navSortMap);
  allMdx.edges.sort((a, b) => {
    const aIndex = navSortMap[a.node.fields.slug]
    const bIndex = navSortMap[b.node.fields.slug]
    if (aIndex === undefined) {
      console.error('slug not found:', a.node.fields.slug)
      return -1
    }
    if (bIndex === undefined) {
      console.error('slug not found:', b.node.fields.slug)
      return -1
    }
    return aIndex - bIndex
  })
  // console.log(JSON.stringify(allMdx, null, 2))

  const slugs = allMdx.edges.map((e) => e.node.fields.slug)
  console.log('all known slugs in sorted order\n', JSON.stringify(slugs, null, 2))
}

module.exports = sortPages
