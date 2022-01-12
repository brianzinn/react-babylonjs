const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://brianzinn.github.io/react-babylonjs/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://brianzinn.github.io/react-babylonjs/',
    title: "<a href='/'>react-babylonjs</a>",
    githubUrl: 'https://github.com/brianzinn/react-babylonjs',
    helpUrl: '',
    tweetText: '',
    social: null,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'react-babylonjs', link: 'https://github.com/brianzinn/react-babylonjs' }],
    frontline: false,
    ignoreIndex: true,
    title: 'React for Babylon 3D engine',
  },
  siteMetadata: {
    title: 'Documentation | react-babylonjs',
    description: 'React for Babylon 3D engine',
    ogImage: null,
    docsLocation: 'https://brianzinn.github.io/react-babylonjs/',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'react-babylonjs',
      short_name: 'react-babylonjs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
