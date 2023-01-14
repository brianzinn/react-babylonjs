/**
 * When you are adding a page you need to "gatsby clean" and restart "gatsby develop".
 * Can be fixed by upgrading to Gatsby 5+
 */
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
  '/examples/basic/engine-view',
  '/examples/basic/from-instance',
  '/examples/basic/gizmo',
  '/examples/basic/gizmo-manager',
  '/examples/basic/pause-renderer',
  '/examples/basic/instanced-mesh-hex',
  '/examples/basic/create-portal',
  '/examples/basic/extrude-csg',
  '/examples/basic/snippet-material',
  '/examples/basic/toggle-mesh',
  '/examples/basic/toggle-scene',
  '/examples/basic/transform-node',
  '/examples/basic/viewport',
  '/examples/behaviors',
  '/examples/behaviors/drag-n-drop',
  '/examples/behaviors/pointer-drag',
  '/examples/gui',
  '/examples/gui/skybox-3d',
  '/examples/gui/2d-gui',
  '/examples/gui/grid',
  '/examples/gui/html',
  '/examples/gui/gui-demo',
  '/examples/materials',
  '/examples/models',
  '/examples/models/asset-manager',
  '/examples/models/look-at',
  '/examples/models/props',
  '/examples/physics',
  '/examples/hooks',
  '/examples/hooks/context',
  '/examples/hooks/scene-engine',
  '/examples/hooks/asset-manager',
  '/examples/hooks/click',
  '/examples/hooks/hover',
  '/examples/post-process',
  '/examples/post-process/image',
  '/examples/post-process/pipeline',
  '/examples/special-fx',
  '/examples/special-fx/glow-layer',
  '/examples/special-fx/multi-glow-layer',
  '/examples/special-fx/highlight-layer',
  '/examples/textures',
  '/examples/textures/procedural-fire',
  '/examples/textures/fresnel-parameters',
  '/examples/textures/image-textures',
  '/examples/textures/pbr',
  '/examples/textures/pbr-configuration',
  '/examples/vr',
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
