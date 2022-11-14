const toc = [
  '/',
  '/quickstart',
  '/guides',
  '/guides/react-cra',
  '/guides/react-with-imperative-babylonjs',
  '/guides/react-with-declarative-babylonjs',
  '/guides/animation',
  '/guides/adding-interaction-and-color',
  '/guides/adding-shadows',
  '/examples',
  '/examples/basic',
  '/examples/basic/animations',
  '/examples/basic/moving-boxes',
  '/examples/basic/context-bridge',
  '/examples/basic/custom-mesh',
  '/examples/basic/dynamic-terrain',
  '/examples/basic/edges-rendering',
  '/examples/basic/from-instance',
  '/examples/basic/instanced-mesh-hex',
]

const navSortMap = toc.reduce((c, slug, i) => {
  c[slug] = i
  return c
}, {})

const sortResults = (results) => {
  console.log('sorting results', results)
  results.sort((a, b) => {
    const aIndex = navSortMap[a.slug]
    const bIndex = navSortMap[b.slug]
    if (aIndex === undefined) {
      console.error('slug not found:', a.slug)
      return -1
    }
    if (bIndex === undefined) {
      console.error('slug not found:', b.slug)
      return -1
    }
    return aIndex - bIndex
  })
}

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

module.exports = {
  sortPages,
  sortResults,
}
