const toc = [
  '/',
  '/introduction',
  '/guides/index',
  '/guides/tutorial-1/index',
  '/guides/tutorial-1/react-boilerplate/index',
  '/guides/tutorial-1/react-with-imperitive-babylonjs/index',
  '/guides/tutorial-1/react-with-declarative-babylonjs/index',
  '/guides/tutorial-1/adding-animation-and-color/index',
  '/guides/tutorial-1/todo',
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
