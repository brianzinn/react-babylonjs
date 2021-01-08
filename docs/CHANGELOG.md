# Changelog

## v2.3.1 (11/11/2020)
- [fix textures (broke when adding ThinTexture - new in 4.2).](https://github.com/brianzinn/react-babylonjs/commit/c2e5651015bd3a548ac3db0be3a37f28f88542f9) - @brianzinn

---

## v2.3.0 (10/11/2020)
- [fix npm version input](https://github.com/brianzinn/react-babylonjs/commit/720a030256f28950a727b5825df1c4bc460fb078) - @brianzinn
- [prep for v4.2 release tomorrow](https://github.com/brianzinn/react-babylonjs/commit/40412ad5056b51d96aef2386f2cd649d53d899f0) - @brianzinn

---

## v2.2.14 (29/10/2020)
- [support React 17](https://github.com/brianzinn/react-babylonjs/commit/c46f8e39dd00c80ee3c6a9ea5bea6fe52bc8f927) - @brianzinn

---

## v2.2.13 (29/10/2020)
- [add lifecycle listeners for insertBefore](https://github.com/brianzinn/react-babylonjs/commit/aa9e735e1dab9de619f48f875d7fca6f9166b3a6) - @brianzinn

---

## v2.2.12 (29/10/2020)
- [add 'clearContainer' to reconciler.  react-reconciler moved from peer dependency to regular dependency.](https://github.com/brianzinn/react-babylonjs/commit/ded90d9a006b27fbeb33e735c79af95ebfd71d7a) - @brianzinn

---

## v2.2.11 (27/10/2020)
- [add insertBefore support to renderer](https://github.com/brianzinn/react-babylonjs/commit/1f98a0e0a555008a63498663760a3eaf607502e5) - @brianzinn

---

## v2.2.10 (23/10/2020)
- [allow 'assignTo' to be assigned to multiple properties.](https://github.com/brianzinn/react-babylonjs/commit/dc5daec640ae304e242f6a20e3fd92ab257c0baa) - @brianzinn
- [Use asset manager v2 (#89)](https://github.com/brianzinn/react-babylonjs/commit/3806bc85891d898db09598931f85aa402af51ac3) - @brianzinn

---

## v2.2.9 (29/09/2020)
- [add 'enable*' methods - needed for VR 'enableTeleportation'.](https://github.com/brianzinn/react-babylonjs/commit/fad7492958fd45ab9deba326c9701491a5155a3c) - @brianzinn

---

## v2.2.8 (25/09/2020)
- [add useAssetManager hook with Suspense support](https://github.com/brianzinn/react-babylonjs/commit/04571c5c8c4ad0fffaa5858aa71600afeb71a98f) - @brianzinn
- [add 'fromInstance' support.  #81](https://github.com/brianzinn/react-babylonjs/commit/243eae70e8ac5c25d660701b1c51cf4a600f6a33) - @brianzinn

---

## v2.2.7 (08/09/2020)
- [add: instancedMesh and patched AbstractMesh and basic 'object' diff](https://github.com/brianzinn/react-babylonjs/commit/ccdf3f54be719bf14a636598ab6054ef3a9099f7) - @brianzinn

---

## v2.2.6 (03/09/2020)
- [add: react-three-gui extension story](https://github.com/brianzinn/react-babylonjs/commit/a27273a99a49884026da3cb35fa3a9f1b5610ba3) - @brianzinn
- [feat: kebab accessors for gui lib testing (#85)](https://github.com/brianzinn/react-babylonjs/commit/744e38ef016debd78ff26074e880df0669f5a462) - @brianzinn

---

## v2.2.5 (01/09/2020)
- [2.2.5](https://github.com/brianzinn/react-babylonjs/commit/9826b67460c471f72033c72f289481792aac32dd) - @brianzinn
- [upgrade ts-morph.  move common Shadow Generator to common class - add contribution to dennemark!](https://github.com/brianzinn/react-babylonjs/commit/9a92c0aed159976b09958193ffe9d32135a515a3) - @brianzinn
- [Cascaded Shadow Maps (#84)](https://github.com/brianzinn/react-babylonjs/commit/d691de36217e1af98b95c8b4ba155b727e220d39) - @dennemark

---

## v2.2.4 (29/08/2020)
- [fix build error. #82](https://github.com/brianzinn/react-babylonjs/commit/7c9577654a8c85c24f5bcb05c0088854909ffca7) - @brianzinn

---

## v2.2.3 (15/08/2020)
- [Fix: Add controls to Advanced Dynamic Textures at runtime after initial render/mount. #75](https://github.com/brianzinn/react-babylonjs/commit/f13718c6bc1a0e7a199a76fa3be134bfe341f3c1) - @brianzinn

---

## v2.2.2 (04/08/2020)
- [add: Support for Quaternion properties.](https://github.com/brianzinn/react-babylonjs/commit/fc4961b0f71f03f375be2e3207ce9aaee358ce93) - @brianzinn
- [Add generic handling of primitives.  Fixes #73.](https://github.com/brianzinn/react-babylonjs/commit/806d790b305e55a459b950e2c7ef3090ead9cd1f) - @brianzinn
- [fix: set Scene props on creation #77](https://github.com/brianzinn/react-babylonjs/commit/2e7b153b3297a48bd3901c60a819d798ab637eb8) - @brianzinn
- [Fix nonstandard package entry point (#76)](https://github.com/brianzinn/react-babylonjs/commit/416da7814242929ee0bd366f2135eec8ea93d09d) - @vimcaw
- [install latest](https://github.com/brianzinn/react-babylonjs/commit/03f542e6326b4d3b71451f53f8e897e30321ca12) - @brianzinn
- [feature: react-babylon-spring (#74)](https://github.com/brianzinn/react-babylonjs/commit/c086cec3b9d4b114acf48865fafed73771461333) - @hookex
- [add useLoader hook (contribution from Hookex react-babylonjs fork)](https://github.com/brianzinn/react-babylonjs/commit/1d89ed5b1de333d5f699ef5023cacbde0dbed001) - @brianzinn
- [add: Support to assign in arrays.  ie: for model textures: assignTo={'meshes[0].material.albedoTexture'}](https://github.com/brianzinn/react-babylonjs/commit/7877c80a9b35c58cb63cb95789f731b31428278d) - @brianzinn
- [2.2.1-beta.1](https://github.com/brianzinn/react-babylonjs/commit/aa332bcbfae1764658498bc9dc053ecfb1d2e43d) - @brianzinn
- [Add example for bringing context over to `react-babylonjs` context.  Fixes #60.](https://github.com/brianzinn/react-babylonjs/commit/948b113a4044f7a00c54ddf9367e1117a45324cf) - @brianzinn
- [Set "type": "module" to be treated as ES module fixes #71](https://github.com/brianzinn/react-babylonjs/commit/72246c49a643dbfdf603bc5205359982bbdd82e6) - @brianzinn
- [Engine unmounted first and Engine dispose() disposes of the Scene.  Need an additional check before disposing the Scene #65](https://github.com/brianzinn/react-babylonjs/commit/08bc7c393c9015e07c0ef83ea2d0a34f9baade3d) - @brianzinn
- [Remove `react-spring` (and 14 other unused dependencies). #69](https://github.com/brianzinn/react-babylonjs/commit/8c9aefbcaf1243b844f03ba4b23823f2a54a06b5) - @brianzinn
- [Issue with dependency](https://github.com/brianzinn/react-babylonjs/commit/d08efd8586320910972b1aaa7fee45cbffa19196) - @brianzinn
- [explicitly dispose Babylonjs Engine when Engine component unmounted. #65](https://github.com/brianzinn/react-babylonjs/commit/14ff99c5c9fe45d4728d2eb14abc0c267f4381c4) - @brianzinn
- [Allows using react suspense without error (#63)](https://github.com/brianzinn/react-babylonjs/commit/117f5f7ec5ba7b6bc024b68164c32437733b7744) - @HugoMcPhee
- [fix typos](https://github.com/brianzinn/react-babylonjs/commit/aa26d55323346708f0a9aba231e5602cdf3f7633) - @brianzinn
- [bump version.  add contribution credit](https://github.com/brianzinn/react-babylonjs/commit/fd8d3f5e6cd0ff3d590ef4ded42979e06cfdedd6) - @brianzinn
- [Update useHover (support gui).  Fix useCustomPropsHandler hook.  #59](https://github.com/brianzinn/react-babylonjs/commit/9228ac840b5ede903f493d3d660ef941fd93de36) - @brianzinn
- [new features: react-spring & event hooks (#59)](https://github.com/brianzinn/react-babylonjs/commit/ea78ccdc751ec70d88d1bb82c034ef200b0266f7) - @hookex
- [re-add 'isMesh' metadata.  Needed for upcoming 'useHover()' hook to add ActionManager vs 2D `onPointerEnterObservable`. #55](https://github.com/brianzinn/react-babylonjs/commit/e5a833dad33556ca014588df4e1760945e99c464) - @brianzinn
- [And observerable for start of Engine runRenderLoop().  Fix PIXI demo (update readme links to new storybook). (#58)](https://github.com/brianzinn/react-babylonjs/commit/421e4ed45cbc57acfbb9468b45d5c2ba166d31d8) - @brianzinn
- [Add PIXI.js integration demo - work in progress. (#57)](https://github.com/brianzinn/react-babylonjs/commit/d39739635d1f4a114e39d8d16ef1c66b921792ba) - @brianzinn
- [Add custom props handler (and chroma-js story). (#56)](https://github.com/brianzinn/react-babylonjs/commit/16cc9d217d650e6c68d62418aecc22caa02792e8) - @brianzinn
- [Fix texture sampling mode and generate MIP maps on texture.](https://github.com/brianzinn/react-babylonjs/commit/884815105f5ddeab7e1cea805c24f405decd7da5) - @brianzinn
- [2.1.0 - Fixes Edges Render issue (#54) and CSG issue (#35).  Only module (not UMD anymore).](https://github.com/brianzinn/react-babylonjs/commit/6437af5c312bb8246404d8d628033a4e8a187bf5) - @brianzinn
- [Add edges-rendering example (import with side-effect)](https://github.com/brianzinn/react-babylonjs/commit/74c9fe263b4aaa1460d07ed9ccdcc01d1d66d2f6) - @brianzinn
- [Add fire-procedural-texture story.  In future can do code-generation like GUI ie:](https://github.com/brianzinn/react-babylonjs/commit/aca4a3af725ec3a95f285e494c2bf796198e7f15) - @brianzinn
- [fix[scene]: some scene props not working. (#52)](https://github.com/brianzinn/react-babylonjs/commit/389bd8baad8c1e735f4fc946ca9cbb9ded9bc018) - @hookex
- [Instance errors extrudeshape (#35)](https://github.com/brianzinn/react-babylonjs/commit/5726bf35bbcbb940238aa8f0209e207473cb0298) - @brianzinn
- [Add BaseTexture props assignment and PBR demo. #20](https://github.com/brianzinn/react-babylonjs/commit/fbc62b1f708c0b9a3179280423a631c7e0be084f) - @brianzinn
- [Minimize, add FresnelParameters and Lambda Props (#50)](https://github.com/brianzinn/react-babylonjs/commit/0547926b965bfb2cf241dc6532029511b078dd7d) - @brianzinn
- [new feature: behavior (#49)](https://github.com/brianzinn/react-babylonjs/commit/d418e6d0cd44b3279b539f0a1106ef365270f3ae) - @hookex
- [Add deferred creation props (#47)](https://github.com/brianzinn/react-babylonjs/commit/12db2833192a07488f8aa0c89445d574add6dc7a) - @brianzinn
- [Update skybox to JSX - use built-in host components.](https://github.com/brianzinn/react-babylonjs/commit/ad85541f60eb5e37f979af63101ab0ee9ed24774) - @brianzinn
- [Add the size props to Skybox for custom size (#46)](https://github.com/brianzinn/react-babylonjs/commit/af85e4f6b1dedab9b8b569adc0a36486e1bb3fd1) - @vimcaw
- [Version bump 2.0.5](https://github.com/brianzinn/react-babylonjs/commit/3b4510b425dfa544668f494a94eb2c894cdd6810) - @brianzinn
- [Fetures (#45)](https://github.com/brianzinn/react-babylonjs/commit/7b61d080d74ab4e9530433746896b1aa4e84214e) - @hookex
- [publish 2.0.4](https://github.com/brianzinn/react-babylonjs/commit/e3bfb831f416b17b363cba81279955bcf5dc565c) - @brianzinn
- [Allow Node (Mesh/Light/Camera) to be parented to each other automatically. #19](https://github.com/brianzinn/react-babylonjs/commit/ea0c1803136669d96eacfba50ce095e146db6951) - @brianzinn
- [add debug launch configuration for generating code](https://github.com/brianzinn/react-babylonjs/commit/50a263376bd3fc5d7b9de92c2034d096657613de) - @brianzinn
- [add 'number[]' to reconciler diff properties.](https://github.com/brianzinn/react-babylonjs/commit/eb41c9168b152052f0d98ff40274ed751fb663a4) - @brianzinn
- [New Features (#42)](https://github.com/brianzinn/react-babylonjs/commit/38e3b6b754f6ac888c795bff6f931f9a68d9c427) - @hookex
- [add link to contributors](https://github.com/brianzinn/react-babylonjs/commit/2e0ae9d007c9f43b3b3ddb8c40daeaa1dc4a470e) - @brianzinn
- [Merge pull request #39 from hookex/master](https://github.com/brianzinn/react-babylonjs/commit/e003cbd00bcc290164f4f108a1ac1cff79e8f546) - @brianzinn
- [feat[babylonjs]: update babylonjs to 4.1.0-rc.9](https://github.com/brianzinn/react-babylonjs/commit/a13feed29ec859327251e03f9ce303e803e60dc4) - undefined
- [Fix Model typings.  Add Shadow Caster Exclude list.  Release 2.0.3](https://github.com/brianzinn/react-babylonjs/commit/310bb1d0267c7af775eeed5611369984bd67a3bb) - @brianzinn
- [Fix 'Model' by adding TypeScript definitions.](https://github.com/brianzinn/react-babylonjs/commit/191b1a0d58feda3a4146480ef7b38dcd50f77c3e) - @brianzinn
- [add LifecycleListener onUnmount](https://github.com/brianzinn/react-babylonjs/commit/05095203c32710e0b7a6728ddccd89e248e8f41f) - @brianzinn
- [npm publish 2.0.2](https://github.com/brianzinn/react-babylonjs/commit/52de172eb7a0fb033b4392734bb9f838ed25b357) - @brianzinn
- [add v1 example and update bouncy PG link](https://github.com/brianzinn/react-babylonjs/commit/76c63a11ccf4adf95193d98e259133b843fc6a5a) - @brianzinn
- [Merge pull request #32 from brianzinn/render-hook](https://github.com/brianzinn/react-babylonjs/commit/842b5bb2744003cbf31179988803aea438d2e48d) - @brianzinn
- [remove example.  need to be nested in components.](https://github.com/brianzinn/react-babylonjs/commit/8b8d0372d82f8ecaada9b2ca00558fce711ff310) - @brianzinn
- [rebase with PR 31 (add storybook example)](https://github.com/brianzinn/react-babylonjs/commit/c20834837b4df3c5b8e5156b5483b20959be2411) - @brianzinn
- [add render hook.  convert Scene to functional component.](https://github.com/brianzinn/react-babylonjs/commit/fa7557e10e42fcde6a26652ff12458aa57c25f17) - @brianzinn
- [Merge pull request #31 from brianzinn/feature/28/context-hooks](https://github.com/brianzinn/react-babylonjs/commit/fef9c1840697a0335822c7b3ba3a3a1040cc00f8) - @brianzinn
- [forgot save](https://github.com/brianzinn/react-babylonjs/commit/16eba6b1b509c53c9d06faae81b9227bc4138b3d) - @konsumer
- [more context examples](https://github.com/brianzinn/react-babylonjs/commit/ff3d669172485815e50be209d16cc9c37f48567a) - @konsumer
- [i made typo in docs](https://github.com/brianzinn/react-babylonjs/commit/3f87977f46f2f07ba5f180f6a0c21ab2468aacbc) - @konsumer
- [docs](https://github.com/brianzinn/react-babylonjs/commit/b347418ee0fd9f8bd92faf6e9cbb04485e3bbb50) - @konsumer
- [implement hooks for #28](https://github.com/brianzinn/react-babylonjs/commit/dbc54540b58e95774dfa65929c21fd5293113734) - @konsumer
- [Update docs for react-babylonjs v2 and deps @babylonjs/* 4.0.3.](https://github.com/brianzinn/react-babylonjs/commit/99788b1d05367797cf28edc65fca05752b4a38ff) - @brianzinn
- [add physics to storybook.](https://github.com/brianzinn/react-babylonjs/commit/24a2efcd98fda47efc7b15275c639214af1d25dd) - @brianzinn
- [Latest BabylonJS + add custom .babelrc, since storybook defaults were corrupting Material.prototype._markAllSubMeshesAsDirty with "(void 0).length".](https://github.com/brianzinn/react-babylonjs/commit/a41243a1295c6ceb0ddc1fa2686ff817e954b5fc) - @brianzinn
- [docs(docs): update gh-pages](https://github.com/brianzinn/react-babylonjs/commit/b5855d79ec7051450b2a09f118f2cae4b2b8aab1) - @brianzinn
- [Switch to consistent camelCase and add enabling interactions.](https://github.com/brianzinn/react-babylonjs/commit/d934d5da2deace8c0ebb98b3454239c542b192d4) - @brianzinn
- [clear lock](https://github.com/brianzinn/react-babylonjs/commit/7605966872a6313ccb829ff73838535dba4a3d02) - @brianzinn
- [Update all stories to react-babylonjs v2 and storybook 5.2.1.](https://github.com/brianzinn/react-babylonjs/commit/528032f6a181f993470363e2ebf7a4c97f05909e) - @brianzinn
- [LifecycleListener is LifecycleListener<T> - adds better support for delayed creation with strong typing.](https://github.com/brianzinn/react-babylonjs/commit/a402155f3782dbb809f2d660668b5c20c2ed95ac) - @brianzinn
- [Fix storybook stories.  Only 2d GUI remains to be fixed.](https://github.com/brianzinn/react-babylonjs/commit/eb29413b027bd10aed6174f98566e1eaa766f5a7) - @brianzinn
- [Dynamically generate dynamic terrain (and future Extensions).](https://github.com/brianzinn/react-babylonjs/commit/4460ddb95333b6a5a3e7a1744f4daa64e8b6de1d) - @brianzinn
- [cleanup](https://github.com/brianzinn/react-babylonjs/commit/54993d984dd16f5952387d7ff70a7e6e6bfdb866) - @brianzinn
- [Fix shadow generator and loading 'conflicting' JSX.IntrinsicElements.](https://github.com/brianzinn/react-babylonjs/commit/47130c5a0c1c8e1f495f3de176ea93581a085306) - @brianzinn
- [Merge pull request #26 from brianzinn/es6_import_strict_typescript](https://github.com/brianzinn/react-babylonjs/commit/dc567e50bb9f28c7e7a521b1c6980f66e1f051b0) - @brianzinn
- [Add support for Physics](https://github.com/brianzinn/react-babylonjs/commit/2d7dde9c9f29b896bcffbbdd47155fe2f6557c32) - @brianzinn
- [add dynamically attached behaviour (ie: Scene physics), enums and Ref<>.](https://github.com/brianzinn/react-babylonjs/commit/0d29dd983eb72ae357e92bf91206a6f009068a4a) - @brianzinn
- [generate global JSX.IntrinsicTypes](https://github.com/brianzinn/react-babylonjs/commit/ab1d473e33baa64b4588181c9c94858faee1cff3) - @brianzinn
- [Add constructor props.  Ready to finalize ReactType<Props & PropsCtor>](https://github.com/brianzinn/react-babylonjs/commit/9784990fe7eb2c0df459b1f095d8db0423c16ed6) - @brianzinn
- [convert Props from classes to Type.  Will be easier for IntrinsicTypes with constructor arguments added (same process).](https://github.com/brianzinn/react-babylonjs/commit/8f9e0a9f82158d0c47e8136f2ffd286c15f34b72) - @brianzinn
- [initial TypeScript support working.  Started using global JSX.IntrinsicElements.](https://github.com/brianzinn/react-babylonjs/commit/0df04344d8cc76f626f96329d9c688ddc099bea9) - @brianzinn
- [reading both libraries (core + gui).  generating code without errors.  needs verification with npm link.](https://github.com/brianzinn/react-babylonjs/commit/b48136d801a61b8b7ecdd747123c4f66fb38d834) - @brianzinn
- [working on '@babylonjs/*' imports (ES6) and returning to strict typescript checking (need to update DynamicTerrain).](https://github.com/brianzinn/react-babylonjs/commit/3418ec1972d94857c177d6f10b447e8b8e08e92e) - @brianzinn
- [Merge pull request #25 from seacloud9/master](https://github.com/brianzinn/react-babylonjs/commit/0fcbcaa41861686fda295e3589279562e8b52bc1) - @brianzinn
- [storybook improvements](https://github.com/brianzinn/react-babylonjs/commit/780497d09fe2e533c99b2f52f9ee1666afea5dc8) - undefined
- [adding storybook config](https://github.com/brianzinn/react-babylonjs/commit/c39301472ee62257921a337546553af55ccbef1e) - undefined
- [adding storybook](https://github.com/brianzinn/react-babylonjs/commit/57bb9d6b3570bb6eb8408a758a3acb78a763fa1b) - undefined
- [bumping version](https://github.com/brianzinn/react-babylonjs/commit/a89bb51f9c298d2dfd9b07ef4732d8294fc09519) - undefined
- [Dynamic terrain updates](https://github.com/brianzinn/react-babylonjs/commit/c4e454e4467252d808a95453893fcec271a896fe) - undefined
- [dynamic terrain cleanup](https://github.com/brianzinn/react-babylonjs/commit/de487080dbd67255ece751f6172f1f0d64168434) - undefined
- [adding callback](https://github.com/brianzinn/react-babylonjs/commit/84a57340654a25fb9caf8ec25c7634383d9f6b14) - undefined
- [fixing dynamic terrain](https://github.com/brianzinn/react-babylonjs/commit/7881ab3e4aeab1163a0ecfd7a281ce03418fc94c) - undefined
- [adding dynamic terrain component](https://github.com/brianzinn/react-babylonjs/commit/2ac84d8c965473f24c08e414dd196a41efdd2a08) - undefined
- [adding dynamic terrain](https://github.com/brianzinn/react-babylonjs/commit/fcb48c12ba698fec777bd3fd3c8d54f6bdb91348) - undefined
- [init commit](https://github.com/brianzinn/react-babylonjs/commit/c10e61878256c3db022d13ae235f56879b10863b) - undefined
- [init commit](https://github.com/brianzinn/react-babylonjs/commit/11c587b5d9b4ed5f40c1300474b9331501282bc2) - undefined
- [adding dynamic terrain](https://github.com/brianzinn/react-babylonjs/commit/5156db936a368c30c14dd5457a2dd6e64e0bd8ec) - undefined
- [First step for #10.  The {className}Props files (now separate from other generated code) can be re-used for compilation and generatedCode.d.ts.](https://github.com/brianzinn/react-babylonjs/commit/fa1aaa90d6b331afd724a883eab75d6ee9b00c8b) - @brianzinn
- [Fix: Color4 does not have equals() until recently.](https://github.com/brianzinn/react-babylonjs/commit/08ec1802f8d63d04addf10eec7d6d38a26d9aad4) - @brianzinn
