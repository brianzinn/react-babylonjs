const toc = [
  '/',
  '/introduction',
  '/guides/index',
  '/guides/react-boilerplate/index',
  '/guides/react-with-imperitive-babylonjs/index',
  '/guides/react-with-declarative-babylonjs/index',
  '/guides/getting-even-more-reactive/index',
  '/guides/hoc/index',
  '/guides/adding-animation-and-color/index',
]

const navSortMap = toc.reduce((c, slug, i) => {
  c[slug] = i
  return c
}, {})

const sortPages = (allMdx) => {
  allMdx.edges.sort((a, b) => navSortMap[a.node.fields.slug] - navSortMap[b.node.fields.slug])
  // console.log(JSON.stringify(allMdx, null, 2))

  const slugs = allMdx.edges.map((e) => e.node.fields.slug)
  console.log('all known slugs in sorted order\n', JSON.stringify(slugs, null, 2))
}

module.exports = sortPages
